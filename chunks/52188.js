n.d(t, {
  U: function() {
    return s
  },
  k: function() {
    return es
  }
}), n(47120);
var s, r, o = n(735250);
n(470079);
var i = n(120356),
  c = n.n(i),
  a = n(442837),
  u = n(246946),
  l = n(91802),
  d = n(222727),
  p = n(981631),
  f = n(630357),
  g = n(500052),
  v = n(375832),
  b = n(992171),
  x = n(937064),
  _ = n(434336),
  I = n(128955),
  S = n(803353),
  A = n(479388),
  T = n(179581),
  h = n(13174),
  C = n(580248),
  E = n(966294),
  L = n(302143),
  U = n(146121),
  m = n(705500),
  N = n(402127),
  P = n(153652),
  B = n(485487),
  O = n(200985),
  M = n(270930),
  R = n(46514),
  j = n(750876),
  w = n(993855),
  D = n(701497),
  F = n(937717),
  G = n(165194),
  Z = n(208802),
  y = n(145905),
  k = n(335302),
  H = n(956172),
  Y = n(695579),
  V = n(541764),
  W = n(191706),
  X = n(67528),
  z = n(332150),
  K = n(581902),
  J = n(167219),
  Q = n(704381),
  $ = n(591417),
  q = n(929883),
  ee = n(261137),
  et = n(958700);
(r = s || (s = {}))[r.PrivateMessages = 0] = "PrivateMessages", r[r.SettingsMenu = 1] = "SettingsMenu";
let en = new Map([
  ["PE", W],
  ["PH", X],
  ["CL", I],
  ["CO", S],
  ["AR", g],
  ["JP", j],
  ["VN", et],
  ["TH", ee],
  ["ID", B],
  ["MY", H],
  ["MX", k],
  ["KR", w],
  ["BG", x],
  ["CZ", T],
  ["HU", P],
  ["RO", J],
  ["SE", Q],
  ["CY", A],
  ["EE", C],
  ["IS", M],
  ["IE", O],
  ["LV", Z],
  ["LI", D],
  ["LT", F],
  ["LU", G],
  ["MT", y],
  ["SK", q],
  ["SI", $],
  ["GR", m],
  ["FI", L],
  ["PT", K],
  ["NO", V],
  ["BE", b],
  ["AT", v],
  ["CH", _],
  ["FR", U],
  ["DE", h],
  ["ES", E],
  ["IT", R],
  ["NL", Y],
  ["PL", z],
  ["HR", N]
]);

function es(e) {
  let {
    entryPoint: t,
    className: n
  } = e, r = (0, a.e7)([u.Z], () => u.Z.hidePersonalInformation), i = (0, l.n)(), g = null == i ? void 0 : i.countryCode;
  if ((0, d.U)(p.jXE.SETTINGS_PREMIUM, g), null == g || !en.has(g) || r) return null;
  let v = en.get(g),
    b = "badgeIcon" + s[t];
  return (0, o.jsx)("img", {
    className: c()(n, f[b]),
    "aria-hidden": !0,
    alt: "Wumpus holding a country-specific flag",
    src: v
  })
}