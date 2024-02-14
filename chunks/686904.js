"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("222007");
var i = n("884691"),
  r = n("448993");

function l(e, t) {
  let [n, l] = i.useState(!1), [u, a] = i.useState(null), s = async () => {
    l(!0), a(null);
    try {
      let t = await e();
      return l(!1), a(null), t
    } catch (n) {
      let e = new r.APIError(n);
      return null == t || t(e), a(e), l(!1), null
    }
  };
  return [s, {
    loading: n,
    error: u
  }]
}