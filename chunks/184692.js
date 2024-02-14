"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("37983"),
  l = n("884691"),
  i = n("129722"),
  s = n("477633"),
  r = l.memo(function(e) {
    let {
      fineTuning: t,
      fineTuningResolution: n,
      duration: l
    } = e, {
      file: r,
      audio: u
    } = (0, i.useAudioTrimmerStore)();
    return (0, a.jsx)(s.default, {
      file: r,
      audio: u,
      waveformSettings: {
        fineTuning: t,
        fineTuningResolution: n,
        duration: l
      }
    })
  })