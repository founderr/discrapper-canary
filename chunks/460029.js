"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("77078"),
  u = n("132755"),
  o = n("78404"),
  d = n("718517"),
  c = n("812809"),
  f = n("129722"),
  h = n("278175"),
  m = n("859971"),
  g = n("846325"),
  S = n("193326");
let p = 10 * d.default.Millis.SECOND,
  v = {
    startPositionMs: 0,
    endPositionMs: 2 * p,
    playheadPositionMs: 0
  };
var C = i.memo(function(e) {
  var t;
  let {
    className: n,
    volume: a,
    disabled: p = !1,
    onChange: C
  } = e, {
    audio: E
  } = (0, f.useAudioTrimmerStore)(), [_, N] = i.useState(!1), [A, D] = i.useState(v), {
    playheadPositionMs: y,
    endPositionMs: O,
    startPositionMs: I
  } = A, x = null != E, b = O - I, M = b > g.MAX_SOUND_LENGTH_SECONDS * d.default.Millis.SECOND;
  i.useEffect(() => {
    null != E && D({
      playheadPositionMs: 0,
      endPositionMs: E.duration * d.default.Millis.SECOND,
      startPositionMs: 0
    })
  }, [E]);
  let w = i.useCallback(e => {
      null != E && (E.pause(), null != e && (E.currentTime = e), N(!1))
    }, [E]),
    T = i.useCallback(() => {
      if (null != E) {
        if (_) {
          w();
          return
        }
        y >= O ? E.currentTime = (0, m.toSeconds)(I) : E.currentTime = (0, m.toSeconds)(y), E.volume = (0, c.default)(a), E.play(), N(!0)
      }
    }, [E, O, w, y, _, I, a]),
    L = i.useCallback(e => {
      D(e), null == C || C({
        startMs: e.startPositionMs,
        endMs: e.endPositionMs
      })
    }, [C]),
    R = i.useCallback(e => {
      null != E && (E.currentTime = e)
    }, [E]);
  return (0, l.jsxs)("div", {
    className: s(S.container, {
      [S.initialized]: x,
      [S.disabled]: !x || p
    }, n),
    children: [(0, l.jsxs)("div", {
      className: S.playButtonContainer,
      children: [(0, l.jsx)(r.Clickable, {
        className: S.playButton,
        onClick: x ? T : void 0,
        children: _ ? (0, l.jsx)(o.default, {
          className: S.playButtonIcon
        }) : (0, l.jsx)(u.default, {
          className: S.playButtonIcon
        })
      }), (0, l.jsx)("div", {
        className: S.durationContainer,
        children: (0, l.jsx)(r.Text, {
          className: S.duration,
          variant: "text-xs/normal",
          color: M ? "text-warning" : "text-positive",
          children: (t = b, "".concat((0, m.toSeconds)(t).toFixed(2), "s"))
        })
      })]
    }), (0, l.jsx)(h.default, {
      playing: _,
      onPlaybackChange: R,
      onPausePlayback: w,
      onChangePosition: L,
      disabled: p
    })]
  })
})