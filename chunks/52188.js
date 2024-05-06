"use strict";
a.r(t), a.d(t, {
  BadgeEntryPoint: function() {
    return n
  },
  LocalizedPricingBadgeIcon: function() {
    return en
  }
}), a("47120");
var n, i, r = a("735250");
a("470079");
var s = a("120356"),
  l = a.n(s),
  o = a("442837"),
  c = a("246946"),
  d = a("91802"),
  u = a("222727"),
  f = a("981631"),
  m = a("486831"),
  h = a("500052"),
  E = a("375832"),
  T = a("992171"),
  p = a("937064"),
  _ = a("434336"),
  C = a("128955"),
  g = a("803353"),
  x = a("479388"),
  I = a("179581"),
  v = a("13174"),
  N = a("580248"),
  A = a("966294"),
  S = a("302143"),
  R = a("146121"),
  L = a("705500"),
  M = a("402127"),
  b = a("153652"),
  j = a("485487"),
  y = a("200985"),
  O = a("270930"),
  D = a("46514"),
  P = a("750876"),
  F = a("993855"),
  w = a("701497"),
  G = a("937717"),
  U = a("165194"),
  B = a("208802"),
  k = a("145905"),
  H = a("335302"),
  V = a("956172"),
  Y = a("695579"),
  W = a("541764"),
  Z = a("191706"),
  K = a("67528"),
  z = a("332150"),
  q = a("581902"),
  X = a("167219"),
  Q = a("704381"),
  J = a("591417"),
  $ = a("929883"),
  ee = a("261137"),
  et = a("958700");
(i = n || (n = {}))[i.PrivateMessages = 0] = "PrivateMessages", i[i.SettingsMenu = 1] = "SettingsMenu";
let ea = new Map([
  ["PE", Z],
  ["PH", K],
  ["CL", C],
  ["CO", g],
  ["AR", h],
  ["JP", P],
  ["VN", et],
  ["TH", ee],
  ["ID", j],
  ["MY", V],
  ["MX", H],
  ["KR", F],
  ["BG", p],
  ["CZ", I],
  ["HU", b],
  ["RO", X],
  ["SE", Q],
  ["CY", x],
  ["EE", N],
  ["IS", O],
  ["IE", y],
  ["LV", B],
  ["LI", w],
  ["LT", G],
  ["LU", U],
  ["MT", k],
  ["SK", $],
  ["SI", J],
  ["GR", L],
  ["FI", S],
  ["PT", q],
  ["NO", W],
  ["BE", T],
  ["AT", E],
  ["CH", _],
  ["FR", R],
  ["DE", v],
  ["ES", A],
  ["IT", D],
  ["NL", Y],
  ["PL", z],
  ["HR", M]
]);

function en(e) {
  let {
    entryPoint: t,
    className: a
  } = e, i = (0, o.useStateFromStores)([c.default], () => c.default.hidePersonalInformation), s = (0, d.useLocalizedPromoQuery)(), h = null == s ? void 0 : s.countryCode;
  if ((0, u.useTrackLocalizedPricingPromoImpression)(f.AnalyticsSections.SETTINGS_PREMIUM, h), null == h || !ea.has(h) || i) return null;
  let E = ea.get(h),
    T = "badgeIcon" + n[t];
  return (0, r.jsx)("img", {
    className: l()(a, m[T]),
    "aria-hidden": !0,
    alt: "Wumpus holding a country-specific flag",
    src: E
  })
}