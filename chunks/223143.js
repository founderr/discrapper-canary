n.d(t, {
    Z: function () {
        return d;
    },
    c: function () {
        return c;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(399606),
    o = n(634894),
    s = n(335131),
    l = n(1870),
    u = n(267097);
function c() {
    let e = 'useFetchPurchases';
    (0, o.j)({
        location: e + ' auto on',
        autoTrackExposure: !0
    }),
        (0, o.j)({
            location: e + ' auto off',
            autoTrackExposure: !1
        });
    let [t, n, r, u, c, d] = (0, a.Wu)([l.Z], () => [l.Z.isFetching, l.Z.isClaiming, l.Z.fetchError, l.Z.claimError, l.Z.purchases, l.Z.hasPreviouslyFetched]);
    return (
        (0, i.useEffect)(() => {
            (0, s.qg)();
        }, []),
        {
            isClaiming: n,
            fetchError: r,
            claimError: u,
            isFetching: t,
            purchases: c,
            hasPreviouslyFetched: d
        }
    );
}
function d(e) {
    var t;
    let n = null == e ? void 0 : e.paymentGateway,
        r = 'useFetchCollectiblesCategoriesAndPurchases';
    (0, o.j)({
        location: r + ' auto on',
        autoTrackExposure: !0
    }),
        (0, o.j)({
            location: r + ' auto off',
            autoTrackExposure: !1
        });
    let { isFetching: i, categories: a, error: s, refreshCategories: l } = (0, u.Z)({ paymentGateway: n }),
        { isClaiming: d, fetchError: _, claimError: E, isFetching: f, purchases: h, hasPreviouslyFetched: p } = c(),
        m = i || f;
    return {
        isFetching: m,
        isFetchingCategories: i,
        isFetchingPurchases: f,
        isClaiming: d,
        categories: a,
        purchases: h,
        error: null !== (t = null != s ? s : _) && void 0 !== t ? t : E,
        refreshCategories: l,
        hasPreviouslyFetched: p
    };
}
