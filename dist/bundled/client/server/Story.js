import { defineComponent as s, inject as i, provide as u, onMounted as d, h as c } from "vue";
const y = s({
  name: "HistoireStory",
  inheritAttrs: !1,
  props: {
    title: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    },
    group: {
      type: String,
      default: null
    },
    layout: {
      type: Object,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconColor: {
      type: String,
      default: null
    },
    docsOnly: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    var l, r;
    const o = i("htsFile"), e = {
      id: (l = t.id) != null ? l : o.id,
      title: (r = t.title) != null ? r : o.fileName,
      group: t.group,
      layout: t.layout,
      icon: t.icon,
      iconColor: t.iconColor,
      docsOnly: t.docsOnly,
      variants: []
    }, n = i("addStory", null);
    return n == null || n(e), u("story", e), u("addVariant", (a) => {
      e.variants.push(a);
    }), d(() => {
      e.variants.length || e.variants.push({
        id: "_default",
        title: "default"
      });
    }), {
      story: e
    };
  },
  render() {
    var o, e;
    let t = !1;
    try {
      const n = (e = (o = this.$scopedSlots).default) == null ? void 0 : e.call(o, {
        get state() {
          return t = !0, {};
        }
      });
      return c("div", n);
    } catch (n) {
      return t || console.error(n), null;
    }
  }
});
export {
  y as default
};
