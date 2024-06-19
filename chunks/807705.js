n.d(t, {
  Z: function() {
    return i
  }
});
var l = n(470079);

function i(e, t) {
  let n = (0, l.useRef)(!1),
    i = (0, l.useRef)();
  (0, l.useEffect)(() => {
    n.current = !0, i.current = e
  }, [e]), (0, l.useEffect)(() => {
    let e = setTimeout(() => n.current = !1, t);
    return () => clearTimeout(e)
  }, [e, t]);
  let s = e !== i.current,
    a = n.current;
  return s || a
}