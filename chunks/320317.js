"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("47120");
var r = n("470079");

function u() {
  let [e, t] = r.useState(null), n = r.useRef(null);
  return r.useEffect(() => {
    null != e && null != n.current && n.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [e]), {
    purchaseError: e,
    setPurchaseError: t,
    purchaseErrorBlockRef: n
  }
}