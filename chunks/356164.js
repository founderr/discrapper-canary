n(47120), n(653041);
var r,
    i = n(442837),
    a = n(570140),
    s = n(881052),
    o = n(128449);
function l(e, t, n) {
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
let u = new Map(),
    c = new Map(),
    d = new Set(),
    f = null;
function _(e) {
    return [o.BP, e.query, o.t0, e.categoryId, o.KL, e.languageCode].join('-');
}
class p {
    handleSearchStart() {
        (this.error = null), (this.isFetching = !0);
    }
    handleSearchFailure(e) {
        (this.isFetching = !1), (this.isInitialFetchComplete = !0), (this.error = new s.Hx(e));
    }
    handleSearchSuccess(e) {
        let { total: t, guilds: n } = e;
        (this.error = null), (this.isFetching = !1), (this.isInitialFetchComplete = !0), (this.lastFetchTimestamp = Date.now()), null != t && (this.total = t);
        let r = [...this.guildIds];
        n.forEach((e) => r.push(e.id)), (this.guildIds = r), (this.offset = r.length);
    }
    constructor({ query: e }) {
        l(this, 'guildIds', []), l(this, 'error', null), l(this, 'offset', null), l(this, 'total', null), l(this, 'isFetching', !1), l(this, 'isInitialFetchComplete', !1), l(this, 'lastFetchTimestamp', null), l(this, 'query', void 0), (this.query = e);
    }
}
function h(e) {
    var t;
    let n = _(e),
        r = null !== (t = u.get(n)) && void 0 !== t ? t : new p({ query: e.query });
    return u.set(n, r), r;
}
function m(e, t) {
    let n = _(e),
        r = u.get(n);
    return null != r ? t(r) : null;
}
class g extends (r = i.ZP.Store) {
    getGuild(e) {
        return c.get(e);
    }
    getGuildIds(e) {
        return m(e, (e) => e.guildIds);
    }
    getIsFetching(e) {
        return m(e, (e) => e.isFetching);
    }
    getIsInitialFetchComplete(e) {
        return m(e, (e) => e.isInitialFetchComplete);
    }
    getOffset(e) {
        return m(e, (e) => e.offset);
    }
    getTotal(e) {
        return m(e, (e) => e.total);
    }
    getLastFetchTimestamp(e) {
        return m(e, (e) => e.lastFetchTimestamp);
    }
    getError(e) {
        return m(e, (e) => e.error);
    }
    getErrorMessage(e) {
        return m(e, (e) => {
            var t;
            return null === (t = e.error) || void 0 === t ? void 0 : t.getAnyErrorMessage();
        });
    }
    getAlgoliaSearchIndex() {
        return f;
    }
    getIsAlgoliaInitialized() {
        return null != f;
    }
    getIsBlocked(e) {
        return d.has(e);
    }
}
l(g, 'displayName', 'GlobalDiscoveryServersSearchResultsStore'),
    (t.Z = new g(a.Z, {
        CONNECTION_OPEN: function () {
            u.clear(), c.clear(), d.clear(), (f = null);
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_INITIALIZED: function (e) {
            let { algoliaSearchIndex: t } = e;
            f = t;
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_START: function (e) {
            let { query: t, categoryId: n, languageCode: r, reset: i } = e,
                a = _({
                    query: t,
                    categoryId: n,
                    languageCode: r
                });
            i && u.delete(a),
                h({
                    query: t,
                    categoryId: n,
                    languageCode: r
                }).handleSearchStart();
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS: function (e) {
            let { query: t, categoryId: n, languageCode: r, total: i, guilds: a } = e;
            h({
                query: t,
                categoryId: n,
                languageCode: r
            }).handleSearchSuccess({
                total: i,
                guilds: a
            }),
                a.forEach((e) => {
                    c.set(e.id, e);
                });
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE: function (e) {
            let { query: t, categoryId: n, languageCode: r, error: i } = e;
            h({
                query: t,
                categoryId: n,
                languageCode: r
            }).handleSearchFailure(i);
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: function (e) {
            let { ignoreQueries: t } = e,
                n = new Set(t);
            u.forEach((e, t) => {
                if (null != e.query) !n.has(e.query) && u.delete(t);
            });
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_BLOCKED: function (e) {
            let { query: t } = e;
            d.add(t);
        }
    }));
