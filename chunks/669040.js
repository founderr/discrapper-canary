var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(392711),
    u = n.n(l),
    c = n(873546),
    d = n(442837),
    _ = n(946188),
    E = n(477690),
    f = n(788911),
    h = n(2052),
    p = n(906732),
    m = n(218867),
    I = n(806966),
    T = n(28546),
    g = n(691251),
    S = n(98528),
    A = n(551058),
    v = n(536442),
    N = n(775412),
    O = n(48125),
    R = n(104494),
    C = n(639119),
    y = n(53691),
    L = n(75145),
    b = n(631771),
    D = n(695346),
    M = n(594174),
    P = n(78839),
    U = n(626135),
    w = n(111361),
    x = n(74538),
    G = n(624138),
    k = n(543241),
    B = n(883661),
    F = n(880949),
    Z = n(784222),
    V = n(172800),
    H = n(149203),
    Y = n(981631),
    j = n(957825),
    W = n(474936),
    K = n(689938),
    z = n(560454);
let q = 0,
    Q = 0,
    X = (0, G.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    $ = (0, G.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    J = (0, G.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    ee = (0, G.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    et = (0, G.Mg)(E.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    en = (0, G.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    er = 16,
    ei = (0, G.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    ea = 41,
    eo = 33,
    es = (e) => e + 2 * ei,
    el = (e) => {
        let { collapsedSections: t, diversitySurrogate: n, emojiGrid: r, emojiSize: o, onEmojiSelect: l, searchQuery: c, sectionDescriptors: E, setCollapsedSections: f, getEmojiItemProps: p, getEmojiRowProps: m, isScrolling: T, isUsingKeyboardNavigation: S, allowAnimatedEmoji: N, channelGuildId: O, messageId: R, isBurstReaction: C, listHeaderClassName: y, activeSectionIndex: b, upsellGlowOpacity: D, emojiListRef: M } = e,
            w = (0, h.O)(),
            x = a.useRef(Y.xAR),
            G = a.useMemo(() => ('' !== n ? _.Z.convert.toCodePoint(n) : ''), [n]),
            W = a.useCallback(
                (e) => {
                    let t = E[e],
                        n = E[e + 1];
                    return e >= E.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
                },
                [E]
            ),
            K = a.useCallback(
                (e) => {
                    if (e >= E.length - 1) return !1;
                    let t = E[e],
                        n = E[e + 1];
                    return !t.isNitroLocked && n.isNitroLocked;
                },
                [E]
            ),
            q = a.useCallback(
                function (e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        r = new Set(t),
                        i = t.has(e);
                    i ? r.delete(e) : r.add(e),
                        null != n &&
                            U.default.track(Y.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: w.location,
                                tab: j.X1.EMOJI,
                                collapsed: !i,
                                guild_id: n.id
                            }),
                        f(r);
                },
                [w, t, f]
            ),
            ei = a.useCallback((e) => {
                let { columnIndex: t, visibleRowIndex: n } = e,
                    r = e.type === Z.ld.EMOJI ? e.emoji.allNamesString : e.name;
                x.current !== Y.xAR && window.cancelAnimationFrame(x.current),
                    (x.current = window.requestAnimationFrame(() => {
                        I.kJ.setInspectedExpressionPosition(t, n, g.u.MOUSE_EVENT), I.kJ.setSearchPlaceholder(r), (x.current = Y.xAR);
                    }));
            }, []),
            es = (0, d.e7)([v.qc], () => v.qc.hasHotspot(v.v6.FAVORITE_EMOJI_TOOLTIP), []),
            el = a.useMemo(
                () =>
                    u().memoize((e, t) => {
                        let n = r[e],
                            a = E[t.sectionIndex],
                            s = () => {
                                var e;
                                null === (e = M.current) || void 0 === e || e.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                            };
                        return (0, i.jsx)(
                            V.Z,
                            {
                                emojiDescriptors: n,
                                emojiSize: o,
                                surrogateCodePoint: G,
                                onInspect: ei,
                                onSelect: l,
                                getEmojiItemProps: p,
                                getEmojiRowProps: m,
                                isScrolling: T,
                                isUsingKeyboardNavigation: S,
                                rowIndex: e,
                                allowAnimatedEmoji: N,
                                showEmojiFavoriteTooltip: es,
                                channelGuildId: O,
                                category: a.sectionId,
                                selectedItemClassName: z.__invalid_selectedItem,
                                messageId: R,
                                isBurstReaction: C,
                                inNitroLockedSection: a.isNitroLocked,
                                handleScrollUpOnSectionCollapse: s
                            },
                            e
                        );
                    }),
                [r, E, o, G, ei, l, p, m, T, S, N, es, O, R, C, M]
            );
        a.useEffect(
            () => () => {
                var e, t;
                return null === (t = el.cache) || void 0 === t ? void 0 : null === (e = t.clear) || void 0 === e ? void 0 : e.call(t);
            },
            [el]
        );
        let eu = a.useMemo(
                () =>
                    u().memoize((e) => {
                        let n = E[e];
                        if (null == n) return;
                        let { guild: r, categoryId: a, type: o, sectionId: l } = n;
                        if (o === H.En.SEARCH_RESULTS) return;
                        let u =
                                o === H.En.GUILD
                                    ? null != r
                                        ? (0, i.jsx)(F.Z, {
                                              guild: r,
                                              height: er,
                                              width: er
                                          })
                                        : null
                                    : null != a
                                      ? (0, i.jsx)(B.Z, {
                                            categoryId: a,
                                            height: er,
                                            width: er,
                                            size: 'custom'
                                        })
                                      : null,
                            c = null == r ? void 0 : r.toString();
                        null != a && (c = (0, k.Y1)(a, null == r ? void 0 : r.toString()));
                        let d = b === e,
                            _ = n.isNitroLocked,
                            f = _ && !d,
                            h = _ && d;
                        return (0, i.jsx)(
                            A.Z,
                            {
                                className: s()(z.header, y, {
                                    [z.inactiveNitroHeader]: f,
                                    [z.activeNitroHeader]: h
                                }),
                                icon: u,
                                isCollapsed: t.has(l),
                                onClick: () => q(l, r),
                                children: c
                            },
                            l
                        );
                    }),
                [E, t, q, y, b]
            ),
            ec = (0, d.e7)([P.ZP], () => P.ZP.inReverseTrial()),
            ed = a.useCallback(
                (e, n) => {
                    let r = E[e],
                        a = K(e),
                        o = W(e);
                    return (0, i.jsx)(
                        'div',
                        {
                            className: s()(z.categorySection, {
                                [z.categorySectionLast]: e === E.length - 1,
                                [z.categorySectionCollapsed]: t.has(r.sectionId),
                                [z.categorySectionNitroLocked]: r.isNitroLocked,
                                [z.categorySectionNitroDivider]: a || o
                            }),
                            children: n
                        },
                        e
                    );
                },
                [t, E, K, W]
            ),
            e_ = a.useCallback(
                (e) => {
                    if (K(e)) return ec ? (0, i.jsx)(L.mY, {}) : (0, i.jsx)(L.ZP, { glowOpacity: D });
                    return W(e) ? (0, i.jsx)('div', { className: z.nitroBottomDivider }) : null;
                },
                [D, K, W, ec]
            ),
            eE = a.useCallback((e) => (K(e) ? ea : W(e) ? eo : 0), [K, W]),
            ef = a.useCallback(
                (e) => {
                    var n;
                    return e === E.length - 1 || t.has(null === (n = E[e]) || void 0 === n ? void 0 : n.sectionId) || K(e) || W(e) ? 0 : en;
                },
                [t, E, K, W]
            ),
            eh = a.useMemo(() => ['' !== c ? ee : X, $, J, Q], [c]);
        return {
            listPadding: eh,
            renderRow: el,
            renderSection: ed,
            renderSectionHeader: eu,
            renderSectionFooter: e_,
            sectionMarginBottom: ef,
            sectionHeaderHeight: a.useCallback((e) => (E[e].type === H.En.SEARCH_RESULTS ? 0 : et), [E]),
            sectionFooterHeight: eE
        };
    },
    eu = a.memo(function (e) {
        let { diversitySurrogate: t, emojiGrid: n, emojiListRef: r, emojiSize: o, onEmojiSelect: s, setUpsellConfigs: l, sectionDescriptors: u, rowCountBySection: _, collapsedSections: E, setCollapsedSections: g, getEmojiItemProps: A, getEmojiRowProps: v, rowCount: L, isUsingKeyboardNavigation: P, channelGuildId: G, messageId: k, isBurstReaction: B, listHeaderClassName: F } = e,
            V = a.useRef(!1),
            H = I.kJ.useStore((e) => e.activeCategoryIndex),
            j = (0, T.Iu)((e) => e.searchQuery),
            Q = D.Yk.useSetting(),
            X = (0, d.e7)([M.default], () => M.default.getCurrentUser()),
            $ = (0, w.I5)(X),
            { location: J } = (0, h.O)(),
            { analyticsLocations: ee } = (0, p.ZP)(),
            [et, en] = a.useState(0),
            [er, ei] = a.useState(!1),
            [ea, eo] = a.useState(0),
            eu = (0, C.N)(),
            ec = (0, R.Ng)(),
            ed = er && !$ && !c.tq,
            e_ = null != eu || null != ec,
            { enabled: eE } = b.Gi.useExperiment(
                { location: 'Premium Emoji Roadblock' },
                {
                    autoTrackExposure: ed && !e_,
                    disable: !ed || e_
                }
            ),
            { enabled: ef } = O.Z.useExperiment(
                { location: 'EmojiPickerList' },
                {
                    autoTrackExposure: ed && null != eu,
                    disable: !ed || null == eu
                }
            ),
            eh = eE || ef,
            {
                listPadding: ep,
                renderRow: em,
                renderSection: eI,
                renderSectionHeader: eT,
                renderSectionFooter: eg,
                sectionMarginBottom: eS,
                sectionHeaderHeight: eA,
                sectionFooterHeight: ev
            } = el({
                collapsedSections: E,
                diversitySurrogate: t,
                emojiGrid: n,
                emojiSize: o,
                onEmojiSelect: s,
                searchQuery: j,
                sectionDescriptors: u,
                setCollapsedSections: g,
                getEmojiItemProps: A,
                getEmojiRowProps: v,
                isScrolling: V,
                isUsingKeyboardNavigation: P,
                allowAnimatedEmoji: Q,
                channelGuildId: G,
                messageId: k,
                isBurstReaction: B,
                listHeaderClassName: F,
                activeSectionIndex: et,
                upsellGlowOpacity: ea,
                emojiListRef: r
            }),
            eN = (e) => {
                en(e), '' === j && I.kJ.setActiveCategoryIndex(e);
            },
            eO = (0, S.Uf)({
                listRef: r,
                searchQuery: j,
                nitroLockedSectionStates: u,
                setShowUpsell: ei,
                setUpsellGlowOpacity: eo
            }),
            eR = (0, S.Qs)({
                activeCategoryIndex: H,
                isScrolling: V,
                listRef: r,
                onActiveCategoryIndexChange: eN,
                scrollOffset: q,
                searchQuery: j,
                disableForSearch: !1
            });
        (0, S.Xs)({
            searchQuery: j,
            activeCategoryIndex: H,
            listRef: r
        });
        let eC = a.useCallback(
                (e) => {
                    eO(e), eR(e);
                },
                [eO, eR]
            ),
            ey = u.length > 0;
        function eL() {
            if (!eh) return K.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_TITLE;
            {
                let e = (0, x.Px)(W.p9.TIER_2);
                return K.Z.Messages.PREMIUM_UPSELL_MOBILE_FEATURE_EMOJI_POPUP_LABEL_V2.format({
                    nitroTierName: e,
                    onClick: () => {
                        l({
                            type: Z.Bg.PREMIUM,
                            emojiDescriptor: void 0
                        });
                    }
                });
            }
        }
        function eb() {
            if (eh) {
                var e;
                let t = (0, N.J0)();
                return null !== (e = (0, x.fr)(t)) && void 0 !== e ? e : K.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA;
            }
            return K.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA;
        }
        return (
            a.useEffect(() => {
                er &&
                    U.default.track(Y.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: W.cd.EMOJI_PICKER_FLOATING_UPSELL,
                        location: J,
                        location_stack: ee
                    });
            }, [J, ee, er]),
            a.useEffect(() => {
                '' !== j && (eo(0), ei(!1));
            }, [j]),
            (0, i.jsxs)('div', {
                className: z.listWrapper,
                children: [
                    ey
                        ? (0, i.jsx)(m.Z, {
                              role: 'none presentation',
                              className: z.list,
                              listPadding: ep,
                              onScroll: eC,
                              renderRow: em,
                              renderSection: eI,
                              renderSectionHeader: eT,
                              renderSectionFooter: eg,
                              rowCount: L,
                              rowCountBySection: _,
                              rowHeight: es(o),
                              sectionHeaderHeight: eA,
                              sectionMarginBottom: eS,
                              sectionFooterHeight: ev,
                              stickyHeaders: !0,
                              ref: r
                          })
                        : (0, i.jsx)(f.Z, {
                              message: K.Z.Messages.NO_EMOJI_SEARCH_RESULTS,
                              className: z.noSearchResultsContainer
                          }),
                    $ || c.tq
                        ? null
                        : (0, i.jsx)(y.p, {
                              showUpsell: er,
                              text: eL(),
                              button: eb(),
                              buttonAnalyticsObject: { section: Y.jXE.EMOJI_PICKER_FLOATING_UPSELL }
                          })
                ]
            })
        );
    });
t.Z = eu;
