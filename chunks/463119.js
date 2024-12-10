n.d(t, {
    i: function () {
        return M;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(91192),
    s = n(442837),
    c = n(780384),
    d = n(481060),
    u = n(596454),
    h = n(515753),
    m = n(410030),
    p = n(607070),
    g = n(100527),
    f = n(906732),
    _ = n(821982),
    E = n(377171),
    I = n(633302),
    C = n(153066),
    v = n(335131),
    S = n(744112),
    N = n(267097),
    T = n(141594),
    b = n(302800),
    x = n(981631),
    A = n(388032),
    Z = n(335907);
let L = (e) => {
        let { color: t } = e;
        return (0, i.jsx)(d.TextBadge, {
            className: Z.newBadge,
            color: null != t ? t : E.Z.STATUS_DANGER_BACKGROUND,
            text: A.intl.string(A.t.y2b7CA)
        });
    },
    y = (e) => {
        let { selected: t, locationState: n, icon: l, onMouseEnter: a, onMouseLeave: s, children: c, ...u } = e,
            m = (0, o.JA)('shop'),
            p = g.Z.HOME_PAGE_SHOP_TAB,
            { analyticsLocations: _ } = (0, f.ZP)(p),
            E = r.useCallback(
                () =>
                    (0, v.Sm)({
                        analyticsSource: p,
                        analyticsLocations: _
                    }),
                [p, _]
            );
        return (0, i.jsx)(h.Qj, {
            selected: t,
            route: x.Z5c.COLLECTIBLES_SHOP,
            icon: null != l ? l : d.ShopIcon,
            text: A.intl.string(A.t.pWG4zc),
            locationState: n,
            ...m,
            ...u,
            onMouseEnter: a,
            onMouseLeave: s,
            onClick: E,
            children: c
        });
    },
    P = (e) => {
        let { selected: t, locationState: n } = e;
        return (0, i.jsx)(y, {
            selected: t,
            locationState: n,
            children: (0, i.jsx)(L, {})
        });
    },
    O = r.memo(function (e) {
        var t;
        let { displayOptions: n, assetId: r, reducedMotion: l = !1 } = e,
            a = null != r ? (0, _.Z)(r, d.AvatarSizes.SIZE_80, !l) : void 0,
            o = n.title(),
            s = null === (t = n.body) || void 0 === t ? void 0 : t.call(n),
            c = null == s || '' === s;
        return (0, i.jsxs)('div', {
            className: Z.shopMarketingTooltipContent,
            children: [
                (0, i.jsx)('div', {
                    className: Z.avatarContainer,
                    children: (0, i.jsx)(d.Avatar, {
                        className: Z.avatar,
                        src: n.imageSrc,
                        avatarDecoration: a,
                        size: d.AvatarSizes.SIZE_80,
                        'aria-hidden': !0
                    })
                }),
                (0, i.jsxs)('div', {
                    className: Z.shopMarketingTooltipText,
                    children: [
                        (0, i.jsx)(d.Heading, {
                            variant: c ? 'heading-sm/medium' : 'heading-sm/bold',
                            children: o
                        }),
                        !c &&
                            (0, i.jsx)(d.Text, {
                                variant: 'text-xs/normal',
                                className: Z.marketingBadgeTooltipContent,
                                children: s
                            })
                    ]
                })
            ]
        });
    }),
    R = (e) => {
        var t, n, l, o, u, h, g, f, _, E, I, v;
        let S, N;
        let { selected: T, locationState: b, displayOptions: x } = e,
            P = (0, s.e7)([p.Z], () => p.Z.useReducedMotion),
            [R, j] = r.useState(0),
            [D, M] = r.useState(!1),
            w = (0, m.ZP)(),
            k = x.entrypointDecorationAssets,
            U = (0, c.wj)(w);
        D ? (U ? ((S = null === (t = x.entryPointBackgroundAssets) || void 0 === t ? void 0 : t.srcDarkHovered), (N = null === (l = x.entrypointBackgroundStyle) || void 0 === l ? void 0 : null === (n = l.hovered) || void 0 === n ? void 0 : n.dark)) : ((S = null === (o = x.entryPointBackgroundAssets) || void 0 === o ? void 0 : o.srcLightHovered), (N = null === (h = x.entrypointBackgroundStyle) || void 0 === h ? void 0 : null === (u = h.hovered) || void 0 === u ? void 0 : u.light))) : U ? ((S = null === (g = x.entryPointBackgroundAssets) || void 0 === g ? void 0 : g.srcDark), (N = null === (_ = x.entrypointBackgroundStyle) || void 0 === _ ? void 0 : null === (f = _.resting) || void 0 === f ? void 0 : f.dark)) : ((S = null === (E = x.entryPointBackgroundAssets) || void 0 === E ? void 0 : E.srcLight), (N = null === (v = x.entrypointBackgroundStyle) || void 0 === v ? void 0 : null === (I = v.resting) || void 0 === I ? void 0 : I.light));
        let G = r.useCallback(
                (e) => {
                    j((e) => (e + 1) % x.assetIds.length), M(!0), null == e || e();
                },
                [x.assetIds.length]
            ),
            B = r.useCallback((e) => {
                M(!1), null == e || e();
            }, []),
            H = x.title();
        return (0, i.jsx)(d.Tooltip, {
            text: (0, i.jsx)(O, {
                displayOptions: x,
                assetId: x.assetIds[R],
                reducedMotion: P
            }),
            tooltipClassName: Z.marketingBadgeTooltip,
            position: 'right',
            delay: 100,
            allowOverflow: !0,
            hideOnClick: !1,
            'aria-label': 'string' == typeof H ? H : A.intl.string(A.t.rSXaxc),
            children: (e) =>
                (0, i.jsxs)(y, {
                    className: null != x.entryPointClassName ? (0, C.l)(Z, x.entryPointClassName) : void 0,
                    selected: T,
                    locationState: b,
                    icon: x.entryPointIcon,
                    ...e,
                    onMouseEnter: () => G(e.onMouseEnter),
                    onMouseLeave: () => B(e.onMouseLeave),
                    children: [
                        (0, i.jsx)('div', {
                            className: Z.marketingButtonBackground,
                            style: { background: N },
                            children:
                                null != S &&
                                (0, i.jsx)('img', {
                                    src: S,
                                    className: Z.marketingButtonBackgroundImage,
                                    alt: '',
                                    'aria-hidden': !0
                                })
                        }),
                        null != k &&
                            !P &&
                            (0, i.jsx)('img', {
                                src: (0, c.wj)(w) ? k.srcDark : k.srcLight,
                                className: a()(Z.marketingButtonImage, { [Z.marketingButtonImageHovered]: D }),
                                alt: '',
                                'aria-hidden': !0
                            }),
                        (0, i.jsx)(L, { color: x.badgeColor })
                    ]
                })
        });
    },
    j = (e) => {
        let { selected: t, locationState: n, displayOptions: l } = e,
            a = r.useMemo(() => {
                var e;
                let t = null != l.emojiName ? (null === (e = I.ZP.getByName(l.emojiName)) || void 0 === e ? void 0 : e.surrogates) : null;
                return (0, i.jsxs)(d.Text, {
                    variant: 'text-sm/medium',
                    className: Z.marketingBadgeTooltipContent,
                    children: [null != t && (0, i.jsx)(u.Z, { emojiName: t }), l.title()]
                });
            }, [l]);
        return (0, i.jsx)(d.Tooltip, {
            text: a,
            tooltipClassName: Z.marketingBadgeTooltip,
            position: 'right',
            delay: 100,
            hideOnClick: !1,
            'aria-label': l.title(),
            children: (e) =>
                (0, i.jsx)(y, {
                    selected: t,
                    locationState: n,
                    ...e,
                    children: (0, i.jsx)(L, { color: l.badgeColor })
                })
        });
    },
    D = () => ((0, N.Z)(), null),
    M = (e) => {
        let { selected: t, locationState: n } = e,
            { collectiblesShopTabNewBadgeDisplayOptions: r } = (0, T.Z)(),
            l = (0, S.b)('Collectibles Shop Button');
        if (null != r)
            switch (r.type) {
                case b.k2.TOOLTIP:
                    return (0, i.jsx)(j, {
                        selected: t,
                        locationState: n,
                        displayOptions: r
                    });
                case b.k2.COACHTIP:
                    return (0, i.jsx)(R, {
                        selected: t,
                        locationState: n,
                        displayOptions: r
                    });
                case b.k2.BADGE:
                    return (0, i.jsx)(P, {
                        selected: t,
                        locationState: n
                    });
            }
        return (0, i.jsxs)(i.Fragment, {
            children: [
                l && (0, i.jsx)(D, {}),
                (0, i.jsx)(y, {
                    selected: t,
                    locationState: n
                })
            ]
        });
    };
