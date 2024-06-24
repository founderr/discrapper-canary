t.d(n, {
  z: function() {
    return l
  }
}), t(47120);
var r = t(470079),
  s = t(409813),
  o = t(45572);

function l(e) {
  let {
    purchaseState: n,
    currentStep: t,
    initialScene: l,
    purchaseScene: a,
    errorScene: i,
    successScene: u
  } = e, [c, d] = (0, r.useState)(l);
  return (0, r.useEffect)(() => {
    n === o.A.PURCHASING ? d(a) : n === o.A.FAIL && d(i)
  }, [n, a, i]), (0, r.useEffect)(() => {
    t === s.h8.CONFIRM && d(u)
  }, [t, u]), [c, d]
}