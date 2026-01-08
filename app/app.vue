<script setup>
  useHead({
    link: [
      {
        rel: 'preconnect',
        crossorigin: 'https://fonts.gstatic.com',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Noto+Serif+JP:wght@200..900&display=swap'
      },
    ]
  })
</script>

<template>
  <div class="noto-sans">
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
  .noto-sans {
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 300;
    font-style: normal;
  }
  .noto-serif {
    font-family: "Noto Serif JP", serif;
    font-weight: 400;
    font-style: normal;
  }
  .poiret-one {
    font-family: "Poiret One", sans-serif;
    font-weight: bold;
  }
  .klee-one {
    font-family: "Klee One", cursive;
    font-weight: 400;
    font-style: normal;
  }
</style>