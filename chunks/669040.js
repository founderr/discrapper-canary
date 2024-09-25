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
    N = n(104494),
    O = n(639119),
    R = n(53691),
    C = n(75145),
    y = n(631771),
    b = n(695346),
    L = n(594174),
    D = n(78839),
    M = n(626135),
    P = n(111361),
    U = n(74538),
    w = n(624138),
    x = n(543241),
    G = n(883661),
    k = n(880949),
    B = n(784222),
    F = n(172800),
    Z = n(149203),
    V = n(981631),
    H = n(957825),
    Y = n(474936),
    j = n(689938),
    W = n(560454);
let K = 0,
    z = 0,
    q = (0, w.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    Q = (0, w.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    X = (0, w.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    $ = (0, w.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    J = (0, w.Mg)(E.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    ee = (0, w.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    et = 16,
    en = (0, w.Mg)(E.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    er = 41,
    ei = 33,
    ea = (e) => e + 2 * en,
    eo = (e) => {
        let { collapsedSections: t, diversitySurrogate: n, emojiGrid: r, emojiSize: o, onEmojiSelect: l, searchQuery: c, sectionDescriptors: E, setCollapsedSections: f, getEmojiItemProps: p, getEmojiRowProps: m, isScrolling: T, isUsingKeyboardNavigation: S, allowAnimatedEmoji: N, channelGuildId: O, messageId: R, isBurstReaction: y, listHeaderClassName: b, activeSectionIndex: L, upsellGlowOpacity: P, emojiListRef: U } = e,
            w = (0, h.O)(),
            Y = a.useRef(V.xAR),
            j = a.useMemo(() => ('' !== n ? _.Z.convert.toCodePoint(n) : ''), [n]),
            K = a.useCallback(
                (e) => {
                    let t = E[e],
                        n = E[e + 1];
                    return e >= E.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
                },
                [E]
            ),
            en = a.useCallback(
                (e) => {
                    if (e >= E.length - 1) return !1;
                    let t = E[e],
                        n = E[e + 1];
                    return !t.isNitroLocked && n.isNitroLocked;
                },
                [E]
            ),
            ea = a.useCallback(
                function (e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        r = new Set(t),
                        i = t.has(e);
                    i ? r.delete(e) : r.add(e),
                        null != n &&
                            M.default.track(V.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: w.location,
                                tab: H.X1.EMOJI,
                                collapsed: !i,
                                guild_id: n.id
                            }),
                        f(r);
                },
                [w, t, f]
            ),
            eo = a.useCallback((e) => {
                let { columnIndex: t, visibleRowIndex: n } = e,
                    r = e.type === B.ld.EMOJI ? e.emoji.allNamesString : e.name;
                Y.current !== V.xAR && window.cancelAnimationFrame(Y.current),
                    (Y.current = window.requestAnimationFrame(() => {
                        I.kJ.setInspectedExpressionPosition(t, n, g.u.MOUSE_EVENT), I.kJ.setSearchPlaceholder(r), (Y.current = V.xAR);
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
                                null === (e = U.current) || void 0 === e || e.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                            };
                        return (0, i.jsx)(
                            F.Z,
                            {
                                emojiDescriptors: n,
                                emojiSize: o,
                                surrogateCodePoint: j,
                                onInspect: eo,
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
                                selectedItemClassName: W.__invalid_selectedItem,
                                messageId: R,
                                isBurstReaction: y,
                                inNitroLockedSection: a.isNitroLocked,
                                handleScrollUpOnSectionCollapse: s
                            },
                            e
                        );
                    }),
                [r, E, o, j, eo, l, p, m, T, S, N, es, O, R, y, U]
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
                        if (o === Z.En.SEARCH_RESULTS) return;
                        let u =
                                o === Z.En.GUILD
                                    ? null != r
                                        ? (0, i.jsx)(k.Z, {
                                              guild: r,
                                              height: et,
                                              width: et
                                          })
                                        : null
                                    : null != a
                                      ? (0, i.jsx)(G.Z, {
                                            categoryId: a,
                                            height: et,
                                            width: et,
                                            size: 'custom'
                                        })
                                      : null,
                            c = null == r ? void 0 : r.toString();
                        null != a && (c = (0, x.Y1)(a, null == r ? void 0 : r.toString()));
                        let d = L === e,
                            _ = n.isNitroLocked,
                            f = _ && !d,
                            h = _ && d;
                        return (0, i.jsx)(
                            A.Z,
                            {
                                className: s()(W.header, b, {
                                    [W.inactiveNitroHeader]: f,
                                    [W.activeNitroHeader]: h
                                }),
                                icon: u,
                                isCollapsed: t.has(l),
                                onClick: () => ea(l, r),
                                children: c
                            },
                            l
                        );
                    }),
                [E, t, ea, b, L]
            ),
            ec = (0, d.e7)([D.ZP], () => D.ZP.inReverseTrial()),
            ed = a.useCallback(
                (e, n) => {
                    let r = E[e],
                        a = en(e),
                        o = K(e);
                    return (0, i.jsx)(
                        'div',
                        {
                            className: s()(W.categorySection, {
                                [W.categorySectionLast]: e === E.length - 1,
                                [W.categorySectionCollapsed]: t.has(r.sectionId),
                                [W.categorySectionNitroLocked]: r.isNitroLocked,
                                [W.categorySectionNitroDivider]: a || o
                            }),
                            children: n
                        },
                        e
                    );
                },
                [t, E, en, K]
            ),
            e_ = a.useCallback(
                (e) => {
                    if (en(e)) return ec ? (0, i.jsx)(C.mY, {}) : (0, i.jsx)(C.ZP, { glowOpacity: P });
                    return K(e) ? (0, i.jsx)('div', { className: W.nitroBottomDivider }) : null;
                },
                [P, en, K, ec]
            ),
            eE = a.useCallback((e) => (en(e) ? er : K(e) ? ei : 0), [en, K]),
            ef = a.useCallback(
                (e) => {
                    var n;
                    return e === E.length - 1 || t.has(null === (n = E[e]) || void 0 === n ? void 0 : n.sectionId) || en(e) || K(e) ? 0 : ee;
                },
                [t, E, en, K]
            ),
            eh = a.useMemo(() => ['' !== c ? $ : q, Q, X, z], [c]);
        return {
            listPadding: eh,
            renderRow: el,
            renderSection: ed,
            renderSectionHeader: eu,
            renderSectionFooter: e_,
            sectionMarginBottom: ef,
            sectionHeaderHeight: a.useCallback((e) => (E[e].type === Z.En.SEARCH_RESULTS ? 0 : J), [E]),
            sectionFooterHeight: eE
        };
    },
    es = a.memo(function (e) {
        let { diversitySurrogate: t, emojiGrid: n, emojiListRef: r, emojiSize: o, onEmojiSelect: s, setUpsellConfigs: l, sectionDescriptors: u, rowCountBySection: _, collapsedSections: E, setCollapsedSections: g, getEmojiItemProps: A, getEmojiRowProps: v, rowCount: C, isUsingKeyboardNavigation: D, channelGuildId: w, messageId: x, isBurstReaction: G, listHeaderClassName: k } = e,
            F = a.useRef(!1),
            Z = I.kJ.useStore((e) => e.activeCategoryIndex),
            H = (0, T.Iu)((e) => e.searchQuery),
            z = b.Yk.useSetting(),
            q = (0, d.e7)([L.default], () => L.default.getCurrentUser()),
            Q = (0, P.I5)(q),
            { location: X } = (0, h.O)(),
            { analyticsLocations: $ } = (0, p.ZP)(),
            [J, ee] = a.useState(0),
            [et, en] = a.useState(!1),
            [er, ei] = a.useState(0),
            es = (0, O.N)(),
            el = (0, N.Ng)(),
            eu = null != es || null != el,
            ec = et && !Q && !c.tq && !eu,
            { enabled: ed } = y.Gi.useExperiment(
                { location: 'Premium Emoji Roadblock' },
                {
                    autoTrackExposure: ec,
                    disable: !ec
                }
            ),
            {
                listPadding: e_,
                renderRow: eE,
                renderSection: ef,
                renderSectionHeader: eh,
                renderSectionFooter: ep,
                sectionMarginBottom: em,
                sectionHeaderHeight: eI,
                sectionFooterHeight: eT
            } = eo({
                collapsedSections: E,
                diversitySurrogate: t,
                emojiGrid: n,
                emojiSize: o,
                onEmojiSelect: s,
                searchQuery: H,
                sectionDescriptors: u,
                setCollapsedSections: g,
                getEmojiItemProps: A,
                getEmojiRowProps: v,
                isScrolling: F,
                isUsingKeyboardNavigation: D,
                allowAnimatedEmoji: z,
                channelGuildId: w,
                messageId: x,
                isBurstReaction: G,
                listHeaderClassName: k,
                activeSectionIndex: J,
                upsellGlowOpacity: er,
                emojiListRef: r
            }),
            eg = (e) => {
                ee(e), '' === H && I.kJ.setActiveCategoryIndex(e);
            },
            eS = (0, S.Uf)({
                listRef: r,
                searchQuery: H,
                nitroLockedSectionStates: u,
                setShowUpsell: en,
                setUpsellGlowOpacity: ei
            }),
            eA = (0, S.Qs)({
                activeCategoryIndex: Z,
                isScrolling: F,
                listRef: r,
                onActiveCategoryIndexChange: eg,
                scrollOffset: K,
                searchQuery: H,
                disableForSearch: !1
            });
        (0, S.Xs)({
            searchQuery: H,
            activeCategoryIndex: Z,
            listRef: r
        });
        let ev = a.useCallback(
                (e) => {
                    eS(e), eA(e);
                },
                [eS, eA]
            ),
            eN = u.length > 0;
        function eO() {
            if (!ed) return j.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_TITLE;
            {
                let e = (0, U.Px)(Y.p9.TIER_2);
                return j.Z.Messages.PREMIUM_UPSELL_MOBILE_FEATURE_EMOJI_POPUP_LABEL_V2.format({
                    nitroTierName: e,
                    onClick: () => {
                        l({
                            type: B.Bg.PREMIUM,
                            emojiDescriptor: void 0
                        });
                    }
                });
            }
        }
        return (
            a.useEffect(() => {
                et &&
                    M.default.track(V.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: Y.cd.EMOJI_PICKER_FLOATING_UPSELL,
                        location: X,
                        location_stack: $
                    });
            }, [X, $, et]),
            a.useEffect(() => {
                '' !== H && (ei(0), en(!1));
            }, [H]),
            (0, i.jsxs)('div', {
                className: W.listWrapper,
                children: [
                    eN
                        ? (0, i.jsx)(m.Z, {
                              role: 'none presentation',
                              className: W.list,
                              listPadding: e_,
                              onScroll: ev,
                              renderRow: eE,
                              renderSection: ef,
                              renderSectionHeader: eh,
                              renderSectionFooter: ep,
                              rowCount: C,
                              rowCountBySection: _,
                              rowHeight: ea(o),
                              sectionHeaderHeight: eI,
                              sectionMarginBottom: em,
                              sectionFooterHeight: eT,
                              stickyHeaders: !0,
                              ref: r
                          })
                        : (0, i.jsx)(f.Z, {
                              message: j.Z.Messages.NO_EMOJI_SEARCH_RESULTS,
                              className: W.noSearchResultsContainer
                          }),
                    Q || c.tq
                        ? null
                        : (0, i.jsx)(R.p, {
                              showUpsell: et,
                              text: eO(),
                              button: j.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA,
                              buttonAnalyticsObject: { section: V.jXE.EMOJI_PICKER_FLOATING_UPSELL }
                          })
                ]
            })
        );
    });
t.Z = es;
