<template>
  <div class="fixed bottom-0 w-full h-16 border md:hidden">
    <ul class="justify-around h-full flex-center">
      <router-link to="/" :class="['icon', { active: $route.path === '/' }]">
        <i class="my-1 fas fa-home i"></i>
        <span>首頁</span>
      </router-link>
      <router-link to="/search" :class="['icon', { active: $route.path === '/search' }]">
        <i class="my-1 fas fa-search "></i>
        <span>搜尋商品</span>
      </router-link>
      <router-link to="/favorite" :class="['icon', { active: $route.path === '/favorite' }]">
        <i class="my-1 far fa-heart "></i>
        <span>我的收藏</span>
      </router-link>
      <router-link to="/shoppingCar" :class="['icon', { active: $route.path === '/shoppingCar' }]">
        <i class="my-1 fas fa-shopping-bag "></i>
        <span>購物車</span>
      </router-link>
    </ul>
  </div>
</template>

<script setup>
</script>

<style lang="postcss" scoped>
.icon {
  @apply flex flex-col my-1 text-gray-400 hover:text-primary;
}
.active {
  @apply text-primary
}
</style>
