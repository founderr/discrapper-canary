var i,
    a,
    s,
    r,
    l = n(442837),
    o = n(570140),
    c = n(331114),
    d = n(356164);
let u = [];
class _ extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, d.Z);
    }
    getVisibleTabs() {
        return u;
    }
}
(s = 'GlobalDiscoveryServersSearchLayoutStore'),
    (a = 'displayName') in (i = _)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new _(o.Z, {
        CONNECTION_OPEN: function () {
            u = [];
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET: function () {
            u = [];
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function (e) {
            let { id: t } = e,
                n = c.Z.getCounts(t);
            if (null == n) return !1;
            u = n;
        }
    }));
