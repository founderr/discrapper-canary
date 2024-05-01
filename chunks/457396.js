"use strict";
a.r(t), a.d(t, {
  NitroTabButton: function() {
    return G
  }
});
var n, s, l = a("735250");
a("470079");
var i = a("924826"),
  r = a("442837"),
  o = a("524437"),
  u = a("515753"),
  d = a("605236"),
  c = a("594174"),
  f = a("351402"),
  E = a("78839"),
  h = a("466111"),
  _ = a("626135"),
  C = a("74538"),
  m = a("328882"),
  S = a("650032"),
  p = a("104494"),
  I = a("639119"),
  g = a("655525"),
  T = a("314684"),
  A = a("52188"),
  N = a("248042"),
  v = a("924540"),
  R = a("649765"),
  L = a("565626"),
  O = a("701910"),
  M = a("886654"),
  P = a("487980"),
  x = a("474936"),
  y = a("981631"),
  D = a("921944"),
  b = a("689938"),
  U = a("47848");
let j = "NitroTabButton";
(n = s || (s = {}))[n.BOGO_PROMOTION = 0] = "BOGO_PROMOTION", n[n.PREMIUM_APRIL_2024_MARKETING_MOMENT = 1] = "PREMIUM_APRIL_2024_MARKETING_MOMENT", n[n.TENURE_REWARD = 2] = "TENURE_REWARD", n[n.NEW_PERKS_BADGE = 3] = "NEW_PERKS_BADGE", n[n.DISCOUNT_OFFER = 4] = "DISCOUNT_OFFER", n[n.TRIAL_OFFER = 5] = "TRIAL_OFFER", n[n.LOCALIZED_PRICING = 6] = "LOCALIZED_PRICING", n[n.REFERRAL_PROGRAM = 7] = "REFERRAL_PROGRAM";
let G = e => {
  let t, a, n, {
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
    Q = (0, T.useTenureRewardBadgeDescription)(),
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
  z ? (a = (0, l.jsx)(g.default, {
    isNitroTab: !0
  }), n = 0) : Z ? (a = (0, l.jsx)(M.default, {
    copy: b.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_MODAL_TOP_PILL,
    isSelected: s,
    onSelect: () => (0, d.markDismissibleContentAsDismissed)(o.DismissibleContent.PREMIUM_2024_APRIL_MARKETING_BADGE, {
      dismissAction: D.ContentDismissActionType.TAKE_ACTION
    })
  }), n = 1) : null != Q ? (a = (0, l.jsx)(O.default, {
    copy: Q
  }), n = 2) : q ? (a = (0, l.jsx)(O.default, {}), n = 3) : null != W ? (a = (0, l.jsx)(v.PremiumDiscountOfferTabBadge, {
    userDiscount: W,
    isTabSelected: s,
    includesAmountOff: !1
  }), n = 4) : null == Y || ee ? X ? (a = (0, l.jsx)(R.default, {
    isSelected: s,
    onSelect: () => (0, d.markDismissibleContentAsDismissed)(o.DismissibleContent.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
      dismissAction: D.ContentDismissActionType.TAKE_ACTION
    })
  }), n = 7) : K && (a = (0, l.jsx)(A.LocalizedPricingBadgeIcon, {
    entryPoint: A.BadgeEntryPoint.PrivateMessages
  }), !s && (t = U.localizeBadge), n = 6) : (a = (0, l.jsx)(v.PremiumTrialOfferTabBadge, {
    trialOffer: Y,
    isTabSelected: s
  }), n = 5);
  let et = (0, l.jsx)(u.LinkButton, {
    selected: s,
    route: G,
    icon: h.default,
    text: b.default.Messages.PREMIUM,
    locationState: w,
    onClick: () => {
      _.default.track(y.AnalyticEvents.NITRO_TAB_VISITED, {
        badge_decorator: n,
        has_premium: H
      })
    },
    ...k,
    ...V,
    className: t,
    children: a
  });
  return X ? (0, l.jsx)(R.ReferralProgramCoachtipLinkButton, {
    children: et
  }) : et
}