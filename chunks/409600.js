n.r(t), n.d(t, {
  STANDARD_ONE_TIME_PAYMENT_STEPS: function() {
    return E
  },
  default: function() {
    return A
  }
}), n(47120);
var r = n(735250);
n(470079);
var s = n(100527),
  a = n(906732),
  l = n(987209),
  i = n(598),
  u = n(791785),
  c = n(961830),
  o = n(231338);

function d(e) {
  let {
    onClose: t,
    onComplete: n,
    transitionState: s,
    applicationId: l,
    analyticsLocationObject: c,
    skuId: o
  } = e, {} = (0, i.usePaymentContext)(), {
    analyticsLocations: d
  } = (0, a.ZP)();
  return (0, r.jsx)(u.PaymentModal, {
    onClose: t,
    onComplete: n,
    applicationId: l,
    skuId: o,
    initialPlanId: null,
    analyticsObject: c,
    analyticsLocations: d,
    transitionState: s
  })
}
let E = [c.WA, c.s2, ...c.yp, c.wo, c.F7];

function A(e) {
  let {
    loadId: t,
    applicationId: n,
    skuId: u,
    analyticsLocations: c
  } = e, {
    analyticsLocations: A
  } = (0, a.ZP)(c, s.Z.PREMIUM_PAYMENT_MODAL);
  return (0, r.jsx)(a.Gt, {
    value: A,
    children: (0, r.jsx)(i.PaymentContextProvider, {
      loadId: t,
      stepConfigs: E,
      applicationId: n,
      skuIDs: [u],
      activeSubscription: null,
      purchaseType: o.GZ.ONE_TIME,
      children: (0, r.jsx)(l.KB, {
        children: (0, r.jsx)(d, {
          ...e
        })
      })
    })
  })
}