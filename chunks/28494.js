n.d(t, {
    H: function () {
        return p;
    },
    f: function () {
        return m;
    }
});
var i = n(192379),
    r = n(442837),
    l = n(900849),
    a = n(762692),
    o = n(959165),
    s = n(356164),
    c = n(164991),
    d = n(456268),
    u = n(859921),
    h = n(128449);
function m(e) {
    let { loadId: t } = e,
        n = c.Z.useField('fetchedQuery'),
        l = c.Z.useField('categoryId'),
        a = c.Z.useField('languageCode'),
        d = i.useMemo(
            () => ({
                categoryId: l,
                query: n,
                languageCode: a
            }),
            [l, a, n]
        ),
        u = (0, r.e7)([s.Z], () => {
            var e;
            return null !== (e = s.Z.getGuildIds(d)) && void 0 !== e ? e : h.q5;
        }),
        m = (0, r.e7)([s.Z], () => {
            var e;
            return null !== (e = s.Z.getIsFetching(d)) && void 0 !== e && e;
        }),
        p = c.Z.useField('resultsQuery'),
        g = p !== n,
        f = i.useCallback(() => {
            let e = s.Z.getGuildIds(d),
                n = s.Z.getTotal(d);
            if (null == e || null == n) return;
            let i = s.Z.getIsFetching(d),
                r = s.Z.getIsInitialFetchComplete(d);
            !i &&
                r &&
                !(e.length >= n) &&
                o.Z.loadMoreCategoryResults({
                    loadId: t,
                    offset: e.length,
                    categoryId: c.Z.getField('categoryId'),
                    query: c.Z.getField('fetchedQuery'),
                    languageCode: c.Z.getField('languageCode')
                });
        }, [t, d]);
    return i.useMemo(
        () => ({
            guildIds: u,
            loading: g || m,
            searchResultsQuery: p,
            loadMore: f,
            searchCategoryId: l
        }),
        [u, g, m, p, f, l]
    );
}
function p(e) {
    let { loadId: t } = e,
        n = u.Z.useField('isSearchVisible'),
        r = c.Z.useField('query');
    i.useEffect(() => {
        (0, d.le)();
    }, []);
    let s = i.useCallback((e) => {
            c.Z.setState({ query: e });
        }, []),
        m = i.useCallback(() => {
            l.IZ(t),
                a.Z.clearSearchResults(),
                a.Z.resetSearchLayout(),
                c.Z.setState({
                    query: '',
                    fetchedQuery: '',
                    resultsQuery: '',
                    categoryId: h.Hk,
                    resultsInitialCategoryId: null,
                    scrollPosition: null
                }),
                u.Z.setState({ isSearchVisible: !1 });
        }, [t]);
    return {
        searchQuery: r,
        onSearchTextChange: s,
        onClearSearch: m,
        onSearchSubmit: i.useCallback(() => {
            let e = c.Z.getField('query'),
                n = c.Z.getField('fetchedQuery');
            if ('' === e.trim() || e === n) return;
            a.Z.clearSearchResults();
            let i = c.Z.getField('languageCode'),
                r = c.Z.getField('categoryId');
            c.Z.setState({ resultsInitialCategoryId: r }),
                u.Z.setState({ isSearchVisible: !0 }),
                o.Z.loadCategoryResultsAndCounts({
                    loadId: t,
                    categoryId: r,
                    query: e,
                    languageCode: i
                });
        }, [t]),
        isSearchVisible: n
    };
}
