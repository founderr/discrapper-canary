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
    let { analyticsData: n, initialPlanId: t, breadcrumbSteps: i, handleStepChange: f, referralTrialOfferId: v, onReturn: g, continueSession: S = !1 } = e,
        { contextMetadata: E, step: j, paymentSources: I, paymentSourceId: y, setPaymentSourceId: P, purchaseError: T, setPurchaseError: N, purchaseErrorBlockRef: b, paymentAuthenticationState: _, selectedSkuId: C, activeSubscription: A, previousStepRef: O, setPurchaseState: R } = (0, u.usePaymentContext)(),
        { isGift: Z } = (0, o.wD)(),
        M = {
            ...(0, a.fL)(),
            paymentSources: I,
            paymentSourceId: y,
            setPaymentSourceId: P,
            purchaseError: T,
            setPurchaseError: N,
            purchaseErrorBlockRef: b,
            paymentAuthenticationState: _,
            selectedSkuId: C,
            isGift: Z
        },
        w = (0, s.N)(v),
        D = !Z && null != w && null != C && h.nG[w.trial_id].skus.includes(C),
        L =
            null != g
                ? g
                : () => {
                      f(Object.values(I).length < 1 && null == t ? d.h8.PLAN_SELECT : d.h8.REVIEW, { trackedFromStep: d.h8.PAYMENT_TYPE });
                  };
    l()(j, 'Step should be set here');
    let F = (0, r.Z)(() => Date.now(), [j]);
    return (0, a.vP)({
        paymentModalArgs: M,
        initialStep: S && null == O.current ? d.h8.CREDIT_CARD_INFORMATION : d.h8.PAYMENT_TYPE,
        prependSteps: [d.h8.PROMOTION_INFO],
        appendSteps: [d.h8.REVIEW, d.h8.CONFIRM],
        breadcrumpSteps: i,
        currentBreadcrumpStep: j,
        usePaymentModalStep: !0,
        onReturn: L,
        onComplete: (e) => {
            e === d.h8.AWAITING_BROWSER_CHECKOUT ? (R(m.A.COMPLETED), f(d.h8.CONFIRM, { trackedFromStep: e })) : f(d.h8.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: t, toStep: i } = e,
                l = Date.now();
            c.default.track(x.rMx.PAYMENT_FLOW_STEP, {
                ...n,
                from_step: t,
                to_step: i,
                step_duration_ms: l - F,
                flow_duration_ms: l - E.startTime
            });
        },
        isEligibleForTrial: D,
        allowDesktopRedirectPurchase: (0, p.t)(C, Z, A)
    });
}
