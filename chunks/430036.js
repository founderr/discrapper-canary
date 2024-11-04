n.d(t, {
    Z: function () {
        return es;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    d = n(481060),
    u = n(239091),
    h = n(430742),
    p = n(904245),
    f = n(13245),
    m = n(144144),
    g = n(738619),
    v = n(744061),
    _ = n(36311),
    E = n(655687),
    x = n(823748),
    I = n(25007),
    Z = n(199649),
    S = n(1397),
    C = n(541716),
    y = n(752305),
    N = n(974251),
    T = n(893718),
    b = n(249458),
    O = n(552062),
    R = n(957730),
    A = n(400023),
    P = n(623292),
    j = n(807092),
    L = n(592125),
    w = n(703558),
    M = n(731290),
    D = n(430824),
    k = n(375954),
    z = n(944486),
    U = n(914010),
    B = n(594174),
    V = n(556296),
    G = n(237997),
    W = n(585483),
    F = n(838440),
    H = n(13140),
    Y = n(519591),
    K = n(906037),
    X = n(786906),
    Q = n(518084),
    q = n(987650),
    J = n(981631),
    $ = n(388032),
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
let en = q.wF.TOP;
class ei extends r.Component {
    componentDidUpdate(e) {
        e.channel.id !== this.props.channel.id && this.draftDidChange(this.props), (this.props.channel !== e.channel || (this.props.isTemporarilyActive && !e.isTemporarilyActive)) && this.setState({ focused: !0 });
    }
    componentWillUnmount() {
        w.Z.removeChangeListener(this.draftDidChange), W.S.unsubscribe(J.CkL.TEXTAREA_FOCUS, this.focusInput), W.S.unsubscribe(J.CkL.TEXTAREA_BLUR, this.blurInput);
    }
    render() {
        let { channel: e, placeholder: t, ...n } = this.props,
            { focused: r, textValue: s, contentWarningProps: l, richValue: a } = this.state,
            c = (0, i.jsx)(d.Popout, {
                position: 'top',
                onRequestClose: () => {
                    var e;
                    null == l || null === (e = l.onCancel) || void 0 === e || e.call(l), this.setState({ contentWarningProps: null });
                },
                shouldShow: null != l,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        o()(null != l, 'ConnectedChannelTextArea.render - renderPopout: contentWarningProps cannot be null'),
                        (0, i.jsx)(v.Z, {
                            onClose: t,
                            ...l
                        })
                    );
                },
                children: () =>
                    (0, i.jsx)(T.Z, {
                        ...n,
                        renderAttachButton: this.renderAttachButton,
                        channel: e,
                        type: C.I.OVERLAY,
                        onFocus: () => this.setState({ focused: !0 }),
                        onBlur: () => this.setState({ focused: !1 }),
                        placeholder: t,
                        textValue: s,
                        richValue: a,
                        onSubmit: this.handleSendMessage,
                        onChange: this.handleTextareaChange,
                        onKeyDown: this.handleTextareaKeyDown,
                        focused: r
                    })
            });
        return e.isPrivate()
            ? (0, i.jsx)(
                  Z.Z,
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
                    i = w.Z.getDraft(e.channel.id, w.d.ChannelMessage);
                n !== i && '' === i && t.setState((0, y.eK)(i));
            }),
            et(this, 'handleTextareaKeyDown', (e) => {
                if (e.which === J.yXg.ARROW_UP && !e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey && 0 === this.state.textValue.length) {
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
                h.Z.changeDraft(i, this.state.textValue, w.d.ChannelMessage),
                    '' !== t ? m.Z.startTyping(i) : m.Z.stopTyping(i),
                    this.setState({
                        textValue: t,
                        richValue: n
                    });
            }),
            et(this, 'handleSendMessage', (e) => {
                let { value: t } = e,
                    { channel: n, pendingReply: i, isTemporarilyActive: r } = this.props;
                return 0 === t.length
                    ? Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })
                    : (0, F.v)({
                          openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                          type: C.I.OVERLAY,
                          content: t,
                          channel: n
                      }).then((e) => {
                          let { valid: s, failureReason: l } = e;
                          if (!s)
                              return l === J.zYc.SLOWMODE_COOLDOWN
                                  ? (W.S.dispatch(J.CkL.EMPHASIZE_SLOWMODE_COOLDOWN),
                                    {
                                        shouldClear: !1,
                                        shouldRefocus: !0
                                    })
                                  : {
                                        shouldClear: !1,
                                        shouldRefocus: !1
                                    };
                          let a = p.Z.getSendMessageOptionsForReply(i);
                          return (p.Z.sendMessage(n.id, R.ZP.parse(n, t), !0, a), this.setState((0, y.H2)()), (0, P.A6)(n.id), r)
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
                    draftType: w.d.ChannelMessage,
                    editorTextContent: this.state.textValue,
                    setValue: (e) => this.handleTextareaChange(null, e, (0, y.JM)(e)),
                    canOnlyUseTextCommands: e
                })
            ),
            w.Z.addChangeListener(this.draftDidChange);
        let n = w.Z.getDraft(e.channel.id, w.d.ChannelMessage);
        (this.state = {
            ...(0, y.eK)(n),
            focused: !1,
            contentWarningProps: null
        }),
            W.S.subscribe(J.CkL.TEXTAREA_FOCUS, this.focusInput),
            W.S.subscribe(J.CkL.TEXTAREA_BLUR, this.blurInput);
    }
}
class er extends r.PureComponent {
    componentDidUpdate(e) {
        let { channel: t, activated: n } = this.props;
        if (((0, K.CR)(e, this.props, this.shouldDisplay), null != t))
            n &&
                !e.activated &&
                f.Z.track(J.rMx.OVERLAY_UNLOCKED, {
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
        let { locked: t, activated: n, opacity: i, isPreviewingInGame: r } = this.props;
        return (e = (t && !n) || r ? i / 100 : n || !t ? Math.min(1, (i + 25) / 100) : Q.wB);
    }
    renderContent() {
        let e;
        let { channel: t, placeholder: n, nsfwAgree: s, guild: a, locked: o, activated: c, chatKeybind: d, pinned: u, isPreviewingInGame: h, dragging: p, pendingReply: f } = this.props;
        if (null == t) return null;
        let m = o || h,
            v = !s && null != t && t.isNSFW(),
            E = !m || c;
        return (
            (e =
                v && null != a
                    ? (0, i.jsx)(_.Z, { guild: a })
                    : (0, i.jsx)(
                          A.Z,
                          {
                              channel: t,
                              className: ee.messages,
                              forceCompact: u,
                              showNewMessagesBar: !m,
                              scrollerClassName: u ? ee.scroller : void 0,
                              showingQuarantineBanner: !1
                          },
                          t.id
                      )),
            (0, i.jsx)(b.G.Provider, {
                value: {
                    disableInteractions: u && o && !c,
                    disableAnimations: u && m && !c
                },
                children: (0, i.jsxs)(r.Fragment, {
                    children: [
                        !o &&
                            !h &&
                            (0, i.jsx)(I.Z, {
                                channel: t,
                                guild: a
                            }),
                        (0, i.jsx)(Q.ZP.Background, {
                            opacityOverride: o || h ? null : en,
                            children: (0, i.jsx)('div', {
                                className: l()(ee.messagesContainer, {
                                    [ee.isDragging]: p,
                                    [ee.disableHoverStates]: u && o && !c
                                }),
                                children: e
                            })
                        }),
                        v
                            ? null
                            : (0, i.jsx)('div', {
                                  children: E
                                      ? (0, i.jsx)(Q.ZP.Background, {
                                            opacityOverride: o || h ? null : en,
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
                                                        children: (0, i.jsx)(g.Z, {
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
                                                opacityOverride: q.wF.LOWER,
                                                children: (0, i.jsx)('div', {
                                                    className: l()(ee.activateKeybind, ee.__invalid_mediumBackgroundOpacity),
                                                    children:
                                                        null != t.name && t.name.length > 0
                                                            ? $.intl.formatToPlainString($.t['9TkYMD'], {
                                                                  keybind: d,
                                                                  channelName: t.isMultiUserDM() ? t.name : '#'.concat(t.name)
                                                              })
                                                            : $.intl.formatToPlainString($.t['hxz/4O'], { keybind: d })
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
        let { locked: t, pinned: n, activated: r, isPreviewingInGame: s, opacity: a } = this.props,
            o = J.t_t.UNPINNED;
        r ? (o = J.t_t.IN_GAME_ACTIVE) : (n && t) || s ? (o = J.t_t.IN_GAME_TEXT) : n && (o = J.t_t.PINNED);
        let c = (t && !r) || s,
            d = n && (c || r),
            u = n && r,
            h = n && c && !r,
            p = (0, Y.Z)(a);
        return (0, i.jsx)(Q.ZP, {
            className: l()(p, {
                [ee.widgetWrapper]: !n,
                [ee.widgetWrapperPinned]: n,
                [ee.locked]: h,
                [ee.inGame]: d,
                [ee.inGameActive]: u,
                [ee.pinned]: n,
                'overlay-unlocked': !t
            }),
            type: o,
            opacity: a,
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
        let { locked: e, channel: t, pinned: n, isPreviewingInGame: s, contained: l } = this.props;
        if (null == t || !this.shouldDisplay()) return null;
        let a = (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(X.Z, {
                    draggableClassName: ee.draggableStartArea,
                    className: ee.headerDefault,
                    channel: t,
                    locked: e,
                    pinned: n,
                    disableDragIndicator: l,
                    isPreviewingInGame: s,
                    handlePin: this.handlePin,
                    onContextMenu: this.handleContextMenu,
                    onMouseDown: this.moveDragStart
                }),
                this.renderContent(),
                e || s
                    ? null
                    : (0, i.jsx)('div', {
                          className: ee.resizeIcon,
                          onMouseDown: this.resizeDragStart
                      })
            ]
        });
        return l ? this.renderContainedWrapper(a) : this.renderWidgetWrapper(a);
    }
    constructor(...e) {
        super(...e),
            et(this, 'handlePin', () => {
                var e, t, n;
                let i = !this.props.pinned;
                f.Z.track(J.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: i,
                    guild_id: null === (e = this.props.channel) || void 0 === e ? void 0 : e.guild_id,
                    channel_id: null === (t = this.props.channel) || void 0 === t ? void 0 : t.id,
                    channel_type: null === (n = this.props.channel) || void 0 === n ? void 0 : n.type,
                    widget_type: J.Odu.TEXT
                }),
                    f.Z.setPinChat(i);
            }),
            et(this, 'handleContextMenu', (e) => {
                let { channel: t, user: r } = this.props;
                null != t &&
                    null != r &&
                    (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('56826'), n.e('29212')]).then(n.bind(n, 131404));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                user: r,
                                channelSelected: !0,
                                channel: t
                            });
                    });
            }),
            et(this, 'moveDragStart', (e) => {
                let { dragStart: t } = this.props;
                t(O.B.MOVE, e.clientX, e.clientY);
            }),
            et(this, 'resizeDragStart', (e) => {
                let { dragStart: t } = this.props;
                t(O.B.RESIZE_SOUTH_EAST, e.clientX, e.clientY);
            });
    }
}
function es(e) {
    let { contained: t = !1, ...n } = e,
        r = (0, c.e7)([U.Z], () => U.Z.getGuildId()),
        s = (0, c.e7)([z.Z], () => z.Z.getChannelId(r)),
        l = (0, c.e7)([L.Z], () => L.Z.getChannel(s)),
        a = (0, c.e7)([V.Z], () => V.Z.getOverlayChatKeybind()),
        o = null != a ? (0, H.BB)(a.shortcut, !0) : ']',
        [d, u, h] = (0, c.Wu)([G.Z], () => [G.Z.getTextWidgetOpacity(), G.Z.getActiveRegions(), !t && G.Z.isPreviewingInGame()]),
        p = (0, c.e7)([D.Z], () => D.Z.getGuild(r)),
        f = (0, c.e7)([M.Z], () => null != r && M.Z.didAgree(r)),
        m = null != l && l.isPrivate() ? l.getRecipientId() : null,
        g = (0, c.e7)([j.Z], () => (null != s ? j.Z.getPendingReply(s) : void 0)),
        v = (0, c.e7)([B.default], () => (null != m ? B.default.getUser(m) : null)),
        { placeholder: _ } = (0, E.Z)(l);
    return null != l && null != p && J.TPd.GUILD_THREADS_ONLY.has(l.type)
        ? (0, i.jsx)(x.Z, {})
        : (0, i.jsx)(er, {
              guild: p,
              channel: l,
              user: v,
              opacity: d,
              nsfwAgree: f,
              chatKeybind: o,
              activated: u.has(J.O0n.TEXT_WIDGET),
              isPreviewingInGame: h,
              pendingReply: g,
              contained: t,
              placeholder: _,
              widget: J.Odu.TEXT,
              ...n
          });
}
