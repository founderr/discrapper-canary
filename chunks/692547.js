"use strict";
n(757143);
var i = n(688619),
  r = n.n(i),
  s = n(595182),
  o = n.n(s),
  a = n(402903),
  l = n.n(a),
  u = n(190558),
  _ = n(387117),
  c = n(949180),
  d = n(777910),
  E = n(897710);
let {
  Themes: I
} = n(15202).V, {
  SemanticColors: T,
  RawColors: h
} = u.V, {
  Shadows: f
} = d.V, {
  Spacing: S
} = E.V, {
  Modules: N
} = _.V, A = l()(h, e => r()(e)), m = {
  themes: I,
  modules: N,
  colors: l()(T, (e, t) => ({
    css: g(t),
    resolve(t) {
      let n = e[t.theme],
        i = n.raw,
        r = n.opacity;
      if (1 === r) return m.unsafe_rawColors[i].resolve(t);
      {
        let e = A[i];
        return 0 !== e.alpha() && 1 !== r && (e = e.alpha(r)), O(e, t.saturation)
      }
    }
  })),
  unsafe_rawColors: l()(h, (e, t) => {
    let n = A[t];
    return {
      css: g(t),
      resolve: e => O(n, e.saturation)
    }
  }),
  shadows: l()(f, (e, t) => ({
    css: g(t),
    resolve: t => ({
      boxShadow: e[t.theme].boxShadow,
      filter: e[t.theme].filter,
      nativeStyles: e[t.theme].nativeStyles
    })
  })),
  radii: c.w,
  spacing: l()(S, e => "".concat(e, "px"))
};

function O(e, t) {
  return {
    spring() {
      let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return p(e, t, n).hex("rgba")
    },
    hsl() {
      let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return p(e, t, n).css("hsl")
    },
    hex() {
      let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return p(e, t, n).hex()
    },
    int() {
      let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        i = p(e, t, n),
        r = i.num();
      return 1 !== i.alpha() ? r << 8 | Math.round(255 * i.alpha()) : r
    }
  }
}

function p(e, t, n) {
  var i;
  let r = o()(null !== (i = n.opacity) && void 0 !== i ? i : 1, 0, 1),
    s = e;
  return 1 !== t && (s = s.set("hsl.s", s.get("hsl.s") * t)), 1 !== r && (s = s.alpha(s.alpha() * r)), s
}

function R(e) {
  return e.toLowerCase().replace(/_/g, "-")
}

function g(e, t) {
  let n = null != t ? R(t) : null,
    i = R(e);
  return "var(--".concat([n, i].filter(Boolean).join("-"), ")")
}
t.Z = m