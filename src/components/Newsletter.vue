<template>
  <section class="newsletter-section relative overflow-hidden">
    <!-- Defs compartidos para rayas doradas -->
    <svg width="0" height="0" class="absolute w-0 h-0" aria-hidden="true">
      <defs>
        <g id="nl-rays" fill="none" stroke="#D49B27" stroke-width="1.4" stroke-linecap="round">
          <path d="M0 55 L55 0" />
          <path d="M0 90 L90 0" opacity="0.6" />
          <path d="M0 125 L125 0" opacity="0.35" />
          <path d="M0 158 L158 0" opacity="0.18" />
          <path d="M30 0 L0 30" opacity="0.9" />
          <path d="M65 0 L0 65" opacity="0.5" />
          <rect x="38" y="38" width="42" height="42" transform="rotate(45 59 59)" opacity="0.75" />
          <rect x="72" y="72" width="26" height="26" transform="rotate(45 85 85)" opacity="0.45" />
          <path d="M100 0 L0 100" opacity="0.4" />
        </g>
        <g id="nl-rays-side" fill="none" stroke="#D49B27" stroke-width="1.3" stroke-linecap="round">
          <path d="M0 35 L35 0" />
          <path d="M0 70 L70 0" opacity="0.6" />
          <path d="M0 105 L105 0" opacity="0.32" />
          <path d="M0 138 L138 0" opacity="0.16" />
          <path d="M0 12 L12 0" opacity="0.9" />
          <rect x="26" y="26" width="32" height="32" transform="rotate(45 42 42)" opacity="0.65" />
          <rect x="56" y="56" width="20" height="20" transform="rotate(45 66 66)" opacity="0.4" />
        </g>
        <g id="nl-rays-top" fill="none" stroke="#D49B27" stroke-width="1.3" stroke-linecap="round">
          <path d="M70 0 L0 70" opacity="0.55" />
          <path d="M70 0 L140 70" opacity="0.55" />
          <path d="M40 0 L0 40" opacity="0.8" />
          <path d="M100 0 L140 40" opacity="0.8" />
          <path d="M70 0 L35 35" opacity="0.4" />
          <path d="M70 0 L105 35" opacity="0.4" />
          <rect x="55" y="18" width="30" height="30" transform="rotate(45 70 33)" opacity="0.6" />
          <path d="M10 0 L0 10" opacity="0.9" />
          <path d="M130 0 L140 10" opacity="0.9" />
        </g>
      </defs>
    </svg>

    <!-- Esquinas -->
    <div class="deco deco-tl" aria-hidden="true"><svg viewBox="0 0 160 160"><use href="#nl-rays" /></svg></div>
    <div class="deco deco-tr" aria-hidden="true"><svg viewBox="0 0 160 160"><use href="#nl-rays" /></svg></div>
    <div class="deco deco-bl" aria-hidden="true"><svg viewBox="0 0 160 160"><use href="#nl-rays" /></svg></div>
    <div class="deco deco-br" aria-hidden="true"><svg viewBox="0 0 160 160"><use href="#nl-rays" /></svg></div>

    <!-- Laterales (izquierda / derecha) -->
    <div class="deco deco-left" aria-hidden="true"><svg viewBox="0 0 145 145"><use href="#nl-rays" /></svg></div>
    <div class="deco deco-right" aria-hidden="true"><svg viewBox="0 0 145 145"><use href="#nl-rays" /></svg></div>

    <!-- Centro superior / inferior -->
    <div class="deco deco-top" aria-hidden="true"><svg viewBox="0 0 140 75"><use href="#nl-rays-top" /></svg></div>
    <div class="deco deco-bottom" aria-hidden="true"><svg viewBox="0 0 140 75"><use href="#nl-rays-top" /></svg></div>

    <!-- Acentos intermedios -->
    <div class="deco deco-mid-tl" aria-hidden="true"><svg viewBox="0 0 90 90"><use href="#nl-rays-side" /></svg></div>
    <div class="deco deco-mid-br" aria-hidden="true"><svg viewBox="0 0 90 90"><use href="#nl-rays-side" /></svg></div>

    <div class="section-padding relative z-10 py-8 sm:py-10 lg:py-12">
      <div class="section-container">
        <div class="text-center max-w-3xl mx-auto">
          <!-- Ancla dorada con corazón -->
          <div class="mb-4 sm:mb-6 flex justify-center">
            <svg class="w-12 h-12 sm:w-16 sm:h-16 animate-bounce-gentle" viewBox="0 0 64 76" aria-hidden="true">
              <defs>
                <linearGradient id="nl-gold" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stop-color="#F2D98D" />
                  <stop offset="0.5" stop-color="#D49B27" />
                  <stop offset="1" stop-color="#A8781C" />
                </linearGradient>
              </defs>
              <path
                d="M32 13.5c-2.9-4.8-9.9-6.5-14.8-3.2-4.9 3.3-5.6 10-1.7 15.1L32 35l16.5-9.6c3.9-5.1 3.2-11.8-1.7-15.1C41.9 7 34.9 8.7 32 13.5z"
                fill="url(#nl-gold)"
              />
              <rect x="29.2" y="31" width="5.6" height="41" rx="2.2" fill="url(#nl-gold)" />
              <rect x="16.5" y="40" width="31" height="5.5" rx="2.75" fill="url(#nl-gold)" />
              <path
                d="M13 56.5C13 69.5 21.5 75 32 75s19-5.5 19-18.5"
                fill="none"
                stroke="url(#nl-gold)"
                stroke-width="6"
                stroke-linecap="round"
              />
              <path d="M13 56.5 L4.5 44.5 L15.5 47 Z" fill="url(#nl-gold)" />
              <path d="M51 56.5 L59.5 44.5 L48.5 47 Z" fill="url(#nl-gold)" />
            </svg>
          </div>

          <h2 class="font-fredoka font-bold text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">
            <span class="text-white">¡Escríbenos por</span>
            <span class="text-falcar-yellow"> WhatsApp!</span>
          </h2>

          <p class="font-poppins text-white/85 text-sm sm:text-lg max-w-xl mx-auto mb-7 sm:mb-9 leading-relaxed">
            Estamos listos para ayudarte. Resolvemos tus dudas y te atendemos con calidez, rápido y directo.
          </p>

          <!-- CTA WhatsApp dorado -->
          <a
            href="https://wa.me/573144406263?text=%C2%A1Hola!%20Bienvenido%20a%20FALCAR%20GROUP%20S.A.S.%20%F0%9F%91%8D%0A%0AEstamos%20felices%20de%20ayudarte.%20%C2%A1Cu%C3%A9ntanos%20en%20qu%C3%A9%20podemos%20ayudarte%20y%20muy%20pronto%20responderemos%20tu%20mensaje."
            target="_blank"
            rel="noopener noreferrer"
            class="whatsapp-cta inline-flex items-center gap-3 sm:gap-4"
            aria-label="Escríbenos al WhatsApp 314 440 6263"
          >
            <span class="cta-icon">
              <svg class="w-6 h-6 sm:w-7 sm:h-7" fill="#25D366" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488"/></svg>
            </span>
            <span class="flex flex-col items-start leading-tight text-left">
              <span class="text-[11px] sm:text-xs font-poppins text-white/90">Escríbenos ahora</span>
              <span class="text-lg sm:text-2xl font-montserrat font-extrabold tracking-wide text-white">314 440 6263</span>
            </span>
          </a>

          <!-- Badges de beneficios -->
          <div class="flex flex-nowrap items-stretch justify-center gap-2 sm:gap-4 mt-8 sm:mt-10">
            <div class="feature-badge">
              <span class="badge-icon">
                <svg viewBox="0 0 64 76" class="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true">
                  <path d="M32 13.5c-2.9-4.8-9.9-6.5-14.8-3.2-4.9 3.3-5.6 10-1.7 15.1L32 35l16.5-9.6c3.9-5.1 3.2-11.8-1.7-15.1C41.9 7 34.9 8.7 32 13.5z" fill="#D49B27" />
                  <rect x="29.2" y="31" width="5.6" height="41" rx="2.2" fill="#D49B27" />
                  <rect x="16.5" y="40" width="31" height="5.5" rx="2.75" fill="#D49B27" />
                  <path d="M13 56.5C13 69.5 21.5 75 32 75s19-5.5 19-18.5" fill="none" stroke="#D49B27" stroke-width="6" stroke-linecap="round" />
                  <path d="M13 56.5 L4.5 44.5 L15.5 47 Z" fill="#D49B27" />
                  <path d="M51 56.5 L59.5 44.5 L48.5 47 Z" fill="#D49B27" />
                </svg>
              </span>
              <span class="badge-text">
                <span class="badge-title">Envíos a todo Colombia</span>
                <span class="badge-sub">— Confiables y Seguros</span>
              </span>
            </div>

            <div class="feature-badge">
              <span class="badge-icon">
                <svg viewBox="0 0 24 24" class="w-5 h-5 sm:w-6 sm:h-6" fill="#D49B27" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
              </span>
              <span class="badge-text">
                <span class="badge-title">Pago seguro</span>
                <span class="badge-sub">— Protegido y Transparente</span>
              </span>
            </div>

            <div class="feature-badge">
              <span class="badge-icon">
                <svg viewBox="0 0 32 32" class="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true">
                  <path d="M16 27C12 24 9 20 8 15" fill="none" stroke="#D49B27" stroke-width="1.8" stroke-linecap="round" />
                  <path d="M16 27C20 24 23 20 24 15" fill="none" stroke="#D49B27" stroke-width="1.8" stroke-linecap="round" />
                  <ellipse cx="9" cy="13" rx="2.6" ry="1.5" transform="rotate(-55 9 13)" fill="#D49B27" />
                  <ellipse cx="10.5" cy="18" rx="2.6" ry="1.5" transform="rotate(-85 10.5 18)" fill="#D49B27" />
                  <ellipse cx="13" cy="22.5" rx="2.6" ry="1.5" transform="rotate(-115 13 22.5)" fill="#D49B27" />
                  <ellipse cx="23" cy="13" rx="2.6" ry="1.5" transform="rotate(55 23 13)" fill="#D49B27" />
                  <ellipse cx="21.5" cy="18" rx="2.6" ry="1.5" transform="rotate(85 21.5 18)" fill="#D49B27" />
                  <ellipse cx="19" cy="22.5" rx="2.6" ry="1.5" transform="rotate(115 19 22.5)" fill="#D49B27" />
                </svg>
              </span>
              <span class="badge-text">
                <span class="badge-title">Alta calidad</span>
                <span class="badge-sub">— Excelencia y Compromiso</span>
              </span>
            </div>
          </div>

          <p class="font-poppins text-[10px] sm:text-xs text-white/65 mt-7 sm:mt-9">
            Estamos aquí para ayudarte con soluciones de calidad que generan valor real.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({ name: 'NewsletterSection' })
</script>

<style scoped>
.newsletter-section {
  background:
    repeating-linear-gradient(
      45deg,
      transparent 0,
      transparent 52px,
      rgba(212, 155, 39, 0.06) 52px,
      rgba(212, 155, 39, 0.06) 53px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent 0,
      transparent 72px,
      rgba(212, 155, 39, 0.04) 72px,
      rgba(212, 155, 39, 0.04) 73px
    ),
    linear-gradient(160deg, #06308a 0%, #052a75 45%, #031f58 100%);
}

.deco {
  position: absolute;
  pointer-events: none;
  opacity: 0.95;
}
.deco svg {
  width: 100%;
  height: 100%;
  display: block;
}

.deco-tl,
.deco-tr,
.deco-bl,
.deco-br {
  width: 130px;
  height: 130px;
}
.deco-left,
.deco-right,
.deco-top,
.deco-bottom {
  width: 120px;
  height: 120px;
}
.deco-mid-tl,
.deco-mid-br {
  width: 80px;
  height: 80px;
  opacity: 0.7;
}
@media (min-width: 640px) {
  .deco-tl,
  .deco-tr,
  .deco-bl,
  .deco-br {
    width: 170px;
    height: 170px;
  }
  .deco-left,
  .deco-right {
    width: 150px;
    height: 150px;
  }
  .deco-top,
  .deco-bottom {
    width: 160px;
    height: 90px;
  }
  .deco-mid-tl,
  .deco-mid-br {
    width: 100px;
    height: 100px;
  }
}

.deco-tl {
  top: 0;
  left: 0;
}
.deco-tr {
  top: 0;
  right: 0;
  transform: scaleX(-1);
}
.deco-bl {
  bottom: 0;
  left: 0;
  transform: scaleY(-1);
}
.deco-br {
  bottom: 0;
  right: 0;
  transform: scale(-1, -1);
}
.deco-left {
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.deco-right {
  right: 0;
  top: 50%;
  transform: translateY(-50%) scaleX(-1);
}
.deco-top {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.deco-bottom {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) scaleY(-1);
}
.deco-mid-tl {
  top: 18%;
  left: 12%;
}
.deco-mid-br {
  bottom: 18%;
  right: 12%;
  transform: scale(-1, -1);
}

.whatsapp-cta {
  background: linear-gradient(180deg, #f0c05a 0%, #d49b27 55%, #b8861f 100%);
  color: white;
  padding: 0.7rem 1.6rem;
  border-radius: 9999px;
  box-shadow: 0 10px 30px rgba(212, 155, 39, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.35);
  transition: all 0.3s ease;
}
@media (min-width: 640px) {
  .whatsapp-cta {
    padding: 0.85rem 2.4rem;
  }
}
.whatsapp-cta:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 14px 36px rgba(212, 155, 39, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.35);
}

.cta-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
@media (min-width: 640px) {
  .cta-icon {
    width: 2.85rem;
    height: 2.85rem;
  }
}

.feature-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: white;
  padding: 0.45rem 0.55rem;
  border-radius: 9999px;
  box-shadow: 0 4px 14px rgba(3, 20, 55, 0.25);
  text-align: left;
  flex: 1 1 0;
  min-width: 0;
  justify-content: center;
}
@media (min-width: 640px) {
  .feature-badge {
    padding: 0.65rem 1.25rem;
    gap: 0.65rem;
    flex: 0 1 auto;
    justify-content: flex-start;
  }
}

.badge-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.badge-icon svg {
  width: 14px;
  height: 14px;
}
@media (min-width: 640px) {
  .badge-icon svg {
    width: 22px;
    height: 22px;
  }
}

.badge-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  min-width: 0;
}

.badge-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 0.55rem;
  color: #052a75;
  letter-spacing: -0.01em;
}
@media (min-width: 640px) {
  .badge-title {
    font-size: 0.8rem;
  }
}

.badge-sub {
  font-family: 'Open Sans', sans-serif;
  font-size: 0.5rem;
  color: #7a8aab;
}
@media (min-width: 640px) {
  .badge-sub {
    font-size: 0.72rem;
  }
}
</style>
