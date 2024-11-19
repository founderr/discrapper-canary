n(627341);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(278074),
    l = n(831209),
    u = n(399606),
    c = n(481060),
    d = n(727637),
    f = n(597688),
    _ = n(884697),
    p = n(74538),
    h = n(864106),
    m = n(439959),
    g = n(125988),
    E = n(388032),
    v = n(472007);
let b = () => 80,
    I = (e) => {
        let { children: t, className: n, onSelect: i, isSelected: a = !1, ...o } = e;
        return (0, r.jsx)(c.Clickable, {
            className: s()(v.decorationGridItem, a ? v.selected : void 0, n),
            ...o,
            onClick: i,
            children: t
        });
    },
    T = (e) => {
        let { user: t, avatarDecoration: n, innerRef: a, section: s, isSelected: o = !1, ...h } = e,
            b = (0, u.e7)([f.Z], () => {
                let e = f.Z.getProduct(n.skuId);
                return (0, _.G1)(e);
            }),
            T = (0, _.Yq)(n.skuId),
            S = p.ZP.canUseCollectibles(t),
            y = s === m.$0.PREMIUM_PURCHASE && !S,
            A = i.useRef(null),
            N = (0, d.Z)(null != a ? a : A),
            { avatarDecorationSrc: C } = (0, g.Z)({
                user: t,
                avatarDecorationOverride: n,
                size: 80,
                onlyAnimateOnHover: !N
            });
        return (0, r.jsxs)(I, {
            className: y ? v.decorationGridItemChurned : void 0,
            innerRef: null != a ? a : A,
            isSelected: o,
            ...h,
            children: [
                (0, r.jsx)('img', {
                    className: v.presetDecorationImg,
                    src: C,
                    alt: n.label
                }),
                s === m.$0.PURCHASE || (s === m.$0.PREMIUM_PURCHASE && S)
                    ? null
                    : T
                      ? (0, r.jsx)(c.PremiumBadge, {
                            className: v.newBadge,
                            text: (0, r.jsxs)('div', {
                                className: v.newBadgeText,
                                children: [
                                    (0, r.jsx)(c.LockIcon, {
                                        size: 'xxs',
                                        color: 'currentColor'
                                    }),
                                    E.intl.string(E.t.y2b7CA)
                                ]
                            })
                        })
                      : (0, r.jsx)(c.IconBadge, {
                            icon: b
                                ? () =>
                                      (0, r.jsx)(c.NitroWheelIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          width: 14,
                                          height: 14
                                      })
                                : () =>
                                      (0, r.jsx)(c.LockIcon, {
                                          size: 'xxs',
                                          color: 'currentColor'
                                      }),
                            color: l.Z.BACKGROUND_ACCENT,
                            className: v.iconBadge
                        })
            ]
        });
    };
t.Z = (e) => {
    let { user: t, guild: n, pendingAvatarDecoration: a, selectedAvatarDecorationRef: s, onSelect: l, onOpenShop: u } = e,
        d = (0, m.ZP)(),
        f = i.useCallback(() => {
            u(void 0);
        }, [u]);
    return (0, r.jsx)(c.MasonryList, {
        fade: !0,
        className: v.list,
        columns: 3,
        sections: d.map((e) => {
            let { items: t } = e;
            return t.length;
        }),
        sectionGutter: 16,
        itemGutter: 12,
        paddingHorizontal: 12,
        paddingVertical: 0,
        removeEdgeItemGutters: !0,
        renderItem: (e, i, u, _) => {
            let { section: p, items: g } = d[e];
            return (0, o.EQ)(g[i])
                .with(m.Tm, () =>
                    (0, r.jsxs)(
                        I,
                        {
                            style: { ...u },
                            isSelected: null === a,
                            onSelect: () => l(null),
                            children: [
                                (0, r.jsx)(c.DenyIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: v.notAllowedIcon
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'header-primary',
                                    children: (0, h.ad)(t, n) ? E.intl.string(E.t['GsW4/v']) : E.intl.string(E.t.PoWNfX)
                                })
                            ]
                        },
                        _
                    )
                )
                .with(m.oT, () =>
                    (0, r.jsxs)(
                        I,
                        {
                            style: u,
                            onSelect: f,
                            children: [
                                (0, r.jsx)(c.ShopIcon, {
                                    size: 'custom',
                                    width: 23,
                                    height: 23,
                                    color: 'currentColor',
                                    className: v.shopIcon
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'header-primary',
                                    children: E.intl.string(E.t.pWG4zc)
                                })
                            ]
                        },
                        _
                    )
                )
                .otherwise((e) => {
                    let n = (null == a ? void 0 : a.id) === e.id;
                    return (0, r.jsx)(
                        T,
                        {
                            style: { ...u },
                            user: t,
                            avatarDecoration: e,
                            section: p,
                            innerRef: n ? s : void 0,
                            isSelected: n,
                            onSelect: () => l(e)
                        },
                        _
                    );
                });
        },
        renderSection: (e, t) => {
            let { header: n } = d[e];
            return (0, r.jsx)('div', {
                className: v.headings,
                style: {
                    ...t,
                    position: 'absolute'
                },
                children: (0, r.jsx)(c.HeadingLevel, {
                    forceLevel: 5,
                    children: (0, r.jsx)(c.Heading, {
                        variant: 'eyebrow',
                        color: 'header-secondary',
                        children: n
                    })
                })
            });
        },
        getSectionHeight: (e) => d[e].height,
        getItemKey: (e, t) => d[e].items[t].id,
        getItemHeight: b
    });
};
