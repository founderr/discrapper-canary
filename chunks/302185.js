"use strict";
n.r(t), n.d(t, {
  useAudioBufferData: function() {
    return d
  },
  useAudioWaveformData: function() {
    return f
  }
}), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
var l = n("884691"),
  i = n("748820"),
  a = n("129722"),
  s = n("89050");
let r = new Worker(new URL(n.p + n.u("21401"), n.b)),
  u = new AudioContext;
async function o(e) {
  let t = await e.arrayBuffer(),
    n = await u.decodeAudioData(t);
  return n.getChannelData(0)
}

function d(e) {
  let [t, n] = l.useState(null), [i, a] = l.useState(null);
  return l.useEffect(() => {
    if (null == e) return;
    let t = (0, s.getAudioFileId)(e);
    t !== i && (a(t), n(null), o(e).then(n))
  }, [i, e]), t
}
let c = {
  ...s.defaultWaveformConfig
};

function f(e, t, n) {
  let [u, o] = l.useState(null), [d, f] = l.useState(null), [h, m] = l.useState(1), {
    setMaxVolume: g
  } = (0, a.useAudioTrimmerStore)(), S = l.useCallback((e, t) => {
    var l, a, s, u, o;
    f(null), (l = e, a = t.offsetWidth, s = n, u = c, o = m, new Promise(e => {
      let t = (0, i.v4)(),
        n = l => {
          let {
            data: {
              waveform: i,
              id: a,
              normalizedVolumeMultipler: s
            }
          } = l;
          t === a && (e(i), o(s)), null == r || r.removeEventListener("message", n)
        };
      null == r || r.addEventListener("message", n), null == r || r.postMessage({
        id: t,
        options: s,
        config: u,
        width: a,
        rawBufferData: l
      })
    })).then(f)
  }, [n]);
  return l.useEffect(() => {
    if (null == e || null == t) return;
    let l = (0, s.getWaveformId)(e, n);
    u !== l && (o(l), S(e, t))
  }, [e, S, t, n, u]), l.useEffect(() => {
    g(h)
  }, [h, g]), d
}