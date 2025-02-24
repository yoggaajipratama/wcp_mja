<template>
    <div>
        <section id="services" class="service-section" v-if="dataLang">
            <h1 class="text-center sub-title">{{ dataLang[lang].title_service }}</h1>
            <div class="grid">
                <div v-for="(service, index) in dataLang[lang].service" :key="index" class="card">
                    <div class="image-wrapper">
                        <img loading="lazy" :src="service.image" alt="General Trading, Konstruksi, Transporter Limbah B3 | PT Marier Jaya Abadi Bandung" class="service-image" />
                    </div>
                    <h2 class="service-title"><b>{{ service.name }}</b></h2>
                    <p class="text-justify p-description">{{ service.description }}</p>
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
onMounted(async () => {
    try {
        if (!$cookies.get('lang')) {
            $cookies.set('lang', 'id')
        }
        const loadDataLang = await fetch('/languages.json')
        dataLang.value = await loadDataLang.json()
        lang.value = $cookies.get('lang')
    } catch (error) {
        throw error
    }
})
</script>

<style scoped>
.service-section {
    padding: 2rem;
    background-color: #f9f9f9;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
}

.card {
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.2s;
}

.card:hover {
    transform: translateY(-5px);
}

.image-wrapper {
    margin-bottom: 1rem;
}

.service-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.service-title {
    font-size: 1.25rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 0.5rem;
}

@media(max-width: 768px) {
    .grid {
        grid-template-columns: repeat(1, 3fr);
    }
}
</style>