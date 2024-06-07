"use strict";
n.r(t), n.d(t, {
  PremiumDiscountOfferTabBadge: function() {
    return T
  },
  PremiumTrialOfferTabBadge: function() {
    return C
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
  E = n("18330");

function p(e) {
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
      className: i()(E.premiumTrialBadge, E.premiumTrialAcknowledgedBadge, {
        [E.premiumTrialBadgeSelected]: t
      }),
      children: [(0, a.jsx)(c.default, {
        className: E.premiumTrialBadgeIcon
      }), s]
    })
  })
}

function C(e) {
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
    className: (null == s ? void 0 : s.sku_id) === m.PremiumSubscriptionSKUs.TIER_2 ? E.premiumTrialTier2UnacknowledgedBadge : E.premiumTrialTier0UnacknowledgedBadge
  })
}

function T(e) {
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
    className: E.premiumDiscountUnacknowledgedBadge
  })
}

function _(e) {
  let {
    isTabSelected: t,
    badgeCopy: n,
    offerExpiresAt: r,
    className: s
  } = e;
  return null != r ? (0, a.jsx)(p, {
    expiresAt: r,
    isTabSelected: t,
    trialDuration: n
  }) : (0, a.jsx)("div", {
    className: i()(E.premiumTrialBadge, s),
    children: n
  })
}