"use strict";
n.r(t), n.d(t, {
  PaymentModalAddPaymentStep: function() {
    return S
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
  m = n("737143"),
  f = n("981631"),
  p = n("474936");

function S(e) {
  let {
    analyticsData: t,
    initialPlanId: n,
    breadcrumbSteps: i,
    handleStepChange: S,
    referralTrialOfferId: _,
    onReturn: I,
    continueSession: P = !1
  } = e, {
    contextMetadata: E,
    step: T,
    paymentSources: N,
    paymentSourceId: v,
    setPaymentSourceId: h,
    purchaseError: x,
    setPurchaseError: A,
    purchaseErrorBlockRef: y,
    paymentAuthenticationState: C,
    selectedSkuId: g
  } = (0, c.usePaymentContext)(), {
    isGift: M
  } = (0, o.useGiftContext)(), R = {
    ...(0, r.useSharedPaymentModal)(),
    paymentSources: N,
    paymentSourceId: v,
    setPaymentSourceId: h,
    purchaseError: x,
    setPurchaseError: A,
    purchaseErrorBlockRef: y,
    paymentAuthenticationState: C,
    selectedSkuId: g,
    isGift: M
  }, b = (0, a.usePremiumTrialOffer)(_), L = !M && null != b && null != g && (0, p.SubscriptionTrials)[b.trial_id].skus.includes(g), O = null != I ? I : () => {
    S(Object.values(N).length < 1 && null == n ? d.Step.PLAN_SELECT : d.Step.REVIEW, {
      trackedFromStep: d.Step.PAYMENT_TYPE
    })
  };
  s()(T, "Step should be set here");
  let j = (0, l.useStableMemo)(() => Date.now(), [T]);
  return (0, r.AddPaymentFlow)({
    paymentModalArgs: R,
    initialStep: P && null == v ? d.Step.CREDIT_CARD_INFORMATION : d.Step.PAYMENT_TYPE,
    prependSteps: [d.Step.PROMOTION_INFO],
    appendSteps: [d.Step.REVIEW, d.Step.CONFIRM],
    breadcrumpSteps: i,
    currentBreadcrumpStep: T,
    usePaymentModalStep: !0,
    onReturn: O,
    onComplete: e => {
      e === d.Step.AWAITING_BROWSER_CHECKOUT ? S(d.Step.CONFIRM, {
        trackedFromStep: e
      }) : S(d.Step.REVIEW, {
        trackedFromStep: e
      })
    },
    onStepChange: e => {
      let {
        currentStep: n,
        toStep: i
      } = e, s = Date.now();
      u.default.track(f.AnalyticEvents.PAYMENT_FLOW_STEP, {
        ...t,
        from_step: n,
        to_step: i,
        step_duration_ms: s - j,
        flow_duration_ms: s - E.startTime
      })
    },
    isEligibleForTrial: L,
    allowDesktopRedirectPurchase: (0, m.allowDesktopRedirectPurchase)(g, M)
  })
}