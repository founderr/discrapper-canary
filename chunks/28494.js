n.d(t, {
    H: function () {
        return h;
    },
    f: function () {
        return E;
    }
});
var i = n(470079),
    a = n(442837),
    s = n(296386),
    r = n(900849),
    l = n(762692),
    o = n(356164),
    c = n(164991),
    d = n(726115),
    u = n(859921),
    _ = n(128449);
function E(e) {
    let { loadId: t } = e,
        n = (0, c.$G)(),
        s = (0, c.lZ)(),
        r = (0, d.a1)({
            categoryId: s,
            query: n
        }),
        l = (0, a.e7)([o.Z], () => {
            var e;
            return null !== (e = o.Z.getGuildIds(r)) && void 0 !== e ? e : _.q5;
        }),
        u = (0, a.e7)([o.Z], () => {
            var e;
            return null !== (e = o.Z.getIsFetching(r)) && void 0 !== e && e;
        }),
        E = i.useCallback(() => {
            let e = (0, c.WF)(),
                n = (0, c.lx)(),
                i = (0, d.a1)({
                    categoryId: n,
                    query: e
                }),
                a = o.Z.getGuildIds(i),
                s = o.Z.getTotal(i);
            if (null == a || null == s) return;
            let r = o.Z.getIsFetching(i),
                l = o.Z.getIsInitialFetchComplete(i);
            if (r || !l || a.length >= s) return;
            let u = (0, c.a7)(),
                _ = (0, c.uP)();
            (0, d.AS)({
                loadId: t,
                categoryId: n,
                offset: a.length,
                searchQuery: _,
                languageCode: u
            });
        }, [t]);
    return i.useMemo(
        () => ({
            guildIds: l,
            loading: u,
            searchResultsQuery: n,
            loadMore: E,
            searchCategoryId: s
        }),
        [l, u, n, E, s]
    );
}
function h(e) {
    let { loadId: t } = e,
        n = (0, u.QQ)(),
        a = (0, c.A3)();
    i.useEffect(() => {
        l.Z.createAlgoliaIndex(), (0, s.le)();
    }, []);
    let o = i.useCallback((e) => {
            (0, c.LD)({ query: e });
        }, []),
        _ = i.useCallback(() => {
            r.IZ(t);
            let e = (0, c.WF)();
            l.Z.clearAlgoliaSearchResults(e);
            let n = (0, u.Iy)(),
                i = (0, d.lg)(n);
            (0, c.LD)({
                resultsQuery: '',
                query: '',
                categoryId: i,
                resultsInitialCategoryId: null,
                scrollPosition: null
            }),
                (0, u.jY)({ isSearchVisible: !1 });
        }, [t]);
    return {
        searchQuery: a,
        onSearchTextChange: o,
        onClearSearch: _,
        onSearchSubmit: i.useCallback(() => {
            let e = (0, c.uP)(),
                n = (0, c.WF)();
            if (e === n) return;
            l.Z.clearAlgoliaSearchResults(n);
            let i = (0, c.a7)(),
                a = (0, c.lx)();
            (0, c.LD)({ resultsInitialCategoryId: a }),
                (0, u.jY)({ isSearchVisible: !0 }),
                (0, d.II)({ searchQuery: e }),
                (0, d.XW)({
                    loadId: t,
                    categoryId: a,
                    searchQuery: e,
                    languageCode: i
                });
        }, [t]),
        isSearchVisible: n
    };
}
