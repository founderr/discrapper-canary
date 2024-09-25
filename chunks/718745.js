var r,
    i = n(442837),
    a = n(570140),
    o = n(981631);
function s(e, t, n) {
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
let l = {},
    u = {
        integration: '',
        query: ''
    };
function c(e) {
    var t;
    let { integration: n, query: r } = e;
    (l[n] = null !== (t = l[n]) && void 0 !== t ? t : {}),
        (l[n][r] = {
            loading: !0,
            results: []
        });
}
function d(e) {
    let { integration: t, query: n, results: r } = e;
    (l[t][n] = {
        loading: !1,
        results: r.map((e) => ({
            type: o.nkL[t].type,
            meta: e
        }))
    }),
        (u = {
            query: n,
            integration: t
        });
}
function _(e) {
    let { integration: t, query: n } = e;
    delete l[t][n];
}
class E extends (r = i.ZP.Store) {
    getResults(e, t) {
        if (null == e || null == t) return null;
        let n = l[e];
        return null != n && null != n[t] ? n[t] : null;
    }
    getQuery() {
        return u;
    }
}
s(E, 'displayName', 'IntegrationQueryStore'),
    (t.Z = new E(a.Z, {
        INTEGRATION_QUERY: c,
        INTEGRATION_QUERY_SUCCESS: d,
        INTEGRATION_QUERY_FAILURE: _
    }));
