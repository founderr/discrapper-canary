n(47120);
var i = n(200651),
    s = n(192379),
    a = n(512722),
    l = n.n(a),
    r = n(995295),
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
    v = n(450936),
    S = n(993766),
    N = n(499254),
    A = n(541099),
    Z = n(827498),
    M = n(845936),
    b = n(555573),
    R = n(213459),
    L = n(456007),
    j = n(10718),
    P = n(998698),
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
    $ = n(146128),
    ee = n(549006),
    et = n(925975),
    en = n(957730),
    ei = n(400023),
    es = n(64078),
    ea = n(351780),
    el = n(843693),
    er = n(217871),
    eo = n(139577),
    ec = n(247944),
    eu = n(623292),
    ed = n(807092),
    eh = n(268350),
    ep = n(155409),
    em = n(314897),
    e_ = n(433355),
    ef = n(703558),
    eE = n(323873),
    eg = n(271383),
    eC = n(375954),
    eI = n(496675),
    eT = n(944486),
    ex = n(117530),
    ev = n(594174),
    eS = n(626135),
    eN = n(934415),
    eA = n(459273),
    eZ = n(585483),
    eM = n(709054),
    eb = n(838440),
    eR = n(228488),
    eL = n(127654),
    ej = n(979956),
    eP = n(655687),
    eO = n(165540),
    ey = n(583027),
    eD = n(25007),
    eU = n(685006),
    ek = n(685722),
    ew = n(199649),
    eB = n(1397),
    eH = n(981631),
    eG = n(689938),
    eV = n(784237);
function eF(e, t, n) {
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
function eW(e) {
    e.preventDefault();
}
let ez = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function eY(e) {
    let { isSidebar: t, ...n } = e;
    return t
        ? (0, i.jsx)('section', {
              ...n,
              role: 'complementary'
          })
        : (0, i.jsx)('main', { ...n });
}
class eK extends s.PureComponent {
    componentDidMount() {
        ef.Z.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        ef.Z.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: i } = this.state;
        if (e.channel.id !== n.id) {
            this.draftDidChange(this.props);
            return;
        }
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = ef.Z.getDraft(n.id, ef.d.ChannelMessage);
            e !== i && this.setState((0, w.eK)(e));
        }
        t.textValue.length < eH.J6R && i.length >= eH.J6R && eS.default.track(eH.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        p.Z.startEditMessage(t.id, e.id, e.content), x.ZP.trackWithMetadata(eH.rMx.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: i } = (0, y.XA)(e.interactionData),
            { command: s, application: a } = j.Xq(t, n);
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
                className: eV.channelTextArea,
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
                promptToUpload: eL.d,
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
                          className: eV.shaker,
                          children: E
                      })
                    : E
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            eF(this, 'isFirstChange', !0),
            eF(this, 'editorRef', null),
            eF(this, 'state', {
                ...(0, w.eK)(ef.Z.getDraft(this.props.channel.id, ef.d.ChannelMessage)),
                contentWarningProps: null
            }),
            eF(this, 'draftDidChange', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    i = ef.Z.getDraft(e.channel.id, ef.d.ChannelMessage);
                n !== i &&
                    ('' === i || '' === n) &&
                    t.setState((0, w.eK)(i), () => {
                        if (n !== i) {
                            let { onFocus: e } = t.props;
                            null == e || e();
                        }
                    });
            }),
            eF(this, 'handleKeyDown', (e) => {
                let { keyboardModeEnabled: t, onKeyDown: n, channel: i } = this.props,
                    s = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                    a = 0 !== this.state.textValue.length;
                switch (e.which) {
                    case eH.yXg.DELETE:
                    case eH.yXg.BACKSPACE:
                        this.handleIncrementCombo('', 1);
                        return;
                    case eH.yXg.ARROW_UP:
                        if (s || a) return;
                        if ((e.preventDefault(), t)) ex.Z.getUploadCount(i.id, ef.d.ChannelMessage) > 0 ? eZ.S.dispatchToLastSubscribed(eH.CkL.FOCUS_ATTACHMENT_AREA) : eZ.S.dispatchToLastSubscribed(eH.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                        else {
                            let { channel: e } = this.props,
                                t = eC.Z.getLastCommandMessage(e.id),
                                n = eC.Z.getLastEditableMessage(e.id);
                            null != t && null != n ? (eM.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t)) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n);
                        }
                        return;
                    case eH.yXg.ESCAPE:
                        if (s || e.target !== e.currentTarget) return;
                        if ((e.preventDefault(), t)) {
                            (0, I.rf)();
                            return;
                        }
                        if (ex.Z.getUploadCount(i.id, ef.d.ChannelMessage) > 0) {
                            _.Z.clearAll(i.id, ef.d.ChannelMessage);
                            return;
                        }
                }
                null == n || n(e, a);
            }),
            eF(this, 'handleIncrementCombo', (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let i = this.props.channel.id,
                    s = em.default.getId(),
                    a = el.ZP.getUserCombo(s, i),
                    l = (null !== (n = null == a ? void 0 : a.value) && void 0 !== n ? n : 0) + 1;
                (0, es.SE)({
                    channelId: i,
                    userId: s,
                    value: null != e ? e.length : l,
                    multiplier: t
                });
            }),
            eF(this, 'handleTextareaChange', (e, t, n) => {
                let {
                    keyboardModeEnabled: i,
                    channel: { id: s }
                } = this.props;
                h.Z.changeDraft(s, t, ef.d.ChannelMessage);
                let a = '' !== t && n !== this.state.richValue,
                    l = a && !ez.test(t) && !t.startsWith('/') && (!this.isFirstChange || t !== this.state.textValue);
                (this.isFirstChange = !1),
                    l && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    l ? m.Z.startTyping(s) : '' === t && m.Z.stopTyping(s),
                    a && i && (0, I.rf)(),
                    this.setState({
                        textValue: t,
                        richValue: n
                    });
            }),
            eF(this, 'handleSendMessage', async (e) => {
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
                            eZ.S.dispatch(eH.CkL.SHAKE_APP, {
                                duration: 200,
                                intensity: 2
                            }),
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            })
                        );
                    let e = P.Z.getCommandOrigin(o.id);
                    if (e === O.bB.APPLICATION_LAUNCHER || e === O.bB.IMAGE_RECS_MENU || e === O.bB.IMAGE_RECS_SUBMENU) {
                        var h;
                        let { location: t, sectionName: n } = null !== (h = (0, ey._U)(s)) && void 0 !== h ? h : {},
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
                        (0, ey.SC)(s);
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
                return (0, eb.v)({
                    openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                    type: this.props.chatInputType,
                    content: t,
                    stickers: i,
                    uploads: n,
                    channel: o
                }).then((e) => {
                    let { valid: s, failureReason: a } = e;
                    if (!s)
                        return a === eH.zYc.SLOWMODE_COOLDOWN
                            ? (eZ.S.dispatch(eH.CkL.SHAKE_APP, {
                                  duration: 200,
                                  intensity: 2
                              }),
                              eZ.S.dispatch(eH.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
                              {
                                  shouldClear: !1,
                                  shouldRefocus: !0
                              })
                            : {
                                  shouldClear: !1,
                                  shouldRefocus: !1
                              };
                    let h = (0, et.g)(t, {
                        channel: o,
                        isEdit: !1
                    });
                    null != h && (null != h.content && (t = h.content), null != h.tts && (d = h.tts));
                    let m = en.ZP.parse(o, t);
                    m.tts = m.tts || d;
                    let E = p.Z.getSendMessageOptionsForReply(c);
                    if (l)
                        return (
                            p.Z.sendMessage(o.id, m, void 0, E),
                            (0, eu.A6)(o.id),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }
                        );
                    if (null != n && n.length > 0) {
                        let e = (0, ej.KZ)(n);
                        if ((0, ej.Bf)(e, null == r ? void 0 : r.id))
                            return (
                                (0, eL.G)(o, e),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                }
                            );
                        f.Z.uploadFiles({
                            channelId: o.id,
                            uploads: n,
                            draftType: ef.d.ChannelMessage,
                            parsedMessage: m,
                            options: {
                                ...E,
                                stickerIds: i
                            }
                        }),
                            _.Z.clearAll(o.id, ef.d.ChannelMessage);
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
                        (0, eu.A6)(o.id),
                        (0, eh.qB)(o.id, u.drafts.type),
                        {
                            shouldClear: !0,
                            shouldRefocus: !0
                        }
                    );
                });
            }),
            eF(this, 'handleSetValue', (e) => {
                var t, n;
                let i = null === (t = this.editorRef) || void 0 === t ? void 0 : t.getSlateEditor();
                null != i && (V.Q.select(i, []), i.insertText(e), null === (n = this.editorRef) || void 0 === n || n.focus());
            }),
            eF(this, 'renderAttachButton', (e, t) =>
                (0, i.jsx)(H.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: ef.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e
                })
            ),
            eF(this, 'renderApplicationCommandIcon', (e, t, n) =>
                (0, i.jsx)(B.Z, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel
                })
            );
    }
}
class eq extends s.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: i } = t;
        return n.id !== i
            ? {
                  textAreaFocused: null != n && !o.tq && eI.Z.can(eH.Plq.SEND_MESSAGES, n),
                  currentChannelId: n.id
              }
            : null;
    }
    componentDidMount() {
        eZ.S.subscribe(eH.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        eZ.S.unsubscribe(eH.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    render() {
        var e;
        let t;
        let { channel: n, guild: s, keyboardModeEnabled: a, hasModalOpen: l, pendingReply: r, chatInputType: o, placeholder: u, accessibilityLabel: h, showQuarantinedUserBanner: p, filterAfterTimestamp: m, communicationDisabledUntil: _, shakeIntensity: f, poggermodeEnabled: C, isSelectedResourceChannel: I, showAutomodUserProfileChatBlocker: T, showAppDMsUI: x, isInitialLoading: v, entryPointCommandButtonRef: S, isFailedAppDMLoad: N } = this.props,
            { textAreaFocused: A, textAreaHighlighted: Z } = this.state,
            M = o === k.I.SIDEBAR;
        t = M && n.type === eH.d4z.GUILD_VOICE ? eG.Z.Messages.TEXT_IN_VOICE_A11Y_LABEL : M && n.type === eH.d4z.GUILD_STAGE_VOICE ? eG.Z.Messages.TEXT_IN_STAGE_A11Y_LABEL : c.T.THREADS.has(n.type) ? eG.Z.Messages.THREAD_A11Y_LABEL : eG.Z.Messages.CHANNEL_A11Y_LABEL;
        let b = (0, i.jsx)('div', {
                className: eV.channelBottomBarArea,
                children: (0, i.jsx)(ek.Z, {})
            }),
            R = (0, i.jsxs)('div', {
                className: eV.channelBottomBarArea,
                children: [
                    (0, i.jsx)(ep.Z, {
                        tutorialId: 'writing-messages',
                        position: 'left',
                        offsetX: 75,
                        children: (0, i.jsx)(eK, {
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
                    (0, i.jsx)(eX, {
                        children: (0, i.jsx)(eO.Z, {
                            channel: n,
                            type: o,
                            animateRef: this.appIconAnimateRef,
                            entryPointCommandButtonRef: S
                        })
                    }),
                    x && !N
                        ? (0, i.jsx)(eU.Z, {
                              channel: n,
                              entryPointCommandButtonRef: S,
                              type: o
                          })
                        : null
                ]
            }),
            L = x && v,
            j = L && v ? b : R;
        return (0, i.jsx)(
            g.Z,
            {
                page: (0, eN.mE)(this.props.channel),
                children: (0, i.jsx)(ee.sW, {
                    children: (0, i.jsx)($.BV, {
                        children: (0, i.jsxs)(eA.I3, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, i.jsx)(eA.d9, {
                                    event: eH.CkL.TEXTAREA_FOCUS,
                                    handler: this.handleInputFocus
                                }),
                                (0, i.jsx)(eA.d9, {
                                    event: eH.CkL.TEXTAREA_BLUR,
                                    handler: this.handleInputBlur
                                }),
                                (0, i.jsx)(eA.d9, {
                                    event: eH.CkL.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker
                                }),
                                (0, i.jsx)(eA.d9, {
                                    event: eH.CkL.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher
                                }),
                                (0, i.jsxs)(eY, {
                                    isSidebar: M,
                                    className: eV.chatContent,
                                    'aria-label': t.format({ channelName: n.name }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    children: [
                                        (0, i.jsx)(eD.Z, {
                                            channel: n,
                                            guild: s,
                                            narrow: M
                                        }),
                                        (0, i.jsxs)(d.HeadingLevel, {
                                            component: (0, i.jsx)(d.HiddenVisually, { children: (0, i.jsx)(d.H, { children: eG.Z.Messages.CHANNEL_CHAT_HEADING.format({ channelName: n.name }) }) }),
                                            children: [
                                                (0, i.jsx)(ei.Z, {
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
                                                            onSubmit: eW,
                                                            className: L ? void 0 : eV.form,
                                                            children: [
                                                                C && (0, i.jsx)(er.Z, { channelId: n.id }),
                                                                n.isPrivate()
                                                                    ? (0, i.jsx)(ew.Z, {
                                                                          channel: n,
                                                                          children: j
                                                                      })
                                                                    : (0, i.jsx)(eB.Z, {
                                                                          channel: n,
                                                                          children: j
                                                                      }),
                                                                (0, i.jsx)(E.Z, {
                                                                    channel: n,
                                                                    poggermodeEnabled: C
                                                                }),
                                                                !M && (0, i.jsx)(F.Z, {})
                                                            ]
                                                        }),
                                                (0, i.jsx)(ee.kw, {})
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
            eF(this, 'inputFormRef', s.createRef()),
            eF(this, 'state', {
                textAreaFocused: !1,
                textAreaHighlighted: !1,
                currentChannelId: this.props.channel.id
            }),
            eF(this, 'dispatchGroupRef', s.createRef()),
            eF(this, 'appIconAnimateRef', s.createRef()),
            eF(this, 'handleRequestFocus', (e) => {
                e.channelId === this.props.channel.id && this.setState({ textAreaFocused: !0 });
            }),
            eF(this, 'handleInputFocus', (e) => {
                var t;
                if ((null === (t = this.dispatchGroupRef.current) || void 0 === t || t.bumpDispatchPriority(), !(0, eR.rB)()))
                    (null == e ? void 0 : e.highlight) != null
                        ? this.setState({
                              textAreaFocused: !0,
                              textAreaHighlighted: null == e ? void 0 : e.highlight
                          })
                        : this.setState({ textAreaFocused: !0 });
            }),
            eF(this, 'handleInputBlur', () => {
                (document.hasFocus() || this.props.hasModalOpen) &&
                    this.setState({
                        textAreaFocused: !1,
                        textAreaHighlighted: !1
                    });
            }),
            eF(this, 'handleInputKeyDown', (e, t) => {
                this.state.textAreaHighlighted && this.setState({ textAreaHighlighted: !1 }), !t && this._handleMoveToPane(e);
            }),
            eF(this, 'handleKeyDown', (e) => {
                var t;
                if (null === (t = this.inputFormRef.current) || void 0 === t ? !void 0 : !t.contains(e.target)) this._handleMoveToPane(e);
            }),
            eF(this, '_handleMoveToPane', (e) => {
                let { keyboardModeEnabled: t, chatInputType: n, channel: i } = this.props;
                if (!!t)
                    switch (e.which) {
                        case eH.yXg.ARROW_LEFT:
                            n === k.I.SIDEBAR && eZ.S.dispatch(eH.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eT.Z.getChannelId() });
                            return;
                        case eH.yXg.ARROW_RIGHT:
                            n === k.I.NORMAL && eZ.S.dispatch(eH.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e_.ZP.getCurrentSidebarChannelId(i.id) });
                    }
            }),
            eF(this, 'handleOpenExpressionPicker', (e) => {
                let { activeView: t } = e;
                (0, W.PG)(t, this.props.chatInputType);
            }),
            eF(this, 'handleOpenAppLauncher', (e) => {
                let { applicationId: t } = e;
                return N.__(Z._b.TEXT, this.props.chatInputType, { applicationId: t });
            }),
            eF(this, 'handleChatInteract', () => {
                var e;
                null === (e = this.dispatchGroupRef.current) || void 0 === e || e.bumpDispatchPriority();
            }),
            eF(this, 'handleCommandSentinelTyped', () => {
                var e;
                null === (e = this.appIconAnimateRef.current) || void 0 === e || e.animate();
            }),
            eF(this, 'renderMessageBanner', (e) => {
                let { channel: t, showQuarantinedUserBanner: n, guild: s, communicationDisabledUntil: a, showAutomodUserProfileChatBlocker: l } = e;
                return t.type === eH.d4z.DM && n
                    ? (0, i.jsx)(ec.Z, {})
                    : null != a && (0, K.J)(a) && null != s && !eI.Z.can(eH.Plq.ADMINISTRATOR, s)
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
function eX(e) {
    let { children: t } = e,
        n = document.getElementById('visual-refresh-app-launcher-portal');
    return null == n ? (0, i.jsx)(i.Fragment, { children: t }) : (0, i.jsx)(i.Fragment, { children: (0, r.createPortal)(t, n) });
}
t.Z = s.memo(function (e) {
    let { channel: t, guild: n, chatInputType: a, filterAfterTimestamp: l } = e,
        { placeholder: r, accessibilityLabel: o } = (0, eP.Z)(t),
        c = (0, ec.S)(ev.default.getCurrentUser(), t),
        [h] = (0, q.AB)(null == n ? void 0 : n.id),
        p = (0, z.Ux)(null == n ? void 0 : n.id),
        m = (0, u.e7)([ev.default], () => ev.default.getCurrentUser()),
        _ = (0, u.e7)([eg.ZP], () => {
            var e, t, i;
            return null != m && null !== (i = null === (e = eg.ZP.getMember(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eH.lds, null == m ? void 0 : m.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== i && i;
        }),
        f = (0, u.e7)([ea.Z], () => ea.Z.isEnabled()),
        E = (0, eo.Z)(t.id),
        g = (0, J.Z)(t.id),
        C = (0, U.h9)(t.id, 'ChannelChatMemo'),
        { isInitialLoading: I, primaryEntryPointCommand: x, isProfileFetching: N, wasProfileFetching: Z, applicationId: M, channelId: b, isFetchingApplicationIndex: R, wasFetchingApplicationIndex: L, commands: j } = (0, v.Z)({ channel: t });
    (0, S.Z)({
        isProfileFetching: N,
        wasProfileFetching: Z,
        applicationId: M,
        channelId: b,
        isFetchingApplicationIndex: R,
        wasFetchingApplicationIndex: L,
        commands: j
    });
    let P = s.useRef(null),
        O = (0, u.e7)([A.Z], () => A.Z.appDMChannelsWithFailedLoads().has(t.id));
    return (0, i.jsx)(eq, {
        channel: t,
        isEditing: null != (0, u.e7)([eE.Z], () => eE.Z.getEditingMessageId(t.id)),
        hasModalOpen: (0, d.useModalsStore)(d.hasAnyModalOpenSelector),
        guild: n,
        keyboardModeEnabled: (0, u.e7)([T.Z], () => T.Z.keyboardModeEnabled),
        pendingReply: (0, u.e7)([ed.Z], () => ed.Z.getPendingReply(t.id)),
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
        entryPointCommandButtonRef: P,
        isFailedAppDMLoad: O
    });
});
