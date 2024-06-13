"use strict";
l.r(t), l.d(t, {
  getChannelGuildRoleSubscriptions: function() {
    return d
  }
}), l("47120");
var s = l("149765"),
  a = l("973542"),
  n = l("790285"),
  r = l("981631");

function d(e, t, l) {
  let d = new Set;
  for (let e of Object.keys(l.permissionOverwrites)) {
    let s = t[e],
      r = l.permissionOverwrites[e];
    (0, a.isSubscriptionRole)(s) && (0, n.isChannelAccessGrantedBy)(l, r) && d.add(s)
  }
  let i = t[e.getEveryoneRoleId()],
    o = null != i && !s.has(i.permissions, r.Permissions.VIEW_CHANNEL),
    u = (0, n.isChannelAccessDeniedBy)(l, l.permissionOverwrites[e.id]);
  if (o && !u)
    for (let e of Object.values(t))(0, a.isSubscriptionRole)(e) && (0, n.isAllChannelsRole)(e) && d.add(e);
  return [...d]
}