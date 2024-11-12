n.d(t, {
    s: function () {
        return f;
    }
}),
    n(47120);
var l = n(192379),
    i = n(442837),
    a = n(38618),
    r = n(51596),
    s = n(516373),
    o = n(314897),
    c = n(580005),
    u = n(987509),
    d = n(601565),
    h = n(41837);
function f(e) {
    let { searchText: t, targetDestination: n, selectedDestinations: f, originDestination: _, includeMissingDMs: g = !1 } = e,
        m = (0, i.e7)([o.default], () => o.default.getId()),
        p = l.useMemo(
            () => ({
                searchOptions: {
                    blacklist: new Set(['user:'.concat(m)]),
                    frecencyBoosters: !0,
                    userFilters: null
                }
            }),
            [m]
        ),
        { search: E, query: I, results: S } = (0, d.Z)(p),
        A = l.useMemo(
            () =>
                (function (e) {
                    let { query: t, queryMode: n } = (0, r.F_)(e),
                        l = h.M,
                        i = null;
                    return (
                        null != n && h.M.includes(n) && ((l = [n]), (i = n)),
                        {
                            query: t,
                            queryMode: i,
                            resultTypes: l
                        }
                    );
                })(t),
            [t]
        ),
        { queryMode: C } = A,
        [v, b] = l.useState(null != f ? f : []);
    l.useLayoutEffect(() => {
        let { query: e, resultTypes: t } = A;
        E({
            query: e,
            resultTypes: t
        }),
            b(null != f ? f : []);
    }, [E, A]),
        (0, s.D)();
    let x = (0, i.e7)([c.Z], () => c.Z.getFrequentlyWithoutFetchingLatest()),
        L = (0, i.e7)([a.Z], () => a.Z.isConnected()),
        N = '' !== I;
    return l.useMemo(
        () =>
            (0, u.ZP)({
                results: S,
                hasQuery: N,
                queryMode: C,
                targetDestination: n,
                frequentChannels: x,
                selectedDestinations: f,
                pinnedDestinations: v,
                originDestination: _,
                includeMissingDMs: g,
                isConnected: L
            }),
        [S, N, C, n, x, f, v, _, g, L]
    );
}
