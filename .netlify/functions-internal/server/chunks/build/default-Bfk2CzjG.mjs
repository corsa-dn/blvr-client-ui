import { withCtx, renderSlot, ref, mergeProps, createVNode, createTextVNode, unref, useSlots, computed, createBlock, createCommentVNode, openBlock, mergeModels, useModel, watch, toRef, toDisplayString, toHandlers, Fragment, resolveDynamicComponent, withModifiers, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderStyle, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderVNode, ssrRenderList, ssrRenderAttrs } from 'vue/server-renderer';
import { Primitive, Slot, useForwardPropsEmits, DialogRoot, DialogContent, VisuallyHidden, DialogTitle, DialogDescription, DialogClose, DialogTrigger, DialogPortal, DialogOverlay, AccordionTrigger, AccordionItem, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuLink, NavigationMenuContent, AccordionContent, AccordionRoot, NavigationMenuRoot, NavigationMenuList, NavigationMenuIndicator, NavigationMenuViewport, TooltipRoot, TooltipTrigger, TooltipPortal, TooltipContent, TooltipArrow } from 'reka-ui';
import { p as publicAssetsURL, m as defu } from '../nitro/nitro.mjs';
import { createReusableTemplate, reactivePick } from '@vueuse/core';
import { _ as _export_sfc, a as __nuxt_component_0$2, w as __nuxt_component_3, f as _sfc_main$8$1, b as useAppConfig, t as tv, n as useRoute, k as useLocale, g as getSlotChildrenText, d as _sfc_main$9$1, o as usePortal, s as isArrayOfArray, e as _sfc_main$b$1, c as _sfc_main$e, i as get, p as pickLinkProps, l as _sfc_main$a$1 } from './server.mjs';
import { a as _sfc_main$b, _ as _sfc_main$1$1 } from './Input-DlCeRXhR.mjs';
import { DrawerRootNested, DrawerRoot, DrawerTrigger, DrawerPortal, DrawerOverlay, DrawerContent, DrawerHandle, DrawerTitle, DrawerDescription } from 'vaul-vue';
import { _ as _sfc_main$c } from './Badge-BppIIJgc.mjs';
import { HoverCard, Popover } from 'reka-ui/namespaced';
import { _ as _sfc_main$d } from './Kbd-BHQSG_Et.mjs';
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

const theme$7 = {
  "slots": {
    "overlay": "fixed inset-0 bg-elevated/75",
    "content": "fixed bg-default divide-y divide-default sm:ring ring-default sm:shadow-lg flex flex-col focus:outline-none",
    "header": "flex items-center gap-1.5 p-4 sm:px-6 min-h-16",
    "wrapper": "",
    "body": "flex-1 overflow-y-auto p-4 sm:p-6",
    "footer": "flex items-center gap-1.5 p-4 sm:px-6",
    "title": "text-highlighted font-semibold",
    "description": "mt-1 text-muted text-sm",
    "close": "absolute top-4 end-4"
  },
  "variants": {
    "side": {
      "top": {
        "content": "inset-x-0 top-0 max-h-full"
      },
      "right": {
        "content": "right-0 inset-y-0 w-full max-w-md"
      },
      "bottom": {
        "content": "inset-x-0 bottom-0 max-h-full"
      },
      "left": {
        "content": "left-0 inset-y-0 w-full max-w-md"
      }
    },
    "transition": {
      "true": {
        "overlay": "data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]"
      }
    }
  },
  "compoundVariants": [
    {
      "transition": true,
      "side": "top",
      "class": {
        "content": "data-[state=open]:animate-[slide-in-from-top_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-top_200ms_ease-in-out]"
      }
    },
    {
      "transition": true,
      "side": "right",
      "class": {
        "content": "data-[state=open]:animate-[slide-in-from-right_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-right_200ms_ease-in-out]"
      }
    },
    {
      "transition": true,
      "side": "bottom",
      "class": {
        "content": "data-[state=open]:animate-[slide-in-from-bottom_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-bottom_200ms_ease-in-out]"
      }
    },
    {
      "transition": true,
      "side": "left",
      "class": {
        "content": "data-[state=open]:animate-[slide-in-from-left_200ms_ease-in-out] data-[state=closed]:animate-[slide-out-to-left_200ms_ease-in-out]"
      }
    }
  ]
};
const _sfc_main$a = {
  __name: "USlideover",
  __ssrInlineRender: true,
  props: {
    title: { type: String, required: false },
    description: { type: String, required: false },
    content: { type: Object, required: false },
    overlay: { type: Boolean, required: false, default: true },
    transition: { type: Boolean, required: false, default: true },
    side: { type: null, required: false, default: "right" },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    close: { type: [Boolean, Object], required: false, default: true },
    closeIcon: { type: null, required: false },
    dismissible: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    open: { type: Boolean, required: false },
    defaultOpen: { type: Boolean, required: false },
    modal: { type: Boolean, required: false, default: true }
  },
  emits: ["after:leave", "after:enter", "close:prevent", "update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "open", "defaultOpen", "modal"), emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => props.content);
    const contentEvents = computed(() => {
      if (!props.dismissible) {
        const events = ["pointerDownOutside", "interactOutside", "escapeKeyDown"];
        return events.reduce((acc, curr) => {
          acc[curr] = (e) => {
            e.preventDefault();
            emits("close:prevent");
          };
          return acc;
        }, {});
      }
      return {};
    });
    const ui = computed(() => tv({ extend: tv(theme$7), ...appConfig.ui?.slideover || {} })({
      transition: props.transition,
      side: props.side
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogRoot), mergeProps(unref(rootProps), _attrs), {
        default: withCtx(({ open, close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(DialogTrigger), {
                "as-child": "",
                class: props.class
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(DialogPortal), unref(portalProps), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (__props.overlay) {
                    _push3(ssrRenderComponent(unref(DialogOverlay), {
                      "data-slot": "overlay",
                      class: ui.value.overlay({ class: props.ui?.overlay })
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(unref(DialogContent), mergeProps({
                    "data-side": __props.side,
                    "data-slot": "content",
                    class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                  }, contentProps.value, {
                    onAfterEnter: ($event) => emits("after:enter"),
                    onAfterLeave: ($event) => emits("after:leave")
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (!!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description))) {
                          _push4(ssrRenderComponent(unref(VisuallyHidden), null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (__props.title || !!slots.title) {
                                  _push5(ssrRenderComponent(unref(DialogTitle), null, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                          _push6(`${ssrInterpolate(__props.title)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(__props.title), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (__props.description || !!slots.description) {
                                  _push5(ssrRenderComponent(unref(DialogDescription), null, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                          _push6(`${ssrInterpolate(__props.description)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(__props.description), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "title", {}, () => [
                                        createTextVNode(toDisplayString(__props.title), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true),
                                  __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "description", {}, () => [
                                        createTextVNode(toDisplayString(__props.description), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        ssrRenderSlot(_ctx.$slots, "content", { close }, () => {
                          if (!!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close)) {
                            _push4(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: props.ui?.header }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "header", { close }, () => {
                              _push4(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: props.ui?.wrapper }))}"${_scopeId3}>`);
                              if (__props.title || !!slots.title) {
                                _push4(ssrRenderComponent(unref(DialogTitle), {
                                  "data-slot": "title",
                                  class: ui.value.title({ class: props.ui?.title })
                                }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                        _push5(`${ssrInterpolate(__props.title)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(__props.title), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              if (__props.description || !!slots.description) {
                                _push4(ssrRenderComponent(unref(DialogDescription), {
                                  "data-slot": "description",
                                  class: ui.value.description({ class: props.ui?.description })
                                }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                        _push5(`${ssrInterpolate(__props.description)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(__props.description), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</div>`);
                              ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push4, _parent4, _scopeId3);
                              if (props.close || !!slots.close) {
                                _push4(ssrRenderComponent(unref(DialogClose), { "as-child": "" }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                        if (props.close) {
                                          _push5(ssrRenderComponent(_sfc_main$8$1, mergeProps({
                                            icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("slideover.close")
                                          }, typeof props.close === "object" ? props.close : {}, {
                                            "data-slot": "close",
                                            class: ui.value.close({ class: props.ui?.close })
                                          }), null, _parent5, _scopeId4));
                                        } else {
                                          _push5(`<!---->`);
                                        }
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [
                                          props.close ? (openBlock(), createBlock(_sfc_main$8$1, mergeProps({
                                            key: 0,
                                            icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("slideover.close")
                                          }, typeof props.close === "object" ? props.close : {}, {
                                            "data-slot": "close",
                                            class: ui.value.close({ class: props.ui?.close })
                                          }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: props.ui?.body }))}"${_scopeId3}>`);
                          ssrRenderSlot(_ctx.$slots, "body", { close }, null, _push4, _parent4, _scopeId3);
                          _push4(`</div>`);
                          if (!!slots.footer) {
                            _push4(`<div data-slot="footer" class="${ssrRenderClass(ui.value.footer({ class: props.ui?.footer }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "footer", { close }, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        }, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                            default: withCtx(() => [
                              __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createTextVNode(toDisplayString(__props.title), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true),
                              __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "description", {}, () => [
                                    createTextVNode(toDisplayString(__props.description), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true)
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "content", { close }, () => [
                            !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                              key: 0,
                              "data-slot": "header",
                              class: ui.value.header({ class: props.ui?.header })
                            }, [
                              renderSlot(_ctx.$slots, "header", { close }, () => [
                                createVNode("div", {
                                  "data-slot": "wrapper",
                                  class: ui.value.wrapper({ class: props.ui?.wrapper })
                                }, [
                                  __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                    key: 0,
                                    "data-slot": "title",
                                    class: ui.value.title({ class: props.ui?.title })
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "title", {}, () => [
                                        createTextVNode(toDisplayString(__props.title), 1)
                                      ])
                                    ]),
                                    _: 3
                                  }, 8, ["class"])) : createCommentVNode("", true),
                                  __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                    key: 1,
                                    "data-slot": "description",
                                    class: ui.value.description({ class: props.ui?.description })
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "description", {}, () => [
                                        createTextVNode(toDisplayString(__props.description), 1)
                                      ])
                                    ]),
                                    _: 3
                                  }, 8, ["class"])) : createCommentVNode("", true)
                                ], 2),
                                renderSlot(_ctx.$slots, "actions"),
                                props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                  key: 0,
                                  "as-child": ""
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [
                                      props.close ? (openBlock(), createBlock(_sfc_main$8$1, mergeProps({
                                        key: 0,
                                        icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                        color: "neutral",
                                        variant: "ghost",
                                        "aria-label": unref(t)("slideover.close")
                                      }, typeof props.close === "object" ? props.close : {}, {
                                        "data-slot": "close",
                                        class: ui.value.close({ class: props.ui?.close })
                                      }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            createVNode("div", {
                              "data-slot": "body",
                              class: ui.value.body({ class: props.ui?.body })
                            }, [
                              renderSlot(_ctx.$slots, "body", { close })
                            ], 2),
                            !!slots.footer ? (openBlock(), createBlock("div", {
                              key: 1,
                              "data-slot": "footer",
                              class: ui.value.footer({ class: props.ui?.footer })
                            }, [
                              renderSlot(_ctx.$slots, "footer", { close })
                            ], 2)) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    __props.overlay ? (openBlock(), createBlock(unref(DialogOverlay), {
                      key: 0,
                      "data-slot": "overlay",
                      class: ui.value.overlay({ class: props.ui?.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(DialogContent), mergeProps({
                      "data-side": __props.side,
                      "data-slot": "content",
                      class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                    }, contentProps.value, {
                      onAfterEnter: ($event) => emits("after:enter"),
                      onAfterLeave: ($event) => emits("after:leave")
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => [
                        !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                          default: withCtx(() => [
                            __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "title", {}, () => [
                                  createTextVNode(toDisplayString(__props.title), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true),
                            __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "description", {}, () => [
                                  createTextVNode(toDisplayString(__props.description), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true)
                          ]),
                          _: 3
                        })) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "content", { close }, () => [
                          !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                            key: 0,
                            "data-slot": "header",
                            class: ui.value.header({ class: props.ui?.header })
                          }, [
                            renderSlot(_ctx.$slots, "header", { close }, () => [
                              createVNode("div", {
                                "data-slot": "wrapper",
                                class: ui.value.wrapper({ class: props.ui?.wrapper })
                              }, [
                                __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                  key: 0,
                                  "data-slot": "title",
                                  class: ui.value.title({ class: props.ui?.title })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "title", {}, () => [
                                      createTextVNode(toDisplayString(__props.title), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, ["class"])) : createCommentVNode("", true),
                                __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                  key: 1,
                                  "data-slot": "description",
                                  class: ui.value.description({ class: props.ui?.description })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "description", {}, () => [
                                      createTextVNode(toDisplayString(__props.description), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, ["class"])) : createCommentVNode("", true)
                              ], 2),
                              renderSlot(_ctx.$slots, "actions"),
                              props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                key: 0,
                                "as-child": ""
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [
                                    props.close ? (openBlock(), createBlock(_sfc_main$8$1, mergeProps({
                                      key: 0,
                                      icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                      color: "neutral",
                                      variant: "ghost",
                                      "aria-label": unref(t)("slideover.close")
                                    }, typeof props.close === "object" ? props.close : {}, {
                                      "data-slot": "close",
                                      class: ui.value.close({ class: props.ui?.close })
                                    }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                  ])
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          createVNode("div", {
                            "data-slot": "body",
                            class: ui.value.body({ class: props.ui?.body })
                          }, [
                            renderSlot(_ctx.$slots, "body", { close })
                          ], 2),
                          !!slots.footer ? (openBlock(), createBlock("div", {
                            key: 1,
                            "data-slot": "footer",
                            class: ui.value.footer({ class: props.ui?.footer })
                          }, [
                            renderSlot(_ctx.$slots, "footer", { close })
                          ], 2)) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 2
                    }, 1040, ["data-side", "class", "onAfterEnter", "onAfterLeave"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (openBlock(), createBlock(unref(DialogTrigger), {
                key: 0,
                "as-child": "",
                class: props.class
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1032, ["class"])) : createCommentVNode("", true),
              createVNode(unref(DialogPortal), unref(portalProps), {
                default: withCtx(() => [
                  __props.overlay ? (openBlock(), createBlock(unref(DialogOverlay), {
                    key: 0,
                    "data-slot": "overlay",
                    class: ui.value.overlay({ class: props.ui?.overlay })
                  }, null, 8, ["class"])) : createCommentVNode("", true),
                  createVNode(unref(DialogContent), mergeProps({
                    "data-side": __props.side,
                    "data-slot": "content",
                    class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                  }, contentProps.value, {
                    onAfterEnter: ($event) => emits("after:enter"),
                    onAfterLeave: ($event) => emits("after:leave")
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx(() => [
                      !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                        default: withCtx(() => [
                          __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "title", {}, () => [
                                createTextVNode(toDisplayString(__props.title), 1)
                              ])
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "description", {}, () => [
                                createTextVNode(toDisplayString(__props.description), 1)
                              ])
                            ]),
                            _: 3
                          })) : createCommentVNode("", true)
                        ]),
                        _: 3
                      })) : createCommentVNode("", true),
                      renderSlot(_ctx.$slots, "content", { close }, () => [
                        !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                          key: 0,
                          "data-slot": "header",
                          class: ui.value.header({ class: props.ui?.header })
                        }, [
                          renderSlot(_ctx.$slots, "header", { close }, () => [
                            createVNode("div", {
                              "data-slot": "wrapper",
                              class: ui.value.wrapper({ class: props.ui?.wrapper })
                            }, [
                              __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                key: 0,
                                "data-slot": "title",
                                class: ui.value.title({ class: props.ui?.title })
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createTextVNode(toDisplayString(__props.title), 1)
                                  ])
                                ]),
                                _: 3
                              }, 8, ["class"])) : createCommentVNode("", true),
                              __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                key: 1,
                                "data-slot": "description",
                                class: ui.value.description({ class: props.ui?.description })
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "description", {}, () => [
                                    createTextVNode(toDisplayString(__props.description), 1)
                                  ])
                                ]),
                                _: 3
                              }, 8, ["class"])) : createCommentVNode("", true)
                            ], 2),
                            renderSlot(_ctx.$slots, "actions"),
                            props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                              key: 0,
                              "as-child": ""
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [
                                  props.close ? (openBlock(), createBlock(_sfc_main$8$1, mergeProps({
                                    key: 0,
                                    icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                    color: "neutral",
                                    variant: "ghost",
                                    "aria-label": unref(t)("slideover.close")
                                  }, typeof props.close === "object" ? props.close : {}, {
                                    "data-slot": "close",
                                    class: ui.value.close({ class: props.ui?.close })
                                  }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                ])
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true)
                          ])
                        ], 2)) : createCommentVNode("", true),
                        createVNode("div", {
                          "data-slot": "body",
                          class: ui.value.body({ class: props.ui?.body })
                        }, [
                          renderSlot(_ctx.$slots, "body", { close })
                        ], 2),
                        !!slots.footer ? (openBlock(), createBlock("div", {
                          key: 1,
                          "data-slot": "footer",
                          class: ui.value.footer({ class: props.ui?.footer })
                        }, [
                          renderSlot(_ctx.$slots, "footer", { close })
                        ], 2)) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 2
                  }, 1040, ["data-side", "class", "onAfterEnter", "onAfterLeave"])
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Slideover.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const theme$6 = {
  "slots": {
    "overlay": "fixed inset-0",
    "content": "bg-default divide-y divide-default flex flex-col focus:outline-none",
    "header": "flex items-center gap-1.5 p-4 sm:px-6 min-h-16",
    "wrapper": "",
    "body": "flex-1 p-4 sm:p-6",
    "footer": "flex items-center gap-1.5 p-4 sm:px-6",
    "title": "text-highlighted font-semibold",
    "description": "mt-1 text-muted text-sm",
    "close": "absolute top-4 end-4"
  },
  "variants": {
    "transition": {
      "true": {
        "overlay": "data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]",
        "content": "data-[state=open]:animate-[scale-in_200ms_ease-out] data-[state=closed]:animate-[scale-out_200ms_ease-in]"
      }
    },
    "fullscreen": {
      "true": {
        "content": "inset-0"
      },
      "false": {
        "content": "w-[calc(100vw-2rem)] max-w-lg rounded-lg shadow-lg ring ring-default"
      }
    },
    "overlay": {
      "true": {
        "overlay": "bg-elevated/75"
      }
    },
    "scrollable": {
      "true": {
        "overlay": "overflow-y-auto",
        "content": "relative"
      },
      "false": {
        "content": "fixed",
        "body": "overflow-y-auto"
      }
    }
  },
  "compoundVariants": [
    {
      "scrollable": true,
      "fullscreen": false,
      "class": {
        "overlay": "grid place-items-center p-4 sm:py-8"
      }
    },
    {
      "scrollable": false,
      "fullscreen": false,
      "class": {
        "content": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] overflow-hidden"
      }
    }
  ]
};
const _sfc_main$9 = {
  __name: "UModal",
  __ssrInlineRender: true,
  props: {
    title: { type: String, required: false },
    description: { type: String, required: false },
    content: { type: Object, required: false },
    overlay: { type: Boolean, required: false, default: true },
    scrollable: { type: Boolean, required: false },
    transition: { type: Boolean, required: false, default: true },
    fullscreen: { type: Boolean, required: false },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    close: { type: [Boolean, Object], required: false, default: true },
    closeIcon: { type: null, required: false },
    dismissible: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    open: { type: Boolean, required: false },
    defaultOpen: { type: Boolean, required: false },
    modal: { type: Boolean, required: false, default: true }
  },
  emits: ["after:leave", "after:enter", "close:prevent", "update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "open", "defaultOpen", "modal"), emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => props.content);
    const contentEvents = computed(() => {
      if (!props.dismissible) {
        const events = ["pointerDownOutside", "interactOutside", "escapeKeyDown"];
        return events.reduce((acc, curr) => {
          acc[curr] = (e) => {
            e.preventDefault();
            emits("close:prevent");
          };
          return acc;
        }, {});
      }
      if (props.scrollable) {
        return {
          // FIXME: This is a workaround to prevent the modal from closing when clicking on the scrollbar https://reka-ui.com/docs/components/dialog#scrollable-overlay but it's not working on Mac OS.
          pointerDownOutside: (e) => {
            const originalEvent = e.detail.originalEvent;
            const target = originalEvent.target;
            if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) {
              e.preventDefault();
            }
          }
        };
      }
      return {};
    });
    const [DefineContentTemplate, ReuseContentTemplate] = createReusableTemplate();
    const ui = computed(() => tv({ extend: tv(theme$6), ...appConfig.ui?.modal || {} })({
      transition: props.transition,
      fullscreen: props.fullscreen,
      overlay: props.overlay,
      scrollable: props.scrollable
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogRoot), mergeProps(unref(rootProps), _attrs), {
        default: withCtx(({ open, close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DefineContentTemplate), null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(DialogContent), mergeProps({
                    "data-slot": "content",
                    class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                  }, contentProps.value, {
                    onAfterEnter: ($event) => emits("after:enter"),
                    onAfterLeave: ($event) => emits("after:leave")
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (!!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description))) {
                          _push4(ssrRenderComponent(unref(VisuallyHidden), null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (__props.title || !!slots.title) {
                                  _push5(ssrRenderComponent(unref(DialogTitle), null, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                          _push6(`${ssrInterpolate(__props.title)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(__props.title), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (__props.description || !!slots.description) {
                                  _push5(ssrRenderComponent(unref(DialogDescription), null, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                          _push6(`${ssrInterpolate(__props.description)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(__props.description), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "title", {}, () => [
                                        createTextVNode(toDisplayString(__props.title), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true),
                                  __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "description", {}, () => [
                                        createTextVNode(toDisplayString(__props.description), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        ssrRenderSlot(_ctx.$slots, "content", { close }, () => {
                          if (!!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close)) {
                            _push4(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: props.ui?.header }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "header", { close }, () => {
                              _push4(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: props.ui?.wrapper }))}"${_scopeId3}>`);
                              if (__props.title || !!slots.title) {
                                _push4(ssrRenderComponent(unref(DialogTitle), {
                                  "data-slot": "title",
                                  class: ui.value.title({ class: props.ui?.title })
                                }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                        _push5(`${ssrInterpolate(__props.title)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(__props.title), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              if (__props.description || !!slots.description) {
                                _push4(ssrRenderComponent(unref(DialogDescription), {
                                  "data-slot": "description",
                                  class: ui.value.description({ class: props.ui?.description })
                                }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                        _push5(`${ssrInterpolate(__props.description)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(__props.description), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</div>`);
                              ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push4, _parent4, _scopeId3);
                              if (props.close || !!slots.close) {
                                _push4(ssrRenderComponent(unref(DialogClose), { "as-child": "" }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                        if (props.close) {
                                          _push5(ssrRenderComponent(_sfc_main$8$1, mergeProps({
                                            icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("modal.close")
                                          }, typeof props.close === "object" ? props.close : {}, {
                                            "data-slot": "close",
                                            class: ui.value.close({ class: props.ui?.close })
                                          }), null, _parent5, _scopeId4));
                                        } else {
                                          _push5(`<!---->`);
                                        }
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [
                                          props.close ? (openBlock(), createBlock(_sfc_main$8$1, mergeProps({
                                            key: 0,
                                            icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("modal.close")
                                          }, typeof props.close === "object" ? props.close : {}, {
                                            "data-slot": "close",
                                            class: ui.value.close({ class: props.ui?.close })
                                          }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!!slots.body) {
                            _push4(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: props.ui?.body }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "body", { close }, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!!slots.footer) {
                            _push4(`<div data-slot="footer" class="${ssrRenderClass(ui.value.footer({ class: props.ui?.footer }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "footer", { close }, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        }, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                            default: withCtx(() => [
                              __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createTextVNode(toDisplayString(__props.title), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true),
                              __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "description", {}, () => [
                                    createTextVNode(toDisplayString(__props.description), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true)
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "content", { close }, () => [
                            !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                              key: 0,
                              "data-slot": "header",
                              class: ui.value.header({ class: props.ui?.header })
                            }, [
                              renderSlot(_ctx.$slots, "header", { close }, () => [
                                createVNode("div", {
                                  "data-slot": "wrapper",
                                  class: ui.value.wrapper({ class: props.ui?.wrapper })
                                }, [
                                  __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                    key: 0,
                                    "data-slot": "title",
                                    class: ui.value.title({ class: props.ui?.title })
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "title", {}, () => [
                                        createTextVNode(toDisplayString(__props.title), 1)
                                      ])
                                    ]),
                                    _: 3
                                  }, 8, ["class"])) : createCommentVNode("", true),
                                  __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                    key: 1,
                                    "data-slot": "description",
                                    class: ui.value.description({ class: props.ui?.description })
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "description", {}, () => [
                                        createTextVNode(toDisplayString(__props.description), 1)
                                      ])
                                    ]),
                                    _: 3
                                  }, 8, ["class"])) : createCommentVNode("", true)
                                ], 2),
                                renderSlot(_ctx.$slots, "actions"),
                                props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                  key: 0,
                                  "as-child": ""
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [
                                      props.close ? (openBlock(), createBlock(_sfc_main$8$1, mergeProps({
                                        key: 0,
                                        icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                        color: "neutral",
                                        variant: "ghost",
                                        "aria-label": unref(t)("modal.close")
                                      }, typeof props.close === "object" ? props.close : {}, {
                                        "data-slot": "close",
                                        class: ui.value.close({ class: props.ui?.close })
                                      }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            !!slots.body ? (openBlock(), createBlock("div", {
                              key: 1,
                              "data-slot": "body",
                              class: ui.value.body({ class: props.ui?.body })
                            }, [
                              renderSlot(_ctx.$slots, "body", { close })
                            ], 2)) : createCommentVNode("", true),
                            !!slots.footer ? (openBlock(), createBlock("div", {
                              key: 2,
                              "data-slot": "footer",
                              class: ui.value.footer({ class: props.ui?.footer })
                            }, [
                              renderSlot(_ctx.$slots, "footer", { close })
                            ], 2)) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(DialogContent), mergeProps({
                      "data-slot": "content",
                      class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                    }, contentProps.value, {
                      onAfterEnter: ($event) => emits("after:enter"),
                      onAfterLeave: ($event) => emits("after:leave")
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => [
                        !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                          default: withCtx(() => [
                            __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "title", {}, () => [
                                  createTextVNode(toDisplayString(__props.title), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true),
                            __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "description", {}, () => [
                                  createTextVNode(toDisplayString(__props.description), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true)
                          ]),
                          _: 3
                        })) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "content", { close }, () => [
                          !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                            key: 0,
                            "data-slot": "header",
                            class: ui.value.header({ class: props.ui?.header })
                          }, [
                            renderSlot(_ctx.$slots, "header", { close }, () => [
                              createVNode("div", {
                                "data-slot": "wrapper",
                                class: ui.value.wrapper({ class: props.ui?.wrapper })
                              }, [
                                __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                  key: 0,
                                  "data-slot": "title",
                                  class: ui.value.title({ class: props.ui?.title })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "title", {}, () => [
                                      createTextVNode(toDisplayString(__props.title), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, ["class"])) : createCommentVNode("", true),
                                __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                  key: 1,
                                  "data-slot": "description",
                                  class: ui.value.description({ class: props.ui?.description })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "description", {}, () => [
                                      createTextVNode(toDisplayString(__props.description), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, ["class"])) : createCommentVNode("", true)
                              ], 2),
                              renderSlot(_ctx.$slots, "actions"),
                              props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                                key: 0,
                                "as-child": ""
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [
                                    props.close ? (openBlock(), createBlock(_sfc_main$8$1, mergeProps({
                                      key: 0,
                                      icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                      color: "neutral",
                                      variant: "ghost",
                                      "aria-label": unref(t)("modal.close")
                                    }, typeof props.close === "object" ? props.close : {}, {
                                      "data-slot": "close",
                                      class: ui.value.close({ class: props.ui?.close })
                                    }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                  ])
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          !!slots.body ? (openBlock(), createBlock("div", {
                            key: 1,
                            "data-slot": "body",
                            class: ui.value.body({ class: props.ui?.body })
                          }, [
                            renderSlot(_ctx.$slots, "body", { close })
                          ], 2)) : createCommentVNode("", true),
                          !!slots.footer ? (openBlock(), createBlock("div", {
                            key: 2,
                            "data-slot": "footer",
                            class: ui.value.footer({ class: props.ui?.footer })
                          }, [
                            renderSlot(_ctx.$slots, "footer", { close })
                          ], 2)) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 2
                    }, 1040, ["class", "onAfterEnter", "onAfterLeave"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(DialogTrigger), {
                "as-child": "",
                class: props.class
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(DialogPortal), unref(portalProps), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (__props.scrollable) {
                    _push3(ssrRenderComponent(unref(DialogOverlay), {
                      "data-slot": "overlay",
                      class: ui.value.overlay({ class: props.ui?.overlay })
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(ReuseContentTemplate), null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(ReuseContentTemplate))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!--[-->`);
                    if (__props.overlay) {
                      _push3(ssrRenderComponent(unref(DialogOverlay), {
                        "data-slot": "overlay",
                        class: ui.value.overlay({ class: props.ui?.overlay })
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(unref(ReuseContentTemplate), null, null, _parent3, _scopeId2));
                    _push3(`<!--]-->`);
                  }
                } else {
                  return [
                    __props.scrollable ? (openBlock(), createBlock(unref(DialogOverlay), {
                      key: 0,
                      "data-slot": "overlay",
                      class: ui.value.overlay({ class: props.ui?.overlay })
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ReuseContentTemplate))
                      ]),
                      _: 1
                    }, 8, ["class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      __props.overlay ? (openBlock(), createBlock(unref(DialogOverlay), {
                        key: 0,
                        "data-slot": "overlay",
                        class: ui.value.overlay({ class: props.ui?.overlay })
                      }, null, 8, ["class"])) : createCommentVNode("", true),
                      createVNode(unref(ReuseContentTemplate))
                    ], 64))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DefineContentTemplate), null, {
                default: withCtx(() => [
                  createVNode(unref(DialogContent), mergeProps({
                    "data-slot": "content",
                    class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                  }, contentProps.value, {
                    onAfterEnter: ($event) => emits("after:enter"),
                    onAfterLeave: ($event) => emits("after:leave")
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx(() => [
                      !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                        default: withCtx(() => [
                          __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "title", {}, () => [
                                createTextVNode(toDisplayString(__props.title), 1)
                              ])
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "description", {}, () => [
                                createTextVNode(toDisplayString(__props.description), 1)
                              ])
                            ]),
                            _: 3
                          })) : createCommentVNode("", true)
                        ]),
                        _: 3
                      })) : createCommentVNode("", true),
                      renderSlot(_ctx.$slots, "content", { close }, () => [
                        !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) || (props.close || !!slots.close) ? (openBlock(), createBlock("div", {
                          key: 0,
                          "data-slot": "header",
                          class: ui.value.header({ class: props.ui?.header })
                        }, [
                          renderSlot(_ctx.$slots, "header", { close }, () => [
                            createVNode("div", {
                              "data-slot": "wrapper",
                              class: ui.value.wrapper({ class: props.ui?.wrapper })
                            }, [
                              __props.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                key: 0,
                                "data-slot": "title",
                                class: ui.value.title({ class: props.ui?.title })
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createTextVNode(toDisplayString(__props.title), 1)
                                  ])
                                ]),
                                _: 3
                              }, 8, ["class"])) : createCommentVNode("", true),
                              __props.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                key: 1,
                                "data-slot": "description",
                                class: ui.value.description({ class: props.ui?.description })
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "description", {}, () => [
                                    createTextVNode(toDisplayString(__props.description), 1)
                                  ])
                                ]),
                                _: 3
                              }, 8, ["class"])) : createCommentVNode("", true)
                            ], 2),
                            renderSlot(_ctx.$slots, "actions"),
                            props.close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose), {
                              key: 0,
                              "as-child": ""
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [
                                  props.close ? (openBlock(), createBlock(_sfc_main$8$1, mergeProps({
                                    key: 0,
                                    icon: __props.closeIcon || unref(appConfig).ui.icons.close,
                                    color: "neutral",
                                    variant: "ghost",
                                    "aria-label": unref(t)("modal.close")
                                  }, typeof props.close === "object" ? props.close : {}, {
                                    "data-slot": "close",
                                    class: ui.value.close({ class: props.ui?.close })
                                  }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                ])
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true)
                          ])
                        ], 2)) : createCommentVNode("", true),
                        !!slots.body ? (openBlock(), createBlock("div", {
                          key: 1,
                          "data-slot": "body",
                          class: ui.value.body({ class: props.ui?.body })
                        }, [
                          renderSlot(_ctx.$slots, "body", { close })
                        ], 2)) : createCommentVNode("", true),
                        !!slots.footer ? (openBlock(), createBlock("div", {
                          key: 2,
                          "data-slot": "footer",
                          class: ui.value.footer({ class: props.ui?.footer })
                        }, [
                          renderSlot(_ctx.$slots, "footer", { close })
                        ], 2)) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 2
                  }, 1040, ["class", "onAfterEnter", "onAfterLeave"])
                ]),
                _: 2
              }, 1024),
              !!slots.default ? (openBlock(), createBlock(unref(DialogTrigger), {
                key: 0,
                "as-child": "",
                class: props.class
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1032, ["class"])) : createCommentVNode("", true),
              createVNode(unref(DialogPortal), unref(portalProps), {
                default: withCtx(() => [
                  __props.scrollable ? (openBlock(), createBlock(unref(DialogOverlay), {
                    key: 0,
                    "data-slot": "overlay",
                    class: ui.value.overlay({ class: props.ui?.overlay })
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(ReuseContentTemplate))
                    ]),
                    _: 1
                  }, 8, ["class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                    __props.overlay ? (openBlock(), createBlock(unref(DialogOverlay), {
                      key: 0,
                      "data-slot": "overlay",
                      class: ui.value.overlay({ class: props.ui?.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(ReuseContentTemplate))
                  ], 64))
                ]),
                _: 1
              }, 16)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Modal.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const theme$5 = {
  "slots": {
    "overlay": "fixed inset-0 bg-elevated/75",
    "content": "fixed bg-default ring ring-default flex focus:outline-none",
    "handle": [
      "shrink-0 !bg-accented",
      "transition-opacity"
    ],
    "container": "w-full flex flex-col gap-4 p-4 overflow-y-auto",
    "header": "",
    "title": "text-highlighted font-semibold",
    "description": "mt-1 text-muted text-sm",
    "body": "flex-1",
    "footer": "flex flex-col gap-1.5"
  },
  "variants": {
    "direction": {
      "top": {
        "content": "mb-24 flex-col-reverse",
        "handle": "mb-4"
      },
      "right": {
        "content": "flex-row",
        "handle": "!ml-4"
      },
      "bottom": {
        "content": "mt-24 flex-col",
        "handle": "mt-4"
      },
      "left": {
        "content": "flex-row-reverse",
        "handle": "!mr-4"
      }
    },
    "inset": {
      "true": {
        "content": "rounded-lg after:hidden overflow-hidden [--initial-transform:calc(100%+1.5rem)]"
      }
    },
    "snapPoints": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "direction": [
        "top",
        "bottom"
      ],
      "class": {
        "content": "h-auto max-h-[96%]",
        "handle": "!w-12 !h-1.5 mx-auto"
      }
    },
    {
      "direction": [
        "top",
        "bottom"
      ],
      "snapPoints": true,
      "class": {
        "content": "h-full"
      }
    },
    {
      "direction": [
        "right",
        "left"
      ],
      "class": {
        "content": "w-auto max-w-[calc(100%-2rem)]",
        "handle": "!h-12 !w-1.5 mt-auto mb-auto"
      }
    },
    {
      "direction": [
        "right",
        "left"
      ],
      "snapPoints": true,
      "class": {
        "content": "w-full"
      }
    },
    {
      "direction": "top",
      "inset": true,
      "class": {
        "content": "inset-x-4 top-4"
      }
    },
    {
      "direction": "top",
      "inset": false,
      "class": {
        "content": "inset-x-0 top-0 rounded-b-lg"
      }
    },
    {
      "direction": "bottom",
      "inset": true,
      "class": {
        "content": "inset-x-4 bottom-4"
      }
    },
    {
      "direction": "bottom",
      "inset": false,
      "class": {
        "content": "inset-x-0 bottom-0 rounded-t-lg"
      }
    },
    {
      "direction": "left",
      "inset": true,
      "class": {
        "content": "inset-y-4 left-4"
      }
    },
    {
      "direction": "left",
      "inset": false,
      "class": {
        "content": "inset-y-0 left-0 rounded-r-lg"
      }
    },
    {
      "direction": "right",
      "inset": true,
      "class": {
        "content": "inset-y-4 right-4"
      }
    },
    {
      "direction": "right",
      "inset": false,
      "class": {
        "content": "inset-y-0 right-0 rounded-l-lg"
      }
    }
  ]
};
const _sfc_main$8 = {
  __name: "UDrawer",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    inset: { type: Boolean, required: false },
    content: { type: Object, required: false },
    overlay: { type: Boolean, required: false, default: true },
    handle: { type: Boolean, required: false, default: true },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    nested: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    activeSnapPoint: { type: [Number, String, null], required: false },
    closeThreshold: { type: Number, required: false },
    shouldScaleBackground: { type: Boolean, required: false },
    setBackgroundColorOnScale: { type: Boolean, required: false },
    scrollLockTimeout: { type: Number, required: false },
    fixed: { type: Boolean, required: false },
    dismissible: { type: Boolean, required: false, default: true },
    modal: { type: Boolean, required: false, default: true },
    open: { type: Boolean, required: false },
    defaultOpen: { type: Boolean, required: false },
    direction: { type: String, required: false, default: "bottom" },
    noBodyStyles: { type: Boolean, required: false },
    handleOnly: { type: Boolean, required: false },
    preventScrollRestoration: { type: Boolean, required: false },
    snapPoints: { type: Array, required: false }
  },
  emits: ["close:prevent", "drag", "release", "close", "update:open", "update:activeSnapPoint", "animationEnd"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "activeSnapPoint", "closeThreshold", "shouldScaleBackground", "setBackgroundColorOnScale", "scrollLockTimeout", "fixed", "dismissible", "modal", "open", "defaultOpen", "nested", "direction", "noBodyStyles", "handleOnly", "preventScrollRestoration", "snapPoints"), emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => props.content);
    const contentEvents = computed(() => {
      if (!props.dismissible) {
        const events = ["pointerDownOutside", "interactOutside", "escapeKeyDown"];
        return events.reduce((acc, curr) => {
          acc[curr] = (e) => {
            e.preventDefault();
            emits("close:prevent");
          };
          return acc;
        }, {});
      }
      return {};
    });
    const ui = computed(() => tv({ extend: tv(theme$5), ...appConfig.ui?.drawer || {} })({
      direction: props.direction,
      inset: props.inset,
      snapPoints: props.snapPoints && props.snapPoints.length > 0
    }));
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.nested ? unref(DrawerRootNested) : unref(DrawerRoot)), mergeProps(unref(rootProps), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(DrawerTrigger), {
                "as-child": "",
                class: props.class
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default")
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(DrawerPortal), unref(portalProps), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (__props.overlay) {
                    _push3(ssrRenderComponent(unref(DrawerOverlay), {
                      "data-slot": "overlay",
                      class: ui.value.overlay({ class: props.ui?.overlay })
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(unref(DrawerContent), mergeProps({
                    "data-slot": "content",
                    class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                  }, contentProps.value, toHandlers(contentEvents.value)), {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (__props.handle) {
                          _push4(ssrRenderComponent(unref(DrawerHandle), {
                            "data-slot": "handle",
                            class: ui.value.handle({ class: props.ui?.handle })
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        if (!!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description))) {
                          _push4(ssrRenderComponent(unref(VisuallyHidden), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (__props.title || !!slots.title) {
                                  _push5(ssrRenderComponent(unref(DrawerTitle), null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                          _push6(`${ssrInterpolate(__props.title)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(__props.title), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 3
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (__props.description || !!slots.description) {
                                  _push5(ssrRenderComponent(unref(DrawerDescription), null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                          _push6(`${ssrInterpolate(__props.description)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(__props.description), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 3
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), { key: 0 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "title", {}, () => [
                                        createTextVNode(toDisplayString(__props.title), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true),
                                  __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), { key: 1 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "description", {}, () => [
                                        createTextVNode(toDisplayString(__props.description), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 3
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        ssrRenderSlot(_ctx.$slots, "content", {}, () => {
                          _push4(`<div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: props.ui?.container }))}"${_scopeId3}>`);
                          if (!!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description)) {
                            _push4(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: props.ui?.header }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                              if (__props.title || !!slots.title) {
                                _push4(ssrRenderComponent(unref(DrawerTitle), {
                                  "data-slot": "title",
                                  class: ui.value.title({ class: props.ui?.title })
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                        _push5(`${ssrInterpolate(__props.title)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(__props.title), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 3
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              if (__props.description || !!slots.description) {
                                _push4(ssrRenderComponent(unref(DrawerDescription), {
                                  "data-slot": "description",
                                  class: ui.value.description({ class: props.ui?.description })
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                        _push5(`${ssrInterpolate(__props.description)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(__props.description), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 3
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!!slots.body) {
                            _push4(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: props.ui?.body }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "body", {}, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!!slots.footer) {
                            _push4(`<div data-slot="footer" class="${ssrRenderClass(ui.value.footer({ class: props.ui?.footer }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                        }, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          __props.handle ? (openBlock(), createBlock(unref(DrawerHandle), {
                            key: 0,
                            "data-slot": "handle",
                            class: ui.value.handle({ class: props.ui?.handle })
                          }, null, 8, ["class"])) : createCommentVNode("", true),
                          !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 1 }, {
                            default: withCtx(() => [
                              __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), { key: 0 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createTextVNode(toDisplayString(__props.title), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true),
                              __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), { key: 1 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "description", {}, () => [
                                    createTextVNode(toDisplayString(__props.description), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true)
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "content", {}, () => [
                            createVNode("div", {
                              "data-slot": "container",
                              class: ui.value.container({ class: props.ui?.container })
                            }, [
                              !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                                key: 0,
                                "data-slot": "header",
                                class: ui.value.header({ class: props.ui?.header })
                              }, [
                                renderSlot(_ctx.$slots, "header", {}, () => [
                                  __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), {
                                    key: 0,
                                    "data-slot": "title",
                                    class: ui.value.title({ class: props.ui?.title })
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "title", {}, () => [
                                        createTextVNode(toDisplayString(__props.title), 1)
                                      ])
                                    ]),
                                    _: 3
                                  }, 8, ["class"])) : createCommentVNode("", true),
                                  __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), {
                                    key: 1,
                                    "data-slot": "description",
                                    class: ui.value.description({ class: props.ui?.description })
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "description", {}, () => [
                                        createTextVNode(toDisplayString(__props.description), 1)
                                      ])
                                    ]),
                                    _: 3
                                  }, 8, ["class"])) : createCommentVNode("", true)
                                ])
                              ], 2)) : createCommentVNode("", true),
                              !!slots.body ? (openBlock(), createBlock("div", {
                                key: 1,
                                "data-slot": "body",
                                class: ui.value.body({ class: props.ui?.body })
                              }, [
                                renderSlot(_ctx.$slots, "body")
                              ], 2)) : createCommentVNode("", true),
                              !!slots.footer ? (openBlock(), createBlock("div", {
                                key: 2,
                                "data-slot": "footer",
                                class: ui.value.footer({ class: props.ui?.footer })
                              }, [
                                renderSlot(_ctx.$slots, "footer")
                              ], 2)) : createCommentVNode("", true)
                            ], 2)
                          ])
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    __props.overlay ? (openBlock(), createBlock(unref(DrawerOverlay), {
                      key: 0,
                      "data-slot": "overlay",
                      class: ui.value.overlay({ class: props.ui?.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(DrawerContent), mergeProps({
                      "data-slot": "content",
                      class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                    }, contentProps.value, toHandlers(contentEvents.value)), {
                      default: withCtx(() => [
                        __props.handle ? (openBlock(), createBlock(unref(DrawerHandle), {
                          key: 0,
                          "data-slot": "handle",
                          class: ui.value.handle({ class: props.ui?.handle })
                        }, null, 8, ["class"])) : createCommentVNode("", true),
                        !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 1 }, {
                          default: withCtx(() => [
                            __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), { key: 0 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "title", {}, () => [
                                  createTextVNode(toDisplayString(__props.title), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true),
                            __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), { key: 1 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "description", {}, () => [
                                  createTextVNode(toDisplayString(__props.description), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true)
                          ]),
                          _: 3
                        })) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "content", {}, () => [
                          createVNode("div", {
                            "data-slot": "container",
                            class: ui.value.container({ class: props.ui?.container })
                          }, [
                            !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                              key: 0,
                              "data-slot": "header",
                              class: ui.value.header({ class: props.ui?.header })
                            }, [
                              renderSlot(_ctx.$slots, "header", {}, () => [
                                __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), {
                                  key: 0,
                                  "data-slot": "title",
                                  class: ui.value.title({ class: props.ui?.title })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "title", {}, () => [
                                      createTextVNode(toDisplayString(__props.title), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, ["class"])) : createCommentVNode("", true),
                                __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), {
                                  key: 1,
                                  "data-slot": "description",
                                  class: ui.value.description({ class: props.ui?.description })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "description", {}, () => [
                                      createTextVNode(toDisplayString(__props.description), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, ["class"])) : createCommentVNode("", true)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            !!slots.body ? (openBlock(), createBlock("div", {
                              key: 1,
                              "data-slot": "body",
                              class: ui.value.body({ class: props.ui?.body })
                            }, [
                              renderSlot(_ctx.$slots, "body")
                            ], 2)) : createCommentVNode("", true),
                            !!slots.footer ? (openBlock(), createBlock("div", {
                              key: 2,
                              "data-slot": "footer",
                              class: ui.value.footer({ class: props.ui?.footer })
                            }, [
                              renderSlot(_ctx.$slots, "footer")
                            ], 2)) : createCommentVNode("", true)
                          ], 2)
                        ])
                      ]),
                      _: 3
                    }, 16, ["class"])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (openBlock(), createBlock(unref(DrawerTrigger), {
                key: 0,
                "as-child": "",
                class: props.class
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 8, ["class"])) : createCommentVNode("", true),
              createVNode(unref(DrawerPortal), unref(portalProps), {
                default: withCtx(() => [
                  __props.overlay ? (openBlock(), createBlock(unref(DrawerOverlay), {
                    key: 0,
                    "data-slot": "overlay",
                    class: ui.value.overlay({ class: props.ui?.overlay })
                  }, null, 8, ["class"])) : createCommentVNode("", true),
                  createVNode(unref(DrawerContent), mergeProps({
                    "data-slot": "content",
                    class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                  }, contentProps.value, toHandlers(contentEvents.value)), {
                    default: withCtx(() => [
                      __props.handle ? (openBlock(), createBlock(unref(DrawerHandle), {
                        key: 0,
                        "data-slot": "handle",
                        class: ui.value.handle({ class: props.ui?.handle })
                      }, null, 8, ["class"])) : createCommentVNode("", true),
                      !!slots.content && (__props.title || !!slots.title || (__props.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 1 }, {
                        default: withCtx(() => [
                          __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), { key: 0 }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "title", {}, () => [
                                createTextVNode(toDisplayString(__props.title), 1)
                              ])
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), { key: 1 }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "description", {}, () => [
                                createTextVNode(toDisplayString(__props.description), 1)
                              ])
                            ]),
                            _: 3
                          })) : createCommentVNode("", true)
                        ]),
                        _: 3
                      })) : createCommentVNode("", true),
                      renderSlot(_ctx.$slots, "content", {}, () => [
                        createVNode("div", {
                          "data-slot": "container",
                          class: ui.value.container({ class: props.ui?.container })
                        }, [
                          !!slots.header || (__props.title || !!slots.title) || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                            key: 0,
                            "data-slot": "header",
                            class: ui.value.header({ class: props.ui?.header })
                          }, [
                            renderSlot(_ctx.$slots, "header", {}, () => [
                              __props.title || !!slots.title ? (openBlock(), createBlock(unref(DrawerTitle), {
                                key: 0,
                                "data-slot": "title",
                                class: ui.value.title({ class: props.ui?.title })
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createTextVNode(toDisplayString(__props.title), 1)
                                  ])
                                ]),
                                _: 3
                              }, 8, ["class"])) : createCommentVNode("", true),
                              __props.description || !!slots.description ? (openBlock(), createBlock(unref(DrawerDescription), {
                                key: 1,
                                "data-slot": "description",
                                class: ui.value.description({ class: props.ui?.description })
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "description", {}, () => [
                                    createTextVNode(toDisplayString(__props.description), 1)
                                  ])
                                ]),
                                _: 3
                              }, 8, ["class"])) : createCommentVNode("", true)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          !!slots.body ? (openBlock(), createBlock("div", {
                            key: 1,
                            "data-slot": "body",
                            class: ui.value.body({ class: props.ui?.body })
                          }, [
                            renderSlot(_ctx.$slots, "body")
                          ], 2)) : createCommentVNode("", true),
                          !!slots.footer ? (openBlock(), createBlock("div", {
                            key: 2,
                            "data-slot": "footer",
                            class: ui.value.footer({ class: props.ui?.footer })
                          }, [
                            renderSlot(_ctx.$slots, "footer")
                          ], 2)) : createCommentVNode("", true)
                        ], 2)
                      ])
                    ]),
                    _: 3
                  }, 16, ["class"])
                ]),
                _: 3
              }, 16)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Drawer.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const theme$4 = {
  "slots": {
    "root": "bg-default/75 backdrop-blur border-b border-default h-(--ui-header-height) sticky top-0 z-50",
    "container": "flex items-center justify-between gap-3 h-full",
    "left": "lg:flex-1 flex items-center gap-1.5",
    "center": "hidden lg:flex",
    "right": "flex items-center justify-end lg:flex-1 gap-1.5",
    "title": "shrink-0 font-bold text-xl text-highlighted flex items-end gap-1.5",
    "toggle": "lg:hidden",
    "content": "lg:hidden",
    "overlay": "lg:hidden",
    "header": "px-4 sm:px-6 h-(--ui-header-height) shrink-0 flex items-center justify-between gap-3",
    "body": "p-4 sm:p-6 overflow-y-auto"
  },
  "variants": {
    "toggleSide": {
      "left": {
        "toggle": "-ms-1.5"
      },
      "right": {
        "toggle": "-me-1.5"
      }
    }
  }
};
const _sfc_main$7 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UHeader",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: { type: null, required: false, default: "header" },
    title: { type: String, required: false, default: "Nuxt UI" },
    to: { type: String, required: false, default: "/" },
    mode: { type: null, required: false, default: "modal" },
    menu: { type: null, required: false },
    toggle: { type: [Boolean, Object], required: false, default: true },
    toggleSide: { type: String, required: false, default: "right" },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  }, {
    "open": { type: Boolean, ...{ default: false } },
    "openModifiers": {}
  }),
  emits: ["update:open"],
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const open = useModel(__props, "open", { type: Boolean, ...{ default: false } });
    const route = useRoute();
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const [DefineLeftTemplate, ReuseLeftTemplate] = createReusableTemplate();
    const [DefineRightTemplate, ReuseRightTemplate] = createReusableTemplate();
    const [DefineToggleTemplate, ReuseToggleTemplate] = createReusableTemplate();
    const ariaLabel = computed(() => {
      const slotText = slots.title && getSlotChildrenText(slots.title());
      return (slotText || props.title || "Nuxt UI").trim();
    });
    watch(() => route.fullPath, () => {
      open.value = false;
    });
    const ui = computed(() => tv({ extend: tv(theme$4), ...appConfig.ui?.header || {} })());
    const Menu = computed(() => ({
      slideover: _sfc_main$a,
      modal: _sfc_main$9,
      drawer: _sfc_main$8
    })[props.mode]);
    const menuProps = toRef(() => defu(props.menu, {
      content: {
        onOpenAutoFocus: (e) => e.preventDefault()
      }
    }, props.mode === "modal" ? { fullscreen: true, transition: false } : {}));
    function toggleOpen() {
      open.value = !open.value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineToggleTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "toggle", {
              open: open.value,
              toggle: toggleOpen,
              ui: ui.value
            }, () => {
              if (__props.toggle) {
                _push2(ssrRenderComponent(_sfc_main$8$1, mergeProps({
                  color: "neutral",
                  variant: "ghost",
                  "aria-label": open.value ? unref(t)("header.close") : unref(t)("header.open"),
                  icon: open.value ? unref(appConfig).ui.icons.close : unref(appConfig).ui.icons.menu
                }, typeof __props.toggle === "object" ? __props.toggle : {}, {
                  "data-slot": "toggle",
                  class: ui.value.toggle({ class: props.ui?.toggle, toggleSide: __props.toggleSide }),
                  onClick: toggleOpen
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "toggle", {
                open: open.value,
                toggle: toggleOpen,
                ui: ui.value
              }, () => [
                __props.toggle ? (openBlock(), createBlock(_sfc_main$8$1, mergeProps({
                  key: 0,
                  color: "neutral",
                  variant: "ghost",
                  "aria-label": open.value ? unref(t)("header.close") : unref(t)("header.open"),
                  icon: open.value ? unref(appConfig).ui.icons.close : unref(appConfig).ui.icons.menu
                }, typeof __props.toggle === "object" ? __props.toggle : {}, {
                  "data-slot": "toggle",
                  class: ui.value.toggle({ class: props.ui?.toggle, toggleSide: __props.toggleSide }),
                  onClick: toggleOpen
                }), null, 16, ["aria-label", "icon", "class"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(DefineLeftTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-slot="left" class="${ssrRenderClass(ui.value.left({ class: props.ui?.left }))}"${_scopeId}>`);
            if (__props.toggleSide === "left") {
              _push2(ssrRenderComponent(unref(ReuseToggleTemplate), null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "left", {}, () => {
              _push2(ssrRenderComponent(_sfc_main$9$1, {
                to: __props.to,
                "aria-label": ariaLabel.value,
                "data-slot": "title",
                class: ui.value.title({ class: props.ui?.title })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                      _push3(`${ssrInterpolate(__props.title)}`);
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "title", {}, () => [
                        createTextVNode(toDisplayString(__props.title), 1)
                      ])
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                "data-slot": "left",
                class: ui.value.left({ class: props.ui?.left })
              }, [
                __props.toggleSide === "left" ? (openBlock(), createBlock(unref(ReuseToggleTemplate), { key: 0 })) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "left", {}, () => [
                  createVNode(_sfc_main$9$1, {
                    to: __props.to,
                    "aria-label": ariaLabel.value,
                    "data-slot": "title",
                    class: ui.value.title({ class: props.ui?.title })
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "title", {}, () => [
                        createTextVNode(toDisplayString(__props.title), 1)
                      ])
                    ]),
                    _: 3
                  }, 8, ["to", "aria-label", "class"])
                ])
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(DefineRightTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-slot="right" class="${ssrRenderClass(ui.value.right({ class: props.ui?.right }))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "right", {}, null, _push2, _parent2, _scopeId);
            if (__props.toggleSide === "right") {
              _push2(ssrRenderComponent(unref(ReuseToggleTemplate), null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                "data-slot": "right",
                class: ui.value.right({ class: props.ui?.right })
              }, [
                renderSlot(_ctx.$slots, "right"),
                __props.toggleSide === "right" ? (openBlock(), createBlock(unref(ReuseToggleTemplate), { key: 0 })) : createCommentVNode("", true)
              ], 2)
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
            ssrRenderSlot(_ctx.$slots, "top", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(_sfc_main$1$1, {
              "data-slot": "container",
              class: ui.value.container({ class: props.ui?.container })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ReuseLeftTemplate), null, null, _parent3, _scopeId2));
                  _push3(`<div data-slot="center" class="${ssrRenderClass(ui.value.center({ class: props.ui?.center }))}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(unref(ReuseRightTemplate), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ReuseLeftTemplate)),
                    createVNode("div", {
                      "data-slot": "center",
                      class: ui.value.center({ class: props.ui?.center })
                    }, [
                      renderSlot(_ctx.$slots, "default")
                    ], 2),
                    createVNode(unref(ReuseRightTemplate))
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "top"),
              createVNode(_sfc_main$1$1, {
                "data-slot": "container",
                class: ui.value.container({ class: props.ui?.container })
              }, {
                default: withCtx(() => [
                  createVNode(unref(ReuseLeftTemplate)),
                  createVNode("div", {
                    "data-slot": "center",
                    class: ui.value.center({ class: props.ui?.center })
                  }, [
                    renderSlot(_ctx.$slots, "default")
                  ], 2),
                  createVNode(unref(ReuseRightTemplate))
                ]),
                _: 3
              }, 8, ["class"]),
              renderSlot(_ctx.$slots, "bottom")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(Menu), mergeProps({
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event,
        title: unref(t)("header.title"),
        description: unref(t)("header.description")
      }, menuProps.value, {
        ui: {
          overlay: ui.value.overlay({ class: props.ui?.overlay }),
          content: ui.value.content({ class: props.ui?.content })
        }
      }), {
        content: withCtx((contentData, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "content", contentData, () => {
              if (__props.mode !== "drawer") {
                _push2(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: props.ui?.header }))}"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(ReuseLeftTemplate), null, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(unref(ReuseRightTemplate), null, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: props.ui?.body }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "body", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "content", contentData, () => [
                __props.mode !== "drawer" ? (openBlock(), createBlock("div", {
                  key: 0,
                  "data-slot": "header",
                  class: ui.value.header({ class: props.ui?.header })
                }, [
                  createVNode(unref(ReuseLeftTemplate)),
                  createVNode(unref(ReuseRightTemplate))
                ], 2)) : createCommentVNode("", true),
                createVNode("div", {
                  "data-slot": "body",
                  class: ui.value.body({ class: props.ui?.body })
                }, [
                  renderSlot(_ctx.$slots, "body")
                ], 2)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Header.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const theme$3 = {
  "slots": {
    "content": "bg-default shadow-lg rounded-md ring ring-default data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-popover-content-transform-origin) focus:outline-none pointer-events-auto",
    "arrow": "fill-default"
  }
};
const _sfc_main$6 = {
  __name: "UPopover",
  __ssrInlineRender: true,
  props: {
    mode: { type: null, required: false, default: "click" },
    content: { type: Object, required: false },
    arrow: { type: [Boolean, Object], required: false },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    reference: { type: null, required: false },
    dismissible: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    defaultOpen: { type: Boolean, required: false },
    open: { type: Boolean, required: false },
    modal: { type: Boolean, required: false },
    openDelay: { type: Number, required: false, default: 0 },
    closeDelay: { type: Number, required: false, default: 0 }
  },
  emits: ["close:prevent", "update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const pick = props.mode === "hover" ? reactivePick(props, "defaultOpen", "open", "openDelay", "closeDelay") : reactivePick(props, "defaultOpen", "open", "modal");
    const rootProps = useForwardPropsEmits(pick, emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => defu(props.content, { side: "bottom", sideOffset: 8, collisionPadding: 8 }));
    const contentEvents = computed(() => {
      if (!props.dismissible) {
        const events = ["pointerDownOutside", "interactOutside", "escapeKeyDown"];
        return events.reduce((acc, curr) => {
          acc[curr] = (e) => {
            e.preventDefault();
            emits("close:prevent");
          };
          return acc;
        }, {});
      }
      return {};
    });
    const arrowProps = toRef(() => props.arrow);
    const ui = computed(() => tv({ extend: tv(theme$3), ...appConfig.ui?.popover || {} })({
      side: contentProps.value.side
    }));
    const Component = computed(() => props.mode === "hover" ? HoverCard : Popover);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Component).Root, mergeProps(unref(rootProps), _attrs), {
        default: withCtx(({ open, close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default || !!__props.reference) {
              _push2(ssrRenderComponent(unref(Component).Trigger, {
                "as-child": "",
                reference: __props.reference,
                class: props.class
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if ("Anchor" in Component.value && !!slots.anchor) {
              _push2(ssrRenderComponent(unref(Component).Anchor, { "as-child": "" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "anchor", close ? { close } : {}, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "anchor", close ? { close } : {})
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(Component).Portal, unref(portalProps), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Component).Content, mergeProps(contentProps.value, {
                    "data-slot": "content",
                    class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "content", close ? { close } : {}, null, _push4, _parent4, _scopeId3);
                        if (!!__props.arrow) {
                          _push4(ssrRenderComponent(unref(Component).Arrow, mergeProps(arrowProps.value, {
                            "data-slot": "arrow",
                            class: ui.value.arrow({ class: props.ui?.arrow })
                          }), null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "content", close ? { close } : {}),
                          !!__props.arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                            "data-slot": "arrow",
                            class: ui.value.arrow({ class: props.ui?.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Component).Content, mergeProps(contentProps.value, {
                      "data-slot": "content",
                      class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "content", close ? { close } : {}),
                        !!__props.arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                          "data-slot": "arrow",
                          class: ui.value.arrow({ class: props.ui?.arrow })
                        }), null, 16, ["class"])) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1040, ["class"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default || !!__props.reference ? (openBlock(), createBlock(unref(Component).Trigger, {
                key: 0,
                "as-child": "",
                reference: __props.reference,
                class: props.class
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1032, ["reference", "class"])) : createCommentVNode("", true),
              "Anchor" in Component.value && !!slots.anchor ? (openBlock(), createBlock(unref(Component).Anchor, {
                key: 1,
                "as-child": ""
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "anchor", close ? { close } : {})
                ]),
                _: 2
              }, 1024)) : createCommentVNode("", true),
              createVNode(unref(Component).Portal, unref(portalProps), {
                default: withCtx(() => [
                  createVNode(unref(Component).Content, mergeProps(contentProps.value, {
                    "data-slot": "content",
                    class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "content", close ? { close } : {}),
                      !!__props.arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                        "data-slot": "arrow",
                        class: ui.value.arrow({ class: props.ui?.arrow })
                      }), null, 16, ["class"])) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1040, ["class"])
                ]),
                _: 2
              }, 1040)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Popover.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const theme$2 = {
  "slots": {
    "content": "flex items-center gap-1 bg-default text-highlighted shadow-sm rounded-sm ring ring-default h-6 px-2.5 py-1 text-xs select-none data-[state=delayed-open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-tooltip-content-transform-origin) pointer-events-auto",
    "arrow": "fill-default",
    "text": "truncate",
    "kbds": "hidden lg:inline-flex items-center shrink-0 gap-0.5 not-first-of-type:before:content-['·'] not-first-of-type:before:me-0.5",
    "kbdsSize": "sm"
  }
};
const _sfc_main$5 = {
  __name: "UTooltip",
  __ssrInlineRender: true,
  props: {
    text: { type: String, required: false },
    kbds: { type: Array, required: false },
    content: { type: Object, required: false },
    arrow: { type: [Boolean, Object], required: false },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    reference: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    defaultOpen: { type: Boolean, required: false },
    open: { type: Boolean, required: false },
    delayDuration: { type: Number, required: false },
    disableHoverableContent: { type: Boolean, required: false },
    disableClosingTrigger: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    ignoreNonKeyboardFocus: { type: Boolean, required: false }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "defaultOpen", "open", "delayDuration", "disableHoverableContent", "disableClosingTrigger", "ignoreNonKeyboardFocus"), emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => defu(props.content, { side: "bottom", sideOffset: 8, collisionPadding: 8 }));
    const arrowProps = toRef(() => props.arrow);
    const ui = computed(() => tv({ extend: tv(theme$2), ...appConfig.ui?.tooltip || {} })({
      side: contentProps.value.side
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipRoot), mergeProps(unref(rootProps), {
        disabled: !(__props.text || __props.kbds?.length || !!slots.content) || props.disabled
      }, _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default || !!__props.reference) {
              _push2(ssrRenderComponent(unref(TooltipTrigger), mergeProps(_ctx.$attrs, {
                "as-child": "",
                reference: __props.reference,
                class: props.class
              }), {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(TooltipPortal), unref(portalProps), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TooltipContent), mergeProps(contentProps.value, {
                    "data-slot": "content",
                    class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                  }), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "content", { ui: ui.value }, () => {
                          if (__props.text) {
                            _push4(`<span data-slot="text" class="${ssrRenderClass(ui.value.text({ class: props.ui?.text }))}"${_scopeId3}>${ssrInterpolate(__props.text)}</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (__props.kbds?.length) {
                            _push4(`<span data-slot="kbds" class="${ssrRenderClass(ui.value.kbds({ class: props.ui?.kbds }))}"${_scopeId3}><!--[-->`);
                            ssrRenderList(__props.kbds, (kbd, index) => {
                              _push4(ssrRenderComponent(_sfc_main$d, mergeProps({
                                key: index,
                                size: props.ui?.kbdsSize || ui.value.kbdsSize()
                              }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, _parent4, _scopeId3));
                            });
                            _push4(`<!--]--></span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        }, _push4, _parent4, _scopeId3);
                        if (!!__props.arrow) {
                          _push4(ssrRenderComponent(unref(TooltipArrow), mergeProps(arrowProps.value, {
                            "data-slot": "arrow",
                            class: ui.value.arrow({ class: props.ui?.arrow })
                          }), null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "content", { ui: ui.value }, () => [
                            __props.text ? (openBlock(), createBlock("span", {
                              key: 0,
                              "data-slot": "text",
                              class: ui.value.text({ class: props.ui?.text })
                            }, toDisplayString(__props.text), 3)) : createCommentVNode("", true),
                            __props.kbds?.length ? (openBlock(), createBlock("span", {
                              key: 1,
                              "data-slot": "kbds",
                              class: ui.value.kbds({ class: props.ui?.kbds })
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.kbds, (kbd, index) => {
                                return openBlock(), createBlock(_sfc_main$d, mergeProps({
                                  key: index,
                                  size: props.ui?.kbdsSize || ui.value.kbdsSize()
                                }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                              }), 128))
                            ], 2)) : createCommentVNode("", true)
                          ]),
                          !!__props.arrow ? (openBlock(), createBlock(unref(TooltipArrow), mergeProps({ key: 0 }, arrowProps.value, {
                            "data-slot": "arrow",
                            class: ui.value.arrow({ class: props.ui?.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(TooltipContent), mergeProps(contentProps.value, {
                      "data-slot": "content",
                      class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                    }), {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "content", { ui: ui.value }, () => [
                          __props.text ? (openBlock(), createBlock("span", {
                            key: 0,
                            "data-slot": "text",
                            class: ui.value.text({ class: props.ui?.text })
                          }, toDisplayString(__props.text), 3)) : createCommentVNode("", true),
                          __props.kbds?.length ? (openBlock(), createBlock("span", {
                            key: 1,
                            "data-slot": "kbds",
                            class: ui.value.kbds({ class: props.ui?.kbds })
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.kbds, (kbd, index) => {
                              return openBlock(), createBlock(_sfc_main$d, mergeProps({
                                key: index,
                                size: props.ui?.kbdsSize || ui.value.kbdsSize()
                              }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                            }), 128))
                          ], 2)) : createCommentVNode("", true)
                        ]),
                        !!__props.arrow ? (openBlock(), createBlock(unref(TooltipArrow), mergeProps({ key: 0 }, arrowProps.value, {
                          "data-slot": "arrow",
                          class: ui.value.arrow({ class: props.ui?.arrow })
                        }), null, 16, ["class"])) : createCommentVNode("", true)
                      ]),
                      _: 3
                    }, 16, ["class"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default || !!__props.reference ? (openBlock(), createBlock(unref(TooltipTrigger), mergeProps({ key: 0 }, _ctx.$attrs, {
                "as-child": "",
                reference: __props.reference,
                class: props.class
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1040, ["reference", "class"])) : createCommentVNode("", true),
              createVNode(unref(TooltipPortal), unref(portalProps), {
                default: withCtx(() => [
                  createVNode(unref(TooltipContent), mergeProps(contentProps.value, {
                    "data-slot": "content",
                    class: ui.value.content({ class: [!slots.default && props.class, props.ui?.content] })
                  }), {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "content", { ui: ui.value }, () => [
                        __props.text ? (openBlock(), createBlock("span", {
                          key: 0,
                          "data-slot": "text",
                          class: ui.value.text({ class: props.ui?.text })
                        }, toDisplayString(__props.text), 3)) : createCommentVNode("", true),
                        __props.kbds?.length ? (openBlock(), createBlock("span", {
                          key: 1,
                          "data-slot": "kbds",
                          class: ui.value.kbds({ class: props.ui?.kbds })
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.kbds, (kbd, index) => {
                            return openBlock(), createBlock(_sfc_main$d, mergeProps({
                              key: index,
                              size: props.ui?.kbdsSize || ui.value.kbdsSize()
                            }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                          }), 128))
                        ], 2)) : createCommentVNode("", true)
                      ]),
                      !!__props.arrow ? (openBlock(), createBlock(unref(TooltipArrow), mergeProps({ key: 0 }, arrowProps.value, {
                        "data-slot": "arrow",
                        class: ui.value.arrow({ class: props.ui?.arrow })
                      }), null, 16, ["class"])) : createCommentVNode("", true)
                    ]),
                    _: 3
                  }, 16, ["class"])
                ]),
                _: 3
              }, 16)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Tooltip.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const theme$1 = {
  "slots": {
    "root": "relative flex gap-1.5 [&>div]:min-w-0",
    "list": "isolate min-w-0",
    "label": "w-full flex items-center gap-1.5 font-semibold text-xs/5 text-highlighted px-2.5 py-1.5",
    "item": "min-w-0",
    "link": "group relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2",
    "linkLeadingIcon": "shrink-0 size-5",
    "linkLeadingAvatar": "shrink-0",
    "linkLeadingAvatarSize": "2xs",
    "linkTrailing": "group ms-auto inline-flex gap-1.5 items-center",
    "linkTrailingBadge": "shrink-0",
    "linkTrailingBadgeSize": "sm",
    "linkTrailingIcon": "size-5 transform shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200",
    "linkLabel": "truncate",
    "linkLabelExternalIcon": "inline-block size-3 align-top text-dimmed",
    "childList": "isolate",
    "childLabel": "text-xs text-highlighted",
    "childItem": "",
    "childLink": "group relative size-full flex items-start text-start text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2",
    "childLinkWrapper": "min-w-0",
    "childLinkIcon": "size-5 shrink-0",
    "childLinkLabel": "truncate",
    "childLinkLabelExternalIcon": "inline-block size-3 align-top text-dimmed",
    "childLinkDescription": "text-muted",
    "separator": "px-2 h-px bg-border",
    "viewportWrapper": "absolute top-full left-0 flex w-full",
    "viewport": "relative overflow-hidden bg-default shadow-lg rounded-md ring ring-default h-(--reka-navigation-menu-viewport-height) w-full transition-[width,height,left] duration-200 origin-[top_center] data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] z-[1]",
    "content": "",
    "indicator": "absolute data-[state=visible]:animate-[fade-in_100ms_ease-out] data-[state=hidden]:animate-[fade-out_100ms_ease-in] data-[state=hidden]:opacity-0 bottom-0 z-[2] w-(--reka-navigation-menu-indicator-size) translate-x-(--reka-navigation-menu-indicator-position) flex h-2.5 items-end justify-center overflow-hidden transition-[translate,width] duration-200",
    "arrow": "relative top-[50%] size-2.5 rotate-45 border border-default bg-default z-[1] rounded-xs"
  },
  "variants": {
    "color": {
      "primary": {
        "link": "focus-visible:before:ring-primary",
        "childLink": "focus-visible:before:ring-primary"
      },
      "secondary": {
        "link": "focus-visible:before:ring-secondary",
        "childLink": "focus-visible:before:ring-secondary"
      },
      "success": {
        "link": "focus-visible:before:ring-success",
        "childLink": "focus-visible:before:ring-success"
      },
      "info": {
        "link": "focus-visible:before:ring-info",
        "childLink": "focus-visible:before:ring-info"
      },
      "warning": {
        "link": "focus-visible:before:ring-warning",
        "childLink": "focus-visible:before:ring-warning"
      },
      "error": {
        "link": "focus-visible:before:ring-error",
        "childLink": "focus-visible:before:ring-error"
      },
      "neutral": {
        "link": "focus-visible:before:ring-inverted",
        "childLink": "focus-visible:before:ring-inverted"
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
    "variant": {
      "pill": "",
      "link": ""
    },
    "orientation": {
      "horizontal": {
        "root": "items-center justify-between",
        "list": "flex items-center",
        "item": "py-2",
        "link": "px-2.5 py-1.5 before:inset-x-px before:inset-y-0",
        "childList": "grid p-2",
        "childLink": "px-3 py-2 gap-2 before:inset-x-px before:inset-y-0",
        "childLinkLabel": "font-medium",
        "content": "absolute top-0 left-0 w-full max-h-[70vh] overflow-y-auto"
      },
      "vertical": {
        "root": "flex-col",
        "link": "flex-row px-2.5 py-1.5 before:inset-y-px before:inset-x-0",
        "childLabel": "px-1.5 py-0.5",
        "childLink": "p-1.5 gap-1.5 before:inset-y-px before:inset-x-0"
      }
    },
    "contentOrientation": {
      "horizontal": {
        "viewportWrapper": "justify-center",
        "content": "data-[motion=from-start]:animate-[enter-from-left_200ms_ease] data-[motion=from-end]:animate-[enter-from-right_200ms_ease] data-[motion=to-start]:animate-[exit-to-left_200ms_ease] data-[motion=to-end]:animate-[exit-to-right_200ms_ease]"
      },
      "vertical": {
        "viewport": "sm:w-(--reka-navigation-menu-viewport-width) left-(--reka-navigation-menu-viewport-left)"
      }
    },
    "active": {
      "true": {
        "childLink": "before:bg-elevated text-highlighted",
        "childLinkIcon": "text-default"
      },
      "false": {
        "link": "text-muted",
        "linkLeadingIcon": "text-dimmed",
        "childLink": [
          "hover:before:bg-elevated/50 text-default hover:text-highlighted",
          "transition-colors before:transition-colors"
        ],
        "childLinkIcon": [
          "text-dimmed group-hover:text-default",
          "transition-colors"
        ]
      }
    },
    "disabled": {
      "true": {
        "link": "cursor-not-allowed opacity-75"
      }
    },
    "highlight": {
      "true": ""
    },
    "level": {
      "true": ""
    },
    "collapsed": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "contentOrientation": "horizontal",
      "class": {
        "childList": "grid-cols-2 gap-2"
      }
    },
    {
      "orientation": "horizontal",
      "contentOrientation": "vertical",
      "class": {
        "childList": "gap-1",
        "content": "w-60"
      }
    },
    {
      "orientation": "vertical",
      "collapsed": false,
      "class": {
        "childList": "ms-5 border-s border-default",
        "childItem": "ps-1.5 -ms-px",
        "content": "data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden"
      }
    },
    {
      "orientation": "vertical",
      "collapsed": true,
      "class": {
        "link": "px-1.5",
        "linkLabel": "hidden",
        "linkTrailing": "hidden",
        "content": "shadow-sm rounded-sm min-h-6 p-1"
      }
    },
    {
      "orientation": "horizontal",
      "highlight": true,
      "class": {
        "link": [
          "after:absolute after:-bottom-2 after:inset-x-2.5 after:block after:h-px after:rounded-full",
          "after:transition-colors"
        ]
      }
    },
    {
      "orientation": "vertical",
      "highlight": true,
      "level": true,
      "class": {
        "link": [
          "after:absolute after:-start-1.5 after:inset-y-0.5 after:block after:w-px after:rounded-full",
          "after:transition-colors"
        ]
      }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "pill",
      "class": {
        "link": [
          "hover:text-highlighted hover:before:bg-elevated/50",
          "transition-colors before:transition-colors"
        ],
        "linkLeadingIcon": [
          "group-hover:text-default",
          "transition-colors"
        ]
      }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "pill",
      "orientation": "horizontal",
      "class": {
        "link": "data-[state=open]:text-highlighted",
        "linkLeadingIcon": "group-data-[state=open]:text-default"
      }
    },
    {
      "disabled": false,
      "variant": "pill",
      "highlight": true,
      "orientation": "horizontal",
      "class": {
        "link": "data-[state=open]:before:bg-elevated/50"
      }
    },
    {
      "disabled": false,
      "variant": "pill",
      "highlight": false,
      "active": false,
      "orientation": "horizontal",
      "class": {
        "link": "data-[state=open]:before:bg-elevated/50"
      }
    },
    {
      "color": "primary",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-primary",
        "linkLeadingIcon": "text-primary group-data-[state=open]:text-primary"
      }
    },
    {
      "color": "secondary",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-secondary",
        "linkLeadingIcon": "text-secondary group-data-[state=open]:text-secondary"
      }
    },
    {
      "color": "success",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-success",
        "linkLeadingIcon": "text-success group-data-[state=open]:text-success"
      }
    },
    {
      "color": "info",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-info",
        "linkLeadingIcon": "text-info group-data-[state=open]:text-info"
      }
    },
    {
      "color": "warning",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-warning",
        "linkLeadingIcon": "text-warning group-data-[state=open]:text-warning"
      }
    },
    {
      "color": "error",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-error",
        "linkLeadingIcon": "text-error group-data-[state=open]:text-error"
      }
    },
    {
      "color": "neutral",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-highlighted",
        "linkLeadingIcon": "text-highlighted group-data-[state=open]:text-highlighted"
      }
    },
    {
      "variant": "pill",
      "active": true,
      "highlight": false,
      "class": {
        "link": "before:bg-elevated"
      }
    },
    {
      "variant": "pill",
      "active": true,
      "highlight": true,
      "disabled": false,
      "class": {
        "link": [
          "hover:before:bg-elevated/50",
          "before:transition-colors"
        ]
      }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "link",
      "class": {
        "link": [
          "hover:text-highlighted",
          "transition-colors"
        ],
        "linkLeadingIcon": [
          "group-hover:text-default",
          "transition-colors"
        ]
      }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "link",
      "orientation": "horizontal",
      "class": {
        "link": "data-[state=open]:text-highlighted",
        "linkLeadingIcon": "group-data-[state=open]:text-default"
      }
    },
    {
      "color": "primary",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-primary",
        "linkLeadingIcon": "text-primary group-data-[state=open]:text-primary"
      }
    },
    {
      "color": "secondary",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-secondary",
        "linkLeadingIcon": "text-secondary group-data-[state=open]:text-secondary"
      }
    },
    {
      "color": "success",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-success",
        "linkLeadingIcon": "text-success group-data-[state=open]:text-success"
      }
    },
    {
      "color": "info",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-info",
        "linkLeadingIcon": "text-info group-data-[state=open]:text-info"
      }
    },
    {
      "color": "warning",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-warning",
        "linkLeadingIcon": "text-warning group-data-[state=open]:text-warning"
      }
    },
    {
      "color": "error",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-error",
        "linkLeadingIcon": "text-error group-data-[state=open]:text-error"
      }
    },
    {
      "color": "neutral",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-highlighted",
        "linkLeadingIcon": "text-highlighted group-data-[state=open]:text-highlighted"
      }
    },
    {
      "highlightColor": "primary",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-primary"
      }
    },
    {
      "highlightColor": "secondary",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-secondary"
      }
    },
    {
      "highlightColor": "success",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-success"
      }
    },
    {
      "highlightColor": "info",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-info"
      }
    },
    {
      "highlightColor": "warning",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-warning"
      }
    },
    {
      "highlightColor": "error",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-error"
      }
    },
    {
      "highlightColor": "neutral",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-inverted"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "highlightColor": "primary",
    "variant": "pill"
  }
};
const _sfc_main$4 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UNavigationMenu",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    type: { type: null, required: false, default: "multiple" },
    modelValue: { type: null, required: false },
    defaultValue: { type: null, required: false },
    trailingIcon: { type: null, required: false },
    externalIcon: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    items: { type: null, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    collapsed: { type: Boolean, required: false },
    tooltip: { type: [Boolean, Object], required: false },
    popover: { type: [Boolean, Object], required: false },
    highlight: { type: Boolean, required: false },
    highlightColor: { type: null, required: false },
    content: { type: Object, required: false },
    contentOrientation: { type: null, required: false, default: "horizontal" },
    arrow: { type: Boolean, required: false },
    labelKey: { type: null, required: false, default: "label" },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    delayDuration: { type: Number, required: false, default: 0 },
    disableClickTrigger: { type: Boolean, required: false },
    disableHoverTrigger: { type: Boolean, required: false },
    skipDelayDuration: { type: Number, required: false },
    disablePointerLeaveClose: { type: Boolean, required: false },
    unmountOnHide: { type: Boolean, required: false, default: true },
    disabled: { type: Boolean, required: false },
    collapsible: { type: Boolean, required: false, default: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(computed(() => ({
      as: props.as,
      delayDuration: props.delayDuration,
      skipDelayDuration: props.skipDelayDuration,
      orientation: props.orientation,
      disableClickTrigger: props.disableClickTrigger,
      disableHoverTrigger: props.disableHoverTrigger,
      disablePointerLeaveClose: props.disablePointerLeaveClose,
      unmountOnHide: props.unmountOnHide
    })), emits);
    const accordionProps = useForwardPropsEmits(reactivePick(props, "collapsible", "disabled", "type", "unmountOnHide"), emits);
    const contentProps = toRef(() => props.content);
    const tooltipProps = toRef(() => defu(typeof props.tooltip === "boolean" ? {} : props.tooltip, { delayDuration: 0, content: { side: "right" } }));
    const popoverProps = toRef(() => defu(typeof props.popover === "boolean" ? {} : props.popover, { mode: "hover", content: { side: "right", align: "start", alignOffset: 2 } }));
    const [DefineLinkTemplate, ReuseLinkTemplate] = createReusableTemplate();
    const [DefineItemTemplate, ReuseItemTemplate] = createReusableTemplate({
      props: {
        item: Object,
        index: Number,
        level: Number
      }
    });
    const ui = computed(() => tv({ extend: tv(theme$1), ...appConfig.ui?.navigationMenu || {} })({
      orientation: props.orientation,
      contentOrientation: props.orientation === "vertical" ? void 0 : props.contentOrientation,
      collapsed: props.collapsed,
      color: props.color,
      variant: props.variant,
      highlight: props.highlight,
      highlightColor: props.highlightColor || props.color
    }));
    const lists = computed(
      () => props.items?.length ? isArrayOfArray(props.items) ? props.items : [props.items] : []
    );
    function getAccordionDefaultValue(list, level = 0) {
      const indexes = list.reduce((acc, item, index) => {
        if (item.defaultOpen || item.open) {
          acc.push(item.value || (level > 0 ? `item-${level}-${index}` : `item-${index}`));
        }
        return acc;
      }, []);
      return props.type === "single" ? indexes[0] : indexes;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineLinkTemplate), null, {
        default: withCtx(({ item, active, index }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, item.slot || "item", {
              item,
              index,
              active,
              ui: ui.value
            }, () => {
              ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                item,
                active,
                index,
                ui: ui.value
              }, () => {
                if (item.avatar) {
                  _push2(ssrRenderComponent(_sfc_main$b$1, mergeProps({
                    size: item.ui?.linkLeadingAvatarSize || props.ui?.linkLeadingAvatarSize || ui.value.linkLeadingAvatarSize()
                  }, item.avatar, {
                    "data-slot": "linkLeadingAvatar",
                    class: ui.value.linkLeadingAvatar({ class: [props.ui?.linkLeadingAvatar, item.ui?.linkLeadingAvatar], active, disabled: !!item.disabled })
                  }), null, _parent2, _scopeId));
                } else if (item.icon) {
                  _push2(ssrRenderComponent(_sfc_main$e, {
                    name: item.icon,
                    "data-slot": "linkLeadingIcon",
                    class: ui.value.linkLeadingIcon({ class: [props.ui?.linkLeadingIcon, item.ui?.linkLeadingIcon], active, disabled: !!item.disabled })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              if (unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"]) {
                _push2(`<span data-slot="linkLabel" class="${ssrRenderClass(ui.value.linkLabel({ class: [props.ui?.linkLabel, item.ui?.linkLabel] }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                  item,
                  active,
                  index
                }, () => {
                  _push2(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                }, _push2, _parent2, _scopeId);
                if (item.target === "_blank" && __props.externalIcon !== false) {
                  _push2(ssrRenderComponent(_sfc_main$e, {
                    name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                    "data-slot": "linkLabelExternalIcon",
                    class: ui.value.linkLabelExternalIcon({ class: [props.ui?.linkLabelExternalIcon, item.ui?.linkLabelExternalIcon], active })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.badge || item.badge === 0 || __props.orientation === "horizontal" && (item.children?.length || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || __props.orientation === "vertical" && item.children?.length || item.trailingIcon || !!slots[item.slot ? `${item.slot}-trailing` : "item-trailing"]) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.orientation === "vertical" && item.children?.length && !__props.collapsed ? unref(AccordionTrigger) : "span"), {
                  as: "span",
                  "data-slot": "linkTrailing",
                  class: ui.value.linkTrailing({ class: [props.ui?.linkTrailing, item.ui?.linkTrailing] }),
                  onClick: () => {
                  }
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                        item,
                        active,
                        index,
                        ui: ui.value
                      }, () => {
                        if (item.badge || item.badge === 0) {
                          _push3(ssrRenderComponent(_sfc_main$c, mergeProps({
                            color: "neutral",
                            variant: "outline",
                            size: item.ui?.linkTrailingBadgeSize || props.ui?.linkTrailingBadgeSize || ui.value.linkTrailingBadgeSize()
                          }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                            "data-slot": "linkTrailingBadge",
                            class: ui.value.linkTrailingBadge({ class: [props.ui?.linkTrailingBadge, item.ui?.linkTrailingBadge] })
                          }), null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                        if (__props.orientation === "horizontal" && (item.children?.length || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || __props.orientation === "vertical" && item.children?.length) {
                          _push3(ssrRenderComponent(_sfc_main$e, {
                            name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                            "data-slot": "linkTrailingIcon",
                            class: ui.value.linkTrailingIcon({ class: [props.ui?.linkTrailingIcon, item.ui?.linkTrailingIcon], active })
                          }, null, _parent3, _scopeId2));
                        } else if (item.trailingIcon) {
                          _push3(ssrRenderComponent(_sfc_main$e, {
                            name: item.trailingIcon,
                            "data-slot": "linkTrailingIcon",
                            class: ui.value.linkTrailingIcon({ class: [props.ui?.linkTrailingIcon, item.ui?.linkTrailingIcon], active })
                          }, null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                          item,
                          active,
                          index,
                          ui: ui.value
                        }, () => [
                          item.badge || item.badge === 0 ? (openBlock(), createBlock(_sfc_main$c, mergeProps({
                            key: 0,
                            color: "neutral",
                            variant: "outline",
                            size: item.ui?.linkTrailingBadgeSize || props.ui?.linkTrailingBadgeSize || ui.value.linkTrailingBadgeSize()
                          }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                            "data-slot": "linkTrailingBadge",
                            class: ui.value.linkTrailingBadge({ class: [props.ui?.linkTrailingBadge, item.ui?.linkTrailingBadge] })
                          }), null, 16, ["size", "class"])) : createCommentVNode("", true),
                          __props.orientation === "horizontal" && (item.children?.length || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || __props.orientation === "vertical" && item.children?.length ? (openBlock(), createBlock(_sfc_main$e, {
                            key: 1,
                            name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                            "data-slot": "linkTrailingIcon",
                            class: ui.value.linkTrailingIcon({ class: [props.ui?.linkTrailingIcon, item.ui?.linkTrailingIcon], active })
                          }, null, 8, ["name", "class"])) : item.trailingIcon ? (openBlock(), createBlock(_sfc_main$e, {
                            key: 2,
                            name: item.trailingIcon,
                            "data-slot": "linkTrailingIcon",
                            class: ui.value.linkTrailingIcon({ class: [props.ui?.linkTrailingIcon, item.ui?.linkTrailingIcon], active })
                          }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }), _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, item.slot || "item", {
                item,
                index,
                active,
                ui: ui.value
              }, () => [
                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                  item,
                  active,
                  index,
                  ui: ui.value
                }, () => [
                  item.avatar ? (openBlock(), createBlock(_sfc_main$b$1, mergeProps({
                    key: 0,
                    size: item.ui?.linkLeadingAvatarSize || props.ui?.linkLeadingAvatarSize || ui.value.linkLeadingAvatarSize()
                  }, item.avatar, {
                    "data-slot": "linkLeadingAvatar",
                    class: ui.value.linkLeadingAvatar({ class: [props.ui?.linkLeadingAvatar, item.ui?.linkLeadingAvatar], active, disabled: !!item.disabled })
                  }), null, 16, ["size", "class"])) : item.icon ? (openBlock(), createBlock(_sfc_main$e, {
                    key: 1,
                    name: item.icon,
                    "data-slot": "linkLeadingIcon",
                    class: ui.value.linkLeadingIcon({ class: [props.ui?.linkLeadingIcon, item.ui?.linkLeadingIcon], active, disabled: !!item.disabled })
                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                ]),
                unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] ? (openBlock(), createBlock("span", {
                  key: 0,
                  "data-slot": "linkLabel",
                  class: ui.value.linkLabel({ class: [props.ui?.linkLabel, item.ui?.linkLabel] })
                }, [
                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                    item,
                    active,
                    index
                  }, () => [
                    createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                  ]),
                  item.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                    key: 0,
                    name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                    "data-slot": "linkLabelExternalIcon",
                    class: ui.value.linkLabelExternalIcon({ class: [props.ui?.linkLabelExternalIcon, item.ui?.linkLabelExternalIcon], active })
                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                ], 2)) : createCommentVNode("", true),
                item.badge || item.badge === 0 || __props.orientation === "horizontal" && (item.children?.length || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || __props.orientation === "vertical" && item.children?.length || item.trailingIcon || !!slots[item.slot ? `${item.slot}-trailing` : "item-trailing"] ? (openBlock(), createBlock(resolveDynamicComponent(__props.orientation === "vertical" && item.children?.length && !__props.collapsed ? unref(AccordionTrigger) : "span"), {
                  key: 1,
                  as: "span",
                  "data-slot": "linkTrailing",
                  class: ui.value.linkTrailing({ class: [props.ui?.linkTrailing, item.ui?.linkTrailing] }),
                  onClick: withModifiers(() => {
                  }, ["stop", "prevent"])
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                      item,
                      active,
                      index,
                      ui: ui.value
                    }, () => [
                      item.badge || item.badge === 0 ? (openBlock(), createBlock(_sfc_main$c, mergeProps({
                        key: 0,
                        color: "neutral",
                        variant: "outline",
                        size: item.ui?.linkTrailingBadgeSize || props.ui?.linkTrailingBadgeSize || ui.value.linkTrailingBadgeSize()
                      }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                        "data-slot": "linkTrailingBadge",
                        class: ui.value.linkTrailingBadge({ class: [props.ui?.linkTrailingBadge, item.ui?.linkTrailingBadge] })
                      }), null, 16, ["size", "class"])) : createCommentVNode("", true),
                      __props.orientation === "horizontal" && (item.children?.length || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || __props.orientation === "vertical" && item.children?.length ? (openBlock(), createBlock(_sfc_main$e, {
                        key: 1,
                        name: item.trailingIcon || __props.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                        "data-slot": "linkTrailingIcon",
                        class: ui.value.linkTrailingIcon({ class: [props.ui?.linkTrailingIcon, item.ui?.linkTrailingIcon], active })
                      }, null, 8, ["name", "class"])) : item.trailingIcon ? (openBlock(), createBlock(_sfc_main$e, {
                        key: 2,
                        name: item.trailingIcon,
                        "data-slot": "linkTrailingIcon",
                        class: ui.value.linkTrailingIcon({ class: [props.ui?.linkTrailingIcon, item.ui?.linkTrailingIcon], active })
                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 2
                }, 1032, ["class", "onClick"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(DefineItemTemplate), null, {
        default: withCtx(({ item, index, level = 0 }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.orientation === "vertical" && !__props.collapsed ? unref(AccordionItem) : unref(NavigationMenuItem)), {
              as: "li",
              value: item.value || (level > 0 ? `item-${level}-${index}` : `item-${index}`)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (__props.orientation === "vertical" && item.type === "label" && !__props.collapsed) {
                    _push3(`<div data-slot="label" class="${ssrRenderClass(ui.value.label({ class: [props.ui?.label, item.ui?.label, item.class] }))}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(ReuseLinkTemplate), {
                      item,
                      index
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else if (item.type !== "label") {
                    _push3(ssrRenderComponent(_sfc_main$9$1, mergeProps(__props.orientation === "vertical" && item.children?.length && !__props.collapsed && item.type === "trigger" ? {} : unref(pickLinkProps)(item), { custom: "" }), {
                      default: withCtx(({ active, ...slotProps }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderVNode(_push4, createVNode(resolveDynamicComponent(__props.orientation === "horizontal" && (item.children?.length || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger) : __props.orientation === "vertical" && item.children?.length && !__props.collapsed && !slotProps.href ? unref(AccordionTrigger) : unref(NavigationMenuLink)), {
                            "as-child": "",
                            active: active || item.active,
                            disabled: item.disabled,
                            onSelect: item.onSelect
                          }, {
                            default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (__props.orientation === "vertical" && __props.collapsed && item.children?.length && (!!props.popover || !!item.popover)) {
                                  _push5(ssrRenderComponent(_sfc_main$6, mergeProps({ ...popoverProps.value, ...typeof item.popover === "boolean" ? {} : item.popover || {} }, {
                                    ui: { content: ui.value.content({ class: [props.ui?.content, item.ui?.content] }) }
                                  }), {
                                    content: withCtx(({ close }, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                          item,
                                          active: active || item.active,
                                          index,
                                          ui: ui.value,
                                          close
                                        }, () => {
                                          _push6(`<ul data-slot="childList" class="${ssrRenderClass(ui.value.childList({ class: [props.ui?.childList, item.ui?.childList] }))}"${_scopeId5}><li data-slot="childLabel" class="${ssrRenderClass(ui.value.childLabel({ class: [props.ui?.childLabel, item.ui?.childLabel] }))}"${_scopeId5}>${ssrInterpolate(unref(get)(item, props.labelKey))}</li><!--[-->`);
                                          ssrRenderList(item.children, (childItem, childIndex) => {
                                            _push6(`<li data-slot="childItem" class="${ssrRenderClass(ui.value.childItem({ class: [props.ui?.childItem, item.ui?.childItem] }))}"${_scopeId5}>`);
                                            _push6(ssrRenderComponent(_sfc_main$9$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                              default: withCtx(({ active: childActive, ...childSlotProps }, _push7, _parent7, _scopeId6) => {
                                                if (_push7) {
                                                  _push7(ssrRenderComponent(unref(NavigationMenuLink), {
                                                    "as-child": "",
                                                    active: childActive,
                                                    onSelect: childItem.onSelect
                                                  }, {
                                                    default: withCtx((_3, _push8, _parent8, _scopeId7) => {
                                                      if (_push8) {
                                                        _push8(ssrRenderComponent(_sfc_main$a$1, mergeProps({ ref_for: true }, childSlotProps, {
                                                          "data-slot": "childLink",
                                                          class: ui.value.childLink({ class: [props.ui?.childLink, item.ui?.childLink, childItem.class], active: childActive })
                                                        }), {
                                                          default: withCtx((_4, _push9, _parent9, _scopeId8) => {
                                                            if (_push9) {
                                                              if (childItem.icon) {
                                                                _push9(ssrRenderComponent(_sfc_main$e, {
                                                                  name: childItem.icon,
                                                                  "data-slot": "childLinkIcon",
                                                                  class: ui.value.childLinkIcon({ class: [props.ui?.childLinkIcon, item.ui?.childLinkIcon], active: childActive })
                                                                }, null, _parent9, _scopeId8));
                                                              } else {
                                                                _push9(`<!---->`);
                                                              }
                                                              _push9(`<span data-slot="childLinkLabel" class="${ssrRenderClass(ui.value.childLinkLabel({ class: [props.ui?.childLinkLabel, item.ui?.childLinkLabel], active: childActive }))}"${_scopeId8}>${ssrInterpolate(unref(get)(childItem, props.labelKey))} `);
                                                              if (childItem.target === "_blank" && __props.externalIcon !== false) {
                                                                _push9(ssrRenderComponent(_sfc_main$e, {
                                                                  name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                  "data-slot": "childLinkLabelExternalIcon",
                                                                  class: ui.value.childLinkLabelExternalIcon({ class: [props.ui?.childLinkLabelExternalIcon, item.ui?.childLinkLabelExternalIcon], active: childActive })
                                                                }, null, _parent9, _scopeId8));
                                                              } else {
                                                                _push9(`<!---->`);
                                                              }
                                                              _push9(`</span>`);
                                                            } else {
                                                              return [
                                                                childItem.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                                                  key: 0,
                                                                  name: childItem.icon,
                                                                  "data-slot": "childLinkIcon",
                                                                  class: ui.value.childLinkIcon({ class: [props.ui?.childLinkIcon, item.ui?.childLinkIcon], active: childActive })
                                                                }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                                createVNode("span", {
                                                                  "data-slot": "childLinkLabel",
                                                                  class: ui.value.childLinkLabel({ class: [props.ui?.childLinkLabel, item.ui?.childLinkLabel], active: childActive })
                                                                }, [
                                                                  createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                                  childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                                                                    key: 0,
                                                                    name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                    "data-slot": "childLinkLabelExternalIcon",
                                                                    class: ui.value.childLinkLabelExternalIcon({ class: [props.ui?.childLinkLabelExternalIcon, item.ui?.childLinkLabelExternalIcon], active: childActive })
                                                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                                ], 2)
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent8, _scopeId7));
                                                      } else {
                                                        return [
                                                          createVNode(_sfc_main$a$1, mergeProps({ ref_for: true }, childSlotProps, {
                                                            "data-slot": "childLink",
                                                            class: ui.value.childLink({ class: [props.ui?.childLink, item.ui?.childLink, childItem.class], active: childActive })
                                                          }), {
                                                            default: withCtx(() => [
                                                              childItem.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                                                key: 0,
                                                                name: childItem.icon,
                                                                "data-slot": "childLinkIcon",
                                                                class: ui.value.childLinkIcon({ class: [props.ui?.childLinkIcon, item.ui?.childLinkIcon], active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                              createVNode("span", {
                                                                "data-slot": "childLinkLabel",
                                                                class: ui.value.childLinkLabel({ class: [props.ui?.childLinkLabel, item.ui?.childLinkLabel], active: childActive })
                                                              }, [
                                                                createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                                childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                                                                  key: 0,
                                                                  name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                  "data-slot": "childLinkLabelExternalIcon",
                                                                  class: ui.value.childLinkLabelExternalIcon({ class: [props.ui?.childLinkLabelExternalIcon, item.ui?.childLinkLabelExternalIcon], active: childActive })
                                                                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                              ], 2)
                                                            ]),
                                                            _: 2
                                                          }, 1040, ["class"])
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent7, _scopeId6));
                                                } else {
                                                  return [
                                                    createVNode(unref(NavigationMenuLink), {
                                                      "as-child": "",
                                                      active: childActive,
                                                      onSelect: childItem.onSelect
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_sfc_main$a$1, mergeProps({ ref_for: true }, childSlotProps, {
                                                          "data-slot": "childLink",
                                                          class: ui.value.childLink({ class: [props.ui?.childLink, item.ui?.childLink, childItem.class], active: childActive })
                                                        }), {
                                                          default: withCtx(() => [
                                                            childItem.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                                              key: 0,
                                                              name: childItem.icon,
                                                              "data-slot": "childLinkIcon",
                                                              class: ui.value.childLinkIcon({ class: [props.ui?.childLinkIcon, item.ui?.childLinkIcon], active: childActive })
                                                            }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                            createVNode("span", {
                                                              "data-slot": "childLinkLabel",
                                                              class: ui.value.childLinkLabel({ class: [props.ui?.childLinkLabel, item.ui?.childLinkLabel], active: childActive })
                                                            }, [
                                                              createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                              childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                                                                key: 0,
                                                                name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                "data-slot": "childLinkLabelExternalIcon",
                                                                class: ui.value.childLinkLabelExternalIcon({ class: [props.ui?.childLinkLabelExternalIcon, item.ui?.childLinkLabelExternalIcon], active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                            ], 2)
                                                          ]),
                                                          _: 2
                                                        }, 1040, ["class"])
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["active", "onSelect"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent6, _scopeId5));
                                            _push6(`</li>`);
                                          });
                                          _push6(`<!--]--></ul>`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                            item,
                                            active: active || item.active,
                                            index,
                                            ui: ui.value,
                                            close
                                          }, () => [
                                            createVNode("ul", {
                                              "data-slot": "childList",
                                              class: ui.value.childList({ class: [props.ui?.childList, item.ui?.childList] })
                                            }, [
                                              createVNode("li", {
                                                "data-slot": "childLabel",
                                                class: ui.value.childLabel({ class: [props.ui?.childLabel, item.ui?.childLabel] })
                                              }, toDisplayString(unref(get)(item, props.labelKey)), 3),
                                              (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                                return openBlock(), createBlock("li", {
                                                  key: childIndex,
                                                  "data-slot": "childItem",
                                                  class: ui.value.childItem({ class: [props.ui?.childItem, item.ui?.childItem] })
                                                }, [
                                                  createVNode(_sfc_main$9$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                                    default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                                      createVNode(unref(NavigationMenuLink), {
                                                        "as-child": "",
                                                        active: childActive,
                                                        onSelect: childItem.onSelect
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_sfc_main$a$1, mergeProps({ ref_for: true }, childSlotProps, {
                                                            "data-slot": "childLink",
                                                            class: ui.value.childLink({ class: [props.ui?.childLink, item.ui?.childLink, childItem.class], active: childActive })
                                                          }), {
                                                            default: withCtx(() => [
                                                              childItem.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                                                key: 0,
                                                                name: childItem.icon,
                                                                "data-slot": "childLinkIcon",
                                                                class: ui.value.childLinkIcon({ class: [props.ui?.childLinkIcon, item.ui?.childLinkIcon], active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                              createVNode("span", {
                                                                "data-slot": "childLinkLabel",
                                                                class: ui.value.childLinkLabel({ class: [props.ui?.childLinkLabel, item.ui?.childLinkLabel], active: childActive })
                                                              }, [
                                                                createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                                childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                                                                  key: 0,
                                                                  name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                  "data-slot": "childLinkLabelExternalIcon",
                                                                  class: ui.value.childLinkLabelExternalIcon({ class: [props.ui?.childLinkLabelExternalIcon, item.ui?.childLinkLabelExternalIcon], active: childActive })
                                                                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                              ], 2)
                                                            ]),
                                                            _: 2
                                                          }, 1040, ["class"])
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["active", "onSelect"])
                                                    ]),
                                                    _: 2
                                                  }, 1040)
                                                ], 2);
                                              }), 128))
                                            ], 2)
                                          ])
                                        ];
                                      }
                                    }),
                                    default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_sfc_main$a$1, mergeProps(slotProps, {
                                          "data-slot": "link",
                                          class: ui.value.link({ class: [props.ui?.link, item.ui?.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                        }), {
                                          default: withCtx((_4, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(unref(ReuseLinkTemplate), {
                                                item,
                                                active: active || item.active,
                                                index
                                              }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(unref(ReuseLinkTemplate), {
                                                  item,
                                                  active: active || item.active,
                                                  index
                                                }, null, 8, ["item", "active", "index"])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_sfc_main$a$1, mergeProps(slotProps, {
                                            "data-slot": "link",
                                            class: ui.value.link({ class: [props.ui?.link, item.ui?.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                          }), {
                                            default: withCtx(() => [
                                              createVNode(unref(ReuseLinkTemplate), {
                                                item,
                                                active: active || item.active,
                                                index
                                              }, null, 8, ["item", "active", "index"])
                                            ]),
                                            _: 2
                                          }, 1040, ["class"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else if (__props.orientation === "vertical" && __props.collapsed && (!!props.tooltip || !!item.tooltip)) {
                                  _push5(ssrRenderComponent(_sfc_main$5, mergeProps({
                                    text: unref(get)(item, props.labelKey)
                                  }, { ...tooltipProps.value, ...typeof item.tooltip === "boolean" ? {} : item.tooltip || {} }), {
                                    default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_sfc_main$a$1, mergeProps(slotProps, {
                                          "data-slot": "link",
                                          class: ui.value.link({ class: [props.ui?.link, item.ui?.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                        }), {
                                          default: withCtx((_4, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(unref(ReuseLinkTemplate), {
                                                item,
                                                active: active || item.active,
                                                index
                                              }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(unref(ReuseLinkTemplate), {
                                                  item,
                                                  active: active || item.active,
                                                  index
                                                }, null, 8, ["item", "active", "index"])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_sfc_main$a$1, mergeProps(slotProps, {
                                            "data-slot": "link",
                                            class: ui.value.link({ class: [props.ui?.link, item.ui?.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                          }), {
                                            default: withCtx(() => [
                                              createVNode(unref(ReuseLinkTemplate), {
                                                item,
                                                active: active || item.active,
                                                index
                                              }, null, 8, ["item", "active", "index"])
                                            ]),
                                            _: 2
                                          }, 1040, ["class"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(ssrRenderComponent(_sfc_main$a$1, mergeProps(slotProps, {
                                    "data-slot": "link",
                                    class: ui.value.link({ class: [props.ui?.link, item.ui?.link, item.class], active: active || item.active, disabled: !!item.disabled, level: __props.orientation === "horizontal" || level > 0 })
                                  }), {
                                    default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(unref(ReuseLinkTemplate), {
                                          item,
                                          active: active || item.active,
                                          index
                                        }, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(unref(ReuseLinkTemplate), {
                                            item,
                                            active: active || item.active,
                                            index
                                          }, null, 8, ["item", "active", "index"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                }
                              } else {
                                return [
                                  __props.orientation === "vertical" && __props.collapsed && item.children?.length && (!!props.popover || !!item.popover) ? (openBlock(), createBlock(_sfc_main$6, mergeProps({ key: 0 }, { ...popoverProps.value, ...typeof item.popover === "boolean" ? {} : item.popover || {} }, {
                                    ui: { content: ui.value.content({ class: [props.ui?.content, item.ui?.content] }) }
                                  }), {
                                    content: withCtx(({ close }) => [
                                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                        item,
                                        active: active || item.active,
                                        index,
                                        ui: ui.value,
                                        close
                                      }, () => [
                                        createVNode("ul", {
                                          "data-slot": "childList",
                                          class: ui.value.childList({ class: [props.ui?.childList, item.ui?.childList] })
                                        }, [
                                          createVNode("li", {
                                            "data-slot": "childLabel",
                                            class: ui.value.childLabel({ class: [props.ui?.childLabel, item.ui?.childLabel] })
                                          }, toDisplayString(unref(get)(item, props.labelKey)), 3),
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                            return openBlock(), createBlock("li", {
                                              key: childIndex,
                                              "data-slot": "childItem",
                                              class: ui.value.childItem({ class: [props.ui?.childItem, item.ui?.childItem] })
                                            }, [
                                              createVNode(_sfc_main$9$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                                default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                                  createVNode(unref(NavigationMenuLink), {
                                                    "as-child": "",
                                                    active: childActive,
                                                    onSelect: childItem.onSelect
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_sfc_main$a$1, mergeProps({ ref_for: true }, childSlotProps, {
                                                        "data-slot": "childLink",
                                                        class: ui.value.childLink({ class: [props.ui?.childLink, item.ui?.childLink, childItem.class], active: childActive })
                                                      }), {
                                                        default: withCtx(() => [
                                                          childItem.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                                            key: 0,
                                                            name: childItem.icon,
                                                            "data-slot": "childLinkIcon",
                                                            class: ui.value.childLinkIcon({ class: [props.ui?.childLinkIcon, item.ui?.childLinkIcon], active: childActive })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                          createVNode("span", {
                                                            "data-slot": "childLinkLabel",
                                                            class: ui.value.childLinkLabel({ class: [props.ui?.childLinkLabel, item.ui?.childLinkLabel], active: childActive })
                                                          }, [
                                                            createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                            childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                                                              key: 0,
                                                              name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                              "data-slot": "childLinkLabelExternalIcon",
                                                              class: ui.value.childLinkLabelExternalIcon({ class: [props.ui?.childLinkLabelExternalIcon, item.ui?.childLinkLabelExternalIcon], active: childActive })
                                                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                          ], 2)
                                                        ]),
                                                        _: 2
                                                      }, 1040, ["class"])
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["active", "onSelect"])
                                                ]),
                                                _: 2
                                              }, 1040)
                                            ], 2);
                                          }), 128))
                                        ], 2)
                                      ])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$a$1, mergeProps(slotProps, {
                                        "data-slot": "link",
                                        class: ui.value.link({ class: [props.ui?.link, item.ui?.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                      }), {
                                        default: withCtx(() => [
                                          createVNode(unref(ReuseLinkTemplate), {
                                            item,
                                            active: active || item.active,
                                            index
                                          }, null, 8, ["item", "active", "index"])
                                        ]),
                                        _: 2
                                      }, 1040, ["class"])
                                    ]),
                                    _: 2
                                  }, 1040, ["ui"])) : __props.orientation === "vertical" && __props.collapsed && (!!props.tooltip || !!item.tooltip) ? (openBlock(), createBlock(_sfc_main$5, mergeProps({
                                    key: 1,
                                    text: unref(get)(item, props.labelKey)
                                  }, { ...tooltipProps.value, ...typeof item.tooltip === "boolean" ? {} : item.tooltip || {} }), {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$a$1, mergeProps(slotProps, {
                                        "data-slot": "link",
                                        class: ui.value.link({ class: [props.ui?.link, item.ui?.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                      }), {
                                        default: withCtx(() => [
                                          createVNode(unref(ReuseLinkTemplate), {
                                            item,
                                            active: active || item.active,
                                            index
                                          }, null, 8, ["item", "active", "index"])
                                        ]),
                                        _: 2
                                      }, 1040, ["class"])
                                    ]),
                                    _: 2
                                  }, 1040, ["text"])) : (openBlock(), createBlock(_sfc_main$a$1, mergeProps({ key: 2 }, slotProps, {
                                    "data-slot": "link",
                                    class: ui.value.link({ class: [props.ui?.link, item.ui?.link, item.class], active: active || item.active, disabled: !!item.disabled, level: __props.orientation === "horizontal" || level > 0 })
                                  }), {
                                    default: withCtx(() => [
                                      createVNode(unref(ReuseLinkTemplate), {
                                        item,
                                        active: active || item.active,
                                        index
                                      }, null, 8, ["item", "active", "index"])
                                    ]),
                                    _: 2
                                  }, 1040, ["class"]))
                                ];
                              }
                            }),
                            _: 2
                          }), _parent4, _scopeId3);
                          if (__props.orientation === "horizontal" && (item.children?.length || !!slots[item.slot ? `${item.slot}-content` : "item-content"])) {
                            _push4(ssrRenderComponent(unref(NavigationMenuContent), mergeProps(contentProps.value, {
                              "data-slot": "content",
                              class: ui.value.content({ class: [props.ui?.content, item.ui?.content] })
                            }), {
                              default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                    item,
                                    active: active || item.active,
                                    index,
                                    ui: ui.value
                                  }, () => {
                                    _push5(`<ul data-slot="childList" class="${ssrRenderClass(ui.value.childList({ class: [props.ui?.childList, item.ui?.childList] }))}"${_scopeId4}><!--[-->`);
                                    ssrRenderList(item.children, (childItem, childIndex) => {
                                      _push5(`<li data-slot="childItem" class="${ssrRenderClass(ui.value.childItem({ class: [props.ui?.childItem, item.ui?.childItem] }))}"${_scopeId4}>`);
                                      _push5(ssrRenderComponent(_sfc_main$9$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                        default: withCtx(({ active: childActive, ...childSlotProps }, _push6, _parent6, _scopeId5) => {
                                          if (_push6) {
                                            _push6(ssrRenderComponent(unref(NavigationMenuLink), {
                                              "as-child": "",
                                              active: childActive,
                                              onSelect: childItem.onSelect
                                            }, {
                                              default: withCtx((_3, _push7, _parent7, _scopeId6) => {
                                                if (_push7) {
                                                  _push7(ssrRenderComponent(_sfc_main$a$1, mergeProps({ ref_for: true }, childSlotProps, {
                                                    "data-slot": "childLink",
                                                    class: ui.value.childLink({ class: [props.ui?.childLink, item.ui?.childLink, childItem.class], active: childActive })
                                                  }), {
                                                    default: withCtx((_4, _push8, _parent8, _scopeId7) => {
                                                      if (_push8) {
                                                        if (childItem.icon) {
                                                          _push8(ssrRenderComponent(_sfc_main$e, {
                                                            name: childItem.icon,
                                                            "data-slot": "childLinkIcon",
                                                            class: ui.value.childLinkIcon({ class: [props.ui?.childLinkIcon, item.ui?.childLinkIcon], active: childActive })
                                                          }, null, _parent8, _scopeId7));
                                                        } else {
                                                          _push8(`<!---->`);
                                                        }
                                                        _push8(`<div data-slot="childLinkWrapper" class="${ssrRenderClass(ui.value.childLinkWrapper({ class: [props.ui?.childLinkWrapper, item.ui?.childLinkWrapper] }))}"${_scopeId7}><p data-slot="childLinkLabel" class="${ssrRenderClass(ui.value.childLinkLabel({ class: [props.ui?.childLinkLabel, item.ui?.childLinkLabel], active: childActive }))}"${_scopeId7}>${ssrInterpolate(unref(get)(childItem, props.labelKey))} `);
                                                        if (childItem.target === "_blank" && __props.externalIcon !== false) {
                                                          _push8(ssrRenderComponent(_sfc_main$e, {
                                                            name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                            "data-slot": "childLinkLabelExternalIcon",
                                                            class: ui.value.childLinkLabelExternalIcon({ class: [props.ui?.childLinkLabelExternalIcon, item.ui?.childLinkLabelExternalIcon], active: childActive })
                                                          }, null, _parent8, _scopeId7));
                                                        } else {
                                                          _push8(`<!---->`);
                                                        }
                                                        _push8(`</p>`);
                                                        if (childItem.description) {
                                                          _push8(`<p data-slot="childLinkDescription" class="${ssrRenderClass(ui.value.childLinkDescription({ class: [props.ui?.childLinkDescription, item.ui?.childLinkDescription], active: childActive }))}"${_scopeId7}>${ssrInterpolate(childItem.description)}</p>`);
                                                        } else {
                                                          _push8(`<!---->`);
                                                        }
                                                        _push8(`</div>`);
                                                      } else {
                                                        return [
                                                          childItem.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                                            key: 0,
                                                            name: childItem.icon,
                                                            "data-slot": "childLinkIcon",
                                                            class: ui.value.childLinkIcon({ class: [props.ui?.childLinkIcon, item.ui?.childLinkIcon], active: childActive })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                          createVNode("div", {
                                                            "data-slot": "childLinkWrapper",
                                                            class: ui.value.childLinkWrapper({ class: [props.ui?.childLinkWrapper, item.ui?.childLinkWrapper] })
                                                          }, [
                                                            createVNode("p", {
                                                              "data-slot": "childLinkLabel",
                                                              class: ui.value.childLinkLabel({ class: [props.ui?.childLinkLabel, item.ui?.childLinkLabel], active: childActive })
                                                            }, [
                                                              createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                              childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                                                                key: 0,
                                                                name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                                "data-slot": "childLinkLabelExternalIcon",
                                                                class: ui.value.childLinkLabelExternalIcon({ class: [props.ui?.childLinkLabelExternalIcon, item.ui?.childLinkLabelExternalIcon], active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                            ], 2),
                                                            childItem.description ? (openBlock(), createBlock("p", {
                                                              key: 0,
                                                              "data-slot": "childLinkDescription",
                                                              class: ui.value.childLinkDescription({ class: [props.ui?.childLinkDescription, item.ui?.childLinkDescription], active: childActive })
                                                            }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                          ], 2)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent7, _scopeId6));
                                                } else {
                                                  return [
                                                    createVNode(_sfc_main$a$1, mergeProps({ ref_for: true }, childSlotProps, {
                                                      "data-slot": "childLink",
                                                      class: ui.value.childLink({ class: [props.ui?.childLink, item.ui?.childLink, childItem.class], active: childActive })
                                                    }), {
                                                      default: withCtx(() => [
                                                        childItem.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                                          key: 0,
                                                          name: childItem.icon,
                                                          "data-slot": "childLinkIcon",
                                                          class: ui.value.childLinkIcon({ class: [props.ui?.childLinkIcon, item.ui?.childLinkIcon], active: childActive })
                                                        }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                        createVNode("div", {
                                                          "data-slot": "childLinkWrapper",
                                                          class: ui.value.childLinkWrapper({ class: [props.ui?.childLinkWrapper, item.ui?.childLinkWrapper] })
                                                        }, [
                                                          createVNode("p", {
                                                            "data-slot": "childLinkLabel",
                                                            class: ui.value.childLinkLabel({ class: [props.ui?.childLinkLabel, item.ui?.childLinkLabel], active: childActive })
                                                          }, [
                                                            createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                            childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                                                              key: 0,
                                                              name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                              "data-slot": "childLinkLabelExternalIcon",
                                                              class: ui.value.childLinkLabelExternalIcon({ class: [props.ui?.childLinkLabelExternalIcon, item.ui?.childLinkLabelExternalIcon], active: childActive })
                                                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                          ], 2),
                                                          childItem.description ? (openBlock(), createBlock("p", {
                                                            key: 0,
                                                            "data-slot": "childLinkDescription",
                                                            class: ui.value.childLinkDescription({ class: [props.ui?.childLinkDescription, item.ui?.childLinkDescription], active: childActive })
                                                          }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                        ], 2)
                                                      ]),
                                                      _: 2
                                                    }, 1040, ["class"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent6, _scopeId5));
                                          } else {
                                            return [
                                              createVNode(unref(NavigationMenuLink), {
                                                "as-child": "",
                                                active: childActive,
                                                onSelect: childItem.onSelect
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_sfc_main$a$1, mergeProps({ ref_for: true }, childSlotProps, {
                                                    "data-slot": "childLink",
                                                    class: ui.value.childLink({ class: [props.ui?.childLink, item.ui?.childLink, childItem.class], active: childActive })
                                                  }), {
                                                    default: withCtx(() => [
                                                      childItem.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                                        key: 0,
                                                        name: childItem.icon,
                                                        "data-slot": "childLinkIcon",
                                                        class: ui.value.childLinkIcon({ class: [props.ui?.childLinkIcon, item.ui?.childLinkIcon], active: childActive })
                                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                      createVNode("div", {
                                                        "data-slot": "childLinkWrapper",
                                                        class: ui.value.childLinkWrapper({ class: [props.ui?.childLinkWrapper, item.ui?.childLinkWrapper] })
                                                      }, [
                                                        createVNode("p", {
                                                          "data-slot": "childLinkLabel",
                                                          class: ui.value.childLinkLabel({ class: [props.ui?.childLinkLabel, item.ui?.childLinkLabel], active: childActive })
                                                        }, [
                                                          createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                          childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                                                            key: 0,
                                                            name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                            "data-slot": "childLinkLabelExternalIcon",
                                                            class: ui.value.childLinkLabelExternalIcon({ class: [props.ui?.childLinkLabelExternalIcon, item.ui?.childLinkLabelExternalIcon], active: childActive })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                        ], 2),
                                                        childItem.description ? (openBlock(), createBlock("p", {
                                                          key: 0,
                                                          "data-slot": "childLinkDescription",
                                                          class: ui.value.childLinkDescription({ class: [props.ui?.childLinkDescription, item.ui?.childLinkDescription], active: childActive })
                                                        }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                      ], 2)
                                                    ]),
                                                    _: 2
                                                  }, 1040, ["class"])
                                                ]),
                                                _: 2
                                              }, 1032, ["active", "onSelect"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent5, _scopeId4));
                                      _push5(`</li>`);
                                    });
                                    _push5(`<!--]--></ul>`);
                                  }, _push5, _parent5, _scopeId4);
                                } else {
                                  return [
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                      item,
                                      active: active || item.active,
                                      index,
                                      ui: ui.value
                                    }, () => [
                                      createVNode("ul", {
                                        "data-slot": "childList",
                                        class: ui.value.childList({ class: [props.ui?.childList, item.ui?.childList] })
                                      }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                          return openBlock(), createBlock("li", {
                                            key: childIndex,
                                            "data-slot": "childItem",
                                            class: ui.value.childItem({ class: [props.ui?.childItem, item.ui?.childItem] })
                                          }, [
                                            createVNode(_sfc_main$9$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                              default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                                createVNode(unref(NavigationMenuLink), {
                                                  "as-child": "",
                                                  active: childActive,
                                                  onSelect: childItem.onSelect
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_sfc_main$a$1, mergeProps({ ref_for: true }, childSlotProps, {
                                                      "data-slot": "childLink",
                                                      class: ui.value.childLink({ class: [props.ui?.childLink, item.ui?.childLink, childItem.class], active: childActive })
                                                    }), {
                                                      default: withCtx(() => [
                                                        childItem.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                                          key: 0,
                                                          name: childItem.icon,
                                                          "data-slot": "childLinkIcon",
                                                          class: ui.value.childLinkIcon({ class: [props.ui?.childLinkIcon, item.ui?.childLinkIcon], active: childActive })
                                                        }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                        createVNode("div", {
                                                          "data-slot": "childLinkWrapper",
                                                          class: ui.value.childLinkWrapper({ class: [props.ui?.childLinkWrapper, item.ui?.childLinkWrapper] })
                                                        }, [
                                                          createVNode("p", {
                                                            "data-slot": "childLinkLabel",
                                                            class: ui.value.childLinkLabel({ class: [props.ui?.childLinkLabel, item.ui?.childLinkLabel], active: childActive })
                                                          }, [
                                                            createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                            childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                                                              key: 0,
                                                              name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                              "data-slot": "childLinkLabelExternalIcon",
                                                              class: ui.value.childLinkLabelExternalIcon({ class: [props.ui?.childLinkLabelExternalIcon, item.ui?.childLinkLabelExternalIcon], active: childActive })
                                                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                          ], 2),
                                                          childItem.description ? (openBlock(), createBlock("p", {
                                                            key: 0,
                                                            "data-slot": "childLinkDescription",
                                                            class: ui.value.childLinkDescription({ class: [props.ui?.childLinkDescription, item.ui?.childLinkDescription], active: childActive })
                                                          }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                        ], 2)
                                                      ]),
                                                      _: 2
                                                    }, 1040, ["class"])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["active", "onSelect"])
                                              ]),
                                              _: 2
                                            }, 1040)
                                          ], 2);
                                        }), 128))
                                      ], 2)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            (openBlock(), createBlock(resolveDynamicComponent(__props.orientation === "horizontal" && (item.children?.length || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger) : __props.orientation === "vertical" && item.children?.length && !__props.collapsed && !slotProps.href ? unref(AccordionTrigger) : unref(NavigationMenuLink)), {
                              "as-child": "",
                              active: active || item.active,
                              disabled: item.disabled,
                              onSelect: item.onSelect
                            }, {
                              default: withCtx(() => [
                                __props.orientation === "vertical" && __props.collapsed && item.children?.length && (!!props.popover || !!item.popover) ? (openBlock(), createBlock(_sfc_main$6, mergeProps({ key: 0 }, { ...popoverProps.value, ...typeof item.popover === "boolean" ? {} : item.popover || {} }, {
                                  ui: { content: ui.value.content({ class: [props.ui?.content, item.ui?.content] }) }
                                }), {
                                  content: withCtx(({ close }) => [
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                      item,
                                      active: active || item.active,
                                      index,
                                      ui: ui.value,
                                      close
                                    }, () => [
                                      createVNode("ul", {
                                        "data-slot": "childList",
                                        class: ui.value.childList({ class: [props.ui?.childList, item.ui?.childList] })
                                      }, [
                                        createVNode("li", {
                                          "data-slot": "childLabel",
                                          class: ui.value.childLabel({ class: [props.ui?.childLabel, item.ui?.childLabel] })
                                        }, toDisplayString(unref(get)(item, props.labelKey)), 3),
                                        (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                          return openBlock(), createBlock("li", {
                                            key: childIndex,
                                            "data-slot": "childItem",
                                            class: ui.value.childItem({ class: [props.ui?.childItem, item.ui?.childItem] })
                                          }, [
                                            createVNode(_sfc_main$9$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                              default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                                createVNode(unref(NavigationMenuLink), {
                                                  "as-child": "",
                                                  active: childActive,
                                                  onSelect: childItem.onSelect
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_sfc_main$a$1, mergeProps({ ref_for: true }, childSlotProps, {
                                                      "data-slot": "childLink",
                                                      class: ui.value.childLink({ class: [props.ui?.childLink, item.ui?.childLink, childItem.class], active: childActive })
                                                    }), {
                                                      default: withCtx(() => [
                                                        childItem.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                                          key: 0,
                                                          name: childItem.icon,
                                                          "data-slot": "childLinkIcon",
                                                          class: ui.value.childLinkIcon({ class: [props.ui?.childLinkIcon, item.ui?.childLinkIcon], active: childActive })
                                                        }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                        createVNode("span", {
                                                          "data-slot": "childLinkLabel",
                                                          class: ui.value.childLinkLabel({ class: [props.ui?.childLinkLabel, item.ui?.childLinkLabel], active: childActive })
                                                        }, [
                                                          createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                          childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                                                            key: 0,
                                                            name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                            "data-slot": "childLinkLabelExternalIcon",
                                                            class: ui.value.childLinkLabelExternalIcon({ class: [props.ui?.childLinkLabelExternalIcon, item.ui?.childLinkLabelExternalIcon], active: childActive })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                        ], 2)
                                                      ]),
                                                      _: 2
                                                    }, 1040, ["class"])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["active", "onSelect"])
                                              ]),
                                              _: 2
                                            }, 1040)
                                          ], 2);
                                        }), 128))
                                      ], 2)
                                    ])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$a$1, mergeProps(slotProps, {
                                      "data-slot": "link",
                                      class: ui.value.link({ class: [props.ui?.link, item.ui?.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                    }), {
                                      default: withCtx(() => [
                                        createVNode(unref(ReuseLinkTemplate), {
                                          item,
                                          active: active || item.active,
                                          index
                                        }, null, 8, ["item", "active", "index"])
                                      ]),
                                      _: 2
                                    }, 1040, ["class"])
                                  ]),
                                  _: 2
                                }, 1040, ["ui"])) : __props.orientation === "vertical" && __props.collapsed && (!!props.tooltip || !!item.tooltip) ? (openBlock(), createBlock(_sfc_main$5, mergeProps({
                                  key: 1,
                                  text: unref(get)(item, props.labelKey)
                                }, { ...tooltipProps.value, ...typeof item.tooltip === "boolean" ? {} : item.tooltip || {} }), {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$a$1, mergeProps(slotProps, {
                                      "data-slot": "link",
                                      class: ui.value.link({ class: [props.ui?.link, item.ui?.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                    }), {
                                      default: withCtx(() => [
                                        createVNode(unref(ReuseLinkTemplate), {
                                          item,
                                          active: active || item.active,
                                          index
                                        }, null, 8, ["item", "active", "index"])
                                      ]),
                                      _: 2
                                    }, 1040, ["class"])
                                  ]),
                                  _: 2
                                }, 1040, ["text"])) : (openBlock(), createBlock(_sfc_main$a$1, mergeProps({ key: 2 }, slotProps, {
                                  "data-slot": "link",
                                  class: ui.value.link({ class: [props.ui?.link, item.ui?.link, item.class], active: active || item.active, disabled: !!item.disabled, level: __props.orientation === "horizontal" || level > 0 })
                                }), {
                                  default: withCtx(() => [
                                    createVNode(unref(ReuseLinkTemplate), {
                                      item,
                                      active: active || item.active,
                                      index
                                    }, null, 8, ["item", "active", "index"])
                                  ]),
                                  _: 2
                                }, 1040, ["class"]))
                              ]),
                              _: 2
                            }, 1064, ["active", "disabled", "onSelect"])),
                            __props.orientation === "horizontal" && (item.children?.length || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? (openBlock(), createBlock(unref(NavigationMenuContent), mergeProps({ key: 0 }, contentProps.value, {
                              "data-slot": "content",
                              class: ui.value.content({ class: [props.ui?.content, item.ui?.content] })
                            }), {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                  item,
                                  active: active || item.active,
                                  index,
                                  ui: ui.value
                                }, () => [
                                  createVNode("ul", {
                                    "data-slot": "childList",
                                    class: ui.value.childList({ class: [props.ui?.childList, item.ui?.childList] })
                                  }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                      return openBlock(), createBlock("li", {
                                        key: childIndex,
                                        "data-slot": "childItem",
                                        class: ui.value.childItem({ class: [props.ui?.childItem, item.ui?.childItem] })
                                      }, [
                                        createVNode(_sfc_main$9$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                          default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                            createVNode(unref(NavigationMenuLink), {
                                              "as-child": "",
                                              active: childActive,
                                              onSelect: childItem.onSelect
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_sfc_main$a$1, mergeProps({ ref_for: true }, childSlotProps, {
                                                  "data-slot": "childLink",
                                                  class: ui.value.childLink({ class: [props.ui?.childLink, item.ui?.childLink, childItem.class], active: childActive })
                                                }), {
                                                  default: withCtx(() => [
                                                    childItem.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                                      key: 0,
                                                      name: childItem.icon,
                                                      "data-slot": "childLinkIcon",
                                                      class: ui.value.childLinkIcon({ class: [props.ui?.childLinkIcon, item.ui?.childLinkIcon], active: childActive })
                                                    }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                    createVNode("div", {
                                                      "data-slot": "childLinkWrapper",
                                                      class: ui.value.childLinkWrapper({ class: [props.ui?.childLinkWrapper, item.ui?.childLinkWrapper] })
                                                    }, [
                                                      createVNode("p", {
                                                        "data-slot": "childLinkLabel",
                                                        class: ui.value.childLinkLabel({ class: [props.ui?.childLinkLabel, item.ui?.childLinkLabel], active: childActive })
                                                      }, [
                                                        createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                        childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                                                          key: 0,
                                                          name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                          "data-slot": "childLinkLabelExternalIcon",
                                                          class: ui.value.childLinkLabelExternalIcon({ class: [props.ui?.childLinkLabelExternalIcon, item.ui?.childLinkLabelExternalIcon], active: childActive })
                                                        }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                      ], 2),
                                                      childItem.description ? (openBlock(), createBlock("p", {
                                                        key: 0,
                                                        "data-slot": "childLinkDescription",
                                                        class: ui.value.childLinkDescription({ class: [props.ui?.childLinkDescription, item.ui?.childLinkDescription], active: childActive })
                                                      }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                    ], 2)
                                                  ]),
                                                  _: 2
                                                }, 1040, ["class"])
                                              ]),
                                              _: 2
                                            }, 1032, ["active", "onSelect"])
                                          ]),
                                          _: 2
                                        }, 1040)
                                      ], 2);
                                    }), 128))
                                  ], 2)
                                ])
                              ]),
                              _: 2
                            }, 1040, ["class"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (__props.orientation === "vertical" && item.children?.length && !__props.collapsed) {
                    _push3(ssrRenderComponent(unref(AccordionContent), {
                      "data-slot": "content",
                      class: ui.value.content({ class: [props.ui?.content, item.ui?.content] })
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(AccordionRoot), mergeProps({
                            ...unref(accordionProps),
                            defaultValue: getAccordionDefaultValue(item.children, level + 1)
                          }, {
                            as: "ul",
                            "data-slot": "childList",
                            class: ui.value.childList({ class: props.ui?.childList })
                          }), {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(item.children, (childItem, childIndex) => {
                                  _push5(ssrRenderComponent(unref(ReuseItemTemplate), {
                                    key: childIndex,
                                    item: childItem,
                                    index: childIndex,
                                    level: level + 1,
                                    "data-slot": "childItem",
                                    class: ui.value.childItem({ class: [props.ui?.childItem, childItem.ui?.childItem] })
                                  }, null, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                    return openBlock(), createBlock(unref(ReuseItemTemplate), {
                                      key: childIndex,
                                      item: childItem,
                                      index: childIndex,
                                      level: level + 1,
                                      "data-slot": "childItem",
                                      class: ui.value.childItem({ class: [props.ui?.childItem, childItem.ui?.childItem] })
                                    }, null, 8, ["item", "index", "level", "class"]);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(AccordionRoot), mergeProps({
                              ...unref(accordionProps),
                              defaultValue: getAccordionDefaultValue(item.children, level + 1)
                            }, {
                              as: "ul",
                              "data-slot": "childList",
                              class: ui.value.childList({ class: props.ui?.childList })
                            }), {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                  return openBlock(), createBlock(unref(ReuseItemTemplate), {
                                    key: childIndex,
                                    item: childItem,
                                    index: childIndex,
                                    level: level + 1,
                                    "data-slot": "childItem",
                                    class: ui.value.childItem({ class: [props.ui?.childItem, childItem.ui?.childItem] })
                                  }, null, 8, ["item", "index", "level", "class"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1040, ["class"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    __props.orientation === "vertical" && item.type === "label" && !__props.collapsed ? (openBlock(), createBlock("div", {
                      key: 0,
                      "data-slot": "label",
                      class: ui.value.label({ class: [props.ui?.label, item.ui?.label, item.class] })
                    }, [
                      createVNode(unref(ReuseLinkTemplate), {
                        item,
                        index
                      }, null, 8, ["item", "index"])
                    ], 2)) : item.type !== "label" ? (openBlock(), createBlock(_sfc_main$9$1, mergeProps({ key: 1 }, __props.orientation === "vertical" && item.children?.length && !__props.collapsed && item.type === "trigger" ? {} : unref(pickLinkProps)(item), { custom: "" }), {
                      default: withCtx(({ active, ...slotProps }) => [
                        (openBlock(), createBlock(resolveDynamicComponent(__props.orientation === "horizontal" && (item.children?.length || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger) : __props.orientation === "vertical" && item.children?.length && !__props.collapsed && !slotProps.href ? unref(AccordionTrigger) : unref(NavigationMenuLink)), {
                          "as-child": "",
                          active: active || item.active,
                          disabled: item.disabled,
                          onSelect: item.onSelect
                        }, {
                          default: withCtx(() => [
                            __props.orientation === "vertical" && __props.collapsed && item.children?.length && (!!props.popover || !!item.popover) ? (openBlock(), createBlock(_sfc_main$6, mergeProps({ key: 0 }, { ...popoverProps.value, ...typeof item.popover === "boolean" ? {} : item.popover || {} }, {
                              ui: { content: ui.value.content({ class: [props.ui?.content, item.ui?.content] }) }
                            }), {
                              content: withCtx(({ close }) => [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                  item,
                                  active: active || item.active,
                                  index,
                                  ui: ui.value,
                                  close
                                }, () => [
                                  createVNode("ul", {
                                    "data-slot": "childList",
                                    class: ui.value.childList({ class: [props.ui?.childList, item.ui?.childList] })
                                  }, [
                                    createVNode("li", {
                                      "data-slot": "childLabel",
                                      class: ui.value.childLabel({ class: [props.ui?.childLabel, item.ui?.childLabel] })
                                    }, toDisplayString(unref(get)(item, props.labelKey)), 3),
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                      return openBlock(), createBlock("li", {
                                        key: childIndex,
                                        "data-slot": "childItem",
                                        class: ui.value.childItem({ class: [props.ui?.childItem, item.ui?.childItem] })
                                      }, [
                                        createVNode(_sfc_main$9$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                          default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                            createVNode(unref(NavigationMenuLink), {
                                              "as-child": "",
                                              active: childActive,
                                              onSelect: childItem.onSelect
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_sfc_main$a$1, mergeProps({ ref_for: true }, childSlotProps, {
                                                  "data-slot": "childLink",
                                                  class: ui.value.childLink({ class: [props.ui?.childLink, item.ui?.childLink, childItem.class], active: childActive })
                                                }), {
                                                  default: withCtx(() => [
                                                    childItem.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                                      key: 0,
                                                      name: childItem.icon,
                                                      "data-slot": "childLinkIcon",
                                                      class: ui.value.childLinkIcon({ class: [props.ui?.childLinkIcon, item.ui?.childLinkIcon], active: childActive })
                                                    }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                    createVNode("span", {
                                                      "data-slot": "childLinkLabel",
                                                      class: ui.value.childLinkLabel({ class: [props.ui?.childLinkLabel, item.ui?.childLinkLabel], active: childActive })
                                                    }, [
                                                      createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                      childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                                                        key: 0,
                                                        name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                        "data-slot": "childLinkLabelExternalIcon",
                                                        class: ui.value.childLinkLabelExternalIcon({ class: [props.ui?.childLinkLabelExternalIcon, item.ui?.childLinkLabelExternalIcon], active: childActive })
                                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                    ], 2)
                                                  ]),
                                                  _: 2
                                                }, 1040, ["class"])
                                              ]),
                                              _: 2
                                            }, 1032, ["active", "onSelect"])
                                          ]),
                                          _: 2
                                        }, 1040)
                                      ], 2);
                                    }), 128))
                                  ], 2)
                                ])
                              ]),
                              default: withCtx(() => [
                                createVNode(_sfc_main$a$1, mergeProps(slotProps, {
                                  "data-slot": "link",
                                  class: ui.value.link({ class: [props.ui?.link, item.ui?.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                }), {
                                  default: withCtx(() => [
                                    createVNode(unref(ReuseLinkTemplate), {
                                      item,
                                      active: active || item.active,
                                      index
                                    }, null, 8, ["item", "active", "index"])
                                  ]),
                                  _: 2
                                }, 1040, ["class"])
                              ]),
                              _: 2
                            }, 1040, ["ui"])) : __props.orientation === "vertical" && __props.collapsed && (!!props.tooltip || !!item.tooltip) ? (openBlock(), createBlock(_sfc_main$5, mergeProps({
                              key: 1,
                              text: unref(get)(item, props.labelKey)
                            }, { ...tooltipProps.value, ...typeof item.tooltip === "boolean" ? {} : item.tooltip || {} }), {
                              default: withCtx(() => [
                                createVNode(_sfc_main$a$1, mergeProps(slotProps, {
                                  "data-slot": "link",
                                  class: ui.value.link({ class: [props.ui?.link, item.ui?.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                                }), {
                                  default: withCtx(() => [
                                    createVNode(unref(ReuseLinkTemplate), {
                                      item,
                                      active: active || item.active,
                                      index
                                    }, null, 8, ["item", "active", "index"])
                                  ]),
                                  _: 2
                                }, 1040, ["class"])
                              ]),
                              _: 2
                            }, 1040, ["text"])) : (openBlock(), createBlock(_sfc_main$a$1, mergeProps({ key: 2 }, slotProps, {
                              "data-slot": "link",
                              class: ui.value.link({ class: [props.ui?.link, item.ui?.link, item.class], active: active || item.active, disabled: !!item.disabled, level: __props.orientation === "horizontal" || level > 0 })
                            }), {
                              default: withCtx(() => [
                                createVNode(unref(ReuseLinkTemplate), {
                                  item,
                                  active: active || item.active,
                                  index
                                }, null, 8, ["item", "active", "index"])
                              ]),
                              _: 2
                            }, 1040, ["class"]))
                          ]),
                          _: 2
                        }, 1064, ["active", "disabled", "onSelect"])),
                        __props.orientation === "horizontal" && (item.children?.length || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? (openBlock(), createBlock(unref(NavigationMenuContent), mergeProps({ key: 0 }, contentProps.value, {
                          "data-slot": "content",
                          class: ui.value.content({ class: [props.ui?.content, item.ui?.content] })
                        }), {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                              item,
                              active: active || item.active,
                              index,
                              ui: ui.value
                            }, () => [
                              createVNode("ul", {
                                "data-slot": "childList",
                                class: ui.value.childList({ class: [props.ui?.childList, item.ui?.childList] })
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                  return openBlock(), createBlock("li", {
                                    key: childIndex,
                                    "data-slot": "childItem",
                                    class: ui.value.childItem({ class: [props.ui?.childItem, item.ui?.childItem] })
                                  }, [
                                    createVNode(_sfc_main$9$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                      default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                        createVNode(unref(NavigationMenuLink), {
                                          "as-child": "",
                                          active: childActive,
                                          onSelect: childItem.onSelect
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_sfc_main$a$1, mergeProps({ ref_for: true }, childSlotProps, {
                                              "data-slot": "childLink",
                                              class: ui.value.childLink({ class: [props.ui?.childLink, item.ui?.childLink, childItem.class], active: childActive })
                                            }), {
                                              default: withCtx(() => [
                                                childItem.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                                  key: 0,
                                                  name: childItem.icon,
                                                  "data-slot": "childLinkIcon",
                                                  class: ui.value.childLinkIcon({ class: [props.ui?.childLinkIcon, item.ui?.childLinkIcon], active: childActive })
                                                }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                createVNode("div", {
                                                  "data-slot": "childLinkWrapper",
                                                  class: ui.value.childLinkWrapper({ class: [props.ui?.childLinkWrapper, item.ui?.childLinkWrapper] })
                                                }, [
                                                  createVNode("p", {
                                                    "data-slot": "childLinkLabel",
                                                    class: ui.value.childLinkLabel({ class: [props.ui?.childLinkLabel, item.ui?.childLinkLabel], active: childActive })
                                                  }, [
                                                    createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                    childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                                                      key: 0,
                                                      name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                      "data-slot": "childLinkLabelExternalIcon",
                                                      class: ui.value.childLinkLabelExternalIcon({ class: [props.ui?.childLinkLabelExternalIcon, item.ui?.childLinkLabelExternalIcon], active: childActive })
                                                    }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                  ], 2),
                                                  childItem.description ? (openBlock(), createBlock("p", {
                                                    key: 0,
                                                    "data-slot": "childLinkDescription",
                                                    class: ui.value.childLinkDescription({ class: [props.ui?.childLinkDescription, item.ui?.childLinkDescription], active: childActive })
                                                  }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                ], 2)
                                              ]),
                                              _: 2
                                            }, 1040, ["class"])
                                          ]),
                                          _: 2
                                        }, 1032, ["active", "onSelect"])
                                      ]),
                                      _: 2
                                    }, 1040)
                                  ], 2);
                                }), 128))
                              ], 2)
                            ])
                          ]),
                          _: 2
                        }, 1040, ["class"])) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1040)) : createCommentVNode("", true),
                    __props.orientation === "vertical" && item.children?.length && !__props.collapsed ? (openBlock(), createBlock(unref(AccordionContent), {
                      key: 2,
                      "data-slot": "content",
                      class: ui.value.content({ class: [props.ui?.content, item.ui?.content] })
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(AccordionRoot), mergeProps({
                          ...unref(accordionProps),
                          defaultValue: getAccordionDefaultValue(item.children, level + 1)
                        }, {
                          as: "ul",
                          "data-slot": "childList",
                          class: ui.value.childList({ class: props.ui?.childList })
                        }), {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                              return openBlock(), createBlock(unref(ReuseItemTemplate), {
                                key: childIndex,
                                item: childItem,
                                index: childIndex,
                                level: level + 1,
                                "data-slot": "childItem",
                                class: ui.value.childItem({ class: [props.ui?.childItem, childItem.ui?.childItem] })
                              }, null, 8, ["item", "index", "level", "class"]);
                            }), 128))
                          ]),
                          _: 2
                        }, 1040, ["class"])
                      ]),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }), _parent2, _scopeId);
          } else {
            return [
              (openBlock(), createBlock(resolveDynamicComponent(__props.orientation === "vertical" && !__props.collapsed ? unref(AccordionItem) : unref(NavigationMenuItem)), {
                as: "li",
                value: item.value || (level > 0 ? `item-${level}-${index}` : `item-${index}`)
              }, {
                default: withCtx(() => [
                  __props.orientation === "vertical" && item.type === "label" && !__props.collapsed ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-slot": "label",
                    class: ui.value.label({ class: [props.ui?.label, item.ui?.label, item.class] })
                  }, [
                    createVNode(unref(ReuseLinkTemplate), {
                      item,
                      index
                    }, null, 8, ["item", "index"])
                  ], 2)) : item.type !== "label" ? (openBlock(), createBlock(_sfc_main$9$1, mergeProps({ key: 1 }, __props.orientation === "vertical" && item.children?.length && !__props.collapsed && item.type === "trigger" ? {} : unref(pickLinkProps)(item), { custom: "" }), {
                    default: withCtx(({ active, ...slotProps }) => [
                      (openBlock(), createBlock(resolveDynamicComponent(__props.orientation === "horizontal" && (item.children?.length || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger) : __props.orientation === "vertical" && item.children?.length && !__props.collapsed && !slotProps.href ? unref(AccordionTrigger) : unref(NavigationMenuLink)), {
                        "as-child": "",
                        active: active || item.active,
                        disabled: item.disabled,
                        onSelect: item.onSelect
                      }, {
                        default: withCtx(() => [
                          __props.orientation === "vertical" && __props.collapsed && item.children?.length && (!!props.popover || !!item.popover) ? (openBlock(), createBlock(_sfc_main$6, mergeProps({ key: 0 }, { ...popoverProps.value, ...typeof item.popover === "boolean" ? {} : item.popover || {} }, {
                            ui: { content: ui.value.content({ class: [props.ui?.content, item.ui?.content] }) }
                          }), {
                            content: withCtx(({ close }) => [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                item,
                                active: active || item.active,
                                index,
                                ui: ui.value,
                                close
                              }, () => [
                                createVNode("ul", {
                                  "data-slot": "childList",
                                  class: ui.value.childList({ class: [props.ui?.childList, item.ui?.childList] })
                                }, [
                                  createVNode("li", {
                                    "data-slot": "childLabel",
                                    class: ui.value.childLabel({ class: [props.ui?.childLabel, item.ui?.childLabel] })
                                  }, toDisplayString(unref(get)(item, props.labelKey)), 3),
                                  (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                    return openBlock(), createBlock("li", {
                                      key: childIndex,
                                      "data-slot": "childItem",
                                      class: ui.value.childItem({ class: [props.ui?.childItem, item.ui?.childItem] })
                                    }, [
                                      createVNode(_sfc_main$9$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                        default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                          createVNode(unref(NavigationMenuLink), {
                                            "as-child": "",
                                            active: childActive,
                                            onSelect: childItem.onSelect
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_sfc_main$a$1, mergeProps({ ref_for: true }, childSlotProps, {
                                                "data-slot": "childLink",
                                                class: ui.value.childLink({ class: [props.ui?.childLink, item.ui?.childLink, childItem.class], active: childActive })
                                              }), {
                                                default: withCtx(() => [
                                                  childItem.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                                    key: 0,
                                                    name: childItem.icon,
                                                    "data-slot": "childLinkIcon",
                                                    class: ui.value.childLinkIcon({ class: [props.ui?.childLinkIcon, item.ui?.childLinkIcon], active: childActive })
                                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                  createVNode("span", {
                                                    "data-slot": "childLinkLabel",
                                                    class: ui.value.childLinkLabel({ class: [props.ui?.childLinkLabel, item.ui?.childLinkLabel], active: childActive })
                                                  }, [
                                                    createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                    childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                                                      key: 0,
                                                      name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                      "data-slot": "childLinkLabelExternalIcon",
                                                      class: ui.value.childLinkLabelExternalIcon({ class: [props.ui?.childLinkLabelExternalIcon, item.ui?.childLinkLabelExternalIcon], active: childActive })
                                                    }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                  ], 2)
                                                ]),
                                                _: 2
                                              }, 1040, ["class"])
                                            ]),
                                            _: 2
                                          }, 1032, ["active", "onSelect"])
                                        ]),
                                        _: 2
                                      }, 1040)
                                    ], 2);
                                  }), 128))
                                ], 2)
                              ])
                            ]),
                            default: withCtx(() => [
                              createVNode(_sfc_main$a$1, mergeProps(slotProps, {
                                "data-slot": "link",
                                class: ui.value.link({ class: [props.ui?.link, item.ui?.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                              }), {
                                default: withCtx(() => [
                                  createVNode(unref(ReuseLinkTemplate), {
                                    item,
                                    active: active || item.active,
                                    index
                                  }, null, 8, ["item", "active", "index"])
                                ]),
                                _: 2
                              }, 1040, ["class"])
                            ]),
                            _: 2
                          }, 1040, ["ui"])) : __props.orientation === "vertical" && __props.collapsed && (!!props.tooltip || !!item.tooltip) ? (openBlock(), createBlock(_sfc_main$5, mergeProps({
                            key: 1,
                            text: unref(get)(item, props.labelKey)
                          }, { ...tooltipProps.value, ...typeof item.tooltip === "boolean" ? {} : item.tooltip || {} }), {
                            default: withCtx(() => [
                              createVNode(_sfc_main$a$1, mergeProps(slotProps, {
                                "data-slot": "link",
                                class: ui.value.link({ class: [props.ui?.link, item.ui?.link, item.class], active: active || item.active, disabled: !!item.disabled, level: level > 0 })
                              }), {
                                default: withCtx(() => [
                                  createVNode(unref(ReuseLinkTemplate), {
                                    item,
                                    active: active || item.active,
                                    index
                                  }, null, 8, ["item", "active", "index"])
                                ]),
                                _: 2
                              }, 1040, ["class"])
                            ]),
                            _: 2
                          }, 1040, ["text"])) : (openBlock(), createBlock(_sfc_main$a$1, mergeProps({ key: 2 }, slotProps, {
                            "data-slot": "link",
                            class: ui.value.link({ class: [props.ui?.link, item.ui?.link, item.class], active: active || item.active, disabled: !!item.disabled, level: __props.orientation === "horizontal" || level > 0 })
                          }), {
                            default: withCtx(() => [
                              createVNode(unref(ReuseLinkTemplate), {
                                item,
                                active: active || item.active,
                                index
                              }, null, 8, ["item", "active", "index"])
                            ]),
                            _: 2
                          }, 1040, ["class"]))
                        ]),
                        _: 2
                      }, 1064, ["active", "disabled", "onSelect"])),
                      __props.orientation === "horizontal" && (item.children?.length || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? (openBlock(), createBlock(unref(NavigationMenuContent), mergeProps({ key: 0 }, contentProps.value, {
                        "data-slot": "content",
                        class: ui.value.content({ class: [props.ui?.content, item.ui?.content] })
                      }), {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                            item,
                            active: active || item.active,
                            index,
                            ui: ui.value
                          }, () => [
                            createVNode("ul", {
                              "data-slot": "childList",
                              class: ui.value.childList({ class: [props.ui?.childList, item.ui?.childList] })
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                return openBlock(), createBlock("li", {
                                  key: childIndex,
                                  "data-slot": "childItem",
                                  class: ui.value.childItem({ class: [props.ui?.childItem, item.ui?.childItem] })
                                }, [
                                  createVNode(_sfc_main$9$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                    default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                      createVNode(unref(NavigationMenuLink), {
                                        "as-child": "",
                                        active: childActive,
                                        onSelect: childItem.onSelect
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$a$1, mergeProps({ ref_for: true }, childSlotProps, {
                                            "data-slot": "childLink",
                                            class: ui.value.childLink({ class: [props.ui?.childLink, item.ui?.childLink, childItem.class], active: childActive })
                                          }), {
                                            default: withCtx(() => [
                                              childItem.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                                key: 0,
                                                name: childItem.icon,
                                                "data-slot": "childLinkIcon",
                                                class: ui.value.childLinkIcon({ class: [props.ui?.childLinkIcon, item.ui?.childLinkIcon], active: childActive })
                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                              createVNode("div", {
                                                "data-slot": "childLinkWrapper",
                                                class: ui.value.childLinkWrapper({ class: [props.ui?.childLinkWrapper, item.ui?.childLinkWrapper] })
                                              }, [
                                                createVNode("p", {
                                                  "data-slot": "childLinkLabel",
                                                  class: ui.value.childLinkLabel({ class: [props.ui?.childLinkLabel, item.ui?.childLinkLabel], active: childActive })
                                                }, [
                                                  createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                  childItem.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                                                    key: 0,
                                                    name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                                                    "data-slot": "childLinkLabelExternalIcon",
                                                    class: ui.value.childLinkLabelExternalIcon({ class: [props.ui?.childLinkLabelExternalIcon, item.ui?.childLinkLabelExternalIcon], active: childActive })
                                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                ], 2),
                                                childItem.description ? (openBlock(), createBlock("p", {
                                                  key: 0,
                                                  "data-slot": "childLinkDescription",
                                                  class: ui.value.childLinkDescription({ class: [props.ui?.childLinkDescription, item.ui?.childLinkDescription], active: childActive })
                                                }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                              ], 2)
                                            ]),
                                            _: 2
                                          }, 1040, ["class"])
                                        ]),
                                        _: 2
                                      }, 1032, ["active", "onSelect"])
                                    ]),
                                    _: 2
                                  }, 1040)
                                ], 2);
                              }), 128))
                            ], 2)
                          ])
                        ]),
                        _: 2
                      }, 1040, ["class"])) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1040)) : createCommentVNode("", true),
                  __props.orientation === "vertical" && item.children?.length && !__props.collapsed ? (openBlock(), createBlock(unref(AccordionContent), {
                    key: 2,
                    "data-slot": "content",
                    class: ui.value.content({ class: [props.ui?.content, item.ui?.content] })
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(AccordionRoot), mergeProps({
                        ...unref(accordionProps),
                        defaultValue: getAccordionDefaultValue(item.children, level + 1)
                      }, {
                        as: "ul",
                        "data-slot": "childList",
                        class: ui.value.childList({ class: props.ui?.childList })
                      }), {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                            return openBlock(), createBlock(unref(ReuseItemTemplate), {
                              key: childIndex,
                              item: childItem,
                              index: childIndex,
                              level: level + 1,
                              "data-slot": "childItem",
                              class: ui.value.childItem({ class: [props.ui?.childItem, childItem.ui?.childItem] })
                            }, null, 8, ["item", "index", "level", "class"]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1040, ["class"])
                    ]),
                    _: 2
                  }, 1032, ["class"])) : createCommentVNode("", true)
                ]),
                _: 2
              }, 1032, ["value"]))
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(NavigationMenuRoot), mergeProps({
        ...unref(rootProps),
        ...__props.orientation === "horizontal" ? {
          modelValue: __props.modelValue,
          defaultValue: __props.defaultValue
        } : {},
        ..._ctx.$attrs
      }, {
        "data-collapsed": __props.collapsed,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "list-leading", {}, null, _push2, _parent2, _scopeId);
            _push2(`<!--[-->`);
            ssrRenderList(lists.value, (list, listIndex) => {
              _push2(`<!--[-->`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.orientation === "vertical" ? unref(AccordionRoot) : unref(NavigationMenuList)), mergeProps({ ref_for: true }, __props.orientation === "vertical" && !__props.collapsed ? {
                ...unref(accordionProps),
                modelValue: __props.modelValue,
                defaultValue: __props.defaultValue ?? getAccordionDefaultValue(list)
              } : {}, {
                as: "ul",
                "data-slot": "list",
                class: ui.value.list({ class: props.ui?.list })
              }), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(list, (item, index) => {
                      _push3(ssrRenderComponent(unref(ReuseItemTemplate), {
                        key: `list-${listIndex}-${index}`,
                        item,
                        index,
                        "data-slot": "item",
                        class: ui.value.item({ class: [props.ui?.item, item.ui?.item] })
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(list, (item, index) => {
                        return openBlock(), createBlock(unref(ReuseItemTemplate), {
                          key: `list-${listIndex}-${index}`,
                          item,
                          index,
                          "data-slot": "item",
                          class: ui.value.item({ class: [props.ui?.item, item.ui?.item] })
                        }, null, 8, ["item", "index", "class"]);
                      }), 128))
                    ];
                  }
                }),
                _: 2
              }), _parent2, _scopeId);
              if (__props.orientation === "vertical" && listIndex < lists.value.length - 1) {
                _push2(`<div data-slot="separator" class="${ssrRenderClass(ui.value.separator({ class: props.ui?.separator }))}"${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]-->`);
            ssrRenderSlot(_ctx.$slots, "list-trailing", {}, null, _push2, _parent2, _scopeId);
            if (__props.orientation === "horizontal") {
              _push2(`<div data-slot="viewportWrapper" class="${ssrRenderClass(ui.value.viewportWrapper({ class: props.ui?.viewportWrapper }))}"${_scopeId}>`);
              if (__props.arrow) {
                _push2(ssrRenderComponent(unref(NavigationMenuIndicator), {
                  "data-slot": "indicator",
                  class: ui.value.indicator({ class: props.ui?.indicator })
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div data-slot="arrow" class="${ssrRenderClass(ui.value.arrow({ class: props.ui?.arrow }))}"${_scopeId2}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          "data-slot": "arrow",
                          class: ui.value.arrow({ class: props.ui?.arrow })
                        }, null, 2)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(unref(NavigationMenuViewport), {
                "data-slot": "viewport",
                class: ui.value.viewport({ class: props.ui?.viewport })
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              renderSlot(_ctx.$slots, "list-leading"),
              (openBlock(true), createBlock(Fragment, null, renderList(lists.value, (list, listIndex) => {
                return openBlock(), createBlock(Fragment, {
                  key: `list-${listIndex}`
                }, [
                  (openBlock(), createBlock(resolveDynamicComponent(__props.orientation === "vertical" ? unref(AccordionRoot) : unref(NavigationMenuList)), mergeProps({ ref_for: true }, __props.orientation === "vertical" && !__props.collapsed ? {
                    ...unref(accordionProps),
                    modelValue: __props.modelValue,
                    defaultValue: __props.defaultValue ?? getAccordionDefaultValue(list)
                  } : {}, {
                    as: "ul",
                    "data-slot": "list",
                    class: ui.value.list({ class: props.ui?.list })
                  }), {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(list, (item, index) => {
                        return openBlock(), createBlock(unref(ReuseItemTemplate), {
                          key: `list-${listIndex}-${index}`,
                          item,
                          index,
                          "data-slot": "item",
                          class: ui.value.item({ class: [props.ui?.item, item.ui?.item] })
                        }, null, 8, ["item", "index", "class"]);
                      }), 128))
                    ]),
                    _: 2
                  }, 1040, ["class"])),
                  __props.orientation === "vertical" && listIndex < lists.value.length - 1 ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-slot": "separator",
                    class: ui.value.separator({ class: props.ui?.separator })
                  }, null, 2)) : createCommentVNode("", true)
                ], 64);
              }), 128)),
              renderSlot(_ctx.$slots, "list-trailing"),
              __props.orientation === "horizontal" ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "viewportWrapper",
                class: ui.value.viewportWrapper({ class: props.ui?.viewportWrapper })
              }, [
                __props.arrow ? (openBlock(), createBlock(unref(NavigationMenuIndicator), {
                  key: 0,
                  "data-slot": "indicator",
                  class: ui.value.indicator({ class: props.ui?.indicator })
                }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      "data-slot": "arrow",
                      class: ui.value.arrow({ class: props.ui?.arrow })
                    }, null, 2)
                  ]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("", true),
                createVNode(unref(NavigationMenuViewport), {
                  "data-slot": "viewport",
                  class: ui.value.viewport({ class: props.ui?.viewport })
                }, null, 8, ["class"])
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/NavigationMenu.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _imports_0$1 = publicAssetsURL("/images/menu-icon.svg");
const _sfc_main$3 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      {
        label: "Продаж",
        // icon: "i-lucide-book-open",
        to: "/docs/getting-started",
        children: [
          {
            label: "Introduction",
            description: "Fully styled and customizable components for Nuxt."
            // icon: "i-lucide-house",
          },
          {
            label: "Installation",
            description: "Learn how to install and configure Nuxt UI in your application."
            // icon: "i-lucide-cloud-download",
          },
          {
            label: "Icons",
            // icon: "i-lucide-smile",
            description: "You have nothing to do, @nuxt/icon will handle it automatically."
          },
          {
            label: "Colors",
            // icon: "i-lucide-swatch-book",
            description: "Choose a primary and a neutral color from your Tailwind CSS theme."
          }
        ]
      },
      {
        label: "Орендувати",
        // icon: "i-lucide-database",
        to: "/docs/composables",
        children: [
          {
            label: "defineShortcuts",
            // icon: "i-lucide-file-text",
            description: "Define shortcuts for your application.",
            to: "/docs/composables/define-shortcuts"
          },
          {
            label: "useOverlay",
            // icon: "i-lucide-file-text",
            description: "Display a modal/slideover within your application.",
            to: "/docs/composables/use-overlay"
          },
          {
            label: "useToast",
            // icon: "i-lucide-file-text",
            description: "Display a toast within your application.",
            to: "/docs/composables/use-toast"
          }
        ]
      },
      {
        label: "Контакти",
        // icon: "i-lucide-box",
        to: "/contacts",
        active: true
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UHeader = _sfc_main$7;
      const _component_UNavigationMenu = _sfc_main$4;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_NuxtImg = __nuxt_component_3;
      const _component_UPopover = _sfc_main$6;
      const _component_UButton = _sfc_main$8$1;
      const _component_UModal = _sfc_main$9;
      const _component_UInput = _sfc_main$b;
      _push(ssrRenderComponent(_component_UHeader, mergeProps({ title: "Nuxt UI" }, _attrs), {
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UNavigationMenu, {
              color: "primary",
              items: unref(items),
              arrow: false,
              ui: {
                linkLabel: "uppercase"
              },
              highlight: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UNavigationMenu, {
                color: "primary",
                items: unref(items),
                arrow: false,
                ui: {
                  linkLabel: "uppercase"
                },
                highlight: ""
              }, null, 8, ["items"])
            ];
          }
        }),
        right: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UPopover, { ui: { content: "rounded-tl-none overflow-hidden" } }, {
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}><div class="p-7 pb-4 border-b-1 border-gray-300 flex flex-col gap-y-5"${_scopeId2}><div class="text-xl font-semibold text-[var(--color-accent-secondary)] hover:opacity-70 transition-opacity"${_scopeId2}><a href="tel:+380663641919"${_scopeId2}>+38 066 364 19 19</a></div><div class="flex flex-col gap-y-2"${_scopeId2}><div class="text-sm text-gray-400"${_scopeId2}>Email:</div><div class="hover:opacity-70 transition-opacity"${_scopeId2}><a href="mailto:bluvar.realty@gmail.com"${_scopeId2}> bluvar.realty@gmail.com </a></div></div><div class="flex flex-col gap-y-2"${_scopeId2}><div class="text-sm text-gray-400"${_scopeId2}>м. Чернівці</div><div${_scopeId2}><a target="_blank" href="https://maps.app.goo.gl/rNLRcB7fp75WUF7i7"${_scopeId2}> вул. Незалежності, 92а </a></div></div></div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.313109879449!2d25.969347900000006!3d48.23909980000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47340ebf473588b3%3A0x2074a074c7266c5e!2z0LLRg9C70LjRhtGPINCd0LXQt9Cw0LvQtdC20L3QvtGB0YLRliwgOTIsINCn0LDQs9C-0YAsINCn0LXRgNC90ZbQstC10YbRjNC60LAg0L7QsdC70LDRgdGC0YwsIDYwNDEy!5e0!3m2!1sru!2sua!4v1765022612289!5m2!1sru!2sua" width="420" height="280" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"${_scopeId2}></iframe></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("div", { class: "p-7 pb-4 border-b-1 border-gray-300 flex flex-col gap-y-5" }, [
                        createVNode("div", { class: "text-xl font-semibold text-[var(--color-accent-secondary)] hover:opacity-70 transition-opacity" }, [
                          createVNode("a", { href: "tel:+380663641919" }, "+38 066 364 19 19")
                        ]),
                        createVNode("div", { class: "flex flex-col gap-y-2" }, [
                          createVNode("div", { class: "text-sm text-gray-400" }, "Email:"),
                          createVNode("div", { class: "hover:opacity-70 transition-opacity" }, [
                            createVNode("a", { href: "mailto:bluvar.realty@gmail.com" }, " bluvar.realty@gmail.com ")
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-col gap-y-2" }, [
                          createVNode("div", { class: "text-sm text-gray-400" }, "м. Чернівці"),
                          createVNode("div", null, [
                            createVNode("a", {
                              target: "_blank",
                              href: "https://maps.app.goo.gl/rNLRcB7fp75WUF7i7"
                            }, " вул. Незалежності, 92а ")
                          ])
                        ])
                      ]),
                      createVNode("iframe", {
                        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.313109879449!2d25.969347900000006!3d48.23909980000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47340ebf473588b3%3A0x2074a074c7266c5e!2z0LLRg9C70LjRhtGPINCd0LXQt9Cw0LvQtdC20L3QvtGB0YLRliwgOTIsINCn0LDQs9C-0YAsINCn0LXRgNC90ZbQstC10YbRjNC60LAg0L7QsdC70LDRgdGC0YwsIDYwNDEy!5e0!3m2!1sru!2sua!4v1765022612289!5m2!1sru!2sua",
                        width: "420",
                        height: "280",
                        style: { "border": "0" },
                        allowfullscreen: "",
                        loading: "lazy",
                        referrerpolicy: "no-referrer-when-downgrade"
                      })
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    class: "uppercase px-5",
                    icon: "i-solar-phone-bold",
                    "trailing-icon": "i-heroicons-chevron-down",
                    color: "accent-primary",
                    variant: "ghost",
                    ui: {
                      trailingIcon: "size-4"
                    }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` +38 066 36 419 19 `);
                      } else {
                        return [
                          createTextVNode(" +38 066 36 419 19 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      class: "uppercase px-5",
                      icon: "i-solar-phone-bold",
                      "trailing-icon": "i-heroicons-chevron-down",
                      color: "accent-primary",
                      variant: "ghost",
                      ui: {
                        trailingIcon: "size-4"
                      }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" +38 066 36 419 19 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UModal, {
              class: "bg-light",
              ui: { content: "bg-light max-w-[420px] rounded-bl-none" },
              close: false
            }, {
              body: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col gap-y-7"${_scopeId2}><div class="flex flex-col gap-y-2"${_scopeId2}><div class="uppercase text-primary text-xl font-bold"${_scopeId2}> Виникли питання? Ми з радістю допоможемо вам </div><div class="text-xs"${_scopeId2}>Ми постараємось як найшвидше звязатись з вами</div></div><div class="flex flex-col gap-y-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UInput, {
                    size: "xl",
                    placeholder: "Як до вас звертатись?",
                    icon: "i-heroicons-user",
                    ui: {
                      base: "pt-3 pb-3"
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UInput, {
                    size: "xl",
                    icon: "i-heroicons-phone",
                    placeholder: "Ваш номер телефону",
                    ui: {
                      base: "pt-3 pb-3"
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, { size: "xl" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-center flex-1 uppercase"${_scopeId3}>Відправити</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-center flex-1 uppercase" }, "Відправити")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-y-7" }, [
                      createVNode("div", { class: "flex flex-col gap-y-2" }, [
                        createVNode("div", { class: "uppercase text-primary text-xl font-bold" }, " Виникли питання? Ми з радістю допоможемо вам "),
                        createVNode("div", { class: "text-xs" }, "Ми постараємось як найшвидше звязатись з вами")
                      ]),
                      createVNode("div", { class: "flex flex-col gap-y-4" }, [
                        createVNode(_component_UInput, {
                          size: "xl",
                          placeholder: "Як до вас звертатись?",
                          icon: "i-heroicons-user",
                          ui: {
                            base: "pt-3 pb-3"
                          }
                        }),
                        createVNode(_component_UInput, {
                          size: "xl",
                          icon: "i-heroicons-phone",
                          placeholder: "Ваш номер телефону",
                          ui: {
                            base: "pt-3 pb-3"
                          }
                        }),
                        createVNode(_component_UButton, { size: "xl" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-center flex-1 uppercase" }, "Відправити")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    class: "uppercase px-5",
                    color: "accent-secondary",
                    variant: "soft"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Консультація `);
                      } else {
                        return [
                          createTextVNode(" Консультація ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      class: "uppercase px-5",
                      color: "accent-secondary",
                      variant: "soft"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Консультація ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UModal, {
              fullscreen: "",
              ui: {
                header: "hidden"
              }
            }, {
              body: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` useless modal menu `);
                } else {
                  return [
                    createTextVNode(" useless modal menu ")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    class: "px-4",
                    variant: "ghost"
                  }, {
                    leading: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_0$1)} alt="menu" class="size-5"${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: _imports_0$1,
                            alt: "menu",
                            class: "size-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      class: "px-4",
                      variant: "ghost"
                    }, {
                      leading: withCtx(() => [
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: "menu",
                          class: "size-5"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex gap-3" }, [
                createVNode(_component_UPopover, { ui: { content: "rounded-tl-none overflow-hidden" } }, {
                  content: withCtx(() => [
                    createVNode("div", null, [
                      createVNode("div", { class: "p-7 pb-4 border-b-1 border-gray-300 flex flex-col gap-y-5" }, [
                        createVNode("div", { class: "text-xl font-semibold text-[var(--color-accent-secondary)] hover:opacity-70 transition-opacity" }, [
                          createVNode("a", { href: "tel:+380663641919" }, "+38 066 364 19 19")
                        ]),
                        createVNode("div", { class: "flex flex-col gap-y-2" }, [
                          createVNode("div", { class: "text-sm text-gray-400" }, "Email:"),
                          createVNode("div", { class: "hover:opacity-70 transition-opacity" }, [
                            createVNode("a", { href: "mailto:bluvar.realty@gmail.com" }, " bluvar.realty@gmail.com ")
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-col gap-y-2" }, [
                          createVNode("div", { class: "text-sm text-gray-400" }, "м. Чернівці"),
                          createVNode("div", null, [
                            createVNode("a", {
                              target: "_blank",
                              href: "https://maps.app.goo.gl/rNLRcB7fp75WUF7i7"
                            }, " вул. Незалежності, 92а ")
                          ])
                        ])
                      ]),
                      createVNode("iframe", {
                        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.313109879449!2d25.969347900000006!3d48.23909980000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47340ebf473588b3%3A0x2074a074c7266c5e!2z0LLRg9C70LjRhtGPINCd0LXQt9Cw0LvQtdC20L3QvtGB0YLRliwgOTIsINCn0LDQs9C-0YAsINCn0LXRgNC90ZbQstC10YbRjNC60LAg0L7QsdC70LDRgdGC0YwsIDYwNDEy!5e0!3m2!1sru!2sua!4v1765022612289!5m2!1sru!2sua",
                        width: "420",
                        height: "280",
                        style: { "border": "0" },
                        allowfullscreen: "",
                        loading: "lazy",
                        referrerpolicy: "no-referrer-when-downgrade"
                      })
                    ])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_UButton, {
                      class: "uppercase px-5",
                      icon: "i-solar-phone-bold",
                      "trailing-icon": "i-heroicons-chevron-down",
                      color: "accent-primary",
                      variant: "ghost",
                      ui: {
                        trailingIcon: "size-4"
                      }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" +38 066 36 419 19 ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UModal, {
                  class: "bg-light",
                  ui: { content: "bg-light max-w-[420px] rounded-bl-none" },
                  close: false
                }, {
                  body: withCtx(() => [
                    createVNode("div", { class: "flex flex-col gap-y-7" }, [
                      createVNode("div", { class: "flex flex-col gap-y-2" }, [
                        createVNode("div", { class: "uppercase text-primary text-xl font-bold" }, " Виникли питання? Ми з радістю допоможемо вам "),
                        createVNode("div", { class: "text-xs" }, "Ми постараємось як найшвидше звязатись з вами")
                      ]),
                      createVNode("div", { class: "flex flex-col gap-y-4" }, [
                        createVNode(_component_UInput, {
                          size: "xl",
                          placeholder: "Як до вас звертатись?",
                          icon: "i-heroicons-user",
                          ui: {
                            base: "pt-3 pb-3"
                          }
                        }),
                        createVNode(_component_UInput, {
                          size: "xl",
                          icon: "i-heroicons-phone",
                          placeholder: "Ваш номер телефону",
                          ui: {
                            base: "pt-3 pb-3"
                          }
                        }),
                        createVNode(_component_UButton, { size: "xl" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-center flex-1 uppercase" }, "Відправити")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_UButton, {
                      class: "uppercase px-5",
                      color: "accent-secondary",
                      variant: "soft"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Консультація ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UModal, {
                  fullscreen: "",
                  ui: {
                    header: "hidden"
                  }
                }, {
                  body: withCtx(() => [
                    createTextVNode(" useless modal menu ")
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_UButton, {
                      class: "px-4",
                      variant: "ghost"
                    }, {
                      leading: withCtx(() => [
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: "menu",
                          class: "size-5"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              class: "h-[var(--ui-header-height)] flex pb-3 hover:opacity-80 transition-opacity",
              to: "/"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtImg, { src: "/images/logo-full.svg" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtImg, { src: "/images/logo-full.svg" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_NuxtLink, {
                  class: "h-[var(--ui-header-height)] flex pb-3 hover:opacity-80 transition-opacity",
                  to: "/"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtImg, { src: "/images/logo-full.svg" })
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "flex flex-col lg:grid lg:grid-cols-10 lg:gap-10",
    "left": "lg:col-span-2",
    "center": "lg:col-span-8",
    "right": "lg:col-span-2 order-first lg:order-last"
  },
  "variants": {
    "left": {
      "true": ""
    },
    "right": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "left": true,
      "right": true,
      "class": {
        "center": "lg:col-span-6"
      }
    },
    {
      "left": false,
      "right": false,
      "class": {
        "center": "lg:col-span-10"
      }
    }
  ]
};
const _sfc_main$2 = {
  __name: "UPage",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.page || {} })({
      left: !!slots.left,
      right: !!slots.right
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.left) {
              _push2(ssrRenderComponent(unref(Slot), {
                "data-slot": "left",
                class: ui.value.left({ class: props.ui?.left })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "left", {}, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "left")
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div data-slot="center" class="${ssrRenderClass(ui.value.center({ class: props.ui?.center }))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            if (!!slots.right) {
              _push2(ssrRenderComponent(unref(Slot), {
                "data-slot": "right",
                class: ui.value.right({ class: props.ui?.right })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "right", {}, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "right")
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !!slots.left ? (openBlock(), createBlock(unref(Slot), {
                key: 0,
                "data-slot": "left",
                class: ui.value.left({ class: props.ui?.left })
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "left")
                ]),
                _: 3
              }, 8, ["class"])) : createCommentVNode("", true),
              createVNode("div", {
                "data-slot": "center",
                class: ui.value.center({ class: props.ui?.center })
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2),
              !!slots.right ? (openBlock(), createBlock(unref(Slot), {
                key: 1,
                "data-slot": "right",
                class: ui.value.right({ class: props.ui?.right })
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "right")
                ]),
                _: 3
              }, 8, ["class"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Page.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/images/footer-logo.svg");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_UContainer = _sfc_main$1$1;
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_UButton = _sfc_main$8$1;
  const _component_UIcon = _sfc_main$e;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "border-t border-gray-200 pb-10" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_UContainer, { class: "flex flex-col gap-y-10" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-end justify-between"${_scopeId}><div class="flex basis-1/3"${_scopeId}><img class="h-16"${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId}></div><div class="flex flex-col items-center basis-1/3 h-full"${_scopeId}><div class="flex gap-x-7 items-end h-full uppercase"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "hover:underline"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Продаж `);
            } else {
              return [
                createTextVNode(" Продаж ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "hover:underline"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Орендувати `);
            } else {
              return [
                createTextVNode(" Орендувати ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "hover:underline"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Контакти `);
            } else {
              return [
                createTextVNode(" Контакти ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div><div class="flex items-center justify-end basis-1/3"${_scopeId}><div class="flex gap-x-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_UButton, {
          variant: "outline-muted",
          color: "primary",
          icon: "i-lucide-instagram",
          class: "p-3"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UButton, {
          variant: "outline-muted",
          color: "primary",
          icon: "i-lucide-youtube",
          class: "p-3"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UButton, {
          variant: "outline-muted",
          color: "primary",
          icon: "i-lucide-music-2",
          class: "p-3"
        }, null, _parent2, _scopeId));
        _push2(`</div></div></div><div class="flex gap-x-4"${_scopeId}><!--[-->`);
        ssrRenderList([
          {
            // icon: 'i-lucide-mail',
            icon: "i-tabler-mail-filled",
            text: "bluvar.realty@gmail.com"
          },
          {
            icon: "i-solar-phone-bold",
            text: "+38 (099) 999-99-99"
          },
          {
            icon: "i-fluent-location-20-filled",
            text: "м. Чернівці, вул. Незалежності, 92а"
          }
        ], ({ icon, text }) => {
          _push2(`<div class="bg-light-gray font-semibold flex gap-x-3 items-center w-full p-2 pr-4 rounded-full"${_scopeId}><div class="h-11 w-11 flex items-center justify-center bg-white shadow-md rounded-full"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_UIcon, {
            name: icon,
            class: "h-5 w-5 text-[var(--color-accent-secondary)]"
          }, null, _parent2, _scopeId));
          _push2(`</div><div${_scopeId}>${ssrInterpolate(text)}</div></div>`);
        });
        _push2(`<!--]--></div><div class="text-center text-sm text-gray-400"${_scopeId}> © 2025 Bulvar Realty. Всі права захищені </div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-end justify-between" }, [
            createVNode("div", { class: "flex basis-1/3" }, [
              createVNode("img", {
                class: "h-16",
                src: _imports_0,
                alt: ""
              })
            ]),
            createVNode("div", { class: "flex flex-col items-center basis-1/3 h-full" }, [
              createVNode("div", { class: "flex gap-x-7 items-end h-full uppercase" }, [
                createVNode(_component_NuxtLink, {
                  to: "/",
                  class: "hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Продаж ")
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "/",
                  class: "hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Орендувати ")
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "/",
                  class: "hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Контакти ")
                  ]),
                  _: 1
                })
              ])
            ]),
            createVNode("div", { class: "flex items-center justify-end basis-1/3" }, [
              createVNode("div", { class: "flex gap-x-3" }, [
                createVNode(_component_UButton, {
                  variant: "outline-muted",
                  color: "primary",
                  icon: "i-lucide-instagram",
                  class: "p-3"
                }),
                createVNode(_component_UButton, {
                  variant: "outline-muted",
                  color: "primary",
                  icon: "i-lucide-youtube",
                  class: "p-3"
                }),
                createVNode(_component_UButton, {
                  variant: "outline-muted",
                  color: "primary",
                  icon: "i-lucide-music-2",
                  class: "p-3"
                })
              ])
            ])
          ]),
          createVNode("div", { class: "flex gap-x-4" }, [
            (openBlock(), createBlock(Fragment, null, renderList([
              {
                // icon: 'i-lucide-mail',
                icon: "i-tabler-mail-filled",
                text: "bluvar.realty@gmail.com"
              },
              {
                icon: "i-solar-phone-bold",
                text: "+38 (099) 999-99-99"
              },
              {
                icon: "i-fluent-location-20-filled",
                text: "м. Чернівці, вул. Незалежності, 92а"
              }
            ], ({ icon, text }) => {
              return createVNode("div", { class: "bg-light-gray font-semibold flex gap-x-3 items-center w-full p-2 pr-4 rounded-full" }, [
                createVNode("div", { class: "h-11 w-11 flex items-center justify-center bg-white shadow-md rounded-full" }, [
                  createVNode(_component_UIcon, {
                    name: icon,
                    class: "h-5 w-5 text-[var(--color-accent-secondary)]"
                  }, null, 8, ["name"])
                ]),
                createVNode("div", null, toDisplayString(text), 1)
              ]);
            }), 64))
          ]),
          createVNode("div", { class: "text-center text-sm text-gray-400" }, " © 2025 Bulvar Realty. Всі права захищені ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]), { __name: "Footer" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = _sfc_main$3;
  const _component_UPage = _sfc_main$2;
  const _component_Footer = __nuxt_component_2;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_UPage, null, {
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
  _push(`<div class="mt-14">`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-Bfk2CzjG.mjs.map
