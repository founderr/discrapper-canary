"use strict";
let a, i, r;
s.r(t), s.d(t, {
  default: function() {
    return d
  }
}), s("222007");
var n = s("446674"),
  l = s("913144");

function o() {
  i = {}, a = {}, r = new Set
}
o();
class u extends n.default.Store {
  getStatisticsForApplication(e) {
    return a[e]
  }
  shouldFetchStatisticsForApplication(e) {
    let t = i[e];
    return !r.has(e) && (null == t || Date.now() - t > 36e5)
  }
}
u.displayName = "ApplicationStatisticsStore";
var d = new u(l.default, {
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
    i[s] = Date.now(), r.delete(s), a[s] = t
  },
  LOGOUT: o
})