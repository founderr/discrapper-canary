var r,
    i = n(47120);
var a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(570140),
    u = n(959546),
    c = n(283595),
    d = n(780570),
    _ = n(55563),
    E = n(981631),
    f = n(474936);
function h(e, t, n) {
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
let p = {},
    m = {},
    I = {},
    T = {},
    g = !1,
    S = !1,
    A = new Set(),
    v = new Set(),
    N = {},
    O = [];
function R() {
    (p = {}), (I = {}), (T = {}), (g = !1), (S = !1), (A = new Set()), (v = new Set()), (O = []);
}
function C(e) {
    (p[e.id] = u.Z.createFromServer(e)), null == I[e.sku_id] && (I[e.sku_id] = new Set()), null == T[e.application_id] && (T[e.application_id] = new Set()), null != e.subscription_id && (null == N[e.subscription_id] && (N[e.subscription_id] = new Set()), N[e.subscription_id].add(e.id)), T[e.application_id].add(e.id), I[e.sku_id].add(e.id);
}
function y(e) {
    m[e.id] = u.Z.createFromServer(e);
}
function L(e) {
    delete p[e.id];
    let t = T[e.application_id];
    null != t && t.delete(e.id);
    let n = I[e.sku_id];
    if ((null != n && n.delete(e.id), null != e.subscription_id)) {
        let t = N[e.subscription_id];
        null != t && t.delete(e.id);
    }
}
function b(e) {
    let { applicationId: t } = e;
    A.add(t);
}
function D(e) {
    let { applicationId: t, entitlements: n } = e;
    for (let e of (A.delete(t), v.add(t), n)) !0 !== e.consumed && C(e);
}
function M(e) {
    let { entitlements: t } = e;
    (m = {}), t.forEach(y);
}
function P() {}
function U() {
    g = !0;
}
function w(e) {
    let { entitlements: t } = e;
    for (let e of ((S = !0), (g = !1), t)) C(e);
}
function x() {
    (S = !1), (g = !1);
}
function G(e) {
    let { entitlements: t } = e;
    for (let e of t) C(e);
}
function k(e) {
    let { libraryApplications: t } = e;
    for (let e of t) if (null != e.entitlements) for (let t of e.entitlements) C(t);
}
function B(e) {
    return C(e.entitlement);
}
function F(e) {
    return L(e.entitlement);
}
class Z extends (r = s.yh) {
    initialize() {
        this.syncWith([c.Z], () => !0);
    }
    get(e) {
        return p[e];
    }
    getGiftable() {
        return o().values(m);
    }
    getForApplication(e) {
        let t = T[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(p[e]);
        return n;
    }
    getForSku(e) {
        let t = I[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(p[e]);
        return n;
    }
    get fetchingAllEntitlements() {
        return g;
    }
    get fetchedAllEntitlements() {
        return S;
    }
    get applicationIdsFetching() {
        return A;
    }
    get applicationIdsFetched() {
        return v;
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
        for (let e of t) n.add(p[e]);
        return n;
    }
    isEntitledToSku(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            i = I[t];
        if (null != i)
            for (let t of i) {
                let n = p[t];
                if (null != n && n.isValid(e, _.Z, r)) return !0;
            }
        if (v.has(n)) return !1;
        let a = null != r ? c.Z.getLibraryApplication(n, r) : c.Z.getActiveLibraryApplication(n);
        return !!(null != a && a.sku.id === t && (0, d.Je)(a)) || null;
    }
    hasFetchedForApplicationIds(e) {
        return e.every((e) => v.has(e));
    }
    getFractionalPremium(e) {
        var t;
        let n = new Set([]);
        return (
            null === (t = this.getForApplication(f.CL)) ||
                void 0 === t ||
                t.forEach((t) => {
                    t.type === E.qc2.FRACTIONAL_REDEMPTION && t.consumed === e && n.add(t);
                }),
            n.symmetricDifference(new Set(O)).size > 0 && (O = Array.from(n.values())),
            O
        );
    }
}
h(Z, 'displayName', 'EntitlementStore'),
    (t.Z = new Z(l.Z, {
        ENTITLEMENT_FETCH_APPLICATION_START: b,
        ENTITLEMENT_FETCH_APPLICATION_SUCCESS: D,
        ENTITLEMENT_FETCH_APPLICATION_FAIL: P,
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: M,
        SKU_PURCHASE_SUCCESS: G,
        LIBRARY_FETCH_SUCCESS: k,
        ENTITLEMENT_CREATE: B,
        ENTITLEMENT_UPDATE: B,
        ENTITLEMENT_DELETE: F,
        LOGOUT: R,
        ENTITLEMENTS_FETCH_FOR_USER_START: U,
        ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: w,
        ENTITLEMENTS_FETCH_FOR_USER_FAIL: x
    }));
