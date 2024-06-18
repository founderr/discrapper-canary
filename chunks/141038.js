"use strict";
t.d(n, {
  Z: function() {
    return c
  }
}), t(653041), t(47120);
var r = t(512722),
  o = t.n(r),
  i = t(90757),
  s = t.n(i),
  l = t(65154);

function c(e, n, t) {
  let r = window.DiscordNative;
  o()(null != r, "Can't get desktop sources outside of native app"), n = null != n ? n : [l.vA.WINDOW, l.vA.SCREEN], t = null != t ? t : {
    width: 150,
    height: 150
  };
  let i = [];
  return n.includes(l.vA.SCREEN) && e.supports(l.AN.SCREEN_PREVIEWS) && (i.push(e.getScreenPreviews(t.width, t.height)), n = n.filter(e => e !== l.vA.SCREEN)), n.includes(l.vA.WINDOW) && e.supports(l.AN.WINDOW_PREVIEWS) && (i.push(e.getWindowPreviews(t.width, t.height)), n = n.filter(e => e !== l.vA.WINDOW)), 0 !== n.length && i.push(r.desktopCapture.getDesktopCaptureSources({
    types: n,
    thumbnailSize: t
  })), Promise.all(i).then(e => s()(e))
}