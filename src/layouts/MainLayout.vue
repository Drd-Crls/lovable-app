
<template>
  <div class="app-container">
    <AppNavbar />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import AppNavbar from '../components/AppNavbar.vue'
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  background: radial-gradient(circle at top, #111114, #050506);
  color: #e5e5e5;
}

.main-content {
  padding: 24px;
}
</style>
