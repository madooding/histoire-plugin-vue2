import a, { defineComponent as $, ref as m, computed as g, onMounted as A, onUpdated as V, onBeforeUnmount as k, h as i } from "vue";
import { reactive as w, createApp as U, h as v } from "@histoire/vendors/vue";
import { components as C } from "@histoire/controls";
import b from "./Story.js";
import q from "./Variant.js";
import { syncStateBundledAndExternal as B } from "./util.js";
function j(p) {
  a.config.productionTip = !1, a.component("Story", b), a.component("Variant", q);
  for (const r in C)
    a.component(r, I(C[r]));
}
function I(p) {
  return $({
    name: p.name,
    inheritAttrs: !1,
    setup(r, { attrs: u, listeners: y }) {
      const d = m(), h = m(), o = w({});
      B(o, g(() => ({
        attrs: u,
        listeners: y
      })));
      let n = [];
      const s = m([]);
      function S() {
        s.value.forEach((f, l) => {
          const t = h.value.querySelector(`[renderslotid="${l}"]`);
          if (!t)
            return;
          const e = d.value.querySelector(`[slotid="${l}"]`);
          for (; e.firstChild; )
            e.removeChild(e.lastChild);
          e.appendChild(t);
        });
      }
      let c;
      return A(() => {
        c = U({
          mounted() {
            s.value = n, n = [];
          },
          updated() {
            s.value = n, n = [];
          },
          render() {
            const f = {};
            if (o.attrs)
              for (const t in o.attrs) {
                const e = t === "value" ? "modelValue" : t;
                f[e] = o.attrs[t];
              }
            const l = {};
            if (o.listeners)
              for (const t in o.listeners) {
                const e = t === "input" ? "update:modelValue" : t;
                l[`on${e.charAt(0).toUpperCase()}${e.substring(1)}`] = (...E) => o.listeners[t](...E);
              }
            return v(p, {
              ...f,
              ...l,
              key: "component"
            }, {
              default: (t) => (n.push(t), v("div", {
                slotId: n.length - 1
              }))
            });
          }
        }), c.mount(d.value);
      }), V(() => {
        S();
      }), k(() => {
        c.unmount();
      }), {
        el: d,
        slotEl: h,
        slotCalls: s
      };
    },
    render() {
      return i("div", [
        i("div", {
          ref: "el"
        }),
        i("div", {
          ref: "slotEl"
        }, this.slotCalls.map((r, u) => i("div", {
          attrs: {
            renderSlotId: u
          }
        }, this.$scopedSlots.default(r))))
      ]);
    }
  });
}
export {
  j as registerGlobalComponents
};
