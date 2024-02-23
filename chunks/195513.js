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
    u = l.useRef(Date.now()),
    o = l.useCallback((l, a) => {
      let i = {
        x: l,
        y: a,
        deltaTime: Date.now() - u.current
      };
      (0, s.drawLinePoint)(t, r.current, e, n, i), (0, s.updateLinePoints)(r.current, e, n, [i])
    }, [t, n, e]),
    d = l.useCallback((e, t, n) => {
      r.current = (0, a.v4)(), u.current = Date.now(), o(t, n)
    }, [o]),
    c = l.useCallback((e, t, n) => o(t, n), [o]),
    f = l.useCallback((e, t, n) => d(e, t, n), [d]);
  return l.useMemo(() => ({
    handleMouseDown: d,
    handleMouseMove: c,
    handleMouseUp: i,
    handleMouseEnter: f
  }), [d, f, c])
}