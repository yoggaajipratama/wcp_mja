<template>
    <div>
        <!-- Registration Section -->
        <section id="registration" class="registration-section" v-if="dataLang">
            <div class="registration-container">
                <!-- Column for Animation/Image -->
                <div class="d-flex justify-content-center align-items-center logo-container">
                    <img loading="lazy" src="/img/logo/logo-2.jpeg" alt="General Trading, Konstruksi, Transporter Limbah B3 | Logo PT Marier Jaya Abadi Bandung" class="logo-img me-3 rounded-circle" />
                </div>

                <!-- Registration Form Column -->
                <div class="form-container">
                    <h1 class="sub-title">{{ dataLang[lang].registration.title }}</h1>
                    <div class="registration-form">
                        <div class="input-group">
                            <label for="name">{{ dataLang[lang].registration.name }}</label>
                            <input type="text" id="name" v-model="name" :placeholder="dataLang[lang].registration.name"
                                autocomplete="off" />
                        </div>
                        <div class="input-group">
                            <label for="email">{{ dataLang[lang].registration.email }}</label>
                            <input type="email" id="email" v-model="email"
                                :placeholder="dataLang[lang].registration.email" autocomplete="off" />
                        </div>
                        <div class="input-group">
                            <label for="phone">{{ dataLang[lang].registration.phone }}</label>
                            <input type="text" id="phone" v-model="phone"
                                :placeholder="dataLang[lang].registration.phone" maxlength="12" autocomplete="off" />
                        </div>
                        <button @click="send_contact" class="hero-button">{{
                            dataLang[lang].registration.register_button
                        }}</button>
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
const name = ref("")
const email = ref("")
const phone = ref("")
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

const send_contact = async () => {
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
    try {
        const contact_data = { "name": name.value, "email": email.value, "phone": phone.value, "token": `mLc#:0_[$c<Ki_;F` }
        const dataenc = CryptoJS.AES.encrypt(JSON.stringify(contact_data), sKey).toString()
        const response = await fetch('/api/contact/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataenc)
        })
        const result = await response.json()
        if (result.message == "ok") {
            name.value = ""
            email.value = ""
            phone.value = ""
            if (lang.value == 'id') alert('Data tersimpan!')
            else if (lang.value == 'en') alert('Data stored!')
            else if (lang.value == 'jp') alert('データは保存されました!')
        }
        else {
            if (lang.value == 'id') alert(`Data gagal tersimpan, pastikan email dan nomor telepon belum pernah terdaftar!`)
            else if (lang.value == 'en') alert(`Data failed to save, make sure the email and telephone number have never been registered!`)
            else if (lang.value == 'jp') alert(`データの保存に失敗しました。メールアドレスと電話番号が登録されていないことを確認してください。`)
        }
    } catch (error) {
        throw error
    }
}
</script>

<style>
label {
    text-align: left;
}

.image-container {
    background: linear-gradient(145deg, #d1f2ff, #ffffff);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
}

.image-container img {
    max-width: 100%;
    max-height: 150px;
    width: auto;
    height: auto;
}
</style>