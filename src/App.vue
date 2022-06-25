<template>
  <Navbar />

  <GoTop />
  <main class="h-[2000px]">
    <div class="max-w-[1280px] mx-auto mt-1 flex flex-col justify-center">
      <router-view></router-view>
    </div>
  </main>
  <Footer />
</template>

<script setup>
import Navbar from './layouts/Navbar.vue'
import GoTop from './layouts/GoTop.vue'
import Footer from './layouts/Footer.vue'

</script>
