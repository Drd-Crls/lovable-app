<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <h1>
          ALL YOU <br />
          NEED IS <span>CORINTIA.</span>
        </h1>
        <p>Organize os peão e memórias em um só lugar.</p>

        <button class="cta" @click="() => this.$router.push('./lista')">Começar</button>
      
      </div>

     <div class="heart-wrapper">
  <svg viewBox="0 0 100 100" class="heart-svg">
    <defs>
      <clipPath id="heartClip">
        <path d="M50 15
                 C35 -5, 0 5, 0 35
                 C0 65, 25 85, 50 100
                 C75 85, 100 65, 100 35
                 C100 5, 65 -5, 50 15 Z" />
      </clipPath>
    </defs>

    <image
      :href="fundo"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      clip-path="url(#heartClip)"
    />
  </svg>
</div>
    </div>
  </section>
</template>

<script setup>
import fundo from '@/assets/images/fundo.png'
</script>

<style scoped>
.hero {
  min-height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.hero-content {
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.hero-text h1 {
  font-size: 3.2rem;
  line-height: 1.1;
  margin-bottom: 16px;
  font-weight: 800;
}

.hero-text span {
  color: #ff3b3b;
}

.hero-text p {
  color: #a1a1aa;
  margin-bottom: 24px;
}

.cta {
  background: linear-gradient(135deg, #ff3b3b, #ff1f1f);
  border: none;
  padding: 12px 28px;
  border-radius: 999px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.25s;
}

.cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(255, 59, 59, 0.35);
}

.heart-wrapper {
  width: clamp(360px, 42vw, 560px);
  justify-self: end;
}

.heart-svg {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 25px 45px rgba(255, 59, 59, 0.25));
}

.heart-image:hover {
  transform: scale(1.05);
}

/* responsive */
@media (max-width: 900px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .heart-wrapper {
    margin-top: 30px;
  }
}
</style>
