t.d(n, {
  v: function() {
return h;
  }
}), t(47120);
var r = t(735250),
  a = t(470079),
  o = t(512722),
  i = t.n(o),
  s = t(89057),
  l = t(987209),
  c = t(598),
  d = t(409813),
  u = t(456251),
  f = t(981631);

function h(e) {
  let {
handleStepChange: n,
handleClose: t
  } = e, {
blockedPayments: o,
hasFetchedSkus: h,
paymentSources: p,
hasFetchedPaymentSources: g,
application: b,
skusById: x,
selectedSkuId: m
  } = (0, c.usePaymentContext)(), {
isGift: _
  } = (0, l.wD)(), [v, C] = a.useState(!0);
  return (a.useEffect(() => {
let e = null != b;
if (!!h && !!g && !!e)
  C(!1);
  }, [
h,
g,
b
  ]), a.useEffect(() => {
if (v || o)
  return;
i()(null != m, 'Expected selectedSkuId');
let e = x[m];
if (_ && (null == e ? void 0 : e.productLine) === f.POd.COLLECTIBLES) {
  n(d.h8.GIFT_CUSTOMIZATION);
  return;
}
if (0 === Object.keys(p).length) {
  n(d.h8.ADD_PAYMENT_STEPS);
  return;
}
n(d.h8.REVIEW);
  }, [
v,
o,
n,
p,
_,
x,
m
  ]), v) ? (0, r.jsx)(u.Z, {}) : o ? (0, r.jsx)(s.Vq, {
onClose: t
  }) : null;
}