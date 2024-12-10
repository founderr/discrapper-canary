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
        p = (0, r.e7)([s.Z], () => {
            var e;
            return null === (e = s.Z.getIsBlocked(n)) || void 0 === e || e;
        }),
        g = c.Z.useField('resultsQuery'),
        f = g !== n,
        _ = i.useCallback(() => {
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
            loading: !p && (f || m),
            searchResultsQuery: g,
            loadMore: _,
            searchCategoryId: l,
            isBlockedSearchQuery: p
        }),
        [u, p, f, m, g, _, l]
    );
}
function p(e) {
    let { loadId: t } = e,
        n = u.Z.useField('isSearchVisible'),
        m = c.Z.useField('query'),
        p = (0, r.e7)([s.Z], () => s.Z.getIsAlgoliaInitialized());
    i.useEffect(() => {
        !p && a.Z.createAlgoliaIndex();
    }, [p]),
        i.useEffect(() => {
            (0, d.le)();
        }, []);
    let g = i.useCallback((e) => {
            c.Z.setState({ query: e });
        }, []),
        f = i.useCallback(() => {
            l.IZ(t),
                a.Z.clearAlgoliaSearchResults(),
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
        searchQuery: m,
        onSearchTextChange: g,
        onClearSearch: f,
        onSearchSubmit: i.useCallback(() => {
            let e = c.Z.getField('query'),
                n = c.Z.getField('fetchedQuery');
            if ('' === e.trim() || e === n) return;
            a.Z.clearAlgoliaSearchResults();
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
