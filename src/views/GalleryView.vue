<template>
  <section class="gallery-page">
    <GalleryGrid />
  </section>
</template>

<script setup>
import GalleryGrid from '../components/GalleryGrid.vue'
</script>

<style scoped>
.gallery-page {
  padding: 40px 24px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>