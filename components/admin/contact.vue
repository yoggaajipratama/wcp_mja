<template>
    <div class="contact-list-container">
        <h1 class="header">Daftar Kontak</h1>

        <!-- Input Pencarian -->
        <div class="search-wrapper">
            <input v-model="searchQuery" type="text" placeholder="Cari berdasarkan nama" class="search-input" />
            <i class="fas fa-search search-icon"></i>
        </div>

        <!-- Tabel Kontak -->
        <div class="table-container">
            <table class="contact-table">
                <thead>
                    <tr>
                        <th><i class="fa fa-refresh pointer" @click="refresh"></i></th>
                        <th>Nama</th>
                        <th>Telepon</th>
                        <th>Email</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(contact, index) in paginatedContacts" :key="contact.id">
                        <td></td>
                        <td>{{ contact.name }}</td>
                        <td>{{ contact.phone }}</td>
                        <td>{{ contact.email }}</td>
                        <td>
                            <button @click="deleteContact(contact.id)" class="btn-delete">Hapus</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Kontrol Paginasi -->
        <div class="pagination-controls">
            <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1"
                class="pagination-btn">Sebelumnya</button>
            <span class="page-indicator">{{ currentPage }} / {{ totalPages }}</span>
            <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages"
                class="pagination-btn">Berikutnya</button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import CryptoJS from "crypto-js";

//////////////////////////
// 1. STATE MANAGEMENT //
//////////////////////////

const contacts = ref([]); // Data kontak
const searchQuery = ref(""); // Input pencarian
const contactsPerPage = 3;
const currentPage = ref(1);

///////////////////////////////
// 2. COMPUTED PROPERTIES //
///////////////////////////////

const totalPages = computed(() => Math.ceil(filteredContacts.value.length / contactsPerPage));

const filteredContacts = computed(() => {
    return contacts.value.filter(contact =>
        contact.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

const paginatedContacts = computed(() => {
    const start = (currentPage.value - 1) * contactsPerPage;
    const end = start + contactsPerPage;
    return filteredContacts.value.slice(start, end);
});

//////////////////////////
// 3. API FUNCTIONS //
//////////////////////////

// Ambil data kontak dari backend saat halaman dimuat
onMounted(async () => {
    await fetchContacts();
});

// Fungsi untuk mengambil semua kontak dari API
async function fetchContacts() {
    const sKey = "s@runggoniT1ungsir4h"
    try {
        const runtimeConfig = useRuntimeConfig()
        const token = runtimeConfig.public.token
        const response = await fetch('/api/contact/getContact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ token: token })
        });
        if (response.ok) {
            const data = await response.json();
            contacts.value = data.map(element => ({
                id: element.contact_id,
                name: CryptoJS.AES.decrypt(element.name, sKey).toString(CryptoJS.enc.Utf8),
                email: CryptoJS.AES.decrypt(element.email, sKey).toString(CryptoJS.enc.Utf8),
                phone: CryptoJS.AES.decrypt(element.phone, sKey).toString(CryptoJS.enc.Utf8)
            }));
        } else {
            alert("Gagal memuat kontak!")
        }
    } catch (error) {
        throw error
    }
}

// Fungsi untuk menghapus kontak dari API
async function deleteContact(id) {

    try {
        const runtimeConfig = useRuntimeConfig()
        const token = runtimeConfig.public.token
        const response = await fetch('/api/contact/deleteContact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ token: token, id: id })
        });

        var dataResponse = await response.json()
        if (dataResponse.message == "ok") {
            const contactIndex = contacts.value.findIndex(c => c.id === id);
            if (contactIndex !== -1) {
                contacts.value.splice(contactIndex, 1);
                alert('Data berhasil terhapus!')
            }
        }
        else {
            alert('Data gagal terhapus!')
        }
    } catch (error) {
        alert('Data gagal terhapus!')
    }
}

//////////////////////////
// 4. EVENT HANDLERS //
//////////////////////////

// Fungsi untuk navigasi paginasi
function goToPage(page) {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
}

// Refresh data
const refresh = async () => {
    await fetchContacts();
}
</script>

<style scoped>
.contact-list-container {
    padding: 30px;
    font-family: 'Roboto', sans-serif;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 900px;
    margin: 40px auto;
}

.header {
    font-size: 28px;
    text-align: center;
    color: #333;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: bold;
}

.search-wrapper {
    position: relative;
    margin-bottom: 20px;
    width: 100%;
}

.search-input {
    width: 100%;
    padding: 12px 40px 12px 40px;
    /* Memberikan ruang yang lebih luas di kiri dan kanan */
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid #ddd;
    outline: none;
    transition: 0.3s;
}

.search-input:focus {
    border-color: #2196F3;
}

.search-icon {
    position: absolute;
    top: 50%;
    left: 12px;
    /* Menyesuaikan posisi ikon agar tidak menutupi teks */
    transform: translateY(-50%);
    color: #2196F3;
}

.table-container {
    margin-top: 30px;
    width: 100%;
    overflow-x: auto;
}

.contact-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.contact-table th,
.contact-table td {
    padding: 12px;
    text-align: left;
}

.contact-table th {
    background-color: #2196F3;
    color: #fff;
    font-weight: bold;
}

.contact-table td {
    border-top: 1px solid #ddd;
}

button {
    padding: 8px 16px;
    background-color: #FF3B30;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 6px;
    transition: 0.3s;
}

button:hover {
    background-color: #FF1F10;
}

.pagination-controls {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.pagination-btn {
    padding: 10px 20px;
    background-color: #2196F3;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;
}

.pagination-btn:hover {
    background-color: #1976D2;
}

.pagination-btn:disabled {
    background-color: #ddd;
    cursor: not-allowed;
}

.page-indicator {
    margin: 0 20px;
    font-size: 16px;
    align-self: center;
    font-weight: bold;
    color: #333;
}

/* Animasi untuk tabel */
.contact-table tr {
    opacity: 0;
    transform: translateY(-10px);
    animation: fadeIn 0.5s forwards;
}

.contact-table tr:nth-child(even) {
    animation-delay: 0.2s;
}

.contact-table tr:nth-child(odd) {
    animation-delay: 0.4s;
}

.pointer {
    cursor: pointer;
}

@keyframes fadeIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {

    .contact-table th,
    .contact-table td {
        padding: 10px;
        font-size: 12px;
    }

    .contact-table {
        font-size: 12px;
    }

    .pagination-btn {
        font-size: 14px;
    }

    .page-indicator {
        font-size: 14px;
    }
}
</style>
