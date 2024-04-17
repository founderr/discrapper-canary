"use strict";
u.r(e), u.d(e, {
  default: function() {
    return l
  }
}), u("47120");
var r = u("470079"),
  n = u("479531"),
  i = u("689938");

function l(t) {
  let [e, u] = r.useState(!1), [l, o] = r.useState(null);
  return [r.useCallback(async function() {
    for (var e = arguments.length, r = Array(e), l = 0; l < e; l++) r[l] = arguments[l];
    try {
      return o(null), u(!0), await t(...r)
    } catch (t) {
      t.message !== i.default.Messages.MFA_V2_CANCELED && o(t instanceof n.default ? t : new n.default(t))
    } finally {
      u(!1)
    }
  }, [t]), {
    loading: e,
    error: l
  }]
}