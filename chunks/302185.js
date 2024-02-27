"use strict";
n.r(t), n.d(t, {
  useAudioBufferData: function() {
    return c
  },
  useAudioWaveformData: function() {
    return h
  }
}), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
var a = n("884691"),
  l = n("748820"),
  i = n("804998"),
  s = n("129722"),
  r = n("89050");
let u = new Worker(new URL(n.p + n.u("21401"), n.b)),
  o = (0, i.getOrCreateAudioContext)();
async function d(e) {
  let t = await e.arrayBuffer(),
    n = await o.decodeAudioData(t);
  return n.getChannelData(0)
}

function c(e) {
  let [t, n] = a.useState(null), [l, i] = a.useState(null);
  return a.useEffect(() => {
    if (null == e) return;
    let t = (0, r.getAudioFileId)(e);
    t !== l && (i(t), n(null), d(e).then(n))
  }, [l, e]), t
}
let f = {
  ...r.defaultWaveformConfig
};

function h(e, t, n) {
  let [i, o] = a.useState(null), [d, c] = a.useState(null), [h, m] = a.useState(1), {
    setMaxVolume: g
  } = (0, s.useAudioTrimmerStore)(), E = a.useCallback((e, t) => {
    var a, i, s, r, o;
    c(null), (a = e, i = t.offsetWidth, s = n, r = f, o = m, new Promise(e => {
      let t = (0, l.v4)(),
        n = a => {
          let {
            data: {
              waveform: l,
              id: i,
              normalizedVolumeMultipler: s
            }
          } = a;
          t === i && (e(l), o(s)), null == u || u.removeEventListener("message", n)
        };
      null == u || u.addEventListener("message", n), null == u || u.postMessage({
        id: t,
        options: s,
        config: r,
        width: i,
        rawBufferData: a
      })
    })).then(c)
  }, [n]);
  return a.useEffect(() => {
    if (null == e || null == t) return;
    let a = (0, r.getWaveformId)(e, n);
    i !== a && (o(a), E(e, t))
  }, [e, E, t, n, i]), a.useEffect(() => {
    g(h)
  }, [h, g]), d
}