n.d(t, {
    M: function () {
        return r;
    }
});
var r,
    i,
    a = n(31775),
    o = n.n(a),
    s = n(442837),
    l = n(570140);
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
let c = 20;
function d(e) {
    let { applicationId: t, guildId: n, page: r } = e;
    return 'applicationId:'.concat(t, ' guildId:').concat(n, ' page:').concat(r);
}
!(function (e) {
    (e[(e.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (e[(e.FETCHING = 1)] = 'FETCHING'), (e[(e.FETCHED = 2)] = 'FETCHED'), (e[(e.ERROR = 3)] = 'ERROR');
})(r || (r = {}));
let _ = new (o())({ max: c }),
    E = {};
function f(e) {
    let { applicationId: t, guildId: n, page: r } = e,
        i = d({
            applicationId: t,
            guildId: n,
            page: r
        });
    E = {
        ...E,
        [i]: 1
    };
}
function h(e) {
    let { applicationId: t, guildId: n, similarApplications: r, loadId: i, page: a, totalPages: o } = e,
        s = d({
            applicationId: t,
            guildId: n,
            page: a
        });
    _.set(s, {
        lastFetchTimeMs: Date.now(),
        applications: r,
        loadId: i,
        page: a,
        totalPages: o
    }),
        (E = {
            ...E,
            [s]: 2
        });
}
function p(e) {
    let { applicationId: t, guildId: n, page: r } = e,
        i = d({
            applicationId: t,
            guildId: n,
            page: r
        });
    E = {
        ...E,
        [i]: 3
    };
}
class m extends (i = s.ZP.Store) {
    getSimilarApplications(e) {
        let { applicationId: t, guildId: n, page: r } = e;
        if (null == t) return;
        let i = d({
            applicationId: t,
            guildId: n,
            page: r
        });
        return _.get(i);
    }
    getFetchState(e) {
        let { applicationId: t, guildId: n, page: r } = e;
        if (null != t)
            return E[
                d({
                    applicationId: t,
                    guildId: n,
                    page: r
                })
            ];
    }
}
u(m, 'displayName', 'ApplicationDirectorySimilarApplicationsStore'),
    (t.Z = new m(l.Z, {
        APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS: f,
        APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS: h,
        APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE: p
    }));
