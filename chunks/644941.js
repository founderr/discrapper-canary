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
    I = t(835473),
    m = t(168551),
    A = t(485267),
    p = t(26033),
    g = t(561308),
    T = t(669764),
    f = t(706454),
    O = t(768581),
    N = t(814225),
    R = t(709054),
    h = t(810568),
    P = t(998058),
    C = t(839392),
    L = t(96856),
    M = t(567409),
    S = t(774073),
    v = t(124030),
    x = t(715318),
    G = t(38516),
    Z = t(891949),
    b = t(252547),
    j = t(484527),
    D = t(131033),
    y = t(296768),
    w = t(978313),
    U = t(206583),
    k = t(689938),
    K = t(51527);
let H = 'GameProfileModal',
    F = () =>
        (0, a.jsxs)('div', {
            className: K.gameBadge,
            children: [
                (0, a.jsx)(_.FireIcon, { size: 'xxs' }),
                (0, a.jsx)(_.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: k.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
                })
            ]
        });
function B(e) {
    var n, s;
    let { detectedGame: o, application: d, entries: E, viewId: I, trackAction: m } = e,
        [A, p] = r.useState(() => {
            var e;
            return null === (e = u.K.get(H)) || void 0 === e ? void 0 : e[d.id];
        }),
        T = (0, L.p)('GameProfileModal'),
        f = r.useMemo(() => (null == o ? void 0 : o.genres.map(N.P3).join(', ')), [o]),
        P = r.useMemo(() => {
            if (null == o) return '';
            let { artwork: e, screenshots: n } = o;
            if (e.length > 0) {
                let n = Math.floor(Math.random() * (e.length - 1));
                return e[n];
            }
            if (n.length > 0) {
                let e = Math.floor(Math.random() * (n.length - 1));
                return n[e];
            }
            return '';
        }, [o]),
        C = null == d ? void 0 : d.getIconURL(160, O.$k ? 'webp' : 'png'),
        M = R.default.extractTimestamp(d.id),
        S = null !== (n = o.coverImageUrl) && void 0 !== n ? n : C,
        G = l()().diff(l()(M), 'days') <= U.G,
        Z = E.some((e) => (0, g.ig)(e) === c.o.GLOBAL),
        b = null !== (s = o.name) && void 0 !== s ? s : null == d ? void 0 : d.name,
        j = r.useCallback(
            () => () => {
                var e;
                let n = null !== (e = u.K.get(H)) && void 0 !== e ? e : {};
                (n[d.id] = !n[d.id]),
                    u.K.set(H, n),
                    m(n[d.id] ? h.as.FollowGame : h.as.UnfollowGame),
                    n[d.id] &&
                        (0, v.L)() &&
                        (0, _.openModalLazy)(async () => {
                            let { default: e } = await t.e('86564').then(t.bind(t, 641758));
                            return (n) =>
                                (0, a.jsx)(e, {
                                    ...n,
                                    applicationId: d.id,
                                    background: P,
                                    viewId: I
                                });
                        }),
                    p(n[d.id]);
            },
            [d.id, P, m, I]
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)('div', {
                className: i()(K.gameArtHero),
                style: { backgroundImage: 'url("'.concat(P, '")') }
            }),
            (0, a.jsxs)('div', {
                className: i()(K.content, K.column, K.gapLg, K.headerInfo),
                children: [
                    (0, a.jsxs)('div', {
                        className: K.coverArtRow,
                        children: [
                            (0, a.jsx)('div', {
                                className: K.logoWrapper,
                                children:
                                    null != S &&
                                    (0, a.jsx)('img', {
                                        className: K.logo,
                                        src: S,
                                        alt: k.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: b })
                                    })
                            }),
                            (0, a.jsx)(x.Z, {
                                applicationId: d.id,
                                viewId: I,
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
                                        children: b
                                    }),
                                    (0, a.jsxs)('div', {
                                        className: i()(K.row, K.gapSm),
                                        children: [
                                            null != C &&
                                                (0, a.jsx)('img', {
                                                    src: C,
                                                    height: 16,
                                                    alt: k.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({ game: b })
                                                }),
                                            (0, a.jsx)(_.Text, {
                                                variant: 'text-sm/semibold',
                                                color: 'text-muted',
                                                children: f
                                            }),
                                            G &&
                                                (0, a.jsx)(_.Text, {
                                                    variant: 'eyebrow',
                                                    className: K.newBadge,
                                                    children: k.Z.Messages.NEW
                                                }),
                                            Z &&
                                                (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        (0, a.jsx)(_.Text, {
                                                            variant: 'text-sm/medium',
                                                            children: ' \xB7 '
                                                        }),
                                                        (0, a.jsx)(F, {})
                                                    ]
                                                })
                                        ]
                                    })
                                ]
                            }),
                            (0, a.jsx)('div', {
                                children:
                                    T &&
                                    (0, a.jsx)(_.Tooltip, {
                                        text: A ? k.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : k.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                                        children: (e) =>
                                            (0, a.jsxs)(_.Button, {
                                                ...e,
                                                innerClassName: K.followButton,
                                                color: A ? _.Button.Colors.PRIMARY : _.Button.Colors.BRAND,
                                                onClick: j,
                                                children: [A ? (0, a.jsx)(_.BellSlashIcon, { color: 'white' }) : (0, a.jsx)(_.BellIcon, { color: 'white' }), A ? k.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : k.Z.Messages.FOLLOW]
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
function Q(e) {
    var n;
    let { detectedGame: t, application: r, entries: s, officialGuildInvite: i, similarGames: o, similarGamesError: l, onClose: c, viewId: d, trackAction: u } = e;
    return (0, a.jsxs)('div', {
        className: K.sections,
        children: [
            (0, a.jsx)(b.Z, {
                entries: s,
                viewId: d,
                officialGuildId: null == i ? void 0 : null === (n = i.guild) || void 0 === n ? void 0 : n.id,
                onClose: c
            }),
            (0, a.jsx)(Z.Z, {
                detectedGame: t,
                trackAction: u
            }),
            (0, a.jsx)(y.Z, {
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
        className: i()(K.sidebar, K.column, K.gapLg),
        children: [
            (0, a.jsx)(_.Heading, {
                variant: 'heading-md/bold',
                children: k.Z.Messages.ABOUT
            }),
            (0, a.jsxs)('div', {
                className: K.sections,
                children: [
                    (0, a.jsx)(w.Z, {
                        detectedGame: n,
                        trackAction: r
                    }),
                    (0, a.jsx)(j.Z, {
                        detectedGame: n,
                        trackClick: r,
                        onInviteResolved: t
                    }),
                    (0, a.jsx)(G.Z, {
                        detectedGame: n,
                        trackClick: r
                    }),
                    (0, a.jsx)(D.Z, { detectedGame: n })
                ]
            })
        ]
    });
}
let W = (e) => e.filter(S.z6).slice(0, 5);
n.default = (e) => {
    let { applicationId: n, source: t, sourceUserId: s, transitionState: o, onClose: l } = e,
        { clientThemesClassName: c } = (0, m.ZP)(),
        u = (0, d.e7)([f.default], () => f.default.locale),
        O = r.useMemo(() => (0, h.fP)(), []),
        N = (0, d.Wu)([C.Z], () => {
            var e;
            return (null !== (e = C.Z.getSimilarGames(n)) && void 0 !== e ? e : []).slice(0, 25);
        }),
        [R, L] = r.useState(null),
        { entries: S } = (0, M.Z)(),
        v = r.useMemo(() => {
            var e;
            return null !== (e = null == S ? void 0 : S.filter((e) => (0, p.dX)(e) && e.extra.application_id === n)) && void 0 !== e ? e : [];
        }, [S, n]),
        [x, G] = r.useState(null),
        Z = (0, I.q)(n),
        b = (0, d.e7)([T.Z], () => T.Z.getGame(n)),
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
            if (0 === N.length) {
                L(null);
                try {
                    await (0, P.i)(n);
                } catch (e) {
                    L(e);
                }
            }
        })();
    }, [n, N]),
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
            similarGames: W(N),
            officialGuildId: null == x ? void 0 : null === (e = x.guild) || void 0 === e ? void 0 : e.id
        });
    }),
    null == b || null == Z)
        ? null
        : (0, a.jsx)(_.ModalRoot, {
              transitionState: o,
              size: _.ModalSize.DYNAMIC,
              className: i()(c, K.gameProfileModal),
              children: (0, a.jsxs)(_.ScrollerNone, {
                  className: K.scrollable,
                  children: [
                      (0, a.jsx)(B, {
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
                                  (0, a.jsx)(Q, {
                                      detectedGame: b,
                                      application: Z,
                                      entries: v,
                                      officialGuildInvite: x,
                                      similarGames: N,
                                      similarGamesError: R,
                                      onClose: l,
                                      viewId: O,
                                      trackAction: j
                                  }),
                                  (0, a.jsx)(Y, {
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
