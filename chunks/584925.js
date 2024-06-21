"use strict";
n(47120);
var i, r = n(442837),
  s = n(570140);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let a = 5 * n(70956).Z.Millis.DAY,
  l = {
    readIdToTimestampMap: {}
  };
class u extends(i = r.ZP.DeviceSettingsStore) {
  initialize(e) {
    l = null != e && null != e.readIdToTimestampMap ? {
      readIdToTimestampMap: e.readIdToTimestampMap
    } : {
      readIdToTimestampMap: {}
    };
    let t = Date.now() - a;
    for (let e of Object.keys(l.readIdToTimestampMap).filter(e => l.readIdToTimestampMap[e] < t)) delete l.readIdToTimestampMap[e]
  }
  getReadTimestamp(e) {
    return l.readIdToTimestampMap[e]
  }
  getState() {
    return l
  }
  getUserAgnosticState() {
    return l
  }
}
o(u, "displayName", "GravityUnreadStateStore"), o(u, "persistKey", "GravityUnreadStateStore"), t.Z = new u(s.Z, {
  GRAVITY_ACK_ITEMS: function(e) {
    let {
      items: t
    } = e;
    t.forEach(e => {
      null != e && (l.readIdToTimestampMap[e.id] = e.timestamp)
    })
  }
})