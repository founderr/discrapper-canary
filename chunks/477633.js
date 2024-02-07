"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("917351"),
  u = n("819855"),
  o = n("77078"),
  d = n("841098"),
  c = n("449918"),
  f = n("302185"),
  h = n("89050"),
  m = n("843455"),
  g = n("353295"),
  S = i.memo(function(e) {
    let {
      file: t,
      audio: n,
      className: a,
      waveformSettings: S
    } = e, [p, v] = i.useState({
      width: 0,
      height: 0
    }), C = i.useRef(null), E = i.useMemo(() => {
      var e;
      let t = null !== (e = null == n ? void 0 : n.duration) && void 0 !== e ? e : 1;
      return {
        fineTuning: -1,
        fineTuningResolution: t / h.defaultWaveformConfig.fineTuningScale,
        duration: t,
        ...null != S ? S : {}
      }
    }, [n, S]), _ = (0, f.useAudioBufferData)(t), N = (0, f.useAudioWaveformData)(_, C.current, E), A = (0, d.default)(), D = (0, c.useColorValue)((0, u.isThemeDark)(A) ? m.Color.PRIMARY_300 : m.Color.PRIMARY_700), y = null == _ || null == N, O = 0 === p.width || 0 === p.height, I = (O || y) && null != t, x = i.useCallback(() => {
      null != C.current && v({
        width: C.current.offsetWidth,
        height: C.current.offsetHeight
      })
    }, []);
    return i.useEffect(() => {
      if (null != C.current) {
        let e = new ResizeObserver((0, r.debounce)(x, 50));
        return e.observe(C.current), () => {
          e.disconnect()
        }
      }
    }, [x]), i.useEffect(() => {
      if (null == C.current) return;
      let e = C.current,
        t = e.getContext("2d");
      if (null == t) return;
      let {
        width: n,
        height: l
      } = e;
      if (0 !== p.width && 0 !== p.height && null != N && N.length > 0) {
        let e = n / N.length,
          i = -(e * (h.defaultWaveformConfig.waveformBarWidth - 1));
        t.clearRect(0, 0, n, l), t.fillStyle = D.hex;
        for (let n = 0; n < N.length; n++) {
          let a = N[n] * l,
            s = n * e + i,
            r = l / 2 - a / 2;
          t.fillRect(s, r, e - i, a)
        }
      }
    }, [D, p, A, N]), (0, l.jsxs)("div", {
      className: s(g.container, a),
      children: [(0, l.jsx)("canvas", {
        className: g.waveformCanvas,
        ref: C,
        width: 4 * p.width,
        height: 4 * p.height
      }), I && (0, l.jsx)("div", {
        className: g.loading,
        children: (0, l.jsx)(o.Spinner, {
          type: o.SpinnerTypes.SPINNING_CIRCLE
        })
      })]
    })
  })