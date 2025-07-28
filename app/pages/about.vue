<script setup>
definePageMeta({
  //layout: false,
  //layout: 'custom',
  middleware: 'auth',
  //直接ここで設定も可
  /* middleware: defineNuxtRouteMiddleware((to, from) => {
    console.log('to', to);
    console.log('from', from);
  }), */
});
const counter = ref(0);
</script>

<template>
  <Head>
    <Title>Aboutページ</Title>
    <Meta name="description" content="Aboutページ" />
  </Head>
  <h1>About Page</h1>
  <div>
    Page: about
  </div>
  <h2>Counter</h2>
  <p>Count: {{ counter }}</p>
  <div><button @click="counter++">+</button></div>
</template>

<style scoped></style>
