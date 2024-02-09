"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var a = n("37983"),
  r = n("884691"),
  i = n("414456"),
  l = n.n(i),
  s = n("917351"),
  u = n("819855"),
  o = n("77078"),
  d = n("841098"),
  c = n("449918"),
  f = n("302185"),
  h = n("89050"),
  m = n("843455"),
  g = n("353295"),
  p = r.memo(function(e) {
    let {
      file: t,
      audio: n,
      className: i,
      waveformSettings: p
    } = e, [v, S] = r.useState({
      width: 0,
      height: 0
    }), C = r.useRef(null), E = r.useMemo(() => {
      var e;
      let t = null !== (e = null == n ? void 0 : n.duration) && void 0 !== e ? e : 1;
      return {
        fineTuning: -1,
        fineTuningResolution: t / h.defaultWaveformConfig.fineTuningScale,
        duration: t,
        ...null != p ? p : {}
      }
    }, [n, p]), _ = (0, f.useAudioBufferData)(t), N = (0, f.useAudioWaveformData)(_, C.current, E), I = (0, d.default)(), O = (0, c.useColorValue)((0, u.isThemeDark)(I) ? m.Color.PRIMARY_300 : m.Color.PRIMARY_700), A = null == _ || null == N, D = 0 === v.width || 0 === v.height, M = (D || A) && null != t, y = r.useCallback(() => {
      null != C.current && S({
        width: C.current.offsetWidth,
        height: C.current.offsetHeight
      })
    }, []);
    return r.useEffect(() => {
      if (null != C.current) {
        let e = new ResizeObserver((0, s.debounce)(y, 50));
        return e.observe(C.current), () => {
          e.disconnect()
        }
      }
    }, [y]), r.useEffect(() => {
      if (null == C.current) return;
      let e = C.current,
        t = e.getContext("2d");
      if (null == t) return;
      let {
        width: n,
        height: a
      } = e;
      if (0 !== v.width && 0 !== v.height && null != N && N.length > 0) {
        let e = n / N.length,
          r = -(e * (h.defaultWaveformConfig.waveformBarWidth - 1));
        t.clearRect(0, 0, n, a), t.fillStyle = O.hex;
        for (let n = 0; n < N.length; n++) {
          let i = N[n] * a,
            l = n * e + r,
            s = a / 2 - i / 2;
          t.fillRect(l, s, e - r, i)
        }
      }
    }, [O, v, I, N]), (0, a.jsxs)("div", {
      className: l(g.container, i),
      children: [(0, a.jsx)("canvas", {
        className: g.waveformCanvas,
        ref: C,
        width: 4 * v.width,
        height: 4 * v.height
      }), M && (0, a.jsx)("div", {
        className: g.loading,
        children: (0, a.jsx)(o.Spinner, {
          type: o.SpinnerTypes.SPINNING_CIRCLE
        })
      })]
    })
  })