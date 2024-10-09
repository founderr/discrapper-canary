a.r(n), a(47120);
var t = a(735250),
    r = a(470079),
    s = a(120356),
    i = a.n(s),
    o = a(913527),
    l = a.n(o),
    c = a(705512),
    d = a(442837),
    u = a(433517),
    _ = a(481060),
    E = a(560361),
    m = a(835473),
    I = a(168551),
    A = a(485267),
    p = a(26033),
    g = a(561308),
    f = a(669764),
    T = a(706454),
    O = a(768581),
    R = a(814225),
    N = a(709054),
    h = a(810568),
    P = a(998058),
    C = a(839392),
    L = a(96856),
    M = a(567409),
    x = a(774073),
    S = a(124030),
    v = a(426482),
    G = a(715318),
    Z = a(38516),
    b = a(891949),
    j = a(252547),
    D = a(484527),
    y = a(131033),
    w = a(296768),
    k = a(978313),
    U = a(206583),
    K = a(689938),
    F = a(51527);
let H = 'GameProfileModal',
    B = () =>
        (0, t.jsxs)('div', {
            className: F.gameBadge,
            children: [
                (0, t.jsx)(_.FireIcon, { size: 'xxs' }),
                (0, t.jsx)(_.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: K.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
                })
            ]
        });
function Q(e) {
    var n;
    let { detectedGame: s, application: o, entries: d, viewId: E, trackAction: m } = e,
        [I, A] = r.useState(() => {
            var e;
            return null === (e = u.K.get(H)) || void 0 === e ? void 0 : e[o.id];
        }),
        p = (0, L.p)('GameProfileModal'),
        f = r.useMemo(() => (null == s ? void 0 : s.genres.map(R.P3).join(', ')), [s]),
        T = r.useMemo(() => {
            if (null == s) return '';
            let { artwork: e, screenshots: n } = s;
            if (e.length > 0) {
                let n = Math.floor(Math.random() * (e.length - 1));
                return e[n];
            }
            if (n.length > 0) {
                let e = Math.floor(Math.random() * (n.length - 1));
                return n[e];
            }
            return '';
        }, [s]),
        P = null == o ? void 0 : o.getIconURL(160, O.$k ? 'webp' : 'png'),
        C = N.default.extractTimestamp(o.id),
        M = l()().diff(l()(C), 'days') <= U.G,
        x = d.some((e) => (0, g.ig)(e) === c.o.GLOBAL),
        Z = null !== (n = s.name) && void 0 !== n ? n : null == o ? void 0 : o.name,
        b = r.useCallback(
            () => () => {
                var e;
                let n = null !== (e = u.K.get(H)) && void 0 !== e ? e : {};
                (n[o.id] = !n[o.id]),
                    u.K.set(H, n),
                    m(n[o.id] ? h.as.FollowGame : h.as.UnfollowGame),
                    n[o.id] &&
                        (0, S.L)() &&
                        (0, _.openModalLazy)(async () => {
                            let { default: e } = await a.e('86564').then(a.bind(a, 641758));
                            return (n) =>
                                (0, t.jsx)(e, {
                                    ...n,
                                    applicationId: o.id,
                                    background: T,
                                    viewId: E
                                });
                        }),
                    A(n[o.id]);
            },
            [o.id, T, m, E]
        );
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)('div', {
                className: i()(F.gameArtHero),
                style: { backgroundImage: 'url("'.concat(T, '")') }
            }),
            (0, t.jsxs)('div', {
                className: i()(F.content, F.column, F.gapLg, F.headerInfo),
                children: [
                    (0, t.jsxs)('div', {
                        className: F.coverArtRow,
                        children: [
                            (0, t.jsx)('div', {
                                className: F.logoWrapper,
                                children: (0, t.jsx)(v.C, {
                                    game: s,
                                    application: o,
                                    className: F.logo,
                                    size: v.Z.LARGE
                                })
                            }),
                            (0, t.jsx)(G.Z, {
                                applicationId: o.id,
                                viewId: E,
                                className: F.overflowMenu
                            })
                        ]
                    }),
                    (0, t.jsxs)('div', {
                        className: i()(F.row, F.gapSm, F.gameDetails),
                        children: [
                            (0, t.jsxs)('div', {
                                children: [
                                    (0, t.jsx)(_.Heading, {
                                        variant: 'heading-xl/bold',
                                        children: Z
                                    }),
                                    (0, t.jsxs)('div', {
                                        className: i()(F.row, F.gapSm),
                                        children: [
                                            null != P &&
                                                (0, t.jsx)('img', {
                                                    src: P,
                                                    height: 16,
                                                    alt: K.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({ game: Z })
                                                }),
                                            (0, t.jsx)(_.Text, {
                                                variant: 'text-sm/semibold',
                                                color: 'text-muted',
                                                children: f
                                            }),
                                            M &&
                                                (0, t.jsx)(_.Text, {
                                                    variant: 'eyebrow',
                                                    className: F.newBadge,
                                                    children: K.Z.Messages.NEW
                                                }),
                                            x &&
                                                (0, t.jsxs)(t.Fragment, {
                                                    children: [
                                                        (0, t.jsx)(_.Text, {
                                                            variant: 'text-sm/medium',
                                                            children: ' \xB7 '
                                                        }),
                                                        (0, t.jsx)(B, {})
                                                    ]
                                                })
                                        ]
                                    })
                                ]
                            }),
                            (0, t.jsx)('div', {
                                children:
                                    p &&
                                    (0, t.jsx)(_.Tooltip, {
                                        text: I ? K.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : K.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                                        children: (e) =>
                                            (0, t.jsxs)(_.Button, {
                                                ...e,
                                                innerClassName: F.followButton,
                                                color: I ? _.Button.Colors.PRIMARY : _.Button.Colors.BRAND,
                                                onClick: b,
                                                children: [I ? (0, t.jsx)(_.BellSlashIcon, { color: 'white' }) : (0, t.jsx)(_.BellIcon, { color: 'white' }), I ? K.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : K.Z.Messages.FOLLOW]
                                            })
                                    })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function Y(e) {
    var n;
    let { detectedGame: a, application: r, entries: s, officialGuildInvite: i, similarGames: o, similarGamesError: l, onClose: c, viewId: d, trackAction: u } = e;
    return (0, t.jsxs)('div', {
        className: F.sections,
        children: [
            (0, t.jsx)(j.Z, {
                entries: s,
                viewId: d,
                officialGuildId: null == i ? void 0 : null === (n = i.guild) || void 0 === n ? void 0 : n.id,
                onClose: c
            }),
            (0, t.jsx)(b.Z, {
                detectedGame: a,
                trackAction: u
            }),
            (0, t.jsx)(w.Z, {
                applicationId: r.id,
                onClose: c,
                trackAction: u,
                similarGames: o,
                similarGamesError: l
            })
        ]
    });
}
function W(e) {
    let { detectedGame: n, setOfficialGuildInvite: a, trackAction: r } = e;
    return (0, t.jsxs)('div', {
        className: i()(F.sidebar, F.column, F.gapLg),
        children: [
            (0, t.jsx)(_.Heading, {
                variant: 'heading-md/bold',
                children: K.Z.Messages.ABOUT
            }),
            (0, t.jsxs)('div', {
                className: F.sections,
                children: [
                    (0, t.jsx)(k.Z, {
                        detectedGame: n,
                        trackAction: r
                    }),
                    (0, t.jsx)(D.Z, {
                        detectedGame: n,
                        trackClick: r,
                        onInviteResolved: a
                    }),
                    (0, t.jsx)(Z.Z, {
                        detectedGame: n,
                        trackClick: r
                    }),
                    (0, t.jsx)(y.Z, { detectedGame: n })
                ]
            })
        ]
    });
}
let z = (e) => e.filter(x.z6).slice(0, 5);
n.default = (e) => {
    var n;
    let { applicationId: a, source: s, sourceUserId: o, transitionState: l, onClose: c } = e,
        { clientThemesClassName: u } = (0, I.ZP)(),
        O = (0, d.e7)([T.default], () => T.default.locale),
        R = r.useMemo(() => (0, h.fP)(), []),
        N = (0, d.Wu)([C.Z], () => {
            var e;
            return (null !== (e = C.Z.getSimilarGames(a)) && void 0 !== e ? e : []).slice(0, 25);
        }),
        [L, x] = r.useState(null),
        { entries: S } = (0, M.Z)(),
        v = r.useMemo(() => {
            var e;
            return null !== (e = null == S ? void 0 : S.filter((e) => (0, p.dX)(e) && e.extra.application_id === a)) && void 0 !== e ? e : [];
        }, [S, a]),
        [G, Z] = r.useState(null),
        b = (0, m.q)(a),
        j = (0, d.e7)([f.Z], () => f.Z.getGame(a)),
        D = null !== (n = null == j ? void 0 : j.name) && void 0 !== n ? n : null == b ? void 0 : b.name,
        y = (e, n) => {
            var t;
            (0, h.UE)({
                gameName: null != D ? D : '',
                applicationId: a,
                action: e,
                similarGameId: n,
                viewId: R,
                officialGuildId: null == G ? void 0 : null === (t = G.guild) || void 0 === t ? void 0 : t.id
            });
        };
    return (r.useEffect(() => {
        (0, h.IS)({
            source: s,
            viewId: R,
            applicationId: a,
            gameName: null != D ? D : '',
            authorId: o
        });
    }, []),
    r.useEffect(() => {
        (0, A.Jn)();
    }, []),
    r.useEffect(() => {
        (async () => {
            if (0 === N.length) {
                x(null);
                try {
                    await (0, P.i)(a);
                } catch (e) {
                    x(e);
                }
            }
        })();
    }, [a, N]),
    (0, E.Z)(() => {
        var e;
        let n = Date.now(),
            t = v.map((e) => {
                let a = (0, g.kr)(e) ? (0, g.T_)(e, n) : (0, g.GL)(e, O);
                return JSON.stringify({
                    item_id: e.id,
                    trait: e.traits,
                    time_played: a
                });
            });
        (0, h.wz)({
            viewId: R,
            applicationId: a,
            gameName: null != D ? D : '',
            playedFriendIds: v.map((e) => e.author_id),
            playedFriendsData: t,
            similarGames: z(N),
            officialGuildId: null == G ? void 0 : null === (e = G.guild) || void 0 === e ? void 0 : e.id
        });
    }),
    null == j || null == b)
        ? null
        : (0, t.jsx)(_.ModalRoot, {
              transitionState: l,
              size: _.ModalSize.DYNAMIC,
              className: i()(u, F.gameProfileModal),
              children: (0, t.jsxs)(_.Scroller, {
                  orientation: 'auto',
                  children: [
                      (0, t.jsx)(Q, {
                          detectedGame: j,
                          application: b,
                          entries: v,
                          viewId: R,
                          trackAction: y
                      }),
                      (0, t.jsx)(_.HeadingLevel, {
                          children: (0, t.jsxs)('div', {
                              className: i()(F.content, F.mainContent),
                              children: [
                                  (0, t.jsx)(Y, {
                                      detectedGame: j,
                                      application: b,
                                      entries: v,
                                      officialGuildInvite: G,
                                      similarGames: N,
                                      similarGamesError: L,
                                      onClose: c,
                                      viewId: R,
                                      trackAction: y
                                  }),
                                  (0, t.jsx)(W, {
                                      detectedGame: j,
                                      setOfficialGuildInvite: Z,
                                      trackAction: y
                                  })
                              ]
                          })
                      })
                  ]
              })
          });
};
