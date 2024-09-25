let r;
var i,
    a = n(47120);
var o = n(411104);
var s = n(442837),
    l = n(570140),
    u = n(706454),
    c = n(156570),
    d = n(823379);
function _(e, t, n) {
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
let E = {},
    f = {},
    h = {},
    p = {},
    m = new Set();
function I(e) {
    let t = e.id,
        n = e.sku.id,
        r = E[t],
        i = c.Z.createFromServer(e);
    if (!(null != r && !r.isSlimDirectoryVersion() && i.isSlimDirectoryVersion())) !1 === e.published ? (null == h[n] && (h[n] = new Set()), h[n].add(t)) : (p[n] = t), (E[t] = i), m.delete(e.sku.id);
}
function T(e, t) {
    return ''.concat(e, ':').concat(t);
}
function g(e) {
    let { storeListings: t } = e;
    for (let e of t) I(e);
}
function S(e) {
    let { storeListing: t, channelId: n } = e;
    if (null != n) {
        let e = c.Z.createFromServer(t);
        (f[T(n, e.skuId)] = e), (p[e.skuId] = e.id);
    } else I(t);
}
function A(e) {
    let { giftCode: t } = e;
    if (null == t.store_listing) return !1;
    I(t.store_listing);
}
function v(e) {
    let { skuId: t } = e;
    m.add(t);
}
function N(e) {
    let { skuId: t } = e;
    m.delete(t);
}
function O() {
    (E = {}), (p = {}), (h = {}), (f = {}), (m = new Set());
}
function R() {
    if (r === u.default.locale) return !1;
    O(), (r = u.default.locale);
}
class C extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(u.default), this.syncWith([u.default], R), (r = u.default.locale);
    }
    get(e) {
        return E[e];
    }
    getForSKU(e, t) {
        let n = p[e];
        return null != t ? f[T(t, e)] : null != n ? E[n] : null;
    }
    getUnpublishedForSKU(e) {
        let t = h[e];
        return null == t
            ? []
            : Array.from(t)
                  .map((e) => E[e])
                  .filter(d.lm);
    }
    getForChannel(e, t) {
        return f[T(e, t)];
    }
    isFetchingForSKU(e) {
        return m.has(e);
    }
    getStoreListing(e) {
        let { storeListingId: t, skuId: n, channelId: r, isTestMode: i } = e;
        if (i && null != n) {
            let e = this.getUnpublishedForSKU(n);
            if (null != e && e.length > 0) return e[0];
        }
        if (null != t) return this.get(t);
        if (null != r) {
            if (null == n) throw Error('getStoreListing with channel expects a skuId');
            return this.getForChannel(r, n);
        }
        if (null != n) return this.getForSKU(n);
        return null;
    }
}
_(C, 'displayName', 'StoreListingStore'),
    (t.Z = new C(l.Z, {
        STORE_LISTINGS_FETCH_START: v,
        STORE_LISTINGS_FETCH_FAIL: N,
        STORE_LISTINGS_FETCH_SUCCESS: g,
        STORE_LISTING_FETCH_SUCCESS: S,
        USER_SETTINGS_PROTO_UPDATE: R,
        APPLICATION_STORE_CLEAR_DATA: O,
        GIFT_CODE_RESOLVE_SUCCESS: A
    }));
