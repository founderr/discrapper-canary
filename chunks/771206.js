"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("47120");
var r = n("470079"),
  u = n("122289"),
  i = n("622999");

function l() {
  let [e, t] = r.useState(null);
  return r.useEffect(() => {
    (0, i.getStripe)().then(e => t(e)).catch(e => {
      (0, u.captureBillingException)(e)
    })
  }, []), e
}