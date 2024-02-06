"use strict";
n.r(t), n.d(t, {
  useAudioBufferData: function() {
    return d
  },
  useAudioWaveformData: function() {
    return f
  }
}), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
var i = n("884691"),
  l = n("748820"),
  s = n("129722"),
  r = n("89050");
let a = new Worker(new URL(n.p + n.u("21401"), n.b)),
  u = new AudioContext;
async function o(e) {
  let t = await e.arrayBuffer(),
    n = await u.decodeAudioData(t);
  return n.getChannelData(0)
}

function d(e) {
  let [t, n] = i.useState(null), [l, s] = i.useState(null);
  return i.useEffect(() => {
    if (null == e) return;
    let t = (0, r.getAudioFileId)(e);
    t !== l && (s(t), n(null), o(e).then(n))
  }, [l, e]), t
}
let c = {
  ...r.defaultWaveformConfig
};

function f(e, t, n) {
  let [u, o] = i.useState(null), [d, f] = i.useState(null), [h, m] = i.useState(1), {
    setMaxVolume: g
  } = (0, s.useAudioTrimmerStore)(), E = i.useCallback((e, t) => {
    var i, s, r, u, o;
    f(null), (i = e, s = t.offsetWidth, r = n, u = c, o = m, new Promise(e => {
      let t = (0, l.v4)(),
        n = i => {
          let {
            data: {
              waveform: l,
              id: s,
              normalizedVolumeMultipler: r
            }
          } = i;
          t === s && (e(l), o(r)), null == a || a.removeEventListener("message", n)
        };
      null == a || a.addEventListener("message", n), null == a || a.postMessage({
        id: t,
        options: r,
        config: u,
        width: s,
        rawBufferData: i
      })
    })).then(f)
  }, [n]);
  return i.useEffect(() => {
    if (null == e || null == t) return;
    let i = (0, r.getWaveformId)(e, n);
    u !== i && (o(i), E(e, t))
  }, [e, E, t, n, u]), i.useEffect(() => {
    g(h)
  }, [h, g]), d
}