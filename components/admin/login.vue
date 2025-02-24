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

const dataLang = ref(null)
const lang = ref('')

const username = ref('')
const password = ref('')

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

const login = async () => {
    if (username.value == "" || password.value == "") {
        alert('Invalid!')
    }
    else {

        try {
            var data = {
                username: username.value,
                password: password.value
            }
            const runtimeConfig = useRuntimeConfig()
            const token = runtimeConfig.public.token
            const config = await fetch('/api/utils/sk', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token: token })
            })
            const sKey = await config.json()
            const aes_data = CryptoJS.AES.encrypt(JSON.stringify(data), sKey).toString()

            const login = await fetch('/api/user/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ data: aes_data })
            })
            var loginResponse = await login.json()
            if (loginResponse.message == "ok") {
                $cookies.set("auth", loginResponse.auth, { path: '/admin', maxAge: 900 })
                window.location.href = "/admin/dashboard"
            }
            else {
                alert(loginResponse.message)
            }
        } catch (error) {
            alert(error)
        }
    }
}
</script>