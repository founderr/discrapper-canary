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
    g = a(26033),
    f = a(561308),
    T = a(669764),
    O = a(706454),
    R = a(768581),
    N = a(814225),
    h = a(709054),
    P = a(810568),
    C = a(998058),
    L = a(839392),
    M = a(96856),
    x = a(567409),
    S = a(774073),
    v = a(124030),
    G = a(426482),
    Z = a(715318),
    b = a(38516),
    j = a(891949),
    D = a(252547),
    y = a(484527),
    w = a(131033),
    k = a(296768),
    U = a(978313),
    K = a(206583),
    F = a(689938),
    H = a(51527);
let B = 'GameProfileModal',
    Q = () =>
        (0, t.jsxs)('div', {
            className: H.gameBadge,
            children: [
                (0, t.jsx)(_.FireIcon, { size: 'xxs' }),
                (0, t.jsx)(_.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: F.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
                })
            ]
        });
function Y(e) {
    var n;
    let { detectedGame: s, application: o, entries: d, viewId: E, trackAction: m } = e,
        [I, A] = r.useState(() => {
            var e;
            return null === (e = u.K.get(B)) || void 0 === e ? void 0 : e[o.id];
        }),
        p = (0, M.p)('GameProfileModal'),
        g = r.useMemo(() => (null == s ? void 0 : s.genres.map(N.P3).join(', ')), [s]),
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
        O = null == o ? void 0 : o.getIconURL(160, R.$k ? 'webp' : 'png'),
        C = h.default.extractTimestamp(o.id),
        L = l()().diff(l()(C), 'days') <= K.G,
        x = d.some((e) => (0, f.ig)(e) === c.o.GLOBAL),
        S = null !== (n = s.name) && void 0 !== n ? n : null == o ? void 0 : o.name,
        b = r.useCallback(
            () => () => {
                var e;
                let n = null !== (e = u.K.get(B)) && void 0 !== e ? e : {};
                (n[o.id] = !n[o.id]),
                    u.K.set(B, n),
                    m(n[o.id] ? P.as.FollowGame : P.as.UnfollowGame),
                    n[o.id] &&
                        (0, v.L)() &&
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
                className: i()(H.gameArtHero),
                style: { backgroundImage: 'url("'.concat(T, '")') }
            }),
            (0, t.jsxs)('div', {
                className: i()(H.content, H.column, H.gapLg, H.headerInfo),
                children: [
                    (0, t.jsxs)('div', {
                        className: H.coverArtRow,
                        children: [
                            (0, t.jsx)('div', {
                                className: H.logoWrapper,
                                children: (0, t.jsx)(G.C, {
                                    game: s,
                                    application: o,
                                    className: H.logo,
                                    size: G.Z.LARGE
                                })
                            }),
                            (0, t.jsx)(Z.Z, {
                                applicationId: o.id,
                                viewId: E,
                                className: H.overflowMenu
                            })
                        ]
                    }),
                    (0, t.jsxs)('div', {
                        className: i()(H.row, H.gapSm, H.gameDetails),
                        children: [
                            (0, t.jsxs)('div', {
                                children: [
                                    (0, t.jsx)(_.Heading, {
                                        variant: 'heading-xl/bold',
                                        children: S
                                    }),
                                    (0, t.jsxs)('div', {
                                        className: i()(H.row, H.gapSm),
                                        children: [
                                            null != O &&
                                                (0, t.jsx)('img', {
                                                    src: O,
                                                    height: 16,
                                                    alt: F.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({ game: S })
                                                }),
                                            (0, t.jsx)(_.Text, {
                                                variant: 'text-sm/semibold',
                                                color: 'text-muted',
                                                children: g
                                            }),
                                            L &&
                                                (0, t.jsx)(_.Text, {
                                                    variant: 'eyebrow',
                                                    className: H.newBadge,
                                                    children: F.Z.Messages.NEW
                                                }),
                                            x &&
                                                (0, t.jsxs)(t.Fragment, {
                                                    children: [
                                                        (0, t.jsx)(_.Text, {
                                                            variant: 'text-sm/medium',
                                                            children: ' \xB7 '
                                                        }),
                                                        (0, t.jsx)(Q, {})
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
                                                innerClassName: H.followButton,
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
function W(e) {
    var n;
    let { detectedGame: a, application: r, entries: s, officialGuildInvite: i, similarGames: o, similarGamesError: l, onClose: c, viewId: d, trackAction: u } = e;
    return (0, t.jsxs)('div', {
        className: H.sections,
        children: [
            (0, t.jsx)(D.Z, {
                entries: s,
                viewId: d,
                officialGuildId: null == i ? void 0 : null === (n = i.guild) || void 0 === n ? void 0 : n.id,
                onClose: c
            }),
            (0, t.jsx)(j.Z, {
                detectedGame: a,
                trackAction: u
            }),
            (0, t.jsx)(k.Z, {
                applicationId: r.id,
                onClose: c,
                trackAction: u,
                similarGames: o,
                similarGamesError: l
            })
        ]
    });
}
function z(e) {
    let { detectedGame: n, setOfficialGuildInvite: a, trackAction: r } = e;
    return (0, t.jsxs)('div', {
        className: i()(H.sidebar, H.column, H.gapLg),
        children: [
            (0, t.jsx)(_.Heading, {
                variant: 'heading-md/bold',
                children: F.Z.Messages.ABOUT
            }),
            (0, t.jsxs)('div', {
                className: H.sections,
                children: [
                    (0, t.jsx)(U.Z, {
                        detectedGame: n,
                        trackAction: r
                    }),
                    (0, t.jsx)(y.Z, {
                        detectedGame: n,
                        trackClick: r,
                        onInviteResolved: a
                    }),
                    (0, t.jsx)(b.Z, {
                        detectedGame: n,
                        trackClick: r
                    }),
                    (0, t.jsx)(w.Z, { detectedGame: n })
                ]
            })
        ]
    });
}
let V = (e) => e.filter(S.z6).slice(0, 5);
n.default = (e) => {
    var n;
    let { applicationId: a, source: s, sourceUserId: o, transitionState: l, onClose: c } = e,
        { clientThemesClassName: u } = (0, A.ZP)(),
        R = (0, d.e7)([O.default], () => O.default.locale),
        N = r.useMemo(() => (0, P.fP)(), []),
        h = (0, d.Wu)([L.Z], () => {
            var e;
            return (null !== (e = L.Z.getSimilarGames(a)) && void 0 !== e ? e : []).slice(0, 25);
        }),
        [M, S] = r.useState(null),
        { entries: v } = (0, x.Z)(),
        G = r.useMemo(() => {
            var e;
            return null !== (e = null == v ? void 0 : v.filter((e) => (0, g.dX)(e) && e.extra.application_id === a)) && void 0 !== e ? e : [];
        }, [v, a]),
        [Z, b] = r.useState(null),
        j = (0, I.q)(a),
        D = (0, d.e7)([T.Z], () => T.Z.getGame(a)),
        y = null !== (n = null == D ? void 0 : D.name) && void 0 !== n ? n : null == j ? void 0 : j.name,
        w = (e, n) => {
            var t;
            (0, P.UE)({
                gameName: null != y ? y : '',
                applicationId: a,
                action: e,
                similarGameId: n,
                viewId: N,
                officialGuildId: null == Z ? void 0 : null === (t = Z.guild) || void 0 === t ? void 0 : t.id
            });
        };
    return (r.useEffect(() => {
        (0, P.IS)({
            source: s,
            viewId: N,
            applicationId: a,
            gameName: null != y ? y : '',
            authorId: o
        });
    }, []),
    r.useEffect(() => {
        (0, p.Jn)();
    }, []),
    r.useEffect(() => {
        !R.startsWith('en') && (null == D ? void 0 : D.summaryLocalized) == null && E.Z.getDetectableGamesSupplemental([a], { forceFetch: !0 });
    }, [a, null == D ? void 0 : D.summaryLocalized, R]),
    r.useEffect(() => {
        (async () => {
            if (0 === h.length) {
                S(null);
                try {
                    await (0, C.i)(a);
                } catch (e) {
                    S(e);
                }
            }
        })();
    }, [a, h]),
    (0, m.Z)(() => {
        var e;
        let n = Date.now(),
            t = G.map((e) => {
                let a = (0, f.kr)(e) ? (0, f.T_)(e, n) : (0, f.GL)(e, R);
                return JSON.stringify({
                    item_id: e.id,
                    trait: e.traits,
                    time_played: a
                });
            });
        (0, P.wz)({
            viewId: N,
            applicationId: a,
            gameName: null != y ? y : '',
            playedFriendIds: G.map((e) => e.author_id),
            playedFriendsData: t,
            similarGames: V(h),
            officialGuildId: null == Z ? void 0 : null === (e = Z.guild) || void 0 === e ? void 0 : e.id
        });
    }),
    null == D || null == j)
        ? null
        : (0, t.jsx)(_.ModalRoot, {
              transitionState: l,
              size: _.ModalSize.DYNAMIC,
              className: i()(u, H.gameProfileModal),
              children: (0, t.jsxs)(_.Scroller, {
                  orientation: 'auto',
                  children: [
                      (0, t.jsx)(Y, {
                          detectedGame: D,
                          application: j,
                          entries: G,
                          viewId: N,
                          trackAction: w
                      }),
                      (0, t.jsx)(_.HeadingLevel, {
                          children: (0, t.jsxs)('div', {
                              className: i()(H.content, H.mainContent),
                              children: [
                                  (0, t.jsx)(W, {
                                      detectedGame: D,
                                      application: j,
                                      entries: G,
                                      officialGuildInvite: Z,
                                      similarGames: h,
                                      similarGamesError: M,
                                      onClose: c,
                                      viewId: N,
                                      trackAction: w
                                  }),
                                  (0, t.jsx)(z, {
                                      detectedGame: D,
                                      setOfficialGuildInvite: b,
                                      trackAction: w
                                  })
                              ]
                          })
                      })
                  ]
              })
          });
};
