"use strict";
e.r(i), e.d(i, {
  updateGuildPreset: function() {
    return c
  }
}), e("399606");
var n = e("92114"),
  a = e("9156"),
  s = e("621600"),
  u = e("113449"),
  l = e("686660"),
  o = e("981631"),
  r = e("526761");

function c(t, i) {
  let e = a.default.getGuildFlags(t);
  i === l.Presets.ALL_MESSAGES ? n.default.updateGuildNotificationSettings(t, {
    message_notifications: o.UserNotificationSettings.ALL_MESSAGES,
    flags: (0, u.withGuildUnreadFlags)(e, r.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
  }, s.NotificationLabels.PresetAll) : i === l.Presets.MENTIONS ? n.default.updateGuildNotificationSettings(t, {
    message_notifications: o.UserNotificationSettings.ONLY_MENTIONS,
    flags: (0, u.withGuildUnreadFlags)(e, r.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
  }, s.NotificationLabels.PresetMentions) : i === l.Presets.NOTHING && n.default.updateGuildNotificationSettings(t, {
    message_notifications: o.UserNotificationSettings.NO_MESSAGES,
    flags: (0, u.withGuildUnreadFlags)(e, r.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
  }, s.NotificationLabels.PresetNothing)
}