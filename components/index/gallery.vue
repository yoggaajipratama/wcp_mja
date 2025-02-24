<template>
    <div>
        <div v-if="dataLang">
            <!-- Gallery Section -->
            <h1 id="gallery" class="text-center sub-title">{{ dataLang[lang].gallery.title }}</h1>
            <!-- Category Filter Section -->
            <div class="category-filter">
                <select name="category" v-model="selectedCategory" @change="filterByCategory">
                    <option value="all" class="form-option">All</option>
                    <option value="general trading">General Trading</option>
                    <option value="konstruksi">Konstruksi</option>
                    <option value="transporter">Transporter</option>
                </select>
            </div>
            <div :class="['gallery', { 'show-more': showMore }]">
                <div v-for="(item, index) in visibleItems()" :key="index" class="gallery-item">
                    <img loading="lazy" :src="image(item.image)" alt="General Trading, Konstruksi, Transporter Limbah B3 | PT Marier Jaya Abadi Bandung" @click="openModal(item.image)" />
                </div>
            </div>
            <div class="text-center">
                <button v-if="!showMore" class="hero-button" @click="loadMore">
                    {{ dataLang[lang].gallery.more }}
                </button>
                <button v-if="showMore" class="hero-button" @click="loadLess">
                    {{ dataLang[lang].gallery.less }}
                </button>
            </div>
        </div>

        <!-- Modal Section -->
        <div :class="['modal-overlay', { hidden: !isModalOpen }]" @click.self="closeModal">
            <div class="modal-content">
                <span class="text-center modal-close" @click="closeModal">
                    <!-- <img src="/gif/close.gif" alt=""> -->
                    &times;
                </span>
                <button class="modal-nav left" v-if="selectedCategory == 'all'" @click.stop="prevImage">❮</button>
                <img :src="image(modalImage)" alt="Full Image" class="modal-image" />
                <button class="modal-nav right" v-if="selectedCategory == 'all'" @click.stop="nextImage">❯</button>

                <!-- Fullscreen Button -->
                <button class="fullscreen-btn" @click="toggleFullscreen">
                    <i class="fa fa-expand"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
const { $cookies } = useNuxtApp();

const dataLang = ref(null);
const lang = ref('');
const isModalOpen = ref(false);
const currentImageIndex = ref(0);
const isFullscreen = ref(false); // State for fullscreen mode

const items = ref([]);

const modalImage = ref('');
const selectedCategory = ref('all');

const openModal = (image) => {
    // currentImageIndex.value = index;
    modalImage.value = image;
    isModalOpen.value = true;
};

const image = (imageName) => {
    return imageName ? `/api/image/${imageName}` : '/default-image.jpg'
}

const closeModal = () => {
    // Cek apakah saat ini ada elemen dalam fullscreen
    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
    }

    // Tutup modal setelah memastikan keluar dari fullscreen
    isModalOpen.value = false;
};


const prevImage = () => {
    if (currentImageIndex.value > 0) {
        currentImageIndex.value--;
        modalImage.value = items.value[currentImageIndex.value].image;
    }
};

const nextImage = () => {
    if (currentImageIndex.value < items.value.length - 1) {
        currentImageIndex.value++;
        modalImage.value = items.value[currentImageIndex.value].image;
    }
};

const toggleFullscreen = () => {
    isFullscreen.value = !isFullscreen.value;
    if (isFullscreen.value) {
        const element = document.querySelector('.modal-content');
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { // Firefox
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { // IE/Edge
            element.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
    }
};

onMounted(async () => {
    try {
        if (!$cookies.get('lang')) {
            $cookies.set('lang', 'id');
        }
        const loadDataLang = await fetch('/languages.json');
        dataLang.value = await loadDataLang.json();
        lang.value = $cookies.get('lang');

        const response = await fetch('/api/gallery/');
        items.value = await response.json();
    } catch (error) {
        throw error
    }
});

const showMore = ref(false);
const visibleItems = () => {
    let filteredItems = items.value;
    if (selectedCategory.value !== 'all') {
        filteredItems = filteredItems.filter(item => item.category === selectedCategory.value);
    }
    return showMore.value ? filteredItems : filteredItems.slice(0, 6);
};

const loadMore = () => {
    showMore.value = true;
};
const loadLess = () => {
    showMore.value = false;
};

const filterByCategory = () => {
    // Trigger a re-render when the category is changed
    visibleItems();
};
</script>

<style scoped>
/* Add some basic styling for the category filter */
.category-filter {
    margin: 10px 0;
    text-align: center;
}

.category-filter select {
    padding: 8px 12px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
}

/* Modal Styles */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    visibility: visible;
    opacity: 1;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}

.modal-overlay.hidden {
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
}

.modal-content {
    /* min-height: 90vh; */
    min-width: 50vw;
    min-height: 50vh;
    background: white;
    /* background: transparent; */
    padding: 10px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.modal-image {
    /* max-width: 400px; */
    max-height: 400px;
    border-radius: 8px;
}

.modal-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    padding: 0.5rem 0.5rem;
    z-index: 1;
}

.modal-nav.left {
    left: 2px;
}

.modal-nav.right {
    right: 2px;
}

.modal-close {
    position: absolute;
    top: 0;
    right: 1px;
    width: 40px;
    /* Atur lebar tombol */
    height: 40px;
    /* Atur tinggi tombol sama dengan lebar */
    color: #333;
    border: none;
    /* background-color: white; */
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0;
    /* Sesuaikan padding jika diperlukan */
    z-index: 2;
    border-radius: 50%;
    /* Membuat tombol berbentuk lingkaran */
}

.modal-close:hover {
    color: #333;
}

/* Fullscreen Button */
.fullscreen-btn {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    font-size: 2rem;
    padding: 0.5rem;
    cursor: pointer;
    z-index: 2;
}

/* Responsive Styling */
@media (max-width: 768px) {
    .modal-close {
        display: none !important;
    }

    .modal-content {
        min-width: auto;
        min-height: 100px;
        background-color: transparent;
    }

    .modal-image {
        max-height: 200px;
        border-radius: 8px;
    }

    .modal-nav {
        top: 40%;
        padding: 0.5rem 0.5rem;
        
    }

    .modal-nav.left {
        left: 10px;
    }

    .modal-nav.right {
        right: 10px;
    }

    .fullscreen-btn {
        display: none;
    }
}
</style>
