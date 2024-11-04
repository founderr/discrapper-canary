n.d(t, {
    H: function () {
        return g;
    },
    f: function () {
        return p;
    }
});
var i = n(192379),
    r = n(442837),
    a = n(296386),
    l = n(900849),
    s = n(762692),
    o = n(356164),
    c = n(164991),
    d = n(726115),
    u = n(859921),
    h = n(128449),
    m = n(731455);
function p(e) {
    let { loadId: t } = e,
        n = (0, c.NL)(),
        a = (0, c.lZ)(),
        l = (0, c.Dm)(),
        s = i.useMemo(
            () => ({
                categoryId: a,
                query: n,
                languageCode: l
            }),
            [a, l, n]
        ),
        u = (0, r.e7)([o.Z], () => {
            var e;
            return null !== (e = o.Z.getGuildIds(s)) && void 0 !== e ? e : h.q5;
        }),
        m = (0, r.e7)([o.Z], () => {
            var e;
            return null !== (e = o.Z.getIsFetching(s)) && void 0 !== e && e;
        }),
        p = (0, r.e7)([o.Z], () => {
            var e;
            return null === (e = o.Z.getIsBlocked(n)) || void 0 === e || e;
        }),
        g = (0, c.$G)(),
        f = g !== n,
        _ = i.useCallback(() => {
            let e = (0, c.Zq)(),
                n = (0, c.lx)(),
                i = o.Z.getGuildIds(s),
                r = o.Z.getTotal(s);
            if (null == i || null == r) return;
            let a = o.Z.getIsFetching(s),
                l = o.Z.getIsInitialFetchComplete(s);
            if (a || !l || i.length >= r) return;
            let u = (0, c.a7)();
            (0, d.CD)({
                loadId: t,
                categoryId: n,
                offset: i.length,
                query: e,
                languageCode: u
            });
        }, [t, s]);
    return i.useMemo(
        () => ({
            guildIds: u,
            loading: !p && (f || m),
            searchResultsQuery: g,
            loadMore: _,
            searchCategoryId: a,
            isBlockedSearchQuery: p
        }),
        [u, p, f, m, g, _, a]
    );
}
function g(e) {
    let { loadId: t } = e,
        n = u.Z.useField('isSearchVisible'),
        r = (0, c.A3)();
    i.useEffect(() => {
        s.Z.createAlgoliaIndex(), (0, a.le)();
    }, []);
    let o = i.useCallback((e) => {
            (0, c.LD)({ query: e });
        }, []),
        h = i.useCallback(() => {
            l.IZ(t),
                s.Z.clearAlgoliaSearchResults(),
                s.Z.resetSearchLayout(),
                (0, c.LD)({
                    query: '',
                    fetchedQuery: '',
                    resultsQuery: '',
                    categoryId: m.Hk,
                    resultsInitialCategoryId: null,
                    scrollPosition: null
                }),
                u.Z.setState({ isSearchVisible: !1 });
        }, [t]);
    return {
        searchQuery: r,
        onSearchTextChange: o,
        onClearSearch: h,
        onSearchSubmit: i.useCallback(() => {
            let e = (0, c.uP)(),
                n = (0, c.Zq)();
            if ('' === e.trim() || e === n) return;
            s.Z.clearAlgoliaSearchResults();
            let i = (0, c.a7)(),
                r = (0, c.lx)();
            (0, c.LD)({ resultsInitialCategoryId: r }),
                u.Z.setState({ isSearchVisible: !0 }),
                (0, d.NL)({
                    loadId: t,
                    categoryId: r,
                    query: e,
                    languageCode: i
                });
        }, [t]),
        isSearchVisible: n
    };
}
