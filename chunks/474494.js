t.d(s, {
  Z: function() {
    return U
  }
}), t(47120);
var n = t(735250);
t(470079);
var a = t(319147),
  r = t(306276),
  i = t(510236),
  l = t(133398),
  o = t(722283),
  _ = t(298274),
  c = t(569620),
  E = t(16503),
  u = t(64268),
  d = t(697720),
  R = t(578325),
  I = t(56790),
  T = t(90718),
  A = t(897482),
  M = t(4515),
  S = t(474472),
  N = t(156129),
  p = t(799303),
  m = t(245630),
  g = t(842272),
  C = t(486731),
  f = t(346943),
  P = t(55826),
  O = t(218776),
  x = t(414653),
  h = t(297141),
  L = t(26517),
  b = t(93125),
  v = t(278583),
  Z = t(814437);
let D = new Map([
  ["BG", i],
  ["CZ", _],
  ["HU", A],
  ["RO", L],
  ["SE", b],
  ["CY", o],
  ["EE", E],
  ["IS", S],
  ["IE", M],
  ["LV", C],
  ["LI", p],
  ["LT", m],
  ["LU", g],
  ["MT", f],
  ["SK", Z],
  ["SI", v],
  ["GR", I],
  ["FI", d],
  ["PT", h],
  ["NO", O],
  ["BE", r],
  ["AT", a],
  ["CH", l],
  ["FR", R],
  ["DE", c],
  ["ES", u],
  ["IT", N],
  ["NL", P],
  ["PL", x],
  ["HR", T]
]);

function U(e) {
  let {
    className: s,
    countryCode: t
  } = e;
  if (null == t || !D.has(t)) return null;
  let a = D.get(t);
  return (0, n.jsx)("img", {
    className: s,
    "aria-hidden": !0,
    alt: "Wumpus holding a country-specific flag",
    src: a
  })
}