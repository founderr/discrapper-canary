n.d(t, {
    M: function () {
        return r;
    }
}),
    n(47120);
var i = n(470079),
    a = n(288385),
    s = n(674588);
function r() {
    let [e, t] = i.useState(''),
        [n, r] = i.useState(''),
        [l, o] = i.useState(!1),
        c = i.useCallback((e) => {
            t(e);
        }, []),
        d = i.useCallback(() => {
            t(''), r(''), o(!1);
        }, []),
        u = i.useCallback(() => {
            s.yC({
                query: e,
                options: {
                    page: 1,
                    source: a.F.APP_DIRECTORY
                }
            }),
                o(!0),
                r(e);
        }, [e]);
    return {
        searchQuery: e,
        searchFetchedQuery: n,
        onSearchTextChange: c,
        onClearSearch: d,
        onSearchSubmit: u,
        hasSearchView: l
    };
}
