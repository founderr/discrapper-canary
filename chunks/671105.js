"use strict";
n.r(t), n.d(t, {
  useChannelCustomNotificationSound: function() {
    return i
  },
  useGuildCustomNotificationSound: function() {
    return l
  }
});
var a = n("442837"),
  u = n("581883");

function l(e) {
  var t, n;
  let l = (0, a.useStateFromStores)([u.default], () => {
      var e;
      return null === (e = u.default.settings.guilds) || void 0 === e ? void 0 : e.guilds
    }),
    i = null != l ? null === (t = l[e]) || void 0 === t ? void 0 : t.customNotificationSoundConfig : void 0;
  return null != i ? null == i ? void 0 : null === (n = i.notificationSoundPackId) || void 0 === n ? void 0 : n.value : void 0
}

function i(e, t) {
  var n, l;
  let i = (0, a.useStateFromStores)([u.default], () => {
      var e;
      return null === (e = u.default.settings.guilds) || void 0 === e ? void 0 : e.guilds
    }),
    s = null != t && null != i ? null === (n = i[e]) || void 0 === n ? void 0 : n.channels[t] : void 0,
    r = null == s ? void 0 : s.customNotificationSoundConfig;
  return null != r ? null == r ? void 0 : null === (l = r.notificationSoundPackId) || void 0 === l ? void 0 : l.value : void 0
}