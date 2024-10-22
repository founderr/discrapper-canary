t.d(s, {
    $H: function () {
        return T;
    },
    GN: function () {
        return x;
    },
    _y: function () {
        return I;
    }
});
var n = t(200651),
    a = t(192379),
    r = t(120356),
    o = t.n(r),
    i = t(481060),
    c = t(774078),
    l = t(55935),
    u = t(74538),
    d = t(639119),
    f = t(474936),
    p = t(689938),
    _ = t(742774);
function g(e) {
    let { isTabSelected: s, expiresAt: t, trialDuration: r } = e,
        u = a.useMemo(() => Date.parse(t), [t]),
        d = (0, c.Z)(u, 60000);
    return Object.values(d).every((e) => 0 === e)
        ? null
        : (0, n.jsx)(i.Tooltip, {
              text: (0, l.QX)(d, {
                  days: p.Z.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_DAYS,
                  hours: p.Z.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_HOURS,
                  minutes: p.Z.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_MINUTES
              }),
              children: (e) =>
                  (0, n.jsxs)('div', {
                      ...e,
                      className: o()(_.premiumTrialBadge, _.premiumTrialAcknowledgedBadge, { [_.premiumTrialBadgeSelected]: s }),
                      children: [
                          (0, n.jsx)(i.ClockIcon, {
                              size: 'custom',
                              width: 20,
                              height: 20,
                              color: 'currentColor',
                              className: _.premiumTrialBadgeIcon
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
        r = null === (s = (0, d.N)()) || void 0 === s ? void 0 : s.subscription_trial,
        o = (0, u.a5)({
            intervalType: null == r ? void 0 : r.interval,
            intervalCount: null == r ? void 0 : r.interval_count
        });
    return (0, n.jsx)(I, {
        isTabSelected: t,
        badgeCopy: o,
        offerExpiresAt: a.expires_at,
        className: (null == r ? void 0 : r.sku_id) === f.Si.TIER_2 ? _.premiumTrialTier2UnacknowledgedBadge : _.premiumTrialTier0UnacknowledgedBadge
    });
}
function x(e) {
    let { isTabSelected: s, userDiscount: t, includesAmountOff: a } = e,
        r = p.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({ percent: t.discount.amount });
    return (0, n.jsx)(I, {
        isTabSelected: s,
        badgeCopy: a ? r : p.Z.Messages.PREMIUM_DISCOUNT_BADGE,
        offerExpiresAt: t.expires_at,
        className: _.premiumDiscountUnacknowledgedBadge
    });
}
function I(e) {
    let { isTabSelected: s, badgeCopy: t, offerExpiresAt: a, className: r } = e;
    return null != a
        ? (0, n.jsx)(g, {
              expiresAt: a,
              isTabSelected: s,
              trialDuration: t
          })
        : (0, n.jsx)('div', {
              className: o()(_.premiumTrialBadge, r),
              children: (0, n.jsx)(i.Text, {
                  variant: 'eyebrow',
                  className: _.premiumOfferBadgeCopy,
                  children: t
              })
          });
}
