"use strict";
n.r(t), n.d(t, {
  useAnimatedAvatarSrc: function() {
    return c
  }
}), n("222007");
var i = n("884691"),
  r = n("446674"),
  l = n("206230"),
  a = n("771325"),
  s = n("26989"),
  o = n("471671"),
  u = n("91653");

function c(e) {
  let {
    user: t,
    guildId: n,
    size: c,
    showPending: d = !1,
    animateOnHover: f = !1,
    avatarOverride: m
  } = e, [_, E] = i.useState(!1), T = (0, r.useStateFromStores)([l.default], () => l.default.useReducedMotion), I = (0, r.useStateFromStores)([o.default], () => o.default.isFocused()), C = I && (_ || !T && !f), {
    pendingAvatar: p
  } = (0, u.default)({}), P = (0, r.useStateFromStores)([s.default], () => null != n && null != t ? s.default.getMember(n, t.id) : null), S = i.useMemo(() => null != t ? (0, a.getPreviewAvatar)(d ? null != m ? m : p : void 0, P, t, {
    canAnimate: C,
    size: c
  }) : void 0, [d, p, P, t, C, c, m]), R = i.useCallback(() => E(!0), []), O = i.useCallback(() => E(!1), []);
  return {
    avatarSrc: S,
    isAvatarAnimating: C,
    eventHandlers: {
      onMouseEnter: R,
      onMouseLeave: O
    }
  }
}