t.d(n, {
    Z: function () {
        return r;
    }
}),
    t(47120);
var l = t(470079),
    s = t(77866),
    a = t(212819);
function r(e) {
    let { searchOptions: n } = e,
        [t, r] = l.useState({
            results: [],
            query: ''
        }),
        i = (0, s.Z)(() => {
            let e = new a.ZP((e, n) => {
                r({
                    results: e,
                    query: n
                });
            });
            return e.setLimit(20), e.search(''), e;
        });
    return (
        l.useEffect(() => () => i.destroy(), [i]),
        l.useEffect(() => {
            null != n && n !== i.options && i.setOptions(n);
        }, [i, n]),
        {
            search: l.useCallback(
                (e) => {
                    var n, t;
                    let { query: l, resultTypes: s } = e;
                    if (null == i.resultTypes || ((n = s), (t = i.resultTypes), !(n.length === t.size && n.every((e) => t.has(e))))) i.setResultTypes(s), i.setLimit(1 === s.length ? 50 : 20);
                    i.search('' === l.trim() ? '' : l);
                },
                [i]
            ),
            ...t
        }
    );
}
