n.d(t, {
    LE: function () {
        return p;
    },
    ML: function () {
        return f;
    },
    Qc: function () {
        return T;
    }
}),
    n(47120),
    n(724458);
var i = n(470079),
    a = n(348327),
    s = n.n(a),
    r = n(143927),
    l = n(442837),
    o = n(224706),
    c = n(110924),
    d = n(963202),
    u = n(229893),
    _ = n(229765),
    E = n(286083),
    h = n(207796),
    m = n(976757),
    I = n(308083);
function g() {
    return (0, h.GN)(h.t1, s());
}
function p() {
    let e = (0, h.GN)((e) => e.setGame, r.Z),
        t = (0, h.GN)((e) => e.setSelectedGames, r.Z),
        n = (0, h.GN)((e) => e.selectedGames, r.Z),
        a = g(),
        s = (0, d.An)({ location: 'clan_discovery' }),
        c = (0, d.iN)('clan_discovery'),
        { defaultGameId: E } = (0, d.nk)('clan_discovery'),
        m = null != s ? s : E,
        p = (function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                t = (0, l.e7)([u.Z], () => u.Z.hasLoadedStaticClanDiscovery());
            return (
                i.useEffect(() => {
                    e && !t && (0, _.XB)();
                }, [t, e]),
                t
            );
        })(!c),
        T = (0, l.e7)([u.Z], () => u.Z.isLoading());
    return (
        i.useEffect(() => {
            !(n.length > 0) && !c && (m === I.nJ ? (e(h.hz.VALORANT), t([m])) : m === I.xn ? (e(h.hz.GENSHIN), t([m])) : null == m && (e(h.hz.NONE), t([])));
        }, [e, t, m, n, c]),
        i.useEffect(() => {
            if (c) (0, _.Cg)(a);
            else {
                if (!p) return;
                (0, _.jc)(a);
            }
        }, [a, p, c]),
        i.useEffect(() => {
            o.Z.getDetectableGames();
        }, []),
        { loading: T }
    );
}
function T() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, h.GN)((e) => e.savedGuildIds, r.Z),
        a = g(),
        s = (0, l.e7)([u.Z], () => u.Z.hasLoadedStaticClanDiscovery()),
        o = (0, d.iN)('clan_discovery'),
        c = (0, l.e7)([u.Z], () => u.Z.getSearchResult(a), [a]),
        _ = (0, l.Wu)([u.Z], () => (t && null != n ? u.Z.getGuildProfiles(n) : []), [t, n]),
        E = i.useMemo(() => {
            if ((0, m.Pw)(c)) {
                let t = c.items;
                return null != e ? t.slice(0, e) : t;
            }
            return [];
        }, [e, c]);
    return t
        ? {
              loaded: s || o,
              clans: _,
              searchCriteria: a,
              searchResult: {
                  items: _,
                  loadedAt: Date.now(),
                  status: 'loaded',
                  guildIds: n
              }
          }
        : {
              loaded: s || o,
              clans: E,
              searchCriteria: a,
              searchResult: c
          };
}
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { updatePaginationSettings: n, updatePaginationResults: a, pageSize: o, chunkedPages: d, currentPage: I } = (0, E.$)(),
        p = I - 1,
        T = (0, h.GN)((e) => e.savedGuildIds, r.Z),
        f = g(),
        S = (0, l.e7)([u.Z], () => u.Z.getSearchResult(f), [f]);
    i.useEffect(() => {
        n(e);
    }, [e, n]),
        i.useEffect(() => {
            t ? a(T) : (0, m.Pw)(S) ? a(S.guildIds) : a([]);
        }, [T, t, a, S]);
    let C = (0, l.Wu)(
        [u.Z],
        () =>
            d
                .slice(p, p + 2)
                .reduce((e, t) => e.concat(t), [])
                .filter((e) => u.Z.shouldFetchGuild(e)),
        [d, p]
    );
    !(function (e) {
        let [t, n] = i.useState(!1),
            a = i.useRef(),
            r = (0, l.Wu)([u.Z], () => e.filter((e) => u.Z.shouldFetchGuild(e)), [e]),
            o = (0, c.Z)(r),
            d = i.useRef(new AbortController()),
            E = i.useCallback(async (e) => {
                n(!0), null != a.current && (d.current.abort(), (d.current = new AbortController())), (a.current = (0, _.$s)(e, d.current.signal)), await a.current, null !== a.current && (n(!1), (a.current = null));
            }, []);
        i.useEffect(() => {
            if (!(0 === r.length || s()(r, o))) E(r);
        }, [E, r, o]),
            i.useEffect(
                () => () => {
                    a.current = null;
                },
                []
            );
    })(C);
    let N = i.useMemo(() => {
            var e;
            return t ? d[0] : null !== (e = d[p]) && void 0 !== e ? e : [];
        }, [d, p, t]),
        A = (0, l.Wu)([u.Z], () => u.Z.getGuildProfiles(N), [N]),
        v = N.length === A.length || t,
        L = A.length === o || (0 === C.length && v);
    return {
        loaded: (0, m.Pw)(S) && L,
        clans: A,
        searchCriteria: f,
        searchResult: S
    };
}
