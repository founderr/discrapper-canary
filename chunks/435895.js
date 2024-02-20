"use strict";
n.r(t), n.d(t, {
  playDesktopSound: function() {
    return c
  },
  playWebSound: function() {
    return f
  }
}), n("222007");
var a = n("627445"),
  s = n.n(a),
  l = n("773364"),
  i = n("42887"),
  r = n("812809");
let o = null;
try {
  o = new AudioContext
} catch {}
let u = new Map;
async function d(e) {
  let t = u.get(e);
  if (null != t) return t;
  let n = await (await fetch(e)).arrayBuffer(),
    a = await (null == o ? void 0 : o.decodeAudioData(n));
  return null != a && u.set(e, a), a
}

function c(e) {
  let {
    soundKey: t,
    soundURL: n,
    soundVolume: a,
    reportSoundStartedPlaying: r
  } = e;
  return new Promise(async e => {
    let o = await d(n);
    null == o && e(), i.default.getMediaEngine().eachConnection(n => {
      n.context === l.MediaEngineContextTypes.DEFAULT && (r(), s(null != o, "audioBuffer cannot be null here"), n.startSamplesLocalPlayback(t, o, a, () => {
        e()
      }))
    })
  })
}

function f(e, t) {
  let {
    soundKey: n,
    soundURL: a,
    soundVolume: s,
    reportSoundStartedPlaying: l
  } = e, i = t.get(n);
  if (null != i) {
    i.currentTime = 0;
    return
  }
  return new Promise(e => {
    let i = new Audio(a);
    i.volume = (0, r.default)(s), i.addEventListener("canplaythrough", () => {
      l(), t.set(n, i), i.play()
    }), i.addEventListener("ended", () => {
      t.delete(n), i.src = "", e()
    })
  })
}