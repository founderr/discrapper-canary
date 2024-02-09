"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("222007");
var r = n("884691"),
  i = n("775560"),
  s = n("862337");

function a(e, t) {
  let [n, a] = (0, r.useState)(e), l = (0, i.useLazyValue)(() => new s.Timeout);
  (0, r.useEffect)(() => () => l.stop(), [l]);
  let u = (0, r.useCallback)(n => {
    a(n), n !== e && l.start(t, () => a(e))
  }, [t, e, l]);
  return [n, u]
}