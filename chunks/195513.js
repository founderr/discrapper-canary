"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("884691"),
  a = n("748820"),
  s = n("760679");
let i = () => {};

function r(e, t, n) {
  let r = l.useRef((0, a.v4)()),
    o = l.useRef(Date.now()),
    u = l.useCallback((l, a) => {
      let i = {
        x: l,
        y: a,
        deltaTime: Date.now() - o.current
      };
      (0, s.drawLinePoint)(t, r.current, e, n, i), (0, s.updateLinePoints)(r.current, e, n, [i])
    }, [t, n, e]),
    d = l.useCallback((e, t, n) => {
      r.current = (0, a.v4)(), o.current = Date.now(), u(t, n)
    }, [u]),
    c = l.useCallback((e, t, n) => u(t, n), [u]),
    f = l.useCallback((e, t, n) => d(e, t, n), [d]);
  return l.useMemo(() => ({
    handleMouseDown: d,
    handleMouseMove: c,
    handleMouseUp: i,
    handleMouseEnter: f
  }), [d, f, c])
}