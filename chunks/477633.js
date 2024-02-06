"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var i = n("37983"),
  l = n("884691"),
  s = n("414456"),
  r = n.n(s),
  a = n("917351"),
  u = n("819855"),
  o = n("77078"),
  d = n("841098"),
  c = n("449918"),
  f = n("302185"),
  h = n("89050"),
  m = n("843455"),
  g = n("353295"),
  E = l.memo(function(e) {
    let {
      file: t,
      audio: n,
      className: s,
      waveformSettings: E
    } = e, [S, v] = l.useState({
      width: 0,
      height: 0
    }), p = l.useRef(null), _ = l.useMemo(() => {
      var e;
      let t = null !== (e = null == n ? void 0 : n.duration) && void 0 !== e ? e : 1;
      return {
        fineTuning: -1,
        fineTuningResolution: t / h.defaultWaveformConfig.fineTuningScale,
        duration: t,
        ...null != E ? E : {}
      }
    }, [n, E]), N = (0, f.useAudioBufferData)(t), C = (0, f.useAudioWaveformData)(N, p.current, _), I = (0, d.default)(), O = (0, c.useColorValue)((0, u.isThemeDark)(I) ? m.Color.PRIMARY_300 : m.Color.PRIMARY_700), A = null == N || null == C, x = 0 === S.width || 0 === S.height, D = (x || A) && null != t, L = l.useCallback(() => {
      null != p.current && v({
        width: p.current.offsetWidth,
        height: p.current.offsetHeight
      })
    }, []);
    return l.useEffect(() => {
      if (null != p.current) {
        let e = new ResizeObserver((0, a.debounce)(L, 50));
        return e.observe(p.current), () => {
          e.disconnect()
        }
      }
    }, [L]), l.useEffect(() => {
      if (null == p.current) return;
      let e = p.current,
        t = e.getContext("2d");
      if (null == t) return;
      let {
        width: n,
        height: i
      } = e;
      if (0 !== S.width && 0 !== S.height && null != C && C.length > 0) {
        let e = n / C.length,
          l = -(e * (h.defaultWaveformConfig.waveformBarWidth - 1));
        t.clearRect(0, 0, n, i), t.fillStyle = O.hex;
        for (let n = 0; n < C.length; n++) {
          let s = C[n] * i,
            r = n * e + l,
            a = i / 2 - s / 2;
          t.fillRect(r, a, e - l, s)
        }
      }
    }, [O, S, I, C]), (0, i.jsxs)("div", {
      className: r(g.container, s),
      children: [(0, i.jsx)("canvas", {
        className: g.waveformCanvas,
        ref: p,
        width: 4 * S.width,
        height: 4 * S.height
      }), D && (0, i.jsx)("div", {
        className: g.loading,
        children: (0, i.jsx)(o.Spinner, {
          type: o.SpinnerTypes.SPINNING_CIRCLE
        })
      })]
    })
  })