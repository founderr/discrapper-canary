n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(47120);
var r = n(192379),
    s = n(442837),
    i = n(365943),
    l = n(25251),
    o = n(223143);
function a() {
    var e;
    let { isFetching: t, fetchCategoriesError: n, fetchPurchasesError: a, categories: c, purchases: d } = (0, o.Z)(),
        [u, f, m] = (0, s.Wu)([l.Z], () => [l.Z.isFetching, l.Z.fetchError, l.Z.profileEffects]);
    return (
        r.useEffect(() => {
            (0, i.z)(!0);
        }, []),
        {
            isFetching: t || u,
            combinedError: null !== (e = null != n ? n : a) && void 0 !== e ? e : f,
            profileEffects: m,
            categories: c,
            purchases: d
        }
    );
}
