import { isRef as u, unref as m, watch as w } from "vue";
import { isRef as c, unref as l, watch as y } from "@histoire/vendors/vue";
import { applyState as i } from "@histoire/shared";
const p = (s) => s !== null && typeof s == "object";
function f(s, e = /* @__PURE__ */ new WeakMap()) {
  const t = u(s) ? m(s) : s;
  if (typeof t == "symbol")
    return t.toString();
  if (!p(t))
    return t;
  if (e.has(t))
    return e.get(t);
  if (Array.isArray(t)) {
    const r = [];
    return e.set(t, r), r.push(...t.map((o) => f(o, e))), r;
  } else {
    const r = {};
    return e.set(t, r), h(t, r, e), r;
  }
}
const h = (s, e, t = /* @__PURE__ */ new WeakMap()) => {
  Object.keys(s).forEach((r) => {
    e[r] = f(s[r], t);
  });
};
function a(s, e = /* @__PURE__ */ new WeakMap()) {
  const t = c(s) ? l(s) : s;
  if (typeof t == "symbol")
    return t.toString();
  if (!p(t))
    return t;
  if (e.has(t))
    return e.get(t);
  if (Array.isArray(t)) {
    const r = [];
    return e.set(t, r), r.push(...t.map((o) => a(o, e))), r;
  } else {
    const r = {};
    return e.set(t, r), d(t, r, e), r;
  }
}
const d = (s, e, t = /* @__PURE__ */ new WeakMap()) => {
  Object.keys(s).forEach((r) => {
    e[r] = f(s[r], t);
  });
};
function A(s, e) {
  let t = !1;
  const r = w(() => e, (n) => {
    n != null && (t ? t = !1 : (t = !0, u(n) && (n = n.value), i(s, f(n))));
  }, {
    deep: !0,
    immediate: !0
  }), o = y(() => s, (n) => {
    n != null && (t ? t = !1 : (t = !0, c(n) && (n = n.value), i(e, a(n))));
  }, {
    deep: !0,
    immediate: !0
  });
  return {
    stop() {
      o(), r();
    }
  };
}
export {
  a as _toRawDeep,
  A as syncStateBundledAndExternal,
  f as toRawDeep
};
