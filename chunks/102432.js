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
var a = n("627445"),
  l = n.n(a),
  i = n("718517"),
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
    let a = new FileReader,
      l = () => {
        a.removeEventListener("load", l), a.removeEventListener("error", n), e(a.result)
      };
    a.addEventListener("load", l), a.addEventListener("error", n), t(a)
  }));
  if ("string" != typeof n) throw Error("Unexpected file type");
  return n
}
async function c(e) {
  let {
    readPromise: t,
    guildId: n,
    name: a,
    volume: l,
    emojiId: i,
    emojiName: r
  } = e;
  return (0, s.uploadSound)({
    guildId: n,
    name: a,
    sound: await t,
    volume: l,
    emojiId: i,
    emojiName: r
  })
}
async function f(e) {
  let t = [],
    n = function(e) {
      let {
        numberOfChannels: t
      } = e, n = [];
      for (let a = 0; a < t; a++) n.push(e.getChannelData(a));
      return n
    }(e),
    a = function(e) {
      if (1 === e.length) return e[0];
      if (2 === e.length) {
        let t = e[0],
          n = e[1],
          a = [];
        for (let e = 0; e < t.length; e++) a.push(t[e]), a.push(n[e]);
        let l = new Float32Array(a.length);
        return l.set(a), l
      }
      throw Error("Only handles up to 2 channels")
    }(n),
    i = new AudioData({
      format: "f32",
      sampleRate: e.sampleRate,
      numberOfFrames: e.length,
      numberOfChannels: e.numberOfChannels,
      timestamp: 1e6 * e.duration,
      data: a
    }),
    s = new AudioEncoder({
      output: function(n) {
        l(null != n.duration, "Chunk duration must not be null");
        let a = n.duration / 1e6 * e.sampleRate,
          i = new Uint8Array(n.byteLength);
        n.copyTo(i), t.push({
          buffer: i,
          numSamples: a
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
  }), s.encode(i), await s.flush();
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
    a = function(e, t) {
      let {
        startMs: n,
        endMs: a
      } = t, {
        sampleRate: l,
        numberOfChannels: s,
        duration: r
      } = e, o = r * i.default.Millis.SECOND, d = Math.min(a, o);
      if (0 === n && d === o) return e;
      let c = Math.floor(n / o * e.length),
        f = Math.floor(d / o * e.length),
        h = u.createBuffer(s, f - c, l);
      for (let t = 0; t < s; t++) {
        let n = h.getChannelData(t),
          a = e.getChannelData(t),
          l = 0;
        for (let e = c; e <= f; e++) n[l] = a[e], l++
      }
      return h
    }(n, t),
    l = await f(a);
  return new File([l], "sound.ogg", {
    type: "audio/ogg"
  })
}