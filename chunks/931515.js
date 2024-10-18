n.d(t, {
    I9: function () {
        return Y;
    },
    LE: function () {
        return k;
    },
    ML: function () {
        return F;
    },
    Qc: function () {
        return G;
    },
    c2: function () {
        return w;
    },
    kN: function () {
        return V;
    }
}),
    n(47120),
    n(773603),
    n(724458),
    n(653041);
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
    E = n(410030),
    I = n(728345),
    m = n(812206),
    T = n(963202),
    f = n(564990),
    h = n(353647),
    N = n(669764),
    p = n(210753),
    C = n(571457),
    g = n(859921),
    S = n(369566),
    A = n(314897),
    x = n(480294),
    R = n(564334),
    v = n(302221),
    O = n(823379),
    M = n(956664),
    L = n(229893),
    Z = n(229765),
    b = n(286083),
    P = n(207796),
    D = n(976757),
    j = n(981631),
    U = n(308083),
    y = n(128449);
function B() {
    var e;
    let { search: t } = (0, l.TH)(),
        { game: n } = r.parse(t.slice(1)),
        i = (0, P.GN)(P.t1, s());
    return null != n && (null === (e = i.games) || void 0 === e ? void 0 : e.length) === 0 && (i.games = [n]), i;
}
function k() {
    let e = (0, P.GN)((e) => e.setGame, o.Z),
        t = (0, P.GN)((e) => e.setSelectedGames, o.Z),
        n = (0, P.GN)((e) => e.selectedGames, o.Z),
        a = B(),
        s = (0, T.An)({ location: 'clan_discovery' }),
        r = (0, T.iN)('clan_discovery'),
        { defaultGameId: l } = (0, T.nk)('clan_discovery'),
        c = null != s ? s : l,
        _ = (function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                t = (0, u.e7)([L.Z], () => L.Z.hasLoadedStaticClanDiscovery());
            return (
                i.useEffect(() => {
                    e && !t && (0, Z.XB)();
                }, [t, e]),
                t
            );
        })(!r),
        E = (0, u.e7)([L.Z], () => L.Z.isLoading());
    return (
        i.useEffect(() => {
            !(n.length > 0) && !r && (c === U.nJ ? (e(P.hz.VALORANT), t([c])) : c === U.xn ? (e(P.hz.GENSHIN), t([c])) : null == c && (e(P.hz.NONE), t([])));
        }, [e, t, c, n, r]),
        i.useEffect(() => {
            if (r) (0, Z.Cg)(a);
            else {
                if (!_) return;
                (0, Z.jc)(a);
            }
        }, [a, _, r]),
        i.useEffect(() => {
            d.Z.getDetectableGames();
        }, []),
        { loading: E }
    );
}
function G() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = B(),
        { savedGuildIds: a, loaded: s } = (0, u.cj)([L.Z], () => ({
            savedGuildIds: L.Z.getSavedGuildIds(),
            loaded: L.Z.hasLoadedStaticClanDiscovery()
        })),
        r = (0, T.iN)('clan_discovery'),
        l = (0, u.e7)([L.Z], () => L.Z.getSearchResult(n), [n]),
        o = (0, u.Wu)([L.Z], () => (t && null != a ? a.map((e) => L.Z.getGuildProfile(e)).filter(O.lm) : []), [t, a]),
        c = i.useMemo(() => {
            if ((0, D.Pw)(l)) {
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
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { updatePaginationSettings: n, currentColumnCount: a, pageSize: r, chunkedPages: l, currentPage: c, fetchableGuildIds: d } = (0, b.a)(),
        E = c - 1,
        I = (0, P.GN)((e) => e.loadingGameApplication, o.Z),
        m = (0, u.e7)([L.Z], () => L.Z.getSavedGuildIds()),
        T = B(),
        { searchResult: f, hasError: h } = (0, u.cj)(
            [L.Z],
            () => ({
                searchResult: L.Z.getSearchResult(T),
                hasError: L.Z.hasError()
            }),
            [T]
        );
    i.useEffect(() => {
        n(e, b.$, { pageMemoryEnabled: !0 });
    }, [e, n, f]),
        !(function (e) {
            let [t, n] = i.useState(!1),
                a = i.useRef(),
                r = (0, u.Wu)([L.Z], () => e.filter((e) => L.Z.shouldFetchGuild(e)), [e]),
                l = (0, _.Z)(r),
                o = i.useRef(new AbortController()),
                c = i.useCallback(async (e) => {
                    n(!0), null != a.current && (o.current.abort(), (o.current = new AbortController())), (a.current = (0, Z.$s)(e, o.current.signal)), await a.current, null !== a.current && (n(!1), (a.current = null));
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
            (0, Z.IS)();
        }, []);
    let N = i.useMemo(() => {
            var e;
            return null !== (e = t ? m : l[E]) && void 0 !== e ? e : [];
        }, [m, l, E, t]),
        p = (0, u.Wu)([L.Z], () => N.map((e) => L.Z.getGuildProfile(e)).filter(O.lm), [N]),
        C = N.length === p.length || t,
        g = p.length === r || C,
        S = (0, D.Pw)(f);
    return {
        loaded: e === a && S && g && !I,
        clans: p,
        searchCriteria: T,
        searchResult: f,
        hasError: h
    };
}
function w() {
    let { search: e } = (0, l.TH)(),
        t = (0, T.iN)('GlobalDiscovery'),
        { game: n } = t ? r.parse(e.slice(1)) : {},
        a = (0, u.e7)([m.Z], () => (null != n ? m.Z.getApplication(n) : null));
    i.useEffect(() => {
        null != n && (0, C.$X)({ gameId: n });
    }, [n]),
        i.useEffect(() => {
            if (null == n || !t) {
                P.GN.setState({ entrypointGameId: null });
                return;
            }
            (0, c.j)(() => {
                P.GN.setState({ mode: P.v0.DISCOVERY }), (0, g.jY)({ selectedTab: y.vf.GUILDS });
            }),
                null == a
                    ? ((0, c.j)(() => {
                          P.GN.setState({ loadingGameApplication: !0 });
                      }),
                      I.ZP.fetchApplication(n)
                          .then(() => {
                              (0, c.j)(() => {
                                  P.GN.setState({ entrypointGameId: n });
                              });
                          })
                          .finally(() => {
                              (0, c.j)(() => {
                                  P.GN.setState({ loadingGameApplication: !1 });
                              });
                          }))
                    : (P.GN.getState().setSelectedGames([n]), P.GN.setState({ entrypointGameId: n }));
        }, [a, n, t]);
}
function V(e, t) {
    var n;
    let { data: a, isLoading: s } = (0, I.IX)(e),
        r = (0, u.e7)([N.Z], () => (null != e ? N.Z.getGame(e) : null)),
        { isFetching: l } = (0, p.$)(e, t),
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
let H = R.Z.parseString('#E93446');
function Y() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, u.e7)([A.default], () => A.default.getId()),
        a = (0, E.ZP)(),
        { recent: s, outbox: r } = (0, S.Z)(n),
        l = (0, u.e7)([h.Z], () => h.Z.hasInitialized),
        o = (0, u.e7)([x.Z], () => x.Z.hasConsented(j.pjP.PERSONALIZATION)),
        c = null == r && l,
        _ = i.useMemo(() => (o ? s.reduce((t, n) => (t.length >= e || 'played_game_extra' !== n.extra.type || null == U.gQ.get(n.extra.application_id) ? t : t.concat(n.extra.application_id)), []) : []), [o, s, e]),
        I = i.useMemo(() => {
            let n = _.length > 0 ? _ : U.Id;
            return t && n.length < e && n.push(...U.Id, ...U.J6.slice(0, e)), Array.from(new Set(n)).slice(0, e);
        }, [_, t, e]);
    i.useEffect(() => {
        c && o && (0, f.JX)(n);
    }, [n, c, o]),
        i.useEffect(() => {
            d.Z.getDetectableGamesSupplemental(I);
        }, [I]);
    let m = (0, u.Wu)([N.Z], () => N.Z.getGames(I), [I]),
        T = (0, u.e7)([N.Z], () => I.some((e) => N.Z.isFetching(e)), [I]),
        p = i.useMemo(() => {
            let e = {};
            for (let t of m) {
                if (null == t) continue;
                let { coverImageUrl: n, artwork: i, screenshots: a } = t;
                if (null != n) {
                    e[t.applicationId] = n;
                    continue;
                }
                if (i.length > 0) {
                    let n = Math.floor(Math.random() * (i.length - 1));
                    e[t.applicationId] = i[n];
                    continue;
                }
                if (a.length > 0) {
                    let n = Math.floor(Math.random() * (a.length - 1));
                    e[t.applicationId] = a[n];
                    continue;
                }
            }
            return e;
        }, [m]),
        [C, g] = i.useState({});
    return (
        i.useEffect(() => {
            Promise.all(
                Object.entries(p).map((e) => {
                    let [t, n] = e;
                    return null == n
                        ? Promise.resolve({
                              color: new R.Z(0, 255, 0, 1),
                              gameId: t
                          })
                        : (0, M.OF)(n)
                              .then((e) => {
                                  let [n, i, s] = e[0],
                                      r = new R.Z(n, i, s, 1),
                                      l = 'light' === a ? new R.Z(255, 255, 255, 1) : new R.Z(0, 0, 0, 1),
                                      o = (0, v.k8)({
                                          colors: [r, l],
                                          ratio: 5,
                                          saturationFactor: 1
                                      });
                                  return Promise.resolve({
                                      color: null != o ? o : new R.Z(0, 0, 255, 1),
                                      gameId: t
                                  });
                              })
                              .catch(() =>
                                  Promise.resolve({
                                      color: H,
                                      gameId: t
                                  })
                              );
                })
            ).then((e) =>
                g(
                    e.reduce((e, t) => {
                        let { color: n, gameId: i } = t;
                        return (e[i] = n), e;
                    }, {})
                )
            );
        }, [p, g, a]),
        {
            games: i.useMemo(
                () =>
                    I.map((e) => {
                        var t, n, i;
                        let a = p[e],
                            s = null !== (n = C[e]) && void 0 !== n ? n : H,
                            r = null !== (i = null === (t = m.find((t) => (null == t ? void 0 : t.applicationId) === e)) || void 0 === t ? void 0 : t.name) && void 0 !== i ? i : '';
                        return {
                            id: e,
                            name: r,
                            backgroundImageUrl: a,
                            primaryColor: s
                        };
                    }),
                [I, m, p, C]
            ),
            treatment: _.length > 0 && o ? U.O7.GAME_SPECIFIC : U.O7.GENERIC,
            hasFetchedGames: !c && !T
        }
    );
}
