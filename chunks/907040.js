n.d(t, {
    v: function () {
        return r;
    }
}),
    n(47120),
    n(653041);
var r,
    i,
    a = n(735250),
    s = n(470079),
    o = n(120356),
    l = n.n(o),
    u = n(954955),
    c = n.n(u),
    d = n(611144),
    _ = n(442837),
    E = n(704215),
    f = n(477690),
    h = n(481060),
    p = n(80932),
    I = n(410575),
    m = n(2052),
    T = n(100527),
    S = n(906732),
    g = n(243778),
    A = n(339085),
    N = n(438332),
    O = n(664437),
    R = n(806966),
    v = n(28546),
    C = n(691251),
    L = n(98528),
    y = n(770812),
    D = n(434404),
    b = n(536442),
    M = n(609218),
    P = n(695346),
    U = n(984933),
    w = n(594174),
    x = n(626135),
    G = n(111361),
    k = n(624138),
    B = n(543241),
    F = n(253696),
    V = n(199257),
    H = n(636411),
    Z = n(380331),
    Y = n(170762),
    j = n(22363),
    W = n(784222),
    K = n(141507),
    z = n(669040),
    q = n(901963),
    Q = n(212263),
    X = n(149203),
    $ = n(981631),
    J = n(921944),
    ee = n(185923),
    et = n(74353);
let en = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    er = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    ei = (e) => e.stopPropagation();
((i = r || (r = {}))[(i.NONE = 0)] = 'NONE'), (i[(i.TABS_EXPRESSION_PICKER = 1)] = 'TABS_EXPRESSION_PICKER'), (i[(i.NO_TABS_EXPRESSION_PICKER = 2)] = 'NO_TABS_EXPRESSION_PICKER');
let ea = (e, t) => {
        R.kJ.setInspectedExpressionPosition(e, t, C.u.GRID_NAVIGATOR_EVENT);
    },
    es = (e) => {
        let { analyticsLocation: t, pickerIntention: n, columnCounts: r, onSelectEmoji: i, emojiGrid: a, emojiList: o, channelGuildId: l, isBurstReaction: u } = e,
            c = (0, _.e7)([A.ZP], () => A.ZP.getDisambiguatedEmojiContext(l), [l]),
            E = s.useCallback(
                (e, r) => {
                    switch (e.type) {
                        case W.ld.CREATE_EMOJI:
                            i(void 0, !0), D.Z.open(e.guildId, $.pNK.EMOJI);
                            return;
                        case W.ld.EMOJI: {
                            if (null != e.emoji && r.altKey) {
                                c.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                    ? (0, p.Xe)(e.emoji)
                                    : ((0, B.J1)({
                                          emoji: e.emoji,
                                          location: {
                                              ...t,
                                              object: $.qAy.EMOJI
                                          }
                                      }),
                                      (0, p.$K)(e.emoji));
                                return;
                            }
                            let a = {
                                page: null != l ? $.ZY5.GUILD_CHANNEL : $.ZY5.DM_CHANNEL,
                                section: $.jXE.EMOJI_PICKER_POPOUT,
                                object: $.qAy.EMOJI
                            };
                            u &&
                                (a = {
                                    page: null != l ? $.ZY5.GUILD_CHANNEL : $.ZY5.DM_CHANNEL,
                                    section: $.jXE.EMOJI_PICKER_POPOUT,
                                    object: $.qAy.EMOJI
                                }),
                                (0, B.fe)({
                                    emoji: e.emoji,
                                    location: a,
                                    pickerIntention: n,
                                    category: e.category,
                                    subCategory: e.subCategory,
                                    newlyAddedHighlight: e.subCategory === X.t0.NEWLY_ADDED_EMOJI && N.Z.isNewerThanLastSeen(l, e.emoji.id)
                                }),
                                i(e.emoji, !r.shiftKey, u);
                        }
                    }
                },
                [i, l, n, c, t, u]
            ),
            {
                gridDispatch: f,
                getItemProps: h,
                getRowProps: I,
                gridContainerProps: m,
                handleGridContainerKeyDown: T,
                isUsingKeyboardNavigation: S
            } = (0, L.VO)({
                columnCounts: r,
                gridNavigatorId: X.Vr,
                itemGrid: a,
                itemList: o,
                onGridNavigatorItemSelect: E,
                onGridNavigatorPositionChange: ea
            });
        return (
            s.useEffect(
                () =>
                    R.kJ.useStore.subscribe(
                        (e) => {
                            if (null == e) return;
                            let { columnIndex: t, rowIndex: n, source: r } = e;
                            r !== C.u.GRID_NAVIGATOR_EVENT &&
                                f({
                                    type: d.s.SET_FOCUSED_POSITION,
                                    x: t,
                                    y: n
                                });
                        },
                        (e) => e.inspectedExpressionPosition
                    ),
                [f]
            ),
            {
                getItemProps: h,
                getRowProps: I,
                gridContainerProps: m,
                handleGridContainerKeyDown: T,
                isUsingKeyboardNavigation: S
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
                r(R.kJ.getState().activeCategoryIndex);
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
    eu = c()(B.to, 200),
    ec = c()(B.jA, 200),
    ed = {
        section: void 0,
        openPopoutType: void 0
    };
t.Z = s.memo(
    s.forwardRef(function (e, t) {
        var n, r;
        let i,
            { pickerIntention: o, channel: u, guildId: c, closePopout: d, emojiSize: f = X.Su.MEDIUM, hasTabWrapper: p = !1, containerContext: C = 0, includeCreateEmojiButton: D, onSelectEmoji: k, containerWidth: ea, onNavigateAway: e_, persistSearch: eE, className: ef, headerClassName: eh, analyticsOverride: ep = ed, searchProps: eI = {}, wrapper: em, shouldHidePickerActions: eT = !1, messageId: eS, renderHeader: eg, listHeaderClassName: eA, categoryListClassName: eN } = e,
            { onFocus: eO, onKeyDown: eR, autoFocus: ev = !0, accessory: eC } = eI,
            eL = (0, _.e7)([U.ZP], () => (null != c ? U.ZP.getDefaultChannel(c) : null), [c]),
            [ey, eD] = s.useState(null),
            eb = s.useRef(''),
            eM = (0, v.Iu)((e) => e.searchQuery),
            eP = s.useRef(null),
            eU = s.useRef(null),
            ew = s.useRef(null);
        null == u && null != eL && (u = eL);
        let ex = null !== (r = null !== (n = null == u ? void 0 : u.getGuildId()) && void 0 !== n ? n : c) && void 0 !== r ? r : null,
            [eG, ek] = s.useState(!1),
            eB = w.default.getCurrentUser(),
            eF = (0, G.I5)(eB);
        s.useImperativeHandle(t, () => ({ onPickerOpen: e6 }));
        let { location: eV } = (0, m.O)(),
            { page: eH, section: eZ, object: eY, openPopoutType: ej } = ep,
            eW = s.useMemo(
                () => ({
                    ...eV,
                    section: null != eZ ? eZ : $.jXE.EMOJI_PICKER_POPOUT
                }),
                [eV, eZ]
            ),
            { analyticsLocations: eK } = (0, S.ZP)(T.Z.EMOJI_PICKER),
            { diversitySurrogate: ez } = (0, _.cj)([A.ZP], () => ({ diversitySurrogate: A.ZP.diversitySurrogate })),
            eq = (0, B.DV)(eM, u, o),
            eQ = null == eq ? 0 : eq.locked.length + eq.unlocked.length,
            eX = P.d4.useSetting(),
            e$ = s.useMemo(() => new Set(eX), [eX]),
            eJ = s.useCallback((e) => {
                P.d4.updateSetting(Array.from(e));
            }, []),
            e0 = (0, L.ep)({
                gridWrapperRef: eP,
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
                collapsedSections: e$,
                emojiPaddingHorizontal: en,
                emojiSpriteSize: f
            }),
            { newlyAddedEmojis: e5 } = (0, V.Z)(ex, o);
        (0, F.b)({
            intention: o,
            isBurstReaction: eG,
            analyticsObject: eY
        });
        let e6 = s.useCallback(() => {
                let e = e5.length > 0 ? e5[0].id : null;
                (0, O.pr)(ex, e),
                    (0, F.Z)({
                        intention: o,
                        isBurstReaction: eG,
                        analyticsObject: eY
                    });
            }, [e5, ex, o, eG, eY]),
            e7 = (0, W.rf)({
                pickerIntention: o,
                selectedChannel: u,
                closePopout: d,
                onSelectEmoji: k,
                setUpsellConfigs: eD,
                emojiSelectAnalytics: (e) => {
                    '' !== eM
                        ? (0, B.y$)({
                              emoji: e.emoji,
                              location: {
                                  ...eW,
                                  object: $.qAy.EMOJI
                              },
                              searchQuery: eM,
                              intention: o
                          })
                        : (0, B.fe)({
                              emoji: e.emoji,
                              location: {
                                  ...eW,
                                  object: null != eY ? eY : $.qAy.EMOJI,
                                  ...(null != eH && { page: eH })
                              },
                              pickerIntention: o,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight: e.subCategory === X.t0.NEWLY_ADDED_EMOJI && N.Z.isNewerThanLastSeen(ex, e.emoji.id),
                              isBurstReaction: eG
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, B.J1)({
                        emoji: e.emoji,
                        location: {
                            ...eW,
                            object: $.qAy.EMOJI
                        }
                    });
                }
            }),
            e8 = s.useCallback(() => {
                d(), null == e_ || e_();
            }, [d, e_]),
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
                onSelectEmoji: k,
                emojiGrid: e3,
                emojiList: eU,
                channelGuildId: ex,
                isBurstReaction: eG
            });
        eo(ea, eU),
            el(ea, ez, ew, ev),
            s.useEffect(() => {
                !eE && (0, v.ql)('');
            }, [eE]),
            s.useEffect(
                () => (
                    x.default.track($.rMx.OPEN_POPOUT, {
                        type: null != ej ? ej : 'Emoji Picker',
                        guild_id: ex
                    }),
                    R.kJ.resetStoreState
                ),
                [ej, ex]
            ),
            s.useEffect(() => () => (0, b.Kw)(b.v6.FAVORITE_EMOJI_TOOLTIP), []),
            s.useLayoutEffect(() => {
                var e;
                let { columnIndex: t, rowIndex: n } = R.kJ.getState().inspectedExpressionPosition;
                (null === (e = e3[n]) || void 0 === e ? void 0 : e[t]) == null && 0 !== t && R.kJ.setInspectedExpressionPosition(0, 0);
            }, [e3]),
            s.useEffect(() => {
                if (('' === eb.current && '' !== eM && (0, B.PC)(eW, o), 0 === eQ && '' !== eM)) eu(eW, eM);
                else if ('' !== eM && eb.current !== eM) {
                    var e;
                    ec(eQ, null !== (e = null == eq ? void 0 : eq.locked.length) && void 0 !== e ? e : 0, eW, eM, o);
                }
                eb.current = eM;
            }, [eM, eW, eQ, eq, o]);
        let ti = null != em ? em : p ? 'div' : h.Dialog,
            ta = null != e0;
        if ((null == ey ? void 0 : ey.type) === W.Bg.PREMIUM) {
            let e = M.p.NONE;
            2 === C ? (e = M.p.PARENT_CONTAINER) : 1 === C && (e = M.p.TAB_PARENT_CONTAINER),
                (i = (0, a.jsx)(Q.Z, {
                    onLearnMore: e8,
                    emojiDescriptor: ey.emojiDescriptor,
                    pickerIntention: o,
                    analyticsLocation: eW,
                    onClose: () => eD(null),
                    channel: u,
                    containerContext: e
                }));
        } else
            (null == ey ? void 0 : ey.type) === W.Bg.ROLE_SUBSCRIPTION
                ? (i = (0, a.jsx)(y.Z, {
                      onClose: () => eD(null),
                      guildId: ey.guildId,
                      emojiId: ey.emojiId
                  }))
                : eG && !eF && (i = (0, a.jsx)(H.Z, { onDismiss: () => ek(!1) }));
        let ts = (0, a.jsx)(j.Z, {
                pickerIntention: o,
                emojiListRef: eU,
                onKeyDown: (e) => {
                    null == tn || tn(e), null == eR || eR(e);
                },
                searchBarRef: ew,
                onFocus: eO,
                autoFocus: ev,
                accessory: eC,
                headerClassName: eh,
                hasTabWrapper: p,
                diversitySurrogate: ez,
                isBurstReaction: eG,
                onBurstReactionToggle: () => {
                    var e;
                    ek(!eG), null === (e = ew.current) || void 0 === e || e.focus();
                },
                renderHeader: eg
            }),
            to = [];
        o === ee.Hz.REACTION && to.push(E.z.SUPER_REACTIONS_NITRO_MARKETING), !A.ZP.hasFavoriteEmojis(ex) && to.push(E.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tl = (0, a.jsx)(I.Z, {
            ...eW,
            children: (0, a.jsxs)(ti, {
                id: X.cZ,
                'aria-labelledby': p ? X.td : void 0,
                role: p ? 'tabpanel' : void 0,
                className: l()(et.wrapper, {
                    [et.emojiPickerHasTabWrapper]: p,
                    [et.isBurstReactionPicker]: eG && eF
                }),
                children: [
                    p ? null : ts,
                    (0, a.jsxs)('div', {
                        className: l()(et.emojiPicker, ef),
                        onScroll: ei,
                        children: [
                            p ? ts : null,
                            (0, a.jsxs)('div', {
                                className: et.bodyWrapper,
                                ref: eP,
                                children: [
                                    (0, a.jsx)(q.Z, {
                                        channel: u,
                                        closePopout: d
                                    }),
                                    (0, a.jsx)(g.ZP, {
                                        contentTypes: to,
                                        children: (e) => {
                                            let { visibleContent: t, markAsDismissed: n } = e;
                                            if (t === E.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP) return (0, a.jsx)(Y.Z, { markAsDismissed: () => n(J.L.UNKNOWN) });
                                        }
                                    }),
                                    eT
                                        ? null
                                        : (0, a.jsx)('div', {
                                              className: et.emojiPickerListWrapper,
                                              id: X.Vr,
                                              ...tt,
                                              children: ta
                                                  ? (0, a.jsx)(z.Z, {
                                                        collapsedSections: e$,
                                                        diversitySurrogate: ez,
                                                        emojiGrid: e3,
                                                        emojiListRef: eU,
                                                        emojiSize: f,
                                                        getEmojiItemProps: e9,
                                                        getEmojiRowProps: te,
                                                        gridWidth: e0,
                                                        isUsingKeyboardNavigation: tr,
                                                        onEmojiSelect: (e, t) => {
                                                            e7(e, {
                                                                ...t,
                                                                isBurst: eG
                                                            });
                                                        },
                                                        setUpsellConfigs: eD,
                                                        rowCount: e3.length,
                                                        rowCountBySection: e1,
                                                        sectionDescriptors: e2,
                                                        setCollapsedSections: eJ,
                                                        channelGuildId: ex,
                                                        messageId: eS,
                                                        isBurstReaction: eG,
                                                        listHeaderClassName: eA
                                                    })
                                                  : null
                                          })
                                ]
                            }),
                            (0, a.jsx)(K.k, {
                                emojiGrid: e3,
                                className: et.inspector,
                                guildId: ex,
                                pickerIntention: o,
                                channel: u
                            }),
                            i
                        ]
                    }),
                    eT
                        ? null
                        : (0, a.jsx)(Z.Z, {
                              className: l()(et.categoryList, eN),
                              emojiListRef: eU,
                              sectionDescriptors: e2,
                              intention: o,
                              channel: u
                          })
                ]
            })
        });
        return (0, a.jsx)(S.Gt, {
            value: eK,
            children: tl
        });
    })
);
