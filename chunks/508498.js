"use strict";
t.d(s, {
  Db: function() {
    return u
  }
}), t(610138), t(216116), t(78328), t(815648), t(47120);
var n, a, r = t(470079),
  i = t(266067),
  l = t(37234),
  o = t(703656),
  c = t(981631);

function u() {
  let {
    search: e
  } = (0, i.TH)(), s = (0, i.UO)(), t = r.useMemo(() => new URLSearchParams(e), [e]).get("source"), n = null != t ? parseInt(t, 10) : null;
  return {
    onClose: r.useCallback(() => {
      if (0 === n) {
        (0, o.op)(), (0, l.jN)(c.S9g.USER_SETTINGS);
        return
      }
      if ((0, o.uv)()) {
        (0, o.op)();
        return
      }(0, o.uL)(c.Z5c.APP)
    }, [n]),
    source: n,
    ...s
  }
}(a = n || (n = {}))[a.SETTINGS = 0] = "SETTINGS", a[a.CHANGELOG = 1] = "CHANGELOG", a[a.DM_LIST = 2] = "DM_LIST"