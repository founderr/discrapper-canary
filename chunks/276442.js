s.d(n, {
    J: function () {
        return I;
    }
});
var l = s(512722), t = s.n(l), i = s(792986), r = s(639119), a = s(3409), c = s(626135), o = s(987209), u = s(598), d = s(409813), _ = s(189877), m = s(981631), E = s(474936);
function I(e) {
    let {
            analyticsData: n,
            initialPlanId: s,
            breadcrumbSteps: l,
            handleStepChange: I,
            referralTrialOfferId: p,
            onReturn: N,
            continueSession: T = !1
        } = e, {
            contextMetadata: x,
            step: S,
            paymentSources: h,
            paymentSourceId: P,
            setPaymentSourceId: f,
            purchaseError: A,
            setPurchaseError: v,
            purchaseErrorBlockRef: M,
            paymentAuthenticationState: g,
            selectedSkuId: C,
            activeSubscription: O,
            previousStepRef: R
        } = (0, u.usePaymentContext)(), {isGift: j} = (0, o.wD)(), L = {
            ...(0, a.fL)(),
            paymentSources: h,
            paymentSourceId: P,
            setPaymentSourceId: f,
            purchaseError: A,
            setPurchaseError: v,
            purchaseErrorBlockRef: M,
            paymentAuthenticationState: g,
            selectedSkuId: C,
            isGift: j
        }, y = (0, r.N)(p), Z = !j && null != y && null != C && E.nG[y.trial_id].skus.includes(C), b = null != N ? N : () => {
            I(Object.values(h).length < 1 && null == s ? d.h8.PLAN_SELECT : d.h8.REVIEW, { trackedFromStep: d.h8.PAYMENT_TYPE });
        };
    t()(S, 'Step should be set here');
    let D = (0, i.Z)(() => Date.now(), [S]);
    return (0, a.vP)({
        paymentModalArgs: L,
        initialStep: T && null == R.current ? d.h8.CREDIT_CARD_INFORMATION : d.h8.PAYMENT_TYPE,
        prependSteps: [d.h8.PROMOTION_INFO],
        appendSteps: [
            d.h8.REVIEW,
            d.h8.CONFIRM
        ],
        breadcrumpSteps: l,
        currentBreadcrumpStep: S,
        usePaymentModalStep: !0,
        onReturn: b,
        onComplete: e => {
            e === d.h8.AWAITING_BROWSER_CHECKOUT ? I(d.h8.CONFIRM, { trackedFromStep: e }) : I(d.h8.REVIEW, { trackedFromStep: e });
        },
        onStepChange: e => {
            let {
                    currentStep: s,
                    toStep: l
                } = e, t = Date.now();
            c.default.track(m.rMx.PAYMENT_FLOW_STEP, {
                ...n,
                from_step: s,
                to_step: l,
                step_duration_ms: t - D,
                flow_duration_ms: t - x.startTime
            });
        },
        isEligibleForTrial: Z,
        allowDesktopRedirectPurchase: (0, _.tr)(C, j, O)
    });
}
