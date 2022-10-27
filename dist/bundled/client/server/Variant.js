import { defineComponent as o, inject as e } from "vue";
const u = o({
  name: "HistoireVariant",
  props: {
    title: {
      type: String,
      default: "untitled"
    },
    id: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconColor: {
      type: String,
      default: null
    }
  },
  setup(t) {
    var i;
    const n = e("story");
    function r() {
      return `${n.id}-${n.variants.length}`;
    }
    const a = {
      id: (i = t.id) != null ? i : r(),
      title: t.title,
      icon: t.icon,
      iconColor: t.iconColor
    };
    e("addVariant")(a);
  },
  render() {
    return null;
  }
});
export {
  u as default
};
