<script setup>
  const { 
    data: posts, 
    error,
    pending,
  } = await useLazyFetch('https://jsonplaceholder.typicode.com/posts/');
  //console.log(('error', error.value));
</script>

<template>
  <div>
    <h1>Posts一覧</h1>
    <p v-if="error">{{ error }}</p>
    <p v-else>errorなし</p>
    <p v-if="pending">Loading...</p>
    <!-- <button @click="refresh()">再取得</button> -->
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/dashboard/${post.id}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>