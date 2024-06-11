"use strict";
s.r(t), s.d(t, {
  BadgeEntryPoint: function() {
    return r
  },
  LocalizedPricingBadgeIcon: function() {
    return er
  }
}), s("47120");
var r, n, i = s("735250");
s("470079");
var a = s("120356"),
  l = s.n(a),
  o = s("442837"),
  c = s("246946"),
  u = s("91802"),
  d = s("222727"),
  f = s("981631"),
  p = s("137407"),
  g = s("500052"),
  v = s("375832"),
  h = s("992171"),
  b = s("937064"),
  S = s("434336"),
  x = s("128955"),
  m = s("803353"),
  I = s("479388"),
  C = s("179581"),
  E = s("13174"),
  T = s("580248"),
  A = s("966294"),
  N = s("302143"),
  _ = s("146121"),
  L = s("705500"),
  M = s("402127"),
  P = s("153652"),
  B = s("485487"),
  D = s("200985"),
  O = s("270930"),
  U = s("46514"),
  j = s("750876"),
  w = s("993855"),
  y = s("701497"),
  R = s("937717"),
  k = s("165194"),
  G = s("208802"),
  F = s("145905"),
  H = s("335302"),
  Z = s("956172"),
  Y = s("695579"),
  V = s("541764"),
  W = s("191706"),
  z = s("67528"),
  K = s("332150"),
  J = s("581902"),
  Q = s("167219"),
  X = s("704381"),
  q = s("591417"),
  $ = s("929883"),
  ee = s("261137"),
  et = s("958700");
(n = r || (r = {}))[n.PrivateMessages = 0] = "PrivateMessages", n[n.SettingsMenu = 1] = "SettingsMenu";
let es = new Map([
  ["PE", W],
  ["PH", z],
  ["CL", x],
  ["CO", m],
  ["AR", g],
  ["JP", j],
  ["VN", et],
  ["TH", ee],
  ["ID", B],
  ["MY", Z],
  ["MX", H],
  ["KR", w],
  ["BG", b],
  ["CZ", C],
  ["HU", P],
  ["RO", Q],
  ["SE", X],
  ["CY", I],
  ["EE", T],
  ["IS", O],
  ["IE", D],
  ["LV", G],
  ["LI", y],
  ["LT", R],
  ["LU", k],
  ["MT", F],
  ["SK", $],
  ["SI", q],
  ["GR", L],
  ["FI", N],
  ["PT", J],
  ["NO", V],
  ["BE", h],
  ["AT", v],
  ["CH", S],
  ["FR", _],
  ["DE", E],
  ["ES", A],
  ["IT", U],
  ["NL", Y],
  ["PL", K],
  ["HR", M]
]);

function er(e) {
  let {
    entryPoint: t,
    className: s
  } = e, n = (0, o.useStateFromStores)([c.default], () => c.default.hidePersonalInformation), a = (0, u.useLocalizedPromoQuery)(), g = null == a ? void 0 : a.countryCode;
  if ((0, d.useTrackLocalizedPricingPromoImpression)(f.AnalyticsSections.SETTINGS_PREMIUM, g), null == g || !es.has(g) || n) return null;
  let v = es.get(g),
    h = "badgeIcon" + r[t];
  return (0, i.jsx)("img", {
    className: l()(s, p[h]),
    "aria-hidden": !0,
    alt: "Wumpus holding a country-specific flag",
    src: v
  })
}