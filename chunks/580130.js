n(47120);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(570140),
    d = n(959546),
    _ = n(283595),
    E = n(780570),
    f = n(55563);
let h = {},
    p = {},
    I = {},
    m = {},
    T = !1,
    S = !1,
    g = new Set(),
    A = new Set(),
    N = {};
function O(e) {
    (h[e.id] = d.Z.createFromServer(e)), null == I[e.sku_id] && (I[e.sku_id] = new Set()), null == m[e.application_id] && (m[e.application_id] = new Set()), null != e.subscription_id && (null == N[e.subscription_id] && (N[e.subscription_id] = new Set()), N[e.subscription_id].add(e.id)), m[e.application_id].add(e.id), I[e.sku_id].add(e.id);
}
function R(e) {
    p[e.id] = d.Z.createFromServer(e);
}
function v(e) {
    return O(e.entitlement);
}
class C extends (r = u.yh) {
    initialize() {
        this.syncWith([_.Z], () => !0);
    }
    get(e) {
        return h[e];
    }
    getGiftable() {
        return l().values(p);
    }
    getForApplication(e) {
        let t = m[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(h[e]);
        return n;
    }
    getForSku(e) {
        let t = I[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(h[e]);
        return n;
    }
    get fetchingAllEntitlements() {
        return T;
    }
    get fetchedAllEntitlements() {
        return S;
    }
    get applicationIdsFetching() {
        return g;
    }
    get applicationIdsFetched() {
        return A;
    }
    isFetchingForApplication(e) {
        return this.fetchingAllEntitlements || (null != e && this.applicationIdsFetching.has(e));
    }
    isFetchedForApplication(e) {
        return this.fetchedAllEntitlements || (null != e && this.applicationIdsFetched.has(e));
    }
    getForSubscription(e) {
        let t = N[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(h[e]);
        return n;
    }
    isEntitledToSku(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            i = I[t];
        if (null != i)
            for (let t of i) {
                let n = h[t];
                if (null != n && n.isValid(e, f.Z, r)) return !0;
            }
        if (A.has(n)) return !1;
        let a = null != r ? _.Z.getLibraryApplication(n, r) : _.Z.getActiveLibraryApplication(n);
        return !!(null != a && a.sku.id === t && (0, E.Je)(a)) || null;
    }
    hasFetchedForApplicationIds(e) {
        return e.every((e) => A.has(e));
    }
}
(s = 'EntitlementStore'),
    (a = 'displayName') in (i = C)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new C(c.Z, {
        ENTITLEMENT_FETCH_APPLICATION_START: function (e) {
            let { applicationId: t } = e;
            g.add(t);
        },
        ENTITLEMENT_FETCH_APPLICATION_SUCCESS: function (e) {
            let { applicationId: t, entitlements: n } = e;
            for (let e of (g.delete(t), A.add(t), n)) !0 !== e.consumed && O(e);
        },
        ENTITLEMENT_FETCH_APPLICATION_FAIL: function () {},
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function (e) {
            let { entitlements: t } = e;
            (p = {}), t.forEach(R);
        },
        SKU_PURCHASE_SUCCESS: function (e) {
            let { entitlements: t } = e;
            for (let e of t) O(e);
        },
        LIBRARY_FETCH_SUCCESS: function (e) {
            let { libraryApplications: t } = e;
            for (let e of t) if (null != e.entitlements) for (let t of e.entitlements) O(t);
        },
        ENTITLEMENT_CREATE: v,
        ENTITLEMENT_UPDATE: v,
        ENTITLEMENT_DELETE: function (e) {
            return (function (e) {
                delete h[e.id];
                let t = m[e.application_id];
                null != t && t.delete(e.id);
                let n = I[e.sku_id];
                if ((null != n && n.delete(e.id), null != e.subscription_id)) {
                    let t = N[e.subscription_id];
                    null != t && t.delete(e.id);
                }
            })(e.entitlement);
        },
        LOGOUT: function () {
            (h = {}), (I = {}), (m = {}), (T = !1), (S = !1), (g = new Set()), (A = new Set());
        },
        ENTITLEMENTS_FETCH_FOR_USER_START: function () {
            T = !0;
        },
        ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: function (e) {
            let { entitlements: t } = e;
            for (let e of ((S = !0), (T = !1), t)) O(e);
        },
        ENTITLEMENTS_FETCH_FOR_USER_FAIL: function () {
            (S = !1), (T = !1);
        }
    }));
