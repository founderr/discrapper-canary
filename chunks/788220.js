"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("222007");
var l = n("884691"),
  a = n("862337");

function s(e, t) {
  let [n, s] = l.useState(!1), i = l.useRef(new a.DelayedCall(t, () => s(!1))), r = l.useRef(new a.DelayedCall(e, () => s(!0))), o = l.useCallback(() => {
    i.current.cancel(), r.current.cancel()
  }, []);
  l.useEffect(() => o, [o]);
  let u = l.useCallback(() => {
      o(), i.current.delay()
    }, [o]),
    d = l.useCallback(() => {
      o(), r.current.delay()
    }, [o]);
  return {
    isHovered: n,
    setIsHovered: s,
    onMouseEnter: d,
    onMouseLeave: u,
    cancelTimers: o
  }
}