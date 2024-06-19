t.d(a, {
  Z: function() {
    return s
  }
});
var n = t(470079),
  l = t(358085);

function s(e) {
  let a = n.useRef(e);
  return n.useEffect(() => {
    a.current = e
  }, [e]), n.useCallback(e => {
    let t = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
      n = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey),
      {
        disabled: s = !1,
        onSubmit: r
      } = a.current;
    if ("enter" === e.key.toLowerCase())("macos" === (0, l.getOS)() ? n : t) && !s && (e.preventDefault(), r())
  }, [])
}