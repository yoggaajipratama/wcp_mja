<template>
    <div>
        <!-- Registration Section -->
        <section id="registration" class="registration-section" v-if="dataLang">
            <div class="registration-container">
                <!-- Column for Animation/Image -->
                <div class="d-flex justify-content-center align-items-center logo-container">
                    <img src="/img/logo/logo-2.jpeg" alt="Logo" class="logo-img me-3 rounded-circle" />
                </div>

                <!-- Login Form Column -->
                <div class="form-container">
                    <h2 class="">Login</h2>
                    <div class="registration-form">
                        <div class="input-group">
                            <label for="name">Username</label>
                            <input type="text" id="name" v-model="username" placeholder="Username" minlength="1" />
                        </div>
                        <div class="input-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" v-model="password" placeholder="Password"
                                maxlength="12" minlength="8" />
                        </div>
                        <button @click="login" class="text-center hero-button">Login</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import CryptoJS from "crypto-js"
const { $cookies } = useNuxtApp()

const dataLang = ref({})
const lang = ref('')

const username = ref('')
const password = ref('')

onMounted(async () => {
    try {
        if ($cookies && !$cookies.get('lang')) {
            $cookies.set('lang', 'id')
        }

        const loadDataLang = await fetch('/languages.json')
        if (!loadDataLang.ok) throw new Error(`Failed to load languages.json: ${loadDataLang.status}`)

        const jsonData = await loadDataLang.json()
        dataLang.value = jsonData || {}

        lang.value = $cookies ? $cookies.get('lang') : 'id'
    } catch (error) {
        console.error("Error loading language data:", error)
    }
})

const login = async () => {
    if (!username.value || !password.value) {
        alert('Invalid!')
        return
    }

    try {
        var data = {
            username: username.value,
            password: password.value
        }

        const runtimeConfig = useRuntimeConfig()
        const token = runtimeConfig.public.token

        const config = await fetch('/api/utils/sk', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token })
        })

        if (!config.ok) throw new Error(`API Error: ${config.status}`)
        const sKey = await config.json()
        if (!sKey) throw new Error("Secret key is null")

        const aes_data = CryptoJS.AES.encrypt(JSON.stringify(data), sKey).toString()

        const login = await fetch('/api/user/login/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: aes_data })
        })

        const loginResponse = await login.json()
        if (loginResponse.message === "ok") {
            $cookies.set("auth", loginResponse.auth, { path: '/admin', maxAge: 900 })
            window.location.href = "/admin/dashboard"
        } else {
            alert(loginResponse.message)
        }
    } catch (error) {
        console.error("Login Error:", error)
        alert(error)
    }
}
</script>
