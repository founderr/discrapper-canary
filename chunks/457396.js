"use strict";
n.r(t), n.d(t, {
  NitroTabButton: function() {
    return x
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
  p = n("248042"),
  T = n("924540"),
  g = n("649765"),
  A = n("565626"),
  N = n("701910"),
  v = n("886654"),
  R = n("487980"),
  O = n("921944"),
  L = n("689938"),
  M = n("392934");
let P = "NitroTabButton",
  x = e => {
    let t, n, {
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
    return x || null != w || null != k || H || Y || B || null != V || null != U && Date.now() - U.createdAt.getTime() > 2592e6 || (0, E.hasPremiumSubscriptionToDisplay)(U, j) ? (H ? n = (0, a.jsx)(m.default, {
      isNitroTab: !0
    }) : Y ? n = (0, a.jsx)(v.default, {
      copy: L.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_MODAL_TOP_PILL,
      isSelected: x,
      onSelect: () => (0, o.markDismissibleContentAsDismissed)(i.DismissibleContent.PREMIUM_2024_APRIL_MARKETING_BADGE, {
        dismissAction: O.ContentDismissActionType.TAKE_ACTION
      })
    }) : null != V ? n = (0, a.jsx)(N.default, {
      copy: V
    }) : B ? n = (0, a.jsx)(N.default, {}) : null != k ? n = (0, a.jsx)(T.PremiumDiscountOfferTabBadge, {
      userDiscount: k,
      isTabSelected: x,
      includesAmountOff: !1
    }) : null != w ? n = (0, a.jsx)(T.PremiumTrialOfferTabBadge, {
      trialOffer: w,
      isTabSelected: x
    }) : W ? n = (0, a.jsx)(g.default, {
      isSelected: x,
      onSelect: () => (0, o.markDismissibleContentAsDismissed)(i.DismissibleContent.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
        dismissAction: O.ContentDismissActionType.TAKE_ACTION
      })
    }) : F && (n = (0, a.jsx)(I.LocalizedPricingBadgeIcon, {
      entryPoint: I.BadgeEntryPoint.PrivateMessages
    }), !x && (t = M.localizeBadge)), (0, a.jsx)(r.LinkButton, {
      selected: x,
      route: y,
      icon: f.default,
      text: L.default.Messages.PREMIUM,
      locationState: D,
      ...b,
      ...G,
      className: t,
      children: n
    })) : null
  }