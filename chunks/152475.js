"use strict";
n.r(t), n.d(t, {
  canEveryoneRoleViewEvent: function() {
    return h
  },
  isGuildEventInvitable: function() {
    return v
  },
  default: function() {
    return _
  }
}), n("222007");
var l = n("446674"),
  a = n("242757"),
  s = n("834052"),
  i = n("42203"),
  r = n("923959"),
  u = n("305961"),
  d = n("957255"),
  o = n("991170"),
  c = n("398604"),
  E = n("745049"),
  f = n("49111");

function h(e) {
  var t;
  let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default];
  let {
    entityType: l,
    channelId: a
  } = "entity_type" in (t = e) ? {
    entityType: t.entity_type,
    channelId: t.channel_id
  } : t, s = l === E.GuildScheduledEventEntityTypes.EXTERNAL;
  if (s) return !0;
  let r = n.getChannel(a);
  return null != r && o.default.canEveryoneRole(f.Permissions.VIEW_CHANNEL, r)
}

function v(e) {
  let [t, n, l, o] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default, i.default, u.default, s.default];
  if ((0, c.isGuildEventEnded)(e)) return !1;
  let {
    guild_id: f,
    channel_id: v
  } = e, _ = e.entity_type === E.GuildScheduledEventEntityTypes.EXTERNAL, I = _ ? t.getDefaultChannel(e.guild_id) : n.getChannel(v), m = l.getGuild(f), T = o.getStageInstanceByChannel(v);
  return !!(0, a.canViewInviteModal)(d.default, m, I, T) && null != I && h(e, [n])
}

function _(e) {
  return (0, l.useStateFromStores)([r.default, i.default, u.default, s.default], () => v(e, [r.default, i.default, u.default, s.default]), [e])
}