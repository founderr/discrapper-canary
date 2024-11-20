n.d(t, {
    Z: function () {
        return r;
    }
}),
    n(47120);
var l = n(192379),
    a = n(75124),
    i = n(212819);
function r(e) {
    let { searchOptions: t } = e,
        [n, r] = l.useState({
            results: [],
            query: ''
        }),
        s = (0, a.Z)(() => {
            let e = new i.ZP((e, t) => {
                r({
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
                    let { query: l, resultTypes: a } = e;
                    if (null == s.resultTypes || ((t = a), (n = s.resultTypes), !(t.length === n.size && t.every((e) => n.has(e))))) s.setResultTypes(a), s.setLimit(1 === a.length ? 50 : 20);
                    s.search('' === l.trim() ? '' : l);
                },
                [s]
            ),
            ...n
        }
    );
}
