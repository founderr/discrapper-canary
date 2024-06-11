"use strict";
e.r(i), e.d(i, {
  updateGuildPreset: function() {
    return r
  }
}), e("399606");
var n = e("92114"),
  a = e("9156"),
  u = e("621600"),
  s = e("113449"),
  o = e("686660"),
  l = e("981631"),
  c = e("526761");

function r(t, i) {
  let e = a.default.getGuildFlags(t);
  i === o.Presets.ALL_MESSAGES ? n.default.updateGuildNotificationSettings(t, {
    message_notifications: l.UserNotificationSettings.ALL_MESSAGES,
    flags: (0, s.withGuildUnreadFlags)(e, c.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
  }, u.NotificationLabels.PresetAll) : i === o.Presets.MENTIONS ? n.default.updateGuildNotificationSettings(t, {
    message_notifications: l.UserNotificationSettings.ONLY_MENTIONS,
    flags: (0, s.withGuildUnreadFlags)(e, c.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
  }, u.NotificationLabels.PresetMentions) : i === o.Presets.NOTHING && n.default.updateGuildNotificationSettings(t, {
    message_notifications: l.UserNotificationSettings.NO_MESSAGES,
    flags: (0, s.withGuildUnreadFlags)(e, c.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
  }, u.NotificationLabels.PresetNothing)
}