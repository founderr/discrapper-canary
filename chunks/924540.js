t.d(s, {
    $H: function () {
        return x;
    },
    GN: function () {
        return v;
    }
});
var n = t(735250),
    a = t(470079),
    r = t(120356),
    o = t.n(r),
    i = t(481060),
    c = t(774078),
    u = t(55935),
    l = t(74538),
    d = t(639119),
    f = t(474936),
    p = t(689938),
    g = t(742774);
function b(e) {
    let { isTabSelected: s, expiresAt: t, trialDuration: r } = e,
        l = a.useMemo(() => Date.parse(t), [t]),
        d = (0, c.Z)(l, 60000);
    return Object.values(d).every((e) => 0 === e)
        ? null
        : (0, n.jsx)(i.Tooltip, {
              text: (0, u.QX)(d, {
                  days: p.Z.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_DAYS,
                  hours: p.Z.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_HOURS,
                  minutes: p.Z.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_MINUTES
              }),
              children: (e) =>
                  (0, n.jsxs)('div', {
                      ...e,
                      className: o()(g.premiumTrialBadge, g.premiumTrialAcknowledgedBadge, { [g.premiumTrialBadgeSelected]: s }),
                      children: [
                          (0, n.jsx)(i.ClockIcon, {
                              size: 'custom',
                              width: 20,
                              height: 20,
                              color: 'currentColor',
                              className: g.premiumTrialBadgeIcon
                          }),
                          (0, n.jsxs)(i.Text, {
                              variant: 'eyebrow',
                              children: [' ', r, ' ']
                          })
                      ]
                  })
          });
}
function x(e) {
    var s;
    let { isTabSelected: t, trialOffer: a } = e,
        r = null === (s = (0, d.N)()) || void 0 === s ? void 0 : s.subscription_trial,
        o = (0, l.a5)({
            intervalType: null == r ? void 0 : r.interval,
            intervalCount: null == r ? void 0 : r.interval_count
        });
    return (0, n.jsx)(_, {
        isTabSelected: t,
        badgeCopy: o,
        offerExpiresAt: a.expires_at,
        className: (null == r ? void 0 : r.sku_id) === f.Si.TIER_2 ? g.premiumTrialTier2UnacknowledgedBadge : g.premiumTrialTier0UnacknowledgedBadge
    });
}
function v(e) {
    let { isTabSelected: s, userDiscount: t, includesAmountOff: a } = e,
        r = p.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({ percent: t.discount.amount });
    return (0, n.jsx)(_, {
        isTabSelected: s,
        badgeCopy: a ? r : p.Z.Messages.PREMIUM_DISCOUNT_BADGE,
        offerExpiresAt: t.expires_at,
        className: g.premiumDiscountUnacknowledgedBadge
    });
}
function _(e) {
    let { isTabSelected: s, badgeCopy: t, offerExpiresAt: a, className: r } = e;
    return null != a
        ? (0, n.jsx)(b, {
              expiresAt: a,
              isTabSelected: s,
              trialDuration: t
          })
        : (0, n.jsx)('div', {
              className: o()(g.premiumTrialBadge, r),
              children: (0, n.jsx)(i.Text, {
                  variant: 'eyebrow',
                  className: g.premiumOfferBadgeCopy,
                  children: t
              })
          });
}
