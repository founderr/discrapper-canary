"use strict";
l.r(t), l.d(t, {
  default: function() {
    return a
  }
}), l("47120");
var n = l("470079"),
  i = l("881052");

function a(e, t) {
  let [l, a] = n.useState(!1), [r, s] = n.useState(null);
  return [async () => {
    a(!0), s(null);
    try {
      let t = await e();
      return a(!1), s(null), t
    } catch (l) {
      let e = new i.APIError(l);
      return null == t || t(e), s(e), a(!1), null
    }
  }, {
    loading: l,
    error: r
  }]
}