r.d(n, {
    v: function () {
        return i;
    }
});
var i,
    a = r(47120);
var s = r(653041);
var o = r(200651),
    l = r(192379),
    u = r(120356),
    c = r.n(u),
    d = r(954955),
    f = r.n(d),
    _ = r(611144),
    h = r(442837),
    p = r(704215),
    m = r(477690),
    g = r(481060),
    E = r(80932),
    v = r(410575),
    I = r(2052),
    T = r(100527),
    b = r(906732),
    y = r(243778),
    S = r(339085),
    A = r(438332),
    N = r(664437),
    C = r(806966),
    R = r(28546),
    O = r(691251),
    D = r(98528),
    L = r(770812),
    x = r(434404),
    w = r(536442),
    P = r(609218),
    M = r(695346),
    k = r(984933),
    U = r(594174),
    B = r(626135),
    G = r(111361),
    Z = r(624138),
    F = r(543241),
    V = r(253696),
    j = r(199257),
    H = r(636411),
    Y = r(380331),
    W = r(170762),
    K = r(22363),
    z = r(784222),
    q = r(141507),
    Q = r(669040),
    X = r(901963),
    J = r(212263),
    $ = r(149203),
    ee = r(981631),
    et = r(921944),
    en = r(185923),
    er = r(405156);
let ei = (0, Z.Mg)(m.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    ea = (0, Z.Mg)(m.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    es = 8,
    eo = (e) => e.stopPropagation();
!(function (e) {
    (e[(e.NONE = 0)] = 'NONE'), (e[(e.TABS_EXPRESSION_PICKER = 1)] = 'TABS_EXPRESSION_PICKER'), (e[(e.NO_TABS_EXPRESSION_PICKER = 2)] = 'NO_TABS_EXPRESSION_PICKER');
})(i || (i = {}));
let el = (e, n) => {
        C.kJ.setInspectedExpressionPosition(e, n, O.u.GRID_NAVIGATOR_EVENT);
    },
    eu = (e) => {
        let { analyticsLocation: n, pickerIntention: r, columnCounts: i, onSelectEmoji: a, emojiGrid: s, emojiList: o, channelGuildId: u, isBurstReaction: c } = e,
            d = (0, h.e7)([S.ZP], () => S.ZP.getDisambiguatedEmojiContext(u), [u]),
            f = l.useCallback(
                (e, i) => {
                    switch (e.type) {
                        case z.ld.CREATE_EMOJI:
                            a(void 0, !0), x.Z.open(e.guildId, ee.pNK.EMOJI);
                            return;
                        case z.ld.EMOJI: {
                            if (null != e.emoji && i.altKey) {
                                d.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                    ? (0, E.Xe)(e.emoji)
                                    : ((0, F.J1)({
                                          emoji: e.emoji,
                                          location: {
                                              ...n,
                                              object: ee.qAy.EMOJI
                                          }
                                      }),
                                      (0, E.$K)(e.emoji));
                                return;
                            }
                            let s = {
                                page: null != u ? ee.ZY5.GUILD_CHANNEL : ee.ZY5.DM_CHANNEL,
                                section: ee.jXE.EMOJI_PICKER_POPOUT,
                                object: ee.qAy.EMOJI
                            };
                            c &&
                                (s = {
                                    page: null != u ? ee.ZY5.GUILD_CHANNEL : ee.ZY5.DM_CHANNEL,
                                    section: ee.jXE.EMOJI_PICKER_POPOUT,
                                    object: ee.qAy.EMOJI
                                }),
                                (0, F.fe)({
                                    emoji: e.emoji,
                                    location: s,
                                    pickerIntention: r,
                                    category: e.category,
                                    subCategory: e.subCategory,
                                    newlyAddedHighlight: e.subCategory === $.t0.NEWLY_ADDED_EMOJI && A.Z.isNewerThanLastSeen(u, e.emoji.id)
                                }),
                                a(e.emoji, !i.shiftKey, c);
                        }
                    }
                },
                [a, u, r, d, n, c]
            ),
            {
                gridDispatch: p,
                getItemProps: m,
                getRowProps: g,
                gridContainerProps: v,
                handleGridContainerKeyDown: I,
                isUsingKeyboardNavigation: T
            } = (0, D.VO)({
                columnCounts: i,
                gridNavigatorId: $.Vr,
                itemGrid: s,
                itemList: o,
                onGridNavigatorItemSelect: f,
                onGridNavigatorPositionChange: el
            });
        return (
            l.useEffect(
                () =>
                    C.kJ.subscribe(
                        (e) => e.inspectedExpressionPosition,
                        (e) => {
                            if (null == e) return;
                            let { columnIndex: n, rowIndex: r, source: i } = e;
                            i !== O.u.GRID_NAVIGATOR_EVENT &&
                                p({
                                    type: _.s.SET_FOCUSED_POSITION,
                                    x: n,
                                    y: r
                                });
                        }
                    ),
                [p]
            ),
            {
                getItemProps: m,
                getRowProps: g,
                gridContainerProps: v,
                handleGridContainerKeyDown: I,
                isUsingKeyboardNavigation: T
            }
        );
    },
    ec = (e, n) => {
        let [r, i] = l.useState(null);
        l.useEffect(() => {
            if (null != r) {
                var e;
                null === (e = n.current) || void 0 === e || e.scrollToSectionTop(r), i(null);
            }
        }, [n, r]),
            l.useEffect(() => {
                i(C.kJ.getState().activeCategoryIndex);
            }, [e]);
    },
    ed = (e, n, r, i) => {
        l.useLayoutEffect(() => {
            if (i) {
                var e;
                null === (e = r.current) || void 0 === e || e.focus();
            }
        }, [e, n, r, i]);
    },
    ef = 200,
    e_ = f()(F.to, ef),
    eh = f()(F.jA, ef),
    ep = {
        section: void 0,
        openPopoutType: void 0
    },
    em = function (e, n) {
        var r, i;
        let a,
            { pickerIntention: s, channel: u, guildId: d, closePopout: f, emojiSize: _ = $.Su.MEDIUM, hasTabWrapper: m = !1, containerContext: E = 0, includeCreateEmojiButton: O, onSelectEmoji: x, containerWidth: Z, onNavigateAway: el, persistSearch: ef, className: em, headerClassName: eg, analyticsOverride: eE = ep, searchProps: ev = {}, wrapper: eI, shouldHidePickerActions: eT = !1, messageId: eb, renderHeader: ey, listHeaderClassName: eS, categoryListClassName: eA } = e,
            { onFocus: eN, onKeyDown: eC, autoFocus: eR = !0, accessory: eO } = ev,
            eD = (0, h.e7)([k.ZP], () => (null != d ? k.ZP.getDefaultChannel(d) : null), [d]),
            [eL, ex] = l.useState(null),
            ew = l.useRef(''),
            eP = (0, R.Iu)((e) => e.searchQuery),
            eM = l.useRef(null),
            ek = l.useRef(null),
            eU = l.useRef(null);
        null == u && null != eD && (u = eD);
        let eB = null !== (i = null !== (r = null == u ? void 0 : u.getGuildId()) && void 0 !== r ? r : d) && void 0 !== i ? i : null,
            [eG, eZ] = l.useState(!1),
            eF = U.default.getCurrentUser(),
            eV = (0, G.I5)(eF);
        l.useImperativeHandle(n, () => ({ onPickerOpen: e8 }));
        let { location: ej } = (0, I.O)(),
            { page: eH, section: eY, object: eW, openPopoutType: eK } = eE,
            ez = l.useMemo(
                () => ({
                    ...ej,
                    section: null != eY ? eY : ee.jXE.EMOJI_PICKER_POPOUT
                }),
                [ej, eY]
            ),
            { analyticsLocations: eq } = (0, b.ZP)(T.Z.EMOJI_PICKER),
            { diversitySurrogate: eQ } = (0, h.cj)([S.ZP], () => ({ diversitySurrogate: S.ZP.diversitySurrogate })),
            eX = (0, F.DV)(eP, u, s),
            eJ = null == eX ? 0 : eX.locked.length + eX.unlocked.length,
            e$ = M.d4.useSetting(),
            e0 = l.useMemo(() => new Set(e$), [e$]),
            e1 = l.useCallback((e) => {
                M.d4.updateSetting(Array.from(e));
            }, []),
            e2 = (0, D.ep)({
                gridWrapperRef: eM,
                containerWidth: Z,
                listPaddingLeft: ea,
                listScrollbarWidth: es
            }),
            {
                rowCountBySection: e3,
                sectionDescriptors: e4,
                emojiGrid: e6,
                columnCounts: e5
            } = (0, z.YH)({
                gridWidth: e2,
                channel: u,
                includeCreateEmojiButton: O,
                pickerIntention: s,
                emojiSearchResults: eX,
                collapsedSections: e0,
                emojiPaddingHorizontal: ei,
                emojiSpriteSize: _
            }),
            { newlyAddedEmojis: e7 } = (0, j.Z)(eB, s);
        (0, V.b)({
            intention: s,
            isBurstReaction: eG,
            analyticsObject: eW
        });
        let e8 = l.useCallback(() => {
                let e = e7.length > 0 ? e7[0].id : null;
                (0, N.pr)(eB, e),
                    (0, V.Z)({
                        intention: s,
                        isBurstReaction: eG,
                        analyticsObject: eW
                    });
            }, [e7, eB, s, eG, eW]),
            e9 = (0, z.rf)({
                pickerIntention: s,
                selectedChannel: u,
                closePopout: f,
                onSelectEmoji: x,
                setUpsellConfigs: ex,
                emojiSelectAnalytics: (e) => {
                    '' !== eP
                        ? (0, F.y$)({
                              emoji: e.emoji,
                              location: {
                                  ...ez,
                                  object: ee.qAy.EMOJI
                              },
                              searchQuery: eP,
                              intention: s
                          })
                        : (0, F.fe)({
                              emoji: e.emoji,
                              location: {
                                  ...ez,
                                  object: null != eW ? eW : ee.qAy.EMOJI,
                                  ...(null != eH && { page: eH })
                              },
                              pickerIntention: s,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight: e.subCategory === $.t0.NEWLY_ADDED_EMOJI && A.Z.isNewerThanLastSeen(eB, e.emoji.id),
                              isBurstReaction: eG
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, F.J1)({
                        emoji: e.emoji,
                        location: {
                            ...ez,
                            object: ee.qAy.EMOJI
                        }
                    });
                }
            }),
            te = l.useCallback(() => {
                f(), null == el || el();
            }, [f, el]),
            {
                getItemProps: tt,
                getRowProps: tn,
                gridContainerProps: tr,
                handleGridContainerKeyDown: ti,
                isUsingKeyboardNavigation: ta
            } = eu({
                pickerIntention: s,
                analyticsLocation: ez,
                columnCounts: e5,
                onSelectEmoji: x,
                emojiGrid: e6,
                emojiList: ek,
                channelGuildId: eB,
                isBurstReaction: eG
            });
        ec(Z, ek),
            ed(Z, eQ, eU, eR),
            l.useEffect(() => {
                !ef && (0, R.ql)('');
            }, [ef]),
            l.useEffect(
                () => (
                    B.default.track(ee.rMx.OPEN_POPOUT, {
                        type: null != eK ? eK : 'Emoji Picker',
                        guild_id: eB
                    }),
                    C.kJ.resetStoreState
                ),
                [eK, eB]
            ),
            l.useEffect(() => () => (0, w.Kw)(w.v6.FAVORITE_EMOJI_TOOLTIP), []),
            l.useLayoutEffect(() => {
                var e;
                let { columnIndex: n, rowIndex: r } = C.kJ.getState().inspectedExpressionPosition;
                (null === (e = e6[r]) || void 0 === e ? void 0 : e[n]) == null && 0 !== n && C.kJ.setInspectedExpressionPosition(0, 0);
            }, [e6]),
            l.useEffect(() => {
                if (('' === ew.current && '' !== eP && (0, F.PC)(ez, s), 0 === eJ && '' !== eP)) e_(ez, eP);
                else if ('' !== eP && ew.current !== eP) {
                    var e;
                    eh(eJ, null !== (e = null == eX ? void 0 : eX.locked.length) && void 0 !== e ? e : 0, ez, eP, s);
                }
                ew.current = eP;
            }, [eP, ez, eJ, eX, s]);
        let ts = null != eI ? eI : m ? 'div' : g.Dialog,
            to = null != e2;
        if ((null == eL ? void 0 : eL.type) === z.Bg.PREMIUM) {
            let e = P.p.NONE;
            2 === E ? (e = P.p.PARENT_CONTAINER) : 1 === E && (e = P.p.TAB_PARENT_CONTAINER),
                (a = (0, o.jsx)(J.Z, {
                    onLearnMore: te,
                    emojiDescriptor: eL.emojiDescriptor,
                    pickerIntention: s,
                    analyticsLocation: ez,
                    onClose: () => ex(null),
                    channel: u,
                    containerContext: e
                }));
        } else
            (null == eL ? void 0 : eL.type) === z.Bg.ROLE_SUBSCRIPTION
                ? (a = (0, o.jsx)(L.Z, {
                      onClose: () => ex(null),
                      guildId: eL.guildId,
                      emojiId: eL.emojiId
                  }))
                : eG && !eV && (a = (0, o.jsx)(H.Z, { onDismiss: () => eZ(!1) }));
        let tl = (e, n) => {
                e9(e, {
                    ...n,
                    isBurst: eG
                });
            },
            tu = () => {
                var e;
                eZ(!eG), null === (e = eU.current) || void 0 === e || e.focus();
            },
            tc = (0, o.jsx)(K.Z, {
                pickerIntention: s,
                emojiListRef: ek,
                onKeyDown: (e) => {
                    null == ti || ti(e), null == eC || eC(e);
                },
                searchBarRef: eU,
                onFocus: eN,
                autoFocus: eR,
                accessory: eO,
                headerClassName: eg,
                hasTabWrapper: m,
                diversitySurrogate: eQ,
                isBurstReaction: eG,
                onBurstReactionToggle: tu,
                renderHeader: ey
            }),
            td = [];
        s === en.Hz.REACTION && td.push(p.z.SUPER_REACTIONS_NITRO_MARKETING), !S.ZP.hasFavoriteEmojis(eB) && td.push(p.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tf = (0, o.jsx)(v.Z, {
            ...ez,
            children: (0, o.jsxs)(ts, {
                id: $.cZ,
                'aria-labelledby': m ? $.td : void 0,
                role: m ? 'tabpanel' : void 0,
                className: c()(er.wrapper, {
                    [er.emojiPickerHasTabWrapper]: m,
                    [er.isBurstReactionPicker]: eG && eV
                }),
                children: [
                    m ? null : tc,
                    (0, o.jsxs)('div', {
                        className: c()(er.emojiPicker, em),
                        onScroll: eo,
                        children: [
                            m ? tc : null,
                            (0, o.jsxs)('div', {
                                className: er.bodyWrapper,
                                ref: eM,
                                children: [
                                    (0, o.jsx)(X.Z, {
                                        channel: u,
                                        closePopout: f
                                    }),
                                    (0, o.jsx)(y.ZP, {
                                        contentTypes: td,
                                        children: (e) => {
                                            let { visibleContent: n, markAsDismissed: r } = e;
                                            if (n === p.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP) return (0, o.jsx)(W.Z, { markAsDismissed: () => r(et.L.UNKNOWN) });
                                        }
                                    }),
                                    eT
                                        ? null
                                        : (0, o.jsx)('div', {
                                              className: er.emojiPickerListWrapper,
                                              id: $.Vr,
                                              ...tr,
                                              children: to
                                                  ? (0, o.jsx)(Q.Z, {
                                                        collapsedSections: e0,
                                                        diversitySurrogate: eQ,
                                                        emojiGrid: e6,
                                                        emojiListRef: ek,
                                                        emojiSize: _,
                                                        getEmojiItemProps: tt,
                                                        getEmojiRowProps: tn,
                                                        gridWidth: e2,
                                                        isUsingKeyboardNavigation: ta,
                                                        onEmojiSelect: tl,
                                                        setUpsellConfigs: ex,
                                                        rowCount: e6.length,
                                                        rowCountBySection: e3,
                                                        sectionDescriptors: e4,
                                                        setCollapsedSections: e1,
                                                        channelGuildId: eB,
                                                        messageId: eb,
                                                        isBurstReaction: eG,
                                                        listHeaderClassName: eS
                                                    })
                                                  : null
                                          })
                                ]
                            }),
                            (0, o.jsx)(q.k, {
                                emojiGrid: e6,
                                className: er.inspector,
                                guildId: eB,
                                pickerIntention: s,
                                channel: u
                            }),
                            a
                        ]
                    }),
                    eT
                        ? null
                        : (0, o.jsx)(Y.Z, {
                              className: c()(er.categoryList, eA),
                              emojiListRef: ek,
                              sectionDescriptors: e4,
                              intention: s,
                              channel: u
                          })
                ]
            })
        });
        return (0, o.jsx)(b.Gt, {
            value: eq,
            children: tf
        });
    };
n.Z = l.memo(l.forwardRef(em));
