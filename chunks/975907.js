n.d(t, {
    M: function () {
        return l;
    }
}),
    n(47120);
var i = n(470079),
    a = n(288385),
    s = n(674588),
    r = n(618508);
function l() {
    let [e, t] = i.useState(''),
        [n, l] = i.useState(''),
        [o, c] = i.useState(!1),
        d = (0, r.k)(),
        u = i.useCallback((e) => {
            t(e);
        }, []),
        _ = i.useCallback(() => {
            t(''), l(''), c(!1);
        }, []),
        E = i.useCallback(() => {
            s.yC({
                query: e,
                options: {
                    page: 1,
                    source: a.F.APP_DIRECTORY,
                    categoryId: null == d ? void 0 : d.id
                }
            }),
                c(!0),
                l(e);
        }, [e, d]);
    return {
        searchQuery: e,
        searchFetchedQuery: n,
        onSearchTextChange: u,
        onClearSearch: _,
        onSearchSubmit: E,
        isSearchVisible: o
    };
}
