n.r(t),
    n.d(t, {
        PremiumPaymentModal: function () {
            return v;
        },
        STEPS: function () {
            return k;
        },
        default: function () {
            return b;
        }
    }),
    n(411104),
    n(47120);
var i = n(200651),
    l = n(192379),
    s = n(442837),
    r = n(570140),
    C = n(821849),
    a = n(100527),
    o = n(906732),
    d = n(509545),
    u = n(78839),
    c = n(669079),
    p = n(987209),
    x = n(563132),
    h = n(409813),
    _ = n(791785),
    f = n(276442),
    j = n(793541),
    L = n(380898),
    m = n(710094),
    g = n(293858),
    E = n(614223),
    S = n(174827),
    y = n(846464),
    M = n(184160),
    Z = n(48175),
    P = n(981631),
    T = n(474936),
    I = n(388032);
let U = [h.h8.PLAN_SELECT, h.h8.ADD_PAYMENT_STEPS, h.h8.REVIEW, h.h8.CONFIRM];
function v(e) {
    let { analyticsLocation: t, analyticsObject: n, analyticsSourceLocation: s, onComplete: a, transitionState: u, initialPlanId: f, subscriptionTier: j, onClose: L, trialId: m, trialFooterMessageOverride: g, reviewWarningMessage: E, openInvoiceId: S, onSubscriptionConfirmation: y, renderPurchaseConfirmation: M, postSuccessGuild: Z, followupSKUInfo: I, renderHeader: U, applicationId: v, guildId: A, referralTrialOfferId: N, skuId: k, returnRef: b, skipConfirm: w = !1, continueSession: H = !1 } = e,
        { analyticsLocations: O } = (0, o.ZP)();
    l.useEffect(() => {
        !d.Z.isLoadedForPremiumSKUs() && r.Z.wait(() => (0, C.Y2)());
    }, []);
    let { step: R } = (0, x.usePaymentContext)(),
        { isGift: B, giftMessage: F, giftRecipient: G } = (0, p.wD)(),
        W = B && (0, c.pO)(G) && R === h.h8.PLAN_SELECT;
    return (0, i.jsx)(_.PaymentModal, {
        analyticsLocations: O,
        analyticsLocation: t,
        analyticsObject: n,
        analyticsSourceLocation: s,
        analyticsSubscriptionType: P.NYc.PREMIUM,
        onComplete: a,
        transitionState: u,
        initialPlanId: f,
        giftMessage: F,
        subscriptionTier: j,
        onClose: L,
        trialId: m,
        isGift: B,
        trialFooterMessageOverride: g,
        reviewWarningMessage: E,
        planGroup: T.Y1,
        openInvoiceId: S,
        onSubscriptionConfirmation: y,
        renderPurchaseConfirmation: M,
        postSuccessGuild: Z,
        followupSKUInfo: I,
        renderHeader: U,
        applicationId: v,
        guildId: A,
        referralTrialOfferId: N,
        skuId: k,
        shakeWhilePurchasing: !0,
        isLargeModal: W,
        returnRef: b,
        skipConfirm: w,
        continueSession: H
    });
}
function A(e) {
    let { startedPaymentFlowWithPaymentSourcesRef: t, selectedSkuId: n } = (0, x.usePaymentContext)(),
        { isGift: i } = (0, p.wD)();
    return (0, E.Kp)({
        isTrial: null != e && e,
        isGift: i,
        selectedSkuId: n,
        startedPaymentFlowWithPaymentSources: t.current
    });
}
function N(e) {
    let { initialPlanId: t, handleStepChange: n, referralTrialOfferId: l } = e,
        { paymentSources: s, selectedSkuId: r } = (0, x.usePaymentContext)(),
        { isGift: C } = (0, p.wD)(),
        a = A(
            (0, Z.Z)({
                isGift: C,
                skuId: r,
                referralTrialOfferId: l
            })
        );
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(f.J, {
            ...e,
            breadcrumbSteps: U,
            onReturn: () => {
                let e = Object.values(s).length < 1 && null == t ? h.h8.PLAN_SELECT : h.h8.REVIEW;
                a && (e = h.h8.REVIEW), n(e, { trackedFromStep: h.h8.PAYMENT_TYPE });
            }
        })
    });
}
let k = [
    {
        key: null,
        renderStep: (e) => (0, i.jsx)(_.PaymentPredicateStep, { ...e })
    },
    {
        key: h.h8.SKU_SELECT,
        renderStep: (e) => (0, i.jsx)(y.q, { ...e }),
        options: {
            renderHeader: !1,
            hideSlider: !0
        }
    },
    {
        key: h.h8.WHAT_YOU_LOSE,
        renderStep: (e) => (0, i.jsx)(M.x, { ...e }),
        options: {
            renderHeader: !1,
            hideSlider: !0
        }
    },
    {
        key: h.h8.PLAN_SELECT,
        renderStep: (e) => (0, i.jsx)(S.x, { ...e }),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (A(e) ? null : I.intl.string(I.t['r+SebW']))
        }
    },
    {
        key: h.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(N, { ...e }) }),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (A(e) ? null : I.intl.string(I.t.Sb6wIy))
        }
    },
    {
        key: h.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, i.jsx)(L.Z, {})
    },
    {
        key: h.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, i.jsx)(j.Z, {})
    },
    {
        key: h.h8.REVIEW,
        renderStep: (e) => (0, i.jsx)(m.l, { ...e }),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (A(e) ? I.intl.string(I.t.UKbp1N) : I.intl.string(I.t.QBnNHh))
        }
    },
    {
        key: h.h8.CONFIRM,
        renderStep: (e) => (0, i.jsx)(g.b, { ...e })
    }
];
function b(e) {
    let t = (0, s.e7)([u.ZP], () => u.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: n } = (0, o.ZP)(e.analyticsLocations, a.Z.PREMIUM_PAYMENT_MODAL),
        { subscriptionTier: l, isGift: r, giftRecipient: C, giftMessage: d, giftStyle: c, loadId: h, defaultPlanId: _, referralCode: f, repeatPurchase: j } = e;
    if (null != l && !Object.values(T.Si).includes(l)) throw Error('subscriptionTier must be a premium subscription');
    return (0, i.jsx)(o.Gt, {
        value: n,
        children: (0, i.jsx)(x.PaymentContextProvider, {
            loadId: h,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: k,
            skuIDs: [...T.YQ],
            isGift: r,
            defaultPlanId: _,
            referralCode: f,
            repeatPurchase: j,
            children: (0, i.jsx)(p.KB, {
                isGift: r,
                giftRecipient: null == C ? void 0 : C,
                giftMessage: d,
                giftStyle: c,
                children: (0, i.jsx)(v, { ...e })
            })
        })
    });
}
