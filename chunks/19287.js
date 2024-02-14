"use strict";
n.r(t), n.d(t, {
  useAnimatedAvatarSrc: function() {
    return d
  }
}), n("222007");
var i = n("884691"),
  r = n("446674"),
  l = n("206230"),
  a = n("771325"),
  s = n("26989"),
  o = n("471671"),
  u = n("91653");

function d(e) {
  let {
    user: t,
    guildId: n,
    size: d,
    showPending: c = !1,
    animateOnHover: f = !1,
    avatarOverride: m
  } = e, [_, E] = i.useState(!1), T = (0, r.useStateFromStores)([l.default], () => l.default.useReducedMotion), I = (0, r.useStateFromStores)([o.default], () => o.default.isFocused()), C = I && (_ || !T && !f), {
    pendingAvatar: p
  } = (0, u.default)({}), P = (0, r.useStateFromStores)([s.default], () => null != n && null != t ? s.default.getMember(n, t.id) : null), S = i.useMemo(() => null != t ? (0, a.getPreviewAvatar)(c ? null != m ? m : p : void 0, P, t, {
    canAnimate: C,
    size: d
  }) : void 0, [c, p, P, t, C, d, m]), R = i.useCallback(() => E(!0), []), O = i.useCallback(() => E(!1), []);
  return {
    avatarSrc: S,
    isAvatarAnimating: C,
    eventHandlers: {
      onMouseEnter: R,
      onMouseLeave: O
    }
  }
}