<template>
  <div class="flex flex-col gap-y-11">
    <div class="mr-2 w-250 flex flex-col gap-y-3">
      <div class="text-3xl text-regular text-primary-800">
        <div>Наші партнери</div>
        <!-- <div>партнери</div> -->
      </div>

      <div class="text-primary-800/70">Ми працюємо лише з надійними лідерами галузі</div>
    </div>

    <UPageLogos
      marquee
      :ui="{
        logos: 'mt-0',
      }"
      :items="[
        'i-simple-icons-github',
        'i-simple-icons-discord',
        'i-simple-icons-x',
        'i-simple-icons-instagram',
        'i-simple-icons-linkedin',
        'i-simple-icons-facebook',
      ]"
    />
  </div>
</template>
