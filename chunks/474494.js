"use strict";
s.r(t), s.d(t, {
  default: function() {
    return U
  }
}), s("47120");
var a = s("735250");
s("470079");
var i = s("319147"),
  r = s("306276"),
  l = s("510236"),
  n = s("133398"),
  o = s("722283"),
  u = s("298274"),
  d = s("569620"),
  c = s("16503"),
  _ = s("64268"),
  E = s("697720"),
  C = s("578325"),
  f = s("56790"),
  T = s("90718"),
  I = s("897482"),
  R = s("4515"),
  S = s("474472"),
  p = s("156129"),
  m = s("799303"),
  A = s("245630"),
  g = s("842272"),
  N = s("486731"),
  O = s("346943"),
  P = s("55826"),
  h = s("218776"),
  M = s("414653"),
  x = s("297141"),
  L = s("26517"),
  v = s("93125"),
  j = s("278583"),
  D = s("814437");
let b = new Map([
  ["BG", l],
  ["CZ", u],
  ["HU", I],
  ["RO", L],
  ["SE", v],
  ["CY", o],
  ["EE", c],
  ["IS", S],
  ["IE", R],
  ["LV", N],
  ["LI", m],
  ["LT", A],
  ["LU", g],
  ["MT", O],
  ["SK", D],
  ["SI", j],
  ["GR", f],
  ["FI", E],
  ["PT", x],
  ["NO", h],
  ["BE", r],
  ["AT", i],
  ["CH", n],
  ["FR", C],
  ["DE", d],
  ["ES", _],
  ["IT", p],
  ["NL", P],
  ["PL", M],
  ["HR", T]
]);

function U(e) {
  let {
    className: t,
    countryCode: s
  } = e;
  if (null == s || !b.has(s)) return null;
  let i = b.get(s);
  return (0, a.jsx)("img", {
    className: t,
    "aria-hidden": !0,
    alt: "Wumpus holding a country-specific flag",
    src: i
  })
}