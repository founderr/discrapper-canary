"use strict";
n.r(t), n.d(t, {
  PaymentModalAddPaymentStep: function() {
    return p
  }
});
var i = n("512722"),
  s = n.n(i),
  a = n("207561"),
  r = n("639119"),
  l = n("3409"),
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
    referralTrialOfferId: _,
    onReturn: S
  } = e, {
    contextMetadata: I,
    step: E,
    paymentSources: P,
    paymentSourceId: T,
    setPaymentSourceId: N,
    purchaseError: h,
    setPurchaseError: v,
    purchaseErrorBlockRef: x,
    paymentAuthenticationState: A,
    selectedSkuId: C
  } = (0, c.usePaymentContext)(), {
    isGift: g
  } = (0, o.useGiftContext)(), y = {
    ...(0, l.useSharedPaymentModal)(),
    paymentSources: P,
    paymentSourceId: T,
    setPaymentSourceId: N,
    purchaseError: h,
    setPurchaseError: v,
    purchaseErrorBlockRef: x,
    paymentAuthenticationState: A
  }, M = (0, r.usePremiumTrialOffer)(_), R = !g && null != M && null != C && (0, f.SubscriptionTrials)[M.trial_id].skus.includes(C), b = null != S ? S : () => {
    p(Object.values(P).length < 1 && null == n ? d.Step.PLAN_SELECT : d.Step.REVIEW, {
      trackedFromStep: d.Step.PAYMENT_TYPE
    })
  };
  s()(E, "Step should be set here");
  let L = (0, a.useStableMemo)(() => Date.now(), [E]);
  return (0, l.AddPaymentFlow)({
    paymentModalArgs: y,
    initialStep: d.Step.PAYMENT_TYPE,
    prependSteps: [d.Step.PROMOTION_INFO],
    appendSteps: [d.Step.REVIEW, d.Step.CONFIRM],
    breadcrumpSteps: i,
    currentBreadcrumpStep: E,
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
        flow_duration_ms: s - I.startTime
      })
    },
    isEligibleForTrial: R
  })
}