n.d(t, {
    LE: function () {
        return L;
    },
    ML: function () {
        return O;
    },
    Qc: function () {
        return R;
    },
    c2: function () {
        return x;
    }
}),
    n(47120),
    n(773603);
var i = n(470079),
    a = n(348327),
    s = n.n(a),
    r = n(664751),
    l = n(266067),
    o = n(143927),
    c = n(731965),
    d = n(442837),
    u = n(224706),
    _ = n(110924),
    E = n(728345),
    h = n(812206),
    m = n(963202),
    I = n(571457),
    p = n(859921),
    g = n(823379),
    T = n(229893),
    f = n(229765),
    S = n(286083),
    C = n(207796),
    N = n(976757),
    A = n(308083),
    v = n(128449);
function Z() {
    var e;
    let { search: t } = (0, l.TH)(),
        { game: n } = r.parse(t.slice(1)),
        i = (0, C.GN)(C.t1, s());
    return null != n && (null === (e = i.games) || void 0 === e ? void 0 : e.length) === 0 && (i.games = [n]), i;
}
function L() {
    let e = (0, C.GN)((e) => e.setGame, o.Z),
        t = (0, C.GN)((e) => e.setSelectedGames, o.Z),
        n = (0, C.GN)((e) => e.selectedGames, o.Z),
        a = Z(),
        s = (0, m.An)({ location: 'clan_discovery' }),
        r = (0, m.iN)('clan_discovery'),
        { defaultGameId: l } = (0, m.nk)('clan_discovery'),
        c = null != s ? s : l,
        _ = (function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                t = (0, d.e7)([T.Z], () => T.Z.hasLoadedStaticClanDiscovery());
            return (
                i.useEffect(() => {
                    e && !t && (0, f.XB)();
                }, [t, e]),
                t
            );
        })(!r),
        E = (0, d.e7)([T.Z], () => T.Z.isLoading());
    return (
        i.useEffect(() => {
            !(n.length > 0) && !r && (c === A.nJ ? (e(C.hz.VALORANT), t([c])) : c === A.xn ? (e(C.hz.GENSHIN), t([c])) : null == c && (e(C.hz.NONE), t([])));
        }, [e, t, c, n, r]),
        i.useEffect(() => {
            if (r) (0, f.Cg)(a);
            else {
                if (!_) return;
                (0, f.jc)(a);
            }
        }, [a, _, r]),
        i.useEffect(() => {
            u.Z.getDetectableGames();
        }, []),
        { loading: E }
    );
}
function R() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = Z(),
        { savedGuildIds: a, loaded: s } = (0, d.cj)([T.Z], () => ({
            savedGuildIds: T.Z.getSavedGuildIds(),
            loaded: T.Z.hasLoadedStaticClanDiscovery()
        })),
        r = (0, m.iN)('clan_discovery'),
        l = (0, d.e7)([T.Z], () => T.Z.getSearchResult(n), [n]),
        o = (0, d.Wu)([T.Z], () => (t && null != a ? a.map((e) => T.Z.getGuildProfile(e)).filter(g.lm) : []), [t, a]),
        c = i.useMemo(() => {
            if ((0, N.Pw)(l)) {
                let t = l.items;
                return null != e ? t.slice(0, e) : t;
            }
            return [];
        }, [e, l]);
    return t
        ? {
              loaded: s || r,
              clans: o,
              searchCriteria: n,
              searchResult: {
                  items: o,
                  loadedAt: Date.now(),
                  status: 'loaded',
                  guildIds: a
              }
          }
        : {
              loaded: s || r,
              clans: c,
              searchCriteria: n,
              searchResult: l
          };
}
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { updatePaginationSettings: n, currentColumnCount: a, pageSize: r, chunkedPages: l, currentPage: c, fetchableGuildIds: u } = (0, S.a)(),
        E = c - 1,
        h = (0, C.GN)((e) => e.loadingGameApplication, o.Z),
        m = (0, d.e7)([T.Z], () => T.Z.getSavedGuildIds()),
        I = Z(),
        { searchResult: p, hasError: A } = (0, d.cj)(
            [T.Z],
            () => ({
                searchResult: T.Z.getSearchResult(I),
                hasError: T.Z.hasError()
            }),
            [I]
        );
    i.useEffect(() => {
        n(e, S.$, { pageMemoryEnabled: !0 });
    }, [e, n, p]),
        !(function (e) {
            let [t, n] = i.useState(!1),
                a = i.useRef(),
                r = (0, d.Wu)([T.Z], () => e.filter((e) => T.Z.shouldFetchGuild(e)), [e]),
                l = (0, _.Z)(r),
                o = i.useRef(new AbortController()),
                c = i.useCallback(async (e) => {
                    n(!0), null != a.current && (o.current.abort(), (o.current = new AbortController())), (a.current = (0, f.$s)(e, o.current.signal)), await a.current, null !== a.current && (n(!1), (a.current = null));
                }, []);
            i.useEffect(() => {
                if (!(0 === r.length || s()(r, l))) c(r);
            }, [c, r, l, e]),
                i.useEffect(
                    () => () => {
                        a.current = null;
                    },
                    []
                ),
                t && r.length;
        })(u),
        i.useEffect(() => {
            (0, f.IS)();
        }, []);
    let v = i.useMemo(() => {
            var e;
            return null !== (e = t ? m : l[E]) && void 0 !== e ? e : [];
        }, [m, l, E, t]),
        L = (0, d.Wu)([T.Z], () => v.map((e) => T.Z.getGuildProfile(e)).filter(g.lm), [v]),
        R = v.length === L.length || t,
        O = L.length === r || R,
        x = (0, N.Pw)(p);
    return {
        loaded: e === a && x && O && !h,
        clans: L,
        searchCriteria: I,
        searchResult: p,
        hasError: A
    };
}
function x() {
    let { search: e } = (0, l.TH)(),
        t = (0, m.iN)('GlobalDiscovery'),
        { game: n } = t ? r.parse(e.slice(1)) : {},
        a = (0, d.e7)([h.Z], () => (null != n ? h.Z.getApplication(n) : null));
    i.useEffect(() => {
        null != n && (0, I.$X)({ gameId: n });
    }, [n]),
        i.useEffect(() => {
            if (null == n || !t) {
                C.GN.setState({ entrypointGameId: null });
                return;
            }
            (0, c.j)(() => {
                C.GN.setState({ mode: C.v0.DISCOVERY }), (0, p.jY)({ selectedTab: v.vf.GUILDS });
            }),
                null == a
                    ? ((0, c.j)(() => {
                          C.GN.setState({ loadingGameApplication: !0 });
                      }),
                      E.ZP.fetchApplication(n)
                          .then(() => {
                              (0, c.j)(() => {
                                  C.GN.setState({ entrypointGameId: n });
                              });
                          })
                          .finally(() => {
                              (0, c.j)(() => {
                                  C.GN.setState({ loadingGameApplication: !1 });
                              });
                          }))
                    : (C.GN.getState().setSelectedGames([n]), C.GN.setState({ entrypointGameId: n }));
        }, [a, n, t]);
}
