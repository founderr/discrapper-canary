let r;
n(47120);
var i,
    a,
    s,
    o,
    l = n(442837),
    u = n(570140),
    c = n(706454),
    d = n(659181),
    f = n(77498);
let _ = new Map(),
    p = new Set(),
    h = new Set(),
    m = new Map(),
    g = new Map(),
    E = new Map();
function v(e) {
    var t;
    m.set(e.id, d.Z.createFromServer(e)),
        p.delete(e.id),
        h.delete(e.id),
        null === (t = e.bundled_sku_ids) ||
            void 0 === t ||
            t.forEach((t) => {
                _.set(t, e.id);
            }),
        !g.has(e.application_id) && g.set(e.application_id, new Set()),
        g.get(e.application_id).add(e.id);
}
function I(e) {
    v(e);
}
function b(e) {
    v(e.sku), null != e.child_skus && e.child_skus.forEach((e) => v(e)), null != e.alternative_skus && e.alternative_skus.forEach((e) => v(e));
}
function S(e) {
    let { entitlements: t } = e;
    for (let e of t) null != e.sku && v(e.sku);
}
function T() {
    (_ = new Map()), (p = new Set()), (h = new Set()), (m = new Map()), (g = new Map()), (E = new Map());
}
function y() {
    if (r === c.default.locale) return !1;
    (r = c.default.locale), T();
}
class A extends (i = l.yh) {
    initialize() {
        this.waitFor(c.default, f.Z), this.syncWith([c.default], y), (r = c.default.locale);
    }
    get(e) {
        return m.get(e);
    }
    getForApplication(e) {
        let t = g.get(e);
        return null == t ? [] : Array.from(t).map((e) => m.get(e));
    }
    isFetching(e) {
        return p.has(e);
    }
    getSKUs() {
        return Object.fromEntries(m);
    }
    getParentSKU(e) {
        let t = _.get(e);
        if (null != t) return this.get(t);
    }
    didFetchingSkuFail(e) {
        return h.has(e);
    }
}
(o = 'SKUStore'),
    (s = 'displayName') in (a = A)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.Z = new A(u.Z, {
        STORE_LISTINGS_FETCH_START: function (e) {
            let { skuId: t } = e;
            p.add(t);
        },
        STORE_LISTINGS_FETCH_FAIL: function (e) {
            let { skuId: t } = e;
            p.delete(t), h.add(t);
        },
        STORE_LISTINGS_FETCH_SUCCESS: function (e) {
            let { storeListings: t } = e;
            for (let e of t) b(e);
        },
        STORE_LISTING_FETCH_SUCCESS: function (e) {
            let { storeListing: t } = e;
            b(t);
        },
        GIFT_CODE_RESOLVE_SUCCESS: function (e) {
            let { giftCode: t } = e;
            if (null == t.store_listing) return !1;
            v(t.store_listing.sku);
        },
        SKU_FETCH_START: function (e) {
            let { skuId: t } = e;
            p.add(t);
        },
        SKU_FETCH_SUCCESS: function (e) {
            let { sku: t } = e;
            v(t);
        },
        SKU_FETCH_FAIL: function (e) {
            let { skuId: t } = e;
            p.delete(t), h.add(t);
        },
        SKUS_FETCH_SUCCESS: function (e) {
            let { guildId: t, skus: n } = e;
            for (let e of n) v(e);
            null != t && E.set(t, new Set(n.map((e) => e.id)));
        },
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: S,
        APPLICATION_STORE_CLEAR_DATA: T,
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: S,
        ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: S
    }));
