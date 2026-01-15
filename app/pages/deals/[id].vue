<template>
  <UMain>
    <div class="pt-14 flex flex-col gap-y-28">
      <UContainer>
        <div class="flex flex-col gap-y-9">
          <!-- {{ deal_id }} -->

          <div>
            <UBreadcrumb
              :items="[
                {
                  slot: 'logo',
                  to: '/',
                },
                {
                  label: 'Купити',
                  // icon: 'i-lucide-book-open',
                  to: '/',
                },
                {
                  label: 'ЖК Бамбула',
                  to: '/',
                },
                {
                  label: 'вул. Верхогляда (Драгомирова), 63, б.3',
                },
              ]"
            >
              <template #logo>
                <object
                  data="/images/logo.svg"
                  type="image/svg+xml"
                  class="w-5 h-5"
                ></object>
              </template>

              <template #separator>
                <NuxtLink
                  to="/"
                  class="text-gray-300 mx-2 hover:opacity-70"
                >
                  /
                </NuxtLink>
              </template>
            </UBreadcrumb>
          </div>

          <div>
            <div class="grid grid-cols-12 gap-5">
              <div class="col-span-8 flex flex-col gap-y-7">
                <UCard
                  :ui="{
                    body: 'p-1!',
                  }"
                >
                  <!-- <div class="h-full w-full flex items-center justify-center">1</div> -->
                  <UCarousel
                    auto-height
                    ref="carousel"
                    v-slot="{ item }"
                    arrows
                    :items="items"
                    :prev="{ onClick: onClickPrev }"
                    :next="{ onClick: onClickNext }"
                    class="flex-1"
                    @select="onSelect"
                    :ui="{
                      arrows:
                        'absolute inset-y-0 w-full flex items-center justify-between pointer-events-none ',
                      prev: 'p-3 !start-1 sm:!start-2 top-1/2 -translate-y-1/2 pointer-events-auto shadow-lg',
                      next: 'p-3 !end-1 sm:!end-2 top-1/2 -translate-y-1/2 pointer-events-auto shadow-lg',
                      container: 'transition-[height]',
                      controls: 'absolute -top-8 inset-x-12',
                    }"
                  >
                    <!-- <div class="relative"> -->
                    <img
                      :src="item"
                      class="rounded-lg h-[420px] z-1 object-contain"
                    />
                    <!-- <img
                            :src="item"
                            class="absolute h-full -z-1 w-full object-cover top-0 left-0 blur-xl"
                          /> -->
                    <!-- </div> -->
                  </UCarousel>
                </UCard>

                <div class="flex gap-x-1">
                  <div
                    v-for="(item, index) in items"
                    :key="index"
                    class="opacity-40 cursor-pointer hover:opacity-100 transition-opacity"
                    :class="{ 'opacity-100': activeIndex === index }"
                    @click="select(index)"
                  >
                    <img
                      :src="item"
                      class="rounded-md h-14 w-14 object-cover"
                    />
                  </div>
                </div>

                <UCard>
                  <div class="flex flex-col gap-y-7">
                    <div class="font-semibold text-xl text-primary-700">
                      Опис квартири
                    </div>

                    <UCard
                      variant="solid"
                      :ui="{ body: 'bg-gray-100 p-1! text-primary' }"
                    >
                      <div class="grid gap-1 grid-cols-3 grid-rows-2 min-h-70">
                        <div class="row-span-2 col-span-1">
                          <div
                            class="bg-white rounded-lg h-full w-full flex items-center justify-center"
                          >
                            <div
                              class="flex flex-col items-center justify-center gap-y-5"
                            >
                              <img
                                src="/images/deal-square.svg"
                                alt="Floor Plan"
                                class="h-11 w-11 object-contain"
                              />

                              <div
                                class="flex flex-col items-center justify-center gap-y-2"
                              >
                                <div class="text-gray-400 text-sm">Загальна площа</div>

                                <div class="font-semibold text-xl">23.01 м2</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="col-span-1"
                          v-for="stat in [
                            {
                              label: 'Загальна площа',
                              value: '23.01 м2',
                              icon: '/images/deal-live-square.svg',
                            },
                            {
                              label: 'Площа санвузла',
                              value: '5.00 м2',
                              icon: '/images/bath-square.svg',
                            },
                            {
                              label: 'Висота стелі',
                              value: '2.75 м',
                              icon: '/images/ceil-height.svg',
                            },
                            {
                              label: 'Санвузлів',
                              value: '1',
                              icon: '/images/bath-square.svg',
                            },
                          ]"
                          :key="stat.label"
                        >
                          <div
                            class="bg-white rounded-lg h-full w-full flex items-center justify-center"
                          >
                            <div class="flex items-center gap-x-7 w-full p-4 pl-9 pr-4">
                              <div class="flex flex-center justify-center h-8 w-8">
                                <img
                                  class="h-full w-full cover"
                                  :src="stat.icon"
                                />
                              </div>

                              <div class="flex flex-col gap-y-1">
                                <div class="text-gray-400 text-sm">
                                  {{ stat.label }}
                                </div>

                                <div class="font-semibold text-xl">
                                  {{ stat.value }}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </UCard>

                    <div class="flex flex-col gap-y-5">
                      <div class="text-lg font-semibold">
                        Продаж 2-кімнатної квартири ЖК Новопечерські Липки, вул.
                        Верхогляда (Драгомирова)
                      </div>

                      <div>
                        Житловий комплекс Новопечерські Липки є унікальним за своєю
                        внутрішньою інфраструктурою, яка розроблена за планом "місто в
                        місті". Внутрішня інфраструктура Новопечерських Липок є для
                        багатьох мешканців найбільш привабливим атрибутом даного житлового
                        комплексу. На території цього міні-міста ви знайдете свою власну
                        міжнародну та середню школу, свій ландшафтний парк, кілька
                        ресторанів, повноцінний спортзал з басейном і навіть тенісні
                        корти.
                      </div>

                      <div>
                        <div class="text-lg mb-2 font-semibold">
                          Функціональне планування
                        </div>

                        <div>
                          <ul>
                            <li
                              v-for="f in [
                                'кухня-вітальня',
                                'окрема спальня',
                                'санвузол',
                                'лоджія',
                                'хол із гардеробною',
                              ]"
                              :key="f"
                            >
                              {{ f }}
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <div class="text-lg mb-2 font-semibold">
                          Зручна інфраструктура
                        </div>

                        <div class="flex gap-x-1">
                          <UBadge
                            v-for="tag in [
                              'Либідська',
                              'ТЦ Майдан',
                              'Центральный автовокзал',
                            ]"
                            variant="soft"
                            :key="tag"
                            size="lg"
                            :ui="{
                              base: 'font-semibold',
                            }"
                          >
                            {{ tag }}
                          </UBadge>
                        </div>
                      </div>

                      <div class="border-b border-gray-200 h-1"></div>

                      <div class="flex items-center gap-x-3">
                        <UBadge variant="soft"> 26818 </UBadge>

                        <div class="text-sm text-gray-400">Оголошення від 23 липня</div>
                      </div>
                    </div>
                  </div>
                </UCard>
                <div class="h-[420px]"></div>
                <div class="relative pb-7">
                  <div
                    class="absolute w-[96vw] bg-red-100 rounded-xl overflow-x-hidden top-[-420px] border-t h-[420px] border-b border-gray-300"
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.313109879449!2d25.969347900000006!3d48.23909980000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47340ebf473588b3%3A0x2074a074c7266c5e!2z0LLRg9C70LjRhtGPINCd0LXQt9Cw0LvQtdC20L3QvtGB0YLRliwgOTIsINCn0LDQs9C-0YAsINCn0LXRgNC90ZbQstC10YbRjNC60LAg0L7QsdC70LDRgdGC0YwsIDYwNDEy!5e0!3m2!1sru!2sua!4v1765022612289!5m2!1sru!2sua"
                      width="100%"
                      height="420"
                      style="border: 0"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>

              <div class="col-span-4 relative">
                <div
                  style="position: sticky; top: 25%"
                  class="flex flex-col gap-y-5"
                >
                  <UCard>
                    <div class="flex flex-col gap-y-3">
                      <div class="flex flex-col gap-y-3">
                        <div class="flex items-center justify-between">
                          <div class="flex items-center gap-x-2 text-gray-500">
                            <UIcon
                              name="i-fluent-location-20-filled"
                              class="size-4"
                            />

                            <span> Чернівці </span>
                          </div>

                          <div class="flex gap-x-1">
                            <UButton
                              icon="i-lucide-heart"
                              size="sm"
                              color="gray-300"
                              @click="shareDeal()"
                            />
                            <UButton
                              icon="i-lucide-share"
                              size="sm"
                              color="gray-300"
                            />
                          </div>
                        </div>

                        <div class="font-semibold text-primary-800 text-xl">
                          вул. Верхогляда (Драгомирова), 63, б.3
                        </div>

                        <div class="text-gray-500">
                          ЖК Новопечерські Липки, Печерськ, Печерський район, Київ
                        </div>
                      </div>

                      <div class="flex items-center gap-x-4">
                        <div class="font-bold text-3xl text-primary-800">$109 900</div>

                        <div class="text-gray-400">$780 за м2</div>
                      </div>

                      <div>
                        <div class="flex gap-x-5 text-sm">
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

                      <UButton
                        block
                        color="accent-primary"
                        size="xl"
                        class="uppercase mt-3"
                      >
                        Залишити заявку
                      </UButton>
                    </div>
                  </UCard>

                  <UCard>
                    <UUser
                      name="Артур Березовський"
                      description="Ваш персональний ріелтор"
                      :avatar="{
                        src: 'https://i.pravatar.cc/150?u=john-doe',
                        icon: 'i-lucide-image',
                      }"
                      size="2xl"
                      :ui="{
                        wrapper: 'flex flex-col-reverse col-reverse',
                        name: 'font-semibold',
                      }"
                    />
                  </UCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>

      <!-- :loading="loading_best_deals" -->
      <div class="overflow-hidden">
        <BestDealsCarousel
          class="mb-10"
          :deals="[1, 2, 3, 4, 5, 6, 7]"
        />
      </div>

      <UContainer>
        <PromoCallbackBanner />
      </UContainer>
    </div>
  </UMain>
</template>

<script setup>
const route = useRoute();
const deal_id = computed(() => route.params.id);

console.log("Deal ID:", deal_id);

const items = [
  "https://picsum.photos/640/640?random=1",
  "https://picsum.photos/640/640?random=2",
  "https://picsum.photos/640/640?random=3",
  "https://picsum.photos/640/640?random=4",
  "https://picsum.photos/640/640?random=5",
  "https://picsum.photos/640/640?random=6",
];

const carousel = useTemplateRef("carousel");
const activeIndex = ref(0);

function onClickPrev() {
  activeIndex.value--;
}
function onClickNext() {
  activeIndex.value++;
}
function onSelect(index) {
  activeIndex.value = index;
}

function select(index) {
  activeIndex.value = index;

  carousel.value?.emblaApi?.scrollTo(index);
}

const shareDeal = async () => {
  await navigator.share("http://localhost:3000");
};
</script>
