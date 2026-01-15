<template>
  <div>
    <UCard
      :ui="{
        body: 'p-0! promo-stats-banner-bg',
        root: 'rounded-3xl',
      }"
    >
      <div class="flex gap-x-10">
        <div
          class="py-10 pl-7 basis-[63%] gap-y-10 flex flex-col items-between text-white"
        >
          <div class="font-xolonium uppercase flex items-center gap-x-2">
            <span class="">Агентство нерухомості</span>
            <img
              src="/images/logo-mini.svg"
              alt=""
            />
            <span>BULVAR</span>
          </div>

          <div class="text-3xl">
            Ми не просто продаємо квартири, а створюємо для кожного клієнта індивідуальний
            шлях до власного житла
          </div>

          <div>
            Ми пропонуємо лише перевірені об’єкти, співпрацюємо з провідними забудовниками
            та дбаємо про прозорість кожного кроку. Завдяки індивідуальному підходу ви
            отримуєте не просто угоду, а впевненість, що зробили правильний вибір.
          </div>

          <div class="flex gap-x-4">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="flex-1"
            >
              <div class="text-3xl mb-2">
                {{ stat.number }}
              </div>
              <div>
                {{ stat.label }}
              </div>
            </div>
          </div>
        </div>

        <div>
          <img
            src="/images/promo-stats-img.png"
            alt=""
            style="
              height: 100%;
              width: auto;
              object-fit: cover;
              object-position: left bottom;
            "
          />
        </div>
      </div>
    </UCard>
  </div>
</template>

<script setup>
const stats = ref([
  { number: "15 000+", label: "Обєктів в базі" },
  { number: "100+", label: "Експертів у команді" },
  { number: "5 000+", label: "Щасливих клієнтів" },
  {
    number: "95%",
    label: "Позитивних відгуків",
  },
]);
</script>

<style lang="scss">
.promo-stats-banner-bg {
  background-image:
    url("/images/lines-ssmall.svg"),
    radial-gradient(
      ellipse at top,
      rgba(63, 116, 163, 0.693) 0%,
      rgba(125, 185, 232, 0) 70%
    );
  background-size:
    90% 100%,
    100% 60%;

  background-repeat: no-repeat;

  background-color: var(--color-accent-primary);
}
</style>
