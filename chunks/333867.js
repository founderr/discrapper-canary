t.d(n, {
  Z: function() {
    return f
  }
});
var s = t(735250);
t(470079);
var a = t(772848),
  l = t(481060),
  i = t(976255),
  r = t(667),
  o = t(335131),
  d = t(626135),
  c = t(409813),
  u = t(608579),
  E = t(981631);
let C = "payment-modal";

function f(e) {
  let n;
  let {
    skuId: t,
    isGift: f = !1,
    giftMessage: h,
    onClose: p,
    onComplete: x,
    analyticsLocations: T,
    analyticsObject: m
  } = e, I = !1, v = (0, a.Z)(), S = e => {
    n = e
  };
  (0, l.openModalLazy)(async () => e => {
    let {
      onClose: n,
      returnRef: a,
      ...l
    } = e;
    return (0, s.jsx)(u.Z, {
      ...l,
      loadId: v,
      skuId: t,
      isGift: f,
      giftMessage: h,
      analyticsLocations: T,
      onClose: e => {
        n(), null == p || p(e)
      },
      onComplete: () => {
        I = !0, null == x || x()
      },
      returnRef: a,
      onStepChange: S
    })
  }, {
    modalKey: C,
    onCloseCallback: () => {
      !I && d.default.track(E.rMx.PAYMENT_FLOW_CANCELED, {
        load_id: v,
        payment_type: E.Zuq[E.GZQ.ONE_TIME],
        location: m,
        is_gift: f,
        location_stack: T
      }), (0, i.fw)(), (0, r.p)(), null == p || p(I), I && (0, o.qg)()
    },
    onCloseRequest: () => {
      n === c.h8.REVIEW && (0, l.closeModal)(C)
    }
  })
}