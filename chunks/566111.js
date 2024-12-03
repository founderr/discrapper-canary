n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var r = n(192379),
    i = n(442837),
    l = n(365943),
    s = n(25251),
    o = n(223143);
function c() {
    var e;
    let { isFetching: t, fetchCategoriesError: n, fetchPurchasesError: c, categories: a, purchases: d } = (0, o.Z)(),
        [u, f, m] = (0, i.Wu)([s.Z], () => [s.Z.isFetching, s.Z.fetchError, s.Z.profileEffects]);
    return (
        r.useEffect(() => {
            (0, l.z)(!0);
        }, []),
        {
            isFetching: t || u,
            combinedError: null !== (e = null != n ? n : c) && void 0 !== e ? e : f,
            profileEffects: m,
            categories: a,
            purchases: d
        }
    );
}
