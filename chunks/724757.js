"use strict";
r.r(e), r.d(e, {
  default: function() {
    return o
  }
});
var u = r("470079"),
  n = r("924826"),
  i = r("442837"),
  l = r("607070");

function o(t, e, r) {
  let o = (0, i.useStateFromStores)([l.default], () => l.default.keyboardModeEnabled),
    c = u.useCallback(t => {
      let r = document.querySelector(t),
        u = e.current;
      null != r && null != u && (r.focus(), u.scrollIntoViewNode({
        node: r,
        padding: 80
      }))
    }, [e]),
    a = u.useCallback(() => new Promise(t => {
      let r = e.current;
      if (null == r) return t();
      r.scrollTo({
        to: 0,
        callback: () => requestAnimationFrame(() => t())
      })
    }), [e]),
    d = u.useCallback(() => new Promise(t => {
      let r = e.current;
      if (null == r) return t();
      r.scrollTo({
        to: Number.MAX_SAFE_INTEGER,
        callback: () => requestAnimationFrame(() => t())
      })
    }), [e]);
  return (0, n.default)({
    id: t,
    isEnabled: o,
    setFocus: c,
    scrollToStart: a,
    scrollToEnd: d,
    orientation: null == r ? void 0 : r.orientation
  })
}