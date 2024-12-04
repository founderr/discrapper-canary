n.d(t, {
    q: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    s = n.n(l),
    r = n(481060),
    a = n(140465),
    o = n(639119),
    C = n(55610),
    d = n(973007),
    u = n(74538),
    c = n(987209),
    p = n(563132),
    x = n(409813),
    h = n(614223),
    f = n(48175),
    _ = n(474936),
    j = n(388032),
    L = n(82227);
function m(e) {
    let { handleStepChange: t, handleClose: n, referralTrialOfferId: l } = e,
        { setSelectedSkuId: s, activeSubscription: r, startedPaymentFlowWithPaymentSourcesRef: C, setSelectedPlanId: d, priceOptions: j } = (0, p.usePaymentContext)(),
        { isGift: L, claimableRewards: m } = (0, c.wD)(),
        E = L && null != m && m.length > 0,
        S = (0, o.N)(l),
        y = (0, a.Nx)();
    return (0, i.jsx)(g, {
        selectSku: (e) =>
            (function (e) {
                let { activeSubscription: t, newSkuId: n, setSelectedSkuId: i, handleStepChange: l, isGift: s, userTrialOffer: r, setSelectedPlanId: a, startedPaymentFlowWithPaymentSources: o } = e;
                i(n);
                let C = x.h8.PLAN_SELECT,
                    d = (0, u.k5)(t);
                (d === _.Si.TIER_1 || d === _.Si.TIER_2) && n === _.Si.TIER_0 && !s && (C = x.h8.WHAT_YOU_LOSE);
                let c = (0, f.T)({
                        userTrialOffer: r,
                        isGift: s,
                        skuId: n
                    }),
                    p = (0, h.Kp)({
                        isTrial: c,
                        isGift: s,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: o
                    });
                C !== x.h8.WHAT_YOU_LOSE && p && ((C = x.h8.REVIEW), a((0, h.nA)(n, t))), l(C, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: r,
                newSkuId: e,
                setSelectedSkuId: s,
                handleStepChange: t,
                isGift: L,
                userTrialOffer: S,
                startedPaymentFlowWithPaymentSources: C.current,
                setSelectedPlanId: d
            }),
        onClose: n,
        isGift: L,
        inOfferExperience: y,
        priceOptions: j,
        showPromotionalGiftBanner: E
    });
}
function g(e) {
    let { selectSku: t, onClose: n, isGift: l, inOfferExperience: a, priceOptions: o, showPromotionalGiftBanner: c } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(r.ModalHeader, {
                className: L.skuSelectModalHeader,
                separator: !1,
                children: [
                    (0, i.jsx)(r.FormTitle, {
                        tag: r.FormTitleTags.H4,
                        children: j.intl.string(j.t['r+SebW'])
                    }),
                    (0, i.jsx)(r.ModalCloseButton, { onClick: n })
                ]
            }),
            (0, i.jsxs)(r.ModalContent, {
                className: s()(L.skuSelectModalContent, { [L.modalPadding]: a }),
                children: [
                    (0, i.jsx)(C.Z, {
                        fromBoostCancelModal: !1,
                        className: L.legacyPricingNotice
                    }),
                    (0, i.jsx)(d.Z, {
                        onSelectSku: (e) => t((0, u.Wz)(e)),
                        isGift: l,
                        priceOptions: o,
                        showPromotionalGiftBanner: c
                    })
                ]
            })
        ]
    });
}
