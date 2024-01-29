"use strict";
s.r(t), s.d(t, {
  default: function() {
    return j
  }
}), s("222007");
var a = s("37983");
s("884691");
var r = s("140944"),
  n = s("521313"),
  l = s("869816"),
  i = s("300598"),
  u = s("515723"),
  o = s("368510"),
  d = s("536316"),
  c = s("327195"),
  _ = s("463145"),
  E = s("416227"),
  I = s("325793"),
  T = s("180790"),
  f = s("167990"),
  S = s("886676"),
  R = s("972956"),
  m = s("521507"),
  A = s("175949"),
  N = s("837861"),
  p = s("664803"),
  g = s("854299"),
  C = s("700684"),
  P = s("479997"),
  O = s("667466"),
  M = s("884306"),
  h = s("908173"),
  L = s("930767"),
  x = s("398683"),
  v = s("816571"),
  D = s("114244"),
  U = s("991119");
let b = new Map([
  ["BG", l],
  ["CZ", o],
  ["HU", S],
  ["RO", x],
  ["SE", v],
  ["CY", u],
  ["EE", c],
  ["IS", m],
  ["IE", R],
  ["LV", C],
  ["LI", N],
  ["LT", p],
  ["LU", g],
  ["MT", P],
  ["SK", U],
  ["SI", D],
  ["GR", T],
  ["FI", E],
  ["PT", L],
  ["NO", M],
  ["BE", n],
  ["AT", r],
  ["CH", i],
  ["FR", I],
  ["DE", d],
  ["ES", _],
  ["IT", A],
  ["NL", O],
  ["PL", h],
  ["HR", f]
]);

function j(e) {
  let {
    className: t,
    countryCode: s
  } = e;
  if (null == s || !b.has(s)) return null;
  let r = b.get(s);
  return (0, a.jsx)("img", {
    className: t,
    "aria-hidden": !0,
    alt: "Wumpus holding a country-specific flag",
    src: r
  })
}