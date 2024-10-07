var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    l = n(509545),
    u = n(74538),
    c = n(474936),
    d = n(716002);
t.Z = function (e) {
    let { subscriptionTier: t, interval: n = c.rV.MONTH, className: i, isGift: _ = !1, variant: E, priceOptions: f, shouldUseTaglineXPCopy: h } = e;
    if (!(0, s.e7)([l.Z], () => l.Z.isLoadedForPremiumSKUs()))
        return (0, r.jsx)(o.Spinner, {
            type: o.Spinner.Type.PULSING_ELLIPSIS,
            className: d.priceSpinner
        });
    let p = l.Z.getForSkuAndInterval((0, u.Wz)(t), n),
        I = null != p ? (0, u.gy)(p, f, !1, _) : null;
    return (0, r.jsx)(o.Heading, {
        color: 'always-white',
        variant: null != E ? E : 'heading-md/medium',
        className: a()(d.pricePerInterval, i),
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('span', {
                    className: h ? void 0 : d.price,
                    children: I
                }),
                ' / ',
                (0, u.eP)(n)
            ]
        })
    });
};
