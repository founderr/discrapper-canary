"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("884691"),
  a = n("446674"),
  s = n("374014"),
  i = n("205817"),
  r = n("599110"),
  u = n("49111"),
  o = n("646718");

function d(e, t) {
  let {
    handleMouseDown: n,
    handleMouseMove: d,
    handleMouseUp: c,
    handleMouseEnter: f
  } = e, h = l.useRef(null), m = (0, a.useStateFromStores)([i.default], () => i.default.getRTCConnection((0, s.encodeStreamKey)(t))), p = l.useCallback((e, t, l) => {
    h.current = Date.now(), n(e, t, l)
  }, [n]), E = l.useCallback((e, t, n) => {
    if (c(e, t, n), null != h.current) {
      if (null != m) {
        var l, a, s;
        l = e, a = m, s = Date.now() - h.current, r.default.track(u.AnalyticEvents.PREMIUM_FEATURE_USAGE, {
          feature_name: "".concat(o.AnalyticsPremiumFeatureNames.SHARED_CANVAS, "_").concat(l.type),
          feature_tier: o.AnalyticsPremiumFeatureTiers.FREE,
          media_session_id: a.getMediaSessionId(),
          parent_media_session_id: a.parentMediaSessionId,
          guild_id: a.guildId,
          duration: s
        })
      }
      h.current = null
    }
  }, [c, m]);
  return {
    handleMouseUp: E,
    handleMouseDown: p,
    handleMouseMove: d,
    handleMouseEnter: f
  }
}