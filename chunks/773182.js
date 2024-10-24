n.d(t, {
    KF: function () {
        return O;
    },
    LW: function () {
        return D;
    },
    TH: function () {
        return j;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(512969),
    o = n(100621),
    c = n(442837),
    u = n(704215),
    d = n(481060),
    h = n(350810),
    p = n(110924),
    f = n(410030),
    _ = n(100527),
    m = n(970606),
    g = n(824991),
    C = n(931515),
    I = n(243778),
    E = n(749681),
    N = n(863249),
    x = n(937111),
    S = n(667105),
    v = n(451478),
    Z = n(981631),
    T = n(308083),
    b = n(921944),
    A = n(49898),
    M = n(128449),
    R = n(46140),
    L = n(689938),
    y = n(877861);
function P(e) {
    let { color: t } = e;
    return (0, i.jsxs)('svg', {
        className: y.doubleIcon,
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
let O = l.memo(function (e) {
    let { children: t } = e,
        n = (0, s.TH)(),
        { games: r, treatment: p, hasFetchedGames: N } = (0, C.I9)(),
        [x, O] = (0, I.US)([u.z.RAPIDASH_MORE_GUILDS_UPSELL], b.R.SIDEBAR, !0),
        j = (0, S.Ws)({ location: R.dr.CONFLICT_CHECKS }),
        D = x !== u.z.RAPIDASH_MORE_GUILDS_UPSELL,
        w = (0, h.Z)(),
        U = n.pathname === Z.Z5c.GUILD_DISCOVERY || n.pathname.startsWith(Z.Z5c.GLOBAL_DISCOVERY),
        G = j && !w && !D && !U,
        [k, B] = l.useState(0),
        H = (0, f.ZP)(),
        V = l.useMemo(() => r.map((e) => e.id), [r]),
        F = (0, c.e7)([v.Z], () => v.Z.isFocused());
    l.useEffect(() => {
        G &&
            (0, m.tv)({
                location: _.Z.GUILDS_LIST,
                treatment: p,
                gameApplicationIds: V
            });
    }, [G, p, V]),
        l.useEffect(() => {
            if (!G || !F) return;
            let e = setInterval(() => {
                null != V && 0 !== V.length && B((e) => ((isNaN(e) ? 0 : e) + 1) % V.length);
            }, 2500);
            return () => clearInterval(e);
        }, [B, V, G, F]);
    let W = l.useCallback(() => {
            j && O(b.L.TAKE_ACTION),
                (0, m.GS)({
                    location: _.Z.GUILDS_LIST,
                    treatment: p,
                    gameApplicationIds: V
                }),
                (0, E.transitionToGlobalDiscovery)({
                    tab: A.F$.SERVERS,
                    selectedServersTab: M.vf.GUILDS,
                    entrypoint: M.Qq.GUILDS_BAR
                });
        }, [O, p, V, j]),
        z = l.useCallback(
            (e) => {
                e(), O(b.L.USER_DISMISS);
            },
            [O]
        ),
        Y = (0, d.useTransition)(k, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: { duration: 400 },
            exitBeforeEnter: !0
        }),
        K = l.useCallback((e) => (null != e ? { backgroundImage: 'url('.concat(e, ')') } : {}), []),
        q = l.useMemo(() => t({ onClick: W }), [t, W]);
    return p !== T.O7.GAME_SPECIFIC || N
        ? (0, i.jsxs)('div', {
              className: y.container,
              children: [
                  (0, i.jsx)(d.Popout, {
                      shouldShow: G,
                      renderPopout: (e) => {
                          let { closePopout: t } = e;
                          return (0, i.jsxs)('div', {
                              className: a()(y.popoutContainer),
                              children: [
                                  (0, i.jsx)('div', {
                                      className: y.animatedBgContainer,
                                      children: Y((e, t) => {
                                          if (null == r[t]) return null;
                                          let { backgroundImageUrl: n, primaryColor: l } = r[t],
                                              a = 'light' === H ? 'none' : 'linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.85) 100%), rgba('.concat(l.red, ', ').concat(l.green, ', ').concat(l.blue, ', 1)');
                                          return (0, i.jsxs)(
                                              o.animated.div,
                                              {
                                                  style: {
                                                      ...e,
                                                      background: a
                                                  },
                                                  className: y.animatedHeroContainer,
                                                  children: [
                                                      (0, i.jsx)('div', {
                                                          style: K(n),
                                                          className: y.gameBoxArt
                                                      }),
                                                      (0, i.jsx)('div', {
                                                          className: y.radialGradient,
                                                          style: { background: l.toHexString() }
                                                      }),
                                                      (0, i.jsx)(P, { color: l.toHexString() }, r[t].id)
                                                  ]
                                              },
                                              r[t].id
                                          );
                                      })
                                  }),
                                  (0, i.jsx)(d.Clickable, {
                                      onClick: () => z(t),
                                      className: y.close,
                                      children: (0, i.jsx)(d.XSmallIcon, {
                                          size: 'xs',
                                          color: d.tokens.colors.WHITE
                                      })
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: a()(y.popoutContent),
                                      children: [(0, i.jsx)(g.aF, { title: L.Z.Messages.RAPIDASH_CHANNEL_LIST_USER_UPSELL_2_TITLE }), (0, i.jsx)(g.To, { message: L.Z.Messages.RAPIDASH_CHANNEL_LIST_USER_UPSELL_2_MESSAGE }), (0, i.jsx)(g.Xu, { onClick: W })]
                                  }),
                                  (0, i.jsx)('div', { className: y.popoutCaret })
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
                              className: y.popoutAnchor
                          })
                  }),
                  q
              ]
          })
        : (0, i.jsx)(i.Fragment, { children: q });
});
function j(e) {
    let { onActivate: t, children: n } = e,
        r = (0, c.e7)([x.Z], () => x.Z.hasJoinRequestCoackmark()),
        a = l.useCallback(() => {
            N.ZP.clearCoachmark();
        }, []),
        s = (0, p.Z)(r),
        o = l.useRef(null);
    return (
        l.useEffect(() => {
            if (r && r !== s) {
                var e, n, i, l, a;
                t(), null === (a = o.current) || void 0 === a || null === (l = a.ref) || void 0 === l || null === (i = l.current) || void 0 === i || null === (n = i.layerRef) || void 0 === n || null === (e = n.current) || void 0 === e || e.updatePosition();
            }
        }, [o, r, s, t]),
        (0, i.jsxs)('div', {
            className: y.container,
            children: [
                (0, i.jsx)(d.Popout, {
                    ref: o,
                    shouldShow: r,
                    renderPopout: () =>
                        (0, i.jsxs)('div', {
                            className: y.popoutContainer,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: y.popoutContent,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: y.coachmarkTextContainer,
                                            children: [
                                                (0, i.jsx)(d.Heading, {
                                                    variant: 'heading-md/medium',
                                                    children: L.Z.Messages.CLAN_USER_APPLICATION_COACHMARK_TITLE
                                                }),
                                                (0, i.jsx)(d.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-muted',
                                                    children: L.Z.Messages.CLAN_USER_APPLICATION_COACHMARK_BODY
                                                })
                                            ]
                                        }),
                                        (0, i.jsx)(d.Button, {
                                            fullWidth: !0,
                                            size: d.ButtonSizes.SMALL,
                                            color: d.ButtonColors.BRAND,
                                            onClick: a,
                                            children: L.Z.Messages.CLAN_USER_APPLICATION_COACHMARK_CTA
                                        })
                                    ]
                                }),
                                (0, i.jsx)('div', { className: y.popoutCaretLeft })
                            ]
                        }),
                    position: 'right',
                    animationPosition: 'right',
                    align: 'top',
                    spacing: 16,
                    children: (e) =>
                        (0, i.jsx)('div', {
                            ...e,
                            className: y.popoutAnchor
                        })
                }),
                n
            ]
        })
    );
}
function D(e) {
    let { hideGradient: t, children: n } = e;
    return (0, i.jsxs)('div', {
        className: y.footer,
        children: [(0, i.jsx)('div', { className: a()(y.gradient, { [y.gradientHidden]: t }) }), n]
    });
}
