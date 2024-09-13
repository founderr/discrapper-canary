n.d(t, {
    Z: function () {
        return d;
    },
    c: function () {
        return c;
    }
}),
    n(47120);
var r = n(470079),
    i = n(399606),
    a = n(634894),
    s = n(335131),
    o = n(337679),
    l = n(1870),
    u = n(267097);
function c() {
    let e = 'useFetchPurchases';
    (0, a.j)({
        location: e + ' auto on',
        autoTrackExposure: !0
    }),
        (0, a.j)({
            location: e + ' auto off',
            autoTrackExposure: !1
        });
    let [t, n, u, c, d, _] = (0, i.Wu)([l.Z], () => [l.Z.isFetching, l.Z.isClaiming, l.Z.fetchError, l.Z.claimError, l.Z.purchases, l.Z.hasPreviouslyFetched]),
        { shouldFakePurchaseSuccessFlowLocally: E } = (0, o.Z)({ location: 'useFetchPurchases' });
    return (
        (0, r.useEffect)(() => {
            if (!E || !(d.size > 0)) (0, s.qg)();
        }, [E]),
        {
            isClaiming: n,
            fetchError: u,
            claimError: c,
            isFetching: t,
            purchases: d,
            hasPreviouslyFetched: _
        }
    );
}
function d(e) {
    var t;
    let n = null == e ? void 0 : e.paymentGateway,
        r = 'useFetchCollectiblesCategoriesAndPurchases';
    (0, a.j)({
        location: r + ' auto on',
        autoTrackExposure: !0
    }),
        (0, a.j)({
            location: r + ' auto off',
            autoTrackExposure: !1
        });
    let { isFetching: i, categories: s, error: o, refreshCategories: l } = (0, u.Z)({ paymentGateway: n }),
        { isClaiming: d, fetchError: _, claimError: E, isFetching: f, purchases: h, hasPreviouslyFetched: p } = c();
    return {
        isFetching: i || f,
        isFetchingCategories: i,
        isFetchingPurchases: f,
        isClaiming: d,
        categories: s,
        purchases: h,
        error: null !== (t = null != o ? o : _) && void 0 !== t ? t : E,
        refreshCategories: l,
        hasPreviouslyFetched: p
    };
}
