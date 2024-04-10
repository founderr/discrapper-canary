"use strict";
n.r(t), n.d(t, {
  NitroTabButton: function() {
    return A
  }
});
var a = n("735250");
n("470079");
var s = n("924826"),
  l = n("442837"),
  i = n("515753"),
  r = n("594174"),
  o = n("351402"),
  u = n("78839"),
  d = n("466111"),
  c = n("74538"),
  f = n("104494"),
  E = n("639119"),
  h = n("655525"),
  _ = n("314684"),
  C = n("52188"),
  m = n("248042"),
  S = n("924540"),
  I = n("565626"),
  p = n("701910"),
  T = n("689938"),
  g = n("392934");
let A = e => {
  let t, n, {
      selected: A,
      route: N,
      locationState: v,
      ...R
    } = e,
    O = (0, l.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
    L = (0, l.useStateFromStores)([u.default], () => u.default.getPremiumTypeSubscription()),
    M = (0, s.useListItem)("nitro"),
    P = (0, E.usePremiumTrialOffer)(),
    y = (0, f.usePremiumDiscountOffer)(),
    x = (0, l.useStateFromStores)([o.default], () => o.default.isLocalizedPromoEnabled) && null == P,
    D = (0, m.useIsEligibleForBogoPromotion)(),
    b = (0, I.default)(),
    U = (0, _.useTenureRewardBadgeDescription)();
  return A || null != P || null != y || D || b || null != U || null != O && Date.now() - O.createdAt.getTime() > 2592e6 || (0, c.hasPremiumSubscriptionToDisplay)(O, L) ? (D ? n = (0, a.jsx)(h.default, {
    isNitroTab: !0
  }) : null != U ? n = (0, a.jsx)(p.default, {
    copy: U
  }) : b ? n = (0, a.jsx)(p.default, {}) : null != y ? n = (0, a.jsx)(S.PremiumDiscountOfferTabBadge, {
    userDiscount: y,
    isTabSelected: A,
    includesAmountOff: !1
  }) : null != P ? n = (0, a.jsx)(S.PremiumTrialOfferTabBadge, {
    trialOffer: P,
    isTabSelected: A
  }) : x && (n = (0, a.jsx)(C.LocalizedPricingBadgeIcon, {
    entryPoint: C.BadgeEntryPoint.PrivateMessages
  }), !A && (t = g.localizeBadge)), (0, a.jsx)(i.LinkButton, {
    selected: A,
    route: N,
    icon: d.default,
    text: T.default.Messages.PREMIUM,
    locationState: v,
    ...R,
    ...M,
    className: t,
    children: n
  })) : null
}