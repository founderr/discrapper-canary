n.d(t, {
    Z: function () {
        return r;
    }
}),
    n(47120);
var l = n(470079),
    s = n(77866),
    a = n(212819);
function r(e) {
    let { searchOptions: t } = e,
        [n, r] = l.useState({
            results: [],
            query: ''
        }),
        i = (0, s.Z)(() => {
            let e = new a.ZP((e, t) => {
                r({
                    results: e,
                    query: t
                });
            });
            return e.setLimit(20), e.search(''), e;
        });
    return (
        l.useEffect(() => () => i.destroy(), [i]),
        l.useEffect(() => {
            null != t && t !== i.options && i.setOptions(t);
        }, [i, t]),
        {
            search: l.useCallback(
                (e) => {
                    var t, n;
                    let { query: l, resultTypes: s } = e;
                    if (null == i.resultTypes || ((t = s), (n = i.resultTypes), !(t.length === n.size && t.every((e) => n.has(e))))) i.setResultTypes(s), i.setLimit(1 === s.length ? 50 : 20);
                    i.search('' === l.trim() ? '' : l);
                },
                [i]
            ),
            ...n
        }
    );
}
