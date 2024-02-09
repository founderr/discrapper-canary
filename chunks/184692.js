"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("37983"),
  r = n("884691"),
  i = n("129722"),
  l = n("477633"),
  s = r.memo(function(e) {
    let {
      fineTuning: t,
      fineTuningResolution: n,
      duration: r
    } = e, {
      file: s,
      audio: u
    } = (0, i.useAudioTrimmerStore)();
    return (0, a.jsx)(l.default, {
      file: s,
      audio: u,
      waveformSettings: {
        fineTuning: t,
        fineTuningResolution: n,
        duration: r
      }
    })
  })