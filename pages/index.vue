<template>
    <div>
        <Jumbotron />
        <History />
        <Services />
        <Values />
        <Gallery />
        <Registration />
        <Portfolio />
        <Footer />
    </div>
</template>

<script setup>
import Footer from '~/components/index/footer.vue';
import Gallery from '~/components/index/gallery.vue';
import Portfolio from '~/components/index/portfolio.vue';
import Registration from '~/components/index/registration.vue';
import Jumbotron from '~/components/index/Jumbotron.vue';
import History from '~/components/informations/history.vue';
import Services from '~/components/informations/services.vue';
import Values from '~/components/informations/values.vue';
import { useHead } from '#imports';

useHead({
  title: 'General Trading, Konstruksi, Transporter Limbah B3 | PT Marier Jaya Abadi Bandung',
  meta: [
    {
      name: 'description',
      content: 'PT Marier Jaya Abadi adalah perusahaan terpercaya di Bandung Barat yang bergerak di bidang General Trading, Konstruksi, dan Transporter Limbah B3.'
    }
  ]
});
</script>