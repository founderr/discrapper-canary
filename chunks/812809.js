"use strict";
s.r(t), s.d(t, {
  default: function() {
    return a
  }
});
var n = s("845579"),
  l = s("42887"),
  i = s("829536");

function a(e) {
  let t = function() {
      var e;
      let t = n.SoundboardSettings.getSetting();
      return (0, i.amplitudeToPerceptual)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 100) / 100
    }(),
    s = Math.min(l.default.getOutputVolume() / 100, 1);
  return Math.min(e * t * s, 1)
}