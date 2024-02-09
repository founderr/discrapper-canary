"use strict";
n.r(t), n.d(t, {
  canEveryoneRoleViewEvent: function() {
    return h
  },
  isGuildEventInvitable: function() {
    return v
  },
  default: function() {
    return I
  }
}), n("222007");
var l = n("446674"),
  a = n("242757"),
  s = n("834052"),
  r = n("42203"),
  i = n("923959"),
  u = n("305961"),
  o = n("957255"),
  d = n("991170"),
  c = n("398604"),
  f = n("745049"),
  E = n("49111");

function h(e) {
  var t;
  let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default];
  let {
    entityType: l,
    channelId: a
  } = "entity_type" in (t = e) ? {
    entityType: t.entity_type,
    channelId: t.channel_id
  } : t, s = l === f.GuildScheduledEventEntityTypes.EXTERNAL;
  if (s) return !0;
  let i = n.getChannel(a);
  return null != i && d.default.canEveryoneRole(E.Permissions.VIEW_CHANNEL, i)
}

function v(e) {
  let [t, n, l, d] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default, r.default, u.default, s.default];
  if ((0, c.isGuildEventEnded)(e)) return !1;
  let {
    guild_id: E,
    channel_id: v
  } = e, I = e.entity_type === f.GuildScheduledEventEntityTypes.EXTERNAL, _ = I ? t.getDefaultChannel(e.guild_id) : n.getChannel(v), C = l.getGuild(E), m = d.getStageInstanceByChannel(v);
  return !!(0, a.canViewInviteModal)(o.default, C, _, m) && null != _ && h(e, [n])
}

function I(e) {
  return (0, l.useStateFromStores)([i.default, r.default, u.default, s.default], () => v(e, [i.default, r.default, u.default, s.default]), [e])
}