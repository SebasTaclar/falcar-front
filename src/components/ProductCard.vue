<template>
  <div class="product-card">
    <!-- Image -->
    <div class="product-card__image" :class="!productImage && categoryStyle.bgClass" @click.prevent="$emit('quickView', product)">
      <img
        v-if="productImage && !imgError"
        :src="productImage"
        :alt="product.name"
        class="product-card__img"
        loading="lazy"
        @error="imgError = true"
      />
      <div v-else class="product-card__img-placeholder">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A1.5 1.5 0 0021.75 19.5V4.5A1.5 1.5 0 0020.25 3H3.75A1.5 1.5 0 002.25 4.5v15A1.5 1.5 0 003.75 21zM9 8.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
        </svg>
      </div>

      <!-- Discount badge -->
      <div v-if="product.originalPrice && product.originalPrice > product.price" class="product-card__discount-wrap">
        <span class="product-card__discount">
          -{{ Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) }}%
        </span>
      </div>

      <!-- Eye button -->
      <button
        @click.prevent="$emit('quickView', product)"
        class="product-card__eye"
        aria-label="Vista rapida"
      >
        <svg class="product-card__eye-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
      </button>
    </div>

    <!-- Info -->
    <div class="product-card__info" :class="categoryStyle.infoClass">
      <!-- Status badge (encima de la categoría) -->
      <span class="product-card__status" :class="statusBadgeClass">
        {{ statusLabel }}
      </span>
      <p class="product-card__category" :class="categoryStyle.labelClass">{{ categoryName }}</p>
      <h3 class="product-card__title">
        {{ product.name }}
      </h3>
      <div v-if="product.description" class="product-card__desc">
        <p class="product-card__desc-text">
          {{ product.description }}
        </p>
        <button @click.prevent="$emit('quickView', product)" class="product-card__more">Ver mas</button>
      </div>

      <!-- Price -->
      <div class="product-card__price-row">
        <span class="product-card__price">${{ formatPrice(product.price) }}</span>
        <span v-if="product.originalPrice && product.originalPrice > product.price" class="product-card__price-old">${{ formatPrice(product.originalPrice) }}</span>
      </div>

      <!-- Add to cart / View product -->
      <button
        v-if="product.status === 'available'"
        @click.prevent="handleAddToCart"
        class="product-card__btn"
      >
        Agregar al carrito
      </button>
      <button
        v-else
        @click.prevent="$emit('quickView', product)"
        class="product-card__btn"
      >
        Ver producto
      </button>
    </div>
  </div>

  <!-- Size selection modal -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-200"
      leave-active-class="transition-all duration-150"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="showSizeModal" class="size-modal" @click.self="showSizeModal = false">
        <div class="size-modal__box" @click.stop>
          <h4 class="size-modal__title">Escoge tu talla</h4>
          <p class="size-modal__product">{{ product.name }}</p>
          <div class="size-modal__sizes">
            <button
              v-for="color in product.colors"
              :key="color"
              type="button"
              @click="toggleSize(color)"
              :class="[
                'size-modal__size',
                selectedSizes.includes(color) ? 'size-modal__size--selected' : ''
              ]"
            >
              {{ color }}
            </button>
          </div>
          <p v-if="selectedSizes.length > 0" class="size-modal__count">{{ selectedSizes.length }} talla(s) seleccionada(s)</p>
          <button @click="confirmAddToCart" :disabled="selectedSizes.length === 0" :class="['size-modal__confirm', selectedSizes.length > 0 ? '' : 'size-modal__confirm--disabled']">
            Agregar al carrito
          </button>
          <button @click="showSizeModal = false; selectedSizes = []" class="size-modal__cancel">
            Cancelar
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useQuotation } from '@/composables/useQuotation'
import { useCategories } from '@/composables/useCategories'
import { getCategoryStyle } from '@/utils/categoryStyles'
import type { Product } from '@/types/ProductType'

const props = defineProps<{
  product: Product
}>()

const { categories } = useCategories()

const categoryName = computed(() => {
  const cat = categories.value.find(c => String(c.id) === String(props.product.category))
  return cat?.name || props.product.category
})

const categoryStyle = computed(() => getCategoryStyle(categoryName.value, props.product.category))

const productImage = computed(() => {
  return props.product.images && props.product.images.length > 0 ? props.product.images[0] : ''
})

const imgError = ref(false)

watch(() => props.product.id, () => { imgError.value = false })

const statusLabel = computed(() => {
  switch (props.product.status) {
    case 'out-of-stock': return 'Agotado'
    case 'coming-soon': return 'Proximamente'
    case 'available': return 'Disponible'
    default: return 'Disponible'
  }
})

const statusBadgeClass = computed(() => {
  switch (props.product.status) {
    case 'out-of-stock': return 'bg-red-500 text-white'
    case 'coming-soon': return 'bg-amber-500 text-white'
    case 'available': return 'bg-emerald-500 text-white'
    default: return 'bg-emerald-500 text-white'
  }
})

defineEmits<{
  quickView: [product: Product]
}>()

const { addToQuotation, openDrawer } = useQuotation()

const showSizeModal = ref(false)
const selectedSizes = ref<string[]>([])

const toggleSize = (size: string) => {
  const idx = selectedSizes.value.indexOf(size)
  if (idx > -1) selectedSizes.value.splice(idx, 1)
  else selectedSizes.value.push(size)
}

const handleAddToCart = () => {
  if (props.product.colors && props.product.colors.length > 0) {
    selectedSizes.value = []
    showSizeModal.value = true
  } else {
    addToQuotation({
      id: props.product.id,
      name: props.product.name,
      sku: props.product.id,
      brand: 'FALCAR GROUP',
      price: props.product.price,
      image: productImage.value,
      category: props.product.category,
      categoryName: categoryName.value,
      description: props.product.description || '',
      inStock: true
    }, 1)
    openDrawer()
  }
}

const confirmAddToCart = () => {
  for (const size of selectedSizes.value) {
    addToQuotation({
      id: props.product.id,
      name: props.product.name,
      sku: props.product.id,
      brand: 'FALCAR GROUP',
      price: props.product.price,
      image: productImage.value,
      category: props.product.category,
      categoryName: categoryName.value,
      description: props.product.description || '',
      inStock: true
    }, 1, size)
  }
  showSizeModal.value = false
  selectedSizes.value = []
  openDrawer()
}

const formatPrice = (price: number) => {
  return price.toLocaleString('es-CO')
}

defineOptions({ name: 'ProductCard' })
</script>

<style scoped>
/* ========== BASE / DESKTOP (todos los tamaños) ========== */
.product-card {
  background-color: #ffffff;
  border-radius: 1.5rem;
  border: 1px solid rgba(244, 246, 250, 0.5);
  box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.03);
  overflow: hidden;
  transition: all 0.3s ease-out;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.08), 0 15px 20px -10px rgba(0, 0, 0, 0.04);
  transform: translateY(-0.25rem);
}

/* ========== DESKTOP (base, sin media query) ========== */
.product-card__image {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background-color: #ffffff;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-card__img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.5s ease;
}

.product-card__img-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(5, 42, 117, 0.3);
}

.product-card__img-placeholder svg {
  width: 64px;
  height: 64px;
}

.product-card:hover .product-card__img {
  transform: scale(1.05);
}

/* Discount badge */
.product-card__discount-wrap {
  position: absolute;
  bottom: 0.75rem;
  left: 0.75rem;
  z-index: 10;
}

.product-card__discount {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.625rem;
  border-radius: 0.5rem;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  background-color: #D91E28;
  color: #ffffff;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

/* Eye button */
.product-card__eye {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  z-index: 10;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 9999px;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  cursor: pointer;
}

.product-card__eye:hover {
  background-color: rgba(0, 0, 0, 0.5);
  transform: scale(1.1);
}

.product-card__eye-icon {
  width: 1rem;
  height: 1rem;
  color: #ffffff;
}

/* ========== INFO ========== */
.product-card__info {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

/* Status badge */
.product-card__status {
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  padding: 0.125rem 0.5rem;
  border-radius: 0.5rem;
  font-family: 'Open Sans', sans-serif;
  font-size: 10px;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

/* Category */
.product-card__category {
  font-family: 'Open Sans', sans-serif;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.125rem;
  font-weight: 700;
}

/* Title */
.product-card__title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.175rem;
  color: #052A75;
  line-height: 1.375;
  margin-bottom: 0.375rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.3s ease;
}

.product-card:hover .product-card__title {
  color: #B8861F;
}

/* Description */
.product-card__desc {
  margin-bottom: 0.5rem;
}

.product-card__desc-text {
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: #7A8AAB;
  line-height: 1.625;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: pre-line;
}

.product-card__more {
  font-family: 'Open Sans', sans-serif;
  font-size: 10px;
  color: #D49B27;
  font-weight: 600;
  margin-top: 0.125rem;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
}

.product-card__more:hover {
  text-decoration: underline;
}

/* Price */
.product-card__price-row {
  display: flex;
  align-items: baseline;
  gap: 0.375rem;
  margin-top: auto;
  margin-bottom: 0.5rem;
}

.product-card__price {
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 1.325rem;
  color: #052A75;
}

.product-card__price-old {
  font-family: 'Open Sans', sans-serif;
  font-size: 0.75rem;
  color: #7A8AAB;
  text-decoration: line-through;
}

/* Buttons */
.product-card__btn {
  width: 100%;
  padding: 0.625rem 0.75rem;
  background-color: #052A75;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 0.75rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.product-card__btn:hover {
  background-color: #D49B27;
  color: #052A75;
}

/* ========== SIZE MODAL ========== */
.size-modal {
  position: fixed;
  inset: 0;
  z-index: 2300;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.size-modal__box {
  background-color: #ffffff;
  border-radius: 1rem;
  padding: 1.25rem;
  width: 100%;
  max-width: 20rem;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.size-modal__title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  color: #052A75;
  margin-bottom: 0.25rem;
}

.size-modal__product {
  font-family: 'Open Sans', sans-serif;
  font-size: 0.75rem;
  color: #7A8AAB;
  margin-bottom: 1rem;
}

.size-modal__sizes {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.size-modal__size {
  padding: 0.625rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(244, 246, 250, 0.6);
  background-color: #ffffff;
  color: #052A75;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.size-modal__size:hover {
  background-color: #052A75;
  color: #ffffff;
  border-color: #052A75;
}

.size-modal__size--selected {
  background-color: #052A75;
  color: #ffffff;
  border-color: #052A75;
}

.size-modal__count {
  font-family: 'Open Sans', sans-serif;
  font-size: 0.75rem;
  color: #7A8AAB;
  margin-bottom: 0.75rem;
  text-align: center;
}

.size-modal__confirm {
  width: 100%;
  padding: 0.625rem;
  border-radius: 0.75rem;
  border: none;
  background-color: #052A75;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 0.5rem;
}

.size-modal__confirm:hover {
  background-color: #D49B27;
  color: #052A75;
}

.size-modal__confirm--disabled {
  background-color: #e5e7eb;
  color: #9ca3af;
  cursor: not-allowed;
}

.size-modal__cancel {
  width: 100%;
  padding: 0.625rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(244, 246, 250, 0.6);
  background-color: transparent;
  color: #3A4A6B;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.size-modal__cancel:hover {
  background-color: rgba(244, 246, 250, 0.3);
}

/* ========== TABLET (640px - 1024px) ========== */
@media (max-width: 1024px) and (min-width: 640px) {
  .product-card__image {
    height: 260px;
  }

  .product-card__eye {
    top: 0.625rem;
    right: 0.625rem;
    width: 2rem;
    height: 2rem;
  }

  .product-card__info {
    padding: 0.875rem;
  }

  .product-card__title {
    font-size: 1rem;
  }

  .product-card__desc-text {
    font-size: 10px;
  }

  .product-card__price {
    font-size: 1.15rem;
  }

  .product-card__price-old {
    font-size: 0.7rem;
  }

  .product-card__btn {
    padding: 0.5rem 0.75rem;
    font-size: 11px;
  }
}

/* ========== MOBILE / TABLET PEQUEÑA (menos de 640px) ========== */
@media (max-width: 639px) {
  .product-card__image {
    height: auto;
    min-height: 130px;
  }

  .product-card__img {
    height: auto;
  }



  .product-card__img-placeholder svg {
    width: 56px;
    height: 56px;
  }

  .product-card__discount-wrap {
    bottom: 0.5rem;
    left: 0.5rem;
  }

  .product-card__discount {
    padding: 0.125rem 0.5rem;
    font-size: 10px;
  }

  .product-card__eye {
    top: 0.5rem;
    right: 0.5rem;
    width: 1.75rem;
    height: 1.75rem;
  }

  .product-card__eye-icon {
    width: 0.875rem;
    height: 0.875rem;
  }

  .product-card__info {
    padding: 0.625rem;
  }

  .product-card__status {
    font-size: 9px;
  }

  .product-card__category {
    font-size: 9px;
  }

  .product-card__title {
    font-size: 0.85rem;
    margin-bottom: 0.25rem;
  }

  .product-card__desc {
    margin-bottom: 0.375rem;
  }

  .product-card__desc-text {
    font-size: 9px;
  }

  .product-card__more {
    font-size: 9px;
  }

  .product-card__price-row {
    gap: 0.25rem;
    margin-bottom: 0.375rem;
  }

  .product-card__price {
    font-size: 1rem;
  }

  .product-card__price-old {
    font-size: 10px;
  }

  .product-card__btn {
    padding: 0.5rem 0.75rem;
    font-size: 11px;
  }
}

</style>
