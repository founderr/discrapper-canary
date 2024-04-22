"use strict";
s.r(t), s.d(t, {
  default: function() {
    return a
  }
}), s("47120");
var n = s("470079"),
  r = s("881052");

function a(e, t) {
  let [s, a] = n.useState(!1), [l, u] = n.useState(null);
  return [async () => {
    a(!0), u(null);
    try {
      let t = await e();
      return a(!1), u(null), t
    } catch (s) {
      let e = new r.APIError(s);
      return null == t || t(e), u(e), a(!1), null
    }
  }, {
    loading: s,
    error: l
  }]
}