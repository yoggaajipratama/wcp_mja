<template>
    <div class="table-container">
        <h2 class="title">Daftar Perusahaan</h2>

        <input v-model="searchQuery" type="text" placeholder="Cari perusahaan..." class="search-input" />

        <button class="add-btn" @click="openModal()">
            <i class="fa fa-plus"></i> Tambah Perusahaan
        </button>

        <table class="custom-table">
            <thead>
                <tr>
                    <th @click="sortData('index')">No</th>
                    <th>Gambar</th>
                    <th @click="sortData('name')">Nama Perusahaan</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(company, index) in paginatedCompanies" :key="company.id || index"
                    @dblclick="openModal(company)">
                    <td>{{ index + 1 + (currentPage - 1) * itemsPerPage }}</td>
                    <td>
                        <img :src="image(company.image)" alt="Gambar" class="logo-img" />
                    </td>
                    <td>{{ company.name }}</td>
                    <td>
                        <button @click.stop="openModal(company)" class="edit-btn">
                            <i class="fa fa-pencil"></i>
                        </button>
                        <button @click.stop="deleteCompany(company.portfolio_id)" class="delete-btn">
                            <i class="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="pagination">
            <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
            <span>Page {{ currentPage }} of {{ totalPages }}</span>
            <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
        </div>

        <div v-if="showModal" class="modal" @click="closeModal">
            <div class="modal-content" @click.stop>
                <span class="close-btn" @click="closeModal">&times;</span>
                <h3>{{ isEditMode ? 'Edit Perusahaan' : 'Tambah Perusahaan' }}</h3>
                <form @submit.prevent="saveCompany">
                    <div class="form-group">
                        <label class="form-label" for="name">Nama Perusahaan:</label>
                        <input class="form-control" v-model="currentCompany.name" type="text" id="name" required />
                    </div>

                    <div class="form-group">
                        <label class="form-label" for="image">Gambar:</label>
                        <input class="form form-control" v-if="currentCompany.portfolio_id == null" type="file"
                            @change="onImageChange" accept="image/*" />
                        <div class="text-center" v-if="currentCompany.portfolio_id != null">
                            <!-- <img :src="currentCompany.image || defaultImage" alt="Gambar" class="logo-preview"
                                v-if="currentCompany.image" /> -->
                            <input class="form form-control" type="file" @change="onImageChange" accept="image/*" />
                        </div>
                    </div>

                    <button type="submit" class="save-btn">{{ isEditMode ? 'Simpan' : 'Tambah' }}</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';

const companies = ref([]);
const showModal = ref(false);
const isEditMode = ref(false);
const currentCompany = ref({ portfolio_id: null, name: '', image: '' });
const searchQuery = ref('');
const currentPage = ref(1);
const itemsPerPage = 3;
const sortKey = ref('name');
const sortAsc = ref(true);

const fetchCompanies = async () => {
    try {
        const response = await fetch('/api/portfolio/');
        companies.value = await response.json();
    } catch (error) {
        throw error
    }
};

onMounted(fetchCompanies);

// 🔹 Reset currentPage ke 1 saat searchQuery berubah
watch(searchQuery, () => {
    currentPage.value = 1;
});

const filteredCompanies = computed(() => {
    return companies.value.filter(company =>
        company.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

const paginatedCompanies = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return filteredCompanies.value.slice(start, start + itemsPerPage);
});

const totalPages = computed(() => {
    return Math.max(1, Math.ceil(filteredCompanies.value.length / itemsPerPage));
});

const openModal = (company = { portfolio_id: null, name: '', image: '' }) => {
    currentCompany.value = { ...company };
    isEditMode.value = !!company.portfolio_id;
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};

const saveCompany = async () => {
    const formData = new FormData();
    formData.append('name', currentCompany.value.name);

    if (currentCompany.value.image instanceof File) {
        formData.append('image', currentCompany.value.image);
    }

    try {
        let response;
        if (isEditMode.value) {
            formData.append('action', 'edit');
            formData.append('portfolio_id', currentCompany.value.portfolio_id);

            response = await fetch(`/api/portfolio`, {
                method: 'POST',
                body: formData
            });
        } else {
            formData.append('action', 'add');
            response = await fetch('/api/portfolio', {
                method: 'POST',
                body: formData
            });
        }

        const responseMessage = await response.json();
        if (responseMessage.message === "ok") {
            alert("Penyimpanan berhasil!");
            fetchCompanies();
            closeModal();
        } else {
            alert("Penyimpanan gagal!");
            closeModal();
        }
    } catch (error) {
        alert("Penyimpanan gagal!");
        closeModal();
    }
};

const deleteCompany = async (id) => {
    if (confirm('Hapus perusahaan ini?')) {
        const formData = new FormData();
        formData.append('action', 'delete')
        formData.append('portfolio_id', id)

        let response = await fetch(`/api/portfolio`, {
            method: 'POST',
            body: formData
        });

        const responseMessage = await response.json();
        if (responseMessage.message === "ok") {
            alert("Berhasil dihapus!");
            fetchCompanies();
            currentPage.value = 1;
        } else {
            console.log(responseMessage)
            alert("Gagal dihapus!");
            fetchCompanies();
            currentPage.value = 1;
        }
    }
};

const changePage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
};

const sortData = (key) => {
    if (sortKey.value === key) {
        sortAsc.value = !sortAsc.value;
    } else {
        sortKey.value = key;
        sortAsc.value = true;
    }

    companies.value = [...companies.value].sort((a, b) => {
        return (a[key] > b[key] ? 1 : -1) * (sortAsc.value ? 1 : -1);
    });
};

const onImageChange = ({ target: { files } }) => {
    if (files[0]) {
        currentCompany.value.image = files[0];
    }
};

const image = (imageName) => {
    return imageName ? `/api/image/${imageName}` : '/default-image.jpg'
}

</script>

<style scoped>
.table-container {
    width: 100%;
    max-width: 100%;
    margin: 2rem auto;
    background: #f5f5f5;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
    text-align: center;
    font-size: 24px;
    color: #333;
    font-weight: bold;
    margin-bottom: 16px;
}

.search-input {
    width: 100%;
    padding: 10px;
    margin-bottom: 16px;
    border-radius: 4px;
    border: 1px solid #dcdcdc;
    background: #fff;
}

.custom-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    background: #fff;
    border: 1px solid #dcdcdc;
}

th,
td {
    padding: 12px;
    border: 1px solid #e1e1e1;
    text-align: left;
    font-size: 14px;
}

th {
    background: #f1f1f1;
    color: #333;
    font-weight: bold;
    cursor: pointer;
}

tr:hover {
    background-color: #f0f8ff;
    cursor: pointer;
}

tr:nth-child(even) {
    background: #f9f9f9;
}

.logo-img {
    width: auto;
    max-width: 200px;
    height: 40px;
    border-radius: 4px;
    object-fit: cover;
}

.edit-btn {
    background: #007bff;
    color: white;
    padding: 6px 10px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-size: 12px;
}

.edit-btn:hover {
    background: #0056b3;
}

.add-btn {
    background: #007bff;
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
    margin-bottom: 16px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    font-size: 12px;
    border: none;
}

.add-btn i {
    margin-right: 8px;
}

.pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
}

button {
    background: #007bff;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
}

button:disabled {
    background: #dcdcdc;
    cursor: not-allowed;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 4px;
    width: 400px;
    position: relative;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 16px;
    color: #333;
}

.form-group {
    margin-bottom: 10px;
}

label {
    display: block;
    font-size: 12px;
    font-weight: normal;
    margin-bottom: 5px;
}

/* input[type="text"],
input[type="file"] {
    width: 100%;
    padding: 8px;
    font-size: 12px;
    border-radius: 4px;
    border: 1px solid #dcdcdc;
    margin-top: 5px;
} */

.logo-container {
    /* display: flex; */
    align-items: center;
    text-align: center;
    justify-content: space-between;
}

.logo-preview {
    width: auto;
    height: 50px;
    border-radius: 10px;
    /* margin-right: 15px; */
    margin: 10px;
    object-fit: cover;
    object-position: center;
    /* box-shadow: 1px 2px #7A7A7A; */
}

.save-btn {
    background-color: #007bff;
    color: white;
    padding: 8px 16px;
    font-size: 12px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 15px;
}

.save-btn:hover {
    background-color: #0056b3;
}

.delete-btn {
    background: #e53935;
    color: white;
    padding: 6px 10px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-size: 12px;
    margin-left: 8px;
}

.delete-btn:hover {
    background: #d32f2f;
}
</style>