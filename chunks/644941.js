n.r(t), n(47120);
var a = n(735250),
    r = n(470079),
    s = n(120356),
    i = n.n(s),
    o = n(913527),
    l = n.n(o),
    c = n(705512),
    d = n(442837),
    u = n(433517),
    _ = n(481060),
    E = n(224706),
    m = n(560361),
    I = n(835473),
    A = n(168551),
    p = n(485267),
    g = n(561308),
    f = n(669764),
    T = n(706454),
    O = n(768581),
    N = n(814225),
    R = n(709054),
    P = n(810568),
    h = n(998058),
    C = n(839392),
    L = n(96856),
    M = n(567409),
    S = n(774073),
    x = n(124030),
    v = n(426482),
    G = n(715318),
    Z = n(38516),
    b = n(891949),
    j = n(252547),
    D = n(484527),
    y = n(131033),
    w = n(296768),
    k = n(978313),
    U = n(206583),
    F = n(689938),
    K = n(51527);
let B = 'GameProfileModal',
    H = () =>
        (0, a.jsxs)('div', {
            className: K.gameBadge,
            children: [
                (0, a.jsx)(_.FireIcon, { size: 'xxs' }),
                (0, a.jsx)(_.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: F.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
                })
            ]
        });
function Q(e) {
    var t;
    let { detectedGame: s, application: o, entries: d, viewId: E, trackAction: m } = e,
        [I, A] = r.useState(() => {
            var e;
            return null === (e = u.K.get(B)) || void 0 === e ? void 0 : e[o.id];
        }),
        p = (0, L.p)('GameProfileModal'),
        f = r.useMemo(() => (null == s ? void 0 : s.genres.map(N.P3).join(', ')), [s]),
        T = r.useMemo(() => {
            if (null == s) return '';
            let { artwork: e, screenshots: t } = s;
            if (e.length > 0) {
                let t = Math.floor(Math.random() * (e.length - 1));
                return e[t];
            }
            if (t.length > 0) {
                let e = Math.floor(Math.random() * (t.length - 1));
                return t[e];
            }
            return '';
        }, [s]),
        h = null == o ? void 0 : o.getIconURL(160, O.$k ? 'webp' : 'png'),
        C = R.default.extractTimestamp(o.id),
        M = l()().diff(l()(C), 'days') <= U.G,
        S = d.some((e) => (0, g.ig)(e) === c.o.GLOBAL),
        Z = null !== (t = s.name) && void 0 !== t ? t : null == o ? void 0 : o.name,
        b = r.useCallback(
            () => () => {
                var e;
                let t = null !== (e = u.K.get(B)) && void 0 !== e ? e : {};
                (t[o.id] = !t[o.id]),
                    u.K.set(B, t),
                    m(t[o.id] ? P.as.FollowGame : P.as.UnfollowGame),
                    t[o.id] &&
                        (0, x.L)() &&
                        (0, _.openModalLazy)(async () => {
                            let { default: e } = await n.e('86564').then(n.bind(n, 641758));
                            return (t) =>
                                (0, a.jsx)(e, {
                                    ...t,
                                    applicationId: o.id,
                                    background: T,
                                    viewId: E
                                });
                        }),
                    A(t[o.id]);
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
                                            null != h &&
                                                (0, a.jsx)('img', {
                                                    className: K.gameIcon,
                                                    src: h,
                                                    height: 16,
                                                    alt: F.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({ game: Z })
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
                                                    children: F.Z.Messages.NEW
                                                }),
                                            S &&
                                                (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        (0, a.jsx)(_.Text, {
                                                            variant: 'text-sm/medium',
                                                            children: ' \xB7 '
                                                        }),
                                                        (0, a.jsx)(H, {})
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
                                        text: I ? F.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : F.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                                        children: (e) =>
                                            (0, a.jsxs)(_.Button, {
                                                ...e,
                                                innerClassName: K.followButton,
                                                color: I ? _.Button.Colors.PRIMARY : _.Button.Colors.BRAND,
                                                onClick: b,
                                                children: [I ? (0, a.jsx)(_.BellSlashIcon, { color: 'white' }) : (0, a.jsx)(_.BellIcon, { color: 'white' }), I ? F.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : F.Z.Messages.FOLLOW]
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
    var t;
    let { detectedGame: n, application: r, entries: s, officialGuildInvite: i, similarGames: o, similarGamesError: l, onClose: c, viewId: d, trackAction: u } = e;
    return (0, a.jsxs)('div', {
        className: K.sections,
        children: [
            (0, a.jsx)(j.Z, {
                entries: s,
                viewId: d,
                officialGuildId: null == i ? void 0 : null === (t = i.guild) || void 0 === t ? void 0 : t.id,
                onClose: c
            }),
            (0, a.jsx)(b.Z, {
                detectedGame: n,
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
    let { detectedGame: t, setOfficialGuildInvite: n, trackAction: r } = e;
    return (0, a.jsxs)('div', {
        className: i()(K.sidebar, K.column, K.gapLg),
        children: [
            (0, a.jsx)(_.Heading, {
                variant: 'heading-md/bold',
                children: F.Z.Messages.ABOUT
            }),
            (0, a.jsxs)('div', {
                className: K.sections,
                children: [
                    (0, a.jsx)(k.Z, {
                        detectedGame: t,
                        trackAction: r
                    }),
                    (0, a.jsx)(D.Z, {
                        detectedGame: t,
                        trackClick: r,
                        onInviteResolved: n
                    }),
                    (0, a.jsx)(Z.Z, {
                        detectedGame: t,
                        trackClick: r
                    }),
                    (0, a.jsx)(y.Z, { detectedGame: t })
                ]
            })
        ]
    });
}
let z = (e) => e.filter(S.z6).slice(0, 5);
t.default = (e) => {
    var t;
    let { applicationId: n, source: s, sourceUserId: o, transitionState: l, onClose: c } = e,
        { clientThemesClassName: u } = (0, A.ZP)(),
        O = (0, d.e7)([T.default], () => T.default.locale),
        N = r.useMemo(() => (0, P.fP)(), []),
        R = (0, d.Wu)([C.Z], () => {
            var e;
            return (null !== (e = C.Z.getSimilarGames(n)) && void 0 !== e ? e : []).slice(0, 25);
        }),
        [L, S] = r.useState(null),
        x = (0, M.Ns)(n),
        [v, G] = r.useState(null),
        Z = (0, I.q)(n),
        b = (0, d.e7)([f.Z], () => f.Z.getGame(n)),
        j = null !== (t = null == b ? void 0 : b.name) && void 0 !== t ? t : null == Z ? void 0 : Z.name,
        D = (e, t) => {
            var a;
            (0, P.UE)({
                gameName: null != j ? j : '',
                applicationId: n,
                action: e,
                similarGameId: t,
                viewId: N,
                officialGuildId: null == v ? void 0 : null === (a = v.guild) || void 0 === a ? void 0 : a.id
            });
        };
    return (r.useEffect(() => {
        (0, P.IS)({
            source: s,
            viewId: N,
            applicationId: n,
            gameName: null != j ? j : '',
            authorId: o
        });
    }, []),
    r.useEffect(() => {
        (0, p.Jn)();
    }, []),
    (0, I.Z)(R),
    r.useEffect(() => {
        !O.startsWith('en') && (null == b ? void 0 : b.summaryLocalized) == null && E.Z.getDetectableGamesSupplemental([n], { forceFetch: !0 });
    }, [n, null == b ? void 0 : b.summaryLocalized, O]),
    r.useEffect(() => {
        (async () => {
            if (0 === R.length) {
                S(null);
                try {
                    await (0, h.i)(n);
                } catch (e) {
                    S(e);
                }
            }
        })();
    }, [n, R]),
    (0, m.Z)(() => {
        var e;
        let t = Date.now(),
            a = x.map((e) => {
                let n = (0, g.kr)(e) ? (0, g.T_)(e, t) : (0, g.GL)(e, O);
                return JSON.stringify({
                    item_id: e.id,
                    trait: e.traits,
                    time_played: n
                });
            });
        (0, P.wz)({
            viewId: N,
            applicationId: n,
            gameName: null != j ? j : '',
            playedFriendIds: x.map((e) => e.author_id),
            playedFriendsData: a,
            similarGames: z(R),
            officialGuildId: null == v ? void 0 : null === (e = v.guild) || void 0 === e ? void 0 : e.id
        });
    }),
    null == b || null == Z)
        ? null
        : (0, a.jsx)(_.ModalRoot, {
              transitionState: l,
              size: _.ModalSize.DYNAMIC,
              className: i()(u, K.gameProfileModal),
              children: (0, a.jsxs)(_.Scroller, {
                  orientation: 'auto',
                  children: [
                      (0, a.jsx)(Q, {
                          detectedGame: b,
                          application: Z,
                          entries: x,
                          viewId: N,
                          trackAction: D
                      }),
                      (0, a.jsx)(_.HeadingLevel, {
                          children: (0, a.jsxs)('div', {
                              className: i()(K.content, K.mainContent),
                              children: [
                                  (0, a.jsx)(Y, {
                                      detectedGame: b,
                                      application: Z,
                                      entries: x,
                                      officialGuildInvite: v,
                                      similarGames: R,
                                      similarGamesError: L,
                                      onClose: c,
                                      viewId: N,
                                      trackAction: D
                                  }),
                                  (0, a.jsx)(W, {
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
