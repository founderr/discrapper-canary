"use strict";
n.r(t), n.d(t, {
  NitroTabButton: function() {
    return D
  }
});
var a = n("735250");
n("470079");
var s = n("924826"),
  l = n("442837"),
  i = n("524437"),
  r = n("515753"),
  o = n("605236"),
  u = n("594174"),
  d = n("351402"),
  c = n("78839"),
  f = n("466111"),
  E = n("74538"),
  h = n("328882"),
  _ = n("650032"),
  C = n("104494"),
  m = n("639119"),
  S = n("655525"),
  p = n("314684"),
  I = n("52188"),
  T = n("248042"),
  g = n("924540"),
  A = n("649765"),
  N = n("565626"),
  v = n("701910"),
  L = n("886654"),
  R = n("487980"),
  O = n("474936"),
  M = n("921944"),
  P = n("689938"),
  y = n("47848");
let x = "NitroTabButton",
  D = e => {
    let t, n, {
        selected: D,
        route: b,
        locationState: U,
        ...j
      } = e,
      G = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUser()),
      w = (0, l.useStateFromStores)([c.default], () => c.default.getPremiumTypeSubscription()),
      k = (0, s.useListItem)("nitro"),
      B = (0, m.usePremiumTrialOffer)(),
      F = (0, C.usePremiumDiscountOffer)(),
      H = (0, l.useStateFromStores)([d.default], () => d.default.isLocalizedPromoEnabled) && null == B,
      V = (0, T.useIsEligibleForBogoPromotion)(),
      Y = (0, N.default)(),
      W = (0, p.useTenureRewardBadgeDescription)(),
      K = (0, h.useShouldShowNewOfferBadgeForAprilMarketingMoment)(x),
      z = (0, R.useIsEligibleSenderForReferralProgramTabBadge)(x),
      q = D || null != B || null != F || V || K || Y || null != W || null != G && Date.now() - G.createdAt.getTime() > 2592e6 || (0, E.hasPremiumSubscriptionToDisplay)(G, w),
      {
        enabled: Q
      } = _.ReferralProgramRecipient.useExperiment({
        location: x
      }, {
        autoTrackExposure: !1
      }),
      Z = Q && (null == B ? void 0 : B.trial_id) === O.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    if (!q) return null;
    V ? n = (0, a.jsx)(S.default, {
      isNitroTab: !0
    }) : K ? n = (0, a.jsx)(L.default, {
      copy: P.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_MODAL_TOP_PILL,
      isSelected: D,
      onSelect: () => (0, o.markDismissibleContentAsDismissed)(i.DismissibleContent.PREMIUM_2024_APRIL_MARKETING_BADGE, {
        dismissAction: M.ContentDismissActionType.TAKE_ACTION
      })
    }) : null != W ? n = (0, a.jsx)(v.default, {
      copy: W
    }) : Y ? n = (0, a.jsx)(v.default, {}) : null != F ? n = (0, a.jsx)(g.PremiumDiscountOfferTabBadge, {
      userDiscount: F,
      isTabSelected: D,
      includesAmountOff: !1
    }) : null == B || Z ? z ? n = (0, a.jsx)(A.default, {
      isSelected: D,
      onSelect: () => (0, o.markDismissibleContentAsDismissed)(i.DismissibleContent.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
        dismissAction: M.ContentDismissActionType.TAKE_ACTION
      })
    }) : H && (n = (0, a.jsx)(I.LocalizedPricingBadgeIcon, {
      entryPoint: I.BadgeEntryPoint.PrivateMessages
    }), !D && (t = y.localizeBadge)) : n = (0, a.jsx)(g.PremiumTrialOfferTabBadge, {
      trialOffer: B,
      isTabSelected: D
    });
    let X = (0, a.jsx)(r.LinkButton, {
      selected: D,
      route: b,
      icon: f.default,
      text: P.default.Messages.PREMIUM,
      locationState: U,
      ...j,
      ...k,
      className: t,
      children: n
    });
    return z ? (0, a.jsx)(A.ReferralProgramCoachtipLinkButton, {
      children: X
    }) : X
  }