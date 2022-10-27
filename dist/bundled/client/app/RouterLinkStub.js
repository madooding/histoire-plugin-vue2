import { defineComponent as e } from "vue";
const a = [String, Object], n = [String, Array], r = e({
  name: "RouterLinkStub",
  props: {
    to: {
      type: a,
      required: !0
    },
    tag: {
      type: String,
      default: "a"
    },
    exact: Boolean,
    exactPath: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    exactPathActiveClass: String,
    event: {
      type: n,
      default: "click"
    }
  },
  render(t) {
    return t(this.tag, void 0, this.$slots.default);
  }
});
export {
  r as RouterLinkStub
};
