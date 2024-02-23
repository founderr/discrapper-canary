"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var i = n("884691"),
  a = n("446674"),
  r = n("206230"),
  l = n("91653"),
  s = n("26989"),
  o = n("697218"),
  u = n("471671"),
  c = n("315102"),
  d = n("53708"),
  f = e => {
    var t;
    let {
      user: n,
      guildId: f,
      size: E,
      animateOnHover: _ = !1,
      showPending: h = !1,
      showTryItOut: S = !1,
      avatarDecorationOverride: p
    } = e, [A, m] = i.useState(!1), C = (0, a.useStateFromStores)([r.default], () => r.default.useReducedMotion), v = (0, a.useStateFromStores)([u.default], () => u.default.isFocused()), g = (0, a.useStateFromStores)([s.default], () => null != f && null != n ? s.default.getMember(f, n.id) : null), [I, T] = (0, a.useStateFromStoresArray)([o.default], () => {
      var e;
      return [null === (e = o.default.getCurrentUser()) || void 0 === e ? void 0 : e.id, o.default.getUser(null == n ? void 0 : n.id)]
    }), N = null == g ? null == T ? void 0 : T.avatarDecoration : null === g.avatarDecoration ? null : null !== (t = g.avatarDecoration) && void 0 !== t ? t : null == T ? void 0 : T.avatarDecoration, {
      pendingAvatarDecoration: L
    } = (0, l.default)({
      isTryItOut: S,
      guildId: f
    }), y = v && (A || !C && !_), P = h && void 0 !== L && void 0 !== I && I === (null == n ? void 0 : n.id), R = null != f && null === L, F = P ? R ? null == n ? void 0 : n.avatarDecoration : null != L ? L : N : null != N ? N : null == n ? void 0 : n.avatarDecoration, w = i.useMemo(() => (0, c.getAvatarDecorationURL)({
      avatarDecoration: void 0 !== p ? p : F,
      canAnimate: y,
      size: E
    }), [F, y, E, p]), b = i.useCallback(() => m(!0), []), D = i.useCallback(() => m(!1), []);
    return {
      avatarPlaceholderSrc: d,
      avatarDecorationSrc: w,
      isAvatarDecorationAnimating: y,
      eventHandlers: {
        onMouseEnter: b,
        onMouseLeave: D
      }
    }
  }