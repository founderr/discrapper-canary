"use strict";
n.r(t), n.d(t, {
  NitroTabButton: function() {
    return w
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
  S = n("502087"),
  m = n("328882"),
  p = n("650032"),
  I = n("104494"),
  T = n("639119"),
  g = n("655525"),
  A = n("314684"),
  N = n("52188"),
  v = n("248042"),
  R = n("924540"),
  L = n("649765"),
  O = n("565626"),
  M = n("701910"),
  P = n("886654"),
  y = n("487980"),
  x = n("474936"),
  D = n("981631"),
  b = n("921944"),
  U = n("689938"),
  j = n("47848");
let G = "NitroTabButton";
(a = s || (s = {}))[a.BOGO_PROMOTION = 0] = "BOGO_PROMOTION", a[a.PREMIUM_APRIL_2024_MARKETING_MOMENT = 1] = "PREMIUM_APRIL_2024_MARKETING_MOMENT", a[a.TENURE_REWARD = 2] = "TENURE_REWARD", a[a.NEW_PERKS_BADGE = 3] = "NEW_PERKS_BADGE", a[a.DISCOUNT_OFFER = 4] = "DISCOUNT_OFFER", a[a.TRIAL_OFFER = 5] = "TRIAL_OFFER", a[a.LOCALIZED_PRICING = 6] = "LOCALIZED_PRICING", a[a.REFERRAL_PROGRAM = 7] = "REFERRAL_PROGRAM";
let w = e => {
  let t, n, a, {
      selected: s,
      route: w,
      locationState: k,
      ...F
    } = e,
    B = (0, r.useStateFromStores)([c.default], () => c.default.getCurrentUser()),
    H = (0, r.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()),
    V = (0, C.hasPremiumSubscriptionToDisplay)(B, H),
    Y = (0, i.useListItem)("nitro"),
    W = (0, T.usePremiumTrialOffer)(),
    K = (0, I.usePremiumDiscountOffer)(),
    z = (0, r.useStateFromStores)([f.default], () => f.default.isLocalizedPromoEnabled) && null == W,
    q = (0, v.useIsEligibleForBogoPromotion)(),
    Q = (0, O.default)(),
    Z = (0, A.useTenureRewardBadgeDescription)(),
    X = (0, m.useShouldShowNewOfferBadgeForAprilMarketingMoment)(G),
    J = (0, y.useIsEligibleSenderForReferralProgramTabBadge)(G),
    $ = (0, r.useStateFromStores)([S.default], () => S.default.getCreatedAtOverride()),
    ee = null != $ ? $ : null == B ? void 0 : B.createdAt,
    et = s || null != W || null != K || q || X || Q || null != Z || null != B && null != ee && Date.now() - ee.getTime() > 2592e6 || V,
    {
      enabled: en
    } = p.ReferralProgramRecipient.useExperiment({
      location: G
    }, {
      autoTrackExposure: !1
    }),
    ea = en && (null == W ? void 0 : W.trial_id) === x.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
  if (!et) return null;
  q ? (n = (0, l.jsx)(g.default, {
    isNitroTab: !0
  }), a = 0) : X ? (n = (0, l.jsx)(P.default, {
    copy: U.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_MODAL_TOP_PILL,
    isSelected: s,
    onSelect: () => (0, d.markDismissibleContentAsDismissed)(o.DismissibleContent.PREMIUM_2024_APRIL_MARKETING_BADGE, {
      dismissAction: b.ContentDismissActionType.TAKE_ACTION
    })
  }), a = 1) : null != Z ? (n = (0, l.jsx)(M.default, {
    copy: Z
  }), a = 2) : Q ? (n = (0, l.jsx)(M.default, {}), a = 3) : null != K ? (n = (0, l.jsx)(R.PremiumDiscountOfferTabBadge, {
    userDiscount: K,
    isTabSelected: s,
    includesAmountOff: !1
  }), a = 4) : null == W || ea ? J ? (n = (0, l.jsx)(L.default, {
    isSelected: s,
    onSelect: () => (0, d.markDismissibleContentAsDismissed)(o.DismissibleContent.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
      dismissAction: b.ContentDismissActionType.TAKE_ACTION
    })
  }), a = 7) : z && (n = (0, l.jsx)(N.LocalizedPricingBadgeIcon, {
    entryPoint: N.BadgeEntryPoint.PrivateMessages
  }), !s && (t = j.localizeBadge), a = 6) : (n = (0, l.jsx)(R.PremiumTrialOfferTabBadge, {
    trialOffer: W,
    isTabSelected: s
  }), a = 5);
  let es = (0, l.jsx)(u.LinkButton, {
    selected: s,
    route: w,
    icon: h.default,
    text: U.default.Messages.PREMIUM,
    locationState: k,
    onClick: () => {
      _.default.track(D.AnalyticEvents.NITRO_TAB_VISITED, {
        badge_decorator: a,
        has_premium: V
      })
    },
    ...F,
    ...Y,
    className: t,
    children: n
  });
  return J ? (0, l.jsx)(L.ReferralProgramCoachtipLinkButton, {
    children: es
  }) : es
}