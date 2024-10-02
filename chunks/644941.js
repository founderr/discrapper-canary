a.r(n), a(47120);
var t = a(735250),
    i = a(470079),
    o = a(120356),
    r = a.n(o),
    l = a(913527),
    s = a.n(l),
    c = a(705512),
    d = a(442837),
    u = a(433517),
    m = a(481060),
    p = a(560361),
    _ = a(812206),
    g = a(168551),
    f = a(485267),
    x = a(26033),
    v = a(561308),
    h = a(669764),
    I = a(706454),
    E = a(768581),
    A = a(814225),
    j = a(709054),
    M = a(810568),
    C = a(998058),
    T = a(839392),
    P = a(96856),
    b = a(567409),
    N = a(774073),
    S = a(124030),
    L = a(715318),
    w = a(38516),
    O = a(252547),
    G = a(484527),
    k = a(124580),
    y = a(296768),
    R = a(978313),
    Z = a(206583),
    F = a(689938),
    H = a(51527);
let D = 'GameProfileModal',
    B = () =>
        (0, t.jsxs)('div', {
            className: H.gameBadge,
            children: [
                (0, t.jsx)(m.FireIcon, { size: 'xxs' }),
                (0, t.jsx)(m.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: F.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
                })
            ]
        });
function U(e) {
    var n, o;
    let { detectedGame: l, application: d, entries: p, viewId: _, trackAction: g } = e,
        [f, x] = i.useState(() => {
            var e;
            return null === (e = u.K.get(D)) || void 0 === e ? void 0 : e[d.id];
        }),
        h = (0, P.p)('GameProfileModal'),
        I = i.useMemo(() => (null == l ? void 0 : l.genres.map(A.P3).join(', ')), [l]),
        C = i.useMemo(() => {
            if (null == l) return '';
            let { artwork: e, screenshots: n } = l;
            if (e.length > 0) {
                let n = Math.floor(Math.random() * (e.length - 1));
                return e[n];
            }
            if (n.length > 0) {
                let e = Math.floor(Math.random() * (n.length - 1));
                return n[e];
            }
            return '';
        }, [l]),
        T = null == d ? void 0 : d.getIconURL(160, E.$k ? 'webp' : 'png'),
        b = j.default.extractTimestamp(d.id),
        N = null !== (n = l.coverImageUrl) && void 0 !== n ? n : T,
        w = s()().diff(s()(b), 'days') <= Z.G,
        O = p.some((e) => (0, v.ig)(e) === c.o.GLOBAL),
        G = null !== (o = l.name) && void 0 !== o ? o : null == d ? void 0 : d.name,
        k = i.useCallback(
            () => () => {
                var e;
                let n = null !== (e = u.K.get(D)) && void 0 !== e ? e : {};
                (n[d.id] = !n[d.id]),
                    u.K.set(D, n),
                    g(n[d.id] ? M.as.FollowGame : M.as.UnfollowGame),
                    n[d.id] &&
                        (0, S.L)() &&
                        (0, m.openModalLazy)(async () => {
                            let { default: e } = await a.e('86564').then(a.bind(a, 641758));
                            return (n) =>
                                (0, t.jsx)(e, {
                                    ...n,
                                    applicationId: d.id,
                                    background: C,
                                    viewId: _
                                });
                        }),
                    x(n[d.id]);
            },
            [d.id, C, g, _]
        );
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)('div', {
                className: r()(H.gameArtHero),
                style: { backgroundImage: 'url("'.concat(C, '")') }
            }),
            (0, t.jsxs)('div', {
                className: r()(H.content, H.column, H.gapLg, H.headerInfo),
                children: [
                    (0, t.jsxs)('div', {
                        className: H.coverArtRow,
                        children: [
                            (0, t.jsx)('div', {
                                className: H.logoWrapper,
                                children:
                                    null != N &&
                                    (0, t.jsx)('img', {
                                        className: H.logo,
                                        src: N,
                                        alt: F.Z.Messages.GAME_PROFILE_GAME_LOGO_ALT.format({ game: G })
                                    })
                            }),
                            (0, t.jsx)(L.Z, {
                                applicationId: d.id,
                                viewId: _,
                                className: H.overflowMenu
                            })
                        ]
                    }),
                    (0, t.jsxs)('div', {
                        className: r()(H.row, H.gapSm, H.gameDetails),
                        children: [
                            (0, t.jsxs)('div', {
                                children: [
                                    (0, t.jsx)(m.Heading, {
                                        variant: 'heading-xl/bold',
                                        children: G
                                    }),
                                    (0, t.jsxs)('div', {
                                        className: r()(H.row, H.gapSm),
                                        children: [
                                            null != T &&
                                                (0, t.jsx)('img', {
                                                    src: T,
                                                    height: 16,
                                                    alt: F.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({ game: G })
                                                }),
                                            (0, t.jsx)(m.Text, {
                                                variant: 'text-sm/semibold',
                                                color: 'text-muted',
                                                children: I
                                            }),
                                            w &&
                                                (0, t.jsx)(m.Text, {
                                                    variant: 'eyebrow',
                                                    className: H.newBadge,
                                                    children: F.Z.Messages.NEW
                                                }),
                                            O &&
                                                (0, t.jsxs)(t.Fragment, {
                                                    children: [
                                                        (0, t.jsx)(m.Text, {
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
                                    h &&
                                    (0, t.jsx)(m.Tooltip, {
                                        text: f ? F.Z.Messages.GAME_PROFILE_UNFOLLOW_TOOLTIP : F.Z.Messages.GAME_PROFILE_FOLLOW_TOOLTIP,
                                        children: (e) =>
                                            (0, t.jsxs)(m.Button, {
                                                ...e,
                                                innerClassName: H.followButton,
                                                color: f ? m.Button.Colors.PRIMARY : m.Button.Colors.BRAND,
                                                onClick: k,
                                                children: [f ? (0, t.jsx)(m.BellSlashIcon, { color: 'white' }) : (0, t.jsx)(m.BellIcon, { color: 'white' }), f ? F.Z.Messages.GAME_PROFILE_UNFOLLOW_GAME : F.Z.Messages.FOLLOW]
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
    let { detectedGame: o, application: l, entries: s, officialGuildInvite: c, similarGames: d, similarGamesError: u, onClose: p, viewId: _, trackAction: g } = e,
        f = i.useMemo(() => {
            var e, n;
            let a = (null !== (e = null == o ? void 0 : o.artwork) && void 0 !== e ? e : []).map((e) => ({ src: e }));
            return [...(null !== (n = null == o ? void 0 : o.screenshots) && void 0 !== n ? n : []).map((e) => ({ src: e })), ...a];
        }, [null == o ? void 0 : o.artwork, null == o ? void 0 : o.screenshots]);
    return (0, t.jsxs)('div', {
        className: H.sections,
        children: [
            (0, t.jsx)(O.Z, {
                entries: s,
                viewId: _,
                officialGuildId: null == c ? void 0 : null === (n = c.guild) || void 0 === n ? void 0 : n.id,
                onClose: p
            }),
            f.length > 0 &&
                (0, t.jsxs)('div', {
                    children: [
                        (0, t.jsx)(m.Heading, {
                            className: H.sectionHeader,
                            variant: 'text-md/semibold',
                            color: 'header-primary',
                            children: F.Z.Messages.GAME_PROFILE_SCREENSHOTS
                        }),
                        (0, t.jsx)(m.Scroller, {
                            className: r()(H.row, H.gapLg, H.imageScroller),
                            orientation: 'horizontal',
                            children: f.map((e, n) =>
                                (0, t.jsx)(
                                    m.Clickable,
                                    {
                                        className: H.clickable,
                                        focusProps: {
                                            offset: 4,
                                            ringClassName: H.gameArtworkFocusRing
                                        },
                                        onClick: () => {
                                            g(M.as.ClickImage),
                                                (0, m.openModalLazy)(async () => {
                                                    let { default: e } = await a.e('99857').then(a.bind(a, 895023));
                                                    return (a) => {
                                                        let { ...i } = a;
                                                        return (0, t.jsx)(e, {
                                                            className: H.mediaModal,
                                                            ...i,
                                                            items: f,
                                                            startingIndex: n
                                                        });
                                                    };
                                                });
                                        },
                                        children: (0, t.jsx)('img', {
                                            src: e.src,
                                            className: H.gameArtwork,
                                            alt: F.Z.Messages.GAME_PROFILE_GAME_ARTWORK_ALT.format({ game: name })
                                        })
                                    },
                                    e.src
                                )
                            )
                        }),
                        (0, t.jsx)(m.Spacer, { size: 8 })
                    ]
                }),
            (0, t.jsx)(y.Z, {
                applicationId: l.id,
                onClose: p,
                trackAction: g,
                similarGames: d,
                similarGamesError: u
            })
        ]
    });
}
function z(e) {
    let { detectedGame: n, setOfficialGuildInvite: a, trackAction: i } = e;
    return (0, t.jsxs)('div', {
        className: r()(H.sidebar, H.column, H.gapLg),
        children: [
            (0, t.jsx)(m.Heading, {
                variant: 'heading-md/bold',
                children: F.Z.Messages.ABOUT
            }),
            (0, t.jsxs)('div', {
                className: H.sections,
                children: [
                    (0, t.jsx)(R.Z, {
                        detectedGame: n,
                        trackAction: i
                    }),
                    (0, t.jsx)(G.Z, {
                        detectedGame: n,
                        trackClick: i,
                        onInviteResolved: a
                    }),
                    (0, t.jsx)(w.Z, {
                        detectedGame: n,
                        trackClick: i
                    }),
                    (0, t.jsx)(k.Z, { detectedGame: n })
                ]
            })
        ]
    });
}
let Y = (e) => e.filter(N.z6).slice(0, 5);
n.default = (e) => {
    let { applicationId: n, source: a, sourceUserId: o, transitionState: l, onClose: s } = e,
        { clientThemesClassName: c } = (0, g.ZP)(),
        u = (0, d.e7)([I.default], () => I.default.locale),
        E = i.useMemo(() => (0, M.fP)(), []),
        A = (0, d.Wu)([T.Z], () => {
            var e;
            return (null !== (e = T.Z.getSimilarGames(n)) && void 0 !== e ? e : []).slice(0, 25);
        }),
        [j, P] = i.useState(null),
        { entries: N } = (0, b.Z)(),
        S = i.useMemo(() => {
            var e;
            return null !== (e = null == N ? void 0 : N.filter((e) => (0, x.dX)(e) && e.extra.application_id === n)) && void 0 !== e ? e : [];
        }, [N, n]),
        [L, w] = i.useState(null),
        O = (0, d.e7)([_.Z], () => _.Z.getApplication(n)),
        G = (0, d.e7)([h.Z], () => h.Z.getGame(n)),
        k = (e, a) => {
            var t;
            (0, M.UE)({
                gameName: null != name ? name : '',
                applicationId: n,
                action: e,
                similarGameId: a,
                viewId: E,
                officialGuildId: null == L ? void 0 : null === (t = L.guild) || void 0 === t ? void 0 : t.id
            });
        };
    return (i.useEffect(() => {
        var e, t;
        (0, M.IS)({
            source: a,
            viewId: E,
            applicationId: n,
            gameName: null !== (t = null !== (e = null == G ? void 0 : G.name) && void 0 !== e ? e : null == O ? void 0 : O.name) && void 0 !== t ? t : '',
            authorId: o
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
                    await (0, C.i)(n);
                } catch (e) {
                    P(e);
                }
            }
        })();
    }, [n, A]),
    (0, p.Z)(() => {
        var e, a, t;
        let i = Date.now(),
            o = S.map((e) => {
                let n = (0, v.kr)(e) ? (0, v.T_)(e, i) : (0, v.GL)(e, u);
                return JSON.stringify({
                    item_id: e.id,
                    trait: e.traits,
                    time_played: n
                });
            });
        (0, M.wz)({
            viewId: E,
            applicationId: n,
            gameName: null !== (t = null !== (a = null == G ? void 0 : G.name) && void 0 !== a ? a : null == O ? void 0 : O.name) && void 0 !== t ? t : '',
            playedFriendIds: S.map((e) => e.author_id),
            playedFriendsData: o,
            similarGames: Y(A),
            officialGuildId: null == L ? void 0 : null === (e = L.guild) || void 0 === e ? void 0 : e.id
        });
    }),
    null == G || null == O)
        ? null
        : (0, t.jsx)(m.ModalRoot, {
              transitionState: l,
              size: m.ModalSize.DYNAMIC,
              className: r()(c, H.gameProfileModal),
              children: (0, t.jsxs)(m.ScrollerNone, {
                  className: H.scrollable,
                  children: [
                      (0, t.jsx)(U, {
                          detectedGame: G,
                          application: O,
                          entries: S,
                          viewId: E,
                          trackAction: k
                      }),
                      (0, t.jsx)(m.HeadingLevel, {
                          children: (0, t.jsxs)('div', {
                              className: r()(H.content, H.mainContent),
                              children: [
                                  (0, t.jsx)(W, {
                                      detectedGame: G,
                                      application: O,
                                      entries: S,
                                      officialGuildInvite: L,
                                      similarGames: A,
                                      similarGamesError: j,
                                      onClose: s,
                                      viewId: E,
                                      trackAction: k
                                  }),
                                  (0, t.jsx)(z, {
                                      detectedGame: G,
                                      setOfficialGuildInvite: w,
                                      trackAction: k
                                  })
                              ]
                          })
                      })
                  ]
              })
          });
};
