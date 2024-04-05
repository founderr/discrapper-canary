"use strict";
n.r(t), n.d(t, {
  BadgeEntryPoint: function() {
    return r
  },
  LocalizedPricingBadgeIcon: function() {
    return er
  }
}), n("47120");
var r, i, s = n("735250");
n("470079");
var a = n("803997"),
  l = n.n(a),
  o = n("442837"),
  u = n("246946"),
  c = n("91802"),
  d = n("222727"),
  f = n("981631"),
  p = n("503330"),
  _ = n("500052"),
  E = n("375832"),
  m = n("992171"),
  I = n("937064"),
  T = n("434336"),
  h = n("128955"),
  g = n("803353"),
  C = n("479388"),
  S = n("179581"),
  A = n("13174"),
  v = n("580248"),
  N = n("966294"),
  b = n("302143"),
  O = n("146121"),
  R = n("705500"),
  x = n("402127"),
  D = n("153652"),
  M = n("485487"),
  y = n("200985"),
  L = n("270930"),
  P = n("46514"),
  G = n("750876"),
  j = n("993855"),
  U = n("701497"),
  F = n("937717"),
  w = n("165194"),
  B = n("208802"),
  k = n("145905"),
  H = n("335302"),
  V = n("956172"),
  Y = n("695579"),
  W = n("541764"),
  q = n("191706"),
  Z = n("67528"),
  z = n("332150"),
  K = n("581902"),
  Q = n("167219"),
  X = n("704381"),
  J = n("591417"),
  $ = n("929883"),
  ee = n("261137"),
  et = n("958700");
(i = r || (r = {}))[i.PrivateMessages = 0] = "PrivateMessages", i[i.SettingsMenu = 1] = "SettingsMenu";
let en = new Map([
  ["PE", q],
  ["PH", Z],
  ["CL", h],
  ["CO", g],
  ["AR", _],
  ["JP", G],
  ["VN", et],
  ["TH", ee],
  ["ID", M],
  ["MY", V],
  ["MX", H],
  ["KR", j],
  ["BG", I],
  ["CZ", S],
  ["HU", D],
  ["RO", Q],
  ["SE", X],
  ["CY", C],
  ["EE", v],
  ["IS", L],
  ["IE", y],
  ["LV", B],
  ["LI", U],
  ["LT", F],
  ["LU", w],
  ["MT", k],
  ["SK", $],
  ["SI", J],
  ["GR", R],
  ["FI", b],
  ["PT", K],
  ["NO", W],
  ["BE", m],
  ["AT", E],
  ["CH", T],
  ["FR", O],
  ["DE", A],
  ["ES", N],
  ["IT", P],
  ["NL", Y],
  ["PL", z],
  ["HR", x]
]);

function er(e) {
  let {
    entryPoint: t,
    className: n
  } = e, i = (0, o.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), a = (0, c.useLocalizedPromoQuery)(), _ = null == a ? void 0 : a.countryCode;
  if ((0, d.useTrackLocalizedPricingPromoImpression)(f.AnalyticsSections.SETTINGS_PREMIUM, _), null == _ || !en.has(_) || i) return null;
  let E = en.get(_),
    m = "badgeIcon" + r[t];
  return (0, s.jsx)("img", {
    className: l()(n, p[m]),
    "aria-hidden": !0,
    alt: "Wumpus holding a country-specific flag",
    src: E
  })
}