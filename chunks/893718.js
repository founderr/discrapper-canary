var r = n(47120);
var i = n(411104);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(836560);
var c = n(512722),
    d = n.n(c),
    _ = n(143927),
    E = n(873546),
    f = n(149765),
    h = n(442837),
    p = n(481060),
    m = n(430742),
    I = n(393238),
    T = n(607070),
    g = n(100527),
    S = n(906732),
    A = n(998698),
    v = n(271668),
    N = n(931981),
    O = n(326133),
    R = n(570220),
    C = n(28546),
    y = n(805680),
    b = n(151574),
    L = n(368844),
    D = n(41776),
    M = n(849522),
    P = n(780291),
    U = n(913663),
    w = n(268350),
    x = n(378233),
    G = n(665906),
    k = n(695346),
    B = n(271383),
    F = n(496675),
    Z = n(944486),
    V = n(398327),
    H = n(117530),
    Y = n(594174),
    j = n(459273),
    W = n(700785),
    K = n(358085),
    z = n(746877),
    q = n(541716),
    Q = n(667829),
    X = n(562267),
    $ = n(376918),
    J = n(760196),
    ee = n(258696),
    et = n(303628),
    en = n(472243),
    er = n(872635),
    ei = n(676108),
    ea = n(981631),
    eo = n(665692),
    es = n(957825),
    el = n(933283);
let eu = 44,
    ec = 450;
function ed(e) {
    return e !== Z.Z.getChannelId();
}
function e_(e, t) {
    var n, r;
    return null !== (r = e && (null === (n = t.submit) || void 0 === n ? void 0 : n.clearOnSubmit)) && void 0 !== r && r;
}
function eE(e, t, r, i) {
    let [s, l] = o.useState(!1),
        u = o.useCallback(
            (o, c, d, _, E) => {
                var f, h, I;
                if (s) return;
                l(!0);
                let T = null !== (h = null === (f = U.Z.getStickerPreview(i, t.drafts.type)) || void 0 === f ? void 0 : f.map((e) => e.id)) && void 0 !== h ? h : [],
                    g = null !== (I = H.Z.getUploads(i, t.drafts.type)) && void 0 !== I ? I : [];
                if (null == c && !_ && !E && (0, L.CB)(g, i)) {
                    l(!1),
                        (0, p.openModalLazy)(async () => {
                            let { default: e } = await n.e('91842').then(n.bind(n, 273602));
                            return (t) =>
                                (0, a.jsx)(e, {
                                    ...t,
                                    threadId: i,
                                    attachments: g,
                                    sendMessage: () => u(o, void 0, void 0, void 0, !0)
                                });
                        });
                    return;
                }
                e({
                    value: o,
                    uploads: g,
                    stickers: T,
                    command: c,
                    commandOptionValues: d,
                    isGif: _
                }).then((e) => {
                    let { shouldClear: n, shouldRefocus: a } = e,
                        o = e_(n, t),
                        s = null != r.current;
                    o && (ed(i) ? m.Z.saveDraft(i, '', t.drafts.type) : s && r.current.clearValue()), s && (l(!1), (0, C._Q)(), a && r.current.focus());
                });
            },
            [r, e, s, t, i]
        );
    return {
        submitting: s,
        submit: u,
        handleSubmit: o.useCallback((e) => {
            var t;
            null == r || null === (t = r.current) || void 0 === t || t.submit(e);
        }, [])
    };
}
function ef(e, t, n) {
    return o.useCallback(
        (r) => {
            var i, a;
            t === q.I.CREATE_FORUM_POST ? null === (a = n.current) || void 0 === a || a.insertGIF(r) : e(r.url, void 0, void 0, !0), (0, C._Q)(), null === (i = n.current) || void 0 === i || i.focus();
        },
        [n, e, t]
    );
}
function eh(e) {
    return o.useCallback(
        function (t, n) {
            let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = e.current;
            null != t && null != i && i.insertEmoji(t, n, r), n && (0, C._Q)();
        },
        [e]
    );
}
function ep(e) {
    let { editorRef: t, disabled: n, textValue: r, channelId: i, chatInputType: a, submit: s } = e,
        { analyticsLocations: l } = (0, S.ZP)();
    return o.useCallback(
        (e, o) => {
            var u, c;
            !n &&
                ((0, x.Hc)(o, r, i, a.drafts.type)
                    ? ((0, $._H)({
                          sticker: e,
                          stickerSelectLocation: o,
                          isReplacement: null != U.Z.getStickerPreview(i, a.drafts.type),
                          analyticsLocations: l
                      }),
                      (0, w.eu)(i, e, a.drafts.type))
                    : (s({
                          value: '',
                          uploads: void 0,
                          stickers: [e.id]
                      }),
                      null === (c = t.current) || void 0 === c || c.clearValue()),
                (0, C._Q)(),
                null === (u = t.current) || void 0 === u || u.focus());
        },
        [n, r, i, a.drafts.type, t, l, s]
    );
}
function em(e) {
    return o.useCallback(
        (t) => {
            let n = e.current;
            null != t && null != n && n.insertSound(t), (0, C._Q)();
        },
        [e]
    );
}
function eI(e, t) {
    let n = o.useCallback(() => {
            if (!t) (0, C.RO)(es.X1.EMOJI, e);
        }, [t, e]),
        r = o.useCallback(() => {
            var n;
            if (!t && !!(null === (n = e.gifs) || void 0 === n ? void 0 : n.allowSending)) (0, C.RO)(es.X1.GIF, e);
        }, [t, e]),
        i = o.useCallback(() => {
            var n;
            if (!t && !!(null === (n = e.stickers) || void 0 === n ? void 0 : n.allowSending)) (0, C.RO)(es.X1.STICKER, e);
        }, [t, e]);
    (0, j.yp)({
        event: ea.CkL.TOGGLE_EMOJI_POPOUT,
        handler: n
    }),
        (0, j.yp)({
            event: ea.CkL.TOGGLE_GIF_PICKER,
            handler: r
        }),
        (0, j.yp)({
            event: ea.CkL.TOGGLE_STICKER_PICKER,
            handler: i
        });
}
function eT(e, t, n) {
    let [r] = o.useState(() => new u.EventEmitter());
    o.useEffect(() => {
        r.emit('text-changed', t, n);
    }, [t, n, r]);
    let i = (t) => {
        null != e.current && r.emit('selection-changed', t);
    };
    return {
        eventEmitter: r,
        handleEditorSelectionChanged: i
    };
}
function eg() {
    let e = o.useRef(null),
        t = o.useCallback(() => {
            var t;
            null === (t = e.current) || void 0 === t || t.onMaybeShowAutocomplete();
        }, []),
        n = o.useCallback(() => {
            var t;
            null === (t = e.current) || void 0 === t || t.onHideAutocomplete();
        }, []);
    return {
        autocompleteRef: e,
        handleMaybeShowAutocomplete: t,
        handleHideAutocomplete: n
    };
}
function eS(e) {
    let t = o.useRef(null);
    if (null != e && 'function' == typeof e) throw Error('Only Ref objects are supported');
    return null == e ? t : e;
}
function eA(e) {
    let [t, n] = o.useState(0);
    return {
        editorHeight: t,
        handleResize: o.useCallback(
            (t) => {
                n(null != t ? t : 0), null == e || e(t);
            },
            [e]
        )
    };
}
function ev(e, t, n, r) {
    let i = e.getGuildId(),
        a = (0, h.e7)([D.Z], () => null != i && D.Z.isLurking(i), [i]),
        o = (0, h.e7)([B.ZP, Y.default], () => {
            var e, t;
            let n = Y.default.getCurrentUser();
            return null !== (t = null != i && null != n ? (null === (e = B.ZP.getMember(i, n.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
        }),
        s = (0, h.cj)(
            [F.Z],
            () => {
                var i, a;
                let s = e.isPrivate(),
                    l = F.Z.computePermissions(e),
                    u = f.e$(l, ea.Plq.CREATE_PUBLIC_THREADS) || f.e$(l, ea.Plq.CREATE_PRIVATE_THREADS),
                    c = (!(null === (i = t.permissions) || void 0 === i ? void 0 : i.requireCreateTherads) || u) && (!(null === (a = t.permissions) || void 0 === a ? void 0 : a.requireSendMessages) || f.e$(l, ea.Plq.SEND_MESSAGES)),
                    d = c && f.e$(l, ea.Plq.ATTACH_FILES),
                    _ = null != n,
                    E = (0, G.xl)(e);
                return {
                    disabled: r || o || (!s && !c) || E,
                    canAttachFiles: !0 === t.attachments && (s || o || d || _),
                    canCreateThreads: u,
                    canEveryoneSendMessages: W.Uu(ea.Plq.SEND_MESSAGES, e)
                };
            },
            [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, o]
        );
    return {
        isLurking: a,
        isPendingMember: o,
        ...s
    };
}
function eN(e, t, n) {
    let [r, i] = (0, C.Iu)((e) => [e.activeView, e.activeViewType], _.Z);
    o.useEffect(
        () => () => {
            (0, C._Q)(e);
        },
        [e]
    );
    let a = o.useCallback(
            (e) => {
                t.emit('autocomplete-visibility-change', e), e && (0, C._Q)();
            },
            [t]
        ),
        s = o.useCallback(() => {
            var e;
            null == r && (null === (e = n.current) || void 0 === e || e.handleOuterClick());
        }, [r]),
        l = null == r || null == i || i !== e;
    return {
        expressionPickerView: r,
        shouldHideExpressionPicker: l,
        handleAutocompleteVisibilityChange: a,
        handleOuterClick: s
    };
}
function eO(e, t, n) {
    let r = o.useCallback(() => {
            var r, i;
            return !!(!n && (null === (r = t.current) || void 0 === r ? void 0 : r.onTabOrEnter(!1))) || (null === (i = e.current) || void 0 === i ? void 0 : i.onTabOrEnter(!1)) || !1;
        }, [n]),
        i = o.useCallback(() => {
            var r, i;
            return !!(!n && (null === (r = t.current) || void 0 === r ? void 0 : r.onTabOrEnter(!0))) || (null === (i = e.current) || void 0 === i ? void 0 : i.onTabOrEnter(!0)) || !1;
        }, [n]);
    return {
        handleTab: r,
        handleEnter: i,
        handleMoveSelection: o.useCallback(
            (r) => {
                var i, a;
                return !!(!n && (null === (i = t.current) || void 0 === i ? void 0 : i.onMoveSelection(r))) || (null === (a = e.current) || void 0 === a ? void 0 : a.onMoveSelection(r)) || !1;
            },
            [n]
        )
    };
}
function eR(e, t, n, r) {
    var i, a;
    let o = k.up.useSetting(),
        s = (0, h.e7)([U.Z], () => U.Z.getStickerPreview(e.id, t.drafts.type)),
        l = null != s && s.length > 0;
    return o && (null === (i = t.stickers) || void 0 === i ? void 0 : i.autoSuggest) && !l && (null === (a = r.current) || void 0 === a ? void 0 : a.isVisible()) !== !0 && !__OVERLAY__ && null != n;
}
function eC(e, t) {
    var n, r, i, s, u, c, _, f, m, C;
    let { textValue: L, richValue: D, className: U, innerClassName: w, editorClassName: x, id: G, required: B, disabled: F, placeholder: Z, accessibilityLabel: H, channel: Y, type: j, focused: W, renderAttachButton: $, renderApplicationCommandIcon: es, pendingReply: ed, onChange: e_, onResize: eC, onBlur: ey, onFocus: eb, onKeyDown: eL, onSubmit: eD, promptToUpload: eM, highlighted: eP, canMentionRoles: eU, canMentionChannels: ew, maxCharacterCount: ex, showRemainingCharsAfterCount: eG, allowNewLines: ek = !0, characterCountClassName: eB, 'aria-describedby': eF, 'aria-labelledby': eZ, setEditorRef: eV, autoCompletePosition: eH, children: eY, disableThemedBackground: ej = !1, emojiPickerCloseOnModalOuterClick: eW, parentModalKey: eK, onCommandSentinelTyped: ez } = e;
    d()(null != j, 'chat input type must be set');
    let { analyticsLocations: eq } = (0, S.ZP)(g.Z.CHANNEL_TEXT_AREA),
        eQ = eS(t),
        eX = o.useRef(null),
        e$ = o.useRef(null),
        eJ = o.useRef(null),
        e0 = o.useRef(null);
    null == eV || eV(e$.current);
    let [e1, e2] = o.useState(!0);
    (0, I.P)(eQ, (e) => {
        let { width: t } = e;
        return e2(null == t || t > ec);
    });
    let { activeCommand: e3, activeCommandSection: e4 } = (0, h.cj)([A.Z], () => {
            var e, t;
            return {
                activeCommand: (null === (e = j.commands) || void 0 === e ? void 0 : e.enabled) ? A.Z.getActiveCommand(Y.id) : null,
                activeCommandSection: (null === (t = j.commands) || void 0 === t ? void 0 : t.enabled) ? A.Z.getActiveCommandSection(Y.id) : null
            };
        }),
        { isLurking: e5, isPendingMember: e6, disabled: e7, canAttachFiles: e8, canCreateThreads: e9, canEveryoneSendMessages: te } = ev(Y, j, e3, F),
        tt = j.toolbarType === q.O.STATIC,
        tn = !k.dN.useSetting() && !(0, K.isAndroidWeb)() && null != window.ResizeObserver,
        tr = !tn || !(null === (n = j.commands) || void 0 === n ? void 0 : n.enabled) || !W || L !== eo.GI,
        ti = (0, M.Z)(),
        { isSubmitButtonEnabled: ta, fontSize: to } = (0, h.cj)([T.Z], () => ({
            fontSize: T.Z.fontSize,
            isSubmitButtonEnabled: T.Z.isSubmitButtonEnabled
        })),
        ts = (0, h.e7)([V.Z], () => V.Z.isEnabled()),
        tl = o.useRef(L);
    tl.current = L;
    let tu = o.useCallback(
        (e, t, n) => {
            var r;
            t === eo.GI && '' === tl.current && (null === (r = j.commands) || void 0 === r ? void 0 : r.enabled) && (null == ez || ez()), null == e_ || e_(e, t, n);
        },
        [e_, ez, null === (r = j.commands) || void 0 === r ? void 0 : r.enabled]
    );
    eI(j, e7);
    let { eventEmitter: tc, handleEditorSelectionChanged: td } = eT(e$, L, D),
        { submitting: t_, submit: tE, handleSubmit: tf } = eE(eD, j, e$, Y.id),
        { autocompleteRef: th, handleMaybeShowAutocomplete: tp, handleHideAutocomplete: tm } = eg(),
        tI = ef(tE, j, e$),
        tT = eh(e$),
        tg = ep({
            editorRef: e$,
            disabled: e7,
            textValue: L,
            channelId: Y.id,
            chatInputType: j,
            submit: eD
        }),
        tS = em(e$),
        tA = o.useCallback(() => {
            var e;
            return null == e0 ? void 0 : null === (e = e0.current) || void 0 === e ? void 0 : e.hide();
        }, []),
        { editorHeight: tv, handleResize: tN } = eA(eC),
        { handleTab: tO, handleEnter: tR, handleMoveSelection: tC } = eO(th, eX, tr),
        { expressionPickerView: ty, shouldHideExpressionPicker: tb, handleAutocompleteVisibilityChange: tL, handleOuterClick: tD } = eN(j, tc, e$);
    (0, z.S)(tc, Y.guild_id, Y.id);
    let tM = null != ed,
        tP = (e7 && !((e5 || e6) && te)) || (t_ && (null === (i = j.submit) || void 0 === i ? void 0 : i.useDisabledStylesOnSubmit)),
        tU = null;
    null != e3 ? (tU = null == es ? void 0 : es(e3, e4, el.attachButton)) : (!e7 || e9) && (tU = null == $ ? void 0 : $(tM, el.attachButton));
    let tw = tn && null != D && !e7 && j.showCharacterCount && null == e3,
        tx = tn && !__OVERLAY__ && null != D && null == e3 && j.toolbarType !== q.O.NONE,
        tG = eR(Y, j, D, th),
        tk = (0, N.e)(Y),
        tB = null != e3 || null != ed || tk,
        tF = !!(null === (s = j.emojis) || void 0 === s ? void 0 : s.button) && tv <= eu;
    return (0, a.jsx)(R.f6, {
        value: tc,
        children: (0, a.jsxs)(S.Gt, {
            value: eq,
            children: [
                tx && tt
                    ? (0, a.jsx)(ei.Z, {
                          editorRef: e$,
                          options: j.markdown,
                          channel: Y
                      })
                    : tx
                      ? (0, a.jsx)(er.Z, {
                            ref: e0,
                            editorRef: e$,
                            containerRef: eJ,
                            options: j.markdown
                        })
                      : null,
                (0, a.jsxs)('div', {
                    ref: eQ,
                    className: l()(U, {
                        [el.channelTextArea]: !0,
                        [el.channelTextAreaDisabled]: tP,
                        [el.highlighted]: eP,
                        [el.textAreaMobileThemed]: E.tq
                    }),
                    onMouseDown: tD,
                    children: [
                        (0, a.jsx)(J.Z, {
                            type: j,
                            channel: Y,
                            activeCommand: e3,
                            pendingReply: ed
                        }),
                        (0, a.jsxs)('div', {
                            ref: eJ,
                            onScroll: tA,
                            className: l()(w, {
                                [el.scrollableContainer]: !0,
                                [el.themedBackground]: !ej,
                                [el.hasConnectedBar]: tB
                            }),
                            children: [
                                (0, a.jsx)(X.Z, {
                                    channelId: Y.id,
                                    chatInputType: j
                                }),
                                j.hideAttachmentArea
                                    ? null
                                    : (0, a.jsx)(et.Z, {
                                          channelId: Y.id,
                                          type: j,
                                          canAttachFiles: e8
                                      }),
                                (0, a.jsxs)('div', {
                                    className: l()(el.inner, {
                                        [el.innerDisabled]: tP,
                                        [el.sansAttachButton]: j !== q.I.EDIT && (null != tU || (tP && null == tU) || e5),
                                        [el.sansAttachButtonCreateThread]: j === q.I.THREAD_CREATION,
                                        [el.sansAttachButtonCreatePost]: j === q.I.CREATE_FORUM_POST || j === q.I.FORWARD_MESSAGE_INPUT,
                                        [el.sansAttachButtonUserProfileReply]: j === q.I.USER_PROFILE_REPLY
                                    }),
                                    children: [
                                        tU,
                                        (0, a.jsx)(p.FocusRing, {
                                            ringTarget: eQ,
                                            ringClassName: el.focusRing,
                                            children: (0, a.jsx)(Q.Z, {
                                                ref: e$,
                                                id: G,
                                                focused: W,
                                                useSlate: tn,
                                                textValue: L,
                                                richValue: D,
                                                disabled: e7,
                                                placeholder: Z,
                                                required: B,
                                                accessibilityLabel: H,
                                                isPreviewing: (e5 || e6) && te,
                                                channel: Y,
                                                type: j,
                                                canPasteFiles: e8,
                                                uploadPromptCharacterCount: ea.en1,
                                                maxCharacterCount: null != ex ? ex : ti,
                                                allowNewLines: ek,
                                                'aria-describedby': eF,
                                                onChange: tu,
                                                onResize: tN,
                                                onBlur: ey,
                                                onFocus: eb,
                                                onKeyDown: eL,
                                                onSubmit: tE,
                                                onTab: tO,
                                                onEnter: tR,
                                                onMoveSelection: tC,
                                                onSelectionChanged: td,
                                                onMaybeShowAutocomplete: tp,
                                                onHideAutocomplete: tm,
                                                promptToUpload: eM,
                                                fontSize: to,
                                                spellcheckEnabled: ts,
                                                canOnlyUseTextCommands: tM,
                                                className: l()(
                                                    {
                                                        [el.textAreaThreadCreation]: j === q.I.THREAD_CREATION,
                                                        [el.profileBioInput]: j === q.I.PROFILE_BIO_INPUT
                                                    },
                                                    x
                                                ),
                                                'aria-labelledby': eZ
                                            })
                                        }),
                                        (0, a.jsx)(ee.Z, {
                                            type: j,
                                            disabled: e7,
                                            channel: Y,
                                            handleSubmit: tf,
                                            isEmpty: 0 === L.trim().length,
                                            showAllButtons: e1
                                        })
                                    ]
                                })
                            ]
                        }),
                        tr
                            ? null
                            : (0, a.jsx)(v.Z, {
                                  ref: eX,
                                  channel: Y,
                                  canOnlyUseTextCommands: tM
                              }),
                        (0, a.jsx)(O.Z, {
                            ref: th,
                            channel: Y,
                            canMentionRoles: eU,
                            canMentionChannels: ew,
                            useNewSlashCommands: tn,
                            canOnlyUseTextCommands: tM,
                            canSendStickers: null === (u = j.stickers) || void 0 === u ? void 0 : u.allowSending,
                            textValue: L,
                            focused: W,
                            expressionPickerView: ty,
                            type: j,
                            targetRef: eQ,
                            editorRef: e$,
                            onSendMessage: tE,
                            onSendSticker: tg,
                            onVisibilityChange: tL,
                            editorHeight: tv,
                            setValue: (e, t) => (null == tu ? void 0 : tu(null, e, t)),
                            position: eH
                        }),
                        (0, a.jsx)(P.Z, {
                            textValue: L,
                            editorHeight: tv
                        }),
                        tw
                            ? (0, a.jsx)(en.Z, {
                                  type: j,
                                  textValue: L,
                                  className: l()(eB, { [el.indentCharacterCount]: tF }),
                                  maxCharacterCount: ex,
                                  showRemainingCharsAfterCount: eG
                              })
                            : null,
                        tG
                            ? (0, a.jsx)(b.Z, {
                                  editorRef: e$,
                                  channel: Y,
                                  isEditorFocused: W,
                                  onSelectSticker: tg,
                                  submitButtonVisible: (null === (c = j.submit) || void 0 === c ? void 0 : c.button) && (null !== (m = null === (_ = j.submit) || void 0 === _ ? void 0 : _.ignorePreference) && void 0 !== m ? m : ta),
                                  stickerIconVisible: null !== (C = null === (f = j.stickers) || void 0 === f ? void 0 : f.button) && void 0 !== C && C
                              })
                            : null,
                        eY
                    ]
                }),
                tb
                    ? null
                    : (0, a.jsx)(y.Z, {
                          positionTargetRef: eQ,
                          type: j,
                          onSelectGIF: tI,
                          onSelectEmoji: tT,
                          onSelectSticker: tg,
                          onSelectSound: tS,
                          channel: Y,
                          closeOnModalOuterClick: eW,
                          parentModalKey: eK,
                          position: 'top',
                          align: 'right',
                          positionLayerClassName: el.expressionPickerPositionLayer
                      })
            ]
        })
    });
}
t.Z = o.memo(o.forwardRef(eC));
