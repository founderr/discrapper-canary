n(47120);
var r = n(735250),
    i = n(470079),
    a = n(143927),
    s = n(442837),
    o = n(477690),
    l = n(481060),
    u = n(788911),
    c = n(2052),
    d = n(100527),
    _ = n(906732),
    E = n(218867),
    f = n(880949),
    h = n(806966),
    p = n(28546),
    I = n(691251),
    m = n(98528),
    T = n(551058),
    S = n(695346),
    g = n(430824),
    A = n(594174),
    N = n(626135),
    O = n(624138),
    R = n(191177),
    v = n(285651),
    C = n(268350),
    L = n(217590),
    y = n(926491),
    D = n(373228),
    b = n(378233),
    M = n(419922),
    P = n(1450),
    U = n(491173),
    w = n(515005),
    x = n(652136),
    G = n(981631),
    k = n(957825),
    B = n(689938),
    F = n(221351),
    V = n(239840);
let H = (0, O.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    Z = (0, O.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    Y = (0, O.Mg)(o.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    j = (0, O.Mg)(o.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    W = (0, O.Mg)(o.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    K = (0, O.Mg)(o.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    z = (0, O.Mg)(o.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    q = (0, O.Mg)(o.Z.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    Q = (0, O.Mg)(o.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    X = (0, O.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    $ = (0, O.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    J = (0, O.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
    ee = (0, O.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    et = X + 2 * J + ee,
    en = $ + 2 * J + ee,
    er = [Y, W, K, z],
    ei = [j, W, K, z],
    ea = (0, O.Mg)(o.Z.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    es = ['laugh', 'wave', 'yes', 'dance', 'sad', 'no', 'hi', 'bye', 'cry', 'ok'],
    eo = (e) => {
        let { onSuggestionClick: t } = e;
        return (0, r.jsx)('div', {
            className: F.searchSuggestions,
            children: es.map((e) =>
                (0, r.jsx)(
                    l.Clickable,
                    {
                        className: F.searchSuggestion,
                        onClick: () => t(e),
                        children: (0, r.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-normal',
                            children: e
                        })
                    },
                    e
                )
            )
        });
    },
    el = (e) => {
        let { onSelectSticker: t, channel: n, currentUser: r } = e,
            a = (0, c.O)(),
            { analyticsLocations: s } = (0, _.ZP)(),
            o = (0, p.Iu)((e) => e.searchQuery),
            l = i.useCallback((e) => {
                let { visibleRowIndex: t, columnIndex: n, gridSectionIndex: r } = e;
                h.ZN.setActiveCategoryIndex(r), h.ZN.setInspectedExpressionPosition(n, t, I.u.MOUSE_EVENT), e.type === D.al.STICKER && h.ZN.setSearchPlaceholder(e.sticker.name);
            }, []);
        return {
            handleStickerInspect: l,
            handleSelect: i.useCallback(
                (e, i) => {
                    if (e.type !== D.al.STICKER) return;
                    let { packId: l, sticker: u } = e;
                    if (null == u) return;
                    let c = {
                        ...a.location,
                        object: '' === o ? G.qAy.STICKER_PICKER_VIEW_ALL : G.qAy.STICKER_SEARCH_VIEW_ALL
                    };
                    if (null != u && !(0, v.kl)(u, r, n)) {
                        let e = y.Z.getStickerPack(l);
                        null != e &&
                            (N.default.track(G.rMx.STICKER_PACK_VIEW_ALL, {
                                sticker_id: u.id,
                                sticker_pack_id: l,
                                location: c,
                                location_stack: s
                            }),
                            (0, x.Z)({
                                stickerPack: e,
                                analyticsLocations: s
                            }));
                        let t = (0, b.J8)(u),
                            i = (0, v.cO)(u, r, n);
                        i === v.eb.SENDABLE_WITH_PREMIUM && (0, R.f)(!0), t && v.eb.SENDABLE_WITH_BOOSTED_GUILD;
                        return;
                    }
                    if (i) {
                        (0, b.gM)(u.id)
                            ? (0, C.hW)(u.id)
                            : ((0, L.cQ)({
                                  sticker: u,
                                  location: {
                                      ...c,
                                      object: G.qAy.STICKER
                                  }
                              }),
                              (0, C.SA)(u.id));
                        return;
                    }
                    t(e);
                },
                [a.location, o, r, n, s, t]
            )
        };
    },
    eu = (e) => {
        let { collapsedStickersCategories: t, gridWidth: n, onSelectSticker: a, getStickerItemProps: o, getStickerRowProps: u, gutterWidth: d, inspectedStickerPosition: _, isScrolling: E, isUsingKeyboardNavigation: h, stickersGrid: p, stickersCategories: I, filteredStickers: m, ownedStickerPacks: O, channel: R } = e,
            v = (0, c.O)(),
            C = (0, s.e7)([A.default], () => A.default.getCurrentUser()),
            { handleStickerInspect: L, handleSelect: U } = el({
                onSelectSticker: a,
                channel: R,
                currentUser: C
            }),
            [x, V] = i.useState(!1),
            Y = i.useCallback((e) => {
                S._O.updateSetting(Array.from(e));
            }, []),
            j = i.useCallback(
                (e) => {
                    let t = p[e];
                    return null != t
                        ? (0, r.jsx)(
                              w.Z,
                              {
                                  getStickerItemProps: o,
                                  getStickerRowProps: u,
                                  gutterWidth: d,
                                  inspectedStickerPosition: _,
                                  isScrolling: E,
                                  isUsingKeyboardNavigation: h,
                                  onInspect: L,
                                  onSelect: U,
                                  rowIndex: e,
                                  stickerClassName: F.sticker,
                                  stickerDescriptors: t,
                                  stickerSize: n > H ? X : $,
                                  preferAnimation: n <= Z,
                                  ownedStickerPacks: O,
                                  isDisplayingIndividualStickers: !0,
                                  channel: R,
                                  currentUser: C
                              },
                              e
                          )
                        : null;
                },
                [p, o, u, d, _, E, h, L, U, n, O, R, C]
            ),
            W = i.useCallback((e, t) => (0, r.jsx)('div', { children: t }, e), []),
            K = i.useCallback(
                function (e) {
                    let { isStickerPack: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = new Set(t),
                        i = t.has(e);
                    i ? r.delete(e) : r.add(e),
                        N.default.track(G.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                            location: null == v ? void 0 : v.location,
                            tab: k.X1.STICKER,
                            collapsed: !i,
                            sticker_pack_id: n ? e : null
                        }),
                        Y(r);
                },
                [v, t, Y]
            ),
            z = i.useCallback(
                (e) => {
                    let n = I[e];
                    if (null != m) {
                        let { sendable: t, sendableWithPremium: n } = m;
                        if (0 === e && t.length > 0) return null;
                        let i = t.length > 0 && n.length > 0;
                        return (0, r.jsxs)(r.Fragment, {
                            children: [
                                i
                                    ? (0, r.jsx)('div', {
                                          className: F.divider,
                                          children: (0, r.jsx)(l.FormDivider, {})
                                      })
                                    : null,
                                (0, r.jsx)(
                                    T.Z,
                                    {
                                        className: F.packHeader,
                                        'aria-label': B.Z.Messages.STICKERS_YOU_MIGHT_LIKE_A11Y,
                                        children: B.Z.Messages.STICKERS_YOU_MIGHT_LIKE
                                    },
                                    'stickers-you-might-like-header'
                                )
                            ]
                        });
                    }
                    switch (n.type) {
                        case D.Ih.FAVORITE:
                            return (0, r.jsx)(
                                T.Z,
                                {
                                    className: F.packHeader,
                                    'aria-label': B.Z.Messages.STICKER_CATEGORY_A11Y_LABEL.format({ categoryName: n.name }),
                                    icon: (0, r.jsx)(l.StarIcon, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                    isCollapsed: t.has(n.id),
                                    onClick: () => K(n.id, { isStickerPack: !1 }),
                                    children: n.name
                                },
                                'header-'.concat(n.id)
                            );
                        case D.Ih.RECENT:
                            return (0, r.jsx)(
                                T.Z,
                                {
                                    className: F.packHeader,
                                    'aria-label': B.Z.Messages.STICKER_CATEGORY_A11Y_LABEL.format({ categoryName: n.name }),
                                    icon: (0, r.jsx)(l.ClockIcon, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                    isCollapsed: t.has(n.id),
                                    onClick: () => K(n.id, { isStickerPack: !1 }),
                                    children: n.name
                                },
                                'header-'.concat(n.id)
                            );
                        case D.Ih.GUILD:
                        case D.Ih.EMPTY_GUILD_UPSELL: {
                            let e = g.Z.getGuild(n.id);
                            if (null == e) return null;
                            return (0, r.jsx)(
                                T.Z,
                                {
                                    className: F.packHeader,
                                    'aria-label': B.Z.Messages.STICKER_CATEGORY_A11Y_LABEL.format({ categoryName: e.name }),
                                    icon: (0, r.jsx)(f.Z, {
                                        guild: e,
                                        height: 16,
                                        width: 16
                                    }),
                                    isCollapsed: t.has(e.id),
                                    onClick: () => K(e.id),
                                    children: e.name
                                },
                                'h'.concat(e.id)
                            );
                        }
                        case D.Ih.PACK: {
                            let e = y.Z.getStickerPack(n.id);
                            if (null == e) return null;
                            return (0, r.jsx)(
                                T.Z,
                                {
                                    className: F.packHeader,
                                    'aria-label': B.Z.Messages.STICKER_CATEGORY_A11Y_LABEL.format({ categoryName: e.name }),
                                    icon: (0, r.jsx)(M.ZP, {
                                        disableAnimation: !0,
                                        size: 12,
                                        sticker: (0, b.Zt)(e)
                                    }),
                                    isCollapsed: t.has(e.id),
                                    onClick: () => K(e.id),
                                    children: e.name
                                },
                                'h'.concat(e.id)
                            );
                        }
                    }
                },
                [t, I, K, m]
            ),
            J = i.useCallback(
                (e) => {
                    if (null != m) {
                        let { sendable: t, sendableWithPremium: n } = m;
                        return 0 === e && t.length > 0 ? 0 : Q + (t.length > 0 && n.length > 0 ? q : 0);
                    }
                    return Q;
                },
                [m]
            ),
            ee = i.useCallback(
                (e) => {
                    let n = I[e],
                        i = t.has(n.id);
                    return n.type !== D.Ih.EMPTY_GUILD_UPSELL || null != m || i
                        ? null
                        : (0, r.jsx)(
                              P.Z,
                              {
                                  className: F.emptyGuildUpsell,
                                  guildId: n.id,
                                  channel: R,
                                  shouldTrackUpsellViewed: !x,
                                  setTrackedUpsellViewed: V
                              },
                              'sticker-picker-empty-guild-inline-upsell-'.concat(n.id)
                          );
                },
                [I, t, m, R, x]
            );
        return {
            renderRow: j,
            renderSection: W,
            renderSectionHeader: z,
            sectionHeaderHeight: J,
            renderSectionFooter: ee,
            sectionFooterHeight: i.useCallback(
                (e) => {
                    let n = I[e],
                        r = t.has(n.id);
                    return n.type !== D.Ih.EMPTY_GUILD_UPSELL || r ? 0 : ea;
                },
                [I, t]
            )
        };
    },
    ec = i.forwardRef(function (e, t) {
        let { collapsedStickersCategories: n, gridWidth: o, filteredStickers: l, getStickerItemProps: c, getStickerRowProps: f, gutterWidth: I, isUsingKeyboardNavigation: T, onSelectSticker: S, rowCount: g, rowCountBySection: A, stickersCategories: N, stickersGrid: O, channel: R } = e,
            v = i.useRef(!1),
            C = i.useRef(null),
            [L, D] = h.ZN.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], a.Z),
            { analyticsLocations: b } = (0, _.ZP)(d.Z.STICKER_PICKER),
            M = (0, p.Iu)((e) => e.searchQuery),
            P = (0, s.e7)([y.Z], () => y.Z.getPremiumPacks()),
            {
                renderRow: w,
                renderSection: x,
                renderSectionFooter: G,
                sectionFooterHeight: k,
                renderSectionHeader: Z,
                sectionHeaderHeight: Y
            } = eu({
                collapsedStickersCategories: n,
                gridWidth: o,
                stickersCategories: N,
                stickersGrid: O,
                isScrolling: v,
                isUsingKeyboardNavigation: T,
                onSelectSticker: S,
                getStickerItemProps: c,
                getStickerRowProps: f,
                gutterWidth: I,
                inspectedStickerPosition: D,
                filteredStickers: l,
                ownedStickerPacks: i.useMemo(() => new Set(P.map((e) => e.id)), [P]),
                channel: R
            }),
            j = (0, m.Qs)({
                activeCategoryIndex: L,
                isScrolling: v,
                listRef: C,
                onActiveCategoryIndexChange: h.ZN.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: M
            });
        return (
            (0, m.Xs)({
                searchQuery: M,
                activeCategoryIndex: L,
                listRef: C
            }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollTo: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null === (e = C.current) || void 0 === e ? void 0 : e.scrollTo(...n);
                    },
                    getRowDescriptors: () => {
                        var e, t;
                        return null !== (t = null === (e = C.current) || void 0 === e ? void 0 : e.getRowDescriptors()) && void 0 !== t ? t : [];
                    },
                    getSectionDescriptors: () => {
                        var e, t;
                        return null !== (t = null === (e = C.current) || void 0 === e ? void 0 : e.getSectionDescriptors()) && void 0 !== t ? t : [];
                    },
                    scrollToSectionTop: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null === (e = C.current) || void 0 === e ? void 0 : e.scrollToSectionTop(...n);
                    },
                    scrollRowIntoView: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null === (e = C.current) || void 0 === e ? void 0 : e.scrollRowIntoView(...n);
                    },
                    getScrollerNode: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null === (e = C.current) || void 0 === e ? void 0 : e.getScrollerNode(...n);
                    },
                    scrollIntoViewNode: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null === (e = C.current) || void 0 === e ? void 0 : e.scrollIntoViewNode(...n);
                    },
                    getListDimensions: function () {
                        for (var e, t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return null !== (t = null === (e = C.current) || void 0 === e ? void 0 : e.getListDimensions(...r)) && void 0 !== t
                            ? t
                            : {
                                  height: -1,
                                  totalHeight: -1
                              };
                    }
                }),
                []
            ),
            (0, r.jsx)(_.Gt, {
                value: b,
                children: (0, r.jsxs)('div', {
                    className: F.wrapper,
                    children: [
                        null != l && 0 === l.sendable.length && 0 === l.sendableWithPremium.length
                            ? (0, r.jsx)(u.Z, {
                                  message: B.Z.Messages.NO_STICKER_SEARCH_RESULTS_WITH_SUGGESTIONS,
                                  className: F.__invalid_noSearchResultsContainer,
                                  noResultsImageURL: V,
                                  suggestions: (0, r.jsx)(eo, { onSuggestionClick: (e) => (0, p.ql)(e, !0) })
                              })
                            : (0, r.jsx)(E.Z, {
                                  role: 'none presentation',
                                  listPadding: null != l ? ei : er,
                                  onScroll: j,
                                  renderRow: w,
                                  renderSection: null == l ? x : void 0,
                                  renderSectionHeader: Z,
                                  renderSectionFooter: G,
                                  rowCount: g,
                                  rowCountBySection: A,
                                  rowHeight: o > H ? et : en,
                                  sectionHeaderHeight: Y,
                                  sectionFooterHeight: k,
                                  stickyHeaders: !0,
                                  ref: C
                              }),
                        (0, r.jsx)(U.Z, { stickersGrid: O })
                    ]
                })
            })
        );
    });
t.Z = ec;
