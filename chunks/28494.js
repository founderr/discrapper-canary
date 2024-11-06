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
    o = n(356164),
    c = n(164991),
    d = n(726115),
    u = n(859921),
    h = n(128449),
    m = n(731455);
function p(e) {
    let { loadId: t } = e,
        n = c.Z.useField('fetchedQuery'),
        l = c.Z.useField('categoryId'),
        a = c.Z.useField('languageCode'),
        s = i.useMemo(
            () => ({
                categoryId: l,
                query: n,
                languageCode: a
            }),
            [l, a, n]
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
        g = c.Z.useField('resultsQuery'),
        f = g !== n,
        _ = i.useCallback(() => {
            let e = o.Z.getGuildIds(s),
                n = o.Z.getTotal(s);
            if (null == e || null == n) return;
            let i = o.Z.getIsFetching(s),
                r = o.Z.getIsInitialFetchComplete(s);
            !i &&
                r &&
                !(e.length >= n) &&
                (0, d.CD)({
                    loadId: t,
                    offset: e.length,
                    categoryId: c.Z.getField('categoryId'),
                    query: c.Z.getField('fetchedQuery'),
                    languageCode: c.Z.getField('languageCode')
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
        r = c.Z.useField('query');
    i.useEffect(() => {
        s.Z.createAlgoliaIndex(), (0, l.le)();
    }, []);
    let o = i.useCallback((e) => {
            c.Z.setState({ query: e });
        }, []),
        h = i.useCallback(() => {
            a.IZ(t),
                s.Z.clearAlgoliaSearchResults(),
                s.Z.resetSearchLayout(),
                c.Z.setState({
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
            let e = c.Z.getField('query'),
                n = c.Z.getField('fetchedQuery');
            if ('' === e.trim() || e === n) return;
            s.Z.clearAlgoliaSearchResults();
            let i = c.Z.getField('languageCode'),
                r = c.Z.getField('categoryId');
            c.Z.setState({ resultsInitialCategoryId: r }),
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
