let r;
var i,
    a = n(47120);
var o = n(442837),
    s = n(570140),
    l = n(706454),
    u = n(659181),
    c = n(77498);
function d(e, t, n) {
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
let _ = new Map(),
    E = new Set(),
    f = new Set(),
    h = new Map(),
    p = new Map(),
    m = new Map();
function I(e) {
    var t;
    h.set(e.id, u.Z.createFromServer(e)),
        E.delete(e.id),
        f.delete(e.id),
        null === (t = e.bundled_sku_ids) ||
            void 0 === t ||
            t.forEach((t) => {
                _.set(t, e.id);
            }),
        !p.has(e.application_id) && p.set(e.application_id, new Set()),
        p.get(e.application_id).add(e.id);
}
function T(e) {
    I(e);
}
function g(e) {
    let { skuId: t } = e;
    E.add(t);
}
function S(e) {
    let { skuId: t } = e;
    E.add(t);
}
function A(e) {
    let { skuId: t } = e;
    E.delete(t), f.add(t);
}
function v(e) {
    let { skuId: t } = e;
    E.delete(t), f.add(t);
}
function N(e) {
    let { giftCode: t } = e;
    if (null == t.store_listing) return !1;
    I(t.store_listing.sku);
}
function O(e) {
    let { sku: t } = e;
    T(t);
}
function R(e) {
    let { guildId: t, skus: n } = e;
    for (let e of n) T(e);
    null != t && m.set(t, new Set(n.map((e) => e.id)));
}
function C(e) {
    I(e.sku), null != e.child_skus && e.child_skus.forEach((e) => I(e)), null != e.alternative_skus && e.alternative_skus.forEach((e) => I(e));
}
function y(e) {
    let { storeListings: t } = e;
    for (let e of t) C(e);
}
function b(e) {
    let { storeListing: t } = e;
    C(t);
}
function L(e) {
    let { entitlements: t } = e;
    for (let e of t) null != e.sku && I(e.sku);
}
function D() {
    (_ = new Map()), (E = new Set()), (f = new Set()), (h = new Map()), (p = new Map()), (m = new Map());
}
function M() {
    if (r === l.default.locale) return !1;
    (r = l.default.locale), D();
}
class P extends (i = o.yh) {
    initialize() {
        this.waitFor(l.default, c.Z), this.syncWith([l.default], M), (r = l.default.locale);
    }
    get(e) {
        return h.get(e);
    }
    getForApplication(e) {
        let t = p.get(e);
        return null == t ? [] : Array.from(t).map((e) => h.get(e));
    }
    isFetching(e) {
        return E.has(e);
    }
    getSKUs() {
        return Object.fromEntries(h);
    }
    getParentSKU(e) {
        let t = _.get(e);
        if (null != t) return this.get(t);
    }
    didFetchingSkuFail(e) {
        return f.has(e);
    }
}
d(P, 'displayName', 'SKUStore'),
    (t.Z = new P(s.Z, {
        STORE_LISTINGS_FETCH_START: g,
        STORE_LISTINGS_FETCH_FAIL: A,
        STORE_LISTINGS_FETCH_SUCCESS: y,
        STORE_LISTING_FETCH_SUCCESS: b,
        GIFT_CODE_RESOLVE_SUCCESS: N,
        SKU_FETCH_START: S,
        SKU_FETCH_SUCCESS: O,
        SKU_FETCH_FAIL: v,
        SKUS_FETCH_SUCCESS: R,
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: L,
        APPLICATION_STORE_CLEAR_DATA: D,
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: L,
        ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: L
    }));
