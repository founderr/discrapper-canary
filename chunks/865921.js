t.d(n, {
  v: function() {
return p;
  }
}), t(47120);
var i = t(735250),
  r = t(470079),
  o = t(512722),
  a = t.n(o),
  s = t(89057),
  l = t(987209),
  c = t(598),
  d = t(409813),
  u = t(456251),
  _ = t(981631);

function p(e) {
  let {
handleStepChange: n,
handleClose: t
  } = e, {
blockedPayments: o,
hasFetchedSkus: p,
paymentSources: f,
hasFetchedPaymentSources: I,
application: m,
skusById: C,
selectedSkuId: S
  } = (0, c.usePaymentContext)(), {
isGift: b
  } = (0, l.wD)(), [h, T] = r.useState(!0);
  return (r.useEffect(() => {
let e = null != m;
if (!!p && !!I && !!e)
  T(!1);
  }, [
p,
I,
m
  ]), r.useEffect(() => {
if (h || o)
  return;
a()(null != S, 'Expected selectedSkuId');
let e = C[S];
if (b && (null == e ? void 0 : e.productLine) === _.POd.COLLECTIBLES) {
  n(d.h8.GIFT_CUSTOMIZATION);
  return;
}
if (0 === Object.keys(f).length) {
  n(d.h8.ADD_PAYMENT_STEPS);
  return;
}
n(d.h8.REVIEW);
  }, [
h,
o,
n,
f,
b,
C,
S
  ]), h) ? (0, i.jsx)(u.Z, {}) : o ? (0, i.jsx)(s.Vq, {
onClose: t
  }) : null;
}