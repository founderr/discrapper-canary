"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("47120");
var r = n("470079"),
  u = n("442837"),
  i = n("509545");

function a() {
  let [e, t] = r.useState(void 0), [n, a] = r.useState(void 0);
  return {
    selectedSkuId: e,
    selectedPlan: (0, u.useStateFromStores)([i.default], () => null != n ? i.default.get(n) : null),
    setSelectedSkuId: t,
    setSelectedPlanId: a
  }
}