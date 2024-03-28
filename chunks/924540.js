"use strict";
n.r(t), n.d(t, {
  PremiumDiscountOfferTabBadge: function() {
    return I
  },
  PremiumTrialOfferTabBadge: function() {
    return T
  }
});
var r = n("735250"),
  i = n("470079"),
  s = n("803997"),
  a = n.n(s),
  l = n("481060"),
  o = n("774078"),
  u = n("855693"),
  c = n("55935"),
  d = n("74538"),
  f = n("639119"),
  p = n("474936"),
  _ = n("689938"),
  m = n("893943");

function E(e) {
  let {
    isTabSelected: t,
    expiresAt: n,
    trialDuration: s
  } = e, d = i.useMemo(() => Date.parse(n), [n]), f = (0, o.default)(d, 6e4);
  return Object.values(f).every(e => 0 === e) ? null : (0, r.jsx)(l.Tooltip, {
    text: (0, c.unitsAsStrings)(f, {
      days: _.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_DAYS,
      hours: _.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_HOURS,
      minutes: _.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_MINUTES
    }),
    children: e => (0, r.jsxs)("div", {
      ...e,
      className: a()(m.premiumTrialBadge, m.premiumTrialAcknowledgedBadge, {
        [m.premiumTrialBadgeSelected]: t
      }),
      children: [(0, r.jsx)(u.default, {
        className: m.premiumTrialBadgeIcon
      }), s]
    })
  })
}

function T(e) {
  var t;
  let {
    isTabSelected: n,
    trialOffer: i
  } = e, s = null === (t = (0, f.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial, a = (0, d.formatTrialOfferIntervalDuration)({
    intervalType: null == s ? void 0 : s.interval,
    intervalCount: null == s ? void 0 : s.interval_count
  });
  return (0, r.jsx)(h, {
    isTabSelected: n,
    badgeCopy: a,
    offerExpiresAt: i.expires_at,
    className: (null == s ? void 0 : s.sku_id) === p.PremiumSubscriptionSKUs.TIER_2 ? m.premiumTrialTier2UnacknowledgedBadge : m.premiumTrialTier0UnacknowledgedBadge
  })
}

function I(e) {
  let {
    isTabSelected: t,
    userDiscount: n,
    includesAmountOff: i
  } = e, s = _.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
    percent: n.discount.amount
  });
  return (0, r.jsx)(h, {
    isTabSelected: t,
    badgeCopy: i ? s : _.default.Messages.PREMIUM_DISCOUNT_BADGE,
    offerExpiresAt: n.expires_at,
    className: m.premiumDiscountUnacknowledgedBadge
  })
}

function h(e) {
  let {
    isTabSelected: t,
    badgeCopy: n,
    offerExpiresAt: i,
    className: s
  } = e;
  return null != i ? (0, r.jsx)(E, {
    expiresAt: i,
    isTabSelected: t,
    trialDuration: n
  }) : (0, r.jsx)("div", {
    className: a()(m.premiumTrialBadge, s),
    children: n
  })
}