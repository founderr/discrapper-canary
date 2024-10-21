var t = n(200651);
n(192379);
var l = n(481060),
    i = n(184508),
    C = n(823188),
    r = n(474936),
    a = n(377628);
function o(e) {
    let { onClick: s, isGift: n, priceOptions: i, showHalloweenGift: r, shouldUseTaglineXPCopy: o } = e;
    return (0, t.jsx)(l.Clickable, {
        onClick: s,
        style: { cursor: 'pointer' },
        children: (0, t.jsx)(C.wp, {
            className: a.tier2MarketingCard,
            ctaButton: null,
            showWumpus: !r && !o,
            showHalloweenGift: r,
            showYearlyPrice: !0,
            isGift: n,
            isModal: !0,
            priceOptions: i,
            shouldUseTaglineXPCopy: o
        })
    });
}
function _(e) {
    let { onClick: s, isGift: n, priceOptions: i, shouldUseTaglineXPCopy: r } = e;
    return (0, t.jsx)(l.Clickable, {
        onClick: s,
        style: { cursor: 'pointer' },
        children: (0, t.jsx)(C.Gq, {
            className: a.tier0MarketingCard,
            ctaButton: null,
            showWumpus: !r,
            showYearlyPrice: !0,
            isGift: n,
            priceOptions: i,
            shouldUseTaglineXPCopy: r
        })
    });
}
s.Z = function (e) {
    let { onSelectSku: s, isGift: n, priceOptions: l, shouldShowHalloweenTier2Card: C } = e,
        a = (0, i.tY)('PremiumMarketingHome');
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(o, {
                onClick: () => s(r.Si.TIER_2),
                isGift: n,
                priceOptions: l,
                showHalloweenGift: C,
                shouldUseTaglineXPCopy: a
            }),
            (0, t.jsx)(_, {
                onClick: () => s(r.Si.TIER_0),
                isGift: n,
                priceOptions: l,
                shouldUseTaglineXPCopy: a
            })
        ]
    });
};
