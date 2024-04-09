"use strict";
n.r(t), n.d(t, {
  PremiumDiscountOfferTabBadge: function() {
    return T
  },
  PremiumTrialOfferTabBadge: function() {
    return _
  }
});
var i = n("735250"),
  r = n("470079"),
  a = n("803997"),
  s = n.n(a),
  l = n("481060"),
  o = n("774078"),
  u = n("855693"),
  c = n("55935"),
  d = n("74538"),
  f = n("639119"),
  p = n("474936"),
  m = n("689938"),
  E = n("893943");

function I(e) {
  let {
    isTabSelected: t,
    expiresAt: n,
    trialDuration: a
  } = e, d = r.useMemo(() => Date.parse(n), [n]), f = (0, o.default)(d, 6e4);
  return Object.values(f).every(e => 0 === e) ? null : (0, i.jsx)(l.Tooltip, {
    text: (0, c.unitsAsStrings)(f, {
      days: m.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_DAYS,
      hours: m.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_HOURS,
      minutes: m.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_MINUTES
    }),
    children: e => (0, i.jsxs)("div", {
      ...e,
      className: s()(E.premiumTrialBadge, E.premiumTrialAcknowledgedBadge, {
        [E.premiumTrialBadgeSelected]: t
      }),
      children: [(0, i.jsx)(u.default, {
        className: E.premiumTrialBadgeIcon
      }), a]
    })
  })
}

function _(e) {
  var t;
  let {
    isTabSelected: n,
    trialOffer: r
  } = e, a = null === (t = (0, f.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial, s = (0, d.formatTrialOfferIntervalDuration)({
    intervalType: null == a ? void 0 : a.interval,
    intervalCount: null == a ? void 0 : a.interval_count
  });
  return (0, i.jsx)(h, {
    isTabSelected: n,
    badgeCopy: s,
    offerExpiresAt: r.expires_at,
    className: (null == a ? void 0 : a.sku_id) === p.PremiumSubscriptionSKUs.TIER_2 ? E.premiumTrialTier2UnacknowledgedBadge : E.premiumTrialTier0UnacknowledgedBadge
  })
}

function T(e) {
  let {
    isTabSelected: t,
    userDiscount: n,
    includesAmountOff: r
  } = e, a = m.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
    percent: n.discount.amount
  });
  return (0, i.jsx)(h, {
    isTabSelected: t,
    badgeCopy: r ? a : m.default.Messages.PREMIUM_DISCOUNT_BADGE,
    offerExpiresAt: n.expires_at,
    className: E.premiumDiscountUnacknowledgedBadge
  })
}

function h(e) {
  let {
    isTabSelected: t,
    badgeCopy: n,
    offerExpiresAt: r,
    className: a
  } = e;
  return null != r ? (0, i.jsx)(I, {
    expiresAt: r,
    isTabSelected: t,
    trialDuration: n
  }) : (0, i.jsx)("div", {
    className: s()(E.premiumTrialBadge, a),
    children: n
  })
}