n.d(t, {
  v: function() {
    return h
  }
}), n(47120);
var r = n(735250),
  a = n(470079),
  s = n(512722),
  l = n.n(s),
  i = n(89057),
  o = n(987209),
  u = n(598),
  c = n(409813),
  d = n(456251),
  E = n(981631);

function h(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    blockedPayments: s,
    hasFetchedSkus: h,
    paymentSources: p,
    hasFetchedPaymentSources: f,
    application: C,
    skusById: _,
    selectedSkuId: A
  } = (0, u.usePaymentContext)(), {
    isGift: O
  } = (0, o.wD)(), [N, I] = a.useState(!0);
  return (a.useEffect(() => {
    let e = null != C;
    if (!!h && !!f && !!e) I(!1)
  }, [h, f, C]), a.useEffect(() => {
    if (N || s) return;
    l()(null != A, "Expected selectedSkuId");
    let e = _[A];
    if (O && (null == e ? void 0 : e.productLine) === E.POd.COLLECTIBLES) {
      t(c.h8.GIFT_CUSTOMIZATION);
      return
    }
    if (0 === Object.keys(p).length) {
      t(c.h8.ADD_PAYMENT_STEPS);
      return
    }
    t(c.h8.REVIEW)
  }, [N, s, t, p, O, _, A]), N) ? (0, r.jsx)(d.Z, {}) : s ? (0, r.jsx)(i.Vq, {
    onClose: n
  }) : null
}