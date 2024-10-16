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
    E = a(224706),
    m = a(560361),
    I = a(835473),
    A = a(168551),
    p = a(485267),
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
    S = a(774073),
    x = a(124030),
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
    F = a(689938),
    K = a(51527);
let H = 'GameProfileModal',
    B = () =>
        (0, t.jsxs)('div', {
            className: K.gameBadge,
            children: [
                (0, t.jsx)(_.FireIcon, { size: 'xxs' }),
                (0, t.jsx)(_.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: F.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
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
        S = d.some((e) => (0, g.ig)(e) === c.o.GLOBAL),
        Z = null !== (n = s.name) && void 0 !== n ? n : null == o ? void 0 : o.name,
        b = r.useCallback(
            () => () => {
                var e;
                let n = null !== (e = u.K.get(H)) && void 0 !== e ? e : {};
                (n[o.id] = !n[o.id]),
                    u.K.set(H, n),
                    m(n[o.id] ? h.as.FollowGame : h.as.UnfollowGame),
                    n[o.id] &&
                        (0, x.L)() &&
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
                className: i()(K.gameArtHero),
                style: { backgroundImage: 'url("'.concat(T, '")') }
            }),
            (0, t.jsxs)('div', {
                className: i()(K.content, K.column, K.gapLg, K.headerInfo),
                children: [
                    (0, t.jsxs)('div', {
                        className: K.coverArtRow,
                        children: [
                            (0, t.jsx)('div', {
                                className: K.logoWrapper,
                                children: (0, t.jsx)(v.C, {
                                    game: s,
                                    application: o,
                                    className: K.logo,
                                    size: v.Z.LARGE
                                })
                            }),
                            (0, t.jsx)(G.Z, {
                                applicationId: o.id,
                                viewId: E,
                                className: K.overflowMenu
                            })
                        ]
                    }),
                    (0, t.jsxs)('div', {
                        className: i()(K.row, K.gapSm, K.gameDetails),
                        children: [
                            (0, t.jsxs)('div', {
                                children: [
                                    (0, t.jsx)(_.Heading, {
                                        variant: 'heading-xl/bold',
                                        children: Z
                                    }),
                                    (0, t.jsxs)('div', {
                                        className: i()(K.row, K.gapSm),
                                        children: [
                                            null != P &&
                                                (0, t.jsx)('img', {
                                                    className: K.gameIcon,
                                                    src: P,
                                                    height: 16,
                                                    alt: F.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({ game: Z })
                                                }),
                                            (0, t.jsx)(_.Text, {
                                                variant: 'text-sm/semibold',
                                                color: 'text-muted',
                                                children: f
                                            }),
                                            M &&
                                                (0, t.jsx)(_.Text, {
                                                    variant: 'eyebrow',
                                                    className: K.newBadge,
                                                    children: F.Z.Messages.NEW
                                                }),
                                            S &&
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
                                        text: I ? F.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : F.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                                        children: (e) =>
                                            (0, t.jsxs)(_.Button, {
                                                ...e,
                                                innerClassName: K.followButton,
                                                color: I ? _.Button.Colors.PRIMARY : _.Button.Colors.BRAND,
                                                onClick: b,
                                                children: [I ? (0, t.jsx)(_.BellSlashIcon, { color: 'white' }) : (0, t.jsx)(_.BellIcon, { color: 'white' }), I ? F.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : F.Z.Messages.FOLLOW]
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
        className: K.sections,
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
        className: i()(K.sidebar, K.column, K.gapLg),
        children: [
            (0, t.jsx)(_.Heading, {
                variant: 'heading-md/bold',
                children: F.Z.Messages.ABOUT
            }),
            (0, t.jsxs)('div', {
                className: K.sections,
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
let z = (e) => e.filter(S.z6).slice(0, 5);
n.default = (e) => {
    var n;
    let { applicationId: a, source: s, sourceUserId: o, transitionState: l, onClose: c } = e,
        { clientThemesClassName: u } = (0, A.ZP)(),
        O = (0, d.e7)([T.default], () => T.default.locale),
        R = r.useMemo(() => (0, h.fP)(), []),
        N = (0, d.Wu)([C.Z], () => {
            var e;
            return (null !== (e = C.Z.getSimilarGames(a)) && void 0 !== e ? e : []).slice(0, 25);
        }),
        [L, S] = r.useState(null),
        x = (0, M.Ns)(a),
        [v, G] = r.useState(null),
        Z = (0, I.q)(a),
        b = (0, d.e7)([f.Z], () => f.Z.getGame(a)),
        j = null !== (n = null == b ? void 0 : b.name) && void 0 !== n ? n : null == Z ? void 0 : Z.name,
        D = (e, n) => {
            var t;
            (0, h.UE)({
                gameName: null != j ? j : '',
                applicationId: a,
                action: e,
                similarGameId: n,
                viewId: R,
                officialGuildId: null == v ? void 0 : null === (t = v.guild) || void 0 === t ? void 0 : t.id
            });
        };
    return (r.useEffect(() => {
        (0, h.IS)({
            source: s,
            viewId: R,
            applicationId: a,
            gameName: null != j ? j : '',
            authorId: o
        });
    }, []),
    r.useEffect(() => {
        (0, p.Jn)();
    }, []),
    (0, I.Z)(N),
    r.useEffect(() => {
        !O.startsWith('en') && (null == b ? void 0 : b.summaryLocalized) == null && E.Z.getDetectableGamesSupplemental([a], { forceFetch: !0 });
    }, [a, null == b ? void 0 : b.summaryLocalized, O]),
    r.useEffect(() => {
        (async () => {
            if (0 === N.length) {
                S(null);
                try {
                    await (0, P.i)(a);
                } catch (e) {
                    S(e);
                }
            }
        })();
    }, [a, N]),
    (0, m.Z)(() => {
        var e;
        let n = Date.now(),
            t = x.map((e) => {
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
            gameName: null != j ? j : '',
            playedFriendIds: x.map((e) => e.author_id),
            playedFriendsData: t,
            similarGames: z(N),
            officialGuildId: null == v ? void 0 : null === (e = v.guild) || void 0 === e ? void 0 : e.id
        });
    }),
    null == b || null == Z)
        ? null
        : (0, t.jsx)(_.ModalRoot, {
              transitionState: l,
              size: _.ModalSize.DYNAMIC,
              className: i()(u, K.gameProfileModal),
              children: (0, t.jsxs)(_.Scroller, {
                  orientation: 'auto',
                  children: [
                      (0, t.jsx)(Q, {
                          detectedGame: b,
                          application: Z,
                          entries: x,
                          viewId: R,
                          trackAction: D
                      }),
                      (0, t.jsx)(_.HeadingLevel, {
                          children: (0, t.jsxs)('div', {
                              className: i()(K.content, K.mainContent),
                              children: [
                                  (0, t.jsx)(Y, {
                                      detectedGame: b,
                                      application: Z,
                                      entries: x,
                                      officialGuildInvite: v,
                                      similarGames: N,
                                      similarGamesError: L,
                                      onClose: c,
                                      viewId: R,
                                      trackAction: D
                                  }),
                                  (0, t.jsx)(W, {
                                      detectedGame: b,
                                      setOfficialGuildInvite: G,
                                      trackAction: D
                                  })
                              ]
                          })
                      })
                  ]
              })
          });
};
