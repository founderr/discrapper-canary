t.d(n, {
  z: function() {
    return i
  }
}), t(47120);
var r = t(470079),
  o = t(409813),
  a = t(45572);

function i(e) {
  let {
    purchaseState: n,
    currentStep: t,
    initialScene: i,
    purchaseScene: l,
    errorScene: s,
    successScene: c
  } = e, [u, d] = (0, r.useState)(i);
  return (0, r.useEffect)(() => {
    n === a.A.PURCHASING ? d(l) : n === a.A.FAIL && d(s)
  }, [n, l, s]), (0, r.useEffect)(() => {
    t === o.h8.CONFIRM && d(c)
  }, [t, c]), [u, d]
}