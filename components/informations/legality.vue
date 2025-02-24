<template>
    <div>
        <section id="values" class="lagality-section" v-if="dataLang">
            <h1 class="text-center">{{ dataLang[lang].legality.title }}</h1>
            <div class="grid">
                <div v-for="(lagality, index) in values" :key="index" class="card">
                    <div class="image-wrapper">
                        <img :src="lagality.image" alt="General Trading, Konstruksi, Transporter Limbah B3 | Legalitas PT Marier Jaya Abadi Bandung" class="lagality-image" />
                    </div>
                    <h4 class="lagality-title">{{ lagality.name }}</h4>
                    <p class="text-center lagality-description" v-html="lagality.description"></p>
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
const values = ref([
    {
        image: '/img/icons/garuda.png',
        name: 'AKTE PERUSAHAAN',
        description: `
        Nomor : 641. 25 September 2023<br>
        Notaris : Rima Nurwidianingsih, S.H., M.Kn
        `
    },
    {
        image: '/img/icons/pengayoman.png',
        name: 'AKTE PERUSAHAAN',
        description: `
        Nomor : AHU-0058602.AH.01.02 <br>
        Tahun : 2023
        `
    },
    {
        image: '/img/icons/bkpm.png',
        name: 'NOMOR INDUK BERUSAHA (NIB) PERUSAHAAN',
        description: `
        Nomor : 2806220051172
        `
    },
    {
        image: '/img/icons/ndr.png',
        name: 'NOMOR POKOK WAJIB PAJAK (NPWP) PERUSAHAAN',
        description: `
        Nomor : 65.955.389.5-421.000
        `
    },
    {
        image: '/img/icons/bandung_barat.png',
        name: 'SURAT KETERANGAN DOMISILI PERUSAHAAN',
        description: `
        Nomor : 271/2004/DS/V/2023
        `
    },
    {
        image: '/img/icons/kehutani.png',
        name: `
        SK REKOMENDASI PENGANGKUTAN LB3
        KEMENTERIAN LINGKUNGAN HIDUP DAN
        KEHUTANAN REPUBLIK INDONESIA`,
        description: `
        Nomor : S.1054/PSLB3-PLB3/PK/PLB.3/03/2024
        `
    }
])
</script>

<style scoped>
.lagality-section {
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

.lagality-title {
    font-size: 1rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 0.5rem;
}

.lagality-description {
    font-size: 12px;
    color: #555;
    text-align: center;
}

.lagality-image {
    width: 100px;
    height: 100px;
    border-radius: 0%;
    object-fit: cover;
}

@media(max-width: 768px) {
    .grid {
        grid-template-columns: repeat(1, 3fr);
    }
}
</style>