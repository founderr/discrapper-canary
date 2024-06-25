n.d(t, {
  K: function() {
    return c
  },
  V: function() {
    return u
  }
});
var s = n(470079),
  i = n(442837),
  l = n(355298),
  a = n(333984),
  r = n(899740),
  o = n(355350);

function c() {
  let e = (0, r.q)(),
    t = s.useRef(e),
    n = (0, i.e7)([l.Z], () => l.Z.isReady()),
    a = s.useRef(n);
  return s.useEffect(() => {
    n && !a.current && (a.current = !0, t.current = e)
  }, [n, e]), t.current <= 1 && 1 === e
}

function u() {
  let e = (0, o.w)(),
    t = s.useRef(e),
    n = (0, i.e7)([a.Z], () => a.Z.isReady()),
    l = s.useRef(n);
  return s.useEffect(() => {
    n && !l.current && (l.current = !0, t.current = e)
  }, [n, e]), t.current <= 1 && 1 === e
}