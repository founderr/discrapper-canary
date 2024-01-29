"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("222007");
var i = n("884691"),
  s = n("775560"),
  r = n("862337");

function l(e, t) {
  let [n, l] = (0, i.useState)(e), a = (0, s.useLazyValue)(() => new r.Timeout);
  (0, i.useEffect)(() => () => a.stop(), [a]);
  let u = (0, i.useCallback)(n => {
    l(n), n !== e && a.start(t, () => l(e))
  }, [t, e, a]);
  return [n, u]
}