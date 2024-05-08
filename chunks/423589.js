"use strict";
n.r(t), n.d(t, {
  filterOverrides: function() {
    return N
  },
  getMuteTimeOptions: function() {
    return _
  },
  useShouldUseNewNotificationSystem: function() {
    return f
  }
}), n("47120"), n("789020");
var i = n("442837"),
  a = n("798140"),
  s = n("9156"),
  l = n("630388"),
  o = n("709054"),
  r = n("312400"),
  d = n("981631"),
  u = n("969943"),
  S = n("526761"),
  g = n("689938");

function _() {
  return [{
    label: g.default.Messages.MUTE_DURATION_15_MINUTES,
    value: u.MuteUntilSeconds.MINUTES_15
  }, {
    label: g.default.Messages.MUTE_DURATION_1_HOUR,
    value: u.MuteUntilSeconds.HOURS_1
  }, {
    label: g.default.Messages.MUTE_DURATION_3_HOURS,
    value: u.MuteUntilSeconds.HOURS_3
  }, {
    label: g.default.Messages.MUTE_DURATION_8_HOURS,
    value: u.MuteUntilSeconds.HOURS_8
  }, {
    label: g.default.Messages.MUTE_DURATION_24_HOURS,
    value: u.MuteUntilSeconds.HOURS_24
  }, {
    label: g.default.Messages.MUTE_DURATION_ALWAYS,
    value: u.MuteUntilSeconds.ALWAYS
  }]
}
let c = {
  ignoreMute: !1,
  ignoreUnreadSetting: !0,
  ignoreNotificationSetting: !1
};

function N(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
  return o.default.keys(e).filter(n => {
    var i, s;
    let o = e[n].message_notifications !== d.UserNotificationSettings.NULL,
      r = l.hasFlag(null !== (i = e[n].flags) && void 0 !== i ? i : 0, S.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES) || l.hasFlag(null !== (s = e[n].flags) && void 0 !== s ? s : 0, S.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);
    return !t.ignoreUnreadSetting && r || !t.ignoreNotificationSetting && o || !t.ignoreMute && (0, a.computeIsMuted)(e[n])
  })
}

function f(e) {
  let t = (0, i.useStateFromStores)([s.default], () => s.default.useNewNotifications);
  return r.NotificationsExperiment.useExperiment({
    location: e
  }, {
    autoTrackExposure: !1
  }).enabled && t
}