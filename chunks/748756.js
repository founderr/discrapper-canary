"use strict";
i.r(t), i.d(t, {
  updateGuildPreset: function() {
    return r
  }
}), i("399606");
var n = i("92114"),
  s = i("9156"),
  a = i("621600"),
  l = i("113449"),
  u = i("686660"),
  o = i("981631"),
  d = i("526761");

function r(e, t) {
  let i = s.default.getGuildFlags(e);
  t === u.Presets.ALL_MESSAGES ? n.default.updateGuildNotificationSettings(e, {
    message_notifications: o.UserNotificationSettings.ALL_MESSAGES,
    flags: (0, l.withGuildUnreadFlags)(i, d.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
  }, a.NotificationLabels.PresetAll) : t === u.Presets.MENTIONS ? n.default.updateGuildNotificationSettings(e, {
    message_notifications: o.UserNotificationSettings.ONLY_MENTIONS,
    flags: (0, l.withGuildUnreadFlags)(i, d.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
  }, a.NotificationLabels.PresetMentions) : t === u.Presets.NOTHING && n.default.updateGuildNotificationSettings(e, {
    message_notifications: o.UserNotificationSettings.NO_MESSAGES,
    flags: (0, l.withGuildUnreadFlags)(i, d.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
  }, a.NotificationLabels.PresetNothing)
}