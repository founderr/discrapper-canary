"use strict";
n.r(t), n.d(t, {
  canEveryoneRoleViewEvent: function() {
    return _
  },
  isGuildEventInvitable: function() {
    return S
  },
  default: function() {
    return T
  }
}), n("222007");
var i = n("446674"),
  r = n("242757"),
  l = n("834052"),
  u = n("42203"),
  a = n("923959"),
  s = n("305961"),
  o = n("957255"),
  d = n("991170"),
  c = n("398604"),
  f = n("745049"),
  E = n("49111");

function _(e) {
  var t;
  let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [u.default];
  let {
    entityType: i,
    channelId: r
  } = "entity_type" in (t = e) ? {
    entityType: t.entity_type,
    channelId: t.channel_id
  } : t, l = i === f.GuildScheduledEventEntityTypes.EXTERNAL;
  if (l) return !0;
  let a = n.getChannel(r);
  return null != a && d.default.canEveryoneRole(E.Permissions.VIEW_CHANNEL, a)
}

function S(e) {
  let [t, n, i, d] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.default, u.default, s.default, l.default];
  if ((0, c.isGuildEventEnded)(e)) return !1;
  let {
    guild_id: E,
    channel_id: S
  } = e, T = e.entity_type === f.GuildScheduledEventEntityTypes.EXTERNAL, I = T ? t.getDefaultChannel(e.guild_id) : n.getChannel(S), h = i.getGuild(E), v = d.getStageInstanceByChannel(S);
  return !!(0, r.canViewInviteModal)(o.default, h, I, v) && null != I && _(e, [n])
}

function T(e) {
  return (0, i.useStateFromStores)([a.default, u.default, s.default, l.default], () => S(e, [a.default, u.default, s.default, l.default]), [e])
}