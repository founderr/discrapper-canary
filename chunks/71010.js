"use strict";
let a, r, n;
s.r(t), s.d(t, {
  default: function() {
    return d
  }
}), s("222007");
var l = s("446674"),
  i = s("913144");

function u() {
  r = {}, a = {}, n = new Set
}
u();
class o extends l.default.Store {
  getStatisticsForApplication(e) {
    return a[e]
  }
  shouldFetchStatisticsForApplication(e) {
    let t = r[e];
    return !n.has(e) && (null == t || Date.now() - t > 36e5)
  }
}
o.displayName = "ApplicationStatisticsStore";
var d = new o(i.default, {
  APPLICATION_ACTIVITY_STATISTICS_FETCH_START: function(e) {
    let {
      applicationId: t
    } = e;
    n.add(t)
  },
  APPLICATION_ACTIVITY_STATISTICS_FETCH_FAIL: function(e) {
    let {
      applicationId: t
    } = e;
    n.delete(t)
  },
  APPLICATION_ACTIVITY_STATISTICS_FETCH_SUCCESS: function(e) {
    let {
      statistics: t,
      applicationId: s
    } = e;
    r[s] = Date.now(), n.delete(s), a[s] = t
  },
  LOGOUT: u
})