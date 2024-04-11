"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var i = n("735250");
n("470079");
var s = n("803997"),
  l = n.n(s),
  r = n("442837"),
  o = n("524437"),
  a = n("605236"),
  c = n("328882"),
  u = n("104494"),
  d = n("639119"),
  h = n("655525"),
  m = n("52188"),
  p = n("248042"),
  f = n("924540"),
  S = n("886654"),
  b = n("351402"),
  g = n("170671"),
  T = n("921944"),
  v = n("689938"),
  x = n("556973");

function N(e) {
  let t, {
      decoration: n,
      label: s,
      isSelected: N
    } = e,
    j = (0, d.usePremiumTrialOffer)(),
    C = (0, u.usePremiumDiscountOffer)(),
    E = (0, p.useIsEligibleForBogoPromotion)(),
    I = (0, r.useStateFromStores)([b.default], () => b.default.isLocalizedPromoEnabled) && null == j && null == n,
    P = (0, c.useShouldShowNewOfferBadgeForAprilMarketingMoment)("UserSettingsPremiumLabel");
  return t = E ? (0, i.jsx)(h.default, {}) : P ? (0, i.jsx)(S.default, {
    copy: v.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_MODAL_TOP_PILL,
    isSelected: N,
    onSelect: () => (0, a.markDismissibleContentAsDismissed)(o.DismissibleContent.PREMIUM_2024_APRIL_MARKETING_BADGE, {
      dismissAction: T.ContentDismissActionType.TAKE_ACTION
    })
  }) : null != C ? (0, i.jsx)(f.PremiumDiscountOfferTabBadge, {
    isTabSelected: N,
    userDiscount: C,
    includesAmountOff: !1
  }) : null != j ? (0, i.jsx)(f.PremiumTrialOfferTabBadge, {
    isTabSelected: N,
    trialOffer: j
  }) : null != n ? n : I ? (0, i.jsx)(m.LocalizedPricingBadgeIcon, {
    entryPoint: m.BadgeEntryPoint.SettingsMenu
  }) : (0, i.jsx)(g.default, {
    isSelected: N
  }), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: l()(x.premiumLabel, {
        [x.selected]: (N || I) && !E
      }),
      children: [s, t]
    }), (0, i.jsx)("div", {
      className: l()(x.background, {
        [x.auPromo]: I && !N,
        [x.auPromoSelected]: I && N,
        [x.selectedBackground]: !I && !E && N
      })
    })]
  })
}