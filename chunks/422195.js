n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(477690),
    l = n(481060),
    u = n(2052),
    c = n(880949),
    d = n(806966),
    _ = n(28546),
    E = n(254494),
    f = n(430824),
    h = n(626135),
    p = n(624138),
    I = n(453070),
    m = n(926491),
    T = n(373228),
    S = n(378233),
    g = n(419922),
    A = n(981631),
    N = n(957825),
    R = n(689938),
    O = n(193599);
let v = (0, p.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    C = (0, p.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    L = (0, p.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    D = (0, p.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    y = (0, p.Mg)(o.Z.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    b = (0, p.Mg)(o.Z.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    M = [v, v, v, v],
    P = (C + L) * 2 + v,
    U = y + 2 * b,
    w = (e) => {
        let { activeIndex: t, stickerPickerCategories: n, categoryListRef: a, firstStandardStickerCategoryOffsetTop: o, setShouldRenderShortcut: d } = e,
            E = (0, u.O)(),
            p = (0, _.Iu)((e) => '' !== e.searchQuery),
            I = i.useCallback(
                (e, a, o) => {
                    var u, d;
                    let _;
                    let I = (null === (u = n[0]) || void 0 === u ? void 0 : u.type) === T.Ih.FAVORITE,
                        v = I ? 1 : 0,
                        L = (null === (d = n[v]) || void 0 === d ? void 0 : d.type) === T.Ih.RECENT,
                        y = n.length > 0,
                        b = n.length;
                    if (0 === a && I)
                        return (0, r.jsx)(
                            'div',
                            {
                                role: 'listitem',
                                'aria-setsize': b,
                                'aria-posinset': a,
                                children: (0, r.jsx)(l.Clickable, {
                                    'aria-label': R.Z.Messages.CATEGORY_FAVORITE,
                                    className: s()(O.stickerCategory, O.stickerCategoryGeneric, {
                                        [O.stickerCategoryGenericDisabled]: y && !I,
                                        [O.stickerCategoryGenericSelected]: !p && I && 0 === t
                                    }),
                                    onClick: o,
                                    children: (0, r.jsx)(l.StarIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        className: O.stickerCategoryGenericIcon,
                                        height: D,
                                        width: D
                                    })
                                })
                            },
                            'favorites'
                        );
                    if (a === v && L)
                        return (0, r.jsx)(
                            'div',
                            {
                                role: 'listitem',
                                'aria-setsize': b,
                                'aria-posinset': a,
                                children: (0, r.jsx)(l.Clickable, {
                                    'aria-label': R.Z.Messages.STICKER_PICKER_CATEGORIES_RECENT,
                                    className: s()(O.stickerCategory, O.stickerCategoryGeneric, {
                                        [O.stickerCategoryGenericDisabled]: y && !L,
                                        [O.stickerCategoryGenericSelected]: !p && L && t === v
                                    }),
                                    onClick: o,
                                    children: (0, r.jsx)(l.ClockIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        className: O.stickerCategoryGenericIcon,
                                        height: D,
                                        width: D
                                    })
                                })
                            },
                            'recent'
                        );
                    let M = t === a,
                        P = n[a],
                        U = n[a + 1],
                        w = null != U && P.type === T.Ih.GUILD && U.type !== T.Ih.GUILD,
                        x = P.type === T.Ih.PACK,
                        G = '',
                        k = null;
                    if (P.type === T.Ih.GUILD || P.type === T.Ih.EMPTY_GUILD_UPSELL) {
                        let e = f.Z.getGuild(P.id);
                        null != e &&
                            ((_ = e.id),
                            (G = e.name),
                            (k = (0, r.jsx)(c.Z, {
                                guild: e,
                                isSelected: M
                            })));
                    } else if (x) {
                        let e = m.Z.getStickerPack(P.id);
                        null != e &&
                            ((G = e.name),
                            (k = (0, r.jsx)(g.ZP, {
                                disableAnimation: !M || p,
                                size: C,
                                sticker: (0, S.Zt)(e)
                            })));
                    }
                    return (0, r.jsxs)(
                        i.Fragment,
                        {
                            children: [
                                (0, r.jsx)(l.Tooltip, {
                                    position: 'right',
                                    text: G,
                                    tooltipContentClassName: O.__invalid_tooltip,
                                    children: (e) =>
                                        (0, r.jsx)('div', {
                                            role: 'listitem',
                                            'aria-setsize': b,
                                            'aria-posinset': a,
                                            children: (0, r.jsx)(l.Clickable, {
                                                ...e,
                                                'aria-label': G,
                                                className: s()(O.stickerCategory, {
                                                    [O.firstPartyCategory]: x,
                                                    [O.firstPartyCategorySelected]: !p && M && x
                                                }),
                                                onClick: () => {
                                                    P.type === T.Ih.PACK &&
                                                        h.default.track(A.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                                            location: null == E ? void 0 : E.location,
                                                            tab: N.X1.STICKER,
                                                            sticker_pack_id: P.id,
                                                            guild_id: _
                                                        }),
                                                        o();
                                                },
                                                children: k
                                            })
                                        })
                                }),
                                w ? (0, r.jsx)('hr', { className: O.guildCategorySeparator }, 'separator') : null
                            ]
                        },
                        P.id
                    );
                },
                [t, E, p, n]
            ),
            v = i.useCallback((e, t) => (t ? P : 0), []),
            b = i.useCallback(
                (e, t) => {
                    let r = n[t],
                        i = n[t + 1];
                    return C + (null != i && r.type === T.Ih.GUILD && i.type !== T.Ih.GUILD ? U : L);
                },
                [n]
            );
        return {
            getScrollOffsetForIndex: v,
            renderCategoryListItem: I,
            rowHeight: b,
            onScroll: i.useCallback(
                (e) => {
                    var t;
                    let n = null === (t = a.current) || void 0 === t ? void 0 : t.getListDimensions();
                    if (null == n) return;
                    let r = e + n.height;
                    d(r - y < o);
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
        _ = (0, I.Sd)(n),
        {
            firstStandardStickerCategoryIndex: f,
            firstStandardStickerCategoryOffsetTop: h,
            guildCategoryCount: p,
            hasFirstPartyStickerPacks: m
        } = i.useMemo(() => {
            var e, t;
            let n = _.filter((e) => e.type === T.Ih.GUILD).length,
                r = (null === (e = _[0]) || void 0 === e ? void 0 : e.type) === T.Ih.RECENT,
                i = n + (r ? 1 : 0) + ((null === (t = _[0]) || void 0 === t ? void 0 : t.type) === T.Ih.FAVORITE ? 1 : 0),
                a = i * (C + L) - L + U;
            return {
                firstStandardStickerCategoryIndex: i + 1,
                firstStandardStickerCategoryOffsetTop: a,
                guildCategoryCount: n,
                hasFirstPartyStickerPacks: null != _.find((e) => e.type === T.Ih.PACK)
            };
        }, [_]);
    i.useLayoutEffect(() => {
        u(p >= 7);
    }, [p]);
    let {
            renderCategoryListItem: S,
            rowHeight: g,
            onScroll: A
        } = w({
            activeIndex: c,
            stickerPickerCategories: _,
            categoryListRef: a,
            firstStandardStickerCategoryOffsetTop: h,
            setShouldRenderShortcut: u
        }),
        N = i.useCallback(
            (e) => {
                var t;
                e(f), null === (t = a.current) || void 0 === t || t.scrollTo(h);
            },
            [f, h]
        );
    return (0, r.jsx)(E.Z, {
        className: O.categoryList,
        categoryListRef: a,
        expressionsListRef: t,
        store: d.ZN,
        listPadding: M,
        onScroll: A,
        renderCategoryListItem: S,
        rowCount: _.length,
        categories: _,
        categoryHeight: g,
        children: (e) =>
            m &&
            o &&
            (0, r.jsx)(l.Clickable, {
                className: s()(O.standardStickerShortcut, { [O.invisibleShortcut]: !o }),
                onClick: () => N(e),
                children: (0, r.jsx)(l.StickerIcon, {
                    size: 'md',
                    color: 'currentColor'
                })
            })
    });
};
