n.d(t, {
    M: function () {
        return i;
    }
}),
    n(47120);
var i,
    r,
    o,
    l,
    u,
    a,
    s = n(442837),
    c = n(570140);
let d = new Map(),
    f = new Map();
((o = i || (i = {}))[(o.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (o[(o.FETCHING = 1)] = 'FETCHING'), (o[(o.FETCHED = 2)] = 'FETCHED');
class _ extends (r = s.ZP.Store) {
    getPriceTiersFetchStateForGuildAndType(e, t) {
        var n, i;
        return null !== (i = null === (n = f.get(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== i ? i : 0;
    }
    getPriceTiersForGuildAndType(e, t) {
        var n;
        return null === (n = d.get(e)) || void 0 === n ? void 0 : n.get(t);
    }
}
(a = 'CreatorMonetizationStore'),
    (u = 'displayName') in (l = _)
        ? Object.defineProperty(l, u, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[u] = a),
    (t.Z = new _(c.Z, {
        CONNECTION_OPEN: function () {
            d.clear(), f.clear();
        },
        CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (e) {
            let { guildId: t, priceTierType: n } = e;
            !f.has(t) && f.set(t, new Map()), f.get(t).set(n, 1);
        },
        CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (e) {
            let { guildId: t, priceTierType: n, priceTiers: i } = e;
            !f.has(t) && f.set(t, new Map()), f.get(t).set(n, 2), !d.has(t) && d.set(t, new Map()), d.get(t).set(n, i);
        },
        CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (e) {
            let { guildId: t, priceTierType: n } = e;
            !f.has(t) && f.set(t, new Map()), f.get(t).set(n, 2);
        }
    }));
