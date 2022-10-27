import i, { h as f } from "vue";
import * as o from "virtual:$histoire-setup";
import * as n from "virtual:$histoire-generated-global-setup";
import l from "./Story.js";
import d from "./Variant.js";
async function v({ file: s, storyData: u, el: a }) {
  const { default: e } = await import(
    /* @vite-ignore */
    s.moduleId
  ), r = {};
  if (typeof (n == null ? void 0 : n.setupVue2) == "function") {
    const t = await n.setupVue2({
      story: null,
      variant: null
    });
    t && Object.assign(r, t);
  }
  if (typeof (o == null ? void 0 : o.setupVue2) == "function") {
    const t = await o.setupVue2({
      story: null,
      variant: null
    });
    t && Object.assign(r, t);
  }
  const c = new i({
    provide: {
      htsFile: s,
      addStory(t) {
        u.push(t);
      }
    },
    render() {
      return f(e, {
        ref: "comp"
      });
    },
    ...r
  });
  if (i.component("Story", l), i.component("Variant", d), c.$mount(a), e.doc) {
    const t = document.createElement("div");
    t.innerHTML = e.doc;
    const p = t.textContent;
    u.forEach((m) => {
      m.docsText = p;
    });
  }
  c.$destroy();
}
export {
  v as run
};
