"use strict";
r.r(t), r.d(t, {
  PremiumDiscountOfferTabBadge: function() {
    return v
  },
  PremiumTrialOfferTabBadge: function() {
    return x
  }
});
var s = r("735250"),
  n = r("470079"),
  l = r("120356"),
  i = r.n(l),
  a = r("481060"),
  o = r("774078"),
  c = r("855693"),
  u = r("55935"),
  d = r("74538"),
  f = r("639119"),
  p = r("474936"),
  h = r("689938"),
  g = r("18330");

function m(e) {
  let {
    isTabSelected: t,
    expiresAt: r,
    trialDuration: l
  } = e, d = n.useMemo(() => Date.parse(r), [r]), f = (0, o.default)(d, 6e4);
  return Object.values(f).every(e => 0 === e) ? null : (0, s.jsx)(a.Tooltip, {
    text: (0, u.unitsAsStrings)(f, {
      days: h.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_DAYS,
      hours: h.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_HOURS,
      minutes: h.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_MINUTES
    }),
    children: e => (0, s.jsxs)("div", {
      ...e,
      className: i()(g.premiumTrialBadge, g.premiumTrialAcknowledgedBadge, {
        [g.premiumTrialBadgeSelected]: t
      }),
      children: [(0, s.jsx)(c.default, {
        className: g.premiumTrialBadgeIcon
      }), l]
    })
  })
}

function x(e) {
  var t;
  let {
    isTabSelected: r,
    trialOffer: n
  } = e, l = null === (t = (0, f.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial, i = (0, d.formatTrialOfferIntervalDuration)({
    intervalType: null == l ? void 0 : l.interval,
    intervalCount: null == l ? void 0 : l.interval_count
  });
  return (0, s.jsx)(b, {
    isTabSelected: r,
    badgeCopy: i,
    offerExpiresAt: n.expires_at,
    className: (null == l ? void 0 : l.sku_id) === p.PremiumSubscriptionSKUs.TIER_2 ? g.premiumTrialTier2UnacknowledgedBadge : g.premiumTrialTier0UnacknowledgedBadge
  })
}

function v(e) {
  let {
    isTabSelected: t,
    userDiscount: r,
    includesAmountOff: n
  } = e, l = h.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
    percent: r.discount.amount
  });
  return (0, s.jsx)(b, {
    isTabSelected: t,
    badgeCopy: n ? l : h.default.Messages.PREMIUM_DISCOUNT_BADGE,
    offerExpiresAt: r.expires_at,
    className: g.premiumDiscountUnacknowledgedBadge
  })
}

function b(e) {
  let {
    isTabSelected: t,
    badgeCopy: r,
    offerExpiresAt: n,
    className: l
  } = e;
  return null != n ? (0, s.jsx)(m, {
    expiresAt: n,
    isTabSelected: t,
    trialDuration: r
  }) : (0, s.jsx)("div", {
    className: i()(g.premiumTrialBadge, l),
    children: r
  })
}