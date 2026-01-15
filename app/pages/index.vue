<template>
  <div class="flex flex-col gap-y-17">
    <UMain class="bg-light flex flex-col h-full hero-lines-bg--dark">
      <!-- <UPageHeader
      :title="'page.title'"
      :description="'page.description'"
    /> -->

      <div
        v-auto-animate
        class="flex pb-9 flex-col flex-1 gap-y-11 items-center justify-center"
      >
        <div class="text-center flex flex-col gap-y-4">
          <div class="text-primary-700/70">Виняткова нерухомість</div>

          <div>
            <img
              src="/images/big-logo.svg"
              class="max-w-sm"
            />
          </div>
        </div>

        <div class="sticky top-35">
          <DealsFilter @submit="filterDeals" />
        </div>
      </div>
    </UMain>

    <section>
      <UContainer>
        <div class="flex gap-x-5">
          <UPageCard
            class="flex-1 h-70 overflow-hidden relative"
            v-for="card in property_types"
            :key="card.value"
            :ui="{
              container: 'xs:p-0 sm:p-0 md:p-0 lg:p-0 xl:p-0 2xl:p-0',
            }"
            to="/"
          >
            <img
              :src="`/images/${card.value}.png`"
              alt=""
              height="42px"
              width="auto"
              class="absolute top-0 left-0 h-full w-full object-cover z-0"
            />

            <div
              class="z-1 flex text-white flex-col justify-end bg-gradient-to-t from-black/70 to-black/0 w-full p-4"
            >
              <div class="flex items-center justify-between">
                <div class="gap-y-2 flex flex-col">
                  <div class="font-semibold">
                    {{ card.label }}
                  </div>

                  <div class="text-xs">Від 120 оголошень</div>
                </div>

                <UButton
                  icon="i-lucide-arrow-up-right"
                  size="xl"
                  color="white"
                  variant="solid"
                />
              </div>
            </div>
          </UPageCard>
        </div>
      </UContainer>
    </section>

    <section class="overflow-hidden pt-5 flex flex-col gap-y-5 relative top-[35px]">
      <div class="flex flex-col items-center justify-center">
        <div class="mb-4 font-regular text-3xl">Найкращі пропозиції</div>

        <!-- v-model="property_type" -->
        <UTabs
          :model-value="property_type"
          @update:model-value="changeCaroselPropertyType"
          :items="property_types"
          :content="false"
          :default-value="'sell'"
          :ui="{
            indicator: 'bg-white cursor-pointer shadow-sm',
            trigger: 'px-4 cursor-pointer',
            label: 'text-primary-700',
            root: 'min-h-[44px]',
            list: 'flex-1',
          }"
        />
      </div>

      <BestDealsCarousel
        :loading="loading_best_deals"
        :deals="best_deals"
      />
    </section>

    <section>
      <UContainer>
        <PromoStatsBanner />
      </UContainer>
    </section>

    <section>
      <UContainer>
        <Partners />
      </UContainer>
    </section>

    <section>
      <UContainer>
        <PromoBento />
      </UContainer>
    </section>

    <section>
      <UContainer>
        <FAQ />
      </UContainer>
    </section>

    <section>
      <UContainer>
        <PromoCallbackBanner />
      </UContainer>
    </section>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useDealsStore } from "~/stores/deals";

const dealsStore = useDealsStore();
const property_types = dealsStore.property_types;

const activeSlide = ref(0);

const filterDeals = (filter) => {
  console.log("Filter deals with:", filter);
};

const property_type = ref("apartment");
const loading_best_deals = ref(false);
const best_deals = ref([]);

const getBestDeals = async (filters = {}) => {
  // Simulate API call
  console.log("Fetching best deals with filters:", filters);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          deals: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        },
      });
    }, 420);
  });
};

const changeCaroselPropertyType = async (new_type) => {
  console.log("new_type:", new_type);

  property_type.value = new_type;

  try {
    loading_best_deals.value = true;

    const {
      data: { deals },
    } = await getBestDeals({
      property_type: new_type,
    });

    best_deals.value = deals;
  } catch (e) {
    console.log(e);
  } finally {
    loading_best_deals.value = false;
  }
};

const request = await useAsyncData("best-deals", () => getBestDeals(), {
  immediate: true,
  server: true,
  lazy: false,
});

const { data, status, pending, error, refresh, clear } = request;

if (data.value) {
  best_deals.value = data.value.data.deals;

  console.log("best_deals.value:", best_deals.value);
}
</script>

<style lang="scss" scoped>
.hero-lines-bg--dark {
  // background-image:
  //   url("/images/hero-lines-dark.svg"),
  //   linear-gradient(180deg, rgba(247, 248, 253, 1) 0%, rgba(231, 234, 243, 1) 100%);
  background-image:
    url("/images/hero-lines-dark.svg"), url("/images/hero-left-image.png"),
    url("/images/hero-right-image.png"),
    linear-gradient(
      180deg,
      rgba(255, 225, 255, 0) 0%,
      rgba(255, 255, 255, 0) 77%,
      rgba(255, 255, 255, 1) 100%
    );
  background-size:
    auto 95%,
    auto 63%,
    auto 95%;
  background-repeat: no-repeat;
  background-position:
    left bottom,
    left bottom,
    right bottom;
  background-attachment: fixed;
  border-bottom: 1px solid #ddd;
}
</style>
