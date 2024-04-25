"use strict";
s.r(t), s.d(t, {
  getPushNotificationSelectOptions: function() {
    return l
  },
  getUnreadSelectOptions: function() {
    return r
  }
});
var a = s("981631"),
  i = s("490897"),
  n = s("689938");
let l = e => [{
    label: n.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
    value: a.UserNotificationSettings.ALL_MESSAGES
  }, {
    label: n.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
    value: a.UserNotificationSettings.ONLY_MENTIONS
  }, {
    label: n.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
    value: a.UserNotificationSettings.NO_MESSAGES
  }],
  r = e => [{
    label: n.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
    value: i.UnreadSetting.ALL_MESSAGES
  }, {
    value: i.UnreadSetting.ONLY_MENTIONS,
    label: n.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
    disabled: (null == e ? void 0 : e.notificationSetting) === a.UserNotificationSettings.ALL_MESSAGES
  }]