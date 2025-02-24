<template>
    <div>
        <div v-if="dataLang">
            <section id="overview" class="registration-section">
                <div class="registration-container">
                    <!-- Column for Animation/Image -->
                    <div class="d-flex justify-content-center align-items-center logo-container">
                        <img src="/img/logo/logo-2.jpeg" loading="lazy"
                            alt="General Trading, Konstruksi, Transporter Limbah B3 | Logo PT Marier Jaya Abadi Bandung" class="logo-img me-3 rounded-circle logo-animate" />
                    </div>

                    <!-- Registration Form Column -->
                    <div class="form-container">
                        <h1 class="sub-title">{{ dataLang[lang].history.title }}</h1>
                        <div class="p-description" v-html="dataLang[lang].history.description"></div>
                        <div class="vm">
                            <button class="hero-button vision-btn" @click="showPopUp('visi')">{{ dataLang[lang].vision.vision_button }}</button>
                            <button class="hero-button mission-btn" @click="showPopUp('misi')">{{ dataLang[lang].mission.mission_button }}</button>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Modal for Visi/Misi -->
            <div v-if="isModalVisible" class="modal-overlay">
                <div class="modal-content animate-modal bg-white rounded">
                    <h3>{{ modalTitle }}</h3>
                    <div class="p-description" v-html="modalContent"></div>
                    <button class="hero-button" @click="closeModal">{{ close_button }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { toRaw, ref, nextTick, onMounted } from 'vue';
const { $cookies } = useNuxtApp();

const dataLang = ref(null);
const lang = ref('');
const isModalVisible = ref(false);
const modalTitle = ref("");
const modalContent = ref("");
const close_button = ref("");

const showPopUp = (type) => {
    if (type === "visi") {
        modalTitle.value = dataLang.value[lang.value].vision.title;
        modalContent.value = dataLang.value[lang.value].vision.description;
        close_button.value = dataLang.value[lang.value].vision.close_button;
    } else if (type === "misi") {
        modalTitle.value = dataLang.value[lang.value].mission.title;
        modalContent.value = dataLang.value[lang.value].mission.description;
        close_button.value = dataLang.value[lang.value].mission.close_button;
    }
    isModalVisible.value = true;

    nextTick(() => {
        document.querySelector('.modal-overlay').classList.add('fade-in');
    });
};

const closeModal = () => {
    const modalOverlay = document.querySelector('.modal-overlay');
    modalOverlay.classList.remove('fade-in');
    modalOverlay.classList.add('fade-out');

    setTimeout(() => {
        isModalVisible.value = false;
        modalOverlay.classList.remove('fade-out');
    }, 300);
};

onMounted(async () => {
    try {
        if (!$cookies.get('lang')) {
            $cookies.set('lang', 'id');
        }
        const loadDataLang = await fetch('/languages.json');
        dataLang.value = await loadDataLang.json();
        lang.value = $cookies.get('lang');
    } catch (error) {
        throw error
    }

    // Scroll event for logo zoom effect
    window.addEventListener('scroll', handleScroll);
});

const handleScroll = () => {
    const logo = document.querySelector('.logo-animate');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (logo) {
        logo.style.transform = `scale(${1 + Math.min(scrollTop / 2000, 0.3)})`;
    }
};
</script>

<style scoped>
/* Modal Animations */
.modal-overlay {
    opacity: 0;
    visibility: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: rgba(0, 0, 0, 0.5); */
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
}

.modal-overlay.fade-in {
    opacity: 1;
    visibility: visible;
}

.modal-overlay.fade-out {
    opacity: 0;
    visibility: hidden;
}

.animate-modal {
    animation: slideIn 0.4s ease-out;
}

@keyframes slideIn {
    0% {
        transform: translateY(-50px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

/* Logo Zoom Scroll Effect */
.logo-animate {
    transition: transform 0.4s ease-in-out;
}
</style>
