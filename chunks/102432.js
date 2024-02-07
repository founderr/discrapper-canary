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
var l = n("627445"),
  i = n.n(l),
  a = n("718517"),
  s = n("305122"),
  r = n("108391");
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
    let l = new FileReader,
      i = () => {
        l.removeEventListener("load", i), l.removeEventListener("error", n), e(l.result)
      };
    l.addEventListener("load", i), l.addEventListener("error", n), t(l)
  }));
  if ("string" != typeof n) throw Error("Unexpected file type");
  return n
}
async function c(e) {
  let {
    readPromise: t,
    guildId: n,
    name: l,
    volume: i,
    emojiId: a,
    emojiName: r
  } = e;
  return (0, s.uploadSound)({
    guildId: n,
    name: l,
    sound: await t,
    volume: i,
    emojiId: a,
    emojiName: r
  })
}
async function f(e) {
  let t = [],
    n = function(e) {
      let {
        numberOfChannels: t
      } = e, n = [];
      for (let l = 0; l < t; l++) n.push(e.getChannelData(l));
      return n
    }(e),
    l = function(e) {
      if (1 === e.length) return e[0];
      if (2 === e.length) {
        let t = e[0],
          n = e[1],
          l = [];
        for (let e = 0; e < t.length; e++) l.push(t[e]), l.push(n[e]);
        let i = new Float32Array(l.length);
        return i.set(l), i
      }
      throw Error("Only handles up to 2 channels")
    }(n),
    a = new AudioData({
      format: "f32",
      sampleRate: e.sampleRate,
      numberOfFrames: e.length,
      numberOfChannels: e.numberOfChannels,
      timestamp: 1e6 * e.duration,
      data: l
    }),
    s = new AudioEncoder({
      output: function(n) {
        i(null != n.duration, "Chunk duration must not be null");
        let l = n.duration / 1e6 * e.sampleRate,
          a = new Uint8Array(n.byteLength);
        n.copyTo(a), t.push({
          buffer: a,
          numSamples: l
        })
      },
      error: e => {
        throw Error("Audio encoding error: ".concat(e.message))
      }
    });
  s.configure({
    codec: "opus",
    sampleRate: e.sampleRate,
    numberOfChannels: e.numberOfChannels
  }), s.encode(a), await s.flush();
  let u = (0, r.default)(t, {
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
    l = function(e, t) {
      let {
        startMs: n,
        endMs: l
      } = t, {
        sampleRate: i,
        numberOfChannels: s,
        duration: r
      } = e, o = r * a.default.Millis.SECOND, d = Math.min(l, o);
      if (0 === n && d === o) return e;
      let c = Math.floor(n / o * e.length),
        f = Math.floor(d / o * e.length),
        h = u.createBuffer(s, f - c, i);
      for (let t = 0; t < s; t++) {
        let n = h.getChannelData(t),
          l = e.getChannelData(t),
          i = 0;
        for (let e = c; e <= f; e++) n[i] = l[e], i++
      }
      return h
    }(n, t),
    i = await f(l);
  return new File([i], "sound.ogg", {
    type: "audio/ogg"
  })
}