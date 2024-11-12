n(47120), n(653041);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(301766),
    c = n(251625),
    d = n(709054),
    f = n(981631),
    _ = n(474936);
let p = {},
    h = {},
    m = new Set(),
    g = new Set(),
    E = {},
    v = {};
function I(e) {
    let t = e.skuId;
    p[e.id] = e;
    let n = e.prices[f.tuJ.DEFAULT];
    if (null != n) {
        var r;
        let t = new Set(Object.keys(n.paymentSourcePrices));
        E[e.id] = t;
        let i = Array.from(null !== (r = v[e.skuId]) && void 0 !== r ? r : new Set());
        v[e.skuId] = new Set([...i, ...Array.from(t)]);
    }
    let i = h[t];
    null != i ? i.add(e.id) : (h[t] = new Set([e.id]));
}
function b() {
    [_.GP[_.Xh.NONE_MONTH], _.GP[_.Xh.NONE_YEAR], _.GP[_.Xh.NONE_3_MONTH], _.GP[_.Xh.NONE_6_MONTH]].forEach((e) =>
        I(
            u.ZP.createFromServer({
                id: e.id,
                name: e.name,
                interval: e.interval,
                interval_count: e.intervalCount,
                tax_inclusive: !0,
                sku_id: e.skuId,
                currency: f.pKx.USD,
                price: 0,
                price_tier: 0,
                discount_price: null
            })
        )
    );
}
function S(e) {
    I(u.ZP.createFromServer(e));
}
b();
function T() {
    (0, c.Ti)(p), (0, c.Ti)(h), m.clear(), g.clear(), (0, c.Ti)(E), (0, c.Ti)(v), b();
}
let y = [_.rV.DAY, _.rV.MONTH, _.rV.YEAR];
class A extends (r = o.ZP.Store) {
    getPlanIdsForSkus(e) {
        let t = [];
        for (let r of e) {
            var n;
            let e = Array.from(null !== (n = h[r]) && void 0 !== n ? n : new Set());
            e.sort((e, t) => {
                let n = p[e],
                    r = p[t];
                return y.indexOf(n.interval) - y.indexOf(r.interval) || n.intervalCount - r.intervalCount;
            }),
                t.push(...e);
        }
        return t;
    }
    getFetchedSKUIDs() {
        return d.default.keys(h);
    }
    getForSKU(e) {
        var t;
        return Array.from(null !== (t = h[e]) && void 0 !== t ? t : []).map((e) => p[e]);
    }
    getForSkuAndInterval(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this.getForSKU(e).find((e) => e.interval === t && e.intervalCount === n);
    }
    get(e) {
        return p[e];
    }
    isFetchingForSKU(e) {
        return m.has(e);
    }
    isFetchingForSKUs(e) {
        return e.some((e) => this.isFetchingForSKU(e));
    }
    isLoadedForSKU(e) {
        return !!g.has(e) || (!m.has(e) && null != h[e]);
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
        g.add(e);
    }
    getPaymentSourcesForPlanId(e) {
        return E.hasOwnProperty(e) ? E[e] : null;
    }
    getPaymentSourceIds() {
        let e = new Set();
        return Object.values(E).forEach((t) => t.forEach((t) => e.add(t))), e;
    }
    hasPaymentSourceForSKUId(e, t) {
        return _.Si.NONE === t || (null != v[t] && v[t].has(e));
    }
    hasPaymentSourceForSKUIds(e, t) {
        return t.every((t) => this.hasPaymentSourceForSKUId(e, t));
    }
}
(s = 'SubscriptionPlanStore'),
    (a = 'displayName') in (i = A)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new A(l.Z, {
        SUBSCRIPTION_PLANS_FETCH: function (e) {
            let { skuId: t } = e;
            m.add(t);
        },
        SUBSCRIPTION_PLANS_FETCH_SUCCESS: function (e) {
            let { skuId: t, subscriptionPlans: n } = e;
            (h[t] = new Set()), (v[t] = new Set()), n.forEach(S), m.delete(t), g.delete(t);
        },
        SUBSCRIPTION_PLANS_FETCH_FAILURE: function (e) {
            let { skuId: t } = e;
            m.delete(t), g.delete(t);
        },
        SUBSCRIPTION_PLANS_RESET: T,
        GIFT_CODE_RESOLVE_SUCCESS: function (e) {
            let { giftCode: t } = e;
            null != t.subscription_plan && S(t.subscription_plan);
        },
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function (e) {
            let { entitlements: t } = e;
            for (let e of t) null != e.subscription_plan && S(e.subscription_plan);
        },
        LOGOUT: T
    }));
