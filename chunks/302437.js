"use strict";
i.r(t), i.d(t, {
  default: function() {
    return o
  }
});
var n = i("974667"),
  s = i("446674"),
  l = i("206230");

function r() {
  return Promise.resolve()
}

function a(e) {
  let t = document.querySelector(e);
  null != t && t.focus()
}

function o(e, t) {
  let i = (0, s.useStateFromStores)([l.default], () => l.default.keyboardModeEnabled);
  return (0, n.default)({
    id: e,
    isEnabled: i,
    orientation: t,
    setFocus: a,
    scrollToStart: r,
    scrollToEnd: r
  })
}