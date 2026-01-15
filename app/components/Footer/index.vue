<template>
  <footer class="border-t border-gray-200 pb-10">
    <UContainer class="flex flex-col gap-y-10">
      <div class="flex items-end justify-between">
        <div class="flex basis-1/3">
          <img
            class="h-16"
            src="/images/footer-logo.svg"
            alt=""
          />
        </div>

        <div class="flex flex-col items-center basis-1/3 h-full">
          <div class="flex gap-x-7 items-end h-full uppercase">
            <NuxtLink
              to="/"
              class="hover:underline"
            >
              Продаж
            </NuxtLink>

            <NuxtLink
              to="/"
              class="hover:underline"
            >
              Орендувати
            </NuxtLink>

            <NuxtLink
              to="/"
              class="hover:underline"
            >
              Контакти
            </NuxtLink>
          </div>
        </div>

        <div class="flex items-center justify-end basis-1/3">
          <div class="flex gap-x-3">
            <UButton
              variant="outline-muted"
              color="primary"
              icon="i-lucide-instagram"
              class="p-3"
            ></UButton>

            <UButton
              variant="outline-muted"
              color="primary"
              icon="i-lucide-youtube"
              class="p-3"
            ></UButton>

            <UButton
              variant="outline-muted"
              color="primary"
              icon="i-lucide-music-2"
              class="p-3"
            ></UButton>
          </div>
        </div>
      </div>

      <div class="flex gap-x-4">
        <div
          v-for="{ icon, text } in [
            {
              // icon: 'i-lucide-mail',
              icon: 'i-tabler-mail-filled',
              text: 'bluvar.realty@gmail.com',
            },
            {
              icon: 'i-solar-phone-bold',
              text: '+38 (099) 999-99-99',
            },
            {
              icon: 'i-fluent-location-20-filled',
              text: 'м. Чернівці, вул. Незалежності, 92а',
            },
          ]"
          class="bg-light-gray font-semibold flex gap-x-3 items-center w-full p-2 pr-4 rounded-full"
        >
          <div
            class="h-11 w-11 flex items-center justify-center bg-white shadow-md rounded-full"
          >
            <UIcon
              :name="icon"
              class="h-5 w-5 text-[var(--color-accent-secondary)]"
            />
          </div>

          <div>
            {{ text }}
          </div>
        </div>
      </div>

      <div class="text-center text-sm text-gray-400">
        © 2025 Bulvar Realty. Всі права захищені
      </div>
    </UContainer>
  </footer>
</template>
