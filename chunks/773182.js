n.d(t, {
    KF: function () {
        return F;
    },
    LW: function () {
        return z;
    },
    TH: function () {
        return W;
    }
}),
    n(724458),
    n(47120);
var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(266067),
    o = n(212433),
    c = n(442837),
    u = n(704215),
    d = n(481060),
    h = n(224706),
    p = n(350810),
    f = n(110924),
    _ = n(410030),
    m = n(100527),
    g = n(970606),
    C = n(824991),
    I = n(564990),
    E = n(353647),
    N = n(243778),
    S = n(669764),
    x = n(859921),
    v = n(863249),
    Z = n(937111),
    T = n(667105),
    b = n(369566),
    A = n(314897),
    R = n(480294),
    M = n(564334),
    L = n(302221),
    P = n(956664),
    y = n(602147),
    O = n(981631),
    j = n(308083),
    D = n(921944),
    w = n(49898),
    U = n(128449),
    G = n(46140),
    k = n(689938),
    B = n(877861);
function H(e) {
    let { color: t } = e;
    return (0, i.jsxs)('svg', {
        className: B.doubleIcon,
        width: '102',
        height: '61',
        viewBox: '0 0 102 61',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: [
            (0, i.jsx)('style', { children: '\n          #paint0_linear_12198_260279,\n          #paint1_linear_12198_260279 {\n            --color: '.concat(t, ';\n          }\n        ') }),
            (0, i.jsx)('path', {
                d: 'M42.6078 48.956V61H1.2808V57.2741C1.2808 51.8442 2.16312 47.3674 3.92777 43.8438C5.69242 40.3201 7.7417 37.634 10.0756 35.7855C12.4664 33.937 15.768 31.7708 19.9804 29.2869C23.6236 27.1496 25.9859 25.2434 27.0675 23.5682C28.149 21.8352 28.6898 20.0445 28.6898 18.196C28.6898 16.3475 28.0067 14.8456 26.6405 13.6903C25.2744 12.535 23.3959 11.9574 21.005 11.9574C18.8419 11.9574 16.878 12.7083 15.1134 14.2102C13.3487 15.7121 11.9256 17.8494 10.8441 20.6222L0 14.1236C3.64315 4.70786 10.901 0 21.7735 0C28.3767 0 33.443 1.64631 36.9723 4.93892C40.5016 8.23154 42.2662 12.795 42.2662 18.6293C42.2662 22.7306 41.0993 26.3987 38.7654 29.6335C36.4884 32.8684 32.5322 36.1321 26.8967 39.4247C23.8797 41.1577 21.4889 42.7751 19.7242 44.277C18.0165 45.7789 16.9065 47.3385 16.3942 48.956H42.6078Z',
                fill: 'url(#paint0_linear_12198_260279)'
            }),
            (0, i.jsx)('path', {
                d: 'M62.4661 61H45.9012L65.54 30.0668L47.9504 1.21307H64.0885L73.9933 19.1492L83.8981 1.21307H100.036L82.3611 30.0668L102 61H85.5204L73.9933 41.1577L62.4661 61Z',
                fill: 'url(#paint1_linear_12198_260279)'
            }),
            (0, i.jsxs)('defs', {
                children: [
                    (0, i.jsxs)('linearGradient', {
                        id: 'paint0_linear_12198_260279',
                        x1: '17.6538',
                        y1: '35',
                        x2: '98.0769',
                        y2: '35',
                        gradientUnits: 'userSpaceOnUse',
                        children: [
                            (0, i.jsx)('stop', { stopColor: 'var(--color)' }),
                            (0, i.jsx)('stop', {
                                offset: '1',
                                stopColor: 'var(--color)',
                                stopOpacity: '0'
                            })
                        ]
                    }),
                    (0, i.jsxs)('linearGradient', {
                        id: 'paint1_linear_12198_260279',
                        x1: '17.6538',
                        y1: '35',
                        x2: '98.0769',
                        y2: '35',
                        gradientUnits: 'userSpaceOnUse',
                        children: [
                            (0, i.jsx)('stop', { stopColor: 'var(--color)' }),
                            (0, i.jsx)('stop', {
                                offset: '1',
                                stopColor: 'var(--color)',
                                stopOpacity: '0'
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
let V = M.Z.parseString('#E93446'),
    F = l.memo(function (e) {
        let { children: t } = e,
            n = (0, s.TH)(),
            {
                games: r,
                treatment: f,
                hasFetchedGames: v
            } = (function () {
                let e = (0, c.e7)([A.default], () => A.default.getId()),
                    t = (0, _.ZP)(),
                    { recent: n, outbox: i } = (0, b.Z)(e),
                    r = (0, c.e7)([E.Z], () => E.Z.hasInitialized),
                    a = (0, c.e7)([R.Z], () => R.Z.hasConsented(O.pjP.PERSONALIZATION)),
                    s = null == i && r,
                    o = l.useMemo(() => (a ? n.reduce((e, t) => (e.length >= 5 || 'played_game_extra' !== t.extra.type || null == j.gQ.get(t.extra.application_id) ? e : e.concat(t.extra.application_id)), []) : []), [n, a]),
                    u = o.length > 0 ? o : j.Id;
                l.useEffect(() => {
                    s && a && (0, I.JX)(e);
                }, [e, s, a]),
                    l.useEffect(() => {
                        h.Z.getDetectableGamesSupplemental(u);
                    }, [u]);
                let d = (0, c.Wu)([S.Z], () => S.Z.getGames(u), [u]),
                    p = (0, c.e7)([S.Z], () => u.some((e) => S.Z.isFetching(e)), [u]),
                    f = l.useMemo(() => {
                        let e = {};
                        for (let t of d) {
                            if (null == t) continue;
                            let { coverImageUrl: n, artwork: i, screenshots: l } = t;
                            if (null != n) {
                                e[t.applicationId] = n;
                                continue;
                            }
                            if (i.length > 0) {
                                let n = Math.floor(Math.random() * (i.length - 1));
                                e[t.applicationId] = i[n];
                                continue;
                            }
                            if (l.length > 0) {
                                let n = Math.floor(Math.random() * (l.length - 1));
                                e[t.applicationId] = l[n];
                                continue;
                            }
                        }
                        return e;
                    }, [d]),
                    [m, g] = l.useState({});
                return (
                    l.useEffect(() => {
                        Promise.all(
                            Object.entries(f).map((e) => {
                                let [n, i] = e;
                                return null == i
                                    ? Promise.resolve({
                                          color: new M.Z(0, 255, 0, 1),
                                          gameId: n
                                      })
                                    : (0, P.OF)(i)
                                          .then((e) => {
                                              let [i, l, r] = e[0],
                                                  a = new M.Z(i, l, r, 1),
                                                  s = 'light' === t ? new M.Z(255, 255, 255, 1) : new M.Z(0, 0, 0, 1),
                                                  o = (0, L.k8)({
                                                      colors: [a, s],
                                                      ratio: 5,
                                                      saturationFactor: 1
                                                  });
                                              return Promise.resolve({
                                                  color: null != o ? o : new M.Z(0, 0, 255, 1),
                                                  gameId: n
                                              });
                                          })
                                          .catch(() =>
                                              Promise.resolve({
                                                  color: V,
                                                  gameId: n
                                              })
                                          );
                            })
                        ).then((e) =>
                            g(
                                e.reduce((e, t) => {
                                    let { color: n, gameId: i } = t;
                                    return (e[i] = n), e;
                                }, {})
                            )
                        );
                    }, [f, g, t]),
                    {
                        games: l.useMemo(
                            () =>
                                u.map((e) => {
                                    var t, n, i;
                                    let l = f[e],
                                        r = null !== (n = m[e]) && void 0 !== n ? n : V,
                                        a = null !== (i = null === (t = d.find((t) => (null == t ? void 0 : t.applicationId) === e)) || void 0 === t ? void 0 : t.name) && void 0 !== i ? i : '';
                                    return {
                                        id: e,
                                        name: a,
                                        backgroundImageUrl: l,
                                        primaryColor: r
                                    };
                                }),
                            [u, d, f, m]
                        ),
                        treatment: o.length > 0 && a ? j.O7.GAME_SPECIFIC : j.O7.GENERIC,
                        hasFetchedGames: !s && !p
                    }
                );
            })(),
            [Z, F] = (0, N.US)([u.z.RAPIDASH_MORE_GUILDS_UPSELL], D.R.SIDEBAR, !0),
            W = (0, T.Ws)({ location: G.dr.CONFLICT_CHECKS }),
            z = Z !== u.z.RAPIDASH_MORE_GUILDS_UPSELL,
            Y = (0, p.Z)(),
            K = n.pathname === O.Z5c.GUILD_DISCOVERY || n.pathname.startsWith(O.Z5c.GLOBAL_DISCOVERY),
            q = W && !Y && !z && !K,
            [Q, X] = l.useState(0),
            J = (0, _.ZP)(),
            $ = l.useMemo(() => r.map((e) => e.id), [r]);
        l.useEffect(() => {
            q &&
                (0, g.tv)({
                    location: m.Z.GUILDS_LIST,
                    treatment: f,
                    gameApplicationIds: $
                });
        }, [q, f, $]),
            l.useEffect(() => {
                let e = setInterval(() => {
                    null != $ && 0 !== $.length && X((e) => ((isNaN(e) ? 0 : e) + 1) % $.length);
                }, 2500);
                return () => clearInterval(e);
            }, [X, $]);
        let ee = l.useCallback(() => {
                W && F(D.L.TAKE_ACTION),
                    (0, g.GS)({
                        location: m.Z.GUILDS_LIST,
                        treatment: f,
                        gameApplicationIds: $
                    }),
                    (0, x.jY)({ selectedTab: U.vf.GUILDS }),
                    (0, y.o)(w.F$.SERVERS);
            }, [F, f, $, W]),
            et = l.useCallback(
                (e) => {
                    e(), F(D.L.USER_DISMISS);
                },
                [F]
            ),
            en = (0, d.useTransition)(Q, {
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
                config: { duration: 400 },
                exitBeforeEnter: !0
            }),
            ei = l.useCallback((e) => (null != e ? { backgroundImage: 'url('.concat(e, ')') } : {}), []),
            el = l.useMemo(() => t({ onClick: ee }), [t, ee]);
        return f !== j.O7.GAME_SPECIFIC || v
            ? (0, i.jsxs)('div', {
                  className: B.container,
                  children: [
                      (0, i.jsx)(d.Popout, {
                          shouldShow: q,
                          renderPopout: (e) => {
                              let { closePopout: t } = e;
                              return (0, i.jsxs)('div', {
                                  className: a()(B.popoutContainer),
                                  children: [
                                      (0, i.jsx)('div', {
                                          className: B.animatedBgContainer,
                                          children: en((e, t) => {
                                              if (null == r[t]) return null;
                                              let { backgroundImageUrl: n, primaryColor: l } = r[t],
                                                  a = 'light' === J ? 'none' : 'linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.85) 100%), rgba('.concat(l.red, ', ').concat(l.green, ', ').concat(l.blue, ', 1)');
                                              return (0, i.jsxs)(
                                                  o.animated.div,
                                                  {
                                                      style: {
                                                          ...e,
                                                          background: a
                                                      },
                                                      className: B.animatedHeroContainer,
                                                      children: [
                                                          (0, i.jsx)('div', {
                                                              style: ei(n),
                                                              className: B.gameBoxArt
                                                          }),
                                                          (0, i.jsx)('div', {
                                                              className: B.radialGradient,
                                                              style: { background: l.toHexString() }
                                                          }),
                                                          (0, i.jsx)(H, { color: l.toHexString() }, r[t].id)
                                                      ]
                                                  },
                                                  r[t].id
                                              );
                                          })
                                      }),
                                      (0, i.jsx)(d.Clickable, {
                                          onClick: () => et(t),
                                          className: B.close,
                                          children: (0, i.jsx)(d.XSmallIcon, {
                                              size: 'xs',
                                              color: d.tokens.colors.WHITE
                                          })
                                      }),
                                      (0, i.jsxs)('div', {
                                          className: a()(B.popoutContent),
                                          children: [(0, i.jsx)(C.aF, { title: k.Z.Messages.RAPIDASH_CHANNEL_LIST_USER_UPSELL_2_TITLE }), (0, i.jsx)(C.To, { message: k.Z.Messages.RAPIDASH_CHANNEL_LIST_USER_UPSELL_2_MESSAGE }), (0, i.jsx)(C.Xu, { onClick: ee })]
                                      }),
                                      (0, i.jsx)('div', { className: B.popoutCaret })
                                  ]
                              });
                          },
                          position: 'top',
                          animationPosition: 'top',
                          align: 'left',
                          spacing: 16,
                          children: (e) =>
                              (0, i.jsx)('div', {
                                  ...e,
                                  className: B.popoutAnchor
                              })
                      }),
                      el
                  ]
              })
            : (0, i.jsx)(i.Fragment, { children: el });
    });
function W(e) {
    let { onActivate: t, children: n } = e,
        r = (0, c.e7)([Z.Z], () => Z.Z.hasJoinRequestCoackmark()),
        a = l.useCallback(() => {
            v.ZP.clearCoachmark();
        }, []),
        s = (0, f.Z)(r),
        o = l.useRef(null);
    return (
        l.useEffect(() => {
            if (r && r !== s) {
                var e, n, i, l, a;
                t(), null === (a = o.current) || void 0 === a || null === (l = a.ref) || void 0 === l || null === (i = l.current) || void 0 === i || null === (n = i.layerRef) || void 0 === n || null === (e = n.current) || void 0 === e || e.updatePosition();
            }
        }, [o, r, s, t]),
        (0, i.jsxs)('div', {
            className: B.container,
            children: [
                (0, i.jsx)(d.Popout, {
                    ref: o,
                    shouldShow: r,
                    renderPopout: () =>
                        (0, i.jsxs)('div', {
                            className: B.popoutContainer,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: B.popoutContent,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: B.coachmarkTextContainer,
                                            children: [
                                                (0, i.jsx)(d.Heading, {
                                                    variant: 'heading-md/medium',
                                                    children: k.Z.Messages.CLAN_USER_APPLICATION_COACHMARK_TITLE
                                                }),
                                                (0, i.jsx)(d.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-muted',
                                                    children: k.Z.Messages.CLAN_USER_APPLICATION_COACHMARK_BODY
                                                })
                                            ]
                                        }),
                                        (0, i.jsx)(d.Button, {
                                            fullWidth: !0,
                                            size: d.ButtonSizes.SMALL,
                                            color: d.ButtonColors.BRAND,
                                            onClick: a,
                                            children: k.Z.Messages.CLAN_USER_APPLICATION_COACHMARK_CTA
                                        })
                                    ]
                                }),
                                (0, i.jsx)('div', { className: B.popoutCaretLeft })
                            ]
                        }),
                    position: 'right',
                    animationPosition: 'right',
                    align: 'top',
                    spacing: 16,
                    children: (e) =>
                        (0, i.jsx)('div', {
                            ...e,
                            className: B.popoutAnchor
                        })
                }),
                n
            ]
        })
    );
}
function z(e) {
    let { hideGradient: t, children: n } = e;
    return (0, i.jsxs)('div', {
        className: B.footer,
        children: [(0, i.jsx)('div', { className: a()(B.gradient, { [B.gradientHidden]: t }) }), n]
    });
}
