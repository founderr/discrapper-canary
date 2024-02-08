"use strict";
n.r(t), n.d(t, {
  canEveryoneRoleViewEvent: function() {
    return v
  },
  isGuildEventInvitable: function() {
    return _
  },
  default: function() {
    return h
  }
}), n("222007");
var l = n("446674"),
  i = n("242757"),
  u = n("834052"),
  a = n("42203"),
  o = n("923959"),
  r = n("305961"),
  d = n("957255"),
  c = n("991170"),
  s = n("398604"),
  f = n("745049"),
  E = n("49111");

function v(e) {
  var t;
  let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.default];
  let {
    entityType: l,
    channelId: i
  } = "entity_type" in (t = e) ? {
    entityType: t.entity_type,
    channelId: t.channel_id
  } : t, u = l === f.GuildScheduledEventEntityTypes.EXTERNAL;
  if (u) return !0;
  let o = n.getChannel(i);
  return null != o && c.default.canEveryoneRole(E.Permissions.VIEW_CHANNEL, o)
}

function _(e) {
  let [t, n, l, c] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.default, a.default, r.default, u.default];
  if ((0, s.isGuildEventEnded)(e)) return !1;
  let {
    guild_id: E,
    channel_id: _
  } = e, h = e.entity_type === f.GuildScheduledEventEntityTypes.EXTERNAL, g = h ? t.getDefaultChannel(e.guild_id) : n.getChannel(_), p = l.getGuild(E), I = c.getStageInstanceByChannel(_);
  return !!(0, i.canViewInviteModal)(d.default, p, g, I) && null != g && v(e, [n])
}

function h(e) {
  return (0, l.useStateFromStores)([o.default, a.default, r.default, u.default], () => _(e, [o.default, a.default, r.default, u.default]), [e])
}