"use strict";
n.r(t), n.d(t, {
  usePaymentModalAnimationScene: function() {
    return l
  }
}), n("47120");
var s = n("470079"),
  r = n("409813"),
  a = n("45572");

function l(e) {
  let {
    purchaseState: t,
    currentStep: n,
    initialScene: l,
    purchaseScene: i,
    errorScene: u,
    successScene: o
  } = e, [c, d] = (0, s.useState)(l);
  return (0, s.useEffect)(() => {
    t === a.PurchaseState.PURCHASING ? d(i) : t === a.PurchaseState.FAIL && d(u)
  }, [t, i, u]), (0, s.useEffect)(() => {
    n === r.Step.CONFIRM && d(o)
  }, [n, o]), [c, d]
}