"use strict";
n(47120);
var i = n(470079),
  r = n(442837),
  s = n(607070),
  o = n(166625),
  a = n(271383),
  l = n(594174),
  u = n(451478),
  _ = n(768581),
  c = n(660097);
t.Z = e => {
  var t;
  let {
    user: n,
    guildId: d,
    size: E,
    animateOnHover: I = !1,
    showPending: T = !1,
    showTryItOut: h = !1,
    avatarDecorationOverride: S
  } = e, [f, N] = i.useState(!1), A = (0, r.e7)([s.Z], () => s.Z.useReducedMotion), m = (0, r.e7)([u.Z], () => u.Z.isFocused()), O = (0, r.e7)([a.ZP], () => null != d && null != n ? a.ZP.getMember(d, n.id) : null), [R, p] = (0, r.Wu)([l.default], () => {
    var e;
    return [null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.id, l.default.getUser(null == n ? void 0 : n.id)]
  }), g = null == O ? null == p ? void 0 : p.avatarDecoration : null === O.avatarDecoration ? null : null !== (t = O.avatarDecoration) && void 0 !== t ? t : null == p ? void 0 : p.avatarDecoration, {
    pendingAvatarDecoration: C
  } = (0, o.Z)({
    isTryItOut: h,
    guildId: d
  }), v = m && (f || !A && !I), L = T && void 0 !== C && void 0 !== R && R === (null == n ? void 0 : n.id), D = null != d && null === C, M = L ? D ? null == n ? void 0 : n.avatarDecoration : null != C ? C : g : null != g ? g : null == n ? void 0 : n.avatarDecoration, P = i.useMemo(() => (0, _.NZ)({
    avatarDecoration: void 0 !== S ? S : M,
    canAnimate: v,
    size: E
  }), [M, v, E, S]), y = i.useCallback(() => N(!0), []);
  return {
    avatarPlaceholderSrc: c,
    avatarDecorationSrc: P,
    isAvatarDecorationAnimating: v,
    eventHandlers: {
      onMouseEnter: y,
      onMouseLeave: i.useCallback(() => N(!1), [])
    }
  }
}