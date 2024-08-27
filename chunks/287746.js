n(47120);
var i = n(735250),
    a = n(470079),
    s = n(512722),
    l = n.n(s),
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
    C = n(744061),
    g = n(857595),
    I = n(607070),
    x = n(367907),
    T = n(499254),
    N = n(541099),
    S = n(827498),
    v = n(845936),
    Z = n(555573),
    A = n(213459),
    M = n(456007),
    b = n(10718),
    R = n(998698),
    L = n(895924),
    j = n(581364),
    O = n(667204),
    P = n(541716),
    y = n(752305),
    D = n(516887),
    k = n(974251),
    U = n(893718),
    w = n(436660),
    B = n(603009),
    H = n(28546),
    G = n(295474),
    V = n(521476),
    F = n(69882),
    W = n(71619),
    z = n(185145),
    Y = n(736052),
    K = n(898188),
    q = n(549006),
    X = n(925975),
    Q = n(957730),
    J = n(400023),
    $ = n(64078),
    ee = n(351780),
    et = n(843693),
    en = n(217871),
    ei = n(139577),
    ea = n(247944),
    es = n(623292),
    el = n(807092),
    er = n(268350),
    eo = n(155409),
    ec = n(314897),
    eu = n(433355),
    ed = n(703558),
    eh = n(323873),
    ep = n(271383),
    em = n(375954),
    e_ = n(496675),
    ef = n(944486),
    eE = n(117530),
    eC = n(594174),
    eg = n(626135),
    eI = n(459273),
    ex = n(585483),
    eT = n(709054),
    eN = n(838440),
    eS = n(228488),
    ev = n(127654),
    eZ = n(979956),
    eA = n(655687),
    eM = n(165540),
    eb = n(583027),
    eR = n(25007),
    eL = n(199649),
    ej = n(1397),
    eO = n(981631),
    eP = n(689938),
    ey = n(625032);
function eD(e, t, n) {
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
function ek(e) {
    e.preventDefault();
}
let eU = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function ew(e) {
    let { isSidebar: t, ...n } = e;
    return t
        ? (0, i.jsx)('section', {
              ...n,
              role: 'complementary'
          })
        : (0, i.jsx)('main', { ...n });
}
class eB extends a.PureComponent {
    componentDidMount() {
        ed.Z.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        ed.Z.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: i } = this.state;
        if (e.channel.id !== n.id) {
            this.draftDidChange(this.props);
            return;
        }
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = ed.Z.getDraft(n.id, ed.d.ChannelMessage);
            e !== i && this.setState((0, y.eK)(e));
        }
        t.textValue.length < eO.J6R && i.length >= eO.J6R && eg.default.track(eO.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        h.Z.startEditMessage(t.id, e.id, e.content), x.ZP.trackWithMetadata(eO.rMx.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: i } = (0, j.XA)(e.interactionData),
            { command: a, application: s } = b.Xq(t, n);
        if (null != a) {
            var l, r;
            let e =
                null != s
                    ? {
                          type: L.Qi.APPLICATION,
                          id: s.id,
                          icon: s.icon,
                          name: null !== (r = null == s ? void 0 : null === (l = s.bot) || void 0 === l ? void 0 : l.username) && void 0 !== r ? r : s.name,
                          application: s
                      }
                    : null;
            Z.Po({
                channelId: t.id,
                command: a,
                section: e,
                location: L.Vh.RECALL,
                initialValues: (0, M.Dw)(a, null != i ? i : [])
            });
        }
    }
    render() {
        let { channel: e, focused: t, onBlur: n, onFocus: a, onResize: s, highlighted: r, pendingReply: o, chatInputType: c, placeholder: d, accessibilityLabel: h, shakeIntensity: p, poggermodeEnabled: m, onCommandSentinelTyped: _ } = this.props,
            { contentWarningProps: f } = this.state,
            E = (0, i.jsx)(U.Z, {
                textValue: this.state.textValue,
                richValue: this.state.richValue,
                focused: t,
                className: ey.channelTextArea,
                channel: e,
                placeholder: d,
                accessibilityLabel: h,
                pendingReply: o,
                type: c,
                onChange: this.handleTextareaChange,
                onSubmit: this.handleSendMessage,
                onResize: s,
                onFocus: a,
                onBlur: n,
                onKeyDown: this.handleKeyDown,
                renderAttachButton: this.renderAttachButton,
                renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                promptToUpload: ev.d,
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
                    (0, i.jsx)(C.Z, {
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
                          className: ey.shaker,
                          children: E
                      })
                    : E
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            eD(this, 'isFirstChange', !0),
            eD(this, 'editorRef', null),
            eD(this, 'state', {
                ...(0, y.eK)(ed.Z.getDraft(this.props.channel.id, ed.d.ChannelMessage)),
                contentWarningProps: null
            }),
            eD(this, 'draftDidChange', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    i = ed.Z.getDraft(e.channel.id, ed.d.ChannelMessage);
                n !== i &&
                    ('' === i || '' === n) &&
                    t.setState((0, y.eK)(i), () => {
                        if (n !== i) {
                            let { onFocus: e } = t.props;
                            null == e || e();
                        }
                    });
            }),
            eD(this, 'handleKeyDown', (e) => {
                let { keyboardModeEnabled: t, onKeyDown: n, channel: i } = this.props,
                    a = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                    s = 0 !== this.state.textValue.length;
                switch (e.which) {
                    case eO.yXg.DELETE:
                    case eO.yXg.BACKSPACE:
                        this.handleIncrementCombo('', 1);
                        return;
                    case eO.yXg.ARROW_UP:
                        if (a || s) return;
                        if ((e.preventDefault(), t)) eE.Z.getUploadCount(i.id, ed.d.ChannelMessage) > 0 ? ex.S.dispatchToLastSubscribed(eO.CkL.FOCUS_ATTACHMENT_AREA) : ex.S.dispatchToLastSubscribed(eO.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                        else {
                            let { channel: e } = this.props,
                                t = em.Z.getLastCommandMessage(e.id),
                                n = em.Z.getLastEditableMessage(e.id);
                            null != t && null != n ? (eT.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t)) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n);
                        }
                        return;
                    case eO.yXg.ESCAPE:
                        if (a || e.target !== e.currentTarget) return;
                        if ((e.preventDefault(), t)) {
                            (0, g.rf)();
                            return;
                        }
                        if (eE.Z.getUploadCount(i.id, ed.d.ChannelMessage) > 0) {
                            m.Z.clearAll(i.id, ed.d.ChannelMessage);
                            return;
                        }
                }
                null == n || n(e, s);
            }),
            eD(this, 'handleIncrementCombo', (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let i = this.props.channel.id,
                    a = ec.default.getId(),
                    s = et.ZP.getUserCombo(a, i),
                    l = (null !== (n = null == s ? void 0 : s.value) && void 0 !== n ? n : 0) + 1;
                (0, $.SE)({
                    channelId: i,
                    userId: a,
                    value: null != e ? e.length : l,
                    multiplier: t
                });
            }),
            eD(this, 'handleTextareaChange', (e, t, n) => {
                let {
                    keyboardModeEnabled: i,
                    channel: { id: a }
                } = this.props;
                d.Z.changeDraft(a, t, ed.d.ChannelMessage);
                let s = '' !== t && n !== this.state.richValue,
                    l = s && !eU.test(t) && !t.startsWith('/') && (!this.isFirstChange || t !== this.state.textValue);
                (this.isFirstChange = !1),
                    l && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    l ? p.Z.startTyping(a) : '' === t && p.Z.stopTyping(a),
                    s && i && (0, g.rf)(),
                    this.setState({
                        textValue: t,
                        richValue: n
                    });
            }),
            eD(this, 'handleSendMessage', async (e) => {
                let { value: t, uploads: n, stickers: i, command: a, commandOptionValues: s, isGif: l } = e;
                if (0 === (t = t.trim()).length && (null == i || 0 === i.length) && (null == n || 0 === n.length))
                    return Promise.resolve({
                        shouldClear: !1,
                        shouldRefocus: !0
                    });
                let { guild: r, channel: o, pendingReply: c, chatInputType: u } = this.props,
                    d = !1;
                if (null != a) {
                    if (a.inputType === L.iw.BUILT_IN_INTEGRATION)
                        return (
                            ex.S.dispatch(eO.CkL.SHAKE_APP, {
                                duration: 200,
                                intensity: 2
                            }),
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            })
                        );
                    if (R.Z.getCommandOrigin(o.id) === L.bB.APPLICATION_LAUNCHER) {
                        var p;
                        let { location: e, sectionName: t } = null !== (p = (0, eb._U)(a)) && void 0 !== p ? p : {},
                            n = N.Z.lastShownEntrypoint();
                        if (
                            !(await (0, v.L)({
                                applicationId: a.applicationId,
                                userIndexState: A.ZP.getUserState(),
                                guildIndexState: A.ZP.getGuildState(o.guild_id),
                                location: e,
                                sectionName: t,
                                entrypoint: n
                            }))
                        )
                            return Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            });
                        (0, eb.SC)(a);
                    }
                    let e = await (0, O.Z)({
                        command: a,
                        optionValues: null != s ? s : {},
                        context: {
                            guild: r,
                            channel: o
                        }
                    });
                    if (a.inputType !== L.iw.BUILT_IN_TEXT)
                        return Promise.resolve({
                            shouldClear: !0,
                            shouldRefocus: !0
                        });
                    null != e && ((t = null != e.content && '' !== e.content ? e.content : t), (d = !0 === e.tts));
                }
                return (0, eN.v)({
                    openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                    type: this.props.chatInputType,
                    content: t,
                    stickers: i,
                    uploads: n,
                    channel: o
                }).then((e) => {
                    let { valid: a, failureReason: s } = e;
                    if (!a)
                        return s === eO.zYc.SLOWMODE_COOLDOWN
                            ? (ex.S.dispatch(eO.CkL.SHAKE_APP, {
                                  duration: 200,
                                  intensity: 2
                              }),
                              ex.S.dispatch(eO.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
                              {
                                  shouldClear: !1,
                                  shouldRefocus: !0
                              })
                            : {
                                  shouldClear: !1,
                                  shouldRefocus: !1
                              };
                    let p = (0, X.g)(t, {
                        channel: o,
                        isEdit: !1
                    });
                    null != p && (null != p.content && (t = p.content), null != p.tts && (d = p.tts));
                    let f = Q.ZP.parse(o, t);
                    f.tts = f.tts || d;
                    let E = h.Z.getSendMessageOptionsForReply(c);
                    if (l)
                        return (
                            h.Z.sendMessage(o.id, f, void 0, E),
                            (0, es.A6)(o.id),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }
                        );
                    if (null != n && n.length > 0) {
                        let e = (0, eZ.KZ)(n);
                        if ((0, eZ.Bf)(e, null == r ? void 0 : r.id))
                            return (
                                (0, ev.G)(o, e),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                }
                            );
                        _.Z.uploadFiles({
                            channelId: o.id,
                            uploads: n,
                            draftType: ed.d.ChannelMessage,
                            parsedMessage: f,
                            options: {
                                ...E,
                                stickerIds: i
                            }
                        }),
                            m.Z.clearAll(o.id, ed.d.ChannelMessage);
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
                        this.setState((0, y.H2)()),
                        (0, es.A6)(o.id),
                        (0, er.qB)(o.id, u.drafts.type),
                        {
                            shouldClear: !0,
                            shouldRefocus: !0
                        }
                    );
                });
            }),
            eD(this, 'handleSetValue', (e) => {
                var t, n;
                let i = null === (t = this.editorRef) || void 0 === t ? void 0 : t.getSlateEditor();
                null != i && (w.Q.select(i, []), i.insertText(e), null === (n = this.editorRef) || void 0 === n || n.focus());
            }),
            eD(this, 'renderAttachButton', (e, t) =>
                (0, i.jsx)(k.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: ed.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e
                })
            ),
            eD(this, 'renderApplicationCommandIcon', (e, t, n) =>
                (0, i.jsx)(D.Z, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel
                })
            );
    }
}
class eH extends a.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: i } = t;
        return n.id !== i
            ? {
                  textAreaFocused: null != n && !r.tq && e_.Z.can(eO.Plq.SEND_MESSAGES, n),
                  currentChannelId: n.id
              }
            : null;
    }
    componentDidMount() {
        ex.S.subscribe(eO.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        ex.S.unsubscribe(eO.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    render() {
        var e;
        let t;
        let { channel: n, guild: a, keyboardModeEnabled: s, hasModalOpen: l, pendingReply: r, chatInputType: c, placeholder: d, accessibilityLabel: h, showQuarantinedUserBanner: p, filterAfterTimestamp: m, communicationDisabledUntil: _, shakeIntensity: C, poggermodeEnabled: g, isSelectedResourceChannel: I, showAutomodUserProfileChatBlocker: x } = this.props,
            { textAreaFocused: T, textAreaHighlighted: N } = this.state,
            S = c === P.I.SIDEBAR;
        t = S && n.type === eO.d4z.GUILD_VOICE ? eP.Z.Messages.TEXT_IN_VOICE_A11Y_LABEL : S && n.type === eO.d4z.GUILD_STAGE_VOICE ? eP.Z.Messages.TEXT_IN_STAGE_A11Y_LABEL : o.T.THREADS.has(n.type) ? eP.Z.Messages.THREAD_A11Y_LABEL : eP.Z.Messages.CHANNEL_A11Y_LABEL;
        let v = (0, i.jsxs)('div', {
            className: ey.channelBottomBarArea,
            children: [
                (0, i.jsx)(eo.Z, {
                    tutorialId: 'writing-messages',
                    position: 'left',
                    offsetX: 75,
                    children: (0, i.jsx)(eB, {
                        focused: T,
                        highlighted: N,
                        channel: n,
                        guild: a,
                        keyboardModeEnabled: s,
                        onFocus: this.handleInputFocus,
                        onBlur: this.handleInputBlur,
                        onKeyDown: this.handleInputKeyDown,
                        hasModalOpen: l,
                        pendingReply: r,
                        chatInputType: c,
                        placeholder: d,
                        accessibilityLabel: h,
                        shakeIntensity: C,
                        poggermodeEnabled: g,
                        onCommandSentinelTyped: this.handleCommandSentinelTyped
                    })
                }),
                (0, i.jsx)(eM.Z, {
                    channel: n,
                    type: c,
                    animateRef: this.appIconAnimateRef
                })
            ]
        });
        return (0, i.jsx)(
            E.Z,
            {
                page: this.getAnalyticsPage(),
                children: (0, i.jsx)(q.sW, {
                    children: (0, i.jsxs)(eI.I3, {
                        ref: this.dispatchGroupRef,
                        children: [
                            (0, i.jsx)(eI.d9, {
                                event: eO.CkL.TEXTAREA_FOCUS,
                                handler: this.handleInputFocus
                            }),
                            (0, i.jsx)(eI.d9, {
                                event: eO.CkL.TEXTAREA_BLUR,
                                handler: this.handleInputBlur
                            }),
                            (0, i.jsx)(eI.d9, {
                                event: eO.CkL.OPEN_EXPRESSION_PICKER,
                                handler: this.handleOpenExpressionPicker
                            }),
                            (0, i.jsx)(eI.d9, {
                                event: eO.CkL.OPEN_APP_LAUNCHER,
                                handler: this.handleOpenAppLauncher
                            }),
                            (0, i.jsxs)(ew, {
                                isSidebar: S,
                                className: ey.chatContent,
                                'aria-label': t.format({ channelName: n.name }),
                                onMouseDown: this.handleChatInteract,
                                onKeyDown: this.handleKeyDown,
                                onFocus: this.handleChatInteract,
                                children: [
                                    (0, i.jsx)(eR.Z, {
                                        channel: n,
                                        guild: a,
                                        narrow: S
                                    }),
                                    (0, i.jsxs)(u.HeadingLevel, {
                                        component: (0, i.jsx)(u.HiddenVisually, { children: (0, i.jsx)(u.H, { children: eP.Z.Messages.CHANNEL_CHAT_HEADING.format({ channelName: n.name }) }) }),
                                        children: [
                                            (0, i.jsx)(J.Z, {
                                                channel: n,
                                                forceCozy: I,
                                                filterAfterTimestamp: m,
                                                showingQuarantineBanner: p
                                            }),
                                            null == n.guild_id || S
                                                ? null
                                                : (0, i.jsx)(K.Z, {
                                                      guildId: n.guild_id,
                                                      channel: n
                                                  }),
                                            I
                                                ? null
                                                : null !==
                                                        (e = this.renderMessageBanner({
                                                            channel: n,
                                                            showQuarantinedUserBanner: p,
                                                            guild: a,
                                                            communicationDisabledUntil: _,
                                                            showAutomodUserProfileChatBlocker: x
                                                        })) && void 0 !== e
                                                  ? e
                                                  : (0, i.jsxs)('form', {
                                                        ref: this.inputFormRef,
                                                        onSubmit: ek,
                                                        className: ey.form,
                                                        children: [
                                                            g && (0, i.jsx)(en.Z, { channelId: n.id }),
                                                            n.isPrivate()
                                                                ? (0, i.jsx)(eL.Z, {
                                                                      channel: n,
                                                                      children: v
                                                                  })
                                                                : (0, i.jsx)(ej.Z, {
                                                                      channel: n,
                                                                      children: v
                                                                  }),
                                                            (0, i.jsx)(f.Z, {
                                                                channel: n,
                                                                poggermodeEnabled: g
                                                            }),
                                                            !S && (0, i.jsx)(B.Z, {})
                                                        ]
                                                    }),
                                            (0, i.jsx)(q.kw, {})
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
            eD(this, 'inputFormRef', a.createRef()),
            eD(this, 'state', {
                textAreaFocused: !1,
                textAreaHighlighted: !1,
                currentChannelId: this.props.channel.id
            }),
            eD(this, 'dispatchGroupRef', a.createRef()),
            eD(this, 'appIconAnimateRef', a.createRef()),
            eD(this, 'handleRequestFocus', (e) => {
                e.channelId === this.props.channel.id && this.setState({ textAreaFocused: !0 });
            }),
            eD(this, 'getAnalyticsPage', () => {
                let { channel: e } = this.props;
                if (null == e) return null;
                switch (e.type) {
                    case eO.d4z.GUILD_ANNOUNCEMENT:
                    case eO.d4z.GUILD_TEXT:
                    case eO.d4z.GUILD_FORUM:
                    case eO.d4z.GUILD_MEDIA:
                        return E.Z.Pages.GUILD_CHANNEL;
                    case eO.d4z.GROUP_DM:
                    case eO.d4z.DM:
                        return E.Z.Pages.DM_CHANNEL;
                    default:
                        return null;
                }
            }),
            eD(this, 'handleInputFocus', (e) => {
                var t;
                if ((null === (t = this.dispatchGroupRef.current) || void 0 === t || t.bumpDispatchPriority(), !(0, eS.rB)()))
                    (null == e ? void 0 : e.highlight) != null
                        ? this.setState({
                              textAreaFocused: !0,
                              textAreaHighlighted: null == e ? void 0 : e.highlight
                          })
                        : this.setState({ textAreaFocused: !0 });
            }),
            eD(this, 'handleInputBlur', () => {
                (document.hasFocus() || this.props.hasModalOpen) &&
                    this.setState({
                        textAreaFocused: !1,
                        textAreaHighlighted: !1
                    });
            }),
            eD(this, 'handleInputKeyDown', (e, t) => {
                this.state.textAreaHighlighted && this.setState({ textAreaHighlighted: !1 }), !t && this._handleMoveToPane(e);
            }),
            eD(this, 'handleKeyDown', (e) => {
                var t;
                if (null === (t = this.inputFormRef.current) || void 0 === t ? !void 0 : !t.contains(e.target)) this._handleMoveToPane(e);
            }),
            eD(this, '_handleMoveToPane', (e) => {
                let { keyboardModeEnabled: t, chatInputType: n, channel: i } = this.props;
                if (!!t)
                    switch (e.which) {
                        case eO.yXg.ARROW_LEFT:
                            n === P.I.SIDEBAR && ex.S.dispatch(eO.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: ef.Z.getChannelId() });
                            return;
                        case eO.yXg.ARROW_RIGHT:
                            n === P.I.NORMAL && ex.S.dispatch(eO.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eu.ZP.getCurrentSidebarChannelId(i.id) });
                    }
            }),
            eD(this, 'handleOpenExpressionPicker', (e) => {
                let { activeView: t } = e;
                (0, H.PG)(t, this.props.chatInputType);
            }),
            eD(this, 'handleOpenAppLauncher', (e) => {
                let { applicationId: t } = e;
                return T._(S._b.TEXT, this.props.chatInputType, { applicationId: t });
            }),
            eD(this, 'handleChatInteract', () => {
                var e;
                null === (e = this.dispatchGroupRef.current) || void 0 === e || e.bumpDispatchPriority();
            }),
            eD(this, 'handleCommandSentinelTyped', () => {
                var e;
                null === (e = this.appIconAnimateRef.current) || void 0 === e || e.animate();
            }),
            eD(this, 'renderMessageBanner', (e) => {
                let { channel: t, showQuarantinedUserBanner: n, guild: a, communicationDisabledUntil: s, showAutomodUserProfileChatBlocker: l } = e;
                return t.type === eO.d4z.DM && n
                    ? (0, i.jsx)(ea.Z, {})
                    : null != s && (0, F.J)(s) && null != a && !e_.Z.can(eO.Plq.ADMINISTRATOR, a)
                      ? (0, i.jsx)(z.T, {
                            guild: a,
                            disabledUntil: s
                        })
                      : l
                        ? (0, i.jsx)(V.h, { guild: a })
                        : null;
            });
    }
}
t.Z = a.memo(function (e) {
    let { channel: t, guild: n, chatInputType: a, filterAfterTimestamp: s } = e,
        { placeholder: l, accessibilityLabel: r } = (0, eA.Z)(t),
        o = (0, ea.S)(eC.default.getCurrentUser(), t),
        [d] = (0, W.AB)(null == n ? void 0 : n.id),
        h = (0, G.Ux)(null == n ? void 0 : n.id),
        p = (0, c.e7)([eC.default], () => eC.default.getCurrentUser()),
        m = (0, c.e7)([ep.ZP], () => {
            var e, t, i;
            return null != p && null !== (i = null === (e = ep.ZP.getMember(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eO.lds, null == p ? void 0 : p.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== i && i;
        }),
        _ = (0, c.e7)([ee.Z], () => ee.Z.isEnabled()),
        f = (0, ei.Z)(t.id),
        E = (0, Y.Z)(t.id);
    return (0, i.jsx)(eH, {
        channel: t,
        isEditing: null != (0, c.e7)([eh.Z], () => eh.Z.getEditingMessageId(t.id)),
        hasModalOpen: (0, u.useModalsStore)(u.hasAnyModalOpenSelector),
        guild: n,
        keyboardModeEnabled: (0, c.e7)([I.Z], () => I.Z.keyboardModeEnabled),
        pendingReply: (0, c.e7)([el.Z], () => el.Z.getPendingReply(t.id)),
        chatInputType: a,
        placeholder: l,
        accessibilityLabel: r,
        filterAfterTimestamp: s,
        showQuarantinedUserBanner: o,
        communicationDisabledUntil: d,
        shakeIntensity: f,
        poggermodeEnabled: _,
        isSelectedResourceChannel: E,
        showAutomodUserProfileChatBlocker: h && !m
    });
});
