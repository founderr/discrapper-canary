t.r(n), t(47120);
var a = t(200651),
    r = t(192379),
    s = t(120356),
    i = t.n(s),
    o = t(913527),
    l = t.n(o),
    c = t(705512),
    d = t(442837),
    u = t(481060),
    _ = t(224706),
    E = t(560361),
    m = t(835473),
    I = t(168551),
    A = t(485267),
    p = t(561308),
    g = t(669764),
    f = t(706454),
    T = t(768581),
    O = t(814225),
    N = t(709054),
    R = t(810568),
    h = t(998058),
    P = t(839392),
    C = t(567409),
    L = t(774073),
    M = t(426482),
    x = t(715318),
    S = t(38516),
    v = t(891949),
    G = t(252547),
    Z = t(484527),
    b = t(131033),
    j = t(296768),
    D = t(978313),
    y = t(206583),
    w = t(689938),
    k = t(51527);
let U = () =>
    (0, a.jsxs)('div', {
        className: k.gameBadge,
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
    var n;
    let { detectedGame: t, application: s, entries: o, viewId: d } = e,
        _ = r.useMemo(() => (null == t ? void 0 : t.genres.map(O.P3).join(', ')), [t]),
        E = r.useMemo(() => {
            if (null == t) return '';
            let { artwork: e, screenshots: n } = t;
            if (e.length > 0) {
                let n = Math.floor(Math.random() * (e.length - 1));
                return e[n];
            }
            if (n.length > 0) {
                let e = Math.floor(Math.random() * (n.length - 1));
                return n[e];
            }
            return '';
        }, [t]),
        m = null == s ? void 0 : s.getIconURL(160, T.$k ? 'webp' : 'png'),
        I = N.default.extractTimestamp(s.id),
        A = l()().diff(l()(I), 'days') <= y.G,
        g = o.some((e) => (0, p.ig)(e) === c.o.GLOBAL),
        f = null !== (n = t.name) && void 0 !== n ? n : null == s ? void 0 : s.name;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)('div', {
                className: i()(k.gameArtHero),
                style: { backgroundImage: 'url("'.concat(E, '")') }
            }),
            (0, a.jsxs)('div', {
                className: i()(k.content, k.column, k.gapLg, k.headerInfo),
                children: [
                    (0, a.jsxs)('div', {
                        className: k.coverArtRow,
                        children: [
                            (0, a.jsx)('div', {
                                className: k.logoWrapper,
                                children: (0, a.jsx)(M.C, {
                                    game: t,
                                    application: s,
                                    className: k.logo,
                                    size: M.Z.LARGE
                                })
                            }),
                            (0, a.jsx)(x.Z, {
                                applicationId: s.id,
                                viewId: d,
                                className: k.overflowMenu
                            })
                        ]
                    }),
                    (0, a.jsx)('div', {
                        className: i()(k.row, k.gapSm, k.gameDetails),
                        children: (0, a.jsxs)('div', {
                            children: [
                                (0, a.jsx)(u.Heading, {
                                    variant: 'heading-xl/bold',
                                    children: f
                                }),
                                (0, a.jsxs)('div', {
                                    className: i()(k.row, k.gapSm),
                                    children: [
                                        null != m &&
                                            (0, a.jsx)('img', {
                                                className: k.gameIcon,
                                                src: m,
                                                height: 16,
                                                alt: w.Z.Messages.GAME_PROFILE_GAME_ICON_ALT.format({ game: f })
                                            }),
                                        (0, a.jsx)(u.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'text-muted',
                                            children: _
                                        }),
                                        A &&
                                            (0, a.jsx)(u.Text, {
                                                variant: 'eyebrow',
                                                className: k.newBadge,
                                                children: w.Z.Messages.NEW
                                            }),
                                        g &&
                                            (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(u.Text, {
                                                        variant: 'text-sm/medium',
                                                        children: ' \xB7 '
                                                    }),
                                                    (0, a.jsx)(U, {})
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
    var n;
    let { detectedGame: t, application: r, entries: s, officialGuildInvite: i, similarGames: o, similarGamesError: l, onClose: c, viewId: d, trackAction: u } = e;
    return (0, a.jsxs)('div', {
        className: k.sections,
        children: [
            (0, a.jsx)(G.Z, {
                entries: s,
                viewId: d,
                officialGuildId: null == i ? void 0 : null === (n = i.guild) || void 0 === n ? void 0 : n.id,
                onClose: c
            }),
            (0, a.jsx)(v.Z, {
                detectedGame: t,
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
    let { detectedGame: n, setOfficialGuildInvite: t, trackAction: r } = e;
    return (0, a.jsxs)('div', {
        className: i()(k.sidebar, k.column, k.gapLg),
        children: [
            (0, a.jsx)(u.Heading, {
                variant: 'heading-md/bold',
                children: w.Z.Messages.ABOUT
            }),
            (0, a.jsxs)('div', {
                className: k.sections,
                children: [
                    (0, a.jsx)(D.Z, {
                        detectedGame: n,
                        trackAction: r
                    }),
                    (0, a.jsx)(Z.Z, {
                        detectedGame: n,
                        trackClick: r,
                        onInviteResolved: t
                    }),
                    (0, a.jsx)(S.Z, {
                        detectedGame: n,
                        trackClick: r
                    }),
                    (0, a.jsx)(b.Z, { detectedGame: n })
                ]
            })
        ]
    });
}
let B = (e) => e.filter(L.z6).slice(0, 5);
n.default = (e) => {
    var n;
    let { applicationId: t, source: s, sourceUserId: o, transitionState: l, onClose: c } = e,
        { clientThemesClassName: T } = (0, I.ZP)(),
        O = (0, d.e7)([f.default], () => f.default.locale),
        N = r.useMemo(() => (0, R.fP)(), []),
        L = (0, d.Wu)([P.Z], () => {
            var e;
            return (null !== (e = P.Z.getSimilarGames(t)) && void 0 !== e ? e : []).slice(0, 25);
        }),
        [M, x] = r.useState(null),
        S = (0, C.Ns)(t),
        [v, G] = r.useState(null),
        Z = (0, m.q)(t),
        b = (0, d.e7)([g.Z], () => g.Z.getGame(t)),
        j = null !== (n = null == b ? void 0 : b.name) && void 0 !== n ? n : null == Z ? void 0 : Z.name,
        D = (e, n) => {
            var a;
            (0, R.UE)({
                gameName: null != j ? j : '',
                applicationId: t,
                action: e,
                similarGameId: n,
                viewId: N,
                officialGuildId: null == v ? void 0 : null === (a = v.guild) || void 0 === a ? void 0 : a.id
            });
        };
    return (r.useEffect(() => {
        (0, R.IS)({
            source: s,
            viewId: N,
            applicationId: t,
            gameName: null != j ? j : '',
            authorId: o
        });
    }, []),
    r.useEffect(() => {
        (0, A.Jn)();
    }, []),
    (0, m.Z)(L),
    r.useEffect(() => {
        !O.startsWith('en') && (null == b ? void 0 : b.summaryLocalized) == null && _.Z.getDetectableGamesSupplemental([t], { forceFetch: !0 });
    }, [t, null == b ? void 0 : b.summaryLocalized, O]),
    r.useEffect(() => {
        (async () => {
            if (0 === L.length) {
                x(null);
                try {
                    await (0, h.i)(t);
                } catch (e) {
                    x(e);
                }
            }
        })();
    }, [t, L]),
    (0, E.Z)(() => {
        var e;
        let n = Date.now(),
            a = S.map((e) => {
                let t = (0, p.kr)(e) ? (0, p.T_)(e, n) : (0, p.GL)(e, O);
                return JSON.stringify({
                    item_id: e.id,
                    trait: e.traits,
                    time_played: t
                });
            });
        (0, R.wz)({
            viewId: N,
            applicationId: t,
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
              className: i()(T, k.gameProfileModal),
              children: (0, a.jsxs)(u.Scroller, {
                  orientation: 'auto',
                  children: [
                      (0, a.jsx)(H, {
                          detectedGame: b,
                          application: Z,
                          entries: S,
                          viewId: N,
                          trackAction: D
                      }),
                      (0, a.jsx)(u.HeadingLevel, {
                          children: (0, a.jsxs)('div', {
                              className: i()(k.content, k.mainContent),
                              children: [
                                  (0, a.jsx)(F, {
                                      detectedGame: b,
                                      application: Z,
                                      entries: S,
                                      officialGuildInvite: v,
                                      similarGames: L,
                                      similarGamesError: M,
                                      onClose: c,
                                      viewId: N,
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
