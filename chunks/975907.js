n.d(t, {
    M: function () {
        return d;
    }
});
var i = n(192379),
    r = n(31569),
    l = n(493646),
    a = n(881294),
    o = n(258971),
    s = n(133743),
    c = n(981631);
function d(e) {
    let { initialQuery: t = '' } = e,
        n = r.Z.useField('query');
    i.useEffect(() => r.Z.setState({ query: t }), [t]);
    let d = i.useCallback((e) => {
            r.Z.setState({ query: e });
        }, []),
        u = i.useCallback(() => {
            r.Z.setState({ query: '' });
        }, []),
        h = i.useCallback(() => {
            let e = (0, l.K)();
            (0, a.z)(c.rMx.APP_DIRECTORY_SEARCH_STARTED, {
                search_term: n,
                category: e.name,
                current_page: o.m_.HOME,
                category_id: e.id
            }),
                (0, s.pR)({ query: n });
        }, [n]);
    return {
        searchQuery: n,
        onSearchTextChange: d,
        onClearSearch: u,
        onSearchSubmit: h
    };
}
