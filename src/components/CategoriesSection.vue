<template>
  <section class="categories-section">
    <div class="section-padding">
      <div class="section-container">
        <!-- Section Header -->
        <div class="categories-header">
          <span class="categories-kicker">Explora por categoría</span>
          <h2 class="categories-title">Encuentra lo perfecto</h2>
          <p class="categories-subtitle">
            En FALCAR cada juguete despierta la imaginación y acompaña cada aventura de los más pequeños
          </p>
        </div>

        <!-- Categories Grid -->
        <!-- Loading skeleton -->
        <div v-if="loading" class="categories-grid">
          <div v-for="i in 4" :key="i" class="skeleton-card">
            <div class="skeleton-img"></div>
          </div>
        </div>

        <!-- Actual categories -->
        <div v-else class="categories-grid">
          <RouterLink
            v-for="(cat, index) in displayCategories"
            :key="cat.id"
            :to="'/categorias/' + slugify(cat.name)"
            class="category-card"
          >
            <!-- Imagen (parte superior, más alta) -->
            <div class="card-image">
              <img
                v-if="cat.image"
                :src="cat.image"
                :alt="cat.name"
                loading="lazy"
              />
              <!-- Gradient fallback when no image -->
              <div v-else class="card-image-fallback" :class="cat.bgClass"></div>

              <!-- Indicador de categoría (dorado, sobre la imagen) -->
              <span class="card-badge">{{ cat.tag }}</span>
            </div>

            <!-- Contenido (parte inferior blanca) -->
            <div class="card-content">
              <div>
                <h3 class="card-title">{{ cat.name }}</h3>
                <p class="card-description">{{ cat.description }}</p>
              </div>

              <!-- Esquina decorativa + flecha de navegación -->
              <div class="card-corner">
                <div class="corner-gold"></div>
                <div class="corner-blue"></div>
                <span class="corner-arrow">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
                </span>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useCategories } from '@/composables/useCategories'
import { getCategoryStyle } from '@/utils/categoryStyles'

const { categories, loading, loadCategories } = useCategories()

onMounted(async () => {
  await loadCategories()
})

function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

const categoryStyles: Record<string, { emoji: string; bgClass: string; overlayClass: string }> = {
  default: {
    emoji: '👗',
    bgClass: 'bg-gradient-to-br from-falcar-baby via-falcar-mint to-falcar-cream',
    overlayClass: 'bg-falcar-baby/10',
  },
}

const emojisByKey = [
  { keys: ['educativ', 'didact', 'aprend'], emoji: '🧩', tag: 'Aprendizaje' },
  { keys: ['rol', 'imagin', 'disfraz', 'cuento'], emoji: '🎭', tag: 'Imaginación' },
  { keys: ['mesa', 'familiar', 'familia'], emoji: '🎲', tag: 'Familia' },
  { keys: ['muñec', 'munec', 'figur', 'vehicul', 'carro', 'auto'], emoji: '🚗', tag: 'Aventura' },
  { keys: ['arte', 'creativ', 'construcc', 'bloque'], emoji: '🎨', tag: 'Creatividad' },
  { keys: ['bebé', 'bebe', 'peluche'], emoji: '🧸', tag: 'Peques' },
]

const getStyleForCategory = (name: string, index: number) => {
  const lower = name.toLowerCase()
  const style = getCategoryStyle(name, index)
  const emojiKey = emojisByKey.find(entry => entry.keys.some(k => lower.includes(k)))
  const fallbackEmojis = ['🧸', '🧩', '🎲', '🚗', '🎨', '🎭']
  const fallbackTags = ['Diversión', 'Aprendizaje', 'Familia', 'Aventura', 'Creatividad', 'Imaginación']
  return {
    emoji: emojiKey?.emoji || fallbackEmojis[index % fallbackEmojis.length],
    tag: emojiKey?.tag || fallbackTags[index % fallbackTags.length],
    bgClass: style.bgClass,
    overlayClass: style.overlayClass,
  }
}

const displayCategories = computed(() => {
  return categories.value.map((cat, i) => {
    const image = (cat.imageUrls && cat.imageUrls.length > 0)
      ? cat.imageUrls[0]
      : null
    const style = getStyleForCategory(cat.name, i)
    return {
      id: cat.id,
      name: cat.name,
      description: cat.description || '',
      image,
      ...style,
    }
  })
})

defineOptions({ name: 'CategoriesSection' })
</script>

<style scoped>
/* ===== SECCIÓN ===== */
.categories-section {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  background: #ffffff;
}

@media (min-width: 1024px) {
  .categories-section {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
}

/* ===== ENCABEZADO ===== */
.categories-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.categories-kicker {
  display: inline-block;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  color: #D49B27;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.categories-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.875rem;
  color: #052A75;
}

.categories-subtitle {
  font-family: 'Open Sans', sans-serif;
  color: #3A4A6B;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 32rem;
  font-size: 1.125rem;
}

@media (min-width: 640px) {
  .categories-title {
    font-size: 2.25rem;
  }
}

@media (min-width: 1024px) {
  .categories-title {
    font-size: 3rem;
  }
}

/* ===== GRID ===== */
.categories-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

@media (min-width: 640px) {
  .categories-grid {
    gap: 1.5rem;
  }
}

@media (min-width: 768px) {
  .categories-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .categories-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* ===== SKELETON ===== */
.skeleton-card {
  border-radius: 20px;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  pointer-events: none;
}

.skeleton-img {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f5f0e8 25%, #ece5d8 50%, #f5f0e8 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* ===== CARD ===== */
.category-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 20px;
  background: #ffffff;
  border: 1px solid rgba(201, 214, 238, 0.6);
  box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  cursor: pointer;
}

.category-card:hover {
  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.08), 0 15px 20px -10px rgba(0, 0, 0, 0.04);
  transform: translateY(-0.375rem);
}

/* ===== IMAGEN ===== */
.card-image {
  position: relative;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  flex-shrink: 0;
}

.card-image img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease-out;
}

.card-image-fallback {
  position: absolute;
  inset: 0;
  transition: transform 0.7s ease-out;
}

.category-card:hover .card-image img,
.category-card:hover .card-image-fallback {
  transform: scale(1.1);
}

/* ===== BADGE DE CATEGORÍA (dorado) ===== */
.card-badge {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  z-index: 10;
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  background: #D49B27;
  color: #ffffff;
  padding: 0.25rem 0.75rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 0.5625rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

@media (min-width: 640px) {
  .card-badge {
    padding: 0.375rem 0.875rem;
    font-size: 0.6875rem;
  }
}

/* ===== CONTENIDO ===== */
.card-content {
  position: relative;
  flex: 1;
  background: #ffffff;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.25;
  color: #052A75;
}

.card-description {
  margin-top: 0.25rem;
  padding-right: 2.5rem;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.6875rem;
  line-height: 1.625;
  color: #6B7280;
}

@media (min-width: 640px) {
  .card-content {
    padding: 1rem;
  }

  .card-title {
    font-size: 1.125rem;
  }

  .card-description {
    margin-top: 0.375rem;
    font-size: 0.675rem;
    padding-right: 3.5rem;
  }
}

@media (min-width: 1024px) {
  .card-content {
    padding: 1.25rem;
  }

  .card-title {
    font-size: 1.25rem;
  }

  .card-description {
    padding-right: 5rem;
  }
}

/* ===== ESQUINA DECORATIVA + FLECHA ===== */
.card-corner {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 3rem;
  height: 3rem;
  pointer-events: none;
}

.corner-gold,
.corner-blue {
  position: absolute;
  bottom: 0;
  right: 0;
  border-top-left-radius: 9999px;
}

.corner-gold {
  width: 100%;
  height: 100%;
  background: #D49B27;
}

.corner-blue {
  width: 78%;
  height: 78%;
  background: #052A75;
}

.corner-arrow {
  position: absolute;
  bottom: 0.25rem;
  right: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: #052A75;
  color: #ffffff;
  box-shadow: 0 0 0 2px #ffffff, 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.category-card:hover .corner-arrow {
  background: #D49B27;
}

.corner-arrow svg {
  width: 0.625rem;
  height: 0.625rem;
}

@media (min-width: 640px) {
  .card-corner {
    width: 4rem;
    height: 4rem;
  }

  .corner-arrow {
    width: 2rem;
    height: 2rem;
    bottom: 0.375rem;
    right: 0.375rem;
  }

  .corner-arrow svg {
    width: 0.875rem;
    height: 0.875rem;
  }
}

@media (min-width: 1024px) {
  .card-corner {
    width: 5rem;
    height: 5rem;
  }

  .corner-arrow {
    width: 2.25rem;
    height: 2.25rem;
  }
}

/* ===== MOBILE (menos de 640px): circulos en una sola fila ===== */
@media (max-width: 639px) {
  .categories-grid {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 1rem;
    padding-bottom: 0.5rem;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .categories-grid::-webkit-scrollbar {
    display: none;
  }

  .category-card {
    flex: 0 0 auto;
    width: 96px;
    flex-direction: column;
    align-items: center;
    background: transparent;
    border: none;
    box-shadow: none;
    border-radius: 0;
  }

  .card-image {
    width: 96px;
    height: 96px;
    aspect-ratio: auto;
    border-radius: 50%;
    border: 2px solid #D49B27;
    box-shadow: 0 2px 8px rgba(5, 42, 117, 0.12);
  }

  .card-badge,
  .card-description,
  .card-corner {
    display: none;
  }

  .card-content {
    padding: 0.375rem 0 0;
    background: transparent;
    align-items: center;
  }

  .card-title {
    font-size: 0.7rem;
    text-align: center;
    line-height: 1.2;
  }
}

</style>
