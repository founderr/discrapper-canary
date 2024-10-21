t.d(s, {
    $H: function () {
        return T;
    },
    GN: function () {
        return I;
    }
});
var n = t(200651),
    a = t(192379),
    r = t(120356),
    o = t.n(r),
    i = t(481060),
    c = t(774078),
    u = t(55935),
    d = t(74538),
    l = t(639119),
    f = t(474936),
    _ = t(689938),
    p = t(742774);
function g(e) {
    let { isTabSelected: s, expiresAt: t, trialDuration: r } = e,
        d = a.useMemo(() => Date.parse(t), [t]),
        l = (0, c.Z)(d, 60000);
    return Object.values(l).every((e) => 0 === e)
        ? null
        : (0, n.jsx)(i.Tooltip, {
              text: (0, u.QX)(l, {
                  days: _.Z.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_DAYS,
                  hours: _.Z.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_HOURS,
                  minutes: _.Z.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_MINUTES
              }),
              children: (e) =>
                  (0, n.jsxs)('div', {
                      ...e,
                      className: o()(p.premiumTrialBadge, p.premiumTrialAcknowledgedBadge, { [p.premiumTrialBadgeSelected]: s }),
                      children: [
                          (0, n.jsx)(i.ClockIcon, {
                              size: 'custom',
                              width: 20,
                              height: 20,
                              color: 'currentColor',
                              className: p.premiumTrialBadgeIcon
                          }),
                          (0, n.jsxs)(i.Text, {
                              variant: 'eyebrow',
                              children: [' ', r, ' ']
                          })
                      ]
                  })
          });
}
function T(e) {
    var s;
    let { isTabSelected: t, trialOffer: a } = e,
        r = null === (s = (0, l.N)()) || void 0 === s ? void 0 : s.subscription_trial,
        o = (0, d.a5)({
            intervalType: null == r ? void 0 : r.interval,
            intervalCount: null == r ? void 0 : r.interval_count
        });
    return (0, n.jsx)(b, {
        isTabSelected: t,
        badgeCopy: o,
        offerExpiresAt: a.expires_at,
        className: (null == r ? void 0 : r.sku_id) === f.Si.TIER_2 ? p.premiumTrialTier2UnacknowledgedBadge : p.premiumTrialTier0UnacknowledgedBadge
    });
}
function I(e) {
    let { isTabSelected: s, userDiscount: t, includesAmountOff: a } = e,
        r = _.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({ percent: t.discount.amount });
    return (0, n.jsx)(b, {
        isTabSelected: s,
        badgeCopy: a ? r : _.Z.Messages.PREMIUM_DISCOUNT_BADGE,
        offerExpiresAt: t.expires_at,
        className: p.premiumDiscountUnacknowledgedBadge
    });
}
function b(e) {
    let { isTabSelected: s, badgeCopy: t, offerExpiresAt: a, className: r } = e;
    return null != a
        ? (0, n.jsx)(g, {
              expiresAt: a,
              isTabSelected: s,
              trialDuration: t
          })
        : (0, n.jsx)('div', {
              className: o()(p.premiumTrialBadge, r),
              children: (0, n.jsx)(i.Text, {
                  variant: 'eyebrow',
                  className: p.premiumOfferBadgeCopy,
                  children: t
              })
          });
}
