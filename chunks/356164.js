n(47120), n(653041);
var r,
    i = n(442837),
    a = n(570140),
    s = n(881052),
    o = n(726115),
    l = n(128449);
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
let c = new Map(),
    d = new Map(),
    f = new Set(),
    _ = null;
function p(e) {
    return [l.BP, e.query, l.t0, e.categoryId, l.KL, e.languageCode].join('-');
}
class h {
    handleSearchStart() {
        (this.error = null), (this.isFetching = !0);
    }
    handleSearchFailure(e) {
        (this.isFetching = !1), (this.isInitialFetchComplete = !0), (this.error = new s.Hx(e));
    }
    handleSearchSuccess(e) {
        let { total: t, guilds: n } = e;
        (this.error = null), (this.isFetching = !1), (this.isInitialFetchComplete = !0), (this.lastFetchTimestamp = Date.now()), (this.total = t);
        let r = [...this.guildIds];
        n.forEach((e) => r.push(e.id)), (this.guildIds = r), (this.offset = r.length);
    }
    constructor({ query: e }) {
        u(this, 'guildIds', []), u(this, 'error', null), u(this, 'offset', null), u(this, 'total', null), u(this, 'isFetching', !1), u(this, 'isInitialFetchComplete', !1), u(this, 'lastFetchTimestamp', null), u(this, 'query', void 0), (this.query = e);
    }
}
function m(e) {
    var t;
    let n = p(e),
        r = null !== (t = c.get(n)) && void 0 !== t ? t : new h({ query: e.query });
    return c.set(n, r), r;
}
function g(e, t) {
    let n = p(e),
        r = c.get(n);
    return null != r ? t(r) : null;
}
class E extends (r = i.ZP.Store) {
    getGuild(e) {
        return d.get(e);
    }
    getGuildIds(e) {
        return g(e, (e) => e.guildIds);
    }
    getIsFetching(e) {
        return g(e, (e) => e.isFetching);
    }
    getIsInitialFetchComplete(e) {
        return g(e, (e) => e.isInitialFetchComplete);
    }
    getOffset(e) {
        return g(e, (e) => e.offset);
    }
    getTotal(e) {
        return g(e, (e) => e.total);
    }
    getLastFetchTimestamp(e) {
        return g(e, (e) => e.lastFetchTimestamp);
    }
    getError(e) {
        return g(e, (e) => e.error);
    }
    getErrorMessage(e) {
        return g(e, (e) => {
            var t;
            return null === (t = e.error) || void 0 === t ? void 0 : t.getAnyErrorMessage();
        });
    }
    getAlgoliaSearchIndex() {
        return _;
    }
    getIsAlgoliaInitialized() {
        return null != _;
    }
    getIsBlocked(e) {
        return f.has(e);
    }
}
u(E, 'displayName', 'GlobalDiscoveryServersSearchResultsStore'),
    (t.Z = new E(a.Z, {
        CONNECTION_OPEN: function () {
            c.clear(), d.clear(), f.clear(), (_ = null);
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_INITIALIZED: function (e) {
            let { algoliaSearchIndex: t } = e;
            _ = t;
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_START: function (e) {
            let { query: t, categoryId: n, languageCode: r, reset: i } = e,
                a = p({
                    query: t,
                    categoryId: n,
                    languageCode: r
                });
            i && c.delete(a),
                m({
                    query: t,
                    categoryId: n,
                    languageCode: r
                }).handleSearchStart();
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS: function (e) {
            let { query: t, categoryId: n, languageCode: r, total: i, guilds: a } = e;
            m({
                query: t,
                categoryId: n,
                languageCode: r
            }).handleSearchSuccess({
                total: i,
                guilds: a
            }),
                a.forEach((e) => {
                    d.set(e.id, (0, o.U0)(e));
                });
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE: function (e) {
            let { query: t, categoryId: n, languageCode: r, error: i } = e;
            m({
                query: t,
                categoryId: n,
                languageCode: r
            }).handleSearchFailure(i);
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: function (e) {
            let { ignoreQueries: t } = e,
                n = new Set(t);
            c.forEach((e, t) => {
                if (null != e.query) !n.has(e.query) && c.delete(t);
            });
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_BLOCKED: function (e) {
            let { query: t } = e;
            f.add(t);
        }
    }));
