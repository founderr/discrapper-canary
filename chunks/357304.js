"use strict";
n.r(t), n.d(t, {
  renderAvatarCursorOutline: function() {
    return a
  },
  renderAvatarCursor: function() {
    return s
  }
});
var l = n("242260");

function a(e, t, n, l, a) {
  e.save(), e.beginPath(), e.fillStyle = l, e.arc(t, n, Math.round(20 * window.devicePixelRatio) / 2 + a, 0, 2 * Math.PI), e.fill(), e.restore()
}

function s(e, t, n, a) {
  e.save();
  let s = l.default.getAvatarImage(a);
  if (null == s) return;
  let i = 20 * window.devicePixelRatio;
  e.beginPath(), e.arc(t, n, i / 2, 0, 2 * Math.PI), e.clip(), e.drawImage(s, t - i / 2, n - i / 2, i, i), e.restore()
}