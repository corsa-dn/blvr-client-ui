<template>
  <UMain>
    <div
      class="border-b-1 py-5 border-gray-200 py-14 min-h-[42vh] gap-y-4 flex flex-col justify-center items-center bg-[#F7F8FD] hero-lines-bg--dark"
    >
      <div class="flex items-center gap-x-4 text-sm text-gray-400">
        <span class="text-red-100">
          <object
            data="/images/logo.svg"
            type="image/svg+xml"
            class="w-5 h-5"
          ></object>
        </span>

        <div>/</div>

        <div>Купити</div>
      </div>

      <div class="text-3xl mb-5">
        {{ deal_type === "rent" ? "Орендувати" : "Купити" }}
        квартиру
      </div>

      <DealsFilter />
    </div>

    <div>
      <UContainer class="py-7">
        <div class="flex flex-col gap-y-5">
          <div class="flex items-center justify-between">
            <div>
              <span class="font-semibold">104</span>
              оголошення знайдено
            </div>

            <div>
              <USelect
                :items="[
                  { label: 'За новизною', value: 'newest' },
                  { label: 'За ціною (зростання)', value: 'price-asc' },
                  { label: 'За ціною (спадання)', value: 'price-desc' },
                ]"
                variant="outline"
                class="w-48"
                size="xl"
                placeholder="За новизною"
              />
            </div>
          </div>

          <div class="grid grid-cols-3 gap-5">
            <DealCard
              v-for="deal in 18"
              :key="deal"
              :deal="deal"
            />
          </div>

          <div class="pt-7 flex justify-center">
            <UPagination
              v-model:page="page"
              variant="ghost"
              color="accent-primary"
              :total="100"
              show-edges
              :sibling-count="1"
              size="xl"
            />
          </div>

          <div class="mt-7">
            <PromoCallbackBanner />
          </div>
        </div>
      </UContainer>
    </div>
  </UMain>
</template>

<script setup>
const route = useRoute();
const query = route.query;

const { city, deal_type, property_type } = query;
</script>
