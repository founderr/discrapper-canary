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
  m = n("502087"),
  S = n("647265"),
  p = n("650032"),
  I = n("104494"),
  g = n("639119"),
  T = n("655525"),
  A = n("314684"),
  N = n("52188"),
  v = n("248042"),
  R = n("924540"),
  L = n("649765"),
  O = n("565626"),
  M = n("701910"),
  y = n("487980"),
  P = n("474936"),
  x = n("981631"),
  D = n("921944"),
  b = n("689938"),
  U = n("985252");
let j = "NitroTabButton";
(a = s || (s = {}))[a.BOGO_PROMOTION = 0] = "BOGO_PROMOTION", a[a.TENURE_REWARD = 1] = "TENURE_REWARD", a[a.NEW_PERKS_BADGE = 2] = "NEW_PERKS_BADGE", a[a.DISCOUNT_OFFER = 3] = "DISCOUNT_OFFER", a[a.TRIAL_OFFER = 4] = "TRIAL_OFFER", a[a.LOCALIZED_PRICING = 5] = "LOCALIZED_PRICING", a[a.REFERRAL_PROGRAM = 6] = "REFERRAL_PROGRAM";
let G = e => {
  let t, n, a, {
      selected: s,
      route: G,
      locationState: k,
      ...w
    } = e,
    F = (0, r.useStateFromStores)([c.default], () => c.default.getCurrentUser()),
    B = (0, r.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()),
    H = (0, C.hasPremiumSubscriptionToDisplay)(F, B),
    V = (0, i.useListItem)("nitro"),
    Y = (0, g.usePremiumTrialOffer)(),
    W = (0, I.usePremiumDiscountOffer)(),
    K = (0, r.useStateFromStores)([f.default], () => f.default.isLocalizedPromoEnabled) && null == Y,
    z = (0, v.useIsEligibleForBogoPromotion)(),
    q = (0, O.default)(),
    Q = (0, A.useTenureRewardBadgeDescription)(),
    Z = (0, y.useIsEligibleSenderForReferralProgramTabBadge)(j),
    X = (0, r.useStateFromStores)([m.default], () => m.default.getCreatedAtOverride()),
    J = null != X ? X : null == F ? void 0 : F.createdAt,
    $ = s || null != Y || null != W || z || q || null != Q || H,
    {
      enabled: ee
    } = p.ReferralProgramRecipient.useExperiment({
      location: j
    }, {
      autoTrackExposure: !1
    }),
    et = ee && (null == Y ? void 0 : Y.trial_id) === P.PREMIUM_TIER_2_REFERRAL_TRIAL_ID,
    en = (0, S.usePremiumMarketingTabDisplayTimingExperiment)({
      location: "NitroTabButton",
      showTabForOtherReasons: $
    });
  if (!($ = $ || null != F && null != J && Date.now() - J.getTime() > en)) return null;
  z ? (n = (0, l.jsx)(T.default, {
    isNitroTab: !0
  }), a = 0) : null != Q ? (n = (0, l.jsx)(M.default, {
    copy: Q
  }), a = 1) : q ? (n = (0, l.jsx)(M.default, {}), a = 2) : null != W ? (n = (0, l.jsx)(R.PremiumDiscountOfferTabBadge, {
    userDiscount: W,
    isTabSelected: s,
    includesAmountOff: !1
  }), a = 3) : null == Y || et ? Z ? (n = (0, l.jsx)(L.default, {
    isSelected: s,
    onSelect: () => (0, d.markDismissibleContentAsDismissed)(o.DismissibleContent.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
      dismissAction: D.ContentDismissActionType.TAKE_ACTION
    })
  }), a = 6) : K && (n = (0, l.jsx)(N.LocalizedPricingBadgeIcon, {
    entryPoint: N.BadgeEntryPoint.PrivateMessages
  }), !s && (t = U.localizeBadge), a = 5) : (n = (0, l.jsx)(R.PremiumTrialOfferTabBadge, {
    trialOffer: Y,
    isTabSelected: s
  }), a = 4);
  let ea = (0, l.jsx)(u.LinkButton, {
    selected: s,
    route: G,
    icon: h.default,
    text: b.default.Messages.PREMIUM,
    locationState: k,
    onClick: () => {
      _.default.track(x.AnalyticEvents.NITRO_TAB_VISITED, {
        badge_decorator: a,
        has_premium: H
      })
    },
    ...w,
    ...V,
    className: t,
    children: n
  });
  return Z ? (0, l.jsx)(L.ReferralProgramCoachtipLinkButton, {
    children: ea
  }) : ea
}