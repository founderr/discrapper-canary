var i,
    a = r(47120);
var s = r(653041);
var o = r(442837),
    l = r(570140),
    u = r(881052),
    c = r(128449);
function d(e, n, r) {
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
let f = new Map(),
    _ = new Map(),
    h = new Set(),
    p = null;
function m(e) {
    return [c.BP, e.query, c.t0, e.categoryId, c.KL, e.languageCode].join('-');
}
class g {
    handleSearchStart() {
        (this.error = null), (this.isFetching = !0);
    }
    handleSearchFailure(e) {
        (this.isFetching = !1), (this.isInitialFetchComplete = !0), (this.error = new u.Hx(e));
    }
    handleSearchSuccess(e) {
        let { total: n, guilds: r } = e;
        (this.error = null), (this.isFetching = !1), (this.isInitialFetchComplete = !0), (this.lastFetchTimestamp = Date.now()), null != n && (this.total = n);
        let i = [...this.guildIds];
        r.forEach((e) => i.push(e.id)), (this.guildIds = i), (this.offset = i.length);
    }
    constructor({ query: e }) {
        d(this, 'guildIds', []), d(this, 'error', null), d(this, 'offset', null), d(this, 'total', null), d(this, 'isFetching', !1), d(this, 'isInitialFetchComplete', !1), d(this, 'lastFetchTimestamp', null), d(this, 'query', void 0), (this.query = e);
    }
}
function E(e) {
    var n;
    let r = m(e),
        i = null !== (n = f.get(r)) && void 0 !== n ? n : new g({ query: e.query });
    return f.set(r, i), i;
}
function v(e, n) {
    let r = m(e),
        i = f.get(r);
    return null != i ? n(i) : null;
}
function I() {
    f.clear(), _.clear(), h.clear(), (p = null);
}
function T(e) {
    let { query: n, categoryId: r, languageCode: i, reset: a } = e,
        s = m({
            query: n,
            categoryId: r,
            languageCode: i
        });
    a && f.delete(s),
        E({
            query: n,
            categoryId: r,
            languageCode: i
        }).handleSearchStart();
}
function b(e) {
    let { query: n, categoryId: r, languageCode: i, total: a, guilds: s } = e;
    E({
        query: n,
        categoryId: r,
        languageCode: i
    }).handleSearchSuccess({
        total: a,
        guilds: s
    }),
        s.forEach((e) => {
            _.set(e.id, e);
        });
}
function y(e) {
    let { query: n, categoryId: r, languageCode: i, error: a } = e;
    E({
        query: n,
        categoryId: r,
        languageCode: i
    }).handleSearchFailure(a);
}
function S(e) {
    let { ignoreQueries: n } = e,
        r = new Set(n);
    f.forEach((e, n) => {
        if (null != e.query) !r.has(e.query) && f.delete(n);
    });
}
function A(e) {
    let { algoliaSearchIndex: n } = e;
    p = n;
}
function N(e) {
    let { query: n } = e;
    h.add(n);
}
class C extends (i = o.ZP.Store) {
    getGuild(e) {
        return _.get(e);
    }
    getGuildIds(e) {
        return v(e, (e) => e.guildIds);
    }
    getIsFetching(e) {
        return v(e, (e) => e.isFetching);
    }
    getIsInitialFetchComplete(e) {
        return v(e, (e) => e.isInitialFetchComplete);
    }
    getOffset(e) {
        return v(e, (e) => e.offset);
    }
    getTotal(e) {
        return v(e, (e) => e.total);
    }
    getLastFetchTimestamp(e) {
        return v(e, (e) => e.lastFetchTimestamp);
    }
    getError(e) {
        return v(e, (e) => e.error);
    }
    getErrorMessage(e) {
        return v(e, (e) => {
            var n;
            return null === (n = e.error) || void 0 === n ? void 0 : n.getAnyErrorMessage();
        });
    }
    getAlgoliaSearchIndex() {
        return p;
    }
    getIsAlgoliaInitialized() {
        return null != p;
    }
    getIsBlocked(e) {
        return h.has(e);
    }
}
d(C, 'displayName', 'GlobalDiscoveryServersSearchResultsStore'),
    (n.Z = new C(l.Z, {
        CONNECTION_OPEN: I,
        GLOBAL_DISCOVERY_SERVERS_SEARCH_INITIALIZED: A,
        GLOBAL_DISCOVERY_SERVERS_SEARCH_START: T,
        GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS: b,
        GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE: y,
        GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: S,
        GLOBAL_DISCOVERY_SERVERS_SEARCH_BLOCKED: N
    }));
