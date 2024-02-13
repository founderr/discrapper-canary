"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("446674"),
  r = n("913144");
let i = {
    enabled: !1
  },
  s = {},
  l = {},
  u = !1;
class o extends a.default.DeviceSettingsStore {
  initialize() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i;
    u = e.enabled
  }
  getWaitingHighFive(e, t) {
    var n;
    return null === (n = s[e]) || void 0 === n ? void 0 : n[t]
  }
  getCompletedHighFive(e, t) {
    var n;
    return null === (n = l[e]) || void 0 === n ? void 0 : n[t]
  }
  getEnabled() {
    return u
  }
  getUserAgnosticState() {
    return {
      enabled: u
    }
  }
}
o.persistKey = "HighFiveStore";
var d = new o(r.default, {
  HIGH_FIVE_QUEUE: function(e) {
    let {
      userId: t,
      channelId: n,
      emoji: a
    } = e;
    s[n] = {
      ...s[n],
      [t]: a
    }
  },
  HIGH_FIVE_REMOVE: function(e) {
    let {
      userId: t,
      channelId: n
    } = e, a = s[n];
    if (null == a) return !1;
    delete a[t]
  },
  HIGH_FIVE_SET_ENABLED: function(e) {
    let {
      enabled: t
    } = e;
    u = t
  },
  HIGH_FIVE_COMPLETE: function(e) {
    var t;
    let {
      completingEmoji: n,
      completingUserId: a,
      waitingUserId: r,
      channelId: i
    } = e, u = null !== (t = s[i]) && void 0 !== t ? t : {}, o = u[r];
    if (delete u[r], null == o) return !1;
    l[i] = {
      ...l[i],
      [r]: [o, n],
      [a]: [n, o]
    }
  },
  HIGH_FIVE_COMPLETE_CLEAR: function(e) {
    var t;
    let {
      firstUserId: n,
      secondUserId: a,
      channelId: r
    } = e, i = null !== (t = l[r]) && void 0 !== t ? t : {};
    delete i[n], delete i[a]
  }
})