n.d(t, {
    KF: function () {
        return D;
    },
    LW: function () {
        return k;
    },
    TH: function () {
        return O;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(512969),
    s = n(100621),
    c = n(442837),
    u = n(704215),
    d = n(481060),
    h = n(350810),
    p = n(110924),
    f = n(410030),
    m = n(100527),
    g = n(970606),
    C = n(824991),
    _ = n(931515),
    v = n(243778),
    x = n(836768),
    I = n(749681),
    b = n(863249),
    S = n(937111),
    Z = n(667105),
    N = n(451478),
    E = n(602147),
    y = n(981631),
    j = n(308083),
    T = n(921944),
    P = n(49898),
    A = n(128449),
    M = n(46140),
    w = n(388032),
    L = n(877861);
function R(e) {
    let { color: t } = e;
    return (0, i.jsxs)('svg', {
        className: L.doubleIcon,
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
let D = l.memo(function (e) {
    let { children: t } = e,
        n = (0, o.TH)(),
        { games: r, treatment: p, hasFetchedGames: b } = (0, _.I9)(),
        [S, D] = (0, v.US)([u.z.RAPIDASH_MORE_GUILDS_UPSELL], T.R.SIDEBAR, !0),
        O = (0, Z.Ws)({ location: M.dr.CONFLICT_CHECKS }),
        k = S !== u.z.RAPIDASH_MORE_GUILDS_UPSELL,
        U = (0, h.Z)(),
        G = n.pathname === y.Z5c.GUILD_DISCOVERY || n.pathname.startsWith(y.Z5c.GLOBAL_DISCOVERY),
        B = O && !U && !k && !G,
        [V, H] = l.useState(0),
        F = (0, f.ZP)(),
        W = l.useMemo(() => r.map((e) => e.id), [r]),
        z = (0, c.e7)([N.Z], () => N.Z.isFocused());
    l.useEffect(() => {
        B &&
            (0, g.tv)({
                location: m.Z.GUILDS_LIST,
                treatment: p,
                gameApplicationIds: W
            });
    }, [B, p, W]),
        l.useEffect(() => {
            if (!B || !z) return;
            let e = setInterval(() => {
                null != W && 0 !== W.length && H((e) => ((isNaN(e) ? 0 : e) + 1) % W.length);
            }, 2500);
            return () => clearInterval(e);
        }, [H, W, B, z]);
    let Y = l.useCallback(() => {
            if (
                (O && D(T.L.TAKE_ACTION),
                (0, g.GS)({
                    location: m.Z.GUILDS_LIST,
                    treatment: p,
                    gameApplicationIds: W
                }),
                B)
            )
                (0, I.transitionToGlobalDiscovery)({
                    tab: P.F$.SERVERS,
                    selectedServersTab: A.vf.GUILDS,
                    entrypoint: A.Qq.GUILDS_BAR
                });
            else {
                let e = x.Z.getField('selectedTab');
                (0, E.o)(e);
            }
        }, [O, p, W, B, D]),
        K = l.useCallback(
            (e) => {
                e(), D(T.L.USER_DISMISS);
            },
            [D]
        ),
        q = (0, d.useTransition)(V, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: { duration: 400 },
            exitBeforeEnter: !0
        }),
        Q = l.useCallback((e) => (null != e ? { backgroundImage: 'url('.concat(e, ')') } : {}), []),
        J = l.useMemo(() => t({ onClick: Y }), [t, Y]);
    return p !== j.O7.GAME_SPECIFIC || b
        ? (0, i.jsxs)('div', {
              className: L.container,
              children: [
                  (0, i.jsx)(d.Popout, {
                      shouldShow: B,
                      renderPopout: (e) => {
                          let { closePopout: t } = e;
                          return (0, i.jsxs)('div', {
                              className: a()(L.popoutContainer),
                              children: [
                                  (0, i.jsx)('div', {
                                      className: L.animatedBgContainer,
                                      children: q((e, t) => {
                                          if (null == r[t]) return null;
                                          let { backgroundImageUrl: n, primaryColor: l } = r[t],
                                              a = 'light' === F ? 'none' : 'linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.85) 100%), rgba('.concat(l.red, ', ').concat(l.green, ', ').concat(l.blue, ', 1)');
                                          return (0, i.jsxs)(
                                              s.animated.div,
                                              {
                                                  style: {
                                                      ...e,
                                                      background: a
                                                  },
                                                  className: L.animatedHeroContainer,
                                                  children: [
                                                      (0, i.jsx)('div', {
                                                          style: Q(n),
                                                          className: L.gameBoxArt
                                                      }),
                                                      (0, i.jsx)('div', {
                                                          className: L.radialGradient,
                                                          style: { background: l.toHexString() }
                                                      }),
                                                      (0, i.jsx)(R, { color: l.toHexString() }, r[t].id)
                                                  ]
                                              },
                                              r[t].id
                                          );
                                      })
                                  }),
                                  (0, i.jsx)(d.Clickable, {
                                      onClick: () => K(t),
                                      className: L.close,
                                      children: (0, i.jsx)(d.XSmallIcon, {
                                          size: 'xs',
                                          color: d.tokens.colors.WHITE
                                      })
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: a()(L.popoutContent),
                                      children: [(0, i.jsx)(C.aF, { title: w.intl.string(w.t.B2wKJi) }), (0, i.jsx)(C.To, { message: w.intl.string(w.t.Cs2Bio) }), (0, i.jsx)(C.Xu, { onClick: Y })]
                                  }),
                                  (0, i.jsx)('div', { className: L.popoutCaret })
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
                              className: L.popoutAnchor
                          })
                  }),
                  J
              ]
          })
        : (0, i.jsx)(i.Fragment, { children: J });
});
function O(e) {
    let { onActivate: t, children: n } = e,
        r = (0, c.e7)([S.Z], () => S.Z.hasJoinRequestCoackmark()),
        a = l.useCallback(() => {
            b.ZP.clearCoachmark();
        }, []),
        o = (0, p.Z)(r),
        s = l.useRef(null);
    return (
        l.useEffect(() => {
            if (r && r !== o) {
                var e, n, i, l, a;
                t(), null === (a = s.current) || void 0 === a || null === (l = a.ref) || void 0 === l || null === (i = l.current) || void 0 === i || null === (n = i.layerRef) || void 0 === n || null === (e = n.current) || void 0 === e || e.updatePosition();
            }
        }, [s, r, o, t]),
        (0, i.jsxs)('div', {
            className: L.container,
            children: [
                (0, i.jsx)(d.Popout, {
                    ref: s,
                    shouldShow: r,
                    renderPopout: () =>
                        (0, i.jsxs)('div', {
                            className: L.popoutContainer,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: L.popoutContent,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: L.coachmarkTextContainer,
                                            children: [
                                                (0, i.jsx)(d.Heading, {
                                                    variant: 'heading-md/medium',
                                                    children: w.intl.string(w.t.fRUGzs)
                                                }),
                                                (0, i.jsx)(d.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-muted',
                                                    children: w.intl.string(w.t.ja0Tg4)
                                                })
                                            ]
                                        }),
                                        (0, i.jsx)(d.Button, {
                                            fullWidth: !0,
                                            size: d.ButtonSizes.SMALL,
                                            color: d.ButtonColors.BRAND,
                                            onClick: a,
                                            children: w.intl.string(w.t.E0MgHh)
                                        })
                                    ]
                                }),
                                (0, i.jsx)('div', { className: L.popoutCaretLeft })
                            ]
                        }),
                    position: 'right',
                    animationPosition: 'right',
                    align: 'top',
                    spacing: 16,
                    children: (e) =>
                        (0, i.jsx)('div', {
                            ...e,
                            className: L.popoutAnchor
                        })
                }),
                n
            ]
        })
    );
}
function k(e) {
    let { hideGradient: t, children: n } = e;
    return (0, i.jsxs)('div', {
        className: L.footer,
        children: [(0, i.jsx)('div', { className: a()(L.gradient, { [L.gradientHidden]: t }) }), n]
    });
}
