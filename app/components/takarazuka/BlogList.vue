<script setup>
  const config = useRuntimeConfig();
  const { data: response } = await useFetch('https://jimmy-waiwai.g.kuroco.app/rcms-api/3/takarazuka-blog-list',{
    baseURL:config.public.apiBase,
    credentials: 'include',
  });
</script>

<template>
  <h4 class="font-bold text-pink-900 block p-1 border-t-4 border-t-pink-900 mb-1">BLOGの記事一覧</h4>
  <nav class="mb-16">
    <template v-for="n in response.list" :key="n.slug">
      <NuxtLink :to="`/takarazuka/blog/${n.slug}`" class="block mb-1 hover:underline border-b border-b-gray-400 p-2">
        <span class="text-pink-800" v-text="n.subject"></span>
        <span class="text-sm block text-slate-500" v-text="n.ymd"></span>
      </NuxtLink>
    </template>
  </nav>
</template>