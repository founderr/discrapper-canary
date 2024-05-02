"use strict";
n.r(t), n.d(t, {
  NitroTabButton: function() {
    return G
  }
});
var a, s, l = n("735250");
n("470079");
var i = n("924826"),
  r = n("442837"),
  o = n("524437"),
  u = n("515753"),
  d = n("605236"),
  c = n("594174"),
  f = n("351402"),
  E = n("78839"),
  h = n("466111"),
  _ = n("626135"),
  C = n("74538"),
  m = n("328882"),
  S = n("650032"),
  p = n("104494"),
  I = n("639119"),
  T = n("655525"),
  g = n("314684"),
  A = n("52188"),
  N = n("248042"),
  v = n("924540"),
  R = n("649765"),
  L = n("565626"),
  O = n("701910"),
  M = n("886654"),
  P = n("487980"),
  x = n("474936"),
  y = n("981631"),
  D = n("921944"),
  b = n("689938"),
  U = n("47848");
let j = "NitroTabButton";
(a = s || (s = {}))[a.BOGO_PROMOTION = 0] = "BOGO_PROMOTION", a[a.PREMIUM_APRIL_2024_MARKETING_MOMENT = 1] = "PREMIUM_APRIL_2024_MARKETING_MOMENT", a[a.TENURE_REWARD = 2] = "TENURE_REWARD", a[a.NEW_PERKS_BADGE = 3] = "NEW_PERKS_BADGE", a[a.DISCOUNT_OFFER = 4] = "DISCOUNT_OFFER", a[a.TRIAL_OFFER = 5] = "TRIAL_OFFER", a[a.LOCALIZED_PRICING = 6] = "LOCALIZED_PRICING", a[a.REFERRAL_PROGRAM = 7] = "REFERRAL_PROGRAM";
let G = e => {
  let t, n, a, {
      selected: s,
      route: G,
      locationState: w,
      ...k
    } = e,
    B = (0, r.useStateFromStores)([c.default], () => c.default.getCurrentUser()),
    F = (0, r.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()),
    H = (0, C.hasPremiumSubscriptionToDisplay)(B, F),
    V = (0, i.useListItem)("nitro"),
    Y = (0, I.usePremiumTrialOffer)(),
    W = (0, p.usePremiumDiscountOffer)(),
    K = (0, r.useStateFromStores)([f.default], () => f.default.isLocalizedPromoEnabled) && null == Y,
    z = (0, N.useIsEligibleForBogoPromotion)(),
    q = (0, L.default)(),
    Q = (0, g.useTenureRewardBadgeDescription)(),
    Z = (0, m.useShouldShowNewOfferBadgeForAprilMarketingMoment)(j),
    X = (0, P.useIsEligibleSenderForReferralProgramTabBadge)(j),
    J = s || null != Y || null != W || z || Z || q || null != Q || null != B && Date.now() - B.createdAt.getTime() > 2592e6 || H,
    {
      enabled: $
    } = S.ReferralProgramRecipient.useExperiment({
      location: j
    }, {
      autoTrackExposure: !1
    }),
    ee = $ && (null == Y ? void 0 : Y.trial_id) === x.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
  if (!J) return null;
  z ? (n = (0, l.jsx)(T.default, {
    isNitroTab: !0
  }), a = 0) : Z ? (n = (0, l.jsx)(M.default, {
    copy: b.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_MODAL_TOP_PILL,
    isSelected: s,
    onSelect: () => (0, d.markDismissibleContentAsDismissed)(o.DismissibleContent.PREMIUM_2024_APRIL_MARKETING_BADGE, {
      dismissAction: D.ContentDismissActionType.TAKE_ACTION
    })
  }), a = 1) : null != Q ? (n = (0, l.jsx)(O.default, {
    copy: Q
  }), a = 2) : q ? (n = (0, l.jsx)(O.default, {}), a = 3) : null != W ? (n = (0, l.jsx)(v.PremiumDiscountOfferTabBadge, {
    userDiscount: W,
    isTabSelected: s,
    includesAmountOff: !1
  }), a = 4) : null == Y || ee ? X ? (n = (0, l.jsx)(R.default, {
    isSelected: s,
    onSelect: () => (0, d.markDismissibleContentAsDismissed)(o.DismissibleContent.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
      dismissAction: D.ContentDismissActionType.TAKE_ACTION
    })
  }), a = 7) : K && (n = (0, l.jsx)(A.LocalizedPricingBadgeIcon, {
    entryPoint: A.BadgeEntryPoint.PrivateMessages
  }), !s && (t = U.localizeBadge), a = 6) : (n = (0, l.jsx)(v.PremiumTrialOfferTabBadge, {
    trialOffer: Y,
    isTabSelected: s
  }), a = 5);
  let et = (0, l.jsx)(u.LinkButton, {
    selected: s,
    route: G,
    icon: h.default,
    text: b.default.Messages.PREMIUM,
    locationState: w,
    onClick: () => {
      _.default.track(y.AnalyticEvents.NITRO_TAB_VISITED, {
        badge_decorator: a,
        has_premium: H
      })
    },
    ...k,
    ...V,
    className: t,
    children: n
  });
  return X ? (0, l.jsx)(R.ReferralProgramCoachtipLinkButton, {
    children: et
  }) : et
}