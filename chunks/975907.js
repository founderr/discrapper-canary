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
        [n] = i.useState(1),
        l = (0, r.k)(),
        o = i.useCallback((e) => {
            t(e);
        }, []),
        c = i.useCallback(() => {
            t('');
        }, []),
        d = i.useCallback(() => {
            s.yC({
                query: e,
                options: {
                    page: n,
                    source: a.F.APP_DIRECTORY,
                    categoryId: null == l ? void 0 : l.id
                }
            });
        }, [n, e, l]);
    return {
        searchQuery: e,
        onSearchTextChange: o,
        onClearSearch: c,
        onSearchSubmit: d
    };
}
