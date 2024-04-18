"use strict";
a.r(t), a("653041");
var n, s = a("442837"),
  l = a("570140"),
  i = a("695346"),
  r = a("885110"),
  o = a("70956"),
  u = a("981631");

function d(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let c = [],
  f = !1;

function E() {
  return c.length >= 4 && c.some(e => e < Date.now() - 3 * o.default.Millis.DAY)
}
class h extends(n = s.default.PersistedStore) {
  initialize(e) {
    null != e && Array.isArray(e.sessionStartsWithDND) && (c = e.sessionStartsWithDND)
  }
  showNagBar() {
    return f
  }
  getState() {
    return {
      sessionStartsWithDND: c
    }
  }
  getTemp() {
    return {
      x: i.StatusExpiresAtSetting.getSetting()
    }
  }
}
d(h, "displayName", "HabitualDNDStore"), d(h, "persistKey", "habitualDND"), new h(l.default, {
  POST_CONNECTION_OPEN: function() {
    r.default.getStatus() === u.StatusTypes.DND && "0" === i.StatusExpiresAtSetting.getSetting() ? (c.push(Date.now()), c = c.filter(e => e > Date.now() - 5 * o.default.Millis.DAY), E() && setTimeout(() => {
      l.default.dispatch({
        type: "HABITUAL_DND_CLEAR"
      })
    }, 15 * o.default.Millis.SECOND)) : c = []
  },
  HABITUAL_DND_CLEAR: function() {
    f = !!E() || !1, c = []
  }
})