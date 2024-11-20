n(627341);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(278074),
    a = n(831209),
    c = n(399606),
    d = n(481060),
    u = n(37234),
    f = n(597688),
    m = n(884697),
    p = n(222062),
    h = n(74538),
    g = n(731896),
    v = n(528439),
    x = n(981631),
    I = n(388032),
    C = n(876573),
    j = n(223223);
let P = () => 80,
    Z = (e) => {
        let { children: t, className: n, isSelected: r = !1, ...l } = e;
        return (0, i.jsx)(d.Clickable, {
            className: o()(C.effectGridItem, n, { [C.selected]: r }),
            ...l,
            onClick: l.onSelect,
            children: t
        });
    },
    E = (e) => {
        var t;
        let { user: n, profileEffect: l, innerRef: o, section: s, isSelected: u, ...x } = e,
            P = (0, g.V)(l.id),
            E = (0, c.e7)([f.Z], () => {
                let e = f.Z.getProduct(l.skuId);
                return (0, m.G1)(e);
            }),
            _ = (0, m.Yq)(l.skuId),
            N = r.useRef(null),
            { accessibilityLabel: y, thumbnailPreviewSrc: b, title: S } = null !== (t = null == P ? void 0 : P.config) && void 0 !== t ? t : {},
            T = h.ZP.canUseCollectibles(n),
            A = s === v.$0.PREMIUM_PURCHASE && !T,
            k = (0, p.M)();
        return (0, i.jsxs)(Z, {
            className: !A || u || k ? void 0 : C.decorationGridItemChurned,
            innerRef: null != o ? o : N,
            isSelected: u,
            ...x,
            children: [
                (0, i.jsx)('img', {
                    src: j,
                    alt: y,
                    className: C.presetEffectBackground
                }),
                (0, i.jsx)('img', {
                    className: C.presetEffectImg,
                    src: b,
                    alt: S
                }),
                s === v.$0.PURCHASE || (s === v.$0.PREMIUM_PURCHASE && T)
                    ? null
                    : _
                      ? (0, i.jsx)(d.PremiumBadge, {
                            className: C.newBadge,
                            text: (0, i.jsxs)('div', {
                                className: C.newBadgeText,
                                children: [
                                    (0, i.jsx)(d.LockIcon, {
                                        size: 'xxs',
                                        color: 'currentColor'
                                    }),
                                    I.intl.string(I.t.y2b7CA)
                                ]
                            })
                        })
                      : (0, i.jsx)(d.IconBadge, {
                            icon: E
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
                            color: a.Z.BACKGROUND_ACCENT,
                            className: C.lockBadge
                        })
            ]
        });
    };
t.Z = (e) => {
    let { user: t, guild: n, pendingProfileEffect: r, selectedProfileEffectRef: l, onSelect: o, onClose: a } = e,
        c = () => {
            a(), (0, u.jN)(x.S9g.COLLECTIBLES_SHOP);
        },
        f = (0, v.ZP)(),
        m = null != r;
    return (0, i.jsx)('section', {
        className: C.section,
        children: (0, i.jsx)(d.MasonryList, {
            fade: !0,
            itemGutter: 12,
            sectionGutter: 16,
            paddingVertical: 0,
            paddingHorizontal: 12,
            className: C.list,
            columns: 3,
            sections: f.map((e) => {
                let { items: t } = e;
                return t.length;
            }),
            renderItem: (e, a, u, p) => {
                let { section: h, items: g } = f[e];
                return (0, s.EQ)(g[a])
                    .with(v.Tm, () =>
                        (0, i.jsxs)(
                            Z,
                            {
                                style: { ...u },
                                isSelected: !m,
                                onSelect: () => o(null),
                                children: [
                                    (0, i.jsx)(d.DenyIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: C.notAllowedIcon
                                    }),
                                    (0, i.jsx)(d.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-primary',
                                        children: null != n ? I.intl.string(I.t.GJ3Fcn) : I.intl.string(I.t.PoWNfX)
                                    })
                                ]
                            },
                            p
                        )
                    )
                    .with(v.oT, () =>
                        (0, i.jsxs)(
                            Z,
                            {
                                style: u,
                                onSelect: c,
                                children: [
                                    (0, i.jsx)(d.ShopIcon, {
                                        size: 'custom',
                                        width: 23,
                                        height: 23,
                                        color: 'currentColor',
                                        className: C.shopIcon
                                    }),
                                    (0, i.jsx)(d.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-primary',
                                        children: I.intl.string(I.t.pWG4zc)
                                    })
                                ]
                            },
                            p
                        )
                    )
                    .otherwise((e) => {
                        let n = r === e.id;
                        return (0, i.jsx)(
                            E,
                            {
                                user: t,
                                style: { ...u },
                                section: h,
                                profileEffect: e,
                                innerRef: n ? l : void 0,
                                isSelected: n,
                                onSelect: () => o(e.id)
                            },
                            p
                        );
                    });
            },
            renderSection: (e, t) => {
                let { header: n } = f[e];
                return (0, i.jsx)('div', {
                    style: {
                        ...t,
                        height: ''.concat(16, 'px'),
                        position: 'absolute'
                    },
                    children: (0, i.jsx)(d.FormTitle, { children: n })
                });
            },
            getSectionHeight: () => 16,
            getItemKey: (e, t) => {
                var n, i;
                return null !== (i = null === (n = f[e].items[t]) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : null;
            },
            getItemHeight: P,
            removeEdgeItemGutters: !0
        })
    });
};
