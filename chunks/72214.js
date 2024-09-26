t.d(n, {
    s: function () {
        return f;
    }
}),
    t(47120);
var l = t(470079),
    s = t(442837),
    a = t(38618),
    r = t(51596),
    i = t(516373),
    o = t(314897),
    u = t(580005),
    c = t(987509),
    d = t(601565),
    h = t(41837);
function f(e) {
    let { searchText: n, targetDestination: t, selectedDestinations: f, originDestination: m, includeMissingDMs: g = !1 } = e,
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
        p = l.useMemo(
            () =>
                (function (e) {
                    let { query: n, queryMode: t } = (0, r.F_)(e),
                        l = h.M,
                        s = null;
                    return (
                        null != t && h.M.includes(t) && ((l = [t]), (s = t)),
                        {
                            query: n,
                            queryMode: s,
                            resultTypes: l
                        }
                    );
                })(n),
            [n]
        ),
        { queryMode: x } = p,
        [N, C] = l.useState(null != f ? f : []);
    l.useLayoutEffect(() => {
        let { query: e, resultTypes: n } = p;
        S({
            query: e,
            resultTypes: n
        }),
            C(null != f ? f : []);
    }, [S, p]),
        (0, i.D)();
    let Z = (0, s.e7)([u.Z], () => u.Z.getFrequentlyWithoutFetchingLatest()),
        A = (0, s.e7)([a.Z], () => a.Z.isConnected()),
        b = '' !== M;
    return l.useMemo(
        () =>
            (0, c.ZP)({
                results: v,
                hasQuery: b,
                queryMode: x,
                targetDestination: t,
                frequentChannels: Z,
                selectedDestinations: f,
                pinnedDestinations: N,
                originDestination: m,
                includeMissingDMs: g,
                isConnected: A
            }),
        [v, b, x, t, Z, f, N, m, g, A]
    );
}
