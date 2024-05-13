"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var r = n("470079"),
  l = n("924826"),
  o = n("442837"),
  a = n("607070");

function i(e, t, n) {
  let i = (0, o.useStateFromStores)([a.default], () => a.default.keyboardModeEnabled),
    s = r.useCallback(e => {
      let n = document.querySelector(e),
        r = t.current;
      null != n && null != r && (n.focus(), r.scrollIntoViewNode({
        node: n,
        padding: 80
      }))
    }, [t]),
    u = r.useCallback(() => new Promise(e => {
      let n = t.current;
      if (null == n) return e();
      n.scrollTo({
        to: 0,
        callback: () => requestAnimationFrame(() => e())
      })
    }), [t]),
    c = r.useCallback(() => new Promise(e => {
      let n = t.current;
      if (null == n) return e();
      n.scrollTo({
        to: Number.MAX_SAFE_INTEGER,
        callback: () => requestAnimationFrame(() => e())
      })
    }), [t]);
  return (0, l.default)({
    id: e,
    isEnabled: i,
    setFocus: s,
    scrollToStart: u,
    scrollToEnd: c,
    orientation: null == n ? void 0 : n.orientation
  })
}