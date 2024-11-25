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
    l = n(296386),
    a = n(900849),
    s = n(762692),
    o = n(959165),
    c = n(356164),
    d = n(164991),
    u = n(859921),
    h = n(128449),
    m = n(731455);
function p(e) {
    let { loadId: t } = e,
        n = d.Z.useField('fetchedQuery'),
        l = d.Z.useField('categoryId'),
        a = d.Z.useField('languageCode'),
        s = i.useMemo(
            () => ({
                categoryId: l,
                query: n,
                languageCode: a
            }),
            [l, a, n]
        ),
        u = (0, r.e7)([c.Z], () => {
            var e;
            return null !== (e = c.Z.getGuildIds(s)) && void 0 !== e ? e : h.q5;
        }),
        m = (0, r.e7)([c.Z], () => {
            var e;
            return null !== (e = c.Z.getIsFetching(s)) && void 0 !== e && e;
        }),
        p = (0, r.e7)([c.Z], () => {
            var e;
            return null === (e = c.Z.getIsBlocked(n)) || void 0 === e || e;
        }),
        g = d.Z.useField('resultsQuery'),
        f = g !== n,
        _ = i.useCallback(() => {
            let e = c.Z.getGuildIds(s),
                n = c.Z.getTotal(s);
            if (null == e || null == n) return;
            let i = c.Z.getIsFetching(s),
                r = c.Z.getIsInitialFetchComplete(s);
            !i &&
                r &&
                !(e.length >= n) &&
                o.Z.loadMoreCategoryResults({
                    loadId: t,
                    offset: e.length,
                    categoryId: d.Z.getField('categoryId'),
                    query: d.Z.getField('fetchedQuery'),
                    languageCode: d.Z.getField('languageCode')
                });
        }, [t, s]);
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
function g(e) {
    let { loadId: t } = e,
        n = u.Z.useField('isSearchVisible'),
        h = d.Z.useField('query'),
        p = (0, r.e7)([c.Z], () => c.Z.getIsAlgoliaInitialized());
    i.useEffect(() => {
        !p && s.Z.createAlgoliaIndex();
    }, [p]),
        i.useEffect(() => {
            (0, l.le)();
        }, []);
    let g = i.useCallback((e) => {
            d.Z.setState({ query: e });
        }, []),
        f = i.useCallback(() => {
            a.IZ(t),
                s.Z.clearAlgoliaSearchResults(),
                s.Z.resetSearchLayout(),
                d.Z.setState({
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
        searchQuery: h,
        onSearchTextChange: g,
        onClearSearch: f,
        onSearchSubmit: i.useCallback(() => {
            let e = d.Z.getField('query'),
                n = d.Z.getField('fetchedQuery');
            if ('' === e.trim() || e === n) return;
            s.Z.clearAlgoliaSearchResults();
            let i = d.Z.getField('languageCode'),
                r = d.Z.getField('categoryId');
            d.Z.setState({ resultsInitialCategoryId: r }),
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
