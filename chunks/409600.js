"use strict";
n.r(t), n.d(t, {
  STANDARD_ONE_TIME_PAYMENT_STEPS: function() {
    return f
  },
  default: function() {
    return E
  }
}), n("47120");
var r = n("735250");
n("470079");
var a = n("100527"),
  s = n("906732"),
  l = n("987209"),
  u = n("598"),
  i = n("791785"),
  c = n("961830"),
  d = n("231338");

function o(e) {
  let {
    onClose: t,
    onComplete: n,
    transitionState: a,
    applicationId: l,
    analyticsLocationObject: c,
    skuId: d
  } = e, {} = (0, u.usePaymentContext)(), {
    analyticsLocations: o
  } = (0, s.default)();
  return (0, r.jsx)(i.PaymentModal, {
    onClose: t,
    onComplete: n,
    applicationId: l,
    skuId: d,
    initialPlanId: null,
    analyticsObject: c,
    analyticsLocations: o,
    transitionState: a
  })
}
let f = [c.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, c.ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG, ...c.SHARED_STEP_CONFIGS, c.REVIEW_STEP_CONFIG, c.ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG];

function E(e) {
  let {
    loadId: t,
    applicationId: n,
    skuId: i,
    analyticsLocations: c
  } = e, {
    analyticsLocations: E
  } = (0, s.default)(c, a.default.PREMIUM_PAYMENT_MODAL);
  return (0, r.jsx)(s.AnalyticsLocationProvider, {
    value: E,
    children: (0, r.jsx)(u.PaymentContextProvider, {
      loadId: t,
      stepConfigs: f,
      applicationId: n,
      skuIDs: [i],
      activeSubscription: null,
      purchaseType: d.PurchaseTypes.ONE_TIME,
      children: (0, r.jsx)(l.GiftContextProvider, {
        children: (0, r.jsx)(o, {
          ...e
        })
      })
    })
  })
}