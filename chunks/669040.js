n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(873546),
    c = n(442837),
    d = n(336317),
    f = n(477690),
    _ = n(788911),
    p = n(2052),
    h = n(906732),
    m = n(218867),
    g = n(806966),
    E = n(28546),
    v = n(691251),
    b = n(98528),
    I = n(551058),
    T = n(536442),
    S = n(140465),
    y = n(775412),
    A = n(48125),
    N = n(104494),
    C = n(639119),
    R = n(53691),
    O = n(75145),
    D = n(631771),
    L = n(695346),
    x = n(594174),
    w = n(626135),
    M = n(111361),
    P = n(74538),
    k = n(624138),
    U = n(543241),
    B = n(883661),
    G = n(880949),
    Z = n(784222),
    F = n(172800),
    V = n(149203),
    j = n(981631),
    H = n(957825),
    Y = n(474936),
    W = n(388032),
    K = n(560454);
let z = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    q = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    Q = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    X = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    J = (0, k.Mg)(f.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    $ = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    ee = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    et = (e) => e + 2 * ee,
    en = (e) => {
        let { collapsedSections: t, diversitySurrogate: n, emojiGrid: a, emojiSize: o, onEmojiSelect: u, searchQuery: f, sectionDescriptors: _, setCollapsedSections: h, getEmojiItemProps: m, getEmojiRowProps: E, isScrolling: b, isUsingKeyboardNavigation: y, allowAnimatedEmoji: A, channelGuildId: N, messageId: C, isBurstReaction: R, listHeaderClassName: D, activeSectionIndex: L, upsellGlowOpacity: x, emojiListRef: M } = e,
            P = (0, p.O)(),
            k = i.useRef(j.xAR),
            Y = i.useMemo(() => ('' !== n ? d.Z.convert.toCodePoint(n) : ''), [n]),
            W = i.useCallback(
                (e) => {
                    let t = _[e],
                        n = _[e + 1];
                    return e >= _.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
                },
                [_]
            ),
            ee = i.useCallback(
                (e) => {
                    if (e >= _.length - 1) return !1;
                    let t = _[e],
                        n = _[e + 1];
                    return !t.isNitroLocked && n.isNitroLocked;
                },
                [_]
            ),
            et = i.useCallback(
                function (e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        r = new Set(t),
                        i = t.has(e);
                    i ? r.delete(e) : r.add(e),
                        null != n &&
                            w.default.track(j.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: P.location,
                                tab: H.X1.EMOJI,
                                collapsed: !i,
                                guild_id: n.id
                            }),
                        h(r);
                },
                [P, t, h]
            ),
            en = i.useCallback((e) => {
                let { columnIndex: t, visibleRowIndex: n } = e,
                    r = e.type === Z.ld.EMOJI ? e.emoji.allNamesString : e.name;
                k.current !== j.xAR && window.cancelAnimationFrame(k.current),
                    (k.current = window.requestAnimationFrame(() => {
                        g.kJ.setInspectedExpressionPosition(t, n, v.u.MOUSE_EVENT), g.kJ.setSearchPlaceholder(r), (k.current = j.xAR);
                    }));
            }, []),
            er = (0, c.e7)([T.qc], () => T.qc.hasHotspot(T.v6.FAVORITE_EMOJI_TOOLTIP), []),
            ei = i.useMemo(
                () =>
                    l().memoize((e, t) => {
                        let n = a[e],
                            i = _[t.sectionIndex];
                        return (0, r.jsx)(
                            F.Z,
                            {
                                emojiDescriptors: n,
                                emojiSize: o,
                                surrogateCodePoint: Y,
                                onInspect: en,
                                onSelect: u,
                                getEmojiItemProps: m,
                                getEmojiRowProps: E,
                                isScrolling: b,
                                isUsingKeyboardNavigation: y,
                                rowIndex: e,
                                allowAnimatedEmoji: A,
                                showEmojiFavoriteTooltip: er,
                                channelGuildId: N,
                                category: i.sectionId,
                                selectedItemClassName: K.__invalid_selectedItem,
                                messageId: C,
                                isBurstReaction: R,
                                inNitroLockedSection: i.isNitroLocked,
                                handleScrollUpOnSectionCollapse: () => {
                                    var e;
                                    null === (e = M.current) || void 0 === e || e.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                                }
                            },
                            e
                        );
                    }),
                [a, _, o, Y, en, u, m, E, b, y, A, er, N, C, R, M]
            );
        i.useEffect(
            () => () => {
                var e, t;
                return null === (t = ei.cache) || void 0 === t ? void 0 : null === (e = t.clear) || void 0 === e ? void 0 : e.call(t);
            },
            [ei]
        );
        let ea = i.useMemo(
                () =>
                    l().memoize((e) => {
                        let n = _[e];
                        if (null == n) return;
                        let { guild: i, categoryId: a, type: o, sectionId: l } = n;
                        if (o === V.En.SEARCH_RESULTS) return;
                        let u =
                                o === V.En.GUILD
                                    ? null != i
                                        ? (0, r.jsx)(G.Z, {
                                              guild: i,
                                              height: 16,
                                              width: 16
                                          })
                                        : null
                                    : null != a
                                      ? (0, r.jsx)(B.Z, {
                                            categoryId: a,
                                            height: 16,
                                            width: 16,
                                            size: 'custom'
                                        })
                                      : null,
                            c = null == i ? void 0 : i.toString();
                        null != a && (c = (0, U.Y1)(a, null == i ? void 0 : i.toString()));
                        let d = L === e,
                            f = n.isNitroLocked,
                            p = f && !d,
                            h = f && d;
                        return (0, r.jsx)(
                            I.Z,
                            {
                                className: s()(K.header, D, {
                                    [K.inactiveNitroHeader]: p,
                                    [K.activeNitroHeader]: h
                                }),
                                icon: u,
                                isCollapsed: t.has(l),
                                onClick: () => et(l, i),
                                children: c
                            },
                            l
                        );
                    }),
                [_, t, et, D, L]
            ),
            es = (0, S.x8)('EmojiPickerList-useListRenderers'),
            eo = i.useCallback(
                (e, n) => {
                    let i = _[e],
                        a = ee(e),
                        o = W(e);
                    return (0, r.jsx)(
                        'div',
                        {
                            className: s()(K.categorySection, {
                                [K.categorySectionLast]: e === _.length - 1,
                                [K.categorySectionCollapsed]: t.has(i.sectionId),
                                [K.categorySectionNitroLocked]: i.isNitroLocked,
                                [K.categorySectionNitroDivider]: a || o
                            }),
                            children: n
                        },
                        e
                    );
                },
                [t, _, ee, W]
            ),
            el = i.useCallback(
                (e) => {
                    if (ee(e)) return es ? (0, r.jsx)(O.fi, {}) : (0, r.jsx)(O.ZP, { glowOpacity: x });
                    return W(e) ? (0, r.jsx)('div', { className: K.nitroBottomDivider }) : null;
                },
                [x, ee, W, es]
            ),
            eu = i.useCallback((e) => (ee(e) ? 41 : W(e) ? 33 : 0), [ee, W]),
            ec = i.useCallback(
                (e) => {
                    var n;
                    return e === _.length - 1 || t.has(null === (n = _[e]) || void 0 === n ? void 0 : n.sectionId) || ee(e) || W(e) ? 0 : $;
                },
                [t, _, ee, W]
            ),
            ed = i.useMemo(() => ['' !== f ? X : z, q, Q, 0], [f]);
        return {
            listPadding: ed,
            renderRow: ei,
            renderSection: eo,
            renderSectionHeader: ea,
            renderSectionFooter: el,
            sectionMarginBottom: ec,
            sectionHeaderHeight: i.useCallback((e) => (_[e].type === V.En.SEARCH_RESULTS ? 0 : J), [_]),
            sectionFooterHeight: eu
        };
    },
    er = i.memo(function (e) {
        let { diversitySurrogate: t, emojiGrid: n, emojiListRef: a, emojiSize: s, onEmojiSelect: o, setUpsellConfigs: l, sectionDescriptors: d, rowCountBySection: f, collapsedSections: v, setCollapsedSections: I, getEmojiItemProps: T, getEmojiRowProps: S, rowCount: O, isUsingKeyboardNavigation: k, channelGuildId: U, messageId: B, isBurstReaction: G, listHeaderClassName: F } = e,
            V = i.useRef(!1),
            H = g.kJ.useStore((e) => e.activeCategoryIndex),
            z = (0, E.Iu)((e) => e.searchQuery),
            q = L.Yk.useSetting(),
            Q = (0, c.e7)([x.default], () => x.default.getCurrentUser()),
            X = (0, M.I5)(Q),
            { location: J } = (0, p.O)(),
            { analyticsLocations: $ } = (0, h.ZP)(),
            [ee, er] = i.useState(0),
            [ei, ea] = i.useState(!1),
            [es, eo] = i.useState(0),
            el = (0, C.N)(),
            eu = (0, N.Ng)(),
            ec = ei && !X && !u.tq,
            ed = null != el || null != eu,
            { enabled: ef } = D.Gi.useExperiment(
                { location: 'Premium Emoji Roadblock' },
                {
                    autoTrackExposure: ec && !ed,
                    disable: !ec || ed
                }
            ),
            { enabled: e_ } = A.Z.useExperiment(
                { location: 'EmojiPickerList' },
                {
                    autoTrackExposure: ec && null != el,
                    disable: !ec || null == el
                }
            ),
            ep = ef || e_,
            {
                listPadding: eh,
                renderRow: em,
                renderSection: eg,
                renderSectionHeader: eE,
                renderSectionFooter: ev,
                sectionMarginBottom: eb,
                sectionHeaderHeight: eI,
                sectionFooterHeight: eT
            } = en({
                collapsedSections: v,
                diversitySurrogate: t,
                emojiGrid: n,
                emojiSize: s,
                onEmojiSelect: o,
                searchQuery: z,
                sectionDescriptors: d,
                setCollapsedSections: I,
                getEmojiItemProps: T,
                getEmojiRowProps: S,
                isScrolling: V,
                isUsingKeyboardNavigation: k,
                allowAnimatedEmoji: q,
                channelGuildId: U,
                messageId: B,
                isBurstReaction: G,
                listHeaderClassName: F,
                activeSectionIndex: ee,
                upsellGlowOpacity: es,
                emojiListRef: a
            }),
            eS = (0, b.Uf)({
                listRef: a,
                searchQuery: z,
                nitroLockedSectionStates: d,
                setShowUpsell: ea,
                setUpsellGlowOpacity: eo
            }),
            ey = (0, b.Qs)({
                activeCategoryIndex: H,
                isScrolling: V,
                listRef: a,
                onActiveCategoryIndexChange: (e) => {
                    er(e), '' === z && g.kJ.setActiveCategoryIndex(e);
                },
                scrollOffset: 0,
                searchQuery: z,
                disableForSearch: !1
            });
        (0, b.Xs)({
            searchQuery: z,
            activeCategoryIndex: H,
            listRef: a
        });
        let eA = i.useCallback(
                (e) => {
                    eS(e), ey(e);
                },
                [eS, ey]
            ),
            eN = d.length > 0;
        return (
            i.useEffect(() => {
                ei &&
                    w.default.track(j.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: Y.cd.EMOJI_PICKER_FLOATING_UPSELL,
                        location: J,
                        location_stack: $
                    });
            }, [J, $, ei]),
            i.useEffect(() => {
                '' !== z && (eo(0), ea(!1));
            }, [z]),
            (0, r.jsxs)('div', {
                className: K.listWrapper,
                children: [
                    eN
                        ? (0, r.jsx)(m.Z, {
                              role: 'none presentation',
                              className: K.list,
                              listPadding: eh,
                              onScroll: eA,
                              renderRow: em,
                              renderSection: eg,
                              renderSectionHeader: eE,
                              renderSectionFooter: ev,
                              rowCount: O,
                              rowCountBySection: f,
                              rowHeight: et(s),
                              sectionHeaderHeight: eI,
                              sectionMarginBottom: eb,
                              sectionFooterHeight: eT,
                              stickyHeaders: !0,
                              ref: a
                          })
                        : (0, r.jsx)(_.Z, {
                              message: W.intl.string(W.t.IxxiKC),
                              className: K.noSearchResultsContainer
                          }),
                    X || u.tq
                        ? null
                        : (0, r.jsx)(R.p, {
                              showUpsell: ei,
                              text: (function () {
                                  if (!ep) return W.intl.string(W.t.EtmOFh);
                                  {
                                      let e = (0, P.Px)(Y.p9.TIER_2);
                                      return W.intl.format(W.t.gMVjeX, {
                                          nitroTierName: e,
                                          onClick: () => {
                                              l({
                                                  type: Z.Bg.PREMIUM,
                                                  emojiDescriptor: void 0
                                              });
                                          }
                                      });
                                  }
                              })(),
                              button: (function () {
                                  if (ep) {
                                      var e;
                                      let t = (0, y.J0)();
                                      return null !== (e = (0, P.fr)(t)) && void 0 !== e ? e : W.intl.string(W.t.BmJkbW);
                                  }
                                  return W.intl.string(W.t.BmJkbW);
                              })(),
                              buttonAnalyticsObject: { section: j.jXE.EMOJI_PICKER_FLOATING_UPSELL }
                          })
                ]
            })
        );
    });
t.Z = er;
