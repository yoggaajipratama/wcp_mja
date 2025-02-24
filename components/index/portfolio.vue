<template>
    <div>
        <section id="portfolio" class="portfolio-section" v-if="dataLang">
            <h1 class="text-center">{{ dataLang[lang].portfolio.title }}</h1>
            <div class="grid">
                <div v-for="(portfolio, index) in portfolio" :key="index" class="card">
                    <div class="image-wrapper">
                        <img loading="lazy" :src="image(portfolio.image)" alt="General Trading, Konstruksi, Transporter Limbah B3 | PT Marier Jaya Abadi Bandung" class="portfolio-image" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const { $cookies } = useNuxtApp()

const dataLang = ref(null)
const lang = ref('')

const fetchCompanies = async () => {
    try {
        const response = await fetch('/api/portfolio/');
        var dataPortfolio = await response.json();
        portfolio.value = dataPortfolio
    } catch (error) {
        throw error
    }
}

const image = (imageName) => {
    return imageName ? `/api/image/${imageName}` : '/default-image.jpg'
}

onMounted(async () => {
    try {
        if (!$cookies.get('lang')) {
            $cookies.set('lang', 'id')
        }
        const loadDataLang = await fetch('/languages.json')
        dataLang.value = await loadDataLang.json()
        lang.value = $cookies.get('lang')
        fetchCompanies()
    } catch (error) {
        throw error
    }

})
const portfolio = ref(null)
</script>

<style scoped>
.portfolio-section {
    padding: 2rem;
    background-color: #f9f9f9;
    /* background-color: red; */
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
}

.card {
    /* background: blue; */
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.2s;
}

.card:hover {
    transform: translateY(-5px);
}

/* .image-wrapper {
    margin-bottom: 1rem;
} */

.portfolio-title {
    font-size: 1.25rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 0.5rem;
}

.portfolio-description {
    font-size: 12px;
    color: #555;
    text-align: center;
}

.portfolio-image {
    /* width: auto;
    height: 50px;
    object-fit: cover; */
    max-width: 200px;
    max-height: 100px;
    object-fit: cover;
}

@media(max-width: 768px) {
    .grid {
        grid-template-columns: repeat(1, 3fr);
    }
}
</style>