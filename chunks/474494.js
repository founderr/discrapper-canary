n.d(t, {
  Z: function() {
    return B
  }
}), n(47120);
var s = n(735250);
n(470079);
var a = n(319147),
  i = n(306276),
  r = n(510236),
  l = n(133398),
  o = n(722283),
  c = n(298274),
  d = n(569620),
  _ = n(16503),
  E = n(64268),
  u = n(697720),
  T = n(578325),
  I = n(56790),
  R = n(90718),
  C = n(897482),
  g = n(4515),
  p = n(474472),
  A = n(156129),
  N = n(799303),
  m = n(245630),
  S = n(842272),
  f = n(486731),
  M = n(346943),
  h = n(55826),
  b = n(218776),
  x = n(414653),
  O = n(297141),
  P = n(26517),
  L = n(93125),
  v = n(278583),
  Z = n(814437);
let D = new Map([
  ["BG", r],
  ["CZ", c],
  ["HU", C],
  ["RO", P],
  ["SE", L],
  ["CY", o],
  ["EE", _],
  ["IS", p],
  ["IE", g],
  ["LV", f],
  ["LI", N],
  ["LT", m],
  ["LU", S],
  ["MT", M],
  ["SK", Z],
  ["SI", v],
  ["GR", I],
  ["FI", u],
  ["PT", O],
  ["NO", b],
  ["BE", i],
  ["AT", a],
  ["CH", l],
  ["FR", T],
  ["DE", d],
  ["ES", E],
  ["IT", A],
  ["NL", h],
  ["PL", x],
  ["HR", R]
]);

function B(e) {
  let {
    className: t,
    countryCode: n
  } = e;
  if (null == n || !D.has(n)) return null;
  let a = D.get(n);
  return (0, s.jsx)("img", {
    className: t,
    "aria-hidden": !0,
    alt: "Wumpus holding a country-specific flag",
    src: a
  })
}