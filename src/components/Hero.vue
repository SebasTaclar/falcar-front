<template>
  <section id="inicio" class="hero-section">
    <!-- Background image -->
    <div class="hero-bg" aria-hidden="true">
      <img
        src="https://res.cloudinary.com/dlwzazojt/image/upload/v1794254947/Gemini_Generated_Image_649msp649msp649m_zqowxc.jpg"
        alt=""
        class="hero-bg-img"
      />
      <div class="hero-bg-overlay"></div>
    </div>

    <!-- Floating decorative elements -->
    <div class="hero-decor" aria-hidden="true">
      <div class="deco-circle top-20 left-[8%] w-16 h-16 bg-falcar-yellow/20 animate-float blur-sm"></div>
      <div class="deco-circle top-40 right-[12%] w-12 h-12 bg-falcar-pink/15 animate-float-slow blur-sm"></div>
      <div class="deco-circle bottom-32 left-[15%] w-10 h-10 bg-falcar-mint/25 animate-float-delayed blur-sm"></div>
      <div class="deco-circle bottom-20 right-[20%] w-14 h-14 bg-falcar-baby/20 animate-float blur-sm"></div>
      <div class="deco-circle top-[60%] left-[5%] w-8 h-8 bg-falcar-lavender/20 animate-float-slow blur-sm"></div>
      <div class="deco-circle top-[15%] right-[5%] w-20 h-20 bg-falcar-peach/15 animate-float-delayed blur-sm"></div>

      <svg class="deco-star top-32 left-[30%] w-6 h-6 text-falcar-yellow/30 animate-wiggle" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4h7.6l-6 4.6 2.4 7.4-6.4-4.8-6.4 4.8 2.4-7.4-6-4.6h7.6z"/></svg>
      <svg class="deco-star bottom-40 right-[35%] w-5 h-5 text-falcar-pink/25 animate-wiggle" style="animation-delay: 0.5s" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4h7.6l-6 4.6 2.4 7.4-6.4-4.8-6.4 4.8 2.4-7.4-6-4.6h7.6z"/></svg>
      <svg class="deco-star top-[50%] right-[8%] w-4 h-4 text-falcar-mint/30 animate-wiggle" style="animation-delay: 1s" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4h7.6l-6 4.6 2.4 7.4-6.4-4.8-6.4 4.8 2.4-7.4-6-4.6h7.6z"/></svg>
    </div>

    <div class="section-padding w-full relative z-10">
      <div class="section-container">
        <div class="hero-grid">
          <!-- Text Content -->
          <div class="hero-content animate-fade-in-up">
            <div class="hero-panel">
              <h1 class="hero-title">
                ¡LOS MEJORES JUGUETES<br />PARA TU FAMILIA!
              </h1>
              <p class="hero-subtitle">
                Construyendo el futuro de tu familia con fe y excelencia
              </p>
              <p class="hero-slogan">
                Dios es nuestra fortaleza — De su mano construimos nuestro futuro
              </p>
            </div>
          </div>

          <!-- Diamond carousel -->
          <div class="hero-spacer animate-fade-in">
            <div class="diamond-carousel">
              <div class="diamond-frame">
                <div class="diamond-rotate">
                  <div
                    v-for="(img, i) in carouselImages"
                    :key="img"
                    class="diamond-slide"
                    :class="{ active: i === currentSlide }"
                  >
                    <img :src="img" alt="" class="slide-blur" aria-hidden="true" />
                    <img :src="img" :alt="'FALCAR ' + (i + 1)" class="slide-main" />
                  </div>
                </div>
              </div>
              <div class="diamond-dots">
                <button
                  v-for="(img, i) in carouselImages"
                  :key="'dot-' + img"
                  :class="{ active: i === currentSlide }"
                  :aria-label="'Imagen ' + (i + 1)"
                  @click="currentSlide = i"
                ></button>
              </div>
            </div>
          </div>

          <!-- Buttons -->
          <div class="hero-buttons animate-fade-in-up">
            <RouterLink to="/productos" class="btn-falcar-pink">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
              Explorar Tienda
            </RouterLink>
            <RouterLink to="/#categorias" class="btn-falcar-outline">
              Ver Colecciones
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

defineOptions({ name: 'HeroSection' })

const carouselImages = [
   'https://res.cloudinary.com/dlwzazojt/image/upload/v1794272824/Gemini_Generated_Image_vht14avht14avht1_qikhie.jpg',
  'https://img.magnific.com/foto-gratis/padres-dando-regalo-su-bebe-casa_23-2148812286.jpg?semt=ais_hybrid&w=740&q=80',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxj2dhcOJcijMZQ1rM16D5f1IJH3CN6nChjIUFuszqwEiAFTC2hocX1ZU&s=10',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBV3xCp3qOGXP1HHgXyJDW9PBWrG_0D3DKZzpqO_Mx_q_aSEFkDRPwC8p5&s=10',
]

const currentSlide = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  timer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % carouselImages.length
  }, 3500)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom right, #F4F6FA, #ffffff 45%, rgba(212, 155, 39, 0.1));
  min-height: auto;
  display: flex;
  align-items: center;
  padding-top: 1.25rem;
  padding-bottom: 1.5rem;
}

@media (min-width: 640px) {
  .hero-section {
    min-height: 70vh;
    padding-top: 2rem;
  }
}

@media (min-width: 1024px) {
  .hero-section {
    min-height: 72vh;
    padding-top: 0;
    padding-bottom: 4rem;
  }
}

/* Background */
.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 1;
}

.hero-bg-overlay {
  position: absolute;
  inset: 0;
  background: rgba(5, 42, 117, 0.35);
}

@media (min-width: 1024px) {
  .hero-bg-overlay {
    background: rgba(255, 255, 255, 0.1);
  }
}

/* Decorations */
.hero-decor {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.deco-circle {
  position: absolute;
  border-radius: 9999px;
}

.deco-star {
  position: absolute;
}

/* Menos ruido visual en celular */
@media (max-width: 639px) {
  .deco-circle:nth-child(n + 4),
  .deco-star {
    display: none;
  }

  .deco-circle {
    transform: scale(0.75);
  }
}

/* Layout */
.hero-grid {
  margin-top: 1rem;
  display: grid;
  gap: 2.5rem;
  align-items: center;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .hero-grid {
    margin-top: 2.5rem;
    gap: 2.5rem 3rem;
  }
}

@media (min-width: 1024px) {
  .hero-grid {
    margin-top: 5rem;
    grid-template-columns: 1.4fr 1fr;
    gap: 1.25rem 4rem;
    align-items: center;
  }

  .hero-content {
    grid-column: 1;
    grid-row: 1;
  }

  .hero-buttons {
    grid-column: 1;
    grid-row: 2;
  }

  .hero-spacer {
    grid-column: 2;
    grid-row: 1 / span 2;
  }
}

.hero-content {
  order: 1;
}

.hero-spacer {
  order: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-buttons {
  order: 3;
}

/* Diamond carousel */
.diamond-carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
}

@media (min-width: 640px) {
  .diamond-carousel {
    gap: 1.75rem;
  }
}

@media (min-width: 1024px) {
  .diamond-carousel {
    gap: 1.5rem;
  }
}

.diamond-frame {
  width: min(200px, 52vw);
  aspect-ratio: 1;
  transform: scale(1.3);
  padding: 5px;
  background: #D49B27;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  filter: drop-shadow(0 12px 40px rgba(5, 42, 117, 0.35));
}

@media (min-width: 400px) {
  .diamond-frame {
    width: min(240px, 56vw);
  }
}

@media (min-width: 640px) {
  .diamond-frame {
    width: min(340px, 64vw);
    transform: scale(1.414);
  }
}

@media (min-width: 1024px) {
  .diamond-frame {
    width: min(340px, 55vw);
  }
}

.diamond-rotate {
  position: relative;
  width: 100%;
  height: 100%;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  overflow: hidden;
  background: #052A75;
}


.diamond-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
}

.diamond-slide.active {
  opacity: 1;
}

.diamond-slide .slide-blur {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: blur(14px) brightness(0.85);
  transform: scale(1.2);
}

.diamond-slide .slide-main {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

.diamond-dots {
  display: flex;
  gap: 0.75rem;
}

.diamond-dots button {
  width: 12px;
  height: 12px;
  border-radius: 9999px;
  background: rgba(212, 155, 39, 0.35);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

@media (max-width: 639px) {
  .diamond-dots {
    gap: 0.55rem;
  }

  .diamond-dots button {
    width: 8px;
    height: 8px;
  }
}

.diamond-dots button.active {
  background: #D49B27;
  transform: scale(1.3);
}

/* Blue panel */
.hero-panel {
  border-radius: 1rem;
  padding: 0.5rem 0;
  text-align: center;
}

@media (min-width: 640px) {
  .hero-panel {
    padding: 1rem 0;
  }
}

@media (min-width: 1024px) {
  .hero-panel {
    text-align: left;
    padding: 0;
    padding-left: 2.9rem;
  }
}

.hero-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.45rem;
  line-height: 1.2;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  margin-bottom: 0.75rem;
}

@media (min-width: 400px) {
  .hero-title {
    font-size: 1.6rem;
  }
}

@media (min-width: 640px) {
  .hero-title {
    font-size: 2.5rem;
  }
}



.hero-subtitle {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.45;
  color: #ffffff;
  margin-bottom: 1.25rem;
}

@media (min-width: 640px) {
  .hero-subtitle {
    font-size: 1.125rem;
  }
}



.hero-slogan {
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
  font-size: 1.7rem;
  line-height: 1.35;
  color: #D49B27;
}

@media (min-width: 640px) {
  .hero-slogan {
    font-size: 1.875rem;
  }
}

@media (min-width: 1024px) {
  .hero-slogan {
    font-size: 2.125rem;
  }
}/* Buttons */
.hero-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  justify-content: flex-start;
  margin-top: 0;
  padding-left: 0;
}

.hero-buttons :deep(a) {
  width: 100%;
  justify-content: center;
  padding: 0.55rem 1.1rem;
  font-size: 0.8125rem;
  gap: 0.4rem;
}

.hero-buttons :deep(a svg) {
  width: 0.95rem;
  height: 0.95rem;
}

/* Botón outline legible sobre fondo oscuro en móvil */
@media (max-width: 1023px) {
  .hero-buttons :deep(.btn-falcar-outline) {
    background: rgba(255, 255, 255, 0.95);
    border-color: rgba(212, 155, 39, 0.6);
  }
}

@media (min-width: 640px) {
  .hero-buttons {
    flex-direction: row;
    gap: 1rem;
  }

  .hero-buttons :deep(a) {
    width: auto;
    padding: 1rem 2rem;
    font-size: 1rem;
    gap: 0.5rem;
  }

  .hero-buttons :deep(a svg) {
    width: 1.25rem;
    height: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .hero-buttons {
    justify-content: flex-start;
    margin-top: 0;
    padding-left: 2rem;
  }
}

/* Animation delays */
.hero-content {
  animation-delay: 0.1s;
}

.hero-spacer {
  animation-delay: 0.2s;
}

.hero-buttons {
  animation-delay: 0.3s;
}
</style>
