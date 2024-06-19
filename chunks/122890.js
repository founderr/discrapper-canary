t.d(n, {
  z: function() {
    return o
  }
}), t(47120);
var r = t(470079),
  s = t(409813),
  l = t(45572);

function o(e) {
  let {
    purchaseState: n,
    currentStep: t,
    initialScene: o,
    purchaseScene: a,
    errorScene: i,
    successScene: u
  } = e, [c, d] = (0, r.useState)(o);
  return (0, r.useEffect)(() => {
    n === l.A.PURCHASING ? d(a) : n === l.A.FAIL && d(i)
  }, [n, a, i]), (0, r.useEffect)(() => {
    t === s.h8.CONFIRM && d(u)
  }, [t, u]), [c, d]
}