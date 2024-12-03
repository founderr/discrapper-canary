n.d(t, {
    Z: function () {
        return d;
    },
    c: function () {
        return c;
    }
}),
    n(47120);
var r = n(192379),
    i = n(399606),
    a = n(634894),
    s = n(335131),
    o = n(1870),
    l = n(228624),
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
    let t = (0, l.hv)('useFetchPurchases'),
        [n, u, c, d, f, _] = (0, i.Wu)([o.Z], () => [o.Z.isFetching, o.Z.isClaiming, o.Z.fetchError, o.Z.claimError, o.Z.purchases, o.Z.hasPreviouslyFetched]);
    return (
        (0, r.useEffect)(() => {
            (0, s.qg)({ variantsReturnStyle: t });
        }, [t]),
        {
            isClaiming: u,
            fetchPurchasesError: c,
            claimError: d,
            isFetching: n,
            purchases: f,
            hasPreviouslyFetched: _
        }
    );
}
function d(e) {
    let t = null == e ? void 0 : e.paymentGateway,
        n = 'useFetchCollectiblesCategoriesAndPurchases';
    (0, a.j)({
        location: n + ' auto on',
        autoTrackExposure: !0
    }),
        (0, a.j)({
            location: n + ' auto off',
            autoTrackExposure: !1
        });
    let { isFetching: r, categories: i, fetchCategoriesError: s, refreshCategories: o } = (0, u.Z)({ paymentGateway: t }),
        { isClaiming: l, fetchPurchasesError: d, claimError: f, isFetching: _, purchases: p, hasPreviouslyFetched: h } = c();
    return {
        isFetching: r || _,
        isFetchingCategories: r,
        isFetchingPurchases: _,
        isClaiming: l,
        categories: i,
        purchases: p,
        fetchCategoriesError: s,
        fetchPurchasesError: d,
        claimError: f,
        refreshCategories: o,
        hasPreviouslyFetched: h
    };
}
