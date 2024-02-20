"use strict";
n.r(e), n.d(e, {
  canToggleCommunicationDisableOnUser: function() {
    return s
  },
  default: function() {
    return d
  }
}), n("222007");
var u = n("446674"),
  r = n("305961"),
  i = n("957255"),
  l = n("697218"),
  o = n("991170"),
  a = n("49111");

function s(t, e) {
  let [n, u, s] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [l.default, r.default, i.default], d = u.getGuild(t), c = n.getUser(e);
  if (null == d || null == c || c.isNonUserBot()) return !1;
  let E = d.isOwner(c) || o.default.can({
    permission: a.Permissions.ADMINISTRATOR,
    user: c,
    context: d
  });
  return !E && s.canManageUser(a.Permissions.MODERATE_MEMBERS, c, d)
}

function d(t, e) {
  return (0, u.useStateFromStores)([l.default, r.default, i.default], () => s(t, e, [l.default, r.default, i.default]), [t, e])
}