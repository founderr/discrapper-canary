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
    x = n(949075),
    v = n(499254),
    S = n(541099),
    N = n(827498),
    A = n(845936),
    Z = n(555573),
    M = n(213459),
    b = n(456007),
    R = n(10718),
    L = n(998698),
    j = n(895924),
    P = n(581364),
    O = n(667204),
    y = n(404295),
    D = n(541716),
    U = n(752305),
    k = n(516887),
    w = n(974251),
    B = n(893718),
    H = n(436660),
    G = n(603009),
    V = n(28546),
    F = n(295474),
    W = n(521476),
    z = n(69882),
    Y = n(71619),
    K = n(185145),
    q = n(736052),
    X = n(898188),
    J = n(549006),
    Q = n(925975),
    $ = n(957730),
    ee = n(400023),
    et = n(64078),
    en = n(351780),
    ei = n(843693),
    es = n(217871),
    ea = n(139577),
    el = n(247944),
    er = n(623292),
    eo = n(807092),
    ec = n(268350),
    eu = n(155409),
    ed = n(314897),
    eh = n(433355),
    ep = n(703558),
    em = n(323873),
    e_ = n(271383),
    ef = n(375954),
    eE = n(496675),
    eg = n(944486),
    eC = n(117530),
    eI = n(594174),
    eT = n(626135),
    ex = n(934415),
    ev = n(459273),
    eS = n(585483),
    eN = n(709054),
    eA = n(838440),
    eZ = n(228488),
    eM = n(127654),
    eb = n(979956),
    eR = n(655687),
    eL = n(165540),
    ej = n(583027),
    eP = n(25007),
    eO = n(685006),
    ey = n(685722),
    eD = n(199649),
    eU = n(1397),
    ek = n(981631),
    ew = n(689938),
    eB = n(784237);
function eH(e, t, n) {
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
function eG(e) {
    e.preventDefault();
}
let eV = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function eF(e) {
    let { isSidebar: t, ...n } = e;
    return t
        ? (0, i.jsx)('section', {
              ...n,
              role: 'complementary'
          })
        : (0, i.jsx)('main', { ...n });
}
class eW extends s.PureComponent {
    componentDidMount() {
        ep.Z.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        ep.Z.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: i } = this.state;
        if (e.channel.id !== n.id) {
            this.draftDidChange(this.props);
            return;
        }
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = ep.Z.getDraft(n.id, ep.d.ChannelMessage);
            e !== i && this.setState((0, U.eK)(e));
        }
        t.textValue.length < ek.J6R && i.length >= ek.J6R && eT.default.track(ek.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        h.Z.startEditMessage(t.id, e.id, e.content), T.ZP.trackWithMetadata(ek.rMx.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: i } = (0, P.XA)(e.interactionData),
            { command: s, application: a } = R.Xq(t, n);
        if (null != s) {
            var l, r;
            let e =
                null != a
                    ? {
                          type: j.Qi.APPLICATION,
                          id: a.id,
                          icon: a.icon,
                          name: null !== (r = null == a ? void 0 : null === (l = a.bot) || void 0 === l ? void 0 : l.username) && void 0 !== r ? r : a.name,
                          application: a
                      }
                    : null;
            Z.Po({
                channelId: t.id,
                command: s,
                section: e,
                location: j.Vh.RECALL,
                initialValues: (0, b.Dw)(s, null != i ? i : [])
            });
        }
    }
    render() {
        let { channel: e, focused: t, onBlur: n, onFocus: s, onResize: a, highlighted: r, pendingReply: o, chatInputType: c, placeholder: d, accessibilityLabel: h, shakeIntensity: p, poggermodeEnabled: m, onCommandSentinelTyped: _ } = this.props,
            { contentWarningProps: f } = this.state,
            E = (0, i.jsx)(B.Z, {
                textValue: this.state.textValue,
                richValue: this.state.richValue,
                focused: t,
                className: eB.channelTextArea,
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
                promptToUpload: eM.d,
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
                          className: eB.shaker,
                          children: E
                      })
                    : E
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            eH(this, 'isFirstChange', !0),
            eH(this, 'editorRef', null),
            eH(this, 'state', {
                ...(0, U.eK)(ep.Z.getDraft(this.props.channel.id, ep.d.ChannelMessage)),
                contentWarningProps: null
            }),
            eH(this, 'draftDidChange', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    i = ep.Z.getDraft(e.channel.id, ep.d.ChannelMessage);
                n !== i &&
                    ('' === i || '' === n) &&
                    t.setState((0, U.eK)(i), () => {
                        if (n !== i) {
                            let { onFocus: e } = t.props;
                            null == e || e();
                        }
                    });
            }),
            eH(this, 'handleKeyDown', (e) => {
                let { keyboardModeEnabled: t, onKeyDown: n, channel: i } = this.props,
                    s = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                    a = 0 !== this.state.textValue.length;
                switch (e.which) {
                    case ek.yXg.DELETE:
                    case ek.yXg.BACKSPACE:
                        this.handleIncrementCombo('', 1);
                        return;
                    case ek.yXg.ARROW_UP:
                        if (s || a) return;
                        if ((e.preventDefault(), t)) eC.Z.getUploadCount(i.id, ep.d.ChannelMessage) > 0 ? eS.S.dispatchToLastSubscribed(ek.CkL.FOCUS_ATTACHMENT_AREA) : eS.S.dispatchToLastSubscribed(ek.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                        else {
                            let { channel: e } = this.props,
                                t = ef.Z.getLastCommandMessage(e.id),
                                n = ef.Z.getLastEditableMessage(e.id);
                            null != t && null != n ? (eN.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t)) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n);
                        }
                        return;
                    case ek.yXg.ESCAPE:
                        if (s || e.target !== e.currentTarget) return;
                        if ((e.preventDefault(), t)) {
                            (0, C.rf)();
                            return;
                        }
                        if (eC.Z.getUploadCount(i.id, ep.d.ChannelMessage) > 0) {
                            m.Z.clearAll(i.id, ep.d.ChannelMessage);
                            return;
                        }
                }
                null == n || n(e, a);
            }),
            eH(this, 'handleIncrementCombo', (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let i = this.props.channel.id,
                    s = ed.default.getId(),
                    a = ei.ZP.getUserCombo(s, i),
                    l = (null !== (n = null == a ? void 0 : a.value) && void 0 !== n ? n : 0) + 1;
                (0, et.SE)({
                    channelId: i,
                    userId: s,
                    value: null != e ? e.length : l,
                    multiplier: t
                });
            }),
            eH(this, 'handleTextareaChange', (e, t, n) => {
                let {
                    keyboardModeEnabled: i,
                    channel: { id: s }
                } = this.props;
                d.Z.changeDraft(s, t, ep.d.ChannelMessage);
                let a = '' !== t && n !== this.state.richValue,
                    l = a && !eV.test(t) && !t.startsWith('/') && (!this.isFirstChange || t !== this.state.textValue);
                (this.isFirstChange = !1),
                    l && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    l ? p.Z.startTyping(s) : '' === t && p.Z.stopTyping(s),
                    a && i && (0, C.rf)(),
                    this.setState({
                        textValue: t,
                        richValue: n
                    });
            }),
            eH(this, 'handleSendMessage', async (e) => {
                let { value: t, uploads: n, stickers: i, command: s, commandOptionValues: a, isGif: l } = e;
                if (0 === (t = t.trim()).length && (null == i || 0 === i.length) && (null == n || 0 === n.length))
                    return Promise.resolve({
                        shouldClear: !1,
                        shouldRefocus: !0
                    });
                let { guild: r, channel: o, pendingReply: c, chatInputType: u } = this.props,
                    d = !1;
                if (null != s) {
                    if (s.inputType === j.iw.BUILT_IN_INTEGRATION)
                        return (
                            eS.S.dispatch(ek.CkL.SHAKE_APP, {
                                duration: 200,
                                intensity: 2
                            }),
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            })
                        );
                    let e = L.Z.getCommandOrigin(o.id);
                    if (e === j.bB.APPLICATION_LAUNCHER || e === j.bB.IMAGE_RECS_MENU || e === j.bB.IMAGE_RECS_SUBMENU) {
                        var p;
                        let { location: t, sectionName: n } = null !== (p = (0, ej._U)(s)) && void 0 !== p ? p : {},
                            i = e === j.bB.APPLICATION_LAUNCHER ? S.Z.lastShownEntrypoint() : N._b.TEXT;
                        if (
                            !(await (0, A.L)({
                                applicationId: s.applicationId,
                                userIndexState: M.ZP.getUserState(),
                                guildIndexState: M.ZP.getGuildState(o.guild_id),
                                location: t,
                                sectionName: n,
                                entrypoint: i
                            }))
                        )
                            return Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            });
                        (0, ej.SC)(s);
                    }
                    let n = await (0, O.Z)({
                        command: s,
                        optionValues: null != a ? a : {},
                        context: {
                            guild: r,
                            channel: o
                        }
                    });
                    if (s.inputType !== j.iw.BUILT_IN_TEXT)
                        return Promise.resolve({
                            shouldClear: !0,
                            shouldRefocus: !0
                        });
                    null != n && ((t = null != n.content && '' !== n.content ? n.content : t), (d = !0 === n.tts));
                }
                return (0, eA.v)({
                    openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                    type: this.props.chatInputType,
                    content: t,
                    stickers: i,
                    uploads: n,
                    channel: o
                }).then((e) => {
                    let { valid: s, failureReason: a } = e;
                    if (!s)
                        return a === ek.zYc.SLOWMODE_COOLDOWN
                            ? (eS.S.dispatch(ek.CkL.SHAKE_APP, {
                                  duration: 200,
                                  intensity: 2
                              }),
                              eS.S.dispatch(ek.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
                              {
                                  shouldClear: !1,
                                  shouldRefocus: !0
                              })
                            : {
                                  shouldClear: !1,
                                  shouldRefocus: !1
                              };
                    let p = (0, Q.g)(t, {
                        channel: o,
                        isEdit: !1
                    });
                    null != p && (null != p.content && (t = p.content), null != p.tts && (d = p.tts));
                    let f = $.ZP.parse(o, t);
                    f.tts = f.tts || d;
                    let E = h.Z.getSendMessageOptionsForReply(c);
                    if (l)
                        return (
                            h.Z.sendMessage(o.id, f, void 0, E),
                            (0, er.A6)(o.id),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }
                        );
                    if (null != n && n.length > 0) {
                        let e = (0, eb.KZ)(n);
                        if ((0, eb.Bf)(e, null == r ? void 0 : r.id))
                            return (
                                (0, eM.G)(o, e),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                }
                            );
                        _.Z.uploadFiles({
                            channelId: o.id,
                            uploads: n,
                            draftType: ep.d.ChannelMessage,
                            parsedMessage: f,
                            options: {
                                ...E,
                                stickerIds: i
                            }
                        }),
                            m.Z.clearAll(o.id, ep.d.ChannelMessage);
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
                        this.setState((0, U.H2)()),
                        (0, er.A6)(o.id),
                        (0, ec.qB)(o.id, u.drafts.type),
                        {
                            shouldClear: !0,
                            shouldRefocus: !0
                        }
                    );
                });
            }),
            eH(this, 'handleSetValue', (e) => {
                var t, n;
                let i = null === (t = this.editorRef) || void 0 === t ? void 0 : t.getSlateEditor();
                null != i && (H.Q.select(i, []), i.insertText(e), null === (n = this.editorRef) || void 0 === n || n.focus());
            }),
            eH(this, 'renderAttachButton', (e, t) =>
                (0, i.jsx)(w.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: ep.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e
                })
            ),
            eH(this, 'renderApplicationCommandIcon', (e, t, n) =>
                (0, i.jsx)(k.Z, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel
                })
            );
    }
}
class ez extends s.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: i } = t;
        return n.id !== i
            ? {
                  textAreaFocused: null != n && !r.tq && eE.Z.can(ek.Plq.SEND_MESSAGES, n),
                  currentChannelId: n.id
              }
            : null;
    }
    componentDidMount() {
        eS.S.subscribe(ek.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        eS.S.unsubscribe(ek.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    render() {
        var e;
        let t;
        let { channel: n, guild: s, keyboardModeEnabled: a, hasModalOpen: l, pendingReply: r, chatInputType: c, placeholder: d, accessibilityLabel: h, showQuarantinedUserBanner: p, filterAfterTimestamp: m, communicationDisabledUntil: _, shakeIntensity: g, poggermodeEnabled: C, isSelectedResourceChannel: I, showAutomodUserProfileChatBlocker: T, showAppDMsUI: x, isInitialLoading: v } = this.props,
            { textAreaFocused: S, textAreaHighlighted: N } = this.state,
            A = c === D.I.SIDEBAR;
        t = A && n.type === ek.d4z.GUILD_VOICE ? ew.Z.Messages.TEXT_IN_VOICE_A11Y_LABEL : A && n.type === ek.d4z.GUILD_STAGE_VOICE ? ew.Z.Messages.TEXT_IN_STAGE_A11Y_LABEL : o.T.THREADS.has(n.type) ? ew.Z.Messages.THREAD_A11Y_LABEL : ew.Z.Messages.CHANNEL_A11Y_LABEL;
        let Z = (0, i.jsx)('div', {
                className: eB.channelBottomBarArea,
                children: (0, i.jsx)(ey.Z, {})
            }),
            M = (0, i.jsxs)('div', {
                className: eB.channelBottomBarArea,
                children: [
                    (0, i.jsx)(eu.Z, {
                        tutorialId: 'writing-messages',
                        position: 'left',
                        offsetX: 75,
                        children: (0, i.jsx)(eW, {
                            focused: S,
                            highlighted: N,
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
                    (0, i.jsx)(eL.Z, {
                        channel: n,
                        type: c,
                        animateRef: this.appIconAnimateRef
                    }),
                    x ? (0, i.jsx)(eO.Z, { channel: n }) : null
                ]
            }),
            b = x && v,
            R = b && v ? Z : M;
        return (0, i.jsx)(
            E.Z,
            {
                page: (0, ex.mE)(this.props.channel),
                children: (0, i.jsx)(J.sW, {
                    children: (0, i.jsxs)(ev.I3, {
                        ref: this.dispatchGroupRef,
                        children: [
                            (0, i.jsx)(ev.d9, {
                                event: ek.CkL.TEXTAREA_FOCUS,
                                handler: this.handleInputFocus
                            }),
                            (0, i.jsx)(ev.d9, {
                                event: ek.CkL.TEXTAREA_BLUR,
                                handler: this.handleInputBlur
                            }),
                            (0, i.jsx)(ev.d9, {
                                event: ek.CkL.OPEN_EXPRESSION_PICKER,
                                handler: this.handleOpenExpressionPicker
                            }),
                            (0, i.jsx)(ev.d9, {
                                event: ek.CkL.OPEN_APP_LAUNCHER,
                                handler: this.handleOpenAppLauncher
                            }),
                            (0, i.jsxs)(eF, {
                                isSidebar: A,
                                className: eB.chatContent,
                                'aria-label': t.format({ channelName: n.name }),
                                onMouseDown: this.handleChatInteract,
                                onKeyDown: this.handleKeyDown,
                                onFocus: this.handleChatInteract,
                                children: [
                                    (0, i.jsx)(eP.Z, {
                                        channel: n,
                                        guild: s,
                                        narrow: A
                                    }),
                                    (0, i.jsxs)(u.HeadingLevel, {
                                        component: (0, i.jsx)(u.HiddenVisually, { children: (0, i.jsx)(u.H, { children: ew.Z.Messages.CHANNEL_CHAT_HEADING.format({ channelName: n.name }) }) }),
                                        children: [
                                            (0, i.jsx)(ee.Z, {
                                                channel: n,
                                                forceCozy: I,
                                                filterAfterTimestamp: m,
                                                showingQuarantineBanner: p
                                            }),
                                            null == n.guild_id || A
                                                ? null
                                                : (0, i.jsx)(X.Z, {
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
                                                        onSubmit: eG,
                                                        className: b ? void 0 : eB.form,
                                                        children: [
                                                            C && (0, i.jsx)(es.Z, { channelId: n.id }),
                                                            n.isPrivate()
                                                                ? (0, i.jsx)(eD.Z, {
                                                                      channel: n,
                                                                      children: R
                                                                  })
                                                                : (0, i.jsx)(eU.Z, {
                                                                      channel: n,
                                                                      children: R
                                                                  }),
                                                            (0, i.jsx)(f.Z, {
                                                                channel: n,
                                                                poggermodeEnabled: C
                                                            }),
                                                            !A && (0, i.jsx)(G.Z, {})
                                                        ]
                                                    }),
                                            (0, i.jsx)(J.kw, {})
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
            eH(this, 'inputFormRef', s.createRef()),
            eH(this, 'state', {
                textAreaFocused: !1,
                textAreaHighlighted: !1,
                currentChannelId: this.props.channel.id
            }),
            eH(this, 'dispatchGroupRef', s.createRef()),
            eH(this, 'appIconAnimateRef', s.createRef()),
            eH(this, 'handleRequestFocus', (e) => {
                e.channelId === this.props.channel.id && this.setState({ textAreaFocused: !0 });
            }),
            eH(this, 'handleInputFocus', (e) => {
                var t;
                if ((null === (t = this.dispatchGroupRef.current) || void 0 === t || t.bumpDispatchPriority(), !(0, eZ.rB)()))
                    (null == e ? void 0 : e.highlight) != null
                        ? this.setState({
                              textAreaFocused: !0,
                              textAreaHighlighted: null == e ? void 0 : e.highlight
                          })
                        : this.setState({ textAreaFocused: !0 });
            }),
            eH(this, 'handleInputBlur', () => {
                (document.hasFocus() || this.props.hasModalOpen) &&
                    this.setState({
                        textAreaFocused: !1,
                        textAreaHighlighted: !1
                    });
            }),
            eH(this, 'handleInputKeyDown', (e, t) => {
                this.state.textAreaHighlighted && this.setState({ textAreaHighlighted: !1 }), !t && this._handleMoveToPane(e);
            }),
            eH(this, 'handleKeyDown', (e) => {
                var t;
                if (null === (t = this.inputFormRef.current) || void 0 === t ? !void 0 : !t.contains(e.target)) this._handleMoveToPane(e);
            }),
            eH(this, '_handleMoveToPane', (e) => {
                let { keyboardModeEnabled: t, chatInputType: n, channel: i } = this.props;
                if (!!t)
                    switch (e.which) {
                        case ek.yXg.ARROW_LEFT:
                            n === D.I.SIDEBAR && eS.S.dispatch(ek.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eg.Z.getChannelId() });
                            return;
                        case ek.yXg.ARROW_RIGHT:
                            n === D.I.NORMAL && eS.S.dispatch(ek.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eh.ZP.getCurrentSidebarChannelId(i.id) });
                    }
            }),
            eH(this, 'handleOpenExpressionPicker', (e) => {
                let { activeView: t } = e;
                (0, V.PG)(t, this.props.chatInputType);
            }),
            eH(this, 'handleOpenAppLauncher', (e) => {
                let { applicationId: t } = e;
                return v.__(N._b.TEXT, this.props.chatInputType, { applicationId: t });
            }),
            eH(this, 'handleChatInteract', () => {
                var e;
                null === (e = this.dispatchGroupRef.current) || void 0 === e || e.bumpDispatchPriority();
            }),
            eH(this, 'handleCommandSentinelTyped', () => {
                var e;
                null === (e = this.appIconAnimateRef.current) || void 0 === e || e.animate();
            }),
            eH(this, 'renderMessageBanner', (e) => {
                let { channel: t, showQuarantinedUserBanner: n, guild: s, communicationDisabledUntil: a, showAutomodUserProfileChatBlocker: l } = e;
                return t.type === ek.d4z.DM && n
                    ? (0, i.jsx)(el.Z, {})
                    : null != a && (0, z.J)(a) && null != s && !eE.Z.can(ek.Plq.ADMINISTRATOR, s)
                      ? (0, i.jsx)(K.T, {
                            guild: s,
                            disabledUntil: a
                        })
                      : l
                        ? (0, i.jsx)(W.h, { guild: s })
                        : null;
            });
    }
}
t.Z = s.memo(function (e) {
    let { channel: t, guild: n, chatInputType: s, filterAfterTimestamp: a } = e,
        { placeholder: l, accessibilityLabel: r } = (0, eR.Z)(t),
        o = (0, el.S)(eI.default.getCurrentUser(), t),
        [d] = (0, Y.AB)(null == n ? void 0 : n.id),
        h = (0, F.Ux)(null == n ? void 0 : n.id),
        p = (0, c.e7)([eI.default], () => eI.default.getCurrentUser()),
        m = (0, c.e7)([e_.ZP], () => {
            var e, t, i;
            return null != p && null !== (i = null === (e = e_.ZP.getMember(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : ek.lds, null == p ? void 0 : p.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== i && i;
        }),
        _ = (0, c.e7)([en.Z], () => en.Z.isEnabled()),
        f = (0, ea.Z)(t.id),
        E = (0, q.Z)(t.id),
        g = (0, y.h9)(t.id, 'ChannelChatMemo'),
        { isInitialLoading: C, primaryEntryPointCommand: T } = (0, x.Z)({ channel: t });
    return (0, i.jsx)(ez, {
        channel: t,
        isEditing: null != (0, c.e7)([em.Z], () => em.Z.getEditingMessageId(t.id)),
        hasModalOpen: (0, u.useModalsStore)(u.hasAnyModalOpenSelector),
        guild: n,
        keyboardModeEnabled: (0, c.e7)([I.Z], () => I.Z.keyboardModeEnabled),
        pendingReply: (0, c.e7)([eo.Z], () => eo.Z.getPendingReply(t.id)),
        chatInputType: s,
        placeholder: l,
        accessibilityLabel: r,
        filterAfterTimestamp: a,
        showQuarantinedUserBanner: o,
        communicationDisabledUntil: d,
        shakeIntensity: f,
        poggermodeEnabled: _,
        isSelectedResourceChannel: E,
        showAutomodUserProfileChatBlocker: h && !m,
        showAppDMsUI: g,
        isInitialLoading: C,
        showEntryPointAppCommandButton: null != T
    });
});
