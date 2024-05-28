"use strict";
n.r(t), n.d(t, {
  STANDARD_ONE_TIME_PAYMENT_STEPS: function() {
    return f
  },
  default: function() {
    return E
  }
}), n("47120");
var a = n("735250");
n("470079");
var r = n("100527"),
  s = n("906732"),
  l = n("987209"),
  u = n("598"),
  i = n("791785"),
  c = n("961830"),
  o = n("231338");

function d(e) {
  let {
    onClose: t,
    onComplete: n,
    transitionState: r,
    applicationId: l,
    analyticsLocationObject: c,
    skuId: o
  } = e, {} = (0, u.usePaymentContext)(), {
    analyticsLocations: d
  } = (0, s.default)();
  return (0, a.jsx)(i.PaymentModal, {
    onClose: t,
    onComplete: n,
    applicationId: l,
    skuId: o,
    initialPlanId: null,
    analyticsObject: c,
    analyticsLocations: d,
    transitionState: r
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
  } = (0, s.default)(c, r.default.PREMIUM_PAYMENT_MODAL);
  return (0, a.jsx)(s.AnalyticsLocationProvider, {
    value: E,
    children: (0, a.jsx)(u.PaymentContextProvider, {
      loadId: t,
      stepConfigs: f,
      applicationId: n,
      skuIDs: [i],
      activeSubscription: null,
      purchaseType: o.PurchaseTypes.ONE_TIME,
      children: (0, a.jsx)(l.GiftContextProvider, {
        children: (0, a.jsx)(d, {
          ...e
        })
      })
    })
  })
}