"use strict";
n.r(t), n.d(t, {
  canEveryoneRoleViewEvent: function() {
    return I
  },
  isGuildEventInvitable: function() {
    return _
  },
  default: function() {
    return h
  }
}), n("222007");
var l = n("446674"),
  a = n("242757"),
  i = n("834052"),
  s = n("42203"),
  r = n("923959"),
  u = n("305961"),
  d = n("957255"),
  o = n("991170"),
  c = n("398604"),
  f = n("745049"),
  E = n("49111");

function I(e) {
  var t;
  let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.default];
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

function _(e) {
  let [t, n, l, o] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default, s.default, u.default, i.default];
  if ((0, c.isGuildEventEnded)(e)) return !1;
  let {
    guild_id: E,
    channel_id: _
  } = e, h = e.entity_type === f.GuildScheduledEventEntityTypes.EXTERNAL, T = h ? t.getDefaultChannel(e.guild_id) : n.getChannel(_), v = l.getGuild(E), N = o.getStageInstanceByChannel(_);
  return !!(0, a.canViewInviteModal)(d.default, v, T, N) && null != T && I(e, [n])
}

function h(e) {
  return (0, l.useStateFromStores)([r.default, s.default, u.default, i.default], () => _(e, [r.default, s.default, u.default, i.default]), [e])
}