n.d(t, {
    LE: function () {
        return T;
    },
    ML: function () {
        return C;
    },
    Qc: function () {
        return f;
    }
}),
    n(47120);
var i = n(470079),
    a = n(348327),
    s = n.n(a),
    r = n(143927),
    l = n(442837),
    o = n(224706),
    c = n(110924),
    d = n(963202),
    u = n(823379),
    _ = n(229893),
    E = n(229765),
    h = n(286083),
    m = n(207796),
    I = n(976757),
    g = n(308083);
function p() {
    return (0, m.GN)(m.t1, s());
}
function T() {
    let e = (0, m.GN)((e) => e.setGame, r.Z),
        t = (0, m.GN)((e) => e.setSelectedGames, r.Z),
        n = (0, m.GN)((e) => e.selectedGames, r.Z),
        a = p(),
        s = (0, d.An)({ location: 'clan_discovery' }),
        c = (0, d.iN)('clan_discovery'),
        { defaultGameId: u } = (0, d.nk)('clan_discovery'),
        h = null != s ? s : u,
        I = (function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                t = (0, l.e7)([_.Z], () => _.Z.hasLoadedStaticClanDiscovery());
            return (
                i.useEffect(() => {
                    e && !t && (0, E.XB)();
                }, [t, e]),
                t
            );
        })(!c),
        T = (0, l.e7)([_.Z], () => _.Z.isLoading());
    return (
        i.useEffect(() => {
            !(n.length > 0) && !c && (h === g.nJ ? (e(m.hz.VALORANT), t([h])) : h === g.xn ? (e(m.hz.GENSHIN), t([h])) : null == h && (e(m.hz.NONE), t([])));
        }, [e, t, h, n, c]),
        i.useEffect(() => {
            if (c) (0, E.Cg)(a);
            else {
                if (!I) return;
                (0, E.jc)(a);
            }
        }, [a, I, c]),
        i.useEffect(() => {
            o.Z.getDetectableGames();
        }, []),
        { loading: T }
    );
}
function S(e) {
    let [t, n] = i.useState(!1),
        a = i.useRef(),
        r = (0, l.Wu)([_.Z], () => e.filter((e) => _.Z.shouldFetchGuild(e)), [e]),
        o = (0, c.Z)(r),
        d = i.useRef(new AbortController()),
        u = i.useCallback(async (e) => {
            n(!0), null != a.current && (d.current.abort(), (d.current = new AbortController())), (a.current = (0, E.$s)(e, d.current.signal)), await a.current, null !== a.current && (n(!1), (a.current = null));
        }, []);
    return (
        i.useEffect(() => {
            if (!(0 === r.length || s()(r, o))) u(r);
        }, [u, r, o, e]),
        i.useEffect(
            () => () => {
                a.current = null;
            },
            []
        ),
        t && r.length > 0
    );
}
function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = p(),
        { savedGuildIds: a, loaded: s } = (0, l.cj)([_.Z], () => ({
            savedGuildIds: _.Z.getSavedGuildIds(),
            loaded: _.Z.hasLoadedStaticClanDiscovery()
        })),
        r = (0, d.iN)('clan_discovery'),
        o = (0, l.e7)([_.Z], () => _.Z.getSearchResult(n), [n]),
        c = (0, l.Wu)([_.Z], () => (t && null != a ? a.map((e) => _.Z.getGuildProfile(e)).filter(u.lm) : []), [t, a]),
        E = i.useMemo(() => {
            if ((0, I.Pw)(o)) {
                let t = o.items;
                return null != e ? t.slice(0, e) : t;
            }
            return [];
        }, [e, o]);
    return t
        ? {
              loaded: s || r,
              clans: c,
              searchCriteria: n,
              searchResult: {
                  items: c,
                  loadedAt: Date.now(),
                  status: 'loaded',
                  guildIds: a
              }
          }
        : {
              loaded: s || r,
              clans: E,
              searchCriteria: n,
              searchResult: o
          };
}
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { updatePaginationSettings: n, currentColumnCount: a, pageSize: s, chunkedPages: o, currentPage: c, fetchableGuildIds: d } = (0, h.a)(),
        g = c - 1,
        T = (0, m.GN)((e) => e.loadingGameApplication, r.Z),
        f = (0, l.e7)([_.Z], () => _.Z.getSavedGuildIds()),
        C = (0, m.GN)((e) => e.savedGuildIds, r.Z),
        N = p(),
        { searchResult: A, hasError: v } = (0, l.cj)(
            [_.Z],
            () => ({
                searchResult: _.Z.getSearchResult(N),
                hasError: _.Z.hasError()
            }),
            [N]
        );
    i.useEffect(() => {
        n(e, h.$, { pageMemoryEnabled: !0 });
    }, [e, n, A]),
        S(d),
        i.useEffect(() => {
            (0, E.IS)();
        }, []),
        S(C),
        !(function () {
            let e = (0, l.e7)([_.Z], () => !_.Z.hasLoadedSavedGuilds());
            i.useEffect(() => {
                e && (0, E.bO)();
            }, [e]);
        })();
    let Z = i.useMemo(() => {
            var e;
            return null !== (e = t ? f : o[g]) && void 0 !== e ? e : [];
        }, [f, o, g, t]),
        L = (0, l.Wu)([_.Z], () => Z.map((e) => _.Z.getGuildProfile(e)).filter(u.lm), [Z]),
        R = Z.length === L.length || t,
        O = L.length === s || R,
        x = (0, I.Pw)(A);
    return {
        loaded: e === a && x && O && !T,
        clans: L,
        searchCriteria: N,
        searchResult: A,
        hasError: v
    };
}
