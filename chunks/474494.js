"use strict";
s.r(t), s.d(t, {
  default: function() {
    return B
  }
}), s("47120");
var a = s("735250");
s("470079");
var r = s("319147"),
  i = s("306276"),
  n = s("510236"),
  l = s("133398"),
  o = s("722283"),
  u = s("298274"),
  c = s("569620"),
  d = s("16503"),
  _ = s("64268"),
  E = s("697720"),
  R = s("578325"),
  T = s("56790"),
  S = s("90718"),
  f = s("897482"),
  I = s("4515"),
  m = s("474472"),
  p = s("156129"),
  A = s("799303"),
  N = s("245630"),
  M = s("842272"),
  C = s("486731"),
  g = s("346943"),
  P = s("55826"),
  O = s("218776"),
  x = s("414653"),
  b = s("297141"),
  h = s("26517"),
  D = s("93125"),
  L = s("278583"),
  v = s("814437");
let U = new Map([
  ["BG", n],
  ["CZ", u],
  ["HU", f],
  ["RO", h],
  ["SE", D],
  ["CY", o],
  ["EE", d],
  ["IS", m],
  ["IE", I],
  ["LV", C],
  ["LI", A],
  ["LT", N],
  ["LU", M],
  ["MT", g],
  ["SK", v],
  ["SI", L],
  ["GR", T],
  ["FI", E],
  ["PT", b],
  ["NO", O],
  ["BE", i],
  ["AT", r],
  ["CH", l],
  ["FR", R],
  ["DE", c],
  ["ES", _],
  ["IT", p],
  ["NL", P],
  ["PL", x],
  ["HR", S]
]);

function B(e) {
  let {
    className: t,
    countryCode: s
  } = e;
  if (null == s || !U.has(s)) return null;
  let r = U.get(s);
  return (0, a.jsx)("img", {
    className: t,
    "aria-hidden": !0,
    alt: "Wumpus holding a country-specific flag",
    src: r
  })
}