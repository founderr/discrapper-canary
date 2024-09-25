var r,
    i = n(47120);
var a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(570140),
    u = n(959546),
    c = n(283595),
    d = n(780570),
    _ = n(55563);
function E(e, t, n) {
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
let f = {},
    h = {},
    p = {},
    m = {},
    I = !1,
    T = !1,
    g = new Set(),
    S = new Set(),
    A = {};
function v() {
    (f = {}), (p = {}), (m = {}), (I = !1), (T = !1), (g = new Set()), (S = new Set());
}
function N(e) {
    (f[e.id] = u.Z.createFromServer(e)), null == p[e.sku_id] && (p[e.sku_id] = new Set()), null == m[e.application_id] && (m[e.application_id] = new Set()), null != e.subscription_id && (null == A[e.subscription_id] && (A[e.subscription_id] = new Set()), A[e.subscription_id].add(e.id)), m[e.application_id].add(e.id), p[e.sku_id].add(e.id);
}
function O(e) {
    h[e.id] = u.Z.createFromServer(e);
}
function R(e) {
    delete f[e.id];
    let t = m[e.application_id];
    null != t && t.delete(e.id);
    let n = p[e.sku_id];
    if ((null != n && n.delete(e.id), null != e.subscription_id)) {
        let t = A[e.subscription_id];
        null != t && t.delete(e.id);
    }
}
function C(e) {
    let { applicationId: t } = e;
    g.add(t);
}
function y(e) {
    let { applicationId: t, entitlements: n } = e;
    for (let e of (g.delete(t), S.add(t), n)) !0 !== e.consumed && N(e);
}
function b(e) {
    let { entitlements: t } = e;
    (h = {}), t.forEach(O);
}
function L() {}
function D() {
    I = !0;
}
function M(e) {
    let { entitlements: t } = e;
    for (let e of ((T = !0), (I = !1), t)) N(e);
}
function P() {
    (T = !1), (I = !1);
}
function U(e) {
    let { entitlements: t } = e;
    for (let e of t) N(e);
}
function w(e) {
    let { libraryApplications: t } = e;
    for (let e of t) if (null != e.entitlements) for (let t of e.entitlements) N(t);
}
function x(e) {
    return N(e.entitlement);
}
function G(e) {
    return R(e.entitlement);
}
class k extends (r = s.yh) {
    initialize() {
        this.syncWith([c.Z], () => !0);
    }
    get(e) {
        return f[e];
    }
    getGiftable() {
        return o().values(h);
    }
    getForApplication(e) {
        let t = m[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(f[e]);
        return n;
    }
    getForSku(e) {
        let t = p[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(f[e]);
        return n;
    }
    get fetchingAllEntitlements() {
        return I;
    }
    get fetchedAllEntitlements() {
        return T;
    }
    get applicationIdsFetching() {
        return g;
    }
    get applicationIdsFetched() {
        return S;
    }
    isFetchingForApplication(e) {
        return this.fetchingAllEntitlements || (null != e && this.applicationIdsFetching.has(e));
    }
    isFetchedForApplication(e) {
        return this.fetchedAllEntitlements || (null != e && this.applicationIdsFetched.has(e));
    }
    getForSubscription(e) {
        let t = A[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(f[e]);
        return n;
    }
    isEntitledToSku(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            i = p[t];
        if (null != i)
            for (let t of i) {
                let n = f[t];
                if (null != n && n.isValid(e, _.Z, r)) return !0;
            }
        if (S.has(n)) return !1;
        let a = null != r ? c.Z.getLibraryApplication(n, r) : c.Z.getActiveLibraryApplication(n);
        return !!(null != a && a.sku.id === t && (0, d.Je)(a)) || null;
    }
    hasFetchedForApplicationIds(e) {
        return e.every((e) => S.has(e));
    }
}
E(k, 'displayName', 'EntitlementStore'),
    (t.Z = new k(l.Z, {
        ENTITLEMENT_FETCH_APPLICATION_START: C,
        ENTITLEMENT_FETCH_APPLICATION_SUCCESS: y,
        ENTITLEMENT_FETCH_APPLICATION_FAIL: L,
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: b,
        SKU_PURCHASE_SUCCESS: U,
        LIBRARY_FETCH_SUCCESS: w,
        ENTITLEMENT_CREATE: x,
        ENTITLEMENT_UPDATE: x,
        ENTITLEMENT_DELETE: G,
        LOGOUT: v,
        ENTITLEMENTS_FETCH_FOR_USER_START: D,
        ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: M,
        ENTITLEMENTS_FETCH_FOR_USER_FAIL: P
    }));
