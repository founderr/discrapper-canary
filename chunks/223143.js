n.d(t, {
    Z: function () {
        return _;
    },
    c: function () {
        return d;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(399606),
    o = n(634894),
    s = n(335131),
    l = n(337679),
    u = n(1870),
    c = n(267097);
function d() {
    let e = 'useFetchPurchases';
    (0, o.j)({
        location: e + ' auto on',
        autoTrackExposure: !0
    }),
        (0, o.j)({
            location: e + ' auto off',
            autoTrackExposure: !1
        });
    let [t, n, r, c, d, _] = (0, a.Wu)([u.Z], () => [u.Z.isFetching, u.Z.isClaiming, u.Z.fetchError, u.Z.claimError, u.Z.purchases, u.Z.hasPreviouslyFetched]),
        { shouldFakePurchaseSuccessFlowLocally: E } = (0, l.Z)({ location: 'useFetchPurchases' });
    return (
        (0, i.useEffect)(() => {
            if (!E || !(d.size > 0)) (0, s.qg)();
        }, [E]),
        {
            isClaiming: n,
            fetchError: r,
            claimError: c,
            isFetching: t,
            purchases: d,
            hasPreviouslyFetched: _
        }
    );
}
function _(e) {
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
    let { isFetching: i, categories: a, error: s, refreshCategories: l } = (0, c.Z)({ paymentGateway: n }),
        { isClaiming: u, fetchError: _, claimError: E, isFetching: f, purchases: h, hasPreviouslyFetched: p } = d(),
        m = i || f;
    return {
        isFetching: m,
        isFetchingCategories: i,
        isFetchingPurchases: f,
        isClaiming: u,
        categories: a,
        purchases: h,
        error: null !== (t = null != s ? s : _) && void 0 !== t ? t : E,
        refreshCategories: l,
        hasPreviouslyFetched: p
    };
}
