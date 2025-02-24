<template>
    <div>
        <History />
        <Values />
        <Services />
        <Legality />
    </div>
</template>
<script setup>
import History from '~/components/informations/history.vue';
import Legality from '~/components/informations/legality.vue';
import Services from '~/components/informations/services.vue';
import Values from '~/components/informations/values.vue';
import { useHead } from '#imports';

useHead({
  title: 'Profil PT Marier Jaya Abadi | General Trading, Konstruksi & Transporter di Bandung',
  meta: [
    {
      name: 'description',
      content: 'PT Marier Jaya Abadi adalah perusahaan terpercaya di Bandung Barat yang bergerak di bidang General Trading, Konstruksi, dan Transporter Limbah B3.'
    }
  ]
});
</script>