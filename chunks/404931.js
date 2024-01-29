"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("424973");
var s = n("446674"),
  l = n("913144"),
  a = n("101125"),
  i = n("718517"),
  r = n("49111");
let o = [],
  u = !1;
class d extends s.default.PersistedStore {
  initialize(e) {
    null != e && Array.isArray(e.sessionStartsWithDND) && (o = e.sessionStartsWithDND)
  }
  showNagBar() {
    return u
  }
  getState() {
    return {
      sessionStartsWithDND: o
    }
  }
}
d.displayName = "HabitualDNDStore", d.persistKey = "habitualDND";
var c = new d(l.default, {
  POST_CONNECTION_OPEN: function() {
    a.default.getStatus() === r.StatusTypes.DND ? (o.push(Date.now()), (o = o.filter(e => e > Date.now() - 7 * i.default.Millis.DAY)).length >= 5 && o.some(e => e < Date.now() - 2 * i.default.Millis.DAY) && setTimeout(() => {
      u = !0, o = [], l.default.dispatch({
        type: "HABITUAL_DND_CLEAR"
      })
    }, 15 * i.default.Millis.SECOND)) : o = []
  },
  HABITUAL_DND_CLEAR: () => !0
})