<template>
  <UCarousel
    dots
    loop
    wheel-gestures
    :items="deals"
    v-slot="{ item, index }"
    :ui="{
      root: 'relative overflow-visible pb-4',
      viewport: 'overflow-visible carousel-sides-gradient',
      container: '-ms-4 ',
      item: `ps-4 basis-[82%] sm:basis-[58%] md:basis-[40%] lg:basis-[31%] xl:basis-[24%] z-${index}`,
      arrows:
        'absolute z-1 inset-y-0 w-full flex items-center justify-between pointer-events-none ',
      prev: 'p-3 !start-1 sm:!start-7 top-1/2 -translate-y-1/2 pointer-events-auto shadow-lg',
      next: 'p-3 !end-1 sm:!end-7 top-1/2 -translate-y-1/2 pointer-events-auto shadow-lg',
    }"
    :prev="{ variant: 'solid', color: 'white', size: 'lg' }"
    :next="{ variant: 'solid', color: 'white', size: 'lg' }"
    arrows
  >
    <DealCard
      :key="item"
      :deal="item"
      :loading="loading"
    />
  </UCarousel>
</template>

<script setup>
defineProps({
  deals: {
    type: Array,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
});
</script>
<style lang="scss">
.carousel-sides-gradient {
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;

    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 22%,
      rgba(255, 255, 255, 0) 78%,
      rgba(255, 255, 255, 1) 100%
    );

    // backdrop-filter: blur(10px);
    background-blend-mode: screen;
    z-index: 1;
    pointer-events: none;
  }
}
</style>
