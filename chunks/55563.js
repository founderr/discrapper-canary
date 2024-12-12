let i;
var a,
    s = r(47120);
var o = r(442837),
    l = r(570140),
    u = r(706454),
    c = r(659181),
    d = r(77498);
function f(e, n, r) {
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
let _ = new Map(),
    h = new Set(),
    p = new Set(),
    m = new Map(),
    g = new Map(),
    E = new Map();
function v(e) {
    var n;
    m.set(e.id, c.Z.createFromServer(e)),
        h.delete(e.id),
        p.delete(e.id),
        null === (n = e.bundled_sku_ids) ||
            void 0 === n ||
            n.forEach((n) => {
                _.set(n, e.id);
            }),
        !g.has(e.application_id) && g.set(e.application_id, new Set()),
        g.get(e.application_id).add(e.id);
}
function I(e) {
    v(e);
}
function T(e) {
    let { skuId: n } = e;
    h.add(n);
}
function b(e) {
    let { skuId: n } = e;
    h.add(n);
}
function y(e) {
    let { skuId: n } = e;
    h.delete(n), p.add(n);
}
function S(e) {
    let { skuId: n } = e;
    h.delete(n), p.add(n);
}
function A(e) {
    let { giftCode: n } = e;
    if (null == n.store_listing) return !1;
    v(n.store_listing.sku);
}
function N(e) {
    let { sku: n } = e;
    I(n);
}
function C(e) {
    let { guildId: n, skus: r } = e;
    for (let e of r) I(e);
    null != n && E.set(n, new Set(r.map((e) => e.id)));
}
function R(e) {
    v(e.sku), null != e.child_skus && e.child_skus.forEach((e) => v(e)), null != e.alternative_skus && e.alternative_skus.forEach((e) => v(e));
}
function O(e) {
    let { storeListings: n } = e;
    for (let e of n) R(e);
}
function D(e) {
    let { storeListing: n } = e;
    R(n);
}
function L(e) {
    let { entitlements: n } = e;
    for (let e of n) null != e.sku && v(e.sku);
}
function x() {
    (_ = new Map()), (h = new Set()), (p = new Set()), (m = new Map()), (g = new Map()), (E = new Map());
}
function w() {
    if (i === u.default.locale) return !1;
    (i = u.default.locale), x();
}
class P extends (a = o.yh) {
    initialize() {
        this.waitFor(u.default, d.Z), this.syncWith([u.default], w), (i = u.default.locale);
    }
    get(e) {
        return m.get(e);
    }
    getForApplication(e) {
        let n = g.get(e);
        return null == n ? [] : Array.from(n).map((e) => m.get(e));
    }
    isFetching(e) {
        return h.has(e);
    }
    getSKUs() {
        return Object.fromEntries(m);
    }
    getParentSKU(e) {
        let n = _.get(e);
        if (null != n) return this.get(n);
    }
    didFetchingSkuFail(e) {
        return p.has(e);
    }
}
f(P, 'displayName', 'SKUStore'),
    (n.Z = new P(l.Z, {
        STORE_LISTINGS_FETCH_START: T,
        STORE_LISTINGS_FETCH_FAIL: y,
        STORE_LISTINGS_FETCH_SUCCESS: O,
        STORE_LISTING_FETCH_SUCCESS: D,
        GIFT_CODE_RESOLVE_SUCCESS: A,
        SKU_FETCH_START: b,
        SKU_FETCH_SUCCESS: N,
        SKU_FETCH_FAIL: S,
        SKUS_FETCH_SUCCESS: C,
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: L,
        APPLICATION_STORE_CLEAR_DATA: x,
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: L,
        ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: L
    }));
