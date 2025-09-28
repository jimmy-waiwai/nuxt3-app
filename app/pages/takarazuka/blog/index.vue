<script setup>
  const route = useRoute();
  const config = useRuntimeConfig();

  const { data: response } = await useFetch(
    `https://jimmy-waiwai.g.kuroco.app/rcms-api/3/takarazuka-blod/39`,
    {
      credentials: 'include',
    }
  );
</script>

<template>
  <h2 class="text-pink-900 font-bold text-2xl sm:text-3xl md:text-4xl klee-one mb-8" v-text="response.details.subject"></h2>
  <p class="text-slate-500 text-sm md:text-base mb-4 text-right" v-html="response.details.ymd"></p>
  <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4" v-html="response.details.contents"></div>
</template>

<style scoped>
  .klee-one {
    font-family: "Klee One", cursive;
    font-weight: 400;
    font-style: normal;
  }
</style>