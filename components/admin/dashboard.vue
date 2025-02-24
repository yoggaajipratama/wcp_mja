<template>
  <div v-if="data" class="dashboard-container">
    <div class="header">
      <h1 class="fade-in">Selamat datang kembali, Admin!</h1>
    </div>

    <div class="grid">
      <div v-for="item in stats" :key="item.title" class="card fade-in">
        <div class="card-header">
          <p>{{ item.title }}</p>
          <i :class="item.icon" class="icon"></i>
        </div>
        <p class="subtext">Per hari ini</p>
        <h1 class="count">{{ data[item.key] }}</h1>
      </div>

      <div class="card fade-in password-card">
        <div class="card-header">
          <p>Ubah Password</p>
          <i class="fas fa-lock icon"></i>
        </div>
        <p class="subtext">Keamanan akun Anda sangat penting</p>
        <button class="btn-change-password" @click="showUserEdit">Ubah Sekarang</button>
      </div>
    </div>
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span class="close-btn" @click="closeModal">&times;</span>
        <h3>Ubah data admin</h3>
        <div class="form-group">
          <label for="username" class="form-label">Username</label>
          <input type="text" name="username" id="username" v-model="username" placeholder="username"
            class="form-control">
          <label for="oldPassword" class="form-label">Old password</label>
          <input type="password" name="oldPassword" v-model="oldPassword" placeholder="old password"
            class="form-control" maxlength="8">
          <label for="password" class="form-label">Password</label>
          <input type="password" name="password" v-model="password" placeholder="password" class="form-control"
            maxlength="8">
          <button @click="changeUser" class="btn btn-primary">Simpan</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CryptoJS from "crypto-js"
const { $cookies } = useNuxtApp()

const data = ref({});
const username = ref(null)
const oldPassword = ref(null)
const password = ref(null)

const stats = [
  { title: "Total Kontak", key: "total_contact", icon: "fas fa-address-book" },
  { title: "Total Foto Galeri", key: "total_gallery_image", icon: "fas fa-images" },
  { title: "Total Portfolio", key: "total_portfolio_image", icon: "fas fa-briefcase" }
];
const showModal = ref(false)
const fetchCounting = async () => {
  try {
    const response = await fetch('/api/dashboard');
    data.value = await response.json();
  } catch (error) {
    throw error
  }
};
onMounted(async () => {
  await fetchCounting()

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

  username.value = CryptoJS.AES.decrypt($cookies.get('auth'), sKey).toString(CryptoJS.enc.Utf8)
});

const showUserEdit = () => {
  showModal.value = true
}
const closeModal = () => {
  showModal.value = false
}

const changeUser = async () => {
  try {
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

    const data = CryptoJS.AES.encrypt(JSON.stringify({
      username: username.value,
      oldPassword: oldPassword.value,
      password: password.value,
      token: token
    }), sKey).toString()

    const response = await fetch('/api/user/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    const responseMessage = await response.json()
    if (responseMessage.message == "ok") {
      alert("Update successfully!")
      showModal.value = false
    }
    else {
      alert(responseMessage.message)
      showModal.value = false
    }
  } catch (error) {
    throw error
  }
}
</script>

<style scoped>
.dashboard-container {
  padding: 40px;
  color: #333;
  background: #f8f9fa;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
}

.header h1 {
  font-size: 1.8rem;
  text-align: center;
  font-weight: 600;
  color: #222;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 20px;
}

.card {
  background: #ffffff;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  color: #555;
}

.icon {
  font-size: 1.5rem;
  color: #777;
}

.subtext {
  font-size: 0.85rem;
  color: #666;
  margin-top: 4px;
}

.count {
  text-align: end;
  font-size: 2rem;
  font-weight: bold;
  color: #111;
}

.password-card {
  text-align: center;
  padding: 25px;
}

.btn-change-password {
  margin-top: 10px;
  padding: 10px 15px;
  font-size: 0.9rem;
  font-weight: 600;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-change-password:hover {
  background: #0056b3;
}

.fade-in {
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 4px;
  width: 400px;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 16px;
  color: #333;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
