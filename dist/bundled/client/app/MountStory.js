import y, { ref as l, provide as d, h as p } from "vue";
import { defineComponent as v, ref as S, watch as c, onMounted as b, onUnmounted as h, h as w } from "@histoire/vendors/vue";
import * as r from "virtual:$histoire-setup";
import * as u from "virtual:$histoire-generated-global-setup";
import { registerGlobalComponents as V } from "./global-components.js";
import { RouterLinkStub as M } from "./RouterLinkStub.js";
const k = v({
  name: "MountStory",
  props: {
    story: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const i = S();
    let t;
    const s = l(0);
    async function a() {
      const o = {};
      if (typeof (u == null ? void 0 : u.setupVue2) == "function") {
        const n = await u.setupVue2({
          app: t,
          story: e.story,
          variant: null
        });
        n && Object.assign(o, n);
      }
      if (typeof (r == null ? void 0 : r.setupVue2) == "function") {
        const n = await r.setupVue2({
          app: t,
          story: e.story,
          variant: null
        });
        n && Object.assign(o, n);
      }
      t = new y({
        name: "MountStorySubApp",
        setup() {
          d("hstStory", e.story);
        },
        render: () => e.story.file ? p(e.story.file.component, {
          key: s.value
        }) : null,
        ...o
      }), V(t), y.component("RouterLink", M);
      const m = document.createElement("div");
      i.value.appendChild(m), t.$mount(m);
    }
    function f() {
      t == null || t.$destroy();
    }
    return c(() => e.story.id, async () => {
      f(), await a();
    }), c(() => e.story.variants.map((o) => o.id), () => {
      s.value++;
    }, {
      deep: !0
    }), b(async () => {
      await a();
    }), h(() => {
      f();
    }), {
      el: i
    };
  },
  render() {
    return w("div", {
      ref: "el"
    });
  }
});
export {
  k as default
};
