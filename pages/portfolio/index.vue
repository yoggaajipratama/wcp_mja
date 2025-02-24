<template>
    <div>
        <Portfolio/>
        <!-- <Values/> -->
    </div>
</template>
<script setup>
import Portfolio from '~/components/index/portfolio.vue';
import { useHead } from '#imports';

useHead({
  title: 'Portfolio PT Marier Jaya Abadi | Proyek Konstruksi, General Trading & Transporter',
  meta: [
    {
      name: 'description',
      content: 'PT Marier Jaya Abadi adalah perusahaan terpercaya di Bandung Barat yang bergerak di bidang General Trading, Konstruksi, dan Transporter Limbah B3.'
    }
  ]
});
</script>