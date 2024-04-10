"use strict";
n.r(t), n.d(t, {
  BadgeEntryPoint: function() {
    return i
  },
  LocalizedPricingBadgeIcon: function() {
    return ei
  }
}), n("47120");
var i, r, a = n("735250");
n("470079");
var s = n("803997"),
  l = n.n(s),
  o = n("442837"),
  u = n("246946"),
  c = n("91802"),
  d = n("222727"),
  f = n("981631"),
  p = n("503330"),
  m = n("500052"),
  E = n("375832"),
  I = n("992171"),
  _ = n("937064"),
  T = n("434336"),
  h = n("128955"),
  g = n("803353"),
  C = n("479388"),
  v = n("179581"),
  x = n("13174"),
  N = n("580248"),
  R = n("966294"),
  S = n("302143"),
  A = n("146121"),
  M = n("705500"),
  O = n("402127"),
  b = n("153652"),
  F = n("485487"),
  L = n("200985"),
  y = n("270930"),
  D = n("46514"),
  j = n("750876"),
  P = n("993855"),
  w = n("701497"),
  G = n("937717"),
  U = n("165194"),
  B = n("208802"),
  V = n("145905"),
  H = n("335302"),
  k = n("956172"),
  Y = n("695579"),
  W = n("541764"),
  z = n("191706"),
  q = n("67528"),
  Z = n("332150"),
  X = n("581902"),
  K = n("167219"),
  Q = n("704381"),
  J = n("591417"),
  $ = n("929883"),
  ee = n("261137"),
  et = n("958700");
(r = i || (i = {}))[r.PrivateMessages = 0] = "PrivateMessages", r[r.SettingsMenu = 1] = "SettingsMenu";
let en = new Map([
  ["PE", z],
  ["PH", q],
  ["CL", h],
  ["CO", g],
  ["AR", m],
  ["JP", j],
  ["VN", et],
  ["TH", ee],
  ["ID", F],
  ["MY", k],
  ["MX", H],
  ["KR", P],
  ["BG", _],
  ["CZ", v],
  ["HU", b],
  ["RO", K],
  ["SE", Q],
  ["CY", C],
  ["EE", N],
  ["IS", y],
  ["IE", L],
  ["LV", B],
  ["LI", w],
  ["LT", G],
  ["LU", U],
  ["MT", V],
  ["SK", $],
  ["SI", J],
  ["GR", M],
  ["FI", S],
  ["PT", X],
  ["NO", W],
  ["BE", I],
  ["AT", E],
  ["CH", T],
  ["FR", A],
  ["DE", x],
  ["ES", R],
  ["IT", D],
  ["NL", Y],
  ["PL", Z],
  ["HR", O]
]);

function ei(e) {
  let {
    entryPoint: t,
    className: n
  } = e, r = (0, o.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), s = (0, c.useLocalizedPromoQuery)(), m = null == s ? void 0 : s.countryCode;
  if ((0, d.useTrackLocalizedPricingPromoImpression)(f.AnalyticsSections.SETTINGS_PREMIUM, m), null == m || !en.has(m) || r) return null;
  let E = en.get(m),
    I = "badgeIcon" + i[t];
  return (0, a.jsx)("img", {
    className: l()(n, p[I]),
    "aria-hidden": !0,
    alt: "Wumpus holding a country-specific flag",
    src: E
  })
}