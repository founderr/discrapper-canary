"use strict";
n.r(e), n.d(e, {
  getChannelCustomNotificationSound: function() {
    return r
  },
  getGuildCustomNotificationSound: function() {
    return s
  },
  useChannelCustomNotificationSound: function() {
    return a
  },
  useGuildCustomNotificationSound: function() {
    return u
  }
});
var i = n("442837"),
  l = n("581883"),
  o = n("871465");

function u(t) {
  return d(t, void 0, (0, i.useStateFromStores)([l.default], () => {
    var t;
    return null === (t = l.default.settings.guilds) || void 0 === t ? void 0 : t.guilds
  }))
}

function s(t) {
  var e, n;
  return d(t, void 0, null !== (n = null === (e = l.default.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== n ? n : {})
}

function a(t, e) {
  let n = (0, i.useStateFromStores)([l.default], () => {
    var t;
    return null === (t = l.default.settings.guilds) || void 0 === t ? void 0 : t.guilds
  });
  return null != e ? d(t, e, n) : void 0
}

function r(t, e) {
  var n, i;
  let o = null !== (i = null === (n = l.default.settings.guilds) || void 0 === n ? void 0 : n.guilds) && void 0 !== i ? i : {};
  return null != e ? d(t, e, o) : void 0
}

function d(t, e, n) {
  var i, l;
  if (null == n) return;
  let u = null != e ? null === (i = n[t]) || void 0 === i ? void 0 : i.channels[e] : n[t],
    s = null == u ? void 0 : u.customNotificationSoundConfig;
  return null != s ? function(t) {
    return null != t ? Object.values(o.Soundpacks).find(e => e === t) : void 0
  }(null == s ? void 0 : null === (l = s.notificationSoundPackId) || void 0 === l ? void 0 : l.value) : void 0
}