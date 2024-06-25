let s, i, l;
n(47120);
var a, r, o, c, u = n(442837),
  d = n(570140);

function E() {
  i = {}, s = {}, l = new Set
}
E();
class h extends(a = u.ZP.Store) {
  getStatisticsForApplication(e) {
    return s[e]
  }
  shouldFetchStatisticsForApplication(e) {
    let t = i[e];
    return !l.has(e) && (null == t || Date.now() - t > 36e5)
  }
}
c = "ApplicationStatisticsStore", (o = "displayName") in(r = h) ? Object.defineProperty(r, o, {
  value: c,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[o] = c, t.Z = new h(d.Z, {
  APPLICATION_ACTIVITY_STATISTICS_FETCH_START: function(e) {
    let {
      applicationId: t
    } = e;
    l.add(t)
  },
  APPLICATION_ACTIVITY_STATISTICS_FETCH_FAIL: function(e) {
    let {
      applicationId: t
    } = e;
    l.delete(t)
  },
  APPLICATION_ACTIVITY_STATISTICS_FETCH_SUCCESS: function(e) {
    let {
      statistics: t,
      applicationId: n
    } = e;
    i[n] = Date.now(), l.delete(n), s[n] = t
  },
  LOGOUT: E
})