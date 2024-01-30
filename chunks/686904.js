"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("222007");
var l = n("884691"),
  a = n("448993");

function i(e, t) {
  let [n, i] = l.useState(!1), [s, r] = l.useState(null), u = async () => {
    i(!0), r(null);
    try {
      let t = await e();
      return i(!1), r(null), t
    } catch (n) {
      let e = new a.APIError(n);
      return null == t || t(e), r(e), i(!1), null
    }
  };
  return [u, {
    loading: n,
    error: s
  }]
}