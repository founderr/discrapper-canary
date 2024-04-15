"use strict";
i.r(t), i.d(t, {
  BadgeEntryPoint: function() {
    return n
  },
  LocalizedPricingBadgeIcon: function() {
    return en
  }
}), i("47120");
var n, r, s = i("735250");
i("470079");
var a = i("120356"),
  l = i.n(a),
  o = i("442837"),
  u = i("246946"),
  c = i("91802"),
  d = i("222727"),
  f = i("981631"),
  p = i("503330"),
  C = i("500052"),
  m = i("375832"),
  h = i("992171"),
  _ = i("937064"),
  E = i("434336"),
  I = i("128955"),
  T = i("803353"),
  x = i("479388"),
  g = i("179581"),
  v = i("13174"),
  R = i("580248"),
  A = i("966294"),
  N = i("302143"),
  S = i("146121"),
  M = i("705500"),
  L = i("402127"),
  j = i("153652"),
  O = i("485487"),
  b = i("200985"),
  y = i("270930"),
  F = i("46514"),
  D = i("750876"),
  P = i("993855"),
  w = i("701497"),
  G = i("937717"),
  B = i("165194"),
  U = i("208802"),
  V = i("145905"),
  H = i("335302"),
  k = i("956172"),
  Y = i("695579"),
  Z = i("541764"),
  W = i("191706"),
  z = i("67528"),
  q = i("332150"),
  K = i("581902"),
  X = i("167219"),
  Q = i("704381"),
  J = i("591417"),
  $ = i("929883"),
  ee = i("261137"),
  et = i("958700");
(r = n || (n = {}))[r.PrivateMessages = 0] = "PrivateMessages", r[r.SettingsMenu = 1] = "SettingsMenu";
let ei = new Map([
  ["PE", W],
  ["PH", z],
  ["CL", I],
  ["CO", T],
  ["AR", C],
  ["JP", D],
  ["VN", et],
  ["TH", ee],
  ["ID", O],
  ["MY", k],
  ["MX", H],
  ["KR", P],
  ["BG", _],
  ["CZ", g],
  ["HU", j],
  ["RO", X],
  ["SE", Q],
  ["CY", x],
  ["EE", R],
  ["IS", y],
  ["IE", b],
  ["LV", U],
  ["LI", w],
  ["LT", G],
  ["LU", B],
  ["MT", V],
  ["SK", $],
  ["SI", J],
  ["GR", M],
  ["FI", N],
  ["PT", K],
  ["NO", Z],
  ["BE", h],
  ["AT", m],
  ["CH", E],
  ["FR", S],
  ["DE", v],
  ["ES", A],
  ["IT", F],
  ["NL", Y],
  ["PL", q],
  ["HR", L]
]);

function en(e) {
  let {
    entryPoint: t,
    className: i
  } = e, r = (0, o.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), a = (0, c.useLocalizedPromoQuery)(), C = null == a ? void 0 : a.countryCode;
  if ((0, d.useTrackLocalizedPricingPromoImpression)(f.AnalyticsSections.SETTINGS_PREMIUM, C), null == C || !ei.has(C) || r) return null;
  let m = ei.get(C),
    h = "badgeIcon" + n[t];
  return (0, s.jsx)("img", {
    className: l()(i, p[h]),
    "aria-hidden": !0,
    alt: "Wumpus holding a country-specific flag",
    src: m
  })
}