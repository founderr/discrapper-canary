n(47120), n(724458);
var i = n(200651),
    r = n(192379),
    l = n(688619),
    s = n.n(l),
    a = n(120356),
    o = n.n(a),
    c = n(97028),
    d = n(866442),
    u = n(442837),
    m = n(481060),
    h = n(650774),
    g = n(430824),
    x = n(900681),
    p = n(175557),
    f = n(688298),
    C = n(995119),
    _ = n(116175),
    v = n(308083),
    I = n(388032),
    N = n(463297),
    T = n(240938);
let j = [
        {
            name: 'Night Sky',
            bannerKind: v.qC.NIGHT_SKY,
            icon: m.ThemeDarkIcon
        },
        {
            name: 'Castle',
            bannerKind: v.qC.CASTLE,
            icon: m.CrownIcon
        },
        {
            name: 'World Map',
            bannerKind: v.qC.WORLD_MAP,
            icon: m.GlobeEarthIcon
        },
        {
            name: 'Sea Foam',
            bannerKind: v.qC.SEA_FOAM,
            icon: m.PrivacyAndSafetyIcon
        },
        {
            name: 'Warp',
            bannerKind: v.qC.WARP_TUNNEL,
            icon: m.BlurBackgroundIcon
        },
        {
            name: 'House',
            bannerKind: v.qC.HOUSE,
            icon: m.TreehouseIcon
        },
        {
            name: 'Pulsar',
            bannerKind: v.qC.HEIGHTMAP,
            icon: m.WaveformIcon
        },
        {
            name: 'Mesh',
            bannerKind: v.qC.MESH,
            icon: m.GridVerticalIcon
        },
        {
            name: 'Spatter',
            bannerKind: v.qC.SPATTER,
            icon: m.PaintbrushThickIcon
        }
    ],
    b = (e) => {
        let { name: t, primaryColor: n, secondaryColor: r, isCustom: l } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                l
                    ? (0, i.jsx)(m.PaintPaletteIcon, { size: 'md' })
                    : (0, i.jsx)('div', {
                          className: N.brandItemCircle,
                          style: { background: 'linear-gradient(-45deg, '.concat(r, ' 50%, ').concat(n, ' 50% )') }
                      }),
                (0, i.jsx)(m.Text, {
                    variant: 'text-sm/medium',
                    color: 'interactive-normal',
                    className: N.noWrap,
                    children: t
                })
            ]
        });
    };
t.Z = (e) => {
    var t;
    let { handleUpdate: n, progress: l, guildId: a } = e,
        { banner: S, brandPrimaryColor: E, brandSecondaryColor: R, badgePrimaryColor: y, badgeSecondaryColor: Z } = l,
        A = (0, u.e7)([g.Z], () => g.Z.getGuild(a)),
        L = null !== (t = (0, u.e7)([h.Z], () => h.Z.getMemberCount(a))) && void 0 !== t ? t : 0,
        D = r.useMemo(
            () => ({
                primary: null != E ? E : v.OH,
                secondary: null != R ? R : v.K_
            }),
            [E, R]
        ),
        O = r.useMemo(() => {
            if (E === y && R === Z) return 1;
            for (let e = 0; e < v.ym.length; e++) if (v.ym[e].primary === l.brandPrimaryColor && v.ym[e].secondary === l.brandSecondaryColor) return 2 + e;
            return 0;
        }, [E, R, y, Z, l.brandPrimaryColor, l.brandSecondaryColor]),
        [k, P] = r.useState(!1),
        M = 0 === O,
        w = 1 === O,
        B = r.useMemo(() => {
            if (M) return D;
            if (w)
                return {
                    primary: null != y ? y : _.Nh,
                    secondary: null != Z ? Z : _.vY
                };
            {
                let e = v.ym[O - 2];
                return {
                    primary: e.primary,
                    secondary: e.secondary
                };
            }
        }, [D, w, M, y, Z, O]),
        U = r.useCallback(() => {
            let e = j[Math.floor(Math.random() * j.length)].bannerKind,
                t = s().random().hex();
            n({
                banner: e,
                brandPrimaryColor: t,
                brandSecondaryColor: s().random().hex()
            });
        }, [n]);
    r.useEffect(() => {
        n({
            banner: S,
            brandPrimaryColor: B.primary,
            brandSecondaryColor: B.secondary
        });
    }, [n, S, B.primary, B.secondary]);
    let G = r.useMemo(() => {
        var e, t, n;
        return {
            ...l,
            id: a,
            name: null !== (e = null == A ? void 0 : A.name) && void 0 !== e ? e : '',
            icon: null == A ? void 0 : A.icon,
            memberCount: L,
            games: Array.from(l.gameApplicationIds),
            traits: Array.from(l.interests),
            banner: S,
            badge: {
                badgeKind: l.badgeKind,
                primaryColor: null != y ? y : v.OH,
                secondaryColor: null != Z ? Z : v.K_
            },
            branding: {
                primaryColor: null !== (t = B.primary) && void 0 !== t ? t : v.OH,
                secondaryColor: null !== (n = B.secondary) && void 0 !== n ? n : v.K_
            },
            gameActivity: Array.from(l.gameApplicationIds).reduce(
                (e, t) => (
                    (e[t] = {
                        level: c.m.HIGH,
                        score: 0
                    }),
                    e
                ),
                {}
            )
        };
    }, [l, a, A, L, S, y, Z, B]);
    return (0, i.jsxs)('div', {
        className: T.slideContent,
        children: [
            (0, i.jsx)(m.Heading, {
                variant: 'heading-xxl/medium',
                className: T.title,
                children: I.intl.string(I.t.kPwMOz)
            }),
            (0, i.jsx)(m.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: T.subtitle,
                children: I.intl.string(I.t['E+KhDA'])
            }),
            (0, i.jsxs)('div', {
                className: N.content,
                children: [
                    (0, i.jsx)('div', {
                        className: N.leftColumn,
                        children: (0, i.jsxs)('div', {
                            className: N.colorsContainer,
                            children: [
                                (0, i.jsx)(C.Z, { onClick: U }),
                                (0, i.jsxs)('div', {
                                    className: N.colorPickerContainer,
                                    children: [
                                        (0, i.jsx)(m.Text, {
                                            variant: 'text-xs/semibold',
                                            color: 'text-muted',
                                            children: I.intl.string(I.t.Ul1tIS)
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: N.colorPickerGrid,
                                            children: [
                                                (0, i.jsx)(f.Z, {
                                                    showSecondaryColor: !0,
                                                    palette: D,
                                                    onPrimaryColorChange: (e) => {
                                                        n({ brandPrimaryColor: (0, d.Rf)(e) });
                                                    },
                                                    onSecondaryColorChange: (e) => {
                                                        n({ brandSecondaryColor: (0, d.Rf)(e) });
                                                    },
                                                    shouldShow: k,
                                                    onRequestClose: () => P(!1),
                                                    children: (e) =>
                                                        (0, i.jsx)(m.Clickable, {
                                                            ...e,
                                                            onClick: () => {
                                                                P((e) => !e);
                                                            },
                                                            className: o()(N.brandItemContainer, { [N.brandItemContainerSelected]: 0 === O }),
                                                            children: (0, i.jsx)(b, {
                                                                name: I.intl.string(I.t.AemVoa),
                                                                isCustom: !0
                                                            })
                                                        })
                                                }),
                                                (0, i.jsx)(m.Clickable, {
                                                    onClick: () => {
                                                        n({
                                                            brandPrimaryColor: null != y ? y : v.OH,
                                                            brandSecondaryColor: null != Z ? Z : v.K_
                                                        });
                                                    },
                                                    className: o()(N.brandItemContainer, { [N.brandItemContainerSelected]: 1 === O }),
                                                    children: (0, i.jsx)(b, {
                                                        name: I.intl.string(I.t['1Pvr/v']),
                                                        primaryColor: y,
                                                        secondaryColor: Z
                                                    })
                                                }),
                                                v.ym.map((e, t) =>
                                                    (0, i.jsx)(
                                                        m.Clickable,
                                                        {
                                                            'aria-label': e.name,
                                                            onClick: () => {
                                                                n({
                                                                    brandPrimaryColor: v.ym[t].primary,
                                                                    brandSecondaryColor: v.ym[t].secondary
                                                                });
                                                            },
                                                            className: o()(N.brandItemContainer, { [N.brandItemContainerSelected]: O === t + 2 }),
                                                            children: (0, i.jsx)(b, {
                                                                name: e.name,
                                                                primaryColor: e.primary,
                                                                secondaryColor: e.secondary
                                                            })
                                                        },
                                                        t
                                                    )
                                                )
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsxs)('div', {
                                    className: N.bannerPickerContainer,
                                    children: [
                                        (0, i.jsx)(m.Text, {
                                            variant: 'text-xs/semibold',
                                            color: 'text-muted',
                                            children: I.intl.string(I.t.nH6S2d)
                                        }),
                                        (0, i.jsx)('div', {
                                            className: N.bannerPickerGrid,
                                            children: j.map((e, t) =>
                                                (0, i.jsxs)(
                                                    m.Clickable,
                                                    {
                                                        'aria-label': e.name,
                                                        onClick: () => {
                                                            n({ banner: e.bannerKind });
                                                        },
                                                        className: o()(N.bannerItemContainer, { [N.bannerItemContainerSelected]: e.bannerKind === S }),
                                                        children: [
                                                            (0, i.jsx)(e.icon, { size: 'md' }),
                                                            (0, i.jsx)(m.Text, {
                                                                variant: 'text-sm/medium',
                                                                color: 'interactive-normal',
                                                                className: N.noWrap,
                                                                children: e.name
                                                            })
                                                        ]
                                                    },
                                                    t
                                                )
                                            )
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: N.clanCardWrapper,
                        children: (0, i.jsx)(x.xV, {
                            bannerComponent: (0, i.jsx)(p.Z, {
                                banner: S,
                                primaryTintColor: B.primary,
                                secondaryTintColor: B.secondary,
                                className: N.clanBannerPreview
                            }),
                            clan: G
                        })
                    })
                ]
            })
        ]
    });
};
