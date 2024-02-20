"use strict";
let i;
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007");
var r = n("446674"),
  s = n("913144"),
  a = n("915639"),
  o = n("137406"),
  l = n("546463");
let u = new Set,
  c = new Set,
  d = new Map,
  p = new Map,
  h = new Map;

function f(e) {
  d.set(e.id, o.default.createFromServer(e)), !p.has(e.application_id) && p.set(e.application_id, new Set);
  let t = p.get(e.application_id);
  t.add(e.id)
}

function E(e) {
  u.delete(e.id), c.delete(e.id), f(e)
}

function _(e) {
  f(e.sku), null != e.child_skus && e.child_skus.forEach(e => f(e)), null != e.alternative_skus && e.alternative_skus.forEach(e => f(e))
}

function m(e) {
  let {
    storeListings: t
  } = e;
  for (let e of t) _(e)
}

function S(e) {
  let {
    entitlements: t
  } = e;
  for (let e of t) null != e.sku && f(e.sku)
}

function g() {
  u = new Set, c = new Set, d = new Map, p = new Map, h = new Map
}

function T() {
  if (i === a.default.locale) return !1;
  i = a.default.locale, g()
}
class I extends r.Store {
  initialize() {
    this.waitFor(a.default, l.default), this.syncWith([a.default], T), i = a.default.locale
  }
  get(e) {
    return d.get(e)
  }
  getForApplication(e) {
    let t = p.get(e);
    return null == t ? [] : Array.from(t).map(e => d.get(e))
  }
  isFetching(e) {
    return u.has(e)
  }
  getSKUs() {
    return Object.fromEntries(d)
  }
  didFetchingSkuFail(e) {
    return c.has(e)
  }
}
I.displayName = "SKUStore";
var v = new I(s.default, {
  STORE_LISTINGS_FETCH_SUCCESS: m,
  APPLICATION_STORE_DIRECTORY_FETCH_SUCCESS: m,
  STORE_LISTING_FETCH_SUCCESS: function(e) {
    let {
      storeListing: t
    } = e;
    _(t)
  },
  GIFT_CODE_RESOLVE_SUCCESS: function(e) {
    let {
      giftCode: t
    } = e;
    if (null == t.store_listing) return !1;
    f(t.store_listing.sku)
  },
  SKU_FETCH_START: function(e) {
    let {
      skuId: t
    } = e;
    u.add(t)
  },
  SKU_FETCH_SUCCESS: function(e) {
    let {
      sku: t
    } = e;
    E(t)
  },
  SKU_FETCH_FAIL: function(e) {
    let {
      skuId: t
    } = e;
    u.delete(t), c.add(t)
  },
  SKUS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      skus: n
    } = e;
    for (let e of n) E(e);
    null != t && h.set(t, new Set(n.map(e => e.id)))
  },
  ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: S,
  APPLICATION_STORE_CLEAR_DATA: g,
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: S,
  ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: S
})