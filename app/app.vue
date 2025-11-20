<script setup>

</script>

<template>
  <div>
    <!-- NuxtRouteAnnouncer スクリーンリーダーなどの支援技術(assistive technologies)を利用しているユーザにページタイトルの通知を行うことでアクセシビリティを向上させることを目的としたコンポーネント -->
    <NuxtRouteAnnouncer />
    <!-- <NuxtWelcome /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
  @import url("~/assets/css/tailwind.css");
</style>