n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(47120);
var l = n(192379),
    r = n(75124),
    i = n(212819);
function a(e) {
    let { searchOptions: t } = e,
        [n, a] = l.useState({
            results: [],
            query: ''
        }),
        s = (0, r.Z)(() => {
            let e = new i.ZP((e, t) => {
                a({
                    results: e,
                    query: t
                });
            });
            return e.setLimit(20), e.search(''), e;
        });
    return (
        l.useEffect(() => () => s.destroy(), [s]),
        l.useEffect(() => {
            null != t && t !== s.options && s.setOptions(t);
        }, [s, t]),
        {
            search: l.useCallback(
                (e) => {
                    var t, n;
                    let { query: l, resultTypes: r } = e;
                    if (null == s.resultTypes || ((t = r), (n = s.resultTypes), !(t.length === n.size && t.every((e) => n.has(e))))) s.setResultTypes(r), s.setLimit(1 === r.length ? 50 : 20);
                    s.search('' === l.trim() ? '' : l);
                },
                [s]
            ),
            ...n
        }
    );
}
