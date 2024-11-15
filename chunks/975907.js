n.d(t, {
    M: function () {
        return l;
    }
}),
    n(47120);
var i = n(192379),
    r = n(133743);
function l(e) {
    let { initialQuery: t = '' } = e,
        [n, l] = i.useState(null != t ? t : ''),
        a = i.useCallback((e) => {
            l(e);
        }, []),
        s = i.useCallback(() => {
            l('');
        }, []),
        o = i.useCallback(() => {
            (0, r.pR)({ query: n });
        }, [n]);
    return {
        searchQuery: n,
        onSearchTextChange: a,
        onClearSearch: s,
        onSearchSubmit: o
    };
}
