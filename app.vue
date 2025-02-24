<template>
  <div :class="{ 'hidden': loading }">
    <NuxtLayout></NuxtLayout>
  </div>
  <Loading v-if="loading" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import Loading from './components/adds/loading.vue';

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 500);
});
</script>

<style scoped>
.hidden {
  display: none;
}
</style>
