"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  i = n("414456"),
  s = n.n(i),
  r = n("77078"),
  u = n("132755"),
  o = n("78404"),
  d = n("718517"),
  c = n("812809"),
  f = n("129722"),
  h = n("278175"),
  m = n("859971"),
  g = n("846325"),
  E = n("687702");
let S = 10 * d.default.Millis.SECOND,
  v = {
    startPositionMs: 0,
    endPositionMs: 2 * S,
    playheadPositionMs: 0
  };
var _ = l.memo(function(e) {
  var t;
  let {
    className: n,
    volume: i,
    disabled: S = !1,
    onChange: _
  } = e, {
    audio: N
  } = (0, f.useAudioTrimmerStore)(), [p, A] = l.useState(!1), [D, O] = l.useState(v), {
    playheadPositionMs: C,
    endPositionMs: b,
    startPositionMs: I
  } = D, x = null != N, M = b - I, T = M > g.MAX_SOUND_LENGTH_SECONDS * d.default.Millis.SECOND;
  l.useEffect(() => {
    null != N && O({
      playheadPositionMs: 0,
      endPositionMs: N.duration * d.default.Millis.SECOND,
      startPositionMs: 0
    })
  }, [N]);
  let y = l.useCallback(e => {
      null != N && (N.pause(), null != e && (N.currentTime = e), A(!1))
    }, [N]),
    L = l.useCallback(() => {
      if (null != N) {
        if (p) {
          y();
          return
        }
        C >= b ? N.currentTime = (0, m.toSeconds)(I) : N.currentTime = (0, m.toSeconds)(C), N.volume = (0, c.default)(i), N.play(), A(!0)
      }
    }, [N, b, y, C, p, I, i]),
    U = l.useCallback(e => {
      O(e), null == _ || _({
        startMs: e.startPositionMs,
        endMs: e.endPositionMs
      })
    }, [_]),
    R = l.useCallback(e => {
      null != N && (N.currentTime = e)
    }, [N]);
  return (0, a.jsxs)("div", {
    className: s(E.container, {
      [E.initialized]: x,
      [E.disabled]: !x || S
    }, n),
    children: [(0, a.jsxs)("div", {
      className: E.playButtonContainer,
      children: [(0, a.jsx)(r.Clickable, {
        className: E.playButton,
        onClick: x ? L : void 0,
        children: p ? (0, a.jsx)(o.default, {
          className: E.playButtonIcon
        }) : (0, a.jsx)(u.default, {
          className: E.playButtonIcon
        })
      }), (0, a.jsx)("div", {
        className: E.durationContainer,
        children: (0, a.jsx)(r.Text, {
          className: E.duration,
          variant: "text-xs/normal",
          color: T ? "text-warning" : "text-positive",
          children: (t = M, "".concat((0, m.toSeconds)(t).toFixed(2), "s"))
        })
      })]
    }), (0, a.jsx)(h.default, {
      playing: p,
      onPlaybackChange: R,
      onPausePlayback: y,
      onChangePosition: U,
      disabled: S
    })]
  })
})