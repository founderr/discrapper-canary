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
        { search: E, query: I, results: A } = (0, d.Z)(p),
        S = l.useMemo(
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
        { queryMode: C } = S,
        [v, b] = l.useState(null != f ? f : []);
    l.useLayoutEffect(() => {
        let { query: e, resultTypes: t } = S;
        E({
            query: e,
            resultTypes: t
        }),
            b(null != f ? f : []);
    }, [E, S]),
        (0, s.D)();
    let L = (0, i.e7)([c.Z], () => c.Z.getFrequentlyWithoutFetchingLatest()),
        x = (0, i.e7)([a.Z], () => a.Z.isConnected()),
        N = '' !== I;
    return l.useMemo(
        () =>
            (0, u.ZP)({
                results: A,
                hasQuery: N,
                queryMode: C,
                targetDestination: n,
                frequentChannels: L,
                selectedDestinations: f,
                pinnedDestinations: v,
                originDestination: _,
                includeMissingDMs: g,
                isConnected: x
            }),
        [A, N, C, n, L, f, v, _, g, x]
    );
}
