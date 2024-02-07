"use strict";
n.r(e), n.d(e, {
  default: function() {
    return s
  }
});
var i = n("974667"),
  l = n("446674"),
  a = n("206230");

function r() {
  return Promise.resolve()
}

function u(t) {
  let e = document.querySelector(t);
  null != e && e.focus()
}

function s(t, e) {
  let n = (0, l.useStateFromStores)([a.default], () => a.default.keyboardModeEnabled);
  return (0, i.default)({
    id: t,
    isEnabled: n,
    orientation: e,
    setFocus: u,
    scrollToStart: r,
    scrollToEnd: r
  })
}