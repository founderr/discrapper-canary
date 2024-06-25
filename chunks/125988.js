"use strict";
n(47120);
var i = n(470079),
  r = n(442837),
  s = n(812457),
  o = n(166625),
  a = n(271383),
  l = n(594174),
  u = n(768581),
  _ = n(660097);
t.Z = e => {
  var t;
  let {
    user: n,
    guildId: c,
    size: d,
    onlyAnimateOnHover: E = !1,
    showPending: I = !1,
    showTryItOut: T = !1,
    avatarDecorationOverride: h
  } = e, [f, S] = i.useState(!1), {
    canAnimate: A
  } = (0, s.j)(f, E), N = (0, r.e7)([a.ZP], () => null != c && null != n ? a.ZP.getMember(c, n.id) : null), [m, O] = (0, r.Wu)([l.default], () => {
    var e;
    return [null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.id, l.default.getUser(null == n ? void 0 : n.id)]
  }), p = null == N ? null == O ? void 0 : O.avatarDecoration : null === N.avatarDecoration ? null : null !== (t = N.avatarDecoration) && void 0 !== t ? t : null == O ? void 0 : O.avatarDecoration, {
    pendingAvatarDecoration: R
  } = (0, o.Z)({
    isTryItOut: T,
    guildId: c
  }), g = I && void 0 !== R && void 0 !== m && m === (null == n ? void 0 : n.id), C = null != c && null === R, v = g ? C ? null == n ? void 0 : n.avatarDecoration : null != R ? R : p : null != p ? p : null == n ? void 0 : n.avatarDecoration, L = i.useMemo(() => (0, u.NZ)({
    avatarDecoration: void 0 !== h ? h : v,
    canAnimate: A,
    size: d
  }), [v, A, d, h]), D = i.useCallback(() => S(!0), []);
  return {
    avatarPlaceholderSrc: _,
    avatarDecorationSrc: L,
    isAvatarDecorationAnimating: A,
    eventHandlers: {
      onMouseEnter: D,
      onMouseLeave: i.useCallback(() => S(!1), [])
    }
  }
}