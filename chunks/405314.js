"use strict";
n.r(t), n.d(t, {
  STANDARD_ONE_TIME_PAYMENT_STEPS: function() {
    return c
  },
  default: function() {
    return S
  }
}), n("222007");
var r = n("37983");
n("884691");
var a = n("812204"),
  i = n("685665"),
  u = n("635357"),
  s = n("642906"),
  l = n("385179"),
  d = n("292215"),
  o = n("843455");

function E(e) {
  let {
    onClose: t,
    onComplete: n,
    transitionState: a,
    loadId: u,
    applicationId: d,
    analyticsLocationObject: o,
    skuId: E
  } = e, {} = (0, s.usePaymentContext)(), {
    analyticsLocations: c
  } = (0, i.default)();
  return (0, r.jsx)(l.PaymentModal, {
    onClose: t,
    onComplete: n,
    loadId: u,
    applicationId: d,
    skuId: E,
    initialPlanId: null,
    analyticsObject: o,
    analyticsLocations: c,
    transitionState: a
  })
}
let c = [d.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, d.ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG, ...d.SHARED_STEP_CONFIGS, d.REVIEW_STEP_CONFIG, d.ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG];

function S(e) {
  let {
    applicationId: t,
    skuId: n,
    analyticsLocations: l
  } = e, {
    AnalyticsLocationProvider: d
  } = (0, i.default)(l, a.default.PREMIUM_PAYMENT_MODAL);
  return (0, r.jsx)(d, {
    children: (0, r.jsx)(s.PaymentContextProvider, {
      stepConfigs: c,
      applicationId: t,
      skuIDs: [n],
      activeSubscription: null,
      purchaseType: o.PurchaseTypes.ONE_TIME,
      children: (0, r.jsx)(u.GiftContextProvider, {
        children: (0, r.jsx)(E, {
          ...e
        })
      })
    })
  })
}