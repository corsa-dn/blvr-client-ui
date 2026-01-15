import { _ as _sfc_main$4$1, a as _sfc_main$c, b as _sfc_main$3$1 } from './index-DzWk3S9p.mjs';
import { u as useDealsStore, _ as _sfc_main$9 } from './index-ZbGCyJKK.mjs';
import { _ as _sfc_main$1$1 } from './Input-DlCeRXhR.mjs';
import { ref, withAsyncContext, resolveDirective, mergeProps, withCtx, withDirectives, createBlock, openBlock, createVNode, unref, toDisplayString, Fragment, renderList, useSlots, computed, watch, createCommentVNode, renderSlot, createTextVNode, reactive, isRef, useId, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrGetDirectiveProps, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderSlot, ssrRenderStyle, ssrRenderVNode } from 'vue/server-renderer';
import { Primitive, useForwardPropsEmits, RadioGroupRoot, Label, RadioGroupItem, RadioGroupIndicator } from 'reka-ui';
import { pausableFilter, useMouseInElement, reactivePick, createReusableTemplate } from '@vueuse/core';
import { _ as _export_sfc, j as useAsyncData, f as _sfc_main$8$1, b as useAppConfig, t as tv, g as getSlotChildrenText, c as _sfc_main$e, d as _sfc_main$9$1, h as useFormField, e as _sfc_main$b$1, i as get } from './server.mjs';
import { _ as _sfc_main$a } from './Tabs-CSFOznZF.mjs';
import { _ as _sfc_main$b } from './index-Codm48qm.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { _ as _sfc_main$d } from './Accordion-BjTZbXnk.mjs';
import 'pinia';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@iconify/utils';
import 'consola';
import 'better-sqlite3';
import 'node:url';
import 'ipx';
import './Badge-BppIIJgc.mjs';
import 'embla-carousel-vue';

const theme$3 = {
  "slots": {
    "root": "relative flex rounded-lg",
    "spotlight": "absolute inset-0 rounded-[inherit] pointer-events-none bg-default/90",
    "container": "relative flex flex-col flex-1 lg:grid gap-x-8 gap-y-4 p-4 sm:p-6",
    "wrapper": "flex flex-col flex-1 items-start",
    "header": "mb-4",
    "body": "flex-1",
    "footer": "pt-4 mt-auto",
    "leading": "inline-flex items-center mb-2.5",
    "leadingIcon": "size-5 shrink-0 text-primary",
    "title": "text-base text-pretty font-semibold text-highlighted",
    "description": "text-[15px] text-pretty"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "container": "lg:grid-cols-2 lg:items-center"
      },
      "vertical": {
        "container": ""
      }
    },
    "reverse": {
      "true": {
        "wrapper": "lg:order-last"
      }
    },
    "variant": {
      "solid": {
        "root": "bg-inverted text-inverted",
        "title": "text-inverted",
        "description": "text-dimmed"
      },
      "outline": {
        "root": "bg-default ring ring-default",
        "description": "text-muted"
      },
      "soft": {
        "root": "bg-elevated/50",
        "description": "text-toned"
      },
      "subtle": {
        "root": "bg-elevated/50 ring ring-default",
        "description": "text-toned"
      },
      "ghost": {
        "description": "text-muted"
      },
      "naked": {
        "container": "p-0 sm:p-0",
        "description": "text-muted"
      }
    },
    "to": {
      "true": {
        "root": [
          "transition"
        ]
      }
    },
    "title": {
      "true": {
        "description": "mt-1"
      }
    },
    "highlight": {
      "true": {
        "root": "ring-2"
      }
    },
    "highlightColor": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "spotlight": {
      "true": {
        "root": "[--spotlight-size:400px] before:absolute before:-inset-px before:pointer-events-none before:rounded-[inherit] before:bg-[radial-gradient(var(--spotlight-size)_var(--spotlight-size)_at_calc(var(--spotlight-x,0px))_calc(var(--spotlight-y,0px)),var(--spotlight-color),transparent_70%)]"
      }
    },
    "spotlightColor": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    }
  },
  "compoundVariants": [
    {
      "variant": "solid",
      "to": true,
      "class": {
        "root": "hover:bg-inverted/90"
      }
    },
    {
      "variant": "outline",
      "to": true,
      "class": {
        "root": "hover:bg-elevated/50"
      }
    },
    {
      "variant": "soft",
      "to": true,
      "class": {
        "root": "hover:bg-elevated"
      }
    },
    {
      "variant": "subtle",
      "to": true,
      "class": {
        "root": "hover:bg-elevated"
      }
    },
    {
      "variant": "subtle",
      "to": true,
      "highlight": false,
      "class": {
        "root": "hover:ring-accented"
      }
    },
    {
      "variant": "ghost",
      "to": true,
      "class": {
        "root": "hover:bg-elevated/50"
      }
    },
    {
      "highlightColor": "primary",
      "highlight": true,
      "class": {
        "root": "ring-primary"
      }
    },
    {
      "highlightColor": "secondary",
      "highlight": true,
      "class": {
        "root": "ring-secondary"
      }
    },
    {
      "highlightColor": "success",
      "highlight": true,
      "class": {
        "root": "ring-success"
      }
    },
    {
      "highlightColor": "info",
      "highlight": true,
      "class": {
        "root": "ring-info"
      }
    },
    {
      "highlightColor": "warning",
      "highlight": true,
      "class": {
        "root": "ring-warning"
      }
    },
    {
      "highlightColor": "error",
      "highlight": true,
      "class": {
        "root": "ring-error"
      }
    },
    {
      "highlightColor": "neutral",
      "highlight": true,
      "class": {
        "root": "ring-inverted"
      }
    },
    {
      "spotlightColor": "primary",
      "spotlight": true,
      "class": {
        "root": "[--spotlight-color:var(--ui-primary)]"
      }
    },
    {
      "spotlightColor": "secondary",
      "spotlight": true,
      "class": {
        "root": "[--spotlight-color:var(--ui-secondary)]"
      }
    },
    {
      "spotlightColor": "success",
      "spotlight": true,
      "class": {
        "root": "[--spotlight-color:var(--ui-success)]"
      }
    },
    {
      "spotlightColor": "info",
      "spotlight": true,
      "class": {
        "root": "[--spotlight-color:var(--ui-info)]"
      }
    },
    {
      "spotlightColor": "warning",
      "spotlight": true,
      "class": {
        "root": "[--spotlight-color:var(--ui-warning)]"
      }
    },
    {
      "spotlightColor": "error",
      "spotlight": true,
      "class": {
        "root": "[--spotlight-color:var(--ui-error)]"
      }
    },
    {
      "spotlightColor": "neutral",
      "spotlight": true,
      "class": {
        "root": "[--spotlight-color:var(--ui-bg-inverted)]"
      }
    },
    {
      "to": true,
      "class": {
        "root": "has-focus-visible:ring-2 has-focus-visible:ring-primary"
      }
    }
  ],
  "defaultVariants": {
    "variant": "outline",
    "highlightColor": "primary",
    "spotlightColor": "primary"
  }
};
const _sfc_main$8 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UPageCard",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    icon: { type: null, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    orientation: { type: null, required: false, default: "vertical" },
    reverse: { type: Boolean, required: false },
    highlight: { type: Boolean, required: false },
    highlightColor: { type: null, required: false },
    spotlight: { type: Boolean, required: false },
    spotlightColor: { type: null, required: false },
    variant: { type: null, required: false },
    to: { type: null, required: false },
    target: { type: [String, Object, null], required: false },
    onClick: { type: Function, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const cardRef = ref();
    const motionControl = pausableFilter();
    const appConfig = useAppConfig();
    const { elementX, elementY } = useMouseInElement(cardRef, {
      eventFilter: motionControl.eventFilter
    });
    const spotlight = computed(() => props.spotlight && (elementX.value !== 0 || elementY.value !== 0));
    watch(() => props.spotlight, (value) => {
      if (value) {
        motionControl.resume();
      } else {
        motionControl.pause();
      }
    }, { immediate: true });
    const ui = computed(() => tv({ extend: tv(theme$3), ...appConfig.ui?.pageCard || {} })({
      orientation: props.orientation,
      reverse: props.reverse,
      variant: props.variant,
      to: !!props.to || !!props.onClick,
      title: !!props.title || !!slots.title,
      highlight: props.highlight,
      highlightColor: props.highlightColor,
      spotlight: spotlight.value,
      spotlightColor: props.spotlightColor
    }));
    const ariaLabel = computed(() => {
      const slotText = slots.title && getSlotChildrenText(slots.title());
      return (slotText || props.title || "Card link").trim();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        ref_key: "cardRef",
        ref: cardRef,
        as: __props.as,
        "data-orientation": __props.orientation,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] }),
        style: spotlight.value && { "--spotlight-x": `${unref(elementX)}px`, "--spotlight-y": `${unref(elementY)}px` },
        onClick: __props.onClick
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (props.spotlight) {
              _push2(`<div data-slot="spotlight" class="${ssrRenderClass(ui.value.spotlight({ class: props.ui?.spotlight }))}"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: props.ui?.container }))}"${_scopeId}>`);
            if (!!slots.header || (__props.icon || !!slots.leading) || !!slots.body || (__props.title || !!slots.title) || (__props.description || !!slots.description) || !!slots.footer) {
              _push2(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: props.ui?.wrapper }))}"${_scopeId}>`);
              if (!!slots.header) {
                _push2(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: props.ui?.header }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.icon || !!slots.leading) {
                _push2(`<div data-slot="leading" class="${ssrRenderClass(ui.value.leading({ class: props.ui?.leading }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
                  if (__props.icon) {
                    _push2(ssrRenderComponent(_sfc_main$e, {
                      name: __props.icon,
                      "data-slot": "leadingIcon",
                      class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (!!slots.body || (__props.title || !!slots.title) || (__props.description || !!slots.description)) {
                _push2(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: props.ui?.body }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "body", {}, () => {
                  if (__props.title || !!slots.title) {
                    _push2(`<div data-slot="title" class="${ssrRenderClass(ui.value.title({ class: props.ui?.title }))}"${_scopeId}>`);
                    ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                      _push2(`${ssrInterpolate(__props.title)}`);
                    }, _push2, _parent2, _scopeId);
                    _push2(`</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (__props.description || !!slots.description) {
                    _push2(`<div data-slot="description" class="${ssrRenderClass(ui.value.description({ class: props.ui?.description }))}"${_scopeId}>`);
                    ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                      _push2(`${ssrInterpolate(__props.description)}`);
                    }, _push2, _parent2, _scopeId);
                    _push2(`</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
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
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            if (__props.to) {
              _push2(ssrRenderComponent(_sfc_main$9$1, mergeProps({ "aria-label": ariaLabel.value }, { to: __props.to, target: __props.target, ..._ctx.$attrs }, {
                class: "focus:outline-none peer",
                raw: ""
              }), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="absolute inset-0" aria-hidden="true"${_scopeId2}></span>`);
                  } else {
                    return [
                      createVNode("span", {
                        class: "absolute inset-0",
                        "aria-hidden": "true"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              props.spotlight ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "spotlight",
                class: ui.value.spotlight({ class: props.ui?.spotlight })
              }, null, 2)) : createCommentVNode("", true),
              createVNode("div", {
                "data-slot": "container",
                class: ui.value.container({ class: props.ui?.container })
              }, [
                !!slots.header || (__props.icon || !!slots.leading) || !!slots.body || (__props.title || !!slots.title) || (__props.description || !!slots.description) || !!slots.footer ? (openBlock(), createBlock("div", {
                  key: 0,
                  "data-slot": "wrapper",
                  class: ui.value.wrapper({ class: props.ui?.wrapper })
                }, [
                  !!slots.header ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-slot": "header",
                    class: ui.value.header({ class: props.ui?.header })
                  }, [
                    renderSlot(_ctx.$slots, "header")
                  ], 2)) : createCommentVNode("", true),
                  __props.icon || !!slots.leading ? (openBlock(), createBlock("div", {
                    key: 1,
                    "data-slot": "leading",
                    class: ui.value.leading({ class: props.ui?.leading })
                  }, [
                    renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [
                      __props.icon ? (openBlock(), createBlock(_sfc_main$e, {
                        key: 0,
                        name: __props.icon,
                        "data-slot": "leadingIcon",
                        class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                    ])
                  ], 2)) : createCommentVNode("", true),
                  !!slots.body || (__props.title || !!slots.title) || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                    key: 2,
                    "data-slot": "body",
                    class: ui.value.body({ class: props.ui?.body })
                  }, [
                    renderSlot(_ctx.$slots, "body", {}, () => [
                      __props.title || !!slots.title ? (openBlock(), createBlock("div", {
                        key: 0,
                        "data-slot": "title",
                        class: ui.value.title({ class: props.ui?.title })
                      }, [
                        renderSlot(_ctx.$slots, "title", {}, () => [
                          createTextVNode(toDisplayString(__props.title), 1)
                        ])
                      ], 2)) : createCommentVNode("", true),
                      __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                        key: 1,
                        "data-slot": "description",
                        class: ui.value.description({ class: props.ui?.description })
                      }, [
                        renderSlot(_ctx.$slots, "description", {}, () => [
                          createTextVNode(toDisplayString(__props.description), 1)
                        ])
                      ], 2)) : createCommentVNode("", true)
                    ])
                  ], 2)) : createCommentVNode("", true),
                  !!slots.footer ? (openBlock(), createBlock("div", {
                    key: 3,
                    "data-slot": "footer",
                    class: ui.value.footer({ class: props.ui?.footer })
                  }, [
                    renderSlot(_ctx.$slots, "footer")
                  ], 2)) : createCommentVNode("", true)
                ], 2)) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "default")
              ], 2),
              __props.to ? (openBlock(), createBlock(_sfc_main$9$1, mergeProps({
                key: 1,
                "aria-label": ariaLabel.value
              }, { to: __props.to, target: __props.target, ..._ctx.$attrs }, {
                class: "focus:outline-none peer",
                raw: ""
              }), {
                default: withCtx(() => [
                  createVNode("span", {
                    class: "absolute inset-0",
                    "aria-hidden": "true"
                  })
                ]),
                _: 1
              }, 16, ["aria-label"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/PageCard.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _imports_0$1 = publicAssetsURL("/images/logo-mini.svg");
const _imports_1 = publicAssetsURL("/images/promo-stats-img.png");
const _sfc_main$7 = {
  __name: "PromoStatsBanner",
  __ssrInlineRender: true,
  setup(__props) {
    const stats = ref([
      { number: "15 000+", label: "Обєктів в базі" },
      { number: "100+", label: "Експертів у команді" },
      { number: "5 000+", label: "Щасливих клієнтів" },
      {
        number: "95%",
        label: "Позитивних відгуків"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$3$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UCard, { ui: {
        body: "p-0! promo-stats-banner-bg",
        root: "rounded-3xl"
      } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex gap-x-10"${_scopeId}><div class="py-10 pl-7 basis-[63%] gap-y-10 flex flex-col items-between text-white"${_scopeId}><div class="font-xolonium uppercase flex items-center gap-x-2"${_scopeId}><span class=""${_scopeId}>Агентство нерухомості</span><img${ssrRenderAttr("src", _imports_0$1)} alt=""${_scopeId}><span${_scopeId}>BULVAR</span></div><div class="text-3xl"${_scopeId}> Ми не просто продаємо квартири, а створюємо для кожного клієнта індивідуальний шлях до власного житла </div><div${_scopeId}> Ми пропонуємо лише перевірені об’єкти, співпрацюємо з провідними забудовниками та дбаємо про прозорість кожного кроку. Завдяки індивідуальному підходу ви отримуєте не просто угоду, а впевненість, що зробили правильний вибір. </div><div class="flex gap-x-4"${_scopeId}><!--[-->`);
            ssrRenderList(unref(stats), (stat) => {
              _push2(`<div class="flex-1"${_scopeId}><div class="text-3xl mb-2"${_scopeId}>${ssrInterpolate(stat.number)}</div><div${_scopeId}>${ssrInterpolate(stat.label)}</div></div>`);
            });
            _push2(`<!--]--></div></div><div${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="" style="${ssrRenderStyle({ "height": "100%", "width": "auto", "object-fit": "cover", "object-position": "left bottom" })}"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex gap-x-10" }, [
                createVNode("div", { class: "py-10 pl-7 basis-[63%] gap-y-10 flex flex-col items-between text-white" }, [
                  createVNode("div", { class: "font-xolonium uppercase flex items-center gap-x-2" }, [
                    createVNode("span", { class: "" }, "Агентство нерухомості"),
                    createVNode("img", {
                      src: _imports_0$1,
                      alt: ""
                    }),
                    createVNode("span", null, "BULVAR")
                  ]),
                  createVNode("div", { class: "text-3xl" }, " Ми не просто продаємо квартири, а створюємо для кожного клієнта індивідуальний шлях до власного житла "),
                  createVNode("div", null, " Ми пропонуємо лише перевірені об’єкти, співпрацюємо з провідними забудовниками та дбаємо про прозорість кожного кроку. Завдяки індивідуальному підходу ви отримуєте не просто угоду, а впевненість, що зробили правильний вибір. "),
                  createVNode("div", { class: "flex gap-x-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(stats), (stat) => {
                      return openBlock(), createBlock("div", {
                        key: stat.label,
                        class: "flex-1"
                      }, [
                        createVNode("div", { class: "text-3xl mb-2" }, toDisplayString(stat.number), 1),
                        createVNode("div", null, toDisplayString(stat.label), 1)
                      ]);
                    }), 128))
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("img", {
                    src: _imports_1,
                    alt: "",
                    style: { "height": "100%", "width": "auto", "object-fit": "cover", "object-position": "left bottom" }
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PromoStatsBanner/index.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const theme$2 = {
  "slots": {
    "root": "group relative flex items-center overflow-hidden gap-(--gap) [--gap:--spacing(16)] [--duration:20s]",
    "content": "flex items-center shrink-0 justify-around gap-(--gap) min-w-max"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "content": "w-full"
      },
      "vertical": {
        "content": "h-full"
      }
    },
    "pauseOnHover": {
      "true": {
        "content": "group-hover:[animation-play-state:paused]"
      }
    },
    "reverse": {
      "true": {
        "content": "![animation-direction:reverse]"
      }
    },
    "overlay": {
      "true": {
        "root": 'before:absolute before:pointer-events-none before:content-[""] before:z-2 before:from-default before:to-transparent after:absolute after:pointer-events-none after:content-[""] after:z-2 after:from-default after:to-transparent'
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "class": {
        "root": "flex-row",
        "content": "flex-row animate-[marquee_var(--duration)_linear_infinite] rtl:animate-[marquee-rtl_var(--duration)_linear_infinite] backface-hidden"
      }
    },
    {
      "orientation": "horizontal",
      "overlay": true,
      "class": {
        "root": "before:inset-y-0 before:left-0 before:h-full before:w-1/3 before:bg-gradient-to-r after:inset-y-0 after:right-0 after:h-full after:w-1/3 after:bg-gradient-to-l backface-hidden"
      }
    },
    {
      "orientation": "vertical",
      "class": {
        "root": "flex-col",
        "content": "flex-col animate-[marquee-vertical_var(--duration)_linear_infinite] rtl:animate-[marquee-vertical-rtl_var(--duration)_linear_infinite] h-[fit-content] backface-hidden"
      }
    },
    {
      "orientation": "vertical",
      "overlay": true,
      "class": {
        "root": "before:inset-x-0 before:top-0 before:w-full before:h-1/3 before:bg-gradient-to-b after:inset-x-0 after:bottom-0 after:w-full after:h-1/3 after:bg-gradient-to-t backface-hidden"
      }
    }
  ]
};
const _sfc_main$6 = {
  __name: "UMarquee",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    pauseOnHover: { type: Boolean, required: false },
    reverse: { type: Boolean, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    repeat: { type: Number, required: false, default: 4 },
    overlay: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme$2), ...appConfig.ui?.marquee || {} })({
      pauseOnHover: props.pauseOnHover,
      orientation: props.orientation,
      reverse: props.reverse,
      overlay: props.overlay
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-orientation": __props.orientation,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.repeat, (i) => {
              _push2(`<div data-slot="content" class="${ssrRenderClass(ui.value.content({ class: [props.ui?.content] }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.repeat, (i) => {
                return openBlock(), createBlock("div", {
                  key: i,
                  "data-slot": "content",
                  class: ui.value.content({ class: [props.ui?.content] })
                }, [
                  renderSlot(_ctx.$slots, "default")
                ], 2);
              }), 128))
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Marquee.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const theme$1 = {
  "slots": {
    "root": "relative overflow-hidden",
    "title": "text-lg text-center font-semibold text-highlighted",
    "logos": "mt-10",
    "logo": "size-10 shrink-0"
  },
  "variants": {
    "marquee": {
      "false": {
        "logos": "flex items-center shrink-0 justify-around gap-(--gap) [--gap:--spacing(16)]"
      }
    }
  }
};
const _sfc_main$5 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UPageLogos",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    title: { type: String, required: false },
    items: { type: Array, required: false },
    marquee: { type: [Boolean, Object], required: false, default: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const [DefineCreateItemTemplate, ReuseCreateItemTemplate] = createReusableTemplate();
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme$1), ...appConfig.ui?.pageLogos || {} })());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineCreateItemTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else if (__props.items?.length) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.items, (item, index2) => {
                _push2(`<!--[-->`);
                if (typeof item === "object") {
                  _push2(ssrRenderComponent(_sfc_main$b$1, {
                    src: item.src,
                    alt: item.alt,
                    "data-slot": "logo",
                    class: ui.value.logo({ class: props.ui?.logo })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(ssrRenderComponent(_sfc_main$e, {
                    name: item,
                    "data-slot": "logo",
                    class: ui.value.logo({ class: props.ui?.logo })
                  }, null, _parent2, _scopeId));
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !!slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : __props.items?.length ? (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(__props.items, (item, index2) => {
                return openBlock(), createBlock(Fragment, { key: index2 }, [
                  typeof item === "object" ? (openBlock(), createBlock(_sfc_main$b$1, {
                    key: 0,
                    src: item.src,
                    alt: item.alt,
                    "data-slot": "logo",
                    class: ui.value.logo({ class: props.ui?.logo })
                  }, null, 8, ["src", "alt", "class"])) : (openBlock(), createBlock(_sfc_main$e, {
                    key: 1,
                    name: item,
                    "data-slot": "logo",
                    class: ui.value.logo({ class: props.ui?.logo })
                  }, null, 8, ["name", "class"]))
                ], 64);
              }), 128)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(Primitive), mergeProps({ as: __props.as }, _ctx.$attrs, {
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.title) {
              _push2(`<h2 data-slot="title" class="${ssrRenderClass(ui.value.title({ class: props.ui?.title }))}"${_scopeId}>${ssrInterpolate(__props.title)}</h2>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.marquee) {
              _push2(ssrRenderComponent(_sfc_main$6, mergeProps(typeof __props.marquee === "object" ? __props.marquee : {}, {
                "data-slot": "logos",
                class: ui.value.logos({ class: props.ui?.logos, marquee: true })
              }), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(ReuseCreateItemTemplate), { items: __props.items }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(ReuseCreateItemTemplate), { items: __props.items }, null, 8, ["items"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<div data-slot="logos" class="${ssrRenderClass(ui.value.logos({ class: props.ui?.logos }))}"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(ReuseCreateItemTemplate), { items: __props.items }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
          } else {
            return [
              __props.title ? (openBlock(), createBlock("h2", {
                key: 0,
                "data-slot": "title",
                class: ui.value.title({ class: props.ui?.title })
              }, toDisplayString(__props.title), 3)) : createCommentVNode("", true),
              __props.marquee ? (openBlock(), createBlock(_sfc_main$6, mergeProps({ key: 1 }, typeof __props.marquee === "object" ? __props.marquee : {}, {
                "data-slot": "logos",
                class: ui.value.logos({ class: props.ui?.logos, marquee: true })
              }), {
                default: withCtx(() => [
                  createVNode(unref(ReuseCreateItemTemplate), { items: __props.items }, null, 8, ["items"])
                ]),
                _: 1
              }, 16, ["class"])) : (openBlock(), createBlock("div", {
                key: 2,
                "data-slot": "logos",
                class: ui.value.logos({ class: props.ui?.logos })
              }, [
                createVNode(unref(ReuseCreateItemTemplate), { items: __props.items }, null, 8, ["items"])
              ], 2))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/PageLogos.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_UPageLogos = _sfc_main$5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center" }, _attrs))}><div class="mr-2 w-250 flex flex-col gap-y-3"><div class="text-3xl text-regular text-primary-800"><div>Наші партнери</div></div><div class="text-primary-800/70">Ми працюємо лише з надійними лідерами галузі</div></div>`);
  _push(ssrRenderComponent(_component_UPageLogos, {
    marquee: "",
    ui: {
      logos: "mt-0"
    },
    items: [
      "i-simple-icons-github",
      "i-simple-icons-discord",
      "i-simple-icons-x",
      "i-simple-icons-instagram",
      "i-simple-icons-linkedin",
      "i-simple-icons-facebook"
    ]
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Partners/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]), { __name: "Partners" });
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UCard = _sfc_main$3$1;
  const _component_UButton = _sfc_main$8$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-4 gap-x-5 h-77" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_UCard, {
    ui: {
      body: "flex flex-col h-full //bg-light-gray bg-promo-grid-image-1"
    },
    class: "col-span-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex-1 flex flex-col justify-between"${_scopeId}><div class="text-2xl font-semibold text-primary-700"${_scopeId}>Дбаємо</div><div class="w-[50%]"${_scopeId}> Про виняткове дотримання ваших інтересів, маємо вдосталь нетипових рішень </div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex-1 flex flex-col justify-between" }, [
            createVNode("div", { class: "text-2xl font-semibold text-primary-700" }, "Дбаємо"),
            createVNode("div", { class: "w-[50%]" }, " Про виняткове дотримання ваших інтересів, маємо вдосталь нетипових рішень ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_UCard, { ui: {
    body: "flex flex-col h-full bg-light-gray"
  } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex-1 flex flex-col justify-between"${_scopeId}><div class="text-2xl font-semibold text-primary-700"${_scopeId}>Надаємо</div><div${_scopeId}>Юридичний супровід угод, перевіряємо кожну деталь, щоб ви мали спокій</div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex-1 flex flex-col justify-between" }, [
            createVNode("div", { class: "text-2xl font-semibold text-primary-700" }, "Надаємо"),
            createVNode("div", null, "Юридичний супровід угод, перевіряємо кожну деталь, щоб ви мали спокій")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_UCard, { ui: {
    body: "flex flex-col h-full bg-primary text-white lines-bg"
  } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex-1 flex flex-col justify-between"${_scopeId}><div class="text-2xl font-semibold"${_scopeId}>Підбираємо</div><div${_scopeId}><div class="flex flex-col gap-y-2"${_scopeId}><div${_scopeId}> До вашої уваги тільки ті обєкти, що повністю відпвідають вашим побажанням </div>`);
        _push2(ssrRenderComponent(_component_UButton, {
          block: "",
          icon: "i-lucide-search",
          color: "accent-secondary",
          variant: "solid"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Підібрати `);
            } else {
              return [
                createTextVNode(" Підібрати ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex-1 flex flex-col justify-between" }, [
            createVNode("div", { class: "text-2xl font-semibold" }, "Підбираємо"),
            createVNode("div", null, [
              createVNode("div", { class: "flex flex-col gap-y-2" }, [
                createVNode("div", null, " До вашої уваги тільки ті обєкти, що повністю відпвідають вашим побажанням "),
                createVNode(_component_UButton, {
                  block: "",
                  icon: "i-lucide-search",
                  color: "accent-secondary",
                  variant: "solid"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Підібрати ")
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PromoBento/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]), { __name: "PromoBento" });
const theme = {
  "slots": {
    "root": "relative",
    "fieldset": "flex gap-x-2",
    "legend": "mb-1 block font-medium text-default",
    "item": "flex items-start",
    "container": "flex items-center",
    "base": "rounded-full ring ring-inset ring-accented overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2",
    "indicator": "flex items-center justify-center size-full after:bg-default after:rounded-full",
    "wrapper": "w-full",
    "label": "block font-medium text-default",
    "description": "text-muted"
  },
  "variants": {
    "color": {
      "primary": {
        "base": "focus-visible:outline-primary",
        "indicator": "bg-primary"
      },
      "secondary": {
        "base": "focus-visible:outline-secondary",
        "indicator": "bg-secondary"
      },
      "success": {
        "base": "focus-visible:outline-success",
        "indicator": "bg-success"
      },
      "info": {
        "base": "focus-visible:outline-info",
        "indicator": "bg-info"
      },
      "warning": {
        "base": "focus-visible:outline-warning",
        "indicator": "bg-warning"
      },
      "error": {
        "base": "focus-visible:outline-error",
        "indicator": "bg-error"
      },
      "neutral": {
        "base": "focus-visible:outline-inverted",
        "indicator": "bg-inverted"
      }
    },
    "variant": {
      "list": {
        "item": ""
      },
      "card": {
        "item": "border border-muted rounded-lg"
      },
      "table": {
        "item": "border border-muted"
      }
    },
    "orientation": {
      "horizontal": {
        "fieldset": "flex-row"
      },
      "vertical": {
        "fieldset": "flex-col"
      }
    },
    "indicator": {
      "start": {
        "item": "flex-row",
        "wrapper": "ms-2"
      },
      "end": {
        "item": "flex-row-reverse",
        "wrapper": "me-2"
      },
      "hidden": {
        "base": "sr-only",
        "wrapper": "text-center"
      }
    },
    "size": {
      "xs": {
        "fieldset": "gap-y-0.5",
        "legend": "text-xs",
        "base": "size-3",
        "item": "text-xs",
        "container": "h-4",
        "indicator": "after:size-1"
      },
      "sm": {
        "fieldset": "gap-y-0.5",
        "legend": "text-xs",
        "base": "size-3.5",
        "item": "text-xs",
        "container": "h-4",
        "indicator": "after:size-1"
      },
      "md": {
        "fieldset": "gap-y-1",
        "legend": "text-sm",
        "base": "size-4",
        "item": "text-sm",
        "container": "h-5",
        "indicator": "after:size-1.5"
      },
      "lg": {
        "fieldset": "gap-y-1",
        "legend": "text-sm",
        "base": "size-4.5",
        "item": "text-sm",
        "container": "h-5",
        "indicator": "after:size-1.5"
      },
      "xl": {
        "fieldset": "gap-y-1.5",
        "legend": "text-base",
        "base": "size-5",
        "item": "text-base",
        "container": "h-6",
        "indicator": "after:size-2"
      }
    },
    "disabled": {
      "true": {
        "item": "opacity-75",
        "base": "cursor-not-allowed",
        "label": "cursor-not-allowed",
        "description": "cursor-not-allowed"
      }
    },
    "required": {
      "true": {
        "legend": "after:content-['*'] after:ms-0.5 after:text-error"
      }
    }
  },
  "compoundVariants": [
    {
      "size": "xs",
      "variant": [
        "card",
        "table"
      ],
      "class": {
        "item": "p-2.5"
      }
    },
    {
      "size": "sm",
      "variant": [
        "card",
        "table"
      ],
      "class": {
        "item": "p-3"
      }
    },
    {
      "size": "md",
      "variant": [
        "card",
        "table"
      ],
      "class": {
        "item": "p-3.5"
      }
    },
    {
      "size": "lg",
      "variant": [
        "card",
        "table"
      ],
      "class": {
        "item": "p-4"
      }
    },
    {
      "size": "xl",
      "variant": [
        "card",
        "table"
      ],
      "class": {
        "item": "p-4.5"
      }
    },
    {
      "orientation": "horizontal",
      "variant": "table",
      "class": {
        "item": "first-of-type:rounded-s-lg last-of-type:rounded-e-lg",
        "fieldset": "gap-0 -space-x-px"
      }
    },
    {
      "orientation": "vertical",
      "variant": "table",
      "class": {
        "item": "first-of-type:rounded-t-lg last-of-type:rounded-b-lg",
        "fieldset": "gap-0 -space-y-px"
      }
    },
    {
      "color": "primary",
      "variant": "card",
      "class": {
        "item": "has-data-[state=checked]:border-primary"
      }
    },
    {
      "color": "secondary",
      "variant": "card",
      "class": {
        "item": "has-data-[state=checked]:border-secondary"
      }
    },
    {
      "color": "success",
      "variant": "card",
      "class": {
        "item": "has-data-[state=checked]:border-success"
      }
    },
    {
      "color": "info",
      "variant": "card",
      "class": {
        "item": "has-data-[state=checked]:border-info"
      }
    },
    {
      "color": "warning",
      "variant": "card",
      "class": {
        "item": "has-data-[state=checked]:border-warning"
      }
    },
    {
      "color": "error",
      "variant": "card",
      "class": {
        "item": "has-data-[state=checked]:border-error"
      }
    },
    {
      "color": "neutral",
      "variant": "card",
      "class": {
        "item": "has-data-[state=checked]:border-inverted"
      }
    },
    {
      "color": "primary",
      "variant": "table",
      "class": {
        "item": "has-data-[state=checked]:bg-primary/10 has-data-[state=checked]:border-primary/50 has-data-[state=checked]:z-[1]"
      }
    },
    {
      "color": "secondary",
      "variant": "table",
      "class": {
        "item": "has-data-[state=checked]:bg-secondary/10 has-data-[state=checked]:border-secondary/50 has-data-[state=checked]:z-[1]"
      }
    },
    {
      "color": "success",
      "variant": "table",
      "class": {
        "item": "has-data-[state=checked]:bg-success/10 has-data-[state=checked]:border-success/50 has-data-[state=checked]:z-[1]"
      }
    },
    {
      "color": "info",
      "variant": "table",
      "class": {
        "item": "has-data-[state=checked]:bg-info/10 has-data-[state=checked]:border-info/50 has-data-[state=checked]:z-[1]"
      }
    },
    {
      "color": "warning",
      "variant": "table",
      "class": {
        "item": "has-data-[state=checked]:bg-warning/10 has-data-[state=checked]:border-warning/50 has-data-[state=checked]:z-[1]"
      }
    },
    {
      "color": "error",
      "variant": "table",
      "class": {
        "item": "has-data-[state=checked]:bg-error/10 has-data-[state=checked]:border-error/50 has-data-[state=checked]:z-[1]"
      }
    },
    {
      "color": "neutral",
      "variant": "table",
      "class": {
        "item": "has-data-[state=checked]:bg-elevated has-data-[state=checked]:border-inverted/50 has-data-[state=checked]:z-[1]"
      }
    },
    {
      "variant": [
        "card",
        "table"
      ],
      "disabled": true,
      "class": {
        "item": "cursor-not-allowed"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "list",
    "orientation": "vertical",
    "indicator": "start"
  }
};
const _sfc_main$2 = {
  __name: "URadioGroup",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    legend: { type: String, required: false },
    valueKey: { type: null, required: false, default: "value" },
    labelKey: { type: null, required: false, default: "label" },
    descriptionKey: { type: null, required: false, default: "description" },
    items: { type: null, required: false },
    modelValue: { type: null, required: false },
    defaultValue: { type: null, required: false },
    size: { type: null, required: false },
    variant: { type: null, required: false },
    color: { type: null, required: false },
    orientation: { type: null, required: false, default: "vertical" },
    indicator: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    disabled: { type: Boolean, required: false },
    loop: { type: Boolean, required: false },
    name: { type: String, required: false },
    required: { type: Boolean, required: false }
  },
  emits: ["change", "update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "loop", "required"), emits);
    const { emitFormChange, emitFormInput, color, name, size, id: _id, disabled, ariaAttrs } = useFormField(props, { bind: false });
    const id = _id.value ?? useId();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.radioGroup || {} })({
      size: size.value,
      color: color.value,
      disabled: disabled.value,
      required: props.required,
      orientation: props.orientation,
      variant: props.variant,
      indicator: props.indicator
    }));
    function normalizeItem(item) {
      if (item === null) {
        return {
          id: `${id}:null`,
          value: void 0,
          label: void 0
        };
      }
      if (typeof item === "string" || typeof item === "number" || typeof item === "bigint") {
        return {
          id: `${id}:${item}`,
          value: String(item),
          label: String(item)
        };
      }
      const value = get(item, props.valueKey);
      const label = get(item, props.labelKey);
      const description = get(item, props.descriptionKey);
      return {
        ...item,
        value,
        label,
        description,
        id: `${id}:${value}`
      };
    }
    const normalizedItems = computed(() => {
      if (!props.items) {
        return [];
      }
      return props.items.map(normalizeItem);
    });
    function onUpdate(value) {
      const event = new Event("change", { target: { value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RadioGroupRoot), mergeProps({ id: unref(id) }, unref(rootProps), {
        "model-value": __props.modelValue,
        "default-value": __props.defaultValue,
        orientation: __props.orientation,
        name: unref(name),
        disabled: unref(disabled),
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] }),
        "onUpdate:modelValue": onUpdate
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<fieldset${ssrRenderAttrs(mergeProps({
              "data-slot": "fieldset",
              class: ui.value.fieldset({ class: props.ui?.fieldset })
            }, unref(ariaAttrs)))}${_scopeId}>`);
            if (__props.legend || !!slots.legend) {
              _push2(`<legend data-slot="legend" class="${ssrRenderClass(ui.value.legend({ class: props.ui?.legend }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "legend", {}, () => {
                _push2(`${ssrInterpolate(__props.legend)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</legend>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(normalizedItems.value, (item) => {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(!__props.variant || __props.variant === "list" ? "div" : unref(Label)), {
                key: item.value,
                "data-slot": "item",
                class: ui.value.item({ class: [props.ui?.item, item.ui?.item, item.class], disabled: item.disabled || unref(disabled) })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: [props.ui?.container, item.ui?.container] }))}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(RadioGroupItem), {
                      id: item.id,
                      value: item.value,
                      disabled: item.disabled || unref(disabled),
                      "data-slot": "base",
                      class: ui.value.base({ class: [props.ui?.base, item.ui?.base], disabled: item.disabled || unref(disabled) })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(RadioGroupIndicator), {
                            "data-slot": "indicator",
                            class: ui.value.indicator({ class: [props.ui?.indicator, item.ui?.indicator] })
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(RadioGroupIndicator), {
                              "data-slot": "indicator",
                              class: ui.value.indicator({ class: [props.ui?.indicator, item.ui?.indicator] })
                            }, null, 8, ["class"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                    if (item.label || !!slots.label || (item.description || !!slots.description)) {
                      _push3(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: [props.ui?.wrapper, item.ui?.wrapper] }))}"${_scopeId2}>`);
                      if (item.label || !!slots.label) {
                        ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(!__props.variant || __props.variant === "list" ? unref(Label) : "p"), {
                          for: item.id,
                          "data-slot": "label",
                          class: ui.value.label({ class: [props.ui?.label, item.ui?.label], disabled: item.disabled || unref(disabled) })
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              ssrRenderSlot(_ctx.$slots, "label", {
                                item,
                                modelValue: __props.modelValue
                              }, () => {
                                _push4(`${ssrInterpolate(item.label)}`);
                              }, _push4, _parent4, _scopeId3);
                            } else {
                              return [
                                renderSlot(_ctx.$slots, "label", {
                                  item,
                                  modelValue: __props.modelValue
                                }, () => [
                                  createTextVNode(toDisplayString(item.label), 1)
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }), _parent3, _scopeId2);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (item.description || !!slots.description) {
                        _push3(`<p data-slot="description" class="${ssrRenderClass(ui.value.description({ class: [props.ui?.description, item.ui?.description], disabled: item.disabled || unref(disabled) }))}"${_scopeId2}>`);
                        ssrRenderSlot(_ctx.$slots, "description", {
                          item,
                          modelValue: __props.modelValue
                        }, () => {
                          _push3(`${ssrInterpolate(item.description)}`);
                        }, _push3, _parent3, _scopeId2);
                        _push3(`</p>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode("div", {
                        "data-slot": "container",
                        class: ui.value.container({ class: [props.ui?.container, item.ui?.container] })
                      }, [
                        createVNode(unref(RadioGroupItem), {
                          id: item.id,
                          value: item.value,
                          disabled: item.disabled || unref(disabled),
                          "data-slot": "base",
                          class: ui.value.base({ class: [props.ui?.base, item.ui?.base], disabled: item.disabled || unref(disabled) })
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(RadioGroupIndicator), {
                              "data-slot": "indicator",
                              class: ui.value.indicator({ class: [props.ui?.indicator, item.ui?.indicator] })
                            }, null, 8, ["class"])
                          ]),
                          _: 2
                        }, 1032, ["id", "value", "disabled", "class"])
                      ], 2),
                      item.label || !!slots.label || (item.description || !!slots.description) ? (openBlock(), createBlock("div", {
                        key: 0,
                        "data-slot": "wrapper",
                        class: ui.value.wrapper({ class: [props.ui?.wrapper, item.ui?.wrapper] })
                      }, [
                        item.label || !!slots.label ? (openBlock(), createBlock(resolveDynamicComponent(!__props.variant || __props.variant === "list" ? unref(Label) : "p"), {
                          key: 0,
                          for: item.id,
                          "data-slot": "label",
                          class: ui.value.label({ class: [props.ui?.label, item.ui?.label], disabled: item.disabled || unref(disabled) })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "label", {
                              item,
                              modelValue: __props.modelValue
                            }, () => [
                              createTextVNode(toDisplayString(item.label), 1)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["for", "class"])) : createCommentVNode("", true),
                        item.description || !!slots.description ? (openBlock(), createBlock("p", {
                          key: 1,
                          "data-slot": "description",
                          class: ui.value.description({ class: [props.ui?.description, item.ui?.description], disabled: item.disabled || unref(disabled) })
                        }, [
                          renderSlot(_ctx.$slots, "description", {
                            item,
                            modelValue: __props.modelValue
                          }, () => [
                            createTextVNode(toDisplayString(item.description), 1)
                          ])
                        ], 2)) : createCommentVNode("", true)
                      ], 2)) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }), _parent2, _scopeId);
            });
            _push2(`<!--]--></fieldset>`);
          } else {
            return [
              createVNode("fieldset", mergeProps({
                "data-slot": "fieldset",
                class: ui.value.fieldset({ class: props.ui?.fieldset })
              }, unref(ariaAttrs)), [
                __props.legend || !!slots.legend ? (openBlock(), createBlock("legend", {
                  key: 0,
                  "data-slot": "legend",
                  class: ui.value.legend({ class: props.ui?.legend })
                }, [
                  renderSlot(_ctx.$slots, "legend", {}, () => [
                    createTextVNode(toDisplayString(__props.legend), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                (openBlock(true), createBlock(Fragment, null, renderList(normalizedItems.value, (item) => {
                  return openBlock(), createBlock(resolveDynamicComponent(!__props.variant || __props.variant === "list" ? "div" : unref(Label)), {
                    key: item.value,
                    "data-slot": "item",
                    class: ui.value.item({ class: [props.ui?.item, item.ui?.item, item.class], disabled: item.disabled || unref(disabled) })
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        "data-slot": "container",
                        class: ui.value.container({ class: [props.ui?.container, item.ui?.container] })
                      }, [
                        createVNode(unref(RadioGroupItem), {
                          id: item.id,
                          value: item.value,
                          disabled: item.disabled || unref(disabled),
                          "data-slot": "base",
                          class: ui.value.base({ class: [props.ui?.base, item.ui?.base], disabled: item.disabled || unref(disabled) })
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(RadioGroupIndicator), {
                              "data-slot": "indicator",
                              class: ui.value.indicator({ class: [props.ui?.indicator, item.ui?.indicator] })
                            }, null, 8, ["class"])
                          ]),
                          _: 2
                        }, 1032, ["id", "value", "disabled", "class"])
                      ], 2),
                      item.label || !!slots.label || (item.description || !!slots.description) ? (openBlock(), createBlock("div", {
                        key: 0,
                        "data-slot": "wrapper",
                        class: ui.value.wrapper({ class: [props.ui?.wrapper, item.ui?.wrapper] })
                      }, [
                        item.label || !!slots.label ? (openBlock(), createBlock(resolveDynamicComponent(!__props.variant || __props.variant === "list" ? unref(Label) : "p"), {
                          key: 0,
                          for: item.id,
                          "data-slot": "label",
                          class: ui.value.label({ class: [props.ui?.label, item.ui?.label], disabled: item.disabled || unref(disabled) })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "label", {
                              item,
                              modelValue: __props.modelValue
                            }, () => [
                              createTextVNode(toDisplayString(item.label), 1)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["for", "class"])) : createCommentVNode("", true),
                        item.description || !!slots.description ? (openBlock(), createBlock("p", {
                          key: 1,
                          "data-slot": "description",
                          class: ui.value.description({ class: [props.ui?.description, item.ui?.description], disabled: item.disabled || unref(disabled) })
                        }, [
                          renderSlot(_ctx.$slots, "description", {
                            item,
                            modelValue: __props.modelValue
                          }, () => [
                            createTextVNode(toDisplayString(item.description), 1)
                          ])
                        ], 2)) : createCommentVNode("", true)
                      ], 2)) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1032, ["class"]);
                }), 128))
              ], 16)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/RadioGroup.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "FAQ",
  __ssrInlineRender: true,
  setup(__props) {
    const items = reactive({
      common: [
        {
          label: "Які послуги надає наше агенство нерухомості?",
          content: "Yes! Nuxt UI is completely free and open source under the MIT license. All 100+ components are available to everyone."
        },
        {
          label: "Яка вартість ваших послуг?",
          content: "Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started."
        },
        {
          label: "Як знайти вашу агенцію та зв’язатися з вами?",
          content: "Yes! Nuxt UI is used in production by thousands of applications with extensive tests, regular updates, and active maintenance."
        },
        {
          label: "Чи надаєте ви консультації з питань нерухомості?",
          content: "Yes! Nuxt UI is completely free and open source under the MIT license. Al 100+ components are available to everyone."
        },
        {
          label: "Які документи необхідні для купівлі/продажу нерухомості?",
          content: "Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started."
        }
      ],
      buy: [
        {
          label: "Як вибрати нерухомість для купівлі?",
          content: "Yes! Nuxt UI is completely free and open source under the MIT license. All 100+ components are available to everyone."
        },
        {
          label: "Які кроки потрібно зробити для купівлі нерухомості?",
          content: "Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started."
        }
      ],
      sell: [
        {
          label: "Як оцінити вартість моєї нерухомості?",
          content: "Yes! Nuxt UI is completely free and open source under the MIT license. All 100+ components are available to everyone."
        },
        {
          label: "Які документи потрібні для продажу нерухомості?",
          content: "Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started."
        }
      ],
      rent: [
        {
          label: "Як знайти підходящу нерухомість для оренди?",
          content: "Yes! Nuxt UI is completely free and open source under the MIT license. All 100+ components are available to everyone."
        },
        {
          label: "Які умови оренди ви пропонуєте?",
          content: "Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started."
        }
      ],
      law: [
        {
          label: "Які юридичні аспекти потрібно враховувати при купівлі нерухомості?",
          content: "Yes! Nuxt UI is completely free and open source under the MIT license. All 100+ components are available to everyone."
        },
        {
          label: "Як захистити свої права при продажу нерухомості?",
          content: "Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started."
        }
      ]
    });
    const current_category = ref("common");
    const categories = ref([
      {
        label: "Загальні",
        value: "common"
      },
      {
        label: "Купівля",
        value: "buy"
      },
      {
        label: "Продаж",
        value: "sell"
      },
      {
        label: "Оренда",
        value: "rent"
      },
      {
        label: "Юридичні",
        value: "law"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_URadioGroup = _sfc_main$2;
      const _component_UAccordion = _sfc_main$d;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-x-5" }, _attrs))}><div class="flex basis-[35%] flex-shrink-0 w-full flex-col gap-y-7"><div class="text-3xl pt-6">Питання, які можуть вас зацікавити</div>`);
      _push(ssrRenderComponent(_component_URadioGroup, {
        modelValue: unref(current_category),
        "onUpdate:modelValue": ($event) => isRef(current_category) ? current_category.value = $event : null,
        color: "primary",
        variant: "card",
        "default-value": "common",
        items: unref(categories),
        indicator: "hidden",
        ui: {
          fieldset: "flex flex-row flex-wrap gap-2",
          item: "rounded-full px-4 py-2 text-sm font-semibold cursor-pointer hover:bg-primary/10 transition"
        }
      }, null, _parent));
      _push(`</div>`);
      if (items?.[unref(current_category)]) {
        _push(`<div class="flex flex-col">`);
        _push(ssrRenderComponent(_component_UAccordion, {
          items: items[unref(current_category)] || [],
          "trailing-icon": "i-lucide-plus",
          ui: {
            trigger: "gap-0!",
            header: "py-3"
          }
        }, {
          leading: withCtx(({ index: index2, open }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-3xl w-21 font-xolonium"${_scopeId}>${ssrInterpolate(index2 + 1)}</div>`);
            } else {
              return [
                createVNode("div", { class: "text-3xl w-21 font-xolonium" }, toDisplayString(index2 + 1), 1)
              ];
            }
          }),
          default: withCtx(({ item: { label } }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-lg font-semibold"${_scopeId}>${ssrInterpolate(label)}</div>`);
            } else {
              return [
                createVNode("div", { class: "text-lg font-semibold" }, toDisplayString(label), 1)
              ];
            }
          }),
          content: withCtx(({ item: { content } }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="pl-21 pb-4"${_scopeId}>${ssrInterpolate(content)}</div>`);
            } else {
              return [
                createVNode("div", { class: "pl-21 pb-4" }, toDisplayString(content), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FAQ/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/images/big-logo.svg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const dealsStore = useDealsStore();
    const property_types = dealsStore.property_types;
    ref(0);
    const filterDeals = (filter) => {
      console.log("Filter deals with:", filter);
    };
    const property_type = ref("apartment");
    const loading_best_deals = ref(false);
    const best_deals = ref([]);
    const getBestDeals = async (filters = {}) => {
      console.log("Fetching best deals with filters:", filters);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: {
              deals: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
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
          data: { deals }
        } = await getBestDeals({
          property_type: new_type
        });
        best_deals.value = deals;
      } catch (e) {
        console.log(e);
      } finally {
        loading_best_deals.value = false;
      }
    };
    const request = ([__temp, __restore] = withAsyncContext(() => useAsyncData("best-deals", () => getBestDeals(), {
      immediate: true,
      server: true,
      lazy: false
    })), __temp = await __temp, __restore(), __temp);
    const { data, status, pending, error, refresh, clear } = request;
    if (data.value) {
      best_deals.value = data.value.data.deals;
      console.log("best_deals.value:", best_deals.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UMain = _sfc_main$4$1;
      const _component_DealsFilter = _sfc_main$9;
      const _component_UContainer = _sfc_main$1$1;
      const _component_UPageCard = _sfc_main$8;
      const _component_UButton = _sfc_main$8$1;
      const _component_UTabs = _sfc_main$a;
      const _component_BestDealsCarousel = _sfc_main$b;
      const _component_PromoStatsBanner = _sfc_main$7;
      const _component_Partners = __nuxt_component_8;
      const _component_PromoBento = __nuxt_component_9;
      const _component_FAQ = _sfc_main$1;
      const _component_PromoCallbackBanner = _sfc_main$c;
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-y-14" }, _attrs))} data-v-c1829d1f>`);
      _push(ssrRenderComponent(_component_UMain, { class: "bg-light flex flex-col h-full hero-lines-bg--dark" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps({ class: "flex pt-4 pb-35 flex-col flex-1 gap-y-11 items-center justify-center" }, ssrGetDirectiveProps(_ctx, _directive_auto_animate)))} data-v-c1829d1f${_scopeId}><div class="text-center flex flex-col gap-y-4" data-v-c1829d1f${_scopeId}><div class="text-primary-700/70" data-v-c1829d1f${_scopeId}>Виняткова нерухомість</div><div data-v-c1829d1f${_scopeId}><img${ssrRenderAttr("src", _imports_0)} class="max-w-sm" data-v-c1829d1f${_scopeId}></div></div>`);
            _push2(ssrRenderComponent(_component_DealsFilter, { onSubmit: filterDeals }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              withDirectives((openBlock(), createBlock("div", { class: "flex pt-4 pb-35 flex-col flex-1 gap-y-11 items-center justify-center" }, [
                createVNode("div", { class: "text-center flex flex-col gap-y-4" }, [
                  createVNode("div", { class: "text-primary-700/70" }, "Виняткова нерухомість"),
                  createVNode("div", null, [
                    createVNode("img", {
                      src: _imports_0,
                      class: "max-w-sm"
                    })
                  ])
                ]),
                createVNode(_component_DealsFilter, { onSubmit: filterDeals })
              ])), [
                [_directive_auto_animate]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section data-v-c1829d1f>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex gap-x-5" data-v-c1829d1f${_scopeId}><!--[-->`);
            ssrRenderList(unref(property_types), (card) => {
              _push2(ssrRenderComponent(_component_UPageCard, {
                spotlight: "",
                "spotlight-color": "primary",
                class: "flex-1 h-70 overflow-hidden relative",
                key: card.value,
                ui: {
                  container: "xs:p-0 sm:p-0 md:p-0 lg:p-0 xl:p-0 2xl:p-0"
                },
                to: "/"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", `/images/${card.value}.png`)} alt="" height="42px" width="auto" class="absolute top-0 left-0 h-full w-full object-cover z-0" data-v-c1829d1f${_scopeId2}><div class="z-1 flex text-white flex-col justify-end bg-gradient-to-t from-black/70 to-black/0 w-full p-4" data-v-c1829d1f${_scopeId2}><div class="flex items-center justify-between" data-v-c1829d1f${_scopeId2}><div class="gap-y-2 flex flex-col" data-v-c1829d1f${_scopeId2}><div class="font-semibold" data-v-c1829d1f${_scopeId2}>${ssrInterpolate(card.label)}</div><div class="text-xs" data-v-c1829d1f${_scopeId2}>Від 120 оголошень</div></div>`);
                    _push3(ssrRenderComponent(_component_UButton, {
                      icon: "i-lucide-arrow-up-right",
                      size: "xl",
                      color: "white",
                      variant: "solid"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: `/images/${card.value}.png`,
                        alt: "",
                        height: "42px",
                        width: "auto",
                        class: "absolute top-0 left-0 h-full w-full object-cover z-0"
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "z-1 flex text-white flex-col justify-end bg-gradient-to-t from-black/70 to-black/0 w-full p-4" }, [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("div", { class: "gap-y-2 flex flex-col" }, [
                            createVNode("div", { class: "font-semibold" }, toDisplayString(card.label), 1),
                            createVNode("div", { class: "text-xs" }, "Від 120 оголошень")
                          ]),
                          createVNode(_component_UButton, {
                            icon: "i-lucide-arrow-up-right",
                            size: "xl",
                            color: "white",
                            variant: "solid"
                          })
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex gap-x-5" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(property_types), (card) => {
                  return openBlock(), createBlock(_component_UPageCard, {
                    spotlight: "",
                    "spotlight-color": "primary",
                    class: "flex-1 h-70 overflow-hidden relative",
                    key: card.value,
                    ui: {
                      container: "xs:p-0 sm:p-0 md:p-0 lg:p-0 xl:p-0 2xl:p-0"
                    },
                    to: "/"
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: `/images/${card.value}.png`,
                        alt: "",
                        height: "42px",
                        width: "auto",
                        class: "absolute top-0 left-0 h-full w-full object-cover z-0"
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "z-1 flex text-white flex-col justify-end bg-gradient-to-t from-black/70 to-black/0 w-full p-4" }, [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("div", { class: "gap-y-2 flex flex-col" }, [
                            createVNode("div", { class: "font-semibold" }, toDisplayString(card.label), 1),
                            createVNode("div", { class: "text-xs" }, "Від 120 оголошень")
                          ]),
                          createVNode(_component_UButton, {
                            icon: "i-lucide-arrow-up-right",
                            size: "xl",
                            color: "white",
                            variant: "solid"
                          })
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="overflow-hidden pt-5 flex flex-col gap-y-5 relative top-[35px]" data-v-c1829d1f><div class="flex flex-col items-center justify-center" data-v-c1829d1f><div class="mb-4 font-regular text-3xl" data-v-c1829d1f>Найкращі пропозиції</div>`);
      _push(ssrRenderComponent(_component_UTabs, {
        "model-value": property_type.value,
        "onUpdate:modelValue": changeCaroselPropertyType,
        items: unref(property_types),
        content: false,
        "default-value": "sell",
        ui: {
          indicator: "bg-white cursor-pointer shadow-sm",
          trigger: "px-4 cursor-pointer",
          label: "text-primary-700",
          root: "min-h-[44px]",
          list: "flex-1"
        }
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_BestDealsCarousel, {
        loading: loading_best_deals.value,
        deals: best_deals.value
      }, null, _parent));
      _push(`</section><section data-v-c1829d1f>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PromoStatsBanner, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PromoStatsBanner)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section data-v-c1829d1f>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Partners, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Partners)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section data-v-c1829d1f>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PromoBento, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PromoBento)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section data-v-c1829d1f>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FAQ, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FAQ)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section data-v-c1829d1f>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PromoCallbackBanner, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PromoCallbackBanner)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c1829d1f"]]);

export { index as default };
//# sourceMappingURL=index-CfcElxso.mjs.map
