n.d(s, {
    q: function () {
        return M;
    }
});
var t = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    C = n(481060),
    r = n(140465),
    a = n(857039),
    o = n(639119),
    _ = n(55610),
    d = n(973007),
    u = n(74538),
    c = n(987209),
    p = n(598),
    x = n(409813),
    L = n(614223),
    I = n(48175),
    E = n(474936),
    h = n(689938),
    f = n(885032);
function M(e) {
    let { handleStepChange: s, handleClose: n, referralTrialOfferId: l } = e,
        { setSelectedSkuId: i, activeSubscription: C, startedPaymentFlowWithPaymentSourcesRef: _, setSelectedPlanId: d, priceOptions: h } = (0, p.usePaymentContext)(),
        { isGift: f } = (0, c.wD)(),
        M = (0, a.Z)({ location: 'Payment SKU Selection' }),
        N = (0, o.N)(l),
        j = (0, r.Nx)();
    return (0, t.jsx)(T, {
        selectSku: (e) =>
            (function (e) {
                let { activeSubscription: s, newSkuId: n, setSelectedSkuId: t, handleStepChange: l, isGift: i, userTrialOffer: C, setSelectedPlanId: r, startedPaymentFlowWithPaymentSources: a } = e;
                t(n);
                let o = x.h8.PLAN_SELECT,
                    _ = (0, u.k5)(s);
                (_ === E.Si.TIER_1 || _ === E.Si.TIER_2) && n === E.Si.TIER_0 && !i && (o = x.h8.WHAT_YOU_LOSE);
                let d = (0, I.T)({
                        userTrialOffer: C,
                        isGift: i,
                        skuId: n
                    }),
                    c = (0, L.Kp)({
                        isTrial: d,
                        isGift: i,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: a
                    });
                o !== x.h8.WHAT_YOU_LOSE && c && ((o = x.h8.REVIEW), r((0, L.nA)(n, s))), l(o, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: C,
                newSkuId: e,
                setSelectedSkuId: i,
                handleStepChange: s,
                isGift: f,
                userTrialOffer: N,
                startedPaymentFlowWithPaymentSources: _.current,
                setSelectedPlanId: d
            }),
        onClose: n,
        isGift: f,
        inOfferExperience: j,
        priceOptions: h,
        shouldShowHalloweenTier2Card: M
    });
}
function T(e) {
    let { selectSku: s, onClose: n, isGift: l, inOfferExperience: r, priceOptions: a, shouldShowHalloweenTier2Card: o } = e;
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(C.ModalHeader, {
                className: f.skuSelectModalHeader,
                separator: !1,
                children: [
                    (0, t.jsx)(C.FormTitle, {
                        tag: C.FormTitleTags.H4,
                        children: h.Z.Messages.BILLING_STEP_SELECT_PLAN
                    }),
                    (0, t.jsx)(C.ModalCloseButton, { onClick: n })
                ]
            }),
            (0, t.jsxs)(C.ModalContent, {
                className: i()(f.skuSelectModalContent, { [f.modalPadding]: r }),
                children: [
                    (0, t.jsx)(_.Z, {
                        fromBoostCancelModal: !1,
                        className: f.legacyPricingNotice
                    }),
                    (0, t.jsx)(d.Z, {
                        onSelectSku: (e) => s((0, u.Wz)(e)),
                        isGift: l,
                        priceOptions: a,
                        shouldShowHalloweenTier2Card: o
                    })
                ]
            })
        ]
    });
}
