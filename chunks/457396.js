"use strict";
a.r(t), a.d(t, {
  NitroTabButton: function() {
    return P
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
let P = e => {
  let t, a, {
      selected: P,
      route: x,
      locationState: y,
      ...D
    } = e,
    b = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUser()),
    U = (0, l.useStateFromStores)([c.default], () => c.default.getPremiumTypeSubscription()),
    j = (0, s.useListItem)("nitro"),
    G = (0, C.usePremiumTrialOffer)(),
    w = (0, _.usePremiumDiscountOffer)(),
    k = (0, l.useStateFromStores)([d.default], () => d.default.isLocalizedPromoEnabled) && null == G,
    F = (0, p.useIsEligibleForBogoPromotion)(),
    H = (0, A.default)(),
    B = (0, S.useTenureRewardBadgeDescription)(),
    V = (0, h.useShouldShowNewOfferBadgeForAprilMarketingMoment)("NitroTabButton"),
    Y = (0, R.useIsEligibleSenderForReferralProgramTabBadge)("NitroTabButton");
  return P || null != G || null != w || F || V || H || null != B || null != b && Date.now() - b.createdAt.getTime() > 2592e6 || (0, E.hasPremiumSubscriptionToDisplay)(b, U) ? (F ? a = (0, n.jsx)(m.default, {
    isNitroTab: !0
  }) : V ? a = (0, n.jsx)(v.default, {
    copy: L.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_MODAL_TOP_PILL,
    isSelected: P,
    onSelect: () => (0, o.markDismissibleContentAsDismissed)(i.DismissibleContent.PREMIUM_2024_APRIL_MARKETING_BADGE, {
      dismissAction: O.ContentDismissActionType.TAKE_ACTION
    })
  }) : null != B ? a = (0, n.jsx)(N.default, {
    copy: B
  }) : H ? a = (0, n.jsx)(N.default, {}) : null != w ? a = (0, n.jsx)(T.PremiumDiscountOfferTabBadge, {
    userDiscount: w,
    isTabSelected: P,
    includesAmountOff: !1
  }) : null != G ? a = (0, n.jsx)(T.PremiumTrialOfferTabBadge, {
    trialOffer: G,
    isTabSelected: P
  }) : Y ? a = (0, n.jsx)(g.default, {
    isSelected: P,
    onSelect: () => (0, o.markDismissibleContentAsDismissed)(i.DismissibleContent.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
      dismissAction: O.ContentDismissActionType.TAKE_ACTION
    })
  }) : k && (a = (0, n.jsx)(I.LocalizedPricingBadgeIcon, {
    entryPoint: I.BadgeEntryPoint.PrivateMessages
  }), !P && (t = M.localizeBadge)), (0, n.jsx)(r.LinkButton, {
    selected: P,
    route: x,
    icon: f.default,
    text: L.default.Messages.PREMIUM,
    locationState: y,
    ...D,
    ...j,
    className: t,
    children: a
  })) : null
}