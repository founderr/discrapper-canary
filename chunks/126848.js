"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var i = n("735250");
n("470079");
var s = n("120356"),
  l = n.n(s),
  r = n("442837"),
  o = n("650032"),
  a = n("104494"),
  c = n("639119"),
  u = n("655525"),
  d = n("52188"),
  h = n("248042"),
  m = n("924540"),
  p = n("351402"),
  f = n("170671"),
  b = n("474936"),
  S = n("546298");

function g(e) {
  let t, {
      decoration: n,
      label: s,
      isSelected: g
    } = e,
    x = (0, c.usePremiumTrialOffer)(),
    v = (0, a.usePremiumDiscountOffer)(),
    T = (0, h.useIsEligibleForBogoPromotion)(),
    N = (0, r.useStateFromStores)([p.default], () => p.default.isLocalizedPromoEnabled) && null == x && null == n,
    {
      enabled: j
    } = o.ReferralProgramRecipient.useExperiment({
      location: "UserSettingsPremiumLabel"
    }, {
      autoTrackExposure: !1
    }),
    C = j && (null == x ? void 0 : x.trial_id) === b.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
  return t = T ? (0, i.jsx)(u.default, {}) : null != v ? (0, i.jsx)(m.PremiumDiscountOfferTabBadge, {
    isTabSelected: g,
    userDiscount: v,
    includesAmountOff: !1
  }) : null == x || C ? null != n ? n : N ? (0, i.jsx)(d.LocalizedPricingBadgeIcon, {
    entryPoint: d.BadgeEntryPoint.SettingsMenu
  }) : (0, i.jsx)(f.default, {
    isSelected: g
  }) : (0, i.jsx)(m.PremiumTrialOfferTabBadge, {
    isTabSelected: g,
    trialOffer: x
  }), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: l()(S.premiumLabel, {
        [S.selected]: (g || N) && !T
      }),
      children: [s, t]
    }), (0, i.jsx)("div", {
      className: l()(S.background, {
        [S.auPromo]: N && !g,
        [S.auPromoSelected]: N && g,
        [S.selectedBackground]: !N && !T && g
      })
    })]
  })
}