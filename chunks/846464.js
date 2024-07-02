t.d(n, {
    q: function () {
        return m;
    }
});
var i = t(735250);
t(470079);
var r = t(120356), o = t.n(r), a = t(481060), s = t(140465), l = t(639119), d = t(55610), c = t(973007), C = t(74538), u = t(987209), _ = t(598), p = t(409813), f = t(614223), x = t(48175), h = t(474936), b = t(689938), g = t(745102);
function m(e) {
    let {
            handleStepChange: n,
            handleClose: t,
            referralTrialOfferId: r
        } = e, {
            setSelectedSkuId: o,
            activeSubscription: a,
            startedPaymentFlowWithPaymentSourcesRef: d,
            setSelectedPlanId: c,
            priceOptions: b
        } = (0, _.usePaymentContext)(), {isGift: g} = (0, u.wD)(), m = (0, l.N)(r), L = (0, s.Nx)();
    return (0, i.jsx)(I, {
        selectSku: e => function (e) {
            let {
                activeSubscription: n,
                newSkuId: t,
                setSelectedSkuId: i,
                handleStepChange: r,
                isGift: o,
                userTrialOffer: a,
                setSelectedPlanId: s,
                startedPaymentFlowWithPaymentSources: l
            } = e;
            i(t);
            let d = p.h8.PLAN_SELECT, c = (0, C.k5)(n);
            (c === h.Si.TIER_1 || c === h.Si.TIER_2) && t === h.Si.TIER_0 && !o && (d = p.h8.WHAT_YOU_LOSE);
            let u = (0, x.T)({
                    userTrialOffer: a,
                    isGift: o,
                    skuId: t
                }), _ = (0, f.Kp)({
                    isTrial: u,
                    isGift: o,
                    selectedSkuId: t,
                    startedPaymentFlowWithPaymentSources: l
                });
            d !== p.h8.WHAT_YOU_LOSE && _ && (d = p.h8.REVIEW, s((0, f.nA)(t, n))), r(d, { analyticsDataOverride: { sku_id: t } });
        }({
            activeSubscription: a,
            newSkuId: e,
            setSelectedSkuId: o,
            handleStepChange: n,
            isGift: g,
            userTrialOffer: m,
            startedPaymentFlowWithPaymentSources: d.current,
            setSelectedPlanId: c
        }),
        onClose: t,
        isGift: g,
        inOfferExperience: L,
        priceOptions: b
    });
}
function I(e) {
    let {
        selectSku: n,
        onClose: t,
        isGift: r,
        inOfferExperience: s,
        priceOptions: l
    } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(a.ModalHeader, {
                className: g.skuSelectModalHeader,
                separator: !1,
                children: [
                    (0, i.jsx)(a.FormTitle, {
                        tag: a.FormTitleTags.H4,
                        children: b.Z.Messages.BILLING_STEP_SELECT_PLAN
                    }),
                    (0, i.jsx)(a.ModalCloseButton, { onClick: t })
                ]
            }),
            (0, i.jsxs)(a.ModalContent, {
                className: o()(g.skuSelectModalContent, { [g.modalPadding]: s }),
                children: [
                    (0, i.jsx)(d.Z, {
                        fromBoostCancelModal: !1,
                        className: g.legacyPricingNotice
                    }),
                    (0, i.jsx)(c.Z, {
                        onSelectSku: e => n((0, C.Wz)(e)),
                        isGift: r,
                        priceOptions: l
                    })
                ]
            })
        ]
    });
}
