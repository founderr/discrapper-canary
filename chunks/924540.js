n.d(t, {
  $H: function() {
    return b
  },
  GN: function() {
    return h
  }
});
var r = n(735250),
  s = n(470079),
  o = n(120356),
  i = n.n(o),
  l = n(481060),
  a = n(774078),
  c = n(55935),
  u = n(74538),
  d = n(639119),
  p = n(474936),
  f = n(689938),
  g = n(716496);

function v(e) {
  let {
    isTabSelected: t,
    expiresAt: n,
    trialDuration: o
  } = e, u = s.useMemo(() => Date.parse(n), [n]), d = (0, a.Z)(u, 6e4);
  return Object.values(d).every(e => 0 === e) ? null : (0, r.jsx)(l.Tooltip, {
    text: (0, c.QX)(d, {
      days: f.Z.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_DAYS,
      hours: f.Z.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_HOURS,
      minutes: f.Z.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_MINUTES
    }),
    children: e => (0, r.jsxs)("div", {
      ...e,
      className: i()(g.premiumTrialBadge, g.premiumTrialAcknowledgedBadge, {
        [g.premiumTrialBadgeSelected]: t
      }),
      children: [(0, r.jsx)(l.ClockIcon, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        className: g.premiumTrialBadgeIcon
      }), o]
    })
  })
}

function b(e) {
  var t;
  let {
    isTabSelected: n,
    trialOffer: s
  } = e, o = null === (t = (0, d.N)()) || void 0 === t ? void 0 : t.subscription_trial, i = (0, u.a5)({
    intervalType: null == o ? void 0 : o.interval,
    intervalCount: null == o ? void 0 : o.interval_count
  });
  return (0, r.jsx)(x, {
    isTabSelected: n,
    badgeCopy: i,
    offerExpiresAt: s.expires_at,
    className: (null == o ? void 0 : o.sku_id) === p.Si.TIER_2 ? g.premiumTrialTier2UnacknowledgedBadge : g.premiumTrialTier0UnacknowledgedBadge
  })
}

function h(e) {
  let {
    isTabSelected: t,
    userDiscount: n,
    includesAmountOff: s
  } = e, o = f.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
    percent: n.discount.amount
  });
  return (0, r.jsx)(x, {
    isTabSelected: t,
    badgeCopy: s ? o : f.Z.Messages.PREMIUM_DISCOUNT_BADGE,
    offerExpiresAt: n.expires_at,
    className: g.premiumDiscountUnacknowledgedBadge
  })
}

function x(e) {
  let {
    isTabSelected: t,
    badgeCopy: n,
    offerExpiresAt: s,
    className: o
  } = e;
  return null != s ? (0, r.jsx)(v, {
    expiresAt: s,
    isTabSelected: t,
    trialDuration: n
  }) : (0, r.jsx)("div", {
    className: i()(g.premiumTrialBadge, o),
    children: n
  })
}