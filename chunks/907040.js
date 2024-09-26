n.d(t, {
    v: function () {
        return r;
    }
});
var r,
    i = n(47120);
var a = n(653041);
var o = n(735250),
    s = n(470079),
    l = n(120356),
    u = n.n(l),
    c = n(954955),
    d = n.n(c),
    _ = n(611144),
    E = n(442837),
    f = n(704215),
    h = n(477690),
    p = n(481060),
    m = n(80932),
    I = n(410575),
    T = n(2052),
    g = n(100527),
    S = n(906732),
    A = n(243778),
    v = n(339085),
    N = n(438332),
    O = n(664437),
    R = n(806966),
    C = n(28546),
    y = n(691251),
    L = n(98528),
    b = n(770812),
    D = n(434404),
    M = n(536442),
    P = n(609218),
    U = n(695346),
    w = n(984933),
    x = n(594174),
    G = n(626135),
    k = n(111361),
    B = n(624138),
    F = n(543241),
    Z = n(253696),
    V = n(199257),
    H = n(636411),
    Y = n(380331),
    j = n(170762),
    W = n(22363),
    K = n(784222),
    z = n(141507),
    q = n(669040),
    Q = n(901963),
    X = n(212263),
    $ = n(149203),
    J = n(981631),
    ee = n(921944),
    et = n(185923),
    en = n(74353);
let er = (0, B.Mg)(h.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    ei = (0, B.Mg)(h.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    ea = 8,
    eo = (e) => e.stopPropagation();
!(function (e) {
    (e[(e.NONE = 0)] = 'NONE'), (e[(e.TABS_EXPRESSION_PICKER = 1)] = 'TABS_EXPRESSION_PICKER'), (e[(e.NO_TABS_EXPRESSION_PICKER = 2)] = 'NO_TABS_EXPRESSION_PICKER');
})(r || (r = {}));
let es = (e, t) => {
        R.kJ.setInspectedExpressionPosition(e, t, y.u.GRID_NAVIGATOR_EVENT);
    },
    el = (e) => {
        let { analyticsLocation: t, pickerIntention: n, columnCounts: r, onSelectEmoji: i, emojiGrid: a, emojiList: o, channelGuildId: l, isBurstReaction: u } = e,
            c = (0, E.e7)([v.ZP], () => v.ZP.getDisambiguatedEmojiContext(l), [l]),
            d = s.useCallback(
                (e, r) => {
                    switch (e.type) {
                        case K.ld.CREATE_EMOJI:
                            i(void 0, !0), D.Z.open(e.guildId, J.pNK.EMOJI);
                            return;
                        case K.ld.EMOJI: {
                            if (null != e.emoji && r.altKey) {
                                c.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                    ? (0, m.Xe)(e.emoji)
                                    : ((0, F.J1)({
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
                                (0, F.fe)({
                                    emoji: e.emoji,
                                    location: a,
                                    pickerIntention: n,
                                    category: e.category,
                                    subCategory: e.subCategory,
                                    newlyAddedHighlight: e.subCategory === $.t0.NEWLY_ADDED_EMOJI && N.Z.isNewerThanLastSeen(l, e.emoji.id)
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
                getRowProps: p,
                gridContainerProps: I,
                handleGridContainerKeyDown: T,
                isUsingKeyboardNavigation: g
            } = (0, L.VO)({
                columnCounts: r,
                gridNavigatorId: $.Vr,
                itemGrid: a,
                itemList: o,
                onGridNavigatorItemSelect: d,
                onGridNavigatorPositionChange: es
            });
        return (
            s.useEffect(
                () =>
                    R.kJ.useStore.subscribe(
                        (e) => {
                            if (null == e) return;
                            let { columnIndex: t, rowIndex: n, source: r } = e;
                            r !== y.u.GRID_NAVIGATOR_EVENT &&
                                f({
                                    type: _.s.SET_FOCUSED_POSITION,
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
                getRowProps: p,
                gridContainerProps: I,
                handleGridContainerKeyDown: T,
                isUsingKeyboardNavigation: g
            }
        );
    },
    eu = (e, t) => {
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
    ec = (e, t, n, r) => {
        s.useLayoutEffect(() => {
            if (r) {
                var e;
                null === (e = n.current) || void 0 === e || e.focus();
            }
        }, [e, t, n, r]);
    },
    ed = 200,
    e_ = d()(F.to, ed),
    eE = d()(F.jA, ed),
    ef = {
        section: void 0,
        openPopoutType: void 0
    },
    eh = function (e, t) {
        var n, r;
        let i,
            { pickerIntention: a, channel: l, guildId: c, closePopout: d, emojiSize: _ = $.Su.MEDIUM, hasTabWrapper: h = !1, containerContext: m = 0, includeCreateEmojiButton: y, onSelectEmoji: D, containerWidth: B, onNavigateAway: es, persistSearch: ed, className: eh, headerClassName: ep, analyticsOverride: em = ef, searchProps: eI = {}, wrapper: eT, shouldHidePickerActions: eg = !1, messageId: eS, renderHeader: eA, listHeaderClassName: ev, categoryListClassName: eN } = e,
            { onFocus: eO, onKeyDown: eR, autoFocus: eC = !0, accessory: ey } = eI,
            eL = (0, E.e7)([w.ZP], () => (null != c ? w.ZP.getDefaultChannel(c) : null), [c]),
            [eb, eD] = s.useState(null),
            eM = s.useRef(''),
            eP = (0, C.Iu)((e) => e.searchQuery),
            eU = s.useRef(null),
            ew = s.useRef(null),
            ex = s.useRef(null);
        null == l && null != eL && (l = eL);
        let eG = null !== (r = null !== (n = null == l ? void 0 : l.getGuildId()) && void 0 !== n ? n : c) && void 0 !== r ? r : null,
            [ek, eB] = s.useState(!1),
            eF = x.default.getCurrentUser(),
            eZ = (0, k.I5)(eF);
        s.useImperativeHandle(t, () => ({ onPickerOpen: e7 }));
        let { location: eV } = (0, T.O)(),
            { page: eH, section: eY, object: ej, openPopoutType: eW } = em,
            eK = s.useMemo(
                () => ({
                    ...eV,
                    section: null != eY ? eY : J.jXE.EMOJI_PICKER_POPOUT
                }),
                [eV, eY]
            ),
            { analyticsLocations: ez } = (0, S.ZP)(g.Z.EMOJI_PICKER),
            { diversitySurrogate: eq } = (0, E.cj)([v.ZP], () => ({ diversitySurrogate: v.ZP.diversitySurrogate })),
            eQ = (0, F.DV)(eP, l, a),
            eX = null == eQ ? 0 : eQ.locked.length + eQ.unlocked.length,
            e$ = U.d4.useSetting(),
            eJ = s.useMemo(() => new Set(e$), [e$]),
            e0 = s.useCallback((e) => {
                U.d4.updateSetting(Array.from(e));
            }, []),
            e1 = (0, L.ep)({
                gridWrapperRef: eU,
                containerWidth: B,
                listPaddingLeft: ei,
                listScrollbarWidth: ea
            }),
            {
                rowCountBySection: e2,
                sectionDescriptors: e3,
                emojiGrid: e4,
                columnCounts: e5
            } = (0, K.YH)({
                gridWidth: e1,
                channel: l,
                includeCreateEmojiButton: y,
                pickerIntention: a,
                emojiSearchResults: eQ,
                collapsedSections: eJ,
                emojiPaddingHorizontal: er,
                emojiSpriteSize: _
            }),
            { newlyAddedEmojis: e6 } = (0, V.Z)(eG, a);
        (0, Z.b)({
            intention: a,
            isBurstReaction: ek,
            analyticsObject: ej
        });
        let e7 = s.useCallback(() => {
                let e = e6.length > 0 ? e6[0].id : null;
                (0, O.pr)(eG, e),
                    (0, Z.Z)({
                        intention: a,
                        isBurstReaction: ek,
                        analyticsObject: ej
                    });
            }, [e6, eG, a, ek, ej]),
            e8 = (0, K.rf)({
                pickerIntention: a,
                selectedChannel: l,
                closePopout: d,
                onSelectEmoji: D,
                setUpsellConfigs: eD,
                emojiSelectAnalytics: (e) => {
                    '' !== eP
                        ? (0, F.y$)({
                              emoji: e.emoji,
                              location: {
                                  ...eK,
                                  object: J.qAy.EMOJI
                              },
                              searchQuery: eP,
                              intention: a
                          })
                        : (0, F.fe)({
                              emoji: e.emoji,
                              location: {
                                  ...eK,
                                  object: null != ej ? ej : J.qAy.EMOJI,
                                  ...(null != eH && { page: eH })
                              },
                              pickerIntention: a,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight: e.subCategory === $.t0.NEWLY_ADDED_EMOJI && N.Z.isNewerThanLastSeen(eG, e.emoji.id),
                              isBurstReaction: ek
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, F.J1)({
                        emoji: e.emoji,
                        location: {
                            ...eK,
                            object: J.qAy.EMOJI
                        }
                    });
                }
            }),
            e9 = s.useCallback(() => {
                d(), null == es || es();
            }, [d, es]),
            {
                getItemProps: te,
                getRowProps: tt,
                gridContainerProps: tn,
                handleGridContainerKeyDown: tr,
                isUsingKeyboardNavigation: ti
            } = el({
                pickerIntention: a,
                analyticsLocation: eK,
                columnCounts: e5,
                onSelectEmoji: D,
                emojiGrid: e4,
                emojiList: ew,
                channelGuildId: eG,
                isBurstReaction: ek
            });
        eu(B, ew),
            ec(B, eq, ex, eC),
            s.useEffect(() => {
                !ed && (0, C.ql)('');
            }, [ed]),
            s.useEffect(
                () => (
                    G.default.track(J.rMx.OPEN_POPOUT, {
                        type: null != eW ? eW : 'Emoji Picker',
                        guild_id: eG
                    }),
                    R.kJ.resetStoreState
                ),
                [eW, eG]
            ),
            s.useEffect(() => () => (0, M.Kw)(M.v6.FAVORITE_EMOJI_TOOLTIP), []),
            s.useLayoutEffect(() => {
                var e;
                let { columnIndex: t, rowIndex: n } = R.kJ.getState().inspectedExpressionPosition;
                (null === (e = e4[n]) || void 0 === e ? void 0 : e[t]) == null && 0 !== t && R.kJ.setInspectedExpressionPosition(0, 0);
            }, [e4]),
            s.useEffect(() => {
                if (('' === eM.current && '' !== eP && (0, F.PC)(eK, a), 0 === eX && '' !== eP)) e_(eK, eP);
                else if ('' !== eP && eM.current !== eP) {
                    var e;
                    eE(eX, null !== (e = null == eQ ? void 0 : eQ.locked.length) && void 0 !== e ? e : 0, eK, eP, a);
                }
                eM.current = eP;
            }, [eP, eK, eX, eQ, a]);
        let ta = null != eT ? eT : h ? 'div' : p.Dialog,
            to = null != e1;
        if ((null == eb ? void 0 : eb.type) === K.Bg.PREMIUM) {
            let e = P.p.NONE;
            2 === m ? (e = P.p.PARENT_CONTAINER) : 1 === m && (e = P.p.TAB_PARENT_CONTAINER),
                (i = (0, o.jsx)(X.Z, {
                    onLearnMore: e9,
                    emojiDescriptor: eb.emojiDescriptor,
                    pickerIntention: a,
                    analyticsLocation: eK,
                    onClose: () => eD(null),
                    channel: l,
                    containerContext: e
                }));
        } else
            (null == eb ? void 0 : eb.type) === K.Bg.ROLE_SUBSCRIPTION
                ? (i = (0, o.jsx)(b.Z, {
                      onClose: () => eD(null),
                      guildId: eb.guildId,
                      emojiId: eb.emojiId
                  }))
                : ek && !eZ && (i = (0, o.jsx)(H.Z, { onDismiss: () => eB(!1) }));
        let ts = (e, t) => {
                e8(e, {
                    ...t,
                    isBurst: ek
                });
            },
            tl = () => {
                var e;
                eB(!ek), null === (e = ex.current) || void 0 === e || e.focus();
            },
            tu = (0, o.jsx)(W.Z, {
                pickerIntention: a,
                emojiListRef: ew,
                onKeyDown: (e) => {
                    null == tr || tr(e), null == eR || eR(e);
                },
                searchBarRef: ex,
                onFocus: eO,
                autoFocus: eC,
                accessory: ey,
                headerClassName: ep,
                hasTabWrapper: h,
                diversitySurrogate: eq,
                isBurstReaction: ek,
                onBurstReactionToggle: tl,
                renderHeader: eA
            }),
            tc = [];
        a === et.Hz.REACTION && tc.push(f.z.SUPER_REACTIONS_NITRO_MARKETING), !v.ZP.hasFavoriteEmojis(eG) && tc.push(f.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let td = (0, o.jsx)(I.Z, {
            ...eK,
            children: (0, o.jsxs)(ta, {
                id: $.cZ,
                'aria-labelledby': h ? $.td : void 0,
                role: h ? 'tabpanel' : void 0,
                className: u()(en.wrapper, {
                    [en.emojiPickerHasTabWrapper]: h,
                    [en.isBurstReactionPicker]: ek && eZ
                }),
                children: [
                    h ? null : tu,
                    (0, o.jsxs)('div', {
                        className: u()(en.emojiPicker, eh),
                        onScroll: eo,
                        children: [
                            h ? tu : null,
                            (0, o.jsxs)('div', {
                                className: en.bodyWrapper,
                                ref: eU,
                                children: [
                                    (0, o.jsx)(Q.Z, {
                                        channel: l,
                                        closePopout: d
                                    }),
                                    (0, o.jsx)(A.ZP, {
                                        contentTypes: tc,
                                        children: (e) => {
                                            let { visibleContent: t, markAsDismissed: n } = e;
                                            if (t === f.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP) return (0, o.jsx)(j.Z, { markAsDismissed: () => n(ee.L.UNKNOWN) });
                                        }
                                    }),
                                    eg
                                        ? null
                                        : (0, o.jsx)('div', {
                                              className: en.emojiPickerListWrapper,
                                              id: $.Vr,
                                              ...tn,
                                              children: to
                                                  ? (0, o.jsx)(q.Z, {
                                                        collapsedSections: eJ,
                                                        diversitySurrogate: eq,
                                                        emojiGrid: e4,
                                                        emojiListRef: ew,
                                                        emojiSize: _,
                                                        getEmojiItemProps: te,
                                                        getEmojiRowProps: tt,
                                                        gridWidth: e1,
                                                        isUsingKeyboardNavigation: ti,
                                                        onEmojiSelect: ts,
                                                        setUpsellConfigs: eD,
                                                        rowCount: e4.length,
                                                        rowCountBySection: e2,
                                                        sectionDescriptors: e3,
                                                        setCollapsedSections: e0,
                                                        channelGuildId: eG,
                                                        messageId: eS,
                                                        isBurstReaction: ek,
                                                        listHeaderClassName: ev
                                                    })
                                                  : null
                                          })
                                ]
                            }),
                            (0, o.jsx)(z.k, {
                                emojiGrid: e4,
                                className: en.inspector,
                                guildId: eG,
                                pickerIntention: a,
                                channel: l
                            }),
                            i
                        ]
                    }),
                    eg
                        ? null
                        : (0, o.jsx)(Y.Z, {
                              className: u()(en.categoryList, eN),
                              emojiListRef: ew,
                              sectionDescriptors: e3,
                              intention: a,
                              channel: l
                          })
                ]
            })
        });
        return (0, o.jsx)(S.Gt, {
            value: ez,
            children: td
        });
    };
t.Z = s.memo(s.forwardRef(eh));
