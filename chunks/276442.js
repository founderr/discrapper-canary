"use strict";
n.r(t), n.d(t, {
  PaymentModalAddPaymentStep: function() {
    return p
  }
});
var i = n("512722"),
  s = n.n(i),
  l = n("207561"),
  a = n("639119"),
  r = n("3409"),
  u = n("626135"),
  o = n("987209"),
  c = n("598"),
  d = n("409813"),
  m = n("981631"),
  f = n("474936");

function p(e) {
  let {
    analyticsData: t,
    initialPlanId: n,
    breadcrumbSteps: i,
    handleStepChange: p,
    referralTrialOfferId: S,
    onReturn: _,
    continueSession: I = !1
  } = e, {
    contextMetadata: P,
    step: E,
    paymentSources: T,
    paymentSourceId: N,
    setPaymentSourceId: v,
    purchaseError: h,
    setPurchaseError: x,
    purchaseErrorBlockRef: A,
    paymentAuthenticationState: C,
    selectedSkuId: y
  } = (0, c.usePaymentContext)(), {
    isGift: g
  } = (0, o.useGiftContext)(), M = {
    ...(0, r.useSharedPaymentModal)(),
    paymentSources: T,
    paymentSourceId: N,
    setPaymentSourceId: v,
    purchaseError: h,
    setPurchaseError: x,
    purchaseErrorBlockRef: A,
    paymentAuthenticationState: C
  }, R = (0, a.usePremiumTrialOffer)(S), b = !g && null != R && null != y && (0, f.SubscriptionTrials)[R.trial_id].skus.includes(y), L = null != _ ? _ : () => {
    p(Object.values(T).length < 1 && null == n ? d.Step.PLAN_SELECT : d.Step.REVIEW, {
      trackedFromStep: d.Step.PAYMENT_TYPE
    })
  };
  s()(E, "Step should be set here");
  let O = (0, l.useStableMemo)(() => Date.now(), [E]);
  return (0, r.AddPaymentFlow)({
    paymentModalArgs: M,
    initialStep: I && null == N ? d.Step.CREDIT_CARD_INFORMATION : d.Step.PAYMENT_TYPE,
    prependSteps: [d.Step.PROMOTION_INFO],
    appendSteps: [d.Step.REVIEW, d.Step.CONFIRM],
    breadcrumpSteps: i,
    currentBreadcrumpStep: E,
    usePaymentModalStep: !0,
    onReturn: L,
    onComplete: e => {
      p(d.Step.REVIEW, {
        trackedFromStep: e
      })
    },
    onStepChange: e => {
      let {
        currentStep: n,
        toStep: i
      } = e, s = Date.now();
      u.default.track(m.AnalyticEvents.PAYMENT_FLOW_STEP, {
        ...t,
        from_step: n,
        to_step: i,
        step_duration_ms: s - O,
        flow_duration_ms: s - P.startTime
      })
    },
    isEligibleForTrial: b
  })
}