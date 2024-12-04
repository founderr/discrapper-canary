n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(512722),
    o = n.n(s),
    c = n(995295),
    d = n(873546),
    u = n(106351),
    h = n(442837),
    p = n(481060),
    m = n(430742),
    f = n(904245),
    g = n(144144),
    C = n(166459),
    x = n(966390),
    v = n(738619),
    _ = n(410575),
    I = n(744061),
    E = n(857595),
    b = n(607070),
    Z = n(367907),
    N = n(450936),
    S = n(993766),
    T = n(499254),
    j = n(541099),
    A = n(827498),
    y = n(46332),
    P = n(533379),
    M = n(555573),
    R = n(213459),
    L = n(456007),
    k = n(10718),
    O = n(998698),
    D = n(895924),
    w = n(581364),
    B = n(667204),
    U = n(404295),
    H = n(541716),
    G = n(752305),
    F = n(516887),
    V = n(974251),
    z = n(893718),
    W = n(436660),
    K = n(603009),
    Y = n(28546),
    q = n(295474),
    X = n(521476),
    J = n(69882),
    Q = n(71619),
    $ = n(185145),
    ee = n(736052),
    et = n(146128),
    en = n(549006),
    ei = n(925975),
    el = n(957730),
    er = n(400023),
    ea = n(64078),
    es = n(351780),
    eo = n(843693),
    ec = n(217871),
    ed = n(139577),
    eu = n(247944),
    eh = n(623292),
    ep = n(807092),
    em = n(268350),
    ef = n(155409),
    eg = n(314897),
    eC = n(433355),
    ex = n(703558),
    ev = n(323873),
    e_ = n(271383),
    eI = n(375954),
    eE = n(496675),
    eb = n(944486),
    eZ = n(117530),
    eN = n(594174),
    eS = n(626135),
    eT = n(934415),
    ej = n(459273),
    eA = n(585483),
    ey = n(709054),
    eP = n(838440),
    eM = n(127654),
    eR = n(979956),
    eL = n(655687),
    ek = n(165540),
    eO = n(583027),
    eD = n(25007),
    ew = n(685006),
    eB = n(685722),
    eU = n(199649),
    eH = n(1397),
    eG = n(981631),
    eF = n(388032),
    eV = n(247627),
    ez = n(89111);
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
function eK(e) {
    e.preventDefault();
}
let eY = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function eq(e) {
    let { isSidebar: t, ...n } = e;
    return t
        ? (0, i.jsx)('section', {
              ...n,
              role: 'complementary'
          })
        : (0, i.jsx)('main', { ...n });
}
class eX extends l.PureComponent {
    componentDidMount() {
        ex.Z.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        ex.Z.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: i } = this.state;
        if (e.channel.id !== n.id) {
            this.draftDidChange(this.props);
            return;
        }
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = ex.Z.getDraft(n.id, ex.d.ChannelMessage);
            e !== i && this.setState((0, G.eK)(e));
        }
        t.textValue.length < eG.J6R && i.length >= eG.J6R && eS.default.track(eG.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        f.Z.startEditMessage(t.id, e.id, e.content), Z.ZP.trackWithMetadata(eG.rMx.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: i } = (0, w.XA)(e.interactionData),
            { command: l, application: r } = k.Xq(t, n);
        if (null != l) {
            var a, s;
            let e =
                null != r
                    ? {
                          type: D.Qi.APPLICATION,
                          id: r.id,
                          icon: r.icon,
                          name: null !== (s = null == r ? void 0 : null === (a = r.bot) || void 0 === a ? void 0 : a.username) && void 0 !== s ? s : r.name,
                          application: r
                      }
                    : null;
            M.Po({
                channelId: t.id,
                command: l,
                section: e,
                location: D.Vh.RECALL,
                initialValues: (0, L.Dw)(l, null != i ? i : [])
            });
        }
    }
    render() {
        let { channel: e, focused: t, onBlur: n, onFocus: l, onResize: r, highlighted: a, pendingReply: s, chatInputType: c, placeholder: d, accessibilityLabel: u, shakeIntensity: h, poggermodeEnabled: m, onCommandSentinelTyped: f } = this.props,
            { contentWarningProps: g } = this.state,
            C = (0, i.jsx)(z.Z, {
                textValue: this.state.textValue,
                richValue: this.state.richValue,
                focused: t,
                className: eV.channelTextArea,
                channel: e,
                placeholder: d,
                accessibilityLabel: u,
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
        return (0, i.jsx)(p.Popout, {
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
                m
                    ? (0, i.jsx)(p.Shaker, {
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
            eW(this, 'isFirstChange', !0),
            eW(this, 'editorRef', null),
            eW(this, 'state', {
                ...(0, G.eK)(ex.Z.getDraft(this.props.channel.id, ex.d.ChannelMessage)),
                contentWarningProps: null
            }),
            eW(this, 'draftDidChange', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    i = ex.Z.getDraft(e.channel.id, ex.d.ChannelMessage);
                n !== i &&
                    ('' === i || '' === n) &&
                    t.setState((0, G.eK)(i), () => {
                        if (n !== i) {
                            let { onFocus: e } = t.props;
                            null == e || e();
                        }
                    });
            }),
            eW(this, 'handleKeyDown', (e) => {
                let { keyboardModeEnabled: t, onKeyDown: n, channel: i } = this.props,
                    l = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
                    r = 0 !== this.state.textValue.length;
                switch (e.which) {
                    case eG.yXg.DELETE:
                    case eG.yXg.BACKSPACE:
                        this.handleIncrementCombo('', 1);
                        return;
                    case eG.yXg.ARROW_UP:
                        if (l || r) return;
                        if ((e.preventDefault(), t)) eZ.Z.getUploadCount(i.id, ex.d.ChannelMessage) > 0 ? eA.S.dispatchToLastSubscribed(eG.CkL.FOCUS_ATTACHMENT_AREA) : eA.S.dispatchToLastSubscribed(eG.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                        else {
                            let { channel: e } = this.props,
                                t = eI.Z.getLastChatCommandMessage(e.id),
                                n = eI.Z.getLastEditableMessage(e.id);
                            null != t && null != n ? (ey.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t)) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n);
                        }
                        return;
                    case eG.yXg.ESCAPE:
                        if (l || e.target !== e.currentTarget) return;
                        if ((e.preventDefault(), t)) {
                            (0, E.rf)();
                            return;
                        }
                        if (eZ.Z.getUploadCount(i.id, ex.d.ChannelMessage) > 0) {
                            C.Z.clearAll(i.id, ex.d.ChannelMessage);
                            return;
                        }
                }
                null == n || n(e, r);
            }),
            eW(this, 'handleIncrementCombo', (e, t) => {
                var n;
                if (!this.props.poggermodeEnabled) return;
                let i = this.props.channel.id,
                    l = eg.default.getId(),
                    r = eo.ZP.getUserCombo(l, i),
                    a = (null !== (n = null == r ? void 0 : r.value) && void 0 !== n ? n : 0) + 1;
                (0, ea.SE)({
                    channelId: i,
                    userId: l,
                    value: null != e ? e.length : a,
                    multiplier: t
                });
            }),
            eW(this, 'handleTextareaChange', (e, t, n) => {
                let {
                    keyboardModeEnabled: i,
                    channel: { id: l }
                } = this.props;
                m.Z.changeDraft(l, t, ex.d.ChannelMessage);
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
            eW(this, 'handleSendMessage', async (e) => {
                let { value: t, uploads: n, stickers: i, command: l, commandOptionValues: r, isGif: a } = e;
                if (0 === (t = t.trim()).length && (null == i || 0 === i.length) && (null == n || 0 === n.length))
                    return Promise.resolve({
                        shouldClear: !1,
                        shouldRefocus: !0
                    });
                let { guild: s, channel: o, pendingReply: c, chatInputType: d } = this.props,
                    u = !1;
                if (null != l) {
                    if (l.inputType === D.iw.BUILT_IN_INTEGRATION)
                        return (
                            eA.S.dispatch(eG.CkL.SHAKE_APP, {
                                duration: 200,
                                intensity: 2
                            }),
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0
                            })
                        );
                    let e = O.Z.getCommandOrigin(o.id);
                    if (e === D.bB.APPLICATION_LAUNCHER || e === D.bB.IMAGE_RECS_MENU || e === D.bB.IMAGE_RECS_SUBMENU) {
                        var h;
                        let { location: t, sectionName: n } = null !== (h = (0, eO._U)(l)) && void 0 !== h ? h : {},
                            i = e === D.bB.APPLICATION_LAUNCHER ? j.Z.lastShownEntrypoint() : A._b.TEXT;
                        if (
                            !(await (0, y.L)({
                                applicationId: l.applicationId,
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
                        (0, eO.SC)(l);
                    }
                    let n = await (0, B.Z)({
                        command: l,
                        optionValues: null != r ? r : {},
                        context: {
                            guild: s,
                            channel: o
                        }
                    });
                    if (l.inputType !== D.iw.BUILT_IN_TEXT)
                        return Promise.resolve({
                            shouldClear: !0,
                            shouldRefocus: !0
                        });
                    null != n && ((t = null != n.content && '' !== n.content ? n.content : t), (u = !0 === n.tts));
                }
                return (0, eP.v)({
                    openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                    type: this.props.chatInputType,
                    content: t,
                    stickers: i,
                    uploads: n,
                    channel: o
                }).then((e) => {
                    let { valid: l, failureReason: r } = e;
                    if (!l)
                        return r === eG.zYc.SLOWMODE_COOLDOWN
                            ? (eA.S.dispatch(eG.CkL.SHAKE_APP, {
                                  duration: 200,
                                  intensity: 2
                              }),
                              eA.S.dispatch(eG.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
                              {
                                  shouldClear: !1,
                                  shouldRefocus: !0
                              })
                            : {
                                  shouldClear: !1,
                                  shouldRefocus: !1
                              };
                    let h = (0, ei.g)(t, {
                        channel: o,
                        isEdit: !1
                    });
                    null != h && (null != h.content && (t = h.content), null != h.tts && (u = h.tts));
                    let p = el.ZP.parse(o, t);
                    p.tts = p.tts || u;
                    let m = f.Z.getSendMessageOptionsForReply(c);
                    if (a)
                        return (
                            f.Z.sendMessage(o.id, p, void 0, m),
                            (0, eh.A6)(o.id),
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
                            draftType: ex.d.ChannelMessage,
                            parsedMessage: p,
                            options: {
                                ...m,
                                stickerIds: i
                            }
                        }),
                            C.Z.clearAll(o.id, ex.d.ChannelMessage);
                    } else
                        null != i && i.length > 0
                            ? '' !== t
                                ? f.Z.sendMessage(o.id, p, void 0, {
                                      ...m,
                                      stickerIds: i
                                  })
                                : f.Z.sendStickers(o.id, i, t, m, p.tts)
                            : f.Z.sendMessage(o.id, p, void 0, m);
                    return (
                        this.setState((0, G.H2)()),
                        (0, eh.A6)(o.id),
                        (0, em.qB)(o.id, d.drafts.type),
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
                    draftType: ex.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: this.handleSetValue,
                    canOnlyUseTextCommands: e
                })
            ),
            eW(this, 'renderApplicationCommandIcon', (e, t, n) =>
                (0, i.jsx)(F.Z, {
                    className: n,
                    command: e,
                    section: t,
                    channel: this.props.channel
                })
            );
    }
}
class eJ extends l.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: i } = t;
        return n.id !== i
            ? {
                  textAreaFocused: null != n && !d.tq && eE.Z.can(eG.Plq.SEND_MESSAGES, n),
                  currentChannelId: n.id
              }
            : null;
    }
    componentDidMount() {
        eA.S.subscribe(eG.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        eA.S.unsubscribe(eG.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    render() {
        var e;
        let t;
        let { channel: n, guild: l, keyboardModeEnabled: r, hasModalOpen: s, pendingReply: o, chatInputType: c, placeholder: d, accessibilityLabel: h, showQuarantinedUserBanner: m, filterAfterTimestamp: f, communicationDisabledUntil: g, shakeIntensity: C, poggermodeEnabled: x, isSelectedResourceChannel: I, showAutomodUserProfileChatBlocker: E, showAppLauncherButton: b, showAppDMsUI: Z, isInitialLoading: N, entryPointCommandButtonRef: S, isFailedAppDMLoad: T } = this.props,
            { textAreaFocused: j, textAreaHighlighted: A } = this.state,
            y = c === H.I.SIDEBAR;
        t = y && n.type === eG.d4z.GUILD_VOICE ? eF.t.pnnyFR : y && n.type === eG.d4z.GUILD_STAGE_VOICE ? eF.t.YInSkp : u.T.THREADS.has(n.type) ? eF.t['OkzL+f'] : eF.t.UbNmGR;
        let P = (0, i.jsx)('div', {
                className: eV.channelBottomBarArea,
                children: (0, i.jsx)(eB.Z, {})
            }),
            M = (0, i.jsxs)('div', {
                className: eV.channelBottomBarArea,
                children: [
                    (0, i.jsx)(ef.Z, {
                        tutorialId: 'writing-messages',
                        position: 'left',
                        offsetX: 75,
                        children: (0, i.jsx)(eX, {
                            focused: j,
                            highlighted: A,
                            channel: n,
                            guild: l,
                            keyboardModeEnabled: r,
                            onFocus: this.handleInputFocus,
                            onBlur: this.handleInputBlur,
                            onKeyDown: this.handleInputKeyDown,
                            hasModalOpen: s,
                            pendingReply: o,
                            chatInputType: c,
                            placeholder: d,
                            accessibilityLabel: h,
                            shakeIntensity: C,
                            poggermodeEnabled: x,
                            onCommandSentinelTyped: this.handleCommandSentinelTyped
                        })
                    }),
                    (0, i.jsx)(eQ, {
                        children: (0, i.jsx)(ek.Z, {
                            channel: n,
                            type: c,
                            animateRef: this.appIconAnimateRef,
                            entryPointCommandButtonRef: S
                        })
                    }),
                    Z && !T
                        ? (0, i.jsx)('div', {
                              className: eV.entryPointButtonContainer,
                              children: (0, i.jsx)(ew.Z, {
                                  channel: n,
                                  entryPointCommandButtonRef: S,
                                  type: c
                              })
                          })
                        : null
                ]
            }),
            R = Z && N,
            L = R && N ? P : M,
            k = a()({
                [ez.barWithAppLauncherButton]: b,
                [ez.barWithAppsDMsUI]: Z
            });
        return (0, i.jsx)(
            _.Z,
            {
                page: (0, eT.mE)(this.props.channel),
                children: (0, i.jsx)(en.sW, {
                    children: (0, i.jsx)(et.BV, {
                        children: (0, i.jsxs)(ej.I3, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, i.jsx)(ej.d9, {
                                    event: eG.CkL.TEXTAREA_FOCUS,
                                    handler: this.handleInputFocus
                                }),
                                (0, i.jsx)(ej.d9, {
                                    event: eG.CkL.TEXTAREA_BLUR,
                                    handler: this.handleInputBlur
                                }),
                                (0, i.jsx)(ej.d9, {
                                    event: eG.CkL.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker
                                }),
                                (0, i.jsx)(ej.d9, {
                                    event: eG.CkL.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher
                                }),
                                (0, i.jsxs)(eq, {
                                    isSidebar: y,
                                    className: eV.chatContent,
                                    'aria-label': eF.intl.formatToPlainString(t, { channelName: n.name }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    children: [
                                        (0, i.jsx)(eD.Z, {
                                            channel: n,
                                            guild: l,
                                            narrow: y
                                        }),
                                        (0, i.jsxs)(p.HeadingLevel, {
                                            component: (0, i.jsx)(p.HiddenVisually, { children: (0, i.jsx)(p.H, { children: eF.intl.format(eF.t.eTzKk5, { channelName: n.name }) }) }),
                                            children: [
                                                (0, i.jsx)(er.Z, {
                                                    channel: n,
                                                    forceCozy: I,
                                                    filterAfterTimestamp: f,
                                                    showingQuarantineBanner: m,
                                                    jumpBarClassName: k
                                                }),
                                                I
                                                    ? null
                                                    : null !==
                                                            (e = this.renderMessageBanner({
                                                                channel: n,
                                                                showQuarantinedUserBanner: m,
                                                                guild: l,
                                                                communicationDisabledUntil: g,
                                                                showAutomodUserProfileChatBlocker: E
                                                            })) && void 0 !== e
                                                      ? e
                                                      : (0, i.jsxs)('form', {
                                                            ref: this.inputFormRef,
                                                            onSubmit: eK,
                                                            className: a()(eV.form, { [eV.formWithLoadedChatInput]: !R }),
                                                            children: [
                                                                x && (0, i.jsx)(ec.Z, { channelId: n.id }),
                                                                n.isPrivate()
                                                                    ? (0, i.jsx)(eU.Z, {
                                                                          channel: n,
                                                                          children: L
                                                                      })
                                                                    : (0, i.jsx)(eH.Z, {
                                                                          channel: n,
                                                                          children: L
                                                                      }),
                                                                (0, i.jsx)(v.Z, {
                                                                    channel: n,
                                                                    poggermodeEnabled: x
                                                                }),
                                                                !y && (0, i.jsx)(K.Z, {})
                                                            ]
                                                        }),
                                                (0, i.jsx)(en.kw, {})
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
            eW(this, 'inputFormRef', l.createRef()),
            eW(this, 'state', {
                textAreaFocused: !1,
                textAreaHighlighted: !1,
                currentChannelId: this.props.channel.id
            }),
            eW(this, 'dispatchGroupRef', l.createRef()),
            eW(this, 'appIconAnimateRef', l.createRef()),
            eW(this, 'handleRequestFocus', (e) => {
                e.channelId === this.props.channel.id && this.setState({ textAreaFocused: !0 });
            }),
            eW(this, 'handleInputFocus', (e) => {
                var t;
                null === (t = this.dispatchGroupRef.current) || void 0 === t || t.bumpDispatchPriority(),
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
                            n === H.I.SIDEBAR && eA.S.dispatch(eG.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eb.Z.getChannelId() });
                            return;
                        case eG.yXg.ARROW_RIGHT:
                            n === H.I.NORMAL && eA.S.dispatch(eG.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: eC.ZP.getCurrentSidebarChannelId(i.id) });
                    }
            }),
            eW(this, 'handleOpenExpressionPicker', (e) => {
                let { activeView: t } = e;
                (0, Y.PG)(t, this.props.chatInputType);
            }),
            eW(this, 'handleOpenAppLauncher', (e) => {
                let { applicationId: t } = e;
                return T.__(A._b.TEXT, this.props.chatInputType, { applicationId: t });
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
                let { channel: t, showQuarantinedUserBanner: n, guild: l, communicationDisabledUntil: r, showAutomodUserProfileChatBlocker: a } = e;
                return t.type === eG.d4z.DM && n
                    ? (0, i.jsx)(eu.Z, {})
                    : null != r && (0, J.J)(r) && null != l && !eE.Z.can(eG.Plq.ADMINISTRATOR, l)
                      ? (0, i.jsx)($.T, {
                            guild: l,
                            disabledUntil: r
                        })
                      : a
                        ? (0, i.jsx)(X.h, { guild: l })
                        : null;
            });
    }
}
function eQ(e) {
    let { children: t } = e,
        n = document.getElementById('visual-refresh-app-launcher-portal');
    return null == n ? (0, i.jsx)(i.Fragment, { children: t }) : (0, i.jsx)(i.Fragment, { children: (0, c.createPortal)(t, n) });
}
t.Z = l.memo(function (e) {
    let { channel: t, guild: n, chatInputType: r, filterAfterTimestamp: a } = e,
        { placeholder: s, accessibilityLabel: o } = (0, eL.Z)(t),
        c = (0, eu.S)(eN.default.getCurrentUser(), t),
        [d] = (0, Q.AB)(null == n ? void 0 : n.id),
        u = (0, q.Ux)(null == n ? void 0 : n.id),
        m = (0, h.e7)([eN.default], () => eN.default.getCurrentUser()),
        f = (0, h.e7)([e_.ZP], () => {
            var e, t, i;
            return null != m && null !== (i = null === (e = e_.ZP.getMember(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eG.lds, null == m ? void 0 : m.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== i && i;
        }),
        g = (0, h.e7)([es.Z], () => es.Z.isEnabled()),
        C = (0, ed.Z)(t.id),
        x = (0, ee.Z)(t.id),
        v = (0, P.R)({
            channel: t,
            chatInputType: r,
            location: 'ChannelChatMemo'
        }),
        _ = (0, U.h9)(t.id, 'ChannelChatMemo'),
        { isInitialLoading: I, primaryEntryPointCommand: E, isProfileFetching: Z, wasProfileFetching: T, applicationId: A, channelId: y, commands: M } = (0, N.Z)({ channel: t });
    (0, S.Z)({
        isProfileFetching: Z,
        wasProfileFetching: T,
        applicationId: A,
        channelId: y,
        commands: M
    });
    let R = l.useRef(null),
        L = (0, h.e7)([j.Z], () => j.Z.appDMChannelsWithFailedLoads().has(t.id));
    return (0, i.jsx)(eJ, {
        channel: t,
        isEditing: null != (0, h.e7)([ev.Z], () => ev.Z.getEditingMessageId(t.id)),
        hasModalOpen: (0, p.useModalsStore)(p.hasAnyModalOpenSelector),
        guild: n,
        keyboardModeEnabled: (0, h.e7)([b.Z], () => b.Z.keyboardModeEnabled),
        pendingReply: (0, h.e7)([ep.Z], () => ep.Z.getPendingReply(t.id)),
        chatInputType: r,
        placeholder: s,
        accessibilityLabel: o,
        filterAfterTimestamp: a,
        showQuarantinedUserBanner: c,
        communicationDisabledUntil: d,
        shakeIntensity: C,
        poggermodeEnabled: g,
        isSelectedResourceChannel: x,
        showAutomodUserProfileChatBlocker: u && !f,
        showAppLauncherButton: v,
        showAppDMsUI: _,
        isInitialLoading: I,
        showEntryPointAppCommandButton: null != E,
        entryPointCommandButtonRef: R,
        isFailedAppDMLoad: L
    });
});
