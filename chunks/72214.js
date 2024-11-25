n.d(t, {
    s: function () {
        return m;
    }
}),
    n(47120);
var l = n(192379),
    r = n(442837),
    i = n(38618),
    s = n(51596),
    a = n(516373),
    o = n(314897),
    u = n(580005),
    c = n(987509),
    d = n(601565),
    h = n(41837);
function f(e) {
    let { query: t, queryMode: n } = (0, s.F_)(e),
        l = h.M,
        r = null;
    return (
        null != n && h.M.includes(n) && ((l = [n]), (r = n)),
        {
            query: t,
            queryMode: r,
            resultTypes: l
        }
    );
}
function m(e) {
    let { targetDestination: t, selectedDestinations: n, originDestination: s, includeMissingDMs: h = !1 } = e,
        m = (0, r.e7)([o.default], () => o.default.getId()),
        g = l.useMemo(
            () => ({
                searchOptions: {
                    blacklist: new Set(['user:'.concat(m)]),
                    frecencyBoosters: !0,
                    userFilters: null
                }
            }),
            [m]
        ),
        { search: p, query: x, results: b } = (0, d.Z)(g),
        [v, C] = l.useState(f('')),
        S = l.useCallback((e) => C(f(e)), [C]),
        { queryMode: Z } = v,
        [N, y] = l.useState(null != n ? n : []);
    l.useLayoutEffect(() => {
        let { query: e, resultTypes: t } = v;
        p({
            query: e,
            resultTypes: t
        }),
            y(null != n ? n : []);
    }, [p, v]),
        (0, a.D)();
    let _ = (0, r.e7)([u.Z], () => u.Z.getFrequentlyWithoutFetchingLatest()),
        j = (0, r.e7)([i.Z], () => i.Z.isConnected()),
        M = '' !== x;
    return {
        results: l.useMemo(
            () =>
                (0, c.ZP)({
                    results: b,
                    hasQuery: M,
                    queryMode: Z,
                    targetDestination: t,
                    frequentChannels: _,
                    selectedDestinations: n,
                    pinnedDestinations: N,
                    originDestination: s,
                    includeMissingDMs: h,
                    isConnected: j
                }),
            [b, M, Z, t, _, n, N, s, h, j]
        ),
        updateSearchText: S
    };
}
