t(47120), t(724458);
var r = t(200651),
    a = t(192379),
    i = t(688619),
    s = t.n(i),
    o = t(120356),
    l = t.n(o),
    c = t(97028),
    d = t(866442),
    u = t(442837),
    m = t(481060),
    f = t(231467),
    h = t(650774),
    x = t(430824),
    p = t(175557),
    g = t(688298),
    C = t(995119),
    b = t(116175),
    v = t(308083),
    _ = t(388032),
    y = t(480160),
    T = t(306882);
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
    I = (e) => {
        let { name: n, primaryColor: t, secondaryColor: a, isCustom: i } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                i
                    ? (0, r.jsx)(m.PaintPaletteIcon, { size: 'md' })
                    : (0, r.jsx)('div', {
                          className: y.brandItemCircle,
                          style: { background: 'linear-gradient(-45deg, '.concat(a, ' 50%, ').concat(t, ' 50% )') }
                      }),
                (0, r.jsx)(m.Text, {
                    variant: 'text-sm/medium',
                    color: 'interactive-normal',
                    className: y.noWrap,
                    children: n
                })
            ]
        });
    };
n.Z = (e) => {
    var n;
    let { handleUpdate: t, progress: i, guildId: o } = e,
        { banner: N, brandPrimaryColor: S, brandSecondaryColor: E, badgePrimaryColor: k, badgeSecondaryColor: A } = i,
        w = (0, u.e7)([x.Z], () => x.Z.getGuild(o)),
        M = null !== (n = (0, u.e7)([h.Z], () => h.Z.getMemberCount(o))) && void 0 !== n ? n : 0,
        R = a.useMemo(
            () => ({
                primary: null != S ? S : v.OH,
                secondary: null != E ? E : v.K_
            }),
            [S, E]
        ),
        D = a.useMemo(() => {
            if (S === k && E === A) return 1;
            for (let e = 0; e < v.ym.length; e++) if (v.ym[e].primary === i.brandPrimaryColor && v.ym[e].secondary === i.brandSecondaryColor) return 2 + e;
            return 0;
        }, [S, E, k, A, i.brandPrimaryColor, i.brandSecondaryColor]),
        [Z, L] = a.useState(!1),
        P = 0 === D,
        O = 1 === D,
        F = a.useMemo(() => {
            if (P) return R;
            if (O)
                return {
                    primary: null != k ? k : b.Nh,
                    secondary: null != A ? A : b.vY
                };
            {
                let e = v.ym[D - 2];
                return {
                    primary: e.primary,
                    secondary: e.secondary
                };
            }
        }, [R, O, P, k, A, D]),
        G = a.useCallback(() => {
            let e = j[Math.floor(Math.random() * j.length)].bannerKind,
                n = s().random().hex();
            t({
                banner: e,
                brandPrimaryColor: n,
                brandSecondaryColor: s().random().hex()
            });
        }, [t]);
    a.useEffect(() => {
        t({
            banner: N,
            brandPrimaryColor: F.primary,
            brandSecondaryColor: F.secondary
        });
    }, [t, N, F.primary, F.secondary]);
    let B = a.useMemo(() => {
        var e, n, t;
        return {
            ...i,
            id: o,
            name: null !== (e = null == w ? void 0 : w.name) && void 0 !== e ? e : '',
            icon: null == w ? void 0 : w.icon,
            memberCount: M,
            games: Array.from(i.gameApplicationIds),
            traits: Array.from(i.interests),
            banner: N,
            badge: {
                badgeKind: i.badgeKind,
                primaryColor: null != k ? k : v.OH,
                secondaryColor: null != A ? A : v.K_
            },
            branding: {
                primaryColor: null !== (n = F.primary) && void 0 !== n ? n : v.OH,
                secondaryColor: null !== (t = F.secondary) && void 0 !== t ? t : v.K_
            },
            gameActivity: Array.from(i.gameApplicationIds).reduce(
                (e, n) => (
                    (e[n] = {
                        level: c.m.HIGH,
                        score: 0
                    }),
                    e
                ),
                {}
            )
        };
    }, [i, o, w, M, N, k, A, F]);
    return (0, r.jsxs)('div', {
        className: T.slideContent,
        children: [
            (0, r.jsx)(m.Heading, {
                variant: 'heading-xxl/medium',
                className: T.title,
                children: _.intl.string(_.t.kPwMOz)
            }),
            (0, r.jsx)(m.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: T.subtitle,
                children: _.intl.string(_.t['E+KhDA'])
            }),
            (0, r.jsxs)('div', {
                className: y.content,
                children: [
                    (0, r.jsx)('div', {
                        className: y.leftColumn,
                        children: (0, r.jsxs)('div', {
                            className: y.colorsContainer,
                            children: [
                                (0, r.jsx)(C.Z, { onClick: G }),
                                (0, r.jsxs)('div', {
                                    className: y.colorPickerContainer,
                                    children: [
                                        (0, r.jsx)(m.Text, {
                                            variant: 'text-xs/semibold',
                                            color: 'text-muted',
                                            children: _.intl.string(_.t.Ul1tIS)
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: y.colorPickerGrid,
                                            children: [
                                                (0, r.jsx)(g.Z, {
                                                    showSecondaryColor: !0,
                                                    palette: R,
                                                    onPrimaryColorChange: (e) => {
                                                        t({ brandPrimaryColor: (0, d.Rf)(e) });
                                                    },
                                                    onSecondaryColorChange: (e) => {
                                                        t({ brandSecondaryColor: (0, d.Rf)(e) });
                                                    },
                                                    shouldShow: Z,
                                                    onRequestClose: () => L(!1),
                                                    children: (e) =>
                                                        (0, r.jsx)(m.Clickable, {
                                                            ...e,
                                                            onClick: () => {
                                                                L((e) => !e);
                                                            },
                                                            className: l()(y.brandItemContainer, { [y.brandItemContainerSelected]: 0 === D }),
                                                            children: (0, r.jsx)(I, {
                                                                name: _.intl.string(_.t.AemVoa),
                                                                isCustom: !0
                                                            })
                                                        })
                                                }),
                                                (0, r.jsx)(m.Clickable, {
                                                    onClick: () => {
                                                        t({
                                                            brandPrimaryColor: null != k ? k : v.OH,
                                                            brandSecondaryColor: null != A ? A : v.K_
                                                        });
                                                    },
                                                    className: l()(y.brandItemContainer, { [y.brandItemContainerSelected]: 1 === D }),
                                                    children: (0, r.jsx)(I, {
                                                        name: _.intl.string(_.t['1Pvr/v']),
                                                        primaryColor: k,
                                                        secondaryColor: A
                                                    })
                                                }),
                                                v.ym.map((e, n) =>
                                                    (0, r.jsx)(
                                                        m.Clickable,
                                                        {
                                                            'aria-label': e.name,
                                                            onClick: () => {
                                                                t({
                                                                    brandPrimaryColor: v.ym[n].primary,
                                                                    brandSecondaryColor: v.ym[n].secondary
                                                                });
                                                            },
                                                            className: l()(y.brandItemContainer, { [y.brandItemContainerSelected]: D === n + 2 }),
                                                            children: (0, r.jsx)(I, {
                                                                name: e.name,
                                                                primaryColor: e.primary,
                                                                secondaryColor: e.secondary
                                                            })
                                                        },
                                                        n
                                                    )
                                                )
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsxs)('div', {
                                    className: y.bannerPickerContainer,
                                    children: [
                                        (0, r.jsx)(m.Text, {
                                            variant: 'text-xs/semibold',
                                            color: 'text-muted',
                                            children: _.intl.string(_.t.nH6S2d)
                                        }),
                                        (0, r.jsx)('div', {
                                            className: y.bannerPickerGrid,
                                            children: j.map((e, n) =>
                                                (0, r.jsxs)(
                                                    m.Clickable,
                                                    {
                                                        'aria-label': e.name,
                                                        onClick: () => {
                                                            t({ banner: e.bannerKind });
                                                        },
                                                        className: l()(y.bannerItemContainer, { [y.bannerItemContainerSelected]: e.bannerKind === N }),
                                                        children: [
                                                            (0, r.jsx)(e.icon, { size: 'md' }),
                                                            (0, r.jsx)(m.Text, {
                                                                variant: 'text-sm/medium',
                                                                color: 'interactive-normal',
                                                                className: y.noWrap,
                                                                children: e.name
                                                            })
                                                        ]
                                                    },
                                                    n
                                                )
                                            )
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: y.clanCardWrapper,
                        children: (0, r.jsx)(f.xV, {
                            bannerComponent: (0, r.jsx)(p.Z, {
                                banner: N,
                                primaryTintColor: F.primary,
                                secondaryTintColor: F.secondary,
                                className: y.clanBannerPreview
                            }),
                            clan: B
                        })
                    })
                ]
            })
        ]
    });
};
