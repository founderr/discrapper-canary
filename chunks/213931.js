"use strict";
n.r(t), n.d(t, {
  updateChannelCustomNotificationSound: function() {
    return o
  },
  updateGuildCustomNotificationSound: function() {
    return r
  }
});
var a = n("381499"),
  u = n("675478"),
  i = n("592125"),
  l = n("626135"),
  s = n("981631");

function r(e, t, n, i) {
  t !== n && ((0, u.updateUserGuildSettings)(e, e => {
    e.customNotificationSoundConfig = {
      notificationSoundPackId: a.StringValue.create({
        value: n
      })
    }
  }, u.UserSettingsDelay.INFREQUENT_USER_ACTION), l.default.track(s.AnalyticEvents.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
    guild_id: e,
    location: i,
    soundpack: n
  }))
}

function o(e, t, n, r, o) {
  var d;
  n !== r && ((0, u.updateUserChannelSettings)(e, t, e => {
    e.customNotificationSoundConfig = {
      notificationSoundPackId: a.StringValue.create({
        value: r
      })
    }
  }, u.UserSettingsDelay.INFREQUENT_USER_ACTION), l.default.track(s.AnalyticEvents.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
    guild_id: e,
    channel_id: t,
    channel_type: null === (d = i.default.getChannel(t)) || void 0 === d ? void 0 : d.type,
    location: o,
    soundpack: r
  }))
}