"use strict";
n.r(t), n.d(t, {
  useAudioBufferData: function() {
    return d
  },
  useAudioWaveformData: function() {
    return f
  }
}), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
var a = n("884691"),
  l = n("748820"),
  i = n("129722"),
  s = n("89050");
let r = new Worker(new URL(n.p + n.u("21401"), n.b)),
  u = new AudioContext;
async function o(e) {
  let t = await e.arrayBuffer(),
    n = await u.decodeAudioData(t);
  return n.getChannelData(0)
}

function d(e) {
  let [t, n] = a.useState(null), [l, i] = a.useState(null);
  return a.useEffect(() => {
    if (null == e) return;
    let t = (0, s.getAudioFileId)(e);
    t !== l && (i(t), n(null), o(e).then(n))
  }, [l, e]), t
}
let c = {
  ...s.defaultWaveformConfig
};

function f(e, t, n) {
  let [u, o] = a.useState(null), [d, f] = a.useState(null), [h, m] = a.useState(1), {
    setMaxVolume: g
  } = (0, i.useAudioTrimmerStore)(), E = a.useCallback((e, t) => {
    var a, i, s, u, o;
    f(null), (a = e, i = t.offsetWidth, s = n, u = c, o = m, new Promise(e => {
      let t = (0, l.v4)(),
        n = a => {
          let {
            data: {
              waveform: l,
              id: i,
              normalizedVolumeMultipler: s
            }
          } = a;
          t === i && (e(l), o(s)), null == r || r.removeEventListener("message", n)
        };
      null == r || r.addEventListener("message", n), null == r || r.postMessage({
        id: t,
        options: s,
        config: u,
        width: i,
        rawBufferData: a
      })
    })).then(f)
  }, [n]);
  return a.useEffect(() => {
    if (null == e || null == t) return;
    let a = (0, s.getWaveformId)(e, n);
    u !== a && (o(a), E(e, t))
  }, [e, E, t, n, u]), a.useEffect(() => {
    g(h)
  }, [h, g]), d
}