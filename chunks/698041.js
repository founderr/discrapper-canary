"use strict";
let i;
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007"), n("70102");
var l = n("446674"),
  a = n("913144"),
  r = n("915639"),
  s = n("928460"),
  u = n("449008");
let o = {},
  c = {},
  d = {},
  f = {};

function p(e) {
  let t = e.id,
    n = e.sku.id,
    i = o[t],
    l = s.default.createFromServer(e);
  !(null != i && !i.isSlimDirectoryVersion() && l.isSlimDirectoryVersion()) && (!1 === e.published ? (null == d[n] && (d[n] = new Set), d[n].add(t)) : f[n] = t, o[t] = l)
}

function I(e, t) {
  return "".concat(e, ":").concat(t)
}

function S(e) {
  let {
    storeListings: t
  } = e;
  for (let e of t) p(e)
}

function h() {
  o = {}, f = {}, d = {}, c = {}
}

function _() {
  if (i === r.default.locale) return !1;
  h(), i = r.default.locale
}
class T extends l.default.Store {
  initialize() {
    this.waitFor(r.default), this.syncWith([r.default], _), i = r.default.locale
  }
  get(e) {
    return o[e]
  }
  getForSKU(e, t) {
    let n = f[e];
    return null != t ? c[I(t, e)] : null != n ? o[n] : null
  }
  getUnpublishedForSKU(e) {
    let t = d[e];
    return null == t ? [] : Array.from(t).map(e => o[e]).filter(u.isNotNullish)
  }
  getForChannel(e, t) {
    return c[I(e, t)]
  }
  getStoreListing(e) {
    let {
      storeListingId: t,
      skuId: n,
      channelId: i,
      isTestMode: l
    } = e;
    if (l && null != n) {
      let e = this.getUnpublishedForSKU(n);
      if (null != e && e.length > 0) return e[0]
    }
    if (null != t) return this.get(t);
    if (null != i) {
      if (null == n) throw Error("getStoreListing with channel expects a skuId");
      return this.getForChannel(i, n)
    }
    if (null != n) return this.getForSKU(n);
    return null
  }
}
T.displayName = "StoreListingStore";
var C = new T(a.default, {
  STORE_LISTINGS_FETCH_SUCCESS: S,
  APPLICATION_STORE_DIRECTORY_FETCH_SUCCESS: S,
  STORE_LISTING_FETCH_SUCCESS: function(e) {
    let {
      storeListing: t,
      channelId: n
    } = e;
    if (null != n) {
      let e = s.default.createFromServer(t);
      c[I(n, e.skuId)] = e, f[e.skuId] = e.id
    } else p(t)
  },
  USER_SETTINGS_PROTO_UPDATE: _,
  APPLICATION_STORE_CLEAR_DATA: h,
  GIFT_CODE_RESOLVE_SUCCESS: function(e) {
    let {
      giftCode: t
    } = e;
    if (null == t.store_listing) return !1;
    p(t.store_listing)
  }
})