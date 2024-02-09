"use strict";
n.r(t), n.d(t, {
  STANDARD_ONE_TIME_PAYMENT_STEPS: function() {
    return E
  },
  default: function() {
    return S
  }
}), n("222007");
var r = n("37983");
n("884691");
var a = n("812204"),
  u = n("685665"),
  i = n("635357"),
  l = n("642906"),
  s = n("385179"),
  o = n("292215"),
  d = n("843455");

function c(e) {
  let {
    onClose: t,
    onComplete: n,
    transitionState: a,
    loadId: i,
    applicationId: o,
    analyticsLocationObject: d,
    skuId: c
  } = e, {} = (0, l.usePaymentContext)(), {
    analyticsLocations: E
  } = (0, u.default)();
  return (0, r.jsx)(s.PaymentModal, {
    onClose: t,
    onComplete: n,
    loadId: i,
    applicationId: o,
    skuId: c,
    initialPlanId: null,
    analyticsObject: d,
    analyticsLocations: E,
    transitionState: a
  })
}
let E = [o.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, o.ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG, ...o.SHARED_STEP_CONFIGS, o.REVIEW_STEP_CONFIG, o.ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG];

function S(e) {
  let {
    applicationId: t,
    skuId: n,
    analyticsLocations: s
  } = e, {
    AnalyticsLocationProvider: o
  } = (0, u.default)(s, a.default.PREMIUM_PAYMENT_MODAL);
  return (0, r.jsx)(o, {
    children: (0, r.jsx)(l.PaymentContextProvider, {
      stepConfigs: E,
      applicationId: t,
      skuIDs: [n],
      activeSubscription: null,
      purchaseType: d.PurchaseTypes.ONE_TIME,
      children: (0, r.jsx)(i.GiftContextProvider, {
        children: (0, r.jsx)(c, {
          ...e
        })
      })
    })
  })
}