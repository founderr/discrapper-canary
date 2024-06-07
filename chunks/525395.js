"use strict";
let n, a, r;
s.r(t), s("47120");
var l, i, u, o, d = s("442837"),
  c = s("570140");

function I() {
  a = {}, n = {}, r = new Set
}
I();
class T extends(l = d.default.Store) {
  getStatisticsForApplication(e) {
    return n[e]
  }
  shouldFetchStatisticsForApplication(e) {
    let t = a[e];
    return !r.has(e) && (null == t || Date.now() - t > 36e5)
  }
}
o = "ApplicationStatisticsStore", (u = "displayName") in(i = T) ? Object.defineProperty(i, u, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[u] = o, t.default = new T(c.default, {
  APPLICATION_ACTIVITY_STATISTICS_FETCH_START: function(e) {
    let {
      applicationId: t
    } = e;
    r.add(t)
  },
  APPLICATION_ACTIVITY_STATISTICS_FETCH_FAIL: function(e) {
    let {
      applicationId: t
    } = e;
    r.delete(t)
  },
  APPLICATION_ACTIVITY_STATISTICS_FETCH_SUCCESS: function(e) {
    let {
      statistics: t,
      applicationId: s
    } = e;
    a[s] = Date.now(), r.delete(s), n[s] = t
  },
  LOGOUT: I
})