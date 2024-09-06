n(47120), n(653041), n(724458);
var i,
    a = n(512722),
    s = n.n(a),
    r = n(442837),
    l = n(570140),
    o = n(881052);
function c(e, t, n) {
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
let d = new Map(),
    u = new Map(),
    _ = null;
class h {
    handleSearchCountStart() {
        (this.error = null), (this.isFetching = !0);
    }
    handleSearchCountSuccess(e) {
        (this.counts = e), (this.isFetching = !1);
    }
    handleSearchCountFailure(e) {
        (this.error = new o.Hx(e)), (this.isFetching = !1);
    }
    constructor() {
        c(this, 'counts', null), c(this, 'isFetching', !1), c(this, 'error', null);
    }
}
function E(e) {
    var t;
    __DEV__ && s()(e.startsWith('search-counts'), 'Unexpected id format for global discovery search counts.');
    let n = null !== (t = u.get(e)) && void 0 !== t ? t : new h();
    return u.set(e, n), n;
}
function m(e, t) {
    let n = u.get(e);
    return null != n ? t(n) : null;
}
class I {
    handleSearchStart() {
        (this.error = null), (this.isFetching = !0), (this.lastFetchTimestamp = Date.now());
    }
    handleSearchFailure(e) {
        (this.isFetching = !1), (this.error = new o.Hx(e));
    }
    handleSearchSuccess(e) {
        let { total: t, guilds: n } = e;
        (this.error = null), (this.isFetching = !1), (this.isInitialFetchComplete = !0), (this.total = t);
        let i = [...this.guilds];
        n.forEach((e) => i.push(this.toDiscoverableGuild(e))), (this.guilds = i), (this.offset = i.length);
    }
    toDiscoverableGuild(e) {
        return {
            id: e.id,
            name: e.name,
            description: e.description,
            splash: e.splash,
            banner: e.banner,
            icon: e.icon,
            features: new Set(e.features),
            presenceCount: e.approximate_presence_count,
            memberCount: e.approximate_member_count,
            premiumSubscriptionCount: e.premium_subscription_count,
            preferredLocale: e.preferred_locale,
            discoverySplash: e.discovery_splash,
            emojis: e.emojis,
            emojiCount: e.emoji_count
        };
    }
    constructor() {
        c(this, 'guilds', []), c(this, 'error', null), c(this, 'offset', null), c(this, 'total', null), c(this, 'isFetching', !1), c(this, 'isInitialFetchComplete', !1), c(this, 'lastFetchTimestamp', null);
    }
}
function g(e) {
    var t;
    __DEV__ && s()(e.startsWith('search-results'), 'Unexpected id format for global discovery search state.');
    let n = null !== (t = d.get(e)) && void 0 !== t ? t : new I();
    return d.set(e, n), n;
}
function p(e, t) {
    let n = d.get(e);
    return null != n ? t(n) : null;
}
class T extends (i = r.ZP.Store) {
    getGuilds(e) {
        return p(e, (e) => e.guilds);
    }
    getIsFetching(e) {
        return p(e, (e) => e.isFetching);
    }
    getIsInitialFetchComplete(e) {
        return p(e, (e) => e.isInitialFetchComplete);
    }
    getOffset(e) {
        return p(e, (e) => e.offset);
    }
    getIsFetchingCounts(e) {
        return m(e, (e) => e.isFetching);
    }
    getCountsExist(e) {
        return m(e, (e) => null != e.counts && e.counts.length > 0);
    }
    getCounts(e) {
        return m(e, (e) => e.counts);
    }
    getAlgoliaSearchIndex() {
        return _;
    }
    getIsAlgoliaInitialized() {
        return null != _;
    }
}
c(T, 'displayName', 'GlobalDiscoveryServersSearchStore'),
    (t.Z = new T(l.Z, {
        CONNECTION_OPEN: function () {
            d.clear(), u.clear(), (_ = null);
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_INITIALIZED: function (e) {
            let { algoliaSearchIndex: t } = e;
            _ = t;
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_START: function (e) {
            let { id: t } = e;
            g(t).handleSearchStart();
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS: function (e) {
            let { id: t, total: n, guilds: i } = e;
            g(t).handleSearchSuccess({
                total: n,
                guilds: i
            });
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE: function (e) {
            let { id: t, error: n } = e;
            g(t).handleSearchFailure(n);
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_BULK_CLEAR: function (e) {
            let { ids: t } = e;
            return t.reduce((e, t) => !!d.delete(t) || e, !1);
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_START: function (e) {
            let { id: t } = e;
            E(t).handleSearchCountStart();
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function (e) {
            let { id: t, categoryCounts: n } = e;
            E(t).handleSearchCountSuccess(n);
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_FAILURE: function (e) {
            let { id: t, error: n } = e;
            E(t).handleSearchCountFailure(n);
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_CLEAR: function (e) {
            let { id: t } = e;
            return u.delete(t);
        }
    }));
