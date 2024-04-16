"use strict";
a.r(t), a.d(t, {
  NitroTabButton: function() {
    return x
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
  _ = a("104494"),
  C = a("639119"),
  m = a("655525"),
  S = a("314684"),
  I = a("52188"),
  p = a("248042"),
  T = a("924540"),
  g = a("649765"),
  A = a("565626"),
  N = a("701910"),
  v = a("886654"),
  R = a("487980"),
  O = a("921944"),
  L = a("689938"),
  M = a("392934");
let P = "NitroTabButton",
  x = e => {
    let t, a, {
        selected: x,
        route: y,
        locationState: D,
        ...b
      } = e,
      U = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUser()),
      j = (0, l.useStateFromStores)([c.default], () => c.default.getPremiumTypeSubscription()),
      G = (0, s.useListItem)("nitro"),
      w = (0, C.usePremiumTrialOffer)(),
      k = (0, _.usePremiumDiscountOffer)(),
      F = (0, l.useStateFromStores)([d.default], () => d.default.isLocalizedPromoEnabled) && null == w,
      H = (0, p.useIsEligibleForBogoPromotion)(),
      B = (0, A.default)(),
      V = (0, S.useTenureRewardBadgeDescription)(),
      Y = (0, h.useShouldShowNewOfferBadgeForAprilMarketingMoment)(P),
      W = (0, R.useIsEligibleSenderForReferralProgramTabBadge)(P);
    return x || null != w || null != k || H || Y || B || null != V || null != U && Date.now() - U.createdAt.getTime() > 2592e6 || (0, E.hasPremiumSubscriptionToDisplay)(U, j) ? (H ? a = (0, n.jsx)(m.default, {
      isNitroTab: !0
    }) : Y ? a = (0, n.jsx)(v.default, {
      copy: L.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_MODAL_TOP_PILL,
      isSelected: x,
      onSelect: () => (0, o.markDismissibleContentAsDismissed)(i.DismissibleContent.PREMIUM_2024_APRIL_MARKETING_BADGE, {
        dismissAction: O.ContentDismissActionType.TAKE_ACTION
      })
    }) : null != V ? a = (0, n.jsx)(N.default, {
      copy: V
    }) : B ? a = (0, n.jsx)(N.default, {}) : null != k ? a = (0, n.jsx)(T.PremiumDiscountOfferTabBadge, {
      userDiscount: k,
      isTabSelected: x,
      includesAmountOff: !1
    }) : null != w ? a = (0, n.jsx)(T.PremiumTrialOfferTabBadge, {
      trialOffer: w,
      isTabSelected: x
    }) : W ? a = (0, n.jsx)(g.default, {
      isSelected: x,
      onSelect: () => (0, o.markDismissibleContentAsDismissed)(i.DismissibleContent.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
        dismissAction: O.ContentDismissActionType.TAKE_ACTION
      })
    }) : F && (a = (0, n.jsx)(I.LocalizedPricingBadgeIcon, {
      entryPoint: I.BadgeEntryPoint.PrivateMessages
    }), !x && (t = M.localizeBadge)), (0, n.jsx)(r.LinkButton, {
      selected: x,
      route: y,
      icon: f.default,
      text: L.default.Messages.PREMIUM,
      locationState: D,
      ...b,
      ...G,
      className: t,
      children: a
    })) : null
  }