"use strict";
n.r(t), n.d(t, {
  getDataUrlFromFile: function() {
    return d
  },
  uploadFileReadPromise: function() {
    return c
  },
  trimAndEncodeAudio: function() {
    return h
  }
}), n("70102"), n("424973"), n("370692"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("311790");
var i = n("627445"),
  l = n.n(i),
  s = n("718517"),
  r = n("305122"),
  a = n("108391");
let u = new AudioContext({
  sampleRate: Math.min(new AudioContext().sampleRate, 48e3)
});
async function o(e) {
  let t = await e.arrayBuffer(),
    n = t instanceof ArrayBuffer;
  if (!n) throw Error("Unexpected file type");
  return u.decodeAudioData(t)
}
async function d(e) {
  var t;
  let n = await (t = t => {
    t.readAsDataURL(e)
  }, new Promise((e, n) => {
    let i = new FileReader,
      l = () => {
        i.removeEventListener("load", l), i.removeEventListener("error", n), e(i.result)
      };
    i.addEventListener("load", l), i.addEventListener("error", n), t(i)
  }));
  if ("string" != typeof n) throw Error("Unexpected file type");
  return n
}
async function c(e) {
  let {
    readPromise: t,
    guildId: n,
    name: i,
    volume: l,
    emojiId: s,
    emojiName: a
  } = e;
  return (0, r.uploadSound)({
    guildId: n,
    name: i,
    sound: await t,
    volume: l,
    emojiId: s,
    emojiName: a
  })
}
async function f(e) {
  let t = [],
    n = function(e) {
      let {
        numberOfChannels: t
      } = e, n = [];
      for (let i = 0; i < t; i++) n.push(e.getChannelData(i));
      return n
    }(e),
    i = function(e) {
      if (1 === e.length) return e[0];
      if (2 === e.length) {
        let t = e[0],
          n = e[1],
          i = [];
        for (let e = 0; e < t.length; e++) i.push(t[e]), i.push(n[e]);
        let l = new Float32Array(i.length);
        return l.set(i), l
      }
      throw Error("Only handles up to 2 channels")
    }(n),
    s = new AudioData({
      format: "f32",
      sampleRate: e.sampleRate,
      numberOfFrames: e.length,
      numberOfChannels: e.numberOfChannels,
      timestamp: 1e6 * e.duration,
      data: i
    }),
    r = new AudioEncoder({
      output: function(n) {
        l(null != n.duration, "Chunk duration must not be null");
        let i = n.duration / 1e6 * e.sampleRate,
          s = new Uint8Array(n.byteLength);
        n.copyTo(s), t.push({
          buffer: s,
          numSamples: i
        })
      },
      error: e => {
        throw Error("Audio encoding error: ".concat(e.message))
      }
    });
  r.configure({
    codec: "opus",
    sampleRate: e.sampleRate,
    numberOfChannels: e.numberOfChannels
  }), r.encode(s), await r.flush();
  let u = (0, a.default)(t, {
    channelCount: e.numberOfChannels,
    inputSampleRate: e.sampleRate,
    outputGain: 0,
    channelMappingFamily: 0
  });
  return new Blob([u], {
    type: "audio/ogg"
  })
}
async function h(e, t) {
  let n = await o(e),
    i = function(e, t) {
      let {
        startMs: n,
        endMs: i
      } = t, {
        sampleRate: l,
        numberOfChannels: r,
        duration: a
      } = e, o = a * s.default.Millis.SECOND, d = Math.min(i, o);
      if (0 === n && d === o) return e;
      let c = Math.floor(n / o * e.length),
        f = Math.floor(d / o * e.length),
        h = u.createBuffer(r, f - c, l);
      for (let t = 0; t < r; t++) {
        let n = h.getChannelData(t),
          i = e.getChannelData(t),
          l = 0;
        for (let e = c; e <= f; e++) n[l] = i[e], l++
      }
      return h
    }(n, t),
    l = await f(i);
  return new File([l], "sound.ogg", {
    type: "audio/ogg"
  })
}