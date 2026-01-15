import { _ as _sfc_main$4, b as _sfc_main$3, a as _sfc_main$7 } from './index-DzWk3S9p.mjs';
import { _ as _sfc_main$1$1 } from './Input-DlCeRXhR.mjs';
import { computed, useTemplateRef, ref, withCtx, createTextVNode, createVNode, unref, createBlock, openBlock, Fragment, renderList, toDisplayString, useSlots, mergeProps, renderSlot, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { n as useRoute, a as __nuxt_component_0$2, c as _sfc_main$e, f as _sfc_main$8, k as useLocale, b as useAppConfig, t as tv, d as _sfc_main$9, p as pickLinkProps, l as _sfc_main$a, e as _sfc_main$b, i as get, m as _sfc_main$c } from './server.mjs';
import { a as _sfc_main$1$2, _ as _sfc_main$6 } from './index-Codm48qm.mjs';
import { _ as _sfc_main$5 } from './Badge-BppIIJgc.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import '@vueuse/core';
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
import 'embla-carousel-vue';

const theme$1 = {
  "slots": {
    "root": "relative min-w-0",
    "list": "flex items-center gap-1.5",
    "item": "flex min-w-0",
    "link": "group relative flex items-center gap-1.5 text-sm min-w-0 focus-visible:outline-primary",
    "linkLeadingIcon": "shrink-0 size-5",
    "linkLeadingAvatar": "shrink-0",
    "linkLeadingAvatarSize": "2xs",
    "linkLabel": "truncate",
    "separator": "flex",
    "separatorIcon": "shrink-0 size-5 text-muted"
  },
  "variants": {
    "active": {
      "true": {
        "link": "text-primary font-semibold"
      },
      "false": {
        "link": "text-muted font-medium"
      }
    },
    "disabled": {
      "true": {
        "link": "cursor-not-allowed opacity-75"
      }
    },
    "to": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "disabled": false,
      "active": false,
      "to": true,
      "class": {
        "link": [
          "hover:text-default",
          "transition-colors"
        ]
      }
    }
  ]
};
const _sfc_main$2 = {
  __name: "UBreadcrumb",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "nav" },
    items: { type: Array, required: false },
    separatorIcon: { type: null, required: false },
    labelKey: { type: null, required: false, default: "label" },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const { dir } = useLocale();
    const appConfig = useAppConfig();
    const separatorIcon = computed(() => props.separatorIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronLeft : appConfig.ui.icons.chevronRight));
    const ui = computed(() => tv({ extend: tv(theme$1), ...appConfig.ui?.breadcrumb || {} })());
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "aria-label": "breadcrumb",
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ol data-slot="list" class="${ssrRenderClass(ui.value.list({ class: props.ui?.list }))}"${_scopeId}><!--[-->`);
            ssrRenderList(__props.items, (item, index) => {
              _push2(`<!--[--><li data-slot="item" class="${ssrRenderClass(ui.value.item({ class: [props.ui?.item, item.ui?.item] }))}"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$9, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
                default: withCtx(({ active, ...slotProps }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$a, mergeProps({ ref_for: true }, slotProps, {
                      as: "span",
                      "aria-current": (item.active ?? active) && index === __props.items.length - 1 ? "page" : void 0,
                      "data-slot": "link",
                      class: ui.value.link({ class: [props.ui?.link, item.ui?.link, item.class], active: item.active ?? index === __props.items.length - 1, disabled: !!item.disabled, to: !!item.to })
                    }), {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, item.slot || "item", {
                            item,
                            active: item.active ?? index === __props.items.length - 1,
                            index,
                            ui: ui.value
                          }, () => {
                            ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                              item,
                              active: item.active ?? index === __props.items.length - 1,
                              index,
                              ui: ui.value
                            }, () => {
                              if (item.icon) {
                                _push4(ssrRenderComponent(_sfc_main$e, {
                                  name: item.icon,
                                  "data-slot": "linkLeadingIcon",
                                  class: ui.value.linkLeadingIcon({ class: [props.ui?.linkLeadingIcon, item.ui?.linkLeadingIcon], active: item.active ?? index === __props.items.length - 1 })
                                }, null, _parent4, _scopeId3));
                              } else if (item.avatar) {
                                _push4(ssrRenderComponent(_sfc_main$b, mergeProps({
                                  size: props.ui?.linkLeadingAvatarSize || ui.value.linkLeadingAvatarSize()
                                }, { ref_for: true }, item.avatar, {
                                  "data-slot": "linkLeadingAvatar",
                                  class: ui.value.linkLeadingAvatar({ class: [props.ui?.linkLeadingAvatar, item.ui?.linkLeadingAvatar], active: item.active ?? index === __props.items.length - 1 })
                                }), null, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                            if (unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"]) {
                              _push4(`<span data-slot="linkLabel" class="${ssrRenderClass(ui.value.linkLabel({ class: [props.ui?.linkLabel, item.ui?.linkLabel] }))}"${_scopeId3}>`);
                              ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                                item,
                                active: item.active ?? index === __props.items.length - 1,
                                index
                              }, () => {
                                _push4(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                              }, _push4, _parent4, _scopeId3);
                              _push4(`</span>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                              item,
                              active: item.active ?? index === __props.items.length - 1,
                              index
                            }, null, _push4, _parent4, _scopeId3);
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, item.slot || "item", {
                              item,
                              active: item.active ?? index === __props.items.length - 1,
                              index,
                              ui: ui.value
                            }, () => [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                                item,
                                active: item.active ?? index === __props.items.length - 1,
                                index,
                                ui: ui.value
                              }, () => [
                                item.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                  key: 0,
                                  name: item.icon,
                                  "data-slot": "linkLeadingIcon",
                                  class: ui.value.linkLeadingIcon({ class: [props.ui?.linkLeadingIcon, item.ui?.linkLeadingIcon], active: item.active ?? index === __props.items.length - 1 })
                                }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$b, mergeProps({
                                  key: 1,
                                  size: props.ui?.linkLeadingAvatarSize || ui.value.linkLeadingAvatarSize()
                                }, { ref_for: true }, item.avatar, {
                                  "data-slot": "linkLeadingAvatar",
                                  class: ui.value.linkLeadingAvatar({ class: [props.ui?.linkLeadingAvatar, item.ui?.linkLeadingAvatar], active: item.active ?? index === __props.items.length - 1 })
                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                              ]),
                              unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] ? (openBlock(), createBlock("span", {
                                key: 0,
                                "data-slot": "linkLabel",
                                class: ui.value.linkLabel({ class: [props.ui?.linkLabel, item.ui?.linkLabel] })
                              }, [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                                  item,
                                  active: item.active ?? index === __props.items.length - 1,
                                  index
                                }, () => [
                                  createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                ])
                              ], 2)) : createCommentVNode("", true),
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                                item,
                                active: item.active ?? index === __props.items.length - 1,
                                index
                              })
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$a, mergeProps({ ref_for: true }, slotProps, {
                        as: "span",
                        "aria-current": (item.active ?? active) && index === __props.items.length - 1 ? "page" : void 0,
                        "data-slot": "link",
                        class: ui.value.link({ class: [props.ui?.link, item.ui?.link, item.class], active: item.active ?? index === __props.items.length - 1, disabled: !!item.disabled, to: !!item.to })
                      }), {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, item.slot || "item", {
                            item,
                            active: item.active ?? index === __props.items.length - 1,
                            index,
                            ui: ui.value
                          }, () => [
                            renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                              item,
                              active: item.active ?? index === __props.items.length - 1,
                              index,
                              ui: ui.value
                            }, () => [
                              item.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                key: 0,
                                name: item.icon,
                                "data-slot": "linkLeadingIcon",
                                class: ui.value.linkLeadingIcon({ class: [props.ui?.linkLeadingIcon, item.ui?.linkLeadingIcon], active: item.active ?? index === __props.items.length - 1 })
                              }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$b, mergeProps({
                                key: 1,
                                size: props.ui?.linkLeadingAvatarSize || ui.value.linkLeadingAvatarSize()
                              }, { ref_for: true }, item.avatar, {
                                "data-slot": "linkLeadingAvatar",
                                class: ui.value.linkLeadingAvatar({ class: [props.ui?.linkLeadingAvatar, item.ui?.linkLeadingAvatar], active: item.active ?? index === __props.items.length - 1 })
                              }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                            ]),
                            unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] ? (openBlock(), createBlock("span", {
                              key: 0,
                              "data-slot": "linkLabel",
                              class: ui.value.linkLabel({ class: [props.ui?.linkLabel, item.ui?.linkLabel] })
                            }, [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                                item,
                                active: item.active ?? index === __props.items.length - 1,
                                index
                              }, () => [
                                createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                              item,
                              active: item.active ?? index === __props.items.length - 1,
                              index
                            })
                          ])
                        ]),
                        _: 2
                      }, 1040, ["aria-current", "class"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
              if (index < __props.items.length - 1) {
                _push2(`<li role="presentation" aria-hidden="true" data-slot="separator" class="${ssrRenderClass(ui.value.separator({ class: [props.ui?.separator, item.ui?.separator] }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "separator", { ui: ui.value }, () => {
                  _push2(ssrRenderComponent(_sfc_main$e, {
                    name: separatorIcon.value,
                    "data-slot": "separatorIcon",
                    class: ui.value.separatorIcon({ class: [props.ui?.separatorIcon, item.ui?.separatorIcon] })
                  }, null, _parent2, _scopeId));
                }, _push2, _parent2, _scopeId);
                _push2(`</li>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></ol>`);
          } else {
            return [
              createVNode("ol", {
                "data-slot": "list",
                class: ui.value.list({ class: props.ui?.list })
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item, index) => {
                  return openBlock(), createBlock(Fragment, { key: index }, [
                    createVNode("li", {
                      "data-slot": "item",
                      class: ui.value.item({ class: [props.ui?.item, item.ui?.item] })
                    }, [
                      createVNode(_sfc_main$9, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
                        default: withCtx(({ active, ...slotProps }) => [
                          createVNode(_sfc_main$a, mergeProps({ ref_for: true }, slotProps, {
                            as: "span",
                            "aria-current": (item.active ?? active) && index === __props.items.length - 1 ? "page" : void 0,
                            "data-slot": "link",
                            class: ui.value.link({ class: [props.ui?.link, item.ui?.link, item.class], active: item.active ?? index === __props.items.length - 1, disabled: !!item.disabled, to: !!item.to })
                          }), {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, item.slot || "item", {
                                item,
                                active: item.active ?? index === __props.items.length - 1,
                                index,
                                ui: ui.value
                              }, () => [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                                  item,
                                  active: item.active ?? index === __props.items.length - 1,
                                  index,
                                  ui: ui.value
                                }, () => [
                                  item.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                    key: 0,
                                    name: item.icon,
                                    "data-slot": "linkLeadingIcon",
                                    class: ui.value.linkLeadingIcon({ class: [props.ui?.linkLeadingIcon, item.ui?.linkLeadingIcon], active: item.active ?? index === __props.items.length - 1 })
                                  }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$b, mergeProps({
                                    key: 1,
                                    size: props.ui?.linkLeadingAvatarSize || ui.value.linkLeadingAvatarSize()
                                  }, { ref_for: true }, item.avatar, {
                                    "data-slot": "linkLeadingAvatar",
                                    class: ui.value.linkLeadingAvatar({ class: [props.ui?.linkLeadingAvatar, item.ui?.linkLeadingAvatar], active: item.active ?? index === __props.items.length - 1 })
                                  }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                ]),
                                unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  "data-slot": "linkLabel",
                                  class: ui.value.linkLabel({ class: [props.ui?.linkLabel, item.ui?.linkLabel] })
                                }, [
                                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                                    item,
                                    active: item.active ?? index === __props.items.length - 1,
                                    index
                                  }, () => [
                                    createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                  ])
                                ], 2)) : createCommentVNode("", true),
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                                  item,
                                  active: item.active ?? index === __props.items.length - 1,
                                  index
                                })
                              ])
                            ]),
                            _: 2
                          }, 1040, ["aria-current", "class"])
                        ]),
                        _: 2
                      }, 1040)
                    ], 2),
                    index < __props.items.length - 1 ? (openBlock(), createBlock("li", {
                      key: 0,
                      role: "presentation",
                      "aria-hidden": "true",
                      "data-slot": "separator",
                      class: ui.value.separator({ class: [props.ui?.separator, item.ui?.separator] })
                    }, [
                      renderSlot(_ctx.$slots, "separator", { ui: ui.value }, () => [
                        createVNode(_sfc_main$e, {
                          name: separatorIcon.value,
                          "data-slot": "separatorIcon",
                          class: ui.value.separatorIcon({ class: [props.ui?.separatorIcon, item.ui?.separatorIcon] })
                        }, null, 8, ["name", "class"])
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ], 64);
                }), 128))
              ], 2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Breadcrumb.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "relative group/user",
    "wrapper": "",
    "name": "font-medium",
    "description": "text-muted",
    "avatar": "shrink-0"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "root": "flex items-center"
      },
      "vertical": {
        "root": "flex flex-col"
      }
    },
    "to": {
      "true": {
        "name": [
          "text-default peer-hover:text-highlighted",
          "transition-colors"
        ],
        "description": [
          "peer-hover:text-toned",
          "transition-colors"
        ],
        "avatar": "transform transition-transform duration-200 group-hover/user:scale-115"
      },
      "false": {
        "name": "text-highlighted",
        "description": ""
      }
    },
    "size": {
      "3xs": {
        "root": "gap-1",
        "wrapper": "flex items-center gap-1",
        "name": "text-xs",
        "description": "text-xs"
      },
      "2xs": {
        "root": "gap-1.5",
        "wrapper": "flex items-center gap-1.5",
        "name": "text-xs",
        "description": "text-xs"
      },
      "xs": {
        "root": "gap-1.5",
        "wrapper": "flex items-center gap-1.5",
        "name": "text-xs",
        "description": "text-xs"
      },
      "sm": {
        "root": "gap-2",
        "name": "text-xs",
        "description": "text-xs"
      },
      "md": {
        "root": "gap-2",
        "name": "text-sm",
        "description": "text-xs"
      },
      "lg": {
        "root": "gap-2.5",
        "name": "text-sm",
        "description": "text-sm"
      },
      "xl": {
        "root": "gap-2.5",
        "name": "text-base",
        "description": "text-sm"
      },
      "2xl": {
        "root": "gap-3",
        "name": "text-base",
        "description": "text-base"
      },
      "3xl": {
        "root": "gap-3",
        "name": "text-lg",
        "description": "text-base"
      }
    }
  },
  "defaultVariants": {
    "size": "md"
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UUser",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    name: { type: String, required: false },
    description: { type: String, required: false },
    avatar: { type: Object, required: false },
    chip: { type: [Boolean, Object], required: false },
    size: { type: null, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    to: { type: null, required: false },
    target: { type: [String, Object, null], required: false },
    onClick: { type: Function, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.user || {} })({
      size: props.size,
      orientation: props.orientation,
      to: !!props.to || !!props.onClick
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-orientation": __props.orientation,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] }),
        onClick: __props.onClick
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "avatar", { ui: ui.value }, () => {
              if (__props.chip && __props.avatar) {
                _push2(ssrRenderComponent(_sfc_main$c, mergeProps({ inset: "" }, typeof __props.chip === "object" ? __props.chip : {}, { size: __props.size }), {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_sfc_main$b, mergeProps({ alt: __props.name }, __props.avatar, {
                        size: __props.size,
                        "data-slot": "avatar",
                        class: ui.value.avatar({ class: props.ui?.avatar })
                      }), null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_sfc_main$b, mergeProps({ alt: __props.name }, __props.avatar, {
                          size: __props.size,
                          "data-slot": "avatar",
                          class: ui.value.avatar({ class: props.ui?.avatar })
                        }), null, 16, ["alt", "size", "class"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else if (__props.avatar) {
                _push2(ssrRenderComponent(_sfc_main$b, mergeProps({ alt: __props.name }, __props.avatar, {
                  size: __props.size,
                  "data-slot": "avatar",
                  class: ui.value.avatar({ class: props.ui?.avatar })
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: props.ui?.wrapper }))}"${_scopeId}>`);
            if (__props.to) {
              _push2(ssrRenderComponent(_sfc_main$9, mergeProps({ "aria-label": __props.name }, { to: __props.to, target: __props.target, ..._ctx.$attrs }, {
                class: "focus:outline-none peer",
                tabindex: "-1",
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
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              if (__props.name || !!slots.name) {
                _push2(`<p data-slot="name" class="${ssrRenderClass(ui.value.name({ class: props.ui?.name }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "name", {}, () => {
                  _push2(`${ssrInterpolate(__props.name)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</p>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.description || !!slots.description) {
                _push2(`<p data-slot="description" class="${ssrRenderClass(ui.value.description({ class: props.ui?.description }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                  _push2(`${ssrInterpolate(__props.description)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</p>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              renderSlot(_ctx.$slots, "avatar", { ui: ui.value }, () => [
                __props.chip && __props.avatar ? (openBlock(), createBlock(_sfc_main$c, mergeProps({
                  key: 0,
                  inset: ""
                }, typeof __props.chip === "object" ? __props.chip : {}, { size: __props.size }), {
                  default: withCtx(() => [
                    createVNode(_sfc_main$b, mergeProps({ alt: __props.name }, __props.avatar, {
                      size: __props.size,
                      "data-slot": "avatar",
                      class: ui.value.avatar({ class: props.ui?.avatar })
                    }), null, 16, ["alt", "size", "class"])
                  ]),
                  _: 1
                }, 16, ["size"])) : __props.avatar ? (openBlock(), createBlock(_sfc_main$b, mergeProps({
                  key: 1,
                  alt: __props.name
                }, __props.avatar, {
                  size: __props.size,
                  "data-slot": "avatar",
                  class: ui.value.avatar({ class: props.ui?.avatar })
                }), null, 16, ["alt", "size", "class"])) : createCommentVNode("", true)
              ]),
              createVNode("div", {
                "data-slot": "wrapper",
                class: ui.value.wrapper({ class: props.ui?.wrapper })
              }, [
                __props.to ? (openBlock(), createBlock(_sfc_main$9, mergeProps({
                  key: 0,
                  "aria-label": __props.name
                }, { to: __props.to, target: __props.target, ..._ctx.$attrs }, {
                  class: "focus:outline-none peer",
                  tabindex: "-1",
                  raw: ""
                }), {
                  default: withCtx(() => [
                    createVNode("span", {
                      class: "absolute inset-0",
                      "aria-hidden": "true"
                    })
                  ]),
                  _: 1
                }, 16, ["aria-label"])) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "default", {}, () => [
                  __props.name || !!slots.name ? (openBlock(), createBlock("p", {
                    key: 0,
                    "data-slot": "name",
                    class: ui.value.name({ class: props.ui?.name })
                  }, [
                    renderSlot(_ctx.$slots, "name", {}, () => [
                      createTextVNode(toDisplayString(__props.name), 1)
                    ])
                  ], 2)) : createCommentVNode("", true),
                  __props.description || !!slots.description ? (openBlock(), createBlock("p", {
                    key: 1,
                    "data-slot": "description",
                    class: ui.value.description({ class: props.ui?.description })
                  }, [
                    renderSlot(_ctx.$slots, "description", {}, () => [
                      createTextVNode(toDisplayString(__props.description), 1)
                    ])
                  ], 2)) : createCommentVNode("", true)
                ])
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/User.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/images/deal-square.svg");
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const deal_id = computed(() => route.params.id);
    console.log("Deal ID:", deal_id);
    const items = [
      "https://picsum.photos/640/640?random=1",
      "https://picsum.photos/640/640?random=2",
      "https://picsum.photos/640/640?random=3",
      "https://picsum.photos/640/640?random=4",
      "https://picsum.photos/640/640?random=5",
      "https://picsum.photos/640/640?random=6"
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UMain = _sfc_main$4;
      const _component_UContainer = _sfc_main$1$1;
      const _component_UBreadcrumb = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_UCard = _sfc_main$3;
      const _component_UCarousel = _sfc_main$1$2;
      const _component_UBadge = _sfc_main$5;
      const _component_UIcon = _sfc_main$e;
      const _component_UButton = _sfc_main$8;
      const _component_UUser = _sfc_main$1;
      const _component_BestDealsCarousel = _sfc_main$6;
      const _component_PromoCallbackBanner = _sfc_main$7;
      _push(ssrRenderComponent(_component_UMain, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pt-14 flex flex-col gap-y-11"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UContainer, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col gap-y-9"${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UBreadcrumb, { items: [
                    {
                      slot: "logo",
                      to: "/"
                    },
                    {
                      label: "Купити",
                      // icon: 'i-lucide-book-open',
                      to: "/"
                    },
                    {
                      label: "ЖК Бамбула",
                      to: "/"
                    },
                    {
                      label: "вул. Верхогляда (Драгомирова), 63, б.3"
                    }
                  ] }, {
                    logo: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<object data="/images/logo.svg" type="image/svg+xml" class="w-5 h-5"${_scopeId3}></object>`);
                      } else {
                        return [
                          createVNode("object", {
                            data: "/images/logo.svg",
                            type: "image/svg+xml",
                            class: "w-5 h-5"
                          })
                        ];
                      }
                    }),
                    separator: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: "/",
                          class: "text-gray-300 mx-2 hover:opacity-70"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` / `);
                            } else {
                              return [
                                createTextVNode(" / ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtLink, {
                            to: "/",
                            class: "text-gray-300 mx-2 hover:opacity-70"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" / ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}><div class="grid grid-cols-12 gap-5"${_scopeId2}><div class="col-span-8 flex flex-col gap-y-7"${_scopeId2}><div class="flex flex-col gap-y-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UCard, { ui: {
                    body: "p-1!"
                  } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex-1 rounded-lg overflow-hidden w-full"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UCarousel, {
                          ref_key: "carousel",
                          ref: carousel,
                          arrows: "",
                          items,
                          prev: { onClick: onClickPrev },
                          next: { onClick: onClickNext },
                          class: "flex-1",
                          onSelect,
                          ui: {
                            arrows: "absolute inset-y-0 w-full flex items-center justify-between pointer-events-none ",
                            prev: "p-3 !start-1 sm:!start-2 top-1/2 -translate-y-1/2 pointer-events-auto shadow-lg",
                            next: "p-3 !end-1 sm:!end-2 top-1/2 -translate-y-1/2 pointer-events-auto shadow-lg"
                          }
                        }, {
                          default: withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="relative"${_scopeId4}><img${ssrRenderAttr("src", item)} class="rounded-lg z-1 w-full h-[50vh] object-contain"${_scopeId4}><img${ssrRenderAttr("src", item)} class="absolute h-full -z-1 w-full object-cover top-0 left-0 blur-xl"${_scopeId4}></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "relative" }, [
                                  createVNode("img", {
                                    src: item,
                                    class: "rounded-lg z-1 w-full h-[50vh] object-contain"
                                  }, null, 8, ["src"]),
                                  createVNode("img", {
                                    src: item,
                                    class: "absolute h-full -z-1 w-full object-cover top-0 left-0 blur-xl"
                                  }, null, 8, ["src"])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex-1 rounded-lg overflow-hidden w-full" }, [
                            createVNode(_component_UCarousel, {
                              ref_key: "carousel",
                              ref: carousel,
                              arrows: "",
                              items,
                              prev: { onClick: onClickPrev },
                              next: { onClick: onClickNext },
                              class: "flex-1",
                              onSelect,
                              ui: {
                                arrows: "absolute inset-y-0 w-full flex items-center justify-between pointer-events-none ",
                                prev: "p-3 !start-1 sm:!start-2 top-1/2 -translate-y-1/2 pointer-events-auto shadow-lg",
                                next: "p-3 !end-1 sm:!end-2 top-1/2 -translate-y-1/2 pointer-events-auto shadow-lg"
                              }
                            }, {
                              default: withCtx(({ item }) => [
                                createVNode("div", { class: "relative" }, [
                                  createVNode("img", {
                                    src: item,
                                    class: "rounded-lg z-1 w-full h-[50vh] object-contain"
                                  }, null, 8, ["src"]),
                                  createVNode("img", {
                                    src: item,
                                    class: "absolute h-full -z-1 w-full object-cover top-0 left-0 blur-xl"
                                  }, null, 8, ["src"])
                                ])
                              ]),
                              _: 1
                            }, 8, ["prev", "next"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-x-1"${_scopeId2}><!--[-->`);
                  ssrRenderList(items, (item, index) => {
                    _push3(`<div class="${ssrRenderClass([{ "opacity-100": unref(activeIndex) === index }, "opacity-40 cursor-pointer hover:opacity-100 transition-opacity"])}"${_scopeId2}><img${ssrRenderAttr("src", item)} class="rounded-md h-14 w-14 object-cover"${_scopeId2}></div>`);
                  });
                  _push3(`<!--]--></div></div>`);
                  _push3(ssrRenderComponent(_component_UCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex flex-col gap-y-7"${_scopeId3}><div class="font-semibold text-xl text-primary-700"${_scopeId3}> Опис квартири </div>`);
                        _push4(ssrRenderComponent(_component_UCard, {
                          variant: "solid",
                          ui: { body: "bg-gray-100 p-1! text-primary" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="grid gap-1 grid-cols-3 grid-rows-2 min-h-70"${_scopeId4}><div class="row-span-2 col-span-1"${_scopeId4}><div class="bg-white rounded-lg h-full w-full flex items-center justify-center"${_scopeId4}><div class="flex flex-col items-center justify-center gap-y-5"${_scopeId4}><img${ssrRenderAttr("src", _imports_0)} alt="Floor Plan" class="h-11 w-11 object-contain"${_scopeId4}><div class="flex flex-col items-center justify-center gap-y-2"${_scopeId4}><div class="text-gray-400 text-sm"${_scopeId4}>Загальна площа</div><div class="font-semibold text-xl"${_scopeId4}>23.01 м2</div></div></div></div></div><!--[-->`);
                              ssrRenderList([
                                {
                                  label: "Загальна площа",
                                  value: "23.01 м2",
                                  icon: "/images/deal-live-square.svg"
                                },
                                {
                                  label: "Площа санвузла",
                                  value: "5.00 м2",
                                  icon: "/images/bath-square.svg"
                                },
                                {
                                  label: "Висота стелі",
                                  value: "2.75 м",
                                  icon: "/images/ceil-height.svg"
                                },
                                {
                                  label: "Санвузлів",
                                  value: "1",
                                  icon: "/images/bath-square.svg"
                                }
                              ], (stat) => {
                                _push5(`<div class="col-span-1"${_scopeId4}><div class="bg-white rounded-lg h-full w-full flex items-center justify-center"${_scopeId4}><div class="flex items-center gap-x-7 w-full p-4 pl-9 pr-4"${_scopeId4}><div class="flex flex-center justify-center h-8 w-8"${_scopeId4}><img class="h-full w-full cover"${ssrRenderAttr("src", stat.icon)}${_scopeId4}></div><div class="flex flex-col gap-y-1"${_scopeId4}><div class="text-gray-400 text-sm"${_scopeId4}>${ssrInterpolate(stat.label)}</div><div class="font-semibold text-xl"${_scopeId4}>${ssrInterpolate(stat.value)}</div></div></div></div></div>`);
                              });
                              _push5(`<!--]--></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "grid gap-1 grid-cols-3 grid-rows-2 min-h-70" }, [
                                  createVNode("div", { class: "row-span-2 col-span-1" }, [
                                    createVNode("div", { class: "bg-white rounded-lg h-full w-full flex items-center justify-center" }, [
                                      createVNode("div", { class: "flex flex-col items-center justify-center gap-y-5" }, [
                                        createVNode("img", {
                                          src: _imports_0,
                                          alt: "Floor Plan",
                                          class: "h-11 w-11 object-contain"
                                        }),
                                        createVNode("div", { class: "flex flex-col items-center justify-center gap-y-2" }, [
                                          createVNode("div", { class: "text-gray-400 text-sm" }, "Загальна площа"),
                                          createVNode("div", { class: "font-semibold text-xl" }, "23.01 м2")
                                        ])
                                      ])
                                    ])
                                  ]),
                                  (openBlock(), createBlock(Fragment, null, renderList([
                                    {
                                      label: "Загальна площа",
                                      value: "23.01 м2",
                                      icon: "/images/deal-live-square.svg"
                                    },
                                    {
                                      label: "Площа санвузла",
                                      value: "5.00 м2",
                                      icon: "/images/bath-square.svg"
                                    },
                                    {
                                      label: "Висота стелі",
                                      value: "2.75 м",
                                      icon: "/images/ceil-height.svg"
                                    },
                                    {
                                      label: "Санвузлів",
                                      value: "1",
                                      icon: "/images/bath-square.svg"
                                    }
                                  ], (stat) => {
                                    return createVNode("div", {
                                      class: "col-span-1",
                                      key: stat.label
                                    }, [
                                      createVNode("div", { class: "bg-white rounded-lg h-full w-full flex items-center justify-center" }, [
                                        createVNode("div", { class: "flex items-center gap-x-7 w-full p-4 pl-9 pr-4" }, [
                                          createVNode("div", { class: "flex flex-center justify-center h-8 w-8" }, [
                                            createVNode("img", {
                                              class: "h-full w-full cover",
                                              src: stat.icon
                                            }, null, 8, ["src"])
                                          ]),
                                          createVNode("div", { class: "flex flex-col gap-y-1" }, [
                                            createVNode("div", { class: "text-gray-400 text-sm" }, toDisplayString(stat.label), 1),
                                            createVNode("div", { class: "font-semibold text-xl" }, toDisplayString(stat.value), 1)
                                          ])
                                        ])
                                      ])
                                    ]);
                                  }), 64))
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="flex flex-col gap-y-5"${_scopeId3}><div class="text-lg font-semibold"${_scopeId3}> Продаж 2-кімнатної квартири ЖК Новопечерські Липки, вул. Верхогляда (Драгомирова) </div><div${_scopeId3}> Житловий комплекс Новопечерські Липки є унікальним за своєю внутрішньою інфраструктурою, яка розроблена за планом &quot;місто в місті&quot;. Внутрішня інфраструктура Новопечерських Липок є для багатьох мешканців найбільш привабливим атрибутом даного житлового комплексу. На території цього міні-міста ви знайдете свою власну міжнародну та середню школу, свій ландшафтний парк, кілька ресторанів, повноцінний спортзал з басейном і навіть тенісні корти. </div><div${_scopeId3}><div class="text-lg mb-2 font-semibold"${_scopeId3}> Функціональне планування </div><div${_scopeId3}><ul${_scopeId3}><!--[-->`);
                        ssrRenderList([
                          "кухня-вітальня",
                          "окрема спальня",
                          "санвузол",
                          "лоджія",
                          "хол із гардеробною"
                        ], (f) => {
                          _push4(`<li${_scopeId3}>${ssrInterpolate(f)}</li>`);
                        });
                        _push4(`<!--]--></ul></div></div><div${_scopeId3}><div class="text-lg mb-2 font-semibold"${_scopeId3}> Зручна інфраструктура </div><div class="flex gap-x-1"${_scopeId3}><!--[-->`);
                        ssrRenderList([
                          "Либідська",
                          "ТЦ Майдан",
                          "Центральный автовокзал"
                        ], (tag) => {
                          _push4(ssrRenderComponent(_component_UBadge, {
                            variant: "soft",
                            key: tag,
                            size: "lg",
                            ui: {
                              base: "font-semibold"
                            }
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(tag)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(tag), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]--></div></div><div class="border-b border-gray-200 h-1"${_scopeId3}></div><div class="flex items-center gap-x-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UBadge, { variant: "soft" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 26818 `);
                            } else {
                              return [
                                createTextVNode(" 26818 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="text-sm text-gray-400"${_scopeId3}>Оголошення від 23 липня</div></div></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex flex-col gap-y-7" }, [
                            createVNode("div", { class: "font-semibold text-xl text-primary-700" }, " Опис квартири "),
                            createVNode(_component_UCard, {
                              variant: "solid",
                              ui: { body: "bg-gray-100 p-1! text-primary" }
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "grid gap-1 grid-cols-3 grid-rows-2 min-h-70" }, [
                                  createVNode("div", { class: "row-span-2 col-span-1" }, [
                                    createVNode("div", { class: "bg-white rounded-lg h-full w-full flex items-center justify-center" }, [
                                      createVNode("div", { class: "flex flex-col items-center justify-center gap-y-5" }, [
                                        createVNode("img", {
                                          src: _imports_0,
                                          alt: "Floor Plan",
                                          class: "h-11 w-11 object-contain"
                                        }),
                                        createVNode("div", { class: "flex flex-col items-center justify-center gap-y-2" }, [
                                          createVNode("div", { class: "text-gray-400 text-sm" }, "Загальна площа"),
                                          createVNode("div", { class: "font-semibold text-xl" }, "23.01 м2")
                                        ])
                                      ])
                                    ])
                                  ]),
                                  (openBlock(), createBlock(Fragment, null, renderList([
                                    {
                                      label: "Загальна площа",
                                      value: "23.01 м2",
                                      icon: "/images/deal-live-square.svg"
                                    },
                                    {
                                      label: "Площа санвузла",
                                      value: "5.00 м2",
                                      icon: "/images/bath-square.svg"
                                    },
                                    {
                                      label: "Висота стелі",
                                      value: "2.75 м",
                                      icon: "/images/ceil-height.svg"
                                    },
                                    {
                                      label: "Санвузлів",
                                      value: "1",
                                      icon: "/images/bath-square.svg"
                                    }
                                  ], (stat) => {
                                    return createVNode("div", {
                                      class: "col-span-1",
                                      key: stat.label
                                    }, [
                                      createVNode("div", { class: "bg-white rounded-lg h-full w-full flex items-center justify-center" }, [
                                        createVNode("div", { class: "flex items-center gap-x-7 w-full p-4 pl-9 pr-4" }, [
                                          createVNode("div", { class: "flex flex-center justify-center h-8 w-8" }, [
                                            createVNode("img", {
                                              class: "h-full w-full cover",
                                              src: stat.icon
                                            }, null, 8, ["src"])
                                          ]),
                                          createVNode("div", { class: "flex flex-col gap-y-1" }, [
                                            createVNode("div", { class: "text-gray-400 text-sm" }, toDisplayString(stat.label), 1),
                                            createVNode("div", { class: "font-semibold text-xl" }, toDisplayString(stat.value), 1)
                                          ])
                                        ])
                                      ])
                                    ]);
                                  }), 64))
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "flex flex-col gap-y-5" }, [
                              createVNode("div", { class: "text-lg font-semibold" }, " Продаж 2-кімнатної квартири ЖК Новопечерські Липки, вул. Верхогляда (Драгомирова) "),
                              createVNode("div", null, ' Житловий комплекс Новопечерські Липки є унікальним за своєю внутрішньою інфраструктурою, яка розроблена за планом "місто в місті". Внутрішня інфраструктура Новопечерських Липок є для багатьох мешканців найбільш привабливим атрибутом даного житлового комплексу. На території цього міні-міста ви знайдете свою власну міжнародну та середню школу, свій ландшафтний парк, кілька ресторанів, повноцінний спортзал з басейном і навіть тенісні корти. '),
                              createVNode("div", null, [
                                createVNode("div", { class: "text-lg mb-2 font-semibold" }, " Функціональне планування "),
                                createVNode("div", null, [
                                  createVNode("ul", null, [
                                    (openBlock(), createBlock(Fragment, null, renderList([
                                      "кухня-вітальня",
                                      "окрема спальня",
                                      "санвузол",
                                      "лоджія",
                                      "хол із гардеробною"
                                    ], (f) => {
                                      return createVNode("li", { key: f }, toDisplayString(f), 1);
                                    }), 64))
                                  ])
                                ])
                              ]),
                              createVNode("div", null, [
                                createVNode("div", { class: "text-lg mb-2 font-semibold" }, " Зручна інфраструктура "),
                                createVNode("div", { class: "flex gap-x-1" }, [
                                  (openBlock(), createBlock(Fragment, null, renderList([
                                    "Либідська",
                                    "ТЦ Майдан",
                                    "Центральный автовокзал"
                                  ], (tag) => {
                                    return createVNode(_component_UBadge, {
                                      variant: "soft",
                                      key: tag,
                                      size: "lg",
                                      ui: {
                                        base: "font-semibold"
                                      }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(tag), 1)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ])
                              ]),
                              createVNode("div", { class: "border-b border-gray-200 h-1" }),
                              createVNode("div", { class: "flex items-center gap-x-3" }, [
                                createVNode(_component_UBadge, { variant: "soft" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" 26818 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "text-sm text-gray-400" }, "Оголошення від 23 липня")
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-4 relative"${_scopeId2}><div style="${ssrRenderStyle({ "position": "sticky", "top": "128px" })}" class="flex flex-col gap-y-5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex flex-col gap-y-3"${_scopeId3}><div class="flex flex-col gap-y-3"${_scopeId3}><div class="flex items-center justify-between"${_scopeId3}><div class="flex items-center gap-x-2 text-gray-500"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UIcon, {
                          name: "i-fluent-location-20-filled",
                          class: "size-4"
                        }, null, _parent4, _scopeId3));
                        _push4(`<span${_scopeId3}> Чернівці </span></div><div class="flex gap-x-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UButton, {
                          icon: "i-lucide-heart",
                          size: "sm",
                          color: "gray-300"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UButton, {
                          icon: "i-lucide-share",
                          size: "sm",
                          color: "gray-300"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div><div class="font-semibold text-primary-800 text-xl"${_scopeId3}> вул. Верхогляда (Драгомирова), 63, б.3 </div><div class="text-gray-500"${_scopeId3}> ЖК Новопечерські Липки, Печерськ, Печерський район, Київ </div></div><div class="flex items-center gap-x-4"${_scopeId3}><div class="font-bold text-3xl text-primary-800"${_scopeId3}>$109 900</div><div class="text-gray-400"${_scopeId3}>$780 за м2</div></div><div${_scopeId3}><div class="flex gap-x-5 text-sm"${_scopeId3}><div class="flex items-center gap-x-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UIcon, {
                          name: "i-mdi-rhombus",
                          class: "size-2 text-gray-500"
                        }, null, _parent4, _scopeId3));
                        _push4(`<div${_scopeId3}>3 кімнати</div></div><div class="flex items-center gap-x-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UIcon, {
                          name: "i-mdi-rhombus",
                          class: "size-2 text-gray-500"
                        }, null, _parent4, _scopeId3));
                        _push4(` 141 м2 </div><div class="flex items-center gap-x-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UIcon, {
                          name: "i-mdi-rhombus",
                          class: "size-2 text-gray-500"
                        }, null, _parent4, _scopeId3));
                        _push4(` 5 поверх з 9 </div></div></div>`);
                        _push4(ssrRenderComponent(_component_UButton, {
                          block: "",
                          color: "accent-primary",
                          size: "xl",
                          class: "uppercase mt-3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Залишити заявку `);
                            } else {
                              return [
                                createTextVNode(" Залишити заявку ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex flex-col gap-y-3" }, [
                            createVNode("div", { class: "flex flex-col gap-y-3" }, [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", { class: "flex items-center gap-x-2 text-gray-500" }, [
                                  createVNode(_component_UIcon, {
                                    name: "i-fluent-location-20-filled",
                                    class: "size-4"
                                  }),
                                  createVNode("span", null, " Чернівці ")
                                ]),
                                createVNode("div", { class: "flex gap-x-1" }, [
                                  createVNode(_component_UButton, {
                                    icon: "i-lucide-heart",
                                    size: "sm",
                                    color: "gray-300"
                                  }),
                                  createVNode(_component_UButton, {
                                    icon: "i-lucide-share",
                                    size: "sm",
                                    color: "gray-300"
                                  })
                                ])
                              ]),
                              createVNode("div", { class: "font-semibold text-primary-800 text-xl" }, " вул. Верхогляда (Драгомирова), 63, б.3 "),
                              createVNode("div", { class: "text-gray-500" }, " ЖК Новопечерські Липки, Печерськ, Печерський район, Київ ")
                            ]),
                            createVNode("div", { class: "flex items-center gap-x-4" }, [
                              createVNode("div", { class: "font-bold text-3xl text-primary-800" }, "$109 900"),
                              createVNode("div", { class: "text-gray-400" }, "$780 за м2")
                            ]),
                            createVNode("div", null, [
                              createVNode("div", { class: "flex gap-x-5 text-sm" }, [
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
                            ]),
                            createVNode(_component_UButton, {
                              block: "",
                              color: "accent-primary",
                              size: "xl",
                              class: "uppercase mt-3"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Залишити заявку ")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UUser, {
                          name: "Артур Березовський",
                          description: "Ваш персональний ріелтор",
                          avatar: {
                            src: "https://i.pravatar.cc/150?u=john-doe",
                            icon: "i-lucide-image"
                          },
                          size: "2xl",
                          ui: {
                            wrapper: "flex flex-col-reverse col-reverse",
                            name: "font-semibold"
                          }
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UUser, {
                            name: "Артур Березовський",
                            description: "Ваш персональний ріелтор",
                            avatar: {
                              src: "https://i.pravatar.cc/150?u=john-doe",
                              icon: "i-lucide-image"
                            },
                            size: "2xl",
                            ui: {
                              wrapper: "flex flex-col-reverse col-reverse",
                              name: "font-semibold"
                            }
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-y-9" }, [
                      createVNode("div", null, [
                        createVNode(_component_UBreadcrumb, { items: [
                          {
                            slot: "logo",
                            to: "/"
                          },
                          {
                            label: "Купити",
                            // icon: 'i-lucide-book-open',
                            to: "/"
                          },
                          {
                            label: "ЖК Бамбула",
                            to: "/"
                          },
                          {
                            label: "вул. Верхогляда (Драгомирова), 63, б.3"
                          }
                        ] }, {
                          logo: withCtx(() => [
                            createVNode("object", {
                              data: "/images/logo.svg",
                              type: "image/svg+xml",
                              class: "w-5 h-5"
                            })
                          ]),
                          separator: withCtx(() => [
                            createVNode(_component_NuxtLink, {
                              to: "/",
                              class: "text-gray-300 mx-2 hover:opacity-70"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" / ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "grid grid-cols-12 gap-5" }, [
                          createVNode("div", { class: "col-span-8 flex flex-col gap-y-7" }, [
                            createVNode("div", { class: "flex flex-col gap-y-3" }, [
                              createVNode(_component_UCard, { ui: {
                                body: "p-1!"
                              } }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex-1 rounded-lg overflow-hidden w-full" }, [
                                    createVNode(_component_UCarousel, {
                                      ref_key: "carousel",
                                      ref: carousel,
                                      arrows: "",
                                      items,
                                      prev: { onClick: onClickPrev },
                                      next: { onClick: onClickNext },
                                      class: "flex-1",
                                      onSelect,
                                      ui: {
                                        arrows: "absolute inset-y-0 w-full flex items-center justify-between pointer-events-none ",
                                        prev: "p-3 !start-1 sm:!start-2 top-1/2 -translate-y-1/2 pointer-events-auto shadow-lg",
                                        next: "p-3 !end-1 sm:!end-2 top-1/2 -translate-y-1/2 pointer-events-auto shadow-lg"
                                      }
                                    }, {
                                      default: withCtx(({ item }) => [
                                        createVNode("div", { class: "relative" }, [
                                          createVNode("img", {
                                            src: item,
                                            class: "rounded-lg z-1 w-full h-[50vh] object-contain"
                                          }, null, 8, ["src"]),
                                          createVNode("img", {
                                            src: item,
                                            class: "absolute h-full -z-1 w-full object-cover top-0 left-0 blur-xl"
                                          }, null, 8, ["src"])
                                        ])
                                      ]),
                                      _: 1
                                    }, 8, ["prev", "next"])
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "flex gap-x-1" }, [
                                (openBlock(), createBlock(Fragment, null, renderList(items, (item, index) => {
                                  return createVNode("div", {
                                    key: index,
                                    class: ["opacity-40 cursor-pointer hover:opacity-100 transition-opacity", { "opacity-100": unref(activeIndex) === index }],
                                    onClick: ($event) => select(index)
                                  }, [
                                    createVNode("img", {
                                      src: item,
                                      class: "rounded-md h-14 w-14 object-cover"
                                    }, null, 8, ["src"])
                                  ], 10, ["onClick"]);
                                }), 64))
                              ])
                            ]),
                            createVNode(_component_UCard, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex flex-col gap-y-7" }, [
                                  createVNode("div", { class: "font-semibold text-xl text-primary-700" }, " Опис квартири "),
                                  createVNode(_component_UCard, {
                                    variant: "solid",
                                    ui: { body: "bg-gray-100 p-1! text-primary" }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "grid gap-1 grid-cols-3 grid-rows-2 min-h-70" }, [
                                        createVNode("div", { class: "row-span-2 col-span-1" }, [
                                          createVNode("div", { class: "bg-white rounded-lg h-full w-full flex items-center justify-center" }, [
                                            createVNode("div", { class: "flex flex-col items-center justify-center gap-y-5" }, [
                                              createVNode("img", {
                                                src: _imports_0,
                                                alt: "Floor Plan",
                                                class: "h-11 w-11 object-contain"
                                              }),
                                              createVNode("div", { class: "flex flex-col items-center justify-center gap-y-2" }, [
                                                createVNode("div", { class: "text-gray-400 text-sm" }, "Загальна площа"),
                                                createVNode("div", { class: "font-semibold text-xl" }, "23.01 м2")
                                              ])
                                            ])
                                          ])
                                        ]),
                                        (openBlock(), createBlock(Fragment, null, renderList([
                                          {
                                            label: "Загальна площа",
                                            value: "23.01 м2",
                                            icon: "/images/deal-live-square.svg"
                                          },
                                          {
                                            label: "Площа санвузла",
                                            value: "5.00 м2",
                                            icon: "/images/bath-square.svg"
                                          },
                                          {
                                            label: "Висота стелі",
                                            value: "2.75 м",
                                            icon: "/images/ceil-height.svg"
                                          },
                                          {
                                            label: "Санвузлів",
                                            value: "1",
                                            icon: "/images/bath-square.svg"
                                          }
                                        ], (stat) => {
                                          return createVNode("div", {
                                            class: "col-span-1",
                                            key: stat.label
                                          }, [
                                            createVNode("div", { class: "bg-white rounded-lg h-full w-full flex items-center justify-center" }, [
                                              createVNode("div", { class: "flex items-center gap-x-7 w-full p-4 pl-9 pr-4" }, [
                                                createVNode("div", { class: "flex flex-center justify-center h-8 w-8" }, [
                                                  createVNode("img", {
                                                    class: "h-full w-full cover",
                                                    src: stat.icon
                                                  }, null, 8, ["src"])
                                                ]),
                                                createVNode("div", { class: "flex flex-col gap-y-1" }, [
                                                  createVNode("div", { class: "text-gray-400 text-sm" }, toDisplayString(stat.label), 1),
                                                  createVNode("div", { class: "font-semibold text-xl" }, toDisplayString(stat.value), 1)
                                                ])
                                              ])
                                            ])
                                          ]);
                                        }), 64))
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "flex flex-col gap-y-5" }, [
                                    createVNode("div", { class: "text-lg font-semibold" }, " Продаж 2-кімнатної квартири ЖК Новопечерські Липки, вул. Верхогляда (Драгомирова) "),
                                    createVNode("div", null, ' Житловий комплекс Новопечерські Липки є унікальним за своєю внутрішньою інфраструктурою, яка розроблена за планом "місто в місті". Внутрішня інфраструктура Новопечерських Липок є для багатьох мешканців найбільш привабливим атрибутом даного житлового комплексу. На території цього міні-міста ви знайдете свою власну міжнародну та середню школу, свій ландшафтний парк, кілька ресторанів, повноцінний спортзал з басейном і навіть тенісні корти. '),
                                    createVNode("div", null, [
                                      createVNode("div", { class: "text-lg mb-2 font-semibold" }, " Функціональне планування "),
                                      createVNode("div", null, [
                                        createVNode("ul", null, [
                                          (openBlock(), createBlock(Fragment, null, renderList([
                                            "кухня-вітальня",
                                            "окрема спальня",
                                            "санвузол",
                                            "лоджія",
                                            "хол із гардеробною"
                                          ], (f) => {
                                            return createVNode("li", { key: f }, toDisplayString(f), 1);
                                          }), 64))
                                        ])
                                      ])
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("div", { class: "text-lg mb-2 font-semibold" }, " Зручна інфраструктура "),
                                      createVNode("div", { class: "flex gap-x-1" }, [
                                        (openBlock(), createBlock(Fragment, null, renderList([
                                          "Либідська",
                                          "ТЦ Майдан",
                                          "Центральный автовокзал"
                                        ], (tag) => {
                                          return createVNode(_component_UBadge, {
                                            variant: "soft",
                                            key: tag,
                                            size: "lg",
                                            ui: {
                                              base: "font-semibold"
                                            }
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(tag), 1)
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 64))
                                      ])
                                    ]),
                                    createVNode("div", { class: "border-b border-gray-200 h-1" }),
                                    createVNode("div", { class: "flex items-center gap-x-3" }, [
                                      createVNode(_component_UBadge, { variant: "soft" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" 26818 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "text-sm text-gray-400" }, "Оголошення від 23 липня")
                                    ])
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "col-span-4 relative" }, [
                            createVNode("div", {
                              style: { "position": "sticky", "top": "128px" },
                              class: "flex flex-col gap-y-5"
                            }, [
                              createVNode(_component_UCard, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex flex-col gap-y-3" }, [
                                    createVNode("div", { class: "flex flex-col gap-y-3" }, [
                                      createVNode("div", { class: "flex items-center justify-between" }, [
                                        createVNode("div", { class: "flex items-center gap-x-2 text-gray-500" }, [
                                          createVNode(_component_UIcon, {
                                            name: "i-fluent-location-20-filled",
                                            class: "size-4"
                                          }),
                                          createVNode("span", null, " Чернівці ")
                                        ]),
                                        createVNode("div", { class: "flex gap-x-1" }, [
                                          createVNode(_component_UButton, {
                                            icon: "i-lucide-heart",
                                            size: "sm",
                                            color: "gray-300"
                                          }),
                                          createVNode(_component_UButton, {
                                            icon: "i-lucide-share",
                                            size: "sm",
                                            color: "gray-300"
                                          })
                                        ])
                                      ]),
                                      createVNode("div", { class: "font-semibold text-primary-800 text-xl" }, " вул. Верхогляда (Драгомирова), 63, б.3 "),
                                      createVNode("div", { class: "text-gray-500" }, " ЖК Новопечерські Липки, Печерськ, Печерський район, Київ ")
                                    ]),
                                    createVNode("div", { class: "flex items-center gap-x-4" }, [
                                      createVNode("div", { class: "font-bold text-3xl text-primary-800" }, "$109 900"),
                                      createVNode("div", { class: "text-gray-400" }, "$780 за м2")
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("div", { class: "flex gap-x-5 text-sm" }, [
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
                                    ]),
                                    createVNode(_component_UButton, {
                                      block: "",
                                      color: "accent-primary",
                                      size: "xl",
                                      class: "uppercase mt-3"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Залишити заявку ")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UCard, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UUser, {
                                    name: "Артур Березовський",
                                    description: "Ваш персональний ріелтор",
                                    avatar: {
                                      src: "https://i.pravatar.cc/150?u=john-doe",
                                      icon: "i-lucide-image"
                                    },
                                    size: "2xl",
                                    ui: {
                                      wrapper: "flex flex-col-reverse col-reverse",
                                      name: "font-semibold"
                                    }
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="border-t border-b border-gray-300"${_scopeId}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.313109879449!2d25.969347900000006!3d48.23909980000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47340ebf473588b3%3A0x2074a074c7266c5e!2z0LLRg9C70LjRhtGPINCd0LXQt9Cw0LvQtdC20L3QvtGB0YLRliwgOTIsINCn0LDQs9C-0YAsINCn0LXRgNC90ZbQstC10YbRjNC60LAg0L7QsdC70LDRgdGC0YwsIDYwNDEy!5e0!3m2!1sru!2sua!4v1765022612289!5m2!1sru!2sua" width="100%" height="420" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"${_scopeId}></iframe></div>`);
            _push2(ssrRenderComponent(_component_BestDealsCarousel, {
              class: "mb-10",
              deals: [1, 2, 3, 4, 5, 6, 7]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UContainer, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PromoCallbackBanner, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PromoCallbackBanner)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "pt-14 flex flex-col gap-y-11" }, [
                createVNode(_component_UContainer, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex flex-col gap-y-9" }, [
                      createVNode("div", null, [
                        createVNode(_component_UBreadcrumb, { items: [
                          {
                            slot: "logo",
                            to: "/"
                          },
                          {
                            label: "Купити",
                            // icon: 'i-lucide-book-open',
                            to: "/"
                          },
                          {
                            label: "ЖК Бамбула",
                            to: "/"
                          },
                          {
                            label: "вул. Верхогляда (Драгомирова), 63, б.3"
                          }
                        ] }, {
                          logo: withCtx(() => [
                            createVNode("object", {
                              data: "/images/logo.svg",
                              type: "image/svg+xml",
                              class: "w-5 h-5"
                            })
                          ]),
                          separator: withCtx(() => [
                            createVNode(_component_NuxtLink, {
                              to: "/",
                              class: "text-gray-300 mx-2 hover:opacity-70"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" / ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "grid grid-cols-12 gap-5" }, [
                          createVNode("div", { class: "col-span-8 flex flex-col gap-y-7" }, [
                            createVNode("div", { class: "flex flex-col gap-y-3" }, [
                              createVNode(_component_UCard, { ui: {
                                body: "p-1!"
                              } }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex-1 rounded-lg overflow-hidden w-full" }, [
                                    createVNode(_component_UCarousel, {
                                      ref_key: "carousel",
                                      ref: carousel,
                                      arrows: "",
                                      items,
                                      prev: { onClick: onClickPrev },
                                      next: { onClick: onClickNext },
                                      class: "flex-1",
                                      onSelect,
                                      ui: {
                                        arrows: "absolute inset-y-0 w-full flex items-center justify-between pointer-events-none ",
                                        prev: "p-3 !start-1 sm:!start-2 top-1/2 -translate-y-1/2 pointer-events-auto shadow-lg",
                                        next: "p-3 !end-1 sm:!end-2 top-1/2 -translate-y-1/2 pointer-events-auto shadow-lg"
                                      }
                                    }, {
                                      default: withCtx(({ item }) => [
                                        createVNode("div", { class: "relative" }, [
                                          createVNode("img", {
                                            src: item,
                                            class: "rounded-lg z-1 w-full h-[50vh] object-contain"
                                          }, null, 8, ["src"]),
                                          createVNode("img", {
                                            src: item,
                                            class: "absolute h-full -z-1 w-full object-cover top-0 left-0 blur-xl"
                                          }, null, 8, ["src"])
                                        ])
                                      ]),
                                      _: 1
                                    }, 8, ["prev", "next"])
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "flex gap-x-1" }, [
                                (openBlock(), createBlock(Fragment, null, renderList(items, (item, index) => {
                                  return createVNode("div", {
                                    key: index,
                                    class: ["opacity-40 cursor-pointer hover:opacity-100 transition-opacity", { "opacity-100": unref(activeIndex) === index }],
                                    onClick: ($event) => select(index)
                                  }, [
                                    createVNode("img", {
                                      src: item,
                                      class: "rounded-md h-14 w-14 object-cover"
                                    }, null, 8, ["src"])
                                  ], 10, ["onClick"]);
                                }), 64))
                              ])
                            ]),
                            createVNode(_component_UCard, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex flex-col gap-y-7" }, [
                                  createVNode("div", { class: "font-semibold text-xl text-primary-700" }, " Опис квартири "),
                                  createVNode(_component_UCard, {
                                    variant: "solid",
                                    ui: { body: "bg-gray-100 p-1! text-primary" }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "grid gap-1 grid-cols-3 grid-rows-2 min-h-70" }, [
                                        createVNode("div", { class: "row-span-2 col-span-1" }, [
                                          createVNode("div", { class: "bg-white rounded-lg h-full w-full flex items-center justify-center" }, [
                                            createVNode("div", { class: "flex flex-col items-center justify-center gap-y-5" }, [
                                              createVNode("img", {
                                                src: _imports_0,
                                                alt: "Floor Plan",
                                                class: "h-11 w-11 object-contain"
                                              }),
                                              createVNode("div", { class: "flex flex-col items-center justify-center gap-y-2" }, [
                                                createVNode("div", { class: "text-gray-400 text-sm" }, "Загальна площа"),
                                                createVNode("div", { class: "font-semibold text-xl" }, "23.01 м2")
                                              ])
                                            ])
                                          ])
                                        ]),
                                        (openBlock(), createBlock(Fragment, null, renderList([
                                          {
                                            label: "Загальна площа",
                                            value: "23.01 м2",
                                            icon: "/images/deal-live-square.svg"
                                          },
                                          {
                                            label: "Площа санвузла",
                                            value: "5.00 м2",
                                            icon: "/images/bath-square.svg"
                                          },
                                          {
                                            label: "Висота стелі",
                                            value: "2.75 м",
                                            icon: "/images/ceil-height.svg"
                                          },
                                          {
                                            label: "Санвузлів",
                                            value: "1",
                                            icon: "/images/bath-square.svg"
                                          }
                                        ], (stat) => {
                                          return createVNode("div", {
                                            class: "col-span-1",
                                            key: stat.label
                                          }, [
                                            createVNode("div", { class: "bg-white rounded-lg h-full w-full flex items-center justify-center" }, [
                                              createVNode("div", { class: "flex items-center gap-x-7 w-full p-4 pl-9 pr-4" }, [
                                                createVNode("div", { class: "flex flex-center justify-center h-8 w-8" }, [
                                                  createVNode("img", {
                                                    class: "h-full w-full cover",
                                                    src: stat.icon
                                                  }, null, 8, ["src"])
                                                ]),
                                                createVNode("div", { class: "flex flex-col gap-y-1" }, [
                                                  createVNode("div", { class: "text-gray-400 text-sm" }, toDisplayString(stat.label), 1),
                                                  createVNode("div", { class: "font-semibold text-xl" }, toDisplayString(stat.value), 1)
                                                ])
                                              ])
                                            ])
                                          ]);
                                        }), 64))
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "flex flex-col gap-y-5" }, [
                                    createVNode("div", { class: "text-lg font-semibold" }, " Продаж 2-кімнатної квартири ЖК Новопечерські Липки, вул. Верхогляда (Драгомирова) "),
                                    createVNode("div", null, ' Житловий комплекс Новопечерські Липки є унікальним за своєю внутрішньою інфраструктурою, яка розроблена за планом "місто в місті". Внутрішня інфраструктура Новопечерських Липок є для багатьох мешканців найбільш привабливим атрибутом даного житлового комплексу. На території цього міні-міста ви знайдете свою власну міжнародну та середню школу, свій ландшафтний парк, кілька ресторанів, повноцінний спортзал з басейном і навіть тенісні корти. '),
                                    createVNode("div", null, [
                                      createVNode("div", { class: "text-lg mb-2 font-semibold" }, " Функціональне планування "),
                                      createVNode("div", null, [
                                        createVNode("ul", null, [
                                          (openBlock(), createBlock(Fragment, null, renderList([
                                            "кухня-вітальня",
                                            "окрема спальня",
                                            "санвузол",
                                            "лоджія",
                                            "хол із гардеробною"
                                          ], (f) => {
                                            return createVNode("li", { key: f }, toDisplayString(f), 1);
                                          }), 64))
                                        ])
                                      ])
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("div", { class: "text-lg mb-2 font-semibold" }, " Зручна інфраструктура "),
                                      createVNode("div", { class: "flex gap-x-1" }, [
                                        (openBlock(), createBlock(Fragment, null, renderList([
                                          "Либідська",
                                          "ТЦ Майдан",
                                          "Центральный автовокзал"
                                        ], (tag) => {
                                          return createVNode(_component_UBadge, {
                                            variant: "soft",
                                            key: tag,
                                            size: "lg",
                                            ui: {
                                              base: "font-semibold"
                                            }
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(tag), 1)
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 64))
                                      ])
                                    ]),
                                    createVNode("div", { class: "border-b border-gray-200 h-1" }),
                                    createVNode("div", { class: "flex items-center gap-x-3" }, [
                                      createVNode(_component_UBadge, { variant: "soft" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" 26818 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "text-sm text-gray-400" }, "Оголошення від 23 липня")
                                    ])
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "col-span-4 relative" }, [
                            createVNode("div", {
                              style: { "position": "sticky", "top": "128px" },
                              class: "flex flex-col gap-y-5"
                            }, [
                              createVNode(_component_UCard, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex flex-col gap-y-3" }, [
                                    createVNode("div", { class: "flex flex-col gap-y-3" }, [
                                      createVNode("div", { class: "flex items-center justify-between" }, [
                                        createVNode("div", { class: "flex items-center gap-x-2 text-gray-500" }, [
                                          createVNode(_component_UIcon, {
                                            name: "i-fluent-location-20-filled",
                                            class: "size-4"
                                          }),
                                          createVNode("span", null, " Чернівці ")
                                        ]),
                                        createVNode("div", { class: "flex gap-x-1" }, [
                                          createVNode(_component_UButton, {
                                            icon: "i-lucide-heart",
                                            size: "sm",
                                            color: "gray-300"
                                          }),
                                          createVNode(_component_UButton, {
                                            icon: "i-lucide-share",
                                            size: "sm",
                                            color: "gray-300"
                                          })
                                        ])
                                      ]),
                                      createVNode("div", { class: "font-semibold text-primary-800 text-xl" }, " вул. Верхогляда (Драгомирова), 63, б.3 "),
                                      createVNode("div", { class: "text-gray-500" }, " ЖК Новопечерські Липки, Печерськ, Печерський район, Київ ")
                                    ]),
                                    createVNode("div", { class: "flex items-center gap-x-4" }, [
                                      createVNode("div", { class: "font-bold text-3xl text-primary-800" }, "$109 900"),
                                      createVNode("div", { class: "text-gray-400" }, "$780 за м2")
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("div", { class: "flex gap-x-5 text-sm" }, [
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
                                    ]),
                                    createVNode(_component_UButton, {
                                      block: "",
                                      color: "accent-primary",
                                      size: "xl",
                                      class: "uppercase mt-3"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Залишити заявку ")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UCard, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UUser, {
                                    name: "Артур Березовський",
                                    description: "Ваш персональний ріелтор",
                                    avatar: {
                                      src: "https://i.pravatar.cc/150?u=john-doe",
                                      icon: "i-lucide-image"
                                    },
                                    size: "2xl",
                                    ui: {
                                      wrapper: "flex flex-col-reverse col-reverse",
                                      name: "font-semibold"
                                    }
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "border-t border-b border-gray-300" }, [
                  createVNode("iframe", {
                    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.313109879449!2d25.969347900000006!3d48.23909980000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47340ebf473588b3%3A0x2074a074c7266c5e!2z0LLRg9C70LjRhtGPINCd0LXQt9Cw0LvQtdC20L3QvtGB0YLRliwgOTIsINCn0LDQs9C-0YAsINCn0LXRgNC90ZbQstC10YbRjNC60LAg0L7QsdC70LDRgdGC0YwsIDYwNDEy!5e0!3m2!1sru!2sua!4v1765022612289!5m2!1sru!2sua",
                    width: "100%",
                    height: "420",
                    style: { "border": "0" },
                    allowfullscreen: "",
                    loading: "lazy",
                    referrerpolicy: "no-referrer-when-downgrade"
                  })
                ]),
                createVNode(_component_BestDealsCarousel, {
                  class: "mb-10",
                  deals: [1, 2, 3, 4, 5, 6, 7]
                }),
                createVNode(_component_UContainer, null, {
                  default: withCtx(() => [
                    createVNode(_component_PromoCallbackBanner)
                  ]),
                  _: 1
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/deals/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-BpMnf-b0.mjs.map
