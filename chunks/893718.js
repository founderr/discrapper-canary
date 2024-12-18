var i = r(47120);
var a = r(411104);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(836560);
var d = r(512722),
    f = r.n(d),
    _ = r(232713),
    h = r(873546),
    p = r(149765),
    m = r(442837),
    g = r(481060),
    E = r(430742),
    v = r(738619),
    I = r(393238),
    T = r(607070),
    b = r(100527),
    y = r(906732),
    S = r(998698),
    A = r(271668),
    N = r(404295),
    C = r(326133),
    R = r(405701),
    O = r(570220),
    D = r(540059),
    L = r(28546),
    x = r(805680),
    w = r(278754),
    P = r(151574),
    M = r(368844),
    k = r(41776),
    U = r(849522),
    B = r(780291),
    G = r(913663),
    Z = r(268350),
    F = r(378233),
    V = r(665906),
    j = r(695346),
    H = r(271383),
    Y = r(496675),
    W = r(944486),
    K = r(398327),
    z = r(117530),
    q = r(594174),
    Q = r(459273),
    X = r(700785),
    J = r(358085),
    $ = r(746877),
    ee = r(541716),
    et = r(667829),
    en = r(319417),
    er = r(562267),
    ei = r(376918),
    ea = r(760196),
    es = r(258696),
    eo = r(303628),
    el = r(472243),
    eu = r(872635),
    ec = r(676108),
    ed = r(981631),
    ef = r(665692),
    e_ = r(957825),
    eh = r(553796);
let ep = 44,
    em = 450;
function eg(e) {
    return e !== W.Z.getChannelId();
}
function eE(e, n) {
    var r, i;
    return null !== (i = e && (null === (r = n.submit) || void 0 === r ? void 0 : r.clearOnSubmit)) && void 0 !== i && i;
}
function ev(e, n, i, a) {
    let [l, u] = o.useState(!1),
        c = o.useCallback(
            (o, d, f, _, h) => {
                var p, m, v;
                if (l) return;
                u(!0);
                let I = null !== (m = null === (p = G.Z.getStickerPreview(a, n.drafts.type)) || void 0 === p ? void 0 : p.map((e) => e.id)) && void 0 !== m ? m : [],
                    T = null !== (v = z.Z.getUploads(a, n.drafts.type)) && void 0 !== v ? v : [];
                if (null == d && !_ && !h && (0, M.CB)(T, a)) {
                    u(!1),
                        (0, g.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([r.e('90508'), r.e('18895'), r.e('47512')]).then(r.bind(r, 273602));
                            return (n) =>
                                (0, s.jsx)(e, {
                                    ...n,
                                    threadId: a,
                                    attachments: T,
                                    sendMessage: () => c(o, void 0, void 0, void 0, !0)
                                });
                        });
                    return;
                }
                e({
                    value: o,
                    uploads: T,
                    stickers: I,
                    command: d,
                    commandOptionValues: f,
                    isGif: _
                }).then((e) => {
                    let { shouldClear: r, shouldRefocus: s } = e,
                        o = eE(r, n),
                        l = null != i.current;
                    o && (eg(a) ? E.Z.saveDraft(a, '', n.drafts.type) : l && i.current.clearValue()), l && (u(!1), (0, L._Q)(), s && i.current.focus());
                });
            },
            [i, e, l, n, a]
        );
    return {
        submitting: l,
        submit: c,
        handleSubmit: o.useCallback((e) => {
            var n;
            null == i || null === (n = i.current) || void 0 === n || n.submit(e);
        }, [])
    };
}
function eI(e, n, r) {
    return o.useCallback(
        (i) => {
            var a, s;
            n === ee.Ie.CREATE_FORUM_POST ? null === (s = r.current) || void 0 === s || s.insertGIF(i) : e(i.url, void 0, void 0, !0), (0, L._Q)(), null === (a = r.current) || void 0 === a || a.focus();
        },
        [r, e, n]
    );
}
function eT(e) {
    return o.useCallback(
        function (n, r) {
            let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                a = e.current;
            null != n && null != a && a.insertEmoji(n, r, i), r && (0, L._Q)();
        },
        [e]
    );
}
function eb(e) {
    let { editorRef: n, disabled: r, textValue: i, channelId: a, chatInputType: s, submit: l } = e,
        { analyticsLocations: u } = (0, y.ZP)();
    return o.useCallback(
        (e, o) => {
            var c, d;
            !r &&
                ((0, F.Hc)(o, i, a, s.drafts.type)
                    ? ((0, ei._H)({
                          sticker: e,
                          stickerSelectLocation: o,
                          isReplacement: null != G.Z.getStickerPreview(a, s.drafts.type),
                          analyticsLocations: u
                      }),
                      (0, Z.eu)(a, e, s.drafts.type))
                    : (l({
                          value: '',
                          uploads: void 0,
                          stickers: [e.id]
                      }),
                      null === (d = n.current) || void 0 === d || d.clearValue()),
                (0, L._Q)(),
                null === (c = n.current) || void 0 === c || c.focus());
        },
        [r, i, a, s.drafts.type, n, u, l]
    );
}
function ey(e) {
    return o.useCallback(
        (n) => {
            let r = e.current;
            null != n && null != r && r.insertSound(n), (0, L._Q)(), null == r || r.focus();
        },
        [e]
    );
}
function eS(e, n) {
    let r = o.useCallback(() => {
            if (!n) (0, L.RO)(e_.X1.EMOJI, e);
        }, [n, e]),
        i = o.useCallback(() => {
            var r;
            if (!n && !!(null === (r = e.gifs) || void 0 === r ? void 0 : r.allowSending)) (0, L.RO)(e_.X1.GIF, e);
        }, [n, e]),
        a = o.useCallback(() => {
            var r;
            if (!n && !!(null === (r = e.stickers) || void 0 === r ? void 0 : r.allowSending)) (0, L.RO)(e_.X1.STICKER, e);
        }, [n, e]);
    (0, Q.yp)({
        event: ed.CkL.TOGGLE_EMOJI_POPOUT,
        handler: r
    }),
        (0, Q.yp)({
            event: ed.CkL.TOGGLE_GIF_PICKER,
            handler: i
        }),
        (0, Q.yp)({
            event: ed.CkL.TOGGLE_STICKER_PICKER,
            handler: a
        });
}
function eA(e, n, r) {
    let [i] = o.useState(() => new c.EventEmitter());
    o.useEffect(() => {
        i.emit('text-changed', n, r);
    }, [n, r, i]);
    let a = (n) => {
        null != e.current && i.emit('selection-changed', n);
    };
    return {
        eventEmitter: i,
        handleEditorSelectionChanged: a
    };
}
function eN() {
    let e = o.useRef(null),
        n = o.useCallback(() => {
            var n;
            null === (n = e.current) || void 0 === n || n.onMaybeShowAutocomplete();
        }, []),
        r = o.useCallback(() => {
            var n;
            null === (n = e.current) || void 0 === n || n.onHideAutocomplete();
        }, []);
    return {
        autocompleteRef: e,
        handleMaybeShowAutocomplete: n,
        handleHideAutocomplete: r
    };
}
function eC(e) {
    let n = o.useRef(null);
    if (null != e && 'function' == typeof e) throw Error('Only Ref objects are supported');
    return null == e ? n : e;
}
function eR(e) {
    let [n, r] = o.useState(0);
    return {
        editorHeight: n,
        handleResize: o.useCallback(
            (n) => {
                r(null != n ? n : 0), null == e || e(n);
            },
            [e]
        )
    };
}
function eO(e, n, r, i) {
    let a = e.getGuildId(),
        s = (0, m.e7)([k.Z], () => null != a && k.Z.isLurking(a), [a]),
        o = (0, m.e7)([H.ZP, q.default], () => {
            var e, n;
            let r = q.default.getCurrentUser();
            return null !== (n = null != a && null != r ? (null === (e = H.ZP.getMember(a, r.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== n && n;
        }),
        l = (0, m.cj)(
            [Y.Z],
            () => {
                var a, s;
                let l = e.isPrivate(),
                    u = Y.Z.computePermissions(e),
                    c = p.e$(u, ed.Plq.CREATE_PUBLIC_THREADS) || p.e$(u, ed.Plq.CREATE_PRIVATE_THREADS),
                    d = (!(null === (a = n.permissions) || void 0 === a ? void 0 : a.requireCreateTherads) || c) && (!(null === (s = n.permissions) || void 0 === s ? void 0 : s.requireSendMessages) || p.e$(u, ed.Plq.SEND_MESSAGES)),
                    f = d && p.e$(u, ed.Plq.ATTACH_FILES),
                    _ = null != r,
                    h = (0, V.xl)(e);
                return {
                    disabled: i || o || (!l && !d) || h,
                    canAttachFiles: !0 === n.attachments && (l || o || f || _),
                    canCreateThreads: c,
                    canEveryoneSendMessages: X.Uu(ed.Plq.SEND_MESSAGES, e)
                };
            },
            [e, n.permissions.requireCreateTherads, n.permissions.requireSendMessages, n.attachments, r, i, o]
        );
    return {
        isLurking: s,
        isPendingMember: o,
        ...l
    };
}
function eD(e, n, r) {
    let [i, a] = (0, L.Iu)((e) => [e.activeView, e.activeViewType], _.X);
    o.useEffect(
        () => () => {
            (0, L._Q)(e);
        },
        [e]
    );
    let s = o.useCallback(
            (e) => {
                n.emit('autocomplete-visibility-change', e), e && (0, L._Q)();
            },
            [n]
        ),
        l = o.useCallback(() => {
            var e;
            null == i && (null === (e = r.current) || void 0 === e || e.handleOuterClick());
        }, [i]),
        u = null == i || null == a || a !== e;
    return {
        expressionPickerView: i,
        shouldHideExpressionPicker: u,
        handleAutocompleteVisibilityChange: s,
        handleOuterClick: l
    };
}
function eL(e, n, r) {
    let i = o.useCallback(() => {
            var i, a;
            return !!(!r && (null === (i = n.current) || void 0 === i ? void 0 : i.onTabOrEnter(!1))) || (null === (a = e.current) || void 0 === a ? void 0 : a.onTabOrEnter(!1)) || !1;
        }, [r]),
        a = o.useCallback(() => {
            var i, a;
            return !!(!r && (null === (i = n.current) || void 0 === i ? void 0 : i.onTabOrEnter(!0))) || (null === (a = e.current) || void 0 === a ? void 0 : a.onTabOrEnter(!0)) || !1;
        }, [r]);
    return {
        handleTab: i,
        handleEnter: a,
        handleMoveSelection: o.useCallback(
            (i) => {
                var a, s;
                return !!(!r && (null === (a = n.current) || void 0 === a ? void 0 : a.onMoveSelection(i))) || (null === (s = e.current) || void 0 === s ? void 0 : s.onMoveSelection(i)) || !1;
            },
            [r]
        )
    };
}
function ex(e, n, r, i) {
    var a, s;
    let o = (0, w.pR)(),
        l = (0, m.e7)([G.Z], () => G.Z.getStickerPreview(e.id, n.drafts.type)),
        u = null != l && l.length > 0;
    return o && (null === (a = n.stickers) || void 0 === a ? void 0 : a.autoSuggest) && !u && (null === (s = i.current) || void 0 === s ? void 0 : s.isVisible()) !== !0 && !__OVERLAY__ && null != r;
}
function ew(e, n) {
    var r, i, a, l, c, d, _, p, E, L, w, M, k;
    let { textValue: G, richValue: Z, className: F, innerClassName: V, editorClassName: H, id: Y, required: W, disabled: z, placeholder: q, accessibilityLabel: Q, channel: X, type: ei, focused: e_, renderAttachButton: eg, renderApplicationCommandIcon: eE, renderAppLauncherButton: ew, renderLeftAccessories: eP, pendingReply: eM, onChange: ek, onResize: eU, onBlur: eB, onFocus: eG, onKeyDown: eZ, onSubmit: eF, promptToUpload: eV, highlighted: ej, canMentionRoles: eH, canMentionChannels: eY, maxCharacterCount: eW, showRemainingCharsAfterCount: eK, allowNewLines: ez = !0, characterCountClassName: eq, 'aria-describedby': eQ, 'aria-labelledby': eX, setEditorRef: eJ, autoCompletePosition: e$, children: e0, disableThemedBackground: e1 = !1, emojiPickerCloseOnModalOuterClick: e2, parentModalKey: e3, onCommandSentinelTyped: e4 } = e;
    f()(null != ei, 'chat input type must be set');
    let { analyticsLocations: e6 } = (0, y.ZP)(b.Z.CHANNEL_TEXT_AREA),
        e5 = (0, D.Q3)('ChannelTextAreaContainer'),
        e7 = eC(n),
        e8 = o.useRef(null),
        e9 = o.useRef(null),
        te = o.useRef(null),
        tt = o.useRef(null);
    null == eJ || eJ(e9.current);
    let tn = (0, N.h9)(X.id, 'ChannelTextAreaContainer'),
        [tr, ti] = o.useState(!tn);
    (0, I.P)(e7, (e) => {
        let { width: n } = e;
        return ti(!tn && (null == n || n > em));
    });
    let { activeCommand: ta, activeCommandSection: ts } = (0, m.cj)([S.Z], () => {
            var e, n;
            return {
                activeCommand: (null === (e = ei.commands) || void 0 === e ? void 0 : e.enabled) ? S.Z.getActiveCommand(X.id) : null,
                activeCommandSection: (null === (n = ei.commands) || void 0 === n ? void 0 : n.enabled) ? S.Z.getActiveCommandSection(X.id) : null
            };
        }),
        { isLurking: to, isPendingMember: tl, disabled: tu, canAttachFiles: tc, canCreateThreads: td, canEveryoneSendMessages: tf } = eO(X, ei, ta, z),
        t_ = ei.toolbarType === ee.OW.STATIC,
        th = !j.dN.useSetting() && !(0, J.isAndroidWeb)() && null != window.ResizeObserver,
        tp = !th || !(null === (r = ei.commands) || void 0 === r ? void 0 : r.enabled) || !e_ || G !== ef.GI,
        tm = (0, U.Z)(),
        { isSubmitButtonEnabled: tg, fontSize: tE } = (0, m.cj)([T.Z], () => ({
            fontSize: T.Z.fontSize,
            isSubmitButtonEnabled: T.Z.isSubmitButtonEnabled
        })),
        tv = (0, m.e7)([K.Z], () => K.Z.isEnabled()),
        tI = o.useRef(G);
    tI.current = G;
    let tT = o.useCallback(
        (e, n, r) => {
            var i;
            n === ef.GI && '' === tI.current && (null === (i = ei.commands) || void 0 === i ? void 0 : i.enabled) && (null == e4 || e4()), null == ek || ek(e, n, r);
        },
        [ek, e4, null === (i = ei.commands) || void 0 === i ? void 0 : i.enabled]
    );
    eS(ei, tu);
    let { eventEmitter: tb, handleEditorSelectionChanged: ty } = eA(e9, G, Z),
        { submitting: tS, submit: tA, handleSubmit: tN } = ev(eF, ei, e9, X.id),
        { autocompleteRef: tC, handleMaybeShowAutocomplete: tR, handleHideAutocomplete: tO } = eN(),
        tD = eI(tA, ei, e9),
        tL = eT(e9),
        tx = eb({
            editorRef: e9,
            disabled: tu,
            textValue: G,
            channelId: X.id,
            chatInputType: ei,
            submit: eF
        }),
        tw = ey(e9),
        tP = o.useCallback(() => {
            var e;
            return null == tt ? void 0 : null === (e = tt.current) || void 0 === e ? void 0 : e.hide();
        }, []),
        { editorHeight: tM, handleResize: tk } = eR(eU),
        { handleTab: tU, handleEnter: tB, handleMoveSelection: tG } = eL(tC, e8, tp),
        { expressionPickerView: tZ, shouldHideExpressionPicker: tF, handleAutocompleteVisibilityChange: tV, handleOuterClick: tj } = eD(ei, tb, e9);
    (0, $.S)(tb, X.guild_id, X.id);
    let tH = null != eM,
        tY = (tu && !((to || tl) && tf)) || (tS && (null === (a = ei.submit) || void 0 === a ? void 0 : a.useDisabledStylesOnSubmit)),
        tW = null;
    null != ta ? (tW = null == eE ? void 0 : eE(ta, ts, eh.attachButton)) : (!tu || td) && (tW = null == eg ? void 0 : eg(tH, eh.attachButton));
    let tK = th && null != Z && !tu && ei.showCharacterCount && null == ta,
        tz = th && !__OVERLAY__ && null != Z && null == ta && ei.toolbarType !== ee.OW.NONE,
        tq = ex(X, ei, Z, tC),
        tQ = (0, ea.c)({
            channel: X,
            type: ei,
            activeCommand: ta,
            pendingReply: eM
        }),
        tX = !!(null === (l = ei.emojis) || void 0 === l ? void 0 : l.button) && tM <= ep,
        tJ = 0 === G.trim().length,
        t$ = (0, es.G)(X.id, ei, tJ),
        t0 = !0 === ei.showSlowmodeIndicator,
        t1 = !0 === ei.showTypingIndicator,
        t2 = e5 && ei.layout === ee.gy.INLINE,
        t3 = e5 && ei.layout === ee.gy.FLUSH,
        t4 = (0, s.jsx)(es.Z, {
            type: ei,
            disabled: tu,
            channel: X,
            handleSubmit: tN,
            isEmpty: tJ,
            showAllButtons: tr,
            children: e5 ? (null == ew ? void 0 : ew()) : null
        }),
        t6 = e5
            ? (0, s.jsxs)('div', {
                  className: eh.accessoryBar,
                  children: [
                      (0, s.jsxs)('div', {
                          className: eh.accessoryBarLeft,
                          children: [
                              null == eP ? void 0 : eP(),
                              tW,
                              t1
                                  ? (0, s.jsx)(v.Z, {
                                        channel: X,
                                        poggermodeEnabled: !1
                                    })
                                  : null
                          ]
                      }),
                      (0, s.jsx)('div', {
                          className: eh.accessoryBarRight,
                          children: t4
                      })
                  ]
              })
            : null;
    return (0, s.jsx)(O.f6, {
        value: tb,
        children: (0, s.jsxs)(y.Gt, {
            value: e6,
            children: [
                tz && t_
                    ? (0, s.jsx)(ec.Z, {
                          editorRef: e9,
                          options: ei.markdown,
                          channel: X
                      })
                    : tz
                      ? (0, s.jsx)(eu.Z, {
                            ref: tt,
                            editorRef: e9,
                            containerRef: te,
                            options: ei.markdown
                        })
                      : null,
                (0, s.jsxs)('div', {
                    ref: e7,
                    className: u()(F, {
                        [eh.channelTextArea]: !0,
                        [eh.channelTextAreaDisabled]: tY,
                        [eh.highlighted]: ej,
                        [eh.textAreaMobileThemed]: h.tq
                    }),
                    children: [
                        (0, s.jsx)(ea.Z, { bars: tQ }),
                        (0, s.jsxs)('div', {
                            ref: te,
                            onScroll: tP,
                            className: u()(V, {
                                [eh.scrollableContainer]: !0,
                                [eh.themedBackground]: !e1,
                                [eh.hasStackedBar]: tQ.stacked.length > 0,
                                [eh.inlineContainer]: t2,
                                [eh.flushContainer]: t3
                            }),
                            children: [
                                (0, s.jsx)(er.Z, {
                                    channelId: X.id,
                                    chatInputType: ei
                                }),
                                ei.hideAttachmentArea
                                    ? null
                                    : (0, s.jsx)(eo.Z, {
                                          channelId: X.id,
                                          type: ei,
                                          canAttachFiles: tc
                                      }),
                                (0, s.jsxs)('div', {
                                    className: u()(eh.inner, {
                                        [eh.innerDisabled]: tY,
                                        [eh.sansAttachButton]: ei !== ee.Ie.EDIT && (null != tW || (tY && null == tW) || to),
                                        [eh.sansAttachButtonCreateThread]: ei === ee.Ie.THREAD_CREATION,
                                        [eh.sansAttachButtonCreatePost]: ei === ee.Ie.CREATE_FORUM_POST || ei === ee.Ie.FORWARD_MESSAGE_INPUT,
                                        [eh.sansAttachButtonUserProfileReply]: ei === ee.Ie.USER_PROFILE_REPLY
                                    }),
                                    onMouseDown: tj,
                                    children: [
                                        e5 ? null : tW,
                                        (0, s.jsx)(g.FocusRing, {
                                            ringTarget: e7,
                                            ringClassName: eh.focusRing,
                                            children: (0, s.jsx)(et.Z, {
                                                ref: e9,
                                                id: Y,
                                                focused: e_,
                                                useSlate: th,
                                                textValue: G,
                                                richValue: Z,
                                                disabled: tu,
                                                placeholder: q,
                                                required: W,
                                                accessibilityLabel: Q,
                                                isPreviewing: (to || tl) && tf,
                                                channel: X,
                                                type: ei,
                                                canPasteFiles: tc,
                                                uploadPromptCharacterCount: ed.en1,
                                                maxCharacterCount: null != eW ? eW : tm,
                                                allowNewLines: ez,
                                                'aria-describedby': eQ,
                                                onChange: tT,
                                                onResize: tk,
                                                onBlur: eB,
                                                onFocus: eG,
                                                onKeyDown: eZ,
                                                onSubmit: tA,
                                                onTab: tU,
                                                onEnter: tB,
                                                onMoveSelection: tG,
                                                onSelectionChanged: ty,
                                                onMaybeShowAutocomplete: tR,
                                                onHideAutocomplete: tO,
                                                promptToUpload: eV,
                                                fontSize: tE,
                                                spellcheckEnabled: tv,
                                                canOnlyUseTextCommands: tH,
                                                className: u()(
                                                    {
                                                        [eh.textAreaThreadCreation]: ei === ee.Ie.THREAD_CREATION,
                                                        [eh.profileBioInput]: ei === ee.Ie.PROFILE_BIO_INPUT,
                                                        [eh.overlayInlineReply]: ei === ee.Ie.OVERLAY_INLINE_REPLY
                                                    },
                                                    H
                                                ),
                                                'aria-labelledby': eX
                                            })
                                        }),
                                        e5
                                            ? (0, s.jsxs)('div', {
                                                  className: eh.rightAccessories,
                                                  children: [
                                                      t0 ? (0, s.jsx)(R.Z, { channel: X }) : null,
                                                      (null === (c = ei.submit) || void 0 === c ? void 0 : c.button) != null && ((null === (d = ei.submit) || void 0 === d ? void 0 : d.ignorePreference) || tg)
                                                          ? (0, s.jsx)(en.Z, {
                                                                onClick: tN,
                                                                disabled: tu || t$
                                                            })
                                                          : null
                                                  ]
                                              })
                                            : t4
                                    ]
                                }),
                                e5 ? t6 : null
                            ]
                        }),
                        tp
                            ? null
                            : (0, s.jsx)(A.Z, {
                                  ref: e8,
                                  channel: X,
                                  canOnlyUseTextCommands: tH
                              }),
                        (0, s.jsx)(C.Z, {
                            ref: tC,
                            channel: X,
                            canMentionRoles: eH,
                            canMentionChannels: eY,
                            useNewSlashCommands: th,
                            canOnlyUseTextCommands: tH,
                            canSendStickers: null === (_ = ei.stickers) || void 0 === _ ? void 0 : _.allowSending,
                            canSendSoundmoji: null === (p = ei.soundmoji) || void 0 === p ? void 0 : p.allowSending,
                            textValue: G,
                            focused: e_,
                            expressionPickerView: tZ,
                            type: ei,
                            targetRef: e7,
                            editorRef: e9,
                            onSendMessage: tA,
                            onSendSticker: tx,
                            onVisibilityChange: tV,
                            editorHeight: tM,
                            setValue: (e, n) => (null == tT ? void 0 : tT(null, e, n)),
                            position: e$
                        }),
                        (0, s.jsx)(B.Z, {
                            textValue: G,
                            editorHeight: tM,
                            channelId: X.id
                        }),
                        tK
                            ? (0, s.jsx)(el.Z, {
                                  type: ei,
                                  textValue: G,
                                  className: u()(eq, { [eh.indentCharacterCount]: tX }),
                                  maxCharacterCount: eW,
                                  showRemainingCharsAfterCount: eK
                              })
                            : null,
                        tq
                            ? (0, s.jsx)(P.Z, {
                                  editorRef: e9,
                                  channel: X,
                                  isEditorFocused: e_,
                                  onSelectSticker: tx,
                                  submitButtonVisible: (null === (E = ei.submit) || void 0 === E ? void 0 : E.button) && (null !== (M = null === (L = ei.submit) || void 0 === L ? void 0 : L.ignorePreference) && void 0 !== M ? M : tg),
                                  stickerIconVisible: null !== (k = null === (w = ei.stickers) || void 0 === w ? void 0 : w.button) && void 0 !== k && k
                              })
                            : null,
                        e0
                    ]
                }),
                tF
                    ? null
                    : (0, s.jsx)(x.Z, {
                          positionTargetRef: e7,
                          type: ei,
                          onSelectGIF: tD,
                          onSelectEmoji: tL,
                          onSelectSticker: tx,
                          onSelectSound: tw,
                          channel: X,
                          closeOnModalOuterClick: e2,
                          parentModalKey: e3,
                          position: 'top',
                          align: 'right',
                          positionLayerClassName: eh.expressionPickerPositionLayer
                      })
            ]
        })
    });
}
n.Z = o.memo(o.forwardRef(ew));
