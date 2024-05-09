"use strict";
n.r(t), n.d(t, {
  ZOOM_IN: function() {
    return u
  },
  ZOOM_OUT: function() {
    return s
  },
  ZOOM_RESET: function() {
    return d
  }
});
var i = n("857595"),
  o = n("607070"),
  l = n("981631");

function a(e) {
  return l.Accessibility.ZOOM_SCALES[Math.max(0, Math.min(l.Accessibility.ZOOM_SCALES.indexOf(o.default.zoom) + e, l.Accessibility.ZOOM_SCALES.length - 1))]
}
let u = {
    binds: ["mod+plus"],
    comboKeysBindGlobal: !0,
    action: () => ((0, i.setZoom)(a(1)), !1)
  },
  s = {
    binds: ["mod+minus"],
    comboKeysBindGlobal: !0,
    action: () => ((0, i.setZoom)(a(-1)), !1)
  },
  d = {
    binds: ["mod+0"],
    comboKeysBindGlobal: !0,
    action: () => ((0, i.setZoom)(l.Accessibility.ZOOM_DEFAULT), !1)
  };
t.default = {
  ZOOM_IN: u,
  ZOOM_OUT: s,
  ZOOM_RESET: d
}