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
        var a, l, ef, e_, ep, eh, em, eg, eE, ev, eI, eT, eb, eS, ey, eA, eN, eC;
        let { textValue: eR, richValue: eO, className: eD, innerClassName: eL, editorClassName: ex, id: ew, required: eP, disabled: eM, placeholder: ek, accessibilityLabel: eU, channel: eB, type: eG, focused: eZ, renderAttachButton: eF, renderApplicationCommandIcon: eV, renderAppLauncherButton: ej, renderLeftAccessories: eH, pendingReply: eY, onChange: eW, onResize: eK, onBlur: ez, onFocus: eq, onKeyDown: eQ, onSubmit: eX, promptToUpload: eJ, highlighted: e$, canMentionRoles: e0, canMentionChannels: e1, maxCharacterCount: e2, showRemainingCharsAfterCount: e3, allowNewLines: e4 = !0, characterCountClassName: e6, 'aria-describedby': e5, 'aria-labelledby': e7, setEditorRef: e8, autoCompletePosition: e9, children: te, disableThemedBackground: tt = !1, emojiPickerCloseOnModalOuterClick: tn, parentModalKey: tr, onCommandSentinelTyped: ti } = e;
        u()(null != eG, 'chat input type must be set');
        let { analyticsLocations: ta } = (0, I.ZP)(v.Z.CHANNEL_TEXT_AREA),
            ts = (0, C.Q3)('ChannelTextAreaContainer'),
            to = (function (e) {
                let t = i.useRef(null);
                if (null != e && 'function' == typeof e) throw Error('Only Ref objects are supported');
                return null == e ? t : e;
            })(t),
            tl = i.useRef(null),
            tu = i.useRef(null),
            tc = i.useRef(null),
            td = i.useRef(null);
        null == e8 || e8(tu.current);
        let tf = (0, S.h9)(eB.id, 'ChannelTextAreaContainer'),
            [t_, tp] = i.useState(!tf);
        (0, g.P)(to, (e) => {
            let { width: t } = e;
            return tp(!tf && (null == t || t > 450));
        });
        let { activeCommand: th, activeCommandSection: tm } = (0, _.cj)([T.Z], () => {
                var e, t;
                return {
                    activeCommand: (null === (e = eG.commands) || void 0 === e ? void 0 : e.enabled) ? T.Z.getActiveCommand(eB.id) : null,
                    activeCommandSection: (null === (t = eG.commands) || void 0 === t ? void 0 : t.enabled) ? T.Z.getActiveCommandSection(eB.id) : null
                };
            }),
            {
                isLurking: tg,
                isPendingMember: tE,
                disabled: tv,
                canAttachFiles: tI,
                canCreateThreads: tT,
                canEveryoneSendMessages: tb
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
            })(eB, eG, th, eM),
            tS = eG.toolbarType === X.OW.STATIC,
            ty = !Z.dN.useSetting() && !(0, q.isAndroidWeb)() && null != window.ResizeObserver,
            tA = !ty || !(null === (a = eG.commands) || void 0 === a ? void 0 : a.enabled) || !eZ || eR !== eu.GI,
            tN = (0, P.Z)(),
            { isSubmitButtonEnabled: tC, fontSize: tR } = (0, _.cj)([E.Z], () => ({
                fontSize: E.Z.fontSize,
                isSubmitButtonEnabled: E.Z.isSubmitButtonEnabled
            })),
            tO = (0, _.e7)([H.Z], () => H.Z.isEnabled()),
            tD = i.useRef(eR);
        tD.current = eR;
        let tL = i.useCallback(
            (e, t, n) => {
                var r;
                t === eu.GI && '' === tD.current && (null === (r = eG.commands) || void 0 === r ? void 0 : r.enabled) && (null == ti || ti()), null == eW || eW(e, t, n);
            },
            [eW, ti, null === (l = eG.commands) || void 0 === l ? void 0 : l.enabled]
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
        })(eG, tv);
        let { eventEmitter: tx, handleEditorSelectionChanged: tw } = (function (e, t, n) {
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
            })(tu, eR, eO),
            {
                submitting: tP,
                submit: tM,
                handleSubmit: tk
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
            })(eX, eG, tu, eB.id),
            {
                autocompleteRef: tU,
                handleMaybeShowAutocomplete: tB,
                handleHideAutocomplete: tG
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
        let tZ =
            ((eS = tM),
            (ey = eG),
            (eA = tu),
            i.useCallback(
                (e) => {
                    var t, n;
                    ey === X.Ie.CREATE_FORUM_POST ? null === (n = eA.current) || void 0 === n || n.insertGIF(e) : eS(e.url, void 0, void 0, !0), (0, R._Q)(), null === (t = eA.current) || void 0 === t || t.focus();
                },
                [eA, eS, ey]
            ));
        let tF =
                ((eN = tu),
                i.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            r = eN.current;
                        null != e && null != r && r.insertEmoji(e, t, n), t && (0, R._Q)();
                    },
                    [eN]
                )),
            tV = (function (e) {
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
                editorRef: tu,
                disabled: tv,
                textValue: eR,
                channelId: eB.id,
                chatInputType: eG,
                submit: eX
            });
        let tj =
                ((eC = tu),
                i.useCallback(
                    (e) => {
                        let t = eC.current;
                        null != e && null != t && t.insertSound(e), (0, R._Q)(), null == t || t.focus();
                    },
                    [eC]
                )),
            tH = i.useCallback(() => {
                var e;
                return null == td ? void 0 : null === (e = td.current) || void 0 === e ? void 0 : e.hide();
            }, []),
            { editorHeight: tY, handleResize: tW } = (function (e) {
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
            })(eK),
            {
                handleTab: tK,
                handleEnter: tz,
                handleMoveSelection: tq
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
            })(tU, tl, tA),
            {
                expressionPickerView: tQ,
                shouldHideExpressionPicker: tX,
                handleAutocompleteVisibilityChange: tJ,
                handleOuterClick: t$
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
            })(eG, tx, tu);
        (0, Q.S)(tx, eB.guild_id, eB.id);
        let t0 = null != eY,
            t1 = (tv && !((tg || tE) && tb)) || (tP && (null === (ef = eG.submit) || void 0 === ef ? void 0 : ef.useDisabledStylesOnSubmit)),
            t2 = null;
        null != th ? (t2 = null == eV ? void 0 : eV(th, tm, ed.attachButton)) : (!tv || tT) && (t2 = null == eF ? void 0 : eF(t0, ed.attachButton));
        let t3 = ty && null != eO && !tv && eG.showCharacterCount && null == th,
            t4 = ty && !__OVERLAY__ && null != eO && null == th && eG.toolbarType !== X.OW.NONE,
            t6 = (function (e, t, n, r) {
                var i, a;
                let s = (0, D.pR)(),
                    o = (0, _.e7)([k.Z], () => k.Z.getStickerPreview(e.id, t.drafts.type)),
                    l = null != o && o.length > 0;
                return s && (null === (i = t.stickers) || void 0 === i ? void 0 : i.autoSuggest) && !l && (null === (a = r.current) || void 0 === a ? void 0 : a.isVisible()) !== !0 && !__OVERLAY__ && null != n;
            })(eB, eG, eO, tU),
            t5 = (0, en.c)({
                channel: eB,
                type: eG,
                activeCommand: th,
                pendingReply: eY
            }),
            t7 = !!(null === (e_ = eG.emojis) || void 0 === e_ ? void 0 : e_.button) && tY <= 44,
            t8 = 0 === eR.trim().length,
            t9 = (0, er.G)(eB.id, eG, t8),
            ne = !0 === eG.showSlowmodeIndicator,
            nt = !0 === eG.showTypingIndicator,
            nn = ts && eG.layout === X.gy.INLINE,
            nr = (0, r.jsx)(er.Z, {
                type: eG,
                disabled: tv,
                channel: eB,
                handleSubmit: tk,
                isEmpty: t8,
                showAllButtons: t_,
                children: ts ? (null == ej ? void 0 : ej()) : null
            }),
            ni = ts
                ? (0, r.jsxs)('div', {
                      className: ed.accessoryBar,
                      children: [
                          (0, r.jsxs)('div', {
                              className: ed.accessoryBarLeft,
                              children: [
                                  null == eH ? void 0 : eH(),
                                  t2,
                                  nt
                                      ? (0, r.jsx)(m.Z, {
                                            channel: eB,
                                            poggermodeEnabled: !1
                                        })
                                      : null
                              ]
                          }),
                          (0, r.jsx)('div', {
                              className: ed.accessoryBarRight,
                              children: nr
                          })
                      ]
                  })
                : null;
        return (0, r.jsx)(N.f6, {
            value: tx,
            children: (0, r.jsxs)(I.Gt, {
                value: ta,
                children: [
                    t4 && tS
                        ? (0, r.jsx)(eo.Z, {
                              editorRef: tu,
                              options: eG.markdown,
                              channel: eB
                          })
                        : t4
                          ? (0, r.jsx)(es.Z, {
                                ref: td,
                                editorRef: tu,
                                containerRef: tc,
                                options: eG.markdown
                            })
                          : null,
                    (0, r.jsxs)('div', {
                        ref: to,
                        className: s()(eD, {
                            [ed.channelTextArea]: !0,
                            [ed.channelTextAreaDisabled]: t1,
                            [ed.highlighted]: e$,
                            [ed.textAreaMobileThemed]: d.tq
                        }),
                        children: [
                            (0, r.jsx)(en.Z, { bars: t5 }),
                            (0, r.jsxs)('div', {
                                ref: tc,
                                onScroll: tH,
                                className: s()(eL, {
                                    [ed.scrollableContainer]: !0,
                                    [ed.themedBackground]: !tt,
                                    [ed.hasStackedBar]: t5.stacked.length > 0,
                                    [ed.inlineContainer]: nn
                                }),
                                children: [
                                    (0, r.jsx)(ee.Z, {
                                        channelId: eB.id,
                                        chatInputType: eG
                                    }),
                                    eG.hideAttachmentArea
                                        ? null
                                        : (0, r.jsx)(ei.Z, {
                                              channelId: eB.id,
                                              type: eG,
                                              canAttachFiles: tI
                                          }),
                                    (0, r.jsxs)('div', {
                                        className: s()(ed.inner, {
                                            [ed.innerDisabled]: t1,
                                            [ed.sansAttachButton]: eG !== X.Ie.EDIT && (null != t2 || (t1 && null == t2) || tg),
                                            [ed.sansAttachButtonCreateThread]: eG === X.Ie.THREAD_CREATION,
                                            [ed.sansAttachButtonCreatePost]: eG === X.Ie.CREATE_FORUM_POST || eG === X.Ie.FORWARD_MESSAGE_INPUT,
                                            [ed.sansAttachButtonUserProfileReply]: eG === X.Ie.USER_PROFILE_REPLY
                                        }),
                                        onMouseDown: t$,
                                        children: [
                                            ts ? null : t2,
                                            (0, r.jsx)(p.FocusRing, {
                                                ringTarget: to,
                                                ringClassName: ed.focusRing,
                                                children: (0, r.jsx)(J.Z, {
                                                    ref: tu,
                                                    id: ew,
                                                    focused: eZ,
                                                    useSlate: ty,
                                                    textValue: eR,
                                                    richValue: eO,
                                                    disabled: tv,
                                                    placeholder: ek,
                                                    required: eP,
                                                    accessibilityLabel: eU,
                                                    isPreviewing: (tg || tE) && tb,
                                                    channel: eB,
                                                    type: eG,
                                                    canPasteFiles: tI,
                                                    uploadPromptCharacterCount: el.en1,
                                                    maxCharacterCount: null != e2 ? e2 : tN,
                                                    allowNewLines: e4,
                                                    'aria-describedby': e5,
                                                    onChange: tL,
                                                    onResize: tW,
                                                    onBlur: ez,
                                                    onFocus: eq,
                                                    onKeyDown: eQ,
                                                    onSubmit: tM,
                                                    onTab: tK,
                                                    onEnter: tz,
                                                    onMoveSelection: tq,
                                                    onSelectionChanged: tw,
                                                    onMaybeShowAutocomplete: tB,
                                                    onHideAutocomplete: tG,
                                                    promptToUpload: eJ,
                                                    fontSize: tR,
                                                    spellcheckEnabled: tO,
                                                    canOnlyUseTextCommands: t0,
                                                    className: s()(
                                                        {
                                                            [ed.textAreaThreadCreation]: eG === X.Ie.THREAD_CREATION,
                                                            [ed.profileBioInput]: eG === X.Ie.PROFILE_BIO_INPUT,
                                                            [ed.overlayInlineReply]: eG === X.Ie.OVERLAY_INLINE_REPLY
                                                        },
                                                        ex
                                                    ),
                                                    'aria-labelledby': e7
                                                })
                                            }),
                                            ts
                                                ? (0, r.jsxs)('div', {
                                                      className: ed.rightAccessories,
                                                      children: [
                                                          ne ? (0, r.jsx)(A.Z, { channel: eB }) : null,
                                                          (null === (ep = eG.submit) || void 0 === ep ? void 0 : ep.button) != null && ((null === (eh = eG.submit) || void 0 === eh ? void 0 : eh.ignorePreference) || tC)
                                                              ? (0, r.jsx)($.Z, {
                                                                    onClick: tk,
                                                                    disabled: tv || t9
                                                                })
                                                              : null
                                                      ]
                                                  })
                                                : nr
                                        ]
                                    }),
                                    ts ? ni : null
                                ]
                            }),
                            tA
                                ? null
                                : (0, r.jsx)(b.Z, {
                                      ref: tl,
                                      channel: eB,
                                      canOnlyUseTextCommands: t0
                                  }),
                            (0, r.jsx)(y.Z, {
                                ref: tU,
                                channel: eB,
                                canMentionRoles: e0,
                                canMentionChannels: e1,
                                useNewSlashCommands: ty,
                                canOnlyUseTextCommands: t0,
                                canSendStickers: null === (em = eG.stickers) || void 0 === em ? void 0 : em.allowSending,
                                canSendSoundmoji: null === (eg = eG.soundmoji) || void 0 === eg ? void 0 : eg.allowSending,
                                textValue: eR,
                                focused: eZ,
                                expressionPickerView: tQ,
                                type: eG,
                                targetRef: to,
                                editorRef: tu,
                                onSendMessage: tM,
                                onSendSticker: tV,
                                onVisibilityChange: tJ,
                                editorHeight: tY,
                                setValue: (e, t) => (null == tL ? void 0 : tL(null, e, t)),
                                position: e9
                            }),
                            (0, r.jsx)(M.Z, {
                                textValue: eR,
                                editorHeight: tY
                            }),
                            t3
                                ? (0, r.jsx)(ea.Z, {
                                      type: eG,
                                      textValue: eR,
                                      className: s()(e6, { [ed.indentCharacterCount]: t7 }),
                                      maxCharacterCount: e2,
                                      showRemainingCharsAfterCount: e3
                                  })
                                : null,
                            t6
                                ? (0, r.jsx)(L.Z, {
                                      editorRef: tu,
                                      channel: eB,
                                      isEditorFocused: eZ,
                                      onSelectSticker: tV,
                                      submitButtonVisible: (null === (eE = eG.submit) || void 0 === eE ? void 0 : eE.button) && (null !== (eT = null === (ev = eG.submit) || void 0 === ev ? void 0 : ev.ignorePreference) && void 0 !== eT ? eT : tC),
                                      stickerIconVisible: null !== (eb = null === (eI = eG.stickers) || void 0 === eI ? void 0 : eI.button) && void 0 !== eb && eb
                                  })
                                : null,
                            te
                        ]
                    }),
                    tX
                        ? null
                        : (0, r.jsx)(O.Z, {
                              positionTargetRef: to,
                              type: eG,
                              onSelectGIF: tZ,
                              onSelectEmoji: tF,
                              onSelectSticker: tV,
                              onSelectSound: tj,
                              channel: eB,
                              closeOnModalOuterClick: tn,
                              parentModalKey: tr,
                              position: 'top',
                              align: 'right',
                              positionLayerClassName: ed.expressionPickerPositionLayer
                          })
                ]
            })
        });
    })
);
