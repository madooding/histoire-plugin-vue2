import w, { reactive as O, onMounted as V, h as N } from "vue";
import { defineComponent as R, ref as _, onMounted as x, watch as T, onBeforeUnmount as $, h as k } from "@histoire/vendors/vue";
import { applyState as P } from "@histoire/shared";
import { getTagName as q } from "../codegen.js";
import { registerGlobalComponents as B } from "./global-components.js";
import { RouterLinkStub as C } from "./RouterLinkStub.js";
import * as m from "virtual:$histoire-setup";
import * as v from "virtual:$histoire-generated-global-setup";
import { syncStateBundledAndExternal as D } from "./util.js";
const H = R({
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
  setup(t, { emit: A }) {
    const h = _();
    let a, l = !1;
    const i = O({});
    D(t.variant.state, i);
    function b() {
      a && (a.$destroy(), a = null);
    }
    async function g() {
      if (l)
        return;
      l = !0, b();
      let u;
      const s = {};
      if (typeof (v == null ? void 0 : v.setupVue2) == "function") {
        const r = await v.setupVue2({
          app: a,
          story: t.story,
          variant: t.variant
        });
        r && Object.assign(s, r);
      }
      if (typeof (m == null ? void 0 : m.setupVue2) == "function") {
        const r = await m.setupVue2({
          app: a,
          story: t.story,
          variant: t.variant
        });
        r && Object.assign(s, r);
      }
      if (typeof t.variant.setupApp == "function") {
        const r = await t.variant.setupApp({
          app: a,
          story: t.story,
          variant: t.variant
        });
        r && Object.assign(s, r);
      }
      a = new w({
        name: "RenderStorySubApp",
        setup() {
          V(() => {
            l = !1;
          });
        },
        render: () => {
          var c, e, p, o, n;
          const r = (n = (e = (c = t.variant.slots()) == null ? void 0 : c[t.slotName]) == null ? void 0 : e.call(c, {
            state: i
          })) != null ? n : (o = (p = t.story.slots()) == null ? void 0 : p[t.slotName]) == null ? void 0 : o.call(p, {
            state: i
          });
          if (t.slotName === "default" && !t.variant.autoPropsDisabled) {
            const y = S(r), d = JSON.stringify(y);
            (!u || u !== d) && (P(t.variant.state, {
              _hPropDefs: y
            }), t.variant.state._hPropState || P(t.variant.state, {
              _hPropState: {}
            }), u = d);
          }
          return N("div", r);
        },
        ...s
      }), B(a), w.component("RouterLink", C);
      const f = document.createElement("div");
      h.value.appendChild(f), a.$mount(f), A("ready");
    }
    function S(u) {
      var r, c;
      const s = [];
      let f = 0;
      for (const e of u) {
        if (typeof e.type == "object") {
          const p = [];
          for (const o in e.type.props) {
            const n = e.type.props[o];
            let y, d;
            n && (y = (Array.isArray(n.type) ? n.type : typeof n == "function" ? [n] : [n.type]).map((j) => {
              switch (j) {
                case String:
                  return "string";
                case Number:
                  return "number";
                case Boolean:
                  return "boolean";
                case Object:
                  return "object";
                case Array:
                  return "array";
                default:
                  return "unknown";
              }
            }), d = typeof n.default == "function" ? n.default.toString() : n.default), p.push({
              name: o,
              types: y,
              required: n == null ? void 0 : n.required,
              default: d
            }), ((c = (r = i == null ? void 0 : i._hPropState) == null ? void 0 : r[f]) == null ? void 0 : c[o]) != null && (e.props || (e.props = {}), e.props[o] = i._hPropState[f][o], e.dynamicProps || (e.dynamicProps = []), e.dynamicProps.includes(o) || e.dynamicProps.push(o));
          }
          s.push({
            name: q(e),
            index: f,
            props: p
          }), f++;
        }
        Array.isArray(e.children) && s.push(...S(e.children));
      }
      return s.filter((e) => e.props.length);
    }
    return x(async () => {
      t.variant.configReady && await g();
    }), T(() => t.variant, async (u) => {
      u.configReady && !l && (a ? a.$forceUpdate() : await g());
    }, {
      deep: !0
    }), $(() => {
      b();
    }), {
      sandbox: h
    };
  },
  render() {
    return k("div", {
      ref: "sandbox",
      class: "__histoire-sandbox htw-overflow-auto"
    });
  }
});
export {
  H as default
};
