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
    v = t(124030),
    x = t(426482),
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
                        (0, v.L)() &&
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
                                children: (0, a.jsx)(x.C, {
                                    game: s,
                                    application: o,
                                    className: K.logo,
                                    size: x.Z.LARGE
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
    let { applicationId: n, source: t, sourceUserId: s, transitionState: o, onClose: l } = e,
        { clientThemesClassName: c } = (0, I.ZP)(),
        u = (0, d.e7)([T.default], () => T.default.locale),
        O = r.useMemo(() => (0, h.fP)(), []),
        R = (0, d.Wu)([C.Z], () => {
            var e;
            return (null !== (e = C.Z.getSimilarGames(n)) && void 0 !== e ? e : []).slice(0, 25);
        }),
        [N, L] = r.useState(null),
        { entries: S } = (0, M.Z)(),
        v = r.useMemo(() => {
            var e;
            return null !== (e = null == S ? void 0 : S.filter((e) => (0, p.dX)(e) && e.extra.application_id === n)) && void 0 !== e ? e : [];
        }, [S, n]),
        [x, G] = r.useState(null),
        Z = (0, m.q)(n),
        b = (0, d.e7)([f.Z], () => f.Z.getGame(n)),
        j = (e, t) => {
            var a;
            (0, h.UE)({
                gameName: null != name ? name : '',
                applicationId: n,
                action: e,
                similarGameId: t,
                viewId: O,
                officialGuildId: null == x ? void 0 : null === (a = x.guild) || void 0 === a ? void 0 : a.id
            });
        };
    return (r.useEffect(() => {
        var e, a;
        (0, h.IS)({
            source: t,
            viewId: O,
            applicationId: n,
            gameName: null !== (a = null !== (e = null == b ? void 0 : b.name) && void 0 !== e ? e : null == Z ? void 0 : Z.name) && void 0 !== a ? a : '',
            authorId: s
        });
    }, []),
    r.useEffect(() => {
        (0, A.Jn)();
    }, []),
    r.useEffect(() => {
        (async () => {
            if (0 === R.length) {
                L(null);
                try {
                    await (0, P.i)(n);
                } catch (e) {
                    L(e);
                }
            }
        })();
    }, [n, R]),
    (0, E.Z)(() => {
        var e, t, a;
        let r = Date.now(),
            s = v.map((e) => {
                let n = (0, g.kr)(e) ? (0, g.T_)(e, r) : (0, g.GL)(e, u);
                return JSON.stringify({
                    item_id: e.id,
                    trait: e.traits,
                    time_played: n
                });
            });
        (0, h.wz)({
            viewId: O,
            applicationId: n,
            gameName: null !== (a = null !== (t = null == b ? void 0 : b.name) && void 0 !== t ? t : null == Z ? void 0 : Z.name) && void 0 !== a ? a : '',
            playedFriendIds: v.map((e) => e.author_id),
            playedFriendsData: s,
            similarGames: z(R),
            officialGuildId: null == x ? void 0 : null === (e = x.guild) || void 0 === e ? void 0 : e.id
        });
    }),
    null == b || null == Z)
        ? null
        : (0, a.jsx)(_.ModalRoot, {
              transitionState: o,
              size: _.ModalSize.DYNAMIC,
              className: i()(c, K.gameProfileModal),
              children: (0, a.jsxs)(_.Scroller, {
                  className: K.scrollable,
                  orientation: 'auto',
                  children: [
                      (0, a.jsx)(Q, {
                          detectedGame: b,
                          application: Z,
                          entries: v,
                          viewId: O,
                          trackAction: j
                      }),
                      (0, a.jsx)(_.HeadingLevel, {
                          children: (0, a.jsxs)('div', {
                              className: i()(K.content, K.mainContent),
                              children: [
                                  (0, a.jsx)(Y, {
                                      detectedGame: b,
                                      application: Z,
                                      entries: v,
                                      officialGuildInvite: x,
                                      similarGames: R,
                                      similarGamesError: N,
                                      onClose: l,
                                      viewId: O,
                                      trackAction: j
                                  }),
                                  (0, a.jsx)(W, {
                                      detectedGame: b,
                                      setOfficialGuildInvite: G,
                                      trackAction: j
                                  })
                              ]
                          })
                      })
                  ]
              })
          });
};
