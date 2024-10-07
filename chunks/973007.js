var t = n(735250);
n(470079);
var r = n(481060),
    i = n(184508),
    l = n(823188),
    a = n(474936),
    o = n(377628);
function C(e) {
    let { onClick: s, isGift: n, priceOptions: i, showHalloweenGift: a, shouldUseTaglineXPCopy: C } = e;
    return (0, t.jsx)(r.Clickable, {
        onClick: s,
        style: { cursor: 'pointer' },
        children: (0, t.jsx)(l.wp, {
            className: o.tier2MarketingCard,
            ctaButton: null,
            showWumpus: !a && !C,
            showHalloweenGift: a,
            showYearlyPrice: !0,
            isGift: n,
            isModal: !0,
            priceOptions: i,
            shouldUseTaglineXPCopy: C
        })
    });
}
function d(e) {
    let { onClick: s, isGift: n, priceOptions: i, shouldUseTaglineXPCopy: a } = e;
    return (0, t.jsx)(r.Clickable, {
        onClick: s,
        style: { cursor: 'pointer' },
        children: (0, t.jsx)(l.Gq, {
            className: o.tier0MarketingCard,
            ctaButton: null,
            showWumpus: !a,
            showYearlyPrice: !0,
            isGift: n,
            priceOptions: i,
            shouldUseTaglineXPCopy: a
        })
    });
}
s.Z = function (e) {
    let { onSelectSku: s, isGift: n, priceOptions: r, shouldShowHalloweenTier2Card: l } = e,
        o = (0, i.tY)('PremiumMarketingHome');
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(C, {
                onClick: () => s(a.Si.TIER_2),
                isGift: n,
                priceOptions: r,
                showHalloweenGift: l,
                shouldUseTaglineXPCopy: o
            }),
            (0, t.jsx)(d, {
                onClick: () => s(a.Si.TIER_0),
                isGift: n,
                priceOptions: r,
                shouldUseTaglineXPCopy: o
            })
        ]
    });
};
