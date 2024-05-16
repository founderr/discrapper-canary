"use strict";
n.r(t), n.d(t, {
  updateChannelNotificationSetting: function() {
    return M
  },
  updateChannelPreset: function() {
    return f
  },
  updateChannelToGuildDefault: function() {
    return E
  },
  updateChannelUnreadSetting: function() {
    return h
  },
  useChannelPresetInheritance: function() {
    return N
  },
  useChannelPresetSettings: function() {
    return c
  }
}), n("47120");
var i = n("399606"),
  a = n("92114"),
  s = n("592125"),
  l = n("9156"),
  o = n("621600"),
  r = n("423589"),
  d = n("113449"),
  u = n("686660"),
  S = n("981631"),
  g = n("490897"),
  _ = n("526761");

function c(e) {
  let t = (0, i.useStateFromStores)([l.default], () => l.default.resolveUnreadSetting(e)),
    n = (0, i.useStateFromStores)([l.default], () => l.default.resolvedMessageNotifications(e));
  return {
    unread: t,
    notification: n,
    preset: (0, u.presetFromSettings)(t, n)
  }
}

function N(e) {
  let t = (0, i.useStateFromStoresArray)([l.default], () => (0, r.filterOverrides)(l.default.getChannelOverrides(e.guild_id), {
      ignoreMute: !0,
      ignoreUnreadSetting: !1,
      ignoreNotificationSetting: !1
    })),
    [n, a] = (0, i.useStateFromStoresArray)([l.default, s.default], () => {
      let n = s.default.getChannel(e.parent_id);
      return null != n && t.includes(n.id) ? ["parent", (0, u.presetName)((0, u.presetFromSettings)(l.default.resolveUnreadSetting(n), l.default.resolvedMessageNotifications(n)))] : ["guild", (0, u.presetName)((0, u.presetFromSettings)(l.default.getGuildUnreadSetting(e.guild_id), l.default.getMessageNotifications(e.guild_id)))]
    }, [e.guild_id, e.parent_id, t]);
  return {
    inherited: !t.includes(e.id),
    inheritedFrom: n,
    inheritedPreset: a
  }
}

function f(e, t, n) {
  let i = l.default.getChannelIdFlags(e, t);
  n === u.Presets.ALL_MESSAGES ? a.default.updateChannelOverrideSettings(e, t, {
    message_notifications: S.UserNotificationSettings.ALL_MESSAGES,
    flags: (0, d.withChannelUnreadFlags)(i, _.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
  }, o.NotificationLabels.PresetAll) : n === u.Presets.MENTIONS ? a.default.updateChannelOverrideSettings(e, t, {
    message_notifications: S.UserNotificationSettings.ONLY_MENTIONS,
    flags: (0, d.withChannelUnreadFlags)(i, _.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
  }, o.NotificationLabels.PresetMentions) : n === u.Presets.NOTHING && a.default.updateChannelOverrideSettings(e, t, {
    message_notifications: S.UserNotificationSettings.NO_MESSAGES,
    flags: (0, d.withChannelUnreadFlags)(i, _.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
  }, o.NotificationLabels.PresetNothing)
}

function E(e, t) {
  a.default.updateChannelOverrideSettings(e, t, {
    message_notifications: S.UserNotificationSettings.NULL,
    flags: (0, d.resetChannelUnreadFlags)(l.default.getChannelIdFlags(e, t))
  }, o.NotificationLabels.PresetDefault)
}

function h(e, t, n) {
  let i = l.default.getChannelIdFlags(e, t);
  a.default.updateChannelOverrideSettings(e, t, {
    flags: (0, d.withChannelUnreadFlags)(i, n === g.UnreadSetting.ALL_MESSAGES ? _.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES : _.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
  }, o.NotificationLabel.unreads(n))
}

function M(e, t, n) {
  a.default.updateChannelOverrideSettings(e, t, {
    message_notifications: n
  }, o.NotificationLabel.notifications(n))
}