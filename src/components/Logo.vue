<template>
  <div class="flex items-center select-none" role="img" :aria-label="ariaLabel">
    <img
      src="/images/logofalcar.png"
      :width="size"
      :height="size"
      alt="FALCAR GROUP S.A.S. Logo"
      class="flex-shrink-0 object-contain mix-blend-multiply"
      :style="{ width: size + 'px', height: 'auto' }"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: number
  showText?: boolean
  ariaLabel?: string
}

withDefaults(defineProps<Props>(), {
  size: 80,
  showText: false,
  ariaLabel: 'FALCAR GROUP S.A.S. - soluciones integrales y juguetes',
})

defineOptions({ name: 'FalcarLogo' })
</script>
