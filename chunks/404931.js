"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("424973");
var s = n("446674"),
  l = n("913144"),
  a = n("845579"),
  i = n("101125"),
  r = n("718517"),
  o = n("49111");
let u = [],
  d = !1;

function c() {
  return u.length >= 3 && u.some(e => e < Date.now() - 2 * r.default.Millis.DAY)
}
class E extends s.default.PersistedStore {
  initialize(e) {
    null != e && Array.isArray(e.sessionStartsWithDND) && (u = e.sessionStartsWithDND)
  }
  showNagBar() {
    return d
  }
  getState() {
    return {
      sessionStartsWithDND: u
    }
  }
  getTemp() {
    return {
      x: a.StatusExpiresAtSetting.getSetting()
    }
  }
}
E.displayName = "HabitualDNDStore", E.persistKey = "habitualDND";
var f = new E(l.default, {
  POST_CONNECTION_OPEN: function() {
    i.default.getStatus() === o.StatusTypes.DND && "0" === a.StatusExpiresAtSetting.getSetting() ? (u.push(Date.now()), u = u.filter(e => e > Date.now() - 5 * r.default.Millis.DAY), c() && setTimeout(() => {
      l.default.dispatch({
        type: "HABITUAL_DND_CLEAR"
      })
    }, 5 * r.default.Millis.SECOND)) : u = []
  },
  HABITUAL_DND_CLEAR: function() {
    d = !!c() || !1, u = []
  }
})