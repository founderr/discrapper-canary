"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("222007");
var l = n("884691"),
  a = n("862337");

function s(e, t) {
  let [n, s] = l.useState(!1), i = l.useRef(new a.DelayedCall(t, () => s(!1))), r = l.useRef(new a.DelayedCall(e, () => s(!0))), u = l.useCallback(() => {
    i.current.cancel(), r.current.cancel()
  }, []);
  l.useEffect(() => u, [u]);
  let o = l.useCallback(() => {
      u(), i.current.delay()
    }, [u]),
    d = l.useCallback(() => {
      u(), r.current.delay()
    }, [u]);
  return {
    isHovered: n,
    setIsHovered: s,
    onMouseEnter: d,
    onMouseLeave: o,
    cancelTimers: u
  }
}