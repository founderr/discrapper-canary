t.d(n, {
    M: function () {
        return i;
    }
}),
    t(47120);
var i,
    r,
    l,
    o,
    u,
    a,
    s = t(442837),
    c = t(570140);
let d = new Map(),
    f = new Map();
((l = i || (i = {}))[(l.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (l[(l.FETCHING = 1)] = 'FETCHING'), (l[(l.FETCHED = 2)] = 'FETCHED');
class p extends (r = s.ZP.Store) {
    getPriceTiersFetchStateForGuildAndType(e, n) {
        var t, i;
        return null !== (i = null === (t = f.get(e)) || void 0 === t ? void 0 : t.get(n)) && void 0 !== i ? i : 0;
    }
    getPriceTiersForGuildAndType(e, n) {
        var t;
        return null === (t = d.get(e)) || void 0 === t ? void 0 : t.get(n);
    }
}
(a = 'CreatorMonetizationStore'),
    (u = 'displayName') in (o = p)
        ? Object.defineProperty(o, u, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[u] = a),
    (n.Z = new p(c.Z, {
        CONNECTION_OPEN: function () {
            d.clear(), f.clear();
        },
        CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (e) {
            let { guildId: n, priceTierType: t } = e;
            !f.has(n) && f.set(n, new Map()), f.get(n).set(t, 1);
        },
        CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (e) {
            let { guildId: n, priceTierType: t, priceTiers: i } = e;
            !f.has(n) && f.set(n, new Map()), f.get(n).set(t, 2), !d.has(n) && d.set(n, new Map()), d.get(n).set(t, i);
        },
        CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (e) {
            let { guildId: n, priceTierType: t } = e;
            !f.has(n) && f.set(n, new Map()), f.get(n).set(t, 2);
        }
    }));
