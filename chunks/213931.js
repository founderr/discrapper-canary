t.d(n, {
  M: function() {
    return o
  },
  t: function() {
    return s
  }
});
var i = t(381499),
  l = t(675478),
  a = t(592125),
  r = t(626135),
  u = t(981631);

function s(e, n, t, a) {
  if (n !== t)(0, l.PS)(e, e => {
    e.customNotificationSoundConfig = {
      notificationSoundPackId: i.Gm.create({
        value: t
      })
    }
  }, l.fy.INFREQUENT_USER_ACTION), r.default.track(u.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
    guild_id: e,
    location: a,
    soundpack: t
  })
}

function o(e, n, t, s, o) {
  var d;
  if (t !== s)(0, l.BU)(e, n, e => {
    e.customNotificationSoundConfig = {
      notificationSoundPackId: i.Gm.create({
        value: s
      })
    }
  }, l.fy.INFREQUENT_USER_ACTION), r.default.track(u.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
    guild_id: e,
    channel_id: n,
    channel_type: null === (d = a.Z.getChannel(n)) || void 0 === d ? void 0 : d.type,
    location: o,
    soundpack: s
  })
}