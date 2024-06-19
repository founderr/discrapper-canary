var l, i = n(442837),
  s = n(570140);

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let a = {};
class o extends(l = i.ZP.PersistedStore) {
  initialize(e) {
    null != e && Object.keys(e).forEach(t => {
      "number" == typeof e[t] && (a[t] = e[t])
    })
  }
  getState() {
    return a
  }
  hasViewed(e) {
    return null != a[e]
  }
}
r(o, "displayName", "ViewHistoryStore"), r(o, "persistKey", "ViewHistoryStore"), t.Z = new o(s.Z, {
  VIEW_HISTORY_MARK_VIEW: function(e) {
    let {
      key: t
    } = e;
    a[t] = Date.now()
  }
})