n(47120);
var i = n(735250),
    s = n(470079),
    a = n(512722),
    l = n.n(a),
    r = n(699581),
    o = n(873546),
    c = n(106351),
    u = n(442837),
    d = n(481060),
    h = n(430742),
    p = n(904245),
    m = n(144144),
    _ = n(166459),
    f = n(966390),
    E = n(738619),
    g = n(410575),
    C = n(744061),
    I = n(857595),
    T = n(607070),
    x = n(367907),
    S = n(450936),
    v = n(993766),
    N = n(499254),
    A = n(541099),
    Z = n(827498),
    M = n(845936),
    b = n(555573),
    R = n(213459),
    L = n(456007),
    P = n(10718),
    j = n(998698),
    O = n(895924),
    y = n(581364),
    D = n(667204),
    U = n(404295),
    k = n(541716),
    w = n(752305),
    B = n(516887),
    H = n(974251),
    G = n(893718),
    V = n(436660),
    F = n(603009),
    W = n(28546),
    z = n(295474),
    Y = n(521476),
    K = n(69882),
    q = n(71619),
    X = n(185145),
    J = n(736052),
    Q = n(898188),
    $ = n(549006),
    ee = n(925975),
    et = n(957730),
    en = n(400023),
    ei = n(64078),
    es = n(351780),
    ea = n(843693),
    el = n(217871),
    er = n(139577),
    eo = n(247944),
    ec = n(623292),
    eu = n(807092),
    ed = n(268350),
    eh = n(155409),
    ep = n(314897),
    em = n(433355),
    e_ = n(703558),
    ef = n(323873),
    eE = n(271383),
    eg = n(375954),
    eC = n(496675),
    eI = n(944486),
    eT = n(117530),
    ex = n(594174),
    eS = n(626135),
    ev = n(934415),
    eN = n(459273),
    eA = n(585483),
    eZ = n(709054),
    eM = n(838440),
    eb = n(228488),
    eR = n(127654),
    eL = n(979956),
    eP = n(655687),
    ej = n(165540),
    eO = n(583027),
    ey = n(25007),
    eD = n(685006),
    eU = n(685722),
    ek = n(199649),
    ew = n(1397),
    eB = n(981631),
    eH = n(689938),
    eG = n(784237);
function eV(e, t, n) {
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
function eF(e) {
    e.preventDefault();
}
let eW = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function ez(e) {
    let { isSidebar: t, ...n } = e;
    return t
        ? (0, i.jsx)('section', {
              ...n,
              role: 'complementary'
          })
        : (0, i.jsx)('main', { ...n });
}
class eY extends s.PureComponent {
    componentDidMount() {
        e_.Z.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        e_.Z.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: i } = this.state;
        if (e.channel.id !== n.id) {
            this.draftDidChange(this.props);
            return;
        }
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = e_.Z.getDraft(n.id, e_.d.ChannelMessage);
            e !== i && this.setState((0, w.eK)(e));
        }
        t.textValue.length < eB.J6R && i.length >= eB.J6R && eS.default.track(eB.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        p.Z.startEditMessage(t.id, e.id, e.content), x.ZP.trackWithMetadata(eB.rMx.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: i } = (0, y.XA)(e.interactionData),
            { command: s, application: a } = P.Xq(t, n);
        if (null != s) {
            var l, r;
            let e =
                null != a
                    ? {
                          type: O.Qi.APPLICATION,
                          id: a.id,
                          icon: a.icon,
                          name: null !== (r = null == a ? void 0 : null === (l = a.bot) || void 0 === l ? void 0 : l.username) && void 0 !== r ? r : a.name,
                          application: a
                      }
                    : null;
            b.Po({
                channelId: t.id,
                command: s,
                section: e,
                location: O.Vh.RECALL,
                initialValues: (0, L.Dw)(s, null != i ? i : [])
            });
        }
    }
    render() {
        let { channel: e, focused: t, onBlur: n, onFocus: s, onResize: a, highlighted: r, pendingReply: o, chatInputType: c, placeholder: u, accessibilityLabel: h, shakeIntensity: p, poggermodeEnabled: m, onCommandSentinelTyped: _ } = this.props,
            { contentWarningProps: f } = this.state,
            E = (0, i.jsx)(G.Z, {
                textValue: this.state.textValue,
                richValue: this.state.richValue,
                focused: t,
                className: eG.channelTextArea,
                channel: e,
                placeholder: u,
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
                promptToUpload: eR.d,
                highlighted: r,
                setEditorRef: (e) => (this.editorRef = e),
                onCommandSentinelTyped: _
            });
        return (0, i.jsx)(d.Popout, {
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
                    ? (0, i.jsx)(d.Shaker, {
                          isShaking: p > 0,
                          intensity: p,
                          className: eG.shaker,
                          children: E
                      })
                    : E
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            eV(this, 'isFirstChange', !0),
            eV(this, 'editorRef', null),
            eV(this, 'state', {
                ...(0, w.eK)(e_.Z.getDraft(this.props.channel.id, e_.d.ChannelMessage)),
                contentWarningProps: null
            }),
            eV(this, 'draftDidChange', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    i = e_.Z.getDraft(e.channel.id, e_.d.ChannelMessage);
                n !== i &&
                    ('' === i || '' === n) &&
                    t.setState((0, w.eK)(i), () => {
                        if (n !== i) {
                            let { onFocus: e } = t.props;
                            null == e || e();
                        }
                    });
            }),
            eV(this, 'handleKeyDown', (e) => {
                let { keyboardModeEnabled: t, onKeyDown: n, channel: i } = this.props,
                    s = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                    a = 0 !== this.state.textValue.length;
                switch (e.which) {
                    case eB.yXg.DELETE:
                    case eB.yXg.BACKSPACE:
                        this.handleIncrementCombo('', 1);
                        return;
                    case eB.yXg.ARROW_UP:
                        if (s || a) return;
                        if ((e.preventDefault(), t)) eT.Z.getUploadCount(i.id, e_.d.ChannelMessage) > 0 ? eA.S.dispatchToLastSubscribed(eB.CkL.FOCUS_ATTACHMENT_AREA) : eA.S.dispatchToLastSubscribed(eB.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                        else {
                            let { channel: e } = this.props,
                                t = eg.Z.getLastCommandMessage(e.id),
                                n = eg.Z.getLastEditableMessage(e.id);
                            null != t && null != n ? (eZ.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t)) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n);
                        }
                        return;
                    case eB.yXg.ESCAPE:
                        if (s || e.target !== e.currentTarget) return;
                        if ((e.preventDefault(), t)) {
                            (0, I.rf)();
                            return;
                        }
                        if (eT.Z.getUploadCount(i.id, e_.d.ChannelMessage) > 0) {
                            _.Z.clearAll(i.id, e_.d.ChannelMessage);
                            return;
                        }
                }
                null == n || n(e, a);
            }),
            eV(this, 'handleIncrementCombo', (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let i = this.props.channel.id,
                    s = ep.default.getId(),
                    a = ea.ZP.getUserCombo(s, i),
                    l = (null !== (n = null == a ? void 0 : a.value) && void 0 !== n ? n : 0) + 1;
                (0, ei.SE)({
                    channelId: i,
                    userId: s,
                    value: null != e ? e.length : l,
                    multiplier: t
                });
            }),
            eV(this, 'handleTextareaChange', (e, t, n) => {
                let {
                    keyboardModeEnabled: i,
                    channel: { id: s }
                } = this.props;
                h.Z.changeDraft(s, t, e_.d.ChannelMessage);
                let a = '' !== t && n !== this.state.richValue,
                    l = a && !eW.test(t) && !t.startsWith('/') && (!this.isFirstChange || t !== this.state.textValue);
                (this.isFirstChange = !1),
                    l && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    l ? m.Z.startTyping(s) : '' === t && m.Z.stopTyping(s),
                    a && i && (0, I.rf)(),
                    this.setState({
                        textValue: t,
                        richValue: n
                    });
            }),
            eV(this, 'handleSendMessage', async (e) => {
                let { value: t, uploads: n, stickers: i, command: s, commandOptionValues: a, isGif: l } = e;
                if (0 === (t = t.trim()).length && (null == i || 0 === i.length) && (null == n || 0 === n.length))
                    return Promise.resolve({
                        shouldClear: !1,
                        shouldRefocus: !0
                    });
                let { guild: r, channel: o, pendingReply: c, chatInputType: u } = this.props,
                    d = !1;
                if (null != s) {
                    if (s.inputType === O.iw.BUILT_IN_INTEGRATION)
                        return (
                            eA.S.dispatch(eB.CkL.SHAKE_APP, {
                                duration: 200,
                                intensity: 2
                            }),
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            })
                        );
                    let e = j.Z.getCommandOrigin(o.id);
                    if (e === O.bB.APPLICATION_LAUNCHER || e === O.bB.IMAGE_RECS_MENU || e === O.bB.IMAGE_RECS_SUBMENU) {
                        var h;
                        let { location: t, sectionName: n } = null !== (h = (0, eO._U)(s)) && void 0 !== h ? h : {},
                            i = e === O.bB.APPLICATION_LAUNCHER ? A.Z.lastShownEntrypoint() : Z._b.TEXT;
                        if (
                            !(await (0, M.L)({
                                applicationId: s.applicationId,
                                userIndexState: R.ZP.getUserState(),
                                guildIndexState: R.ZP.getGuildState(o.guild_id),
                                location: t,
                                sectionName: n,
                                entrypoint: i
                            }))
                        )
                            return Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            });
                        (0, eO.SC)(s);
                    }
                    let n = await (0, D.Z)({
                        command: s,
                        optionValues: null != a ? a : {},
                        context: {
                            guild: r,
                            channel: o
                        }
                    });
                    if (s.inputType !== O.iw.BUILT_IN_TEXT)
                        return Promise.resolve({
                            shouldClear: !0,
                            shouldRefocus: !0
                        });
                    null != n && ((t = null != n.content && '' !== n.content ? n.content : t), (d = !0 === n.tts));
                }
                return (0, eM.v)({
                    openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                    type: this.props.chatInputType,
                    content: t,
                    stickers: i,
                    uploads: n,
                    channel: o
                }).then((e) => {
                    let { valid: s, failureReason: a } = e;
                    if (!s)
                        return a === eB.zYc.SLOWMODE_COOLDOWN
                            ? (eA.S.dispatch(eB.CkL.SHAKE_APP, {
                                  duration: 200,
                                  intensity: 2
                              }),
                              eA.S.dispatch(eB.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
                              {
                                  shouldClear: !1,
                                  shouldRefocus: !0
                              })
                            : {
                                  shouldClear: !1,
                                  shouldRefocus: !1
                              };
                    let h = (0, ee.g)(t, {
                        channel: o,
                        isEdit: !1
                    });
                    null != h && (null != h.content && (t = h.content), null != h.tts && (d = h.tts));
                    let m = et.ZP.parse(o, t);
                    m.tts = m.tts || d;
                    let E = p.Z.getSendMessageOptionsForReply(c);
                    if (l)
                        return (
                            p.Z.sendMessage(o.id, m, void 0, E),
                            (0, ec.A6)(o.id),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }
                        );
                    if (null != n && n.length > 0) {
                        let e = (0, eL.KZ)(n);
                        if ((0, eL.Bf)(e, null == r ? void 0 : r.id))
                            return (
                                (0, eR.G)(o, e),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                }
                            );
                        f.Z.uploadFiles({
                            channelId: o.id,
                            uploads: n,
                            draftType: e_.d.ChannelMessage,
                            parsedMessage: m,
                            options: {
                                ...E,
                                stickerIds: i
                            }
                        }),
                            _.Z.clearAll(o.id, e_.d.ChannelMessage);
                    } else
                        null != i && i.length > 0
                            ? '' !== t
                                ? p.Z.sendMessage(o.id, m, void 0, {
                                      ...E,
                                      stickerIds: i
                                  })
                                : p.Z.sendStickers(o.id, i, t, E, m.tts)
                            : p.Z.sendMessage(o.id, m, void 0, E);
                    return (
                        this.setState((0, w.H2)()),
                        (0, ec.A6)(o.id),
                        (0, ed.qB)(o.id, u.drafts.type),
                        {
                            shouldClear: !0,
                            shouldRefocus: !0
                        }
                    );
                });
            }),
            eV(this, 'handleSetValue', (e) => {
                var t, n;
                let i = null === (t = this.editorRef) || void 0 === t ? void 0 : t.getSlateEditor();
                null != i && (V.Q.select(i, []), i.insertText(e), null === (n = this.editorRef) || void 0 === n || n.focus());
            }),
            eV(this, 'renderAttachButton', (e, t) =>
                (0, i.jsx)(H.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: e_.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e
                })
            ),
            eV(this, 'renderApplicationCommandIcon', (e, t, n) =>
                (0, i.jsx)(B.Z, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel
                })
            );
    }
}
class eK extends s.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: i } = t;
        return n.id !== i
            ? {
                  textAreaFocused: null != n && !o.tq && eC.Z.can(eB.Plq.SEND_MESSAGES, n),
                  currentChannelId: n.id
              }
            : null;
    }
    componentDidMount() {
        eA.S.subscribe(eB.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        eA.S.unsubscribe(eB.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    render() {
        var e;
        let t;
        let { channel: n, guild: s, keyboardModeEnabled: a, hasModalOpen: l, pendingReply: r, chatInputType: o, placeholder: u, accessibilityLabel: h, showQuarantinedUserBanner: p, filterAfterTimestamp: m, communicationDisabledUntil: _, shakeIntensity: f, poggermodeEnabled: C, isSelectedResourceChannel: I, showAutomodUserProfileChatBlocker: T, showAppDMsUI: x, isInitialLoading: S, entryPointCommandButtonRef: v, isFailedAppDMLoad: N } = this.props,
            { textAreaFocused: A, textAreaHighlighted: Z } = this.state,
            M = o === k.I.SIDEBAR;
        t = M && n.type === eB.d4z.GUILD_VOICE ? eH.Z.Messages.TEXT_IN_VOICE_A11Y_LABEL : M && n.type === eB.d4z.GUILD_STAGE_VOICE ? eH.Z.Messages.TEXT_IN_STAGE_A11Y_LABEL : c.T.THREADS.has(n.type) ? eH.Z.Messages.THREAD_A11Y_LABEL : eH.Z.Messages.CHANNEL_A11Y_LABEL;
        let b = (0, i.jsx)('div', {
                className: eG.channelBottomBarArea,
                children: (0, i.jsx)(eU.Z, {})
            }),
            R = (0, i.jsxs)('div', {
                className: eG.channelBottomBarArea,
                children: [
                    (0, i.jsx)(eh.Z, {
                        tutorialId: 'writing-messages',
                        position: 'left',
                        offsetX: 75,
                        children: (0, i.jsx)(eY, {
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
                            chatInputType: o,
                            placeholder: u,
                            accessibilityLabel: h,
                            shakeIntensity: f,
                            poggermodeEnabled: C,
                            onCommandSentinelTyped: this.handleCommandSentinelTyped
                        })
                    }),
                    (0, i.jsx)(eq, {
                        children: (0, i.jsx)(ej.Z, {
                            channel: n,
                            type: o,
                            animateRef: this.appIconAnimateRef,
                            entryPointCommandButtonRef: v
                        })
                    }),
                    x && !N
                        ? (0, i.jsx)(eD.Z, {
                              channel: n,
                              entryPointCommandButtonRef: v,
                              type: o
                          })
                        : null
                ]
            }),
            L = x && S,
            P = L && S ? b : R;
        return (0, i.jsx)(
            g.Z,
            {
                page: (0, ev.mE)(this.props.channel),
                children: (0, i.jsx)($.sW, {
                    children: (0, i.jsxs)(eN.I3, {
                        ref: this.dispatchGroupRef,
                        children: [
                            (0, i.jsx)(eN.d9, {
                                event: eB.CkL.TEXTAREA_FOCUS,
                                handler: this.handleInputFocus
                            }),
                            (0, i.jsx)(eN.d9, {
                                event: eB.CkL.TEXTAREA_BLUR,
                                handler: this.handleInputBlur
                            }),
                            (0, i.jsx)(eN.d9, {
                                event: eB.CkL.OPEN_EXPRESSION_PICKER,
                                handler: this.handleOpenExpressionPicker
                            }),
                            (0, i.jsx)(eN.d9, {
                                event: eB.CkL.OPEN_APP_LAUNCHER,
                                handler: this.handleOpenAppLauncher
                            }),
                            (0, i.jsxs)(ez, {
                                isSidebar: M,
                                className: eG.chatContent,
                                'aria-label': t.format({ channelName: n.name }),
                                onMouseDown: this.handleChatInteract,
                                onKeyDown: this.handleKeyDown,
                                onFocus: this.handleChatInteract,
                                children: [
                                    (0, i.jsx)(ey.Z, {
                                        channel: n,
                                        guild: s,
                                        narrow: M
                                    }),
                                    (0, i.jsxs)(d.HeadingLevel, {
                                        component: (0, i.jsx)(d.HiddenVisually, { children: (0, i.jsx)(d.H, { children: eH.Z.Messages.CHANNEL_CHAT_HEADING.format({ channelName: n.name }) }) }),
                                        children: [
                                            (0, i.jsx)(en.Z, {
                                                channel: n,
                                                forceCozy: I,
                                                filterAfterTimestamp: m,
                                                showingQuarantineBanner: p
                                            }),
                                            null == n.guild_id || M
                                                ? null
                                                : (0, i.jsx)(Q.Z, {
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
                                                        onSubmit: eF,
                                                        className: L ? void 0 : eG.form,
                                                        children: [
                                                            C && (0, i.jsx)(el.Z, { channelId: n.id }),
                                                            n.isPrivate()
                                                                ? (0, i.jsx)(ek.Z, {
                                                                      channel: n,
                                                                      children: P
                                                                  })
                                                                : (0, i.jsx)(ew.Z, {
                                                                      channel: n,
                                                                      children: P
                                                                  }),
                                                            (0, i.jsx)(E.Z, {
                                                                channel: n,
                                                                poggermodeEnabled: C
                                                            }),
                                                            !M && (0, i.jsx)(F.Z, {})
                                                        ]
                                                    }),
                                            (0, i.jsx)($.kw, {})
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
            eV(this, 'inputFormRef', s.createRef()),
            eV(this, 'state', {
                textAreaFocused: !1,
                textAreaHighlighted: !1,
                currentChannelId: this.props.channel.id
            }),
            eV(this, 'dispatchGroupRef', s.createRef()),
            eV(this, 'appIconAnimateRef', s.createRef()),
            eV(this, 'handleRequestFocus', (e) => {
                e.channelId === this.props.channel.id && this.setState({ textAreaFocused: !0 });
            }),
            eV(this, 'handleInputFocus', (e) => {
                var t;
                if ((null === (t = this.dispatchGroupRef.current) || void 0 === t || t.bumpDispatchPriority(), !(0, eb.rB)()))
                    (null == e ? void 0 : e.highlight) != null
                        ? this.setState({
                              textAreaFocused: !0,
                              textAreaHighlighted: null == e ? void 0 : e.highlight
                          })
                        : this.setState({ textAreaFocused: !0 });
            }),
            eV(this, 'handleInputBlur', () => {
                (document.hasFocus() || this.props.hasModalOpen) &&
                    this.setState({
                        textAreaFocused: !1,
                        textAreaHighlighted: !1
                    });
            }),
            eV(this, 'handleInputKeyDown', (e, t) => {
                this.state.textAreaHighlighted && this.setState({ textAreaHighlighted: !1 }), !t && this._handleMoveToPane(e);
            }),
            eV(this, 'handleKeyDown', (e) => {
                var t;
                if (null === (t = this.inputFormRef.current) || void 0 === t ? !void 0 : !t.contains(e.target)) this._handleMoveToPane(e);
            }),
            eV(this, '_handleMoveToPane', (e) => {
                let { keyboardModeEnabled: t, chatInputType: n, channel: i } = this.props;
                if (!!t)
                    switch (e.which) {
                        case eB.yXg.ARROW_LEFT:
                            n === k.I.SIDEBAR && eA.S.dispatch(eB.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eI.Z.getChannelId() });
                            return;
                        case eB.yXg.ARROW_RIGHT:
                            n === k.I.NORMAL && eA.S.dispatch(eB.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: em.ZP.getCurrentSidebarChannelId(i.id) });
                    }
            }),
            eV(this, 'handleOpenExpressionPicker', (e) => {
                let { activeView: t } = e;
                (0, W.PG)(t, this.props.chatInputType);
            }),
            eV(this, 'handleOpenAppLauncher', (e) => {
                let { applicationId: t } = e;
                return N.__(Z._b.TEXT, this.props.chatInputType, { applicationId: t });
            }),
            eV(this, 'handleChatInteract', () => {
                var e;
                null === (e = this.dispatchGroupRef.current) || void 0 === e || e.bumpDispatchPriority();
            }),
            eV(this, 'handleCommandSentinelTyped', () => {
                var e;
                null === (e = this.appIconAnimateRef.current) || void 0 === e || e.animate();
            }),
            eV(this, 'renderMessageBanner', (e) => {
                let { channel: t, showQuarantinedUserBanner: n, guild: s, communicationDisabledUntil: a, showAutomodUserProfileChatBlocker: l } = e;
                return t.type === eB.d4z.DM && n
                    ? (0, i.jsx)(eo.Z, {})
                    : null != a && (0, K.J)(a) && null != s && !eC.Z.can(eB.Plq.ADMINISTRATOR, s)
                      ? (0, i.jsx)(X.T, {
                            guild: s,
                            disabledUntil: a
                        })
                      : l
                        ? (0, i.jsx)(Y.h, { guild: s })
                        : null;
            });
    }
}
function eq(e) {
    let { children: t } = e,
        n = document.getElementById('visual-refresh-app-launcher-portal');
    return null == n ? (0, i.jsx)(i.Fragment, { children: t }) : (0, i.jsx)(i.Fragment, { children: (0, r.createPortal)(t, n) });
}
t.Z = s.memo(function (e) {
    let { channel: t, guild: n, chatInputType: a, filterAfterTimestamp: l } = e,
        { placeholder: r, accessibilityLabel: o } = (0, eP.Z)(t),
        c = (0, eo.S)(ex.default.getCurrentUser(), t),
        [h] = (0, q.AB)(null == n ? void 0 : n.id),
        p = (0, z.Ux)(null == n ? void 0 : n.id),
        m = (0, u.e7)([ex.default], () => ex.default.getCurrentUser()),
        _ = (0, u.e7)([eE.ZP], () => {
            var e, t, i;
            return null != m && null !== (i = null === (e = eE.ZP.getMember(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eB.lds, null == m ? void 0 : m.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== i && i;
        }),
        f = (0, u.e7)([es.Z], () => es.Z.isEnabled()),
        E = (0, er.Z)(t.id),
        g = (0, J.Z)(t.id),
        C = (0, U.h9)(t.id, 'ChannelChatMemo'),
        { isInitialLoading: I, primaryEntryPointCommand: x, isProfileFetching: N, wasProfileFetching: Z, applicationId: M, channelId: b, isFetchingApplicationIndex: R, wasFetchingApplicationIndex: L, commands: P } = (0, S.Z)({ channel: t });
    (0, v.Z)({
        isProfileFetching: N,
        wasProfileFetching: Z,
        applicationId: M,
        channelId: b,
        isFetchingApplicationIndex: R,
        wasFetchingApplicationIndex: L,
        commands: P
    });
    let j = s.useRef(null),
        O = (0, u.e7)([A.Z], () => A.Z.appDMChannelsWithFailedLoads().has(t.id));
    return (0, i.jsx)(eK, {
        channel: t,
        isEditing: null != (0, u.e7)([ef.Z], () => ef.Z.getEditingMessageId(t.id)),
        hasModalOpen: (0, d.useModalsStore)(d.hasAnyModalOpenSelector),
        guild: n,
        keyboardModeEnabled: (0, u.e7)([T.Z], () => T.Z.keyboardModeEnabled),
        pendingReply: (0, u.e7)([eu.Z], () => eu.Z.getPendingReply(t.id)),
        chatInputType: a,
        placeholder: r,
        accessibilityLabel: o,
        filterAfterTimestamp: l,
        showQuarantinedUserBanner: c,
        communicationDisabledUntil: h,
        shakeIntensity: E,
        poggermodeEnabled: f,
        isSelectedResourceChannel: g,
        showAutomodUserProfileChatBlocker: p && !_,
        showAppDMsUI: C,
        isInitialLoading: I,
        showEntryPointAppCommandButton: null != x,
        entryPointCommandButtonRef: j,
        isFailedAppDMLoad: O
    });
});
