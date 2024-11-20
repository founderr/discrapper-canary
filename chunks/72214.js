n.d(t, {
    s: function () {
        return _;
    }
}),
    n(47120);
var l = n(192379),
    a = n(442837),
    i = n(38618),
    r = n(51596),
    s = n(516373),
    o = n(314897),
    c = n(580005),
    u = n(987509),
    d = n(601565),
    h = n(41837);
function f(e) {
    let { query: t, queryMode: n } = (0, r.F_)(e),
        l = h.M,
        a = null;
    return (
        null != n && h.M.includes(n) && ((l = [n]), (a = n)),
        {
            query: t,
            queryMode: a,
            resultTypes: l
        }
    );
}
function _(e) {
    let { targetDestination: t, selectedDestinations: n, originDestination: r, includeMissingDMs: h = !1 } = e,
        _ = (0, a.e7)([o.default], () => o.default.getId()),
        g = l.useMemo(
            () => ({
                searchOptions: {
                    blacklist: new Set(['user:'.concat(_)]),
                    frecencyBoosters: !0,
                    userFilters: null
                }
            }),
            [_]
        ),
        { search: m, query: p, results: E } = (0, d.Z)(g),
        [I, S] = l.useState(f('')),
        A = l.useCallback((e) => S(f(e)), [S]),
        { queryMode: C } = I,
        [v, b] = l.useState(null != n ? n : []);
    l.useLayoutEffect(() => {
        let { query: e, resultTypes: t } = I;
        m({
            query: e,
            resultTypes: t
        }),
            b(null != n ? n : []);
    }, [m, I]),
        (0, s.D)();
    let L = (0, a.e7)([c.Z], () => c.Z.getFrequentlyWithoutFetchingLatest()),
        x = (0, a.e7)([i.Z], () => i.Z.isConnected()),
        N = '' !== p;
    return {
        results: l.useMemo(
            () =>
                (0, u.ZP)({
                    results: E,
                    hasQuery: N,
                    queryMode: C,
                    targetDestination: t,
                    frequentChannels: L,
                    selectedDestinations: n,
                    pinnedDestinations: v,
                    originDestination: r,
                    includeMissingDMs: h,
                    isConnected: x
                }),
            [E, N, C, t, L, n, v, r, h, x]
        ),
        updateSearchText: A
    };
}
