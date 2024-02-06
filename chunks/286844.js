"use strict";
s.r(t), s.d(t, {
  getPushNotificationSelectOptions: function() {
    return a
  },
  getUnreadSelectOptions: function() {
    return r
  }
});
var i = s("49111"),
  n = s("133335"),
  l = s("782340");
let a = e => [{
    label: l.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
    value: i.UserNotificationSettings.ALL_MESSAGES
  }, {
    label: l.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
    value: i.UserNotificationSettings.ONLY_MENTIONS
  }, {
    label: l.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
    value: i.UserNotificationSettings.NO_MESSAGES
  }],
  r = e => [{
    label: l.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
    value: n.UnreadSetting.ALL_MESSAGES
  }, {
    value: n.UnreadSetting.ONLY_MENTIONS,
    label: l.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
    disabled: (null == e ? void 0 : e.notificationSetting) === i.UserNotificationSettings.ALL_MESSAGES
  }]