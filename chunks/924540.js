"use strict";
a.r(t), a.d(t, {
  PremiumDiscountOfferTabBadge: function() {
    return _
  },
  PremiumTrialOfferTabBadge: function() {
    return p
  }
});
var n = a("735250"),
  r = a("470079"),
  i = a("120356"),
  s = a.n(i),
  l = a("481060"),
  o = a("774078"),
  c = a("855693"),
  d = a("55935"),
  u = a("74538"),
  f = a("639119"),
  m = a("474936"),
  h = a("689938"),
  E = a("269001");

function T(e) {
  let {
    isTabSelected: t,
    expiresAt: a,
    trialDuration: i
  } = e, u = r.useMemo(() => Date.parse(a), [a]), f = (0, o.default)(u, 6e4);
  return Object.values(f).every(e => 0 === e) ? null : (0, n.jsx)(l.Tooltip, {
    text: (0, d.unitsAsStrings)(f, {
      days: h.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_DAYS,
      hours: h.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_HOURS,
      minutes: h.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_MINUTES
    }),
    children: e => (0, n.jsxs)("div", {
      ...e,
      className: s()(E.premiumTrialBadge, E.premiumTrialAcknowledgedBadge, {
        [E.premiumTrialBadgeSelected]: t
      }),
      children: [(0, n.jsx)(c.default, {
        className: E.premiumTrialBadgeIcon
      }), i]
    })
  })
}

function p(e) {
  var t;
  let {
    isTabSelected: a,
    trialOffer: r
  } = e, i = null === (t = (0, f.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial, s = (0, u.formatTrialOfferIntervalDuration)({
    intervalType: null == i ? void 0 : i.interval,
    intervalCount: null == i ? void 0 : i.interval_count
  });
  return (0, n.jsx)(C, {
    isTabSelected: a,
    badgeCopy: s,
    offerExpiresAt: r.expires_at,
    className: (null == i ? void 0 : i.sku_id) === m.PremiumSubscriptionSKUs.TIER_2 ? E.premiumTrialTier2UnacknowledgedBadge : E.premiumTrialTier0UnacknowledgedBadge
  })
}

function _(e) {
  let {
    isTabSelected: t,
    userDiscount: a,
    includesAmountOff: r
  } = e, i = h.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
    percent: a.discount.amount
  });
  return (0, n.jsx)(C, {
    isTabSelected: t,
    badgeCopy: r ? i : h.default.Messages.PREMIUM_DISCOUNT_BADGE,
    offerExpiresAt: a.expires_at,
    className: E.premiumDiscountUnacknowledgedBadge
  })
}

function C(e) {
  let {
    isTabSelected: t,
    badgeCopy: a,
    offerExpiresAt: r,
    className: i
  } = e;
  return null != r ? (0, n.jsx)(T, {
    expiresAt: r,
    isTabSelected: t,
    trialDuration: a
  }) : (0, n.jsx)("div", {
    className: s()(E.premiumTrialBadge, i),
    children: a
  })
}