"use strict";
n.r(t), n.d(t, {
  PaymentModalAddPaymentStep: function() {
    return p
  }
});
var i = n("512722"),
  s = n.n(i),
  l = n("207561"),
  r = n("639119"),
  a = n("3409"),
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
    referralTrialOfferId: I,
    onReturn: _
  } = e, {
    contextMetadata: S,
    step: P,
    paymentSources: E,
    paymentSourceId: T,
    setPaymentSourceId: v,
    purchaseError: N,
    setPurchaseError: h,
    purchaseErrorBlockRef: x,
    paymentAuthenticationState: A,
    selectedSkuId: y
  } = (0, c.usePaymentContext)(), {
    isGift: g
  } = (0, o.useGiftContext)(), C = {
    ...(0, a.useSharedPaymentModal)(),
    paymentSources: E,
    paymentSourceId: T,
    setPaymentSourceId: v,
    purchaseError: N,
    setPurchaseError: h,
    purchaseErrorBlockRef: x,
    paymentAuthenticationState: A
  }, M = (0, r.usePremiumTrialOffer)(I), R = !g && null != M && null != y && (0, f.SubscriptionTrials)[M.trial_id].skus.includes(y), b = null != _ ? _ : () => {
    p(Object.values(E).length < 1 && null == n ? d.Step.PLAN_SELECT : d.Step.REVIEW, {
      trackedFromStep: d.Step.PAYMENT_TYPE
    })
  };
  s()(P, "Step should be set here");
  let L = (0, l.useStableMemo)(() => Date.now(), [P]);
  return (0, a.AddPaymentFlow)({
    paymentModalArgs: C,
    initialStep: d.Step.PAYMENT_TYPE,
    prependSteps: [d.Step.PROMOTION_INFO],
    appendSteps: [d.Step.REVIEW, d.Step.CONFIRM],
    breadcrumpSteps: i,
    currentBreadcrumpStep: P,
    usePaymentModalStep: !0,
    onReturn: b,
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
        step_duration_ms: s - L,
        flow_duration_ms: s - S.startTime
      })
    },
    isEligibleForTrial: R
  })
}