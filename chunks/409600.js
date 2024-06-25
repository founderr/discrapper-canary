n.r(t), n.d(t, {
  STANDARD_ONE_TIME_PAYMENT_STEPS: function() {
    return p
  },
  default: function() {
    return h
  }
}), n(47120);
var r = n(735250);
n(470079);
var a = n(100527),
  s = n(906732),
  o = n(987209),
  i = n(598),
  l = n(791785),
  c = n(961830),
  u = n(231338);

function d(e) {
  let {
    onClose: t,
    onComplete: n,
    transitionState: a,
    applicationId: o,
    analyticsLocationObject: c,
    skuId: u
  } = e, {} = (0, i.usePaymentContext)(), {
    analyticsLocations: d
  } = (0, s.ZP)();
  return (0, r.jsx)(l.PaymentModal, {
    onClose: t,
    onComplete: n,
    applicationId: o,
    skuId: u,
    initialPlanId: null,
    analyticsObject: c,
    analyticsLocations: d,
    transitionState: a
  })
}
let p = [c.WA, c.s2, ...c.yp, c.wo, c.F7];

function h(e) {
  let {
    loadId: t,
    applicationId: n,
    skuId: l,
    analyticsLocations: c
  } = e, {
    analyticsLocations: h
  } = (0, s.ZP)(c, a.Z.PREMIUM_PAYMENT_MODAL);
  return (0, r.jsx)(s.Gt, {
    value: h,
    children: (0, r.jsx)(i.PaymentContextProvider, {
      loadId: t,
      stepConfigs: p,
      applicationId: n,
      skuIDs: [l],
      activeSubscription: null,
      purchaseType: u.GZ.ONE_TIME,
      children: (0, r.jsx)(o.KB, {
        children: (0, r.jsx)(d, {
          ...e
        })
      })
    })
  })
}