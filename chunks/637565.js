"use strict";
n.r(t), n.d(t, {
  getChannelGuildRoleSubscriptions: function() {
    return d
  }
}), n("47120");
var l = n("149765"),
  u = n("973542"),
  i = n("790285"),
  a = n("981631");

function d(e, t, n) {
  let d = new Set;
  for (let e of Object.keys(n.permissionOverwrites)) {
    let l = t[e],
      a = n.permissionOverwrites[e];
    (0, u.isSubscriptionRole)(l) && (0, i.isChannelAccessGrantedBy)(n, a) && d.add(l)
  }
  let s = t[e.getEveryoneRoleId()],
    r = null != s && !l.has(s.permissions, a.Permissions.VIEW_CHANNEL),
    o = (0, i.isChannelAccessDeniedBy)(n, n.permissionOverwrites[e.id]);
  if (r && !o)
    for (let e of Object.values(t))(0, u.isSubscriptionRole)(e) && (0, i.isAllChannelsRole)(e) && d.add(e);
  return [...d]
}