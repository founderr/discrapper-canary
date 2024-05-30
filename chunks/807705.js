"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var a = n("470079");

function l(e, t) {
  let n = (0, a.useRef)(!1),
    l = (0, a.useRef)();
  (0, a.useEffect)(() => {
    n.current = !0, l.current = e
  }, [e]), (0, a.useEffect)(() => {
    let e = setTimeout(() => n.current = !1, t);
    return () => clearTimeout(e)
  }, [e, t]);
  let s = e !== l.current,
    i = n.current;
  return s || i
}