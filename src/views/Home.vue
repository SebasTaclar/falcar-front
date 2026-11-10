<template>
  <main class="home-main">
    <Hero />

    <div id="categorias">
      <CategoriesSection />
    </div>

    <ProductsSection />

    <div id="nosotros">
      <StorySection />
    </div>

    <div id="contacto">
      <Newsletter />
    </div>

    <EmotionalBanner />
  </main>
</template>

<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import CategoriesSection from '@/components/CategoriesSection.vue'
import ProductsSection from '@/components/ProductsSection.vue'
import EmotionalBanner from '@/components/EmotionalBanner.vue'
import StorySection from '@/components/StorySection.vue'
import Newsletter from '@/components/Newsletter.vue'

defineOptions({ name: 'HomeView' })
</script>

<style scoped>
.home-main {
  background: #F4F6FA;
}
</style>
