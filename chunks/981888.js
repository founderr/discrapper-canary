"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("47120");
var l = n("470079"),
  i = n("881052");

function a(e, t) {
  let [n, a] = l.useState(!1), [r, s] = l.useState(null);
  return [async () => {
    a(!0), s(null);
    try {
      let t = await e();
      return a(!1), s(null), t
    } catch (n) {
      let e = new i.APIError(n);
      return null == t || t(e), s(e), a(!1), null
    }
  }, {
    loading: n,
    error: r
  }]
}