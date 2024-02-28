"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var i = n("37983");
n("884691");
var s = n("414456"),
  l = n.n(s),
  o = n("446674"),
  r = n("154889"),
  a = n("917247"),
  c = n("801388"),
  d = n("770469"),
  u = n("641078"),
  h = n("773367"),
  m = n("160299"),
  f = n("324929"),
  p = n("189405");

function S(e) {
  let t, {
      decoration: n,
      label: s,
      isSelected: S
    } = e,
    b = (0, a.usePremiumTrialOffer)(),
    g = (0, r.usePremiumDiscountOffer)(),
    v = (0, u.useIsEligibleForBogoPromotion)(),
    x = (0, o.useStateFromStores)([m.default], () => m.default.isLocalizedPromoEnabled),
    N = x && null == b && null == n;
  return t = v ? (0, i.jsx)(c.default, {}) : null != g ? (0, i.jsx)(h.PremiumDiscountOfferTabBadge, {
    isTabSelected: S,
    userDiscount: g,
    includesAmountOff: !1
  }) : null != b ? (0, i.jsx)(h.PremiumTrialOfferTabBadge, {
    isTabSelected: S,
    trialOffer: b
  }) : null != n ? n : N ? (0, i.jsx)(d.LocalizedPricingBadgeIcon, {
    entryPoint: d.BadgeEntryPoint.SettingsMenu
  }) : (0, i.jsx)(f.default, {
    isSelected: S
  }), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: l(p.premiumLabel, {
        [p.selected]: (S || N) && !v
      }),
      children: [s, t]
    }), (0, i.jsx)("div", {
      className: l(p.background, {
        [p.auPromo]: N && !S,
        [p.auPromoSelected]: N && S,
        [p.selectedBackground]: !N && !v && S
      })
    })]
  })
}