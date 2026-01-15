import { defineStore } from "pinia";

export const useDealsStore = defineStore("DealsStore", {
  state: () => ({
    property_types: [
      { label: "Квартира", value: "apartment" },
      { label: "Дом", value: "house" },
      { label: "Комерційна", value: "commercial" },
      { label: "Земля", value: "land" },
    ],
    deal_types: [
      { label: "Продаж", value: "sell" },
      { label: "Оренда", value: "rent" },
    ],
    cities: [
      { label: "Чернівці", value: "chernivtsi" },
      { label: "Київ", value: "kyiv" },
      { label: "Львів", value: "lviv" },
    ],
  }),
  actions: {},
});
