"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var l = n("884691"),
  a = n("917351"),
  s = n.n(a),
  i = n("748820"),
  r = n("862337"),
  u = n("760679"),
  o = n("315841"),
  d = n("827520");
let c = s.debounce(u.startEmojiHose, d.EVENT_TICK_RATE, {
  maxWait: d.EVENT_TICK_RATE
});

function f(e, t, n) {
  let a = l.useRef((0, i.v4)()),
    s = l.useRef(new r.Interval),
    f = l.useCallback(l => {
      l.lastUpdatedAt = Date.now(), (0, u.updateEmojiHose)(l, e, n), (0, u.startEmojiHose)(t, n, l)
    }, [t, n, e]),
    h = l.useCallback((l, r, c) => {
      a.current = (0, i.v4)();
      let h = {
        ...l,
        id: a.current,
        x: r,
        y: c,
        userId: e,
        state: o.EmojiHoseState.START,
        lastUpdatedAt: Date.now()
      };
      (0, u.startEmojiHose)(t, n, h), (0, u.updateEmojiHose)(h, e, n), s.current.start(d.EMOJI_HOSE_PING_DELAY, () => f(h))
    }, [e, t, n, f]),
    m = l.useCallback((l, i, r) => {
      let h = {
        ...l,
        id: a.current,
        x: i,
        y: r,
        userId: e,
        state: o.EmojiHoseState.START,
        lastUpdatedAt: Date.now()
      };
      c(t, n, h), (0, u.updateEmojiHose)(h, e, n), s.current.start(d.EMOJI_HOSE_PING_DELAY, () => f(h))
    }, [e, t, n, f]),
    p = l.useCallback((l, i, r) => {
      c.cancel(), (0, u.stopEmojiHose)(t, n, a.current), (0, u.updateEmojiHose)({
        ...l,
        id: a.current,
        x: i,
        y: r,
        userId: e,
        state: o.EmojiHoseState.STOP,
        lastUpdatedAt: Date.now()
      }, e, n), s.current.stop()
    }, [t, n, e]),
    E = l.useCallback((e, t, n) => m(e, t, n), [m]);
  return l.useMemo(() => ({
    handleMouseDown: h,
    handleMouseMove: m,
    handleMouseUp: p,
    handleMouseEnter: E
  }), [h, E, m, p])
}