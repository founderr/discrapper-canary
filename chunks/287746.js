n(47120);
var i = n(735250),
    s = n(470079),
    a = n(512722),
    l = n.n(a),
    r = n(873546),
    o = n(106351),
    c = n(442837),
    u = n(481060),
    d = n(430742),
    h = n(904245),
    p = n(144144),
    m = n(166459),
    _ = n(966390),
    f = n(738619),
    E = n(410575),
    g = n(744061),
    C = n(857595),
    I = n(607070),
    T = n(367907),
    x = n(450936),
    v = n(993766),
    S = n(499254),
    N = n(541099),
    A = n(827498),
    Z = n(845936),
    M = n(555573),
    b = n(213459),
    R = n(456007),
    L = n(10718),
    j = n(998698),
    P = n(895924),
    O = n(581364),
    y = n(667204),
    D = n(404295),
    U = n(541716),
    k = n(752305),
    w = n(516887),
    B = n(974251),
    H = n(893718),
    G = n(436660),
    V = n(603009),
    F = n(28546),
    W = n(295474),
    z = n(521476),
    Y = n(69882),
    K = n(71619),
    q = n(185145),
    X = n(736052),
    J = n(898188),
    Q = n(549006),
    $ = n(925975),
    ee = n(957730),
    et = n(400023),
    en = n(64078),
    ei = n(351780),
    es = n(843693),
    ea = n(217871),
    el = n(139577),
    er = n(247944),
    eo = n(623292),
    ec = n(807092),
    eu = n(268350),
    ed = n(155409),
    eh = n(314897),
    ep = n(433355),
    em = n(703558),
    e_ = n(323873),
    ef = n(271383),
    eE = n(375954),
    eg = n(496675),
    eC = n(944486),
    eI = n(117530),
    eT = n(594174),
    ex = n(626135),
    ev = n(934415),
    eS = n(459273),
    eN = n(585483),
    eA = n(709054),
    eZ = n(838440),
    eM = n(228488),
    eb = n(127654),
    eR = n(979956),
    eL = n(655687),
    ej = n(165540),
    eP = n(583027),
    eO = n(25007),
    ey = n(685006),
    eD = n(685722),
    eU = n(199649),
    ek = n(1397),
    ew = n(981631),
    eB = n(689938),
    eH = n(784237);
function eG(e, t, n) {
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
function eV(e) {
    e.preventDefault();
}
let eF = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function eW(e) {
    let { isSidebar: t, ...n } = e;
    return t
        ? (0, i.jsx)('section', {
              ...n,
              role: 'complementary'
          })
        : (0, i.jsx)('main', { ...n });
}
class ez extends s.PureComponent {
    componentDidMount() {
        em.Z.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        em.Z.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: i } = this.state;
        if (e.channel.id !== n.id) {
            this.draftDidChange(this.props);
            return;
        }
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = em.Z.getDraft(n.id, em.d.ChannelMessage);
            e !== i && this.setState((0, k.eK)(e));
        }
        t.textValue.length < ew.J6R && i.length >= ew.J6R && ex.default.track(ew.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        h.Z.startEditMessage(t.id, e.id, e.content), T.ZP.trackWithMetadata(ew.rMx.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: i } = (0, O.XA)(e.interactionData),
            { command: s, application: a } = L.Xq(t, n);
        if (null != s) {
            var l, r;
            let e =
                null != a
                    ? {
                          type: P.Qi.APPLICATION,
                          id: a.id,
                          icon: a.icon,
                          name: null !== (r = null == a ? void 0 : null === (l = a.bot) || void 0 === l ? void 0 : l.username) && void 0 !== r ? r : a.name,
                          application: a
                      }
                    : null;
            M.Po({
                channelId: t.id,
                command: s,
                section: e,
                location: P.Vh.RECALL,
                initialValues: (0, R.Dw)(s, null != i ? i : [])
            });
        }
    }
    render() {
        let { channel: e, focused: t, onBlur: n, onFocus: s, onResize: a, highlighted: r, pendingReply: o, chatInputType: c, placeholder: d, accessibilityLabel: h, shakeIntensity: p, poggermodeEnabled: m, onCommandSentinelTyped: _ } = this.props,
            { contentWarningProps: f } = this.state,
            E = (0, i.jsx)(H.Z, {
                textValue: this.state.textValue,
                richValue: this.state.richValue,
                focused: t,
                className: eH.channelTextArea,
                channel: e,
                placeholder: d,
                accessibilityLabel: h,
                pendingReply: o,
                type: c,
                onChange: this.handleTextareaChange,
                onSubmit: this.handleSendMessage,
                onResize: a,
                onFocus: s,
                onBlur: n,
                onKeyDown: this.handleKeyDown,
                renderAttachButton: this.renderAttachButton,
                renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                promptToUpload: eb.d,
                highlighted: r,
                setEditorRef: (e) => (this.editorRef = e),
                onCommandSentinelTyped: _
            });
        return (0, i.jsx)(u.Popout, {
            position: 'top',
            onRequestClose: () => {
                var e;
                null == f || null === (e = f.onCancel) || void 0 === e || e.call(f), this.setState({ contentWarningProps: null });
            },
            shouldShow: null != f,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                    l()(null != f, 'ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null'),
                    (0, i.jsx)(g.Z, {
                        onClose: t,
                        ...f
                    })
                );
            },
            children: () =>
                m
                    ? (0, i.jsx)(u.Shaker, {
                          isShaking: p > 0,
                          intensity: p,
                          className: eH.shaker,
                          children: E
                      })
                    : E
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            eG(this, 'isFirstChange', !0),
            eG(this, 'editorRef', null),
            eG(this, 'state', {
                ...(0, k.eK)(em.Z.getDraft(this.props.channel.id, em.d.ChannelMessage)),
                contentWarningProps: null
            }),
            eG(this, 'draftDidChange', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    i = em.Z.getDraft(e.channel.id, em.d.ChannelMessage);
                n !== i &&
                    ('' === i || '' === n) &&
                    t.setState((0, k.eK)(i), () => {
                        if (n !== i) {
                            let { onFocus: e } = t.props;
                            null == e || e();
                        }
                    });
            }),
            eG(this, 'handleKeyDown', (e) => {
                let { keyboardModeEnabled: t, onKeyDown: n, channel: i } = this.props,
                    s = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                    a = 0 !== this.state.textValue.length;
                switch (e.which) {
                    case ew.yXg.DELETE:
                    case ew.yXg.BACKSPACE:
                        this.handleIncrementCombo('', 1);
                        return;
                    case ew.yXg.ARROW_UP:
                        if (s || a) return;
                        if ((e.preventDefault(), t)) eI.Z.getUploadCount(i.id, em.d.ChannelMessage) > 0 ? eN.S.dispatchToLastSubscribed(ew.CkL.FOCUS_ATTACHMENT_AREA) : eN.S.dispatchToLastSubscribed(ew.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                        else {
                            let { channel: e } = this.props,
                                t = eE.Z.getLastCommandMessage(e.id),
                                n = eE.Z.getLastEditableMessage(e.id);
                            null != t && null != n ? (eA.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t)) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n);
                        }
                        return;
                    case ew.yXg.ESCAPE:
                        if (s || e.target !== e.currentTarget) return;
                        if ((e.preventDefault(), t)) {
                            (0, C.rf)();
                            return;
                        }
                        if (eI.Z.getUploadCount(i.id, em.d.ChannelMessage) > 0) {
                            m.Z.clearAll(i.id, em.d.ChannelMessage);
                            return;
                        }
                }
                null == n || n(e, a);
            }),
            eG(this, 'handleIncrementCombo', (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let i = this.props.channel.id,
                    s = eh.default.getId(),
                    a = es.ZP.getUserCombo(s, i),
                    l = (null !== (n = null == a ? void 0 : a.value) && void 0 !== n ? n : 0) + 1;
                (0, en.SE)({
                    channelId: i,
                    userId: s,
                    value: null != e ? e.length : l,
                    multiplier: t
                });
            }),
            eG(this, 'handleTextareaChange', (e, t, n) => {
                let {
                    keyboardModeEnabled: i,
                    channel: { id: s }
                } = this.props;
                d.Z.changeDraft(s, t, em.d.ChannelMessage);
                let a = '' !== t && n !== this.state.richValue,
                    l = a && !eF.test(t) && !t.startsWith('/') && (!this.isFirstChange || t !== this.state.textValue);
                (this.isFirstChange = !1),
                    l && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    l ? p.Z.startTyping(s) : '' === t && p.Z.stopTyping(s),
                    a && i && (0, C.rf)(),
                    this.setState({
                        textValue: t,
                        richValue: n
                    });
            }),
            eG(this, 'handleSendMessage', async (e) => {
                let { value: t, uploads: n, stickers: i, command: s, commandOptionValues: a, isGif: l } = e;
                if (0 === (t = t.trim()).length && (null == i || 0 === i.length) && (null == n || 0 === n.length))
                    return Promise.resolve({
                        shouldClear: !1,
                        shouldRefocus: !0
                    });
                let { guild: r, channel: o, pendingReply: c, chatInputType: u } = this.props,
                    d = !1;
                if (null != s) {
                    if (s.inputType === P.iw.BUILT_IN_INTEGRATION)
                        return (
                            eN.S.dispatch(ew.CkL.SHAKE_APP, {
                                duration: 200,
                                intensity: 2
                            }),
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            })
                        );
                    let e = j.Z.getCommandOrigin(o.id);
                    if (e === P.bB.APPLICATION_LAUNCHER || e === P.bB.IMAGE_RECS_MENU || e === P.bB.IMAGE_RECS_SUBMENU) {
                        var p;
                        let { location: t, sectionName: n } = null !== (p = (0, eP._U)(s)) && void 0 !== p ? p : {},
                            i = e === P.bB.APPLICATION_LAUNCHER ? N.Z.lastShownEntrypoint() : A._b.TEXT;
                        if (
                            !(await (0, Z.L)({
                                applicationId: s.applicationId,
                                userIndexState: b.ZP.getUserState(),
                                guildIndexState: b.ZP.getGuildState(o.guild_id),
                                location: t,
                                sectionName: n,
                                entrypoint: i
                            }))
                        )
                            return Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            });
                        (0, eP.SC)(s);
                    }
                    let n = await (0, y.Z)({
                        command: s,
                        optionValues: null != a ? a : {},
                        context: {
                            guild: r,
                            channel: o
                        }
                    });
                    if (s.inputType !== P.iw.BUILT_IN_TEXT)
                        return Promise.resolve({
                            shouldClear: !0,
                            shouldRefocus: !0
                        });
                    null != n && ((t = null != n.content && '' !== n.content ? n.content : t), (d = !0 === n.tts));
                }
                return (0, eZ.v)({
                    openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                    type: this.props.chatInputType,
                    content: t,
                    stickers: i,
                    uploads: n,
                    channel: o
                }).then((e) => {
                    let { valid: s, failureReason: a } = e;
                    if (!s)
                        return a === ew.zYc.SLOWMODE_COOLDOWN
                            ? (eN.S.dispatch(ew.CkL.SHAKE_APP, {
                                  duration: 200,
                                  intensity: 2
                              }),
                              eN.S.dispatch(ew.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
                              {
                                  shouldClear: !1,
                                  shouldRefocus: !0
                              })
                            : {
                                  shouldClear: !1,
                                  shouldRefocus: !1
                              };
                    let p = (0, $.g)(t, {
                        channel: o,
                        isEdit: !1
                    });
                    null != p && (null != p.content && (t = p.content), null != p.tts && (d = p.tts));
                    let f = ee.ZP.parse(o, t);
                    f.tts = f.tts || d;
                    let E = h.Z.getSendMessageOptionsForReply(c);
                    if (l)
                        return (
                            h.Z.sendMessage(o.id, f, void 0, E),
                            (0, eo.A6)(o.id),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }
                        );
                    if (null != n && n.length > 0) {
                        let e = (0, eR.KZ)(n);
                        if ((0, eR.Bf)(e, null == r ? void 0 : r.id))
                            return (
                                (0, eb.G)(o, e),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                }
                            );
                        _.Z.uploadFiles({
                            channelId: o.id,
                            uploads: n,
                            draftType: em.d.ChannelMessage,
                            parsedMessage: f,
                            options: {
                                ...E,
                                stickerIds: i
                            }
                        }),
                            m.Z.clearAll(o.id, em.d.ChannelMessage);
                    } else
                        null != i && i.length > 0
                            ? '' !== t
                                ? h.Z.sendMessage(o.id, f, void 0, {
                                      ...E,
                                      stickerIds: i
                                  })
                                : h.Z.sendStickers(o.id, i, t, E, f.tts)
                            : h.Z.sendMessage(o.id, f, void 0, E);
                    return (
                        this.setState((0, k.H2)()),
                        (0, eo.A6)(o.id),
                        (0, eu.qB)(o.id, u.drafts.type),
                        {
                            shouldClear: !0,
                            shouldRefocus: !0
                        }
                    );
                });
            }),
            eG(this, 'handleSetValue', (e) => {
                var t, n;
                let i = null === (t = this.editorRef) || void 0 === t ? void 0 : t.getSlateEditor();
                null != i && (G.Q.select(i, []), i.insertText(e), null === (n = this.editorRef) || void 0 === n || n.focus());
            }),
            eG(this, 'renderAttachButton', (e, t) =>
                (0, i.jsx)(B.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: em.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e
                })
            ),
            eG(this, 'renderApplicationCommandIcon', (e, t, n) =>
                (0, i.jsx)(w.Z, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel
                })
            );
    }
}
class eY extends s.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: i } = t;
        return n.id !== i
            ? {
                  textAreaFocused: null != n && !r.tq && eg.Z.can(ew.Plq.SEND_MESSAGES, n),
                  currentChannelId: n.id
              }
            : null;
    }
    componentDidMount() {
        eN.S.subscribe(ew.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        eN.S.unsubscribe(ew.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    render() {
        var e;
        let t;
        let { channel: n, guild: s, keyboardModeEnabled: a, hasModalOpen: l, pendingReply: r, chatInputType: c, placeholder: d, accessibilityLabel: h, showQuarantinedUserBanner: p, filterAfterTimestamp: m, communicationDisabledUntil: _, shakeIntensity: g, poggermodeEnabled: C, isSelectedResourceChannel: I, showAutomodUserProfileChatBlocker: T, showAppDMsUI: x, isInitialLoading: v, entryPointCommandButtonRef: S, isFailedAppDMLoad: N } = this.props,
            { textAreaFocused: A, textAreaHighlighted: Z } = this.state,
            M = c === U.I.SIDEBAR;
        t = M && n.type === ew.d4z.GUILD_VOICE ? eB.Z.Messages.TEXT_IN_VOICE_A11Y_LABEL : M && n.type === ew.d4z.GUILD_STAGE_VOICE ? eB.Z.Messages.TEXT_IN_STAGE_A11Y_LABEL : o.T.THREADS.has(n.type) ? eB.Z.Messages.THREAD_A11Y_LABEL : eB.Z.Messages.CHANNEL_A11Y_LABEL;
        let b = (0, i.jsx)('div', {
                className: eH.channelBottomBarArea,
                children: (0, i.jsx)(eD.Z, {})
            }),
            R = (0, i.jsxs)('div', {
                className: eH.channelBottomBarArea,
                children: [
                    (0, i.jsx)(ed.Z, {
                        tutorialId: 'writing-messages',
                        position: 'left',
                        offsetX: 75,
                        children: (0, i.jsx)(ez, {
                            focused: A,
                            highlighted: Z,
                            channel: n,
                            guild: s,
                            keyboardModeEnabled: a,
                            onFocus: this.handleInputFocus,
                            onBlur: this.handleInputBlur,
                            onKeyDown: this.handleInputKeyDown,
                            hasModalOpen: l,
                            pendingReply: r,
                            chatInputType: c,
                            placeholder: d,
                            accessibilityLabel: h,
                            shakeIntensity: g,
                            poggermodeEnabled: C,
                            onCommandSentinelTyped: this.handleCommandSentinelTyped
                        })
                    }),
                    (0, i.jsx)(ej.Z, {
                        channel: n,
                        type: c,
                        animateRef: this.appIconAnimateRef,
                        entryPointCommandButtonRef: S
                    }),
                    x && !N
                        ? (0, i.jsx)(ey.Z, {
                              channel: n,
                              entryPointCommandButtonRef: S,
                              type: c
                          })
                        : null
                ]
            }),
            L = x && v,
            j = L && v ? b : R;
        return (0, i.jsx)(
            E.Z,
            {
                page: (0, ev.mE)(this.props.channel),
                children: (0, i.jsx)(Q.sW, {
                    children: (0, i.jsxs)(eS.I3, {
                        ref: this.dispatchGroupRef,
                        children: [
                            (0, i.jsx)(eS.d9, {
                                event: ew.CkL.TEXTAREA_FOCUS,
                                handler: this.handleInputFocus
                            }),
                            (0, i.jsx)(eS.d9, {
                                event: ew.CkL.TEXTAREA_BLUR,
                                handler: this.handleInputBlur
                            }),
                            (0, i.jsx)(eS.d9, {
                                event: ew.CkL.OPEN_EXPRESSION_PICKER,
                                handler: this.handleOpenExpressionPicker
                            }),
                            (0, i.jsx)(eS.d9, {
                                event: ew.CkL.OPEN_APP_LAUNCHER,
                                handler: this.handleOpenAppLauncher
                            }),
                            (0, i.jsxs)(eW, {
                                isSidebar: M,
                                className: eH.chatContent,
                                'aria-label': t.format({ channelName: n.name }),
                                onMouseDown: this.handleChatInteract,
                                onKeyDown: this.handleKeyDown,
                                onFocus: this.handleChatInteract,
                                children: [
                                    (0, i.jsx)(eO.Z, {
                                        channel: n,
                                        guild: s,
                                        narrow: M
                                    }),
                                    (0, i.jsxs)(u.HeadingLevel, {
                                        component: (0, i.jsx)(u.HiddenVisually, { children: (0, i.jsx)(u.H, { children: eB.Z.Messages.CHANNEL_CHAT_HEADING.format({ channelName: n.name }) }) }),
                                        children: [
                                            (0, i.jsx)(et.Z, {
                                                channel: n,
                                                forceCozy: I,
                                                filterAfterTimestamp: m,
                                                showingQuarantineBanner: p
                                            }),
                                            null == n.guild_id || M
                                                ? null
                                                : (0, i.jsx)(J.Z, {
                                                      guildId: n.guild_id,
                                                      channel: n
                                                  }),
                                            I
                                                ? null
                                                : null !==
                                                        (e = this.renderMessageBanner({
                                                            channel: n,
                                                            showQuarantinedUserBanner: p,
                                                            guild: s,
                                                            communicationDisabledUntil: _,
                                                            showAutomodUserProfileChatBlocker: T
                                                        })) && void 0 !== e
                                                  ? e
                                                  : (0, i.jsxs)('form', {
                                                        ref: this.inputFormRef,
                                                        onSubmit: eV,
                                                        className: L ? void 0 : eH.form,
                                                        children: [
                                                            C && (0, i.jsx)(ea.Z, { channelId: n.id }),
                                                            n.isPrivate()
                                                                ? (0, i.jsx)(eU.Z, {
                                                                      channel: n,
                                                                      children: j
                                                                  })
                                                                : (0, i.jsx)(ek.Z, {
                                                                      channel: n,
                                                                      children: j
                                                                  }),
                                                            (0, i.jsx)(f.Z, {
                                                                channel: n,
                                                                poggermodeEnabled: C
                                                            }),
                                                            !M && (0, i.jsx)(V.Z, {})
                                                        ]
                                                    }),
                                            (0, i.jsx)(Q.kw, {})
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            },
            'messages-'.concat(n.id)
        );
    }
    constructor(...e) {
        super(...e),
            eG(this, 'inputFormRef', s.createRef()),
            eG(this, 'state', {
                textAreaFocused: !1,
                textAreaHighlighted: !1,
                currentChannelId: this.props.channel.id
            }),
            eG(this, 'dispatchGroupRef', s.createRef()),
            eG(this, 'appIconAnimateRef', s.createRef()),
            eG(this, 'handleRequestFocus', (e) => {
                e.channelId === this.props.channel.id && this.setState({ textAreaFocused: !0 });
            }),
            eG(this, 'handleInputFocus', (e) => {
                var t;
                if ((null === (t = this.dispatchGroupRef.current) || void 0 === t || t.bumpDispatchPriority(), !(0, eM.rB)()))
                    (null == e ? void 0 : e.highlight) != null
                        ? this.setState({
                              textAreaFocused: !0,
                              textAreaHighlighted: null == e ? void 0 : e.highlight
                          })
                        : this.setState({ textAreaFocused: !0 });
            }),
            eG(this, 'handleInputBlur', () => {
                (document.hasFocus() || this.props.hasModalOpen) &&
                    this.setState({
                        textAreaFocused: !1,
                        textAreaHighlighted: !1
                    });
            }),
            eG(this, 'handleInputKeyDown', (e, t) => {
                this.state.textAreaHighlighted && this.setState({ textAreaHighlighted: !1 }), !t && this._handleMoveToPane(e);
            }),
            eG(this, 'handleKeyDown', (e) => {
                var t;
                if (null === (t = this.inputFormRef.current) || void 0 === t ? !void 0 : !t.contains(e.target)) this._handleMoveToPane(e);
            }),
            eG(this, '_handleMoveToPane', (e) => {
                let { keyboardModeEnabled: t, chatInputType: n, channel: i } = this.props;
                if (!!t)
                    switch (e.which) {
                        case ew.yXg.ARROW_LEFT:
                            n === U.I.SIDEBAR && eN.S.dispatch(ew.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eC.Z.getChannelId() });
                            return;
                        case ew.yXg.ARROW_RIGHT:
                            n === U.I.NORMAL && eN.S.dispatch(ew.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: ep.ZP.getCurrentSidebarChannelId(i.id) });
                    }
            }),
            eG(this, 'handleOpenExpressionPicker', (e) => {
                let { activeView: t } = e;
                (0, F.PG)(t, this.props.chatInputType);
            }),
            eG(this, 'handleOpenAppLauncher', (e) => {
                let { applicationId: t } = e;
                return S.__(A._b.TEXT, this.props.chatInputType, { applicationId: t });
            }),
            eG(this, 'handleChatInteract', () => {
                var e;
                null === (e = this.dispatchGroupRef.current) || void 0 === e || e.bumpDispatchPriority();
            }),
            eG(this, 'handleCommandSentinelTyped', () => {
                var e;
                null === (e = this.appIconAnimateRef.current) || void 0 === e || e.animate();
            }),
            eG(this, 'renderMessageBanner', (e) => {
                let { channel: t, showQuarantinedUserBanner: n, guild: s, communicationDisabledUntil: a, showAutomodUserProfileChatBlocker: l } = e;
                return t.type === ew.d4z.DM && n
                    ? (0, i.jsx)(er.Z, {})
                    : null != a && (0, Y.J)(a) && null != s && !eg.Z.can(ew.Plq.ADMINISTRATOR, s)
                      ? (0, i.jsx)(q.T, {
                            guild: s,
                            disabledUntil: a
                        })
                      : l
                        ? (0, i.jsx)(z.h, { guild: s })
                        : null;
            });
    }
}
t.Z = s.memo(function (e) {
    let { channel: t, guild: n, chatInputType: a, filterAfterTimestamp: l } = e,
        { placeholder: r, accessibilityLabel: o } = (0, eL.Z)(t),
        d = (0, er.S)(eT.default.getCurrentUser(), t),
        [h] = (0, K.AB)(null == n ? void 0 : n.id),
        p = (0, W.Ux)(null == n ? void 0 : n.id),
        m = (0, c.e7)([eT.default], () => eT.default.getCurrentUser()),
        _ = (0, c.e7)([ef.ZP], () => {
            var e, t, i;
            return null != m && null !== (i = null === (e = ef.ZP.getMember(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : ew.lds, null == m ? void 0 : m.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== i && i;
        }),
        f = (0, c.e7)([ei.Z], () => ei.Z.isEnabled()),
        E = (0, el.Z)(t.id),
        g = (0, X.Z)(t.id),
        C = (0, D.h9)(t.id, 'ChannelChatMemo'),
        { isInitialLoading: T, primaryEntryPointCommand: S, isProfileFetching: A, wasProfileFetching: Z, applicationId: M, channelId: b, isFetchingApplicationIndex: R, wasFetchingApplicationIndex: L, commands: j } = (0, x.Z)({ channel: t });
    (0, v.Z)({
        isProfileFetching: A,
        wasProfileFetching: Z,
        applicationId: M,
        channelId: b,
        isFetchingApplicationIndex: R,
        wasFetchingApplicationIndex: L,
        commands: j
    });
    let P = s.useRef(null),
        O = (0, c.e7)([N.Z], () => N.Z.appDMChannelsWithFailedLoads().has(t.id));
    return (0, i.jsx)(eY, {
        channel: t,
        isEditing: null != (0, c.e7)([e_.Z], () => e_.Z.getEditingMessageId(t.id)),
        hasModalOpen: (0, u.useModalsStore)(u.hasAnyModalOpenSelector),
        guild: n,
        keyboardModeEnabled: (0, c.e7)([I.Z], () => I.Z.keyboardModeEnabled),
        pendingReply: (0, c.e7)([ec.Z], () => ec.Z.getPendingReply(t.id)),
        chatInputType: a,
        placeholder: r,
        accessibilityLabel: o,
        filterAfterTimestamp: l,
        showQuarantinedUserBanner: d,
        communicationDisabledUntil: h,
        shakeIntensity: E,
        poggermodeEnabled: f,
        isSelectedResourceChannel: g,
        showAutomodUserProfileChatBlocker: p && !_,
        showAppDMsUI: C,
        isInitialLoading: T,
        showEntryPointAppCommandButton: null != S,
        entryPointCommandButtonRef: P,
        isFailedAppDMLoad: O
    });
});
