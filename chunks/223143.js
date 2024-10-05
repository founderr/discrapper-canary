n.d(t, {
    Z: function () {
        return c;
    },
    c: function () {
        return u;
    }
}),
    n(47120);
var r = n(470079),
    i = n(399606),
    a = n(634894),
    s = n(335131),
    o = n(1870),
    l = n(267097);
function u() {
    let e = 'useFetchPurchases';
    (0, a.j)({
        location: e + ' auto on',
        autoTrackExposure: !0
    }),
        (0, a.j)({
            location: e + ' auto off',
            autoTrackExposure: !1
        });
    let [t, n, l, u, c, d] = (0, i.Wu)([o.Z], () => [o.Z.isFetching, o.Z.isClaiming, o.Z.fetchError, o.Z.claimError, o.Z.purchases, o.Z.hasPreviouslyFetched]);
    return (
        (0, r.useEffect)(() => {
            (0, s.qg)();
        }, []),
        {
            isClaiming: n,
            fetchError: l,
            claimError: u,
            isFetching: t,
            purchases: c,
            hasPreviouslyFetched: d
        }
    );
}
function c(e) {
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
    let { isFetching: i, categories: s, error: o, refreshCategories: c } = (0, l.Z)({ paymentGateway: n }),
        { isClaiming: d, fetchError: _, claimError: E, isFetching: f, purchases: h, hasPreviouslyFetched: p } = u();
    return {
        isFetching: i || f,
        isFetchingCategories: i,
        isFetchingPurchases: f,
        isClaiming: d,
        categories: s,
        purchases: h,
        error: null !== (t = null != o ? o : _) && void 0 !== t ? t : E,
        refreshCategories: c,
        hasPreviouslyFetched: p
    };
}
