n.d(t, {
    M: function () {
        return o;
    }
});
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(31775),
    c = n.n(u),
    d = n(442837),
    f = n(570140);
function _(e) {
    let { applicationId: t, guildId: n, page: r } = e;
    return 'applicationId:'.concat(t, ' guildId:').concat(n, ' page:').concat(r);
}
((r = o || (o = {}))[(r.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (r[(r.FETCHING = 1)] = 'FETCHING'), (r[(r.FETCHED = 2)] = 'FETCHED'), (r[(r.ERROR = 3)] = 'ERROR');
let h = new (c())({ max: 20 }),
    p = {};
class m extends (l = d.ZP.Store) {
    getSimilarApplications(e) {
        let { applicationId: t, guildId: n, page: r } = e;
        if (null == t) return;
        let i = _({
            applicationId: t,
            guildId: n,
            page: r
        });
        return h.get(i);
    }
    getFetchState(e) {
        let { applicationId: t, guildId: n, page: r } = e;
        if (null != t)
            return p[
                _({
                    applicationId: t,
                    guildId: n,
                    page: r
                })
            ];
    }
}
(s = 'ApplicationDirectorySimilarApplicationsStore'),
    (a = 'displayName') in (i = m)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new m(f.Z, {
        APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS: function (e) {
            let { applicationId: t, guildId: n, page: r } = e,
                i = _({
                    applicationId: t,
                    guildId: n,
                    page: r
                });
            p = {
                ...p,
                [i]: 1
            };
        },
        APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS: function (e) {
            let { applicationId: t, guildId: n, similarApplications: r, loadId: i, page: a, totalPages: s } = e,
                o = _({
                    applicationId: t,
                    guildId: n,
                    page: a
                });
            h.set(o, {
                lastFetchTimeMs: Date.now(),
                applications: r,
                loadId: i,
                page: a,
                totalPages: s
            }),
                (p = {
                    ...p,
                    [o]: 2
                });
        },
        APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE: function (e) {
            let { applicationId: t, guildId: n, page: r } = e,
                i = _({
                    applicationId: t,
                    guildId: n,
                    page: r
                });
            p = {
                ...p,
                [i]: 3
            };
        }
    }));
