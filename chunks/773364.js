"use strict";
n.r(t), n.d(t, {
  BaseConnectionEvent: function() {
    return u.BaseConnectionEvent
  },
  BaseSpeedTesterEvent: function() {
    return c.BaseSpeedTesterEvent
  },
  MediaEngineEvent: function() {
    return d.MediaEngineEvent
  },
  MediaEngineContextTypes: function() {
    return p.MediaEngineContextTypes
  },
  FilterTargetType: function() {
    return a
  },
  FilterSettingsGraph: function() {
    return o
  },
  FilterSettingsKey: function() {
    return l
  },
  determineMediaEngine: function() {
    return f
  },
  initializeMediaEngine: function() {
    return E
  }
});
var i, r, s, a, o, l, u = n("947279"),
  c = n("571877"),
  d = n("775766"),
  p = n("353927");

function h(e) {
  switch (e) {
    case p.MediaEngineImplementations.NATIVE:
      return n("741397").default;
    case p.MediaEngineImplementations.WEBRTC:
      return n("551079").default;
    case p.MediaEngineImplementations.DUMMY:
    default:
      return n("870630").default
  }
}

function f() {
  var e;
  return null !== (e = [p.MediaEngineImplementations.NATIVE, p.MediaEngineImplementations.WEBRTC].find(e => h(e).supported())) && void 0 !== e ? e : p.MediaEngineImplementations.DUMMY
}

function E(e) {
  let t = h(e);
  return new t
}(i = a || (a = {})).INPUT_DEVICE = "input_device", i.STREAM = "stream", (r = o || (o = {})).NONE = "", r.BACKGROUND_BLUR = "background_blur", r.BACKGROUND_REPLACEMENT = "background_replacement", (s = l || (l = {})).CAMERA_BACKGROUND_PREVIEW = "cameraBackgroundPreview", s.CAMERA_BACKGROUND_LIVE = "cameraBackgroundLive"