<template>
  <div class="flex gap-x-5">
    <div class="flex basis-[35%] flex-shrink-0 w-full flex-col gap-y-7">
      <div class="text-3xl pt-6">Питання, які можуть вас зацікавити</div>

      <URadioGroup
        v-model="current_category"
        color="primary"
        variant="card"
        default-value="common"
        :items="categories"
        indicator="hidden"
        :ui="{
          fieldset: 'flex flex-row flex-wrap gap-2',
          item: 'rounded-full px-4 py-2 text-sm font-semibold cursor-pointer hover:bg-primary/10 transition',
        }"
      />
    </div>

    <div
      class="flex flex-col"
      v-if="items?.[current_category]"
    >
      <UAccordion
        :items="items[current_category] || []"
        :trailing-icon="'i-lucide-plus'"
        :ui="{
          trigger: 'gap-0!',
          header: 'py-3',
        }"
      >
        <template #leading="{ index, open }">
          <div class="text-3xl w-21 font-xolonium">
            <span class="text-gray-200">0</span
            ><span class="text-primary-600">{{ index + 1 }}</span>
          </div>
        </template>

        <template #default="{ item: { label } }">
          <div class="text-lg font-semibold">
            {{ label }}
          </div>
        </template>

        <template #content="{ item: { content } }">
          <div class="pl-21 pb-4">
            {{ content }}
          </div>
        </template>
      </UAccordion>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const items = reactive({
  common: [
    {
      label: "Які послуги надає наше агенство нерухомості?",
      content:
        "Yes! Nuxt UI is completely free and open source under the MIT license. All 100+ components are available to everyone.",
    },
    {
      label: "Яка вартість ваших послуг?",
      content:
        "Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started.",
    },
    {
      label: "Як знайти вашу агенцію та зв’язатися з вами?",
      content:
        "Yes! Nuxt UI is used in production by thousands of applications with extensive tests, regular updates, and active maintenance.",
    },
    {
      label: "Чи надаєте ви консультації з питань нерухомості?",
      content:
        "Yes! Nuxt UI is completely free and open source under the MIT license. Al 100+ components are available to everyone.",
    },
    {
      label: "Які документи необхідні для купівлі/продажу нерухомості?",
      content:
        "Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started.",
    },
  ],
  buy: [
    {
      label: "Як вибрати нерухомість для купівлі?",
      content:
        "Yes! Nuxt UI is completely free and open source under the MIT license. All 100+ components are available to everyone.",
    },
    {
      label: "Які кроки потрібно зробити для купівлі нерухомості?",
      content:
        "Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started.",
    },
  ],
  sell: [
    {
      label: "Як оцінити вартість моєї нерухомості?",
      content:
        "Yes! Nuxt UI is completely free and open source under the MIT license. All 100+ components are available to everyone.",
    },
    {
      label: "Які документи потрібні для продажу нерухомості?",
      content:
        "Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started.",
    },
  ],
  rent: [
    {
      label: "Як знайти підходящу нерухомість для оренди?",
      content:
        "Yes! Nuxt UI is completely free and open source under the MIT license. All 100+ components are available to everyone.",
    },
    {
      label: "Які умови оренди ви пропонуєте?",
      content:
        "Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started.",
    },
  ],
  law: [
    {
      label: "Які юридичні аспекти потрібно враховувати при купівлі нерухомості?",
      content:
        "Yes! Nuxt UI is completely free and open source under the MIT license. All 100+ components are available to everyone.",
    },
    {
      label: "Як захистити свої права при продажу нерухомості?",
      content:
        "Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started.",
    },
  ],
});

const current_category = ref("common");
const categories = ref([
  {
    label: "Загальні",
    value: "common",
  },
  {
    label: "Купівля",
    value: "buy",
  },
  {
    label: "Продаж",
    value: "sell",
  },
  {
    label: "Оренда",
    value: "rent",
  },
  {
    label: "Юридичні",
    value: "law",
  },
]);
</script>
