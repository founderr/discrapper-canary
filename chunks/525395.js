let i, r, a;
n(47120);
var l,
    s,
    o,
    c,
    d = n(442837),
    u = n(570140);
function h() {
    (r = {}), (i = {}), (a = new Set());
}
h();
class m extends (l = d.ZP.Store) {
    getStatisticsForApplication(e) {
        return i[e];
    }
    shouldFetchStatisticsForApplication(e) {
        let t = r[e];
        return !a.has(e) && (null == t || Date.now() - t > 3600000);
    }
}
(c = 'ApplicationStatisticsStore'),
    (o = 'displayName') in (s = m)
        ? Object.defineProperty(s, o, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = c),
    (t.Z = new m(u.Z, {
        APPLICATION_ACTIVITY_STATISTICS_FETCH_START: function (e) {
            let { applicationId: t } = e;
            a.add(t);
        },
        APPLICATION_ACTIVITY_STATISTICS_FETCH_FAIL: function (e) {
            let { applicationId: t } = e;
            a.delete(t);
        },
        APPLICATION_ACTIVITY_STATISTICS_FETCH_SUCCESS: function (e) {
            let { statistics: t, applicationId: n } = e;
            (r[n] = Date.now()), a.delete(n), (i[n] = t);
        },
        LOGOUT: h
    }));
