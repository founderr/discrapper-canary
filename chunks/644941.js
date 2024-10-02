n.r(a), n(47120);
var t = n(735250),
    i = n(470079),
    o = n(120356),
    r = n.n(o),
    l = n(913527),
    s = n.n(l),
    c = n(705512),
    d = n(442837),
    u = n(433517),
    m = n(481060),
    p = n(560361),
    g = n(812206),
    f = n(168551),
    _ = n(485267),
    x = n(26033),
    v = n(561308),
    h = n(669764),
    I = n(706454),
    E = n(768581),
    A = n(814225),
    j = n(709054),
    C = n(810568),
    b = n(998058),
    M = n(839392),
    P = n(96856),
    T = n(567409),
    N = n(774073),
    S = n(124030),
    L = n(715318),
    w = n(38516),
    k = n(891949),
    O = n(252547),
    G = n(484527),
    y = n(131033),
    R = n(296768),
    Z = n(978313),
    F = n(206583),
    H = n(689938),
    D = n(51527);
let B = 'GameProfileModal',
    U = () =>
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
function W(e) {
    var a, o;
    let { detectedGame: l, application: d, entries: p, viewId: g, trackAction: f } = e,
        [_, x] = i.useState(() => {
            var e;
            return null === (e = u.K.get(B)) || void 0 === e ? void 0 : e[d.id];
        }),
        h = (0, P.p)('GameProfileModal'),
        I = i.useMemo(() => (null == l ? void 0 : l.genres.map(A.P3).join(', ')), [l]),
        b = i.useMemo(() => {
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
        T = j.default.extractTimestamp(d.id),
        N = null !== (a = l.coverImageUrl) && void 0 !== a ? a : M,
        w = s()().diff(s()(T), 'days') <= F.G,
        k = p.some((e) => (0, v.ig)(e) === c.o.GLOBAL),
        O = null !== (o = l.name) && void 0 !== o ? o : null == d ? void 0 : d.name,
        G = i.useCallback(
            () => () => {
                var e;
                let a = null !== (e = u.K.get(B)) && void 0 !== e ? e : {};
                (a[d.id] = !a[d.id]),
                    u.K.set(B, a),
                    f(a[d.id] ? C.as.FollowGame : C.as.UnfollowGame),
                    a[d.id] &&
                        (0, S.L)() &&
                        (0, m.openModalLazy)(async () => {
                            let { default: e } = await n.e('86564').then(n.bind(n, 641758));
                            return (a) =>
                                (0, t.jsx)(e, {
                                    ...a,
                                    applicationId: d.id,
                                    background: b,
                                    viewId: g
                                });
                        }),
                    x(a[d.id]);
            },
            [d.id, b, f, g]
        );
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)('div', {
                className: r()(D.gameArtHero),
                style: { backgroundImage: 'url("'.concat(b, '")') }
            }),
            (0, t.jsxs)('div', {
                className: r()(D.content, D.column, D.gapLg, D.headerInfo),
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
                                        alt: H.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: O })
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
                        className: r()(D.row, D.gapSm, D.gameDetails),
                        children: [
                            (0, t.jsxs)('div', {
                                children: [
                                    (0, t.jsx)(m.Heading, {
                                        variant: 'heading-xl/bold',
                                        children: O
                                    }),
                                    (0, t.jsxs)('div', {
                                        className: r()(D.row, D.gapSm),
                                        children: [
                                            null != M &&
                                                (0, t.jsx)('img', {
                                                    src: M,
                                                    height: 16,
                                                    alt: H.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({ game: O })
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
                                                        (0, t.jsx)(U, {})
                                                    ]
                                                })
                                        ]
                                    })
                                ]
                            }),
                            (0, t.jsx)('div', {
                                children:
                                    h &&
                                    (0, t.jsx)(m.Tooltip, {
                                        text: _ ? H.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : H.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                                        children: (e) =>
                                            (0, t.jsxs)(m.Button, {
                                                ...e,
                                                innerClassName: D.followButton,
                                                color: _ ? m.Button.Colors.PRIMARY : m.Button.Colors.BRAND,
                                                onClick: G,
                                                children: [_ ? (0, t.jsx)(m.BellSlashIcon, { color: 'white' }) : (0, t.jsx)(m.BellIcon, { color: 'white' }), _ ? H.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : H.Z.Messages.FOLLOW]
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
    let { detectedGame: n, application: i, entries: o, officialGuildInvite: r, similarGames: l, similarGamesError: s, onClose: c, viewId: d, trackAction: u } = e;
    return (0, t.jsxs)('div', {
        className: D.sections,
        children: [
            (0, t.jsx)(O.Z, {
                entries: o,
                viewId: d,
                officialGuildId: null == r ? void 0 : null === (a = r.guild) || void 0 === a ? void 0 : a.id,
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
        className: r()(D.sidebar, D.column, D.gapLg),
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
                    (0, t.jsx)(G.Z, {
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
    let { applicationId: a, source: n, sourceUserId: o, transitionState: l, onClose: s } = e,
        { clientThemesClassName: c } = (0, f.ZP)(),
        u = (0, d.e7)([I.default], () => I.default.locale),
        E = i.useMemo(() => (0, C.fP)(), []),
        A = (0, d.Wu)([M.Z], () => {
            var e;
            return (null !== (e = M.Z.getSimilarGames(a)) && void 0 !== e ? e : []).slice(0, 25);
        }),
        [j, P] = i.useState(null),
        { entries: N } = (0, T.Z)(),
        S = i.useMemo(() => {
            var e;
            return null !== (e = null == N ? void 0 : N.filter((e) => (0, x.dX)(e) && e.extra.application_id === a)) && void 0 !== e ? e : [];
        }, [N, a]),
        [L, w] = i.useState(null),
        k = (0, d.e7)([g.Z], () => g.Z.getApplication(a)),
        O = (0, d.e7)([h.Z], () => h.Z.getGame(a)),
        G = (e, n) => {
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
            gameName: null !== (t = null !== (e = null == O ? void 0 : O.name) && void 0 !== e ? e : null == k ? void 0 : k.name) && void 0 !== t ? t : '',
            authorId: o
        });
    }, []),
    i.useEffect(() => {
        (0, _.Jn)();
    }, []),
    i.useEffect(() => {
        (async () => {
            if (0 === A.length) {
                P(null);
                try {
                    await (0, b.i)(a);
                } catch (e) {
                    P(e);
                }
            }
        })();
    }, [a, A]),
    (0, p.Z)(() => {
        var e, n, t;
        let i = Date.now(),
            o = S.map((e) => {
                let a = (0, v.kr)(e) ? (0, v.T_)(e, i) : (0, v.GL)(e, u);
                return JSON.stringify({
                    item_id: e.id,
                    trait: e.traits,
                    time_played: a
                });
            });
        (0, C.wz)({
            viewId: E,
            applicationId: a,
            gameName: null !== (t = null !== (n = null == O ? void 0 : O.name) && void 0 !== n ? n : null == k ? void 0 : k.name) && void 0 !== t ? t : '',
            playedFriendIds: S.map((e) => e.author_id),
            playedFriendsData: o,
            similarGames: K(A),
            officialGuildId: null == L ? void 0 : null === (e = L.guild) || void 0 === e ? void 0 : e.id
        });
    }),
    null == O || null == k)
        ? null
        : (0, t.jsx)(m.ModalRoot, {
              transitionState: l,
              size: m.ModalSize.DYNAMIC,
              className: r()(c, D.gameProfileModal),
              children: (0, t.jsxs)(m.ScrollerNone, {
                  className: D.scrollable,
                  children: [
                      (0, t.jsx)(W, {
                          detectedGame: O,
                          application: k,
                          entries: S,
                          viewId: E,
                          trackAction: G
                      }),
                      (0, t.jsx)(m.HeadingLevel, {
                          children: (0, t.jsxs)('div', {
                              className: r()(D.content, D.mainContent),
                              children: [
                                  (0, t.jsx)(z, {
                                      detectedGame: O,
                                      application: k,
                                      entries: S,
                                      officialGuildInvite: L,
                                      similarGames: A,
                                      similarGamesError: j,
                                      onClose: s,
                                      viewId: E,
                                      trackAction: G
                                  }),
                                  (0, t.jsx)(Y, {
                                      detectedGame: O,
                                      setOfficialGuildInvite: w,
                                      trackAction: G
                                  })
                              ]
                          })
                      })
                  ]
              })
          });
};
