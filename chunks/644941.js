t.r(n), t(47120);
var a = t(735250),
    r = t(470079),
    s = t(120356),
    i = t.n(s),
    o = t(913527),
    l = t.n(o),
    c = t(705512),
    d = t(442837),
    u = t(433517),
    _ = t(481060),
    E = t(560361),
    m = t(835473),
    I = t(168551),
    A = t(485267),
    p = t(26033),
    g = t(561308),
    f = t(669764),
    T = t(706454),
    O = t(768581),
    R = t(814225),
    N = t(709054),
    h = t(810568),
    P = t(998058),
    C = t(839392),
    L = t(96856),
    M = t(567409),
    S = t(774073),
    x = t(124030),
    v = t(426482),
    G = t(715318),
    Z = t(38516),
    b = t(891949),
    j = t(252547),
    D = t(484527),
    y = t(131033),
    w = t(296768),
    U = t(978313),
    k = t(206583),
    H = t(689938),
    K = t(51527);
let F = 'GameProfileModal',
    B = () =>
        (0, a.jsxs)('div', {
            className: K.gameBadge,
            children: [
                (0, a.jsx)(_.FireIcon, { size: 'xxs' }),
                (0, a.jsx)(_.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: H.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
                })
            ]
        });
function Q(e) {
    var n;
    let { detectedGame: s, application: o, entries: d, viewId: E, trackAction: m } = e,
        [I, A] = r.useState(() => {
            var e;
            return null === (e = u.K.get(F)) || void 0 === e ? void 0 : e[o.id];
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
        M = l()().diff(l()(C), 'days') <= k.G,
        S = d.some((e) => (0, g.ig)(e) === c.o.GLOBAL),
        Z = null !== (n = s.name) && void 0 !== n ? n : null == o ? void 0 : o.name,
        b = r.useCallback(
            () => () => {
                var e;
                let n = null !== (e = u.K.get(F)) && void 0 !== e ? e : {};
                (n[o.id] = !n[o.id]),
                    u.K.set(F, n),
                    m(n[o.id] ? h.as.FollowGame : h.as.UnfollowGame),
                    n[o.id] &&
                        (0, x.L)() &&
                        (0, _.openModalLazy)(async () => {
                            let { default: e } = await t.e('86564').then(t.bind(t, 641758));
                            return (n) =>
                                (0, a.jsx)(e, {
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
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)('div', {
                className: i()(K.gameArtHero),
                style: { backgroundImage: 'url("'.concat(T, '")') }
            }),
            (0, a.jsxs)('div', {
                className: i()(K.content, K.column, K.gapLg, K.headerInfo),
                children: [
                    (0, a.jsxs)('div', {
                        className: K.coverArtRow,
                        children: [
                            (0, a.jsx)('div', {
                                className: K.logoWrapper,
                                children: (0, a.jsx)(v.C, {
                                    game: s,
                                    application: o,
                                    className: K.logo,
                                    size: v.Z.LARGE
                                })
                            }),
                            (0, a.jsx)(G.Z, {
                                applicationId: o.id,
                                viewId: E,
                                className: K.overflowMenu
                            })
                        ]
                    }),
                    (0, a.jsxs)('div', {
                        className: i()(K.row, K.gapSm, K.gameDetails),
                        children: [
                            (0, a.jsxs)('div', {
                                children: [
                                    (0, a.jsx)(_.Heading, {
                                        variant: 'heading-xl/bold',
                                        children: Z
                                    }),
                                    (0, a.jsxs)('div', {
                                        className: i()(K.row, K.gapSm),
                                        children: [
                                            null != P &&
                                                (0, a.jsx)('img', {
                                                    src: P,
                                                    height: 16,
                                                    alt: H.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({ game: Z })
                                                }),
                                            (0, a.jsx)(_.Text, {
                                                variant: 'text-sm/semibold',
                                                color: 'text-muted',
                                                children: f
                                            }),
                                            M &&
                                                (0, a.jsx)(_.Text, {
                                                    variant: 'eyebrow',
                                                    className: K.newBadge,
                                                    children: H.Z.Messages.NEW
                                                }),
                                            S &&
                                                (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        (0, a.jsx)(_.Text, {
                                                            variant: 'text-sm/medium',
                                                            children: ' \xB7 '
                                                        }),
                                                        (0, a.jsx)(B, {})
                                                    ]
                                                })
                                        ]
                                    })
                                ]
                            }),
                            (0, a.jsx)('div', {
                                children:
                                    p &&
                                    (0, a.jsx)(_.Tooltip, {
                                        text: I ? H.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : H.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                                        children: (e) =>
                                            (0, a.jsxs)(_.Button, {
                                                ...e,
                                                innerClassName: K.followButton,
                                                color: I ? _.Button.Colors.PRIMARY : _.Button.Colors.BRAND,
                                                onClick: b,
                                                children: [I ? (0, a.jsx)(_.BellSlashIcon, { color: 'white' }) : (0, a.jsx)(_.BellIcon, { color: 'white' }), I ? H.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : H.Z.Messages.FOLLOW]
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
    let { detectedGame: t, application: r, entries: s, officialGuildInvite: i, similarGames: o, similarGamesError: l, onClose: c, viewId: d, trackAction: u } = e;
    return (0, a.jsxs)('div', {
        className: K.sections,
        children: [
            (0, a.jsx)(j.Z, {
                entries: s,
                viewId: d,
                officialGuildId: null == i ? void 0 : null === (n = i.guild) || void 0 === n ? void 0 : n.id,
                onClose: c
            }),
            (0, a.jsx)(b.Z, {
                detectedGame: t,
                trackAction: u
            }),
            (0, a.jsx)(w.Z, {
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
    let { detectedGame: n, setOfficialGuildInvite: t, trackAction: r } = e;
    return (0, a.jsxs)('div', {
        className: i()(K.sidebar, K.column, K.gapLg),
        children: [
            (0, a.jsx)(_.Heading, {
                variant: 'heading-md/bold',
                children: H.Z.Messages.ABOUT
            }),
            (0, a.jsxs)('div', {
                className: K.sections,
                children: [
                    (0, a.jsx)(U.Z, {
                        detectedGame: n,
                        trackAction: r
                    }),
                    (0, a.jsx)(D.Z, {
                        detectedGame: n,
                        trackClick: r,
                        onInviteResolved: t
                    }),
                    (0, a.jsx)(Z.Z, {
                        detectedGame: n,
                        trackClick: r
                    }),
                    (0, a.jsx)(y.Z, { detectedGame: n })
                ]
            })
        ]
    });
}
let z = (e) => e.filter(S.z6).slice(0, 5);
n.default = (e) => {
    var n;
    let { applicationId: t, source: s, sourceUserId: o, transitionState: l, onClose: c } = e,
        { clientThemesClassName: u } = (0, I.ZP)(),
        O = (0, d.e7)([T.default], () => T.default.locale),
        R = r.useMemo(() => (0, h.fP)(), []),
        N = (0, d.Wu)([C.Z], () => {
            var e;
            return (null !== (e = C.Z.getSimilarGames(t)) && void 0 !== e ? e : []).slice(0, 25);
        }),
        [L, S] = r.useState(null),
        { entries: x } = (0, M.Z)(),
        v = r.useMemo(() => {
            var e;
            return null !== (e = null == x ? void 0 : x.filter((e) => (0, p.dX)(e) && e.extra.application_id === t)) && void 0 !== e ? e : [];
        }, [x, t]),
        [G, Z] = r.useState(null),
        b = (0, m.q)(t),
        j = (0, d.e7)([f.Z], () => f.Z.getGame(t)),
        D = null !== (n = null == j ? void 0 : j.name) && void 0 !== n ? n : null == b ? void 0 : b.name,
        y = (e, n) => {
            var a;
            (0, h.UE)({
                gameName: null != D ? D : '',
                applicationId: t,
                action: e,
                similarGameId: n,
                viewId: R,
                officialGuildId: null == G ? void 0 : null === (a = G.guild) || void 0 === a ? void 0 : a.id
            });
        };
    return (r.useEffect(() => {
        (0, h.IS)({
            source: s,
            viewId: R,
            applicationId: t,
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
                S(null);
                try {
                    await (0, P.i)(t);
                } catch (e) {
                    S(e);
                }
            }
        })();
    }, [t, N]),
    (0, E.Z)(() => {
        var e;
        let n = Date.now(),
            a = v.map((e) => {
                let t = (0, g.kr)(e) ? (0, g.T_)(e, n) : (0, g.GL)(e, O);
                return JSON.stringify({
                    item_id: e.id,
                    trait: e.traits,
                    time_played: t
                });
            });
        (0, h.wz)({
            viewId: R,
            applicationId: t,
            gameName: null != D ? D : '',
            playedFriendIds: v.map((e) => e.author_id),
            playedFriendsData: a,
            similarGames: z(N),
            officialGuildId: null == G ? void 0 : null === (e = G.guild) || void 0 === e ? void 0 : e.id
        });
    }),
    null == j || null == b)
        ? null
        : (0, a.jsx)(_.ModalRoot, {
              transitionState: l,
              size: _.ModalSize.DYNAMIC,
              className: i()(u, K.gameProfileModal),
              children: (0, a.jsxs)(_.Scroller, {
                  className: K.scrollable,
                  orientation: 'auto',
                  children: [
                      (0, a.jsx)(Q, {
                          detectedGame: j,
                          application: b,
                          entries: v,
                          viewId: R,
                          trackAction: y
                      }),
                      (0, a.jsx)(_.HeadingLevel, {
                          children: (0, a.jsxs)('div', {
                              className: i()(K.content, K.mainContent),
                              children: [
                                  (0, a.jsx)(Y, {
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
                                  (0, a.jsx)(W, {
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
