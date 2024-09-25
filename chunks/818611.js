var r = n(627341);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(278074),
    u = n(831209),
    c = n(399606),
    d = n(481060),
    _ = n(727637),
    E = n(597688),
    f = n(884697),
    h = n(74538),
    p = n(864106),
    m = n(439959),
    I = n(125988),
    T = n(689938),
    g = n(236676);
let S = 3,
    A = 80,
    v = 12,
    N = 16,
    O = () => A,
    R = (e) => {
        let { children: t, className: n, onSelect: r, isSelected: a = !1, ...o } = e;
        return (0, i.jsx)(d.Clickable, {
            className: s()(g.decorationGridItem, a ? g.selected : void 0, n),
            ...o,
            onClick: r,
            children: t
        });
    },
    C = (e) => {
        let { user: t, avatarDecoration: n, innerRef: r, section: o, isSelected: s = !1, ...l } = e,
            p = (0, c.e7)([E.Z], () => {
                let e = E.Z.getProduct(n.skuId);
                return (0, f.G1)(e);
            }),
            S = (0, f.Yq)(n.skuId),
            v = h.ZP.canUseCollectibles(t),
            N = o === m.$0.PREMIUM_PURCHASE && !v,
            O = a.useRef(null),
            C = (0, _.Z)(null != r ? r : O),
            { avatarDecorationSrc: y } = (0, I.Z)({
                user: t,
                avatarDecorationOverride: n,
                size: A,
                onlyAnimateOnHover: !C
            }),
            b = () =>
                o === m.$0.PURCHASE || (o === m.$0.PREMIUM_PURCHASE && v)
                    ? null
                    : S
                      ? (0, i.jsx)(d.PremiumBadge, {
                            className: g.newBadge,
                            text: (0, i.jsxs)('div', {
                                className: g.newBadgeText,
                                children: [
                                    (0, i.jsx)(d.LockIcon, {
                                        size: 'xxs',
                                        color: 'currentColor'
                                    }),
                                    T.Z.Messages.NEW
                                ]
                            })
                        })
                      : (0, i.jsx)(d.IconBadge, {
                            icon: p
                                ? () =>
                                      (0, i.jsx)(d.NitroWheelIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          width: 14,
                                          height: 14
                                      })
                                : () =>
                                      (0, i.jsx)(d.LockIcon, {
                                          size: 'xxs',
                                          color: 'currentColor'
                                      }),
                            color: u.Z.BACKGROUND_ACCENT,
                            className: g.iconBadge
                        });
        return (0, i.jsxs)(R, {
            className: N ? g.decorationGridItemChurned : void 0,
            innerRef: null != r ? r : O,
            isSelected: s,
            ...l,
            children: [
                (0, i.jsx)('img', {
                    className: g.presetDecorationImg,
                    src: y,
                    alt: n.label
                }),
                b()
            ]
        });
    },
    y = (e) => {
        let { user: t, guild: n, pendingAvatarDecoration: r, selectedAvatarDecorationRef: o, onSelect: s, onOpenShop: u } = e,
            c = (0, m.ZP)(),
            _ = a.useCallback(() => {
                u(void 0);
            }, [u]),
            E = (e, a, u, E) => {
                let { section: f, items: h } = c[e];
                return (0, l.EQ)(h[a])
                    .with(m.Tm, () =>
                        (0, i.jsxs)(
                            R,
                            {
                                style: { ...u },
                                isSelected: null === r,
                                onSelect: () => s(null),
                                children: [
                                    (0, i.jsx)(d.DenyIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: g.notAllowedIcon
                                    }),
                                    (0, i.jsx)(d.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-primary',
                                        children: (0, p.ad)(t, n) ? T.Z.Messages.USER_SETTINGS_REMOVE_PER_GUILD_AVATAR_DECORATION : T.Z.Messages.NONE
                                    })
                                ]
                            },
                            E
                        )
                    )
                    .with(m.oT, () =>
                        (0, i.jsxs)(
                            R,
                            {
                                style: u,
                                onSelect: _,
                                children: [
                                    (0, i.jsx)(d.ShopIcon, {
                                        size: 'custom',
                                        width: 23,
                                        height: 23,
                                        color: 'currentColor',
                                        className: g.shopIcon
                                    }),
                                    (0, i.jsx)(d.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-primary',
                                        children: T.Z.Messages.COLLECTIBLES_SHOP
                                    })
                                ]
                            },
                            E
                        )
                    )
                    .otherwise((e) => {
                        let n = (null == r ? void 0 : r.id) === e.id;
                        return (0, i.jsx)(
                            C,
                            {
                                style: { ...u },
                                user: t,
                                avatarDecoration: e,
                                section: f,
                                innerRef: n ? o : void 0,
                                isSelected: n,
                                onSelect: () => s(e)
                            },
                            E
                        );
                    });
            },
            f = (e, t) => {
                let { header: n } = c[e];
                return (0, i.jsx)('div', {
                    className: g.headings,
                    style: {
                        ...t,
                        position: 'absolute'
                    },
                    children: (0, i.jsx)(d.HeadingLevel, {
                        forceLevel: 5,
                        children: (0, i.jsx)(d.Heading, {
                            variant: 'eyebrow',
                            color: 'header-secondary',
                            children: n
                        })
                    })
                });
            };
        return (0, i.jsx)(d.MasonryList, {
            fade: !0,
            className: g.list,
            columns: S,
            sections: c.map((e) => {
                let { items: t } = e;
                return t.length;
            }),
            sectionGutter: N,
            itemGutter: v,
            paddingHorizontal: v,
            paddingVertical: 0,
            removeEdgeItemGutters: !0,
            renderItem: E,
            renderSection: f,
            getSectionHeight: (e) => c[e].height,
            getItemKey: (e, t) => c[e].items[t].id,
            getItemHeight: O
        });
    };
t.Z = y;
