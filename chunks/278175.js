"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var a, l, i = n("37983"),
  s = n("884691"),
  r = n("414456"),
  u = n.n(r),
  o = n("461380"),
  d = n("718517"),
  c = n("129722"),
  f = n("859971"),
  h = n("184692"),
  m = n("89050"),
  g = n("936854");
(l = a || (a = {}))[l.START = 0] = "START", l[l.PLAYHEAD = 1] = "PLAYHEAD", l[l.END = 2] = "END";
var E = s.memo(function(e) {
  let {
    playing: t,
    onPausePlayback: n,
    onPlaybackChange: a,
    onChangePosition: l,
    disabled: r = !1
  } = e, E = {
    ...m.defaultWaveformConfig
  }, {
    audio: S
  } = (0, c.useAudioTrimmerStore)(), v = null != S, _ = s.useRef(null), N = s.useRef(null), p = s.useRef(null), [A, O] = s.useState(0), [D, C] = s.useState(0), [b, I] = s.useState(0), [x, M] = s.useState(!1), [T, y] = s.useState(!1), [L, U] = s.useState(!1), [R, w] = s.useState(0), [P, j] = s.useState(-1), F = s.useMemo(() => R / E.fineTuningScale, [E.fineTuningScale, R]);
  s.useEffect(() => {
    if (null == S) return;
    let e = S.duration * d.default.Millis.SECOND;
    O(0), C(0), I(e), w(e)
  }, [S]);
  let V = s.useCallback((e, t) => {
      if (n(), 0 === e.button) switch (t) {
        case 0:
          M(!0);
          break;
        case 1:
          y(!0);
          break;
        case 2:
          U(!0)
      }
    }, [n]),
    k = s.useCallback(e => {
      switch (e) {
        case 0:
          M(!1);
          break;
        case 1:
          y(!1);
          break;
        case 2:
          U(!1)
      }
      j(-1)
    }, []),
    B = s.useCallback(e => {
      if (null == S || !x) return;
      let t = parseInt(e.target.value),
        n = t > b ? b : t;
      a((0, f.toSeconds)(n)), O(n), C(n)
    }, [S, a, b, x]),
    G = s.useCallback(e => {
      if (null == S || !T) return;
      let t = parseInt(e.target.value);
      t < A ? (a((0, f.toSeconds)(A)), C(A)) : t > b ? (a((0, f.toSeconds)(b)), C(b)) : (a((0, f.toSeconds)(t)), C(t))
    }, [S, a, b, T, A]),
    H = s.useCallback(e => {
      if (null == S || !L) return;
      let t = parseInt(e.target.value),
        n = t > A ? t : A;
      a((0, f.toSeconds)(A)), C(A), I(n)
    }, [S, a, L, A]);
  return s.useEffect(() => {
    null != l && v && l({
      startPositionMs: A,
      endPositionMs: b,
      playheadPositionMs: D
    })
  }, [A, b, l, v, D]), s.useEffect(() => {
    let e;
    if (null != S) return t && (e = setInterval(() => {
      S.currentTime < (0, f.toSeconds)(b) ? S.currentTime >= (0, f.toSeconds)(D) && C(S.currentTime * d.default.Millis.SECOND) : (n((0, f.toSeconds)(A)), C(A))
    }, 16)), () => {
      clearInterval(e)
    }
  }, [S, b, n, D, t, A]), s.useEffect(() => {
    if (E.fineTuningDelay <= 0) return;
    let e = setTimeout(() => {
      x && A == A && -1 === P ? j(A) : L && b == b && -1 === P ? j(b) : T && D == D && -1 === P && j(D)
    }, E.fineTuningDelay);
    return () => {
      clearTimeout(e)
    }
  }, [E.fineTuningDelay, L, b, P, T, D, x, A]), (0, i.jsxs)("div", {
    className: u(g.timeline, {
      [g.initialized]: v
    }),
    children: [(0, i.jsxs)("div", {
      className: g.rangeHandleContainer,
      children: [(0, i.jsxs)("div", {
        className: g.rangeHandleFrame,
        children: [(0, i.jsx)("input", {
          ref: _,
          className: u(g.rangeHandle, g.rangeHandleStart),
          type: "range",
          min: (0, f.getMinValue)(P, F, R),
          max: (0, f.getMaxValue)(P, F, R),
          value: A,
          onChange: B,
          onMouseDown: e => V(e, 0),
          onMouseUp: () => k(0),
          disabled: !v || r
        }), (0, i.jsx)("input", {
          ref: p,
          className: u(g.rangeHandle, g.rangeHandleEnd),
          type: "range",
          min: (0, f.getMinValue)(P, F, R),
          max: (0, f.getMaxValue)(P, F, R),
          value: b,
          onChange: H,
          onMouseDown: e => V(e, 2),
          onMouseUp: () => k(2),
          disabled: !v || r
        })]
      }), (0, i.jsx)("div", {
        className: g.handlePlayheadTrack,
        children: (0, i.jsx)("input", {
          ref: N,
          className: u(g.rangeHandle, g.rangeHandlePlayhead),
          type: "range",
          min: (0, f.getMinValue)(P, F, R),
          max: (0, f.getMaxValue)(P, F, R),
          value: D,
          onChange: G,
          onMouseDown: e => V(e, 1),
          onMouseUp: () => k(1),
          disabled: !v || r
        })
      })]
    }), (0, i.jsxs)("div", {
      className: g.handleContainer,
      children: [(0, i.jsxs)("div", {
        className: u(g.handleFrame, {
          [g.startDragging]: x,
          [g.endDragging]: L
        }),
        style: {
          left: "".concat((0, f.getStartHandleValue)(A, P, F, R), "%"),
          right: "".concat((0, f.getEndHandleValue)(b, P, F, R), "%")
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
            [g.dragging]: T || x || L || t
          }),
          style: {
            left: "".concat((0, f.getStartHandleValue)(D, P, F, R), "%")
          }
        })
      })]
    }), (0, i.jsx)("div", {
      className: g.waveformContainer,
      children: (0, i.jsx)(h.default, {
        fineTuning: P,
        fineTuningResolution: F,
        duration: R
      })
    })]
  })
})