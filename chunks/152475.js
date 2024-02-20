"use strict";
n.r(t), n.d(t, {
  canEveryoneRoleViewEvent: function() {
    return v
  },
  isGuildEventInvitable: function() {
    return g
  },
  default: function() {
    return h
  }
}), n("222007");
var l = n("446674"),
  a = n("242757"),
  i = n("834052"),
  u = n("42203"),
  r = n("923959"),
  s = n("305961"),
  d = n("957255"),
  o = n("991170"),
  c = n("398604"),
  f = n("745049"),
  E = n("49111");

function v(e) {
  var t;
  let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [u.default];
  let {
    entityType: l,
    channelId: a
  } = "entity_type" in (t = e) ? {
    entityType: t.entity_type,
    channelId: t.channel_id
  } : t, i = l === f.GuildScheduledEventEntityTypes.EXTERNAL;
  if (i) return !0;
  let r = n.getChannel(a);
  return null != r && o.default.canEveryoneRole(E.Permissions.VIEW_CHANNEL, r)
}

function g(e) {
  let [t, n, l, o] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default, u.default, s.default, i.default];
  if ((0, c.isGuildEventEnded)(e)) return !1;
  let {
    guild_id: E,
    channel_id: g
  } = e, h = e.entity_type === f.GuildScheduledEventEntityTypes.EXTERNAL, p = h ? t.getDefaultChannel(e.guild_id) : n.getChannel(g), m = l.getGuild(E), C = o.getStageInstanceByChannel(g);
  return !!(0, a.canViewInviteModal)(d.default, m, p, C) && null != p && v(e, [n])
}

function h(e) {
  return (0, l.useStateFromStores)([r.default, u.default, s.default, i.default], () => g(e, [r.default, u.default, s.default, i.default]), [e])
}