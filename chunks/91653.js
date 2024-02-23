"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var i = n("884691"),
  a = n("65597"),
  r = n("170313"),
  l = n("424562"),
  s = n("906932"),
  o = n("26989"),
  u = n("790618"),
  c = n("697218"),
  d = n("783142"),
  f = e => {
    let {
      isTryItOut: t,
      analyticsLocations: n,
      guildId: f
    } = e, E = (0, a.default)([c.default], () => c.default.getCurrentUser()), _ = (0, a.default)([o.default], () => null != f && null != E ? o.default.getMember(f, E.id) : null), h = null != _ ? _.avatarDecoration : null == E ? void 0 : E.avatarDecoration, S = (0, r.default)(n), {
      pendingAvatar: p,
      pendingAvatarDecoration: A,
      pendingErrors: m
    } = (0, a.useStateFromStoresObject)([u.default, l.default], () => ({
      pendingAvatar: t ? u.default.getTryItOutAvatar() : null != f ? l.default.getPendingAvatar() : u.default.getPendingAvatar(),
      pendingAvatarDecoration: t ? u.default.getTryItOutAvatarDecoration() : null != f ? l.default.getPendingAvatarDecoration() : u.default.getPendingAvatarDecoration(),
      pendingErrors: null != f ? l.default.getErrors().avatarDecoration : u.default.getErrors().avatarDecoration
    })), C = (0, i.useCallback)(e => (0, s.setNewPendingAvatar)(e, null == E ? void 0 : E.avatar), [null == E ? void 0 : E.avatar]), v = (0, i.useCallback)(e => {
      (0, s.setNewPendingAvatarDecoration)(f, e), null != e && S(e)
    }, [S, f]);
    return {
      pendingAvatar: p,
      pendingAvatarDecoration: A,
      setPendingAvatar: t ? d.setTryItOutAvatar : C,
      setPendingAvatarDecoration: t ? d.setTryItOutAvatarDecoration : v,
      savedAvatarDecoration: h,
      pendingErrors: m
    }
  }