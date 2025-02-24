<template>
    <div>
        <section id="values" class="value-section" v-if="dataLang">
            <h1 class="text-center sub-title">{{ dataLang[lang].title_value }}</h1>
            <div class="grid">
                <div v-for="(value, index) in dataLang[lang].value" :key="index" class="card">
                    <div class="image-wrapper">
                        <img :src="value.image" alt="Values Image" class="value-image" />
                    </div>
                    <h3 class="value-title">{{ value.name }}</h3>
                    <p class="text-center p-description">{{ value.description }}</p>
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
.value-section {
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

.value-title {
    font-size: 1.25rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 0.5rem;
}

.value-image {
    width: auto;
    height: 100px;
    object-fit: cover;
}

@media(max-width: 768px) {
    .grid {
        grid-template-columns: repeat(1, 3fr);
    }
}
</style>