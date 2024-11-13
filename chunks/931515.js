n.d(t, {
    I9: function () {
        return W;
    },
    LE: function () {
        return G;
    },
    ML: function () {
        return B;
    },
    Qc: function () {
        return U;
    },
    c2: function () {
        return H;
    },
    kN: function () {
        return V;
    }
}),
    n(47120),
    n(773603),
    n(724458),
    n(653041);
var i = n(192379),
    l = n(348327),
    r = n.n(l),
    a = n(664751),
    o = n(512969),
    s = n(976649),
    c = n(731965),
    u = n(442837),
    d = n(224706),
    h = n(110924),
    p = n(410030),
    f = n(728345),
    m = n(812206),
    g = n(963202),
    C = n(564990),
    _ = n(353647),
    v = n(669764),
    x = n(210753),
    I = n(571457),
    b = n(859921),
    S = n(369566),
    E = n(314897),
    Z = n(480294),
    N = n(564334),
    y = n(302221),
    T = n(823379),
    j = n(956664),
    A = n(229893),
    P = n(229765),
    M = n(286083),
    R = n(207796),
    L = n(976757),
    w = n(981631),
    D = n(308083),
    O = n(128449);
function k() {
    var e;
    let { search: t } = (0, o.TH)(),
        { game: n } = a.parse(t.slice(1)),
        i = (0, R.GN)(R.t1, r());
    return null != n && (null === (e = i.games) || void 0 === e ? void 0 : e.length) === 0 && (i.games = [n]), i;
}
function G() {
    let e = (0, R.GN)((e) => e.setGame, s.X),
        t = (0, R.GN)((e) => e.setSelectedGames, s.X),
        n = (0, R.GN)((e) => e.selectedGames, s.X),
        l = k(),
        r = (0, g.An)({ location: 'clan_discovery' }),
        a = (0, g.iN)('clan_discovery'),
        { defaultGameId: o } = (0, g.nk)('clan_discovery'),
        c = null != r ? r : o,
        h = (function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                t = (0, u.e7)([A.Z], () => A.Z.hasLoadedStaticClanDiscovery());
            return (
                i.useEffect(() => {
                    e && !t && (0, P.XB)();
                }, [t, e]),
                t
            );
        })(!a),
        p = (0, u.e7)([A.Z], () => A.Z.isLoading());
    return (
        i.useEffect(() => {
            !(n.length > 0) && !a && (c === D.nJ ? (e(R.hz.VALORANT), t([c])) : c === D.xn ? (e(R.hz.GENSHIN), t([c])) : null == c && (e(R.hz.NONE), t([])));
        }, [e, t, c, n, a]),
        i.useEffect(() => {
            if (a) (0, P.Cg)(l);
            else {
                if (!h) return;
                (0, P.jc)(l);
            }
        }, [l, h, a]),
        i.useEffect(() => {
            d.Z.getDetectableGames();
        }, []),
        { loading: p }
    );
}
function U() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = k(),
        { savedGuildIds: l, loaded: r } = (0, u.cj)([A.Z], () => ({
            savedGuildIds: A.Z.getSavedGuildIds(),
            loaded: A.Z.hasLoadedStaticClanDiscovery()
        })),
        a = (0, g.iN)('clan_discovery'),
        o = (0, u.e7)([A.Z], () => A.Z.getSearchResult(n), [n]),
        s = (0, u.Wu)([A.Z], () => (t && null != l ? l.map((e) => A.Z.getGuildProfile(e)).filter(T.lm) : []), [t, l]),
        c = i.useMemo(() => {
            if ((0, L.Pw)(o)) {
                let t = o.items;
                return null != e ? t.slice(0, e) : t;
            }
            return [];
        }, [e, o]);
    return t
        ? {
              loaded: r || a,
              clans: s,
              searchCriteria: n,
              searchResult: {
                  items: s,
                  loadedAt: Date.now(),
                  status: 'loaded',
                  guildIds: l
              }
          }
        : {
              loaded: r || a,
              clans: c,
              searchCriteria: n,
              searchResult: o
          };
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { updatePaginationSettings: n, currentColumnCount: l, pageSize: a, chunkedPages: o, currentPage: c, fetchableGuildIds: d } = (0, M.a)(),
        p = c - 1,
        f = (0, R.GN)((e) => e.loadingGameApplication, s.X),
        m = (0, u.e7)([A.Z], () => A.Z.getSavedGuildIds()),
        g = k(),
        { searchResult: C, hasError: _ } = (0, u.cj)(
            [A.Z],
            () => ({
                searchResult: A.Z.getSearchResult(g),
                hasError: A.Z.hasError()
            }),
            [g]
        );
    i.useEffect(() => {
        n(e, M.$, { pageMemoryEnabled: !0 });
    }, [e, n, C]),
        !(function (e) {
            let [t, n] = i.useState(!1),
                l = i.useRef(),
                a = (0, u.Wu)([A.Z], () => e.filter((e) => A.Z.shouldFetchGuild(e)), [e]),
                o = (0, h.Z)(a),
                s = i.useRef(new AbortController()),
                c = i.useCallback(async (e) => {
                    n(!0), null != l.current && (s.current.abort(), (s.current = new AbortController())), (l.current = (0, P.$s)(e, s.current.signal)), await l.current, null !== l.current && (n(!1), (l.current = null));
                }, []);
            i.useEffect(() => {
                if (!(0 === a.length || r()(a, o))) c(a);
            }, [c, a, o, e]),
                i.useEffect(
                    () => () => {
                        l.current = null;
                    },
                    []
                ),
                t && a.length;
        })(d),
        i.useEffect(() => {
            (0, P.IS)();
        }, []);
    let v = i.useMemo(() => {
            var e;
            return null !== (e = t ? m : o[p]) && void 0 !== e ? e : [];
        }, [m, o, p, t]),
        x = (0, u.Wu)([A.Z], () => v.map((e) => A.Z.getGuildProfile(e)).filter(T.lm), [v]),
        I = v.length === x.length || t,
        b = x.length === a || I,
        S = (0, L.Pw)(C);
    return {
        loaded: e === l && S && b && !f,
        clans: x,
        searchCriteria: g,
        searchResult: C,
        hasError: _
    };
}
function H() {
    let { search: e } = (0, o.TH)(),
        t = (0, g.iN)('GlobalDiscovery'),
        { game: n } = t ? a.parse(e.slice(1)) : {},
        l = (0, u.e7)([m.Z], () => (null != n ? m.Z.getApplication(n) : null));
    i.useEffect(() => {
        null != n && (0, I.$X)({ gameId: n });
    }, [n]),
        i.useEffect(() => {
            if (null == n || !t) {
                R.GN.setState({ entrypointGameId: null });
                return;
            }
            (0, c.j)(() => {
                b.Z.setState({ selectedTab: O.vf.GUILDS }), R.GN.setState({ mode: R.v0.DISCOVERY });
            }),
                null == l
                    ? ((0, c.j)(() => {
                          R.GN.setState({ loadingGameApplication: !0 });
                      }),
                      f.ZP.fetchApplication(n)
                          .then(() => {
                              (0, c.j)(() => {
                                  R.GN.setState({ entrypointGameId: n });
                              });
                          })
                          .finally(() => {
                              (0, c.j)(() => {
                                  R.GN.setState({ loadingGameApplication: !1 });
                              });
                          }))
                    : (R.GN.getState().setSelectedGames([n]), R.GN.setState({ entrypointGameId: n }));
        }, [l, n, t]);
}
function V(e, t) {
    var n;
    let { data: l, isLoading: r } = (0, f.IX)(e),
        a = (0, u.e7)([v.Z], () => (null != e ? v.Z.getGame(e) : null)),
        { isFetching: o } = (0, x.$)(e, t),
        s = i.useMemo(() => {
            if (null == a) return '';
            let { artwork: e, screenshots: t } = a;
            if (e.length > 0) {
                let t = Math.floor(Math.random() * (e.length - 1));
                return e[t];
            }
            if (t.length > 0) {
                let e = Math.floor(Math.random() * (t.length - 1));
                return t[e];
            }
            return '';
        }, [a]);
    return {
        isLoading: r || o,
        backgroundImageUrl: s,
        gameName: null !== (n = null == a ? void 0 : a.name) && void 0 !== n ? n : null == l ? void 0 : l.name
    };
}
let F = N.Z.parseString('#E93446');
function W() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, u.e7)([E.default], () => E.default.getId()),
        l = (0, p.ZP)(),
        { recent: r, outbox: a } = (0, S.Z)(n),
        o = (0, u.e7)([_.Z], () => _.Z.hasInitialized),
        s = (0, u.e7)([Z.Z], () => Z.Z.hasConsented(w.pjP.PERSONALIZATION)),
        c = null == a && o,
        h = i.useMemo(() => (s ? r.reduce((t, n) => (t.length >= e || 'played_game_extra' !== n.extra.type || null == D.gQ.get(n.extra.application_id) ? t : t.concat(n.extra.application_id)), []) : []), [s, r, e]),
        f = i.useMemo(() => {
            let n = h.length > 0 ? h : D.Id;
            return t && n.length < e && n.push(...D.Id, ...D.J6.slice(0, e)), Array.from(new Set(n)).slice(0, e);
        }, [h, t, e]);
    i.useEffect(() => {
        c && s && (0, C.JX)(n);
    }, [n, c, s]),
        i.useEffect(() => {
            d.Z.getDetectableGamesSupplemental(f);
        }, [f]);
    let m = (0, u.Wu)([v.Z], () => v.Z.getGames(f), [f]),
        g = (0, u.e7)([v.Z], () => f.some((e) => v.Z.isFetching(e)), [f]),
        x = i.useMemo(() => {
            let e = {};
            for (let t of m) {
                if (null == t) continue;
                let { coverImageUrl: n, artwork: i, screenshots: l } = t;
                if (null != n) {
                    e[t.applicationId] = n;
                    continue;
                }
                if (i.length > 0) {
                    let n = Math.floor(Math.random() * (i.length - 1));
                    e[t.applicationId] = i[n];
                    continue;
                }
                if (l.length > 0) {
                    let n = Math.floor(Math.random() * (l.length - 1));
                    e[t.applicationId] = l[n];
                    continue;
                }
            }
            return e;
        }, [m]),
        [I, b] = i.useState({});
    return (
        i.useEffect(() => {
            Promise.all(
                Object.entries(x).map((e) => {
                    let [t, n] = e;
                    return null == n
                        ? Promise.resolve({
                              color: new N.Z(0, 255, 0, 1),
                              gameId: t
                          })
                        : (0, j.OF)(n)
                              .then((e) => {
                                  let [n, i, r] = e[0],
                                      a = new N.Z(n, i, r, 1),
                                      o = 'light' === l ? new N.Z(255, 255, 255, 1) : new N.Z(0, 0, 0, 1),
                                      s = (0, y.k8)({
                                          colors: [a, o],
                                          ratio: 5,
                                          saturationFactor: 1
                                      });
                                  return Promise.resolve({
                                      color: null != s ? s : new N.Z(0, 0, 255, 1),
                                      gameId: t
                                  });
                              })
                              .catch(() =>
                                  Promise.resolve({
                                      color: F,
                                      gameId: t
                                  })
                              );
                })
            ).then((e) =>
                b(
                    e.reduce((e, t) => {
                        let { color: n, gameId: i } = t;
                        return (e[i] = n), e;
                    }, {})
                )
            );
        }, [x, b, l]),
        {
            games: i.useMemo(
                () =>
                    f.map((e) => {
                        var t, n, i;
                        let l = x[e],
                            r = null !== (n = I[e]) && void 0 !== n ? n : F,
                            a = null !== (i = null === (t = m.find((t) => (null == t ? void 0 : t.applicationId) === e)) || void 0 === t ? void 0 : t.name) && void 0 !== i ? i : '';
                        return {
                            id: e,
                            name: a,
                            backgroundImageUrl: l,
                            primaryColor: r
                        };
                    }),
                [f, m, x, I]
            ),
            treatment: h.length > 0 && s ? D.O7.GAME_SPECIFIC : D.O7.GENERIC,
            hasFetchedGames: !c && !g
        }
    );
}
