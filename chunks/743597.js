n.d(t, {
  Z: function() {
    return h
  }
});
var l = n(470079),
  i = n(392711),
  s = n.n(i),
  a = n(772848),
  r = n(846519),
  o = n(125268),
  c = n(292793),
  u = n(813900);
let d = s().debounce(o.BR, u.Fq, {
  maxWait: u.Fq
});

function h(e, t, n) {
  let i = l.useRef((0, a.Z)()),
    s = l.useRef(new r.Xp),
    h = l.useCallback(l => {
      l.lastUpdatedAt = Date.now(), (0, o.gr)(l, e, n), (0, o.BR)(t, n, l)
    }, [t, n, e]),
    m = l.useCallback((l, r, d) => {
      i.current = (0, a.Z)();
      let m = {
        ...l,
        id: i.current,
        x: r,
        y: d,
        userId: e,
        state: c.f.START,
        lastUpdatedAt: Date.now()
      };
      (0, o.BR)(t, n, m), (0, o.gr)(m, e, n), s.current.start(u.FO, () => h(m))
    }, [e, t, n, h]),
    p = l.useCallback((l, a, r) => {
      let m = {
        ...l,
        id: i.current,
        x: a,
        y: r,
        userId: e,
        state: c.f.START,
        lastUpdatedAt: Date.now()
      };
      d(t, n, m), (0, o.gr)(m, e, n), s.current.start(u.FO, () => h(m))
    }, [e, t, n, h]),
    E = l.useCallback((l, a, r) => {
      d.cancel(), (0, o.Df)(t, n, i.current), (0, o.gr)({
        ...l,
        id: i.current,
        x: a,
        y: r,
        userId: e,
        state: c.f.STOP,
        lastUpdatedAt: Date.now()
      }, e, n), s.current.stop()
    }, [t, n, e]),
    g = l.useCallback((e, t, n) => p(e, t, n), [p]);
  return l.useMemo(() => ({
    handleMouseDown: m,
    handleMouseMove: p,
    handleMouseUp: E,
    handleMouseEnter: g
  }), [m, g, p, E])
}