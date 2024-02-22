"use strict";
let a, i, n;
s.r(t), s.d(t, {
  default: function() {
    return d
  }
}), s("222007");
var r = s("446674"),
  l = s("913144");

function o() {
  i = {}, a = {}, n = new Set
}
o();
class u extends r.default.Store {
  getStatisticsForApplication(e) {
    return a[e]
  }
  shouldFetchStatisticsForApplication(e) {
    let t = i[e];
    return !n.has(e) && (null == t || Date.now() - t > 36e5)
  }
}
u.displayName = "ApplicationStatisticsStore";
var d = new u(l.default, {
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
    i[s] = Date.now(), n.delete(s), a[s] = t
  },
  LOGOUT: o
})