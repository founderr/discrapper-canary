"use strict";
n.r(t), n.d(t, {
  PremiumDiscountOfferTabBadge: function() {
    return _
  },
  PremiumTrialOfferTabBadge: function() {
    return p
  }
});
var a = n("735250"),
  i = n("470079"),
  r = n("120356"),
  s = n.n(r),
  l = n("481060"),
  o = n("774078"),
  c = n("855693"),
  d = n("55935"),
  u = n("74538"),
  f = n("639119"),
  m = n("474936"),
  h = n("689938"),
  E = n("269001");

function T(e) {
  let {
    isTabSelected: t,
    expiresAt: n,
    trialDuration: r
  } = e, u = i.useMemo(() => Date.parse(n), [n]), f = (0, o.default)(u, 6e4);
  return Object.values(f).every(e => 0 === e) ? null : (0, a.jsx)(l.Tooltip, {
    text: (0, d.unitsAsStrings)(f, {
      days: h.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_DAYS,
      hours: h.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_HOURS,
      minutes: h.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_MINUTES
    }),
    children: e => (0, a.jsxs)("div", {
      ...e,
      className: s()(E.premiumTrialBadge, E.premiumTrialAcknowledgedBadge, {
        [E.premiumTrialBadgeSelected]: t
      }),
      children: [(0, a.jsx)(c.default, {
        className: E.premiumTrialBadgeIcon
      }), r]
    })
  })
}

function p(e) {
  var t;
  let {
    isTabSelected: n,
    trialOffer: i
  } = e, r = null === (t = (0, f.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial, s = (0, u.formatTrialOfferIntervalDuration)({
    intervalType: null == r ? void 0 : r.interval,
    intervalCount: null == r ? void 0 : r.interval_count
  });
  return (0, a.jsx)(C, {
    isTabSelected: n,
    badgeCopy: s,
    offerExpiresAt: i.expires_at,
    className: (null == r ? void 0 : r.sku_id) === m.PremiumSubscriptionSKUs.TIER_2 ? E.premiumTrialTier2UnacknowledgedBadge : E.premiumTrialTier0UnacknowledgedBadge
  })
}

function _(e) {
  let {
    isTabSelected: t,
    userDiscount: n,
    includesAmountOff: i
  } = e, r = h.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
    percent: n.discount.amount
  });
  return (0, a.jsx)(C, {
    isTabSelected: t,
    badgeCopy: i ? r : h.default.Messages.PREMIUM_DISCOUNT_BADGE,
    offerExpiresAt: n.expires_at,
    className: E.premiumDiscountUnacknowledgedBadge
  })
}

function C(e) {
  let {
    isTabSelected: t,
    badgeCopy: n,
    offerExpiresAt: i,
    className: r
  } = e;
  return null != i ? (0, a.jsx)(T, {
    expiresAt: i,
    isTabSelected: t,
    trialDuration: n
  }) : (0, a.jsx)("div", {
    className: s()(E.premiumTrialBadge, r),
    children: n
  })
}