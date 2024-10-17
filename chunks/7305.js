n.r(s),
    n.d(s, {
        PremiumPaymentModal: function () {
            return O;
        },
        STEPS: function () {
            return U;
        },
        default: function () {
            return H;
        }
    }),
    n(411104),
    n(47120);
var t = n(735250),
    l = n(470079),
    i = n(442837),
    C = n(570140),
    r = n(821849),
    a = n(100527),
    o = n(906732),
    _ = n(509545),
    d = n(78839),
    u = n(669079),
    c = n(987209),
    p = n(598),
    x = n(409813),
    L = n(791785),
    I = n(276442),
    E = n(793541),
    h = n(380898),
    f = n(710094),
    M = n(293858),
    T = n(614223),
    N = n(174827),
    j = n(846464),
    A = n(184160),
    S = n(48175),
    g = n(981631),
    P = n(474936),
    R = n(689938);
let m = [x.h8.PLAN_SELECT, x.h8.ADD_PAYMENT_STEPS, x.h8.REVIEW, x.h8.CONFIRM];
function O(e) {
    let { analyticsLocation: s, analyticsObject: n, analyticsSourceLocation: i, onComplete: a, transitionState: d, initialPlanId: I, subscriptionTier: E, onClose: h, trialId: f, trialFooterMessageOverride: M, reviewWarningMessage: T, openInvoiceId: N, onSubscriptionConfirmation: j, renderPurchaseConfirmation: A, postSuccessGuild: S, followupSKUInfo: R, renderHeader: m, applicationId: O, guildId: Z, referralTrialOfferId: y, skuId: U, returnRef: H, skipConfirm: G = !1, continueSession: B = !1 } = e,
        { analyticsLocations: v } = (0, o.ZP)();
    l.useEffect(() => {
        !_.Z.isLoadedForPremiumSKUs() && C.Z.wait(() => (0, r.Y2)());
    }, []);
    let { step: F } = (0, p.usePaymentContext)(),
        { isGift: b, giftMessage: k, giftRecipient: w } = (0, c.wD)(),
        W = b && (0, u.pO)(w) && F === x.h8.PLAN_SELECT;
    return (0, t.jsx)(L.PaymentModal, {
        analyticsLocations: v,
        analyticsLocation: s,
        analyticsObject: n,
        analyticsSourceLocation: i,
        analyticsSubscriptionType: g.NYc.PREMIUM,
        onComplete: a,
        transitionState: d,
        initialPlanId: I,
        giftMessage: k,
        subscriptionTier: E,
        onClose: h,
        trialId: f,
        isGift: b,
        trialFooterMessageOverride: M,
        reviewWarningMessage: T,
        planGroup: P.Y1,
        openInvoiceId: N,
        onSubscriptionConfirmation: j,
        renderPurchaseConfirmation: A,
        postSuccessGuild: S,
        followupSKUInfo: R,
        renderHeader: m,
        applicationId: O,
        guildId: Z,
        referralTrialOfferId: y,
        skuId: U,
        shakeWhilePurchasing: !0,
        isLargeModal: W,
        returnRef: H,
        skipConfirm: G,
        continueSession: B
    });
}
function Z(e) {
    let { startedPaymentFlowWithPaymentSourcesRef: s, selectedSkuId: n } = (0, p.usePaymentContext)(),
        { isGift: t } = (0, c.wD)();
    return (0, T.Kp)({
        isTrial: null != e && e,
        isGift: t,
        selectedSkuId: n,
        startedPaymentFlowWithPaymentSources: s.current
    });
}
function y(e) {
    let { initialPlanId: s, handleStepChange: n, referralTrialOfferId: l } = e,
        { paymentSources: i, selectedSkuId: C } = (0, p.usePaymentContext)(),
        { isGift: r } = (0, c.wD)(),
        a = Z(
            (0, S.Z)({
                isGift: r,
                skuId: C,
                referralTrialOfferId: l
            })
        );
    return (0, t.jsx)(t.Fragment, {
        children: (0, t.jsx)(I.J, {
            ...e,
            breadcrumbSteps: m,
            onReturn: () => {
                let e = Object.values(i).length < 1 && null == s ? x.h8.PLAN_SELECT : x.h8.REVIEW;
                a && (e = x.h8.REVIEW), n(e, { trackedFromStep: x.h8.PAYMENT_TYPE });
            }
        })
    });
}
let U = [
    {
        key: null,
        renderStep: (e) => (0, t.jsx)(L.PaymentPredicateStep, { ...e })
    },
    {
        key: x.h8.SKU_SELECT,
        renderStep: (e) => (0, t.jsx)(j.q, { ...e }),
        options: {
            renderHeader: !1,
            hideSlider: !0
        }
    },
    {
        key: x.h8.WHAT_YOU_LOSE,
        renderStep: (e) => (0, t.jsx)(A.x, { ...e }),
        options: {
            renderHeader: !1,
            hideSlider: !0
        }
    },
    {
        key: x.h8.PLAN_SELECT,
        renderStep: (e) => (0, t.jsx)(N.x, { ...e }),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (Z(e) ? null : R.Z.Messages.BILLING_STEP_SELECT_PLAN)
        }
    },
    {
        key: x.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, t.jsx)(t.Fragment, { children: (0, t.jsx)(y, { ...e }) }),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (Z(e) ? null : R.Z.Messages.BILLING_STEP_PAYMENT)
        }
    },
    {
        key: x.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, t.jsx)(h.Z, {})
    },
    {
        key: x.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, t.jsx)(E.Z, {})
    },
    {
        key: x.h8.REVIEW,
        renderStep: (e) => (0, t.jsx)(f.l, { ...e }),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (Z(e) ? R.Z.Messages.BILLING_STEP_PLAN_AND_PAYMENT : R.Z.Messages.BILLING_STEP_REVIEW)
        }
    },
    {
        key: x.h8.CONFIRM,
        renderStep: (e) => (0, t.jsx)(M.b, { ...e })
    }
];
function H(e) {
    let s = (0, i.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: n } = (0, o.ZP)(e.analyticsLocations, a.Z.PREMIUM_PAYMENT_MODAL),
        { subscriptionTier: l, isGift: C, giftRecipient: r, giftMessage: _, giftStyle: u, loadId: x, defaultPlanId: L, referralCode: I, repeatPurchase: E } = e;
    if (null != l && !Object.values(P.Si).includes(l)) throw Error('subscriptionTier must be a premium subscription');
    return (0, t.jsx)(o.Gt, {
        value: n,
        children: (0, t.jsx)(p.PaymentContextProvider, {
            loadId: x,
            activeSubscription: null != e.subscription ? e.subscription : s,
            stepConfigs: U,
            skuIDs: [...P.YQ],
            isGift: C,
            defaultPlanId: L,
            referralCode: I,
            repeatPurchase: E,
            children: (0, t.jsx)(c.KB, {
                isGift: C,
                giftRecipient: null == r ? void 0 : r,
                giftMessage: _,
                giftStyle: u,
                children: (0, t.jsx)(O, { ...e })
            })
        })
    });
}
