n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(512722),
    o = n.n(s),
    c = n(995295),
    u = n(873546),
    d = n(106351),
    h = n(442837),
    m = n(481060),
    p = n(430742),
    f = n(904245),
    g = n(144144),
    C = n(166459),
    x = n(966390),
    v = n(738619),
    _ = n(410575),
    I = n(744061),
    E = n(857595),
    b = n(607070),
    S = n(367907),
    Z = n(450936),
    T = n(993766),
    N = n(499254),
    j = n(541099),
    A = n(827498),
    y = n(845936),
    P = n(555573),
    M = n(213459),
    R = n(456007),
    L = n(10718),
    k = n(998698),
    O = n(895924),
    w = n(581364),
    D = n(667204),
    U = n(404295),
    B = n(541716),
    H = n(752305),
    F = n(516887),
    G = n(974251),
    V = n(893718),
    z = n(436660),
    W = n(603009),
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
    el = n(400023),
    er = n(64078),
    ea = n(351780),
    es = n(843693),
    eo = n(217871),
    ec = n(139577),
    eu = n(247944),
    ed = n(623292),
    eh = n(807092),
    em = n(268350),
    ep = n(155409),
    ef = n(314897),
    eg = n(433355),
    eC = n(703558),
    ex = n(323873),
    ev = n(271383),
    e_ = n(375954),
    eI = n(496675),
    eE = n(944486),
    eb = n(117530),
    eS = n(594174),
    eZ = n(626135),
    eT = n(934415),
    eN = n(459273),
    ej = n(585483),
    eA = n(709054),
    ey = n(838440),
    eP = n(228488),
    eM = n(127654),
    eR = n(979956),
    eL = n(655687),
    ek = n(165540),
    eO = n(583027),
    ew = n(25007),
    eD = n(685006),
    eU = n(685722),
    eB = n(199649),
    eH = n(1397),
    eF = n(981631),
    eG = n(388032),
    eV = n(784237);
function ez(e, t, n) {
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
class eq extends l.PureComponent {
    componentDidMount() {
        eC.Z.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        eC.Z.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: i } = this.state;
        if (e.channel.id !== n.id) {
            this.draftDidChange(this.props);
            return;
        }
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = eC.Z.getDraft(n.id, eC.d.ChannelMessage);
            e !== i && this.setState((0, H.eK)(e));
        }
        t.textValue.length < eF.J6R && i.length >= eF.J6R && eZ.default.track(eF.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        f.Z.startEditMessage(t.id, e.id, e.content), S.ZP.trackWithMetadata(eF.rMx.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: i } = (0, w.XA)(e.interactionData),
            { command: l, application: r } = L.Xq(t, n);
        if (null != l) {
            var a, s;
            let e =
                null != r
                    ? {
                          type: O.Qi.APPLICATION,
                          id: r.id,
                          icon: r.icon,
                          name: null !== (s = null == r ? void 0 : null === (a = r.bot) || void 0 === a ? void 0 : a.username) && void 0 !== s ? s : r.name,
                          application: r
                      }
                    : null;
            P.Po({
                channelId: t.id,
                command: l,
                section: e,
                location: O.Vh.RECALL,
                initialValues: (0, R.Dw)(l, null != i ? i : [])
            });
        }
    }
    render() {
        let { channel: e, focused: t, onBlur: n, onFocus: l, onResize: r, highlighted: a, pendingReply: s, chatInputType: c, placeholder: u, accessibilityLabel: d, shakeIntensity: h, poggermodeEnabled: p, onCommandSentinelTyped: f } = this.props,
            { contentWarningProps: g } = this.state,
            C = (0, i.jsx)(V.Z, {
                textValue: this.state.textValue,
                richValue: this.state.richValue,
                focused: t,
                className: eV.channelTextArea,
                channel: e,
                placeholder: u,
                accessibilityLabel: d,
                pendingReply: s,
                type: c,
                onChange: this.handleTextareaChange,
                onSubmit: this.handleSendMessage,
                onResize: r,
                onFocus: l,
                onBlur: n,
                onKeyDown: this.handleKeyDown,
                renderAttachButton: this.renderAttachButton,
                renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                promptToUpload: eM.d,
                highlighted: a,
                setEditorRef: (e) => (this.editorRef = e),
                onCommandSentinelTyped: f
            });
        return (0, i.jsx)(m.Popout, {
            position: 'top',
            onRequestClose: () => {
                var e;
                null == g || null === (e = g.onCancel) || void 0 === e || e.call(g), this.setState({ contentWarningProps: null });
            },
            shouldShow: null != g,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                    o()(null != g, 'ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null'),
                    (0, i.jsx)(I.Z, {
                        onClose: t,
                        ...g
                    })
                );
            },
            children: () =>
                p
                    ? (0, i.jsx)(m.Shaker, {
                          isShaking: h > 0,
                          intensity: h,
                          className: eV.shaker,
                          children: C
                      })
                    : C
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            ez(this, 'isFirstChange', !0),
            ez(this, 'editorRef', null),
            ez(this, 'state', {
                ...(0, H.eK)(eC.Z.getDraft(this.props.channel.id, eC.d.ChannelMessage)),
                contentWarningProps: null
            }),
            ez(this, 'draftDidChange', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    i = eC.Z.getDraft(e.channel.id, eC.d.ChannelMessage);
                n !== i &&
                    ('' === i || '' === n) &&
                    t.setState((0, H.eK)(i), () => {
                        if (n !== i) {
                            let { onFocus: e } = t.props;
                            null == e || e();
                        }
                    });
            }),
            ez(this, 'handleKeyDown', (e) => {
                let { keyboardModeEnabled: t, onKeyDown: n, channel: i } = this.props,
                    l = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                    r = 0 !== this.state.textValue.length;
                switch (e.which) {
                    case eF.yXg.DELETE:
                    case eF.yXg.BACKSPACE:
                        this.handleIncrementCombo('', 1);
                        return;
                    case eF.yXg.ARROW_UP:
                        if (l || r) return;
                        if ((e.preventDefault(), t)) eb.Z.getUploadCount(i.id, eC.d.ChannelMessage) > 0 ? ej.S.dispatchToLastSubscribed(eF.CkL.FOCUS_ATTACHMENT_AREA) : ej.S.dispatchToLastSubscribed(eF.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                        else {
                            let { channel: e } = this.props,
                                t = e_.Z.getLastChatCommandMessage(e.id),
                                n = e_.Z.getLastEditableMessage(e.id);
                            null != t && null != n ? (eA.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t)) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n);
                        }
                        return;
                    case eF.yXg.ESCAPE:
                        if (l || e.target !== e.currentTarget) return;
                        if ((e.preventDefault(), t)) {
                            (0, E.rf)();
                            return;
                        }
                        if (eb.Z.getUploadCount(i.id, eC.d.ChannelMessage) > 0) {
                            C.Z.clearAll(i.id, eC.d.ChannelMessage);
                            return;
                        }
                }
                null == n || n(e, r);
            }),
            ez(this, 'handleIncrementCombo', (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let i = this.props.channel.id,
                    l = ef.default.getId(),
                    r = es.ZP.getUserCombo(l, i),
                    a = (null !== (n = null == r ? void 0 : r.value) && void 0 !== n ? n : 0) + 1;
                (0, er.SE)({
                    channelId: i,
                    userId: l,
                    value: null != e ? e.length : a,
                    multiplier: t
                });
            }),
            ez(this, 'handleTextareaChange', (e, t, n) => {
                let {
                    keyboardModeEnabled: i,
                    channel: { id: l }
                } = this.props;
                p.Z.changeDraft(l, t, eC.d.ChannelMessage);
                let r = '' !== t && n !== this.state.richValue,
                    a = r && !eY.test(t) && !t.startsWith('/') && (!this.isFirstChange || t !== this.state.textValue);
                (this.isFirstChange = !1),
                    a && this.state.textValue.length < t.length && this.handleIncrementCombo(),
                    a ? g.Z.startTyping(l) : '' === t && g.Z.stopTyping(l),
                    r && i && (0, E.rf)(),
                    this.setState({
                        textValue: t,
                        richValue: n
                    });
            }),
            ez(this, 'handleSendMessage', async (e) => {
                let { value: t, uploads: n, stickers: i, command: l, commandOptionValues: r, isGif: a } = e;
                if (0 === (t = t.trim()).length && (null == i || 0 === i.length) && (null == n || 0 === n.length))
                    return Promise.resolve({
                        shouldClear: !1,
                        shouldRefocus: !0
                    });
                let { guild: s, channel: o, pendingReply: c, chatInputType: u } = this.props,
                    d = !1;
                if (null != l) {
                    if (l.inputType === O.iw.BUILT_IN_INTEGRATION)
                        return (
                            ej.S.dispatch(eF.CkL.SHAKE_APP, {
                                duration: 200,
                                intensity: 2
                            }),
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            })
                        );
                    let e = k.Z.getCommandOrigin(o.id);
                    if (e === O.bB.APPLICATION_LAUNCHER || e === O.bB.IMAGE_RECS_MENU || e === O.bB.IMAGE_RECS_SUBMENU) {
                        var h;
                        let { location: t, sectionName: n } = null !== (h = (0, eO._U)(l)) && void 0 !== h ? h : {},
                            i = e === O.bB.APPLICATION_LAUNCHER ? j.Z.lastShownEntrypoint() : A._b.TEXT;
                        if (
                            !(await (0, y.L)({
                                applicationId: l.applicationId,
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
                        (0, eO.SC)(l);
                    }
                    let n = await (0, D.Z)({
                        command: l,
                        optionValues: null != r ? r : {},
                        context: {
                            guild: s,
                            channel: o
                        }
                    });
                    if (l.inputType !== O.iw.BUILT_IN_TEXT)
                        return Promise.resolve({
                            shouldClear: !0,
                            shouldRefocus: !0
                        });
                    null != n && ((t = null != n.content && '' !== n.content ? n.content : t), (d = !0 === n.tts));
                }
                return (0, ey.v)({
                    openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                    type: this.props.chatInputType,
                    content: t,
                    stickers: i,
                    uploads: n,
                    channel: o
                }).then((e) => {
                    let { valid: l, failureReason: r } = e;
                    if (!l)
                        return r === eF.zYc.SLOWMODE_COOLDOWN
                            ? (ej.S.dispatch(eF.CkL.SHAKE_APP, {
                                  duration: 200,
                                  intensity: 2
                              }),
                              ej.S.dispatch(eF.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
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
                    let m = ei.ZP.parse(o, t);
                    m.tts = m.tts || d;
                    let p = f.Z.getSendMessageOptionsForReply(c);
                    if (a)
                        return (
                            f.Z.sendMessage(o.id, m, void 0, p),
                            (0, ed.A6)(o.id),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }
                        );
                    if (null != n && n.length > 0) {
                        let e = (0, eR.KZ)(n);
                        if ((0, eR.Bf)(e, null == s ? void 0 : s.id))
                            return (
                                (0, eM.G)(o, e),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                }
                            );
                        x.Z.uploadFiles({
                            channelId: o.id,
                            uploads: n,
                            draftType: eC.d.ChannelMessage,
                            parsedMessage: m,
                            options: {
                                ...p,
                                stickerIds: i
                            }
                        }),
                            C.Z.clearAll(o.id, eC.d.ChannelMessage);
                    } else
                        null != i && i.length > 0
                            ? '' !== t
                                ? f.Z.sendMessage(o.id, m, void 0, {
                                      ...p,
                                      stickerIds: i
                                  })
                                : f.Z.sendStickers(o.id, i, t, p, m.tts)
                            : f.Z.sendMessage(o.id, m, void 0, p);
                    return (
                        this.setState((0, H.H2)()),
                        (0, ed.A6)(o.id),
                        (0, em.qB)(o.id, u.drafts.type),
                        {
                            shouldClear: !0,
                            shouldRefocus: !0
                        }
                    );
                });
            }),
            ez(this, 'handleSetValue', (e) => {
                var t, n;
                let i = null === (t = this.editorRef) || void 0 === t ? void 0 : t.getSlateEditor();
                null != i && (z.Q.select(i, []), i.insertText(e), null === (n = this.editorRef) || void 0 === n || n.focus());
            }),
            ez(this, 'renderAttachButton', (e, t) =>
                (0, i.jsx)(G.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: eC.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e
                })
            ),
            ez(this, 'renderApplicationCommandIcon', (e, t, n) =>
                (0, i.jsx)(F.Z, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel
                })
            );
    }
}
class eX extends l.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: i } = t;
        return n.id !== i
            ? {
                  textAreaFocused: null != n && !u.tq && eI.Z.can(eF.Plq.SEND_MESSAGES, n),
                  currentChannelId: n.id
              }
            : null;
    }
    componentDidMount() {
        ej.S.subscribe(eF.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        ej.S.unsubscribe(eF.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    render() {
        var e;
        let t;
        let { channel: n, guild: l, keyboardModeEnabled: r, hasModalOpen: s, pendingReply: o, chatInputType: c, placeholder: u, accessibilityLabel: h, showQuarantinedUserBanner: p, filterAfterTimestamp: f, communicationDisabledUntil: g, shakeIntensity: C, poggermodeEnabled: x, isSelectedResourceChannel: I, showAutomodUserProfileChatBlocker: E, showAppDMsUI: b, isInitialLoading: S, entryPointCommandButtonRef: Z, isFailedAppDMLoad: T } = this.props,
            { textAreaFocused: N, textAreaHighlighted: j } = this.state,
            A = c === B.I.SIDEBAR;
        t = A && n.type === eF.d4z.GUILD_VOICE ? eG.t.pnnyFR : A && n.type === eF.d4z.GUILD_STAGE_VOICE ? eG.t.YInSkp : d.T.THREADS.has(n.type) ? eG.t['OkzL+f'] : eG.t.UbNmGR;
        let y = (0, i.jsx)('div', {
                className: eV.channelBottomBarArea,
                children: (0, i.jsx)(eU.Z, {})
            }),
            P = (0, i.jsxs)('div', {
                className: eV.channelBottomBarArea,
                children: [
                    (0, i.jsx)(ep.Z, {
                        tutorialId: 'writing-messages',
                        position: 'left',
                        offsetX: 75,
                        children: (0, i.jsx)(eq, {
                            focused: N,
                            highlighted: j,
                            channel: n,
                            guild: l,
                            keyboardModeEnabled: r,
                            onFocus: this.handleInputFocus,
                            onBlur: this.handleInputBlur,
                            onKeyDown: this.handleInputKeyDown,
                            hasModalOpen: s,
                            pendingReply: o,
                            chatInputType: c,
                            placeholder: u,
                            accessibilityLabel: h,
                            shakeIntensity: C,
                            poggermodeEnabled: x,
                            onCommandSentinelTyped: this.handleCommandSentinelTyped
                        })
                    }),
                    (0, i.jsx)(eJ, {
                        children: (0, i.jsx)(ek.Z, {
                            channel: n,
                            type: c,
                            animateRef: this.appIconAnimateRef,
                            entryPointCommandButtonRef: Z
                        })
                    }),
                    b && !T
                        ? (0, i.jsx)('div', {
                              className: eV.entryPointButtonContainer,
                              children: (0, i.jsx)(eD.Z, {
                                  channel: n,
                                  entryPointCommandButtonRef: Z,
                                  type: c
                              })
                          })
                        : null
                ]
            }),
            M = b && S,
            R = M && S ? y : P;
        return (0, i.jsx)(
            _.Z,
            {
                page: (0, eT.mE)(this.props.channel),
                children: (0, i.jsx)(et.sW, {
                    children: (0, i.jsx)(ee.BV, {
                        children: (0, i.jsxs)(eN.I3, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, i.jsx)(eN.d9, {
                                    event: eF.CkL.TEXTAREA_FOCUS,
                                    handler: this.handleInputFocus
                                }),
                                (0, i.jsx)(eN.d9, {
                                    event: eF.CkL.TEXTAREA_BLUR,
                                    handler: this.handleInputBlur
                                }),
                                (0, i.jsx)(eN.d9, {
                                    event: eF.CkL.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker
                                }),
                                (0, i.jsx)(eN.d9, {
                                    event: eF.CkL.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher
                                }),
                                (0, i.jsxs)(eK, {
                                    isSidebar: A,
                                    className: eV.chatContent,
                                    'aria-label': eG.intl.formatToPlainString(t, { channelName: n.name }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    children: [
                                        (0, i.jsx)(ew.Z, {
                                            channel: n,
                                            guild: l,
                                            narrow: A
                                        }),
                                        (0, i.jsxs)(m.HeadingLevel, {
                                            component: (0, i.jsx)(m.HiddenVisually, { children: (0, i.jsx)(m.H, { children: eG.intl.format(eG.t.eTzKk5, { channelName: n.name }) }) }),
                                            children: [
                                                (0, i.jsx)(el.Z, {
                                                    channel: n,
                                                    forceCozy: I,
                                                    filterAfterTimestamp: f,
                                                    showingQuarantineBanner: p
                                                }),
                                                I
                                                    ? null
                                                    : null !==
                                                            (e = this.renderMessageBanner({
                                                                channel: n,
                                                                showQuarantinedUserBanner: p,
                                                                guild: l,
                                                                communicationDisabledUntil: g,
                                                                showAutomodUserProfileChatBlocker: E
                                                            })) && void 0 !== e
                                                      ? e
                                                      : (0, i.jsxs)('form', {
                                                            ref: this.inputFormRef,
                                                            onSubmit: eW,
                                                            className: a()(eV.form, { [eV.formWithLoadedChatInput]: !M }),
                                                            children: [
                                                                x && (0, i.jsx)(eo.Z, { channelId: n.id }),
                                                                n.isPrivate()
                                                                    ? (0, i.jsx)(eB.Z, {
                                                                          channel: n,
                                                                          children: R
                                                                      })
                                                                    : (0, i.jsx)(eH.Z, {
                                                                          channel: n,
                                                                          children: R
                                                                      }),
                                                                (0, i.jsx)(v.Z, {
                                                                    channel: n,
                                                                    poggermodeEnabled: x
                                                                }),
                                                                !A && (0, i.jsx)(W.Z, {})
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
            ez(this, 'inputFormRef', l.createRef()),
            ez(this, 'state', {
                textAreaFocused: !1,
                textAreaHighlighted: !1,
                currentChannelId: this.props.channel.id
            }),
            ez(this, 'dispatchGroupRef', l.createRef()),
            ez(this, 'appIconAnimateRef', l.createRef()),
            ez(this, 'handleRequestFocus', (e) => {
                e.channelId === this.props.channel.id && this.setState({ textAreaFocused: !0 });
            }),
            ez(this, 'handleInputFocus', (e) => {
                var t;
                if ((null === (t = this.dispatchGroupRef.current) || void 0 === t || t.bumpDispatchPriority(), !(0, eP.rB)()))
                    (null == e ? void 0 : e.highlight) != null
                        ? this.setState({
                              textAreaFocused: !0,
                              textAreaHighlighted: null == e ? void 0 : e.highlight
                          })
                        : this.setState({ textAreaFocused: !0 });
            }),
            ez(this, 'handleInputBlur', () => {
                (document.hasFocus() || this.props.hasModalOpen) &&
                    this.setState({
                        textAreaFocused: !1,
                        textAreaHighlighted: !1
                    });
            }),
            ez(this, 'handleInputKeyDown', (e, t) => {
                this.state.textAreaHighlighted && this.setState({ textAreaHighlighted: !1 }), !t && this._handleMoveToPane(e);
            }),
            ez(this, 'handleKeyDown', (e) => {
                var t;
                if (null === (t = this.inputFormRef.current) || void 0 === t ? !void 0 : !t.contains(e.target)) this._handleMoveToPane(e);
            }),
            ez(this, '_handleMoveToPane', (e) => {
                let { keyboardModeEnabled: t, chatInputType: n, channel: i } = this.props;
                if (!!t)
                    switch (e.which) {
                        case eF.yXg.ARROW_LEFT:
                            n === B.I.SIDEBAR && ej.S.dispatch(eF.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eE.Z.getChannelId() });
                            return;
                        case eF.yXg.ARROW_RIGHT:
                            n === B.I.NORMAL && ej.S.dispatch(eF.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eg.ZP.getCurrentSidebarChannelId(i.id) });
                    }
            }),
            ez(this, 'handleOpenExpressionPicker', (e) => {
                let { activeView: t } = e;
                (0, Y.PG)(t, this.props.chatInputType);
            }),
            ez(this, 'handleOpenAppLauncher', (e) => {
                let { applicationId: t } = e;
                return N.__(A._b.TEXT, this.props.chatInputType, { applicationId: t });
            }),
            ez(this, 'handleChatInteract', () => {
                var e;
                null === (e = this.dispatchGroupRef.current) || void 0 === e || e.bumpDispatchPriority();
            }),
            ez(this, 'handleCommandSentinelTyped', () => {
                var e;
                null === (e = this.appIconAnimateRef.current) || void 0 === e || e.animate();
            }),
            ez(this, 'renderMessageBanner', (e) => {
                let { channel: t, showQuarantinedUserBanner: n, guild: l, communicationDisabledUntil: r, showAutomodUserProfileChatBlocker: a } = e;
                return t.type === eF.d4z.DM && n
                    ? (0, i.jsx)(eu.Z, {})
                    : null != r && (0, X.J)(r) && null != l && !eI.Z.can(eF.Plq.ADMINISTRATOR, l)
                      ? (0, i.jsx)(Q.T, {
                            guild: l,
                            disabledUntil: r
                        })
                      : a
                        ? (0, i.jsx)(q.h, { guild: l })
                        : null;
            });
    }
}
function eJ(e) {
    let { children: t } = e,
        n = document.getElementById('visual-refresh-app-launcher-portal');
    return null == n ? (0, i.jsx)(i.Fragment, { children: t }) : (0, i.jsx)(i.Fragment, { children: (0, c.createPortal)(t, n) });
}
t.Z = l.memo(function (e) {
    let { channel: t, guild: n, chatInputType: r, filterAfterTimestamp: a } = e,
        { placeholder: s, accessibilityLabel: o } = (0, eL.Z)(t),
        c = (0, eu.S)(eS.default.getCurrentUser(), t),
        [u] = (0, J.AB)(null == n ? void 0 : n.id),
        d = (0, K.Ux)(null == n ? void 0 : n.id),
        p = (0, h.e7)([eS.default], () => eS.default.getCurrentUser()),
        f = (0, h.e7)([ev.ZP], () => {
            var e, t, i;
            return null != p && null !== (i = null === (e = ev.ZP.getMember(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eF.lds, null == p ? void 0 : p.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== i && i;
        }),
        g = (0, h.e7)([ea.Z], () => ea.Z.isEnabled()),
        C = (0, ec.Z)(t.id),
        x = (0, $.Z)(t.id),
        v = (0, U.h9)(t.id, 'ChannelChatMemo'),
        { isInitialLoading: _, primaryEntryPointCommand: I, isProfileFetching: E, wasProfileFetching: S, applicationId: N, channelId: A, commands: y } = (0, Z.Z)({ channel: t });
    (0, T.Z)({
        isProfileFetching: E,
        wasProfileFetching: S,
        applicationId: N,
        channelId: A,
        commands: y
    });
    let P = l.useRef(null),
        M = (0, h.e7)([j.Z], () => j.Z.appDMChannelsWithFailedLoads().has(t.id));
    return (0, i.jsx)(eX, {
        channel: t,
        isEditing: null != (0, h.e7)([ex.Z], () => ex.Z.getEditingMessageId(t.id)),
        hasModalOpen: (0, m.useModalsStore)(m.hasAnyModalOpenSelector),
        guild: n,
        keyboardModeEnabled: (0, h.e7)([b.Z], () => b.Z.keyboardModeEnabled),
        pendingReply: (0, h.e7)([eh.Z], () => eh.Z.getPendingReply(t.id)),
        chatInputType: r,
        placeholder: s,
        accessibilityLabel: o,
        filterAfterTimestamp: a,
        showQuarantinedUserBanner: c,
        communicationDisabledUntil: u,
        shakeIntensity: C,
        poggermodeEnabled: g,
        isSelectedResourceChannel: x,
        showAutomodUserProfileChatBlocker: d && !f,
        showAppDMsUI: v,
        isInitialLoading: _,
        showEntryPointAppCommandButton: null != I,
        entryPointCommandButtonRef: P,
        isFailedAppDMLoad: M
    });
});
