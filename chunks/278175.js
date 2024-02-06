"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var i, l, s = n("37983"),
  r = n("884691"),
  a = n("414456"),
  u = n.n(a),
  o = n("461380"),
  d = n("718517"),
  c = n("129722"),
  f = n("859971"),
  h = n("184692"),
  m = n("89050"),
  g = n("721013");
(l = i || (i = {}))[l.START = 0] = "START", l[l.PLAYHEAD = 1] = "PLAYHEAD", l[l.END = 2] = "END";
var E = r.memo(function(e) {
  let {
    playing: t,
    onPausePlayback: n,
    onPlaybackChange: i,
    onChangePosition: l,
    disabled: a = !1
  } = e, E = {
    ...m.defaultWaveformConfig
  }, {
    audio: S
  } = (0, c.useAudioTrimmerStore)(), v = null != S, p = r.useRef(null), _ = r.useRef(null), N = r.useRef(null), [C, I] = r.useState(0), [O, A] = r.useState(0), [x, D] = r.useState(0), [L, M] = r.useState(!1), [b, R] = r.useState(!1), [T, U] = r.useState(!1), [y, w] = r.useState(0), [P, j] = r.useState(-1), F = r.useMemo(() => y / E.fineTuningScale, [E.fineTuningScale, y]);
  r.useEffect(() => {
    if (null == S) return;
    let e = S.duration * d.default.Millis.SECOND;
    I(0), A(0), D(e), w(e)
  }, [S]);
  let V = r.useCallback((e, t) => {
      if (n(), 0 === e.button) switch (t) {
        case 0:
          M(!0);
          break;
        case 1:
          R(!0);
          break;
        case 2:
          U(!0)
      }
    }, [n]),
    k = r.useCallback(e => {
      switch (e) {
        case 0:
          M(!1);
          break;
        case 1:
          R(!1);
          break;
        case 2:
          U(!1)
      }
      j(-1)
    }, []),
    B = r.useCallback(e => {
      if (null == S || !L) return;
      let t = parseInt(e.target.value),
        n = t > x ? x : t;
      i((0, f.toSeconds)(n)), I(n), A(n)
    }, [S, i, x, L]),
    H = r.useCallback(e => {
      if (null == S || !b) return;
      let t = parseInt(e.target.value);
      t < C ? (i((0, f.toSeconds)(C)), A(C)) : t > x ? (i((0, f.toSeconds)(x)), A(x)) : (i((0, f.toSeconds)(t)), A(t))
    }, [S, i, x, b, C]),
    G = r.useCallback(e => {
      if (null == S || !T) return;
      let t = parseInt(e.target.value),
        n = t > C ? t : C;
      i((0, f.toSeconds)(C)), A(C), D(n)
    }, [S, i, T, C]);
  return r.useEffect(() => {
    null != l && v && l({
      startPositionMs: C,
      endPositionMs: x,
      playheadPositionMs: O
    })
  }, [C, x, l, v, O]), r.useEffect(() => {
    let e;
    if (null != S) return t && (e = setInterval(() => {
      S.currentTime < (0, f.toSeconds)(x) ? S.currentTime >= (0, f.toSeconds)(O) && A(S.currentTime * d.default.Millis.SECOND) : (n((0, f.toSeconds)(C)), A(C))
    }, 16)), () => {
      clearInterval(e)
    }
  }, [S, x, n, O, t, C]), r.useEffect(() => {
    if (E.fineTuningDelay <= 0) return;
    let e = setTimeout(() => {
      L && C == C && -1 === P ? j(C) : T && x == x && -1 === P ? j(x) : b && O == O && -1 === P && j(O)
    }, E.fineTuningDelay);
    return () => {
      clearTimeout(e)
    }
  }, [E.fineTuningDelay, T, x, P, b, O, L, C]), (0, s.jsxs)("div", {
    className: u(g.timeline, {
      [g.initialized]: v
    }),
    children: [(0, s.jsxs)("div", {
      className: g.rangeHandleContainer,
      children: [(0, s.jsxs)("div", {
        className: g.rangeHandleFrame,
        children: [(0, s.jsx)("input", {
          ref: p,
          className: u(g.rangeHandle, g.rangeHandleStart),
          type: "range",
          min: (0, f.getMinValue)(P, F, y),
          max: (0, f.getMaxValue)(P, F, y),
          value: C,
          onChange: B,
          onMouseDown: e => V(e, 0),
          onMouseUp: () => k(0),
          disabled: !v || a
        }), (0, s.jsx)("input", {
          ref: N,
          className: u(g.rangeHandle, g.rangeHandleEnd),
          type: "range",
          min: (0, f.getMinValue)(P, F, y),
          max: (0, f.getMaxValue)(P, F, y),
          value: x,
          onChange: G,
          onMouseDown: e => V(e, 2),
          onMouseUp: () => k(2),
          disabled: !v || a
        })]
      }), (0, s.jsx)("div", {
        className: g.handlePlayheadTrack,
        children: (0, s.jsx)("input", {
          ref: _,
          className: u(g.rangeHandle, g.rangeHandlePlayhead),
          type: "range",
          min: (0, f.getMinValue)(P, F, y),
          max: (0, f.getMaxValue)(P, F, y),
          value: O,
          onChange: H,
          onMouseDown: e => V(e, 1),
          onMouseUp: () => k(1),
          disabled: !v || a
        })
      })]
    }), (0, s.jsxs)("div", {
      className: g.handleContainer,
      children: [(0, s.jsxs)("div", {
        className: u(g.handleFrame, {
          [g.startDragging]: L,
          [g.endDragging]: T
        }),
        style: {
          left: "".concat((0, f.getStartHandleValue)(C, P, F, y), "%"),
          right: "".concat((0, f.getEndHandleValue)(x, P, F, y), "%")
        },
        children: [(0, s.jsx)("div", {
          className: u(g.handleIconFrame, g.handleIconFrameStart),
          children: (0, s.jsx)("div", {
            className: u(g.handleIconContainer, g.start),
            children: (0, s.jsx)(o.default, {
              direction: o.default.Directions.RIGHT,
              className: g.handleIcon,
              width: 16,
              height: 16
            })
          })
        }), (0, s.jsx)("div", {
          className: u(g.handleIconFrame, g.handleIconFrameEnd),
          children: (0, s.jsx)("div", {
            className: u(g.handleIconContainer, g.end),
            children: (0, s.jsx)(o.default, {
              direction: o.default.Directions.LEFT,
              className: g.handleIcon,
              width: 16,
              height: 16
            })
          })
        })]
      }), (0, s.jsx)("div", {
        className: g.playheadTrack,
        children: (0, s.jsx)("div", {
          className: u(g.playhead, {
            [g.dragging]: b || L || T || t
          }),
          style: {
            left: "".concat((0, f.getStartHandleValue)(O, P, F, y), "%")
          }
        })
      })]
    }), (0, s.jsx)("div", {
      className: g.waveformContainer,
      children: (0, s.jsx)(h.default, {
        fineTuning: P,
        fineTuningResolution: F,
        duration: y
      })
    })]
  })
})