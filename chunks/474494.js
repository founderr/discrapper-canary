s.d(t, {
  Z: function() {
    return U
  }
}), s(47120);
var n = s(735250);
s(470079);
var a = s(319147),
  i = s(306276),
  r = s(510236),
  l = s(133398),
  o = s(722283),
  c = s(298274),
  E = s(569620),
  _ = s(16503),
  u = s(64268),
  d = s(697720),
  T = s(578325),
  I = s(56790),
  R = s(90718),
  A = s(897482),
  N = s(4515),
  C = s(474472),
  g = s(156129),
  m = s(799303),
  M = s(245630),
  S = s(842272),
  p = s(486731),
  h = s(346943),
  f = s(55826),
  O = s(218776),
  x = s(414653),
  L = s(297141),
  P = s(26517),
  v = s(93125),
  Z = s(278583),
  b = s(814437);
let D = new Map([
  ["BG", r],
  ["CZ", c],
  ["HU", A],
  ["RO", P],
  ["SE", v],
  ["CY", o],
  ["EE", _],
  ["IS", C],
  ["IE", N],
  ["LV", p],
  ["LI", m],
  ["LT", M],
  ["LU", S],
  ["MT", h],
  ["SK", b],
  ["SI", Z],
  ["GR", I],
  ["FI", d],
  ["PT", L],
  ["NO", O],
  ["BE", i],
  ["AT", a],
  ["CH", l],
  ["FR", T],
  ["DE", E],
  ["ES", u],
  ["IT", g],
  ["NL", f],
  ["PL", x],
  ["HR", R]
]);

function U(e) {
  let {
    className: t,
    countryCode: s
  } = e;
  if (null == s || !D.has(s)) return null;
  let a = D.get(s);
  return (0, n.jsx)("img", {
    className: t,
    "aria-hidden": !0,
    alt: "Wumpus holding a country-specific flag",
    src: a
  })
}