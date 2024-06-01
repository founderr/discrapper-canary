"use strict";
n.r(t), n.d(t, {
  FetchState: function() {
    return i
  }
}), n("47120");
var i, r, s, l, o, u, a = n("442837"),
  d = n("570140");
let c = new Map,
  f = new Map;
(s = i || (i = {}))[s.NOT_FETCHED = 0] = "NOT_FETCHED", s[s.FETCHING = 1] = "FETCHING", s[s.FETCHED = 2] = "FETCHED";
class S extends(r = a.default.Store) {
  getPriceTiersFetchStateForGuildAndType(e, t) {
    var n, i;
    return null !== (i = null === (n = f.get(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== i ? i : 0
  }
  getPriceTiersForGuildAndType(e, t) {
    var n;
    return null === (n = c.get(e)) || void 0 === n ? void 0 : n.get(t)
  }
}
u = "CreatorMonetizationStore", (o = "displayName") in(l = S) ? Object.defineProperty(l, o, {
  value: u,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[o] = u, t.default = new S(d.default, {
  CONNECTION_OPEN: function() {
    c.clear(), f.clear()
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function(e) {
    let {
      guildId: t,
      priceTierType: n
    } = e;
    !f.has(t) && f.set(t, new Map), f.get(t).set(n, 1)
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      priceTierType: n,
      priceTiers: i
    } = e;
    !f.has(t) && f.set(t, new Map), f.get(t).set(n, 2), !c.has(t) && c.set(t, new Map), c.get(t).set(n, i)
  },
  CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function(e) {
    let {
      guildId: t,
      priceTierType: n
    } = e;
    !f.has(t) && f.set(t, new Map), f.get(t).set(n, 2)
  }
})