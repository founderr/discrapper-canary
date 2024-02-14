"use strict";
var t, o, n, a;
E.r(_), E.d(_, {
  JumpTypes: function() {
    return t
  },
  RunningProcessFullscreenType: function() {
    return o
  },
  DEFAULT_OVERLAY_OPTIONS: function() {
    return i
  }
}), (n = t || (t = {})).ANIMATED = "ANIMATED", n.INSTANT = "INSTANT", (a = o || (o = {}))[a.UNKNOWN = 0] = "UNKNOWN", a[a.WINDOWED = 1] = "WINDOWED", a[a.MAXIMIZED = 2] = "MAXIMIZED", a[a.BORDERLESS_FULLSCREEN = 3] = "BORDERLESS_FULLSCREEN", a[a.FULLSCREEN = 4] = "FULLSCREEN", a[a.MINIMIZED = 5] = "MINIMIZED";
let i = {
  compatibilityHook: !1,
  warn: !1,
  enabled: !1,
  allowHook: !0,
  supportsOutOfProcessOverlay: !1
}