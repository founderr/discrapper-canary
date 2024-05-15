"use strict";
a.r(t), a.d(t, {
  BadgeEntryPoint: function() {
    return n
  },
  LocalizedPricingBadgeIcon: function() {
    return en
  }
}), a("47120");
var n, r, s = a("735250");
a("470079");
var i = a("120356"),
  l = a.n(i),
  o = a("442837"),
  c = a("246946"),
  d = a("91802"),
  u = a("222727"),
  f = a("981631"),
  m = a("137407"),
  h = a("500052"),
  p = a("375832"),
  E = a("992171"),
  T = a("937064"),
  C = a("434336"),
  x = a("128955"),
  _ = a("803353"),
  g = a("479388"),
  I = a("179581"),
  N = a("13174"),
  v = a("580248"),
  A = a("966294"),
  S = a("302143"),
  L = a("146121"),
  R = a("705500"),
  y = a("402127"),
  b = a("153652"),
  M = a("485487"),
  j = a("200985"),
  O = a("270930"),
  D = a("46514"),
  P = a("750876"),
  F = a("993855"),
  w = a("701497"),
  B = a("937717"),
  G = a("165194"),
  U = a("208802"),
  H = a("145905"),
  k = a("335302"),
  V = a("956172"),
  W = a("695579"),
  Y = a("541764"),
  K = a("191706"),
  Z = a("67528"),
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
  ["PE", K],
  ["PH", Z],
  ["CL", x],
  ["CO", _],
  ["AR", h],
  ["JP", P],
  ["VN", et],
  ["TH", ee],
  ["ID", M],
  ["MY", V],
  ["MX", k],
  ["KR", F],
  ["BG", T],
  ["CZ", I],
  ["HU", b],
  ["RO", X],
  ["SE", Q],
  ["CY", g],
  ["EE", v],
  ["IS", O],
  ["IE", j],
  ["LV", U],
  ["LI", w],
  ["LT", B],
  ["LU", G],
  ["MT", H],
  ["SK", $],
  ["SI", J],
  ["GR", R],
  ["FI", S],
  ["PT", q],
  ["NO", Y],
  ["BE", E],
  ["AT", p],
  ["CH", C],
  ["FR", L],
  ["DE", N],
  ["ES", A],
  ["IT", D],
  ["NL", W],
  ["PL", z],
  ["HR", y]
]);

function en(e) {
  let {
    entryPoint: t,
    className: a
  } = e, r = (0, o.useStateFromStores)([c.default], () => c.default.hidePersonalInformation), i = (0, d.useLocalizedPromoQuery)(), h = null == i ? void 0 : i.countryCode;
  if ((0, u.useTrackLocalizedPricingPromoImpression)(f.AnalyticsSections.SETTINGS_PREMIUM, h), null == h || !ea.has(h) || r) return null;
  let p = ea.get(h),
    E = "badgeIcon" + n[t];
  return (0, s.jsx)("img", {
    className: l()(a, m[E]),
    "aria-hidden": !0,
    alt: "Wumpus holding a country-specific flag",
    src: p
  })
}