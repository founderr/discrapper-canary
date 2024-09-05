n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(512722),
    o = n.n(r),
    c = n(442837),
    u = n(704215),
    d = n(846519),
    h = n(481060),
    p = n(570140),
    m = n(475179),
    _ = n(239091),
    f = n(287734),
    E = n(872810),
    C = n(153867),
    g = n(944543),
    I = n(410575),
    x = n(393238),
    T = n(110924),
    N = n(40851),
    S = n(115130),
    v = n(317381),
    Z = n(596040),
    A = n(349619),
    M = n(100527),
    b = n(367907),
    R = n(906732),
    L = n(600164),
    j = n(211644),
    O = n(258609),
    P = n(446226),
    y = n(276598),
    D = n(569545),
    k = n(382182),
    U = n(788983),
    w = n(928518),
    B = n(703656),
    H = n(740492),
    G = n(793319),
    V = n(3861),
    F = n(493754),
    W = n(937995),
    z = n(618158),
    Y = n(880831),
    K = n(73563),
    q = n(751843),
    X = n(616286),
    Q = n(268353),
    J = n(786915),
    $ = n(800965),
    ee = n(107169),
    et = n(891551),
    en = n(488785),
    ei = n(199902),
    ea = n(314897),
    es = n(979696),
    el = n(523746),
    er = n(430824),
    eo = n(496675),
    ec = n(306680),
    eu = n(944486),
    ed = n(594174),
    eh = n(979651),
    ep = n(626135),
    em = n(934415),
    e_ = n(585483),
    ef = n(358085),
    eE = n(998502),
    eC = n(228488),
    eg = n(358221),
    eI = n(414910),
    ex = n(887012),
    eT = n(909820),
    eN = n(493010),
    eS = n(742603),
    ev = n(221888),
    eZ = n(900211),
    eA = n(18759),
    eM = n(878752),
    eb = n(354459),
    eR = n(981631),
    eL = n(689938),
    ej = n(176256);
function eO(e, t, n) {
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
let eP = {
        [eR.AEg.NORMAL]: ej.normal,
        [eR.AEg.MINIMUM]: ej.minimum,
        [eR.AEg.NO_CHAT]: ej.noChat,
        [eR.AEg.FULL_SCREEN]: ej.fullScreen
    },
    ey = {
        [eR.IlC.POPOUT]: ej.popout,
        [eR.IlC.APP]: null,
        [eR.IlC.OVERLAY]: null
    };
class eD extends a.PureComponent {
    getRootNode() {
        var e, t;
        return (null !== (t = null === (e = this.props.popoutWindow) || void 0 === e ? void 0 : e.window) && void 0 !== t ? t : window).document.getElementById('app-mount');
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(eC.NO, this.handleFullScreenChange),
            ep.default.track(eR.rMx.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? 'popout' : t,
                ...(0, b.AB)(e.id)
            });
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(), this.currentDocument.removeEventListener(eC.NO, this.handleFullScreenChange), !(this.inPopout && (0, ef.isMac)()) && this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: a } = this.props,
            s = this.getRootNode();
        if ((null != s && e.mode === eR.WtW.VIDEO && i === eR.WtW.VOICE && (0, eC.rB)(s, this.currentDocument) && (0, eC.Pr)(s, this.currentDocument), e.participantsOpen !== t || a !== e.layout)) {
            var l;
            null === (l = this._contentRef.current) || void 0 === l || l.triggerResize();
        }
        e.inCall && !n && this.inPopout && p.Z.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return ef.isPlatformEmbedded && eE.ZP.supportsFeature(eR.eRX.POPOUT_WINDOWS);
    }
    get popoutSupported() {
        return !ef.isPlatformEmbedded || this.nativePopoutSupported;
    }
    get popoutOpen() {
        let { popoutWindow: e } = this.props;
        return null != e && !e.closed;
    }
    get currentDocument() {
        let { popoutWindow: e } = this.props;
        return null != e && this.popoutOpen && this.inPopout ? e.document : document;
    }
    get screenMessage() {
        return this.popoutOpen && !this.inPopout && this.props.inCall ? { mainText: eL.Z.Messages.POPOUT_PLAYER_OPENED } : null;
    }
    get paused() {
        return this.popoutOpen && !this.inPopout;
    }
    get inPopout() {
        return this.props.appContext === eR.IlC.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i } = this.props,
            a = t === eR.WtW.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            s = t === eR.WtW.VIDEO && i && this.popoutSupported,
            l = t !== eR.WtW.VOICE && n.isPrivate() && !this.inPopout && i,
            r = n.type === eR.d4z.GUILD_VOICE,
            o = e === eR.AEg.MINIMUM || e === eR.AEg.NORMAL,
            c = this.inPopout && this.nativePopoutSupported,
            u = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: o,
                canInvite: r,
                canPopout: s,
                canFullscreen: a,
                canSelectRegion: n.isPrivate() && !n.isBroadcastChannel(),
                canChangeLayout: l,
                canStayOnTop: c
            };
        if (!i)
            return {
                ...u,
                canFullscreen: a,
                useTheme: !0
            };
        switch (e) {
            case eR.AEg.FULL_SCREEN:
                return {
                    ...u,
                    canPopout: !this.inPopout && this.popoutOpen && u.canPopout
                };
            case eR.AEg.MINIMUM:
                return {
                    ...u,
                    canPopout: !1,
                    useTheme: !0
                };
            case eR.AEg.NO_CHAT:
            case eR.AEg.NORMAL:
                return { ...u };
        }
    }
    renderContent(e) {
        var t;
        let { selectedParticipant: n, inCall: a, hasConnectPermission: s, mode: l, popoutWindow: r, participantsOpen: o, participants: c, filteredParticipants: u, participantsVersion: d, channel: h, guild: p, layout: m, forceShowControls: _, awaitingRemoteSessionInfo: f, currentChannelActivities: E, callContainerDimensions: C } = this.props,
            g = m === eR.AEg.MINIMUM,
            I = g || m === eR.AEg.NORMAL,
            x = a && l === eR.WtW.VIDEO,
            T = (null !== (t = null == E ? void 0 : E.length) && void 0 !== t ? t : 0) > 0 && h.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, i.jsx)(K.Z, {
                renderHeader: this.renderHeader,
                renderBottomLeft: this.renderBottomLeft,
                renderBottomCenter: this.renderBottomCenter,
                renderBottomRight: this.renderBottomRight,
                renderChatButton: h.isGuildVoice() ? this.renderChatButton : void 0,
                renderChatToasts: h.isGuildVoice() ? this.renderChatToasts : void 0,
                renderVoiceChannelEffects: this.renderVoiceChannelEffects,
                ...e,
                screenMessage: this.screenMessage,
                disableGradients: g,
                idle: !_ && a && !g && e.idle,
                children:
                    a && this.popoutOpen && !this.inPopout
                        ? null
                        : (0, i.jsx)(V.Z, {
                              ref: this._contentRef,
                              inCall: a,
                              paused: this.paused,
                              channel: h,
                              hasConnectPermission: s,
                              guild: p,
                              participants: c,
                              filteredParticipants: u,
                              participantsVersion: d,
                              selectedParticipant: x ? n : null,
                              layout: m,
                              idle: e.idle,
                              mode: l,
                              onSelectParticipant: this.handleSelectParticipant,
                              onContextMenuParticipant: this.handleContextMenu,
                              showParticipants: o && (!I || T),
                              popoutWindow: this.inPopout ? r : null,
                              awaitingRemoteSessionInfo: f,
                              callContainerDimensions: C
                          })
            })
        );
    }
    render() {
        let { layout: e, channel: t, guild: n, mode: a, chatOpen: s, appContext: r, maxSidebarWidth: o, maxHeight: c, inCall: u } = this.props,
            { resizedHeight: d } = this.state,
            p = a === eR.WtW.VIDEO,
            m = e !== eR.AEg.NO_CHAT && e !== eR.AEg.FULL_SCREEN && null != c;
        return (0, i.jsxs)('div', {
            className: l()(ej.wrapper, eP[e], ey[r], {
                [ej.poppedOut]: this.popoutOpen && !this.inPopout && e !== eR.AEg.NO_CHAT && t.isPrivate(),
                [ej.video]: p,
                [ej.chatSidebarOpen]: s
            }),
            ref: (e) => {
                (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
            },
            style:
                m && null != d
                    ? {
                          minHeight: 230,
                          maxHeight: c,
                          height: d
                      }
                    : void 0,
            children: [
                (0, i.jsx)(h.ThemeProvider, {
                    theme: p ? eR.BRd.DARK : void 0,
                    children: (e) =>
                        (0, i.jsx)('div', {
                            className: l()(ej.callContainer, e),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, i.jsx)(W.ZP, {
                                timeout: 2000,
                                children: (e) => this.renderContent(e)
                            })
                        })
                }),
                m &&
                    (0, i.jsx)(eZ.Z, {
                        minHeight: 230,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight
                    }),
                (0, i.jsx)('div', {
                    className: ej.channelChatWrapper,
                    ref: (e) => {
                        (this._channelChatRef.current = e), (this.props.channelChatRef.current = e);
                    },
                    children:
                        s &&
                        (!u || !this.popoutOpen || this.inPopout) &&
                        (0, i.jsx)(eN.Z, {
                            channel: t,
                            guild: n,
                            maxWidth: o
                        })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            eO(this, '_prevLayout', eR.AEg.MINIMUM),
            eO(this, '_wrapperRef', a.createRef()),
            eO(this, '_callContainerRef', a.createRef()),
            eO(this, '_channelChatRef', a.createRef()),
            eO(this, '_contentRef', a.createRef()),
            eO(this, '_videoBackgroundTooltipTimeout', new d.V7()),
            eO(this, '_lastIdleProps', null),
            eO(this, 'state', { resizedHeight: H.ZP.callHeaderHeight }),
            eO(this, 'handleFullScreenChange', () => {
                let e = this.getRootNode();
                null != e && !(0, eC.rB)(e, this.currentDocument) && this.props.layout === eR.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eO(this, 'handleFullScreen', () => {
                let e = this.getRootNode();
                null != e && (this.props.layout !== eR.AEg.FULL_SCREEN ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eR.AEg.FULL_SCREEN), (0, eC.Dj)(e)) : this.maybeLeaveFullScreen());
            }),
            eO(this, 'maybeLeaveFullScreen', () => {
                let e = this.getRootNode();
                if (null != e) this.props.layout === eR.AEg.FULL_SCREEN && (this.handleChangeLayout(this._prevLayout), (0, eC.Pr)(e, this.currentDocument));
            }),
            eO(this, 'handleToggleLayout', () => {
                this.handleChangeLayout(this.props.layout === eR.AEg.NORMAL ? eR.AEg.NO_CHAT : eR.AEg.NORMAL);
            }),
            eO(this, 'handleChangeLayout', (e) => {
                let { channel: t, appContext: n, layout: i } = this.props;
                i !== e && (m.Z.updateLayout(t.id, e, n), e === eR.AEg.FULL_SCREEN && t.isPrivate() && e_.S.dispatch(eR.CkL.TEXTAREA_BLUR));
            }),
            eO(this, 'handleDisconnect', () => {
                this.props.layout === eR.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eO(this, 'handleContextMenu', (e, t) => {
                var a, s;
                let { channel: l, appContext: r, layout: c } = this.props,
                    u = {
                        onClose: () => {
                            var e;
                            return null === (e = this._lastIdleProps) || void 0 === e ? void 0 : e.onAllowIdle('menu');
                        },
                        context: r
                    };
                switch ((null === (a = this._lastIdleProps) || void 0 === a || a.onPreventIdle('menu'), null === (s = this._lastIdleProps) || void 0 === s || s.onActive(), e.type)) {
                    case eb.fO.HIDDEN_STREAM:
                    case eb.fO.STREAM:
                        (0, _.jW)(
                            t,
                            async () => {
                                let { default: t } = await n.e('22183').then(n.bind(n, 987281));
                                return (n) =>
                                    (0, i.jsx)(t, {
                                        ...n,
                                        stream: e.stream,
                                        exitFullscreen: this.maybeLeaveFullScreen,
                                        appContext: r
                                    });
                            },
                            u
                        );
                        return;
                    case eb.fO.USER:
                        let d = ed.default.getUser(e.id);
                        if (null != d)
                            switch (l.type) {
                                case eR.d4z.DM:
                                    return (0, _.jW)(
                                        t,
                                        async () => {
                                            let { default: e } = await Promise.all([n.e('79695'), n.e('90286'), n.e('22036'), n.e('56826'), n.e('30295')]).then(n.bind(n, 131404));
                                            return (t) =>
                                                (0, i.jsx)(e, {
                                                    ...t,
                                                    showChannelCallItems: !0,
                                                    showMediaItems: !0,
                                                    user: d,
                                                    channel: l,
                                                    showModalItems: !0
                                                });
                                        },
                                        u
                                    );
                                case eR.d4z.GROUP_DM:
                                    return (0, _.jW)(
                                        t,
                                        async () => {
                                            let { default: e } = await Promise.all([n.e('79695'), n.e('90286'), n.e('17354')]).then(n.bind(n, 354589));
                                            return (t) =>
                                                (0, i.jsx)(e, {
                                                    ...t,
                                                    showChannelCallItems: !0,
                                                    showMediaItems: !0,
                                                    showChatItems: c === eR.AEg.MINIMUM || c === eR.AEg.NORMAL,
                                                    user: d,
                                                    channel: l,
                                                    showModalItems: !0
                                                });
                                        },
                                        u
                                    );
                                case eR.d4z.GUILD_VOICE:
                                    let h = l.getGuildId();
                                    return (
                                        o()(null != h, 'GuildID null for guild voice channel'),
                                        (0, _.jW)(
                                            t,
                                            async () => {
                                                let { default: e } = await Promise.all([n.e('79695'), n.e('90286'), n.e('12435'), n.e('46563')]).then(n.bind(n, 757387));
                                                return (t) =>
                                                    (0, i.jsx)(e, {
                                                        ...t,
                                                        showMediaItems: !0,
                                                        showChannelCallItems: !0,
                                                        showChatItems: !1,
                                                        user: d,
                                                        channel: l,
                                                        guildId: h,
                                                        showModalItems: !0
                                                    });
                                            },
                                            u
                                        )
                                    );
                            }
                }
            }),
            eO(this, 'handleCallResize', (e) => {
                this.setState({ resizedHeight: e });
            }),
            eO(this, 'handleSelectParticipant', (e, t) => {
                let { channel: n, selectedParticipant: i, allActiveStreams: a, inCall: s, mode: l } = this.props;
                (0, eb._5)(e) && (0, k.p9)(n, eh.Z, er.Z, eo.Z, O.Z)[0] && (f.default.selectVoiceChannel(n.id), 0 === a.filter((t) => (0, D.V9)(t) === e.id && t.state !== eR.jm8.ENDED).length && (0, E.rn)((0, D.my)(e.id), { forceMultiple: t.shiftKey })), s && l === eR.WtW.VIDEO && ((null == i ? void 0 : i.id) === e.id ? m.Z.selectParticipant(n.id, null) : m.Z.selectParticipant(n.id, e.id));
            }),
            eO(this, 'handleOpenPopout', () => {
                let { channel: e, connectedToEmbeddedActivity: t } = this.props,
                    n = () => {
                        let t = e.getGuildId();
                        null != t && (0, B.uL)((0, em.LY)(t)), U.hP(e);
                    };
                t ? (0, A.Z)(n) : n();
            }),
            eO(this, 'handleStayOnTop', (e) => {
                U.hY(eR.KJ3.CHANNEL_CALL_POPOUT, e);
            }),
            eO(this, 'handleClosePopout', () => {
                U.xv(eR.KJ3.CHANNEL_CALL_POPOUT);
            }),
            eO(this, 'handleFullscreenParticipant', (e, t) => {
                let { layout: n, selectedParticipant: i } = this.props,
                    a = n === eR.AEg.FULL_SCREEN;
                ((!a && (null == i ? void 0 : i.id) !== e.id) || (a && (null == i ? void 0 : i.id) === e.id)) && this.handleSelectParticipant(e, t), this.handleFullScreen();
            }),
            eO(this, 'renderRegionSelect', () => {
                let e;
                let { call: t, channel: n, layout: a } = this.props;
                return (
                    !this.inPopout && a !== eR.AEg.FULL_SCREEN && null != t && !n.isManaged() && (e = (0, i.jsx)(g.Z, { call: t })),
                    (0, i.jsx)(L.Z, {
                        justify: L.Z.Justify.END,
                        children: e
                    })
                );
            }),
            eO(this, 'renderBottomCenter', () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === eR.AEg.MINIMUM || n === eR.AEg.NORMAL
                    ? (0, i.jsx)(G.ZP, {
                          exitFullScreen: this.maybeLeaveFullScreen,
                          channel: e,
                          onDisconnectCall: this.handleDisconnect,
                          idleProps: this._lastIdleProps
                      })
                    : null;
            }),
            eO(this, 'renderBottomLeft', () => {
                let { layout: e, mentionCount: t, channel: n, appContext: a, useNewInviteButton: s, selectedParticipant: r, shouldUseVoiceEffectsActionBar: o, inCall: c, participants: u } = this.props;
                if (!c) return null;
                let d = e === eR.AEg.NO_CHAT ? q.Z.Directions.UP : q.Z.Directions.DOWN,
                    p = [eR.AEg.FULL_SCREEN, eR.AEg.NO_CHAT].includes(e),
                    m = u.some((e) => e.type === eb.fO.STREAM),
                    _ =
                        e === eR.AEg.FULL_SCREEN
                            ? () => {
                                  (this._prevLayout = eR.AEg.NORMAL), this.handleFullScreen();
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: f, canInvite: E } = this.viewProperties,
                    C = s
                        ? (0, i.jsx)(F.Z, {
                              channel: n,
                              stream: (null == r ? void 0 : r.type) === eb.fO.STREAM ? (0, D.my)(r.id) : void 0,
                              applicationId: (null == r ? void 0 : r.type) === eb.fO.ACTIVITY ? r.id : void 0,
                              appContext: a,
                              className: ej.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === eR.d4z.GUILD_VOICE ? eR.ZY5.GUILD_CHANNEL : eR.ZY5.DM_CHANNEL
                          })
                        : (0, i.jsx)(J.Z, {
                              channel: n,
                              stream: (null == r ? void 0 : r.type) === eb.fO.STREAM ? (0, D.my)(r.id) : void 0,
                              className: ej.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === eR.d4z.GUILD_VOICE ? eR.ZY5.GUILD_CHANNEL : eR.ZY5.DM_CHANNEL
                          });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        E && !o ? C : null,
                        f
                            ? (0, i.jsxs)(L.Z, {
                                  className: ej.iconWrapper,
                                  align: L.Z.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, i.jsx)(q.Z, {
                                          label: p ? eL.Z.Messages.SHOW_CHAT : eL.Z.Messages.HIDE_CHAT,
                                          direction: d,
                                          className: ej.leftTrayIcon,
                                          onClick: _
                                      }),
                                      p && t > 0
                                          ? (0, i.jsx)(h.NumberBadge, {
                                                className: ej.badge,
                                                count: t
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        ((null == r ? void 0 : r.type) !== eb.fO.STREAM && (null == r ? void 0 : r.type) !== eb.fO.ACTIVITY) || o
                            ? null
                            : (0, i.jsx)(z.Z, {
                                  children: (0, i.jsx)(ev.Z, {
                                      className: l()(ej.leftTrayIcon, ej.viewersButton),
                                      participant: r,
                                      maxVisibleUsers: 4,
                                      guildId: n.getGuildId(),
                                      channelId: n.id,
                                      disableInteraction: this.inPopout || e === eR.AEg.FULL_SCREEN
                                  })
                              }),
                        o &&
                            (0, i.jsx)(eM.Z, {
                                channel: n,
                                hasActiveStream: m,
                                themeable: this.viewProperties.useTheme
                            }),
                        (0, i.jsx)(y.Z, {
                            showLeftDivider: o,
                            themeable: this.viewProperties.useTheme,
                            className: ej.leftTrayIcon,
                            channel: n
                        })
                    ]
                });
            }),
            eO(this, 'renderBottomRight', () => {
                let { popoutWindow: e, popoutWindowAlwaysOnTop: t, currentUserId: n, selectedParticipant: a } = this.props,
                    { canFullscreen: s, canStayOnTop: l, canPopout: r, useTheme: o } = this.viewProperties;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        null != a && a.type !== eb.fO.ACTIVITY && a.user.id !== n
                            ? (0, i.jsx)(et.Z, {
                                  context: (0, eI.Z)(a.type),
                                  userId: a.user.id,
                                  currentWindow: this.inPopout ? (null != e ? e : void 0) : window,
                                  sliderClassName: ej.volumeSlider,
                                  className: ej.rightTrayIcon
                              })
                            : null,
                        l
                            ? (0, i.jsx)(ee.Z, {
                                  className: ej.rightTrayIcon,
                                  popoutWindowAlwaysOnTop: t,
                                  onToggleStayOnTop: this.handleStayOnTop
                              })
                            : null,
                        r
                            ? (0, i.jsx)($.Z, {
                                  themeable: o,
                                  popoutOpen: this.popoutOpen,
                                  className: ej.rightTrayIcon,
                                  onOpenPopout: this.handleOpenPopout,
                                  onClosePopout: this.handleClosePopout
                              })
                            : null,
                        s
                            ? (0, i.jsx)(Q.Z, {
                                  themeable: o,
                                  node: this.getRootNode(),
                                  guestWindow: e,
                                  className: ej.rightTrayIcon,
                                  onClick: this.handleFullScreen
                              })
                            : null
                    ]
                });
            }),
            eO(this, 'renderChatButton', (e) => {
                let { className: t, showingClassName: n } = e,
                    { channel: a, chatOpen: s, inCall: l } = this.props;
                return s || (this.popoutOpen && !this.inPopout && l)
                    ? null
                    : (0, i.jsx)(X.T, {
                          channelId: a.id,
                          className: t,
                          showingClassName: n
                      });
            }),
            eO(this, 'renderChatToasts', () => {
                let { showChatToasts: e, chatOpen: t, channel: n, inCall: a } = this.props;
                return !e || t || (this.popoutOpen && !this.inPopout && a)
                    ? null
                    : (0, i.jsx)(eT.ZP, {
                          children: (0, i.jsx)(Y.Z, {
                              className: ej.chatToasts,
                              channelId: n.id
                          })
                      });
            }),
            eO(this, 'renderVoiceChannelEffects', () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, i.jsx)(eA.ZP, {
                    children: (0, i.jsx)(en.Z, {
                        callHeight: t.height,
                        channelId: e.id
                    })
                });
            }),
            eO(this, 'renderHeader', () => {
                let { renderExternalHeader: e, channel: t, guild: n, appContext: a, chatOpen: s, inCall: l } = this.props,
                    { useExternalHeader: r, canSelectRegion: o, renderHeader: c } = this.viewProperties;
                return c
                    ? (0, i.jsxs)(z.Z, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: ej.headerWrapper,
                                  children: r
                                      ? null == e
                                          ? void 0
                                          : e()
                                      : (0, i.jsx)(eS.Z, {
                                            channel: t,
                                            guild: n,
                                            appContext: a,
                                            inCall: l,
                                            isChatOpen: s || (this.popoutOpen && !this.inPopout && l),
                                            exitFullScreen: this.maybeLeaveFullScreen
                                        })
                              }),
                              o ? this.renderRegionSelect() : null
                          ]
                      })
                    : null;
            });
    }
}
t.Z = function (e) {
    var t;
    let { channel: n, renderExternalHeader: s, maxHeight: l } = e,
        { width: r = 0, ref: o } = (0, x.Z)(),
        { width: d = 0, height: p = 0, ref: m } = (0, x.Z)(),
        { ref: _ } = (0, x.Z)(),
        f = (0, N.bp)(),
        E = (0, P.Z)(),
        g = (0, c.e7)([eu.Z], () => {
            var e;
            return (null !== (e = null == E ? void 0 : E.channelId) && void 0 !== e ? e : eu.Z.getVoiceChannelId()) === n.id;
        }),
        {
            participants: A,
            filteredParticipants: b,
            participantsVersion: L,
            mode: y,
            layout: D,
            participantsOpen: k,
            chatOpen: U,
            selectedParticipant: B
        } = (0, c.cj)(
            [eg.Z],
            () => {
                let e = f === eR.IlC.POPOUT,
                    t = eg.Z.getMode(n.id);
                e && (t = eR.WtW.VIDEO);
                let i = t === eR.WtW.VIDEO ? eg.Z.getLayout(n.id, f) : eR.AEg.MINIMUM;
                return (
                    e && i !== eR.AEg.FULL_SCREEN && (i = eR.AEg.NO_CHAT),
                    {
                        mode: t,
                        layout: i,
                        selectedParticipant: t !== eR.WtW.VOICE ? eg.Z.getSelectedParticipant(n.id) : null,
                        participants: eg.Z.getParticipants(n.id),
                        filteredParticipants: eg.Z.getFilteredParticipants(n.id),
                        participantsOpen: eg.Z.getParticipantsOpen(n.id),
                        chatOpen: eg.Z.getChatOpen(n.id),
                        participantsVersion: eg.Z.getParticipantsVersion(n.id)
                    }
                );
            },
            [f, n.id]
        ),
        G = (0, c.Wu)([ei.Z], () => ei.Z.getAllActiveStreams()),
        { selectedStream: V } = (0, c.cj)([ei.Z], () => ({ selectedStream: null != B ? ei.Z.getActiveStreamForStreamKey(B.id) : null }), [B]),
        F = (0, c.e7)([er.Z], () => er.Z.getGuild(n.getGuildId())),
        W = (0, c.e7)([el.Z], () => el.Z.getCall(n.id), [n.id]),
        z = (0, c.e7)([ec.ZP], () => ec.ZP.getMentionCount(n.id), [n.id]),
        Y = (0, c.e7)([ea.default], () => ea.default.getId()),
        { popoutWindow: K, popoutWindowAlwaysOnTop: q } = (0, c.cj)([w.Z], () => ({
            popoutWindow: w.Z.getWindow(eR.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: w.Z.getIsAlwaysOnTop(eR.KJ3.CHANNEL_CALL_POPOUT)
        })),
        X = (0, c.e7)([eo.Z], () => eo.Z.can(eR.Plq.CONNECT, n)),
        Q = (0, c.e7)([es.Z], () => es.Z.getToastsEnabled(n.id)),
        J = (0, c.e7)([O.Z], () => O.Z.getAwaitingRemoteSessionInfo()),
        $ = (0, c.e7)([H.ZP], () => H.ZP.callHeaderHeight),
        ee = a.useCallback((e) => {
            C.ZP.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        et = null !== (t = null == F ? void 0 : F.id) && void 0 !== t ? t : null,
        en = (0, Z.Z)(et, n.id),
        ed = (0, c.e7)([S.Z], () => S.Z.getFetchState(), []),
        eh = (0, T.Z)(ed);
    a.useEffect(() => {
        'errored' === ed && 'errored' !== eh && (0, h.showToast)((0, h.createToast)(eL.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FETCH_ERROR, h.ToastType.FAILURE));
    }, [ed, eh]);
    let ep = (0, c.e7)([v.ZP], () => v.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
    a.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                g && y === eR.WtW.VIDEO && ((t = await eE.ZP.blockDisplaySleep()), e && null != t && eE.ZP.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? eE.ZP.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [g, y]);
    let em = (0, ex.Z)(n, !0),
        e_ = (0, j.bn)(u.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: ef } = (0, R.ZP)(M.Z.CHANNEL_CALL),
        eC = v.ZP.getEmbeddedActivitiesForChannel(n.id);
    return (0, i.jsx)(R.Gt, {
        value: ef,
        children: (0, i.jsx)(I.Z, {
            page: eR.ZY5.CHANNEL_CALL,
            children: (0, i.jsx)(eT.B2, {
                children: (0, i.jsxs)(eA._A, {
                    children: [
                        (0, i.jsx)(eD, {
                            channel: n,
                            guild: F,
                            hasConnectPermission: X,
                            participantsOpen: k,
                            renderExternalHeader: s,
                            appContext: f,
                            call: W,
                            popoutWindow: K,
                            popoutWindowAlwaysOnTop: q,
                            mentionCount: z,
                            selectedStream: V,
                            mode: y,
                            inCall: g,
                            participants: A,
                            filteredParticipants: b,
                            participantsVersion: L,
                            layout: D,
                            chatOpen: U,
                            maxSidebarWidth: r - 550,
                            shouldUseVoiceEffectsActionBar: em,
                            currentUserId: Y,
                            selectedParticipant: B,
                            allActiveStreams: G,
                            useNewInviteButton: en,
                            connectedToEmbeddedActivity: null != ep,
                            showChatToasts: Q,
                            storedCallHeaderHeight: $,
                            updateStoredCallHeaderHeight: ee,
                            wrapperRef: o,
                            callContainerDimensions: {
                                width: d,
                                height: p
                            },
                            callContainerRef: m,
                            channelChatRef: _,
                            width: r,
                            maxHeight: l,
                            forceShowControls: e_,
                            awaitingRemoteSessionInfo: J,
                            currentChannelActivities: eC
                        }),
                        !n.isPrivate() && (0, i.jsx)(eA.YR, {}),
                        (0, i.jsx)(eT.H_, {})
                    ]
                })
            })
        })
    });
};
