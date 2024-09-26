n.d(t, {
    H: function () {
        return E;
    },
    f: function () {
        return h;
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
function h(e) {
    let { loadId: t } = e,
        n = (0, c.$G)(),
        s = (0, c.NL)(),
        r = (0, c.lZ)(),
        l = (0, c.Dm)(),
        u = i.useMemo(
            () => ({
                categoryId: r,
                query: s,
                languageCode: l
            }),
            [r, l, s]
        ),
        h = (0, a.e7)([o.Z], () => {
            var e;
            return null !== (e = o.Z.getGuildIds(u)) && void 0 !== e ? e : _.q5;
        }),
        E = (0, a.e7)([o.Z], () => {
            var e;
            return null !== (e = o.Z.getIsFetching(u)) && void 0 !== e && e;
        }),
        m = (0, a.e7)([o.Z], () => {
            var e;
            return null === (e = o.Z.getIsBlocked(s)) || void 0 === e || e;
        }),
        I = n !== s,
        g = i.useCallback(() => {
            let e = (0, c.WF)(),
                n = (0, c.lx)(),
                i = o.Z.getGuildIds(u),
                a = o.Z.getTotal(u);
            if (null == i || null == a) return;
            let s = o.Z.getIsFetching(u),
                r = o.Z.getIsInitialFetchComplete(u);
            if (s || !r || i.length >= a) return;
            let l = (0, c.a7)();
            (0, d.CD)({
                loadId: t,
                categoryId: n,
                offset: i.length,
                query: e,
                languageCode: l
            });
        }, [t, u]);
    return i.useMemo(
        () => ({
            guildIds: h,
            loading: !m && (I || E),
            searchResultsQuery: n,
            searchFetchedQuery: s,
            loadMore: g,
            searchCategoryId: r,
            isBlockedSearchQuery: m
        }),
        [h, m, I, E, n, s, g, r]
    );
}
function E(e) {
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
            r.IZ(t), l.Z.clearAlgoliaSearchResults(), l.Z.resetSearchLayout();
            let e = (0, u.Iy)(),
                n = (0, d.lg)(e);
            (0, c.LD)({
                query: '',
                fetchedQuery: '',
                resultsQuery: '',
                categoryId: n,
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
            if ('' === e.trim() || e === n) return;
            l.Z.clearAlgoliaSearchResults();
            let i = (0, c.a7)(),
                a = (0, c.lx)();
            (0, c.LD)({ resultsInitialCategoryId: a }),
                (0, u.jY)({ isSearchVisible: !0 }),
                (0, d.NL)({
                    loadId: t,
                    categoryId: a,
                    query: e,
                    languageCode: i
                });
        }, [t]),
        isSearchVisible: n
    };
}
