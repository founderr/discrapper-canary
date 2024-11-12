n.d(t, {
    M: function () {
        return r;
    }
}),
    n(47120);
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(442837),
    c = n(570140),
    d = n(973616);
((a = r || (r = {}))[(a.FETCHING = 0)] = 'FETCHING'), (a[(a.FETCHED = 1)] = 'FETCHED'), (a[(a.ERROR = 2)] = 'ERROR');
let f = {},
    _ = {},
    p = new Set(),
    h = {};
class m extends (i = u.ZP.Store) {
    getApplication(e) {
        if (null != e) return f[e];
    }
    getApplicationRecord(e) {
        if (null == e) return;
        let t = f[e];
        if (null != t) return d.Z.createFromServer(t);
    }
    getApplications() {
        return f;
    }
    getApplicationFetchState(e) {
        if (null != e) return _[e];
    }
    getApplicationFetchStates() {
        return _;
    }
    isInvalidApplication(e) {
        return null != e && p.has(e);
    }
    getInvalidApplicationIds() {
        return p;
    }
    isFetching(e) {
        return 0 === this.getApplicationFetchState(e);
    }
    getApplicationLastFetchTime(e) {
        if (null != e) return h[e];
    }
}
(l = 'ApplicationDirectoryApplicationsStore'),
    (o = 'displayName') in (s = m)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l),
    (t.Z = new m(c.Z, {
        APPLICATION_DIRECTORY_FETCH_APPLICATION: function (e) {
            let { applicationId: t } = e;
            _ = {
                ..._,
                [t]: 0
            };
        },
        APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS: function (e) {
            let { application: t } = e;
            (f = {
                ...f,
                [t.id]: t
            }),
                (_ = {
                    ..._,
                    [t.id]: 1
                });
            let n = Date.now();
            (h = {
                ...h,
                [t.id]: n
            }),
                p.has(t.id) && (p.delete(t.id), (p = new Set(p)));
        },
        APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE: function (e) {
            let { applicationId: t, isInvalidApplication: n } = e;
            (_ = {
                ..._,
                [t]: 2
            }),
                n && (p.add(t), (p = new Set(p)));
        }
    }));
