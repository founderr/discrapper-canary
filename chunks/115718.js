"use strict";
var t, o, I, T;
E.r(_), E.d(_, {
  JumpTypes: function() {
    return t
  },
  RunningProcessFullscreenType: function() {
    return o
  },
  DEFAULT_OVERLAY_OPTIONS: function() {
    return r
  }
}), (I = t || (t = {})).ANIMATED = "ANIMATED", I.INSTANT = "INSTANT", (T = o || (o = {}))[T.UNKNOWN = 0] = "UNKNOWN", T[T.WINDOWED = 1] = "WINDOWED", T[T.MAXIMIZED = 2] = "MAXIMIZED", T[T.BORDERLESS_FULLSCREEN = 3] = "BORDERLESS_FULLSCREEN", T[T.FULLSCREEN = 4] = "FULLSCREEN", T[T.MINIMIZED = 5] = "MINIMIZED";
let r = {
  compatibilityHook: !1,
  warn: !1,
  enabled: !1,
  allowHook: !0,
  supportsOutOfProcessOverlay: !1
}