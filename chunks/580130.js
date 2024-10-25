n(47120), n(653041);
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
    f = n(55563),
    h = n(981631),
    p = n(474936);
let I = {},
    m = {},
    T = {},
    S = {},
    g = !1,
    A = !1,
    N = new Set(),
    R = new Set(),
    O = {};
function v(e) {
    (I[e.id] = d.Z.createFromServer(e)), null == T[e.sku_id] && (T[e.sku_id] = new Set()), null == S[e.application_id] && (S[e.application_id] = new Set()), null != e.subscription_id && (null == O[e.subscription_id] && (O[e.subscription_id] = new Set()), O[e.subscription_id].add(e.id)), S[e.application_id].add(e.id), T[e.sku_id].add(e.id);
}
function C(e) {
    m[e.id] = d.Z.createFromServer(e);
}
function L(e) {
    return v(e.entitlement);
}
class D extends (r = u.yh) {
    initialize() {
        this.syncWith([_.Z], () => !0);
    }
    get(e) {
        return I[e];
    }
    getGiftable() {
        return l().values(m);
    }
    getForApplication(e) {
        let t = S[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(I[e]);
        return n;
    }
    getForSku(e) {
        let t = T[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(I[e]);
        return n;
    }
    get fetchingAllEntitlements() {
        return g;
    }
    get fetchedAllEntitlements() {
        return A;
    }
    get applicationIdsFetching() {
        return N;
    }
    get applicationIdsFetched() {
        return R;
    }
    isFetchingForApplication(e) {
        return this.fetchingAllEntitlements || (null != e && this.applicationIdsFetching.has(e));
    }
    isFetchedForApplication(e) {
        return this.fetchedAllEntitlements || (null != e && this.applicationIdsFetched.has(e));
    }
    getForSubscription(e) {
        let t = O[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(I[e]);
        return n;
    }
    isEntitledToSku(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            i = T[t];
        if (null != i)
            for (let t of i) {
                let n = I[t];
                if (null != n && n.isValid(e, f.Z, r)) return !0;
            }
        if (R.has(n)) return !1;
        let a = null != r ? _.Z.getLibraryApplication(n, r) : _.Z.getActiveLibraryApplication(n);
        return !!(null != a && a.sku.id === t && (0, E.Je)(a)) || null;
    }
    hasFetchedForApplicationIds(e) {
        return e.every((e) => R.has(e));
    }
    getFractionalPremium(e) {
        var t;
        let n = [];
        return (
            null === (t = this.getForApplication(p.CL)) ||
                void 0 === t ||
                t.forEach((t) => {
                    t.type === h.qc2.FRACTIONAL_REDEMPTION && t.consumed === e && n.push(t);
                }),
            n
        );
    }
    getUnactivatedFractionalPremiumUnits() {
        var e;
        let t = [];
        return (
            null === (e = this.getForApplication(p.CL)) ||
                void 0 === e ||
                e.forEach((e) => {
                    p.xJ.includes(e.skuId) && !e.consumed && t.push(e);
                }),
            t
        );
    }
}
(s = 'EntitlementStore'),
    (a = 'displayName') in (i = D)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new D(c.Z, {
        ENTITLEMENT_FETCH_APPLICATION_START: function (e) {
            let { applicationId: t } = e;
            N.add(t);
        },
        ENTITLEMENT_FETCH_APPLICATION_SUCCESS: function (e) {
            let { applicationId: t, entitlements: n } = e;
            for (let e of (N.delete(t), R.add(t), n)) !0 !== e.consumed && v(e);
        },
        ENTITLEMENT_FETCH_APPLICATION_FAIL: function () {},
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function (e) {
            let { entitlements: t } = e;
            (m = {}), t.forEach(C);
        },
        SKU_PURCHASE_SUCCESS: function (e) {
            let { entitlements: t } = e;
            for (let e of t) v(e);
        },
        LIBRARY_FETCH_SUCCESS: function (e) {
            let { libraryApplications: t } = e;
            for (let e of t) if (null != e.entitlements) for (let t of e.entitlements) v(t);
        },
        ENTITLEMENT_CREATE: L,
        ENTITLEMENT_UPDATE: L,
        ENTITLEMENT_DELETE: function (e) {
            return (function (e) {
                delete I[e.id];
                let t = S[e.application_id];
                null != t && t.delete(e.id);
                let n = T[e.sku_id];
                if ((null != n && n.delete(e.id), null != e.subscription_id)) {
                    let t = O[e.subscription_id];
                    null != t && t.delete(e.id);
                }
            })(e.entitlement);
        },
        LOGOUT: function () {
            (I = {}), (T = {}), (S = {}), (g = !1), (A = !1), (N = new Set()), (R = new Set());
        },
        ENTITLEMENTS_FETCH_FOR_USER_START: function () {
            g = !0;
        },
        ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: function (e) {
            let { entitlements: t } = e;
            for (let e of ((A = !0), (g = !1), t)) v(e);
        },
        ENTITLEMENTS_FETCH_FOR_USER_FAIL: function () {
            (A = !1), (g = !1);
        }
    }));
