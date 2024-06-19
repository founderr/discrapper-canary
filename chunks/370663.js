n.d(t, {
  Z: function() {
    return r
  }
});
var l = n(470079),
  i = n(772848),
  s = n(125268);
let a = () => {};

function r(e, t, n) {
  let r = l.useRef((0, i.Z)()),
    o = l.useRef(Date.now()),
    c = l.useCallback((l, i) => {
      let a = {
        x: l,
        y: i,
        deltaTime: Date.now() - o.current
      };
      (0, s.oW)(t, r.current, e, n, a), (0, s.cV)(r.current, e, n, [a])
    }, [t, n, e]),
    u = l.useCallback((e, t, n) => {
      r.current = (0, i.Z)(), o.current = Date.now(), c(t, n)
    }, [c]),
    d = l.useCallback((e, t, n) => c(t, n), [c]),
    h = l.useCallback((e, t, n) => u(e, t, n), [u]);
  return l.useMemo(() => ({
    handleMouseDown: u,
    handleMouseMove: d,
    handleMouseUp: a,
    handleMouseEnter: h
  }), [u, h, d])
}