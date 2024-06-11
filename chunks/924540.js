"use strict";
s.r(t), s.d(t, {
  PremiumDiscountOfferTabBadge: function() {
    return S
  },
  PremiumTrialOfferTabBadge: function() {
    return b
  }
});
var r = s("735250"),
  n = s("470079"),
  i = s("120356"),
  a = s.n(i),
  l = s("481060"),
  o = s("774078"),
  c = s("855693"),
  u = s("55935"),
  d = s("74538"),
  f = s("639119"),
  p = s("474936"),
  g = s("689938"),
  v = s("18330");

function h(e) {
  let {
    isTabSelected: t,
    expiresAt: s,
    trialDuration: i
  } = e, d = n.useMemo(() => Date.parse(s), [s]), f = (0, o.default)(d, 6e4);
  return Object.values(f).every(e => 0 === e) ? null : (0, r.jsx)(l.Tooltip, {
    text: (0, u.unitsAsStrings)(f, {
      days: g.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_DAYS,
      hours: g.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_HOURS,
      minutes: g.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_MINUTES
    }),
    children: e => (0, r.jsxs)("div", {
      ...e,
      className: a()(v.premiumTrialBadge, v.premiumTrialAcknowledgedBadge, {
        [v.premiumTrialBadgeSelected]: t
      }),
      children: [(0, r.jsx)(c.default, {
        className: v.premiumTrialBadgeIcon
      }), i]
    })
  })
}

function b(e) {
  var t;
  let {
    isTabSelected: s,
    trialOffer: n
  } = e, i = null === (t = (0, f.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial, a = (0, d.formatTrialOfferIntervalDuration)({
    intervalType: null == i ? void 0 : i.interval,
    intervalCount: null == i ? void 0 : i.interval_count
  });
  return (0, r.jsx)(x, {
    isTabSelected: s,
    badgeCopy: a,
    offerExpiresAt: n.expires_at,
    className: (null == i ? void 0 : i.sku_id) === p.PremiumSubscriptionSKUs.TIER_2 ? v.premiumTrialTier2UnacknowledgedBadge : v.premiumTrialTier0UnacknowledgedBadge
  })
}

function S(e) {
  let {
    isTabSelected: t,
    userDiscount: s,
    includesAmountOff: n
  } = e, i = g.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
    percent: s.discount.amount
  });
  return (0, r.jsx)(x, {
    isTabSelected: t,
    badgeCopy: n ? i : g.default.Messages.PREMIUM_DISCOUNT_BADGE,
    offerExpiresAt: s.expires_at,
    className: v.premiumDiscountUnacknowledgedBadge
  })
}

function x(e) {
  let {
    isTabSelected: t,
    badgeCopy: s,
    offerExpiresAt: n,
    className: i
  } = e;
  return null != n ? (0, r.jsx)(h, {
    expiresAt: n,
    isTabSelected: t,
    trialDuration: s
  }) : (0, r.jsx)("div", {
    className: a()(v.premiumTrialBadge, i),
    children: s
  })
}