"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("222007");
var r = n("884691"),
  s = n("775560"),
  i = n("862337");

function a(e, t) {
  let [n, a] = (0, r.useState)(e), l = (0, s.useLazyValue)(() => new i.Timeout);
  (0, r.useEffect)(() => () => l.stop(), [l]);
  let o = (0, r.useCallback)(n => {
    a(n), n !== e && l.start(t, () => a(e))
  }, [t, e, l]);
  return [n, o]
}