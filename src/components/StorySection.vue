<template>
  <section class="story-section">
    <div class="story-deco story-deco-tr" aria-hidden="true"></div>
    <div class="story-deco story-deco-br" aria-hidden="true"></div>

    <div class="section-padding relative z-10">
      <div class="section-container">
        <div class="story-grid">
          <!-- Left content -->
          <div class="story-content animate-fade-in-up">
            <h2 class="story-logo-title">NOSOTROS</h2>

            <p class="story-script-gold">
              Dios es nuestra fortaleza
            </p>
            <p class="story-script-blue">
              — De su mano construimos nuestro futuro
            </p>

            <h2 class="story-heading">NUESTRA ESENCIA</h2>

            <p class="story-text">
              En FALCAR GROUP S.A.S., guiados por la integridad y la fe, nos
              dedicamos a proveer juguetes y artículos familiares de excelente
              calidad, construyendo experiencias que unen a las familias
              colombianas.
            </p>

            <RouterLink to="/nosotros" class="story-btn">
              CONOCE MÁS
            </RouterLink>
          </div>

          <!-- Right image -->
          <div class="story-media animate-fade-in">
            <div class="story-media-wrap">
              <div class="story-media-frame">
                <img
                  src="https://res.cloudinary.com/dlwzazojt/image/upload/v1794272824/Gemini_Generated_Image_vht14avht14avht1_qikhie.jpg"
                  alt="Familia disfrutando con juguetes FALCAR"
                  class="story-media-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineOptions({ name: 'StorySection' })
</script>

<style scoped>
.story-section {
  position: relative;
  overflow: hidden;
  background: #ffffff;
  padding: 4rem 0;
}

@media (min-width: 1024px) {
  .story-section {
    padding: 5.5rem 0;
  }
}

.story-deco {
  position: absolute;
  background: #052A75;
  z-index: 0;
  pointer-events: none;
}

.story-deco-tr {
  top: 0;
  right: 0;
  width: 28%;
  height: 120px;
  clip-path: polygon(35% 0, 100% 0, 100% 100%, 0 0);
}

.story-deco-br {
  bottom: 0;
  right: 0;
  width: 34%;
  height: 160px;
  clip-path: polygon(100% 0, 100% 100%, 0 100%, 55% 40%);
}

@media (min-width: 1024px) {
  .story-deco-tr {
    width: 22%;
    height: 180px;
  }
  .story-deco-br {
    width: 30%;
    height: 240px;
  }
}

.story-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .story-grid {
    grid-template-columns: 1fr 1.15fr;
    gap: 3.5rem;
  }
}

.story-content {
  text-align: center;
}

@media (min-width: 1024px) {
  .story-content {
    text-align: left;
  }
}

.story-logo-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: clamp(2rem, 5vw, 3.25rem);
  letter-spacing: 0.08em;
  color: #052a75;
  margin-bottom: 1.25rem;
  line-height: 1.1;
}

@media (min-width: 1024px) {
  .story-logo-title {
    margin-bottom: 1.5rem;
  }
}

.story-script-gold {
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 1.2;
  color: #D49B27;
}

.story-script-blue {
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
  font-size: 1.35rem;
  line-height: 1.3;
  color: #052A75;
  margin-bottom: 1.75rem;
}

@media (min-width: 640px) {
  .story-script-gold {
    font-size: 2.25rem;
  }
  .story-script-blue {
    font-size: 1.65rem;
  }
}

@media (min-width: 1024px) {
  .story-script-gold {
    font-size: 2.6rem;
  }
  .story-script-blue {
    font-size: 1.85rem;
    margin-bottom: 2.25rem;
  }
}

.story-heading {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 1.35rem;
  letter-spacing: 0.04em;
  color: #052A75;
  margin-bottom: 1rem;
}

@media (min-width: 1024px) {
  .story-heading {
    font-size: 1.6rem;
  }
}

.story-text {
  font-family: 'Open Sans', sans-serif;
  font-size: 0.9rem;
  line-height: 1.75;
  color: #4a4a4a;
  max-width: 32rem;
  margin: 0 auto 1.75rem;
}

@media (min-width: 1024px) {
  .story-text {
    font-size: 0.98rem;
    margin-left: 0;
    margin-right: 0;
  }
}

.story-btn {
  display: inline-block;
  background: #052A75;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-decoration: none;
  padding: 0.85rem 1.75rem;
  border-radius: 4px;
  transition: background 0.25s ease, transform 0.25s ease;
}

.story-btn:hover {
  background: #073d9e;
  transform: translateY(-2px);
}

.story-media {
  display: flex;
  justify-content: center;
}

.story-media-wrap {
  position: relative;
  width: 100%;
  max-width: 260px;
}

/* Contorno dorado desplazado detrás del marco */
.story-media-wrap::before {
  content: '';
  position: absolute;
  top: 18px;
  left: 18px;
  right: -18px;
  bottom: -18px;
  border: 3px solid #D49B27;
  border-radius: 50% 50% 20px 20px / 45% 45% 20px 20px;
  z-index: 0;
  pointer-events: none;
  opacity: 0.85;
}

.story-media-frame {
  position: relative;
  z-index: 1;
  width: 100%;
  border: 4px solid #D49B27;
  background: #052A75;
  padding: 0;
  border-radius: 50% 50% 20px 20px / 45% 45% 20px 20px;
  overflow: hidden;
  box-shadow: 0 18px 50px rgba(5, 42, 117, 0.25);
}

@media (min-width: 400px) {
  .story-media-wrap {
    max-width: 300px;
  }
}

@media (min-width: 640px) {
  .story-media-wrap {
    max-width: 480px;
  }
}

@media (min-width: 1024px) {
  .story-media-wrap {
    max-width: 560px;
  }
}

.story-media-img {
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
}

@media (min-width: 400px) {
  .story-media-img {
    height: 180px;
  }
}

@media (min-width: 640px) {
  .story-media-img {
    height: 340px;
  }
}

@media (min-width: 1024px) {
  .story-media-img {
    height: 400px;
  }
}
</style>
