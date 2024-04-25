"use strict";
t.r(n), t.d(n, {
  default: function() {
    return a
  }
}), t("47120");
var l = t("470079"),
  i = t("881052");

function a(e, n) {
  let [t, a] = l.useState(!1), [s, r] = l.useState(null);
  return [async () => {
    a(!0), r(null);
    try {
      let n = await e();
      return a(!1), r(null), n
    } catch (t) {
      let e = new i.APIError(t);
      return null == n || n(e), r(e), a(!1), null
    }
  }, {
    loading: t,
    error: s
  }]
}