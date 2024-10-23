t.r(n), t(47120);
var a = t(200651),
    r = t(192379),
    s = t(120356),
    i = t.n(s),
    o = t(913527),
    l = t.n(o),
    c = t(705512),
    d = t(442837),
    u = t(433517),
    _ = t(481060),
    E = t(224706),
    m = t(560361),
    I = t(835473),
    A = t(168551),
    p = t(485267),
    g = t(561308),
    f = t(669764),
    T = t(706454),
    O = t(768581),
    N = t(814225),
    R = t(709054),
    h = t(810568),
    P = t(998058),
    C = t(839392),
    L = t(96856),
    M = t(567409),
    x = t(774073),
    S = t(124030),
    v = t(426482),
    G = t(715318),
    Z = t(38516),
    b = t(891949),
    j = t(252547),
    D = t(484527),
    y = t(131033),
    w = t(296768),
    k = t(978313),
    U = t(206583),
    F = t(689938),
    H = t(51527);
let K = 'GameProfileModal',
    B = () =>
        (0, a.jsxs)('div', {
            className: H.gameBadge,
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
    var n;
    let { detectedGame: s, application: o, entries: d, viewId: E, trackAction: m } = e,
        [I, A] = r.useState(() => {
            var e;
            return null === (e = u.K.get(K)) || void 0 === e ? void 0 : e[o.id];
        }),
        p = (0, L.p)('GameProfileModal'),
        f = r.useMemo(() => (null == s ? void 0 : s.genres.map(N.P3).join(', ')), [s]),
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
        C = R.default.extractTimestamp(o.id),
        M = l()().diff(l()(C), 'days') <= U.G,
        x = d.some((e) => (0, g.ig)(e) === c.o.GLOBAL),
        Z = null !== (n = s.name) && void 0 !== n ? n : null == o ? void 0 : o.name,
        b = r.useCallback(
            () => () => {
                var e;
                let n = null !== (e = u.K.get(K)) && void 0 !== e ? e : {};
                (n[o.id] = !n[o.id]),
                    u.K.set(K, n),
                    m(n[o.id] ? h.as.FollowGame : h.as.UnfollowGame),
                    n[o.id] &&
                        (0, S.L)() &&
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
                className: i()(H.gameArtHero),
                style: { backgroundImage: 'url("'.concat(T, '")') }
            }),
            (0, a.jsxs)('div', {
                className: i()(H.content, H.column, H.gapLg, H.headerInfo),
                children: [
                    (0, a.jsxs)('div', {
                        className: H.coverArtRow,
                        children: [
                            (0, a.jsx)('div', {
                                className: H.logoWrapper,
                                children: (0, a.jsx)(v.C, {
                                    game: s,
                                    application: o,
                                    className: H.logo,
                                    size: v.Z.LARGE
                                })
                            }),
                            (0, a.jsx)(G.Z, {
                                applicationId: o.id,
                                viewId: E,
                                className: H.overflowMenu
                            })
                        ]
                    }),
                    (0, a.jsxs)('div', {
                        className: i()(H.row, H.gapSm, H.gameDetails),
                        children: [
                            (0, a.jsxs)('div', {
                                children: [
                                    (0, a.jsx)(_.Heading, {
                                        variant: 'heading-xl/bold',
                                        children: Z
                                    }),
                                    (0, a.jsxs)('div', {
                                        className: i()(H.row, H.gapSm),
                                        children: [
                                            null != P &&
                                                (0, a.jsx)('img', {
                                                    className: H.gameIcon,
                                                    src: P,
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
                                                    className: H.newBadge,
                                                    children: F.Z.Messages.NEW
                                                }),
                                            x &&
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
                                        text: I ? F.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : F.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                                        children: (e) =>
                                            (0, a.jsxs)(_.Button, {
                                                ...e,
                                                innerClassName: H.followButton,
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
function W(e) {
    var n;
    let { detectedGame: t, application: r, entries: s, officialGuildInvite: i, similarGames: o, similarGamesError: l, onClose: c, viewId: d, trackAction: u } = e;
    return (0, a.jsxs)('div', {
        className: H.sections,
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
function Y(e) {
    let { detectedGame: n, setOfficialGuildInvite: t, trackAction: r } = e;
    return (0, a.jsxs)('div', {
        className: i()(H.sidebar, H.column, H.gapLg),
        children: [
            (0, a.jsx)(_.Heading, {
                variant: 'heading-md/bold',
                children: F.Z.Messages.ABOUT
            }),
            (0, a.jsxs)('div', {
                className: H.sections,
                children: [
                    (0, a.jsx)(k.Z, {
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
let z = (e) => e.filter(x.z6).slice(0, 5);
n.default = (e) => {
    var n;
    let { applicationId: t, source: s, sourceUserId: o, transitionState: l, onClose: c } = e,
        { clientThemesClassName: u } = (0, A.ZP)(),
        O = (0, d.e7)([T.default], () => T.default.locale),
        N = r.useMemo(() => (0, h.fP)(), []),
        R = (0, d.Wu)([C.Z], () => {
            var e;
            return (null !== (e = C.Z.getSimilarGames(t)) && void 0 !== e ? e : []).slice(0, 25);
        }),
        [L, x] = r.useState(null),
        S = (0, M.Ns)(t),
        [v, G] = r.useState(null),
        Z = (0, I.q)(t),
        b = (0, d.e7)([f.Z], () => f.Z.getGame(t)),
        j = null !== (n = null == b ? void 0 : b.name) && void 0 !== n ? n : null == Z ? void 0 : Z.name,
        D = (e, n) => {
            var a;
            (0, h.UE)({
                gameName: null != j ? j : '',
                applicationId: t,
                action: e,
                similarGameId: n,
                viewId: N,
                officialGuildId: null == v ? void 0 : null === (a = v.guild) || void 0 === a ? void 0 : a.id
            });
        };
    return (r.useEffect(() => {
        (0, h.IS)({
            source: s,
            viewId: N,
            applicationId: t,
            gameName: null != j ? j : '',
            authorId: o
        });
    }, []),
    r.useEffect(() => {
        (0, p.Jn)();
    }, []),
    (0, I.Z)(R),
    r.useEffect(() => {
        !O.startsWith('en') && (null == b ? void 0 : b.summaryLocalized) == null && E.Z.getDetectableGamesSupplemental([t], { forceFetch: !0 });
    }, [t, null == b ? void 0 : b.summaryLocalized, O]),
    r.useEffect(() => {
        (async () => {
            if (0 === R.length) {
                x(null);
                try {
                    await (0, P.i)(t);
                } catch (e) {
                    x(e);
                }
            }
        })();
    }, [t, R]),
    (0, m.Z)(() => {
        var e;
        let n = Date.now(),
            a = S.map((e) => {
                let t = (0, g.kr)(e) ? (0, g.T_)(e, n) : (0, g.GL)(e, O);
                return JSON.stringify({
                    item_id: e.id,
                    trait: e.traits,
                    time_played: t
                });
            });
        (0, h.wz)({
            viewId: N,
            applicationId: t,
            gameName: null != j ? j : '',
            playedFriendIds: S.map((e) => e.author_id),
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
              className: i()(u, H.gameProfileModal),
              children: (0, a.jsxs)(_.Scroller, {
                  orientation: 'auto',
                  children: [
                      (0, a.jsx)(Q, {
                          detectedGame: b,
                          application: Z,
                          entries: S,
                          viewId: N,
                          trackAction: D
                      }),
                      (0, a.jsx)(_.HeadingLevel, {
                          children: (0, a.jsxs)('div', {
                              className: i()(H.content, H.mainContent),
                              children: [
                                  (0, a.jsx)(W, {
                                      detectedGame: b,
                                      application: Z,
                                      entries: S,
                                      officialGuildInvite: v,
                                      similarGames: R,
                                      similarGamesError: L,
                                      onClose: c,
                                      viewId: N,
                                      trackAction: D
                                  }),
                                  (0, a.jsx)(Y, {
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
