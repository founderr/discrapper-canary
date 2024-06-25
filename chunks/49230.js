n.d(t, {
  $: function() {
    return E
  },
  h: function() {
    return h
  }
}), n(47120);
var s = n(512722),
  i = n.n(s),
  l = n(46973),
  a = n(304809),
  r = n(131951),
  o = n(747071);
let c = null;
try {
  c = (0, a.N)()
} catch {}
let u = new Map;
async function d(e) {
  let t = u.get(e);
  if (null != t) return t;
  let n = await (await fetch(e)).arrayBuffer(),
    s = await (null == c ? void 0 : c.decodeAudioData(n));
  return null != s && u.set(e, s), s
}

function E(e) {
  let {
    soundKey: t,
    soundURL: n,
    soundVolume: s,
    reportSoundStartedPlaying: a
  } = e;
  return new Promise(async e => {
    let o = await d(n);
    null == o && e(), r.Z.getMediaEngine().eachConnection(n => {
      n.context === l.Yn.DEFAULT && (a(), i()(null != o, "audioBuffer cannot be null here"), n.startSamplesLocalPlayback(t, o, s, () => {
        e()
      }))
    })
  })
}

function h(e, t) {
  let {
    soundKey: n,
    soundURL: s,
    soundVolume: i,
    reportSoundStartedPlaying: l
  } = e, a = t.get(n);
  if (null != a) {
    a.currentTime = 0;
    return
  }
  return new Promise(e => {
    let a = new Audio(s);
    a.volume = (0, o.Z)(i), a.addEventListener("canplaythrough", () => {
      l(), t.set(n, a), a.play()
    }), a.addEventListener("ended", () => {
      t.delete(n), a.src = "", e()
    })
  })
}