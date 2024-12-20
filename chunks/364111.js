n.d(t, {
    E: function () {
        return u;
    }
}),
    n(47120);
var i = n(192379),
    r = n(442837),
    l = n(353926),
    a = n(358085),
    o = n(335131),
    s = n(52030),
    c = n(67696),
    d = n(228624);
function u(e) {
    let t = (0, r.e7)([l.Z], () => l.Z.hasLoadedExperiments),
        n = (0, d.hv)('useMaybeFetchCollectiblesShopHome'),
        u = (0, c.n)('useMaybeFetchCollectiblesShopHome'),
        h = (0, a.isDesktop)() || (0, a.isWeb)(),
        [m, p, g, f, _, E] = (0, r.Wu)([s.Z], () => {
            var e, t;
            return [s.Z.shopBlocks, null !== (e = s.Z.lastSuccessfulFetch) && void 0 !== e ? e : 0, null !== (t = s.Z.lastErrorTimestamp) && void 0 !== t ? t : 0, s.Z.lastFetchOptions, s.Z.fetchShopHomeError, s.Z.isFetchingShopHome];
        }),
        I = (0, i.useMemo)(
            () => ({
                ...e,
                variantsReturnStyle: n,
                includeBundles: h
            }),
            [e, n, h]
        ),
        C = (0, i.useMemo)(() => !(0, o.oc)(f, I), [f, I]),
        v = (0, i.useMemo)(() => Date.now() - p < 600000, [p]);
    return (
        (0, i.useEffect)(() => {
            if (!t || !u || E) return;
            let e = Date.now() - g < 600000;
            if (null == _ || !e) (C || !v) && (0, o.Ov)(I);
        }, [t, u, E, _, g, v, C, I]),
        {
            isFetchingShopHome: E,
            fetchShopHomeError: _,
            shopBlocks: m,
            refreshShopHome: (0, i.useCallback)(() => {
                (0, o.Ov)(I);
            }, [I])
        }
    );
}
