"use strict";
n.r(t), n.d(t, {
  BadgeEntryPoint: function() {
    return i
  },
  LocalizedPricingBadgeIcon: function() {
    return ei
  }
}), n("47120");
var i, r, s = n("735250");
n("470079");
var a = n("120356"),
  l = n.n(a),
  o = n("442837"),
  u = n("246946"),
  c = n("91802"),
  d = n("222727"),
  f = n("981631"),
  p = n("486831"),
  m = n("500052"),
  E = n("375832"),
  I = n("992171"),
  _ = n("937064"),
  h = n("434336"),
  T = n("128955"),
  g = n("803353"),
  C = n("479388"),
  x = n("179581"),
  v = n("13174"),
  N = n("580248"),
  R = n("966294"),
  A = n("302143"),
  S = n("146121"),
  M = n("705500"),
  b = n("402127"),
  O = n("153652"),
  L = n("485487"),
  F = n("200985"),
  y = n("270930"),
  D = n("46514"),
  j = n("750876"),
  P = n("993855"),
  w = n("701497"),
  G = n("937717"),
  B = n("165194"),
  U = n("208802"),
  V = n("145905"),
  k = n("335302"),
  H = n("956172"),
  Y = n("695579"),
  z = n("541764"),
  W = n("191706"),
  q = n("67528"),
  Z = n("332150"),
  K = n("581902"),
  X = n("167219"),
  Q = n("704381"),
  J = n("591417"),
  $ = n("929883"),
  ee = n("261137"),
  et = n("958700");
(r = i || (i = {}))[r.PrivateMessages = 0] = "PrivateMessages", r[r.SettingsMenu = 1] = "SettingsMenu";
let en = new Map([
  ["PE", W],
  ["PH", q],
  ["CL", T],
  ["CO", g],
  ["AR", m],
  ["JP", j],
  ["VN", et],
  ["TH", ee],
  ["ID", L],
  ["MY", H],
  ["MX", k],
  ["KR", P],
  ["BG", _],
  ["CZ", x],
  ["HU", O],
  ["RO", X],
  ["SE", Q],
  ["CY", C],
  ["EE", N],
  ["IS", y],
  ["IE", F],
  ["LV", U],
  ["LI", w],
  ["LT", G],
  ["LU", B],
  ["MT", V],
  ["SK", $],
  ["SI", J],
  ["GR", M],
  ["FI", A],
  ["PT", K],
  ["NO", z],
  ["BE", I],
  ["AT", E],
  ["CH", h],
  ["FR", S],
  ["DE", v],
  ["ES", R],
  ["IT", D],
  ["NL", Y],
  ["PL", Z],
  ["HR", b]
]);

function ei(e) {
  let {
    entryPoint: t,
    className: n
  } = e, r = (0, o.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), a = (0, c.useLocalizedPromoQuery)(), m = null == a ? void 0 : a.countryCode;
  if ((0, d.useTrackLocalizedPricingPromoImpression)(f.AnalyticsSections.SETTINGS_PREMIUM, m), null == m || !en.has(m) || r) return null;
  let E = en.get(m),
    I = "badgeIcon" + i[t];
  return (0, s.jsx)("img", {
    className: l()(n, p[I]),
    "aria-hidden": !0,
    alt: "Wumpus holding a country-specific flag",
    src: E
  })
}