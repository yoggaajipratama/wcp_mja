<template>
    <div>
        <Registration/>
    </div>
</template>
<script setup>
import Registration from '~/components/index/registration.vue';
import { useHead } from '#imports';

useHead({
  title: 'Daftar Sebagai Pelanggan atau Mitra | PT Marier Jaya Abadi',
  meta: [
    {
      name: 'description',
      content: 'PT Marier Jaya Abadi adalah perusahaan terpercaya di Bandung Barat yang bergerak di bidang General Trading, Konstruksi, dan Transporter Limbah B3.'
    }
  ]
});
</script>