n.d(t, {
    M: function () {
        return a;
    }
});
var i = n(192379),
    r = n(31569),
    l = n(133743);
function a(e) {
    let { initialQuery: t = '' } = e,
        n = r.Z.useField('query');
    i.useEffect(() => r.Z.setState({ query: t }), [t]);
    let a = i.useCallback((e) => {
            r.Z.setState({ query: e });
        }, []),
        s = i.useCallback(() => {
            r.Z.setState({ query: '' });
        }, []),
        o = i.useCallback(() => {
            (0, l.pR)({ query: n });
        }, [n]);
    return {
        searchQuery: n,
        onSearchTextChange: a,
        onClearSearch: s,
        onSearchSubmit: o
    };
}
