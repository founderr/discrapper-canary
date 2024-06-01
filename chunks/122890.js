"use strict";
n.r(t), n.d(t, {
  usePaymentModalAnimationScene: function() {
    return o
  }
}), n("47120");
var a = n("470079"),
  s = n("409813"),
  r = n("45572");

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
    t === r.PurchaseState.PURCHASING ? d(l) : t === r.PurchaseState.FAIL && d(i)
  }, [t, l, i]), (0, a.useEffect)(() => {
    n === s.Step.CONFIRM && d(u)
  }, [n, u]), [c, d]
}