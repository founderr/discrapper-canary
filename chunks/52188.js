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
  E = n("375832"),
  p = n("992171"),
  C = n("937064"),
  T = n("434336"),
  _ = n("128955"),
  x = n("803353"),
  g = n("479388"),
  I = n("179581"),
  N = n("13174"),
  v = n("580248"),
  A = n("966294"),
  S = n("302143"),
  L = n("146121"),
  R = n("705500"),
  y = n("402127"),
  M = n("153652"),
  b = n("485487"),
  j = n("200985"),
  O = n("270930"),
  D = n("46514"),
  F = n("750876"),
  P = n("993855"),
  w = n("701497"),
  B = n("937717"),
  G = n("165194"),
  U = n("208802"),
  k = n("145905"),
  H = n("335302"),
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
  ["BG", C],
  ["CZ", I],
  ["HU", M],
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
  ["MT", k],
  ["SK", $],
  ["SI", J],
  ["GR", R],
  ["FI", S],
  ["PT", q],
  ["NO", Y],
  ["BE", p],
  ["AT", E],
  ["CH", T],
  ["FR", L],
  ["DE", N],
  ["ES", A],
  ["IT", D],
  ["NL", W],
  ["PL", z],
  ["HR", y]
]);

function ea(e) {
  let {
    entryPoint: t,
    className: n
  } = e, r = (0, o.useStateFromStores)([c.default], () => c.default.hidePersonalInformation), i = (0, d.useLocalizedPromoQuery)(), h = null == i ? void 0 : i.countryCode;
  if ((0, u.useTrackLocalizedPricingPromoImpression)(f.AnalyticsSections.SETTINGS_PREMIUM, h), null == h || !en.has(h) || r) return null;
  let E = en.get(h),
    p = "badgeIcon" + a[t];
  return (0, s.jsx)("img", {
    className: l()(n, m[p]),
    "aria-hidden": !0,
    alt: "Wumpus holding a country-specific flag",
    src: E
  })
}