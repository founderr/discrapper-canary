"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var u = n("845579"),
  i = n("42887"),
  a = n("829536");

function l(e) {
  let t = function() {
      var e;
      let t = u.SoundboardSettings.getSetting();
      return (0, a.amplitudeToPerceptual)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 100) / 100
    }(),
    n = Math.min(i.default.getOutputVolume() / 100, 1);
  return Math.min(e * t * n, 1)
}