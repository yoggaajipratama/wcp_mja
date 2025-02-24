<template>
        <!-- Topbar (Desktop Only) -->
        <div class="bg-white py-2 shadow-sm d-none d-lg-flex" id="topbar">
            <div class="container-fluid d-flex justify-content-between align-items-center">
                <!-- Logo dan Teks -->
                <div class="d-flex align-items-center">
                    <img :src="`/img/logo/logo-2.jpeg`" alt="General Trading, Konstruksi, Transporter Limbah B3 | Logo PT Marier Jaya Abadi Bandung" class="logo-img me-3"
                        style="height: 50px; width: 50px; object-fit: cover;"/>
                    <h1 class="fw-bold m-0 fw-lato-bold text-logo">
                        <a href="/" style="text-decoration: none; color: black;">PT MARIER <span class="text-primary">JAYA ABADI</span></a>
                    </h1>
                </div>

                <!-- Kontak Info -->
                <div class="d-flex align-items-center text-end">
                    <span class="me-3 small">📍 Jl. Galanggang No 109 Batujajar- Bandung Barat 40561</span>
                    <span class="me-3 small">📞 +62 822-1192-8800</span>
                    <span class="small">✉️ mja@marierjayaabadi.com</span>
                </div>
            </div>
        </div>


        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top" id="navbar" v-if="dataLang">
            <div class="container-fluid">
                <a class="navbar-brand d-lg-none" href="/">
                    <img :src="`/img/logo/logo-2.jpeg`" alt="Logo" class="logo-img me-3" />
                    <span class="fw-bold">Marier Jaya Abadi</span>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto flex-row flex-wrap">
                        <li class="nav-item">
                            <a class="nav-link text-center" href="/">
                                <!-- <i class="fa fa-home fa-lg"></i> -->
                                <img :src="`/img/icons/home.svg`" alt="" style="width: 24px; height: 24px;">
                                <p class="small mb-0">{{ dataLang[lang].nav.home }}</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-center" href="/gallery">
                                <!-- <i class="fa fa-image fa-lg"></i> -->
                                <img :src="`/img/icons/gallery.svg`" alt="" style="width: 24px; height: 24px;">
                                <p class="small mb-0">{{ dataLang[lang].nav.gallery }}</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-center" href="/portfolio">
                                <!-- <i class="fa fa-briefcase fa-lg"></i> -->
                                <img :src="`/img/icons/office_bag.svg`" alt="" style="width: 24px; height: 24px;">
                                <p class="small mb-0">{{ dataLang[lang].nav.portfolio }}</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-center" href="/registration">
                                <!-- <i class="fa fa-user-plus fa-lg"></i> -->
                                <img :src="`/img/icons/add.svg`" alt="" style="width: 24px; height: 24px;">
                                <p class="small mb-0">{{ dataLang[lang].nav.registration }}</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-center" href="https://wa.me/+6282211928800" target="_blank">
                                <!-- <i class="fa fa-comments fa-lg"></i> -->
                                <img :src="`/img/icons/chat.svg`" alt="" style="width: 24px; height: 24px;">
                                <p class="small mb-0">{{ dataLang[lang].login.title }}</p>
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link text-center dropdown-toggle" href="#" id="languageDropdown" role="button"
                                data-bs-toggle="dropdown">
                                <!-- <i class="fa fa-globe fa-lg"></i> -->
                                <img :src="`/img/icons/globe.svg`" alt="" style="width: 24px; height: 24px;">
                                <p class="small mb-0">{{ dataLang[lang].nav.language }}</p>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><a class="dropdown-item" href="#" @click="changeLanguage('id')">Indonesia</a></li>
                                <li><a class="dropdown-item" href="#" @click="changeLanguage('en')">English</a></li>
                                <li><a class="dropdown-item" href="#" @click="changeLanguage('jp')">日本語</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link text-center dropdown-toggle" href="#" id="profileDropdown" role="button"
                                data-bs-toggle="dropdown">
                                <!-- <i class="fa fa-building fa-lg"></i> -->
                                <img :src="`/img/icons/building.svg`" alt="" style="width: 24px; height: 24px;">
                                <p class="small mb-0">{{ dataLang[lang].nav.profile }}</p>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><a class="dropdown-item" href="/profile">{{ dataLang[lang].nav.company_profile
                                        }}</a></li>
                                <li><a class="dropdown-item" href="/legality">{{ dataLang[lang].nav.legality }}</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <NuxtPage />
</template>

<script setup>
import { onMounted, ref } from 'vue';
const { $cookies } = useNuxtApp();

const dataLang = ref(null);
const lang = ref('');

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
});

const changeLanguage = (newLang) => {
    $cookies.set('lang', newLang);
    window.location.reload();
};
</script>

<style scoped>
#navbar {
    font-size: 14pt !important;
}

.dropdown-item {
    font-size: 12pt !important;
}

/* Logo Image Styling */
.logo-img {
    width: 32px;
    height: auto;
    border-radius: 50%;
}

/* Topbar and Navbar Styling */
#topbar {
    padding: 10px 0;
    font-size: 12pt !important;
}

/* Navbar Responsive Adjustments */
.navbar-nav {
    flex-direction: row;
}

.nav-link {
    padding: 0.5rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    * {
        /* border: solid; */
        text-align: center;
    }

    #topbar {
        display: none;
    }

    #navbar {
        font-size: 10pt !important;
    }

    .dropdown-item {
        font-size: 9pt !important;
    }

    .navbar-nav {
        flex-direction: row !important;
        justify-content: center;
    }

    .navbar-toggler {
        margin: 0.5rem;
    }
}

@media (min-width: 992px) and (max-width: 1440px) {
    #topbar {
        font-size: 10pt !important;
    }

    .text-logo {
        font-size: 12pt !important;
    }

    #navbar {
        font-size: 12pt !important;
    }
}

@media (min-width: 1441px) {
    #topbar {
        font-size: 14pt !important;
    }

    #navbar {
        font-size: 14pt !important;
    }
}
</style>
