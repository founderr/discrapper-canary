var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(392711),
    c = r.n(u),
    d = r(873546),
    f = r(442837),
    _ = r(336317),
    h = r(477690),
    p = r(788911),
    m = r(2052),
    g = r(906732),
    E = r(218867),
    v = r(806966),
    I = r(28546),
    T = r(691251),
    b = r(98528),
    y = r(551058),
    S = r(536442),
    A = r(140465),
    N = r(775412),
    C = r(48125),
    R = r(104494),
    O = r(639119),
    D = r(53691),
    L = r(75145),
    x = r(631771),
    w = r(695346),
    P = r(594174),
    M = r(626135),
    k = r(111361),
    U = r(74538),
    B = r(624138),
    G = r(543241),
    Z = r(883661),
    F = r(880949),
    V = r(784222),
    j = r(172800),
    H = r(149203),
    Y = r(981631),
    W = r(957825),
    K = r(474936),
    z = r(388032),
    q = r(332706);
let Q = 0,
    X = 0,
    J = (0, B.Mg)(h.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    $ = (0, B.Mg)(h.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    ee = (0, B.Mg)(h.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    et = (0, B.Mg)(h.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    en = (0, B.Mg)(h.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    er = (0, B.Mg)(h.Z.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    ei = 16,
    ea = (0, B.Mg)(h.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    es = 41,
    eo = 33,
    el = (e) => e + 2 * ea,
    eu = (e) => {
        let { collapsedSections: n, diversitySurrogate: r, emojiGrid: i, emojiSize: o, onEmojiSelect: u, searchQuery: d, sectionDescriptors: h, setCollapsedSections: p, getEmojiItemProps: g, getEmojiRowProps: E, isScrolling: I, isUsingKeyboardNavigation: b, allowAnimatedEmoji: N, channelGuildId: C, messageId: R, isBurstReaction: O, listHeaderClassName: D, activeSectionIndex: x, upsellGlowOpacity: w, emojiListRef: P } = e,
            k = (0, m.O)(),
            U = s.useRef(Y.xAR),
            B = s.useMemo(() => ('' !== r ? _.Z.convert.toCodePoint(r) : ''), [r]),
            K = s.useCallback(
                (e) => {
                    let n = h[e],
                        r = h[e + 1];
                    return e >= h.length - 1 ? n.isNitroLocked : n.isNitroLocked && !r.isNitroLocked;
                },
                [h]
            ),
            z = s.useCallback(
                (e) => {
                    if (e >= h.length - 1) return !1;
                    let n = h[e],
                        r = h[e + 1];
                    return !n.isNitroLocked && r.isNitroLocked;
                },
                [h]
            ),
            Q = s.useCallback(
                function (e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = new Set(n),
                        a = n.has(e);
                    a ? i.delete(e) : i.add(e),
                        null != r &&
                            M.default.track(Y.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: k.location,
                                tab: W.X1.EMOJI,
                                collapsed: !a,
                                guild_id: r.id
                            }),
                        p(i);
                },
                [k, n, p]
            ),
            ea = s.useCallback((e) => {
                let { columnIndex: n, visibleRowIndex: r } = e,
                    i = e.type === V.ld.EMOJI ? e.emoji.allNamesString : e.name;
                U.current !== Y.xAR && window.cancelAnimationFrame(U.current),
                    (U.current = window.requestAnimationFrame(() => {
                        v.kJ.setInspectedExpressionPosition(n, r, T.u.MOUSE_EVENT), v.kJ.setSearchPlaceholder(i), (U.current = Y.xAR);
                    }));
            }, []),
            el = (0, f.e7)([S.qc], () => S.qc.hasHotspot(S.v6.FAVORITE_EMOJI_TOOLTIP), []),
            eu = s.useMemo(
                () =>
                    c().memoize((e, n) => {
                        let r = i[e],
                            s = h[n.sectionIndex],
                            l = () => {
                                var e;
                                null === (e = P.current) || void 0 === e || e.scrollToSectionTop(n.sectionIndex, { animate: !0 });
                            };
                        return (0, a.jsx)(
                            j.Z,
                            {
                                emojiDescriptors: r,
                                emojiSize: o,
                                surrogateCodePoint: B,
                                onInspect: ea,
                                onSelect: u,
                                getEmojiItemProps: g,
                                getEmojiRowProps: E,
                                isScrolling: I,
                                isUsingKeyboardNavigation: b,
                                rowIndex: e,
                                allowAnimatedEmoji: N,
                                showEmojiFavoriteTooltip: el,
                                channelGuildId: C,
                                category: s.sectionId,
                                selectedItemClassName: q.__invalid_selectedItem,
                                messageId: R,
                                isBurstReaction: O,
                                inNitroLockedSection: s.isNitroLocked,
                                handleScrollUpOnSectionCollapse: l
                            },
                            e
                        );
                    }),
                [i, h, o, B, ea, u, g, E, I, b, N, el, C, R, O, P]
            );
        s.useEffect(
            () => () => {
                var e, n;
                return null === (n = eu.cache) || void 0 === n ? void 0 : null === (e = n.clear) || void 0 === e ? void 0 : e.call(n);
            },
            [eu]
        );
        let ec = s.useMemo(
                () =>
                    c().memoize((e) => {
                        let r = h[e];
                        if (null == r) return;
                        let { guild: i, categoryId: s, type: o, sectionId: u } = r;
                        if (o === H.En.SEARCH_RESULTS) return;
                        let c =
                                o === H.En.GUILD
                                    ? null != i
                                        ? (0, a.jsx)(F.Z, {
                                              guild: i,
                                              height: ei,
                                              width: ei
                                          })
                                        : null
                                    : null != s
                                      ? (0, a.jsx)(Z.Z, {
                                            categoryId: s,
                                            height: ei,
                                            width: ei,
                                            size: 'custom'
                                        })
                                      : null,
                            d = null == i ? void 0 : i.toString();
                        null != s && (d = (0, G.Y1)(s, null == i ? void 0 : i.toString()));
                        let f = x === e,
                            _ = r.isNitroLocked,
                            p = _ && !f,
                            m = _ && f;
                        return (0, a.jsx)(
                            y.Z,
                            {
                                className: l()(q.header, D, {
                                    [q.inactiveNitroHeader]: p,
                                    [q.activeNitroHeader]: m
                                }),
                                icon: c,
                                isCollapsed: n.has(u),
                                onClick: () => Q(u, i),
                                children: d
                            },
                            u
                        );
                    }),
                [h, n, Q, D, x]
            ),
            ed = (0, A.B4)({ location: 'EmojiPickerList-useListRenderers' }),
            ef = s.useCallback(
                (e, r) => {
                    let i = h[e],
                        s = z(e),
                        o = K(e);
                    return (0, a.jsx)(
                        'div',
                        {
                            className: l()(q.categorySection, {
                                [q.categorySectionLast]: e === h.length - 1,
                                [q.categorySectionCollapsed]: n.has(i.sectionId),
                                [q.categorySectionNitroLocked]: i.isNitroLocked,
                                [q.categorySectionNitroDivider]: s || o
                            }),
                            children: r
                        },
                        e
                    );
                },
                [n, h, z, K]
            ),
            e_ = s.useCallback(
                (e) => {
                    if (z(e)) return ed ? (0, a.jsx)(L.fi, {}) : (0, a.jsx)(L.ZP, { glowOpacity: w });
                    return K(e) ? (0, a.jsx)('div', { className: q.nitroBottomDivider }) : null;
                },
                [w, z, K, ed]
            ),
            eh = s.useCallback((e) => (z(e) ? es : K(e) ? eo : 0), [z, K]),
            ep = s.useCallback(
                (e) => {
                    var r;
                    return e === h.length - 1 || n.has(null === (r = h[e]) || void 0 === r ? void 0 : r.sectionId) || z(e) || K(e) ? 0 : er;
                },
                [n, h, z, K]
            ),
            em = s.useMemo(() => ['' !== d ? et : J, $, ee, X], [d]);
        return {
            listPadding: em,
            renderRow: eu,
            renderSection: ef,
            renderSectionHeader: ec,
            renderSectionFooter: e_,
            sectionMarginBottom: ep,
            sectionHeaderHeight: s.useCallback((e) => (h[e].type === H.En.SEARCH_RESULTS ? 0 : en), [h]),
            sectionFooterHeight: eh
        };
    },
    ec = s.memo(function (e) {
        let { diversitySurrogate: n, emojiGrid: r, emojiListRef: i, emojiSize: o, onEmojiSelect: l, setUpsellConfigs: u, sectionDescriptors: c, rowCountBySection: _, collapsedSections: h, setCollapsedSections: T, getEmojiItemProps: y, getEmojiRowProps: S, rowCount: A, isUsingKeyboardNavigation: L, channelGuildId: B, messageId: G, isBurstReaction: Z, listHeaderClassName: F } = e,
            j = s.useRef(!1),
            H = v.kJ.useStore((e) => e.activeCategoryIndex),
            W = (0, I.Iu)((e) => e.searchQuery),
            X = w.Yk.useSetting(),
            J = (0, f.e7)([P.default], () => P.default.getCurrentUser()),
            $ = (0, k.I5)(J),
            { location: ee } = (0, m.O)(),
            { analyticsLocations: et } = (0, g.ZP)(),
            [en, er] = s.useState(0),
            [ei, ea] = s.useState(!1),
            [es, eo] = s.useState(0),
            ec = (0, O.N)(),
            ed = (0, R.Ng)(),
            ef = ei && !$ && !d.tq,
            e_ = null != ec || null != ed,
            { enabled: eh } = x.Gi.useExperiment(
                { location: 'Premium Emoji Roadblock' },
                {
                    autoTrackExposure: ef && !e_,
                    disable: !ef || e_
                }
            ),
            { enabled: ep } = C.Z.useExperiment(
                { location: 'EmojiPickerList' },
                {
                    autoTrackExposure: ef && null != ec,
                    disable: !ef || null == ec
                }
            ),
            em = eh || ep,
            {
                listPadding: eg,
                renderRow: eE,
                renderSection: ev,
                renderSectionHeader: eI,
                renderSectionFooter: eT,
                sectionMarginBottom: eb,
                sectionHeaderHeight: ey,
                sectionFooterHeight: eS
            } = eu({
                collapsedSections: h,
                diversitySurrogate: n,
                emojiGrid: r,
                emojiSize: o,
                onEmojiSelect: l,
                searchQuery: W,
                sectionDescriptors: c,
                setCollapsedSections: T,
                getEmojiItemProps: y,
                getEmojiRowProps: S,
                isScrolling: j,
                isUsingKeyboardNavigation: L,
                allowAnimatedEmoji: X,
                channelGuildId: B,
                messageId: G,
                isBurstReaction: Z,
                listHeaderClassName: F,
                activeSectionIndex: en,
                upsellGlowOpacity: es,
                emojiListRef: i
            }),
            eA = (e) => {
                er(e), '' === W && v.kJ.setActiveCategoryIndex(e);
            },
            eN = (0, b.Uf)({
                listRef: i,
                searchQuery: W,
                nitroLockedSectionStates: c,
                setShowUpsell: ea,
                setUpsellGlowOpacity: eo
            }),
            eC = (0, b.Qs)({
                activeCategoryIndex: H,
                isScrolling: j,
                listRef: i,
                onActiveCategoryIndexChange: eA,
                scrollOffset: Q,
                searchQuery: W,
                disableForSearch: !1
            });
        (0, b.Xs)({
            searchQuery: W,
            activeCategoryIndex: H,
            listRef: i
        });
        let eR = s.useCallback(
                (e) => {
                    eN(e), eC(e);
                },
                [eN, eC]
            ),
            eO = c.length > 0;
        function eD() {
            if (!em) return z.intl.string(z.t.EtmOFh);
            {
                let e = (0, U.Px)(K.p9.TIER_2);
                return z.intl.format(z.t.gMVjeX, {
                    nitroTierName: e,
                    onClick: () => {
                        u({
                            type: V.Bg.PREMIUM,
                            emojiDescriptor: void 0
                        });
                    }
                });
            }
        }
        function eL() {
            if (em) {
                var e;
                let n = (0, N.J0)();
                return null !== (e = (0, U.fr)(n)) && void 0 !== e ? e : z.intl.string(z.t.BmJkbW);
            }
            return z.intl.string(z.t.BmJkbW);
        }
        return (
            s.useEffect(() => {
                ei &&
                    M.default.track(Y.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: K.cd.EMOJI_PICKER_FLOATING_UPSELL,
                        location: ee,
                        location_stack: et
                    });
            }, [ee, et, ei]),
            s.useEffect(() => {
                '' !== W && (eo(0), ea(!1));
            }, [W]),
            (0, a.jsxs)('div', {
                className: q.listWrapper,
                children: [
                    eO
                        ? (0, a.jsx)(E.Z, {
                              role: 'none presentation',
                              className: q.list,
                              listPadding: eg,
                              onScroll: eR,
                              renderRow: eE,
                              renderSection: ev,
                              renderSectionHeader: eI,
                              renderSectionFooter: eT,
                              rowCount: A,
                              rowCountBySection: _,
                              rowHeight: el(o),
                              sectionHeaderHeight: ey,
                              sectionMarginBottom: eb,
                              sectionFooterHeight: eS,
                              stickyHeaders: !0,
                              ref: i
                          })
                        : (0, a.jsx)(p.Z, {
                              message: z.intl.string(z.t.IxxiKC),
                              className: q.noSearchResultsContainer
                          }),
                    $ || d.tq
                        ? null
                        : (0, a.jsx)(D.p, {
                              showUpsell: ei,
                              text: eD(),
                              button: eL(),
                              buttonAnalyticsObject: { section: Y.jXE.EMOJI_PICKER_FLOATING_UPSELL }
                          })
                ]
            })
        );
    });
n.Z = ec;
