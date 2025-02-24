<template>
    <div>
        <Legality/>
        <!-- <Values/> -->
    </div>
</template>
<script setup>
import Legality from '~/components/informations/legality.vue';
import { useHead } from '#imports';

useHead({
  title: 'Legalitas & Perizinan Resmi PT Marier Jaya Abadi | Sertifikasi & Dokumen Hukum',
  meta: [
    {
      name: 'description',
      content: 'PT Marier Jaya Abadi adalah perusahaan terpercaya di Bandung Barat yang bergerak di bidang General Trading, Konstruksi, dan Transporter Limbah B3.'
    }
  ]
});
</script>