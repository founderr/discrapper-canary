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
  C = n("466111"),
  h = n("626135"),
  _ = n("74538"),
  S = n("502087"),
  m = n("647265"),
  p = n("650032"),
  I = n("104494"),
  g = n("639119"),
  T = n("655525"),
  A = n("314684"),
  N = n("52188"),
  v = n("248042"),
  R = n("924540"),
  O = n("649765"),
  L = n("565626"),
  P = n("734741"),
  y = n("701910"),
  M = n("487980"),
  D = n("474936"),
  x = n("981631"),
  b = n("921944"),
  U = n("689938"),
  j = n("985252");
let G = "NitroTabButton";
(a = s || (s = {}))[a.BOGO_PROMOTION = 0] = "BOGO_PROMOTION", a[a.TENURE_REWARD = 1] = "TENURE_REWARD", a[a.NEW_PERKS_BADGE = 2] = "NEW_PERKS_BADGE", a[a.DISCOUNT_OFFER = 3] = "DISCOUNT_OFFER", a[a.TRIAL_OFFER = 4] = "TRIAL_OFFER", a[a.LOCALIZED_PRICING = 5] = "LOCALIZED_PRICING", a[a.REFERRAL_PROGRAM = 6] = "REFERRAL_PROGRAM";
let w = e => {
  let t, n, a, {
      selected: s,
      route: w,
      locationState: k,
      ...B
    } = e,
    F = (0, r.useStateFromStores)([c.default], () => c.default.getCurrentUser()),
    H = (0, r.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()),
    V = (0, _.hasPremiumSubscriptionToDisplay)(F, H),
    Y = (0, i.useListItem)("nitro"),
    W = (0, g.usePremiumTrialOffer)(),
    K = (0, I.usePremiumDiscountOffer)(),
    z = (0, r.useStateFromStores)([f.default], () => f.default.isLocalizedPromoEnabled) && null == W,
    q = (0, v.useIsEligibleForBogoPromotion)(),
    Q = (0, L.default)(),
    Z = (0, P.useShouldShowWhatsNewBadge)(),
    X = (0, A.useTenureRewardBadgeDescription)(),
    J = (0, M.useIsEligibleSenderForReferralProgramTabBadge)(G),
    $ = (0, r.useStateFromStores)([S.default], () => S.default.getCreatedAtOverride()),
    ee = null != $ ? $ : null == F ? void 0 : F.createdAt,
    et = s || null != W || null != K || q || Q || Z || null != X || V,
    {
      enabled: en
    } = p.ReferralProgramRecipient.useExperiment({
      location: G
    }, {
      autoTrackExposure: !1
    }),
    ea = en && (null == W ? void 0 : W.trial_id) === D.PREMIUM_TIER_2_REFERRAL_TRIAL_ID,
    es = (0, m.usePremiumMarketingTabDisplayTimingExperiment)({
      location: "NitroTabButton",
      showTabForOtherReasons: et
    });
  if (!(et = et || null != F && null != ee && Date.now() - ee.getTime() > es)) return null;
  Z ? (n = (0, l.jsx)(y.PerksDiscoverabilityMarketingMomentWhatsNewBadge, {}), a = 2) : q ? (n = (0, l.jsx)(T.default, {
    isNitroTab: !0
  }), a = 0) : null != X ? (n = (0, l.jsx)(y.default, {
    copy: X
  }), a = 1) : Q ? (n = (0, l.jsx)(y.default, {}), a = 2) : null != K ? (n = (0, l.jsx)(R.PremiumDiscountOfferTabBadge, {
    userDiscount: K,
    isTabSelected: s,
    includesAmountOff: !1
  }), a = 3) : null == W || ea ? J ? (n = (0, l.jsx)(O.default, {
    isSelected: s,
    onSelect: () => (0, d.markDismissibleContentAsDismissed)(o.DismissibleContent.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
      dismissAction: b.ContentDismissActionType.TAKE_ACTION
    })
  }), a = 6) : z && (n = (0, l.jsx)(N.LocalizedPricingBadgeIcon, {
    entryPoint: N.BadgeEntryPoint.PrivateMessages
  }), !s && (t = j.localizeBadge), a = 5) : (n = (0, l.jsx)(R.PremiumTrialOfferTabBadge, {
    trialOffer: W,
    isTabSelected: s
  }), a = 4);
  let el = (0, l.jsx)(u.LinkButton, {
    selected: s,
    route: w,
    icon: C.default,
    text: U.default.Messages.PREMIUM,
    locationState: k,
    onClick: () => {
      h.default.track(x.AnalyticEvents.NITRO_TAB_VISITED, {
        badge_decorator: a,
        has_premium: V
      })
    },
    ...B,
    ...Y,
    className: t,
    children: n
  });
  return J ? (0, l.jsx)(O.ReferralProgramCoachtipLinkButton, {
    children: el
  }) : el
}