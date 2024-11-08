t.d(n, {
    P: function () {
        return d;
    }
});
var r = t(192379),
    a = t(392711),
    i = t.n(a),
    o = t(442837),
    s = t(77498),
    l = t(308083);
function c(e) {
    var n;
    return null !== (n = l.gQ.get(e)) && void 0 !== n ? n : 0;
}
function d() {
    let e = (0, o.e7)([s.Z], () => s.Z.games),
        n = r.useMemo(
            () =>
                i()(e)
                    .map((e) => ({
                        value: e.id,
                        label: e.name
                    }))
                    .sortBy((e) => {
                        let { value: n } = e;
                        return c(n);
                    })
                    .reverse()
                    .value(),
            [e]
        ),
        t = r.useCallback((e, n) => c(n.item.value) - c(e.item.value), []);
    return {
        options: n,
        matchSorterOptions: r.useMemo(
            () => ({
                baseSort: t,
                keys: ['label']
            }),
            [t]
        )
    };
}
