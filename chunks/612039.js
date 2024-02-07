"use strict";
i.r(t), i.d(t, {
  default: function() {
    return r
  }
}), i("222007");
var n = i("884691"),
  s = i("775560"),
  l = i("862337");

function r(e, t) {
  let [i, r] = (0, n.useState)(e), a = (0, s.useLazyValue)(() => new l.Timeout);
  (0, n.useEffect)(() => () => a.stop(), [a]);
  let o = (0, n.useCallback)(i => {
    r(i), i !== e && a.start(t, () => r(e))
  }, [t, e, a]);
  return [i, o]
}