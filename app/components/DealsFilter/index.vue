<template>
  <UCard
    :ui="{
      body: 'p-0!',
      root: 'xl:rounded-full lg:rounded-full md:rounded-full sm:rounded-full xs:rounded-xl',
    }"
    class="shadow-lg min-w-[280px] max-w-[920px] w-full bg-white"
    variant="solid"
  >
    <form
      @submit.prevent="
        $emit('submit', {
          deal_type,
          property_type,
          city,
        })
      "
    >
      <div class="flex flex-col gap-2 sm:flex-row sm:gap-0 /bg-red-100">
        <div
          class="flex basis-full sm:basis-1/2 flex-col sm:flex-row sm:flex-nowrap gap-2 p-2 //hover:bg-gray-100 //transition border-b sm:border-b-0 sm:border-r border-gray-200"
        >
          <UTabs
            :items="deal_types"
            v-model="deal_type"
            :content="false"
            :default-value="'sell'"
            :ui="{
              indicator: 'bg-white cursor-pointer shadow-md',
              trigger: 'px-4 cursor-pointer',
              label: 'text-primary-700',
              root: 'min-h-[44px]',
              list: 'flex-1',
            }"
          />

          <USelect
            v-model="property_type"
            :items="property_types"
            class="flex-1 min-w-42 w-full"
            variant="ghost"
            placeholder="Тип нерухомості"
            icon="i-fluent-location-20-filled"
          />
        </div>

        <div
          class="flex basis-full sm:basis-1/2 flex-col sm:flex-row sm:flex-nowrap gap-2 p-2 //hover:bg-gray-100"
        >
          <USelect
            v-model="city"
            :items="cities"
            class="flex-1 min-w-42 w-full"
            variant="ghost"
            dropdown-icon="i-lucide:chevron-down  "
            placeholder="Місто"
            icon="i-fluent-location-20-filled"
            :ui="{
              base: 'px-lg',
            }"
          />

          <UButton
            :ui="{
              base: 'px-5 cursor-pointer',
            }"
            class="w-full sm:w-auto bg-[var(--color-accent-primary)] text-white hover:bg-[color-mix(in_oklab,var(--color-accent-primary)_90%,black)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-primary)]"
            color="accent-primary"
            variant="solid"
            icon="i-heroicons-magnifying-glass"
            type="submit"
            :to="{
              path: '/deals',
              query: {
                city,
                deal_type,
                property_type,
              },
            }"
          >
            ШУКАТИ
          </UButton>
        </div>
      </div>
    </form>
  </UCard>
</template>

<script setup>
import { useDealsStore } from "~/stores/deals";

const dealsStore = useDealsStore();

const deal_types = dealsStore.deal_types;
const property_types = dealsStore.property_types;
const cities = dealsStore.cities;

const deal_type = ref("sell");
const property_type = ref("apartment");
const city = ref("chernivtsi");
</script>
