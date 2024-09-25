n.d(t, {
    M: function () {
        return r;
    }
});
var r,
    i,
    a = n(47120);
var o = n(442837),
    s = n(570140),
    l = n(973616);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
!(function (e) {
    (e[(e.FETCHING = 0)] = 'FETCHING'), (e[(e.FETCHED = 1)] = 'FETCHED'), (e[(e.ERROR = 2)] = 'ERROR');
})(r || (r = {}));
let c = {},
    d = {},
    _ = new Set(),
    E = {};
function f(e) {
    let { applicationId: t } = e;
    d = {
        ...d,
        [t]: 0
    };
}
function h(e) {
    let { application: t } = e;
    (c = {
        ...c,
        [t.id]: t
    }),
        (d = {
            ...d,
            [t.id]: 1
        });
    let n = Date.now();
    (E = {
        ...E,
        [t.id]: n
    }),
        _.has(t.id) && (_.delete(t.id), (_ = new Set(_)));
}
function p(e) {
    let { applicationId: t, isInvalidApplication: n } = e;
    (d = {
        ...d,
        [t]: 2
    }),
        n && (_.add(t), (_ = new Set(_)));
}
class m extends (i = o.ZP.Store) {
    getApplication(e) {
        if (null != e) return c[e];
    }
    getApplicationRecord(e) {
        if (null == e) return;
        let t = c[e];
        if (null != t) return l.Z.createFromServer(t);
    }
    getApplications() {
        return c;
    }
    getApplicationFetchState(e) {
        if (null != e) return d[e];
    }
    getApplicationFetchStates() {
        return d;
    }
    isInvalidApplication(e) {
        return null != e && _.has(e);
    }
    getInvalidApplicationIds() {
        return _;
    }
    isFetching(e) {
        return 0 === this.getApplicationFetchState(e);
    }
    getApplicationLastFetchTime(e) {
        if (null != e) return E[e];
    }
}
u(m, 'displayName', 'ApplicationDirectoryApplicationsStore'),
    (t.Z = new m(s.Z, {
        APPLICATION_DIRECTORY_FETCH_APPLICATION: f,
        APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS: h,
        APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE: p
    }));
