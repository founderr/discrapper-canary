"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  i = n("414456"),
  s = n.n(i),
  r = n("917351"),
  u = n("819855"),
  o = n("77078"),
  d = n("841098"),
  c = n("449918"),
  f = n("302185"),
  h = n("89050"),
  m = n("843455"),
  g = n("584150"),
  E = l.memo(function(e) {
    let {
      file: t,
      audio: n,
      className: i,
      waveformSettings: E
    } = e, [S, v] = l.useState({
      width: 0,
      height: 0
    }), _ = l.useRef(null), N = l.useMemo(() => {
      var e;
      let t = null !== (e = null == n ? void 0 : n.duration) && void 0 !== e ? e : 1;
      return {
        fineTuning: -1,
        fineTuningResolution: t / h.defaultWaveformConfig.fineTuningScale,
        duration: t,
        ...null != E ? E : {}
      }
    }, [n, E]), p = (0, f.useAudioBufferData)(t), A = (0, f.useAudioWaveformData)(p, _.current, N), D = (0, d.default)(), O = (0, c.useColorValue)((0, u.isThemeDark)(D) ? m.Color.PRIMARY_300 : m.Color.PRIMARY_700), C = null == p || null == A, b = 0 === S.width || 0 === S.height, I = (b || C) && null != t, x = l.useCallback(() => {
      null != _.current && v({
        width: _.current.offsetWidth,
        height: _.current.offsetHeight
      })
    }, []);
    return l.useEffect(() => {
      if (null != _.current) {
        let e = new ResizeObserver((0, r.debounce)(x, 50));
        return e.observe(_.current), () => {
          e.disconnect()
        }
      }
    }, [x]), l.useEffect(() => {
      if (null == _.current) return;
      let e = _.current,
        t = e.getContext("2d");
      if (null == t) return;
      let {
        width: n,
        height: a
      } = e;
      if (0 !== S.width && 0 !== S.height && null != A && A.length > 0) {
        let e = n / A.length,
          l = -(e * (h.defaultWaveformConfig.waveformBarWidth - 1));
        t.clearRect(0, 0, n, a), t.fillStyle = O.hex;
        for (let n = 0; n < A.length; n++) {
          let i = A[n] * a,
            s = n * e + l,
            r = a / 2 - i / 2;
          t.fillRect(s, r, e - l, i)
        }
      }
    }, [O, S, D, A]), (0, a.jsxs)("div", {
      className: s(g.container, i),
      children: [(0, a.jsx)("canvas", {
        className: g.waveformCanvas,
        ref: _,
        width: 4 * S.width,
        height: 4 * S.height
      }), I && (0, a.jsx)("div", {
        className: g.loading,
        children: (0, a.jsx)(o.Spinner, {
          type: o.SpinnerTypes.SPINNING_CIRCLE
        })
      })]
    })
  })