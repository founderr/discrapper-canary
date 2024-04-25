"use strict";
s.r(t), s.d(t, {
  default: function() {
    return j
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
  d = s("569620"),
  c = s("16503"),
  _ = s("64268"),
  E = s("697720"),
  T = s("578325"),
  I = s("56790"),
  R = s("90718"),
  f = s("897482"),
  S = s("4515"),
  m = s("474472"),
  A = s("156129"),
  N = s("799303"),
  p = s("245630"),
  g = s("842272"),
  C = s("486731"),
  P = s("346943"),
  O = s("55826"),
  M = s("218776"),
  h = s("414653"),
  L = s("297141"),
  x = s("26517"),
  v = s("93125"),
  b = s("278583"),
  D = s("814437");
let U = new Map([
  ["BG", n],
  ["CZ", u],
  ["HU", f],
  ["RO", x],
  ["SE", v],
  ["CY", o],
  ["EE", c],
  ["IS", m],
  ["IE", S],
  ["LV", C],
  ["LI", N],
  ["LT", p],
  ["LU", g],
  ["MT", P],
  ["SK", D],
  ["SI", b],
  ["GR", I],
  ["FI", E],
  ["PT", L],
  ["NO", M],
  ["BE", i],
  ["AT", r],
  ["CH", l],
  ["FR", T],
  ["DE", d],
  ["ES", _],
  ["IT", A],
  ["NL", O],
  ["PL", h],
  ["HR", R]
]);

function j(e) {
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