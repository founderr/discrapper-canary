"use strict";
n.r(t), n.d(t, {
  BadgeEntryPoint: function() {
    return a
  },
  LocalizedPricingBadgeIcon: function() {
    return ea
  }
}), n("47120");
var a, r, s = n("735250");
n("470079");
var i = n("120356"),
  l = n.n(i),
  o = n("442837"),
  c = n("246946"),
  d = n("91802"),
  u = n("222727"),
  f = n("981631"),
  m = n("137407"),
  h = n("500052"),
  p = n("375832"),
  E = n("992171"),
  T = n("937064"),
  C = n("434336"),
  x = n("128955"),
  _ = n("803353"),
  g = n("479388"),
  I = n("179581"),
  N = n("13174"),
  v = n("580248"),
  A = n("966294"),
  S = n("302143"),
  L = n("146121"),
  y = n("705500"),
  R = n("402127"),
  b = n("153652"),
  M = n("485487"),
  j = n("200985"),
  O = n("270930"),
  D = n("46514"),
  P = n("750876"),
  F = n("993855"),
  w = n("701497"),
  B = n("937717"),
  G = n("165194"),
  U = n("208802"),
  H = n("145905"),
  k = n("335302"),
  V = n("956172"),
  W = n("695579"),
  Y = n("541764"),
  K = n("191706"),
  Z = n("67528"),
  z = n("332150"),
  q = n("581902"),
  X = n("167219"),
  Q = n("704381"),
  J = n("591417"),
  $ = n("929883"),
  ee = n("261137"),
  et = n("958700");
(r = a || (a = {}))[r.PrivateMessages = 0] = "PrivateMessages", r[r.SettingsMenu = 1] = "SettingsMenu";
let en = new Map([
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
  ["GR", y],
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
  ["HR", R]
]);

function ea(e) {
  let {
    entryPoint: t,
    className: n
  } = e, r = (0, o.useStateFromStores)([c.default], () => c.default.hidePersonalInformation), i = (0, d.useLocalizedPromoQuery)(), h = null == i ? void 0 : i.countryCode;
  if ((0, u.useTrackLocalizedPricingPromoImpression)(f.AnalyticsSections.SETTINGS_PREMIUM, h), null == h || !en.has(h) || r) return null;
  let p = en.get(h),
    E = "badgeIcon" + a[t];
  return (0, s.jsx)("img", {
    className: l()(n, m[E]),
    "aria-hidden": !0,
    alt: "Wumpus holding a country-specific flag",
    src: p
  })
}