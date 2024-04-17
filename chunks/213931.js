"use strict";
n.r(t), n.d(t, {
  updateChannelCustomNotificationSound: function() {
    return l
  },
  updateGuildCustomNotificationSound: function() {
    return i
  }
});
var a = n("381499"),
  u = n("675478");

function i(e, t) {
  (0, u.updateUserGuildSettings)(e, e => {
    e.customNotificationSoundConfig = {
      notificationSoundPackId: a.StringValue.create({
        value: t
      })
    }
  }, u.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function l(e, t, n) {
  return (0, u.updateUserChannelSettings)(e, t, e => {
    e.customNotificationSoundConfig = {
      notificationSoundPackId: a.StringValue.create({
        value: n
      })
    }
  }, u.UserSettingsDelay.INFREQUENT_USER_ACTION), null
}