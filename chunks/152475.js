"use strict";
n.r(t), n.d(t, {
  canEveryoneRoleViewEvent: function() {
    return _
  },
  isGuildEventInvitable: function() {
    return I
  },
  default: function() {
    return S
  }
}), n("222007");
var i = n("446674"),
  u = n("242757"),
  r = n("834052"),
  l = n("42203"),
  o = n("923959"),
  a = n("305961"),
  s = n("957255"),
  c = n("991170"),
  d = n("398604"),
  E = n("745049"),
  f = n("49111");

function _(e) {
  var t;
  let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.default];
  let {
    entityType: i,
    channelId: u
  } = "entity_type" in (t = e) ? {
    entityType: t.entity_type,
    channelId: t.channel_id
  } : t, r = i === E.GuildScheduledEventEntityTypes.EXTERNAL;
  if (r) return !0;
  let o = n.getChannel(u);
  return null != o && c.default.canEveryoneRole(f.Permissions.VIEW_CHANNEL, o)
}

function I(e) {
  let [t, n, i, c] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.default, l.default, a.default, r.default];
  if ((0, d.isGuildEventEnded)(e)) return !1;
  let {
    guild_id: f,
    channel_id: I
  } = e, S = e.entity_type === E.GuildScheduledEventEntityTypes.EXTERNAL, T = S ? t.getDefaultChannel(e.guild_id) : n.getChannel(I), N = i.getGuild(f), v = c.getStageInstanceByChannel(I);
  return !!(0, u.canViewInviteModal)(s.default, N, T, v) && null != T && _(e, [n])
}

function S(e) {
  return (0, i.useStateFromStores)([o.default, l.default, a.default, r.default], () => I(e, [o.default, l.default, a.default, r.default]), [e])
}