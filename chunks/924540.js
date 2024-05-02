"use strict";
n.r(t), n.d(t, {
  PremiumDiscountOfferTabBadge: function() {
    return C
  },
  PremiumTrialOfferTabBadge: function() {
    return T
  }
});
var a = n("735250"),
  r = n("470079"),
  s = n("120356"),
  i = n.n(s),
  l = n("481060"),
  o = n("774078"),
  c = n("855693"),
  d = n("55935"),
  u = n("74538"),
  f = n("639119"),
  m = n("474936"),
  h = n("689938"),
  p = n("269001");

function E(e) {
  let {
    isTabSelected: t,
    expiresAt: n,
    trialDuration: s
  } = e, u = r.useMemo(() => Date.parse(n), [n]), f = (0, o.default)(u, 6e4);
  return Object.values(f).every(e => 0 === e) ? null : (0, a.jsx)(l.Tooltip, {
    text: (0, d.unitsAsStrings)(f, {
      days: h.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_DAYS,
      hours: h.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_HOURS,
      minutes: h.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_MINUTES
    }),
    children: e => (0, a.jsxs)("div", {
      ...e,
      className: i()(p.premiumTrialBadge, p.premiumTrialAcknowledgedBadge, {
        [p.premiumTrialBadgeSelected]: t
      }),
      children: [(0, a.jsx)(c.default, {
        className: p.premiumTrialBadgeIcon
      }), s]
    })
  })
}

function T(e) {
  var t;
  let {
    isTabSelected: n,
    trialOffer: r
  } = e, s = null === (t = (0, f.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial, i = (0, u.formatTrialOfferIntervalDuration)({
    intervalType: null == s ? void 0 : s.interval,
    intervalCount: null == s ? void 0 : s.interval_count
  });
  return (0, a.jsx)(_, {
    isTabSelected: n,
    badgeCopy: i,
    offerExpiresAt: r.expires_at,
    className: (null == s ? void 0 : s.sku_id) === m.PremiumSubscriptionSKUs.TIER_2 ? p.premiumTrialTier2UnacknowledgedBadge : p.premiumTrialTier0UnacknowledgedBadge
  })
}

function C(e) {
  let {
    isTabSelected: t,
    userDiscount: n,
    includesAmountOff: r
  } = e, s = h.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
    percent: n.discount.amount
  });
  return (0, a.jsx)(_, {
    isTabSelected: t,
    badgeCopy: r ? s : h.default.Messages.PREMIUM_DISCOUNT_BADGE,
    offerExpiresAt: n.expires_at,
    className: p.premiumDiscountUnacknowledgedBadge
  })
}

function _(e) {
  let {
    isTabSelected: t,
    badgeCopy: n,
    offerExpiresAt: r,
    className: s
  } = e;
  return null != r ? (0, a.jsx)(E, {
    expiresAt: r,
    isTabSelected: t,
    trialDuration: n
  }) : (0, a.jsx)("div", {
    className: i()(p.premiumTrialBadge, s),
    children: n
  })
}