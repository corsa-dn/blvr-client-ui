<template>
  <UCard
    color="primary"
    variant="solid"
    :ui="{
      body: 'text-white promo-callback-banner-bg',
    }"
  >
    <div class="flex items-center justify-between gap-x-5">
      <div class="basis-1/2 flex flex-col gap-y-5 py-5">
        <div class="text-3xl">Ми завжди готові допомогти з вибором нерухомості</div>
        <div>
          Залиште номер телефону й отримайте персональну консультацію. Жодного тиску або
          зобов’язань.
        </div>

        <div class="flex gap-x-4">
          <UInput
            :ui="{
              input: 'bg-white/10 text-primary-700 placeholder:text-primary-300 ',
              base: 'py-4 px-5 ',
            }"
            placeholder="Ваш номер телефону"
            class="w-63"
            v-model="phone"
          />

          <div v-auto-animate>
            <UButton
              color="white"
              variant="solid"
              class="h-full"
              :ui="{
                base: 'px-5',
              }"
              v-if="phone?.length"
            >
              Отримати консультацію
            </UButton>
          </div>
        </div>
      </div>

      <div class="basis-[42%] flex items-center justify-center">
        <img
          src="/images/bg-3d-logo-1.png"
          alt=""
          style="mix-blend-mode: screen; filter: brightness(0.6)"
          class="h-70 w-70 object-contain"
        />
      </div>
    </div>
  </UCard>
</template>

<script setup>
const phone = ref("");
</script>

<style lang="scss">
.promo-callback-banner-bg {
  background-image:
    url("/images/lines-small.svg"),
    radial-gradient(
      ellipse at top,
      rgba(63, 116, 163, 0.693) 0%,
      rgba(125, 185, 232, 0) 70%
    ),
    linear-gradient(to top, #00000060 0%, #00000000 35%);

  background-size:
    90% 100%,
    cover,
    100% 100%;

  background-repeat: no-repeat;

  background-blend-mode: multiply;
}
</style>
