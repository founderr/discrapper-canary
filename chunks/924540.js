t.d(s, {
    $H: function () {
        return v;
    },
    GN: function () {
        return b;
    },
    _y: function () {
        return C;
    }
});
var n = t(200651),
    o = t(192379),
    r = t(120356),
    a = t.n(r),
    i = t(481060),
    c = t(774078),
    l = t(55935),
    u = t(74538),
    f = t(639119),
    d = t(474936),
    p = t(388032),
    x = t(700706);
function g(e) {
    let { isTabSelected: s, expiresAt: t, trialDuration: r, className: u } = e,
        f = o.useMemo(() => Date.parse(t), [t]),
        d = (0, c.Z)(f, 60000);
    return Object.values(d).every((e) => 0 === e)
        ? null
        : (0, n.jsx)(i.Tooltip, {
              text: (0, l.QX)(d, {
                  days: p.t.qVGNkZ,
                  hours: p.t.wyg9a2,
                  minutes: p.t.IzmIlZ
              }),
              children: (e) =>
                  (0, n.jsxs)('div', {
                      ...e,
                      className: a()(x.premiumTrialBadge, x.premiumTrialAcknowledgedBadge, u, { [x.premiumTrialBadgeSelected]: s }),
                      children: [
                          (0, n.jsx)(i.ClockIcon, {
                              size: 'custom',
                              width: 20,
                              height: 20,
                              color: 'currentColor',
                              className: x.premiumTrialBadgeIcon
                          }),
                          (0, n.jsxs)(i.Text, {
                              variant: 'eyebrow',
                              children: [' ', r, ' ']
                          })
                      ]
                  })
          });
}
function v(e) {
    var s;
    let { isTabSelected: t, trialOffer: o } = e,
        r = null === (s = (0, f.N)()) || void 0 === s ? void 0 : s.subscription_trial,
        a = (0, u.a5)({
            intervalType: null == r ? void 0 : r.interval,
            intervalCount: null == r ? void 0 : r.interval_count
        });
    return (0, n.jsx)(C, {
        isTabSelected: t,
        badgeCopy: a,
        offerExpiresAt: o.expires_at,
        className: (null == r ? void 0 : r.sku_id) === d.Si.TIER_2 ? x.premiumTrialTier2UnacknowledgedBadge : x.premiumTrialTier0UnacknowledgedBadge
    });
}
function b(e) {
    let { isTabSelected: s, userDiscount: t, includesAmountOff: o } = e,
        r = p.intl.formatToPlainString(p.t.iiLbvr, { percent: t.discount.amount });
    return (0, n.jsx)(C, {
        isTabSelected: s,
        badgeCopy: o ? r : p.intl.string(p.t['/DTtr6']),
        offerExpiresAt: t.expires_at,
        className: x.premiumDiscountUnacknowledgedBadge
    });
}
function C(e) {
    let { isTabSelected: s, badgeCopy: t, offerExpiresAt: o, className: r, ackedClassName: c } = e;
    return null != o
        ? (0, n.jsx)(g, {
              className: c,
              expiresAt: o,
              isTabSelected: s,
              trialDuration: t
          })
        : (0, n.jsx)('div', {
              className: a()(x.premiumTrialBadge, r),
              children: (0, n.jsx)(i.Text, {
                  variant: 'eyebrow',
                  className: x.premiumOfferBadgeCopy,
                  children: t
              })
          });
}
