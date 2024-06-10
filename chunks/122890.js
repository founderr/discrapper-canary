"use strict";
n.r(t), n.d(t, {
  usePaymentModalAnimationScene: function() {
    return i
  }
}), n("47120");
var s = n("470079"),
  r = n("409813"),
  a = n("45572");

function i(e) {
  let {
    purchaseState: t,
    currentStep: n,
    initialScene: i,
    purchaseScene: l,
    errorScene: u,
    successScene: o
  } = e, [c, d] = (0, s.useState)(i);
  return (0, s.useEffect)(() => {
    t === a.PurchaseState.PURCHASING ? d(l) : t === a.PurchaseState.FAIL && d(u)
  }, [t, l, u]), (0, s.useEffect)(() => {
    n === r.Step.CONFIRM && d(o)
  }, [n, o]), [c, d]
}