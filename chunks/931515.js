n.d(t, {
    LE: function () {
        return M;
    },
    ML: function () {
        return Z;
    },
    Qc: function () {
        return L;
    },
    c2: function () {
        return b;
    },
    kN: function () {
        return P;
    }
}),
    n(47120),
    n(773603);
var i = n(470079),
    a = n(348327),
    s = n.n(a),
    r = n(664751);
if (12633 == n.j) var l = n(266067);
if (12633 == n.j) var o = n(143927);
var c = n(731965),
    u = n(442837),
    d = n(224706),
    _ = n(110924),
    E = n(728345),
    I = n(812206),
    m = n(963202),
    T = n(669764),
    f = n(210753),
    h = n(571457),
    N = n(859921),
    p = n(823379),
    C = n(229893),
    g = n(229765),
    S = n(286083),
    A = n(207796),
    x = n(976757),
    R = n(308083),
    O = n(128449);
function v() {
    var e;
    let { search: t } = (0, l.TH)(),
        { game: n } = r.parse(t.slice(1)),
        i = (0, A.GN)(A.t1, s());
    return null != n && (null === (e = i.games) || void 0 === e ? void 0 : e.length) === 0 && (i.games = [n]), i;
}
function M() {
    let e = (0, A.GN)((e) => e.setGame, o.Z),
        t = (0, A.GN)((e) => e.setSelectedGames, o.Z),
        n = (0, A.GN)((e) => e.selectedGames, o.Z),
        a = v(),
        s = (0, m.An)({ location: 'clan_discovery' }),
        r = (0, m.iN)('clan_discovery'),
        { defaultGameId: l } = (0, m.nk)('clan_discovery'),
        c = null != s ? s : l,
        _ = (function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                t = (0, u.e7)([C.Z], () => C.Z.hasLoadedStaticClanDiscovery());
            return (
                i.useEffect(() => {
                    e && !t && (0, g.XB)();
                }, [t, e]),
                t
            );
        })(!r),
        E = (0, u.e7)([C.Z], () => C.Z.isLoading());
    return (
        i.useEffect(() => {
            !(n.length > 0) && !r && (c === R.nJ ? (e(A.hz.VALORANT), t([c])) : c === R.xn ? (e(A.hz.GENSHIN), t([c])) : null == c && (e(A.hz.NONE), t([])));
        }, [e, t, c, n, r]),
        i.useEffect(() => {
            if (r) (0, g.Cg)(a);
            else {
                if (!_) return;
                (0, g.jc)(a);
            }
        }, [a, _, r]),
        i.useEffect(() => {
            d.Z.getDetectableGames();
        }, []),
        { loading: E }
    );
}
function L() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = v(),
        { savedGuildIds: a, loaded: s } = (0, u.cj)([C.Z], () => ({
            savedGuildIds: C.Z.getSavedGuildIds(),
            loaded: C.Z.hasLoadedStaticClanDiscovery()
        })),
        r = (0, m.iN)('clan_discovery'),
        l = (0, u.e7)([C.Z], () => C.Z.getSearchResult(n), [n]),
        o = (0, u.Wu)([C.Z], () => (t && null != a ? a.map((e) => C.Z.getGuildProfile(e)).filter(p.lm) : []), [t, a]),
        c = i.useMemo(() => {
            if ((0, x.Pw)(l)) {
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
function Z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { updatePaginationSettings: n, currentColumnCount: a, pageSize: r, chunkedPages: l, currentPage: c, fetchableGuildIds: d } = (0, S.a)(),
        E = c - 1,
        I = (0, A.GN)((e) => e.loadingGameApplication, o.Z),
        m = (0, u.e7)([C.Z], () => C.Z.getSavedGuildIds()),
        T = v(),
        { searchResult: f, hasError: h } = (0, u.cj)(
            [C.Z],
            () => ({
                searchResult: C.Z.getSearchResult(T),
                hasError: C.Z.hasError()
            }),
            [T]
        );
    i.useEffect(() => {
        n(e, S.$, { pageMemoryEnabled: !0 });
    }, [e, n, f]),
        !(function (e) {
            let [t, n] = i.useState(!1),
                a = i.useRef(),
                r = (0, u.Wu)([C.Z], () => e.filter((e) => C.Z.shouldFetchGuild(e)), [e]),
                l = (0, _.Z)(r),
                o = i.useRef(new AbortController()),
                c = i.useCallback(async (e) => {
                    n(!0), null != a.current && (o.current.abort(), (o.current = new AbortController())), (a.current = (0, g.$s)(e, o.current.signal)), await a.current, null !== a.current && (n(!1), (a.current = null));
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
        })(d),
        i.useEffect(() => {
            (0, g.IS)();
        }, []);
    let N = i.useMemo(() => {
            var e;
            return null !== (e = t ? m : l[E]) && void 0 !== e ? e : [];
        }, [m, l, E, t]),
        R = (0, u.Wu)([C.Z], () => N.map((e) => C.Z.getGuildProfile(e)).filter(p.lm), [N]),
        O = N.length === R.length || t,
        M = R.length === r || O,
        L = (0, x.Pw)(f);
    return {
        loaded: e === a && L && M && !I,
        clans: R,
        searchCriteria: T,
        searchResult: f,
        hasError: h
    };
}
function b() {
    let { search: e } = (0, l.TH)(),
        t = (0, m.iN)('GlobalDiscovery'),
        { game: n } = t ? r.parse(e.slice(1)) : {},
        a = (0, u.e7)([I.Z], () => (null != n ? I.Z.getApplication(n) : null));
    i.useEffect(() => {
        null != n && (0, h.$X)({ gameId: n });
    }, [n]),
        i.useEffect(() => {
            if (null == n || !t) {
                A.GN.setState({ entrypointGameId: null });
                return;
            }
            (0, c.j)(() => {
                A.GN.setState({ mode: A.v0.DISCOVERY }), (0, N.jY)({ selectedTab: O.vf.GUILDS });
            }),
                null == a
                    ? ((0, c.j)(() => {
                          A.GN.setState({ loadingGameApplication: !0 });
                      }),
                      E.ZP.fetchApplication(n)
                          .then(() => {
                              (0, c.j)(() => {
                                  A.GN.setState({ entrypointGameId: n });
                              });
                          })
                          .finally(() => {
                              (0, c.j)(() => {
                                  A.GN.setState({ loadingGameApplication: !1 });
                              });
                          }))
                    : (A.GN.getState().setSelectedGames([n]), A.GN.setState({ entrypointGameId: n }));
        }, [a, n, t]);
}
function P(e, t) {
    var n;
    let { data: a, isLoading: s } = (0, E.IX)(e),
        r = (0, u.e7)([T.Z], () => (null != e ? T.Z.getGame(e) : null)),
        { isFetching: l } = (0, f.$)(e, t),
        o = i.useMemo(() => {
            if (null == r) return '';
            let { artwork: e, screenshots: t } = r;
            if (e.length > 0) {
                let t = Math.floor(Math.random() * (e.length - 1));
                return e[t];
            }
            if (t.length > 0) {
                let e = Math.floor(Math.random() * (t.length - 1));
                return t[e];
            }
            return '';
        }, [r]);
    return {
        isLoading: s || l,
        backgroundImageUrl: o,
        gameName: null !== (n = null == r ? void 0 : r.name) && void 0 !== n ? n : null == a ? void 0 : a.name
    };
}
