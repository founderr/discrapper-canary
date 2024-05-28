"use strict";
n.r(t), n.d(t, {
  PaymentModalAddPaymentStep: function() {
    return f
  }
});
var i = n("512722"),
  l = n.n(i),
  s = n("207561"),
  a = n("639119"),
  r = n("3409"),
  u = n("626135"),
  o = n("987209"),
  c = n("598"),
  d = n("409813"),
  m = n("981631"),
  p = n("474936");

function f(e) {
  let {
    analyticsData: t,
    initialPlanId: n,
    breadcrumbSteps: i,
    handleStepChange: f,
    referralTrialOfferId: S,
    onReturn: I
  } = e, {
    contextMetadata: _,
    step: P,
    paymentSources: E,
    paymentSourceId: T,
    setPaymentSourceId: v,
    purchaseError: h,
    setPurchaseError: N,
    purchaseErrorBlockRef: x,
    paymentAuthenticationState: A,
    selectedSkuId: y
  } = (0, c.usePaymentContext)(), {
    isGift: C
  } = (0, o.useGiftContext)(), R = {
    ...(0, r.useSharedPaymentModal)(),
    paymentSources: E,
    paymentSourceId: T,
    setPaymentSourceId: v,
    purchaseError: h,
    setPurchaseError: N,
    purchaseErrorBlockRef: x,
    paymentAuthenticationState: A
  }, b = (0, a.usePremiumTrialOffer)(S), g = !C && null != b && null != y && (0, p.SubscriptionTrials)[b.trial_id].skus.includes(y), O = null != I ? I : () => {
    f(Object.values(E).length < 1 && null == n ? d.Step.PLAN_SELECT : d.Step.REVIEW, {
      trackedFromStep: d.Step.PAYMENT_TYPE
    })
  };
  l()(P, "Step should be set here");
  let M = (0, s.useStableMemo)(() => Date.now(), [P]);
  return (0, r.AddPaymentFlow)({
    paymentModalArgs: R,
    initialStep: d.Step.PAYMENT_TYPE,
    prependSteps: [d.Step.PROMOTION_INFO],
    appendSteps: [d.Step.REVIEW, d.Step.CONFIRM],
    breadcrumpSteps: i,
    currentBreadcrumpStep: P,
    usePaymentModalStep: !0,
    onReturn: O,
    onComplete: e => {
      f(d.Step.REVIEW, {
        trackedFromStep: e
      })
    },
    onStepChange: e => {
      let {
        currentStep: n,
        toStep: i
      } = e, l = Date.now();
      u.default.track(m.AnalyticEvents.PAYMENT_FLOW_STEP, {
        ...t,
        from_step: n,
        to_step: i,
        step_duration_ms: l - M,
        flow_duration_ms: l - _.startTime
      })
    },
    isEligibleForTrial: g
  })
}