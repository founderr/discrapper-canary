"use strict";
n.r(t), n.d(t, {
  canToggleCommunicationDisableOnUser: function() {
    return s
  },
  default: function() {
    return d
  }
}), n("222007");
var u = n("446674"),
  l = n("305961"),
  r = n("957255"),
  i = n("697218"),
  o = n("991170"),
  a = n("49111");

function s(e, t) {
  let [n, u, s] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.default, l.default, r.default], d = u.getGuild(e), c = n.getUser(t);
  if (null == d || null == c || c.isNonUserBot()) return !1;
  let f = d.isOwner(c) || o.default.can({
    permission: a.Permissions.ADMINISTRATOR,
    user: c,
    context: d
  });
  return !f && s.canManageUser(a.Permissions.MODERATE_MEMBERS, c, d)
}

function d(e, t) {
  return (0, u.useStateFromStores)([i.default, l.default, r.default], () => s(e, t, [i.default, l.default, r.default]), [e, t])
}