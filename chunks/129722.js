"use strict";
n.r(t), n.d(t, {
  useAudioTrimmerStore: function() {
    return s
  }
});
var a = n("308503"),
  r = n("16470"),
  i = n("859971");
let l = (0, a.default)(e => ({
  audio: null,
  file: null,
  loading: !1,
  loadAudioFromFile: async t => {
    if (e({
        file: t,
        audio: null,
        loading: null != t
      }), null == t) return;
    let n = await (0, i.loadAudioFromFile)(t);
    null != n && e({
      audio: n,
      loading: !1
    })
  },
  maxVolume: 1,
  setMaxVolume: t => {
    e({
      maxVolume: t
    })
  }
}));

function s() {
  return l(e => ({
    audio: e.audio,
    file: e.file,
    loading: e.loading,
    loadAudioFromFile: e.loadAudioFromFile,
    maxVolume: e.maxVolume,
    setMaxVolume: e.setMaxVolume
  }), r.default)
}