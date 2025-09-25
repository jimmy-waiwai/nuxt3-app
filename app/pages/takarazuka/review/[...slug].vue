<script setup>
  definePageMeta({
    layout: 'takarazuka',
  });

  const route = useRoute();
  const config = useRuntimeConfig();

  const { data: response } = await useFetch(
    `https://jimmy-waiwai.g.kuroco.app/rcms-api/3/takarazuka-review/${route.params.slug}`,
    {
      credentials: 'include',
    }
  );
</script>

<template>
  <div class="flex justify-center pl-4 lg:pl-8 pr-4 lg:pr-8 pt-20">
    <div class="w-48 flex-none pb-16 hidden lg:block">
      <TakarazukaMenu />
    </div>
    <div class="flex-1 pl-2 md:pl-8 xl:pl-16 pr-2 md:pr-8 xl:pr-16 pb-16">
      <div class="pt-8">
        <h2 class="text-pink-900 font-bold text-2xl sm:text-3xl md:text-4xl klee-one mb-8" v-text="response.details.subject"></h2>
        <p class="text-slate-500 text-sm md:text-base mb-4 text-right" v-html="response.details.ymd"></p>
        <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4" v-html="response.details.contents"></div>
      </div>
    </div>
    <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
      <TakarazukaReviewList />
    </div>
  </div>
  <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
    <TakarazukaReviewList />
  </div>
</template>

<style scoped>
  .klee-one {
    font-family: "Klee One", cursive;
    font-weight: 400;
    font-style: normal;
  }
</style>