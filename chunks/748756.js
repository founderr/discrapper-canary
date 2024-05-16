"use strict";
n.r(e), n.d(e, {
  updateGuildPreset: function() {
    return d
  }
}), n("399606");
var i = n("92114"),
  l = n("9156"),
  o = n("621600"),
  u = n("113449"),
  s = n("686660"),
  a = n("981631"),
  r = n("526761");

function d(t, e) {
  let n = l.default.getGuildFlags(t);
  e === s.Presets.ALL_MESSAGES ? i.default.updateGuildNotificationSettings(t, {
    message_notifications: a.UserNotificationSettings.ALL_MESSAGES,
    flags: (0, u.withGuildUnreadFlags)(n, r.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
  }, o.NotificationLabels.PresetAll) : e === s.Presets.MENTIONS ? i.default.updateGuildNotificationSettings(t, {
    message_notifications: a.UserNotificationSettings.ONLY_MENTIONS,
    flags: (0, u.withGuildUnreadFlags)(n, r.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
  }, o.NotificationLabels.PresetMentions) : e === s.Presets.NOTHING && i.default.updateGuildNotificationSettings(t, {
    message_notifications: a.UserNotificationSettings.NO_MESSAGES,
    flags: (0, u.withGuildUnreadFlags)(n, r.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
  }, o.NotificationLabels.PresetNothing)
}