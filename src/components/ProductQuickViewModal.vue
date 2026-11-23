<template>
  <div v-if="open" class="qv-overlay" role="dialog" aria-modal="true" aria-label="Detalle del producto" @click="emit('close')">
    <div class="qv-modal" @click.stop>
      <button class="qv-close" type="button" aria-label="Cerrar" @click="emit('close')">
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path
            fill="currentColor"
            d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 1 0 5.7 7.11L10.59 12l-4.9 4.89a1 1 0 1 0 1.41 1.42L12 13.41l4.89 4.9a1 1 0 0 0 1.42-1.41L13.41 12l4.9-4.89a1 1 0 0 0-.01-1.4z"
          />
        </svg>
      </button>

      <div v-if="product" class="qv-body">
        <!-- Media -->
        <div class="qv-media">
          <div class="qv-hero">
            <span
              v-if="product.status !== 'available'"
              class="qv-status-badge"
              :class="product.status === 'out-of-stock' ? 'is-out' : 'is-soon'"
            >
              {{ statusLabel }}
            </span>
            <img :src="activeImage" :alt="product.name" loading="lazy" decoding="async" />
          </div>

          <div v-if="product.images?.length > 1" class="qv-thumbs" aria-label="Galería">
            <button
              v-for="(img, idx) in product.images"
              :key="img + idx"
              type="button"
              class="qv-thumb"
              :class="{ active: idx === activeImageIndex }"
              @click="activeImageIndex = idx"
              :aria-label="`Ver imagen ${idx + 1}`"
            >
              <img :src="img" :alt="`${product.name} - ${idx + 1}`" loading="lazy" decoding="async" />
            </button>
          </div>
        </div>

        <!-- Info -->
        <div class="qv-info">
          <span class="qv-kicker">{{ categoryLabel }}</span>
          <h2 class="qv-title">{{ product.name }}</h2>

          <div v-if="product.brand || product.sku" class="qv-tags">
            <span v-if="product.brand" class="qv-tag">Marca: {{ product.brand }}</span>
            <span v-if="product.sku" class="qv-tag">SKU: {{ product.sku }}</span>
          </div>

          <div class="qv-price">
            <div class="qv-price-main">
              <span class="qv-price-current">${{ formatPrice(product.price) }}</span>
              <span v-if="product.originalPrice && product.originalPrice > product.price" class="qv-price-original">${{ formatPrice(product.originalPrice) }}</span>
            </div>
            <span v-if="discountPercent > 0" class="qv-discount">-{{ discountPercent }}%</span>
          </div>

          <p v-if="product.description" class="qv-description">{{ product.description }}</p>

          <div v-if="product.colors?.length" class="qv-colors">
            <div class="qv-colors-title">Tallas disponibles</div>
            <div class="qv-colors-list">
              <button
                v-for="c in product.colors"
                :key="c"
                type="button"
                class="qv-color"
                :class="{ active: selectedColors.includes(c) }"
                @click="toggleColor(c)"
              >
                {{ c }}
              </button>
            </div>
            <p v-if="selectedColors.length > 0" class="qv-colors-hint">{{ selectedColors.length }} talla(s) seleccionada(s)</p>
          </div>

          <div class="qv-actions">
            <p v-if="showSizeWarning" class="qv-warning">Selecciona al menos una talla antes de agregar</p>
            <p v-else-if="product.status === 'available' && product.colors?.length && selectedColors.length === 0" class="qv-hint">Escoge tu(s) talla(s)</p>
            <button
              type="button"
              class="qv-add"
              :disabled="product.status !== 'available'"
              @click="addToQuotationFromModal"
            >
              {{ product.status === 'available' ? 'Agregar al carrito' : 'No disponible' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { useQuotation, type QuotationProduct } from '@/composables/useQuotation'
import { useProducts } from '@/composables/useProducts'
import type { Product } from '@/types/ProductType'

const props = defineProps<{
  open: boolean
  product: Product | null
}>()

const emit = defineEmits<{ close: [] }>()

const { addToQuotation, openDrawer } = useQuotation()
const { categories, loadCategories, getCategoryById } = useProducts()

const activeImageIndex = ref(0)
const selectedColors = ref<string[]>([])
const showSizeWarning = ref(false)

const toggleColor = (color: string) => {
  const idx = selectedColors.value.indexOf(color)
  if (idx > -1) selectedColors.value.splice(idx, 1)
  else selectedColors.value.push(color)
}

const categoryLabel = computed(() => {
  if (!props.product) return ''
  const id = String(props.product.category || '')
  const name = getCategoryById(id)?.name
  return (name || 'Sin categoría').toUpperCase()
})

const activeImage = computed(() => {
  const p = props.product
  if (!p) return ''
  const imgs = p.images || []
  return imgs[activeImageIndex.value] || imgs[0] || '/images/banner1.jpg'
})

const statusLabel = computed(() => {
  switch (props.product?.status) {
    case 'out-of-stock':
      return 'Agotado'
    case 'coming-soon':
      return 'Próximamente'
    default:
      return 'Disponible'
  }
})

const discountPercent = computed(() => {
  const p = props.product
  if (!p?.originalPrice || p.originalPrice <= p.price) return 0
  return Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)
})

const formatPrice = (value: number): string => {
  try {
    return Number(value || 0).toLocaleString()
  } catch {
    return String(value || 0)
  }
}

const ensureCategoriesLoaded = async () => {
  if (!categories.value.length) {
    await loadCategories()
  }
}

const addToQuotationFromModal = () => {
  if (!props.product) return
  if (props.product.status !== 'available') return

  if (props.product.colors && props.product.colors.length > 0 && selectedColors.value.length === 0) {
    showSizeWarning.value = true
    setTimeout(() => { showSizeWarning.value = false }, 2500)
    return
  }

  const catName = getCategoryById(String(props.product.category || ''))?.name || ''

  const mapped: QuotationProduct = {
    id: props.product.id,
    name: props.product.name,
    sku: props.product.sku || 'N/A',
    brand: props.product.brand || 'N/A',
    price: props.product.price,
    image: props.product.images?.[0] || '',
    category: String(props.product.category || ''),
    categoryName: catName,
    description: props.product.description,
    inStock: props.product.status === 'available',
    originalPrice: props.product.originalPrice
  }

  const sizesToAdd = selectedColors.value.length > 0 ? selectedColors.value : [undefined]
  for (const size of sizesToAdd) {
    addToQuotation(mapped, 1, size)
  }
  selectedColors.value = []
  emit('close')
  openDrawer()
}

const onKeyDown = (e: KeyboardEvent) => {
  if (!props.open) return
  if (e.key === 'Escape') {
    e.preventDefault()
    emit('close')
  }
}

watch(
  () => props.open,
  async (value) => {
    if (value) {
      window.addEventListener('keydown', onKeyDown)
      await ensureCategoriesLoaded()
    } else {
      window.removeEventListener('keydown', onKeyDown)
    }
  },
  { immediate: true }
)

watch(
  () => props.product?.id,
  () => {
    activeImageIndex.value = 0
    selectedColors.value = []
    showSizeWarning.value = false
  },
  { immediate: true }
)

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeyDown)
})
</script>

<style scoped>
/* ===== OVERLAY & MODAL ===== */
.qv-overlay {
  position: fixed;
  inset: 0;
  z-index: 2200;
  background: rgba(5, 42, 117, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  backdrop-filter: blur(8px);
}

.qv-modal {
  width: min(1100px, calc(100% - 24px));
  max-height: 96vh;
  overflow: auto;
  background: white;
  border-radius: 20px;
  position: relative;
  border: 1px solid rgba(5, 42, 117, 0.08);
  box-shadow: 0 25px 60px rgba(5, 42, 117, 0.25);
}

.qv-close {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: #F4F6FA;
  color: #052A75;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  z-index: 2;
  box-shadow: 0 2px 8px rgba(5, 42, 117, 0.1);
}

.qv-close:hover {
  background: #052A75;
  color: white;
  transform: rotate(90deg);
}

/* ===== LAYOUT ===== */
.qv-body {
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}

.qv-media {
  display: flex;
  flex-direction: column;
}

/* ===== IMAGEN ===== */
.qv-hero {
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 16px;
  background: #F4F6FA;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qv-hero img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  transition: transform 0.4s;
}

.qv-hero:hover img {
  transform: scale(1.03);
}

.qv-status-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 2;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  color: white;
}

.qv-status-badge.is-out {
  background: #D91E28;
}

.qv-status-badge.is-soon {
  background: #D49B27;
}

.qv-thumbs {
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 8px;
}

.qv-thumb {
  border: 2px solid transparent;
  background: #F4F6FA;
  border-radius: 10px;
  padding: 0;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s;
}

.qv-thumb:hover {
  border-color: rgba(212, 155, 39, 0.5);
}

.qv-thumb.active {
  border-color: #D49B27;
  box-shadow: 0 0 0 2px rgba(212, 155, 39, 0.2);
}

.qv-thumb img {
  width: 100%;
  height: 58px;
  object-fit: cover;
  display: block;
}

/* ===== INFO ===== */
.qv-info {
  display: flex;
  flex-direction: column;
}

.qv-kicker {
  font-family: 'Open Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #D49B27;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.qv-title {
  margin-top: 4px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: #052A75;
  line-height: 1.2;
}

.qv-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

.qv-tag {
  font-family: 'Open Sans', sans-serif;
  font-size: 0.75rem;
  color: #3A4A6B;
  background: #F4F6FA;
  border-radius: 999px;
  padding: 0.25rem 0.75rem;
}

/* ===== PRECIO ===== */
.qv-price {
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 12px 16px;
  background: #F4F6FA;
  border-radius: 12px;
  border: 1px solid rgba(5, 42, 117, 0.06);
}

.qv-price-main {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.qv-price-current {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #052A75;
}

.qv-price-original {
  font-size: 0.9rem;
  color: #7A8AAB;
  text-decoration: line-through;
}

.qv-discount {
  background: #D91E28;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.6rem;
  border-radius: 8px;
}

/* ===== DESCRIPCIÓN ===== */
.qv-description {
  margin-top: 14px;
  color: #3A4A6B;
  line-height: 1.7;
  font-size: 0.9rem;
  font-family: 'Open Sans', sans-serif;
  white-space: pre-line;
}

/* ===== TALLAS ===== */
.qv-colors {
  margin-top: 18px;
}

.qv-colors-title {
  font-family: 'Open Sans', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  color: #052A75;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.qv-colors-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.qv-color {
  border: 1px solid rgba(5, 42, 117, 0.15);
  background: white;
  color: #052A75;
  padding: 7px 14px;
  border-radius: 999px;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.qv-color:hover {
  border-color: #D49B27;
}

.qv-color.active {
  border-color: #D49B27;
  background: #FBF3E1;
  box-shadow: 0 0 0 2px rgba(212, 155, 39, 0.2);
}

.qv-colors-hint {
  margin-top: 8px;
  font-size: 0.75rem;
  color: #7A8AAB;
  font-family: 'Open Sans', sans-serif;
}

/* ===== ACCIONES ===== */
.qv-actions {
  margin-top: auto;
  padding-top: 20px;
}

.qv-warning {
  text-align: center;
  font-size: 0.78rem;
  font-weight: 600;
  color: #D91E28;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 8px;
  animation: qv-pulse 1s infinite;
}

.qv-hint {
  text-align: center;
  font-size: 0.78rem;
  color: #7A8AAB;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 8px;
}

@keyframes qv-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

.qv-add {
  width: 100%;
  height: 48px;
  border-radius: 14px;
  border: 0;
  background: #052A75;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 0.92rem;
  cursor: pointer;
  transition: all 0.2s;
}

.qv-add:hover:not(:disabled) {
  background: #D49B27;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(212, 155, 39, 0.35);
}

.qv-add:active {
  transform: scale(0.98);
}

.qv-add:disabled {
  background: #E5E7EB;
  color: #9CA3AF;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 980px) {
  .qv-body {
    grid-template-columns: 1fr;
    padding: 16px;
    gap: 16px;
  }

  .qv-thumbs {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .qv-price-current {
    font-size: 1.25rem;
  }

  .qv-title {
    font-size: 1.35rem;
  }
}
</style>
