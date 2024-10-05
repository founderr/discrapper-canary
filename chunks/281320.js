n.d(t, {
    M: function () {
        return r;
    }
}),
    n(47120);
var r,
    i,
    o,
    u,
    l,
    s,
    a = n(442837),
    c = n(570140);
let d = new Map(),
    _ = new Map();
((o = r || (r = {}))[(o.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (o[(o.FETCHING = 1)] = 'FETCHING'), (o[(o.FETCHED = 2)] = 'FETCHED');
class E extends (i = a.ZP.Store) {
    getPriceTiersFetchStateForGuildAndType(e, t) {
        var n, r;
        return null !== (r = null === (n = _.get(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== r ? r : 0;
    }
    getPriceTiersForGuildAndType(e, t) {
        var n;
        return null === (n = d.get(e)) || void 0 === n ? void 0 : n.get(t);
    }
}
(s = 'CreatorMonetizationStore'),
    (l = 'displayName') in (u = E)
        ? Object.defineProperty(u, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[l] = s),
    (t.Z = new E(c.Z, {
        CONNECTION_OPEN: function () {
            d.clear(), _.clear();
        },
        CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function (e) {
            let { guildId: t, priceTierType: n } = e;
            !_.has(t) && _.set(t, new Map()), _.get(t).set(n, 1);
        },
        CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function (e) {
            let { guildId: t, priceTierType: n, priceTiers: r } = e;
            !_.has(t) && _.set(t, new Map()), _.get(t).set(n, 2), !d.has(t) && d.set(t, new Map()), d.get(t).set(n, r);
        },
        CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function (e) {
            let { guildId: t, priceTierType: n } = e;
            !_.has(t) && _.set(t, new Map()), _.get(t).set(n, 2);
        }
    }));
