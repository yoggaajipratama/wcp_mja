<template>
    <!-- Jumbotron with Background Image Carousel -->
    <div id="jumbotronCarousel" class="carousel slide custom-carousel-class" v-if="dataLang">
        <div class="carousel-inner position-relative">
            <div class="carousel-item active">
                <div class="jumbotron d-flex align-items-center justify-content-center">
                    <!-- Dynamic Background Image -->
                    <div class="background-image animate-fade" :style="{
                        backgroundImage: 'url(' + backgroundImages[currentImageIndex].url + ')',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transform: 'scale(' + scaleValue + ')'
                    }"></div>

                    <!-- Text and Button Layer (Not Affected by Filter) -->
                    <div class="text-overlay">
                        <h1 class="display-1 fw-bold text-uppercase text-shadow animate-title gradient-text">
                            {{ texts.jumbotron.title }}
                        </h1>
                        <p class="quote-text animate-quote">{{ dataLang[lang].hero.description }}</p>
                        <div class="call">
                            <a href="https://wa.me/+6282211928800" target="_blank"
                                class="btn btn-primary mt-3 animate-button"><i class="fa fa-phone"></i>&nbsp;{{
                                    dataLang[lang].hero.button }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Carousel Controls -->
         <div class="slide-button">
             <button class="carousel-control-prev" type="button" @click="previousImage">
                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                 <span class="visually-hidden">{{ texts.jumbotron.prev }}</span>
             </button>
             <button class="carousel-control-next" type="button" @click="nextImage">
                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
                 <span class="visually-hidden">{{ texts.jumbotron.next }}</span>
             </button>
         </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
const { $cookies } = useNuxtApp();

const dataLang = ref(null);
const lang = ref('');

const backgroundImages = ref([
    { url: '/img/truck_1.webp' },
    { url: '/img/truck_2.webp' },
    { url: '/img/news_1.webp' }
]);

const currentImageIndex = ref(0);
const showInitialZoom = ref(true);
const scaleValue = ref(1);

let imageSwitchInterval;

function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scaleValue.value = 1 + Math.min(scrollTop / 1000, 0.5);
}

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

    // Handle scroll zoom effect
    window.addEventListener('scroll', handleScroll);

    // Image switch at intervals
    imageSwitchInterval = setInterval(() => {
        nextImageWithAnimation();
    }, 6000);
});

onUnmounted(() => {
    clearInterval(imageSwitchInterval);
    window.removeEventListener('scroll', handleScroll);
});

function nextImageWithAnimation() {
    showInitialZoom.value = true;
    setTimeout(() => {
        showInitialZoom.value = false;
        nextImage();
    }, 2000);
}

function nextImage() {
    currentImageIndex.value = (currentImageIndex.value + 1) % backgroundImages.value.length;
}

function previousImage() {
    currentImageIndex.value = (currentImageIndex.value - 1 + backgroundImages.value.length) % backgroundImages.value.length;
}

const texts = {
    jumbotron: {
        title: 'Connecting is Everything',
        quote: 'Kami berkomitmen menjadi perusahaan yang kompetitif, andal, dan terpercaya, selalu memberikan solusi inovatif dan pelayanan terbaik bagi setiap pelanggan kami.',
        contactButton: 'Hubungi Kami',
        prev: 'Previous',
        next: 'Next'
    }
};
</script>

<style scoped>
/* Jumbotron Styling */
.jumbotron {
    position: relative;
    height: 75vh;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.background-image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-position: center;
    filter: brightness(49%);
    transition: transform 3s ease-out;
}

.text-overlay {
    position: relative;
    z-index: 1;
    padding: 2rem;
    border-radius: 8px;
    text-align: left;
    max-width: 80%;
    left: 20px;
}

h1 {
    color: white;
    font-size: 4rem;
}

.quote-text {
    font-size: 1.5rem;
    color: #f8f9fa;
    margin-top: 1.5rem;
    font-style: italic;
    line-height: 1.5;
    text-align: left;
    max-width: 90%;
    margin-left: 0;
    padding-left: 20px;
    border-left: 4px solid #ffffff;
}

.call a:hover {
    background-color: red;
}

/* Animations */
.animate-title {
    animation: fadeInUp 1.5s ease-in-out;
}

.animate-quote {
    animation: fadeInLeft 1.5s ease-in-out;
}

.gradient-text {
    /* background: linear-gradient(45deg, yellow, green, #0B5ED7, yellow); */
    background: linear-gradient(45deg, #0B5ED7, white, rgb(110, 110, 110), rgb(9, 204, 204));
    background-size: 300% 300%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    will-change: background-position;
    animation: gradientAnimation 6s ease infinite;
}

@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInLeft {
    0% {
        opacity: 0;
        transform: translateX(-30px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes gradientAnimation {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

@media (max-width: 768px) {
    .jumbotron {
        height: 70vh;
    }

    .text-overlay {
        /* border: solid; */
        left: 0%;
        min-width: 90vw;
        max-width: 90vw;
    }

    h1 {
        text-align: center;
        align-items: center;
        font-size: 2.2rem;
    }

    .quote-text {
        align-items: center;
        font-size: 1rem;
    }

    .call {
        text-align: center;
        align-items: center;
    }
}

@media (min-width: 1024px) and (max-width: 1440px) {
    .jumbotron {
        height: 75vh;
    }

    h1 {
        font-size: 5.5rem;
    }

    .quote-text {
        font-size: 1.2rem;
    }
}

@media (min-width: 1441px) {
    .jumbotron {
        top: -20vh;
        height: 120vh;
    }

    h1 {
        font-size: 9.5rem;
    }

    .quote-text {
        font-size: 1.5rem;
    }

    .call a {
        font-size: 18pt;
    }
}
</style>