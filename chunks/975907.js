n.d(t, {
    M: function () {
        return s;
    }
}),
    n(47120);
var i = n(192379),
    r = n(288385),
    l = n(674588),
    a = n(979007);
function s() {
    let [e, t] = i.useState(''),
        [n, s] = i.useState(''),
        [o, c] = i.useState(!1),
        [d, u] = i.useState(void 0),
        h = i.useCallback((e) => {
            t(e);
        }, []),
        m = i.useCallback(() => {
            t(''), s(''), c(!1), u(void 0);
        }, []),
        p = i.useCallback(() => {
            l.yC({
                query: e,
                options: {
                    page: 1,
                    source: r.F.APP_DIRECTORY,
                    pageSize: a.IV
                }
            }),
                c(!0),
                s(e),
                u(void 0);
        }, [e]);
    return {
        searchQuery: e,
        searchFetchedQuery: n,
        onSearchTextChange: h,
        onClearSearch: m,
        onSearchSubmit: p,
        hasSearchView: o,
        initialSearchCategoryId: d,
        onOpenCategorySearch: i.useCallback((e, n) => {
            t(e),
                l.yC({
                    query: e,
                    options: {
                        page: 1,
                        source: r.F.APP_DIRECTORY,
                        pageSize: a.IV,
                        categoryId: n
                    }
                }),
                c(!0),
                s(e),
                u(n);
        }, [])
    };
}
