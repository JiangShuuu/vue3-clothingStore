<template>
  <Navbar />

  <GoTop />
  <main class="h-full">
    <div class="max-w-[1280px] mx-auto mt-1 flex flex-col justify-center">
      <router-view></router-view>
    </div>
  </main>
  <section class="mt-8">
    <Footer />
  </section>
</template>

<script setup>
import Navbar from './layouts/Navbar.vue'
import GoTop from './layouts/GoTop.vue'
import Footer from './layouts/Footer.vue'

</script>
