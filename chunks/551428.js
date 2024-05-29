"use strict";
let r;
n.r(t), n("47120"), n("411104");
var u, i, l, a, o = n("442837"),
  s = n("570140"),
  E = n("706454"),
  S = n("156570"),
  _ = n("823379");
let d = {},
  c = {},
  A = {},
  f = {};

function T(e) {
  let t = e.id,
    n = e.sku.id,
    r = d[t],
    u = S.default.createFromServer(e);
  !(null != r && !r.isSlimDirectoryVersion() && u.isSlimDirectoryVersion()) && (!1 === e.published ? (null == A[n] && (A[n] = new Set), A[n].add(t)) : f[n] = t, d[t] = u)
}

function I(e, t) {
  return "".concat(e, ":").concat(t)
}

function C() {
  d = {}, f = {}, A = {}, c = {}
}

function P() {
  if (r === E.default.locale) return !1;
  C(), r = E.default.locale
}
class R extends(u = o.default.Store) {
  initialize() {
    this.waitFor(E.default), this.syncWith([E.default], P), r = E.default.locale
  }
  get(e) {
    return d[e]
  }
  getForSKU(e, t) {
    let n = f[e];
    return null != t ? c[I(t, e)] : null != n ? d[n] : null
  }
  getUnpublishedForSKU(e) {
    let t = A[e];
    return null == t ? [] : Array.from(t).map(e => d[e]).filter(_.isNotNullish)
  }
  getForChannel(e, t) {
    return c[I(e, t)]
  }
  getStoreListing(e) {
    let {
      storeListingId: t,
      skuId: n,
      channelId: r,
      isTestMode: u
    } = e;
    if (u && null != n) {
      let e = this.getUnpublishedForSKU(n);
      if (null != e && e.length > 0) return e[0]
    }
    if (null != t) return this.get(t);
    if (null != r) {
      if (null == n) throw Error("getStoreListing with channel expects a skuId");
      return this.getForChannel(r, n)
    }
    if (null != n) return this.getForSKU(n);
    return null
  }
}
a = "StoreListingStore", (l = "displayName") in(i = R) ? Object.defineProperty(i, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[l] = a, t.default = new R(s.default, {
  STORE_LISTINGS_FETCH_SUCCESS: function(e) {
    let {
      storeListings: t
    } = e;
    for (let e of t) T(e)
  },
  STORE_LISTING_FETCH_SUCCESS: function(e) {
    let {
      storeListing: t,
      channelId: n
    } = e;
    if (null != n) {
      let e = S.default.createFromServer(t);
      c[I(n, e.skuId)] = e, f[e.skuId] = e.id
    } else T(t)
  },
  USER_SETTINGS_PROTO_UPDATE: P,
  APPLICATION_STORE_CLEAR_DATA: C,
  GIFT_CODE_RESOLVE_SUCCESS: function(e) {
    let {
      giftCode: t
    } = e;
    if (null == t.store_listing) return !1;
    T(t.store_listing)
  }
})