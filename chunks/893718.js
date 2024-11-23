n(47120), n(411104);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(836560),
    l = n(512722),
    u = n.n(l),
    c = n(232713),
    d = n(873546),
    f = n(149765),
    _ = n(442837),
    p = n(481060),
    h = n(430742),
    m = n(393238),
    g = n(607070),
    E = n(100527),
    v = n(906732),
    I = n(998698),
    b = n(271668),
    T = n(404295),
    S = n(326133),
    y = n(570220),
    A = n(28546),
    N = n(805680),
    C = n(278754),
    R = n(151574),
    O = n(368844),
    D = n(41776),
    L = n(849522),
    x = n(780291),
    w = n(913663),
    M = n(268350),
    P = n(378233),
    k = n(665906),
    U = n(695346),
    B = n(271383),
    G = n(496675),
    Z = n(944486),
    F = n(398327),
    V = n(117530),
    j = n(594174),
    H = n(459273),
    Y = n(700785),
    W = n(358085),
    K = n(746877),
    z = n(541716),
    q = n(667829),
    Q = n(562267),
    X = n(376918),
    J = n(760196),
    $ = n(258696),
    ee = n(303628),
    et = n(472243),
    en = n(872635),
    er = n(676108),
    ei = n(981631),
    ea = n(665692),
    es = n(957825),
    eo = n(703130);
t.Z = i.memo(
    i.forwardRef(function (e, t) {
        var a, l, el, eu, ec, ed, ef, e_, ep, eh, em, eg, eE, ev, eI;
        let { textValue: eb, richValue: eT, className: eS, innerClassName: ey, editorClassName: eA, id: eN, required: eC, disabled: eR, placeholder: eO, accessibilityLabel: eD, channel: eL, type: ex, focused: ew, renderAttachButton: eM, renderApplicationCommandIcon: eP, pendingReply: ek, onChange: eU, onResize: eB, onBlur: eG, onFocus: eZ, onKeyDown: eF, onSubmit: eV, promptToUpload: ej, highlighted: eH, canMentionRoles: eY, canMentionChannels: eW, maxCharacterCount: eK, showRemainingCharsAfterCount: ez, allowNewLines: eq = !0, characterCountClassName: eQ, 'aria-describedby': eX, 'aria-labelledby': eJ, setEditorRef: e$, autoCompletePosition: e0, children: e1, disableThemedBackground: e2 = !1, emojiPickerCloseOnModalOuterClick: e3, parentModalKey: e4, onCommandSentinelTyped: e6 } = e;
        u()(null != ex, 'chat input type must be set');
        let { analyticsLocations: e5 } = (0, v.ZP)(E.Z.CHANNEL_TEXT_AREA),
            e7 = (function (e) {
                let t = i.useRef(null);
                if (null != e && 'function' == typeof e) throw Error('Only Ref objects are supported');
                return null == e ? t : e;
            })(t),
            e8 = i.useRef(null),
            e9 = i.useRef(null),
            te = i.useRef(null),
            tt = i.useRef(null);
        null == e$ || e$(e9.current);
        let tn = (0, T.h9)(eL.id, 'ChannelTextAreaContainer'),
            [tr, ti] = i.useState(!tn);
        (0, m.P)(e7, (e) => {
            let { width: t } = e;
            return ti(!tn && (null == t || t > 450));
        });
        let { activeCommand: ta, activeCommandSection: ts } = (0, _.cj)([I.Z], () => {
                var e, t;
                return {
                    activeCommand: (null === (e = ex.commands) || void 0 === e ? void 0 : e.enabled) ? I.Z.getActiveCommand(eL.id) : null,
                    activeCommandSection: (null === (t = ex.commands) || void 0 === t ? void 0 : t.enabled) ? I.Z.getActiveCommandSection(eL.id) : null
                };
            }),
            {
                isLurking: to,
                isPendingMember: tl,
                disabled: tu,
                canAttachFiles: tc,
                canCreateThreads: td,
                canEveryoneSendMessages: tf
            } = (function (e, t, n, r) {
                let i = e.getGuildId(),
                    a = (0, _.e7)([D.Z], () => null != i && D.Z.isLurking(i), [i]),
                    s = (0, _.e7)([B.ZP, j.default], () => {
                        var e, t;
                        let n = j.default.getCurrentUser();
                        return null !== (t = null != i && null != n ? (null === (e = B.ZP.getMember(i, n.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
                    }),
                    o = (0, _.cj)(
                        [G.Z],
                        () => {
                            var i, a;
                            let o = e.isPrivate(),
                                l = G.Z.computePermissions(e),
                                u = f.e$(l, ei.Plq.CREATE_PUBLIC_THREADS) || f.e$(l, ei.Plq.CREATE_PRIVATE_THREADS),
                                c = (!(null === (i = t.permissions) || void 0 === i ? void 0 : i.requireCreateTherads) || u) && (!(null === (a = t.permissions) || void 0 === a ? void 0 : a.requireSendMessages) || f.e$(l, ei.Plq.SEND_MESSAGES)),
                                d = c && f.e$(l, ei.Plq.ATTACH_FILES),
                                _ = null != n,
                                p = (0, k.xl)(e);
                            return {
                                disabled: r || s || (!o && !c) || p,
                                canAttachFiles: !0 === t.attachments && (o || s || d || _),
                                canCreateThreads: u,
                                canEveryoneSendMessages: Y.Uu(ei.Plq.SEND_MESSAGES, e)
                            };
                        },
                        [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, s]
                    );
                return {
                    isLurking: a,
                    isPendingMember: s,
                    ...o
                };
            })(eL, ex, ta, eR),
            t_ = ex.toolbarType === z.O.STATIC,
            tp = !U.dN.useSetting() && !(0, W.isAndroidWeb)() && null != window.ResizeObserver,
            th = !tp || !(null === (a = ex.commands) || void 0 === a ? void 0 : a.enabled) || !ew || eb !== ea.GI,
            tm = (0, L.Z)(),
            { isSubmitButtonEnabled: tg, fontSize: tE } = (0, _.cj)([g.Z], () => ({
                fontSize: g.Z.fontSize,
                isSubmitButtonEnabled: g.Z.isSubmitButtonEnabled
            })),
            tv = (0, _.e7)([F.Z], () => F.Z.isEnabled()),
            tI = i.useRef(eb);
        tI.current = eb;
        let tb = i.useCallback(
            (e, t, n) => {
                var r;
                t === ea.GI && '' === tI.current && (null === (r = ex.commands) || void 0 === r ? void 0 : r.enabled) && (null == e6 || e6()), null == eU || eU(e, t, n);
            },
            [eU, e6, null === (l = ex.commands) || void 0 === l ? void 0 : l.enabled]
        );
        !(function (e, t) {
            let n = i.useCallback(() => {
                    if (!t) (0, A.RO)(es.X1.EMOJI, e);
                }, [t, e]),
                r = i.useCallback(() => {
                    var n;
                    if (!t && !!(null === (n = e.gifs) || void 0 === n ? void 0 : n.allowSending)) (0, A.RO)(es.X1.GIF, e);
                }, [t, e]),
                a = i.useCallback(() => {
                    var n;
                    if (!t && !!(null === (n = e.stickers) || void 0 === n ? void 0 : n.allowSending)) (0, A.RO)(es.X1.STICKER, e);
                }, [t, e]);
            (0, H.yp)({
                event: ei.CkL.TOGGLE_EMOJI_POPOUT,
                handler: n
            }),
                (0, H.yp)({
                    event: ei.CkL.TOGGLE_GIF_PICKER,
                    handler: r
                }),
                (0, H.yp)({
                    event: ei.CkL.TOGGLE_STICKER_PICKER,
                    handler: a
                });
        })(ex, tu);
        let { eventEmitter: tT, handleEditorSelectionChanged: tS } = (function (e, t, n) {
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
            })(e9, eb, eT),
            {
                submitting: ty,
                submit: tA,
                handleSubmit: tN
            } = (function (e, t, a, s) {
                let [o, l] = i.useState(!1),
                    u = i.useCallback(
                        (i, c, d, f, _) => {
                            var m, g, E;
                            if (o) return;
                            l(!0);
                            let v = null !== (g = null === (m = w.Z.getStickerPreview(s, t.drafts.type)) || void 0 === m ? void 0 : m.map((e) => e.id)) && void 0 !== g ? g : [],
                                I = null !== (E = V.Z.getUploads(s, t.drafts.type)) && void 0 !== E ? E : [];
                            if (null == c && !f && !_ && (0, O.CB)(I, s)) {
                                l(!1),
                                    (0, p.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e('23755'), n.e('90508'), n.e('18895'), n.e('47512')]).then(n.bind(n, 273602));
                                        return (t) =>
                                            (0, r.jsx)(e, {
                                                ...t,
                                                threadId: s,
                                                attachments: I,
                                                sendMessage: () => u(i, void 0, void 0, void 0, !0)
                                            });
                                    });
                                return;
                            }
                            e({
                                value: i,
                                uploads: I,
                                stickers: v,
                                command: c,
                                commandOptionValues: d,
                                isGif: f
                            }).then((e) => {
                                var n, r, i, o;
                                let { shouldClear: u, shouldRefocus: c } = e;
                                let d = ((n = u), (r = t), null !== (o = n && (null === (i = r.submit) || void 0 === i ? void 0 : i.clearOnSubmit)) && void 0 !== o && o),
                                    f = null != a.current;
                                if (d) {
                                    if (s !== Z.Z.getChannelId()) h.Z.saveDraft(s, '', t.drafts.type);
                                    else f && a.current.clearValue();
                                }
                                f && (l(!1), (0, A._Q)(), c && a.current.focus());
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
            })(eV, ex, e9, eL.id),
            {
                autocompleteRef: tC,
                handleMaybeShowAutocomplete: tR,
                handleHideAutocomplete: tO
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
        let tD =
            ((em = tA),
            (eg = ex),
            (eE = e9),
            i.useCallback(
                (e) => {
                    var t, n;
                    eg === z.I.CREATE_FORUM_POST ? null === (n = eE.current) || void 0 === n || n.insertGIF(e) : em(e.url, void 0, void 0, !0), (0, A._Q)(), null === (t = eE.current) || void 0 === t || t.focus();
                },
                [eE, em, eg]
            ));
        let tL =
                ((ev = e9),
                i.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            r = ev.current;
                        null != e && null != r && r.insertEmoji(e, t, n), t && (0, A._Q)();
                    },
                    [ev]
                )),
            tx = (function (e) {
                let { editorRef: t, disabled: n, textValue: r, channelId: a, chatInputType: s, submit: o } = e,
                    { analyticsLocations: l } = (0, v.ZP)();
                return i.useCallback(
                    (e, i) => {
                        var u, c;
                        !n &&
                            ((0, P.Hc)(i, r, a, s.drafts.type)
                                ? ((0, X._H)({
                                      sticker: e,
                                      stickerSelectLocation: i,
                                      isReplacement: null != w.Z.getStickerPreview(a, s.drafts.type),
                                      analyticsLocations: l
                                  }),
                                  (0, M.eu)(a, e, s.drafts.type))
                                : (o({
                                      value: '',
                                      uploads: void 0,
                                      stickers: [e.id]
                                  }),
                                  null === (c = t.current) || void 0 === c || c.clearValue()),
                            (0, A._Q)(),
                            null === (u = t.current) || void 0 === u || u.focus());
                    },
                    [n, r, a, s.drafts.type, t, l, o]
                );
            })({
                editorRef: e9,
                disabled: tu,
                textValue: eb,
                channelId: eL.id,
                chatInputType: ex,
                submit: eV
            });
        let tw =
                ((eI = e9),
                i.useCallback(
                    (e) => {
                        let t = eI.current;
                        null != e && null != t && t.insertSound(e), (0, A._Q)(), null == t || t.focus();
                    },
                    [eI]
                )),
            tM = i.useCallback(() => {
                var e;
                return null == tt ? void 0 : null === (e = tt.current) || void 0 === e ? void 0 : e.hide();
            }, []),
            { editorHeight: tP, handleResize: tk } = (function (e) {
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
            })(eB),
            {
                handleTab: tU,
                handleEnter: tB,
                handleMoveSelection: tG
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
                expressionPickerView: tZ,
                shouldHideExpressionPicker: tF,
                handleAutocompleteVisibilityChange: tV,
                handleOuterClick: tj
            } = (function (e, t, n) {
                let [r, a] = (0, A.Iu)((e) => [e.activeView, e.activeViewType], c.X);
                i.useEffect(
                    () => () => {
                        (0, A._Q)(e);
                    },
                    [e]
                );
                let s = i.useCallback(
                        (e) => {
                            t.emit('autocomplete-visibility-change', e), e && (0, A._Q)();
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
            })(ex, tT, e9);
        (0, K.S)(tT, eL.guild_id, eL.id);
        let tH = null != ek,
            tY = (tu && !((to || tl) && tf)) || (ty && (null === (el = ex.submit) || void 0 === el ? void 0 : el.useDisabledStylesOnSubmit)),
            tW = null;
        null != ta ? (tW = null == eP ? void 0 : eP(ta, ts, eo.attachButton)) : (!tu || td) && (tW = null == eM ? void 0 : eM(tH, eo.attachButton));
        let tK = tp && null != eT && !tu && ex.showCharacterCount && null == ta,
            tz = tp && !__OVERLAY__ && null != eT && null == ta && ex.toolbarType !== z.O.NONE,
            tq = (function (e, t, n, r) {
                var i, a;
                let s = (0, C.pR)(),
                    o = (0, _.e7)([w.Z], () => w.Z.getStickerPreview(e.id, t.drafts.type)),
                    l = null != o && o.length > 0;
                return s && (null === (i = t.stickers) || void 0 === i ? void 0 : i.autoSuggest) && !l && (null === (a = r.current) || void 0 === a ? void 0 : a.isVisible()) !== !0 && !__OVERLAY__ && null != n;
            })(eL, ex, eT, tC),
            tQ = (0, J.c)({
                channel: eL,
                type: ex,
                activeCommand: ta,
                pendingReply: ek
            }),
            tX = !!(null === (eu = ex.emojis) || void 0 === eu ? void 0 : eu.button) && tP <= 44;
        return (0, r.jsx)(y.f6, {
            value: tT,
            children: (0, r.jsxs)(v.Gt, {
                value: e5,
                children: [
                    tz && t_
                        ? (0, r.jsx)(er.Z, {
                              editorRef: e9,
                              options: ex.markdown,
                              channel: eL
                          })
                        : tz
                          ? (0, r.jsx)(en.Z, {
                                ref: tt,
                                editorRef: e9,
                                containerRef: te,
                                options: ex.markdown
                            })
                          : null,
                    (0, r.jsxs)('div', {
                        ref: e7,
                        className: s()(eS, {
                            [eo.channelTextArea]: !0,
                            [eo.channelTextAreaDisabled]: tY,
                            [eo.highlighted]: eH,
                            [eo.textAreaMobileThemed]: d.tq
                        }),
                        children: [
                            (0, r.jsx)(J.Z, { bars: tQ }),
                            (0, r.jsxs)('div', {
                                ref: te,
                                onScroll: tM,
                                className: s()(ey, {
                                    [eo.scrollableContainer]: !0,
                                    [eo.themedBackground]: !e2,
                                    [eo.hasStackedBar]: tQ.stacked.length > 0
                                }),
                                children: [
                                    (0, r.jsx)(Q.Z, {
                                        channelId: eL.id,
                                        chatInputType: ex
                                    }),
                                    ex.hideAttachmentArea
                                        ? null
                                        : (0, r.jsx)(ee.Z, {
                                              channelId: eL.id,
                                              type: ex,
                                              canAttachFiles: tc
                                          }),
                                    (0, r.jsxs)('div', {
                                        className: s()(eo.inner, {
                                            [eo.innerDisabled]: tY,
                                            [eo.sansAttachButton]: ex !== z.I.EDIT && (null != tW || (tY && null == tW) || to),
                                            [eo.sansAttachButtonCreateThread]: ex === z.I.THREAD_CREATION,
                                            [eo.sansAttachButtonCreatePost]: ex === z.I.CREATE_FORUM_POST || ex === z.I.FORWARD_MESSAGE_INPUT,
                                            [eo.sansAttachButtonUserProfileReply]: ex === z.I.USER_PROFILE_REPLY
                                        }),
                                        onMouseDown: tj,
                                        children: [
                                            tW,
                                            (0, r.jsx)(p.FocusRing, {
                                                ringTarget: e7,
                                                ringClassName: eo.focusRing,
                                                children: (0, r.jsx)(q.Z, {
                                                    ref: e9,
                                                    id: eN,
                                                    focused: ew,
                                                    useSlate: tp,
                                                    textValue: eb,
                                                    richValue: eT,
                                                    disabled: tu,
                                                    placeholder: eO,
                                                    required: eC,
                                                    accessibilityLabel: eD,
                                                    isPreviewing: (to || tl) && tf,
                                                    channel: eL,
                                                    type: ex,
                                                    canPasteFiles: tc,
                                                    uploadPromptCharacterCount: ei.en1,
                                                    maxCharacterCount: null != eK ? eK : tm,
                                                    allowNewLines: eq,
                                                    'aria-describedby': eX,
                                                    onChange: tb,
                                                    onResize: tk,
                                                    onBlur: eG,
                                                    onFocus: eZ,
                                                    onKeyDown: eF,
                                                    onSubmit: tA,
                                                    onTab: tU,
                                                    onEnter: tB,
                                                    onMoveSelection: tG,
                                                    onSelectionChanged: tS,
                                                    onMaybeShowAutocomplete: tR,
                                                    onHideAutocomplete: tO,
                                                    promptToUpload: ej,
                                                    fontSize: tE,
                                                    spellcheckEnabled: tv,
                                                    canOnlyUseTextCommands: tH,
                                                    className: s()(
                                                        {
                                                            [eo.textAreaThreadCreation]: ex === z.I.THREAD_CREATION,
                                                            [eo.profileBioInput]: ex === z.I.PROFILE_BIO_INPUT,
                                                            [eo.overlayInlineReply]: ex === z.I.OVERLAY_INLINE_REPLY
                                                        },
                                                        eA
                                                    ),
                                                    'aria-labelledby': eJ
                                                })
                                            }),
                                            (0, r.jsx)($.Z, {
                                                type: ex,
                                                disabled: tu,
                                                channel: eL,
                                                handleSubmit: tN,
                                                isEmpty: 0 === eb.trim().length,
                                                showAllButtons: tr
                                            })
                                        ]
                                    })
                                ]
                            }),
                            th
                                ? null
                                : (0, r.jsx)(b.Z, {
                                      ref: e8,
                                      channel: eL,
                                      canOnlyUseTextCommands: tH
                                  }),
                            (0, r.jsx)(S.Z, {
                                ref: tC,
                                channel: eL,
                                canMentionRoles: eY,
                                canMentionChannels: eW,
                                useNewSlashCommands: tp,
                                canOnlyUseTextCommands: tH,
                                canSendStickers: null === (ec = ex.stickers) || void 0 === ec ? void 0 : ec.allowSending,
                                textValue: eb,
                                focused: ew,
                                expressionPickerView: tZ,
                                type: ex,
                                targetRef: e7,
                                editorRef: e9,
                                onSendMessage: tA,
                                onSendSticker: tx,
                                onVisibilityChange: tV,
                                editorHeight: tP,
                                setValue: (e, t) => (null == tb ? void 0 : tb(null, e, t)),
                                position: e0
                            }),
                            (0, r.jsx)(x.Z, {
                                textValue: eb,
                                editorHeight: tP
                            }),
                            tK
                                ? (0, r.jsx)(et.Z, {
                                      type: ex,
                                      textValue: eb,
                                      className: s()(eQ, { [eo.indentCharacterCount]: tX }),
                                      maxCharacterCount: eK,
                                      showRemainingCharsAfterCount: ez
                                  })
                                : null,
                            tq
                                ? (0, r.jsx)(R.Z, {
                                      editorRef: e9,
                                      channel: eL,
                                      isEditorFocused: ew,
                                      onSelectSticker: tx,
                                      submitButtonVisible: (null === (ed = ex.submit) || void 0 === ed ? void 0 : ed.button) && (null !== (ep = null === (ef = ex.submit) || void 0 === ef ? void 0 : ef.ignorePreference) && void 0 !== ep ? ep : tg),
                                      stickerIconVisible: null !== (eh = null === (e_ = ex.stickers) || void 0 === e_ ? void 0 : e_.button) && void 0 !== eh && eh
                                  })
                                : null,
                            e1
                        ]
                    }),
                    tF
                        ? null
                        : (0, r.jsx)(N.Z, {
                              positionTargetRef: e7,
                              type: ex,
                              onSelectGIF: tD,
                              onSelectEmoji: tL,
                              onSelectSticker: tx,
                              onSelectSound: tw,
                              channel: eL,
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
