<template>
  <header class="navbar">
    <div class="logo">❤ Neguinha</div>

    <nav class="nav-links">
      <RouterLink to="/">Início</RouterLink>
      <RouterLink to="/lista">Lista</RouterLink>
      <RouterLink to="/galeria">Album</RouterLink>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 40px;
  background: rgba(15, 15, 18, 0.7);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #1f1f22;
}

.logo {
  font-weight: 700;
  color: #ff3b3b;
  font-size: 1.3rem;
  letter-spacing: 0.5px;
}

.nav-links {
  display: flex;
  gap: 28px;
}

.nav-links a {
  color: #bfbfbf;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.25s ease;
}

.nav-links a:hover {
  color: #ff3b3b;
}

.router-link-active {
  color: #ff3b3b;
}
</style>
