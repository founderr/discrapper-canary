"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var r = n("470079"),
  l = n("924826"),
  o = n("442837"),
  i = n("607070");

function a(e, t, n) {
  let a = (0, o.useStateFromStores)([i.default], () => i.default.keyboardModeEnabled),
    c = r.useCallback(e => {
      let n = document.querySelector(e),
        r = t.current;
      null != n && null != r && (n.focus(), r.scrollIntoViewNode({
        node: n,
        padding: 80
      }))
    }, [t]),
    s = r.useCallback(() => new Promise(e => {
      let n = t.current;
      if (null == n) return e();
      n.scrollTo({
        to: 0,
        callback: () => requestAnimationFrame(() => e())
      })
    }), [t]),
    u = r.useCallback(() => new Promise(e => {
      let n = t.current;
      if (null == n) return e();
      n.scrollTo({
        to: Number.MAX_SAFE_INTEGER,
        callback: () => requestAnimationFrame(() => e())
      })
    }), [t]);
  return (0, l.default)({
    id: e,
    isEnabled: a,
    setFocus: c,
    scrollToStart: s,
    scrollToEnd: u,
    orientation: null == n ? void 0 : n.orientation
  })
}