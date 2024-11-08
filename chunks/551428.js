let r;
n(47120), n(411104);
var i,
    a,
    s,
    o,
    l = n(442837),
    u = n(570140),
    c = n(706454),
    d = n(156570),
    f = n(823379);
let _ = {},
    h = {},
    p = {},
    m = {},
    g = new Set();
function E(e) {
    let t = e.id,
        n = e.sku.id,
        r = _[t],
        i = d.Z.createFromServer(e);
    if (!(null != r && !r.isSlimDirectoryVersion() && i.isSlimDirectoryVersion())) !1 === e.published ? (null == p[n] && (p[n] = new Set()), p[n].add(t)) : (m[n] = t), (_[t] = i), g.delete(e.sku.id);
}
function v(e, t) {
    return ''.concat(e, ':').concat(t);
}
function I() {
    (_ = {}), (m = {}), (p = {}), (h = {}), (g = new Set());
}
function S() {
    if (r === c.default.locale) return !1;
    I(), (r = c.default.locale);
}
class b extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(c.default), this.syncWith([c.default], S), (r = c.default.locale);
    }
    get(e) {
        return _[e];
    }
    getForSKU(e, t) {
        let n = m[e];
        return null != t ? h[v(t, e)] : null != n ? _[n] : null;
    }
    getUnpublishedForSKU(e) {
        let t = p[e];
        return null == t
            ? []
            : Array.from(t)
                  .map((e) => _[e])
                  .filter(f.lm);
    }
    getForChannel(e, t) {
        return h[v(e, t)];
    }
    isFetchingForSKU(e) {
        return g.has(e);
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
(o = 'StoreListingStore'),
    (s = 'displayName') in (a = b)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.Z = new b(u.Z, {
        STORE_LISTINGS_FETCH_START: function (e) {
            let { skuId: t } = e;
            g.add(t);
        },
        STORE_LISTINGS_FETCH_FAIL: function (e) {
            let { skuId: t } = e;
            g.delete(t);
        },
        STORE_LISTINGS_FETCH_SUCCESS: function (e) {
            let { storeListings: t } = e;
            for (let e of t) E(e);
        },
        STORE_LISTING_FETCH_SUCCESS: function (e) {
            let { storeListing: t, channelId: n } = e;
            if (null != n) {
                let e = d.Z.createFromServer(t);
                (h[v(n, e.skuId)] = e), (m[e.skuId] = e.id);
            } else E(t);
        },
        USER_SETTINGS_PROTO_UPDATE: S,
        APPLICATION_STORE_CLEAR_DATA: I,
        GIFT_CODE_RESOLVE_SUCCESS: function (e) {
            let { giftCode: t } = e;
            if (null == t.store_listing) return !1;
            E(t.store_listing);
        }
    }));
