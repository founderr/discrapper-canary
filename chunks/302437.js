"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var s = n("974667"),
  i = n("446674"),
  r = n("206230");

function a() {
  return Promise.resolve()
}

function l(e) {
  let t = document.querySelector(e);
  null != t && t.focus()
}

function u(e, t) {
  let n = (0, i.useStateFromStores)([r.default], () => r.default.keyboardModeEnabled);
  return (0, s.default)({
    id: e,
    isEnabled: n,
    orientation: t,
    setFocus: l,
    scrollToStart: a,
    scrollToEnd: a
  })
}