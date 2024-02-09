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
  r = n("748820"),
  i = n("129722"),
  l = n("89050");
let s = new Worker(new URL(n.p + n.u("21401"), n.b)),
  u = new AudioContext;
async function o(e) {
  let t = await e.arrayBuffer(),
    n = await u.decodeAudioData(t);
  return n.getChannelData(0)
}

function d(e) {
  let [t, n] = a.useState(null), [r, i] = a.useState(null);
  return a.useEffect(() => {
    if (null == e) return;
    let t = (0, l.getAudioFileId)(e);
    t !== r && (i(t), n(null), o(e).then(n))
  }, [r, e]), t
}
let c = {
  ...l.defaultWaveformConfig
};

function f(e, t, n) {
  let [u, o] = a.useState(null), [d, f] = a.useState(null), [h, m] = a.useState(1), {
    setMaxVolume: g
  } = (0, i.useAudioTrimmerStore)(), p = a.useCallback((e, t) => {
    var a, i, l, u, o;
    f(null), (a = e, i = t.offsetWidth, l = n, u = c, o = m, new Promise(e => {
      let t = (0, r.v4)(),
        n = a => {
          let {
            data: {
              waveform: r,
              id: i,
              normalizedVolumeMultipler: l
            }
          } = a;
          t === i && (e(r), o(l)), null == s || s.removeEventListener("message", n)
        };
      null == s || s.addEventListener("message", n), null == s || s.postMessage({
        id: t,
        options: l,
        config: u,
        width: i,
        rawBufferData: a
      })
    })).then(f)
  }, [n]);
  return a.useEffect(() => {
    if (null == e || null == t) return;
    let a = (0, l.getWaveformId)(e, n);
    u !== a && (o(a), p(e, t))
  }, [e, p, t, n, u]), a.useEffect(() => {
    g(h)
  }, [h, g]), d
}