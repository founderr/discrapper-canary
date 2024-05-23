"use strict";
n.r(t), n.d(t, {
  EmbeddedActivityLaunchability: function() {
    return r
  },
  getEmbeddedActivityLaunchability: function() {
    return E
  },
  getEmbeddedActivityLaunchabilityLabel: function() {
    return T
  },
  useEmbeddedActivityLaunchability: function() {
    return I
  }
});
var i, r, s = n("442837"),
  a = n("592125"),
  o = n("430824"),
  l = n("496675"),
  u = n("979651"),
  d = n("782769"),
  _ = n("981631"),
  c = n("689938");

function E(e) {
  let {
    channelId: t,
    ChannelStore: n,
    GuildStore: i,
    PermissionStore: r,
    VoiceStateStore: s
  } = e, a = n.getChannel(t);
  if (null == a) return 3;
  if (!(0, d.getIsActivitiesEnabledForCurrentPlatform)(a)) return 6;
  if (!a.isPrivate()) {
    let e = a.getGuildId();
    if (null == e) return 4;
    let n = i.getGuild(e);
    if ((null == n ? void 0 : n.afkChannelId) === a.id) return 5;
    let o = r.can(_.Permissions.CONNECT, a);
    if (!r.can(_.Permissions.USE_EMBEDDED_ACTIVITIES, a)) return 1;
    let l = s.getCurrentClientVoiceChannelId(a.getGuildId()) === t;
    if (a.isVocal() && !l && !o) return 2
  }
  return 0
}

function I(e) {
  return (0, s.useStateFromStores)([a.default, o.default, l.default, u.default], () => E({
    channelId: e,
    ChannelStore: a.default,
    GuildStore: o.default,
    PermissionStore: l.default,
    VoiceStateStore: u.default
  }), [e])
}

function T(e) {
  switch (e) {
    case 0:
      return c.default.Messages.EMBEDDED_ACTIVITIES_START_AN_ACTIVITY;
    case 1:
      return c.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
    default:
      return c.default.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL
  }
}(i = r || (r = {}))[i.CAN_LAUNCH = 0] = "CAN_LAUNCH", i[i.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION", i[i.NO_CHANNEL_CONNECT_PERMISSION = 2] = "NO_CHANNEL_CONNECT_PERMISSION", i[i.NO_CHANNEL = 3] = "NO_CHANNEL", i[i.NO_GUILD = 4] = "NO_GUILD", i[i.IS_AFK_CHANNEL = 5] = "IS_AFK_CHANNEL", i[i.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 6] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS"