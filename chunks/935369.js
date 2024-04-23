"use strict";
r.r(e), r.d(e, {
  default: function() {
    return l
  }
}), r("47120");
var u = r("470079"),
  n = r("479531"),
  i = r("689938");

function l(t) {
  let [e, r] = u.useState(!1), [l, o] = u.useState(null);
  return [u.useCallback(async function() {
    for (var e = arguments.length, u = Array(e), l = 0; l < e; l++) u[l] = arguments[l];
    try {
      return o(null), r(!0), await t(...u)
    } catch (t) {
      t.message !== i.default.Messages.MFA_V2_CANCELED && o(t instanceof n.default ? t : new n.default(t))
    } finally {
      r(!1)
    }
  }, [t]), {
    loading: e,
    error: l
  }]
}