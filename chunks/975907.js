n.d(t, {
    M: function () {
        return l;
    }
}),
    n(47120);
var i = n(470079),
    a = n(288385),
    s = n(674588),
    r = n(979007);
function l() {
    let [e, t] = i.useState(''),
        [n, l] = i.useState(''),
        [o, c] = i.useState(!1),
        d = i.useCallback((e) => {
            t(e);
        }, []),
        u = i.useCallback(() => {
            t(''), l(''), c(!1);
        }, []),
        _ = i.useCallback(() => {
            s.yC({
                query: e,
                options: {
                    page: 1,
                    source: a.F.APP_DIRECTORY,
                    pageSize: r.IV
                }
            }),
                c(!0),
                l(e);
        }, [e]);
    return {
        searchQuery: e,
        searchFetchedQuery: n,
        onSearchTextChange: d,
        onClearSearch: u,
        onSearchSubmit: _,
        hasSearchView: o
    };
}
