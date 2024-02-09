"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var a = n("37983"),
  r = n("884691"),
  i = n("414456"),
  l = n.n(i),
  s = n("77078"),
  u = n("132755"),
  o = n("78404"),
  d = n("718517"),
  c = n("812809"),
  f = n("129722"),
  h = n("278175"),
  m = n("859971"),
  g = n("846325"),
  p = n("193326");
let v = 10 * d.default.Millis.SECOND,
  S = {
    startPositionMs: 0,
    endPositionMs: 2 * v,
    playheadPositionMs: 0
  };
var C = r.memo(function(e) {
  var t;
  let {
    className: n,
    volume: i,
    disabled: v = !1,
    onChange: C
  } = e, {
    audio: E
  } = (0, f.useAudioTrimmerStore)(), [_, N] = r.useState(!1), [I, O] = r.useState(S), {
    playheadPositionMs: A,
    endPositionMs: D,
    startPositionMs: M
  } = I, y = null != E, b = D - M, x = b > g.MAX_SOUND_LENGTH_SECONDS * d.default.Millis.SECOND;
  r.useEffect(() => {
    null != E && O({
      playheadPositionMs: 0,
      endPositionMs: E.duration * d.default.Millis.SECOND,
      startPositionMs: 0
    })
  }, [E]);
  let w = r.useCallback(e => {
      null != E && (E.pause(), null != e && (E.currentTime = e), N(!1))
    }, [E]),
    T = r.useCallback(() => {
      if (null != E) {
        if (_) {
          w();
          return
        }
        A >= D ? E.currentTime = (0, m.toSeconds)(M) : E.currentTime = (0, m.toSeconds)(A), E.volume = (0, c.default)(i), E.play(), N(!0)
      }
    }, [E, D, w, A, _, M, i]),
    L = r.useCallback(e => {
      O(e), null == C || C({
        startMs: e.startPositionMs,
        endMs: e.endPositionMs
      })
    }, [C]),
    R = r.useCallback(e => {
      null != E && (E.currentTime = e)
    }, [E]);
  return (0, a.jsxs)("div", {
    className: l(p.container, {
      [p.initialized]: y,
      [p.disabled]: !y || v
    }, n),
    children: [(0, a.jsxs)("div", {
      className: p.playButtonContainer,
      children: [(0, a.jsx)(s.Clickable, {
        className: p.playButton,
        onClick: y ? T : void 0,
        children: _ ? (0, a.jsx)(o.default, {
          className: p.playButtonIcon
        }) : (0, a.jsx)(u.default, {
          className: p.playButtonIcon
        })
      }), (0, a.jsx)("div", {
        className: p.durationContainer,
        children: (0, a.jsx)(s.Text, {
          className: p.duration,
          variant: "text-xs/normal",
          color: x ? "text-warning" : "text-positive",
          children: (t = b, "".concat((0, m.toSeconds)(t).toFixed(2), "s"))
        })
      })]
    }), (0, a.jsx)(h.default, {
      playing: _,
      onPlaybackChange: R,
      onPausePlayback: w,
      onChangePosition: L,
      disabled: v
    })]
  })
})