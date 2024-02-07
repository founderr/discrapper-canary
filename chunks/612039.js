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
  let [n, a] = (0, r.useState)(e), u = (0, i.useLazyValue)(() => new s.Timeout);
  (0, r.useEffect)(() => () => u.stop(), [u]);
  let l = (0, r.useCallback)(n => {
    a(n), n !== e && u.start(t, () => a(e))
  }, [t, e, u]);
  return [n, l]
}