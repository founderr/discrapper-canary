"use strict";
a.r(t), a.d(t, {
  NitroTabButton: function() {
    return D
  }
});
var n = a("735250");
a("470079");
var s = a("924826"),
  l = a("442837"),
  i = a("524437"),
  r = a("515753"),
  o = a("605236"),
  u = a("594174"),
  d = a("351402"),
  c = a("78839"),
  f = a("466111"),
  E = a("74538"),
  h = a("328882"),
  _ = a("650032"),
  C = a("104494"),
  m = a("639119"),
  S = a("655525"),
  I = a("314684"),
  p = a("52188"),
  T = a("248042"),
  g = a("924540"),
  A = a("649765"),
  N = a("565626"),
  v = a("701910"),
  R = a("886654"),
  O = a("487980"),
  L = a("474936"),
  M = a("921944"),
  P = a("689938"),
  x = a("392934");
let y = "NitroTabButton",
  D = e => {
    let t, a, {
        selected: D,
        route: b,
        locationState: U,
        ...j
      } = e,
      G = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUser()),
      w = (0, l.useStateFromStores)([c.default], () => c.default.getPremiumTypeSubscription()),
      k = (0, s.useListItem)("nitro"),
      F = (0, m.usePremiumTrialOffer)(),
      B = (0, C.usePremiumDiscountOffer)(),
      H = (0, l.useStateFromStores)([d.default], () => d.default.isLocalizedPromoEnabled) && null == F,
      V = (0, T.useIsEligibleForBogoPromotion)(),
      Y = (0, N.default)(),
      W = (0, I.useTenureRewardBadgeDescription)(),
      K = (0, h.useShouldShowNewOfferBadgeForAprilMarketingMoment)(y),
      z = (0, O.useIsEligibleSenderForReferralProgramTabBadge)(y),
      q = D || null != F || null != B || V || K || Y || null != W || null != G && Date.now() - G.createdAt.getTime() > 2592e6 || (0, E.hasPremiumSubscriptionToDisplay)(G, w),
      {
        enabled: Q
      } = _.ReferralProgramRecipient.useExperiment({
        location: y
      }, {
        autoTrackExposure: !1
      }),
      Z = Q && (null == F ? void 0 : F.trial_id) === L.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    return q ? (V ? a = (0, n.jsx)(S.default, {
      isNitroTab: !0
    }) : K ? a = (0, n.jsx)(R.default, {
      copy: P.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_MODAL_TOP_PILL,
      isSelected: D,
      onSelect: () => (0, o.markDismissibleContentAsDismissed)(i.DismissibleContent.PREMIUM_2024_APRIL_MARKETING_BADGE, {
        dismissAction: M.ContentDismissActionType.TAKE_ACTION
      })
    }) : null != W ? a = (0, n.jsx)(v.default, {
      copy: W
    }) : Y ? a = (0, n.jsx)(v.default, {}) : null != B ? a = (0, n.jsx)(g.PremiumDiscountOfferTabBadge, {
      userDiscount: B,
      isTabSelected: D,
      includesAmountOff: !1
    }) : null == F || Z ? z ? a = (0, n.jsx)(A.default, {
      isSelected: D,
      onSelect: () => (0, o.markDismissibleContentAsDismissed)(i.DismissibleContent.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
        dismissAction: M.ContentDismissActionType.TAKE_ACTION
      })
    }) : H && (a = (0, n.jsx)(p.LocalizedPricingBadgeIcon, {
      entryPoint: p.BadgeEntryPoint.PrivateMessages
    }), !D && (t = x.localizeBadge)) : a = (0, n.jsx)(g.PremiumTrialOfferTabBadge, {
      trialOffer: F,
      isTabSelected: D
    }), (0, n.jsx)(r.LinkButton, {
      selected: D,
      route: b,
      icon: f.default,
      text: P.default.Messages.PREMIUM,
      locationState: U,
      ...j,
      ...k,
      className: t,
      children: a
    })) : null
  }