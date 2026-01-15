<template>
  <UHeader title="Nuxt UI">
    <template #left>
      <UNavigationMenu
        color="primary"
        :items="items"
        :arrow="false"
        :ui="{
          linkLabel: 'uppercase',
        }"
        highlight
      >
      </UNavigationMenu>
    </template>

    <div>
      <NuxtLink
        class="h-[var(--ui-header-height)] flex pb-3 hover:opacity-80 transition-opacity"
        to="/"
      >
        <NuxtImg src="/images/logo-full.svg" />
      </NuxtLink>
    </div>

    <template #right>
      <div class="flex gap-3">
        <UPopover :ui="{ content: 'rounded-xl rounded-tl-none  overflow-hidden' }">
          <UButton
            class="uppercase px-5"
            icon="i-solar-phone-bold"
            trailing-icon="i-heroicons-chevron-down"
            color="accent-primary"
            variant="ghost"
            :ui="{
              trailingIcon: 'size-4',
            }"
          >
            +38 066 36 419 19
          </UButton>

          <template #content>
            <div>
              <div class="p-7 pb-4 //border-b-1 border-gray-300 flex flex-col gap-y-5">
                <div
                  class="text-xl font-semibold text-[var(--color-accent-secondary)] hover:opacity-70 transition-opacity"
                >
                  <a href="tel:+380663641919">+38 066 364 19 19</a>
                </div>

                <div class="flex flex-col gap-y-2">
                  <div class="text-sm text-gray-400">Email:</div>

                  <div class="hover:opacity-70 transition-opacity">
                    <a href="mailto:bluvar.realty@gmail.com"> bluvar.realty@gmail.com </a>
                  </div>
                </div>

                <div class="flex flex-col gap-y-2">
                  <div class="text-sm text-gray-400">м. Чернівці</div>

                  <div>
                    <a
                      target="_blank"
                      href="https://maps.app.goo.gl/rNLRcB7fp75WUF7i7"
                    >
                      вул. Незалежності, 92а
                    </a>
                  </div>
                </div>
              </div>

              <!-- <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.313109879449!2d25.969347900000006!3d48.23909980000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47340ebf473588b3%3A0x2074a074c7266c5e!2z0LLRg9C70LjRhtGPINCd0LXQt9Cw0LvQtdC20L3QvtGB0YLRliwgOTIsINCn0LDQs9C-0YAsINCn0LXRgNC90ZbQstC10YbRjNC60LAg0L7QsdC70LDRgdGC0YwsIDYwNDEy!5e0!3m2!1sru!2sua!4v1765022612289!5m2!1sru!2sua"
                width="420"
                height="280"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe> -->
            </div>
          </template>
        </UPopover>

        <UModal
          class="bg-light"
          :ui="{ content: 'bg-light max-w-[420px] rounded-bl-none' }"
          :close="false"
        >
          <UButton
            class="uppercase px-5"
            color="accent-secondary"
            variant="soft"
          >
            Консультація
          </UButton>

          <template #body>
            <div class="flex flex-col gap-y-7">
              <div class="flex flex-col gap-y-2">
                <div class="uppercase text-primary text-xl font-bold">
                  Виникли питання? Ми з радістю допоможемо вам
                </div>

                <div class="text-xs">Ми постараємось як найшвидше звязатись з вами</div>
              </div>

              <div class="flex flex-col gap-y-4">
                <UInput
                  size="xl"
                  placeholder="Як до вас звертатись?"
                  icon="i-heroicons-user"
                  :ui="{
                    base: 'pt-3 pb-3',
                  }"
                />
                <UInput
                  size="xl"
                  placeholder="Як до вас звертатись?"
                  icon="i-heroicons-user"
                  :ui="{
                    base: 'pt-3 pb-3',
                  }"
                />

                <UInput
                  size="xl"
                  icon="i-heroicons-phone"
                  placeholder="Ваш номер телефону"
                  :ui="{
                    base: 'pt-3 pb-3',
                  }"
                />

                <UButton size="xl">
                  <div class="text-center flex-1 uppercase">Відправити</div>
                </UButton>
              </div>
            </div>
          </template>
        </UModal>

        <UModal
          fullscreen
          :ui="{
            header: 'hidden',
          }"
          v-if="false"
        >
          <UButton
            class="px-4"
            variant="ghost"
          >
            <template #leading>
              <img
                src="/images/menu-icon.svg"
                alt="menu"
                class="size-5"
              />
            </template>
          </UButton>

          <template #body> useless modal menu </template>
        </UModal>
      </div>
    </template>
  </UHeader>
</template>

<script setup>
const items = ref([
  {
    label: "Продаж",
    // icon: "i-lucide-book-open",
    // to: "/docs/getting-started",

    children: [
      {
        label: "Introduction",
        description: "Fully styled and customizable components for Nuxt.",
        // icon: "i-lucide-house",
      },
      {
        label: "Installation",
        description: "Learn how to install and configure Nuxt UI in your application.",
        // icon: "i-lucide-cloud-download",
      },
      {
        label: "Icons",
        // icon: "i-lucide-smile",
        description: "You have nothing to do, @nuxt/icon will handle it automatically.",
      },
      {
        label: "Colors",
        // icon: "i-lucide-swatch-book",
        description: "Choose a primary and a neutral color from your Tailwind CSS theme.",
      },
    ],
  },
  {
    label: "Орендувати",
    // icon: "i-lucide-database",
    // to: "/docs/composables",

    children: [
      {
        label: "defineShortcuts",
        // icon: "i-lucide-file-text",
        description: "Define shortcuts for your application.",
        // to: "/docs/composables/define-shortcuts",
      },
      {
        label: "useOverlay",
        // icon: "i-lucide-file-text",
        description: "Display a modal/slideover within your application.",
        // to: "/docs/composables/use-overlay",
      },
      {
        label: "useToast",
        // icon: "i-lucide-file-text",
        description: "Display a toast within your application.",
        // to: "/docs/composables/use-toast",
      },
    ],
  },
  {
    label: "Контакти",
    // icon: "i-lucide-box",
    to: "/contacts",
    active: true,
  },
]);
</script>
