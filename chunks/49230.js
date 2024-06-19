n.d(t, {
  $: function() {
    return E
  },
  h: function() {
    return h
  }
}), n(47120);
var i = n(512722),
  s = n.n(i),
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
    i = await (null == c ? void 0 : c.decodeAudioData(n));
  return null != i && u.set(e, i), i
}

function E(e) {
  let {
    soundKey: t,
    soundURL: n,
    soundVolume: i,
    reportSoundStartedPlaying: a
  } = e;
  return new Promise(async e => {
    let o = await d(n);
    null == o && e(), r.Z.getMediaEngine().eachConnection(n => {
      n.context === l.Yn.DEFAULT && (a(), s()(null != o, "audioBuffer cannot be null here"), n.startSamplesLocalPlayback(t, o, i, () => {
        e()
      }))
    })
  })
}

function h(e, t) {
  let {
    soundKey: n,
    soundURL: i,
    soundVolume: s,
    reportSoundStartedPlaying: l
  } = e, a = t.get(n);
  if (null != a) {
    a.currentTime = 0;
    return
  }
  return new Promise(e => {
    let a = new Audio(i);
    a.volume = (0, o.Z)(s), a.addEventListener("canplaythrough", () => {
      l(), t.set(n, a), a.play()
    }), a.addEventListener("ended", () => {
      t.delete(n), a.src = "", e()
    })
  })
}