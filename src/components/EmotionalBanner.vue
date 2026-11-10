<template>
  <section class="emotional-banner relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <img
        src="https://res.cloudinary.com/dlwzazojt/image/upload/v1787584794/emotional_gnufw7.jpg"
        alt=""
        class="bg-emotional"
      />
    </div>

    <div class="banner-line banner-line-top" aria-hidden="true"></div>

    <div class="section-padding relative z-10 pt-10 pb-14 sm:pt-10 sm:pb-16">
      <div class="section-container">
        <div class="text-center">
          <div class="mb-3 sm:mb-6">
            <svg
              class="w-12 h-12 sm:w-16 sm:h-16 mx-auto animate-heartbeat"
              viewBox="0 0 64 76"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="eb-gold" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stop-color="#F2D98D" />
                  <stop offset="0.5" stop-color="#D49B27" />
                  <stop offset="1" stop-color="#A8781C" />
                </linearGradient>
              </defs>
              <path
                d="M32 13.5c-2.9-4.8-9.9-6.5-14.8-3.2-4.9 3.3-5.6 10-1.7 15.1L32 35l16.5-9.6c3.9-5.1 3.2-11.8-1.7-15.1C41.9 7 34.9 8.7 32 13.5z"
                fill="url(#eb-gold)"
              />
              <rect x="29.2" y="31" width="5.6" height="41" rx="2.2" fill="url(#eb-gold)" />
              <rect x="16.5" y="40" width="31" height="5.5" rx="2.75" fill="url(#eb-gold)" />
              <path
                d="M13 56.5C13 69.5 21.5 75 32 75s19-5.5 19-18.5"
                fill="none"
                stroke="url(#eb-gold)"
                stroke-width="6"
                stroke-linecap="round"
              />
              <path d="M13 56.5 L4.5 44.5 L15.5 47 Z" fill="url(#eb-gold)" />
              <path d="M51 56.5 L59.5 44.5 L48.5 47 Z" fill="url(#eb-gold)" />
            </svg>
          </div>

          <blockquote
            class="font-montserrat font-extrabold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-falcar-brown leading-snug tracking-tight text-balance"
          >
            Porque cada proyecto es una oportunidad,<br class="hidden sm:inline" />
            y el valor real que creamos juntos permanece para siempre.
          </blockquote>

          <p
            class="font-script text-falcar-yellow font-bold mt-4 sm:mt-7 text-lg sm:text-2xl lg:text-3xl leading-snug text-balance"
          >
            Dios es nuestra fortaleza — De su mano construimos nuestro futuro
          </p>
        </div>
      </div>
    </div>

    <div class="banner-line banner-line-bottom" aria-hidden="true">
      <span class="banner-line-seg"></span>
      <svg class="banner-hand-heart" viewBox="0 0 64 56">
        <defs>
          <linearGradient id="eb-gold-h" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#F2D98D" />
            <stop offset="0.5" stop-color="#D49B27" />
            <stop offset="1" stop-color="#A8781C" />
          </linearGradient>
        </defs>
        <g fill="url(#eb-gold-h)">
          <path
            d="M32 17C30 10 25 10 24 17C22 10 17 10 16 17C14 11 9 12 8 19C4 28 5 40 13 48C19 53 27 55 32 52Z"
          />
          <path
            d="M32 17C30 10 25 10 24 17C22 10 17 10 16 17C14 11 9 12 8 19C4 28 5 40 13 48C19 53 27 55 32 52Z"
            transform="translate(64 0) scale(-1 1)"
          />
        </g>
        <line x1="32" y1="17" x2="32" y2="52" stroke="#FBF7EF" stroke-width="1.4" />
      </svg>
      <span class="banner-line-seg"></span>
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({ name: 'EmotionalBanner' })
</script>

<style scoped>
.emotional-banner {
  background: linear-gradient(180deg, #fdfaf3 0%, #f9f4e9 100%);
}

.bg-emotional {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.18;
}

.banner-line-top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(212, 155, 39, 0.15) 0%,
    rgba(212, 155, 39, 0.75) 12%,
    rgba(212, 155, 39, 0.75) 88%,
    rgba(212, 155, 39, 0.15) 100%
  );
}

.banner-line-bottom {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
}

.banner-line-seg {
  flex: 1;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(212, 155, 39, 0.15) 0%,
    rgba(212, 155, 39, 0.75) 12%,
    rgba(212, 155, 39, 0.75) 88%,
    rgba(212, 155, 39, 0.15) 100%
  );
}

.banner-line-bottom .banner-line-seg:first-child {
  background: linear-gradient(
    90deg,
    rgba(212, 155, 39, 0.15) 0%,
    rgba(212, 155, 39, 0.75) 100%
  );
}

.banner-line-bottom .banner-line-seg:last-child {
  background: linear-gradient(
    90deg,
    rgba(212, 155, 39, 0.75) 0%,
    rgba(212, 155, 39, 0.15) 100%
  );
}

.banner-hand-heart {
  width: 34px;
  height: 30px;
  margin: 0 10px;
  flex-shrink: 0;
  filter: drop-shadow(0 1px 1px rgba(122, 90, 20, 0.35));
}

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
  }
  15% {
    transform: scale(1.12);
  }
  30% {
    transform: scale(1);
  }
  45% {
    transform: scale(1.08);
  }
  60% {
    transform: scale(1);
  }
}

.animate-heartbeat {
  animation: heartbeat 2.4s ease-in-out infinite;
  filter: drop-shadow(0 1px 2px rgba(122, 90, 20, 0.3));
}
</style>
