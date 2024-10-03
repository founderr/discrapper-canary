n.r(a), n(47120);
var t = n(735250),
    i = n(470079),
    r = n(120356),
    o = n.n(r),
    l = n(913527),
    s = n.n(l),
    c = n(705512),
    d = n(442837),
    u = n(433517),
    m = n(481060),
    p = n(560361),
    g = n(835473),
    _ = n(168551),
    f = n(485267),
    x = n(26033),
    h = n(561308),
    v = n(669764),
    I = n(706454),
    E = n(768581),
    A = n(814225),
    b = n(709054),
    C = n(810568),
    j = n(998058),
    M = n(839392),
    P = n(96856),
    T = n(567409),
    N = n(774073),
    S = n(124030),
    L = n(715318),
    w = n(38516),
    k = n(891949),
    G = n(252547),
    O = n(484527),
    y = n(131033),
    R = n(296768),
    Z = n(978313),
    F = n(206583),
    H = n(689938),
    D = n(51527);
let B = 'GameProfileModal',
    W = () =>
        (0, t.jsxs)('div', {
            className: D.gameBadge,
            children: [
                (0, t.jsx)(m.FireIcon, { size: 'xxs' }),
                (0, t.jsx)(m.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: H.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
                })
            ]
        });
function U(e) {
    var a, r;
    let { detectedGame: l, application: d, entries: p, viewId: g, trackAction: _ } = e,
        [f, x] = i.useState(() => {
            var e;
            return null === (e = u.K.get(B)) || void 0 === e ? void 0 : e[d.id];
        }),
        v = (0, P.p)('GameProfileModal'),
        I = i.useMemo(() => (null == l ? void 0 : l.genres.map(A.P3).join(', ')), [l]),
        j = i.useMemo(() => {
            if (null == l) return '';
            let { artwork: e, screenshots: a } = l;
            if (e.length > 0) {
                let a = Math.floor(Math.random() * (e.length - 1));
                return e[a];
            }
            if (a.length > 0) {
                let e = Math.floor(Math.random() * (a.length - 1));
                return a[e];
            }
            return '';
        }, [l]),
        M = null == d ? void 0 : d.getIconURL(160, E.$k ? 'webp' : 'png'),
        T = b.default.extractTimestamp(d.id),
        N = null !== (a = l.coverImageUrl) && void 0 !== a ? a : M,
        w = s()().diff(s()(T), 'days') <= F.G,
        k = p.some((e) => (0, h.ig)(e) === c.o.GLOBAL),
        G = null !== (r = l.name) && void 0 !== r ? r : null == d ? void 0 : d.name,
        O = i.useCallback(
            () => () => {
                var e;
                let a = null !== (e = u.K.get(B)) && void 0 !== e ? e : {};
                (a[d.id] = !a[d.id]),
                    u.K.set(B, a),
                    _(a[d.id] ? C.as.FollowGame : C.as.UnfollowGame),
                    a[d.id] &&
                        (0, S.L)() &&
                        (0, m.openModalLazy)(async () => {
                            let { default: e } = await n.e('86564').then(n.bind(n, 641758));
                            return (a) =>
                                (0, t.jsx)(e, {
                                    ...a,
                                    applicationId: d.id,
                                    background: j,
                                    viewId: g
                                });
                        }),
                    x(a[d.id]);
            },
            [d.id, j, _, g]
        );
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)('div', {
                className: o()(D.gameArtHero),
                style: { backgroundImage: 'url("'.concat(j, '")') }
            }),
            (0, t.jsxs)('div', {
                className: o()(D.content, D.column, D.gapLg, D.headerInfo),
                children: [
                    (0, t.jsxs)('div', {
                        className: D.coverArtRow,
                        children: [
                            (0, t.jsx)('div', {
                                className: D.logoWrapper,
                                children:
                                    null != N &&
                                    (0, t.jsx)('img', {
                                        className: D.logo,
                                        src: N,
                                        alt: H.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: G })
                                    })
                            }),
                            (0, t.jsx)(L.Z, {
                                applicationId: d.id,
                                viewId: g,
                                className: D.overflowMenu
                            })
                        ]
                    }),
                    (0, t.jsxs)('div', {
                        className: o()(D.row, D.gapSm, D.gameDetails),
                        children: [
                            (0, t.jsxs)('div', {
                                children: [
                                    (0, t.jsx)(m.Heading, {
                                        variant: 'heading-xl/bold',
                                        children: G
                                    }),
                                    (0, t.jsxs)('div', {
                                        className: o()(D.row, D.gapSm),
                                        children: [
                                            null != M &&
                                                (0, t.jsx)('img', {
                                                    src: M,
                                                    height: 16,
                                                    alt: H.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({ game: G })
                                                }),
                                            (0, t.jsx)(m.Text, {
                                                variant: 'text-sm/semibold',
                                                color: 'text-muted',
                                                children: I
                                            }),
                                            w &&
                                                (0, t.jsx)(m.Text, {
                                                    variant: 'eyebrow',
                                                    className: D.newBadge,
                                                    children: H.Z.Messages.NEW
                                                }),
                                            k &&
                                                (0, t.jsxs)(t.Fragment, {
                                                    children: [
                                                        (0, t.jsx)(m.Text, {
                                                            variant: 'text-sm/medium',
                                                            children: ' \xB7 '
                                                        }),
                                                        (0, t.jsx)(W, {})
                                                    ]
                                                })
                                        ]
                                    })
                                ]
                            }),
                            (0, t.jsx)('div', {
                                children:
                                    v &&
                                    (0, t.jsx)(m.Tooltip, {
                                        text: f ? H.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : H.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                                        children: (e) =>
                                            (0, t.jsxs)(m.Button, {
                                                ...e,
                                                innerClassName: D.followButton,
                                                color: f ? m.Button.Colors.PRIMARY : m.Button.Colors.BRAND,
                                                onClick: O,
                                                children: [f ? (0, t.jsx)(m.BellSlashIcon, { color: 'white' }) : (0, t.jsx)(m.BellIcon, { color: 'white' }), f ? H.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : H.Z.Messages.FOLLOW]
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
function z(e) {
    var a;
    let { detectedGame: n, application: i, entries: r, officialGuildInvite: o, similarGames: l, similarGamesError: s, onClose: c, viewId: d, trackAction: u } = e;
    return (0, t.jsxs)('div', {
        className: D.sections,
        children: [
            (0, t.jsx)(G.Z, {
                entries: r,
                viewId: d,
                officialGuildId: null == o ? void 0 : null === (a = o.guild) || void 0 === a ? void 0 : a.id,
                onClose: c
            }),
            (0, t.jsx)(k.Z, {
                detectedGame: n,
                trackAction: u
            }),
            (0, t.jsx)(R.Z, {
                applicationId: i.id,
                onClose: c,
                trackAction: u,
                similarGames: l,
                similarGamesError: s
            })
        ]
    });
}
function Y(e) {
    let { detectedGame: a, setOfficialGuildInvite: n, trackAction: i } = e;
    return (0, t.jsxs)('div', {
        className: o()(D.sidebar, D.column, D.gapLg),
        children: [
            (0, t.jsx)(m.Heading, {
                variant: 'heading-md/bold',
                children: H.Z.Messages.ABOUT
            }),
            (0, t.jsxs)('div', {
                className: D.sections,
                children: [
                    (0, t.jsx)(Z.Z, {
                        detectedGame: a,
                        trackAction: i
                    }),
                    (0, t.jsx)(O.Z, {
                        detectedGame: a,
                        trackClick: i,
                        onInviteResolved: n
                    }),
                    (0, t.jsx)(w.Z, {
                        detectedGame: a,
                        trackClick: i
                    }),
                    (0, t.jsx)(y.Z, { detectedGame: a })
                ]
            })
        ]
    });
}
let K = (e) => e.filter(N.z6).slice(0, 5);
a.default = (e) => {
    let { applicationId: a, source: n, sourceUserId: r, transitionState: l, onClose: s } = e,
        { clientThemesClassName: c } = (0, _.ZP)(),
        u = (0, d.e7)([I.default], () => I.default.locale),
        E = i.useMemo(() => (0, C.fP)(), []),
        A = (0, d.Wu)([M.Z], () => {
            var e;
            return (null !== (e = M.Z.getSimilarGames(a)) && void 0 !== e ? e : []).slice(0, 25);
        }),
        [b, P] = i.useState(null),
        { entries: N } = (0, T.Z)(),
        S = i.useMemo(() => {
            var e;
            return null !== (e = null == N ? void 0 : N.filter((e) => (0, x.dX)(e) && e.extra.application_id === a)) && void 0 !== e ? e : [];
        }, [N, a]),
        [L, w] = i.useState(null),
        k = (0, g.q)(a),
        G = (0, d.e7)([v.Z], () => v.Z.getGame(a)),
        O = (e, n) => {
            var t;
            (0, C.UE)({
                gameName: null != name ? name : '',
                applicationId: a,
                action: e,
                similarGameId: n,
                viewId: E,
                officialGuildId: null == L ? void 0 : null === (t = L.guild) || void 0 === t ? void 0 : t.id
            });
        };
    return (i.useEffect(() => {
        var e, t;
        (0, C.IS)({
            source: n,
            viewId: E,
            applicationId: a,
            gameName: null !== (t = null !== (e = null == G ? void 0 : G.name) && void 0 !== e ? e : null == k ? void 0 : k.name) && void 0 !== t ? t : '',
            authorId: r
        });
    }, []),
    i.useEffect(() => {
        (0, f.Jn)();
    }, []),
    i.useEffect(() => {
        (async () => {
            if (0 === A.length) {
                P(null);
                try {
                    await (0, j.i)(a);
                } catch (e) {
                    P(e);
                }
            }
        })();
    }, [a, A]),
    (0, p.Z)(() => {
        var e, n, t;
        let i = Date.now(),
            r = S.map((e) => {
                let a = (0, h.kr)(e) ? (0, h.T_)(e, i) : (0, h.GL)(e, u);
                return JSON.stringify({
                    item_id: e.id,
                    trait: e.traits,
                    time_played: a
                });
            });
        (0, C.wz)({
            viewId: E,
            applicationId: a,
            gameName: null !== (t = null !== (n = null == G ? void 0 : G.name) && void 0 !== n ? n : null == k ? void 0 : k.name) && void 0 !== t ? t : '',
            playedFriendIds: S.map((e) => e.author_id),
            playedFriendsData: r,
            similarGames: K(A),
            officialGuildId: null == L ? void 0 : null === (e = L.guild) || void 0 === e ? void 0 : e.id
        });
    }),
    null == G || null == k)
        ? null
        : (0, t.jsx)(m.ModalRoot, {
              transitionState: l,
              size: m.ModalSize.DYNAMIC,
              className: o()(c, D.gameProfileModal),
              children: (0, t.jsxs)(m.ScrollerNone, {
                  className: D.scrollable,
                  children: [
                      (0, t.jsx)(U, {
                          detectedGame: G,
                          application: k,
                          entries: S,
                          viewId: E,
                          trackAction: O
                      }),
                      (0, t.jsx)(m.HeadingLevel, {
                          children: (0, t.jsxs)('div', {
                              className: o()(D.content, D.mainContent),
                              children: [
                                  (0, t.jsx)(z, {
                                      detectedGame: G,
                                      application: k,
                                      entries: S,
                                      officialGuildInvite: L,
                                      similarGames: A,
                                      similarGamesError: b,
                                      onClose: s,
                                      viewId: E,
                                      trackAction: O
                                  }),
                                  (0, t.jsx)(Y, {
                                      detectedGame: G,
                                      setOfficialGuildInvite: w,
                                      trackAction: O
                                  })
                              ]
                          })
                      })
                  ]
              })
          });
};
