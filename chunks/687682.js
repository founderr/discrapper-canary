"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var l = n("884691");
let i = 1e3 / 24;
var a = function(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
    n = l.useRef(0),
    a = l.useRef(),
    s = l.useRef(!0),
    r = l.useCallback(() => {
      s.current = !1, cancelAnimationFrame(n.current)
    }, []),
    o = l.useCallback(l => {
      null == a.current && (a.current = l);
      let i = l - a.current;
      i >= t && (a.current = l, e(i)), s.current && (n.current = requestAnimationFrame(o))
    }, [e, t]),
    u = l.useCallback(() => {
      s.current = !0, a.current = void 0, n.current = requestAnimationFrame(o)
    }, [o]);
  return l.useEffect(() => (n.current = requestAnimationFrame(o), () => cancelAnimationFrame(n.current)), []), {
    stop: r,
    reset: u,
    ticking: s
  }
}