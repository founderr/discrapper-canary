let n, r, i;
t(47120);
var a, l, o, c, u = t(442837),
  I = t(570140);

function T() {
  r = {}, n = {}, i = new Set
}
T();
class d extends(a = u.ZP.Store) {
  getStatisticsForApplication(e) {
    return n[e]
  }
  shouldFetchStatisticsForApplication(e) {
    let s = r[e];
    return !i.has(e) && (null == s || Date.now() - s > 36e5)
  }
}
c = "ApplicationStatisticsStore", (o = "displayName") in(l = d) ? Object.defineProperty(l, o, {
  value: c,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[o] = c, s.Z = new d(I.Z, {
  APPLICATION_ACTIVITY_STATISTICS_FETCH_START: function(e) {
    let {
      applicationId: s
    } = e;
    i.add(s)
  },
  APPLICATION_ACTIVITY_STATISTICS_FETCH_FAIL: function(e) {
    let {
      applicationId: s
    } = e;
    i.delete(s)
  },
  APPLICATION_ACTIVITY_STATISTICS_FETCH_SUCCESS: function(e) {
    let {
      statistics: s,
      applicationId: t
    } = e;
    r[t] = Date.now(), i.delete(t), n[t] = s
  },
  LOGOUT: T
})