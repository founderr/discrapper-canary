"use strict";
i.r(t), i.d(t, {
  PremiumDiscountOfferTabBadge: function() {
    return E
  },
  PremiumTrialOfferTabBadge: function() {
    return _
  }
});
var n = i("735250"),
  r = i("470079"),
  s = i("120356"),
  a = i.n(s),
  l = i("481060"),
  o = i("774078"),
  c = i("855693"),
  u = i("55935"),
  d = i("74538"),
  f = i("639119"),
  p = i("474936"),
  C = i("689938"),
  m = i("893943");

function h(e) {
  let {
    isTabSelected: t,
    expiresAt: i,
    trialDuration: s
  } = e, d = r.useMemo(() => Date.parse(i), [i]), f = (0, o.default)(d, 6e4);
  return Object.values(f).every(e => 0 === e) ? null : (0, n.jsx)(l.Tooltip, {
    text: (0, u.unitsAsStrings)(f, {
      days: C.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_DAYS,
      hours: C.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_HOURS,
      minutes: C.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_MINUTES
    }),
    children: e => (0, n.jsxs)("div", {
      ...e,
      className: a()(m.premiumTrialBadge, m.premiumTrialAcknowledgedBadge, {
        [m.premiumTrialBadgeSelected]: t
      }),
      children: [(0, n.jsx)(c.default, {
        className: m.premiumTrialBadgeIcon
      }), s]
    })
  })
}

function _(e) {
  var t;
  let {
    isTabSelected: i,
    trialOffer: r
  } = e, s = null === (t = (0, f.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial, a = (0, d.formatTrialOfferIntervalDuration)({
    intervalType: null == s ? void 0 : s.interval,
    intervalCount: null == s ? void 0 : s.interval_count
  });
  return (0, n.jsx)(I, {
    isTabSelected: i,
    badgeCopy: a,
    offerExpiresAt: r.expires_at,
    className: (null == s ? void 0 : s.sku_id) === p.PremiumSubscriptionSKUs.TIER_2 ? m.premiumTrialTier2UnacknowledgedBadge : m.premiumTrialTier0UnacknowledgedBadge
  })
}

function E(e) {
  let {
    isTabSelected: t,
    userDiscount: i,
    includesAmountOff: r
  } = e, s = C.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
    percent: i.discount.amount
  });
  return (0, n.jsx)(I, {
    isTabSelected: t,
    badgeCopy: r ? s : C.default.Messages.PREMIUM_DISCOUNT_BADGE,
    offerExpiresAt: i.expires_at,
    className: m.premiumDiscountUnacknowledgedBadge
  })
}

function I(e) {
  let {
    isTabSelected: t,
    badgeCopy: i,
    offerExpiresAt: r,
    className: s
  } = e;
  return null != r ? (0, n.jsx)(h, {
    expiresAt: r,
    isTabSelected: t,
    trialDuration: i
  }) : (0, n.jsx)("div", {
    className: a()(m.premiumTrialBadge, s),
    children: i
  })
}