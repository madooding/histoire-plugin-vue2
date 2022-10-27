import { defineComponent as s, getCurrentInstance as u, inject as l } from "vue";
import { applyState as r } from "@histoire/shared";
import { toRawDeep as o, syncStateBundledAndExternal as c } from "./util.js";
const y = Object.assign(s({
  name: "Variant",
  props: {
    initState: {
      type: Function,
      default: null
    },
    source: {
      type: String,
      default: null
    },
    responsiveDisabled: {
      type: Boolean,
      default: !1
    },
    autoPropsDisabled: {
      type: Boolean,
      default: !1
    },
    setupApp: {
      type: Function,
      default: null
    },
    variant: {
      type: Object,
      default: null
    }
  },
  setup(t) {
    const a = u(), n = l("implicitState");
    if (t.variant) {
      if (typeof t.initState == "function") {
        const i = t.initState();
        r(t.variant.state, o(i));
      }
      c(t.variant.state, n());
    }
    function e() {
      !t.variant || Object.assign(t.variant, {
        slots: () => a.proxy.$scopedSlots,
        source: t.source,
        responsiveDisabled: t.responsiveDisabled,
        autoPropsDisabled: t.autoPropsDisabled,
        setupApp: t.setupApp,
        configReady: !0
      });
    }
    return e(), {
      updateVariant: e
    };
  },
  render() {
    return this.updateVariant(), null;
  }
}), {
  __histoireType: "variant"
});
export {
  y as default
};
