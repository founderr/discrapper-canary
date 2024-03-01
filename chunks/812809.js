"use strict";
i.r(e), i.d(e, {
  default: function() {
    return u
  }
});
var n = i("845579"),
  l = i("42887"),
  a = i("829536");

function u(t) {
  let e = function() {
      var t;
      let e = n.SoundboardSettings.getSetting();
      return (0, a.amplitudeToPerceptual)(null !== (t = null == e ? void 0 : e.volume) && void 0 !== t ? t : 100) / 100
    }(),
    i = Math.min(l.default.getOutputVolume() / 100, 1);
  return Math.min(t * e * i, 1)
}