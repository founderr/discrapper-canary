n(47120), n(411104);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(836560),
    l = n(512722),
    u = n.n(l),
    c = n(782690),
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
    N = n(326133),
    R = n(570220),
    O = n(28546),
    v = n(805680),
    C = n(151574),
    L = n(368844),
    D = n(41776),
    y = n(849522),
    b = n(780291),
    M = n(913663),
    P = n(268350),
    U = n(378233),
    w = n(665906),
    x = n(695346),
    G = n(271383),
    k = n(496675),
    B = n(944486),
    F = n(398327),
    V = n(117530),
    H = n(594174),
    Z = n(459273),
    Y = n(700785),
    j = n(358085),
    W = n(746877),
    K = n(541716),
    z = n(667829),
    q = n(562267),
    Q = n(376918),
    X = n(760196),
    $ = n(258696),
    J = n(303628),
    ee = n(472243),
    et = n(872635),
    en = n(676108),
    er = n(981631),
    ei = n(665692),
    ea = n(957825),
    es = n(703130);
t.Z = i.memo(
    i.forwardRef(function (e, t) {
        var a, l, eo, el, eu, ec, ed, e_, eE, ef, eh, ep, eI, em, eT;
        let { textValue: eS, richValue: eg, className: eA, innerClassName: eN, editorClassName: eR, id: eO, required: ev, disabled: eC, placeholder: eL, accessibilityLabel: eD, channel: ey, type: eb, focused: eM, renderAttachButton: eP, renderApplicationCommandIcon: eU, pendingReply: ew, onChange: ex, onResize: eG, onBlur: ek, onFocus: eB, onKeyDown: eF, onSubmit: eV, promptToUpload: eH, highlighted: eZ, canMentionRoles: eY, canMentionChannels: ej, maxCharacterCount: eW, showRemainingCharsAfterCount: eK, allowNewLines: ez = !0, characterCountClassName: eq, 'aria-describedby': eQ, 'aria-labelledby': eX, setEditorRef: e$, autoCompletePosition: eJ, children: e0, disableThemedBackground: e1 = !1, emojiPickerCloseOnModalOuterClick: e2, parentModalKey: e3, onCommandSentinelTyped: e4 } = e;
        u()(null != eb, 'chat input type must be set');
        let { analyticsLocations: e6 } = (0, T.ZP)(m.Z.CHANNEL_TEXT_AREA),
            e5 = (function (e) {
                let t = i.useRef(null);
                if (null != e && 'function' == typeof e) throw Error('Only Ref objects are supported');
                return null == e ? t : e;
            })(t),
            e7 = i.useRef(null),
            e8 = i.useRef(null),
            e9 = i.useRef(null),
            te = i.useRef(null);
        null == e$ || e$(e8.current);
        let tt = (0, A.h9)(ey.id, 'ChannelTextAreaContainer'),
            [tn, tr] = i.useState(!tt);
        (0, p.P)(e5, (e) => {
            let { width: t } = e;
            return tr(!tt && (null == t || t > 450));
        });
        let { activeCommand: ti, activeCommandSection: ta } = (0, E.cj)([S.Z], () => {
                var e, t;
                return {
                    activeCommand: (null === (e = eb.commands) || void 0 === e ? void 0 : e.enabled) ? S.Z.getActiveCommand(ey.id) : null,
                    activeCommandSection: (null === (t = eb.commands) || void 0 === t ? void 0 : t.enabled) ? S.Z.getActiveCommandSection(ey.id) : null
                };
            }),
            {
                isLurking: ts,
                isPendingMember: to,
                disabled: tl,
                canAttachFiles: tu,
                canCreateThreads: tc,
                canEveryoneSendMessages: td
            } = (function (e, t, n, r) {
                let i = e.getGuildId(),
                    a = (0, E.e7)([D.Z], () => null != i && D.Z.isLurking(i), [i]),
                    s = (0, E.e7)([G.ZP, H.default], () => {
                        var e, t;
                        let n = H.default.getCurrentUser();
                        return null !== (t = null != i && null != n ? (null === (e = G.ZP.getMember(i, n.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
                    }),
                    o = (0, E.cj)(
                        [k.Z],
                        () => {
                            var i, a;
                            let o = e.isPrivate(),
                                l = k.Z.computePermissions(e),
                                u = _.e$(l, er.Plq.CREATE_PUBLIC_THREADS) || _.e$(l, er.Plq.CREATE_PRIVATE_THREADS),
                                c = (!(null === (i = t.permissions) || void 0 === i ? void 0 : i.requireCreateTherads) || u) && (!(null === (a = t.permissions) || void 0 === a ? void 0 : a.requireSendMessages) || _.e$(l, er.Plq.SEND_MESSAGES)),
                                d = c && _.e$(l, er.Plq.ATTACH_FILES),
                                E = null != n,
                                f = (0, w.xl)(e);
                            return {
                                disabled: r || s || (!o && !c) || f,
                                canAttachFiles: !0 === t.attachments && (o || s || d || E),
                                canCreateThreads: u,
                                canEveryoneSendMessages: Y.Uu(er.Plq.SEND_MESSAGES, e)
                            };
                        },
                        [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, s]
                    );
                return {
                    isLurking: a,
                    isPendingMember: s,
                    ...o
                };
            })(ey, eb, ti, eC),
            t_ = eb.toolbarType === K.O.STATIC,
            tE = !x.dN.useSetting() && !(0, j.isAndroidWeb)() && null != window.ResizeObserver,
            tf = !tE || !(null === (a = eb.commands) || void 0 === a ? void 0 : a.enabled) || !eM || eS !== ei.GI,
            th = (0, y.Z)(),
            { isSubmitButtonEnabled: tp, fontSize: tI } = (0, E.cj)([I.Z], () => ({
                fontSize: I.Z.fontSize,
                isSubmitButtonEnabled: I.Z.isSubmitButtonEnabled
            })),
            tm = (0, E.e7)([F.Z], () => F.Z.isEnabled()),
            tT = i.useRef(eS);
        tT.current = eS;
        let tS = i.useCallback(
            (e, t, n) => {
                var r;
                t === ei.GI && '' === tT.current && (null === (r = eb.commands) || void 0 === r ? void 0 : r.enabled) && (null == e4 || e4()), null == ex || ex(e, t, n);
            },
            [ex, e4, null === (l = eb.commands) || void 0 === l ? void 0 : l.enabled]
        );
        !(function (e, t) {
            let n = i.useCallback(() => {
                    if (!t) (0, O.RO)(ea.X1.EMOJI, e);
                }, [t, e]),
                r = i.useCallback(() => {
                    var n;
                    if (!t && !!(null === (n = e.gifs) || void 0 === n ? void 0 : n.allowSending)) (0, O.RO)(ea.X1.GIF, e);
                }, [t, e]),
                a = i.useCallback(() => {
                    var n;
                    if (!t && !!(null === (n = e.stickers) || void 0 === n ? void 0 : n.allowSending)) (0, O.RO)(ea.X1.STICKER, e);
                }, [t, e]);
            (0, Z.yp)({
                event: er.CkL.TOGGLE_EMOJI_POPOUT,
                handler: n
            }),
                (0, Z.yp)({
                    event: er.CkL.TOGGLE_GIF_PICKER,
                    handler: r
                }),
                (0, Z.yp)({
                    event: er.CkL.TOGGLE_STICKER_PICKER,
                    handler: a
                });
        })(eb, tl);
        let { eventEmitter: tg, handleEditorSelectionChanged: tA } = (function (e, t, n) {
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
            })(e8, eS, eg),
            {
                submitting: tN,
                submit: tR,
                handleSubmit: tO
            } = (function (e, t, a, s) {
                let [o, l] = i.useState(!1),
                    u = i.useCallback(
                        (i, c, d, _, E) => {
                            var p, I, m;
                            if (o) return;
                            l(!0);
                            let T = null !== (I = null === (p = M.Z.getStickerPreview(s, t.drafts.type)) || void 0 === p ? void 0 : p.map((e) => e.id)) && void 0 !== I ? I : [],
                                S = null !== (m = V.Z.getUploads(s, t.drafts.type)) && void 0 !== m ? m : [];
                            if (null == c && !_ && !E && (0, L.CB)(S, s)) {
                                l(!1),
                                    (0, f.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e('23755'), n.e('90508'), n.e('18895'), n.e('32525')]).then(n.bind(n, 273602));
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
                                    if (s !== B.Z.getChannelId()) h.Z.saveDraft(s, '', t.drafts.type);
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
            })(eV, eb, e8, ey.id),
            {
                autocompleteRef: tv,
                handleMaybeShowAutocomplete: tC,
                handleHideAutocomplete: tL
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
            ((eh = tR),
            (ep = eb),
            (eI = e8),
            i.useCallback(
                (e) => {
                    var t, n;
                    ep === K.I.CREATE_FORUM_POST ? null === (n = eI.current) || void 0 === n || n.insertGIF(e) : eh(e.url, void 0, void 0, !0), (0, O._Q)(), null === (t = eI.current) || void 0 === t || t.focus();
                },
                [eI, eh, ep]
            ));
        let ty =
                ((em = e8),
                i.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            r = em.current;
                        null != e && null != r && r.insertEmoji(e, t, n), t && (0, O._Q)();
                    },
                    [em]
                )),
            tb = (function (e) {
                let { editorRef: t, disabled: n, textValue: r, channelId: a, chatInputType: s, submit: o } = e,
                    { analyticsLocations: l } = (0, T.ZP)();
                return i.useCallback(
                    (e, i) => {
                        var u, c;
                        !n &&
                            ((0, U.Hc)(i, r, a, s.drafts.type)
                                ? ((0, Q._H)({
                                      sticker: e,
                                      stickerSelectLocation: i,
                                      isReplacement: null != M.Z.getStickerPreview(a, s.drafts.type),
                                      analyticsLocations: l
                                  }),
                                  (0, P.eu)(a, e, s.drafts.type))
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
                disabled: tl,
                textValue: eS,
                channelId: ey.id,
                chatInputType: eb,
                submit: eV
            });
        let tM =
                ((eT = e8),
                i.useCallback(
                    (e) => {
                        let t = eT.current;
                        null != e && null != t && t.insertSound(e), (0, O._Q)();
                    },
                    [eT]
                )),
            tP = i.useCallback(() => {
                var e;
                return null == te ? void 0 : null === (e = te.current) || void 0 === e ? void 0 : e.hide();
            }, []),
            { editorHeight: tU, handleResize: tw } = (function (e) {
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
            })(eG),
            {
                handleTab: tx,
                handleEnter: tG,
                handleMoveSelection: tk
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
            })(tv, e7, tf),
            {
                expressionPickerView: tB,
                shouldHideExpressionPicker: tF,
                handleAutocompleteVisibilityChange: tV,
                handleOuterClick: tH
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
            })(eb, tg, e8);
        (0, W.S)(tg, ey.guild_id, ey.id);
        let tZ = null != ew,
            tY = (tl && !((ts || to) && td)) || (tN && (null === (eo = eb.submit) || void 0 === eo ? void 0 : eo.useDisabledStylesOnSubmit)),
            tj = null;
        null != ti ? (tj = null == eU ? void 0 : eU(ti, ta, es.attachButton)) : (!tl || tc) && (tj = null == eP ? void 0 : eP(tZ, es.attachButton));
        let tW = tE && null != eg && !tl && eb.showCharacterCount && null == ti,
            tK = tE && !__OVERLAY__ && null != eg && null == ti && eb.toolbarType !== K.O.NONE,
            tz = (function (e, t, n, r) {
                var i, a;
                let s = x.up.useSetting(),
                    o = (0, E.e7)([M.Z], () => M.Z.getStickerPreview(e.id, t.drafts.type)),
                    l = null != o && o.length > 0;
                return s && (null === (i = t.stickers) || void 0 === i ? void 0 : i.autoSuggest) && !l && (null === (a = r.current) || void 0 === a ? void 0 : a.isVisible()) !== !0 && !__OVERLAY__ && null != n;
            })(ey, eb, eg, tv),
            tq = (0, X.c)({
                channel: ey,
                type: eb,
                activeCommand: ti,
                pendingReply: ew
            }),
            tQ = !!(null === (el = eb.emojis) || void 0 === el ? void 0 : el.button) && tU <= 44;
        return (0, r.jsx)(R.f6, {
            value: tg,
            children: (0, r.jsxs)(T.Gt, {
                value: e6,
                children: [
                    tK && t_
                        ? (0, r.jsx)(en.Z, {
                              editorRef: e8,
                              options: eb.markdown,
                              channel: ey
                          })
                        : tK
                          ? (0, r.jsx)(et.Z, {
                                ref: te,
                                editorRef: e8,
                                containerRef: e9,
                                options: eb.markdown
                            })
                          : null,
                    (0, r.jsxs)('div', {
                        ref: e5,
                        className: s()(eA, {
                            [es.channelTextArea]: !0,
                            [es.channelTextAreaDisabled]: tY,
                            [es.highlighted]: eZ,
                            [es.textAreaMobileThemed]: d.tq
                        }),
                        children: [
                            (0, r.jsx)(X.Z, { bars: tq }),
                            (0, r.jsxs)('div', {
                                ref: e9,
                                onScroll: tP,
                                className: s()(eN, {
                                    [es.scrollableContainer]: !0,
                                    [es.themedBackground]: !e1,
                                    [es.hasStackedBar]: tq.stacked.length > 0
                                }),
                                children: [
                                    (0, r.jsx)(q.Z, {
                                        channelId: ey.id,
                                        chatInputType: eb
                                    }),
                                    eb.hideAttachmentArea
                                        ? null
                                        : (0, r.jsx)(J.Z, {
                                              channelId: ey.id,
                                              type: eb,
                                              canAttachFiles: tu
                                          }),
                                    (0, r.jsxs)('div', {
                                        className: s()(es.inner, {
                                            [es.innerDisabled]: tY,
                                            [es.sansAttachButton]: eb !== K.I.EDIT && (null != tj || (tY && null == tj) || ts),
                                            [es.sansAttachButtonCreateThread]: eb === K.I.THREAD_CREATION,
                                            [es.sansAttachButtonCreatePost]: eb === K.I.CREATE_FORUM_POST || eb === K.I.FORWARD_MESSAGE_INPUT,
                                            [es.sansAttachButtonUserProfileReply]: eb === K.I.USER_PROFILE_REPLY
                                        }),
                                        onMouseDown: tH,
                                        children: [
                                            tj,
                                            (0, r.jsx)(f.FocusRing, {
                                                ringTarget: e5,
                                                ringClassName: es.focusRing,
                                                children: (0, r.jsx)(z.Z, {
                                                    ref: e8,
                                                    id: eO,
                                                    focused: eM,
                                                    useSlate: tE,
                                                    textValue: eS,
                                                    richValue: eg,
                                                    disabled: tl,
                                                    placeholder: eL,
                                                    required: ev,
                                                    accessibilityLabel: eD,
                                                    isPreviewing: (ts || to) && td,
                                                    channel: ey,
                                                    type: eb,
                                                    canPasteFiles: tu,
                                                    uploadPromptCharacterCount: er.en1,
                                                    maxCharacterCount: null != eW ? eW : th,
                                                    allowNewLines: ez,
                                                    'aria-describedby': eQ,
                                                    onChange: tS,
                                                    onResize: tw,
                                                    onBlur: ek,
                                                    onFocus: eB,
                                                    onKeyDown: eF,
                                                    onSubmit: tR,
                                                    onTab: tx,
                                                    onEnter: tG,
                                                    onMoveSelection: tk,
                                                    onSelectionChanged: tA,
                                                    onMaybeShowAutocomplete: tC,
                                                    onHideAutocomplete: tL,
                                                    promptToUpload: eH,
                                                    fontSize: tI,
                                                    spellcheckEnabled: tm,
                                                    canOnlyUseTextCommands: tZ,
                                                    className: s()(
                                                        {
                                                            [es.textAreaThreadCreation]: eb === K.I.THREAD_CREATION,
                                                            [es.profileBioInput]: eb === K.I.PROFILE_BIO_INPUT
                                                        },
                                                        eR
                                                    ),
                                                    'aria-labelledby': eX
                                                })
                                            }),
                                            (0, r.jsx)($.Z, {
                                                type: eb,
                                                disabled: tl,
                                                channel: ey,
                                                handleSubmit: tO,
                                                isEmpty: 0 === eS.trim().length,
                                                showAllButtons: tn
                                            })
                                        ]
                                    })
                                ]
                            }),
                            tf
                                ? null
                                : (0, r.jsx)(g.Z, {
                                      ref: e7,
                                      channel: ey,
                                      canOnlyUseTextCommands: tZ
                                  }),
                            (0, r.jsx)(N.Z, {
                                ref: tv,
                                channel: ey,
                                canMentionRoles: eY,
                                canMentionChannels: ej,
                                useNewSlashCommands: tE,
                                canOnlyUseTextCommands: tZ,
                                canSendStickers: null === (eu = eb.stickers) || void 0 === eu ? void 0 : eu.allowSending,
                                textValue: eS,
                                focused: eM,
                                expressionPickerView: tB,
                                type: eb,
                                targetRef: e5,
                                editorRef: e8,
                                onSendMessage: tR,
                                onSendSticker: tb,
                                onVisibilityChange: tV,
                                editorHeight: tU,
                                setValue: (e, t) => (null == tS ? void 0 : tS(null, e, t)),
                                position: eJ
                            }),
                            (0, r.jsx)(b.Z, {
                                textValue: eS,
                                editorHeight: tU
                            }),
                            tW
                                ? (0, r.jsx)(ee.Z, {
                                      type: eb,
                                      textValue: eS,
                                      className: s()(eq, { [es.indentCharacterCount]: tQ }),
                                      maxCharacterCount: eW,
                                      showRemainingCharsAfterCount: eK
                                  })
                                : null,
                            tz
                                ? (0, r.jsx)(C.Z, {
                                      editorRef: e8,
                                      channel: ey,
                                      isEditorFocused: eM,
                                      onSelectSticker: tb,
                                      submitButtonVisible: (null === (ec = eb.submit) || void 0 === ec ? void 0 : ec.button) && (null !== (eE = null === (ed = eb.submit) || void 0 === ed ? void 0 : ed.ignorePreference) && void 0 !== eE ? eE : tp),
                                      stickerIconVisible: null !== (ef = null === (e_ = eb.stickers) || void 0 === e_ ? void 0 : e_.button) && void 0 !== ef && ef
                                  })
                                : null,
                            e0
                        ]
                    }),
                    tF
                        ? null
                        : (0, r.jsx)(v.Z, {
                              positionTargetRef: e5,
                              type: eb,
                              onSelectGIF: tD,
                              onSelectEmoji: ty,
                              onSelectSticker: tb,
                              onSelectSound: tM,
                              channel: ey,
                              closeOnModalOuterClick: e2,
                              parentModalKey: e3,
                              position: 'top',
                              align: 'right',
                              positionLayerClassName: es.expressionPickerPositionLayer
                          })
                ]
            })
        });
    })
);
