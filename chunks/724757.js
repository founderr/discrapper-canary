"use strict";
u.r(e), u.d(e, {
  default: function() {
    return o
  }
});
var r = u("470079"),
  n = u("924826"),
  i = u("442837"),
  l = u("607070");

function o(t, e, u) {
  let o = (0, i.useStateFromStores)([l.default], () => l.default.keyboardModeEnabled),
    c = r.useCallback(t => {
      let u = document.querySelector(t),
        r = e.current;
      null != u && null != r && (u.focus(), r.scrollIntoViewNode({
        node: u,
        padding: 80
      }))
    }, [e]),
    a = r.useCallback(() => new Promise(t => {
      let u = e.current;
      if (null == u) return t();
      u.scrollTo({
        to: 0,
        callback: () => requestAnimationFrame(() => t())
      })
    }), [e]),
    d = r.useCallback(() => new Promise(t => {
      let u = e.current;
      if (null == u) return t();
      u.scrollTo({
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
    orientation: null == u ? void 0 : u.orientation
  })
}