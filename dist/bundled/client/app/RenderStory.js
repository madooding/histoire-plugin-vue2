import w, { reactive as h, onMounted as S, h as R } from "vue";
import { defineComponent as V, ref as x, onMounted as O, watch as j, onBeforeUnmount as $, h as A } from "@histoire/vendors/vue";
import { registerGlobalComponents as C } from "./global-components.js";
import { RouterLinkStub as M } from "./RouterLinkStub.js";
import * as s from "virtual:$histoire-setup";
import * as u from "virtual:$histoire-generated-global-setup";
import { syncStateBundledAndExternal as N } from "./util.js";
const U = V({
  name: "RenderStory",
  props: {
    variant: {
      type: Object,
      required: !0
    },
    story: {
      type: Object,
      required: !0
    },
    slotName: {
      type: String,
      default: "default"
    }
  },
  emits: {
    ready: () => !0
  },
  setup(t, { emit: g }) {
    const c = x();
    let e, a = !1;
    const f = h({});
    N(t.variant.state, f);
    function d() {
      e && (e.$destroy(), e = null);
    }
    async function l() {
      if (a)
        return;
      a = !0, d();
      let m;
      const r = {};
      if (typeof (u == null ? void 0 : u.setupVue2) == "function") {
        const n = await u.setupVue2({
          app: e,
          story: t.story,
          variant: t.variant
        });
        n && Object.assign(r, n);
      }
      if (typeof (s == null ? void 0 : s.setupVue2) == "function") {
        const n = await s.setupVue2({
          app: e,
          story: t.story,
          variant: t.variant
        });
        n && Object.assign(r, n);
      }
      if (typeof t.variant.setupApp == "function") {
        const n = await t.variant.setupApp({
          app: e,
          story: t.story,
          variant: t.variant
        });
        n && Object.assign(r, n);
      }
      e = new w({
        name: "RenderStorySubApp",
        setup() {
          S(() => {
            a = !1;
          });
        },
        render: () => {
          var o, v, i, p, b;
          const n = (b = (v = (o = t.variant.slots()) == null ? void 0 : o[t.slotName]) == null ? void 0 : v.call(o, {
            state: f
          })) != null ? b : (p = (i = t.story.slots()) == null ? void 0 : i[t.slotName]) == null ? void 0 : p.call(i, {
            state: f
          });
          return R("div", n);
        },
        ...r
      }), C(e), w.component("RouterLink", M);
      const y = document.createElement("div");
      c.value.appendChild(y), e.$mount(y), g("ready");
    }
    return O(async () => {
      t.variant.configReady && await l();
    }), j(() => t.variant, async (m) => {
      m.configReady && !a && (e ? e.$forceUpdate() : await l());
    }, {
      deep: !0
    }), $(() => {
      d();
    }), {
      sandbox: c
    };
  },
  render() {
    return A("div", {
      ref: "sandbox",
      class: "__histoire-sandbox htw-overflow-auto"
    });
  }
});
export {
  U as default
};
