"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("974667"),
  s = n("446674"),
  r = n("206230");

function l() {
  return Promise.resolve()
}

function a(e) {
  let t = document.querySelector(e);
  null != t && t.focus()
}

function u(e, t) {
  let n = (0, s.useStateFromStores)([r.default], () => r.default.keyboardModeEnabled);
  return (0, i.default)({
    id: e,
    isEnabled: n,
    orientation: t,
    setFocus: a,
    scrollToStart: l,
    scrollToEnd: l
  })
}