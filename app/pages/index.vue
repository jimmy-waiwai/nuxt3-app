<script setup>
const show = ref(false);

const handleClick = () => {
  show.value = true;
};

const { count, inc, dec } = useCounter(100);

const { $hello } = useNuxtApp();
</script>
<template>
  <div>
    <h1>Main Page</h1>
    <button @click="handleClick">Coupon Get</button>
    <LazyCoupon v-if="show" />
    <img src="~/assets/img/logo-green-white.png" alt="Nuxt3 Icon" />
    <img src="/logo-green-black.png" alt="Nuxt3 Icon" />

    <div>Count:{{ count }}</div>
    <div>
      <button @click="() => inc()">increase</button>
      <button @click="() => dec()">decrease</button>
    </div>

    <h2>{{ $hello('World') }}</h2>
  </div>
</template>