import { defineComponent as m, getCurrentInstance as S, inject as u, provide as y, reactive as $, h } from "vue";
import { omitInheritStoryProps as l } from "@histoire/shared";
import _ from "./Variant.js";
const C = Object.assign(m({
  name: "Story",
  inheritAttrs: !1,
  props: {
    initState: {
      type: Function,
      default: null
    }
  },
  setup() {
    const a = S(), r = u("hstStory");
    y("story", r);
    const s = a.proxy.$parent, e = {
      $data: s.data
    };
    function p(n, i) {
      typeof i == "function" || (i == null ? void 0 : i.__file) || typeof (i == null ? void 0 : i.render) == "function" || typeof (i == null ? void 0 : i.setup) == "function" || (e[n] = i);
    }
    for (const n in s.exposed)
      p(n, s.exposed[n]);
    for (const n in s._setupState)
      p(n, s._setupState[n]);
    y("implicitState", () => $({ ...e }));
    function d() {
      Object.assign(r, {
        slots: () => a.proxy.$slots
      });
    }
    return {
      story: r,
      updateStory: d
    };
  },
  render() {
    this.updateStory();
    const [a] = this.story.variants;
    if (a.id === "_default")
      return h(_, {
        props: {
          variant: a,
          initState: this.initState,
          ...this.$attrs
        }
      }, this.$slots.default);
    let r = 0;
    const s = (p) => {
      var d, n, i, c;
      for (const t of p)
        if (((i = (n = (d = t.componentOptions) == null ? void 0 : d.Ctor) == null ? void 0 : n.options) == null ? void 0 : i.__histoireType) === "variant") {
          const f = this.story.variants[r];
          t.componentOptions.propsData || (t.componentOptions.propsData = {}), t.componentOptions.propsData.variant = f, t.data || (t.data = {}), t.data.attrs || (t.data.attrs = {}), !t.data.attrs.initState && !t.data.attrs["init-state"] && (t.data.attrs.initState = this.initState);
          for (const o in this.$attrs)
            typeof t.data.attrs[o] > "u" && (t.data.attrs[o] = this.$attrs[o]);
          for (const o in this.story)
            !l.includes(o) && typeof t.data.attrs[o] > "u" && (t.data.attrs[o] = this.story[o]);
          t.key = f ? `variant-${f.id}` : `null-variant-${r}`, r++;
        } else
          (c = t.children) != null && c.length && s(t.children);
    }, e = this.$slots.default;
    return s(e), h("div", e);
  }
}), {
  __histoireType: "story"
});
export {
  C as default
};
