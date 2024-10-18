n.d(t, {
    Z: function () {
        return er;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    r = n(120356),
    a = n.n(r),
    o = n(512722),
    l = n.n(o),
    c = n(442837),
    d = n(481060),
    u = n(239091),
    h = n(430742),
    p = n(904245),
    f = n(13245),
    _ = n(144144),
    E = n(738619),
    g = n(744061),
    m = n(36311),
    I = n(655687),
    Z = n(823748),
    v = n(25007),
    C = n(199649),
    S = n(1397),
    x = n(541716),
    T = n(752305),
    N = n(974251),
    O = n(893718),
    A = n(249458),
    y = n(552062),
    R = n(957730),
    L = n(400023),
    M = n(623292),
    b = n(807092),
    P = n(592125),
    D = n(703558),
    w = n(731290),
    j = n(430824),
    k = n(375954),
    V = n(944486),
    U = n(914010),
    B = n(594174),
    z = n(556296),
    G = n(237997),
    Y = n(585483),
    W = n(838440),
    F = n(13140),
    H = n(519591),
    K = n(906037),
    X = n(786906),
    Q = n(518084),
    J = n(987650),
    q = n(981631),
    $ = n(689938),
    ee = n(619267);
function et(e, t, n) {
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
let en = J.wF.TOP;
class ei extends s.Component {
    componentDidUpdate(e) {
        e.channel.id !== this.props.channel.id && this.draftDidChange(this.props), (this.props.channel !== e.channel || (this.props.isTemporarilyActive && !e.isTemporarilyActive)) && this.setState({ focused: !0 });
    }
    componentWillUnmount() {
        D.Z.removeChangeListener(this.draftDidChange), Y.S.unsubscribe(q.CkL.TEXTAREA_FOCUS, this.focusInput), Y.S.unsubscribe(q.CkL.TEXTAREA_BLUR, this.blurInput);
    }
    render() {
        let { channel: e, placeholder: t, ...n } = this.props,
            { focused: s, textValue: r, contentWarningProps: a, richValue: o } = this.state,
            c = (0, i.jsx)(d.Popout, {
                position: 'top',
                onRequestClose: () => {
                    var e;
                    null == a || null === (e = a.onCancel) || void 0 === e || e.call(a), this.setState({ contentWarningProps: null });
                },
                shouldShow: null != a,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        l()(null != a, 'ConnectedChannelTextArea.render - renderPopout: contentWarningProps cannot be null'),
                        (0, i.jsx)(g.Z, {
                            onClose: t,
                            ...a
                        })
                    );
                },
                children: () =>
                    (0, i.jsx)(O.Z, {
                        ...n,
                        renderAttachButton: this.renderAttachButton,
                        channel: e,
                        type: x.I.OVERLAY,
                        onFocus: () => this.setState({ focused: !0 }),
                        onBlur: () => this.setState({ focused: !1 }),
                        placeholder: t,
                        textValue: r,
                        richValue: o,
                        onSubmit: this.handleSendMessage,
                        onChange: this.handleTextareaChange,
                        onKeyDown: this.handleTextareaKeyDown,
                        focused: s
                    })
            });
        return e.isPrivate()
            ? (0, i.jsx)(
                  C.Z,
                  {
                      channel: e,
                      children: c
                  },
                  e.id
              )
            : (0, i.jsx)(
                  S.Z,
                  {
                      channel: e,
                      children: c
                  },
                  e.id
              );
    }
    constructor(e) {
        var t;
        super(e),
            (t = this),
            et(this, 'draftDidChange', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
                    { textValue: n } = t.state,
                    i = D.Z.getDraft(e.channel.id, D.d.ChannelMessage);
                n !== i && '' === i && t.setState((0, T.eK)(i));
            }),
            et(this, 'handleTextareaKeyDown', (e) => {
                if (e.which === q.yXg.ARROW_UP && !e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey && 0 === this.state.textValue.length) {
                    e.preventDefault();
                    let { channel: t } = this.props,
                        n = k.Z.getLastEditableMessage(t.id);
                    null != n && p.Z.startEditMessage(t.id, n.id, n.content);
                }
            }),
            et(this, 'handleTextareaChange', (e, t, n) => {
                let {
                    channel: { id: i }
                } = this.props;
                h.Z.changeDraft(i, this.state.textValue, D.d.ChannelMessage),
                    '' !== t ? _.Z.startTyping(i) : _.Z.stopTyping(i),
                    this.setState({
                        textValue: t,
                        richValue: n
                    });
            }),
            et(this, 'handleSendMessage', (e) => {
                let { value: t } = e,
                    { channel: n, pendingReply: i, isTemporarilyActive: s } = this.props;
                return 0 === t.length
                    ? Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })
                    : (0, W.v)({
                          openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                          type: x.I.OVERLAY,
                          content: t,
                          channel: n
                      }).then((e) => {
                          let { valid: r, failureReason: a } = e;
                          if (!r)
                              return a === q.zYc.SLOWMODE_COOLDOWN
                                  ? (Y.S.dispatch(q.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
                                    {
                                        shouldClear: !1,
                                        shouldRefocus: !0
                                    })
                                  : {
                                        shouldClear: !1,
                                        shouldRefocus: !1
                                    };
                          let o = p.Z.getSendMessageOptionsForReply(i);
                          return (p.Z.sendMessage(n.id, R.ZP.parse(n, t), !0, o), this.setState((0, T.H2)()), (0, M.A6)(n.id), s)
                              ? (f.Z.deactivateAllRegions(),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !1
                                })
                              : {
                                    shouldClear: !0,
                                    shouldRefocus: !0
                                };
                      });
            }),
            et(this, 'focusInput', () => {
                this.setState({ focused: !0 });
            }),
            et(this, 'blurInput', () => {
                this.setState({ focused: !1 });
            }),
            et(this, 'renderAttachButton', (e, t) =>
                (0, i.jsx)(N.Z, {
                    className: t,
                    channel: this.props.channel,
                    draftType: D.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: (e) => this.handleTextareaChange(null, e, (0, T.JM)(e)),
                    canOnlyUseTextCommands: e
                })
            ),
            D.Z.addChangeListener(this.draftDidChange);
        let n = D.Z.getDraft(e.channel.id, D.d.ChannelMessage);
        (this.state = {
            ...(0, T.eK)(n),
            focused: !1,
            contentWarningProps: null
        }),
            Y.S.subscribe(q.CkL.TEXTAREA_FOCUS, this.focusInput),
            Y.S.subscribe(q.CkL.TEXTAREA_BLUR, this.blurInput);
    }
}
class es extends s.PureComponent {
    componentDidUpdate(e) {
        let { channel: t, activated: n } = this.props;
        if (((0, K.CR)(e, this.props, this.shouldDisplay), null != t))
            n &&
                !e.activated &&
                f.Z.track(q.rMx.OVERLAY_UNLOCKED, {
                    channel_id: t.id,
                    channel_type: t.type,
                    guild_id: t.guild_id
                });
    }
    componentDidMount() {
        (0, K.m3)(this.props, this.shouldDisplay());
    }
    getOpacity() {
        let e;
        let { locked: t, activated: n, opacity: i, isPreviewingInGame: s } = this.props;
        return (e = (t && !n) || s ? i / 100 : n || !t ? Math.min(1, (i + 25) / 100) : Q.wB);
    }
    renderContent() {
        let e;
        let { channel: t, placeholder: n, nsfwAgree: r, guild: o, locked: l, activated: c, chatKeybind: d, pinned: u, isPreviewingInGame: h, dragging: p, pendingReply: f } = this.props;
        if (null == t) return null;
        let _ = l || h,
            g = !r && null != t && t.isNSFW(),
            I = !_ || c;
        return (
            (e =
                g && null != o
                    ? (0, i.jsx)(m.Z, { guild: o })
                    : (0, i.jsx)(
                          L.Z,
                          {
                              channel: t,
                              className: ee.messages,
                              forceCompact: u,
                              showNewMessagesBar: !_,
                              scrollerClassName: u ? ee.scroller : void 0,
                              showingQuarantineBanner: !1
                          },
                          t.id
                      )),
            (0, i.jsx)(A.G.Provider, {
                value: {
                    disableInteractions: u && l && !c,
                    disableAnimations: u && _ && !c
                },
                children: (0, i.jsxs)(s.Fragment, {
                    children: [
                        !l &&
                            !h &&
                            (0, i.jsx)(v.Z, {
                                channel: t,
                                guild: o
                            }),
                        (0, i.jsx)(Q.ZP.Background, {
                            opacityOverride: l || h ? null : en,
                            children: (0, i.jsx)('div', {
                                className: a()(ee.messagesContainer, {
                                    [ee.isDragging]: p,
                                    [ee.disableHoverStates]: u && l && !c
                                }),
                                children: e
                            })
                        }),
                        g
                            ? null
                            : (0, i.jsx)('div', {
                                  children: I
                                      ? (0, i.jsx)(Q.ZP.Background, {
                                            opacityOverride: l || h ? null : en,
                                            children: (0, i.jsxs)('div', {
                                                className: ee.footerContent,
                                                children: [
                                                    (0, i.jsx)(ei, {
                                                        channel: t,
                                                        placeholder: n,
                                                        isTemporarilyActive: c,
                                                        pendingReply: f
                                                    }),
                                                    (0, i.jsx)('div', {
                                                        className: ee.typingWrapper,
                                                        children: (0, i.jsx)(E.Z, {
                                                            channel: t,
                                                            className: ee.typing
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                      : (0, i.jsx)('div', {
                                            className: ee.activateContainer,
                                            children: (0, i.jsx)(Q.ZP.Background, {
                                                opacityOverride: J.wF.LOWER,
                                                children: (0, i.jsx)('div', {
                                                    className: a()(ee.activateKeybind, ee.__invalid_mediumBackgroundOpacity),
                                                    children:
                                                        null != t.name && t.name.length > 0
                                                            ? $.Z.Messages.OVERLAY_CHANNEL_CHAT_HOTKEY.format({
                                                                  keybind: d,
                                                                  channelName: t.isMultiUserDM() ? t.name : '#'.concat(t.name)
                                                              })
                                                            : $.Z.Messages.OVERLAY_USER_CHAT_HOTKEY.format({ keybind: d })
                                                })
                                            })
                                        })
                              })
                    ]
                })
            })
        );
    }
    renderWidgetWrapper(e) {
        let { locked: t, pinned: n, activated: s, isPreviewingInGame: r, opacity: o } = this.props,
            l = q.t_t.UNPINNED;
        s ? (l = q.t_t.IN_GAME_ACTIVE) : (n && t) || r ? (l = q.t_t.IN_GAME_TEXT) : n && (l = q.t_t.PINNED);
        let c = (t && !s) || r,
            d = n && (c || s),
            u = n && s,
            h = n && c && !s,
            p = (0, H.Z)(o);
        return (0, i.jsx)(Q.ZP, {
            className: a()(p, {
                [ee.widgetWrapper]: !n,
                [ee.widgetWrapperPinned]: n,
                [ee.locked]: h,
                [ee.inGame]: d,
                [ee.inGameActive]: u,
                [ee.pinned]: n,
                'overlay-unlocked': !t
            }),
            type: l,
            opacity: o,
            children: e
        });
    }
    renderContainedWrapper(e) {
        return (0, i.jsx)('div', {
            className: ee.contained,
            children: e
        });
    }
    shouldDisplay() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return null != e.channel;
    }
    render() {
        let { locked: e, channel: t, pinned: n, isPreviewingInGame: r, contained: a } = this.props;
        if (null == t || !this.shouldDisplay()) return null;
        let o = (0, i.jsxs)(s.Fragment, {
            children: [
                (0, i.jsx)(X.Z, {
                    draggableClassName: ee.draggableStartArea,
                    className: ee.headerDefault,
                    channel: t,
                    locked: e,
                    pinned: n,
                    disableDragIndicator: a,
                    isPreviewingInGame: r,
                    handlePin: this.handlePin,
                    onContextMenu: this.handleContextMenu,
                    onMouseDown: this.moveDragStart
                }),
                this.renderContent(),
                e || r
                    ? null
                    : (0, i.jsx)('div', {
                          className: ee.resizeIcon,
                          onMouseDown: this.resizeDragStart
                      })
            ]
        });
        return a ? this.renderContainedWrapper(o) : this.renderWidgetWrapper(o);
    }
    constructor(...e) {
        super(...e),
            et(this, 'handlePin', () => {
                var e, t, n;
                let i = !this.props.pinned;
                f.Z.track(q.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: i,
                    guild_id: null === (e = this.props.channel) || void 0 === e ? void 0 : e.guild_id,
                    channel_id: null === (t = this.props.channel) || void 0 === t ? void 0 : t.id,
                    channel_type: null === (n = this.props.channel) || void 0 === n ? void 0 : n.type,
                    widget_type: q.Odu.TEXT
                }),
                    f.Z.setPinChat(i);
            }),
            et(this, 'handleContextMenu', (e) => {
                let { channel: t, user: s } = this.props;
                null != t &&
                    null != s &&
                    (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('56826'), n.e('29212')]).then(n.bind(n, 131404));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                user: s,
                                channelSelected: !0,
                                channel: t
                            });
                    });
            }),
            et(this, 'moveDragStart', (e) => {
                let { dragStart: t } = this.props;
                t(y.B.MOVE, e.clientX, e.clientY);
            }),
            et(this, 'resizeDragStart', (e) => {
                let { dragStart: t } = this.props;
                t(y.B.RESIZE_SOUTH_EAST, e.clientX, e.clientY);
            });
    }
}
function er(e) {
    let { contained: t = !1, ...n } = e,
        s = (0, c.e7)([U.Z], () => U.Z.getGuildId()),
        r = (0, c.e7)([V.Z], () => V.Z.getChannelId(s)),
        a = (0, c.e7)([P.Z], () => P.Z.getChannel(r)),
        o = (0, c.e7)([z.Z], () => z.Z.getOverlayChatKeybind()),
        l = null != o ? (0, F.BB)(o.shortcut, !0) : ']',
        [d, u, h] = (0, c.Wu)([G.Z], () => [G.Z.getTextWidgetOpacity(), G.Z.getActiveRegions(), !t && G.Z.isPreviewingInGame()]),
        p = (0, c.e7)([j.Z], () => j.Z.getGuild(s)),
        f = (0, c.e7)([w.Z], () => null != s && w.Z.didAgree(s)),
        _ = null != a && a.isPrivate() ? a.getRecipientId() : null,
        E = (0, c.e7)([b.Z], () => (null != r ? b.Z.getPendingReply(r) : void 0)),
        g = (0, c.e7)([B.default], () => (null != _ ? B.default.getUser(_) : null)),
        { placeholder: m } = (0, I.Z)(a);
    return null != a && null != p && q.TPd.GUILD_THREADS_ONLY.has(a.type)
        ? (0, i.jsx)(Z.Z, {})
        : (0, i.jsx)(es, {
              guild: p,
              channel: a,
              user: g,
              opacity: d,
              nsfwAgree: f,
              chatKeybind: l,
              activated: u.has(q.O0n.TEXT_WIDGET),
              isPreviewingInGame: h,
              pendingReply: E,
              contained: t,
              placeholder: m,
              widget: q.Odu.TEXT,
              ...n
          });
}
