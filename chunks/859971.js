"use strict";
n.r(t), n.d(t, {
  getMinValue: function() {
    return i
  },
  toSeconds: function() {
    return s
  },
  getMaxValue: function() {
    return r
  },
  getStartHandleValue: function() {
    return u
  },
  getEndHandleValue: function() {
    return o
  },
  loadAudioFromFile: function() {
    return d
  },
  loadAudioFileFromUrl: function() {
    return c
  }
}), n("70102"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
var a = n("89050"),
  l = n("782340");
let i = (e, t, n) => -1 === e ? 0 : e - t * e / n;

function s(e) {
  return e / 1e3
}
let r = (e, t, n) => -1 === e ? n : e + t * (n - e) / n,
  u = (e, t, n, a) => {
    let l = 0;
    return (l = t >= 0 && n > 0 ? (e - (t - n * t / a)) * 100 / n : 100 * e / a).toFixed(4)
  },
  o = (e, t, n, a) => {
    let l = 0;
    return (l = t >= 0 && n > 0 ? -((e - (t + n * (a - t) / a)) * 100) / n : -100 * e / a + 100).toFixed(4)
  };
async function d(e) {
  var t;
  if (!(e.type.startsWith("audio") || e.type.startsWith("video")) || !a.SUPPORTED_AUDIO_FILE_TYPES.has(e.type)) throw Error(l.default.Messages.SOUNDBOARD_ERROR_INVALID_FILE_TYPE.format({
    fileType: e.type
  }));
  let n = URL.createObjectURL(e),
    i = new Audio(n);
  return await (t = i, new Promise(e => {
    let n = () => {
      e(), t.removeEventListener("canplaythrough", n)
    };
    t.addEventListener("canplaythrough", n), t.load()
  })), i
}
async function c(e, t) {
  let n = await fetch(e),
    a = await n.blob();
  return new File([a], t, {
    type: "audio/mp3"
  })
}