"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("47120");
var r = n("470079"),
  u = n("409813"),
  i = n("45572");

function l(e) {
  let [t, n] = r.useState(i.PurchaseState.WAITING);
  return r.useEffect(() => {
    null != e && e !== u.Step.REVIEW && t !== i.PurchaseState.WAITING && t !== i.PurchaseState.COMPLETED && n(i.PurchaseState.WAITING)
  }, [e, t, n]), [t, n]
}