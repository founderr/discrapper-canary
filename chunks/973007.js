var i = n(200651);
n(192379);
var l = n(481060),
    s = n(823188),
    r = n(474936),
    C = n(101098);
function a(e) {
    let { onClick: t, isGift: n, priceOptions: r, showHalloweenGift: a } = e;
    return (0, i.jsx)(l.Clickable, {
        onClick: t,
        style: { cursor: 'pointer' },
        children: (0, i.jsx)(s.wp, {
            className: C.tier2MarketingCard,
            ctaButton: null,
            showWumpus: !a,
            showHalloweenGift: a,
            showYearlyPrice: !0,
            isGift: n,
            isModal: !0,
            priceOptions: r
        })
    });
}
function o(e) {
    let { onClick: t, isGift: n, priceOptions: r } = e;
    return (0, i.jsx)(l.Clickable, {
        onClick: t,
        style: { cursor: 'pointer' },
        children: (0, i.jsx)(s.Gq, {
            className: C.tier0MarketingCard,
            ctaButton: null,
            showWumpus: !0,
            showYearlyPrice: !0,
            isGift: n,
            priceOptions: r
        })
    });
}
t.Z = function (e) {
    let { onSelectSku: t, isGift: n, priceOptions: l, shouldShowHalloweenTier2Card: s } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a, {
                onClick: () => t(r.Si.TIER_2),
                isGift: n,
                priceOptions: l,
                showHalloweenGift: s
            }),
            (0, i.jsx)(o, {
                onClick: () => t(r.Si.TIER_0),
                isGift: n,
                priceOptions: l
            })
        ]
    });
};
