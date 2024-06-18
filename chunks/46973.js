"use strict";
n.d(t, {
  Mt: function() {
    return T
  },
  Sh: function() {
    return u.S
  },
  TO: function() {
    return l
  },
  W$: function() {
    return o
  },
  Yn: function() {
    return d.Yn
  },
  aB: function() {
    return c.a
  },
  aj: function() {
    return _.a
  },
  jj: function() {
    return I
  },
  zZ: function() {
    return a
  }
});
var i, r, s, o, a, l, u = n(839548),
  _ = n(60541),
  c = n(946695),
  d = n(65154);

function E(e) {
  switch (e) {
    case d.AS.NATIVE:
      return n(743426).Z;
    case d.AS.WEBRTC:
      return n(959856).Z;
    case d.AS.DUMMY:
    default:
      return n(135670).Z
  }
}

function I() {
  var e;
  return null !== (e = [d.AS.NATIVE, d.AS.WEBRTC].find(e => E(e).supported())) && void 0 !== e ? e : d.AS.DUMMY
}

function T(e) {
  return new(E(e))
}(i = o || (o = {})).INPUT_DEVICE = "input_device", i.STREAM = "stream", (r = a || (a = {})).NONE = "", r.BACKGROUND_BLUR = "background_blur", r.BACKGROUND_REPLACEMENT = "background_replacement", (s = l || (l = {})).CAMERA_BACKGROUND_PREVIEW = "cameraBackgroundPreview", s.CAMERA_BACKGROUND_LIVE = "cameraBackgroundLive"