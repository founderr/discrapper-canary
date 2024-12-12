let i;
var a,
    s = r(47120);
var o = r(411104);
var l = r(442837),
    u = r(570140),
    c = r(706454),
    d = r(156570),
    f = r(823379);
function _(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let h = {},
    p = {},
    m = {},
    g = {},
    E = new Set();
function v(e) {
    let n = e.id,
        r = e.sku.id,
        i = h[n],
        a = d.Z.createFromServer(e);
    if (!(null != i && !i.isSlimDirectoryVersion() && a.isSlimDirectoryVersion())) !1 === e.published ? (null == m[r] && (m[r] = new Set()), m[r].add(n)) : (g[r] = n), (h[n] = a), E.delete(e.sku.id);
}
function I(e, n) {
    return ''.concat(e, ':').concat(n);
}
function T(e) {
    let { storeListings: n } = e;
    for (let e of n) v(e);
}
function b(e) {
    let { storeListing: n, channelId: r } = e;
    if (null != r) {
        let e = d.Z.createFromServer(n);
        (p[I(r, e.skuId)] = e), (g[e.skuId] = e.id);
    } else v(n);
}
function y(e) {
    let { giftCode: n } = e;
    if (null == n.store_listing) return !1;
    v(n.store_listing);
}
function S(e) {
    let { skuId: n } = e;
    E.add(n);
}
function A(e) {
    let { skuId: n } = e;
    E.delete(n);
}
function N() {
    (h = {}), (g = {}), (m = {}), (p = {}), (E = new Set());
}
function C() {
    if (i === c.default.locale) return !1;
    N(), (i = c.default.locale);
}
class R extends (a = l.ZP.Store) {
    initialize() {
        this.waitFor(c.default), this.syncWith([c.default], C), (i = c.default.locale);
    }
    get(e) {
        return h[e];
    }
    getForSKU(e, n) {
        let r = g[e];
        return null != n ? p[I(n, e)] : null != r ? h[r] : null;
    }
    getUnpublishedForSKU(e) {
        let n = m[e];
        return null == n
            ? []
            : Array.from(n)
                  .map((e) => h[e])
                  .filter(f.lm);
    }
    getForChannel(e, n) {
        return p[I(e, n)];
    }
    isFetchingForSKU(e) {
        return E.has(e);
    }
    getStoreListing(e) {
        let { storeListingId: n, skuId: r, channelId: i, isTestMode: a } = e;
        if (a && null != r) {
            let e = this.getUnpublishedForSKU(r);
            if (null != e && e.length > 0) return e[0];
        }
        if (null != n) return this.get(n);
        if (null != i) {
            if (null == r) throw Error('getStoreListing with channel expects a skuId');
            return this.getForChannel(i, r);
        }
        if (null != r) return this.getForSKU(r);
        return null;
    }
}
_(R, 'displayName', 'StoreListingStore'),
    (n.Z = new R(u.Z, {
        STORE_LISTINGS_FETCH_START: S,
        STORE_LISTINGS_FETCH_FAIL: A,
        STORE_LISTINGS_FETCH_SUCCESS: T,
        STORE_LISTING_FETCH_SUCCESS: b,
        USER_SETTINGS_PROTO_UPDATE: C,
        APPLICATION_STORE_CLEAR_DATA: N,
        GIFT_CODE_RESOLVE_SUCCESS: y
    }));
