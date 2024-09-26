n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var r = n(470079),
    i = n(442837),
    l = n(821849),
    s = n(509545),
    a = n(78839),
    o = n(289393),
    c = n(697227),
    u = n(981631);
function d(e) {
    let t = (0, i.e7)([a.ZP], () => a.ZP.getSubscriptions()),
        n = r.useMemo(() => {
            if (null == t) return {};
            let e = {};
            for (let n of Object.values(t)) n.type === u.NYc.GUILD && (e[(0, c.W)(n)] = n);
            return e;
        }, [t]),
        { activeSubscription: d, activeSubscriptionListing: h } = (0, i.cj)([o.Z], () => {
            var t;
            let r,
                i = null,
                l = null != e ? o.Z.getSubscriptionGroupListing(e) : null;
            for (let e of null !== (t = null == l ? void 0 : l.subscription_listings_ids) && void 0 !== t ? t : []) {
                let t = o.Z.getSubscriptionListing(e),
                    l = null == t ? void 0 : t.subscription_plans[0].id;
                if (null == l) continue;
                let s = n[l];
                if (null != s) {
                    (i = s), (r = t);
                    break;
                }
            }
            return {
                activeSubscription: i,
                activeSubscriptionListing: r
            };
        }),
        _ = null == h ? void 0 : h.subscription_plans[0],
        f = null == _ ? void 0 : _.id,
        E = null == _ ? void 0 : _.sku_id,
        p = (0, i.e7)([s.Z], () => (null != f ? s.Z.get(f) : null)),
        m = null == h ? void 0 : h.soft_deleted;
    return (
        r.useEffect(() => {
            null == p && null != E && !s.Z.isFetchingForSKU(E) && (0, l.GZ)(E, void 0, void 0, m);
        }, [p, E, m]),
        {
            activeSubscription: d,
            activeSubscriptionListing: h,
            activeSubscriptionPlanFromStore: p
        }
    );
}
