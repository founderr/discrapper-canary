n(47120);
var i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    r = n(512722),
    o = n.n(r),
    c = n(995295),
    u = n(873546),
    d = n(106351),
    h = n(442837),
    p = n(481060),
    m = n(430742),
    _ = n(904245),
    f = n(144144),
    E = n(166459),
    g = n(966390),
    C = n(738619),
    I = n(410575),
    T = n(744061),
    x = n(857595),
    S = n(607070),
    v = n(367907),
    N = n(450936),
    A = n(993766),
    Z = n(499254),
    M = n(541099),
    b = n(827498),
    R = n(845936),
    L = n(555573),
    P = n(213459),
    j = n(456007),
    O = n(10718),
    y = n(998698),
    D = n(895924),
    U = n(581364),
    k = n(667204),
    w = n(404295),
    B = n(541716),
    H = n(752305),
    G = n(516887),
    V = n(974251),
    F = n(893718),
    W = n(436660),
    z = n(603009),
    Y = n(28546),
    K = n(295474),
    q = n(521476),
    X = n(69882),
    J = n(71619),
    Q = n(185145),
    $ = n(736052),
    ee = n(146128),
    et = n(549006),
    en = n(925975),
    ei = n(957730),
    es = n(400023),
    ea = n(64078),
    el = n(351780),
    er = n(843693),
    eo = n(217871),
    ec = n(139577),
    eu = n(247944),
    ed = n(623292),
    eh = n(807092),
    ep = n(268350),
    em = n(155409),
    e_ = n(314897),
    ef = n(433355),
    eE = n(703558),
    eg = n(323873),
    eC = n(271383),
    eI = n(375954),
    eT = n(496675),
    ex = n(944486),
    eS = n(117530),
    ev = n(594174),
    eN = n(626135),
    eA = n(934415),
    eZ = n(459273),
    eM = n(585483),
    eb = n(709054),
    eR = n(838440),
    eL = n(228488),
    eP = n(127654),
    ej = n(979956),
    eO = n(655687),
    ey = n(165540),
    eD = n(583027),
    eU = n(25007),
    ek = n(685006),
    ew = n(685722),
    eB = n(199649),
    eH = n(1397),
    eG = n(981631),
    eV = n(689938),
    eF = n(784237);
function eW(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function ez(e) {
    e.preventDefault();
}
let eY = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function eK(e) {
    let { isSidebar: t, ...n } = e;
    return t
        ? (0, i.jsx)('section', {
              ...n,
              role: 'complementary'
          })
        : (0, i.jsx)('main', { ...n });
}
class eq extends s.PureComponent {
    componentDidMount() {
        eE.Z.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        eE.Z.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: i } = this.state;
        if (e.channel.id !== n.id) {
            this.draftDidChange(this.props);
            return;
        }
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = eE.Z.getDraft(n.id, eE.d.ChannelMessage);
            e !== i && this.setState((0, H.eK)(e));
        }
        t.textValue.length < eG.J6R && i.length >= eG.J6R && eN.default.track(eG.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        _.Z.startEditMessage(t.id, e.id, e.content), v.ZP.trackWithMetadata(eG.rMx.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: i } = (0, U.XA)(e.interactionData),
            { command: s, application: a } = O.Xq(t, n);
        if (null != s) {
            var l, r;
            let e =
                null != a
                    ? {
                          type: D.Qi.APPLICATION,
                          id: a.id,
                          icon: a.icon,
                          name: null !== (r = null == a ? void 0 : null === (l = a.bot) || void 0 === l ? void 0 : l.username) && void 0 !== r ? r : a.name,
                          application: a
                      }
                    : null;
            L.Po({
                channelId: t.id,
                command: s,
                section: e,
                location: D.Vh.RECALL,
                initialValues: (0, j.Dw)(s, null != i ? i : [])
            });
        }
    }
    render() {
        let { channel: e, focused: t, onBlur: n, onFocus: s, onResize: a, highlighted: l, pendingReply: r, chatInputType: c, placeholder: u, accessibilityLabel: d, shakeIntensity: h, poggermodeEnabled: m, onCommandSentinelTyped: _ } = this.props,
            { contentWarningProps: f } = this.state,
            E = (0, i.jsx)(F.Z, {
                textValue: this.state.textValue,
                richValue: this.state.richValue,
                focused: t,
                className: eF.channelTextArea,
                channel: e,
                placeholder: u,
                accessibilityLabel: d,
                pendingReply: r,
                type: c,
                onChange: this.handleTextareaChange,
                onSubmit: this.handleSendMessage,
                onResize: a,
                onFocus: s,
                onBlur: n,
                onKeyDown: this.handleKeyDown,
                renderAttachButton: this.renderAttachButton,
                renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                promptToUpload: eP.d,
                highlighted: l,
                setEditorRef: (e) => (this.editorRef = e),
                onCommandSentinelTyped: _
            });
        return (0, i.jsx)(p.Popout, {
            position: 'top',
            onRequestClose: () => {
                var e;
                null == f || null === (e = f.onCancel) || void 0 === e || e.call(f), this.setState({ contentWarningProps: null });
            },
            shouldShow: null != f,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                    o()(null != f, 'ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null'),
                    (0, i.jsx)(T.Z, {
                        onClose: t,
                        ...f
                    })
                );
            },
            children: () =>
                m
                    ? (0, i.jsx)(p.Shaker, {
                          isShaking: h > 0,
                          intensity: h,
                          className: eF.shaker,
                          children: E
                      })
                    : E
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            eW(this, 'isFirstChange', !0),
            eW(this, 'editorRef', null),
            eW(this, 'state', {
                ...(0, H.eK)(eE.Z.getDraft(this.props.channel.id, eE.d.ChannelMessage)),
                contentWarningProps: null
            }),
            eW(this, 'draftDidChange', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    i = eE.Z.getDraft(e.channel.id, eE.d.ChannelMessage);
                n !== i &&
                    ('' === i || '' === n) &&
                    t.setState((0, H.eK)(i), () => {
                        if (n !== i) {
                            let { onFocus: e } = t.props;
                            null == e || e();
                        }
                    });
            }),
            eW(this, 'handleKeyDown', (e) => {
                let { keyboardModeEnabled: t, onKeyDown: n, channel: i } = this.props,
                    s = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                    a = 0 !== this.state.textValue.length;
                switch (e.which) {
                    case eG.yXg.DELETE:
                    case eG.yXg.BACKSPACE:
                        this.handleIncrementCombo('', 1);
                        return;
                    case eG.yXg.ARROW_UP:
                        if (s || a) return;
                        if ((e.preventDefault(), t)) eS.Z.getUploadCount(i.id, eE.d.ChannelMessage) > 0 ? eM.S.dispatchToLastSubscribed(eG.CkL.FOCUS_ATTACHMENT_AREA) : eM.S.dispatchToLastSubscribed(eG.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                        else {
                            let { channel: e } = this.props,
                                t = eI.Z.getLastChatCommandMessage(e.id),
                                n = eI.Z.getLastEditableMessage(e.id);
                            null != t && null != n ? (eb.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t)) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n);
                        }
                        return;
                    case eG.yXg.ESCAPE:
                        if (s || e.target !== e.currentTarget) return;
                        if ((e.preventDefault(), t)) {
                            (0, x.rf)();
                            return;
                        }
                        if (eS.Z.getUploadCount(i.id, eE.d.ChannelMessage) > 0) {
                            E.Z.clearAll(i.id, eE.d.ChannelMessage);
                            return;
                        }
                }
                null == n || n(e, a);
            }),
            eW(this, 'handleIncrementCombo', (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let i = this.props.channel.id,
                    s = e_.default.getId(),
                    a = er.ZP.getUserCombo(s, i),
                    l = (null !== (n = null == a ? void 0 : a.value) && void 0 !== n ? n : 0) + 1;
                (0, ea.SE)({
                    channelId: i,
                    userId: s,
                    value: null != e ? e.length : l,
                    multiplier: t
                });
            }),
            eW(this, 'handleTextareaChange', (e, t, n) => {
                let {
                    keyboardModeEnabled: i,
                    channel: { id: s }
                } = this.props;
                m.Z.changeDraft(s, t, eE.d.ChannelMessage);
                let a = '' !== t && n !== this.state.richValue,
                    l = a && !eY.test(t) && !t.startsWith('/') && (!this.isFirstChange || t !== this.state.textValue);
                (this.isFirstChange = !1),
                    l && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    l ? f.Z.startTyping(s) : '' === t && f.Z.stopTyping(s),
                    a && i && (0, x.rf)(),
                    this.setState({
                        textValue: t,
                        richValue: n
                    });
            }),
            eW(this, 'handleSendMessage', async (e) => {
                let { value: t, uploads: n, stickers: i, command: s, commandOptionValues: a, isGif: l } = e;
                if (0 === (t = t.trim()).length && (null == i || 0 === i.length) && (null == n || 0 === n.length))
                    return Promise.resolve({
                        shouldClear: !1,
                        shouldRefocus: !0
                    });
                let { guild: r, channel: o, pendingReply: c, chatInputType: u } = this.props,
                    d = !1;
                if (null != s) {
                    if (s.inputType === D.iw.BUILT_IN_INTEGRATION)
                        return (
                            eM.S.dispatch(eG.CkL.SHAKE_APP, {
                                duration: 200,
                                intensity: 2
                            }),
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            })
                        );
                    let e = y.Z.getCommandOrigin(o.id);
                    if (e === D.bB.APPLICATION_LAUNCHER || e === D.bB.IMAGE_RECS_MENU || e === D.bB.IMAGE_RECS_SUBMENU) {
                        var h;
                        let { location: t, sectionName: n } = null !== (h = (0, eD._U)(s)) && void 0 !== h ? h : {},
                            i = e === D.bB.APPLICATION_LAUNCHER ? M.Z.lastShownEntrypoint() : b._b.TEXT;
                        if (
                            !(await (0, R.L)({
                                applicationId: s.applicationId,
                                userIndexState: P.ZP.getUserState(),
                                guildIndexState: P.ZP.getGuildState(o.guild_id),
                                location: t,
                                sectionName: n,
                                entrypoint: i
                            }))
                        )
                            return Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            });
                        (0, eD.SC)(s);
                    }
                    let n = await (0, k.Z)({
                        command: s,
                        optionValues: null != a ? a : {},
                        context: {
                            guild: r,
                            channel: o
                        }
                    });
                    if (s.inputType !== D.iw.BUILT_IN_TEXT)
                        return Promise.resolve({
                            shouldClear: !0,
                            shouldRefocus: !0
                        });
                    null != n && ((t = null != n.content && '' !== n.content ? n.content : t), (d = !0 === n.tts));
                }
                return (0, eR.v)({
                    openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                    type: this.props.chatInputType,
                    content: t,
                    stickers: i,
                    uploads: n,
                    channel: o
                }).then((e) => {
                    let { valid: s, failureReason: a } = e;
                    if (!s)
                        return a === eG.zYc.SLOWMODE_COOLDOWN
                            ? (eM.S.dispatch(eG.CkL.SHAKE_APP, {
                                  duration: 200,
                                  intensity: 2
                              }),
                              eM.S.dispatch(eG.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
                              {
                                  shouldClear: !1,
                                  shouldRefocus: !0
                              })
                            : {
                                  shouldClear: !1,
                                  shouldRefocus: !1
                              };
                    let h = (0, en.g)(t, {
                        channel: o,
                        isEdit: !1
                    });
                    null != h && (null != h.content && (t = h.content), null != h.tts && (d = h.tts));
                    let p = ei.ZP.parse(o, t);
                    p.tts = p.tts || d;
                    let m = _.Z.getSendMessageOptionsForReply(c);
                    if (l)
                        return (
                            _.Z.sendMessage(o.id, p, void 0, m),
                            (0, ed.A6)(o.id),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }
                        );
                    if (null != n && n.length > 0) {
                        let e = (0, ej.KZ)(n);
                        if ((0, ej.Bf)(e, null == r ? void 0 : r.id))
                            return (
                                (0, eP.G)(o, e),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                }
                            );
                        g.Z.uploadFiles({
                            channelId: o.id,
                            uploads: n,
                            draftType: eE.d.ChannelMessage,
                            parsedMessage: p,
                            options: {
                                ...m,
                                stickerIds: i
                            }
                        }),
                            E.Z.clearAll(o.id, eE.d.ChannelMessage);
                    } else
                        null != i && i.length > 0
                            ? '' !== t
                                ? _.Z.sendMessage(o.id, p, void 0, {
                                      ...m,
                                      stickerIds: i
                                  })
                                : _.Z.sendStickers(o.id, i, t, m, p.tts)
                            : _.Z.sendMessage(o.id, p, void 0, m);
                    return (
                        this.setState((0, H.H2)()),
                        (0, ed.A6)(o.id),
                        (0, ep.qB)(o.id, u.drafts.type),
                        {
                            shouldClear: !0,
                            shouldRefocus: !0
                        }
                    );
                });
            }),
            eW(this, 'handleSetValue', (e) => {
                var t, n;
                let i = null === (t = this.editorRef) || void 0 === t ? void 0 : t.getSlateEditor();
                null != i && (W.Q.select(i, []), i.insertText(e), null === (n = this.editorRef) || void 0 === n || n.focus());
            }),
            eW(this, 'renderAttachButton', (e, t) =>
                (0, i.jsx)(V.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: eE.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e
                })
            ),
            eW(this, 'renderApplicationCommandIcon', (e, t, n) =>
                (0, i.jsx)(G.Z, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel
                })
            );
    }
}
class eX extends s.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: i } = t;
        return n.id !== i
            ? {
                  textAreaFocused: null != n && !u.tq && eT.Z.can(eG.Plq.SEND_MESSAGES, n),
                  currentChannelId: n.id
              }
            : null;
    }
    componentDidMount() {
        eM.S.subscribe(eG.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        eM.S.unsubscribe(eG.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    render() {
        var e;
        let t;
        let { channel: n, guild: s, keyboardModeEnabled: a, hasModalOpen: r, pendingReply: o, chatInputType: c, placeholder: u, accessibilityLabel: h, showQuarantinedUserBanner: m, filterAfterTimestamp: _, communicationDisabledUntil: f, shakeIntensity: E, poggermodeEnabled: g, isSelectedResourceChannel: T, showAutomodUserProfileChatBlocker: x, showAppDMsUI: S, isInitialLoading: v, entryPointCommandButtonRef: N, isFailedAppDMLoad: A } = this.props,
            { textAreaFocused: Z, textAreaHighlighted: M } = this.state,
            b = c === B.I.SIDEBAR;
        t = b && n.type === eG.d4z.GUILD_VOICE ? eV.Z.Messages.TEXT_IN_VOICE_A11Y_LABEL : b && n.type === eG.d4z.GUILD_STAGE_VOICE ? eV.Z.Messages.TEXT_IN_STAGE_A11Y_LABEL : d.T.THREADS.has(n.type) ? eV.Z.Messages.THREAD_A11Y_LABEL : eV.Z.Messages.CHANNEL_A11Y_LABEL;
        let R = (0, i.jsx)('div', {
                className: eF.channelBottomBarArea,
                children: (0, i.jsx)(ew.Z, {})
            }),
            L = (0, i.jsxs)('div', {
                className: eF.channelBottomBarArea,
                children: [
                    (0, i.jsx)(em.Z, {
                        tutorialId: 'writing-messages',
                        position: 'left',
                        offsetX: 75,
                        children: (0, i.jsx)(eq, {
                            focused: Z,
                            highlighted: M,
                            channel: n,
                            guild: s,
                            keyboardModeEnabled: a,
                            onFocus: this.handleInputFocus,
                            onBlur: this.handleInputBlur,
                            onKeyDown: this.handleInputKeyDown,
                            hasModalOpen: r,
                            pendingReply: o,
                            chatInputType: c,
                            placeholder: u,
                            accessibilityLabel: h,
                            shakeIntensity: E,
                            poggermodeEnabled: g,
                            onCommandSentinelTyped: this.handleCommandSentinelTyped
                        })
                    }),
                    (0, i.jsx)(eJ, {
                        children: (0, i.jsx)(ey.Z, {
                            channel: n,
                            type: c,
                            animateRef: this.appIconAnimateRef,
                            entryPointCommandButtonRef: N
                        })
                    }),
                    S && !A
                        ? (0, i.jsx)(ek.Z, {
                              channel: n,
                              entryPointCommandButtonRef: N,
                              type: c
                          })
                        : null
                ]
            }),
            P = S && v,
            j = P && v ? R : L;
        return (0, i.jsx)(
            I.Z,
            {
                page: (0, eA.mE)(this.props.channel),
                children: (0, i.jsx)(et.sW, {
                    children: (0, i.jsx)(ee.BV, {
                        children: (0, i.jsxs)(eZ.I3, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, i.jsx)(eZ.d9, {
                                    event: eG.CkL.TEXTAREA_FOCUS,
                                    handler: this.handleInputFocus
                                }),
                                (0, i.jsx)(eZ.d9, {
                                    event: eG.CkL.TEXTAREA_BLUR,
                                    handler: this.handleInputBlur
                                }),
                                (0, i.jsx)(eZ.d9, {
                                    event: eG.CkL.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker
                                }),
                                (0, i.jsx)(eZ.d9, {
                                    event: eG.CkL.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher
                                }),
                                (0, i.jsxs)(eK, {
                                    isSidebar: b,
                                    className: eF.chatContent,
                                    'aria-label': t.format({ channelName: n.name }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    children: [
                                        (0, i.jsx)(eU.Z, {
                                            channel: n,
                                            guild: s,
                                            narrow: b
                                        }),
                                        (0, i.jsxs)(p.HeadingLevel, {
                                            component: (0, i.jsx)(p.HiddenVisually, { children: (0, i.jsx)(p.H, { children: eV.Z.Messages.CHANNEL_CHAT_HEADING.format({ channelName: n.name }) }) }),
                                            children: [
                                                (0, i.jsx)(es.Z, {
                                                    channel: n,
                                                    forceCozy: T,
                                                    filterAfterTimestamp: _,
                                                    showingQuarantineBanner: m
                                                }),
                                                T
                                                    ? null
                                                    : null !==
                                                            (e = this.renderMessageBanner({
                                                                channel: n,
                                                                showQuarantinedUserBanner: m,
                                                                guild: s,
                                                                communicationDisabledUntil: f,
                                                                showAutomodUserProfileChatBlocker: x
                                                            })) && void 0 !== e
                                                      ? e
                                                      : (0, i.jsxs)('form', {
                                                            ref: this.inputFormRef,
                                                            onSubmit: ez,
                                                            className: l()(eF.form, { [eF.formWithLoadedChatInput]: !P }),
                                                            children: [
                                                                g && (0, i.jsx)(eo.Z, { channelId: n.id }),
                                                                n.isPrivate()
                                                                    ? (0, i.jsx)(eB.Z, {
                                                                          channel: n,
                                                                          children: j
                                                                      })
                                                                    : (0, i.jsx)(eH.Z, {
                                                                          channel: n,
                                                                          children: j
                                                                      }),
                                                                (0, i.jsx)(C.Z, {
                                                                    channel: n,
                                                                    poggermodeEnabled: g
                                                                }),
                                                                !b && (0, i.jsx)(z.Z, {})
                                                            ]
                                                        }),
                                                (0, i.jsx)(et.kw, {})
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            },
            'messages-'.concat(n.id)
        );
    }
    constructor(...e) {
        super(...e),
            eW(this, 'inputFormRef', s.createRef()),
            eW(this, 'state', {
                textAreaFocused: !1,
                textAreaHighlighted: !1,
                currentChannelId: this.props.channel.id
            }),
            eW(this, 'dispatchGroupRef', s.createRef()),
            eW(this, 'appIconAnimateRef', s.createRef()),
            eW(this, 'handleRequestFocus', (e) => {
                e.channelId === this.props.channel.id && this.setState({ textAreaFocused: !0 });
            }),
            eW(this, 'handleInputFocus', (e) => {
                var t;
                if ((null === (t = this.dispatchGroupRef.current) || void 0 === t || t.bumpDispatchPriority(), !(0, eL.rB)()))
                    (null == e ? void 0 : e.highlight) != null
                        ? this.setState({
                              textAreaFocused: !0,
                              textAreaHighlighted: null == e ? void 0 : e.highlight
                          })
                        : this.setState({ textAreaFocused: !0 });
            }),
            eW(this, 'handleInputBlur', () => {
                (document.hasFocus() || this.props.hasModalOpen) &&
                    this.setState({
                        textAreaFocused: !1,
                        textAreaHighlighted: !1
                    });
            }),
            eW(this, 'handleInputKeyDown', (e, t) => {
                this.state.textAreaHighlighted && this.setState({ textAreaHighlighted: !1 }), !t && this._handleMoveToPane(e);
            }),
            eW(this, 'handleKeyDown', (e) => {
                var t;
                if (null === (t = this.inputFormRef.current) || void 0 === t ? !void 0 : !t.contains(e.target)) this._handleMoveToPane(e);
            }),
            eW(this, '_handleMoveToPane', (e) => {
                let { keyboardModeEnabled: t, chatInputType: n, channel: i } = this.props;
                if (!!t)
                    switch (e.which) {
                        case eG.yXg.ARROW_LEFT:
                            n === B.I.SIDEBAR && eM.S.dispatch(eG.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: ex.Z.getChannelId() });
                            return;
                        case eG.yXg.ARROW_RIGHT:
                            n === B.I.NORMAL && eM.S.dispatch(eG.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: ef.ZP.getCurrentSidebarChannelId(i.id) });
                    }
            }),
            eW(this, 'handleOpenExpressionPicker', (e) => {
                let { activeView: t } = e;
                (0, Y.PG)(t, this.props.chatInputType);
            }),
            eW(this, 'handleOpenAppLauncher', (e) => {
                let { applicationId: t } = e;
                return Z.__(b._b.TEXT, this.props.chatInputType, { applicationId: t });
            }),
            eW(this, 'handleChatInteract', () => {
                var e;
                null === (e = this.dispatchGroupRef.current) || void 0 === e || e.bumpDispatchPriority();
            }),
            eW(this, 'handleCommandSentinelTyped', () => {
                var e;
                null === (e = this.appIconAnimateRef.current) || void 0 === e || e.animate();
            }),
            eW(this, 'renderMessageBanner', (e) => {
                let { channel: t, showQuarantinedUserBanner: n, guild: s, communicationDisabledUntil: a, showAutomodUserProfileChatBlocker: l } = e;
                return t.type === eG.d4z.DM && n
                    ? (0, i.jsx)(eu.Z, {})
                    : null != a && (0, X.J)(a) && null != s && !eT.Z.can(eG.Plq.ADMINISTRATOR, s)
                      ? (0, i.jsx)(Q.T, {
                            guild: s,
                            disabledUntil: a
                        })
                      : l
                        ? (0, i.jsx)(q.h, { guild: s })
                        : null;
            });
    }
}
function eJ(e) {
    let { children: t } = e,
        n = document.getElementById('visual-refresh-app-launcher-portal');
    return null == n ? (0, i.jsx)(i.Fragment, { children: t }) : (0, i.jsx)(i.Fragment, { children: (0, c.createPortal)(t, n) });
}
t.Z = s.memo(function (e) {
    let { channel: t, guild: n, chatInputType: a, filterAfterTimestamp: l } = e,
        { placeholder: r, accessibilityLabel: o } = (0, eO.Z)(t),
        c = (0, eu.S)(ev.default.getCurrentUser(), t),
        [u] = (0, J.AB)(null == n ? void 0 : n.id),
        d = (0, K.Ux)(null == n ? void 0 : n.id),
        m = (0, h.e7)([ev.default], () => ev.default.getCurrentUser()),
        _ = (0, h.e7)([eC.ZP], () => {
            var e, t, i;
            return null != m && null !== (i = null === (e = eC.ZP.getMember(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eG.lds, null == m ? void 0 : m.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== i && i;
        }),
        f = (0, h.e7)([el.Z], () => el.Z.isEnabled()),
        E = (0, ec.Z)(t.id),
        g = (0, $.Z)(t.id),
        C = (0, w.h9)(t.id, 'ChannelChatMemo'),
        { isInitialLoading: I, primaryEntryPointCommand: T, isProfileFetching: x, wasProfileFetching: v, applicationId: Z, channelId: b, commands: R } = (0, N.Z)({ channel: t });
    (0, A.Z)({
        isProfileFetching: x,
        wasProfileFetching: v,
        applicationId: Z,
        channelId: b,
        commands: R
    });
    let L = s.useRef(null),
        P = (0, h.e7)([M.Z], () => M.Z.appDMChannelsWithFailedLoads().has(t.id));
    return (0, i.jsx)(eX, {
        channel: t,
        isEditing: null != (0, h.e7)([eg.Z], () => eg.Z.getEditingMessageId(t.id)),
        hasModalOpen: (0, p.useModalsStore)(p.hasAnyModalOpenSelector),
        guild: n,
        keyboardModeEnabled: (0, h.e7)([S.Z], () => S.Z.keyboardModeEnabled),
        pendingReply: (0, h.e7)([eh.Z], () => eh.Z.getPendingReply(t.id)),
        chatInputType: a,
        placeholder: r,
        accessibilityLabel: o,
        filterAfterTimestamp: l,
        showQuarantinedUserBanner: c,
        communicationDisabledUntil: u,
        shakeIntensity: E,
        poggermodeEnabled: f,
        isSelectedResourceChannel: g,
        showAutomodUserProfileChatBlocker: d && !_,
        showAppDMsUI: C,
        isInitialLoading: I,
        showEntryPointAppCommandButton: null != T,
        entryPointCommandButtonRef: L,
        isFailedAppDMLoad: P
    });
});
