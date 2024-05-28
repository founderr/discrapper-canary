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
  f = s("90718"),
  m = s("897482"),
  I = s("4515"),
  S = s("474472"),
  p = s("156129"),
  A = s("799303"),
  g = s("245630"),
  N = s("842272"),
  M = s("486731"),
  C = s("346943"),
  P = s("55826"),
  O = s("218776"),
  x = s("414653"),
  b = s("297141"),
  h = s("26517"),
  D = s("93125"),
  v = s("278583"),
  L = s("814437");
let U = new Map([
  ["BG", n],
  ["CZ", u],
  ["HU", m],
  ["RO", h],
  ["SE", D],
  ["CY", o],
  ["EE", d],
  ["IS", S],
  ["IE", I],
  ["LV", M],
  ["LI", A],
  ["LT", g],
  ["LU", N],
  ["MT", C],
  ["SK", L],
  ["SI", v],
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
  ["HR", f]
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