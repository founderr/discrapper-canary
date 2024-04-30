"use strict";
n.r(t), n.d(t, {
  NitroTabButton: function() {
    return B
  }
}), n("47120");
var a, s, l = n("735250"),
  i = n("470079"),
  r = n("990547"),
  o = n("924826"),
  u = n("442837"),
  d = n("524437"),
  c = n("515753"),
  f = n("213609"),
  E = n("605236"),
  h = n("594174"),
  _ = n("351402"),
  C = n("78839"),
  m = n("466111"),
  S = n("626135"),
  p = n("74538"),
  I = n("328882"),
  T = n("650032"),
  g = n("104494"),
  A = n("639119"),
  N = n("655525"),
  v = n("314684"),
  R = n("52188"),
  L = n("248042"),
  O = n("924540"),
  M = n("649765"),
  P = n("565626"),
  y = n("701910"),
  x = n("886654"),
  D = n("487980"),
  b = n("474936"),
  U = n("981631"),
  j = n("921944"),
  G = n("689938"),
  w = n("47848");
let k = "NitroTabButton";
(s = a || (a = {}))[s.BOGO_PROMOTION = 0] = "BOGO_PROMOTION", s[s.PREMIUM_APRIL_2024_MARKETING_MOMENT = 1] = "PREMIUM_APRIL_2024_MARKETING_MOMENT", s[s.TENURE_REWARD = 2] = "TENURE_REWARD", s[s.NEW_PERKS_BADGE = 3] = "NEW_PERKS_BADGE", s[s.DISCOUNT_OFFER = 4] = "DISCOUNT_OFFER", s[s.TRIAL_OFFER = 5] = "TRIAL_OFFER", s[s.LOCALIZED_PRICING = 6] = "LOCALIZED_PRICING", s[s.REFERRAL_PROGRAM = 7] = "REFERRAL_PROGRAM";
let B = e => {
  let t, n, {
      selected: a,
      route: s,
      locationState: B,
      ...F
    } = e,
    H = (0, u.useStateFromStores)([h.default], () => h.default.getCurrentUser()),
    [V, Y] = i.useState(void 0),
    W = (0, u.useStateFromStores)([C.default], () => C.default.getPremiumTypeSubscription()),
    K = (0, p.hasPremiumSubscriptionToDisplay)(H, W),
    z = (0, o.useListItem)("nitro"),
    q = (0, A.usePremiumTrialOffer)(),
    Q = (0, g.usePremiumDiscountOffer)(),
    Z = (0, u.useStateFromStores)([_.default], () => _.default.isLocalizedPromoEnabled) && null == q,
    X = (0, L.useIsEligibleForBogoPromotion)(),
    J = (0, P.default)(),
    $ = (0, v.useTenureRewardBadgeDescription)(),
    ee = (0, I.useShouldShowNewOfferBadgeForAprilMarketingMoment)(k),
    et = (0, D.useIsEligibleSenderForReferralProgramTabBadge)(k),
    en = i.useMemo(() => a || null != q || null != Q || X || ee || J || null != $ || null != H && Date.now() - H.createdAt.getTime() > 2592e6 || K, [a, q, Q, X, ee, J, $, H, K]),
    {
      enabled: ea
    } = T.ReferralProgramRecipient.useExperiment({
      location: k
    }, {
      autoTrackExposure: !1
    }),
    es = ea && (null == q ? void 0 : q.trial_id) === b.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
  X ? (n = (0, l.jsx)(N.default, {
    isNitroTab: !0
  }), Y(0)) : ee ? (n = (0, l.jsx)(x.default, {
    copy: G.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_MODAL_TOP_PILL,
    isSelected: a,
    onSelect: () => (0, E.markDismissibleContentAsDismissed)(d.DismissibleContent.PREMIUM_2024_APRIL_MARKETING_BADGE, {
      dismissAction: j.ContentDismissActionType.TAKE_ACTION
    })
  }), Y(1)) : null != $ ? (n = (0, l.jsx)(y.default, {
    copy: $
  }), Y(2)) : J ? (n = (0, l.jsx)(y.default, {}), Y(3)) : null != Q ? (n = (0, l.jsx)(O.PremiumDiscountOfferTabBadge, {
    userDiscount: Q,
    isTabSelected: a,
    includesAmountOff: !1
  }), Y(4)) : null == q || es ? et ? (n = (0, l.jsx)(M.default, {
    isSelected: a,
    onSelect: () => (0, E.markDismissibleContentAsDismissed)(d.DismissibleContent.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
      dismissAction: j.ContentDismissActionType.TAKE_ACTION
    })
  }), Y(7)) : Z && (n = (0, l.jsx)(R.LocalizedPricingBadgeIcon, {
    entryPoint: R.BadgeEntryPoint.PrivateMessages
  }), !a && (t = w.localizeBadge), Y(6)) : (n = (0, l.jsx)(O.PremiumTrialOfferTabBadge, {
    trialOffer: q,
    isTabSelected: a
  }), Y(5));
  if ((0, f.default)({
      type: r.ImpressionTypes.PAGE,
      name: r.ImpressionNames.NITRO_TAB,
      properties: {
        has_premium: K,
        badge_decorator: V
      }
    }, {
      disableTrack: !en,
      trackOnInitialLoad: !0
    }), !en) return null;
  let el = (0, l.jsx)(c.LinkButton, {
    selected: a,
    route: s,
    icon: m.default,
    text: G.default.Messages.PREMIUM,
    locationState: B,
    onClick: () => {
      S.default.track(U.AnalyticEvents.NITRO_TAB_VISITED, {
        badge_decorator: V,
        has_premium: K
      })
    },
    ...F,
    ...z,
    className: t,
    children: n
  });
  return et ? (0, l.jsx)(M.ReferralProgramCoachtipLinkButton, {
    children: el
  }) : el
}