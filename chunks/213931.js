"use strict";
n.r(t), n.d(t, {
  updateChannelCustomNotificationSound: function() {
    return d
  },
  updateGuildCustomNotificationSound: function() {
    return r
  }
});
var a = n("381499"),
  u = n("675478"),
  l = n("592125"),
  i = n("626135"),
  s = n("981631");

function r(e, t, n) {
  (0, u.updateUserGuildSettings)(e, e => {
    e.customNotificationSoundConfig = {
      notificationSoundPackId: a.StringValue.create({
        value: t
      })
    }
  }, u.UserSettingsDelay.INFREQUENT_USER_ACTION), i.default.track(s.AnalyticEvents.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
    guild_id: e,
    location: n,
    soundpack: t
  })
}

function d(e, t, n, r) {
  var d;
  (0, u.updateUserChannelSettings)(e, t, e => {
    e.customNotificationSoundConfig = {
      notificationSoundPackId: a.StringValue.create({
        value: n
      })
    }
  }, u.UserSettingsDelay.INFREQUENT_USER_ACTION), i.default.track(s.AnalyticEvents.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
    guild_id: e,
    channel_id: t,
    channel_type: null === (d = l.default.getChannel(t)) || void 0 === d ? void 0 : d.type,
    location: r,
    soundpack: n
  })
}