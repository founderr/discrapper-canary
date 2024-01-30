"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var l = n("845579"),
  i = n("42887"),
  u = n("829536");

function a(e) {
  let t = function() {
      var e;
      let t = l.SoundboardSettings.getSetting();
      return (0, u.amplitudeToPerceptual)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 100) / 100
    }(),
    n = Math.min(i.default.getOutputVolume() / 100, 1);
  return Math.min(e * t * n, 1)
}