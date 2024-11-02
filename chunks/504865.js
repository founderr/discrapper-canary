var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    l = n(509545),
    u = n(74538),
    c = n(474936),
    d = n(716002);
t.Z = function (e) {
    let { subscriptionTier: t, interval: n = c.rV.MONTH, className: i, isGift: f = !1, variant: _, priceOptions: h, shouldUseTaglineXPCopy: p } = e;
    if (!(0, s.e7)([l.Z], () => l.Z.isLoadedForPremiumSKUs()))
        return (0, r.jsx)(o.Spinner, {
            type: o.Spinner.Type.PULSING_ELLIPSIS,
            className: d.priceSpinner
        });
    let m = l.Z.getForSkuAndInterval((0, u.Wz)(t), n),
        g = null != m ? (0, u.gy)(m, h, !1, f) : null;
    return (0, r.jsx)(o.Heading, {
        color: 'always-white',
        variant: null != _ ? _ : 'heading-md/medium',
        className: a()(d.pricePerInterval, i),
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('span', {
                    className: p ? void 0 : d.price,
                    children: g
                }),
                ' / ',
                (0, u.eP)(n)
            ]
        })
    });
};
