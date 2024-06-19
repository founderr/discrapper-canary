n.d(e, {
  Z: function() {
    return l
  }
}), n(47120);
var r = n(470079),
  u = n(479531),
  i = n(689938);

function l(t) {
  let [e, n] = r.useState(!1), [l, c] = r.useState(null);
  return [r.useCallback(async function() {
    for (var e = arguments.length, r = Array(e), l = 0; l < e; l++) r[l] = arguments[l];
    try {
      return c(null), n(!0), await t(...r)
    } catch (t) {
      t.message !== i.Z.Messages.MFA_V2_CANCELED && c(t instanceof u.Z ? t : new u.Z(t))
    } finally {
      n(!1)
    }
  }, [t]), {
    loading: e,
    error: l
  }]
}