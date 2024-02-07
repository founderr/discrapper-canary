"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("37983"),
  i = n("884691"),
  a = n("129722"),
  s = n("477633"),
  r = i.memo(function(e) {
    let {
      fineTuning: t,
      fineTuningResolution: n,
      duration: i
    } = e, {
      file: r,
      audio: u
    } = (0, a.useAudioTrimmerStore)();
    return (0, l.jsx)(s.default, {
      file: r,
      audio: u,
      waveformSettings: {
        fineTuning: t,
        fineTuningResolution: n,
        duration: i
      }
    })
  })