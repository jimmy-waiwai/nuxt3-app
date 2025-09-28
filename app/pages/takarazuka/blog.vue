<script setup>
  definePageMeta({
    layout: 'takarazuka',
  });
</script>

<template>
  <div class="flex justify-center pl-4 lg:pl-8 pr-4 lg:pr-8 pt-20">
    <div class="w-48 flex-none pb-16 hidden lg:block">
      <TakarazukaMenu />
    </div>
    <div class="flex-1 pl-2 md:pl-8 xl:pl-16 pr-2 md:pr-8 xl:pr-16 pb-16">
      <div class="pt-8">
        <NuxtPage />
      </div>
    </div>
    <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
      <TakarazukaBlogList />
    </div>
  </div>
  <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
    <TakarazukaBlogList />
  </div>
</template>

<style scoped>
  .klee-one {
    font-family: "Klee One", cursive;
    font-weight: 400;
    font-style: normal;
  }
</style>