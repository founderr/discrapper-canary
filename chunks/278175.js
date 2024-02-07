"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var l, i, a = n("37983"),
  s = n("884691"),
  r = n("414456"),
  u = n.n(r),
  o = n("461380"),
  d = n("718517"),
  c = n("129722"),
  f = n("859971"),
  h = n("184692"),
  m = n("89050"),
  g = n("721013");
(i = l || (l = {}))[i.START = 0] = "START", i[i.PLAYHEAD = 1] = "PLAYHEAD", i[i.END = 2] = "END";
var S = s.memo(function(e) {
  let {
    playing: t,
    onPausePlayback: n,
    onPlaybackChange: l,
    onChangePosition: i,
    disabled: r = !1
  } = e, S = {
    ...m.defaultWaveformConfig
  }, {
    audio: p
  } = (0, c.useAudioTrimmerStore)(), v = null != p, C = s.useRef(null), E = s.useRef(null), _ = s.useRef(null), [N, A] = s.useState(0), [D, y] = s.useState(0), [O, I] = s.useState(0), [x, b] = s.useState(!1), [M, w] = s.useState(!1), [T, L] = s.useState(!1), [R, U] = s.useState(0), [j, P] = s.useState(-1), k = s.useMemo(() => R / S.fineTuningScale, [S.fineTuningScale, R]);
  s.useEffect(() => {
    if (null == p) return;
    let e = p.duration * d.default.Millis.SECOND;
    A(0), y(0), I(e), U(e)
  }, [p]);
  let F = s.useCallback((e, t) => {
      if (n(), 0 === e.button) switch (t) {
        case 0:
          b(!0);
          break;
        case 1:
          w(!0);
          break;
        case 2:
          L(!0)
      }
    }, [n]),
    B = s.useCallback(e => {
      switch (e) {
        case 0:
          b(!1);
          break;
        case 1:
          w(!1);
          break;
        case 2:
          L(!1)
      }
      P(-1)
    }, []),
    V = s.useCallback(e => {
      if (null == p || !x) return;
      let t = parseInt(e.target.value),
        n = t > O ? O : t;
      l((0, f.toSeconds)(n)), A(n), y(n)
    }, [p, l, O, x]),
    H = s.useCallback(e => {
      if (null == p || !M) return;
      let t = parseInt(e.target.value);
      t < N ? (l((0, f.toSeconds)(N)), y(N)) : t > O ? (l((0, f.toSeconds)(O)), y(O)) : (l((0, f.toSeconds)(t)), y(t))
    }, [p, l, O, M, N]),
    G = s.useCallback(e => {
      if (null == p || !T) return;
      let t = parseInt(e.target.value),
        n = t > N ? t : N;
      l((0, f.toSeconds)(N)), y(N), I(n)
    }, [p, l, T, N]);
  return s.useEffect(() => {
    null != i && v && i({
      startPositionMs: N,
      endPositionMs: O,
      playheadPositionMs: D
    })
  }, [N, O, i, v, D]), s.useEffect(() => {
    let e;
    if (null != p) return t && (e = setInterval(() => {
      p.currentTime < (0, f.toSeconds)(O) ? p.currentTime >= (0, f.toSeconds)(D) && y(p.currentTime * d.default.Millis.SECOND) : (n((0, f.toSeconds)(N)), y(N))
    }, 16)), () => {
      clearInterval(e)
    }
  }, [p, O, n, D, t, N]), s.useEffect(() => {
    if (S.fineTuningDelay <= 0) return;
    let e = setTimeout(() => {
      x && N == N && -1 === j ? P(N) : T && O == O && -1 === j ? P(O) : M && D == D && -1 === j && P(D)
    }, S.fineTuningDelay);
    return () => {
      clearTimeout(e)
    }
  }, [S.fineTuningDelay, T, O, j, M, D, x, N]), (0, a.jsxs)("div", {
    className: u(g.timeline, {
      [g.initialized]: v
    }),
    children: [(0, a.jsxs)("div", {
      className: g.rangeHandleContainer,
      children: [(0, a.jsxs)("div", {
        className: g.rangeHandleFrame,
        children: [(0, a.jsx)("input", {
          ref: C,
          className: u(g.rangeHandle, g.rangeHandleStart),
          type: "range",
          min: (0, f.getMinValue)(j, k, R),
          max: (0, f.getMaxValue)(j, k, R),
          value: N,
          onChange: V,
          onMouseDown: e => F(e, 0),
          onMouseUp: () => B(0),
          disabled: !v || r
        }), (0, a.jsx)("input", {
          ref: _,
          className: u(g.rangeHandle, g.rangeHandleEnd),
          type: "range",
          min: (0, f.getMinValue)(j, k, R),
          max: (0, f.getMaxValue)(j, k, R),
          value: O,
          onChange: G,
          onMouseDown: e => F(e, 2),
          onMouseUp: () => B(2),
          disabled: !v || r
        })]
      }), (0, a.jsx)("div", {
        className: g.handlePlayheadTrack,
        children: (0, a.jsx)("input", {
          ref: E,
          className: u(g.rangeHandle, g.rangeHandlePlayhead),
          type: "range",
          min: (0, f.getMinValue)(j, k, R),
          max: (0, f.getMaxValue)(j, k, R),
          value: D,
          onChange: H,
          onMouseDown: e => F(e, 1),
          onMouseUp: () => B(1),
          disabled: !v || r
        })
      })]
    }), (0, a.jsxs)("div", {
      className: g.handleContainer,
      children: [(0, a.jsxs)("div", {
        className: u(g.handleFrame, {
          [g.startDragging]: x,
          [g.endDragging]: T
        }),
        style: {
          left: "".concat((0, f.getStartHandleValue)(N, j, k, R), "%"),
          right: "".concat((0, f.getEndHandleValue)(O, j, k, R), "%")
        },
        children: [(0, a.jsx)("div", {
          className: u(g.handleIconFrame, g.handleIconFrameStart),
          children: (0, a.jsx)("div", {
            className: u(g.handleIconContainer, g.start),
            children: (0, a.jsx)(o.default, {
              direction: o.default.Directions.RIGHT,
              className: g.handleIcon,
              width: 16,
              height: 16
            })
          })
        }), (0, a.jsx)("div", {
          className: u(g.handleIconFrame, g.handleIconFrameEnd),
          children: (0, a.jsx)("div", {
            className: u(g.handleIconContainer, g.end),
            children: (0, a.jsx)(o.default, {
              direction: o.default.Directions.LEFT,
              className: g.handleIcon,
              width: 16,
              height: 16
            })
          })
        })]
      }), (0, a.jsx)("div", {
        className: g.playheadTrack,
        children: (0, a.jsx)("div", {
          className: u(g.playhead, {
            [g.dragging]: M || x || T || t
          }),
          style: {
            left: "".concat((0, f.getStartHandleValue)(D, j, k, R), "%")
          }
        })
      })]
    }), (0, a.jsx)("div", {
      className: g.waveformContainer,
      children: (0, a.jsx)(h.default, {
        fineTuning: j,
        fineTuningResolution: k,
        duration: R
      })
    })]
  })
})