n.d(t, {
  Z: function() {
    return s
  }
}), n(47120);
var l = n(470079),
  i = n(846519);

function s(e, t) {
  let [n, s] = l.useState(!1), a = l.useRef(new i.sW(t, () => s(!1))), r = l.useRef(new i.sW(e, () => s(!0))), o = l.useCallback(() => {
    a.current.cancel(), r.current.cancel()
  }, []);
  l.useEffect(() => o, [o]);
  let c = l.useCallback(() => {
    o(), a.current.delay()
  }, [o]);
  return {
    isHovered: n,
    setIsHovered: s,
    onMouseEnter: l.useCallback(() => {
      o(), r.current.delay()
    }, [o]),
    onMouseLeave: c,
    cancelTimers: o
  }
}