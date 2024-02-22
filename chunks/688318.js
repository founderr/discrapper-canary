"use strict";
r.r(t), r.d(t, {
  default: function() {
    return f
  }
}), r("222007");
var a = r("884691"),
  n = r("446674"),
  u = r("206230"),
  i = r("91653"),
  l = r("26989"),
  s = r("697218"),
  o = r("471671"),
  c = r("315102"),
  d = r("53708"),
  f = e => {
    var t;
    let {
      user: r,
      guildId: f,
      size: E,
      animateOnHover: m = !1,
      showPending: p = !1,
      showTryItOut: S = !1,
      avatarDecorationOverride: C
    } = e, [h, I] = a.useState(!1), _ = (0, n.useStateFromStores)([u.default], () => u.default.useReducedMotion), g = (0, n.useStateFromStores)([o.default], () => o.default.isFocused()), T = (0, n.useStateFromStores)([l.default], () => null != f && null != r ? l.default.getMember(f, r.id) : null), [v, A] = (0, n.useStateFromStoresArray)([s.default], () => {
      var e;
      return [null === (e = s.default.getCurrentUser()) || void 0 === e ? void 0 : e.id, s.default.getUser(null == r ? void 0 : r.id)]
    }), P = null == T ? null == A ? void 0 : A.avatarDecoration : null === T.avatarDecoration ? null : null !== (t = T.avatarDecoration) && void 0 !== t ? t : null == A ? void 0 : A.avatarDecoration, {
      pendingAvatarDecoration: R
    } = (0, i.default)({
      isTryItOut: S,
      guildId: f
    }), L = g && (h || !_ && !m), y = p ? null != f && null === R ? null == r ? void 0 : r.avatarDecoration : void 0 !== v && v === (null == r ? void 0 : r.id) ? null != R ? R : P : null != P ? P : null == r ? void 0 : r.avatarDecoration : void 0, N = a.useMemo(() => (0, c.getAvatarDecorationURL)({
      avatarDecoration: void 0 !== C ? C : y,
      canAnimate: L,
      size: E
    }), [y, L, E, C]), O = a.useCallback(() => I(!0), []), b = a.useCallback(() => I(!1), []);
    return {
      avatarPlaceholderSrc: d,
      avatarDecorationSrc: N,
      isAvatarDecorationAnimating: L,
      eventHandlers: {
        onMouseEnter: O,
        onMouseLeave: b
      }
    }
  }