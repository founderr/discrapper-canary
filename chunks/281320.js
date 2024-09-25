n.d(t, {
    M: function () {
        return r;
    }
});
var r,
    i,
    a = n(47120);
var o = n(442837),
    s = n(570140);
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
    c = new Map();
function d() {
    u.clear(), c.clear();
}
function _(e) {
    let { guildId: t, priceTierType: n } = e;
    !c.has(t) && c.set(t, new Map()), c.get(t).set(n, 1);
}
function E(e) {
    let { guildId: t, priceTierType: n, priceTiers: r } = e;
    !c.has(t) && c.set(t, new Map()), c.get(t).set(n, 2), !u.has(t) && u.set(t, new Map()), u.get(t).set(n, r);
}
function f(e) {
    let { guildId: t, priceTierType: n } = e;
    !c.has(t) && c.set(t, new Map()), c.get(t).set(n, 2);
}
!(function (e) {
    (e[(e.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (e[(e.FETCHING = 1)] = 'FETCHING'), (e[(e.FETCHED = 2)] = 'FETCHED');
})(r || (r = {}));
class h extends (i = o.ZP.Store) {
    getPriceTiersFetchStateForGuildAndType(e, t) {
        var n, r;
        return null !== (r = null === (n = c.get(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== r ? r : 0;
    }
    getPriceTiersForGuildAndType(e, t) {
        var n;
        return null === (n = u.get(e)) || void 0 === n ? void 0 : n.get(t);
    }
}
l(h, 'displayName', 'CreatorMonetizationStore'),
    (t.Z = new h(s.Z, {
        CONNECTION_OPEN: d,
        CREATOR_MONETIZATION_PRICE_TIERS_FETCH: _,
        CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: E,
        CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: f
    }));
