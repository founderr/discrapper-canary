"use strict";
n.r(t), n.d(t, {
  useAnimatedAvatarSrc: function() {
    return d
  }
}), n("47120");
var i = n("470079"),
  r = n("442837"),
  s = n("607070"),
  a = n("654904"),
  o = n("271383"),
  l = n("451478"),
  u = n("166625");

function d(e) {
  let {
    user: t,
    guildId: n,
    size: d,
    showPending: _ = !1,
    animateOnHover: c = !1,
    avatarOverride: E
  } = e, [I, T] = i.useState(!1), f = (0, r.useStateFromStores)([s.default], () => s.default.useReducedMotion), S = (0, r.useStateFromStores)([l.default], () => l.default.isFocused()) && (I || !f && !c), {
    pendingAvatar: h
  } = (0, u.default)({}), A = void 0 !== E ? E : _ ? h : void 0, m = (0, r.useStateFromStores)([o.default], () => null != n && null != t ? o.default.getMember(n, t.id) : null), N = i.useMemo(() => null != t ? (0, a.getPreviewAvatar)(A, m, t, {
    canAnimate: S,
    size: d
  }) : void 0, [A, m, t, S, d]), p = i.useCallback(() => T(!0), []);
  return {
    avatarSrc: N,
    isAvatarAnimating: S,
    eventHandlers: {
      onMouseEnter: p,
      onMouseLeave: i.useCallback(() => T(!1), [])
    }
  }
}