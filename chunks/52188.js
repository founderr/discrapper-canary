"use strict";
n.r(t), n.d(t, {
  BadgeEntryPoint: function() {
    return a
  },
  LocalizedPricingBadgeIcon: function() {
    return ea
  }
}), n("47120");
var a, i, r = n("735250");
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
  E = n("375832"),
  T = n("992171"),
  p = n("937064"),
  _ = n("434336"),
  C = n("128955"),
  g = n("803353"),
  x = n("479388"),
  I = n("179581"),
  v = n("13174"),
  N = n("580248"),
  S = n("966294"),
  A = n("302143"),
  R = n("146121"),
  M = n("705500"),
  L = n("402127"),
  b = n("153652"),
  y = n("485487"),
  j = n("200985"),
  O = n("270930"),
  D = n("46514"),
  P = n("750876"),
  F = n("993855"),
  w = n("701497"),
  U = n("937717"),
  G = n("165194"),
  B = n("208802"),
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
(i = a || (a = {}))[i.PrivateMessages = 0] = "PrivateMessages", i[i.SettingsMenu = 1] = "SettingsMenu";
let en = new Map([
  ["PE", K],
  ["PH", z],
  ["CL", C],
  ["CO", g],
  ["AR", h],
  ["JP", P],
  ["VN", et],
  ["TH", ee],
  ["ID", y],
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
  ["IE", j],
  ["LV", B],
  ["LI", w],
  ["LT", U],
  ["LU", G],
  ["MT", k],
  ["SK", $],
  ["SI", J],
  ["GR", M],
  ["FI", A],
  ["PT", q],
  ["NO", W],
  ["BE", T],
  ["AT", E],
  ["CH", _],
  ["FR", R],
  ["DE", v],
  ["ES", S],
  ["IT", D],
  ["NL", Y],
  ["PL", Z],
  ["HR", L]
]);

function ea(e) {
  let {
    entryPoint: t,
    className: n
  } = e, i = (0, o.useStateFromStores)([c.default], () => c.default.hidePersonalInformation), s = (0, d.useLocalizedPromoQuery)(), h = null == s ? void 0 : s.countryCode;
  if ((0, u.useTrackLocalizedPricingPromoImpression)(f.AnalyticsSections.SETTINGS_PREMIUM, h), null == h || !en.has(h) || i) return null;
  let E = en.get(h),
    T = "badgeIcon" + a[t];
  return (0, r.jsx)("img", {
    className: l()(n, m[T]),
    "aria-hidden": !0,
    alt: "Wumpus holding a country-specific flag",
    src: E
  })
}