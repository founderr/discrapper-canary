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
    let [t, n, r, i, s, u] = (0, a.Wu)([l.Z], () => [l.Z.isFetching, l.Z.isClaiming, l.Z.fetchError, l.Z.claimError, l.Z.purchases, l.Z.hasPreviouslyFetched]);
    return {
        isClaiming: n,
        fetchError: r,
        claimError: i,
        isFetching: t,
        purchases: s,
        hasPreviouslyFetched: u
    };
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
    let { isFetching: a, categories: l, error: d, refreshCategories: _ } = (0, u.Z)({ paymentGateway: n }),
        { isClaiming: E, fetchError: f, claimError: h, isFetching: p, purchases: m, hasPreviouslyFetched: I } = c(),
        T = a || p,
        g = null !== (t = null != d ? d : f) && void 0 !== t ? t : h;
    return (
        (0, i.useEffect)(() => {
            (0, s.qg)();
        }, []),
        {
            isFetching: T,
            isFetchingCategories: a,
            isFetchingPurchases: p,
            isClaiming: E,
            categories: l,
            purchases: m,
            error: g,
            refreshCategories: _,
            hasPreviouslyFetched: I
        }
    );
}
