"use strict";
r.r(t), r.d(t, {
  default: function() {
    return f
  }
});
var a = r("884691"),
  n = r("65597"),
  u = r("170313"),
  i = r("424562"),
  l = r("906932"),
  s = r("26989"),
  o = r("790618"),
  c = r("697218"),
  d = r("783142"),
  f = e => {
    let {
      isTryItOut: t,
      analyticsLocations: r,
      guildId: f
    } = e, E = (0, n.default)([c.default], () => c.default.getCurrentUser()), m = (0, n.default)([s.default], () => null != f && null != E ? s.default.getMember(f, E.id) : null), p = null != m ? m.avatarDecoration : null == E ? void 0 : E.avatarDecoration, S = (0, u.default)(r), {
      pendingAvatar: C,
      pendingAvatarDecoration: h,
      pendingErrors: I
    } = (0, n.useStateFromStoresObject)([o.default, i.default], () => ({
      pendingAvatar: t ? o.default.getTryItOutAvatar() : null != f ? i.default.getPendingAvatar() : o.default.getPendingAvatar(),
      pendingAvatarDecoration: t ? o.default.getTryItOutAvatarDecoration() : null != f ? i.default.getPendingAvatarDecoration() : o.default.getPendingAvatarDecoration(),
      pendingErrors: null != f ? i.default.getErrors().avatarDecoration : o.default.getErrors().avatarDecoration
    })), _ = (0, a.useCallback)(e => (0, l.setNewPendingAvatar)(e, null == E ? void 0 : E.avatar), [null == E ? void 0 : E.avatar]), g = (0, a.useCallback)(e => {
      (0, l.setNewPendingAvatarDecoration)(f, e), null != e && S(e)
    }, [S, f]);
    return {
      pendingAvatar: C,
      pendingAvatarDecoration: h,
      setPendingAvatar: t ? d.setTryItOutAvatar : _,
      setPendingAvatarDecoration: t ? d.setTryItOutAvatarDecoration : g,
      savedAvatarDecoration: p,
      pendingErrors: I
    }
  }