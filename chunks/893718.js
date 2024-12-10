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
    m = n(738619),
    g = n(393238),
    E = n(607070),
    v = n(100527),
    I = n(906732),
    T = n(998698),
    b = n(271668),
    S = n(404295),
    y = n(326133),
    A = n(405701),
    N = n(570220),
    C = n(540059),
    R = n(28546),
    O = n(805680),
    D = n(278754),
    L = n(151574),
    x = n(368844),
    w = n(41776),
    P = n(849522),
    M = n(780291),
    k = n(913663),
    U = n(268350),
    B = n(378233),
    G = n(665906),
    Z = n(695346),
    F = n(271383),
    V = n(496675),
    j = n(944486),
    H = n(398327),
    Y = n(117530),
    W = n(594174),
    K = n(459273),
    z = n(700785),
    q = n(358085),
    Q = n(746877),
    X = n(541716),
    J = n(667829),
    $ = n(319417),
    ee = n(562267),
    et = n(376918),
    en = n(760196),
    er = n(258696),
    ei = n(303628),
    ea = n(472243),
    es = n(872635),
    eo = n(676108),
    el = n(981631),
    eu = n(665692),
    ec = n(957825),
    ed = n(553796);
t.Z = i.memo(
    i.forwardRef(function (e, t) {
        var a, l, ef, e_, ep, eh, em, eg, eE, ev, eI, eT, eb, eS, ey, eA, eN;
        let { textValue: eC, richValue: eR, className: eO, innerClassName: eD, editorClassName: eL, id: ex, required: ew, disabled: eP, placeholder: eM, accessibilityLabel: ek, channel: eU, type: eB, focused: eG, renderAttachButton: eZ, renderApplicationCommandIcon: eF, renderAppLauncherButton: eV, renderLeftAccessories: ej, pendingReply: eH, onChange: eY, onResize: eW, onBlur: eK, onFocus: ez, onKeyDown: eq, onSubmit: eQ, promptToUpload: eX, highlighted: eJ, canMentionRoles: e$, canMentionChannels: e0, maxCharacterCount: e1, showRemainingCharsAfterCount: e2, allowNewLines: e3 = !0, characterCountClassName: e4, 'aria-describedby': e6, 'aria-labelledby': e5, setEditorRef: e7, autoCompletePosition: e8, children: e9, disableThemedBackground: te = !1, emojiPickerCloseOnModalOuterClick: tt, parentModalKey: tn, onCommandSentinelTyped: tr } = e;
        u()(null != eB, 'chat input type must be set');
        let { analyticsLocations: ti } = (0, I.ZP)(v.Z.CHANNEL_TEXT_AREA),
            ta = (0, C.Q3)('ChannelTextAreaContainer'),
            ts = (function (e) {
                let t = i.useRef(null);
                if (null != e && 'function' == typeof e) throw Error('Only Ref objects are supported');
                return null == e ? t : e;
            })(t),
            to = i.useRef(null),
            tl = i.useRef(null),
            tu = i.useRef(null),
            tc = i.useRef(null);
        null == e7 || e7(tl.current);
        let td = (0, S.h9)(eU.id, 'ChannelTextAreaContainer'),
            [tf, t_] = i.useState(!td);
        (0, g.P)(ts, (e) => {
            let { width: t } = e;
            return t_(!td && (null == t || t > 450));
        });
        let { activeCommand: tp, activeCommandSection: th } = (0, _.cj)([T.Z], () => {
                var e, t;
                return {
                    activeCommand: (null === (e = eB.commands) || void 0 === e ? void 0 : e.enabled) ? T.Z.getActiveCommand(eU.id) : null,
                    activeCommandSection: (null === (t = eB.commands) || void 0 === t ? void 0 : t.enabled) ? T.Z.getActiveCommandSection(eU.id) : null
                };
            }),
            {
                isLurking: tm,
                isPendingMember: tg,
                disabled: tE,
                canAttachFiles: tv,
                canCreateThreads: tI,
                canEveryoneSendMessages: tT
            } = (function (e, t, n, r) {
                let i = e.getGuildId(),
                    a = (0, _.e7)([w.Z], () => null != i && w.Z.isLurking(i), [i]),
                    s = (0, _.e7)([F.ZP, W.default], () => {
                        var e, t;
                        let n = W.default.getCurrentUser();
                        return null !== (t = null != i && null != n ? (null === (e = F.ZP.getMember(i, n.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
                    }),
                    o = (0, _.cj)(
                        [V.Z],
                        () => {
                            var i, a;
                            let o = e.isPrivate(),
                                l = V.Z.computePermissions(e),
                                u = f.e$(l, el.Plq.CREATE_PUBLIC_THREADS) || f.e$(l, el.Plq.CREATE_PRIVATE_THREADS),
                                c = (!(null === (i = t.permissions) || void 0 === i ? void 0 : i.requireCreateTherads) || u) && (!(null === (a = t.permissions) || void 0 === a ? void 0 : a.requireSendMessages) || f.e$(l, el.Plq.SEND_MESSAGES)),
                                d = c && f.e$(l, el.Plq.ATTACH_FILES),
                                _ = null != n,
                                p = (0, G.xl)(e);
                            return {
                                disabled: r || s || (!o && !c) || p,
                                canAttachFiles: !0 === t.attachments && (o || s || d || _),
                                canCreateThreads: u,
                                canEveryoneSendMessages: z.Uu(el.Plq.SEND_MESSAGES, e)
                            };
                        },
                        [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, s]
                    );
                return {
                    isLurking: a,
                    isPendingMember: s,
                    ...o
                };
            })(eU, eB, tp, eP),
            tb = eB.toolbarType === X.O.STATIC,
            tS = !Z.dN.useSetting() && !(0, q.isAndroidWeb)() && null != window.ResizeObserver,
            ty = !tS || !(null === (a = eB.commands) || void 0 === a ? void 0 : a.enabled) || !eG || eC !== eu.GI,
            tA = (0, P.Z)(),
            { isSubmitButtonEnabled: tN, fontSize: tC } = (0, _.cj)([E.Z], () => ({
                fontSize: E.Z.fontSize,
                isSubmitButtonEnabled: E.Z.isSubmitButtonEnabled
            })),
            tR = (0, _.e7)([H.Z], () => H.Z.isEnabled()),
            tO = i.useRef(eC);
        tO.current = eC;
        let tD = i.useCallback(
            (e, t, n) => {
                var r;
                t === eu.GI && '' === tO.current && (null === (r = eB.commands) || void 0 === r ? void 0 : r.enabled) && (null == tr || tr()), null == eY || eY(e, t, n);
            },
            [eY, tr, null === (l = eB.commands) || void 0 === l ? void 0 : l.enabled]
        );
        !(function (e, t) {
            let n = i.useCallback(() => {
                    if (!t) (0, R.RO)(ec.X1.EMOJI, e);
                }, [t, e]),
                r = i.useCallback(() => {
                    var n;
                    if (!t && !!(null === (n = e.gifs) || void 0 === n ? void 0 : n.allowSending)) (0, R.RO)(ec.X1.GIF, e);
                }, [t, e]),
                a = i.useCallback(() => {
                    var n;
                    if (!t && !!(null === (n = e.stickers) || void 0 === n ? void 0 : n.allowSending)) (0, R.RO)(ec.X1.STICKER, e);
                }, [t, e]);
            (0, K.yp)({
                event: el.CkL.TOGGLE_EMOJI_POPOUT,
                handler: n
            }),
                (0, K.yp)({
                    event: el.CkL.TOGGLE_GIF_PICKER,
                    handler: r
                }),
                (0, K.yp)({
                    event: el.CkL.TOGGLE_STICKER_PICKER,
                    handler: a
                });
        })(eB, tE);
        let { eventEmitter: tL, handleEditorSelectionChanged: tx } = (function (e, t, n) {
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
            })(tl, eC, eR),
            {
                submitting: tw,
                submit: tP,
                handleSubmit: tM
            } = (function (e, t, a, s) {
                let [o, l] = i.useState(!1),
                    u = i.useCallback(
                        (i, c, d, f, _) => {
                            var m, g, E;
                            if (o) return;
                            l(!0);
                            let v = null !== (g = null === (m = k.Z.getStickerPreview(s, t.drafts.type)) || void 0 === m ? void 0 : m.map((e) => e.id)) && void 0 !== g ? g : [],
                                I = null !== (E = Y.Z.getUploads(s, t.drafts.type)) && void 0 !== E ? E : [];
                            if (null == c && !f && !_ && (0, x.CB)(I, s)) {
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
                                    if (s !== j.Z.getChannelId()) h.Z.saveDraft(s, '', t.drafts.type);
                                    else f && a.current.clearValue();
                                }
                                f && (l(!1), (0, R._Q)(), c && a.current.focus());
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
            })(eQ, eB, tl, eU.id),
            {
                autocompleteRef: tk,
                handleMaybeShowAutocomplete: tU,
                handleHideAutocomplete: tB
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
        let tG =
            ((eb = tP),
            (eS = eB),
            (ey = tl),
            i.useCallback(
                (e) => {
                    var t, n;
                    eS === X.I.CREATE_FORUM_POST ? null === (n = ey.current) || void 0 === n || n.insertGIF(e) : eb(e.url, void 0, void 0, !0), (0, R._Q)(), null === (t = ey.current) || void 0 === t || t.focus();
                },
                [ey, eb, eS]
            ));
        let tZ =
                ((eA = tl),
                i.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            r = eA.current;
                        null != e && null != r && r.insertEmoji(e, t, n), t && (0, R._Q)();
                    },
                    [eA]
                )),
            tF = (function (e) {
                let { editorRef: t, disabled: n, textValue: r, channelId: a, chatInputType: s, submit: o } = e,
                    { analyticsLocations: l } = (0, I.ZP)();
                return i.useCallback(
                    (e, i) => {
                        var u, c;
                        !n &&
                            ((0, B.Hc)(i, r, a, s.drafts.type)
                                ? ((0, et._H)({
                                      sticker: e,
                                      stickerSelectLocation: i,
                                      isReplacement: null != k.Z.getStickerPreview(a, s.drafts.type),
                                      analyticsLocations: l
                                  }),
                                  (0, U.eu)(a, e, s.drafts.type))
                                : (o({
                                      value: '',
                                      uploads: void 0,
                                      stickers: [e.id]
                                  }),
                                  null === (c = t.current) || void 0 === c || c.clearValue()),
                            (0, R._Q)(),
                            null === (u = t.current) || void 0 === u || u.focus());
                    },
                    [n, r, a, s.drafts.type, t, l, o]
                );
            })({
                editorRef: tl,
                disabled: tE,
                textValue: eC,
                channelId: eU.id,
                chatInputType: eB,
                submit: eQ
            });
        let tV =
                ((eN = tl),
                i.useCallback(
                    (e) => {
                        let t = eN.current;
                        null != e && null != t && t.insertSound(e), (0, R._Q)(), null == t || t.focus();
                    },
                    [eN]
                )),
            tj = i.useCallback(() => {
                var e;
                return null == tc ? void 0 : null === (e = tc.current) || void 0 === e ? void 0 : e.hide();
            }, []),
            { editorHeight: tH, handleResize: tY } = (function (e) {
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
            })(eW),
            {
                handleTab: tW,
                handleEnter: tK,
                handleMoveSelection: tz
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
            })(tk, to, ty),
            {
                expressionPickerView: tq,
                shouldHideExpressionPicker: tQ,
                handleAutocompleteVisibilityChange: tX,
                handleOuterClick: tJ
            } = (function (e, t, n) {
                let [r, a] = (0, R.Iu)((e) => [e.activeView, e.activeViewType], c.X);
                i.useEffect(
                    () => () => {
                        (0, R._Q)(e);
                    },
                    [e]
                );
                let s = i.useCallback(
                        (e) => {
                            t.emit('autocomplete-visibility-change', e), e && (0, R._Q)();
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
            })(eB, tL, tl);
        (0, Q.S)(tL, eU.guild_id, eU.id);
        let t$ = null != eH,
            t0 = (tE && !((tm || tg) && tT)) || (tw && (null === (ef = eB.submit) || void 0 === ef ? void 0 : ef.useDisabledStylesOnSubmit)),
            t1 = null;
        null != tp ? (t1 = null == eF ? void 0 : eF(tp, th, ed.attachButton)) : (!tE || tI) && (t1 = null == eZ ? void 0 : eZ(t$, ed.attachButton));
        let t2 = tS && null != eR && !tE && eB.showCharacterCount && null == tp,
            t3 = tS && !__OVERLAY__ && null != eR && null == tp && eB.toolbarType !== X.O.NONE,
            t4 = (function (e, t, n, r) {
                var i, a;
                let s = (0, D.pR)(),
                    o = (0, _.e7)([k.Z], () => k.Z.getStickerPreview(e.id, t.drafts.type)),
                    l = null != o && o.length > 0;
                return s && (null === (i = t.stickers) || void 0 === i ? void 0 : i.autoSuggest) && !l && (null === (a = r.current) || void 0 === a ? void 0 : a.isVisible()) !== !0 && !__OVERLAY__ && null != n;
            })(eU, eB, eR, tk),
            t6 = (0, en.c)({
                channel: eU,
                type: eB,
                activeCommand: tp,
                pendingReply: eH
            }),
            t5 = !!(null === (e_ = eB.emojis) || void 0 === e_ ? void 0 : e_.button) && tH <= 44,
            t7 = 0 === eC.trim().length,
            t8 = (0, er.G)(eU.id, eB, t7),
            t9 = (0, r.jsx)(er.Z, {
                type: eB,
                disabled: tE,
                channel: eU,
                handleSubmit: tM,
                isEmpty: t7,
                showAllButtons: tf,
                children: ta ? (null == eV ? void 0 : eV()) : null
            }),
            ne = ta
                ? (0, r.jsxs)('div', {
                      className: ed.accessoryBar,
                      children: [
                          (0, r.jsxs)('div', {
                              className: ed.accessoryBarLeft,
                              children: [
                                  null == ej ? void 0 : ej(),
                                  t1,
                                  (0, r.jsx)(m.Z, {
                                      channel: eU,
                                      poggermodeEnabled: !1
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', {
                              className: ed.accessoryBarRight,
                              children: t9
                          })
                      ]
                  })
                : null,
            nt = ta && eB !== X.I.FORWARD_MESSAGE_INPUT,
            nn = !1 !== eB.showSlowmodeIndicator;
        return (0, r.jsx)(N.f6, {
            value: tL,
            children: (0, r.jsxs)(I.Gt, {
                value: ti,
                children: [
                    t3 && tb
                        ? (0, r.jsx)(eo.Z, {
                              editorRef: tl,
                              options: eB.markdown,
                              channel: eU
                          })
                        : t3
                          ? (0, r.jsx)(es.Z, {
                                ref: tc,
                                editorRef: tl,
                                containerRef: tu,
                                options: eB.markdown
                            })
                          : null,
                    (0, r.jsxs)('div', {
                        ref: ts,
                        className: s()(eO, {
                            [ed.channelTextArea]: !0,
                            [ed.channelTextAreaDisabled]: t0,
                            [ed.highlighted]: eJ,
                            [ed.textAreaMobileThemed]: d.tq
                        }),
                        children: [
                            (0, r.jsx)(en.Z, { bars: t6 }),
                            (0, r.jsxs)('div', {
                                ref: tu,
                                onScroll: tj,
                                className: s()(eD, {
                                    [ed.scrollableContainer]: !0,
                                    [ed.themedBackground]: !te,
                                    [ed.hasStackedBar]: t6.stacked.length > 0
                                }),
                                children: [
                                    (0, r.jsx)(ee.Z, {
                                        channelId: eU.id,
                                        chatInputType: eB
                                    }),
                                    eB.hideAttachmentArea
                                        ? null
                                        : (0, r.jsx)(ei.Z, {
                                              channelId: eU.id,
                                              type: eB,
                                              canAttachFiles: tv
                                          }),
                                    (0, r.jsxs)('div', {
                                        className: s()(ed.inner, {
                                            [ed.innerDisabled]: t0,
                                            [ed.sansAttachButton]: eB !== X.I.EDIT && (null != t1 || (t0 && null == t1) || tm),
                                            [ed.sansAttachButtonCreateThread]: eB === X.I.THREAD_CREATION,
                                            [ed.sansAttachButtonCreatePost]: eB === X.I.CREATE_FORUM_POST || eB === X.I.FORWARD_MESSAGE_INPUT,
                                            [ed.sansAttachButtonUserProfileReply]: eB === X.I.USER_PROFILE_REPLY
                                        }),
                                        onMouseDown: tJ,
                                        children: [
                                            ta ? null : t1,
                                            (0, r.jsx)(p.FocusRing, {
                                                ringTarget: ts,
                                                ringClassName: ed.focusRing,
                                                children: (0, r.jsx)(J.Z, {
                                                    ref: tl,
                                                    id: ex,
                                                    focused: eG,
                                                    useSlate: tS,
                                                    textValue: eC,
                                                    richValue: eR,
                                                    disabled: tE,
                                                    placeholder: eM,
                                                    required: ew,
                                                    accessibilityLabel: ek,
                                                    isPreviewing: (tm || tg) && tT,
                                                    channel: eU,
                                                    type: eB,
                                                    canPasteFiles: tv,
                                                    uploadPromptCharacterCount: el.en1,
                                                    maxCharacterCount: null != e1 ? e1 : tA,
                                                    allowNewLines: e3,
                                                    'aria-describedby': e6,
                                                    onChange: tD,
                                                    onResize: tY,
                                                    onBlur: eK,
                                                    onFocus: ez,
                                                    onKeyDown: eq,
                                                    onSubmit: tP,
                                                    onTab: tW,
                                                    onEnter: tK,
                                                    onMoveSelection: tz,
                                                    onSelectionChanged: tx,
                                                    onMaybeShowAutocomplete: tU,
                                                    onHideAutocomplete: tB,
                                                    promptToUpload: eX,
                                                    fontSize: tC,
                                                    spellcheckEnabled: tR,
                                                    canOnlyUseTextCommands: t$,
                                                    className: s()(
                                                        {
                                                            [ed.textAreaThreadCreation]: eB === X.I.THREAD_CREATION,
                                                            [ed.profileBioInput]: eB === X.I.PROFILE_BIO_INPUT,
                                                            [ed.overlayInlineReply]: eB === X.I.OVERLAY_INLINE_REPLY
                                                        },
                                                        eL
                                                    ),
                                                    'aria-labelledby': e5
                                                })
                                            }),
                                            nt
                                                ? (0, r.jsxs)('div', {
                                                      className: ed.rightAccessories,
                                                      children: [
                                                          nn ? (0, r.jsx)(A.Z, { channel: eU }) : null,
                                                          (null === (ep = eB.submit) || void 0 === ep ? void 0 : ep.button) != null && ((null === (eh = eB.submit) || void 0 === eh ? void 0 : eh.ignorePreference) || tN)
                                                              ? (0, r.jsx)($.Z, {
                                                                    onClick: tM,
                                                                    disabled: tE || t8
                                                                })
                                                              : null
                                                      ]
                                                  })
                                                : t9
                                        ]
                                    }),
                                    nt ? ne : null
                                ]
                            }),
                            ty
                                ? null
                                : (0, r.jsx)(b.Z, {
                                      ref: to,
                                      channel: eU,
                                      canOnlyUseTextCommands: t$
                                  }),
                            (0, r.jsx)(y.Z, {
                                ref: tk,
                                channel: eU,
                                canMentionRoles: e$,
                                canMentionChannels: e0,
                                useNewSlashCommands: tS,
                                canOnlyUseTextCommands: t$,
                                canSendStickers: null === (em = eB.stickers) || void 0 === em ? void 0 : em.allowSending,
                                textValue: eC,
                                focused: eG,
                                expressionPickerView: tq,
                                type: eB,
                                targetRef: ts,
                                editorRef: tl,
                                onSendMessage: tP,
                                onSendSticker: tF,
                                onVisibilityChange: tX,
                                editorHeight: tH,
                                setValue: (e, t) => (null == tD ? void 0 : tD(null, e, t)),
                                position: e8
                            }),
                            (0, r.jsx)(M.Z, {
                                textValue: eC,
                                editorHeight: tH
                            }),
                            t2
                                ? (0, r.jsx)(ea.Z, {
                                      type: eB,
                                      textValue: eC,
                                      className: s()(e4, { [ed.indentCharacterCount]: t5 }),
                                      maxCharacterCount: e1,
                                      showRemainingCharsAfterCount: e2
                                  })
                                : null,
                            t4
                                ? (0, r.jsx)(L.Z, {
                                      editorRef: tl,
                                      channel: eU,
                                      isEditorFocused: eG,
                                      onSelectSticker: tF,
                                      submitButtonVisible: (null === (eg = eB.submit) || void 0 === eg ? void 0 : eg.button) && (null !== (eI = null === (eE = eB.submit) || void 0 === eE ? void 0 : eE.ignorePreference) && void 0 !== eI ? eI : tN),
                                      stickerIconVisible: null !== (eT = null === (ev = eB.stickers) || void 0 === ev ? void 0 : ev.button) && void 0 !== eT && eT
                                  })
                                : null,
                            e9
                        ]
                    }),
                    tQ
                        ? null
                        : (0, r.jsx)(O.Z, {
                              positionTargetRef: ts,
                              type: eB,
                              onSelectGIF: tG,
                              onSelectEmoji: tZ,
                              onSelectSticker: tF,
                              onSelectSound: tV,
                              channel: eU,
                              closeOnModalOuterClick: tt,
                              parentModalKey: tn,
                              position: 'top',
                              align: 'right',
                              positionLayerClassName: ed.expressionPickerPositionLayer
                          })
                ]
            })
        });
    })
);
