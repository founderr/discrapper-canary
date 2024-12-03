n.d(t, {
    ZP: function () {
        return d;
    },
    c7: function () {
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
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = 'useFetchPurchases';
    (0, a.j)({
        location: t + ' auto on',
        autoTrackExposure: !0
    }),
        (0, a.j)({
            location: t + ' auto off',
            autoTrackExposure: !1
        });
    let n = (0, l.hv)('useFetchPurchases'),
        [u, c, d, f, _, p] = (0, i.Wu)([o.Z], () => [o.Z.isFetching, o.Z.isClaiming, o.Z.fetchError, o.Z.claimError, o.Z.purchases, o.Z.hasPreviouslyFetched]);
    return (
        (0, r.useEffect)(() => {
            if (!0 !== e || !p || null != d) (0, s.qg)({ variantsReturnStyle: n });
        }, [d, p, e, n]),
        {
            isClaiming: c,
            fetchPurchasesError: d,
            claimError: f,
            isFetching: u,
            purchases: _,
            hasPreviouslyFetched: p
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
        { isClaiming: l, fetchPurchasesError: d, claimError: f, isFetching: _, purchases: p, hasPreviouslyFetched: h } = c(null == e ? void 0 : e.stalePurchasesOK);
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
