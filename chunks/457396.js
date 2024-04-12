"use strict";
a.r(t), a.d(t, {
  NitroTabButton: function() {
    return L
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
  p = a("52188"),
  I = a("248042"),
  T = a("924540"),
  g = a("565626"),
  A = a("701910"),
  N = a("886654"),
  v = a("921944"),
  R = a("689938"),
  O = a("392934");
let L = e => {
  let t, a, {
      selected: L,
      route: M,
      locationState: P,
      ...x
    } = e,
    y = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUser()),
    D = (0, l.useStateFromStores)([c.default], () => c.default.getPremiumTypeSubscription()),
    b = (0, s.useListItem)("nitro"),
    U = (0, C.usePremiumTrialOffer)(),
    j = (0, _.usePremiumDiscountOffer)(),
    G = (0, l.useStateFromStores)([d.default], () => d.default.isLocalizedPromoEnabled) && null == U,
    w = (0, I.useIsEligibleForBogoPromotion)(),
    k = (0, g.default)(),
    F = (0, S.useTenureRewardBadgeDescription)(),
    H = (0, h.useShouldShowNewOfferBadgeForAprilMarketingMoment)("NitroTabButton");
  return L || null != U || null != j || w || H || k || null != F || null != y && Date.now() - y.createdAt.getTime() > 2592e6 || (0, E.hasPremiumSubscriptionToDisplay)(y, D) ? (w ? a = (0, n.jsx)(m.default, {
    isNitroTab: !0
  }) : H ? a = (0, n.jsx)(N.default, {
    copy: R.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_MODAL_TOP_PILL,
    isSelected: L,
    onSelect: () => (0, o.markDismissibleContentAsDismissed)(i.DismissibleContent.PREMIUM_2024_APRIL_MARKETING_BADGE, {
      dismissAction: v.ContentDismissActionType.TAKE_ACTION
    })
  }) : null != F ? a = (0, n.jsx)(A.default, {
    copy: F
  }) : k ? a = (0, n.jsx)(A.default, {}) : null != j ? a = (0, n.jsx)(T.PremiumDiscountOfferTabBadge, {
    userDiscount: j,
    isTabSelected: L,
    includesAmountOff: !1
  }) : null != U ? a = (0, n.jsx)(T.PremiumTrialOfferTabBadge, {
    trialOffer: U,
    isTabSelected: L
  }) : G && (a = (0, n.jsx)(p.LocalizedPricingBadgeIcon, {
    entryPoint: p.BadgeEntryPoint.PrivateMessages
  }), !L && (t = O.localizeBadge)), (0, n.jsx)(r.LinkButton, {
    selected: L,
    route: M,
    icon: f.default,
    text: R.default.Messages.PREMIUM,
    locationState: P,
    ...x,
    ...b,
    className: t,
    children: a
  })) : null
}