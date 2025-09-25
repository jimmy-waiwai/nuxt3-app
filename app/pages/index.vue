<script setup>

</script>
<template>
  <div class="w-full text-center">
    <div id="header">
      <h1 class="text-5xl">Welcome ! to waiwai.ciao.jp</h1>
      <p>waiwai.ciao.jp より移転しました。JIMMYのホームページです。</p>
    </div>
    <div id="menu">
      <nav class="flex justify-center">
        <NuxtLink to="#header" class="w-1/5 p-4 border m-2">Top</NuxtLink>
        <NuxtLink to="#archive" class="w-1/5 p-4 border m-2">Archive</NuxtLink>
        <NuxtLink to="https://google.com" target="_blank" class="w-1/5 p-4 border m-2">Google</NuxtLink>
        <!-- <NuxtLink :to="{ name: 'users-list' }">User List</NuxtLink>
        <NuxtLink to="/posts">Post List</NuxtLink> -->
      </nav>
    </div>
    
    <div id="archive">
      <p>過去の JIMMY の WEB SITE を保存しています。</p>
      <div class="flex justify-center flex-wrap">
        <div class="w-1/3 m-4">
          <NuxtLink to="/takarazuka/">
            <img src="/images/takaraimage.jpg" alt="WAIWAI TAKARAZUKA">
            <h2><img src="/images/logota.png" alt="WAIWAI TAKARAZUKA" class="size-[30px] inline m-2">WAIWAI TAKARAZUKA</h2>
            <p>掲示板を閉じてからのJIMMYのブログです。</p>
          </NuxtLink>
        </div>
        <div class="w-1/3 m-4">
          <NuxtLink to="/waiwai/">
            <img src="/images/waiwai_image.jpg" alt="WAIWAI TAKARAZUKA">
            <h2><img src="/images/logota.png" alt="WAIWAI TAKARAZUKA" class="size-[30px] inline m-2">WAIWAI TAKARAZUKA</h2>
            <p>宝塚ファンによる会員制掲示板を運営していました。</p>
          </NuxtLink>
        </div>
        <div class="w-1/3 m-4">
          <NuxtLink to="/jimmy/">
            <img src="/images/jimmy_image.jpg" alt="JIMMY's Homepage">
            <h2><img src="/images/logota.png" alt="WAIWAI TAKARAZUKA" class="size-[30px] inline m-2">JIMMY's Homepage</h2>
            <p>JIMMYの過去の公演評などの記事をまとめました。</p>
          </NuxtLink>
        </div>
        <div class="w-1/3 m-4">
          <NuxtLink to="/design/">
            <img src="/images/designimage.jpg" alt="WAIWAI WEB &amp; DTP">
            <h2><img src="/images/logode.png" alt="WAIWAI WEB &amp; DTP" class="size-[30px] inline m-2">WAIWAI WEB &amp; DTP</h2>
            <p>WEB &amp; DTPデザイナーであるJIMMYのお仕事ページです。</p>
          </NuxtLink>
        </div>
        <div class="w-1/3 m-4">
          <NuxtLink to="/everyday/">
            <img src="/images/everyimage.jpg" alt="WAIWAI EVERY DAY">
            <h2><img src="/images/logoev.png" alt="WAIWAI EVERY DAY" class="size-[30px] inline m-2">WAIWAI EVERY DAY</h2>
            <p>JIMMYの日常の様子をアップしています。</p>
          </NuxtLink>
        </div>

      </div>
      
	  </div>

    <div id="footer">
      <p>Copyright &copy; JIMMY. All Rights Reserved.</p>
    </div>

    
  </div>
</template>