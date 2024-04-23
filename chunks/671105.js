"use strict";
n.r(t), n.d(t, {
  useChannelCustomNotificationSound: function() {
    return l
  },
  useGuildCustomNotificationSound: function() {
    return i
  }
});
var a = n("442837"),
  u = n("581883");

function i(e) {
  var t, n;
  let i = (0, a.useStateFromStores)([u.default], () => {
      var e;
      return null === (e = u.default.settings.guilds) || void 0 === e ? void 0 : e.guilds
    }),
    l = null != i ? null === (t = i[e]) || void 0 === t ? void 0 : t.customNotificationSoundConfig : void 0;
  return null != l ? null == l ? void 0 : null === (n = l.notificationSoundPackId) || void 0 === n ? void 0 : n.value : void 0
}

function l(e, t) {
  var n, i;
  let l = (0, a.useStateFromStores)([u.default], () => {
      var e;
      return null === (e = u.default.settings.guilds) || void 0 === e ? void 0 : e.guilds
    }),
    r = null != t && null != l ? null === (n = l[e]) || void 0 === n ? void 0 : n.channels[t] : void 0,
    s = null == r ? void 0 : r.customNotificationSoundConfig;
  return null != s ? null == s ? void 0 : null === (i = s.notificationSoundPackId) || void 0 === i ? void 0 : i.value : void 0
}