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
        { contextMetadata: j, step: E, paymentSources: y, paymentSourceId: I, setPaymentSourceId: P, purchaseError: T, setPurchaseError: N, purchaseErrorBlockRef: b, paymentAuthenticationState: C, selectedSkuId: _, activeSubscription: O, previousStepRef: A, setPurchaseState: Z } = (0, u.usePaymentContext)(),
        { isGift: R } = (0, o.wD)(),
        M = {
            ...(0, a.fL)(),
            paymentSources: y,
            paymentSourceId: I,
            setPaymentSourceId: P,
            purchaseError: T,
            setPurchaseError: N,
            purchaseErrorBlockRef: b,
            paymentAuthenticationState: C,
            selectedSkuId: _,
            isGift: R
        },
        w = (0, s.N)(v),
        L = !R && null != w && null != _ && h.nG[w.trial_id].skus.includes(_),
        k =
            null != g
                ? g
                : () => {
                      f(Object.values(y).length < 1 && null == t ? d.h8.PLAN_SELECT : d.h8.REVIEW, { trackedFromStep: d.h8.PAYMENT_TYPE });
                  };
    l()(E, 'Step should be set here');
    let D = (0, r.Z)(() => Date.now(), [E]);
    return (0, a.vP)({
        paymentModalArgs: M,
        initialStep: S && null == A.current ? d.h8.CREDIT_CARD_INFORMATION : d.h8.PAYMENT_TYPE,
        prependSteps: [d.h8.PROMOTION_INFO],
        appendSteps: [d.h8.REVIEW, d.h8.CONFIRM],
        breadcrumpSteps: i,
        currentBreadcrumpStep: E,
        usePaymentModalStep: !0,
        onReturn: k,
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
        isEligibleForTrial: L,
        allowDesktopRedirectPurchase: (0, p.t)(_, R, O)
    });
}
