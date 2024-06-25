n.d(e, {
  Z: function() {
    return c
  }
});
var r = n(470079),
  u = n(924826),
  i = n(442837),
  l = n(607070);

function c(t, e, n) {
  let c = (0, i.e7)([l.Z], () => l.Z.keyboardModeEnabled),
    a = r.useCallback(t => {
      let n = document.querySelector(t),
        r = e.current;
      null != n && null != r && (n.focus(), r.scrollIntoViewNode({
        node: n,
        padding: 80
      }))
    }, [e]),
    o = r.useCallback(() => new Promise(t => {
      let n = e.current;
      if (null == n) return t();
      n.scrollTo({
        to: 0,
        callback: () => requestAnimationFrame(() => t())
      })
    }), [e]),
    d = r.useCallback(() => new Promise(t => {
      let n = e.current;
      if (null == n) return t();
      n.scrollTo({
        to: Number.MAX_SAFE_INTEGER,
        callback: () => requestAnimationFrame(() => t())
      })
    }), [e]);
  return (0, u.ZP)({
    id: t,
    isEnabled: c,
    setFocus: a,
    scrollToStart: o,
    scrollToEnd: d,
    orientation: null == n ? void 0 : n.orientation
  })
}