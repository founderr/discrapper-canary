n(47120);
var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(100621),
    o = n(442837),
    c = n(481060),
    d = n(749210),
    u = n(607070),
    _ = n(100527),
    E = n(931240),
    h = n(970606),
    m = n(963202),
    I = n(650461),
    p = n(353093),
    g = n(641721),
    T = n(603839),
    S = n(84615),
    C = n(430824),
    f = n(231467),
    N = n(207796),
    A = n(273254),
    v = n(559469),
    Z = n(308083),
    L = n(689938),
    R = n(431476),
    O = n(345480),
    x = n(236613);
let b = {
    mass: 1,
    tension: 600,
    friction: 60
};
function M(e) {
    let { children: t } = e;
    return (0, i.jsxs)(l.animated.div, {
        className: R.clanEnvelope,
        children: [
            (0, i.jsx)('div', {
                className: R.clanEnvelopeTop,
                children: (0, i.jsx)('img', {
                    src: x,
                    alt: ''
                })
            }),
            t,
            (0, i.jsx)('div', {
                className: R.clanEnvelopeBottom,
                children: (0, i.jsx)('img', {
                    src: O,
                    alt: ''
                })
            })
        ]
    });
}
function P(e) {
    let { text: t, icon: n } = e;
    return (0, i.jsxs)('div', {
        className: R.upsellDetail,
        children: [
            (0, i.jsx)(n, {
                size: 'md',
                color: 'currentColor',
                className: R.upsellIcon
            }),
            (0, i.jsx)(c.Text, {
                className: R.upsellDetailText,
                variant: 'text-md/medium',
                children: t
            })
        ]
    });
}
function D(e) {
    let { selectedGuildId: t, setSelectedGuildId: n, eligibleGuilds: s, onButtonClick: l, onDismiss: o, buttonText: d, hasCompletedUpsell: u } = e,
        _ = (0, m.iN)('clan_discovery_admin_upsell'),
        E = (0, m.YH)('clan_discovery_admin_upsell'),
        h = a.useMemo(
            () =>
                s.map((e) => ({
                    value: e.id,
                    label: e.name
                })),
            [s]
        );
    a.useEffect(() => {
        0 === s.length && E && (0, N.Ce)();
    }, [s, E]);
    let I = s.length > 1;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            u
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(c.Heading, {
                              className: R.upsellTitle,
                              variant: 'heading-xxl/semibold',
                              children: L.Z.Messages.CLAN_DISCOVERY_ADMIN_UPSELL_COMPLETE_TITLE
                          }),
                          (0, i.jsx)(c.Heading, {
                              className: R.upsellSubtitle,
                              variant: 'heading-md/medium',
                              color: 'header-secondary',
                              children: L.Z.Messages.CLAN_DISCOVERY_ADMIN_UPSELL_COMPLETE_SUBTITLE
                          })
                      ]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsxs)(c.Heading, {
                              className: R.upsellTitle,
                              variant: 'heading-xxl/semibold',
                              children: [L.Z.Messages.CLAN_DISCOVERY_UPSELL_CTA_GUILD_INVITE, (0, i.jsx)('br', {}), L.Z.Messages.CLAN_DISCOVERY_UPSELL_CTA_RECRUIT]
                          }),
                          (0, i.jsxs)('div', {
                              className: R.upsellDetails,
                              children: [
                                  (0, i.jsx)(P, {
                                      icon: c.CompassIcon,
                                      text: L.Z.Messages.CLAN_DISCOVERY_UPSELL_VIBES_OR_SKILL
                                  }),
                                  (0, i.jsx)(P, {
                                      icon: c.CircleCheckIcon,
                                      text: L.Z.Messages.CLAN_DISCOVERY_UPSELL_APPLICATIONS
                                  }),
                                  (0, i.jsx)(P, {
                                      icon: c.GroupIcon,
                                      text: L.Z.Messages.CLAN_DISCOVERY_UPSELL_MAX_SIZE
                                  })
                              ]
                          })
                      ]
                  }),
            (0, i.jsxs)('div', {
                className: R.upsellButton,
                children: [
                    I &&
                        (0, i.jsx)(c.SearchableSelect, {
                            className: R.upsellSelect,
                            value: t,
                            options: h,
                            onChange: n
                        }),
                    !u &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(c.Button, {
                                    look: c.ButtonLooks.FILLED,
                                    size: c.ButtonSizes.LARGE,
                                    color: c.ButtonColors.BRAND,
                                    className: r()(R.reserveButton, { [R.buttonWithSelect]: I }),
                                    onClick: l,
                                    children: (0, i.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'always-white',
                                        children: d
                                    })
                                }),
                                _ &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)('div', { className: R.separatorDot }),
                                            (0, i.jsx)(c.Button, {
                                                look: c.ButtonLooks.FILLED,
                                                size: c.ButtonSizes.LARGE,
                                                color: c.ButtonColors.TRANSPARENT,
                                                className: R.reserveButton,
                                                onClick: o,
                                                children: (0, i.jsx)(c.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'header-primary',
                                                    children: L.Z.Messages.CLAN_DISCOVERY_UPSELL_ADMIN_DISMISS_NOTICE
                                                })
                                            })
                                        ]
                                    })
                            ]
                        })
                ]
            })
        ]
    });
}
t.Z = a.memo(function (e) {
    let { eligibleGuilds: t, eligibleGuildsIncludingConverted: n } = e,
        s = (0, m.iN)('clan_discovery_admin_upsell'),
        r = 0 === t.length,
        [O, x] = a.useState(() => {
            var e, i;
            let a = new Set(I.ZP.getGuildIds());
            for (let e of t) if (a.has(e.id)) return e.id;
            return r ? (null === (e = n[0]) || void 0 === e ? void 0 : e.id) : null === (i = t[0]) || void 0 === i ? void 0 : i.id;
        });
    a.useEffect(() => {
        !r &&
            (0, h.TE)({
                guildId: O,
                location: _.Z.CLAN_DISCOVERY
            });
    }, [r, O]);
    let P = (0, o.e7)([C.Z], () => C.Z.getGuild(O)),
        y = (0, o.e7)([I.ZP], () => (null != O ? I.ZP.getStateForGuild(O).progress : null)),
        j = (0, m.c7)({
            guildId: O,
            location: _.Z.CLAN_DISCOVERY
        }),
        U = a.useCallback(() => {
            !r &&
                ((0, h.aN)({
                    guildId: O,
                    location: _.Z.CLAN_DISCOVERY
                }),
                j
                    ? (0, S.q4)(
                          (e) => {
                              let { closeLayer: t } = e;
                              return (0, i.jsx)(g.Z, {
                                  onClose: t,
                                  guildId: O
                              });
                          },
                          { layerKey: Z.Pv }
                      )
                    : (0, S.q4)(
                          (e) => {
                              let { closeLayer: t } = e;
                              return (0, i.jsx)(T.Z, {
                                  onClose: t,
                                  guildId: O
                              });
                          },
                          { layerKey: Z.Pv }
                      ));
        }, [j, r, O]),
        G = a.useCallback(() => {
            j ? (0, N.kw)() : (0, N.Ce)();
        }, [j]),
        w = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        k = (0, A.L)({ guild: P }),
        B = (0, v.n)(),
        [H, V] = a.useState(!0),
        F = (0, c.useSpring)(
            {
                from: { opacity: 0 },
                to: { opacity: 1 },
                delay: 400,
                config: { duration: 0 }
            },
            'animate-always'
        ),
        Y = (0, c.useSpring)(
            {
                from: w ? { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' } : { transform: 'translate(324px, -56px) rotate(8deg) scale(1.25)' },
                to: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
                config: b,
                delay: 400
            },
            'animate-always'
        ),
        z = (0, c.useSpring)(
            {
                from: w ? { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' } : { transform: 'translate(176px, -24px) rotate(4deg) scale(1.1111)' },
                to: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
                config: b,
                delay: 350
            },
            'animate-always'
        ),
        W = (0, c.useSpring)(
            {
                from: w ? { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' } : { transform: 'translate(-176px, -24px) rotate(-4deg) scale(1.1111)' },
                to: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
                config: b,
                delay: 350
            },
            'animate-always'
        ),
        K = (0, c.useSpring)(
            {
                from: w ? { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' } : { transform: 'translate(-324px, -56px) rotate(-8deg) scale(1.25)' },
                to: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
                config: b,
                delay: 400
            },
            'animate-always'
        ),
        q = (0, c.useSpring)(
            {
                from: w
                    ? {
                          transform: 'scale(1)',
                          opacity: 0
                      }
                    : {
                          transform: 'scale(0.9)',
                          opacity: 0
                      },
                to: {
                    transform: 'scale(1)',
                    opacity: 1
                },
                config: b,
                delay: 200
            },
            'animate-always'
        ),
        Q = (0, c.useSpring)(
            {
                from: w ? { transform: 'translateY(0px)' } : { transform: 'translateY(240px)' },
                to: { transform: 'translateY(0px)' },
                config: b,
                delay: 250,
                onRest: () => V(!1)
            },
            'animate-always'
        ),
        X = a.useMemo(() => (s ? L.Z.Messages.CLAN_DISCOVERY_UPSELL_ADMIN_LIST_SERVER : null == y ? L.Z.Messages.CLAN_DISCOVERY_UPSELL_RESERVE : L.Z.Messages.CLAN_DISCOVERY_UPSELL_CONTINUE_SETUP), [y, s]),
        J = a.useCallback(async () => {
            await (0, E.Zx)(O), d.Z.transitionToGuildSync('936317138904440892');
        }, [O]),
        $ = a.useCallback(
            (e) =>
                (0, i.jsx)(c.Clickable, {
                    tag: 'span',
                    className: R.joinWFSLink,
                    onClick: J,
                    'aria-label': L.Z.Messages.CLAN_DISCOVERY_UPSELL_JOIN_WFS_ARIA_LABEL,
                    children: (0, i.jsx)(c.Text, {
                        tag: 'span',
                        variant: 'text-xs/medium',
                        color: 'text-brand',
                        children: e
                    })
                }),
            [J]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: R.cardsContainer,
                children: [
                    (0, i.jsx)(l.animated.div, {
                        className: R.clanCardOuterContainer,
                        style: {
                            ...Y,
                            ...F
                        },
                        children: (0, i.jsx)(f.xV, {
                            clan: B[0],
                            className: R.clanCardOuterLeft
                        })
                    }),
                    (0, i.jsx)(l.animated.div, {
                        className: R.clanCardInnerContainer,
                        style: {
                            ...z,
                            ...F
                        },
                        children: (0, i.jsx)(f.xV, {
                            clan: B[1],
                            className: R.clanCardInnerLeft
                        })
                    }),
                    null != k &&
                        (0, i.jsx)(l.animated.div, {
                            className: R.clanEnvelope,
                            style: q,
                            children: (0, i.jsx)(M, {
                                children: (0, i.jsx)('div', {
                                    className: R.clanCardCenterContainer,
                                    style: { overflow: H ? 'hidden' : 'visible' },
                                    children: (0, i.jsx)(l.animated.div, {
                                        style: Q,
                                        children: (0, i.jsx)(f.xV, {
                                            clan: k,
                                            className: R.clanCardCenter,
                                            bannerUrl: (0, p.pY)(B[4].id, B[4].bannerHash)
                                        })
                                    })
                                })
                            })
                        }),
                    (0, i.jsx)(l.animated.div, {
                        className: R.clanCardInnerContainer,
                        style: {
                            ...W,
                            ...F
                        },
                        children: (0, i.jsx)(f.xV, {
                            clan: B[2],
                            className: R.clanCardInnerRight
                        })
                    }),
                    (0, i.jsx)(l.animated.div, {
                        className: R.clanCardOuterContainer,
                        style: {
                            ...K,
                            ...F
                        },
                        children: (0, i.jsx)(f.xV, {
                            clan: B[3],
                            className: R.clanCardOuterRight
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: R.upsellCtaContainer,
                children: (0, i.jsx)(D, {
                    selectedGuildId: O,
                    setSelectedGuildId: x,
                    eligibleGuilds: t,
                    onButtonClick: U,
                    onDismiss: G,
                    buttonText: X,
                    hasCompletedUpsell: r
                })
            }),
            r
                ? (0, i.jsx)('div', {
                      className: R.joinWFSContainer,
                      children: (0, i.jsx)('div', {
                          className: R.joinWFS,
                          children: (0, i.jsx)(c.Text, {
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: L.Z.Messages.CLAN_DISCOVERY_UPSELL_JOIN_WFS.format({ wfsHook: $ })
                          })
                      })
                  })
                : (0, i.jsx)('div', { className: R.wfsSpacer })
        ]
    });
});
