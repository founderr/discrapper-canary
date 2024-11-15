s.d(t, {
    $H: function () {
        return g;
    },
    GN: function () {
        return _;
    },
    _y: function () {
        return h;
    }
});
var n = s(200651),
    r = s(192379),
    i = s(120356),
    o = s.n(i),
    a = s(481060),
    l = s(774078),
    c = s(55935),
    d = s(74538),
    u = s(639119),
    p = s(474936),
    f = s(388032),
    x = s(700706);
function C(e) {
    let { isTabSelected: t, expiresAt: s, trialDuration: i, className: d } = e,
        u = r.useMemo(() => Date.parse(s), [s]),
        p = (0, l.Z)(u, 60000);
    return Object.values(p).every((e) => 0 === e)
        ? null
        : (0, n.jsx)(a.Tooltip, {
              text: (0, c.QX)(p, {
                  days: f.t.qVGNkZ,
                  hours: f.t.wyg9a2,
                  minutes: f.t.IzmIlZ
              }),
              children: (e) =>
                  (0, n.jsxs)('div', {
                      ...e,
                      className: o()(x.premiumTrialBadge, x.premiumTrialAcknowledgedBadge, d, { [x.premiumTrialBadgeSelected]: t }),
                      children: [
                          (0, n.jsx)(a.ClockIcon, {
                              size: 'custom',
                              width: 20,
                              height: 20,
                              color: 'currentColor',
                              className: x.premiumTrialBadgeIcon
                          }),
                          (0, n.jsxs)(a.Text, {
                              variant: 'eyebrow',
                              children: [' ', i, ' ']
                          })
                      ]
                  })
          });
}
function g(e) {
    var t;
    let { isTabSelected: s, trialOffer: r } = e,
        i = null === (t = (0, u.N)()) || void 0 === t ? void 0 : t.subscription_trial,
        o = (0, d.a5)({
            intervalType: null == i ? void 0 : i.interval,
            intervalCount: null == i ? void 0 : i.interval_count
        });
    return (0, n.jsx)(h, {
        isTabSelected: s,
        badgeCopy: o,
        offerExpiresAt: r.expires_at,
        className: (null == i ? void 0 : i.sku_id) === p.Si.TIER_2 ? x.premiumTrialTier2UnacknowledgedBadge : x.premiumTrialTier0UnacknowledgedBadge
    });
}
function _(e) {
    let { isTabSelected: t, userDiscount: s, includesAmountOff: r } = e,
        i = f.intl.formatToPlainString(f.t.iiLbvr, { percent: s.discount.amount });
    return (0, n.jsx)(h, {
        isTabSelected: t,
        badgeCopy: r ? i : f.intl.string(f.t['/DTtr6']),
        offerExpiresAt: s.expires_at,
        className: x.premiumDiscountUnacknowledgedBadge
    });
}
function h(e) {
    let { isTabSelected: t, badgeCopy: s, offerExpiresAt: r, className: i, ackedClassName: l } = e;
    return null != r
        ? (0, n.jsx)(C, {
              className: l,
              expiresAt: r,
              isTabSelected: t,
              trialDuration: s
          })
        : (0, n.jsx)('div', {
              className: o()(x.premiumTrialBadge, i),
              children: (0, n.jsx)(a.Text, {
                  variant: 'eyebrow',
                  className: x.premiumOfferBadgeCopy,
                  children: s
              })
          });
}
