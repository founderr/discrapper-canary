"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var i = n("37983"),
  l = n("884691"),
  s = n("414456"),
  r = n.n(s),
  a = n("77078"),
  u = n("132755"),
  o = n("78404"),
  d = n("718517"),
  c = n("812809"),
  f = n("129722"),
  h = n("278175"),
  m = n("859971"),
  g = n("846325"),
  E = n("193326");
let S = 10 * d.default.Millis.SECOND,
  v = {
    startPositionMs: 0,
    endPositionMs: 2 * S,
    playheadPositionMs: 0
  };
var p = l.memo(function(e) {
  var t;
  let {
    className: n,
    volume: s,
    disabled: S = !1,
    onChange: p
  } = e, {
    audio: _
  } = (0, f.useAudioTrimmerStore)(), [N, C] = l.useState(!1), [I, O] = l.useState(v), {
    playheadPositionMs: A,
    endPositionMs: x,
    startPositionMs: D
  } = I, L = null != _, M = x - D, b = M > g.MAX_SOUND_LENGTH_SECONDS * d.default.Millis.SECOND;
  l.useEffect(() => {
    null != _ && O({
      playheadPositionMs: 0,
      endPositionMs: _.duration * d.default.Millis.SECOND,
      startPositionMs: 0
    })
  }, [_]);
  let R = l.useCallback(e => {
      null != _ && (_.pause(), null != e && (_.currentTime = e), C(!1))
    }, [_]),
    T = l.useCallback(() => {
      if (null != _) {
        if (N) {
          R();
          return
        }
        A >= x ? _.currentTime = (0, m.toSeconds)(D) : _.currentTime = (0, m.toSeconds)(A), _.volume = (0, c.default)(s), _.play(), C(!0)
      }
    }, [_, x, R, A, N, D, s]),
    U = l.useCallback(e => {
      O(e), null == p || p({
        startMs: e.startPositionMs,
        endMs: e.endPositionMs
      })
    }, [p]),
    y = l.useCallback(e => {
      null != _ && (_.currentTime = e)
    }, [_]);
  return (0, i.jsxs)("div", {
    className: r(E.container, {
      [E.initialized]: L,
      [E.disabled]: !L || S
    }, n),
    children: [(0, i.jsxs)("div", {
      className: E.playButtonContainer,
      children: [(0, i.jsx)(a.Clickable, {
        className: E.playButton,
        onClick: L ? T : void 0,
        children: N ? (0, i.jsx)(o.default, {
          className: E.playButtonIcon
        }) : (0, i.jsx)(u.default, {
          className: E.playButtonIcon
        })
      }), (0, i.jsx)("div", {
        className: E.durationContainer,
        children: (0, i.jsx)(a.Text, {
          className: E.duration,
          variant: "text-xs/normal",
          color: b ? "text-warning" : "text-positive",
          children: (t = M, "".concat((0, m.toSeconds)(t).toFixed(2), "s"))
        })
      })]
    }), (0, i.jsx)(h.default, {
      playing: N,
      onPlaybackChange: y,
      onPausePlayback: R,
      onChangePosition: U,
      disabled: S
    })]
  })
})