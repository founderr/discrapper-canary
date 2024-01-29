"use strict";
l.r(t), l.d(t, {
  default: function() {
    return i
  }
});
var s = l("884691"),
  i = (e, t) => {
    let l = (0, s.useRef)(e);
    (0, s.useEffect)(() => {
      l.current = e
    }, [e]), (0, s.useEffect)(() => {
      if (null === t) return;
      let e = setTimeout(() => l.current(), t);
      return () => clearTimeout(e)
    }, [t, l])
  }