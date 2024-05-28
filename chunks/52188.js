"use strict";
r.r(t), r.d(t, {
  BadgeEntryPoint: function() {
    return s
  },
  LocalizedPricingBadgeIcon: function() {
    return es
  }
}), r("47120");
var s, n, l = r("735250");
r("470079");
var i = r("120356"),
  a = r.n(i),
  o = r("442837"),
  c = r("246946"),
  u = r("91802"),
  d = r("222727"),
  f = r("981631"),
  p = r("137407"),
  h = r("500052"),
  g = r("375832"),
  m = r("992171"),
  x = r("937064"),
  v = r("434336"),
  b = r("128955"),
  C = r("803353"),
  S = r("479388"),
  N = r("179581"),
  I = r("13174"),
  E = r("580248"),
  T = r("966294"),
  j = r("302143"),
  _ = r("146121"),
  A = r("705500"),
  P = r("402127"),
  L = r("153652"),
  w = r("485487"),
  B = r("200985"),
  D = r("270930"),
  M = r("46514"),
  k = r("750876"),
  y = r("993855"),
  O = r("701497"),
  R = r("937717"),
  U = r("165194"),
  G = r("208802"),
  H = r("145905"),
  F = r("335302"),
  Z = r("956172"),
  V = r("695579"),
  Y = r("541764"),
  W = r("191706"),
  z = r("67528"),
  K = r("332150"),
  J = r("581902"),
  Q = r("167219"),
  X = r("704381"),
  q = r("591417"),
  $ = r("929883"),
  ee = r("261137"),
  et = r("958700");
(n = s || (s = {}))[n.PrivateMessages = 0] = "PrivateMessages", n[n.SettingsMenu = 1] = "SettingsMenu";
let er = new Map([
  ["PE", W],
  ["PH", z],
  ["CL", b],
  ["CO", C],
  ["AR", h],
  ["JP", k],
  ["VN", et],
  ["TH", ee],
  ["ID", w],
  ["MY", Z],
  ["MX", F],
  ["KR", y],
  ["BG", x],
  ["CZ", N],
  ["HU", L],
  ["RO", Q],
  ["SE", X],
  ["CY", S],
  ["EE", E],
  ["IS", D],
  ["IE", B],
  ["LV", G],
  ["LI", O],
  ["LT", R],
  ["LU", U],
  ["MT", H],
  ["SK", $],
  ["SI", q],
  ["GR", A],
  ["FI", j],
  ["PT", J],
  ["NO", Y],
  ["BE", m],
  ["AT", g],
  ["CH", v],
  ["FR", _],
  ["DE", I],
  ["ES", T],
  ["IT", M],
  ["NL", V],
  ["PL", K],
  ["HR", P]
]);

function es(e) {
  let {
    entryPoint: t,
    className: r
  } = e, n = (0, o.useStateFromStores)([c.default], () => c.default.hidePersonalInformation), i = (0, u.useLocalizedPromoQuery)(), h = null == i ? void 0 : i.countryCode;
  if ((0, d.useTrackLocalizedPricingPromoImpression)(f.AnalyticsSections.SETTINGS_PREMIUM, h), null == h || !er.has(h) || n) return null;
  let g = er.get(h),
    m = "badgeIcon" + s[t];
  return (0, l.jsx)("img", {
    className: a()(r, p[m]),
    "aria-hidden": !0,
    alt: "Wumpus holding a country-specific flag",
    src: g
  })
}