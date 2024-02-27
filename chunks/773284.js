"use strict";
a.r(t), a.d(t, {
  default: function() {
    return n
  }
});
var l = a("884691"),
  s = a("773336");

function n(e) {
  let t = l.useRef(e);
  return l.useEffect(() => {
    t.current = e
  }, [e]), l.useCallback(e => {
    let a = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
      l = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey),
      {
        disabled: n = !1,
        onSubmit: r
      } = t.current;
    if ("enter" === e.key.toLowerCase())("macos" === (0, s.getOS)() ? l : a) && !n && (e.preventDefault(), r())
  }, [])
}