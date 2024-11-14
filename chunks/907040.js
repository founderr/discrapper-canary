n.d(t, {
    v: function () {
        return r;
    }
}),
    n(47120),
    n(653041);
var r,
    i,
    a = n(200651),
    s = n(192379),
    o = n(120356),
    l = n.n(o),
    u = n(954955),
    c = n.n(u),
    d = n(611144),
    f = n(442837),
    _ = n(704215),
    p = n(477690),
    h = n(481060),
    m = n(80932),
    g = n(410575),
    E = n(2052),
    v = n(100527),
    I = n(906732),
    b = n(243778),
    S = n(339085),
    T = n(438332),
    y = n(664437),
    A = n(806966),
    N = n(28546),
    C = n(691251),
    R = n(98528),
    O = n(770812),
    D = n(434404),
    L = n(536442),
    x = n(609218),
    w = n(695346),
    M = n(984933),
    P = n(594174),
    k = n(626135),
    U = n(111361),
    B = n(624138),
    G = n(543241),
    Z = n(253696),
    F = n(199257),
    V = n(636411),
    j = n(380331),
    H = n(170762),
    Y = n(22363),
    W = n(784222),
    K = n(141507),
    z = n(669040),
    q = n(901963),
    Q = n(212263),
    X = n(149203),
    J = n(981631),
    $ = n(921944),
    ee = n(185923),
    et = n(74353);
let en = (0, B.Mg)(p.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    er = (0, B.Mg)(p.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    ei = (e) => e.stopPropagation();
((i = r || (r = {}))[(i.NONE = 0)] = 'NONE'), (i[(i.TABS_EXPRESSION_PICKER = 1)] = 'TABS_EXPRESSION_PICKER'), (i[(i.NO_TABS_EXPRESSION_PICKER = 2)] = 'NO_TABS_EXPRESSION_PICKER');
let ea = (e, t) => {
        A.kJ.setInspectedExpressionPosition(e, t, C.u.GRID_NAVIGATOR_EVENT);
    },
    es = (e) => {
        let { analyticsLocation: t, pickerIntention: n, columnCounts: r, onSelectEmoji: i, emojiGrid: a, emojiList: o, channelGuildId: l, isBurstReaction: u } = e,
            c = (0, f.e7)([S.ZP], () => S.ZP.getDisambiguatedEmojiContext(l), [l]),
            _ = s.useCallback(
                (e, r) => {
                    switch (e.type) {
                        case W.ld.CREATE_EMOJI:
                            i(void 0, !0), D.Z.open(e.guildId, J.pNK.EMOJI);
                            return;
                        case W.ld.EMOJI: {
                            if (null != e.emoji && r.altKey) {
                                c.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                    ? (0, m.Xe)(e.emoji)
                                    : ((0, G.J1)({
                                          emoji: e.emoji,
                                          location: {
                                              ...t,
                                              object: J.qAy.EMOJI
                                          }
                                      }),
                                      (0, m.$K)(e.emoji));
                                return;
                            }
                            let a = {
                                page: null != l ? J.ZY5.GUILD_CHANNEL : J.ZY5.DM_CHANNEL,
                                section: J.jXE.EMOJI_PICKER_POPOUT,
                                object: J.qAy.EMOJI
                            };
                            u &&
                                (a = {
                                    page: null != l ? J.ZY5.GUILD_CHANNEL : J.ZY5.DM_CHANNEL,
                                    section: J.jXE.EMOJI_PICKER_POPOUT,
                                    object: J.qAy.EMOJI
                                }),
                                (0, G.fe)({
                                    emoji: e.emoji,
                                    location: a,
                                    pickerIntention: n,
                                    category: e.category,
                                    subCategory: e.subCategory,
                                    newlyAddedHighlight: e.subCategory === X.t0.NEWLY_ADDED_EMOJI && T.Z.isNewerThanLastSeen(l, e.emoji.id)
                                }),
                                i(e.emoji, !r.shiftKey, u);
                        }
                    }
                },
                [i, l, n, c, t, u]
            ),
            {
                gridDispatch: p,
                getItemProps: h,
                getRowProps: g,
                gridContainerProps: E,
                handleGridContainerKeyDown: v,
                isUsingKeyboardNavigation: I
            } = (0, R.VO)({
                columnCounts: r,
                gridNavigatorId: X.Vr,
                itemGrid: a,
                itemList: o,
                onGridNavigatorItemSelect: _,
                onGridNavigatorPositionChange: ea
            });
        return (
            s.useEffect(
                () =>
                    A.kJ.subscribe(
                        (e) => e.inspectedExpressionPosition,
                        (e) => {
                            if (null == e) return;
                            let { columnIndex: t, rowIndex: n, source: r } = e;
                            r !== C.u.GRID_NAVIGATOR_EVENT &&
                                p({
                                    type: d.s.SET_FOCUSED_POSITION,
                                    x: t,
                                    y: n
                                });
                        }
                    ),
                [p]
            ),
            {
                getItemProps: h,
                getRowProps: g,
                gridContainerProps: E,
                handleGridContainerKeyDown: v,
                isUsingKeyboardNavigation: I
            }
        );
    },
    eo = (e, t) => {
        let [n, r] = s.useState(null);
        s.useEffect(() => {
            if (null != n) {
                var e;
                null === (e = t.current) || void 0 === e || e.scrollToSectionTop(n), r(null);
            }
        }, [t, n]),
            s.useEffect(() => {
                r(A.kJ.getState().activeCategoryIndex);
            }, [e]);
    },
    el = (e, t, n, r) => {
        s.useLayoutEffect(() => {
            if (r) {
                var e;
                null === (e = n.current) || void 0 === e || e.focus();
            }
        }, [e, t, n, r]);
    },
    eu = c()(G.to, 200),
    ec = c()(G.jA, 200),
    ed = {
        section: void 0,
        openPopoutType: void 0
    };
t.Z = s.memo(
    s.forwardRef(function (e, t) {
        var n, r;
        let i,
            { pickerIntention: o, channel: u, guildId: c, closePopout: d, emojiSize: p = X.Su.MEDIUM, hasTabWrapper: m = !1, containerContext: C = 0, includeCreateEmojiButton: D, onSelectEmoji: B, containerWidth: ea, onNavigateAway: ef, persistSearch: e_, className: ep, headerClassName: eh, analyticsOverride: em = ed, searchProps: eg = {}, wrapper: eE, shouldHidePickerActions: ev = !1, messageId: eI, renderHeader: eb, listHeaderClassName: eS, categoryListClassName: eT } = e,
            { onFocus: ey, onKeyDown: eA, autoFocus: eN = !0, accessory: eC } = eg,
            eR = (0, f.e7)([M.ZP], () => (null != c ? M.ZP.getDefaultChannel(c) : null), [c]),
            [eO, eD] = s.useState(null),
            eL = s.useRef(''),
            ex = (0, N.Iu)((e) => e.searchQuery),
            ew = s.useRef(null),
            eM = s.useRef(null),
            eP = s.useRef(null);
        null == u && null != eR && (u = eR);
        let ek = null !== (r = null !== (n = null == u ? void 0 : u.getGuildId()) && void 0 !== n ? n : c) && void 0 !== r ? r : null,
            [eU, eB] = s.useState(!1),
            eG = P.default.getCurrentUser(),
            eZ = (0, U.I5)(eG);
        s.useImperativeHandle(t, () => ({ onPickerOpen: e5 }));
        let { location: eF } = (0, E.O)(),
            { page: eV, section: ej, object: eH, openPopoutType: eY } = em,
            eW = s.useMemo(
                () => ({
                    ...eF,
                    section: null != ej ? ej : J.jXE.EMOJI_PICKER_POPOUT
                }),
                [eF, ej]
            ),
            { analyticsLocations: eK } = (0, I.ZP)(v.Z.EMOJI_PICKER),
            { diversitySurrogate: ez } = (0, f.cj)([S.ZP], () => ({ diversitySurrogate: S.ZP.diversitySurrogate })),
            eq = (0, G.DV)(ex, u, o),
            eQ = null == eq ? 0 : eq.locked.length + eq.unlocked.length,
            eX = w.d4.useSetting(),
            eJ = s.useMemo(() => new Set(eX), [eX]),
            e$ = s.useCallback((e) => {
                w.d4.updateSetting(Array.from(e));
            }, []),
            e0 = (0, R.ep)({
                gridWrapperRef: ew,
                containerWidth: ea,
                listPaddingLeft: er,
                listScrollbarWidth: 8
            }),
            {
                rowCountBySection: e1,
                sectionDescriptors: e2,
                emojiGrid: e3,
                columnCounts: e4
            } = (0, W.YH)({
                gridWidth: e0,
                channel: u,
                includeCreateEmojiButton: D,
                pickerIntention: o,
                emojiSearchResults: eq,
                collapsedSections: eJ,
                emojiPaddingHorizontal: en,
                emojiSpriteSize: p
            }),
            { newlyAddedEmojis: e6 } = (0, F.Z)(ek, o);
        (0, Z.b)({
            intention: o,
            isBurstReaction: eU,
            analyticsObject: eH
        });
        let e5 = s.useCallback(() => {
                let e = e6.length > 0 ? e6[0].id : null;
                (0, y.pr)(ek, e),
                    (0, Z.Z)({
                        intention: o,
                        isBurstReaction: eU,
                        analyticsObject: eH
                    });
            }, [e6, ek, o, eU, eH]),
            e7 = (0, W.rf)({
                pickerIntention: o,
                selectedChannel: u,
                closePopout: d,
                onSelectEmoji: B,
                setUpsellConfigs: eD,
                emojiSelectAnalytics: (e) => {
                    '' !== ex
                        ? (0, G.y$)({
                              emoji: e.emoji,
                              location: {
                                  ...eW,
                                  object: J.qAy.EMOJI
                              },
                              searchQuery: ex,
                              intention: o
                          })
                        : (0, G.fe)({
                              emoji: e.emoji,
                              location: {
                                  ...eW,
                                  object: null != eH ? eH : J.qAy.EMOJI,
                                  ...(null != eV && { page: eV })
                              },
                              pickerIntention: o,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight: e.subCategory === X.t0.NEWLY_ADDED_EMOJI && T.Z.isNewerThanLastSeen(ek, e.emoji.id),
                              isBurstReaction: eU
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, G.J1)({
                        emoji: e.emoji,
                        location: {
                            ...eW,
                            object: J.qAy.EMOJI
                        }
                    });
                }
            }),
            e8 = s.useCallback(() => {
                d(), null == ef || ef();
            }, [d, ef]),
            {
                getItemProps: e9,
                getRowProps: te,
                gridContainerProps: tt,
                handleGridContainerKeyDown: tn,
                isUsingKeyboardNavigation: tr
            } = es({
                pickerIntention: o,
                analyticsLocation: eW,
                columnCounts: e4,
                onSelectEmoji: B,
                emojiGrid: e3,
                emojiList: eM,
                channelGuildId: ek,
                isBurstReaction: eU
            });
        eo(ea, eM),
            el(ea, ez, eP, eN),
            s.useEffect(() => {
                !e_ && (0, N.ql)('');
            }, [e_]),
            s.useEffect(
                () => (
                    k.default.track(J.rMx.OPEN_POPOUT, {
                        type: null != eY ? eY : 'Emoji Picker',
                        guild_id: ek
                    }),
                    A.kJ.resetStoreState
                ),
                [eY, ek]
            ),
            s.useEffect(() => () => (0, L.Kw)(L.v6.FAVORITE_EMOJI_TOOLTIP), []),
            s.useLayoutEffect(() => {
                var e;
                let { columnIndex: t, rowIndex: n } = A.kJ.getState().inspectedExpressionPosition;
                (null === (e = e3[n]) || void 0 === e ? void 0 : e[t]) == null && 0 !== t && A.kJ.setInspectedExpressionPosition(0, 0);
            }, [e3]),
            s.useEffect(() => {
                if (('' === eL.current && '' !== ex && (0, G.PC)(eW, o), 0 === eQ && '' !== ex)) eu(eW, ex);
                else if ('' !== ex && eL.current !== ex) {
                    var e;
                    ec(eQ, null !== (e = null == eq ? void 0 : eq.locked.length) && void 0 !== e ? e : 0, eW, ex, o);
                }
                eL.current = ex;
            }, [ex, eW, eQ, eq, o]);
        let ti = null != eE ? eE : m ? 'div' : h.Dialog,
            ta = null != e0;
        if ((null == eO ? void 0 : eO.type) === W.Bg.PREMIUM) {
            let e = x.p.NONE;
            2 === C ? (e = x.p.PARENT_CONTAINER) : 1 === C && (e = x.p.TAB_PARENT_CONTAINER),
                (i = (0, a.jsx)(Q.Z, {
                    onLearnMore: e8,
                    emojiDescriptor: eO.emojiDescriptor,
                    pickerIntention: o,
                    analyticsLocation: eW,
                    onClose: () => eD(null),
                    channel: u,
                    containerContext: e
                }));
        } else
            (null == eO ? void 0 : eO.type) === W.Bg.ROLE_SUBSCRIPTION
                ? (i = (0, a.jsx)(O.Z, {
                      onClose: () => eD(null),
                      guildId: eO.guildId,
                      emojiId: eO.emojiId
                  }))
                : eU && !eZ && (i = (0, a.jsx)(V.Z, { onDismiss: () => eB(!1) }));
        let ts = (0, a.jsx)(Y.Z, {
                pickerIntention: o,
                emojiListRef: eM,
                onKeyDown: (e) => {
                    null == tn || tn(e), null == eA || eA(e);
                },
                searchBarRef: eP,
                onFocus: ey,
                autoFocus: eN,
                accessory: eC,
                headerClassName: eh,
                hasTabWrapper: m,
                diversitySurrogate: ez,
                isBurstReaction: eU,
                onBurstReactionToggle: () => {
                    var e;
                    eB(!eU), null === (e = eP.current) || void 0 === e || e.focus();
                },
                renderHeader: eb
            }),
            to = [];
        o === ee.Hz.REACTION && to.push(_.z.SUPER_REACTIONS_NITRO_MARKETING), !S.ZP.hasFavoriteEmojis(ek) && to.push(_.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tl = (0, a.jsx)(g.Z, {
            ...eW,
            children: (0, a.jsxs)(ti, {
                id: X.cZ,
                'aria-labelledby': m ? X.td : void 0,
                role: m ? 'tabpanel' : void 0,
                className: l()(et.wrapper, {
                    [et.emojiPickerHasTabWrapper]: m,
                    [et.isBurstReactionPicker]: eU && eZ
                }),
                children: [
                    m ? null : ts,
                    (0, a.jsxs)('div', {
                        className: l()(et.emojiPicker, ep),
                        onScroll: ei,
                        children: [
                            m ? ts : null,
                            (0, a.jsxs)('div', {
                                className: et.bodyWrapper,
                                ref: ew,
                                children: [
                                    (0, a.jsx)(q.Z, {
                                        channel: u,
                                        closePopout: d
                                    }),
                                    (0, a.jsx)(b.ZP, {
                                        contentTypes: to,
                                        children: (e) => {
                                            let { visibleContent: t, markAsDismissed: n } = e;
                                            if (t === _.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP) return (0, a.jsx)(H.Z, { markAsDismissed: () => n($.L.UNKNOWN) });
                                        }
                                    }),
                                    ev
                                        ? null
                                        : (0, a.jsx)('div', {
                                              className: et.emojiPickerListWrapper,
                                              id: X.Vr,
                                              ...tt,
                                              children: ta
                                                  ? (0, a.jsx)(z.Z, {
                                                        collapsedSections: eJ,
                                                        diversitySurrogate: ez,
                                                        emojiGrid: e3,
                                                        emojiListRef: eM,
                                                        emojiSize: p,
                                                        getEmojiItemProps: e9,
                                                        getEmojiRowProps: te,
                                                        gridWidth: e0,
                                                        isUsingKeyboardNavigation: tr,
                                                        onEmojiSelect: (e, t) => {
                                                            e7(e, {
                                                                ...t,
                                                                isBurst: eU
                                                            });
                                                        },
                                                        setUpsellConfigs: eD,
                                                        rowCount: e3.length,
                                                        rowCountBySection: e1,
                                                        sectionDescriptors: e2,
                                                        setCollapsedSections: e$,
                                                        channelGuildId: ek,
                                                        messageId: eI,
                                                        isBurstReaction: eU,
                                                        listHeaderClassName: eS
                                                    })
                                                  : null
                                          })
                                ]
                            }),
                            (0, a.jsx)(K.k, {
                                emojiGrid: e3,
                                className: et.inspector,
                                guildId: ek,
                                pickerIntention: o,
                                channel: u
                            }),
                            i
                        ]
                    }),
                    ev
                        ? null
                        : (0, a.jsx)(j.Z, {
                              className: l()(et.categoryList, eT),
                              emojiListRef: eM,
                              sectionDescriptors: e2,
                              intention: o,
                              channel: u
                          })
                ]
            })
        });
        return (0, a.jsx)(I.Gt, {
            value: eK,
            children: tl
        });
    })
);
