t.d(n, {
  v: function() {
    return C
  }
}), t(47120);
var s = t(735250),
  a = t(470079),
  l = t(512722),
  i = t.n(l),
  r = t(89057),
  o = t(987209),
  d = t(598),
  c = t(409813),
  u = t(456251),
  E = t(981631);

function C(e) {
  let {
    handleStepChange: n,
    handleClose: t
  } = e, {
    blockedPayments: l,
    hasFetchedSkus: C,
    paymentSources: f,
    hasFetchedPaymentSources: h,
    application: p,
    skusById: x,
    selectedSkuId: T
  } = (0, d.usePaymentContext)(), {
    isGift: m
  } = (0, o.wD)(), [I, v] = a.useState(!0);
  return (a.useEffect(() => {
    let e = null != p;
    if (!!C && !!h && !!e) v(!1)
  }, [C, h, p]), a.useEffect(() => {
    if (I || l) return;
    i()(null != T, "Expected selectedSkuId");
    let e = x[T];
    if (m && (null == e ? void 0 : e.productLine) === E.POd.COLLECTIBLES) {
      n(c.h8.GIFT_CUSTOMIZATION);
      return
    }
    if (0 === Object.keys(f).length) {
      n(c.h8.ADD_PAYMENT_STEPS);
      return
    }
    n(c.h8.REVIEW)
  }, [I, l, n, f, m, x, T]), I) ? (0, s.jsx)(u.Z, {}) : l ? (0, s.jsx)(r.Vq, {
    onClose: t
  }) : null
}