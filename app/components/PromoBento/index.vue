<template>
  <div class="grid grid-cols-4 gap-x-5 h-77 ">
    <UCard
      :ui="{
        body: 'flex flex-col h-full //bg-light-gray bg-promo-grid-image-1',
      }"
      class="col-span-2"
    >
      <div class="flex-1 flex flex-col justify-between">
        <div class="text-2xl font-semibold text-primary-700">Дбаємо</div>

        <div class="w-[50%]">
          Про виняткове дотримання ваших інтересів, маємо вдосталь нетипових рішень
        </div>
      </div>
    </UCard>

    <UCard
      :ui="{
        body: 'flex flex-col h-full bg-light-gray',
      }"
    >
      <div class="flex-1 flex flex-col justify-between">
        <div class="text-2xl font-semibold text-primary-700">Надаємо</div>

        <div>Юридичний супровід угод, перевіряємо кожну деталь, щоб ви мали спокій</div>
      </div>
    </UCard>

    <UCard
      :ui="{
        body: 'flex flex-col h-full bg-primary text-white lines-bg',
      }"
    >
      <div class="flex-1 flex flex-col justify-between">
        <div class="text-2xl font-semibold">Підбираємо</div>

        <div>
          <div class="flex flex-col gap-y-2">
            <div>
              До вашої уваги тільки ті обєкти, що повністю відпвідають вашим побажанням
            </div>

            <UButton
              block
              icon="i-lucide-search"
              color="accent-secondary"
              variant="solid"
            >
              Підібрати
            </UButton>
          </div>
        </div>
      </div>
    </UCard>
  </div>
</template>

<style lang="scss">
.lines-bg {
  background-image: url("/images/lines-small.svg");
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 70%;
}

.bg-promo-grid-image-1 {
  background-image:
    linear-gradient(
      90deg,
      rgba(#f4f5fa, 100%) 0%,
      rgba(#f4f5fa, 100%) 40%,
      rgba(#f4f5fa, 0) 100%
    ),
    url("/images/promo-grid-image-1.png");
  background-repeat: no-repeat;
  background-position:
    0 center,
    right center;
  background-size:
    75% 100%,
    auto 100%;
}
</style>
