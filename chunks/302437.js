"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("974667"),
  l = n("446674"),
  a = n("206230");

function r() {
  return Promise.resolve()
}

function s(e) {
  let t = document.querySelector(e);
  null != t && t.focus()
}

function u(e, t) {
  let n = (0, l.useStateFromStores)([a.default], () => a.default.keyboardModeEnabled);
  return (0, i.default)({
    id: e,
    isEnabled: n,
    orientation: t,
    setFocus: s,
    scrollToStart: r,
    scrollToEnd: r
  })
}