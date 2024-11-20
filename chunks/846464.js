n.d(t, {
    q: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    s = n.n(l),
    r = n(481060),
    C = n(140465),
    a = n(857039),
    o = n(639119),
    d = n(55610),
    u = n(973007),
    c = n(74538),
    p = n(987209),
    x = n(563132),
    _ = n(409813),
    h = n(614223),
    f = n(48175),
    j = n(474936),
    L = n(388032),
    m = n(885032);
function g(e) {
    let { handleStepChange: t, handleClose: n, referralTrialOfferId: l } = e,
        { setSelectedSkuId: s, activeSubscription: r, startedPaymentFlowWithPaymentSourcesRef: d, setSelectedPlanId: u, priceOptions: L } = (0, x.usePaymentContext)(),
        { isGift: m } = (0, p.wD)(),
        g = (0, a.Z)({ location: 'Payment SKU Selection' }),
        S = (0, o.N)(l),
        y = (0, C.Nx)();
    return (0, i.jsx)(E, {
        selectSku: (e) =>
            (function (e) {
                let { activeSubscription: t, newSkuId: n, setSelectedSkuId: i, handleStepChange: l, isGift: s, userTrialOffer: r, setSelectedPlanId: C, startedPaymentFlowWithPaymentSources: a } = e;
                i(n);
                let o = _.h8.PLAN_SELECT,
                    d = (0, c.k5)(t);
                (d === j.Si.TIER_1 || d === j.Si.TIER_2) && n === j.Si.TIER_0 && !s && (o = _.h8.WHAT_YOU_LOSE);
                let u = (0, f.T)({
                        userTrialOffer: r,
                        isGift: s,
                        skuId: n
                    }),
                    p = (0, h.Kp)({
                        isTrial: u,
                        isGift: s,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: a
                    });
                o !== _.h8.WHAT_YOU_LOSE && p && ((o = _.h8.REVIEW), C((0, h.nA)(n, t))), l(o, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: r,
                newSkuId: e,
                setSelectedSkuId: s,
                handleStepChange: t,
                isGift: m,
                userTrialOffer: S,
                startedPaymentFlowWithPaymentSources: d.current,
                setSelectedPlanId: u
            }),
        onClose: n,
        isGift: m,
        inOfferExperience: y,
        priceOptions: L,
        shouldShowHalloweenTier2Card: g
    });
}
function E(e) {
    let { selectSku: t, onClose: n, isGift: l, inOfferExperience: C, priceOptions: a, shouldShowHalloweenTier2Card: o } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(r.ModalHeader, {
                className: m.skuSelectModalHeader,
                separator: !1,
                children: [
                    (0, i.jsx)(r.FormTitle, {
                        tag: r.FormTitleTags.H4,
                        children: L.intl.string(L.t['r+SebW'])
                    }),
                    (0, i.jsx)(r.ModalCloseButton, { onClick: n })
                ]
            }),
            (0, i.jsxs)(r.ModalContent, {
                className: s()(m.skuSelectModalContent, { [m.modalPadding]: C }),
                children: [
                    (0, i.jsx)(d.Z, {
                        fromBoostCancelModal: !1,
                        className: m.legacyPricingNotice
                    }),
                    (0, i.jsx)(u.Z, {
                        onSelectSku: (e) => t((0, c.Wz)(e)),
                        isGift: l,
                        priceOptions: a,
                        shouldShowHalloweenTier2Card: o
                    })
                ]
            })
        ]
    });
}
