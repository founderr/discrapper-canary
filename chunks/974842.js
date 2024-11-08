t(47120);
var r = t(200651),
    a = t(192379),
    i = t(688619),
    o = t.n(i),
    s = t(120356),
    l = t.n(s),
    c = t(866442),
    d = t(481060),
    u = t(550271),
    m = t(688298),
    f = t(995119),
    h = t(116175),
    x = t(308083),
    p = t(388032),
    g = t(129729),
    C = t(306882);
let b = [h.ZD.SWORD, h.ZD.WATER_DROP, h.ZD.SKULL, h.ZD.TOADSTOOL, h.ZD.MOON, h.ZD.LIGHTNING, h.ZD.LEAF, h.ZD.HEART, h.ZD.FIRE, h.ZD.COMPASS, h.ZD.CROSSHAIRS, h.ZD.FLOWER, h.ZD.FORCE, h.ZD.GEM, h.ZD.LAVA, h.ZD.PSYCHIC, h.ZD.SMOKE, h.ZD.SNOW, h.ZD.SOUND, h.ZD.SUN, h.ZD.WIND];
n.Z = (e) => {
    let { handleUpdate: n, badge: t, primaryColor: i, secondaryColor: s, tag: v, error: _, furthestStep: y, inSettings: T } = e,
        I = a.useMemo(() => {
            let e = (0, h.yf)();
            return {
                primary: null != i ? i : e.primary,
                secondary: null != s ? s : e.secondary
            };
        }, [i, s]);
    a.useEffect(() => {
        (null == i || null == s) &&
            n({
                badgePrimaryColor: I.primary,
                badgeSecondaryColor: I.secondary
            });
    }, [I.primary, I.secondary, n, i, s]);
    let j = a.useMemo(() => {
            for (let e = 0; e < h.sg.length; e++) if (h.sg[e].primary === I.primary && h.sg[e].secondary === I.secondary) return 1 + e;
            return 0;
        }, [I.primary, I.secondary]),
        [N, S] = a.useState(!1),
        E = a.useCallback(() => {
            let e = b[Math.floor(Math.random() * b.length)],
                t = o().random().hex();
            n({
                badgeKind: e,
                badgePrimaryColor: t,
                badgeSecondaryColor: o().random().hex()
            });
        }, [n]);
    return (
        a.useEffect(() => {
            y === x.Wy.CUSTOMIZE_TAG_BADGE &&
                !T &&
                n({
                    brandPrimaryColor: I.primary,
                    brandSecondaryColor: I.secondary
                });
        }, [n, I.primary, I.secondary, y, i, s, T]),
        (0, r.jsxs)('div', {
            className: C.slideContent,
            children: [
                (0, r.jsx)(d.Heading, {
                    variant: 'heading-xxl/medium',
                    className: C.title,
                    children: p.intl.string(p.t.ZcHHvr)
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    className: C.subtitle,
                    children: p.intl.string(p.t.Tr399P)
                }),
                (0, r.jsx)(f.Z, { onClick: E }),
                (0, r.jsxs)('div', {
                    className: g.container,
                    children: [
                        (0, r.jsxs)('div', {
                            className: g.badgesContainer,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: g.pickerContainer,
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: 'text-xs/semibold',
                                            color: 'text-muted',
                                            children: p.intl.string(p.t.eyPefn)
                                        }),
                                        (0, r.jsx)('div', {
                                            className: g.pickerGrid,
                                            children: b.map((e) =>
                                                (0, r.jsx)(
                                                    d.Clickable,
                                                    {
                                                        onClick: () => n({ badgeKind: e }),
                                                        className: l()(g.badgeAssetContainer, { [g.badgeAssetContainerSelected]: e === t }),
                                                        children: (0, r.jsx)(u.A, {
                                                            badge: e,
                                                            width: 32,
                                                            height: 32
                                                        })
                                                    },
                                                    ''.concat(e)
                                                )
                                            )
                                        })
                                    ]
                                }),
                                (0, r.jsxs)('div', {
                                    className: g.pickerContainer,
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: 'text-xs/semibold',
                                            color: 'text-muted',
                                            children: p.intl.string(p.t['93wr6e'])
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: g.pickerGrid,
                                            children: [
                                                (0, r.jsx)(m.Z, {
                                                    showSecondaryColor: h.ME[t] >= 2,
                                                    palette: I,
                                                    onPrimaryColorChange: (e) => {
                                                        n({ badgePrimaryColor: (0, c.Rf)(e) });
                                                    },
                                                    onSecondaryColorChange: (e) => {
                                                        n({ badgeSecondaryColor: (0, c.Rf)(e) });
                                                    },
                                                    shouldShow: N,
                                                    onRequestClose: () => S(!1),
                                                    children: (e) =>
                                                        (0, r.jsx)(d.Clickable, {
                                                            ...e,
                                                            onClick: () => {
                                                                S((e) => !e);
                                                            },
                                                            className: l()(g.badgeAssetContainer, { [g.badgeAssetContainerSelected]: 0 === j }),
                                                            children: (0, r.jsx)(d.PaintPaletteIcon, {
                                                                size: 'custom',
                                                                width: 20,
                                                                height: 20
                                                            })
                                                        })
                                                }),
                                                h.sg.map((e, a) =>
                                                    (0, r.jsx)(
                                                        d.Clickable,
                                                        {
                                                            onClick: () => {
                                                                n({
                                                                    badgePrimaryColor: h.sg[a].primary,
                                                                    badgeSecondaryColor: h.sg[a].secondary
                                                                });
                                                            },
                                                            className: l()(g.badgeAssetContainer, { [g.badgeAssetContainerSelected]: a + 1 === j }),
                                                            children: (0, r.jsx)(u.A, {
                                                                badge: t,
                                                                width: 32,
                                                                height: 32,
                                                                primaryTintColor: e.primary,
                                                                secondaryTintColor: e.secondary
                                                            })
                                                        },
                                                        ''.concat(e.primary, ':').concat(e.secondary)
                                                    )
                                                )
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: g.tagContainer,
                            children: [
                                (0, r.jsx)(d.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'text-muted',
                                    children: p.intl.string(p.t['3eZP8/'])
                                }),
                                null != _ &&
                                    (0, r.jsx)(d.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'status-danger',
                                        className: C.errorText,
                                        children: _
                                    }),
                                (0, r.jsx)(d.TextInput, {
                                    className: g.tagInputWrapper,
                                    inputClassName: g.tagInput,
                                    value: null != v ? v : '',
                                    onChange: (e) => n({ tag: e }),
                                    maxLength: x.cG,
                                    placeholder: p.intl.string(p.t['0V0ZFx']),
                                    autoFocus: !0,
                                    prefixElement: (0, r.jsx)(u.A, {
                                        badge: t,
                                        width: 40,
                                        height: 40,
                                        primaryTintColor: I.primary,
                                        secondaryTintColor: I.secondary
                                    })
                                }),
                                (0, r.jsx)(d.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-muted',
                                    className: g.tagValidationText,
                                    children: p.intl.string(p.t.lGtFwM)
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    );
};
