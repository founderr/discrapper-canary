n.r(t), n(47120);
var a = n(200651),
    r = n(192379),
    s = n(120356),
    i = n.n(s),
    o = n(913527),
    l = n.n(o),
    c = n(705512),
    d = n(442837),
    u = n(481060),
    _ = n(224706),
    E = n(560361),
    m = n(835473),
    I = n(168551),
    p = n(485267),
    A = n(561308),
    g = n(669764),
    T = n(706454),
    f = n(768581),
    N = n(814225),
    O = n(709054),
    R = n(810568),
    h = n(998058),
    P = n(839392),
    C = n(567409),
    L = n(774073),
    M = n(426482),
    x = n(715318),
    S = n(38516),
    v = n(891949),
    G = n(252547),
    Z = n(484527),
    b = n(131033),
    j = n(296768),
    D = n(978313),
    y = n(206583),
    w = n(689938),
    U = n(51527);
let k = () =>
    (0, a.jsxs)('div', {
        className: U.gameBadge,
        children: [
            (0, a.jsx)(u.FireIcon, { size: 'xxs' }),
            (0, a.jsx)(u.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: w.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
            })
        ]
    });
function H(e) {
    var t;
    let { detectedGame: n, application: s, entries: o, viewId: d } = e,
        _ = r.useMemo(() => (null == n ? void 0 : n.genres.map(N.P3).join(', ')), [n]),
        E = r.useMemo(() => {
            if (null == n) return '';
            let { artwork: e, screenshots: t } = n;
            if (e.length > 0) {
                let t = Math.floor(Math.random() * (e.length - 1));
                return e[t];
            }
            if (t.length > 0) {
                let e = Math.floor(Math.random() * (t.length - 1));
                return t[e];
            }
            return '';
        }, [n]),
        m = null == s ? void 0 : s.getIconURL(160, f.$k ? 'webp' : 'png'),
        I = O.default.extractTimestamp(s.id),
        p = l()().diff(l()(I), 'days') <= y.G,
        g = o.some((e) => (0, A.ig)(e) === c.o.GLOBAL),
        T = null !== (t = n.name) && void 0 !== t ? t : null == s ? void 0 : s.name;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)('div', {
                className: i()(U.gameArtHero),
                style: { backgroundImage: 'url("'.concat(E, '")') }
            }),
            (0, a.jsxs)('div', {
                className: i()(U.content, U.column, U.gapLg, U.headerInfo),
                children: [
                    (0, a.jsxs)('div', {
                        className: U.coverArtRow,
                        children: [
                            (0, a.jsx)('div', {
                                className: U.logoWrapper,
                                children: (0, a.jsx)(M.C, {
                                    game: n,
                                    application: s,
                                    className: U.logo,
                                    size: M.Z.LARGE
                                })
                            }),
                            (0, a.jsx)(x.Z, {
                                applicationId: s.id,
                                viewId: d,
                                className: U.overflowMenu
                            })
                        ]
                    }),
                    (0, a.jsx)('div', {
                        className: i()(U.row, U.gapSm, U.gameDetails),
                        children: (0, a.jsxs)('div', {
                            children: [
                                (0, a.jsx)(u.Heading, {
                                    variant: 'heading-xl/bold',
                                    children: T
                                }),
                                (0, a.jsxs)('div', {
                                    className: i()(U.row, U.gapSm),
                                    children: [
                                        null != m &&
                                            (0, a.jsx)('img', {
                                                className: U.gameIcon,
                                                src: m,
                                                height: 16,
                                                alt: w.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({ game: T })
                                            }),
                                        (0, a.jsx)(u.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'text-muted',
                                            children: _
                                        }),
                                        p &&
                                            (0, a.jsx)(u.Text, {
                                                variant: 'eyebrow',
                                                className: U.newBadge,
                                                children: w.Z.Messages.NEW
                                            }),
                                        g &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(u.Text, {
                                                        variant: 'text-sm/medium',
                                                        children: ' \xB7 '
                                                    }),
                                                    (0, a.jsx)(k, {})
                                                ]
                                            })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function F(e) {
    var t;
    let { detectedGame: n, application: r, entries: s, officialGuildInvite: i, similarGames: o, similarGamesError: l, onClose: c, viewId: d, trackAction: u } = e;
    return (0, a.jsxs)('div', {
        className: U.sections,
        children: [
            (0, a.jsx)(G.Z, {
                entries: s,
                viewId: d,
                officialGuildId: null == i ? void 0 : null === (t = i.guild) || void 0 === t ? void 0 : t.id,
                onClose: c
            }),
            (0, a.jsx)(v.Z, {
                detectedGame: n,
                trackAction: u
            }),
            (0, a.jsx)(j.Z, {
                applicationId: r.id,
                onClose: c,
                trackAction: u,
                similarGames: o,
                similarGamesError: l
            })
        ]
    });
}
function K(e) {
    let { detectedGame: t, setOfficialGuildInvite: n, trackAction: r } = e;
    return (0, a.jsxs)('div', {
        className: i()(U.sidebar, U.column, U.gapLg),
        children: [
            (0, a.jsx)(u.Heading, {
                variant: 'heading-md/bold',
                children: w.Z.Messages.ABOUT
            }),
            (0, a.jsxs)('div', {
                className: U.sections,
                children: [
                    (0, a.jsx)(D.Z, {
                        detectedGame: t,
                        trackAction: r
                    }),
                    (0, a.jsx)(Z.Z, {
                        detectedGame: t,
                        trackClick: r,
                        onInviteResolved: n
                    }),
                    (0, a.jsx)(S.Z, {
                        detectedGame: t,
                        trackClick: r
                    }),
                    (0, a.jsx)(b.Z, { detectedGame: t })
                ]
            })
        ]
    });
}
let B = (e) => e.filter(L.z6).slice(0, 5);
t.default = (e) => {
    var t;
    let { applicationId: n, source: s, sourceUserId: o, transitionState: l, onClose: c } = e,
        { clientThemesClassName: f } = (0, I.ZP)(),
        N = (0, d.e7)([T.default], () => T.default.locale),
        O = r.useMemo(() => (0, R.fP)(), []),
        L = (0, d.Wu)([P.Z], () => {
            var e;
            return (null !== (e = P.Z.getSimilarGames(n)) && void 0 !== e ? e : []).slice(0, 25);
        }),
        [M, x] = r.useState(null),
        S = (0, C.Ns)(n),
        [v, G] = r.useState(null),
        Z = (0, m.q)(n),
        b = (0, d.e7)([g.Z], () => g.Z.getGame(n)),
        j = null !== (t = null == b ? void 0 : b.name) && void 0 !== t ? t : null == Z ? void 0 : Z.name,
        D = (e, t) => {
            var a;
            (0, R.UE)({
                gameName: null != j ? j : '',
                applicationId: n,
                action: e,
                similarGameId: t,
                viewId: O,
                officialGuildId: null == v ? void 0 : null === (a = v.guild) || void 0 === a ? void 0 : a.id
            });
        };
    return (r.useEffect(() => {
        (0, R.IS)({
            source: s,
            viewId: O,
            applicationId: n,
            gameName: null != j ? j : '',
            authorId: o
        });
    }, []),
    r.useEffect(() => {
        (0, p.Jn)();
    }, []),
    (0, m.Z)(L),
    r.useEffect(() => {
        !N.startsWith('en') && (null == b ? void 0 : b.summaryLocalized) == null && _.Z.getDetectableGamesSupplemental([n], { forceFetch: !0 });
    }, [n, null == b ? void 0 : b.summaryLocalized, N]),
    r.useEffect(() => {
        (async () => {
            if (0 === L.length) {
                x(null);
                try {
                    await (0, h.i)(n);
                } catch (e) {
                    x(e);
                }
            }
        })();
    }, [n, L]),
    (0, E.Z)(() => {
        var e;
        let t = Date.now(),
            a = S.map((e) => {
                let n = (0, A.kr)(e) ? (0, A.T_)(e, t) : (0, A.GL)(e, N);
                return JSON.stringify({
                    item_id: e.id,
                    trait: e.traits,
                    time_played: n
                });
            });
        (0, R.wz)({
            viewId: O,
            applicationId: n,
            gameName: null != j ? j : '',
            playedFriendIds: S.map((e) => e.author_id),
            playedFriendsData: a,
            similarGames: B(L),
            officialGuildId: null == v ? void 0 : null === (e = v.guild) || void 0 === e ? void 0 : e.id
        });
    }),
    null == b || null == Z)
        ? null
        : (0, a.jsx)(u.ModalRoot, {
              transitionState: l,
              size: u.ModalSize.DYNAMIC,
              className: i()(f, U.gameProfileModal),
              children: (0, a.jsxs)(u.Scroller, {
                  orientation: 'auto',
                  children: [
                      (0, a.jsx)(H, {
                          detectedGame: b,
                          application: Z,
                          entries: S,
                          viewId: O,
                          trackAction: D
                      }),
                      (0, a.jsx)(u.HeadingLevel, {
                          children: (0, a.jsxs)('div', {
                              className: i()(U.content, U.mainContent),
                              children: [
                                  (0, a.jsx)(F, {
                                      detectedGame: b,
                                      application: Z,
                                      entries: S,
                                      officialGuildInvite: v,
                                      similarGames: L,
                                      similarGamesError: M,
                                      onClose: c,
                                      viewId: O,
                                      trackAction: D
                                  }),
                                  (0, a.jsx)(K, {
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
