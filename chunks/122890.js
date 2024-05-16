"use strict";
n.r(t), n.d(t, {
  usePaymentModalAnimationScene: function() {
    return o
  }
}), n("47120");
var a = n("470079"),
  r = n("409813"),
  s = n("45572");

function o(e) {
  let {
    purchaseState: t,
    currentStep: n,
    initialScene: o,
    purchaseScene: l,
    errorScene: i,
    successScene: u
  } = e, [c, d] = (0, a.useState)(o);
  return (0, a.useEffect)(() => {
    t === s.PurchaseState.PURCHASING ? d(l) : t === s.PurchaseState.FAIL && d(i)
  }, [t, l, i]), (0, a.useEffect)(() => {
    n === r.Step.CONFIRM && d(u)
  }, [n, u]), [c, d]
}