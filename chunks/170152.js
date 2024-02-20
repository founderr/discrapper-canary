"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("446674"),
  r = n("913144");
let s = {
    enabled: !1
  },
  i = {},
  l = {},
  o = !1;
class u extends a.default.DeviceSettingsStore {
  initialize() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
    o = e.enabled
  }
  getWaitingHighFive(e, t) {
    var n;
    return null === (n = i[e]) || void 0 === n ? void 0 : n[t]
  }
  getCompletedHighFive(e, t) {
    var n;
    return null === (n = l[e]) || void 0 === n ? void 0 : n[t]
  }
  getEnabled() {
    return o
  }
  getUserAgnosticState() {
    return {
      enabled: o
    }
  }
}
u.persistKey = "HighFiveStore";
var d = new u(r.default, {
  HIGH_FIVE_QUEUE: function(e) {
    let {
      userId: t,
      channelId: n,
      emoji: a
    } = e;
    i[n] = {
      ...i[n],
      [t]: a
    }
  },
  HIGH_FIVE_REMOVE: function(e) {
    let {
      userId: t,
      channelId: n
    } = e, a = i[n];
    if (null == a) return !1;
    delete a[t]
  },
  HIGH_FIVE_SET_ENABLED: function(e) {
    let {
      enabled: t
    } = e;
    o = t
  },
  HIGH_FIVE_COMPLETE: function(e) {
    var t;
    let {
      completingEmoji: n,
      completingUserId: a,
      waitingUserId: r,
      channelId: s
    } = e, o = null !== (t = i[s]) && void 0 !== t ? t : {}, u = o[r];
    if (delete o[r], null == u) return !1;
    l[s] = {
      ...l[s],
      [r]: [u, n],
      [a]: [n, u]
    }
  },
  HIGH_FIVE_COMPLETE_CLEAR: function(e) {
    var t;
    let {
      firstUserId: n,
      secondUserId: a,
      channelId: r
    } = e, s = null !== (t = l[r]) && void 0 !== t ? t : {};
    delete s[n], delete s[a]
  }
})