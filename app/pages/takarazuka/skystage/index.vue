<template>
  <div>
    <p>News list</p>
    <div v-for="n in response.list" :key="n.slug">
      <nuxt-link :to="`/skystage/${n.topics_id}`">
        {{ n.ymd }} {{ n.subject }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const { data: response } = await useFetch('/rcms-api/3/skystage',{
  baseURL:config.public.apiBase,
  credentials: 'include',
});
</script>