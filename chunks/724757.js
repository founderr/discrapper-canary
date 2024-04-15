"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("470079"),
  r = n("924826"),
  a = n("442837"),
  i = n("607070");

function o(e, t, n) {
  let o = (0, a.useStateFromStores)([i.default], () => i.default.keyboardModeEnabled),
    s = l.useCallback(e => {
      let n = document.querySelector(e),
        l = t.current;
      null != n && null != l && (n.focus(), l.scrollIntoViewNode({
        node: n,
        padding: 80
      }))
    }, [t]),
    u = l.useCallback(() => new Promise(e => {
      let n = t.current;
      if (null == n) return e();
      n.scrollTo({
        to: 0,
        callback: () => requestAnimationFrame(() => e())
      })
    }), [t]),
    c = l.useCallback(() => new Promise(e => {
      let n = t.current;
      if (null == n) return e();
      n.scrollTo({
        to: Number.MAX_SAFE_INTEGER,
        callback: () => requestAnimationFrame(() => e())
      })
    }), [t]);
  return (0, r.default)({
    id: e,
    isEnabled: o,
    setFocus: s,
    scrollToStart: u,
    scrollToEnd: c,
    orientation: null == n ? void 0 : n.orientation
  })
}