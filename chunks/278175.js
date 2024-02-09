"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var a, r, i = n("37983"),
  l = n("884691"),
  s = n("414456"),
  u = n.n(s),
  o = n("461380"),
  d = n("718517"),
  c = n("129722"),
  f = n("859971"),
  h = n("184692"),
  m = n("89050"),
  g = n("721013");
(r = a || (a = {}))[r.START = 0] = "START", r[r.PLAYHEAD = 1] = "PLAYHEAD", r[r.END = 2] = "END";
var p = l.memo(function(e) {
  let {
    playing: t,
    onPausePlayback: n,
    onPlaybackChange: a,
    onChangePosition: r,
    disabled: s = !1
  } = e, p = {
    ...m.defaultWaveformConfig
  }, {
    audio: v
  } = (0, c.useAudioTrimmerStore)(), S = null != v, C = l.useRef(null), E = l.useRef(null), _ = l.useRef(null), [N, I] = l.useState(0), [O, A] = l.useState(0), [D, M] = l.useState(0), [y, b] = l.useState(!1), [x, w] = l.useState(!1), [T, L] = l.useState(!1), [R, U] = l.useState(0), [P, j] = l.useState(-1), k = l.useMemo(() => R / p.fineTuningScale, [p.fineTuningScale, R]);
  l.useEffect(() => {
    if (null == v) return;
    let e = v.duration * d.default.Millis.SECOND;
    I(0), A(0), M(e), U(e)
  }, [v]);
  let F = l.useCallback((e, t) => {
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
    B = l.useCallback(e => {
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
      j(-1)
    }, []),
    V = l.useCallback(e => {
      if (null == v || !y) return;
      let t = parseInt(e.target.value),
        n = t > D ? D : t;
      a((0, f.toSeconds)(n)), I(n), A(n)
    }, [v, a, D, y]),
    H = l.useCallback(e => {
      if (null == v || !x) return;
      let t = parseInt(e.target.value);
      t < N ? (a((0, f.toSeconds)(N)), A(N)) : t > D ? (a((0, f.toSeconds)(D)), A(D)) : (a((0, f.toSeconds)(t)), A(t))
    }, [v, a, D, x, N]),
    G = l.useCallback(e => {
      if (null == v || !T) return;
      let t = parseInt(e.target.value),
        n = t > N ? t : N;
      a((0, f.toSeconds)(N)), A(N), M(n)
    }, [v, a, T, N]);
  return l.useEffect(() => {
    null != r && S && r({
      startPositionMs: N,
      endPositionMs: D,
      playheadPositionMs: O
    })
  }, [N, D, r, S, O]), l.useEffect(() => {
    let e;
    if (null != v) return t && (e = setInterval(() => {
      v.currentTime < (0, f.toSeconds)(D) ? v.currentTime >= (0, f.toSeconds)(O) && A(v.currentTime * d.default.Millis.SECOND) : (n((0, f.toSeconds)(N)), A(N))
    }, 16)), () => {
      clearInterval(e)
    }
  }, [v, D, n, O, t, N]), l.useEffect(() => {
    if (p.fineTuningDelay <= 0) return;
    let e = setTimeout(() => {
      y && N == N && -1 === P ? j(N) : T && D == D && -1 === P ? j(D) : x && O == O && -1 === P && j(O)
    }, p.fineTuningDelay);
    return () => {
      clearTimeout(e)
    }
  }, [p.fineTuningDelay, T, D, P, x, O, y, N]), (0, i.jsxs)("div", {
    className: u(g.timeline, {
      [g.initialized]: S
    }),
    children: [(0, i.jsxs)("div", {
      className: g.rangeHandleContainer,
      children: [(0, i.jsxs)("div", {
        className: g.rangeHandleFrame,
        children: [(0, i.jsx)("input", {
          ref: C,
          className: u(g.rangeHandle, g.rangeHandleStart),
          type: "range",
          min: (0, f.getMinValue)(P, k, R),
          max: (0, f.getMaxValue)(P, k, R),
          value: N,
          onChange: V,
          onMouseDown: e => F(e, 0),
          onMouseUp: () => B(0),
          disabled: !S || s
        }), (0, i.jsx)("input", {
          ref: _,
          className: u(g.rangeHandle, g.rangeHandleEnd),
          type: "range",
          min: (0, f.getMinValue)(P, k, R),
          max: (0, f.getMaxValue)(P, k, R),
          value: D,
          onChange: G,
          onMouseDown: e => F(e, 2),
          onMouseUp: () => B(2),
          disabled: !S || s
        })]
      }), (0, i.jsx)("div", {
        className: g.handlePlayheadTrack,
        children: (0, i.jsx)("input", {
          ref: E,
          className: u(g.rangeHandle, g.rangeHandlePlayhead),
          type: "range",
          min: (0, f.getMinValue)(P, k, R),
          max: (0, f.getMaxValue)(P, k, R),
          value: O,
          onChange: H,
          onMouseDown: e => F(e, 1),
          onMouseUp: () => B(1),
          disabled: !S || s
        })
      })]
    }), (0, i.jsxs)("div", {
      className: g.handleContainer,
      children: [(0, i.jsxs)("div", {
        className: u(g.handleFrame, {
          [g.startDragging]: y,
          [g.endDragging]: T
        }),
        style: {
          left: "".concat((0, f.getStartHandleValue)(N, P, k, R), "%"),
          right: "".concat((0, f.getEndHandleValue)(D, P, k, R), "%")
        },
        children: [(0, i.jsx)("div", {
          className: u(g.handleIconFrame, g.handleIconFrameStart),
          children: (0, i.jsx)("div", {
            className: u(g.handleIconContainer, g.start),
            children: (0, i.jsx)(o.default, {
              direction: o.default.Directions.RIGHT,
              className: g.handleIcon,
              width: 16,
              height: 16
            })
          })
        }), (0, i.jsx)("div", {
          className: u(g.handleIconFrame, g.handleIconFrameEnd),
          children: (0, i.jsx)("div", {
            className: u(g.handleIconContainer, g.end),
            children: (0, i.jsx)(o.default, {
              direction: o.default.Directions.LEFT,
              className: g.handleIcon,
              width: 16,
              height: 16
            })
          })
        })]
      }), (0, i.jsx)("div", {
        className: g.playheadTrack,
        children: (0, i.jsx)("div", {
          className: u(g.playhead, {
            [g.dragging]: x || y || T || t
          }),
          style: {
            left: "".concat((0, f.getStartHandleValue)(O, P, k, R), "%")
          }
        })
      })]
    }), (0, i.jsx)("div", {
      className: g.waveformContainer,
      children: (0, i.jsx)(h.default, {
        fineTuning: P,
        fineTuningResolution: k,
        duration: R
      })
    })]
  })
})