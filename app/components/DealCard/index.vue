<template>
  <div v-auto-animate>
    <USkeleton
      v-if="loading"
      class="h-[386px] w-full rounded-lg"
    />

    <UCard
      v-else
      :ui="{
        body: 'p-0!',
        root: 'card-shadow',
      }"
      class="deal-card shadow-xl"
    >
      <NuxtLink :to="`/deals/${deal}`">
        <div class="h-54 bg-gray-200 overflow-hidden rounded-lg">
          <NuxtImg
            loading="lazy"
            :src="'https://www.thestageshoreditch.com/sites/default/files/styles/16_by_9/public/image-library/Find%20a%20home%20Header%201800%20x%201080.jpg?itok=mJS6WvRx'"
            class="object-cover h-full w-full hover:scale-110 transition-transform duration-300"
          />
        </div>
      </NuxtLink>

      <div class="p-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <div class="mr-3 text-2xl font-bold">$109 900</div>

            <div class="text-sm text-primary-800/70">$780 за м2</div>
          </div>

          <div class="text-sm flex items-center gap-x-1 text-primary-800/70">
            <UIcon
              name="i-fluent-location-20-filled"
              class="size-4"
            />

            Чернівці
          </div>
        </div>

        <div class="mt-2 gap-y-0.5 flex flex-col">
          <div class="text-primary-800 font-medium">
            вул. Конституційна (28 Червня), 63
          </div>

          <div class="text-sm text-primary-800/70">Шевченківський район</div>
        </div>

        <div class="mt-4 flex gap-x-5 text-sm">
          <div class="flex items-center gap-x-1">
            <UIcon
              name="i-mdi-rhombus"
              class="size-2 text-gray-500"
            />

            <div>3 кімнати</div>
          </div>

          <div class="flex items-center gap-x-1">
            <UIcon
              name="i-mdi-rhombus"
              class="size-2 text-gray-500"
            />
            141 м2
          </div>

          <div class="flex items-center gap-x-1">
            <UIcon
              name="i-mdi-rhombus"
              class="size-2 text-gray-500"
            />

            5 поверх з 9
          </div>
        </div>
      </div>
    </UCard>
  </div>
</template>

<script setup>
defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  deal: {
    type: [Number, String],
    required: true,
  },
});
</script>
