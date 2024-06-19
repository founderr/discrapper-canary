n.d(t, {
  U: function() {
    return r
  },
  k: function() {
    return er
  }
}), n(47120);
var r, s, o = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  a = n(442837),
  c = n(246946),
  u = n(91802),
  d = n(222727),
  p = n(981631),
  f = n(630357),
  g = n(500052),
  v = n(375832),
  b = n(992171),
  h = n(937064),
  x = n(434336),
  S = n(128955),
  C = n(803353),
  m = n(479388),
  I = n(179581),
  _ = n(13174),
  N = n(580248),
  E = n(966294),
  A = n(302143),
  T = n(146121),
  L = n(705500),
  U = n(402127),
  D = n(153652),
  P = n(485487),
  B = n(200985),
  O = n(270930),
  j = n(46514),
  y = n(750876),
  M = n(993855),
  w = n(701497),
  R = n(937717),
  G = n(165194),
  H = n(208802),
  k = n(145905),
  F = n(335302),
  Z = n(956172),
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
(s = r || (r = {}))[s.PrivateMessages = 0] = "PrivateMessages", s[s.SettingsMenu = 1] = "SettingsMenu";
let en = new Map([
  ["PE", W],
  ["PH", X],
  ["CL", S],
  ["CO", C],
  ["AR", g],
  ["JP", y],
  ["VN", et],
  ["TH", ee],
  ["ID", P],
  ["MY", Z],
  ["MX", F],
  ["KR", M],
  ["BG", h],
  ["CZ", I],
  ["HU", D],
  ["RO", J],
  ["SE", Q],
  ["CY", m],
  ["EE", N],
  ["IS", O],
  ["IE", B],
  ["LV", H],
  ["LI", w],
  ["LT", R],
  ["LU", G],
  ["MT", k],
  ["SK", q],
  ["SI", $],
  ["GR", L],
  ["FI", A],
  ["PT", K],
  ["NO", V],
  ["BE", b],
  ["AT", v],
  ["CH", x],
  ["FR", T],
  ["DE", _],
  ["ES", E],
  ["IT", j],
  ["NL", Y],
  ["PL", z],
  ["HR", U]
]);

function er(e) {
  let {
    entryPoint: t,
    className: n
  } = e, s = (0, a.e7)([c.Z], () => c.Z.hidePersonalInformation), i = (0, u.n)(), g = null == i ? void 0 : i.countryCode;
  if ((0, d.U)(p.jXE.SETTINGS_PREMIUM, g), null == g || !en.has(g) || s) return null;
  let v = en.get(g),
    b = "badgeIcon" + r[t];
  return (0, o.jsx)("img", {
    className: l()(n, f[b]),
    "aria-hidden": !0,
    alt: "Wumpus holding a country-specific flag",
    src: v
  })
}