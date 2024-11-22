n(47120), n(653041);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(314794),
    c = n(442837),
    d = n(570140),
    f = n(959546),
    _ = n(283595),
    p = n(780570),
    h = n(55563),
    m = n(981631),
    g = n(474936);
let E = {},
    v = {},
    I = {},
    b = {},
    T = !1,
    S = !1,
    y = new Set(),
    A = new Set(),
    N = {};
function C(e) {
    (E[e.id] = f.Z.createFromServer(e)), null == I[e.sku_id] && (I[e.sku_id] = new Set()), null == b[e.application_id] && (b[e.application_id] = new Set()), null != e.subscription_id && (null == N[e.subscription_id] && (N[e.subscription_id] = new Set()), N[e.subscription_id].add(e.id)), b[e.application_id].add(e.id), I[e.sku_id].add(e.id);
}
function R(e) {
    v[e.id] = f.Z.createFromServer(e);
}
function O(e) {
    let { entitlements: t } = e;
    for (let e of t) C(e);
}
function D(e) {
    return C(e.entitlement);
}
class L extends (r = c.yh) {
    initialize() {
        this.syncWith([_.Z], () => !0);
    }
    get(e) {
        return E[e];
    }
    getGiftable() {
        return l().values(v);
    }
    getForApplication(e) {
        let t = b[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(E[e]);
        return n;
    }
    getForSku(e) {
        let t = I[e];
        if (null == t) return null;
        let n = new Set();
        for (let e of t) n.add(E[e]);
        return n;
    }
    get fetchingAllEntitlements() {
        return T;
    }
    get fetchedAllEntitlements() {
        return S;
    }
    get applicationIdsFetching() {
        return y;
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
        for (let e of t) n.add(E[e]);
        return n;
    }
    isEntitledToSku(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            i = I[t];
        if (null != i)
            for (let t of i) {
                let n = E[t];
                if (null != n && n.isValid(e, h.Z, r)) return !0;
            }
        if (A.has(n)) return !1;
        let a = null != r ? _.Z.getLibraryApplication(n, r) : _.Z.getActiveLibraryApplication(n);
        return !!(null != a && a.sku.id === t && (0, p.Je)(a)) || null;
    }
    hasFetchedForApplicationIds(e) {
        return e.every((e) => A.has(e));
    }
    getFractionalPremium(e) {
        var t;
        let n = [];
        return (
            null === (t = this.getForApplication(g.CL)) ||
                void 0 === t ||
                t.forEach((t) => {
                    t.type === m.qc2.FRACTIONAL_REDEMPTION && t.consumed === e && n.push(t);
                }),
            n
        );
    }
    getUnactivatedFractionalPremiumUnits() {
        var e;
        let t = [];
        return (
            null === (e = this.getForApplication(g.CL)) ||
                void 0 === e ||
                e.forEach((e) => {
                    u.k.ACTIVE_FRACTIONAL_PREMIUM_SKUS.has(e.skuId) && !e.consumed && t.push(e);
                }),
            t
        );
    }
}
(s = 'EntitlementStore'),
    (a = 'displayName') in (i = L)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new L(d.Z, {
        ENTITLEMENT_FETCH_APPLICATION_START: function (e) {
            let { applicationId: t } = e;
            y.add(t);
        },
        ENTITLEMENT_FETCH_APPLICATION_SUCCESS: function (e) {
            let { applicationId: t, entitlements: n } = e;
            for (let e of (y.delete(t), A.add(t), n)) !0 !== e.consumed && C(e);
        },
        ENTITLEMENT_FETCH_APPLICATION_FAIL: function () {},
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function (e) {
            let { entitlements: t } = e;
            (v = {}), t.forEach(R);
        },
        SKU_PURCHASE_SUCCESS: O,
        VIRTUAL_CURRENCY_REDEEM_SUCCESS: O,
        LIBRARY_FETCH_SUCCESS: function (e) {
            let { libraryApplications: t } = e;
            for (let e of t) if (null != e.entitlements) for (let t of e.entitlements) C(t);
        },
        ENTITLEMENT_CREATE: D,
        ENTITLEMENT_UPDATE: D,
        ENTITLEMENT_DELETE: function (e) {
            return (function (e) {
                delete E[e.id];
                let t = b[e.application_id];
                null != t && t.delete(e.id);
                let n = I[e.sku_id];
                if ((null != n && n.delete(e.id), null != e.subscription_id)) {
                    let t = N[e.subscription_id];
                    null != t && t.delete(e.id);
                }
            })(e.entitlement);
        },
        LOGOUT: function () {
            (E = {}), (I = {}), (b = {}), (T = !1), (S = !1), (y = new Set()), (A = new Set());
        },
        ENTITLEMENTS_FETCH_FOR_USER_START: function () {
            T = !0;
        },
        ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: function (e) {
            let { entitlements: t } = e;
            for (let e of ((S = !0), (T = !1), t)) C(e);
        },
        ENTITLEMENTS_FETCH_FOR_USER_FAIL: function () {
            (S = !1), (T = !1);
        }
    }));
