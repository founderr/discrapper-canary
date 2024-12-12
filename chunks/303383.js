r.d(n, {
    M: function () {
        return i;
    }
});
var i,
    a,
    s = r(31775),
    o = r.n(s),
    l = r(442837),
    u = r(570140);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let d = 20;
function f(e) {
    let { applicationId: n, guildId: r, page: i } = e;
    return 'applicationId:'.concat(n, ' guildId:').concat(r, ' page:').concat(i);
}
!(function (e) {
    (e[(e.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (e[(e.FETCHING = 1)] = 'FETCHING'), (e[(e.FETCHED = 2)] = 'FETCHED'), (e[(e.ERROR = 3)] = 'ERROR');
})(i || (i = {}));
let _ = new (o())({ max: d }),
    h = {};
function p(e) {
    let { applicationId: n, guildId: r, page: i } = e,
        a = f({
            applicationId: n,
            guildId: r,
            page: i
        });
    h = {
        ...h,
        [a]: 1
    };
}
function m(e) {
    let { applicationId: n, guildId: r, similarApplications: i, loadId: a, page: s, totalPages: o } = e,
        l = f({
            applicationId: n,
            guildId: r,
            page: s
        });
    _.set(l, {
        lastFetchTimeMs: Date.now(),
        applications: i,
        loadId: a,
        page: s,
        totalPages: o
    }),
        (h = {
            ...h,
            [l]: 2
        });
}
function g(e) {
    let { applicationId: n, guildId: r, page: i } = e,
        a = f({
            applicationId: n,
            guildId: r,
            page: i
        });
    h = {
        ...h,
        [a]: 3
    };
}
class E extends (a = l.ZP.Store) {
    getSimilarApplications(e) {
        let { applicationId: n, guildId: r, page: i } = e;
        if (null == n) return;
        let a = f({
            applicationId: n,
            guildId: r,
            page: i
        });
        return _.get(a);
    }
    getFetchState(e) {
        let { applicationId: n, guildId: r, page: i } = e;
        if (null != n)
            return h[
                f({
                    applicationId: n,
                    guildId: r,
                    page: i
                })
            ];
    }
}
c(E, 'displayName', 'ApplicationDirectorySimilarApplicationsStore'),
    (n.Z = new E(u.Z, {
        APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS: p,
        APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS: m,
        APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE: g
    }));
