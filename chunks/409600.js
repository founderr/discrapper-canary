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
  u = n("987209"),
  i = n("598"),
  l = n("791785"),
  c = n("961830"),
  o = n("231338");

function d(e) {
  let {
    onClose: t,
    onComplete: n,
    transitionState: a,
    applicationId: u,
    analyticsLocationObject: c,
    skuId: o
  } = e, {} = (0, i.usePaymentContext)(), {
    analyticsLocations: d
  } = (0, s.default)();
  return (0, r.jsx)(l.PaymentModal, {
    onClose: t,
    onComplete: n,
    applicationId: u,
    skuId: o,
    initialPlanId: null,
    analyticsObject: c,
    analyticsLocations: d,
    transitionState: a
  })
}
let f = [c.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, c.ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG, ...c.SHARED_STEP_CONFIGS, c.REVIEW_STEP_CONFIG, c.ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG];

function E(e) {
  let {
    loadId: t,
    applicationId: n,
    skuId: l,
    analyticsLocations: c
  } = e, {
    analyticsLocations: E
  } = (0, s.default)(c, a.default.PREMIUM_PAYMENT_MODAL);
  return (0, r.jsx)(s.AnalyticsLocationProvider, {
    value: E,
    children: (0, r.jsx)(i.PaymentContextProvider, {
      loadId: t,
      stepConfigs: f,
      applicationId: n,
      skuIDs: [l],
      activeSubscription: null,
      purchaseType: o.PurchaseTypes.ONE_TIME,
      children: (0, r.jsx)(u.GiftContextProvider, {
        children: (0, r.jsx)(d, {
          ...e
        })
      })
    })
  })
}