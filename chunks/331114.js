n(47120);
var r,
    i = n(442837),
    a = n(570140),
    s = n(881052);
function o(e, t, n) {
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
let l = new Map();
class u {
    handleSearchCountStart() {
        (this.error = null), (this.isFetching = !0);
    }
    handleSearchCountSuccess(e) {
        (this.counts = e), (this.isFetching = !1), (this.isInitialFetchComplete = !0);
    }
    handleSearchCountFailure(e) {
        (this.error = new s.Hx(e)), (this.isFetching = !1);
    }
    constructor() {
        o(this, 'isInitialFetchComplete', !1), o(this, 'isFetching', !1), o(this, 'error', null), o(this, 'counts', null);
    }
}
function c(e) {
    var t;
    let n = null !== (t = l.get(e)) && void 0 !== t ? t : new u();
    return l.set(e, n), n;
}
function d(e, t) {
    let n = l.get(e);
    return null != n ? t(n) : null;
}
class f extends (r = i.ZP.Store) {
    getIsInitialFetchComplete(e) {
        return d(e, (e) => e.isInitialFetchComplete);
    }
    getIsFetchingCounts(e) {
        return d(e, (e) => e.isFetching);
    }
    getCounts(e) {
        return d(e, (e) => e.counts);
    }
}
o(f, 'displayName', 'GlobalDiscoveryServersSearchCountStore'),
    (t.Z = new f(a.Z, {
        CONNECTION_OPEN: function () {
            l.clear();
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_START: function (e) {
            let { query: t } = e;
            c(t).handleSearchCountStart();
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function (e) {
            let { query: t, categoryCounts: n } = e;
            c(t).handleSearchCountSuccess(n);
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_FAILURE: function (e) {
            let { query: t, error: n } = e;
            c(t).handleSearchCountFailure(n);
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: function (e) {
            let { ignoreQueries: t } = e,
                n = new Set(t);
            l.forEach((e, t) => {
                !n.has(t) && l.delete(t);
            });
        }
    }));
