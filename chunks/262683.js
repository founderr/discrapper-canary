"use strict";
n.r(t), n.d(t, {
  PaymentModalAddPaymentStep: function() {
    return _
  }
});
var s = n("627445"),
  r = n.n(s),
  a = n("775560"),
  l = n("917247"),
  i = n("724522"),
  u = n("599110"),
  c = n("635357"),
  o = n("642906"),
  d = n("85336"),
  f = n("49111"),
  m = n("646718");

function _(e) {
  let {
    analyticsData: t,
    initialPlanId: n,
    breadcrumbSteps: s,
    handleStepChange: _,
    referralTrialOfferId: E,
    onReturn: p
  } = e, {
    contextMetadata: I,
    step: S,
    paymentSources: P,
    paymentSourceId: N,
    setPaymentSourceId: T,
    purchaseError: C,
    setPurchaseError: A,
    purchaseErrorBlockRef: O,
    paymentAuthenticationState: h,
    selectedSkuId: R
  } = (0, o.usePaymentContext)(), {
    isGift: g
  } = (0, c.useGiftContext)(), M = {
    ...(0, i.useSharedPaymentModal)(),
    paymentSources: P,
    paymentSourceId: N,
    setPaymentSourceId: T,
    purchaseError: C,
    setPurchaseError: A,
    purchaseErrorBlockRef: O,
    paymentAuthenticationState: h
  }, x = (0, l.usePremiumTrialOffer)(E), v = !g && null != x && null != R && (0, m.SubscriptionTrials)[x.trial_id].skus.includes(R), y = null != p ? p : () => {
    let e = Object.values(P).length < 1 && null == n ? d.Step.PLAN_SELECT : d.Step.REVIEW;
    _(e, {
      trackedFromStep: d.Step.PAYMENT_TYPE
    })
  };
  r(S, "Step should be set here");
  let L = (0, a.useStableMemo)(() => Date.now(), [S]);
  return (0, i.AddPaymentFlow)({
    paymentModalArgs: M,
    initialStep: d.Step.PAYMENT_TYPE,
    prependSteps: [d.Step.PROMOTION_INFO],
    appendSteps: [d.Step.REVIEW, d.Step.CONFIRM],
    breadcrumpSteps: s,
    currentBreadcrumpStep: S,
    usePaymentModalStep: !0,
    onReturn: y,
    onComplete: e => {
      _(d.Step.REVIEW, {
        trackedFromStep: e
      })
    },
    onStepChange: e => {
      let {
        currentStep: n,
        toStep: s
      } = e, r = Date.now();
      u.default.track(f.AnalyticEvents.PAYMENT_FLOW_STEP, {
        ...t,
        from_step: n,
        to_step: s,
        step_duration_ms: r - L,
        flow_duration_ms: r - I.startTime
      })
    },
    isEligibleForTrial: v
  })
}