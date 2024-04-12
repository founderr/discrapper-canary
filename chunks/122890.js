"use strict";
r.r(t), r.d(t, {
  usePaymentModalAnimationScene: function() {
    return l
  }
}), r("47120");
var s = r("470079"),
  n = r("409813"),
  a = r("45572");

function l(e) {
  let {
    purchaseState: t,
    currentStep: r,
    initialScene: l,
    purchaseScene: u,
    errorScene: c,
    successScene: i
  } = e, [o, d] = (0, s.useState)(l);
  return (0, s.useEffect)(() => {
    t === a.PurchaseState.PURCHASING ? d(u) : t === a.PurchaseState.FAIL && d(c)
  }, [t, u, c]), (0, s.useEffect)(() => {
    r === n.Step.CONFIRM && d(i)
  }, [r, i]), [o, d]
}