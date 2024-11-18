n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(477690),
    l = n(481060),
    u = n(2052),
    c = n(880949),
    d = n(806966),
    f = n(28546),
    _ = n(254494),
    p = n(430824),
    h = n(626135),
    m = n(624138),
    g = n(453070),
    E = n(926491),
    v = n(373228),
    b = n(378233),
    I = n(419922),
    S = n(981631),
    T = n(957825),
    y = n(388032),
    A = n(191299);
let N = (0, m.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    C = (0, m.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    R = (0, m.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    O = (0, m.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    D = (0, m.Mg)(o.Z.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    L = (0, m.Mg)(o.Z.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    x = [N, N, N, N],
    w = (C + R) * 2 + N,
    M = D + 2 * L,
    P = (e) => {
        let { activeIndex: t, stickerPickerCategories: n, categoryListRef: a, firstStandardStickerCategoryOffsetTop: o, setShouldRenderShortcut: d } = e,
            _ = (0, u.O)(),
            m = (0, f.Iu)((e) => '' !== e.searchQuery),
            g = i.useCallback(
                (e, a, o) => {
                    var u, d;
                    let f;
                    let g = (null === (u = n[0]) || void 0 === u ? void 0 : u.type) === v.Ih.FAVORITE,
                        N = g ? 1 : 0,
                        R = (null === (d = n[N]) || void 0 === d ? void 0 : d.type) === v.Ih.RECENT,
                        D = n.length > 0,
                        L = n.length;
                    if (0 === a && g)
                        return (0, r.jsx)(
                            'div',
                            {
                                role: 'listitem',
                                'aria-setsize': L,
                                'aria-posinset': a,
                                children: (0, r.jsx)(l.Clickable, {
                                    'aria-label': y.intl.string(y.t.y3LQCA),
                                    className: s()(A.stickerCategory, A.stickerCategoryGeneric, {
                                        [A.stickerCategoryGenericDisabled]: D && !g,
                                        [A.stickerCategoryGenericSelected]: !m && g && 0 === t
                                    }),
                                    onClick: o,
                                    children: (0, r.jsx)(l.StarIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        className: A.stickerCategoryGenericIcon,
                                        height: O,
                                        width: O
                                    })
                                })
                            },
                            'favorites'
                        );
                    if (a === N && R)
                        return (0, r.jsx)(
                            'div',
                            {
                                role: 'listitem',
                                'aria-setsize': L,
                                'aria-posinset': a,
                                children: (0, r.jsx)(l.Clickable, {
                                    'aria-label': y.intl.string(y.t.RxAmVF),
                                    className: s()(A.stickerCategory, A.stickerCategoryGeneric, {
                                        [A.stickerCategoryGenericDisabled]: D && !R,
                                        [A.stickerCategoryGenericSelected]: !m && R && t === N
                                    }),
                                    onClick: o,
                                    children: (0, r.jsx)(l.ClockIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        className: A.stickerCategoryGenericIcon,
                                        height: O,
                                        width: O
                                    })
                                })
                            },
                            'recent'
                        );
                    let x = t === a,
                        w = n[a],
                        M = n[a + 1],
                        P = null != M && w.type === v.Ih.GUILD && M.type !== v.Ih.GUILD,
                        k = w.type === v.Ih.PACK,
                        U = '',
                        G = null;
                    if (w.type === v.Ih.GUILD || w.type === v.Ih.EMPTY_GUILD_UPSELL) {
                        let e = p.Z.getGuild(w.id);
                        null != e &&
                            ((f = e.id),
                            (U = e.name),
                            (G = (0, r.jsx)(c.Z, {
                                guild: e,
                                isSelected: x
                            })));
                    } else if (k) {
                        let e = E.Z.getStickerPack(w.id);
                        null != e &&
                            ((U = e.name),
                            (G = (0, r.jsx)(I.ZP, {
                                disableAnimation: !x || m,
                                size: C,
                                sticker: (0, b.Zt)(e)
                            })));
                    }
                    return (0, r.jsxs)(
                        i.Fragment,
                        {
                            children: [
                                (0, r.jsx)(l.Tooltip, {
                                    position: 'right',
                                    text: U,
                                    tooltipContentClassName: A.__invalid_tooltip,
                                    children: (e) =>
                                        (0, r.jsx)('div', {
                                            role: 'listitem',
                                            'aria-setsize': L,
                                            'aria-posinset': a,
                                            children: (0, r.jsx)(l.Clickable, {
                                                ...e,
                                                'aria-label': U,
                                                className: s()(A.stickerCategory, {
                                                    [A.firstPartyCategory]: k,
                                                    [A.firstPartyCategorySelected]: !m && x && k
                                                }),
                                                onClick: () => {
                                                    w.type === v.Ih.PACK &&
                                                        h.default.track(S.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                                            location: null == _ ? void 0 : _.location,
                                                            tab: T.X1.STICKER,
                                                            sticker_pack_id: w.id,
                                                            guild_id: f
                                                        }),
                                                        o();
                                                },
                                                children: G
                                            })
                                        })
                                }),
                                P ? (0, r.jsx)('hr', { className: A.guildCategorySeparator }, 'separator') : null
                            ]
                        },
                        w.id
                    );
                },
                [t, _, m, n]
            ),
            N = i.useCallback((e, t) => (t ? w : 0), []),
            L = i.useCallback(
                (e, t) => {
                    let r = n[t],
                        i = n[t + 1];
                    return C + (null != i && r.type === v.Ih.GUILD && i.type !== v.Ih.GUILD ? M : R);
                },
                [n]
            );
        return {
            getScrollOffsetForIndex: N,
            renderCategoryListItem: g,
            rowHeight: L,
            onScroll: i.useCallback(
                (e) => {
                    var t;
                    let n = null === (t = a.current) || void 0 === t ? void 0 : t.getListDimensions();
                    if (null == n) return;
                    let r = e + n.height;
                    d(r - D < o);
                },
                [o]
            )
        };
    };
t.Z = (e) => {
    let { stickersListRef: t, channel: n } = e,
        a = i.useRef(null),
        [o, u] = i.useState(!0),
        c = d.ZN.useStore((e) => e.activeCategoryIndex),
        f = (0, g.Sd)(n),
        {
            firstStandardStickerCategoryIndex: p,
            firstStandardStickerCategoryOffsetTop: h,
            guildCategoryCount: m,
            hasFirstPartyStickerPacks: E
        } = i.useMemo(() => {
            var e, t;
            let n = f.filter((e) => e.type === v.Ih.GUILD).length,
                r = (null === (e = f[0]) || void 0 === e ? void 0 : e.type) === v.Ih.RECENT,
                i = n + (r ? 1 : 0) + ((null === (t = f[0]) || void 0 === t ? void 0 : t.type) === v.Ih.FAVORITE ? 1 : 0),
                a = i * (C + R) - R + M;
            return {
                firstStandardStickerCategoryIndex: i + 1,
                firstStandardStickerCategoryOffsetTop: a,
                guildCategoryCount: n,
                hasFirstPartyStickerPacks: null != f.find((e) => e.type === v.Ih.PACK)
            };
        }, [f]);
    i.useLayoutEffect(() => {
        u(m >= 7);
    }, [m]);
    let {
            renderCategoryListItem: b,
            rowHeight: I,
            onScroll: S
        } = P({
            activeIndex: c,
            stickerPickerCategories: f,
            categoryListRef: a,
            firstStandardStickerCategoryOffsetTop: h,
            setShouldRenderShortcut: u
        }),
        T = i.useCallback(
            (e) => {
                var t;
                e(p), null === (t = a.current) || void 0 === t || t.scrollTo(h);
            },
            [p, h]
        );
    return (0, r.jsx)(_.Z, {
        className: A.categoryList,
        categoryListRef: a,
        expressionsListRef: t,
        store: d.ZN,
        listPadding: x,
        onScroll: S,
        renderCategoryListItem: b,
        rowCount: f.length,
        categories: f,
        categoryHeight: I,
        children: (e) =>
            E &&
            o &&
            (0, r.jsx)(l.Clickable, {
                className: s()(A.standardStickerShortcut, { [A.invisibleShortcut]: !o }),
                onClick: () => T(e),
                children: (0, r.jsx)(l.StickerIcon, {
                    size: 'md',
                    color: 'currentColor'
                })
            })
    });
};
