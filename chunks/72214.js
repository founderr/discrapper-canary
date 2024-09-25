n.d(t, {
    s: function () {
        return m;
    }
}),
    n(47120);
var l = n(470079),
    s = n(442837),
    a = n(38618),
    r = n(51596),
    i = n(516373),
    o = n(314897),
    u = n(580005),
    c = n(987509),
    d = n(601565),
    h = n(41837);
function m(e) {
    let { searchText: t, targetDestination: n, selectedDestinations: m, originDestination: f, includeMissingDMs: g = !1 } = e,
        _ = (0, s.e7)([o.default], () => o.default.getId()),
        E = l.useMemo(
            () => ({
                searchOptions: {
                    blacklist: new Set(['user:'.concat(_)]),
                    frecencyBoosters: !0,
                    userFilters: null
                }
            }),
            [_]
        ),
        { search: S, query: M, results: v } = (0, d.Z)(E),
        x = l.useMemo(
            () =>
                (function (e) {
                    let { query: t, queryMode: n } = (0, r.F_)(e),
                        l = h.M,
                        s = null;
                    return (
                        null != n && h.M.includes(n) && ((l = [n]), (s = n)),
                        {
                            query: t,
                            queryMode: s,
                            resultTypes: l
                        }
                    );
                })(t),
            [t]
        ),
        { queryMode: p } = x,
        [N, C] = l.useState(null != m ? m : []);
    l.useLayoutEffect(() => {
        let { query: e, resultTypes: t } = x;
        S({
            query: e,
            resultTypes: t
        }),
            C(null != m ? m : []);
    }, [S, x]),
        (0, i.D)();
    let Z = (0, s.e7)([u.Z], () => u.Z.getFrequentlyWithoutFetchingLatest()),
        A = (0, s.e7)([a.Z], () => a.Z.isConnected()),
        b = '' !== M;
    return l.useMemo(
        () =>
            (0, c.ZP)({
                results: v,
                hasQuery: b,
                queryMode: p,
                targetDestination: n,
                frequentChannels: Z,
                selectedDestinations: m,
                pinnedDestinations: N,
                originDestination: f,
                includeMissingDMs: g,
                isConnected: A
            }),
        [v, b, p, n, Z, m, N, f, g, A]
    );
}
