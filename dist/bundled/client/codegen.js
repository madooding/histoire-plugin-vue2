import "../node_modules/change-case/dist.es2015/index.js";
import { createAutoBuildingObject as I, indent as L, voidElements as Q, serializeJs as U } from "@histoire/shared";
import { paramCase as X } from "../node_modules/param-case/dist.es2015/index.js";
import { pascalCase as Y } from "../node_modules/pascal-case/dist.es2015/index.js";
async function nt(t) {
  var $, h, _, f, y, j;
  const o = (f = (_ = (h = t.slots()).default) == null ? void 0 : _.call(h, { state: ($ = t.state) != null ? $ : {} })) != null ? f : [], r = Array.isArray(o) ? o : [o], c = [];
  for (const n in r) {
    const P = r[n];
    c.push(...(await W(P, (j = (y = t.state) == null ? void 0 : y._hPropState) == null ? void 0 : j[n])).lines);
  }
  return c.join(`
`);
}
async function W(t, o = null) {
  var T, B, V, z, F, E, J, R, D, G, K, M;
  if (t.tag == null && t.text)
    return {
      lines: [t.text],
      isText: !0
    };
  const r = [], c = [];
  let $ = !1;
  const h = [
    "key"
  ];
  function _(s, e, a = null) {
    var k, w, A, l;
    let C = "";
    for (const i in e.modifiers)
      e.modifiers[i] && (C += `.${i}`);
    let g = "";
    e.arg && (g = `:${e.arg}`), a && (a = a.replace(/^\$(setup|props|data)\./g, ""));
    const p = a ? [a] : q(e.value), u = [], b = `v-${s}${g}${C}="`;
    if (p.length > 1 ? (u.push(`${b}${p[0]}`), u.push(...p.slice(1, p.length - 1)), u.push(`${p[p.length - 1]}"`), $ = !0) : u.push(`${b}${(k = p[0]) != null ? k : ""}"`), c.push(u), s === "model") {
      let i = "value", x = "input";
      const m = (l = (A = (w = t.componentOptions) == null ? void 0 : w.Ctor) == null ? void 0 : A.options) == null ? void 0 : l.model;
      m != null && m.prop && (i = m.prop), m != null && m.event && (x = m.event), h.push(i), h.push(x);
    }
  }
  if ((T = t.data) != null && T.model && _("model", t.data.model, t.data.model.expression), (B = t.data) != null && B.directives)
    for (const s of t.data.directives)
      _(s.name, s, s.expression);
  function f(s, e, a = !1) {
    var u, b, k, w;
    let C = [];
    const g = () => C.map((A) => `.${A}`).join(""), p = `update:${s}`;
    if (typeof e != "string" || ((b = (u = t.componentOptions) == null ? void 0 : u.listeners) == null ? void 0 : b[p])) {
      let A = ":";
      a && (A = "@");
      let l;
      if (A === ":" && ((w = (k = t.componentOptions) == null ? void 0 : k.listeners) == null ? void 0 : w[p])) {
        C.push("sync");
        const i = t.componentOptions.listeners[p].toString(), x = /\$set\((.+?), "(.+?)"/.exec(i);
        x && (l = [`${x[1]}.${x[2]}`]);
      }
      if (typeof e > "u")
        return;
      if (!l)
        if (typeof e == "string" && e.startsWith("{{") && e.endsWith("}}"))
          l = O(e.substring(2, e.length - 2).trim()).split(`
`);
        else if (typeof e == "function") {
          let i = O(e.toString().replace(/'/g, "\\'").replace(/"/g, "'"));
          const x = /function ([^\s]+)\(/.exec(i);
          if (x)
            l = [x[1]];
          else {
            if (i.startsWith("($event) => ") && (i = i.substring(12)), i.startsWith("function($event)")) {
              const m = i.split(`
`);
              m.shift(), m.pop(), i = m.map((H) => H.trim().replace(/;$/, "")).join(`
`), i = i.replace("return ", "").trim();
            }
            if (i = i.replace(/_setup\./g, ""), l = i.split(`
`), i.includes("_vm"))
              return;
          }
        } else
          l = q(e);
      if (l.length > 1) {
        $ = !0;
        const i = [`${A}${s}${g()}="${l[0]}`];
        i.push(...l.slice(1, l.length - 1)), i.push(`${l[l.length - 1]}"`), c.push(i);
      } else
        c.push([`${A}${s}${g()}="${l[0]}"`]);
    } else
      c.push([`${s}${g()}="${e}"`]);
  }
  if ((V = t.data) != null && V.props)
    for (const s in t.data.props) {
      if (h.includes(s) || o && s in o)
        continue;
      const e = t.data.props[s];
      f(s, e);
    }
  if ((z = t.data) != null && z.domProps)
    for (const s in t.data.domProps) {
      if (h.includes(s) || o && s in o)
        continue;
      const e = t.data.domProps[s];
      f(s, e);
    }
  if ((F = t.data) != null && F.attrs)
    for (const s in t.data.attrs) {
      if (h.includes(s) || o && s in o)
        continue;
      const e = t.data.attrs[s];
      f(s, e);
    }
  if ((E = t.data) != null && E.staticClass && f("class", t.data.staticClass), (J = t.data) != null && J.class && f("class", t.data.class), (R = t.data) != null && R.staticStyle) {
    const s = t.data.staticStyle, e = [];
    for (const a in s)
      e.push(`${X(a)}: ${s[a]};`);
    f("style", e.join(" "));
  }
  if ((D = t.data) != null && D.style && f("style", t.data.style), (G = t.data) != null && G.on)
    for (const s in t.data.on)
      h.includes(s) || f(s, t.data.on[s], !0);
  if (o)
    for (const s in o)
      f(s, o[s]);
  c.length > 1 && ($ = !0);
  const y = Z(t);
  let j = !1;
  const n = [], P = [
    ...Array.isArray(t.children) ? t.children : [],
    ...Array.isArray((K = t.componentOptions) == null ? void 0 : K.children) ? t.componentOptions.children : []
  ];
  let S;
  for (const s of P) {
    const e = await W(s);
    if (e.isText) {
      S === void 0 && (S = !0);
      const a = e.lines[0];
      !n.length || /^\s/.test(a) ? n.push(a.trim()) : n[n.length - 1] += a;
    } else
      S === void 0 && (S = !1), n.push(...e.lines);
  }
  if (S !== void 0 && (j = S), (M = t.data) != null && M.scopedSlots)
    for (const s in t.data.scopedSlots) {
      if (s.startsWith("$") || s.startsWith("_"))
        continue;
      const e = I((u) => `{{ ${u} }}`, (u, b) => {
        if (b === "__v_isRef")
          return () => !1;
      }), a = t.data.scopedSlots[s](e.proxy), C = Array.isArray(a) ? a : [a], g = [];
      for (const u of C)
        typeof u == "object" && g.push(...(await W(u)).lines);
      const p = Object.keys(e.cache);
      p.length ? (n.push(`<template #${s}="{ ${p.join(", ")} }">`), n.push(...L(g)), n.push("</template>")) : s === "default" ? n.push(...g) : (n.push(`<template #${s}>`), n.push(...L(g)), n.push("</template>"));
    }
  const d = [`<${y}`];
  if ($) {
    for (const s of c)
      d.push(...L(s));
    n.length > 0 && d.push(">");
  } else
    c.length === 1 && (d[0] += ` ${c[0]}`), n.length > 0 && (d[0] += ">");
  const N = Q.includes(y.toLowerCase());
  return n.length > 0 ? n.length === 1 && d.length === 1 && !c.length && j ? r.push(`${d[0]}${n[0]}</${y}>`) : (r.push(...d), r.push(...L(n)), r.push(`</${y}>`)) : d.length > 1 ? (r.push(...d), r.push(N ? ">" : "/>")) : r.push(`${d[0]}${N ? "" : " /"}>`), {
    lines: r
  };
}
function Z(t) {
  var o, r, c, $, h, _, f, y, j, n;
  return typeof t.tag == "string" && !t.componentOptions ? t.tag : (c = (r = (o = t.componentOptions) == null ? void 0 : o.Ctor) == null ? void 0 : r.options) != null && c.name ? (h = ($ = t.componentOptions) == null ? void 0 : $.Ctor) == null ? void 0 : h.options.name : (y = (f = (_ = t.componentOptions) == null ? void 0 : _.Ctor) == null ? void 0 : f.options) != null && y.__file ? v((n = (j = t.componentOptions) == null ? void 0 : j.Ctor) == null ? void 0 : n.options.__file) : "Anonymous";
}
function v(t) {
  const o = /([^/]+)\.vue$/.exec(t);
  return o ? Y(o[1]) : "Anonymous";
}
function q(t) {
  const o = !!(t != null && t.__autoBuildingObject), r = U(t);
  return o ? [O(r.__autoBuildingObjectGetKey)] : O(r).split(`
`);
}
function O(t) {
  return t.replace(/\$setup\./g, "");
}
export {
  nt as generateSourceCode,
  Z as getTagName
};
