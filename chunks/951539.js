"use strict";
n.r(t), n.d(t, {
  canEveryoneRoleViewEvent: function() {
    return E
  },
  default: function() {
    return m
  },
  isGuildEventInvitable: function() {
    return h
  }
}), n("47120");
var l = n("442837"),
  i = n("159300"),
  a = n("427679"),
  r = n("592125"),
  s = n("984933"),
  u = n("430824"),
  d = n("496675"),
  o = n("700785"),
  c = n("924301"),
  f = n("765305"),
  v = n("981631");

function E(e) {
  var t;
  let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default];
  let {
    entityType: l,
    channelId: i
  } = "entity_type" in (t = e) ? {
    entityType: t.entity_type,
    channelId: t.channel_id
  } : t;
  if (l === f.GuildScheduledEventEntityTypes.EXTERNAL) return !0;
  let a = n.getChannel(i);
  return null != a && o.canEveryoneRole(v.Permissions.VIEW_CHANNEL, a)
}

function h(e) {
  let [t, n, l, o] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.default, r.default, u.default, a.default];
  if ((0, c.isGuildEventEnded)(e)) return !1;
  let {
    guild_id: v,
    channel_id: h
  } = e, m = e.entity_type === f.GuildScheduledEventEntityTypes.EXTERNAL ? t.getDefaultChannel(e.guild_id) : n.getChannel(h), g = l.getGuild(v), _ = o.getStageInstanceByChannel(h);
  return !!(0, i.canViewInviteModal)(d.default, g, m, _) && null != m && E(e, [n])
}

function m(e) {
  return (0, l.useStateFromStores)([s.default, r.default, u.default, a.default], () => h(e, [s.default, r.default, u.default, a.default]), [e])
}