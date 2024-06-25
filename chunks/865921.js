t.d(n, {
  v: function() {
    return p
  }
}), t(47120);
var r = t(735250),
  o = t(470079),
  a = t(512722),
  l = t.n(a),
  s = t(89057),
  i = t(987209),
  c = t(598),
  u = t(409813),
  d = t(456251),
  h = t(981631);

function p(e) {
  let {
    handleStepChange: n,
    handleClose: t
  } = e, {
    blockedPayments: a,
    hasFetchedSkus: p,
    paymentSources: v,
    hasFetchedPaymentSources: f,
    application: x,
    skusById: g,
    selectedSkuId: m
  } = (0, c.usePaymentContext)(), {
    isGift: C
  } = (0, i.wD)(), [b, j] = o.useState(!0);
  return (o.useEffect(() => {
    let e = null != x;
    if (!!p && !!f && !!e) j(!1)
  }, [p, f, x]), o.useEffect(() => {
    if (b || a) return;
    l()(null != m, "Expected selectedSkuId");
    let e = g[m];
    if (C && (null == e ? void 0 : e.productLine) === h.POd.COLLECTIBLES) {
      n(u.h8.GIFT_CUSTOMIZATION);
      return
    }
    if (0 === Object.keys(v).length) {
      n(u.h8.ADD_PAYMENT_STEPS);
      return
    }
    n(u.h8.REVIEW)
  }, [b, a, n, v, C, g, m]), b) ? (0, r.jsx)(d.Z, {}) : a ? (0, r.jsx)(s.Vq, {
    onClose: t
  }) : null
}