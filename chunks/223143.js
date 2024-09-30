n.d(t, {
    Z: function () {
        return u;
    },
    c: function () {
        return l;
    }
});
var r = n(47120);
var i = n(399606),
    a = n(634894),
    o = n(1870),
    s = n(267097);
function l() {
    let e = 'useFetchPurchases';
    (0, a.j)({
        location: e + ' auto on',
        autoTrackExposure: !0
    }),
        (0, a.j)({
            location: e + ' auto off',
            autoTrackExposure: !1
        });
    let [t, n, r, s, l, u] = (0, i.Wu)([o.Z], () => [o.Z.isFetching, o.Z.isClaiming, o.Z.fetchError, o.Z.claimError, o.Z.purchases, o.Z.hasPreviouslyFetched]);
    return {
        isClaiming: n,
        fetchError: r,
        claimError: s,
        isFetching: t,
        purchases: l,
        hasPreviouslyFetched: u
    };
}
function u(e) {
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
    let { isFetching: i, categories: o, error: u, refreshCategories: c } = (0, s.Z)({ paymentGateway: n }),
        { isClaiming: d, fetchError: _, claimError: E, isFetching: f, purchases: h, hasPreviouslyFetched: p } = l(),
        m = i || f;
    return {
        isFetching: m,
        isFetchingCategories: i,
        isFetchingPurchases: f,
        isClaiming: d,
        categories: o,
        purchases: h,
        error: null !== (t = null != u ? u : _) && void 0 !== t ? t : E,
        refreshCategories: c,
        hasPreviouslyFetched: p
    };
}
