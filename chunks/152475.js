"use strict";
n.r(t), n.d(t, {
  canEveryoneRoleViewEvent: function() {
    return _
  },
  isGuildEventInvitable: function() {
    return I
  },
  default: function() {
    return h
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

function _(e) {
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

function I(e) {
  let [t, n, l, o] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default, i.default, u.default, s.default];
  if ((0, c.isGuildEventEnded)(e)) return !1;
  let {
    guild_id: f,
    channel_id: I
  } = e, h = e.entity_type === E.GuildScheduledEventEntityTypes.EXTERNAL, T = h ? t.getDefaultChannel(e.guild_id) : n.getChannel(I), N = l.getGuild(f), v = o.getStageInstanceByChannel(I);
  return !!(0, a.canViewInviteModal)(d.default, N, T, v) && null != T && _(e, [n])
}

function h(e) {
  return (0, l.useStateFromStores)([r.default, i.default, u.default, s.default], () => I(e, [r.default, i.default, u.default, s.default]), [e])
}