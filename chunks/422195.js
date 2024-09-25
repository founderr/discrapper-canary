var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(477690),
    u = n(481060),
    c = n(2052),
    d = n(880949),
    _ = n(806966),
    E = n(28546),
    f = n(254494),
    h = n(430824),
    p = n(626135),
    m = n(624138),
    I = n(453070),
    T = n(926491),
    g = n(373228),
    S = n(378233),
    A = n(419922),
    v = n(981631),
    N = n(957825),
    O = n(689938),
    R = n(193599);
let C = (0, m.Mg)(l.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    y = (0, m.Mg)(l.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    b = (0, m.Mg)(l.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    L = (0, m.Mg)(l.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    D = (0, m.Mg)(l.Z.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    M = (0, m.Mg)(l.Z.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    P = [C, C, C, C],
    U = (y + b) * 2 + C,
    w = D + 2 * M,
    x = 7,
    G = (e) => {
        let { activeIndex: t, stickerPickerCategories: n, categoryListRef: r, firstStandardStickerCategoryOffsetTop: o, setShouldRenderShortcut: l } = e,
            _ = (0, c.O)(),
            f = (0, E.Iu)((e) => '' !== e.searchQuery),
            m = a.useCallback(
                (e, r, o) => {
                    var l, c;
                    let E;
                    let m = (null === (l = n[0]) || void 0 === l ? void 0 : l.type) === g.Ih.FAVORITE,
                        I = m ? 1 : 0,
                        C = (null === (c = n[I]) || void 0 === c ? void 0 : c.type) === g.Ih.RECENT,
                        b = n.length > 0,
                        D = n.length;
                    if (0 === r && m)
                        return (0, i.jsx)(
                            'div',
                            {
                                role: 'listitem',
                                'aria-setsize': D,
                                'aria-posinset': r,
                                children: (0, i.jsx)(u.Clickable, {
                                    'aria-label': O.Z.Messages.CATEGORY_FAVORITE,
                                    className: s()(R.stickerCategory, R.stickerCategoryGeneric, {
                                        [R.stickerCategoryGenericDisabled]: b && !m,
                                        [R.stickerCategoryGenericSelected]: !f && m && 0 === t
                                    }),
                                    onClick: o,
                                    children: (0, i.jsx)(u.StarIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        className: R.stickerCategoryGenericIcon,
                                        height: L,
                                        width: L
                                    })
                                })
                            },
                            'favorites'
                        );
                    if (r === I && C)
                        return (0, i.jsx)(
                            'div',
                            {
                                role: 'listitem',
                                'aria-setsize': D,
                                'aria-posinset': r,
                                children: (0, i.jsx)(u.Clickable, {
                                    'aria-label': O.Z.Messages.STICKER_PICKER_CATEGORIES_RECENT,
                                    className: s()(R.stickerCategory, R.stickerCategoryGeneric, {
                                        [R.stickerCategoryGenericDisabled]: b && !C,
                                        [R.stickerCategoryGenericSelected]: !f && C && t === I
                                    }),
                                    onClick: o,
                                    children: (0, i.jsx)(u.ClockIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        className: R.stickerCategoryGenericIcon,
                                        height: L,
                                        width: L
                                    })
                                })
                            },
                            'recent'
                        );
                    let M = t === r,
                        P = n[r],
                        U = n[r + 1],
                        w = null != U && P.type === g.Ih.GUILD && U.type !== g.Ih.GUILD,
                        x = P.type === g.Ih.PACK,
                        G = '',
                        k = null;
                    if (P.type === g.Ih.GUILD || P.type === g.Ih.EMPTY_GUILD_UPSELL) {
                        let e = h.Z.getGuild(P.id);
                        null != e &&
                            ((E = e.id),
                            (G = e.name),
                            (k = (0, i.jsx)(d.Z, {
                                guild: e,
                                isSelected: M
                            })));
                    } else if (x) {
                        let e = T.Z.getStickerPack(P.id);
                        null != e &&
                            ((G = e.name),
                            (k = (0, i.jsx)(A.ZP, {
                                disableAnimation: !M || f,
                                size: y,
                                sticker: (0, S.Zt)(e)
                            })));
                    }
                    return (0, i.jsxs)(
                        a.Fragment,
                        {
                            children: [
                                (0, i.jsx)(u.Tooltip, {
                                    position: 'right',
                                    text: G,
                                    tooltipContentClassName: R.__invalid_tooltip,
                                    children: (e) =>
                                        (0, i.jsx)('div', {
                                            role: 'listitem',
                                            'aria-setsize': D,
                                            'aria-posinset': r,
                                            children: (0, i.jsx)(u.Clickable, {
                                                ...e,
                                                'aria-label': G,
                                                className: s()(R.stickerCategory, {
                                                    [R.firstPartyCategory]: x,
                                                    [R.firstPartyCategorySelected]: !f && M && x
                                                }),
                                                onClick: () => {
                                                    P.type === g.Ih.PACK &&
                                                        p.default.track(v.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                                            location: null == _ ? void 0 : _.location,
                                                            tab: N.X1.STICKER,
                                                            sticker_pack_id: P.id,
                                                            guild_id: E
                                                        }),
                                                        o();
                                                },
                                                children: k
                                            })
                                        })
                                }),
                                w ? (0, i.jsx)('hr', { className: R.guildCategorySeparator }, 'separator') : null
                            ]
                        },
                        P.id
                    );
                },
                [t, _, f, n]
            ),
            I = a.useCallback((e, t) => (t ? U : 0), []),
            C = a.useCallback(
                (e, t) => {
                    let r = n[t],
                        i = n[t + 1];
                    return y + (null != i && r.type === g.Ih.GUILD && i.type !== g.Ih.GUILD ? w : b);
                },
                [n]
            );
        return {
            getScrollOffsetForIndex: I,
            renderCategoryListItem: m,
            rowHeight: C,
            onScroll: a.useCallback(
                (e) => {
                    var t;
                    let n = null === (t = r.current) || void 0 === t ? void 0 : t.getListDimensions();
                    if (null != n) l(e + n.height - D < o);
                },
                [o]
            )
        };
    },
    k = (e) => {
        let { stickersListRef: t, channel: n } = e,
            r = a.useRef(null),
            [o, l] = a.useState(!0),
            c = _.ZN.useStore((e) => e.activeCategoryIndex),
            d = (0, I.Sd)(n),
            {
                firstStandardStickerCategoryIndex: E,
                firstStandardStickerCategoryOffsetTop: h,
                guildCategoryCount: p,
                hasFirstPartyStickerPacks: m
            } = a.useMemo(() => {
                var e, t;
                let n = d.filter((e) => e.type === g.Ih.GUILD).length,
                    r = (null === (e = d[0]) || void 0 === e ? void 0 : e.type) === g.Ih.RECENT,
                    i = n + (r ? 1 : 0) + ((null === (t = d[0]) || void 0 === t ? void 0 : t.type) === g.Ih.FAVORITE ? 1 : 0),
                    a = i * (y + b) - b + w;
                return {
                    firstStandardStickerCategoryIndex: i + 1,
                    firstStandardStickerCategoryOffsetTop: a,
                    guildCategoryCount: n,
                    hasFirstPartyStickerPacks: null != d.find((e) => e.type === g.Ih.PACK)
                };
            }, [d]);
        a.useLayoutEffect(() => {
            l(p >= x);
        }, [p]);
        let {
                renderCategoryListItem: T,
                rowHeight: S,
                onScroll: A
            } = G({
                activeIndex: c,
                stickerPickerCategories: d,
                categoryListRef: r,
                firstStandardStickerCategoryOffsetTop: h,
                setShouldRenderShortcut: l
            }),
            v = a.useCallback(
                (e) => {
                    var t;
                    e(E), null === (t = r.current) || void 0 === t || t.scrollTo(h);
                },
                [E, h]
            );
        return (0, i.jsx)(f.Z, {
            className: R.categoryList,
            categoryListRef: r,
            expressionsListRef: t,
            store: _.ZN,
            listPadding: P,
            onScroll: A,
            renderCategoryListItem: T,
            rowCount: d.length,
            categories: d,
            categoryHeight: S,
            children: (e) =>
                m &&
                o &&
                (0, i.jsx)(u.Clickable, {
                    className: s()(R.standardStickerShortcut, { [R.invisibleShortcut]: !o }),
                    onClick: () => v(e),
                    children: (0, i.jsx)(u.StickerIcon, {
                        size: 'md',
                        color: 'currentColor'
                    })
                })
        });
    };
t.Z = k;
