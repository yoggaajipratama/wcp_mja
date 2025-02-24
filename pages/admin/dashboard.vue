<template>
    <div class="admin-container">
        <aside class="sidebar">
            <ul>
                <li @click="setActiveMenu('dashboard')" :class="{ 'active': activeMenu === 'dashboard' }">
                    <i class="fas fa-tachometer-alt"></i> Dasbor
                </li>
                <li @click="setActiveMenu('portfolio')" :class="{ 'active': activeMenu === 'portfolio' }">
                    <i class="fas fa-briefcase"></i> Portofolio
                </li>
                <li @click="setActiveMenu('gallery')" :class="{ 'active': activeMenu === 'gallery' }">
                    <i class="fas fa-images"></i> Galeri
                </li>
                <li @click="setActiveMenu('contact')" :class="{ 'active': activeMenu === 'contact' }">
                    <i class="fas fa-address-book"></i> Kontak
                </li>
                <li>
                    <button class="btn form-control p-2 btn-danger" @click="logout">
                        <i class="fas fa-sign-out-alt" /> Logout
                    </button>
                </li>
            </ul>
        </aside>

        <main class="main-content">
            <Dashboard v-show="activeMenu === 'dashboard'" />
            <Portfolio v-show="activeMenu === 'portfolio'" />
            <Gallery v-show="activeMenu === 'gallery'" />
            <Contact v-show="activeMenu === 'contact'" />
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const { $cookies } = useNuxtApp();

onMounted(() => {
    try {
        if (!$cookies.get('auth')) {
            window.location.href = "/admin"
        }
    } catch (error) {
        throw error
    }

})

import Dashboard from '~/components/admin/dashboard.vue';
import Portfolio from '~/components/admin/portfolio.vue';
import Gallery from '~/components/admin/gallery.vue';
import Contact from '~/components/admin/contact.vue';

definePageMeta({ layout: 'empty' });

const activeMenu = ref('dashboard');
const setActiveMenu = (menu) => { activeMenu.value = menu; };
const logout = () => {
    $cookies.remove("auth", {path: '/admin'});
    // window.location.href = '/admin'
    setTimeout(()=>{
        window.location.href = '/admin'
    }, 300)
}
</script>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.admin-container {
    display: flex;
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
    background-color: #f9f9f9;
}

.sidebar {
    width: 220px;
    background: #1f2937;
    color: white;
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding-top: 20px;
    transition: width 0.3s ease;
}

.sidebar ul {
    list-style: none;
    padding: 0 15px;
}

.sidebar ul li {
    padding: 14px 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    border-radius: 8px;
    transition: background 0.3s ease;
}

.sidebar ul li:hover,
.sidebar ul li.active {
    background: #374151;
}

.sidebar i {
    font-size: 18px;
}

.main-content {
    flex-grow: 1;
    padding: 25px;
    background-color: white;
    color: #333;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
    height: 100vh;
    overflow-y: auto;
}

@media (max-width: 768px) {
    .admin-container {
        flex-direction: column;
    }

    .sidebar {
        width: 100%;
        height: auto;
    }

    .main-content {
        padding: 15px;
    }
}
</style>