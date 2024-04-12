"use strict";
n.r(t), n.d(t, {
  NitroTabButton: function() {
    return L
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
  _ = n("104494"),
  C = n("639119"),
  m = n("655525"),
  S = n("314684"),
  I = n("52188"),
  T = n("248042"),
  p = n("924540"),
  g = n("565626"),
  A = n("701910"),
  N = n("886654"),
  R = n("921944"),
  v = n("689938"),
  O = n("392934");
let L = e => {
  let t, n, {
      selected: L,
      route: M,
      locationState: P,
      ...y
    } = e,
    x = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUser()),
    D = (0, l.useStateFromStores)([c.default], () => c.default.getPremiumTypeSubscription()),
    b = (0, s.useListItem)("nitro"),
    U = (0, C.usePremiumTrialOffer)(),
    j = (0, _.usePremiumDiscountOffer)(),
    G = (0, l.useStateFromStores)([d.default], () => d.default.isLocalizedPromoEnabled) && null == U,
    w = (0, T.useIsEligibleForBogoPromotion)(),
    k = (0, g.default)(),
    F = (0, S.useTenureRewardBadgeDescription)(),
    H = (0, h.useShouldShowNewOfferBadgeForAprilMarketingMoment)("NitroTabButton");
  return L || null != U || null != j || w || H || k || null != F || null != x && Date.now() - x.createdAt.getTime() > 2592e6 || (0, E.hasPremiumSubscriptionToDisplay)(x, D) ? (w ? n = (0, a.jsx)(m.default, {
    isNitroTab: !0
  }) : H ? n = (0, a.jsx)(N.default, {
    copy: v.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_MODAL_TOP_PILL,
    isSelected: L,
    onSelect: () => (0, o.markDismissibleContentAsDismissed)(i.DismissibleContent.PREMIUM_2024_APRIL_MARKETING_BADGE, {
      dismissAction: R.ContentDismissActionType.TAKE_ACTION
    })
  }) : null != F ? n = (0, a.jsx)(A.default, {
    copy: F
  }) : k ? n = (0, a.jsx)(A.default, {}) : null != j ? n = (0, a.jsx)(p.PremiumDiscountOfferTabBadge, {
    userDiscount: j,
    isTabSelected: L,
    includesAmountOff: !1
  }) : null != U ? n = (0, a.jsx)(p.PremiumTrialOfferTabBadge, {
    trialOffer: U,
    isTabSelected: L
  }) : G && (n = (0, a.jsx)(I.LocalizedPricingBadgeIcon, {
    entryPoint: I.BadgeEntryPoint.PrivateMessages
  }), !L && (t = O.localizeBadge)), (0, a.jsx)(r.LinkButton, {
    selected: L,
    route: M,
    icon: f.default,
    text: v.default.Messages.PREMIUM,
    locationState: P,
    ...y,
    ...b,
    className: t,
    children: n
  })) : null
}