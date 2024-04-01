"use strict";
r.r(t), r.d(t, {
  usePaymentModalAnimationScene: function() {
    return i
  }
}), r("47120");
var n = r("470079"),
  s = r("409813"),
  a = r("45572");

function i(e) {
  let {
    purchaseState: t,
    currentStep: r,
    initialScene: i,
    purchaseScene: l,
    errorScene: c,
    successScene: u
  } = e, [o, d] = (0, n.useState)(i);
  return (0, n.useEffect)(() => {
    t === a.PurchaseState.PURCHASING ? d(l) : t === a.PurchaseState.FAIL && d(c)
  }, [t, l, c]), (0, n.useEffect)(() => {
    r === s.Step.CONFIRM && d(u)
  }, [r, u]), [o, d]
}