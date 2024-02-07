"use strict";
let i;
n.r(e), n.d(e, {
  default: function() {
    return E
  }
}), n("222007"), n("70102");
var l = n("446674"),
  a = n("913144"),
  r = n("915639"),
  u = n("928460"),
  s = n("449008");
let o = {},
  c = {},
  d = {},
  f = {};

function p(t) {
  let e = t.id,
    n = t.sku.id,
    i = o[e],
    l = u.default.createFromServer(t);
  !(null != i && !i.isSlimDirectoryVersion() && l.isSlimDirectoryVersion()) && (!1 === t.published ? (null == d[n] && (d[n] = new Set), d[n].add(e)) : f[n] = e, o[e] = l)
}

function I(t, e) {
  return "".concat(t, ":").concat(e)
}

function S(t) {
  let {
    storeListings: e
  } = t;
  for (let t of e) p(t)
}

function T() {
  o = {}, f = {}, d = {}, c = {}
}

function h() {
  if (i === r.default.locale) return !1;
  T(), i = r.default.locale
}
class _ extends l.default.Store {
  initialize() {
    this.waitFor(r.default), this.syncWith([r.default], h), i = r.default.locale
  }
  get(t) {
    return o[t]
  }
  getForSKU(t, e) {
    let n = f[t];
    return null != e ? c[I(e, t)] : null != n ? o[n] : null
  }
  getUnpublishedForSKU(t) {
    let e = d[t];
    return null == e ? [] : Array.from(e).map(t => o[t]).filter(s.isNotNullish)
  }
  getForChannel(t, e) {
    return c[I(t, e)]
  }
  getStoreListing(t) {
    let {
      storeListingId: e,
      skuId: n,
      channelId: i,
      isTestMode: l
    } = t;
    if (l && null != n) {
      let t = this.getUnpublishedForSKU(n);
      if (null != t && t.length > 0) return t[0]
    }
    if (null != e) return this.get(e);
    if (null != i) {
      if (null == n) throw Error("getStoreListing with channel expects a skuId");
      return this.getForChannel(i, n)
    }
    if (null != n) return this.getForSKU(n);
    return null
  }
}
_.displayName = "StoreListingStore";
var E = new _(a.default, {
  STORE_LISTINGS_FETCH_SUCCESS: S,
  APPLICATION_STORE_DIRECTORY_FETCH_SUCCESS: S,
  STORE_LISTING_FETCH_SUCCESS: function(t) {
    let {
      storeListing: e,
      channelId: n
    } = t;
    if (null != n) {
      let t = u.default.createFromServer(e);
      c[I(n, t.skuId)] = t, f[t.skuId] = t.id
    } else p(e)
  },
  USER_SETTINGS_PROTO_UPDATE: h,
  APPLICATION_STORE_CLEAR_DATA: T,
  GIFT_CODE_RESOLVE_SUCCESS: function(t) {
    let {
      giftCode: e
    } = t;
    if (null == e.store_listing) return !1;
    p(e.store_listing)
  }
})