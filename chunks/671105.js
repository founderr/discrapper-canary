"use strict";
i.r(t), i.d(t, {
  getChannelCustomNotificationSound: function() {
    return s
  },
  getGuildCustomNotificationSound: function() {
    return d
  },
  useChannelCustomNotificationSound: function() {
    return r
  },
  useGuildCustomNotificationSound: function() {
    return l
  }
});
var u = i("442837"),
  o = i("581883"),
  e = i("871465");

function l(n) {
  return a(n, void 0, (0, u.useStateFromStores)([o.default], () => {
    var n;
    return null === (n = o.default.settings.guilds) || void 0 === n ? void 0 : n.guilds
  }))
}

function d(n) {
  var t, i;
  return a(n, void 0, null !== (i = null === (t = o.default.settings.guilds) || void 0 === t ? void 0 : t.guilds) && void 0 !== i ? i : {})
}

function r(n, t) {
  let i = (0, u.useStateFromStores)([o.default], () => {
    var n;
    return null === (n = o.default.settings.guilds) || void 0 === n ? void 0 : n.guilds
  });
  return null != t ? a(n, t, i) : void 0
}

function s(n, t) {
  var i, u;
  let e = null !== (u = null === (i = o.default.settings.guilds) || void 0 === i ? void 0 : i.guilds) && void 0 !== u ? u : {};
  return null != t ? a(n, t, e) : void 0
}

function a(n, t, i) {
  var u, o;
  if (null == i) return;
  let l = null != t ? null === (u = i[n]) || void 0 === u ? void 0 : u.channels[t] : i[n],
    d = null == l ? void 0 : l.customNotificationSoundConfig;
  return null != d ? function(n) {
    return null != n ? Object.values(e.Soundpacks).find(t => t === n) : void 0
  }(null == d ? void 0 : null === (o = d.notificationSoundPackId) || void 0 === o ? void 0 : o.value) : void 0
}