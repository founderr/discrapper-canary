"use strict";
n.r(t), n.d(t, {
  BadgeEntryPoint: function() {
    return a
  },
  LocalizedPricingBadgeIcon: function() {
    return ea
  }
}), n("47120");
var a, r, i = n("735250");
n("470079");
var s = n("120356"),
  l = n.n(s),
  o = n("442837"),
  c = n("246946"),
  d = n("91802"),
  u = n("222727"),
  f = n("981631"),
  m = n("486831"),
  h = n("500052"),
  p = n("375832"),
  T = n("992171"),
  E = n("937064"),
  C = n("434336"),
  _ = n("128955"),
  g = n("803353"),
  x = n("479388"),
  I = n("179581"),
  v = n("13174"),
  N = n("580248"),
  S = n("966294"),
  A = n("302143"),
  L = n("146121"),
  b = n("705500"),
  R = n("402127"),
  M = n("153652"),
  y = n("485487"),
  j = n("200985"),
  O = n("270930"),
  D = n("46514"),
  P = n("750876"),
  F = n("993855"),
  B = n("701497"),
  w = n("937717"),
  G = n("165194"),
  U = n("208802"),
  k = n("145905"),
  H = n("335302"),
  V = n("956172"),
  Y = n("695579"),
  W = n("541764"),
  K = n("191706"),
  z = n("67528"),
  Z = n("332150"),
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
  ["PH", z],
  ["CL", _],
  ["CO", g],
  ["AR", h],
  ["JP", P],
  ["VN", et],
  ["TH", ee],
  ["ID", y],
  ["MY", V],
  ["MX", H],
  ["KR", F],
  ["BG", E],
  ["CZ", I],
  ["HU", M],
  ["RO", X],
  ["SE", Q],
  ["CY", x],
  ["EE", N],
  ["IS", O],
  ["IE", j],
  ["LV", U],
  ["LI", B],
  ["LT", w],
  ["LU", G],
  ["MT", k],
  ["SK", $],
  ["SI", J],
  ["GR", b],
  ["FI", A],
  ["PT", q],
  ["NO", W],
  ["BE", T],
  ["AT", p],
  ["CH", C],
  ["FR", L],
  ["DE", v],
  ["ES", S],
  ["IT", D],
  ["NL", Y],
  ["PL", Z],
  ["HR", R]
]);

function ea(e) {
  let {
    entryPoint: t,
    className: n
  } = e, r = (0, o.useStateFromStores)([c.default], () => c.default.hidePersonalInformation), s = (0, d.useLocalizedPromoQuery)(), h = null == s ? void 0 : s.countryCode;
  if ((0, u.useTrackLocalizedPricingPromoImpression)(f.AnalyticsSections.SETTINGS_PREMIUM, h), null == h || !en.has(h) || r) return null;
  let p = en.get(h),
    T = "badgeIcon" + a[t];
  return (0, i.jsx)("img", {
    className: l()(n, m[T]),
    "aria-hidden": !0,
    alt: "Wumpus holding a country-specific flag",
    src: p
  })
}