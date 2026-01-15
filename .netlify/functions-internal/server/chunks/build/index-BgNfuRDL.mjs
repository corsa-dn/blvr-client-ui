import { _ as _sfc_main$4, c as _sfc_main$1$3, a as _sfc_main$3 } from './index-DzWk3S9p.mjs';
import { _ as _sfc_main$2, a as _sfc_main$1$2 } from './index-ZbGCyJKK.mjs';
import { _ as _sfc_main$1$1 } from './Input-DlCeRXhR.mjs';
import { withCtx, unref, createVNode, createTextVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, useSlots, computed, mergeProps, renderSlot, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { useForwardPropsEmits, PaginationRoot, PaginationList, PaginationFirst, PaginationPrev, PaginationListItem, PaginationEllipsis, PaginationNext, PaginationLast } from 'reka-ui';
import { reactivePick } from '@vueuse/core';
import { n as useRoute, k as useLocale, b as useAppConfig, t as tv, f as _sfc_main$8 } from './server.mjs';
import '../nitro/nitro.mjs';
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
import './Tabs-CSFOznZF.mjs';
import './Badge-BppIIJgc.mjs';
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

const theme = {
  "slots": {
    "root": "",
    "list": "flex items-center gap-1",
    "ellipsis": "pointer-events-none",
    "label": "min-w-5 text-center",
    "first": "",
    "prev": "",
    "item": "",
    "next": "",
    "last": ""
  }
};
const _sfc_main$1 = {
  __name: "UPagination",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    firstIcon: { type: null, required: false },
    prevIcon: { type: null, required: false },
    nextIcon: { type: null, required: false },
    lastIcon: { type: null, required: false },
    ellipsisIcon: { type: null, required: false },
    color: { type: null, required: false, default: "neutral" },
    variant: { type: null, required: false, default: "outline" },
    activeColor: { type: null, required: false, default: "primary" },
    activeVariant: { type: null, required: false, default: "solid" },
    showControls: { type: Boolean, required: false, default: true },
    size: { type: null, required: false },
    to: { type: Function, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    defaultPage: { type: Number, required: false },
    disabled: { type: Boolean, required: false },
    itemsPerPage: { type: Number, required: false, default: 10 },
    page: { type: Number, required: false },
    showEdges: { type: Boolean, required: false, default: false },
    siblingCount: { type: Number, required: false, default: 2 },
    total: { type: Number, required: false, default: 0 }
  },
  emits: ["update:page"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const { dir } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "defaultPage", "disabled", "itemsPerPage", "page", "showEdges", "siblingCount", "total"), emits);
    const firstIcon = computed(() => props.firstIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronDoubleRight : appConfig.ui.icons.chevronDoubleLeft));
    const prevIcon = computed(() => props.prevIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronRight : appConfig.ui.icons.chevronLeft));
    const nextIcon = computed(() => props.nextIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronLeft : appConfig.ui.icons.chevronRight));
    const lastIcon = computed(() => props.lastIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronDoubleLeft : appConfig.ui.icons.chevronDoubleRight));
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.pagination || {} })());
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PaginationRoot), mergeProps(unref(rootProps), {
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx(({ page, pageCount }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(PaginationList), {
              "data-slot": "list",
              class: ui.value.list({ class: props.ui?.list })
            }, {
              default: withCtx(({ items }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (__props.showControls || !!slots.first) {
                    _push3(ssrRenderComponent(unref(PaginationFirst), {
                      "as-child": "",
                      "data-slot": "first",
                      class: ui.value.first({ class: props.ui?.first })
                    }, {
                      default: withCtx((_, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "first", {}, () => {
                            _push4(ssrRenderComponent(_sfc_main$8, {
                              color: __props.color,
                              variant: __props.variant,
                              size: __props.size,
                              icon: firstIcon.value,
                              to: __props.to?.(1)
                            }, null, _parent4, _scopeId3));
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "first", {}, () => [
                              createVNode(_sfc_main$8, {
                                color: __props.color,
                                variant: __props.variant,
                                size: __props.size,
                                icon: firstIcon.value,
                                to: __props.to?.(1)
                              }, null, 8, ["color", "variant", "size", "icon", "to"])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (__props.showControls || !!slots.prev) {
                    _push3(ssrRenderComponent(unref(PaginationPrev), {
                      "as-child": "",
                      "data-slot": "prev",
                      class: ui.value.prev({ class: props.ui?.prev })
                    }, {
                      default: withCtx((_, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "prev", {}, () => {
                            _push4(ssrRenderComponent(_sfc_main$8, {
                              color: __props.color,
                              variant: __props.variant,
                              size: __props.size,
                              icon: prevIcon.value,
                              to: page > 1 ? __props.to?.(page - 1) : void 0
                            }, null, _parent4, _scopeId3));
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "prev", {}, () => [
                              createVNode(_sfc_main$8, {
                                color: __props.color,
                                variant: __props.variant,
                                size: __props.size,
                                icon: prevIcon.value,
                                to: page > 1 ? __props.to?.(page - 1) : void 0
                              }, null, 8, ["color", "variant", "size", "icon", "to"])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<!--[-->`);
                  ssrRenderList(items, (item, index) => {
                    _push3(`<!--[-->`);
                    if (item.type === "page") {
                      _push3(ssrRenderComponent(unref(PaginationListItem), {
                        "as-child": "",
                        value: item.value,
                        "data-slot": "item",
                        class: ui.value.item({ class: props.ui?.item })
                      }, {
                        default: withCtx((_, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            ssrRenderSlot(_ctx.$slots, "item", mergeProps({ ref_for: true }, { item, index, page, pageCount }), () => {
                              _push4(ssrRenderComponent(_sfc_main$8, {
                                color: page === item.value ? __props.activeColor : __props.color,
                                variant: page === item.value ? __props.activeVariant : __props.variant,
                                size: __props.size,
                                label: String(item.value),
                                ui: { label: ui.value.label() },
                                to: __props.to?.(item.value),
                                square: ""
                              }, null, _parent4, _scopeId3));
                            }, _push4, _parent4, _scopeId3);
                          } else {
                            return [
                              renderSlot(_ctx.$slots, "item", mergeProps({ ref_for: true }, { item, index, page, pageCount }), () => [
                                createVNode(_sfc_main$8, {
                                  color: page === item.value ? __props.activeColor : __props.color,
                                  variant: page === item.value ? __props.activeVariant : __props.variant,
                                  size: __props.size,
                                  label: String(item.value),
                                  ui: { label: ui.value.label() },
                                  to: __props.to?.(item.value),
                                  square: ""
                                }, null, 8, ["color", "variant", "size", "label", "ui", "to"])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(unref(PaginationEllipsis), {
                        "as-child": "",
                        "data-slot": "ellipsis",
                        class: ui.value.ellipsis({ class: props.ui?.ellipsis })
                      }, {
                        default: withCtx((_, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            ssrRenderSlot(_ctx.$slots, "ellipsis", { ui: ui.value }, () => {
                              _push4(ssrRenderComponent(_sfc_main$8, {
                                as: "div",
                                color: __props.color,
                                variant: __props.variant,
                                size: __props.size,
                                icon: __props.ellipsisIcon || unref(appConfig).ui.icons.ellipsis
                              }, null, _parent4, _scopeId3));
                            }, _push4, _parent4, _scopeId3);
                          } else {
                            return [
                              renderSlot(_ctx.$slots, "ellipsis", { ui: ui.value }, () => [
                                createVNode(_sfc_main$8, {
                                  as: "div",
                                  color: __props.color,
                                  variant: __props.variant,
                                  size: __props.size,
                                  icon: __props.ellipsisIcon || unref(appConfig).ui.icons.ellipsis
                                }, null, 8, ["color", "variant", "size", "icon"])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    }
                    _push3(`<!--]-->`);
                  });
                  _push3(`<!--]-->`);
                  if (__props.showControls || !!slots.next) {
                    _push3(ssrRenderComponent(unref(PaginationNext), {
                      "as-child": "",
                      "data-slot": "next",
                      class: ui.value.next({ class: props.ui?.next })
                    }, {
                      default: withCtx((_, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "next", {}, () => {
                            _push4(ssrRenderComponent(_sfc_main$8, {
                              color: __props.color,
                              variant: __props.variant,
                              size: __props.size,
                              icon: nextIcon.value,
                              to: page < pageCount ? __props.to?.(page + 1) : void 0
                            }, null, _parent4, _scopeId3));
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "next", {}, () => [
                              createVNode(_sfc_main$8, {
                                color: __props.color,
                                variant: __props.variant,
                                size: __props.size,
                                icon: nextIcon.value,
                                to: page < pageCount ? __props.to?.(page + 1) : void 0
                              }, null, 8, ["color", "variant", "size", "icon", "to"])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (__props.showControls || !!slots.last) {
                    _push3(ssrRenderComponent(unref(PaginationLast), {
                      "as-child": "",
                      "data-slot": "last",
                      class: ui.value.last({ class: props.ui?.last })
                    }, {
                      default: withCtx((_, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "last", {}, () => {
                            _push4(ssrRenderComponent(_sfc_main$8, {
                              color: __props.color,
                              variant: __props.variant,
                              size: __props.size,
                              icon: lastIcon.value,
                              to: __props.to?.(pageCount)
                            }, null, _parent4, _scopeId3));
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "last", {}, () => [
                              createVNode(_sfc_main$8, {
                                color: __props.color,
                                variant: __props.variant,
                                size: __props.size,
                                icon: lastIcon.value,
                                to: __props.to?.(pageCount)
                              }, null, 8, ["color", "variant", "size", "icon", "to"])
                            ])
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
                    __props.showControls || !!slots.first ? (openBlock(), createBlock(unref(PaginationFirst), {
                      key: 0,
                      "as-child": "",
                      "data-slot": "first",
                      class: ui.value.first({ class: props.ui?.first })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "first", {}, () => [
                          createVNode(_sfc_main$8, {
                            color: __props.color,
                            variant: __props.variant,
                            size: __props.size,
                            icon: firstIcon.value,
                            to: __props.to?.(1)
                          }, null, 8, ["color", "variant", "size", "icon", "to"])
                        ])
                      ]),
                      _: 3
                    }, 8, ["class"])) : createCommentVNode("", true),
                    __props.showControls || !!slots.prev ? (openBlock(), createBlock(unref(PaginationPrev), {
                      key: 1,
                      "as-child": "",
                      "data-slot": "prev",
                      class: ui.value.prev({ class: props.ui?.prev })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "prev", {}, () => [
                          createVNode(_sfc_main$8, {
                            color: __props.color,
                            variant: __props.variant,
                            size: __props.size,
                            icon: prevIcon.value,
                            to: page > 1 ? __props.to?.(page - 1) : void 0
                          }, null, 8, ["color", "variant", "size", "icon", "to"])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true),
                    (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index) => {
                      return openBlock(), createBlock(Fragment, { key: index }, [
                        item.type === "page" ? (openBlock(), createBlock(unref(PaginationListItem), {
                          key: 0,
                          "as-child": "",
                          value: item.value,
                          "data-slot": "item",
                          class: ui.value.item({ class: props.ui?.item })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "item", mergeProps({ ref_for: true }, { item, index, page, pageCount }), () => [
                              createVNode(_sfc_main$8, {
                                color: page === item.value ? __props.activeColor : __props.color,
                                variant: page === item.value ? __props.activeVariant : __props.variant,
                                size: __props.size,
                                label: String(item.value),
                                ui: { label: ui.value.label() },
                                to: __props.to?.(item.value),
                                square: ""
                              }, null, 8, ["color", "variant", "size", "label", "ui", "to"])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["value", "class"])) : (openBlock(), createBlock(unref(PaginationEllipsis), {
                          key: 1,
                          "as-child": "",
                          "data-slot": "ellipsis",
                          class: ui.value.ellipsis({ class: props.ui?.ellipsis })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "ellipsis", { ui: ui.value }, () => [
                              createVNode(_sfc_main$8, {
                                as: "div",
                                color: __props.color,
                                variant: __props.variant,
                                size: __props.size,
                                icon: __props.ellipsisIcon || unref(appConfig).ui.icons.ellipsis
                              }, null, 8, ["color", "variant", "size", "icon"])
                            ])
                          ]),
                          _: 3
                        }, 8, ["class"]))
                      ], 64);
                    }), 128)),
                    __props.showControls || !!slots.next ? (openBlock(), createBlock(unref(PaginationNext), {
                      key: 2,
                      "as-child": "",
                      "data-slot": "next",
                      class: ui.value.next({ class: props.ui?.next })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "next", {}, () => [
                          createVNode(_sfc_main$8, {
                            color: __props.color,
                            variant: __props.variant,
                            size: __props.size,
                            icon: nextIcon.value,
                            to: page < pageCount ? __props.to?.(page + 1) : void 0
                          }, null, 8, ["color", "variant", "size", "icon", "to"])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true),
                    __props.showControls || !!slots.last ? (openBlock(), createBlock(unref(PaginationLast), {
                      key: 3,
                      "as-child": "",
                      "data-slot": "last",
                      class: ui.value.last({ class: props.ui?.last })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "last", {}, () => [
                          createVNode(_sfc_main$8, {
                            color: __props.color,
                            variant: __props.variant,
                            size: __props.size,
                            icon: lastIcon.value,
                            to: __props.to?.(pageCount)
                          }, null, 8, ["color", "variant", "size", "icon", "to"])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(PaginationList), {
                "data-slot": "list",
                class: ui.value.list({ class: props.ui?.list })
              }, {
                default: withCtx(({ items }) => [
                  __props.showControls || !!slots.first ? (openBlock(), createBlock(unref(PaginationFirst), {
                    key: 0,
                    "as-child": "",
                    "data-slot": "first",
                    class: ui.value.first({ class: props.ui?.first })
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "first", {}, () => [
                        createVNode(_sfc_main$8, {
                          color: __props.color,
                          variant: __props.variant,
                          size: __props.size,
                          icon: firstIcon.value,
                          to: __props.to?.(1)
                        }, null, 8, ["color", "variant", "size", "icon", "to"])
                      ])
                    ]),
                    _: 3
                  }, 8, ["class"])) : createCommentVNode("", true),
                  __props.showControls || !!slots.prev ? (openBlock(), createBlock(unref(PaginationPrev), {
                    key: 1,
                    "as-child": "",
                    "data-slot": "prev",
                    class: ui.value.prev({ class: props.ui?.prev })
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "prev", {}, () => [
                        createVNode(_sfc_main$8, {
                          color: __props.color,
                          variant: __props.variant,
                          size: __props.size,
                          icon: prevIcon.value,
                          to: page > 1 ? __props.to?.(page - 1) : void 0
                        }, null, 8, ["color", "variant", "size", "icon", "to"])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class"])) : createCommentVNode("", true),
                  (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index) => {
                    return openBlock(), createBlock(Fragment, { key: index }, [
                      item.type === "page" ? (openBlock(), createBlock(unref(PaginationListItem), {
                        key: 0,
                        "as-child": "",
                        value: item.value,
                        "data-slot": "item",
                        class: ui.value.item({ class: props.ui?.item })
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "item", mergeProps({ ref_for: true }, { item, index, page, pageCount }), () => [
                            createVNode(_sfc_main$8, {
                              color: page === item.value ? __props.activeColor : __props.color,
                              variant: page === item.value ? __props.activeVariant : __props.variant,
                              size: __props.size,
                              label: String(item.value),
                              ui: { label: ui.value.label() },
                              to: __props.to?.(item.value),
                              square: ""
                            }, null, 8, ["color", "variant", "size", "label", "ui", "to"])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["value", "class"])) : (openBlock(), createBlock(unref(PaginationEllipsis), {
                        key: 1,
                        "as-child": "",
                        "data-slot": "ellipsis",
                        class: ui.value.ellipsis({ class: props.ui?.ellipsis })
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "ellipsis", { ui: ui.value }, () => [
                            createVNode(_sfc_main$8, {
                              as: "div",
                              color: __props.color,
                              variant: __props.variant,
                              size: __props.size,
                              icon: __props.ellipsisIcon || unref(appConfig).ui.icons.ellipsis
                            }, null, 8, ["color", "variant", "size", "icon"])
                          ])
                        ]),
                        _: 3
                      }, 8, ["class"]))
                    ], 64);
                  }), 128)),
                  __props.showControls || !!slots.next ? (openBlock(), createBlock(unref(PaginationNext), {
                    key: 2,
                    "as-child": "",
                    "data-slot": "next",
                    class: ui.value.next({ class: props.ui?.next })
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "next", {}, () => [
                        createVNode(_sfc_main$8, {
                          color: __props.color,
                          variant: __props.variant,
                          size: __props.size,
                          icon: nextIcon.value,
                          to: page < pageCount ? __props.to?.(page + 1) : void 0
                        }, null, 8, ["color", "variant", "size", "icon", "to"])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class"])) : createCommentVNode("", true),
                  __props.showControls || !!slots.last ? (openBlock(), createBlock(unref(PaginationLast), {
                    key: 3,
                    "as-child": "",
                    "data-slot": "last",
                    class: ui.value.last({ class: props.ui?.last })
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "last", {}, () => [
                        createVNode(_sfc_main$8, {
                          color: __props.color,
                          variant: __props.variant,
                          size: __props.size,
                          icon: lastIcon.value,
                          to: __props.to?.(pageCount)
                        }, null, 8, ["color", "variant", "size", "icon", "to"])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class"])) : createCommentVNode("", true)
                ]),
                _: 2
              }, 1032, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Pagination.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const query = route.query;
    const { city, deal_type, property_type } = query;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UMain = _sfc_main$4;
      const _component_DealsFilter = _sfc_main$2;
      const _component_UContainer = _sfc_main$1$1;
      const _component_USelect = _sfc_main$1$2;
      const _component_DealCard = _sfc_main$1$3;
      const _component_UPagination = _sfc_main$1;
      const _component_PromoCallbackBanner = _sfc_main$3;
      _push(ssrRenderComponent(_component_UMain, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-b-1 py-5 border-gray-200 py-14 min-h-[42vh] gap-y-4 flex flex-col justify-center items-center bg-[#F7F8FD] hero-lines-bg--dark"${_scopeId}><div class="flex items-center gap-x-4 text-sm text-gray-400"${_scopeId}><span class="text-red-100"${_scopeId}><object data="/images/logo.svg" type="image/svg+xml" class="w-5 h-5"${_scopeId}></object></span><div${_scopeId}>/</div><div${_scopeId}>Купити</div></div><div class="text-3xl mb-5"${_scopeId}>${ssrInterpolate(unref(deal_type) === "rent" ? "Орендувати" : "Купити")} квартиру </div>`);
            _push2(ssrRenderComponent(_component_DealsFilter, null, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UContainer, { class: "py-7" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col gap-y-5"${_scopeId2}><div class="flex items-center justify-between"${_scopeId2}><div${_scopeId2}><span class="font-semibold"${_scopeId2}>104</span> оголошення знайдено </div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_USelect, {
                    items: [
                      { label: "За новизною", value: "newest" },
                      { label: "За ціною (зростання)", value: "price-asc" },
                      { label: "За ціною (спадання)", value: "price-desc" }
                    ],
                    variant: "outline",
                    class: "w-48",
                    size: "xl",
                    placeholder: "За новизною"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="grid grid-cols-3 gap-5"${_scopeId2}><!--[-->`);
                  ssrRenderList(18, (deal) => {
                    _push3(ssrRenderComponent(_component_DealCard, {
                      key: deal,
                      deal
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div><div class="pt-7 flex justify-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UPagination, {
                    page: _ctx.page,
                    "onUpdate:page": ($event) => _ctx.page = $event,
                    variant: "ghost",
                    color: "accent-primary",
                    total: 100,
                    "show-edges": "",
                    "sibling-count": 1,
                    size: "xl"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="mt-7"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_PromoCallbackBanner, null, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-y-5" }, [
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("div", null, [
                          createVNode("span", { class: "font-semibold" }, "104"),
                          createTextVNode(" оголошення знайдено ")
                        ]),
                        createVNode("div", null, [
                          createVNode(_component_USelect, {
                            items: [
                              { label: "За новизною", value: "newest" },
                              { label: "За ціною (зростання)", value: "price-asc" },
                              { label: "За ціною (спадання)", value: "price-desc" }
                            ],
                            variant: "outline",
                            class: "w-48",
                            size: "xl",
                            placeholder: "За новизною"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-3 gap-5" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(18, (deal) => {
                          return createVNode(_component_DealCard, {
                            key: deal,
                            deal
                          }, null, 8, ["deal"]);
                        }), 64))
                      ]),
                      createVNode("div", { class: "pt-7 flex justify-center" }, [
                        createVNode(_component_UPagination, {
                          page: _ctx.page,
                          "onUpdate:page": ($event) => _ctx.page = $event,
                          variant: "ghost",
                          color: "accent-primary",
                          total: 100,
                          "show-edges": "",
                          "sibling-count": 1,
                          size: "xl"
                        }, null, 8, ["page", "onUpdate:page"])
                      ]),
                      createVNode("div", { class: "mt-7" }, [
                        createVNode(_component_PromoCallbackBanner)
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "border-b-1 py-5 border-gray-200 py-14 min-h-[42vh] gap-y-4 flex flex-col justify-center items-center bg-[#F7F8FD] hero-lines-bg--dark" }, [
                createVNode("div", { class: "flex items-center gap-x-4 text-sm text-gray-400" }, [
                  createVNode("span", { class: "text-red-100" }, [
                    createVNode("object", {
                      data: "/images/logo.svg",
                      type: "image/svg+xml",
                      class: "w-5 h-5"
                    })
                  ]),
                  createVNode("div", null, "/"),
                  createVNode("div", null, "Купити")
                ]),
                createVNode("div", { class: "text-3xl mb-5" }, toDisplayString(unref(deal_type) === "rent" ? "Орендувати" : "Купити") + " квартиру ", 1),
                createVNode(_component_DealsFilter)
              ]),
              createVNode("div", null, [
                createVNode(_component_UContainer, { class: "py-7" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex flex-col gap-y-5" }, [
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("div", null, [
                          createVNode("span", { class: "font-semibold" }, "104"),
                          createTextVNode(" оголошення знайдено ")
                        ]),
                        createVNode("div", null, [
                          createVNode(_component_USelect, {
                            items: [
                              { label: "За новизною", value: "newest" },
                              { label: "За ціною (зростання)", value: "price-asc" },
                              { label: "За ціною (спадання)", value: "price-desc" }
                            ],
                            variant: "outline",
                            class: "w-48",
                            size: "xl",
                            placeholder: "За новизною"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-3 gap-5" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(18, (deal) => {
                          return createVNode(_component_DealCard, {
                            key: deal,
                            deal
                          }, null, 8, ["deal"]);
                        }), 64))
                      ]),
                      createVNode("div", { class: "pt-7 flex justify-center" }, [
                        createVNode(_component_UPagination, {
                          page: _ctx.page,
                          "onUpdate:page": ($event) => _ctx.page = $event,
                          variant: "ghost",
                          color: "accent-primary",
                          total: 100,
                          "show-edges": "",
                          "sibling-count": 1,
                          size: "xl"
                        }, null, 8, ["page", "onUpdate:page"])
                      ]),
                      createVNode("div", { class: "mt-7" }, [
                        createVNode(_component_PromoCallbackBanner)
                      ])
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/deals/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BgNfuRDL.mjs.map
