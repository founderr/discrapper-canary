"use strict";
let a, r, i;
s.r(t), s("47120");
var n, l, o, u, d = s("442837"),
  c = s("570140");

function _() {
  r = {}, a = {}, i = new Set
}
_();
class E extends(n = d.default.Store) {
  getStatisticsForApplication(e) {
    return a[e]
  }
  shouldFetchStatisticsForApplication(e) {
    let t = r[e];
    return !i.has(e) && (null == t || Date.now() - t > 36e5)
  }
}
u = "ApplicationStatisticsStore", (o = "displayName") in(l = E) ? Object.defineProperty(l, o, {
  value: u,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[o] = u, t.default = new E(c.default, {
  APPLICATION_ACTIVITY_STATISTICS_FETCH_START: function(e) {
    let {
      applicationId: t
    } = e;
    i.add(t)
  },
  APPLICATION_ACTIVITY_STATISTICS_FETCH_FAIL: function(e) {
    let {
      applicationId: t
    } = e;
    i.delete(t)
  },
  APPLICATION_ACTIVITY_STATISTICS_FETCH_SUCCESS: function(e) {
    let {
      statistics: t,
      applicationId: s
    } = e;
    r[s] = Date.now(), i.delete(s), a[s] = t
  },
  LOGOUT: _
})