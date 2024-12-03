t.d(n, {
    J: function () {
        return f;
    }
});
var i = t(512722),
    l = t.n(i),
    r = t(252759),
    s = t(639119),
    a = t(3409),
    c = t(626135),
    o = t(987209),
    u = t(563132),
    d = t(409813),
    m = t(45572),
    p = t(737143),
    x = t(981631),
    h = t(474936);
function f(e) {
    let { analyticsData: n, initialPlanId: t, breadcrumbSteps: i, handleStepChange: f, referralTrialOfferId: v, onReturn: S, continueSession: g = !1, continueSessionInitialStep: E } = e,
        { contextMetadata: j, step: y, paymentSources: I, paymentSourceId: P, setPaymentSourceId: T, purchaseError: N, setPurchaseError: b, purchaseErrorBlockRef: C, paymentAuthenticationState: _, selectedSkuId: O, activeSubscription: A, previousStepRef: R, setPurchaseState: Z } = (0, u.usePaymentContext)(),
        { isGift: M } = (0, o.wD)(),
        w = {
            ...(0, a.fL)(),
            paymentSources: I,
            paymentSourceId: P,
            setPaymentSourceId: T,
            purchaseError: N,
            setPurchaseError: b,
            purchaseErrorBlockRef: C,
            paymentAuthenticationState: _,
            selectedSkuId: O,
            isGift: M
        },
        L = (0, s.N)(v),
        k = !M && null != L && null != O && h.nG[L.trial_id].skus.includes(O),
        F =
            null != S
                ? S
                : () => {
                      f(Object.values(I).length < 1 && null == t ? d.h8.PLAN_SELECT : d.h8.REVIEW, { trackedFromStep: d.h8.PAYMENT_TYPE });
                  };
    l()(y, 'Step should be set here');
    let D = (0, r.Z)(() => Date.now(), [y]),
        U = null != E ? E : d.h8.CREDIT_CARD_INFORMATION,
        B = g && null == R.current ? U : d.h8.PAYMENT_TYPE;
    return (0, a.vP)({
        paymentModalArgs: w,
        initialStep: B,
        prependSteps: [d.h8.PROMOTION_INFO],
        appendSteps: [d.h8.REVIEW, d.h8.CONFIRM],
        breadcrumpSteps: i,
        currentBreadcrumpStep: y,
        usePaymentModalStep: !0,
        onReturn: F,
        onComplete: (e) => {
            e === d.h8.AWAITING_BROWSER_CHECKOUT ? (Z(m.A.COMPLETED), f(d.h8.CONFIRM, { trackedFromStep: e })) : f(d.h8.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: t, toStep: i } = e,
                l = Date.now();
            c.default.track(x.rMx.PAYMENT_FLOW_STEP, {
                ...n,
                from_step: t,
                to_step: i,
                step_duration_ms: l - D,
                flow_duration_ms: l - j.startTime
            });
        },
        isEligibleForTrial: k,
        allowDesktopRedirectPurchase: (0, p.tr)(O, M, A)
    });
}
