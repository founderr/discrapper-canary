var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(143927),
    s = n(442837),
    l = n(477690),
    u = n(481060),
    c = n(788911),
    d = n(2052),
    _ = n(100527),
    E = n(906732),
    f = n(218867),
    h = n(880949),
    p = n(806966),
    m = n(28546),
    I = n(691251),
    T = n(98528),
    g = n(551058),
    S = n(695346),
    A = n(430824),
    v = n(594174),
    N = n(626135),
    O = n(624138),
    R = n(191177),
    C = n(285651),
    y = n(268350),
    b = n(217590),
    L = n(926491),
    D = n(373228),
    M = n(378233),
    P = n(419922),
    U = n(1450),
    w = n(491173),
    x = n(515005),
    G = n(652136),
    k = n(981631),
    B = n(957825),
    F = n(689938),
    Z = n(221351),
    V = n(239840);
let H = (0, O.Mg)(l.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    Y = (0, O.Mg)(l.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    j = (0, O.Mg)(l.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    W = (0, O.Mg)(l.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    K = (0, O.Mg)(l.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    z = (0, O.Mg)(l.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    q = (0, O.Mg)(l.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    Q = (0, O.Mg)(l.Z.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    X = (0, O.Mg)(l.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    $ = (0, O.Mg)(l.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    J = (0, O.Mg)(l.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    ee = (0, O.Mg)(l.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
    et = (0, O.Mg)(l.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    en = $ + 2 * ee + et,
    er = J + 2 * ee + et,
    ei = 20,
    ea = [j, K, z, q],
    eo = [W, K, z, q],
    es = 12,
    el = (0, O.Mg)(l.Z.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    eu = ['laugh', 'wave', 'yes', 'dance', 'sad', 'no', 'hi', 'bye', 'cry', 'ok'],
    ec = (e) => {
        let { onSuggestionClick: t } = e;
        return (0, i.jsx)('div', {
            className: Z.searchSuggestions,
            children: eu.map((e) =>
                (0, i.jsx)(
                    u.Clickable,
                    {
                        className: Z.searchSuggestion,
                        onClick: () => t(e),
                        children: (0, i.jsx)(u.Text, {
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
    ed = (e) => {
        let { onSelectSticker: t, channel: n, currentUser: r } = e,
            i = (0, d.O)(),
            { analyticsLocations: o } = (0, E.ZP)(),
            s = (0, m.Iu)((e) => e.searchQuery),
            l = a.useCallback((e) => {
                let { visibleRowIndex: t, columnIndex: n, gridSectionIndex: r } = e;
                p.ZN.setActiveCategoryIndex(r), p.ZN.setInspectedExpressionPosition(n, t, I.u.MOUSE_EVENT), e.type === D.al.STICKER && p.ZN.setSearchPlaceholder(e.sticker.name);
            }, []);
        return {
            handleStickerInspect: l,
            handleSelect: a.useCallback(
                (e, a) => {
                    if (e.type !== D.al.STICKER) return;
                    let { packId: l, sticker: u } = e;
                    if (null == u) return;
                    let c = {
                        ...i.location,
                        object: '' === s ? k.qAy.STICKER_PICKER_VIEW_ALL : k.qAy.STICKER_SEARCH_VIEW_ALL
                    };
                    if (null != u && !(0, C.kl)(u, r, n)) {
                        let e = L.Z.getStickerPack(l);
                        null != e &&
                            (N.default.track(k.rMx.STICKER_PACK_VIEW_ALL, {
                                sticker_id: u.id,
                                sticker_pack_id: l,
                                location: c,
                                location_stack: o
                            }),
                            (0, G.Z)({
                                stickerPack: e,
                                analyticsLocations: o
                            }));
                        let t = (0, M.J8)(u),
                            i = (0, C.cO)(u, r, n);
                        i === C.eb.SENDABLE_WITH_PREMIUM && (0, R.f)(!0), t && C.eb.SENDABLE_WITH_BOOSTED_GUILD;
                        return;
                    }
                    if (a) {
                        (0, M.gM)(u.id)
                            ? (0, y.hW)(u.id)
                            : ((0, b.cQ)({
                                  sticker: u,
                                  location: {
                                      ...c,
                                      object: k.qAy.STICKER
                                  }
                              }),
                              (0, y.SA)(u.id));
                        return;
                    }
                    t(e);
                },
                [i.location, s, r, n, o, t]
            )
        };
    },
    e_ = (e) => {
        let { collapsedStickersCategories: t, gridWidth: n, onSelectSticker: r, getStickerItemProps: o, getStickerRowProps: l, gutterWidth: c, inspectedStickerPosition: _, isScrolling: E, isUsingKeyboardNavigation: f, stickersGrid: p, stickersCategories: m, filteredStickers: I, ownedStickerPacks: T, channel: O } = e,
            R = (0, d.O)(),
            C = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
            { handleStickerInspect: y, handleSelect: b } = ed({
                onSelectSticker: r,
                channel: O,
                currentUser: C
            }),
            [w, G] = a.useState(!1),
            V = a.useCallback((e) => {
                S._O.updateSetting(Array.from(e));
            }, []),
            j = a.useCallback(
                (e) => {
                    let t = p[e];
                    return null != t
                        ? (0, i.jsx)(
                              x.Z,
                              {
                                  getStickerItemProps: o,
                                  getStickerRowProps: l,
                                  gutterWidth: c,
                                  inspectedStickerPosition: _,
                                  isScrolling: E,
                                  isUsingKeyboardNavigation: f,
                                  onInspect: y,
                                  onSelect: b,
                                  rowIndex: e,
                                  stickerClassName: Z.sticker,
                                  stickerDescriptors: t,
                                  stickerSize: n > H ? $ : J,
                                  preferAnimation: n <= Y,
                                  ownedStickerPacks: T,
                                  isDisplayingIndividualStickers: !0,
                                  channel: O,
                                  currentUser: C
                              },
                              e
                          )
                        : null;
                },
                [p, o, l, c, _, E, f, y, b, n, T, O, C]
            ),
            W = a.useCallback((e, t) => (0, i.jsx)('div', { children: t }, e), []),
            K = a.useCallback(
                function (e) {
                    let { isStickerPack: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = new Set(t),
                        i = t.has(e);
                    i ? r.delete(e) : r.add(e),
                        N.default.track(k.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                            location: null == R ? void 0 : R.location,
                            tab: B.X1.STICKER,
                            collapsed: !i,
                            sticker_pack_id: n ? e : null
                        }),
                        V(r);
                },
                [R, t, V]
            ),
            z = a.useCallback(
                (e) => {
                    let n = m[e];
                    if (null != I) {
                        let { sendable: t, sendableWithPremium: n } = I;
                        if (0 === e && t.length > 0) return null;
                        let r = t.length > 0 && n.length > 0;
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                r
                                    ? (0, i.jsx)('div', {
                                          className: Z.divider,
                                          children: (0, i.jsx)(u.FormDivider, {})
                                      })
                                    : null,
                                (0, i.jsx)(
                                    g.Z,
                                    {
                                        className: Z.packHeader,
                                        'aria-label': F.Z.Messages.STICKERS_YOU_MIGHT_LIKE_A11Y,
                                        children: F.Z.Messages.STICKERS_YOU_MIGHT_LIKE
                                    },
                                    'stickers-you-might-like-header'
                                )
                            ]
                        });
                    }
                    switch (n.type) {
                        case D.Ih.FAVORITE:
                            return (0, i.jsx)(
                                g.Z,
                                {
                                    className: Z.packHeader,
                                    'aria-label': F.Z.Messages.STICKER_CATEGORY_A11Y_LABEL.format({ categoryName: n.name }),
                                    icon: (0, i.jsx)(u.StarIcon, {
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
                            return (0, i.jsx)(
                                g.Z,
                                {
                                    className: Z.packHeader,
                                    'aria-label': F.Z.Messages.STICKER_CATEGORY_A11Y_LABEL.format({ categoryName: n.name }),
                                    icon: (0, i.jsx)(u.ClockIcon, {
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
                            let e = A.Z.getGuild(n.id);
                            if (null == e) return null;
                            return (0, i.jsx)(
                                g.Z,
                                {
                                    className: Z.packHeader,
                                    'aria-label': F.Z.Messages.STICKER_CATEGORY_A11Y_LABEL.format({ categoryName: e.name }),
                                    icon: (0, i.jsx)(h.Z, {
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
                            let e = L.Z.getStickerPack(n.id);
                            if (null == e) return null;
                            return (0, i.jsx)(
                                g.Z,
                                {
                                    className: Z.packHeader,
                                    'aria-label': F.Z.Messages.STICKER_CATEGORY_A11Y_LABEL.format({ categoryName: e.name }),
                                    icon: (0, i.jsx)(P.ZP, {
                                        disableAnimation: !0,
                                        size: es,
                                        sticker: (0, M.Zt)(e)
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
                [t, m, K, I]
            ),
            q = a.useCallback(
                (e) => {
                    if (null != I) {
                        let { sendable: t, sendableWithPremium: n } = I;
                        return 0 === e && t.length > 0 ? 0 : X + (t.length > 0 && n.length > 0 ? Q : 0);
                    }
                    return X;
                },
                [I]
            ),
            ee = a.useCallback(
                (e) => {
                    let n = m[e],
                        r = t.has(n.id);
                    return n.type !== D.Ih.EMPTY_GUILD_UPSELL || null != I || r
                        ? null
                        : (0, i.jsx)(
                              U.Z,
                              {
                                  className: Z.emptyGuildUpsell,
                                  guildId: n.id,
                                  channel: O,
                                  shouldTrackUpsellViewed: !w,
                                  setTrackedUpsellViewed: G
                              },
                              'sticker-picker-empty-guild-inline-upsell-'.concat(n.id)
                          );
                },
                [m, t, I, O, w]
            );
        return {
            renderRow: j,
            renderSection: W,
            renderSectionHeader: z,
            sectionHeaderHeight: q,
            renderSectionFooter: ee,
            sectionFooterHeight: a.useCallback(
                (e) => {
                    let n = m[e],
                        r = t.has(n.id);
                    return n.type !== D.Ih.EMPTY_GUILD_UPSELL || r ? 0 : el;
                },
                [m, t]
            )
        };
    },
    eE = a.forwardRef(function (e, t) {
        let { collapsedStickersCategories: n, gridWidth: r, filteredStickers: l, getStickerItemProps: u, getStickerRowProps: d, gutterWidth: h, isUsingKeyboardNavigation: I, onSelectSticker: g, rowCount: S, rowCountBySection: A, stickersCategories: v, stickersGrid: N, channel: O } = e,
            R = a.useRef(!1),
            C = a.useRef(null),
            [y, b] = p.ZN.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], o.Z),
            { analyticsLocations: D } = (0, E.ZP)(_.Z.STICKER_PICKER),
            M = (0, m.Iu)((e) => e.searchQuery),
            P = (0, s.e7)([L.Z], () => L.Z.getPremiumPacks()),
            {
                renderRow: U,
                renderSection: x,
                renderSectionFooter: G,
                sectionFooterHeight: k,
                renderSectionHeader: B,
                sectionHeaderHeight: Y
            } = e_({
                collapsedStickersCategories: n,
                gridWidth: r,
                stickersCategories: v,
                stickersGrid: N,
                isScrolling: R,
                isUsingKeyboardNavigation: I,
                onSelectSticker: g,
                getStickerItemProps: u,
                getStickerRowProps: d,
                gutterWidth: h,
                inspectedStickerPosition: b,
                filteredStickers: l,
                ownedStickerPacks: a.useMemo(() => new Set(P.map((e) => e.id)), [P]),
                channel: O
            }),
            j = (0, T.Qs)({
                activeCategoryIndex: y,
                isScrolling: R,
                listRef: C,
                onActiveCategoryIndexChange: p.ZN.setActiveCategoryIndex,
                scrollOffset: ei,
                searchQuery: M
            });
        return (
            (0, T.Xs)({
                searchQuery: M,
                activeCategoryIndex: y,
                listRef: C
            }),
            a.useImperativeHandle(
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
            (0, i.jsx)(E.Gt, {
                value: D,
                children: (0, i.jsxs)('div', {
                    className: Z.wrapper,
                    children: [
                        null != l && 0 === l.sendable.length && 0 === l.sendableWithPremium.length
                            ? (0, i.jsx)(c.Z, {
                                  message: F.Z.Messages.NO_STICKER_SEARCH_RESULTS_WITH_SUGGESTIONS,
                                  className: Z.__invalid_noSearchResultsContainer,
                                  noResultsImageURL: V,
                                  suggestions: (0, i.jsx)(ec, { onSuggestionClick: (e) => (0, m.ql)(e, !0) })
                              })
                            : (0, i.jsx)(f.Z, {
                                  role: 'none presentation',
                                  listPadding: null != l ? eo : ea,
                                  onScroll: j,
                                  renderRow: U,
                                  renderSection: null == l ? x : void 0,
                                  renderSectionHeader: B,
                                  renderSectionFooter: G,
                                  rowCount: S,
                                  rowCountBySection: A,
                                  rowHeight: r > H ? en : er,
                                  sectionHeaderHeight: Y,
                                  sectionFooterHeight: k,
                                  stickyHeaders: !0,
                                  ref: C
                              }),
                        (0, i.jsx)(w.Z, { stickersGrid: N })
                    ]
                })
            })
        );
    });
t.Z = eE;
