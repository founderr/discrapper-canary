"use strict";
n.r(t), n.d(t, {
  STANDARD_ONE_TIME_PAYMENT_STEPS: function() {
    return p
  },
  default: function() {
    return m
  }
}), n("47120");
var r = n("735250");
n("470079");
var a = n("100527"),
  s = n("906732"),
  i = n("987209"),
  l = n("598"),
  o = n("791785"),
  u = n("961830"),
  c = n("231338");

function d(e) {
  let {
    onClose: t,
    onComplete: n,
    transitionState: a,
    applicationId: i,
    analyticsLocationObject: u,
    skuId: c
  } = e, {} = (0, l.usePaymentContext)(), {
    analyticsLocations: d
  } = (0, s.default)();
  return (0, r.jsx)(o.PaymentModal, {
    onClose: t,
    onComplete: n,
    applicationId: i,
    skuId: c,
    initialPlanId: null,
    analyticsObject: u,
    analyticsLocations: d,
    transitionState: a
  })
}
let p = [u.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, u.ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG, ...u.SHARED_STEP_CONFIGS, u.REVIEW_STEP_CONFIG, u.ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG];

function m(e) {
  let {
    loadId: t,
    applicationId: n,
    skuId: o,
    analyticsLocations: u
  } = e, {
    analyticsLocations: m
  } = (0, s.default)(u, a.default.PREMIUM_PAYMENT_MODAL);
  return (0, r.jsx)(s.AnalyticsLocationProvider, {
    value: m,
    children: (0, r.jsx)(l.PaymentContextProvider, {
      loadId: t,
      stepConfigs: p,
      applicationId: n,
      skuIDs: [o],
      activeSubscription: null,
      purchaseType: c.PurchaseTypes.ONE_TIME,
      children: (0, r.jsx)(i.GiftContextProvider, {
        children: (0, r.jsx)(d, {
          ...e
        })
      })
    })
  })
}