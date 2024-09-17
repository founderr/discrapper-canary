var r = t(735250);
t(470079);
var a = t(481060),
    i = t(823188),
    s = t(474936),
    o = t(377628);
function l(e) {
    let { onClick: n, isGift: t, priceOptions: s, showHalloweenGift: l } = e;
    return (0, r.jsx)(a.Clickable, {
        onClick: n,
        style: { cursor: 'pointer' },
        children: (0, r.jsx)(i.wp, {
            className: o.tier2MarketingCard,
            ctaButton: null,
            showWumpus: !l,
            showHalloweenGift: l,
            showYearlyPrice: !0,
            isGift: t,
            isModal: !0,
            priceOptions: s
        })
    });
}
function C(e) {
    let { onClick: n, isGift: t, priceOptions: s } = e;
    return (0, r.jsx)(a.Clickable, {
        onClick: n,
        style: { cursor: 'pointer' },
        children: (0, r.jsx)(i.Gq, {
            className: o.tier0MarketingCard,
            ctaButton: null,
            showWumpus: !0,
            showYearlyPrice: !0,
            isGift: t,
            priceOptions: s
        })
    });
}
n.Z = function (e) {
    let { onSelectSku: n, isGift: t, priceOptions: a, shouldShowHalloweenTier2Card: i } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l, {
                onClick: () => n(s.Si.TIER_2),
                isGift: t,
                priceOptions: a,
                showHalloweenGift: i
            }),
            (0, r.jsx)(C, {
                onClick: () => n(s.Si.TIER_0),
                isGift: t,
                priceOptions: a
            })
        ]
    });
};
