"use strict";
n.r(t), n.d(t, {
  updateChannelCustomNotificationSound: function() {
    return i
  },
  updateGuildCustomNotificationSound: function() {
    return l
  }
});
var a = n("381499"),
  u = n("675478");

function l(e, t) {
  (0, u.updateUserGuildSettings)(e, e => {
    e.customNotificationSoundConfig = {
      notificationSoundPackId: a.StringValue.create({
        value: t
      })
    }
  }, u.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function i(e, t, n) {
  return (0, u.updateUserChannelSettings)(e, t, e => {
    e.customNotificationSoundConfig = {
      notificationSoundPackId: a.StringValue.create({
        value: n
      })
    }
  }, u.UserSettingsDelay.INFREQUENT_USER_ACTION), null
}