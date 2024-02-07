"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007");
var i = n("884691"),
  l = n("448993");

function r(e, t) {
  let [n, r] = i.useState(!1), [s, a] = i.useState(null), u = async () => {
    r(!0), a(null);
    try {
      let t = await e();
      return r(!1), a(null), t
    } catch (n) {
      let e = new l.APIError(n);
      return null == t || t(e), a(e), r(!1), null
    }
  };
  return [u, {
    loading: n,
    error: s
  }]
}