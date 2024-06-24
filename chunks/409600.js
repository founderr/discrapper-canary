n.r(t), n.d(t, {
  STANDARD_ONE_TIME_PAYMENT_STEPS: function() {
    return E
  },
  default: function() {
    return h
  }
}), n(47120);
var r = n(735250);
n(470079);
var a = n(100527),
  s = n(906732),
  l = n(987209),
  i = n(598),
  o = n(791785),
  u = n(961830),
  c = n(231338);

function d(e) {
  let {
    onClose: t,
    onComplete: n,
    transitionState: a,
    applicationId: l,
    analyticsLocationObject: u,
    skuId: c
  } = e, {} = (0, i.usePaymentContext)(), {
    analyticsLocations: d
  } = (0, s.ZP)();
  return (0, r.jsx)(o.PaymentModal, {
    onClose: t,
    onComplete: n,
    applicationId: l,
    skuId: c,
    initialPlanId: null,
    analyticsObject: u,
    analyticsLocations: d,
    transitionState: a
  })
}
let E = [u.WA, u.s2, ...u.yp, u.wo, u.F7];

function h(e) {
  let {
    loadId: t,
    applicationId: n,
    skuId: o,
    analyticsLocations: u
  } = e, {
    analyticsLocations: h
  } = (0, s.ZP)(u, a.Z.PREMIUM_PAYMENT_MODAL);
  return (0, r.jsx)(s.Gt, {
    value: h,
    children: (0, r.jsx)(i.PaymentContextProvider, {
      loadId: t,
      stepConfigs: E,
      applicationId: n,
      skuIDs: [o],
      activeSubscription: null,
      purchaseType: c.GZ.ONE_TIME,
      children: (0, r.jsx)(l.KB, {
        children: (0, r.jsx)(d, {
          ...e
        })
      })
    })
  })
}