"use strict";
a.r(t), a.d(t, {
  playDesktopSound: function() {
    return f
  },
  playWebSound: function() {
    return E
  }
}), a("47120");
var n = a("512722"),
  s = a.n(n),
  l = a("46973"),
  i = a("304809"),
  r = a("131951"),
  o = a("747071");
let u = null;
try {
  u = (0, i.getOrCreateAudioContext)()
} catch {}
let d = new Map;
async function c(e) {
  let t = d.get(e);
  if (null != t) return t;
  let a = await (await fetch(e)).arrayBuffer(),
    n = await (null == u ? void 0 : u.decodeAudioData(a));
  return null != n && d.set(e, n), n
}

function f(e) {
  let {
    soundKey: t,
    soundURL: a,
    soundVolume: n,
    reportSoundStartedPlaying: i
  } = e;
  return new Promise(async e => {
    let o = await c(a);
    null == o && e(), r.default.getMediaEngine().eachConnection(a => {
      a.context === l.MediaEngineContextTypes.DEFAULT && (i(), s()(null != o, "audioBuffer cannot be null here"), a.startSamplesLocalPlayback(t, o, n, () => {
        e()
      }))
    })
  })
}

function E(e, t) {
  let {
    soundKey: a,
    soundURL: n,
    soundVolume: s,
    reportSoundStartedPlaying: l
  } = e, i = t.get(a);
  if (null != i) {
    i.currentTime = 0;
    return
  }
  return new Promise(e => {
    let i = new Audio(n);
    i.volume = (0, o.default)(s), i.addEventListener("canplaythrough", () => {
      l(), t.set(a, i), i.play()
    }), i.addEventListener("ended", () => {
      t.delete(a), i.src = "", e()
    })
  })
}