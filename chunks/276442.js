s.d(n, {
    J: function () {
        return p;
    }
});
var t = s(512722),
    l = s.n(t),
    i = s(252759),
    r = s(639119),
    a = s(3409),
    c = s(626135),
    o = s(987209),
    u = s(598),
    d = s(409813),
    _ = s(45572),
    m = s(737143),
    I = s(981631),
    E = s(474936);
function p(e) {
    let { analyticsData: n, initialPlanId: s, breadcrumbSteps: t, handleStepChange: p, referralTrialOfferId: N, onReturn: T, continueSession: S = !1 } = e,
        { contextMetadata: x, step: h, paymentSources: P, paymentSourceId: f, setPaymentSourceId: A, purchaseError: v, setPurchaseError: M, purchaseErrorBlockRef: g, paymentAuthenticationState: R, selectedSkuId: L, activeSubscription: O, previousStepRef: C, setPurchaseState: j } = (0, u.usePaymentContext)(),
        { isGift: Z } = (0, o.wD)(),
        y = {
            ...(0, a.fL)(),
            paymentSources: P,
            paymentSourceId: f,
            setPaymentSourceId: A,
            purchaseError: v,
            setPurchaseError: M,
            purchaseErrorBlockRef: g,
            paymentAuthenticationState: R,
            selectedSkuId: L,
            isGift: Z
        },
        b = (0, r.N)(N),
        D = !Z && null != b && null != L && E.nG[b.trial_id].skus.includes(L),
        G =
            null != T
                ? T
                : () => {
                      p(Object.values(P).length < 1 && null == s ? d.h8.PLAN_SELECT : d.h8.REVIEW, { trackedFromStep: d.h8.PAYMENT_TYPE });
                  };
    l()(h, 'Step should be set here');
    let U = (0, i.Z)(() => Date.now(), [h]);
    return (0, a.vP)({
        paymentModalArgs: y,
        initialStep: S && null == C.current ? d.h8.CREDIT_CARD_INFORMATION : d.h8.PAYMENT_TYPE,
        prependSteps: [d.h8.PROMOTION_INFO],
        appendSteps: [d.h8.REVIEW, d.h8.CONFIRM],
        breadcrumpSteps: t,
        currentBreadcrumpStep: h,
        usePaymentModalStep: !0,
        onReturn: G,
        onComplete: (e) => {
            e === d.h8.AWAITING_BROWSER_CHECKOUT ? (j(_.A.COMPLETED), p(d.h8.CONFIRM, { trackedFromStep: e })) : p(d.h8.REVIEW, { trackedFromStep: e });
        },
        onStepChange: (e) => {
            let { currentStep: s, toStep: t } = e,
                l = Date.now();
            c.default.track(I.rMx.PAYMENT_FLOW_STEP, {
                ...n,
                from_step: s,
                to_step: t,
                step_duration_ms: l - U,
                flow_duration_ms: l - x.startTime
            });
        },
        isEligibleForTrial: D,
        allowDesktopRedirectPurchase: (0, m.tr)(L, Z, O)
    });
}
