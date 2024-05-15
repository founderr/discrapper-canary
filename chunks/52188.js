"use strict";
a.r(t), a.d(t, {
  BadgeEntryPoint: function() {
    return n
  },
  LocalizedPricingBadgeIcon: function() {
    return en
  }
}), a("47120");
var n, r, i = a("735250");
a("470079");
var l = a("120356"),
  s = a.n(l),
  o = a("442837"),
  c = a("246946"),
  d = a("91802"),
  u = a("222727"),
  f = a("981631"),
  m = a("137407"),
  h = a("500052"),
  E = a("375832"),
  T = a("992171"),
  p = a("937064"),
  C = a("434336"),
  _ = a("128955"),
  x = a("803353"),
  g = a("479388"),
  I = a("179581"),
  v = a("13174"),
  N = a("580248"),
  A = a("966294"),
  S = a("302143"),
  R = a("146121"),
  M = a("705500"),
  L = a("402127"),
  y = a("153652"),
  b = a("485487"),
  j = a("200985"),
  O = a("270930"),
  D = a("46514"),
  F = a("750876"),
  P = a("993855"),
  w = a("701497"),
  G = a("937717"),
  U = a("165194"),
  B = a("208802"),
  k = a("145905"),
  H = a("335302"),
  V = a("956172"),
  Y = a("695579"),
  Z = a("541764"),
  W = a("191706"),
  K = a("67528"),
  z = a("332150"),
  q = a("581902"),
  X = a("167219"),
  Q = a("704381"),
  J = a("591417"),
  $ = a("929883"),
  ee = a("261137"),
  et = a("958700");
(r = n || (n = {}))[r.PrivateMessages = 0] = "PrivateMessages", r[r.SettingsMenu = 1] = "SettingsMenu";
let ea = new Map([
  ["PE", W],
  ["PH", K],
  ["CL", _],
  ["CO", x],
  ["AR", h],
  ["JP", F],
  ["VN", et],
  ["TH", ee],
  ["ID", b],
  ["MY", V],
  ["MX", H],
  ["KR", P],
  ["BG", p],
  ["CZ", I],
  ["HU", y],
  ["RO", X],
  ["SE", Q],
  ["CY", g],
  ["EE", N],
  ["IS", O],
  ["IE", j],
  ["LV", B],
  ["LI", w],
  ["LT", G],
  ["LU", U],
  ["MT", k],
  ["SK", $],
  ["SI", J],
  ["GR", M],
  ["FI", S],
  ["PT", q],
  ["NO", Z],
  ["BE", T],
  ["AT", E],
  ["CH", C],
  ["FR", R],
  ["DE", v],
  ["ES", A],
  ["IT", D],
  ["NL", Y],
  ["PL", z],
  ["HR", L]
]);

function en(e) {
  let {
    entryPoint: t,
    className: a
  } = e, r = (0, o.useStateFromStores)([c.default], () => c.default.hidePersonalInformation), l = (0, d.useLocalizedPromoQuery)(), h = null == l ? void 0 : l.countryCode;
  if ((0, u.useTrackLocalizedPricingPromoImpression)(f.AnalyticsSections.SETTINGS_PREMIUM, h), null == h || !ea.has(h) || r) return null;
  let E = ea.get(h),
    T = "badgeIcon" + n[t];
  return (0, i.jsx)("img", {
    className: s()(a, m[T]),
    "aria-hidden": !0,
    alt: "Wumpus holding a country-specific flag",
    src: E
  })
}