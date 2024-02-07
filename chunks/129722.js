"use strict";
n.r(t), n.d(t, {
  useAudioTrimmerStore: function() {
    return r
  }
});
var l = n("308503"),
  i = n("16470"),
  a = n("859971");
let s = (0, l.default)(e => ({
  audio: null,
  file: null,
  loading: !1,
  loadAudioFromFile: async t => {
    if (e({
        file: t,
        audio: null,
        loading: null != t
      }), null == t) return;
    let n = await (0, a.loadAudioFromFile)(t);
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

function r() {
  return s(e => ({
    audio: e.audio,
    file: e.file,
    loading: e.loading,
    loadAudioFromFile: e.loadAudioFromFile,
    maxVolume: e.maxVolume,
    setMaxVolume: e.setMaxVolume
  }), i.default)
}