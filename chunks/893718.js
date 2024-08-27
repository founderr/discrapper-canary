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
    p = n(607070),
    I = n(100527),
    m = n(906732),
    T = n(998698),
    g = n(271668),
    S = n(931981),
    A = n(326133),
    N = n(570220),
    O = n(28546),
    R = n(805680),
    v = n(151574),
    C = n(368844),
    y = n(41776),
    D = n(849522),
    L = n(780291),
    b = n(913663),
    M = n(268350),
    P = n(378233),
    U = n(665906),
    w = n(695346),
    x = n(271383),
    G = n(496675),
    k = n(944486),
    B = n(398327),
    F = n(117530),
    V = n(594174),
    H = n(459273),
    Z = n(700785),
    Y = n(358085),
    j = n(746877),
    W = n(541716),
    K = n(667829),
    z = n(562267),
    q = n(376918),
    Q = n(760196),
    X = n(258696),
    $ = n(303628),
    J = n(472243),
    ee = n(872635),
    et = n(676108),
    en = n(981631),
    er = n(665692),
    ei = n(957825),
    ea = n(305489);
t.Z = i.memo(
    i.forwardRef(function (e, t) {
        var a, l, es, eo, el, eu, ec, ed, e_, eE, ef, eh, ep, eI, em;
        let { textValue: eT, richValue: eg, className: eS, innerClassName: eA, editorClassName: eN, id: eO, required: eR, disabled: ev, placeholder: eC, accessibilityLabel: ey, channel: eD, type: eL, focused: eb, renderAttachButton: eM, renderApplicationCommandIcon: eP, pendingReply: eU, onChange: ew, onResize: ex, onBlur: eG, onFocus: ek, onKeyDown: eB, onSubmit: eF, promptToUpload: eV, highlighted: eH, canMentionRoles: eZ, canMentionChannels: eY, maxCharacterCount: ej, showRemainingCharsAfterCount: eW, allowNewLines: eK = !0, characterCountClassName: ez, 'aria-describedby': eq, 'aria-labelledby': eQ, setEditorRef: eX, autoCompletePosition: e$, children: eJ, disableThemedBackground: e0 = !1, emojiPickerCloseOnModalOuterClick: e1, parentModalKey: e2, onCommandSentinelTyped: e3 } = e;
        u()(null != eL, 'chat input type must be set');
        let { analyticsLocations: e4 } = (0, m.ZP)(I.Z.CHANNEL_TEXT_AREA),
            e5 = (function (e) {
                let t = i.useRef(null);
                if (null != e && 'function' == typeof e) throw Error('Only Ref objects are supported');
                return null == e ? t : e;
            })(t),
            e6 = i.useRef(null),
            e7 = i.useRef(null),
            e8 = i.useRef(null),
            e9 = i.useRef(null),
            te = i.useRef(null);
        null == eX || eX(e8.current);
        let { activeCommand: tt, activeCommandSection: tn } = (0, E.cj)([T.Z], () => {
                var e, t;
                return {
                    activeCommand: (null === (e = eL.commands) || void 0 === e ? void 0 : e.enabled) ? T.Z.getActiveCommand(eD.id) : null,
                    activeCommandSection: (null === (t = eL.commands) || void 0 === t ? void 0 : t.enabled) ? T.Z.getActiveCommandSection(eD.id) : null
                };
            }),
            {
                isLurking: tr,
                isPendingMember: ti,
                disabled: ta,
                canAttachFiles: ts,
                canCreateThreads: to,
                canEveryoneSendMessages: tl
            } = (function (e, t, n, r) {
                let i = e.getGuildId(),
                    a = (0, E.e7)([y.Z], () => null != i && y.Z.isLurking(i), [i]),
                    s = (0, E.e7)([x.ZP, V.default], () => {
                        var e, t;
                        let n = V.default.getCurrentUser();
                        return null !== (t = null != i && null != n ? (null === (e = x.ZP.getMember(i, n.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
                    }),
                    o = (0, E.cj)(
                        [G.Z],
                        () => {
                            var i, a;
                            let o = e.isPrivate(),
                                l = G.Z.computePermissions(e),
                                u = _.e$(l, en.Plq.CREATE_PUBLIC_THREADS) || _.e$(l, en.Plq.CREATE_PRIVATE_THREADS),
                                c = (!(null === (i = t.permissions) || void 0 === i ? void 0 : i.requireCreateTherads) || u) && (!(null === (a = t.permissions) || void 0 === a ? void 0 : a.requireSendMessages) || _.e$(l, en.Plq.SEND_MESSAGES)),
                                d = c && _.e$(l, en.Plq.ATTACH_FILES),
                                E = null != n,
                                f = (0, U.xl)(e);
                            return {
                                disabled: r || s || (!o && !c) || f,
                                canAttachFiles: !0 === t.attachments && (o || s || d || E),
                                canCreateThreads: u,
                                canEveryoneSendMessages: Z.Uu(en.Plq.SEND_MESSAGES, e)
                            };
                        },
                        [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, s]
                    );
                return {
                    isLurking: a,
                    isPendingMember: s,
                    ...o
                };
            })(eD, eL, tt, ev),
            tu = eL.toolbarType === W.O.STATIC,
            tc = !w.dN.useSetting() && !(0, Y.isAndroidWeb)() && null != window.ResizeObserver,
            td = !tc || !(null === (a = eL.commands) || void 0 === a ? void 0 : a.enabled) || !eb || eT !== er.GI,
            t_ = (0, D.Z)(),
            { isSubmitButtonEnabled: tE, fontSize: tf } = (0, E.cj)([p.Z], () => ({
                fontSize: p.Z.fontSize,
                isSubmitButtonEnabled: p.Z.isSubmitButtonEnabled
            })),
            th = (0, E.e7)([B.Z], () => B.Z.isEnabled()),
            tp = i.useRef(eT);
        tp.current = eT;
        let tI = i.useCallback(
            (e, t, n) => {
                var r;
                t === er.GI && '' === tp.current && (null === (r = eL.commands) || void 0 === r ? void 0 : r.enabled) && (null == e3 || e3()), null == ew || ew(e, t, n);
            },
            [ew, e3, null === (l = eL.commands) || void 0 === l ? void 0 : l.enabled]
        );
        !(function (e, t) {
            let n = i.useCallback(() => {
                    if (!t) (0, O.RO)(ei.X1.EMOJI, e);
                }, [t, e]),
                r = i.useCallback(() => {
                    var n;
                    if (!t && !!(null === (n = e.gifs) || void 0 === n ? void 0 : n.allowSending)) (0, O.RO)(ei.X1.GIF, e);
                }, [t, e]),
                a = i.useCallback(() => {
                    var n;
                    if (!t && !!(null === (n = e.stickers) || void 0 === n ? void 0 : n.allowSending)) (0, O.RO)(ei.X1.STICKER, e);
                }, [t, e]);
            (0, H.yp)({
                event: en.CkL.TOGGLE_EMOJI_POPOUT,
                handler: n
            }),
                (0, H.yp)({
                    event: en.CkL.TOGGLE_GIF_PICKER,
                    handler: r
                }),
                (0, H.yp)({
                    event: en.CkL.TOGGLE_STICKER_PICKER,
                    handler: a
                });
        })(eL, ta);
        let { eventEmitter: tm, handleEditorSelectionChanged: tT } = (function (e, t, n) {
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
            })(e8, eT, eg),
            {
                submitting: tg,
                submit: tS,
                handleSubmit: tA
            } = (function (e, t, a, s) {
                let [o, l] = i.useState(!1),
                    u = i.useCallback(
                        (i, c, d, _, E) => {
                            var p, I, m;
                            if (o) return;
                            l(!0);
                            let T = null !== (I = null === (p = b.Z.getStickerPreview(s, t.drafts.type)) || void 0 === p ? void 0 : p.map((e) => e.id)) && void 0 !== I ? I : [],
                                g = null !== (m = F.Z.getUploads(s, t.drafts.type)) && void 0 !== m ? m : [];
                            if (null == c && !_ && !E && (0, C.CB)(g, s)) {
                                l(!1),
                                    (0, f.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e('23755'), n.e('90508'), n.e('22173'), n.e('53289')]).then(n.bind(n, 273602));
                                        return (t) =>
                                            (0, r.jsx)(e, {
                                                ...t,
                                                threadId: s,
                                                attachments: g,
                                                sendMessage: () => u(i, void 0, void 0, void 0, !0)
                                            });
                                    });
                                return;
                            }
                            e({
                                value: i,
                                uploads: g,
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
                                    if (s !== k.Z.getChannelId()) h.Z.saveDraft(s, '', t.drafts.type);
                                    else _ && a.current.clearValue();
                                }
                                _ && (l(!1), (0, O._Q)(), c && a.current.focus());
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
            })(eF, eL, e8, eD.id),
            {
                autocompleteRef: tN,
                handleMaybeShowAutocomplete: tO,
                handleHideAutocomplete: tR
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
        let tv =
            ((ef = tS),
            (eh = eL),
            (ep = e8),
            i.useCallback(
                (e) => {
                    var t, n;
                    eh === W.I.CREATE_FORUM_POST ? null === (n = ep.current) || void 0 === n || n.insertGIF(e) : ef(e.url, void 0, void 0, !0), (0, O._Q)(), null === (t = ep.current) || void 0 === t || t.focus();
                },
                [ep, ef, eh]
            ));
        let tC =
                ((eI = e8),
                i.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            r = eI.current;
                        null != e && null != r && r.insertEmoji(e, t, n), t && (0, O._Q)();
                    },
                    [eI]
                )),
            ty = (function (e) {
                let { editorRef: t, disabled: n, textValue: r, channelId: a, chatInputType: s, submit: o } = e,
                    { analyticsLocations: l } = (0, m.ZP)();
                return i.useCallback(
                    (e, i) => {
                        var u, c;
                        !n &&
                            ((0, P.Hc)(i, r, a, s.drafts.type)
                                ? ((0, q._H)({
                                      sticker: e,
                                      stickerSelectLocation: i,
                                      isReplacement: null != b.Z.getStickerPreview(a, s.drafts.type),
                                      analyticsLocations: l
                                  }),
                                  (0, M.eu)(a, e, s.drafts.type))
                                : (o({
                                      value: '',
                                      uploads: void 0,
                                      stickers: [e.id]
                                  }),
                                  null === (c = t.current) || void 0 === c || c.clearValue()),
                            (0, O._Q)(),
                            null === (u = t.current) || void 0 === u || u.focus());
                    },
                    [n, r, a, s.drafts.type, t, l, o]
                );
            })({
                editorRef: e8,
                disabled: ta,
                textValue: eT,
                channelId: eD.id,
                chatInputType: eL,
                submit: eF
            });
        let tD =
                ((em = e8),
                i.useCallback(
                    (e) => {
                        let t = em.current;
                        null != e && null != t && t.insertSound(e), (0, O._Q)();
                    },
                    [em]
                )),
            tL = i.useCallback(() => {
                var e;
                return null == te ? void 0 : null === (e = te.current) || void 0 === e ? void 0 : e.hide();
            }, []),
            { editorHeight: tb, handleResize: tM } = (function (e) {
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
            })(ex),
            {
                handleTab: tP,
                handleEnter: tU,
                handleMoveSelection: tw
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
            })(tN, e7, td),
            {
                expressionPickerView: tx,
                shouldHideExpressionPicker: tG,
                handleAutocompleteVisibilityChange: tk,
                handleOuterClick: tB
            } = (function (e, t, n) {
                let [r, a] = (0, O.Iu)((e) => [e.activeView, e.activeViewType], c.Z);
                i.useEffect(
                    () => () => {
                        (0, O._Q)(e);
                    },
                    [e]
                );
                let s = i.useCallback(
                        (e) => {
                            t.emit('autocomplete-visibility-change', e), e && (0, O._Q)();
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
            })(eL, tm, e8);
        (0, j.S)(tm, eD.guild_id, eD.id);
        let tF = null != eU,
            tV = (ta && !((tr || ti) && tl)) || (tg && (null === (es = eL.submit) || void 0 === es ? void 0 : es.useDisabledStylesOnSubmit)),
            tH = null;
        null != tt ? (tH = null == eP ? void 0 : eP(tt, tn, ea.attachButton)) : (!ta || to) && (tH = null == eM ? void 0 : eM(tF, ea.attachButton));
        let tZ = tc && null != eg && !ta && eL.showCharacterCount && null == tt,
            tY = tc && !__OVERLAY__ && null != eg && null == tt && eL.toolbarType !== W.O.NONE,
            tj = (function (e, t, n, r) {
                var i, a;
                let s = w.up.useSetting(),
                    o = (0, E.e7)([b.Z], () => b.Z.getStickerPreview(e.id, t.drafts.type)),
                    l = null != o && o.length > 0;
                return s && (null === (i = t.stickers) || void 0 === i ? void 0 : i.autoSuggest) && !l && (null === (a = r.current) || void 0 === a ? void 0 : a.isVisible()) !== !0 && !__OVERLAY__ && null != n;
            })(eD, eL, eg, tN),
            tW = (0, S.e)(eD),
            tK = null != tt || null != eU || tW,
            tz = !!(null === (eo = eL.emojis) || void 0 === eo ? void 0 : eo.button) && tb <= 44;
        return (0, r.jsx)(N.f6, {
            value: tm,
            children: (0, r.jsxs)(m.Gt, {
                value: e4,
                children: [
                    tY && tu
                        ? (0, r.jsx)(et.Z, {
                              editorRef: e8,
                              options: eL.markdown,
                              channel: eD
                          })
                        : tY
                          ? (0, r.jsx)(ee.Z, {
                                ref: te,
                                editorRef: e8,
                                containerRef: e9,
                                options: eL.markdown
                            })
                          : null,
                    (0, r.jsxs)('div', {
                        ref: e5,
                        className: s()(eS, {
                            [ea.channelTextArea]: !0,
                            [ea.channelTextAreaDisabled]: tV,
                            [ea.highlighted]: eH,
                            [ea.textAreaMobileThemed]: d.tq
                        }),
                        onMouseDown: tB,
                        children: [
                            (0, r.jsx)(Q.Z, {
                                type: eL,
                                channel: eD,
                                activeCommand: tt,
                                pendingReply: eU
                            }),
                            (0, r.jsxs)('div', {
                                ref: e9,
                                onScroll: tL,
                                className: s()(eA, {
                                    [ea.scrollableContainer]: !0,
                                    [ea.themedBackground]: !e0,
                                    [ea.hasConnectedBar]: tK
                                }),
                                children: [
                                    (0, r.jsx)(z.Z, {
                                        channelId: eD.id,
                                        chatInputType: eL
                                    }),
                                    eL.hideAttachmentArea
                                        ? null
                                        : (0, r.jsx)($.Z, {
                                              channelId: eD.id,
                                              type: eL,
                                              canAttachFiles: ts
                                          }),
                                    (0, r.jsxs)('div', {
                                        className: s()(ea.inner, {
                                            [ea.innerDisabled]: tV,
                                            [ea.sansAttachButton]: eL !== W.I.EDIT && (null != tH || (tV && null == tH) || tr),
                                            [ea.sansAttachButtonCreateThread]: eL === W.I.THREAD_CREATION,
                                            [ea.sansAttachButtonCreatePost]: eL === W.I.CREATE_FORUM_POST || eL === W.I.FORWARD_MESSAGE_INPUT,
                                            [ea.sansAttachButtonUserProfileReply]: eL === W.I.USER_PROFILE_REPLY
                                        }),
                                        children: [
                                            tH,
                                            (0, r.jsx)(f.FocusRing, {
                                                ringTarget: e5,
                                                ringClassName: ea.focusRing,
                                                children: (0, r.jsx)(K.Z, {
                                                    ref: e8,
                                                    id: eO,
                                                    focused: eb,
                                                    useSlate: tc,
                                                    textValue: eT,
                                                    richValue: eg,
                                                    disabled: ta,
                                                    placeholder: eC,
                                                    required: eR,
                                                    accessibilityLabel: ey,
                                                    isPreviewing: (tr || ti) && tl,
                                                    channel: eD,
                                                    type: eL,
                                                    canPasteFiles: ts,
                                                    uploadPromptCharacterCount: en.en1,
                                                    maxCharacterCount: null != ej ? ej : t_,
                                                    allowNewLines: eK,
                                                    'aria-describedby': eq,
                                                    onChange: tI,
                                                    onResize: tM,
                                                    onBlur: eG,
                                                    onFocus: ek,
                                                    onKeyDown: eB,
                                                    onSubmit: tS,
                                                    onTab: tP,
                                                    onEnter: tU,
                                                    onMoveSelection: tw,
                                                    onSelectionChanged: tT,
                                                    onMaybeShowAutocomplete: tO,
                                                    onHideAutocomplete: tR,
                                                    promptToUpload: eV,
                                                    fontSize: tf,
                                                    spellcheckEnabled: th,
                                                    canOnlyUseTextCommands: tF,
                                                    className: s()(
                                                        {
                                                            [ea.textAreaThreadCreation]: eL === W.I.THREAD_CREATION,
                                                            [ea.profileBioInput]: eL === W.I.PROFILE_BIO_INPUT
                                                        },
                                                        eN
                                                    ),
                                                    'aria-labelledby': eQ
                                                })
                                            }),
                                            (0, r.jsx)(X.Z, {
                                                ref: e6,
                                                type: eL,
                                                disabled: ta,
                                                channel: eD,
                                                handleSubmit: tA,
                                                isEmpty: 0 === eT.trim().length
                                            })
                                        ]
                                    })
                                ]
                            }),
                            td
                                ? null
                                : (0, r.jsx)(g.Z, {
                                      ref: e7,
                                      channel: eD,
                                      canOnlyUseTextCommands: tF
                                  }),
                            (0, r.jsx)(A.Z, {
                                ref: tN,
                                channel: eD,
                                canMentionRoles: eZ,
                                canMentionChannels: eY,
                                useNewSlashCommands: tc,
                                canOnlyUseTextCommands: tF,
                                canSendStickers: null === (el = eL.stickers) || void 0 === el ? void 0 : el.allowSending,
                                textValue: eT,
                                focused: eb,
                                expressionPickerView: tx,
                                type: eL,
                                targetRef: e5,
                                editorRef: e8,
                                onSendMessage: tS,
                                onSendSticker: ty,
                                onVisibilityChange: tk,
                                editorHeight: tb,
                                setValue: (e, t) => (null == tI ? void 0 : tI(null, e, t)),
                                position: e$
                            }),
                            (0, r.jsx)(L.Z, {
                                textValue: eT,
                                editorHeight: tb
                            }),
                            tZ
                                ? (0, r.jsx)(J.Z, {
                                      type: eL,
                                      textValue: eT,
                                      className: s()(ez, { [ea.indentCharacterCount]: tz }),
                                      maxCharacterCount: ej,
                                      showRemainingCharsAfterCount: eW
                                  })
                                : null,
                            tj
                                ? (0, r.jsx)(v.Z, {
                                      editorRef: e8,
                                      channel: eD,
                                      isEditorFocused: eb,
                                      onSelectSticker: ty,
                                      submitButtonVisible: (null === (eu = eL.submit) || void 0 === eu ? void 0 : eu.button) && (null !== (e_ = null === (ec = eL.submit) || void 0 === ec ? void 0 : ec.ignorePreference) && void 0 !== e_ ? e_ : tE),
                                      stickerIconVisible: null !== (eE = null === (ed = eL.stickers) || void 0 === ed ? void 0 : ed.button) && void 0 !== eE && eE
                                  })
                                : null,
                            eJ
                        ]
                    }),
                    tG
                        ? null
                        : (0, r.jsx)(R.Z, {
                              positionTargetRef: e6,
                              type: eL,
                              onSelectGIF: tv,
                              onSelectEmoji: tC,
                              onSelectSticker: ty,
                              onSelectSound: tD,
                              channel: eD,
                              closeOnModalOuterClick: e1,
                              parentModalKey: e2,
                              position: 'top',
                              align: 'right',
                              positionLayerClassName: ea.expressionPickerPositionLayer
                          })
                ]
            })
        });
    })
);
