<template>
    <div>
        <Gallery/>
        <!-- <Values/> -->
    </div>
</template>
<script setup>
import Gallery from '~/components/index/gallery.vue';
import { useHead } from '#imports';

useHead({
  title: 'Gallery Proyek & Kegiatan PT Marier Jaya Abadi | Dokumentasi Konstruksi & Transporter',
  meta: [
    {
      name: 'description',
      content: 'PT Marier Jaya Abadi adalah perusahaan terpercaya di Bandung Barat yang bergerak di bidang General Trading, Konstruksi, dan Transporter Limbah B3.'
    }
  ]
});
</script>