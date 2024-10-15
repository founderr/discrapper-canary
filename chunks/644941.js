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
    E = t(224706),
    m = t(560361),
    I = t(835473),
    A = t(168551),
    p = t(485267),
    g = t(26033),
    f = t(561308),
    T = t(669764),
    O = t(706454),
    R = t(768581),
    N = t(814225),
    h = t(709054),
    P = t(810568),
    C = t(998058),
    L = t(839392),
    M = t(96856),
    x = t(567409),
    S = t(774073),
    v = t(124030),
    G = t(426482),
    Z = t(715318),
    b = t(38516),
    j = t(891949),
    D = t(252547),
    y = t(484527),
    w = t(131033),
    k = t(296768),
    U = t(978313),
    F = t(206583),
    K = t(689938),
    H = t(51527);
let B = 'GameProfileModal',
    Q = () =>
        (0, a.jsxs)('div', {
            className: H.gameBadge,
            children: [
                (0, a.jsx)(_.FireIcon, { size: 'xxs' }),
                (0, a.jsx)(_.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: K.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
                })
            ]
        });
function W(e) {
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
        L = l()().diff(l()(C), 'days') <= F.G,
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
                                children: (0, a.jsx)(G.C, {
                                    game: s,
                                    application: o,
                                    className: H.logo,
                                    size: G.Z.LARGE
                                })
                            }),
                            (0, a.jsx)(Z.Z, {
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
                                        children: S
                                    }),
                                    (0, a.jsxs)('div', {
                                        className: i()(H.row, H.gapSm),
                                        children: [
                                            null != O &&
                                                (0, a.jsx)('img', {
                                                    className: H.gameIcon,
                                                    src: O,
                                                    height: 16,
                                                    alt: K.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({ game: S })
                                                }),
                                            (0, a.jsx)(_.Text, {
                                                variant: 'text-sm/semibold',
                                                color: 'text-muted',
                                                children: g
                                            }),
                                            L &&
                                                (0, a.jsx)(_.Text, {
                                                    variant: 'eyebrow',
                                                    className: H.newBadge,
                                                    children: K.Z.Messages.NEW
                                                }),
                                            x &&
                                                (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        (0, a.jsx)(_.Text, {
                                                            variant: 'text-sm/medium',
                                                            children: ' \xB7 '
                                                        }),
                                                        (0, a.jsx)(Q, {})
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
                                        text: I ? K.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : K.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                                        children: (e) =>
                                            (0, a.jsxs)(_.Button, {
                                                ...e,
                                                innerClassName: H.followButton,
                                                color: I ? _.Button.Colors.PRIMARY : _.Button.Colors.BRAND,
                                                onClick: b,
                                                children: [I ? (0, a.jsx)(_.BellSlashIcon, { color: 'white' }) : (0, a.jsx)(_.BellIcon, { color: 'white' }), I ? K.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : K.Z.Messages.FOLLOW]
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
        className: H.sections,
        children: [
            (0, a.jsx)(D.Z, {
                entries: s,
                viewId: d,
                officialGuildId: null == i ? void 0 : null === (n = i.guild) || void 0 === n ? void 0 : n.id,
                onClose: c
            }),
            (0, a.jsx)(j.Z, {
                detectedGame: t,
                trackAction: u
            }),
            (0, a.jsx)(k.Z, {
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
    let { detectedGame: n, setOfficialGuildInvite: t, trackAction: r } = e;
    return (0, a.jsxs)('div', {
        className: i()(H.sidebar, H.column, H.gapLg),
        children: [
            (0, a.jsx)(_.Heading, {
                variant: 'heading-md/bold',
                children: K.Z.Messages.ABOUT
            }),
            (0, a.jsxs)('div', {
                className: H.sections,
                children: [
                    (0, a.jsx)(U.Z, {
                        detectedGame: n,
                        trackAction: r
                    }),
                    (0, a.jsx)(y.Z, {
                        detectedGame: n,
                        trackClick: r,
                        onInviteResolved: t
                    }),
                    (0, a.jsx)(b.Z, {
                        detectedGame: n,
                        trackClick: r
                    }),
                    (0, a.jsx)(w.Z, { detectedGame: n })
                ]
            })
        ]
    });
}
let V = (e) => e.filter(S.z6).slice(0, 5);
n.default = (e) => {
    var n;
    let { applicationId: t, source: s, sourceUserId: o, transitionState: l, onClose: c } = e,
        { clientThemesClassName: u } = (0, A.ZP)(),
        R = (0, d.e7)([O.default], () => O.default.locale),
        N = r.useMemo(() => (0, P.fP)(), []),
        h = (0, d.Wu)([L.Z], () => {
            var e;
            return (null !== (e = L.Z.getSimilarGames(t)) && void 0 !== e ? e : []).slice(0, 25);
        }),
        [M, S] = r.useState(null),
        { entries: v } = (0, x.Z)(),
        G = r.useMemo(() => {
            var e;
            return null !== (e = null == v ? void 0 : v.filter((e) => (0, g.dX)(e) && e.extra.application_id === t)) && void 0 !== e ? e : [];
        }, [v, t]),
        [Z, b] = r.useState(null),
        j = (0, I.q)(t),
        D = (0, d.e7)([T.Z], () => T.Z.getGame(t)),
        y = null !== (n = null == D ? void 0 : D.name) && void 0 !== n ? n : null == j ? void 0 : j.name,
        w = (e, n) => {
            var a;
            (0, P.UE)({
                gameName: null != y ? y : '',
                applicationId: t,
                action: e,
                similarGameId: n,
                viewId: N,
                officialGuildId: null == Z ? void 0 : null === (a = Z.guild) || void 0 === a ? void 0 : a.id
            });
        };
    return (r.useEffect(() => {
        (0, P.IS)({
            source: s,
            viewId: N,
            applicationId: t,
            gameName: null != y ? y : '',
            authorId: o
        });
    }, []),
    r.useEffect(() => {
        (0, p.Jn)();
    }, []),
    (0, I.Z)(h),
    r.useEffect(() => {
        !R.startsWith('en') && (null == D ? void 0 : D.summaryLocalized) == null && E.Z.getDetectableGamesSupplemental([t], { forceFetch: !0 });
    }, [t, null == D ? void 0 : D.summaryLocalized, R]),
    r.useEffect(() => {
        (async () => {
            if (0 === h.length) {
                S(null);
                try {
                    await (0, C.i)(t);
                } catch (e) {
                    S(e);
                }
            }
        })();
    }, [t, h]),
    (0, m.Z)(() => {
        var e;
        let n = Date.now(),
            a = G.map((e) => {
                let t = (0, f.kr)(e) ? (0, f.T_)(e, n) : (0, f.GL)(e, R);
                return JSON.stringify({
                    item_id: e.id,
                    trait: e.traits,
                    time_played: t
                });
            });
        (0, P.wz)({
            viewId: N,
            applicationId: t,
            gameName: null != y ? y : '',
            playedFriendIds: G.map((e) => e.author_id),
            playedFriendsData: a,
            similarGames: V(h),
            officialGuildId: null == Z ? void 0 : null === (e = Z.guild) || void 0 === e ? void 0 : e.id
        });
    }),
    null == D || null == j)
        ? null
        : (0, a.jsx)(_.ModalRoot, {
              transitionState: l,
              size: _.ModalSize.DYNAMIC,
              className: i()(u, H.gameProfileModal),
              children: (0, a.jsxs)(_.Scroller, {
                  orientation: 'auto',
                  children: [
                      (0, a.jsx)(W, {
                          detectedGame: D,
                          application: j,
                          entries: G,
                          viewId: N,
                          trackAction: w
                      }),
                      (0, a.jsx)(_.HeadingLevel, {
                          children: (0, a.jsxs)('div', {
                              className: i()(H.content, H.mainContent),
                              children: [
                                  (0, a.jsx)(Y, {
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
                                  (0, a.jsx)(z, {
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
