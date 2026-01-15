import { computed, unref, mergeProps, withCtx, renderSlot, useSlots, createBlock, createCommentVNode, openBlock, ref, resolveDirective, isRef, createTextVNode, createVNode, withDirectives, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { b as useAppConfig, t as tv, f as _sfc_main$8, a as __nuxt_component_0$2, w as __nuxt_component_3, c as _sfc_main$e } from './server.mjs';
import { a as _sfc_main$5 } from './Input-DlCeRXhR.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';

const theme$2 = {
  "base": "min-h-[calc(100vh-var(--ui-header-height))]"
};
const _sfc_main$4 = {
  __name: "UMain",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme$2), ...appConfig.ui?.main || {} }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Main.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const theme$1 = {
  "slots": {
    "root": "rounded-lg overflow-hidden",
    "header": "p-4 sm:px-6",
    "body": "p-4 sm:p-6",
    "footer": "p-4 sm:px-6"
  },
  "variants": {
    "variant": {
      "solid": {
        "root": "bg-inverted text-inverted"
      },
      "outline": {
        "root": "bg-default ring ring-default divide-y divide-default"
      },
      "soft": {
        "root": "bg-elevated/50 divide-y divide-default"
      },
      "subtle": {
        "root": "bg-elevated/50 ring ring-default divide-y divide-default"
      }
    }
  },
  "defaultVariants": {
    "variant": "outline"
  }
};
const _sfc_main$3 = {
  __name: "UCard",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    variant: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme$1), ...appConfig.ui?.card || {} })({
      variant: props.variant
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.header) {
              _push2(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: props.ui?.header }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!!slots.default) {
              _push2(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: props.ui?.body }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!!slots.footer) {
              _push2(`<div data-slot="footer" class="${ssrRenderClass(ui.value.footer({ class: props.ui?.footer }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !!slots.header ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "header",
                class: ui.value.header({ class: props.ui?.header })
              }, [
                renderSlot(_ctx.$slots, "header")
              ], 2)) : createCommentVNode("", true),
              !!slots.default ? (openBlock(), createBlock("div", {
                key: 1,
                "data-slot": "body",
                class: ui.value.body({ class: props.ui?.body })
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2)) : createCommentVNode("", true),
              !!slots.footer ? (openBlock(), createBlock("div", {
                key: 2,
                "data-slot": "footer",
                class: ui.value.footer({ class: props.ui?.footer })
              }, [
                renderSlot(_ctx.$slots, "footer")
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Card.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const theme = {
  "base": "animate-pulse rounded-md bg-elevated"
};
const _sfc_main$2 = {
  __name: "USkeleton",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.skeleton || {} }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "aria-busy": "true",
        "aria-label": "loading",
        "aria-live": "polite",
        role: "alert",
        class: ui.value({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Skeleton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "DealCard",
  __ssrInlineRender: true,
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    deal: {
      type: [Number, String],
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_USkeleton = _sfc_main$2;
      const _component_UCard = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_NuxtImg = __nuxt_component_3;
      const _component_UIcon = _sfc_main$e;
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(`<div${ssrRenderAttrs(mergeProps(_attrs, ssrGetDirectiveProps(_ctx, _directive_auto_animate)))}>`);
      if (__props.loading) {
        _push(ssrRenderComponent(_component_USkeleton, { class: "h-[386px] w-full rounded-lg" }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_UCard, {
          ui: {
            body: "p-0!",
            root: "card-shadow"
          },
          class: "deal-card shadow-xl"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: `/deals/${__props.deal}`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="h-54 bg-gray-200 overflow-hidden rounded-lg"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_NuxtImg, {
                      loading: "lazy",
                      src: "https://www.thestageshoreditch.com/sites/default/files/styles/16_by_9/public/image-library/Find%20a%20home%20Header%201800%20x%201080.jpg?itok=mJS6WvRx",
                      class: "object-cover h-full w-full hover:scale-110 transition-transform duration-300"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "h-54 bg-gray-200 overflow-hidden rounded-lg" }, [
                        createVNode(_component_NuxtImg, {
                          loading: "lazy",
                          src: "https://www.thestageshoreditch.com/sites/default/files/styles/16_by_9/public/image-library/Find%20a%20home%20Header%201800%20x%201080.jpg?itok=mJS6WvRx",
                          class: "object-cover h-full w-full hover:scale-110 transition-transform duration-300"
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="p-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div class="flex items-center"${_scopeId}><div class="mr-3 text-2xl font-bold"${_scopeId}>$109 900</div><div class="text-sm text-primary-800/70"${_scopeId}>$780 за м2</div></div><div class="text-sm flex items-center gap-x-1 text-primary-800/70"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-fluent-location-20-filled",
                class: "size-4"
              }, null, _parent2, _scopeId));
              _push2(` Чернівці </div></div><div class="mt-2 gap-y-0.5 flex flex-col"${_scopeId}><div class="text-primary-800 font-medium"${_scopeId}> вул. Конституційна (28 Червня), 63 </div><div class="text-sm text-primary-800/70"${_scopeId}>Шевченківський район</div></div><div class="mt-4 flex gap-x-5 text-sm"${_scopeId}><div class="flex items-center gap-x-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-mdi-rhombus",
                class: "size-2 text-gray-500"
              }, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}>3 кімнати</div></div><div class="flex items-center gap-x-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-mdi-rhombus",
                class: "size-2 text-gray-500"
              }, null, _parent2, _scopeId));
              _push2(` 141 м2 </div><div class="flex items-center gap-x-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-mdi-rhombus",
                class: "size-2 text-gray-500"
              }, null, _parent2, _scopeId));
              _push2(` 5 поверх з 9 </div></div></div>`);
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  to: `/deals/${__props.deal}`
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "h-54 bg-gray-200 overflow-hidden rounded-lg" }, [
                      createVNode(_component_NuxtImg, {
                        loading: "lazy",
                        src: "https://www.thestageshoreditch.com/sites/default/files/styles/16_by_9/public/image-library/Find%20a%20home%20Header%201800%20x%201080.jpg?itok=mJS6WvRx",
                        class: "object-cover h-full w-full hover:scale-110 transition-transform duration-300"
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["to"]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode("div", { class: "mr-3 text-2xl font-bold" }, "$109 900"),
                      createVNode("div", { class: "text-sm text-primary-800/70" }, "$780 за м2")
                    ]),
                    createVNode("div", { class: "text-sm flex items-center gap-x-1 text-primary-800/70" }, [
                      createVNode(_component_UIcon, {
                        name: "i-fluent-location-20-filled",
                        class: "size-4"
                      }),
                      createTextVNode(" Чернівці ")
                    ])
                  ]),
                  createVNode("div", { class: "mt-2 gap-y-0.5 flex flex-col" }, [
                    createVNode("div", { class: "text-primary-800 font-medium" }, " вул. Конституційна (28 Червня), 63 "),
                    createVNode("div", { class: "text-sm text-primary-800/70" }, "Шевченківський район")
                  ]),
                  createVNode("div", { class: "mt-4 flex gap-x-5 text-sm" }, [
                    createVNode("div", { class: "flex items-center gap-x-1" }, [
                      createVNode(_component_UIcon, {
                        name: "i-mdi-rhombus",
                        class: "size-2 text-gray-500"
                      }),
                      createVNode("div", null, "3 кімнати")
                    ]),
                    createVNode("div", { class: "flex items-center gap-x-1" }, [
                      createVNode(_component_UIcon, {
                        name: "i-mdi-rhombus",
                        class: "size-2 text-gray-500"
                      }),
                      createTextVNode(" 141 м2 ")
                    ]),
                    createVNode("div", { class: "flex items-center gap-x-1" }, [
                      createVNode(_component_UIcon, {
                        name: "i-mdi-rhombus",
                        class: "size-2 text-gray-500"
                      }),
                      createTextVNode(" 5 поверх з 9 ")
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DealCard/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/images/bg-3d-logo-1.png");
const _sfc_main = {
  __name: "PromoCallbackBanner",
  __ssrInlineRender: true,
  setup(__props) {
    const phone = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$3;
      const _component_UInput = _sfc_main$5;
      const _component_UButton = _sfc_main$8;
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(ssrRenderComponent(_component_UCard, mergeProps({
        color: "primary",
        variant: "solid",
        ui: {
          body: "text-white promo-callback-banner-bg"
        }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between gap-x-5"${_scopeId}><div class="basis-1/2 flex flex-col gap-y-5 py-5"${_scopeId}><div class="text-3xl"${_scopeId}>Ми завжди готові допомогти з вибором нерухомості</div><div${_scopeId}> Залиште номер телефону й отримайте персональну консультацію. Жодного тиску або зобов’язань. </div><div class="flex gap-x-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UInput, {
              ui: {
                input: "bg-white/10 text-primary-700 placeholder:text-primary-300 ",
                base: "py-4 px-5 "
              },
              placeholder: "Ваш номер телефону",
              class: "w-63",
              modelValue: unref(phone),
              "onUpdate:modelValue": ($event) => isRef(phone) ? phone.value = $event : null
            }, null, _parent2, _scopeId));
            _push2(`<div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_auto_animate))}${_scopeId}>`);
            if (unref(phone)?.length) {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "white",
                variant: "solid",
                class: "h-full",
                ui: {
                  base: "px-5"
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Отримати консультацію `);
                  } else {
                    return [
                      createTextVNode(" Отримати консультацію ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div><div class="basis-[42%] flex items-center justify-center"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ "mix-blend-mode": "screen", "filter": "brightness(0.6)" })}" class="h-70 w-70 object-contain"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between gap-x-5" }, [
                createVNode("div", { class: "basis-1/2 flex flex-col gap-y-5 py-5" }, [
                  createVNode("div", { class: "text-3xl" }, "Ми завжди готові допомогти з вибором нерухомості"),
                  createVNode("div", null, " Залиште номер телефону й отримайте персональну консультацію. Жодного тиску або зобов’язань. "),
                  createVNode("div", { class: "flex gap-x-4" }, [
                    createVNode(_component_UInput, {
                      ui: {
                        input: "bg-white/10 text-primary-700 placeholder:text-primary-300 ",
                        base: "py-4 px-5 "
                      },
                      placeholder: "Ваш номер телефону",
                      class: "w-63",
                      modelValue: unref(phone),
                      "onUpdate:modelValue": ($event) => isRef(phone) ? phone.value = $event : null
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    withDirectives((openBlock(), createBlock("div", null, [
                      unref(phone)?.length ? (openBlock(), createBlock(_component_UButton, {
                        key: 0,
                        color: "white",
                        variant: "solid",
                        class: "h-full",
                        ui: {
                          base: "px-5"
                        }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Отримати консультацію ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ])), [
                      [_directive_auto_animate]
                    ])
                  ])
                ]),
                createVNode("div", { class: "basis-[42%] flex items-center justify-center" }, [
                  createVNode("img", {
                    src: _imports_0,
                    alt: "",
                    style: { "mix-blend-mode": "screen", "filter": "brightness(0.6)" },
                    class: "h-70 w-70 object-contain"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PromoCallbackBanner/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$4 as _, _sfc_main as a, _sfc_main$3 as b, _sfc_main$1 as c };
//# sourceMappingURL=index-DzWk3S9p.mjs.map
