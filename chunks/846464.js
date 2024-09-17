t.d(n, {
    q: function () {
        return E;
    }
});
var r = t(735250);
t(470079);
var a = t(120356),
    i = t.n(a),
    s = t(481060),
    o = t(140465),
    l = t(857039),
    C = t(639119),
    d = t(55610),
    c = t(973007),
    u = t(74538),
    _ = t(987209),
    p = t(598),
    f = t(409813),
    h = t(614223),
    x = t(48175),
    L = t(474936),
    I = t(689938),
    g = t(885032);
function E(e) {
    let { handleStepChange: n, handleClose: t, referralTrialOfferId: a } = e,
        { setSelectedSkuId: i, activeSubscription: s, startedPaymentFlowWithPaymentSourcesRef: d, setSelectedPlanId: c, priceOptions: I } = (0, p.usePaymentContext)(),
        { isGift: g } = (0, _.wD)(),
        E = (0, l.Z)({ location: 'Payment SKU Selection' }),
        M = (0, C.N)(a),
        T = (0, o.Nx)();
    return (0, r.jsx)(m, {
        selectSku: (e) =>
            (function (e) {
                let { activeSubscription: n, newSkuId: t, setSelectedSkuId: r, handleStepChange: a, isGift: i, userTrialOffer: s, setSelectedPlanId: o, startedPaymentFlowWithPaymentSources: l } = e;
                r(t);
                let C = f.h8.PLAN_SELECT,
                    d = (0, u.k5)(n);
                (d === L.Si.TIER_1 || d === L.Si.TIER_2) && t === L.Si.TIER_0 && !i && (C = f.h8.WHAT_YOU_LOSE);
                let c = (0, x.T)({
                        userTrialOffer: s,
                        isGift: i,
                        skuId: t
                    }),
                    _ = (0, h.Kp)({
                        isTrial: c,
                        isGift: i,
                        selectedSkuId: t,
                        startedPaymentFlowWithPaymentSources: l
                    });
                C !== f.h8.WHAT_YOU_LOSE && _ && ((C = f.h8.REVIEW), o((0, h.nA)(t, n))), a(C, { analyticsDataOverride: { sku_id: t } });
            })({
                activeSubscription: s,
                newSkuId: e,
                setSelectedSkuId: i,
                handleStepChange: n,
                isGift: g,
                userTrialOffer: M,
                startedPaymentFlowWithPaymentSources: d.current,
                setSelectedPlanId: c
            }),
        onClose: t,
        isGift: g,
        inOfferExperience: T,
        priceOptions: I,
        shouldShowHalloweenTier2Card: E
    });
}
function m(e) {
    let { selectSku: n, onClose: t, isGift: a, inOfferExperience: o, priceOptions: l, shouldShowHalloweenTier2Card: C } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(s.ModalHeader, {
                className: g.skuSelectModalHeader,
                separator: !1,
                children: [
                    (0, r.jsx)(s.FormTitle, {
                        tag: s.FormTitleTags.H4,
                        children: I.Z.Messages.BILLING_STEP_SELECT_PLAN
                    }),
                    (0, r.jsx)(s.ModalCloseButton, { onClick: t })
                ]
            }),
            (0, r.jsxs)(s.ModalContent, {
                className: i()(g.skuSelectModalContent, { [g.modalPadding]: o }),
                children: [
                    (0, r.jsx)(d.Z, {
                        fromBoostCancelModal: !1,
                        className: g.legacyPricingNotice
                    }),
                    (0, r.jsx)(c.Z, {
                        onSelectSku: (e) => n((0, u.Wz)(e)),
                        isGift: a,
                        priceOptions: l,
                        shouldShowHalloweenTier2Card: C
                    })
                ]
            })
        ]
    });
}
