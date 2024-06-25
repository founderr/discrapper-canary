n.d(t, {
  Z: function() {
    return u
  }
});
var l = n(470079),
  i = n(442837),
  s = n(569545),
  a = n(959457),
  r = n(626135),
  o = n(981631),
  c = n(474936);

function u(e, t) {
  let {
    handleMouseDown: n,
    handleMouseMove: u,
    handleMouseUp: d,
    handleMouseEnter: h
  } = e, m = l.useRef(null), E = (0, i.e7)([a.Z], () => a.Z.getRTCConnection((0, s.V9)(t))), p = l.useCallback((e, t, l) => {
    m.current = Date.now(), n(e, t, l)
  }, [n]);
  return {
    handleMouseUp: l.useCallback((e, t, n) => {
      if (d(e, t, n), null != m.current) {
        if (null != E) {
          var l, i, s;
          l = e, i = E, s = Date.now() - m.current, r.default.track(o.rMx.PREMIUM_FEATURE_USAGE, {
            feature_name: "".concat(c.QP.SHARED_CANVAS, "_").concat(l.type),
            feature_tier: c.h1.FREE,
            media_session_id: i.getMediaSessionId(),
            parent_media_session_id: i.parentMediaSessionId,
            guild_id: i.guildId,
            duration: s
          })
        }
        m.current = null
      }
    }, [d, E]),
    handleMouseDown: p,
    handleMouseMove: u,
    handleMouseEnter: h
  }
}