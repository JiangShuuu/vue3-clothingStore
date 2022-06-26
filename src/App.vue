<template>
  <Navbar />

  <GoTop />
  <main class="h-full pt-12 md:pt-20">
    <div class="flex flex-col justify-center mt-1">
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
