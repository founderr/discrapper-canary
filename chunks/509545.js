var r,
    i = n(47120);
var a = n(653041);
var o = n(442837),
    s = n(570140),
    l = n(301766),
    u = n(251625),
    c = n(709054),
    d = n(981631),
    _ = n(474936);
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
    p = new Set(),
    m = new Set(),
    I = {},
    T = {};
function g(e) {
    let t = e.skuId;
    f[e.id] = e;
    let n = e.prices[d.tuJ.DEFAULT];
    if (null != n) {
        var r;
        let t = new Set(Object.keys(n.paymentSourcePrices));
        I[e.id] = t;
        let i = Array.from(null !== (r = T[e.skuId]) && void 0 !== r ? r : new Set());
        T[e.skuId] = new Set([...i, ...Array.from(t)]);
    }
    let i = h[t];
    null != i ? i.add(e.id) : (h[t] = new Set([e.id]));
}
function S() {
    [_.GP[_.Xh.NONE_MONTH], _.GP[_.Xh.NONE_YEAR], _.GP[_.Xh.NONE_3_MONTH], _.GP[_.Xh.NONE_6_MONTH]].forEach((e) =>
        g(
            l.ZP.createFromServer({
                id: e.id,
                name: e.name,
                interval: e.interval,
                interval_count: e.intervalCount,
                tax_inclusive: !0,
                sku_id: e.skuId,
                currency: d.pKx.USD,
                price: 0,
                price_tier: 0,
                discount_price: null
            })
        )
    );
}
function A(e) {
    g(l.ZP.createFromServer(e));
}
function v(e) {
    let { skuId: t } = e;
    p.add(t);
}
function N(e) {
    let { skuId: t, subscriptionPlans: n } = e;
    (h[t] = new Set()), (T[t] = new Set()), n.forEach(A), p.delete(t), m.delete(t);
}
function O(e) {
    let { giftCode: t } = e;
    null != t.subscription_plan && A(t.subscription_plan);
}
function R(e) {
    let { skuId: t } = e;
    p.delete(t), m.delete(t);
}
function C(e) {
    let { entitlements: t } = e;
    for (let e of t) null != e.subscription_plan && A(e.subscription_plan);
}
function y() {
    (0, u.Ti)(f), (0, u.Ti)(h), p.clear(), m.clear(), (0, u.Ti)(I), (0, u.Ti)(T), S();
}
S();
let b = [_.rV.DAY, _.rV.MONTH, _.rV.YEAR];
class L extends (r = o.ZP.Store) {
    getPlanIdsForSkus(e) {
        let t = [];
        for (let r of e) {
            var n;
            let e = Array.from(null !== (n = h[r]) && void 0 !== n ? n : new Set());
            e.sort((e, t) => {
                let n = f[e],
                    r = f[t];
                return b.indexOf(n.interval) - b.indexOf(r.interval) || n.intervalCount - r.intervalCount;
            }),
                t.push(...e);
        }
        return t;
    }
    getFetchedSKUIDs() {
        return c.default.keys(h);
    }
    getForSKU(e) {
        var t;
        return Array.from(null !== (t = h[e]) && void 0 !== t ? t : []).map((e) => f[e]);
    }
    getForSkuAndInterval(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this.getForSKU(e).find((e) => e.interval === t && e.intervalCount === n);
    }
    get(e) {
        return f[e];
    }
    isFetchingForSKU(e) {
        return p.has(e);
    }
    isFetchingForSKUs(e) {
        return e.some((e) => this.isFetchingForSKU(e));
    }
    isLoadedForSKU(e) {
        return !!m.has(e) || (!p.has(e) && null != h[e]);
    }
    isLoadedForSKUs(e) {
        return e.every((e) => this.isLoadedForSKU(e));
    }
    isFetchingForPremiumSKUs() {
        return _.YQ.map((e) => this.isFetchingForSKU(e)).includes(!0);
    }
    isLoadedForPremiumSKUs() {
        return _.YQ.every((e) => this.isLoadedForSKU(e));
    }
    ignoreSKUFetch(e) {
        m.add(e);
    }
    getPaymentSourcesForPlanId(e) {
        return I.hasOwnProperty(e) ? I[e] : null;
    }
    getPaymentSourceIds() {
        let e = new Set();
        return Object.values(I).forEach((t) => t.forEach((t) => e.add(t))), e;
    }
    hasPaymentSourceForSKUId(e, t) {
        return _.Si.NONE === t || (null != T[t] && T[t].has(e));
    }
    hasPaymentSourceForSKUIds(e, t) {
        return t.every((t) => this.hasPaymentSourceForSKUId(e, t));
    }
}
E(L, 'displayName', 'SubscriptionPlanStore'),
    (t.Z = new L(s.Z, {
        SUBSCRIPTION_PLANS_FETCH: v,
        SUBSCRIPTION_PLANS_FETCH_SUCCESS: N,
        SUBSCRIPTION_PLANS_FETCH_FAILURE: R,
        SUBSCRIPTION_PLANS_RESET: y,
        GIFT_CODE_RESOLVE_SUCCESS: O,
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: C,
        LOGOUT: y
    }));
