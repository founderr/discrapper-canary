t.r(n),
    t.d(n, {
        PremiumPaymentModal: function () {
            return P;
        },
        STEPS: function () {
            return y;
        },
        default: function () {
            return Z;
        }
    }),
    t(411104),
    t(47120);
var r = t(735250),
    a = t(470079),
    i = t(442837),
    s = t(570140),
    o = t(821849),
    l = t(100527),
    C = t(906732),
    d = t(509545),
    c = t(78839),
    u = t(669079),
    _ = t(987209),
    p = t(598),
    f = t(409813),
    h = t(791785),
    x = t(276442),
    L = t(793541),
    I = t(380898),
    g = t(710094),
    E = t(293858),
    m = t(614223),
    M = t(174827),
    T = t(846464),
    N = t(184160),
    b = t(48175),
    j = t(981631),
    S = t(474936),
    A = t(689938);
let R = [f.h8.PLAN_SELECT, f.h8.ADD_PAYMENT_STEPS, f.h8.REVIEW, f.h8.CONFIRM];
function P(e) {
    let { analyticsLocation: n, analyticsObject: t, analyticsSourceLocation: i, onComplete: l, transitionState: c, initialPlanId: x, subscriptionTier: L, onClose: I, trialId: g, trialFooterMessageOverride: E, reviewWarningMessage: m, openInvoiceId: M, onSubscriptionConfirmation: T, renderPurchaseConfirmation: N, postSuccessGuild: b, followupSKUInfo: A, renderHeader: R, applicationId: P, guildId: O, referralTrialOfferId: v, skuId: y, returnRef: Z, skipConfirm: B = !1, continueSession: U = !1 } = e,
        { analyticsLocations: k } = (0, C.ZP)();
    a.useEffect(() => {
        !d.Z.isLoadedForPremiumSKUs() && s.Z.wait(() => (0, o.Y2)());
    }, []);
    let { step: H } = (0, p.usePaymentContext)(),
        { isGift: F, giftMessage: G, giftRecipient: w } = (0, _.wD)(),
        W = F && (0, u.pO)(w) && H === f.h8.PLAN_SELECT;
    return (0, r.jsx)(h.PaymentModal, {
        analyticsLocations: k,
        analyticsLocation: n,
        analyticsObject: t,
        analyticsSourceLocation: i,
        analyticsSubscriptionType: j.NYc.PREMIUM,
        onComplete: l,
        transitionState: c,
        initialPlanId: x,
        giftMessage: G,
        subscriptionTier: L,
        onClose: I,
        trialId: g,
        isGift: F,
        trialFooterMessageOverride: E,
        reviewWarningMessage: m,
        planGroup: S.Y1,
        openInvoiceId: M,
        onSubscriptionConfirmation: T,
        renderPurchaseConfirmation: N,
        postSuccessGuild: b,
        followupSKUInfo: A,
        renderHeader: R,
        applicationId: P,
        guildId: O,
        referralTrialOfferId: v,
        skuId: y,
        shakeWhilePurchasing: !0,
        isLargeModal: W,
        returnRef: Z,
        skipConfirm: B,
        continueSession: U
    });
}
function O(e) {
    let { startedPaymentFlowWithPaymentSourcesRef: n, selectedSkuId: t } = (0, p.usePaymentContext)(),
        { isGift: r } = (0, _.wD)();
    return (0, m.Kp)({
        isTrial: null != e && e,
        isGift: r,
        selectedSkuId: t,
        startedPaymentFlowWithPaymentSources: n.current
    });
}
function v(e) {
    let { initialPlanId: n, handleStepChange: t, referralTrialOfferId: a } = e,
        { paymentSources: i, selectedSkuId: s } = (0, p.usePaymentContext)(),
        { isGift: o } = (0, _.wD)(),
        l = O(
            (0, b.Z)({
                isGift: o,
                skuId: s,
                referralTrialOfferId: a
            })
        );
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(x.J, {
            ...e,
            breadcrumbSteps: R,
            onReturn: () => {
                let e = Object.values(i).length < 1 && null == n ? f.h8.PLAN_SELECT : f.h8.REVIEW;
                l && (e = f.h8.REVIEW), t(e, { trackedFromStep: f.h8.PAYMENT_TYPE });
            }
        })
    });
}
let y = [
    {
        key: null,
        renderStep: (e) => (0, r.jsx)(h.PaymentPredicateStep, { ...e })
    },
    {
        key: f.h8.SKU_SELECT,
        renderStep: (e) => (0, r.jsx)(T.q, { ...e }),
        options: {
            renderHeader: !1,
            hideSlider: !0
        }
    },
    {
        key: f.h8.WHAT_YOU_LOSE,
        renderStep: (e) => (0, r.jsx)(N.x, { ...e }),
        options: {
            renderHeader: !1,
            hideSlider: !0
        }
    },
    {
        key: f.h8.PLAN_SELECT,
        renderStep: (e) => (0, r.jsx)(M.x, { ...e }),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (O(e) ? null : A.Z.Messages.BILLING_STEP_SELECT_PLAN)
        }
    },
    {
        key: f.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, r.jsx)(r.Fragment, { children: (0, r.jsx)(v, { ...e }) }),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (O(e) ? null : A.Z.Messages.BILLING_STEP_PAYMENT)
        }
    },
    {
        key: f.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, r.jsx)(I.Z, {})
    },
    {
        key: f.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, r.jsx)(L.Z, {})
    },
    {
        key: f.h8.REVIEW,
        renderStep: (e) => (0, r.jsx)(g.l, { ...e }),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (O(e) ? A.Z.Messages.BILLING_STEP_PLAN_AND_PAYMENT : A.Z.Messages.BILLING_STEP_REVIEW)
        }
    },
    {
        key: f.h8.CONFIRM,
        renderStep: (e) => (0, r.jsx)(E.b, { ...e })
    }
];
function Z(e) {
    let n = (0, i.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: t } = (0, C.ZP)(e.analyticsLocations, l.Z.PREMIUM_PAYMENT_MODAL),
        { subscriptionTier: a, isGift: s, giftRecipient: o, giftMessage: d, giftStyle: u, loadId: f, defaultPlanId: h, referralCode: x, repeatPurchase: L } = e;
    if (null != a && !Object.values(S.Si).includes(a)) throw Error('subscriptionTier must be a premium subscription');
    return (0, r.jsx)(C.Gt, {
        value: t,
        children: (0, r.jsx)(p.PaymentContextProvider, {
            loadId: f,
            activeSubscription: null != e.subscription ? e.subscription : n,
            stepConfigs: y,
            skuIDs: [...S.YQ],
            isGift: s,
            defaultPlanId: h,
            referralCode: x,
            repeatPurchase: L,
            children: (0, r.jsx)(_.KB, {
                isGift: s,
                giftRecipient: null == o ? void 0 : o,
                giftMessage: d,
                giftStyle: u,
                children: (0, r.jsx)(P, { ...e })
            })
        })
    });
}
