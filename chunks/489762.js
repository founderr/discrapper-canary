n(47120);
var r = n(200651),
    i = n(192379),
    a = n(782690),
    s = n(442837),
    o = n(477690),
    l = n(481060),
    u = n(788911),
    c = n(2052),
    d = n(100527),
    f = n(906732),
    _ = n(218867),
    h = n(880949),
    p = n(806966),
    m = n(28546),
    g = n(691251),
    E = n(98528),
    v = n(551058),
    I = n(695346),
    S = n(430824),
    T = n(594174),
    b = n(626135),
    y = n(624138),
    A = n(45521),
    N = n(285651),
    C = n(268350),
    R = n(217590),
    O = n(926491),
    D = n(373228),
    L = n(378233),
    x = n(419922),
    w = n(1450),
    M = n(491173),
    P = n(515005),
    k = n(652136),
    U = n(981631),
    G = n(957825),
    B = n(388032),
    Z = n(221351),
    F = n(239840);
let V = (0, y.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    j = (0, y.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    H = (0, y.Mg)(o.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    Y = (0, y.Mg)(o.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    W = (0, y.Mg)(o.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    K = (0, y.Mg)(o.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    z = (0, y.Mg)(o.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    q = (0, y.Mg)(o.Z.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    Q = (0, y.Mg)(o.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    X = (0, y.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    J = (0, y.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    $ = (0, y.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
    ee = (0, y.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    et = X + 2 * $ + ee,
    en = J + 2 * $ + ee,
    er = [H, W, K, z],
    ei = [Y, W, K, z],
    ea = (0, y.Mg)(o.Z.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    es = ['laugh', 'wave', 'yes', 'dance', 'sad', 'no', 'hi', 'bye', 'cry', 'ok'],
    eo = (e) => {
        let { onSuggestionClick: t } = e;
        return (0, r.jsx)('div', {
            className: Z.searchSuggestions,
            children: es.map((e) =>
                (0, r.jsx)(
                    l.Clickable,
                    {
                        className: Z.searchSuggestion,
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
            { analyticsLocations: s } = (0, f.ZP)(),
            o = (0, m.Iu)((e) => e.searchQuery),
            l = i.useCallback((e) => {
                let { visibleRowIndex: t, columnIndex: n, gridSectionIndex: r } = e;
                p.ZN.setActiveCategoryIndex(r), p.ZN.setInspectedExpressionPosition(n, t, g.u.MOUSE_EVENT), e.type === D.al.STICKER && p.ZN.setSearchPlaceholder(e.sticker.name);
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
                        object: '' === o ? U.qAy.STICKER_PICKER_VIEW_ALL : U.qAy.STICKER_SEARCH_VIEW_ALL
                    };
                    if (null != u && !(0, N.kl)(u, r, n)) {
                        let e = O.Z.getStickerPack(l);
                        null != e &&
                            (b.default.track(U.rMx.STICKER_PACK_VIEW_ALL, {
                                sticker_id: u.id,
                                sticker_pack_id: l,
                                location: c,
                                location_stack: s
                            }),
                            (0, k.Z)({
                                stickerPack: e,
                                analyticsLocations: s
                            }));
                        let t = (0, L.J8)(u),
                            i = (0, N.cO)(u, r, n);
                        i === N.eb.SENDABLE_WITH_PREMIUM && (0, A.f)(!0), t && N.eb.SENDABLE_WITH_BOOSTED_GUILD;
                        return;
                    }
                    if (i) {
                        (0, L.gM)(u.id)
                            ? (0, C.hW)(u.id)
                            : ((0, R.cQ)({
                                  sticker: u,
                                  location: {
                                      ...c,
                                      object: U.qAy.STICKER
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
        let { collapsedStickersCategories: t, gridWidth: n, onSelectSticker: a, getStickerItemProps: o, getStickerRowProps: u, gutterWidth: d, inspectedStickerPosition: f, isScrolling: _, isUsingKeyboardNavigation: p, stickersGrid: m, stickersCategories: g, filteredStickers: E, ownedStickerPacks: y, channel: A } = e,
            N = (0, c.O)(),
            C = (0, s.e7)([T.default], () => T.default.getCurrentUser()),
            { handleStickerInspect: R, handleSelect: M } = el({
                onSelectSticker: a,
                channel: A,
                currentUser: C
            }),
            [k, F] = i.useState(!1),
            H = i.useCallback((e) => {
                I._O.updateSetting(Array.from(e));
            }, []),
            Y = i.useCallback(
                (e) => {
                    let t = m[e];
                    return null != t
                        ? (0, r.jsx)(
                              P.Z,
                              {
                                  getStickerItemProps: o,
                                  getStickerRowProps: u,
                                  gutterWidth: d,
                                  inspectedStickerPosition: f,
                                  isScrolling: _,
                                  isUsingKeyboardNavigation: p,
                                  onInspect: R,
                                  onSelect: M,
                                  rowIndex: e,
                                  stickerClassName: Z.sticker,
                                  stickerDescriptors: t,
                                  stickerSize: n > V ? X : J,
                                  preferAnimation: n <= j,
                                  ownedStickerPacks: y,
                                  isDisplayingIndividualStickers: !0,
                                  channel: A,
                                  currentUser: C
                              },
                              e
                          )
                        : null;
                },
                [m, o, u, d, f, _, p, R, M, n, y, A, C]
            ),
            W = i.useCallback((e, t) => (0, r.jsx)('div', { children: t }, e), []),
            K = i.useCallback(
                function (e) {
                    let { isStickerPack: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = new Set(t),
                        i = t.has(e);
                    i ? r.delete(e) : r.add(e),
                        b.default.track(U.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                            location: null == N ? void 0 : N.location,
                            tab: G.X1.STICKER,
                            collapsed: !i,
                            sticker_pack_id: n ? e : null
                        }),
                        H(r);
                },
                [N, t, H]
            ),
            z = i.useCallback(
                (e) => {
                    let n = g[e];
                    if (null != E) {
                        let { sendable: t, sendableWithPremium: n } = E;
                        if (0 === e && t.length > 0) return null;
                        let i = t.length > 0 && n.length > 0;
                        return (0, r.jsxs)(r.Fragment, {
                            children: [
                                i
                                    ? (0, r.jsx)('div', {
                                          className: Z.divider,
                                          children: (0, r.jsx)(l.FormDivider, {})
                                      })
                                    : null,
                                (0, r.jsx)(
                                    v.Z,
                                    {
                                        className: Z.packHeader,
                                        'aria-label': B.intl.string(B.t.wbfJFh),
                                        children: B.intl.string(B.t['05Z/0t'])
                                    },
                                    'stickers-you-might-like-header'
                                )
                            ]
                        });
                    }
                    switch (n.type) {
                        case D.Ih.FAVORITE:
                            return (0, r.jsx)(
                                v.Z,
                                {
                                    className: Z.packHeader,
                                    'aria-label': B.intl.formatToPlainString(B.t['7lLCjY'], { categoryName: n.name }),
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
                                v.Z,
                                {
                                    className: Z.packHeader,
                                    'aria-label': B.intl.formatToPlainString(B.t['7lLCjY'], { categoryName: n.name }),
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
                            let e = S.Z.getGuild(n.id);
                            if (null == e) return null;
                            return (0, r.jsx)(
                                v.Z,
                                {
                                    className: Z.packHeader,
                                    'aria-label': B.intl.formatToPlainString(B.t['7lLCjY'], { categoryName: e.name }),
                                    icon: (0, r.jsx)(h.Z, {
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
                            let e = O.Z.getStickerPack(n.id);
                            if (null == e) return null;
                            return (0, r.jsx)(
                                v.Z,
                                {
                                    className: Z.packHeader,
                                    'aria-label': B.intl.formatToPlainString(B.t['7lLCjY'], { categoryName: e.name }),
                                    icon: (0, r.jsx)(x.ZP, {
                                        disableAnimation: !0,
                                        size: 12,
                                        sticker: (0, L.Zt)(e)
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
                [t, g, K, E]
            ),
            $ = i.useCallback(
                (e) => {
                    if (null != E) {
                        let { sendable: t, sendableWithPremium: n } = E;
                        return 0 === e && t.length > 0 ? 0 : Q + (t.length > 0 && n.length > 0 ? q : 0);
                    }
                    return Q;
                },
                [E]
            ),
            ee = i.useCallback(
                (e) => {
                    let n = g[e],
                        i = t.has(n.id);
                    return n.type !== D.Ih.EMPTY_GUILD_UPSELL || null != E || i
                        ? null
                        : (0, r.jsx)(
                              w.Z,
                              {
                                  className: Z.emptyGuildUpsell,
                                  guildId: n.id,
                                  channel: A,
                                  shouldTrackUpsellViewed: !k,
                                  setTrackedUpsellViewed: F
                              },
                              'sticker-picker-empty-guild-inline-upsell-'.concat(n.id)
                          );
                },
                [g, t, E, A, k]
            );
        return {
            renderRow: Y,
            renderSection: W,
            renderSectionHeader: z,
            sectionHeaderHeight: $,
            renderSectionFooter: ee,
            sectionFooterHeight: i.useCallback(
                (e) => {
                    let n = g[e],
                        r = t.has(n.id);
                    return n.type !== D.Ih.EMPTY_GUILD_UPSELL || r ? 0 : ea;
                },
                [g, t]
            )
        };
    },
    ec = i.forwardRef(function (e, t) {
        let { collapsedStickersCategories: n, gridWidth: o, filteredStickers: l, getStickerItemProps: c, getStickerRowProps: h, gutterWidth: g, isUsingKeyboardNavigation: v, onSelectSticker: I, rowCount: S, rowCountBySection: T, stickersCategories: b, stickersGrid: y, channel: A } = e,
            N = i.useRef(!1),
            C = i.useRef(null),
            [R, D] = p.ZN.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], a.Z),
            { analyticsLocations: L } = (0, f.ZP)(d.Z.STICKER_PICKER),
            x = (0, m.Iu)((e) => e.searchQuery),
            w = (0, s.e7)([O.Z], () => O.Z.getPremiumPacks()),
            {
                renderRow: P,
                renderSection: k,
                renderSectionFooter: U,
                sectionFooterHeight: G,
                renderSectionHeader: j,
                sectionHeaderHeight: H
            } = eu({
                collapsedStickersCategories: n,
                gridWidth: o,
                stickersCategories: b,
                stickersGrid: y,
                isScrolling: N,
                isUsingKeyboardNavigation: v,
                onSelectSticker: I,
                getStickerItemProps: c,
                getStickerRowProps: h,
                gutterWidth: g,
                inspectedStickerPosition: D,
                filteredStickers: l,
                ownedStickerPacks: i.useMemo(() => new Set(w.map((e) => e.id)), [w]),
                channel: A
            }),
            Y = (0, E.Qs)({
                activeCategoryIndex: R,
                isScrolling: N,
                listRef: C,
                onActiveCategoryIndexChange: p.ZN.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: x
            });
        return (
            (0, E.Xs)({
                searchQuery: x,
                activeCategoryIndex: R,
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
            (0, r.jsx)(f.Gt, {
                value: L,
                children: (0, r.jsxs)('div', {
                    className: Z.wrapper,
                    children: [
                        null != l && 0 === l.sendable.length && 0 === l.sendableWithPremium.length
                            ? (0, r.jsx)(u.Z, {
                                  message: B.intl.string(B.t['zc+LQU']),
                                  className: Z.__invalid_noSearchResultsContainer,
                                  noResultsImageURL: F,
                                  suggestions: (0, r.jsx)(eo, { onSuggestionClick: (e) => (0, m.ql)(e, !0) })
                              })
                            : (0, r.jsx)(_.Z, {
                                  role: 'none presentation',
                                  listPadding: null != l ? ei : er,
                                  onScroll: Y,
                                  renderRow: P,
                                  renderSection: null == l ? k : void 0,
                                  renderSectionHeader: j,
                                  renderSectionFooter: U,
                                  rowCount: S,
                                  rowCountBySection: T,
                                  rowHeight: o > V ? et : en,
                                  sectionHeaderHeight: H,
                                  sectionFooterHeight: G,
                                  stickyHeaders: !0,
                                  ref: C
                              }),
                        (0, r.jsx)(M.Z, { stickersGrid: y })
                    ]
                })
            })
        );
    });
t.Z = ec;
