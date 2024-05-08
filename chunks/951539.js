"use strict";
l.r(t), l.d(t, {
  canEveryoneRoleViewEvent: function() {
    return E
  },
  default: function() {
    return m
  },
  isGuildEventInvitable: function() {
    return h
  }
}), l("47120");
var n = l("442837"),
  i = l("159300"),
  a = l("427679"),
  r = l("592125"),
  s = l("984933"),
  u = l("430824"),
  d = l("496675"),
  o = l("700785"),
  c = l("924301"),
  f = l("765305"),
  v = l("981631");

function E(e) {
  var t;
  let [l] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default];
  let {
    entityType: n,
    channelId: i
  } = "entity_type" in (t = e) ? {
    entityType: t.entity_type,
    channelId: t.channel_id
  } : t;
  if (n === f.GuildScheduledEventEntityTypes.EXTERNAL) return !0;
  let a = l.getChannel(i);
  return null != a && o.canEveryoneRole(v.Permissions.VIEW_CHANNEL, a)
}

function h(e) {
  let [t, l, n, o] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.default, r.default, u.default, a.default];
  if ((0, c.isGuildEventEnded)(e)) return !1;
  let {
    guild_id: v,
    channel_id: h
  } = e, m = e.entity_type === f.GuildScheduledEventEntityTypes.EXTERNAL ? t.getDefaultChannel(e.guild_id) : l.getChannel(h), _ = n.getGuild(v), g = o.getStageInstanceByChannel(h);
  return !!(0, i.canViewInviteModal)(d.default, _, m, g) && null != m && E(e, [l])
}

function m(e) {
  return (0, n.useStateFromStores)([s.default, r.default, u.default, a.default], () => h(e, [s.default, r.default, u.default, a.default]), [e])
}