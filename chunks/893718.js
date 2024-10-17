n(47120), n(411104);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(836560),
    l = n(512722),
    u = n.n(l),
    c = n(143927),
    d = n(873546),
    _ = n(149765),
    E = n(442837),
    f = n(481060),
    h = n(430742),
    p = n(393238),
    I = n(607070),
    m = n(100527),
    T = n(906732),
    S = n(998698),
    g = n(271668),
    A = n(404295),
    N = n(931981),
    R = n(326133),
    O = n(570220),
    v = n(28546),
    C = n(805680),
    L = n(151574),
    D = n(368844),
    y = n(41776),
    b = n(849522),
    M = n(780291),
    P = n(913663),
    U = n(268350),
    w = n(378233),
    x = n(665906),
    G = n(695346),
    k = n(271383),
    B = n(496675),
    F = n(944486),
    V = n(398327),
    H = n(117530),
    Z = n(594174),
    Y = n(459273),
    j = n(700785),
    W = n(358085),
    K = n(746877),
    z = n(541716),
    q = n(667829),
    Q = n(562267),
    X = n(376918),
    $ = n(760196),
    J = n(258696),
    ee = n(303628),
    et = n(472243),
    en = n(872635),
    er = n(676108),
    ei = n(981631),
    ea = n(665692),
    es = n(957825),
    eo = n(933283);
t.Z = i.memo(
    i.forwardRef(function (e, t) {
        var a, l, el, eu, ec, ed, e_, eE, ef, eh, ep, eI, em, eT, eS;
        let { textValue: eg, richValue: eA, className: eN, innerClassName: eR, editorClassName: eO, id: ev, required: eC, disabled: eL, placeholder: eD, accessibilityLabel: ey, channel: eb, type: eM, focused: eP, renderAttachButton: eU, renderApplicationCommandIcon: ew, pendingReply: ex, onChange: eG, onResize: ek, onBlur: eB, onFocus: eF, onKeyDown: eV, onSubmit: eH, promptToUpload: eZ, highlighted: eY, canMentionRoles: ej, canMentionChannels: eW, maxCharacterCount: eK, showRemainingCharsAfterCount: ez, allowNewLines: eq = !0, characterCountClassName: eQ, 'aria-describedby': eX, 'aria-labelledby': e$, setEditorRef: eJ, autoCompletePosition: e0, children: e1, disableThemedBackground: e2 = !1, emojiPickerCloseOnModalOuterClick: e3, parentModalKey: e4, onCommandSentinelTyped: e5 } = e;
        u()(null != eM, 'chat input type must be set');
        let { analyticsLocations: e6 } = (0, T.ZP)(m.Z.CHANNEL_TEXT_AREA),
            e7 = (function (e) {
                let t = i.useRef(null);
                if (null != e && 'function' == typeof e) throw Error('Only Ref objects are supported');
                return null == e ? t : e;
            })(t),
            e8 = i.useRef(null),
            e9 = i.useRef(null),
            te = i.useRef(null),
            tt = i.useRef(null);
        null == eJ || eJ(e9.current);
        let tn = (0, A.h9)(eb.id, 'ChannelTextAreaContainer'),
            [tr, ti] = i.useState(!tn);
        (0, p.P)(e7, (e) => {
            let { width: t } = e;
            return ti(!tn && (null == t || t > 450));
        });
        let { activeCommand: ta, activeCommandSection: ts } = (0, E.cj)([S.Z], () => {
                var e, t;
                return {
                    activeCommand: (null === (e = eM.commands) || void 0 === e ? void 0 : e.enabled) ? S.Z.getActiveCommand(eb.id) : null,
                    activeCommandSection: (null === (t = eM.commands) || void 0 === t ? void 0 : t.enabled) ? S.Z.getActiveCommandSection(eb.id) : null
                };
            }),
            {
                isLurking: to,
                isPendingMember: tl,
                disabled: tu,
                canAttachFiles: tc,
                canCreateThreads: td,
                canEveryoneSendMessages: t_
            } = (function (e, t, n, r) {
                let i = e.getGuildId(),
                    a = (0, E.e7)([y.Z], () => null != i && y.Z.isLurking(i), [i]),
                    s = (0, E.e7)([k.ZP, Z.default], () => {
                        var e, t;
                        let n = Z.default.getCurrentUser();
                        return null !== (t = null != i && null != n ? (null === (e = k.ZP.getMember(i, n.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
                    }),
                    o = (0, E.cj)(
                        [B.Z],
                        () => {
                            var i, a;
                            let o = e.isPrivate(),
                                l = B.Z.computePermissions(e),
                                u = _.e$(l, ei.Plq.CREATE_PUBLIC_THREADS) || _.e$(l, ei.Plq.CREATE_PRIVATE_THREADS),
                                c = (!(null === (i = t.permissions) || void 0 === i ? void 0 : i.requireCreateTherads) || u) && (!(null === (a = t.permissions) || void 0 === a ? void 0 : a.requireSendMessages) || _.e$(l, ei.Plq.SEND_MESSAGES)),
                                d = c && _.e$(l, ei.Plq.ATTACH_FILES),
                                E = null != n,
                                f = (0, x.xl)(e);
                            return {
                                disabled: r || s || (!o && !c) || f,
                                canAttachFiles: !0 === t.attachments && (o || s || d || E),
                                canCreateThreads: u,
                                canEveryoneSendMessages: j.Uu(ei.Plq.SEND_MESSAGES, e)
                            };
                        },
                        [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, s]
                    );
                return {
                    isLurking: a,
                    isPendingMember: s,
                    ...o
                };
            })(eb, eM, ta, eL),
            tE = eM.toolbarType === z.O.STATIC,
            tf = !G.dN.useSetting() && !(0, W.isAndroidWeb)() && null != window.ResizeObserver,
            th = !tf || !(null === (a = eM.commands) || void 0 === a ? void 0 : a.enabled) || !eP || eg !== ea.GI,
            tp = (0, b.Z)(),
            { isSubmitButtonEnabled: tI, fontSize: tm } = (0, E.cj)([I.Z], () => ({
                fontSize: I.Z.fontSize,
                isSubmitButtonEnabled: I.Z.isSubmitButtonEnabled
            })),
            tT = (0, E.e7)([V.Z], () => V.Z.isEnabled()),
            tS = i.useRef(eg);
        tS.current = eg;
        let tg = i.useCallback(
            (e, t, n) => {
                var r;
                t === ea.GI && '' === tS.current && (null === (r = eM.commands) || void 0 === r ? void 0 : r.enabled) && (null == e5 || e5()), null == eG || eG(e, t, n);
            },
            [eG, e5, null === (l = eM.commands) || void 0 === l ? void 0 : l.enabled]
        );
        !(function (e, t) {
            let n = i.useCallback(() => {
                    if (!t) (0, v.RO)(es.X1.EMOJI, e);
                }, [t, e]),
                r = i.useCallback(() => {
                    var n;
                    if (!t && !!(null === (n = e.gifs) || void 0 === n ? void 0 : n.allowSending)) (0, v.RO)(es.X1.GIF, e);
                }, [t, e]),
                a = i.useCallback(() => {
                    var n;
                    if (!t && !!(null === (n = e.stickers) || void 0 === n ? void 0 : n.allowSending)) (0, v.RO)(es.X1.STICKER, e);
                }, [t, e]);
            (0, Y.yp)({
                event: ei.CkL.TOGGLE_EMOJI_POPOUT,
                handler: n
            }),
                (0, Y.yp)({
                    event: ei.CkL.TOGGLE_GIF_PICKER,
                    handler: r
                }),
                (0, Y.yp)({
                    event: ei.CkL.TOGGLE_STICKER_PICKER,
                    handler: a
                });
        })(eM, tu);
        let { eventEmitter: tA, handleEditorSelectionChanged: tN } = (function (e, t, n) {
                let [r] = i.useState(() => new o.EventEmitter());
                return (
                    i.useEffect(() => {
                        r.emit('text-changed', t, n);
                    }, [t, n, r]),
                    {
                        eventEmitter: r,
                        handleEditorSelectionChanged: (t) => {
                            null != e.current && r.emit('selection-changed', t);
                        }
                    }
                );
            })(e9, eg, eA),
            {
                submitting: tR,
                submit: tO,
                handleSubmit: tv
            } = (function (e, t, a, s) {
                let [o, l] = i.useState(!1),
                    u = i.useCallback(
                        (i, c, d, _, E) => {
                            var p, I, m;
                            if (o) return;
                            l(!0);
                            let T = null !== (I = null === (p = P.Z.getStickerPreview(s, t.drafts.type)) || void 0 === p ? void 0 : p.map((e) => e.id)) && void 0 !== I ? I : [],
                                S = null !== (m = H.Z.getUploads(s, t.drafts.type)) && void 0 !== m ? m : [];
                            if (null == c && !_ && !E && (0, D.CB)(S, s)) {
                                l(!1),
                                    (0, f.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e('23755'), n.e('90508'), n.e('18895'), n.e('53289')]).then(n.bind(n, 273602));
                                        return (t) =>
                                            (0, r.jsx)(e, {
                                                ...t,
                                                threadId: s,
                                                attachments: S,
                                                sendMessage: () => u(i, void 0, void 0, void 0, !0)
                                            });
                                    });
                                return;
                            }
                            e({
                                value: i,
                                uploads: S,
                                stickers: T,
                                command: c,
                                commandOptionValues: d,
                                isGif: _
                            }).then((e) => {
                                var n, r, i, o;
                                let { shouldClear: u, shouldRefocus: c } = e;
                                let d = ((n = u), (r = t), null !== (o = n && (null === (i = r.submit) || void 0 === i ? void 0 : i.clearOnSubmit)) && void 0 !== o && o),
                                    _ = null != a.current;
                                if (d) {
                                    if (s !== F.Z.getChannelId()) h.Z.saveDraft(s, '', t.drafts.type);
                                    else _ && a.current.clearValue();
                                }
                                _ && (l(!1), (0, v._Q)(), c && a.current.focus());
                            });
                        },
                        [a, e, o, t, s]
                    );
                return {
                    submitting: o,
                    submit: u,
                    handleSubmit: i.useCallback((e) => {
                        var t;
                        null == a || null === (t = a.current) || void 0 === t || t.submit(e);
                    }, [])
                };
            })(eH, eM, e9, eb.id),
            {
                autocompleteRef: tC,
                handleMaybeShowAutocomplete: tL,
                handleHideAutocomplete: tD
            } = (function () {
                let e = i.useRef(null),
                    t = i.useCallback(() => {
                        var t;
                        null === (t = e.current) || void 0 === t || t.onMaybeShowAutocomplete();
                    }, []),
                    n = i.useCallback(() => {
                        var t;
                        null === (t = e.current) || void 0 === t || t.onHideAutocomplete();
                    }, []);
                return {
                    autocompleteRef: e,
                    handleMaybeShowAutocomplete: t,
                    handleHideAutocomplete: n
                };
            })();
        let ty =
            ((ep = tO),
            (eI = eM),
            (em = e9),
            i.useCallback(
                (e) => {
                    var t, n;
                    eI === z.I.CREATE_FORUM_POST ? null === (n = em.current) || void 0 === n || n.insertGIF(e) : ep(e.url, void 0, void 0, !0), (0, v._Q)(), null === (t = em.current) || void 0 === t || t.focus();
                },
                [em, ep, eI]
            ));
        let tb =
                ((eT = e9),
                i.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            r = eT.current;
                        null != e && null != r && r.insertEmoji(e, t, n), t && (0, v._Q)();
                    },
                    [eT]
                )),
            tM = (function (e) {
                let { editorRef: t, disabled: n, textValue: r, channelId: a, chatInputType: s, submit: o } = e,
                    { analyticsLocations: l } = (0, T.ZP)();
                return i.useCallback(
                    (e, i) => {
                        var u, c;
                        !n &&
                            ((0, w.Hc)(i, r, a, s.drafts.type)
                                ? ((0, X._H)({
                                      sticker: e,
                                      stickerSelectLocation: i,
                                      isReplacement: null != P.Z.getStickerPreview(a, s.drafts.type),
                                      analyticsLocations: l
                                  }),
                                  (0, U.eu)(a, e, s.drafts.type))
                                : (o({
                                      value: '',
                                      uploads: void 0,
                                      stickers: [e.id]
                                  }),
                                  null === (c = t.current) || void 0 === c || c.clearValue()),
                            (0, v._Q)(),
                            null === (u = t.current) || void 0 === u || u.focus());
                    },
                    [n, r, a, s.drafts.type, t, l, o]
                );
            })({
                editorRef: e9,
                disabled: tu,
                textValue: eg,
                channelId: eb.id,
                chatInputType: eM,
                submit: eH
            });
        let tP =
                ((eS = e9),
                i.useCallback(
                    (e) => {
                        let t = eS.current;
                        null != e && null != t && t.insertSound(e), (0, v._Q)();
                    },
                    [eS]
                )),
            tU = i.useCallback(() => {
                var e;
                return null == tt ? void 0 : null === (e = tt.current) || void 0 === e ? void 0 : e.hide();
            }, []),
            { editorHeight: tw, handleResize: tx } = (function (e) {
                let [t, n] = i.useState(0);
                return {
                    editorHeight: t,
                    handleResize: i.useCallback(
                        (t) => {
                            n(null != t ? t : 0), null == e || e(t);
                        },
                        [e]
                    )
                };
            })(ek),
            {
                handleTab: tG,
                handleEnter: tk,
                handleMoveSelection: tB
            } = (function (e, t, n) {
                let r = i.useCallback(() => {
                        var r, i;
                        return !!(!n && (null === (r = t.current) || void 0 === r ? void 0 : r.onTabOrEnter(!1))) || (null === (i = e.current) || void 0 === i ? void 0 : i.onTabOrEnter(!1)) || !1;
                    }, [n]),
                    a = i.useCallback(() => {
                        var r, i;
                        return !!(!n && (null === (r = t.current) || void 0 === r ? void 0 : r.onTabOrEnter(!0))) || (null === (i = e.current) || void 0 === i ? void 0 : i.onTabOrEnter(!0)) || !1;
                    }, [n]);
                return {
                    handleTab: r,
                    handleEnter: a,
                    handleMoveSelection: i.useCallback(
                        (r) => {
                            var i, a;
                            return !!(!n && (null === (i = t.current) || void 0 === i ? void 0 : i.onMoveSelection(r))) || (null === (a = e.current) || void 0 === a ? void 0 : a.onMoveSelection(r)) || !1;
                        },
                        [n]
                    )
                };
            })(tC, e8, th),
            {
                expressionPickerView: tF,
                shouldHideExpressionPicker: tV,
                handleAutocompleteVisibilityChange: tH,
                handleOuterClick: tZ
            } = (function (e, t, n) {
                let [r, a] = (0, v.Iu)((e) => [e.activeView, e.activeViewType], c.Z);
                i.useEffect(
                    () => () => {
                        (0, v._Q)(e);
                    },
                    [e]
                );
                let s = i.useCallback(
                        (e) => {
                            t.emit('autocomplete-visibility-change', e), e && (0, v._Q)();
                        },
                        [t]
                    ),
                    o = i.useCallback(() => {
                        var e;
                        null == r && (null === (e = n.current) || void 0 === e || e.handleOuterClick());
                    }, [r]),
                    l = null == r || null == a || a !== e;
                return {
                    expressionPickerView: r,
                    shouldHideExpressionPicker: l,
                    handleAutocompleteVisibilityChange: s,
                    handleOuterClick: o
                };
            })(eM, tA, e9);
        (0, K.S)(tA, eb.guild_id, eb.id);
        let tY = null != ex,
            tj = (tu && !((to || tl) && t_)) || (tR && (null === (el = eM.submit) || void 0 === el ? void 0 : el.useDisabledStylesOnSubmit)),
            tW = null;
        null != ta ? (tW = null == ew ? void 0 : ew(ta, ts, eo.attachButton)) : (!tu || td) && (tW = null == eU ? void 0 : eU(tY, eo.attachButton));
        let tK = tf && null != eA && !tu && eM.showCharacterCount && null == ta,
            tz = tf && !__OVERLAY__ && null != eA && null == ta && eM.toolbarType !== z.O.NONE,
            tq = (function (e, t, n, r) {
                var i, a;
                let s = G.up.useSetting(),
                    o = (0, E.e7)([P.Z], () => P.Z.getStickerPreview(e.id, t.drafts.type)),
                    l = null != o && o.length > 0;
                return s && (null === (i = t.stickers) || void 0 === i ? void 0 : i.autoSuggest) && !l && (null === (a = r.current) || void 0 === a ? void 0 : a.isVisible()) !== !0 && !__OVERLAY__ && null != n;
            })(eb, eM, eA, tC),
            tQ = (0, N.e)(eb),
            tX = null != ta || null != ex || tQ,
            t$ = !!(null === (eu = eM.emojis) || void 0 === eu ? void 0 : eu.button) && tw <= 44;
        return (0, r.jsx)(O.f6, {
            value: tA,
            children: (0, r.jsxs)(T.Gt, {
                value: e6,
                children: [
                    tz && tE
                        ? (0, r.jsx)(er.Z, {
                              editorRef: e9,
                              options: eM.markdown,
                              channel: eb
                          })
                        : tz
                          ? (0, r.jsx)(en.Z, {
                                ref: tt,
                                editorRef: e9,
                                containerRef: te,
                                options: eM.markdown
                            })
                          : null,
                    (0, r.jsxs)('div', {
                        ref: e7,
                        className: s()(eN, {
                            [eo.channelTextArea]: !0,
                            [eo.channelTextAreaDisabled]: tj,
                            [eo.highlighted]: eY,
                            [eo.textAreaMobileThemed]: d.tq
                        }),
                        children: [
                            (0, r.jsx)($.Z, {
                                type: eM,
                                channel: eb,
                                activeCommand: ta,
                                pendingReply: ex
                            }),
                            (0, r.jsxs)('div', {
                                ref: te,
                                onScroll: tU,
                                className: s()(eR, {
                                    [eo.scrollableContainer]: !0,
                                    [eo.themedBackground]: !e2,
                                    [eo.hasConnectedBar]: tX
                                }),
                                children: [
                                    (0, r.jsx)(Q.Z, {
                                        channelId: eb.id,
                                        chatInputType: eM
                                    }),
                                    eM.hideAttachmentArea
                                        ? null
                                        : (0, r.jsx)(ee.Z, {
                                              channelId: eb.id,
                                              type: eM,
                                              canAttachFiles: tc
                                          }),
                                    (0, r.jsxs)('div', {
                                        className: s()(eo.inner, {
                                            [eo.innerDisabled]: tj,
                                            [eo.sansAttachButton]: eM !== z.I.EDIT && (null != tW || (tj && null == tW) || to),
                                            [eo.sansAttachButtonCreateThread]: eM === z.I.THREAD_CREATION,
                                            [eo.sansAttachButtonCreatePost]: eM === z.I.CREATE_FORUM_POST || eM === z.I.FORWARD_MESSAGE_INPUT,
                                            [eo.sansAttachButtonUserProfileReply]: eM === z.I.USER_PROFILE_REPLY
                                        }),
                                        onMouseDown: tZ,
                                        children: [
                                            tW,
                                            (0, r.jsx)(f.FocusRing, {
                                                ringTarget: e7,
                                                ringClassName: eo.focusRing,
                                                children: (0, r.jsx)(q.Z, {
                                                    ref: e9,
                                                    id: ev,
                                                    focused: eP,
                                                    useSlate: tf,
                                                    textValue: eg,
                                                    richValue: eA,
                                                    disabled: tu,
                                                    placeholder: eD,
                                                    required: eC,
                                                    accessibilityLabel: ey,
                                                    isPreviewing: (to || tl) && t_,
                                                    channel: eb,
                                                    type: eM,
                                                    canPasteFiles: tc,
                                                    uploadPromptCharacterCount: ei.en1,
                                                    maxCharacterCount: null != eK ? eK : tp,
                                                    allowNewLines: eq,
                                                    'aria-describedby': eX,
                                                    onChange: tg,
                                                    onResize: tx,
                                                    onBlur: eB,
                                                    onFocus: eF,
                                                    onKeyDown: eV,
                                                    onSubmit: tO,
                                                    onTab: tG,
                                                    onEnter: tk,
                                                    onMoveSelection: tB,
                                                    onSelectionChanged: tN,
                                                    onMaybeShowAutocomplete: tL,
                                                    onHideAutocomplete: tD,
                                                    promptToUpload: eZ,
                                                    fontSize: tm,
                                                    spellcheckEnabled: tT,
                                                    canOnlyUseTextCommands: tY,
                                                    className: s()(
                                                        {
                                                            [eo.textAreaThreadCreation]: eM === z.I.THREAD_CREATION,
                                                            [eo.profileBioInput]: eM === z.I.PROFILE_BIO_INPUT
                                                        },
                                                        eO
                                                    ),
                                                    'aria-labelledby': e$
                                                })
                                            }),
                                            (0, r.jsx)(J.Z, {
                                                type: eM,
                                                disabled: tu,
                                                channel: eb,
                                                handleSubmit: tv,
                                                isEmpty: 0 === eg.trim().length,
                                                showAllButtons: tr
                                            })
                                        ]
                                    })
                                ]
                            }),
                            th
                                ? null
                                : (0, r.jsx)(g.Z, {
                                      ref: e8,
                                      channel: eb,
                                      canOnlyUseTextCommands: tY
                                  }),
                            (0, r.jsx)(R.Z, {
                                ref: tC,
                                channel: eb,
                                canMentionRoles: ej,
                                canMentionChannels: eW,
                                useNewSlashCommands: tf,
                                canOnlyUseTextCommands: tY,
                                canSendStickers: null === (ec = eM.stickers) || void 0 === ec ? void 0 : ec.allowSending,
                                textValue: eg,
                                focused: eP,
                                expressionPickerView: tF,
                                type: eM,
                                targetRef: e7,
                                editorRef: e9,
                                onSendMessage: tO,
                                onSendSticker: tM,
                                onVisibilityChange: tH,
                                editorHeight: tw,
                                setValue: (e, t) => (null == tg ? void 0 : tg(null, e, t)),
                                position: e0
                            }),
                            (0, r.jsx)(M.Z, {
                                textValue: eg,
                                editorHeight: tw
                            }),
                            tK
                                ? (0, r.jsx)(et.Z, {
                                      type: eM,
                                      textValue: eg,
                                      className: s()(eQ, { [eo.indentCharacterCount]: t$ }),
                                      maxCharacterCount: eK,
                                      showRemainingCharsAfterCount: ez
                                  })
                                : null,
                            tq
                                ? (0, r.jsx)(L.Z, {
                                      editorRef: e9,
                                      channel: eb,
                                      isEditorFocused: eP,
                                      onSelectSticker: tM,
                                      submitButtonVisible: (null === (ed = eM.submit) || void 0 === ed ? void 0 : ed.button) && (null !== (ef = null === (e_ = eM.submit) || void 0 === e_ ? void 0 : e_.ignorePreference) && void 0 !== ef ? ef : tI),
                                      stickerIconVisible: null !== (eh = null === (eE = eM.stickers) || void 0 === eE ? void 0 : eE.button) && void 0 !== eh && eh
                                  })
                                : null,
                            e1
                        ]
                    }),
                    tV
                        ? null
                        : (0, r.jsx)(C.Z, {
                              positionTargetRef: e7,
                              type: eM,
                              onSelectGIF: ty,
                              onSelectEmoji: tb,
                              onSelectSticker: tM,
                              onSelectSound: tP,
                              channel: eb,
                              closeOnModalOuterClick: e3,
                              parentModalKey: e4,
                              position: 'top',
                              align: 'right',
                              positionLayerClassName: eo.expressionPickerPositionLayer
                          })
                ]
            })
        });
    })
);
