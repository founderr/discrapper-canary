"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
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
  m = n("655525"),
  h = n("52188"),
  p = n("248042"),
  f = n("924540"),
  b = n("649765"),
  S = n("886654"),
  g = n("487980"),
  T = n("351402"),
  x = n("170671"),
  v = n("921944"),
  N = n("689938"),
  C = n("556973");

function j(e) {
  let t, {
      decoration: n,
      label: s,
      isSelected: j
    } = e,
    E = (0, d.usePremiumTrialOffer)(),
    A = (0, u.usePremiumDiscountOffer)(),
    I = (0, p.useIsEligibleForBogoPromotion)(),
    P = (0, r.useStateFromStores)([T.default], () => T.default.isLocalizedPromoEnabled) && null == E && null == n,
    R = (0, c.useShouldShowNewOfferBadgeForAprilMarketingMoment)("UserSettingsPremiumLabel"),
    _ = (0, g.useIsEligibleSenderForReferralProgramTabBadge)("UserSettingsPremiumLabel");
  return t = I ? (0, i.jsx)(m.default, {}) : R ? (0, i.jsx)(S.default, {
    copy: N.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_MODAL_TOP_PILL,
    isSelected: j,
    onSelect: () => (0, a.markDismissibleContentAsDismissed)(o.DismissibleContent.PREMIUM_2024_APRIL_MARKETING_BADGE, {
      dismissAction: v.ContentDismissActionType.TAKE_ACTION
    })
  }) : null != A ? (0, i.jsx)(f.PremiumDiscountOfferTabBadge, {
    isTabSelected: j,
    userDiscount: A,
    includesAmountOff: !1
  }) : null != E ? (0, i.jsx)(f.PremiumTrialOfferTabBadge, {
    isTabSelected: j,
    trialOffer: E
  }) : null != n ? n : P ? (0, i.jsx)(h.LocalizedPricingBadgeIcon, {
    entryPoint: h.BadgeEntryPoint.SettingsMenu
  }) : _ ? (0, i.jsx)(b.default, {
    isSelected: j,
    onSelect: () => (0, a.markDismissibleContentAsDismissed)(o.DismissibleContent.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
      dismissAction: v.ContentDismissActionType.TAKE_ACTION
    })
  }) : (0, i.jsx)(x.default, {
    isSelected: j
  }), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: l()(C.premiumLabel, {
        [C.selected]: (j || P) && !I
      }),
      children: [s, t]
    }), (0, i.jsx)("div", {
      className: l()(C.background, {
        [C.auPromo]: P && !j,
        [C.auPromoSelected]: P && j,
        [C.selectedBackground]: !P && !I && j
      })
    })]
  })
}