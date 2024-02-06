"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("222007");
var s = n("884691"),
  i = n("775560"),
  r = n("862337");

function a(e, t) {
  let [n, a] = (0, s.useState)(e), l = (0, i.useLazyValue)(() => new r.Timeout);
  (0, s.useEffect)(() => () => l.stop(), [l]);
  let u = (0, s.useCallback)(n => {
    a(n), n !== e && l.start(t, () => a(e))
  }, [t, e, l]);
  return [n, u]
}