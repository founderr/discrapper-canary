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
  l = n("607070"),
  o = n("981631");

function a(e) {
  return o.Accessibility.ZOOM_SCALES[Math.max(0, Math.min(o.Accessibility.ZOOM_SCALES.indexOf(l.default.zoom) + e, o.Accessibility.ZOOM_SCALES.length - 1))]
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
    action: () => ((0, i.setZoom)(o.Accessibility.ZOOM_DEFAULT), !1)
  };
t.default = {
  ZOOM_IN: u,
  ZOOM_OUT: s,
  ZOOM_RESET: d
}