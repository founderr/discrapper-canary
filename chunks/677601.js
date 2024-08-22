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
    eE = n(792125),
    eC = n(998502),
    eg = n(228488),
    eI = n(358221),
    ex = n(414910),
    eT = n(887012),
    eN = n(909820),
    eS = n(493010),
    ev = n(742603),
    eZ = n(221888),
    eA = n(900211),
    eM = n(18759),
    eb = n(878752),
    eR = n(354459),
    eL = n(981631),
    ej = n(689938),
    eO = n(176256);
function eP(e, t, n) {
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
let ey = {
        [eL.AEg.NORMAL]: eO.normal,
        [eL.AEg.MINIMUM]: eO.minimum,
        [eL.AEg.NO_CHAT]: eO.noChat,
        [eL.AEg.FULL_SCREEN]: eO.fullScreen
    },
    eD = {
        [eL.IlC.POPOUT]: eO.popout,
        [eL.IlC.APP]: null,
        [eL.IlC.OVERLAY]: null
    };
class ek extends a.PureComponent {
    getRootNode() {
        var e, t;
        return (null !== (t = null === (e = this.props.popoutWindow) || void 0 === e ? void 0 : e.window) && void 0 !== t ? t : window).document.getElementById('app-mount');
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(eg.NO, this.handleFullScreenChange),
            ep.default.track(eL.rMx.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? 'popout' : t,
                ...(0, b.AB)(e.id)
            });
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(), this.currentDocument.removeEventListener(eg.NO, this.handleFullScreenChange), !(this.inPopout && (0, ef.isMac)()) && this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: a } = this.props,
            s = this.getRootNode();
        if ((null != s && e.mode === eL.WtW.VIDEO && i === eL.WtW.VOICE && (0, eg.rB)(s, this.currentDocument) && (0, eg.Pr)(s, this.currentDocument), e.participantsOpen !== t || a !== e.layout)) {
            var l;
            null === (l = this._contentRef.current) || void 0 === l || l.triggerResize();
        }
        e.inCall && !n && this.inPopout && p.Z.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return ef.isPlatformEmbedded && eC.ZP.supportsFeature(eL.eRX.POPOUT_WINDOWS);
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
        return this.popoutOpen && !this.inPopout && this.props.inCall ? { mainText: ej.Z.Messages.POPOUT_PLAYER_OPENED } : null;
    }
    get paused() {
        return this.popoutOpen && !this.inPopout;
    }
    get inPopout() {
        return this.props.appContext === eL.IlC.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i } = this.props,
            a = t === eL.WtW.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            s = t === eL.WtW.VIDEO && i && this.popoutSupported,
            l = t !== eL.WtW.VOICE && n.isPrivate() && !this.inPopout && i,
            r = n.type === eL.d4z.GUILD_VOICE,
            o = e === eL.AEg.MINIMUM || e === eL.AEg.NORMAL,
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
            case eL.AEg.FULL_SCREEN:
                return {
                    ...u,
                    canPopout: !this.inPopout && this.popoutOpen && u.canPopout
                };
            case eL.AEg.MINIMUM:
                return {
                    ...u,
                    canPopout: !1,
                    useTheme: !0
                };
            case eL.AEg.NO_CHAT:
            case eL.AEg.NORMAL:
                return { ...u };
        }
    }
    renderContent(e) {
        var t;
        let { selectedParticipant: n, inCall: a, hasConnectPermission: s, mode: l, popoutWindow: r, participantsOpen: o, participants: c, filteredParticipants: u, participantsVersion: d, channel: h, guild: p, layout: m, forceShowControls: _, awaitingRemoteSessionInfo: f, currentChannelActivities: E } = this.props,
            C = m === eL.AEg.MINIMUM,
            g = C || m === eL.AEg.NORMAL,
            I = a && l === eL.WtW.VIDEO,
            x = (null !== (t = null == E ? void 0 : E.length) && void 0 !== t ? t : 0) > 0 && h.isPrivate();
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
                disableGradients: C,
                idle: !_ && a && !C && e.idle,
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
                              selectedParticipant: I ? n : null,
                              layout: m,
                              idle: e.idle,
                              mode: l,
                              onSelectParticipant: this.handleSelectParticipant,
                              onContextMenuParticipant: this.handleContextMenu,
                              showParticipants: o && (!g || x),
                              popoutWindow: this.inPopout ? r : null,
                              awaitingRemoteSessionInfo: f
                          })
            })
        );
    }
    render() {
        let { layout: e, channel: t, guild: n, mode: a, chatOpen: s, appContext: r, maxSidebarWidth: o, maxHeight: c, inCall: u } = this.props,
            { resizedHeight: d } = this.state,
            h = a === eL.WtW.VIDEO,
            p = e !== eL.AEg.NO_CHAT && e !== eL.AEg.FULL_SCREEN && null != c;
        return (0, i.jsxs)('div', {
            className: l()(eO.wrapper, ey[e], eD[r], {
                [eO.poppedOut]: this.popoutOpen && !this.inPopout && e !== eL.AEg.NO_CHAT && t.isPrivate(),
                [eO.video]: h,
                [eO.chatSidebarOpen]: s
            }),
            ref: (e) => {
                (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
            },
            style:
                p && null != d
                    ? {
                          minHeight: 230,
                          maxHeight: c,
                          height: d
                      }
                    : void 0,
            children: [
                (0, i.jsx)('div', {
                    className: l()(eO.callContainer, { [(0, eE.Q)(eL.BRd.DARK)]: h }),
                    ref: (e) => {
                        (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                    },
                    children: (0, i.jsx)(W.ZP, {
                        timeout: 2000,
                        children: (e) => this.renderContent(e)
                    })
                }),
                p &&
                    (0, i.jsx)(eA.Z, {
                        minHeight: 230,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight
                    }),
                (0, i.jsx)('div', {
                    className: eO.channelChatWrapper,
                    ref: (e) => {
                        (this._channelChatRef.current = e), (this.props.channelChatRef.current = e);
                    },
                    children:
                        s &&
                        (!u || !this.popoutOpen || this.inPopout) &&
                        (0, i.jsx)(eS.Z, {
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
            eP(this, '_prevLayout', eL.AEg.MINIMUM),
            eP(this, '_wrapperRef', a.createRef()),
            eP(this, '_callContainerRef', a.createRef()),
            eP(this, '_channelChatRef', a.createRef()),
            eP(this, '_contentRef', a.createRef()),
            eP(this, '_videoBackgroundTooltipTimeout', new d.V7()),
            eP(this, '_lastIdleProps', null),
            eP(this, 'state', { resizedHeight: H.ZP.callHeaderHeight }),
            eP(this, 'handleFullScreenChange', () => {
                let e = this.getRootNode();
                null != e && !(0, eg.rB)(e, this.currentDocument) && this.props.layout === eL.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eP(this, 'handleFullScreen', () => {
                let e = this.getRootNode();
                null != e && (this.props.layout !== eL.AEg.FULL_SCREEN ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eL.AEg.FULL_SCREEN), (0, eg.Dj)(e)) : this.maybeLeaveFullScreen());
            }),
            eP(this, 'maybeLeaveFullScreen', () => {
                let e = this.getRootNode();
                if (null != e) this.props.layout === eL.AEg.FULL_SCREEN && (this.handleChangeLayout(this._prevLayout), (0, eg.Pr)(e, this.currentDocument));
            }),
            eP(this, 'handleToggleLayout', () => {
                this.handleChangeLayout(this.props.layout === eL.AEg.NORMAL ? eL.AEg.NO_CHAT : eL.AEg.NORMAL);
            }),
            eP(this, 'handleChangeLayout', (e) => {
                let { channel: t, appContext: n, layout: i } = this.props;
                i !== e && (m.Z.updateLayout(t.id, e, n), e === eL.AEg.FULL_SCREEN && t.isPrivate() && e_.S.dispatch(eL.CkL.TEXTAREA_BLUR));
            }),
            eP(this, 'handleDisconnect', () => {
                this.props.layout === eL.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eP(this, 'handleContextMenu', (e, t) => {
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
                    case eR.fO.HIDDEN_STREAM:
                    case eR.fO.STREAM:
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
                    case eR.fO.USER:
                        let d = ed.default.getUser(e.id);
                        if (null != d)
                            switch (l.type) {
                                case eL.d4z.DM:
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
                                case eL.d4z.GROUP_DM:
                                    return (0, _.jW)(
                                        t,
                                        async () => {
                                            let { default: e } = await Promise.all([n.e('79695'), n.e('90286'), n.e('17354')]).then(n.bind(n, 354589));
                                            return (t) =>
                                                (0, i.jsx)(e, {
                                                    ...t,
                                                    showChannelCallItems: !0,
                                                    showMediaItems: !0,
                                                    showChatItems: c === eL.AEg.MINIMUM || c === eL.AEg.NORMAL,
                                                    user: d,
                                                    channel: l,
                                                    showModalItems: !0
                                                });
                                        },
                                        u
                                    );
                                case eL.d4z.GUILD_VOICE:
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
            eP(this, 'handleCallResize', (e) => {
                this.setState({ resizedHeight: e });
            }),
            eP(this, 'handleSelectParticipant', (e, t) => {
                let { channel: n, selectedParticipant: i, allActiveStreams: a, inCall: s, mode: l } = this.props;
                (0, eR._5)(e) && (0, k.p9)(n, eh.Z, er.Z, eo.Z, O.Z)[0] && (f.default.selectVoiceChannel(n.id), 0 === a.filter((t) => (0, D.V9)(t) === e.id && t.state !== eL.jm8.ENDED).length && (0, E.rn)((0, D.my)(e.id), { forceMultiple: t.shiftKey })), s && l === eL.WtW.VIDEO && ((null == i ? void 0 : i.id) === e.id ? m.Z.selectParticipant(n.id, null) : m.Z.selectParticipant(n.id, e.id));
            }),
            eP(this, 'handleOpenPopout', () => {
                let { channel: e, connectedToEmbeddedActivity: t } = this.props,
                    n = () => {
                        let t = e.getGuildId();
                        null != t && (0, B.uL)((0, em.LY)(t)), U.hP(e);
                    };
                t ? (0, A.Z)(n) : n();
            }),
            eP(this, 'handleStayOnTop', (e) => {
                U.hY(eL.KJ3.CHANNEL_CALL_POPOUT, e);
            }),
            eP(this, 'handleClosePopout', () => {
                U.xv(eL.KJ3.CHANNEL_CALL_POPOUT);
            }),
            eP(this, 'handleFullscreenParticipant', (e, t) => {
                let { layout: n, selectedParticipant: i } = this.props,
                    a = n === eL.AEg.FULL_SCREEN;
                ((!a && (null == i ? void 0 : i.id) !== e.id) || (a && (null == i ? void 0 : i.id) === e.id)) && this.handleSelectParticipant(e, t), this.handleFullScreen();
            }),
            eP(this, 'renderRegionSelect', () => {
                let e;
                let { call: t, channel: n, layout: a } = this.props;
                return (
                    !this.inPopout && a !== eL.AEg.FULL_SCREEN && null != t && !n.isManaged() && (e = (0, i.jsx)(g.Z, { call: t })),
                    (0, i.jsx)(L.Z, {
                        justify: L.Z.Justify.END,
                        children: e
                    })
                );
            }),
            eP(this, 'renderBottomCenter', () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === eL.AEg.MINIMUM || n === eL.AEg.NORMAL
                    ? (0, i.jsx)(G.ZP, {
                          exitFullScreen: this.maybeLeaveFullScreen,
                          channel: e,
                          onDisconnectCall: this.handleDisconnect,
                          idleProps: this._lastIdleProps
                      })
                    : null;
            }),
            eP(this, 'renderBottomLeft', () => {
                let { layout: e, mentionCount: t, channel: n, appContext: a, useNewInviteButton: s, selectedParticipant: r, shouldUseVoiceEffectsActionBar: o, inCall: c, participants: u } = this.props;
                if (!c) return null;
                let d = e === eL.AEg.NO_CHAT ? q.Z.Directions.UP : q.Z.Directions.DOWN,
                    p = [eL.AEg.FULL_SCREEN, eL.AEg.NO_CHAT].includes(e),
                    m = u.some((e) => e.type === eR.fO.STREAM),
                    _ =
                        e === eL.AEg.FULL_SCREEN
                            ? () => {
                                  (this._prevLayout = eL.AEg.NORMAL), this.handleFullScreen();
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: f, canInvite: E } = this.viewProperties,
                    C = s
                        ? (0, i.jsx)(F.Z, {
                              channel: n,
                              stream: (null == r ? void 0 : r.type) === eR.fO.STREAM ? (0, D.my)(r.id) : void 0,
                              applicationId: (null == r ? void 0 : r.type) === eR.fO.ACTIVITY ? r.id : void 0,
                              appContext: a,
                              className: eO.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === eL.d4z.GUILD_VOICE ? eL.ZY5.GUILD_CHANNEL : eL.ZY5.DM_CHANNEL
                          })
                        : (0, i.jsx)(J.Z, {
                              channel: n,
                              stream: (null == r ? void 0 : r.type) === eR.fO.STREAM ? (0, D.my)(r.id) : void 0,
                              className: eO.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === eL.d4z.GUILD_VOICE ? eL.ZY5.GUILD_CHANNEL : eL.ZY5.DM_CHANNEL
                          });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        E && !o ? C : null,
                        f
                            ? (0, i.jsxs)(L.Z, {
                                  className: eO.iconWrapper,
                                  align: L.Z.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, i.jsx)(q.Z, {
                                          label: p ? ej.Z.Messages.SHOW_CHAT : ej.Z.Messages.HIDE_CHAT,
                                          direction: d,
                                          className: eO.leftTrayIcon,
                                          onClick: _
                                      }),
                                      p && t > 0
                                          ? (0, i.jsx)(h.NumberBadge, {
                                                className: eO.badge,
                                                count: t
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        ((null == r ? void 0 : r.type) !== eR.fO.STREAM && (null == r ? void 0 : r.type) !== eR.fO.ACTIVITY) || o
                            ? null
                            : (0, i.jsx)(z.Z, {
                                  children: (0, i.jsx)(eZ.Z, {
                                      className: l()(eO.leftTrayIcon, eO.viewersButton),
                                      participant: r,
                                      maxVisibleUsers: 4,
                                      guildId: n.getGuildId(),
                                      channelId: n.id,
                                      disableInteraction: this.inPopout || e === eL.AEg.FULL_SCREEN
                                  })
                              }),
                        o &&
                            (0, i.jsx)(eb.Z, {
                                channel: n,
                                hasActiveStream: m,
                                themeable: this.viewProperties.useTheme
                            }),
                        (0, i.jsx)(y.Z, {
                            showLeftDivider: o,
                            themeable: this.viewProperties.useTheme,
                            className: eO.leftTrayIcon,
                            channel: n
                        })
                    ]
                });
            }),
            eP(this, 'renderBottomRight', () => {
                let { popoutWindow: e, popoutWindowAlwaysOnTop: t, currentUserId: n, selectedParticipant: a } = this.props,
                    { canFullscreen: s, canStayOnTop: l, canPopout: r, useTheme: o } = this.viewProperties;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        null != a && a.type !== eR.fO.ACTIVITY && a.user.id !== n
                            ? (0, i.jsx)(et.Z, {
                                  context: (0, ex.Z)(a.type),
                                  userId: a.user.id,
                                  currentWindow: this.inPopout ? (null != e ? e : void 0) : window,
                                  sliderClassName: eO.volumeSlider,
                                  className: eO.rightTrayIcon
                              })
                            : null,
                        l
                            ? (0, i.jsx)(ee.Z, {
                                  className: eO.rightTrayIcon,
                                  popoutWindowAlwaysOnTop: t,
                                  onToggleStayOnTop: this.handleStayOnTop
                              })
                            : null,
                        r
                            ? (0, i.jsx)($.Z, {
                                  themeable: o,
                                  popoutOpen: this.popoutOpen,
                                  className: eO.rightTrayIcon,
                                  onOpenPopout: this.handleOpenPopout,
                                  onClosePopout: this.handleClosePopout
                              })
                            : null,
                        s
                            ? (0, i.jsx)(Q.Z, {
                                  themeable: o,
                                  node: this.getRootNode(),
                                  guestWindow: e,
                                  className: eO.rightTrayIcon,
                                  onClick: this.handleFullScreen
                              })
                            : null
                    ]
                });
            }),
            eP(this, 'renderChatButton', (e) => {
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
            eP(this, 'renderChatToasts', () => {
                let { showChatToasts: e, chatOpen: t, channel: n, inCall: a } = this.props;
                return !e || t || (this.popoutOpen && !this.inPopout && a)
                    ? null
                    : (0, i.jsx)(eN.ZP, {
                          children: (0, i.jsx)(Y.Z, {
                              className: eO.chatToasts,
                              channelId: n.id
                          })
                      });
            }),
            eP(this, 'renderVoiceChannelEffects', () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, i.jsx)(eM.ZP, {
                    children: (0, i.jsx)(en.Z, {
                        callHeight: t.height,
                        channelId: e.id
                    })
                });
            }),
            eP(this, 'renderHeader', () => {
                let { renderExternalHeader: e, channel: t, guild: n, appContext: a, chatOpen: s, inCall: l } = this.props,
                    { useExternalHeader: r, canSelectRegion: o, renderHeader: c } = this.viewProperties;
                return c
                    ? (0, i.jsxs)(z.Z, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: eO.headerWrapper,
                                  children: r
                                      ? null == e
                                          ? void 0
                                          : e()
                                      : (0, i.jsx)(ev.Z, {
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
        { width: d = 0, height: p = 0, ref: _ } = (0, x.Z)(),
        { ref: f } = (0, x.Z)(),
        E = (0, N.bp)(),
        g = (0, P.Z)(),
        A = (0, c.e7)([eu.Z], () => {
            var e;
            return (null !== (e = null == g ? void 0 : g.channelId) && void 0 !== e ? e : eu.Z.getVoiceChannelId()) === n.id;
        }),
        b = (0, T.Z)(A),
        {
            participants: L,
            filteredParticipants: y,
            participantsVersion: D,
            mode: k,
            layout: U,
            participantsOpen: B,
            chatOpen: G,
            selectedParticipant: V
        } = (0, c.cj)(
            [eI.Z],
            () => {
                let e = E === eL.IlC.POPOUT,
                    t = eI.Z.getMode(n.id);
                e && (t = eL.WtW.VIDEO);
                let i = t === eL.WtW.VIDEO ? eI.Z.getLayout(n.id, E) : eL.AEg.MINIMUM;
                return (
                    e && i !== eL.AEg.FULL_SCREEN && (i = eL.AEg.NO_CHAT),
                    {
                        mode: t,
                        layout: i,
                        selectedParticipant: t !== eL.WtW.VOICE ? eI.Z.getSelectedParticipant(n.id) : null,
                        participants: eI.Z.getParticipants(n.id),
                        filteredParticipants: eI.Z.getFilteredParticipants(n.id),
                        participantsOpen: eI.Z.getParticipantsOpen(n.id),
                        chatOpen: eI.Z.getChatOpen(n.id),
                        participantsVersion: eI.Z.getParticipantsVersion(n.id)
                    }
                );
            },
            [E, n.id]
        ),
        F = (0, c.Wu)([ei.Z], () => ei.Z.getAllActiveStreams()),
        { selectedStream: W } = (0, c.cj)([ei.Z], () => ({ selectedStream: null != V ? ei.Z.getActiveStreamForStreamKey(V.id) : null }), [V]),
        z = (0, c.e7)([er.Z], () => er.Z.getGuild(n.getGuildId())),
        Y = (0, c.e7)([el.Z], () => el.Z.getCall(n.id), [n.id]),
        K = (0, c.e7)([ec.ZP], () => ec.ZP.getMentionCount(n.id), [n.id]),
        q = (0, c.e7)([ea.default], () => ea.default.getId()),
        { popoutWindow: X, popoutWindowAlwaysOnTop: Q } = (0, c.cj)([w.Z], () => ({
            popoutWindow: w.Z.getWindow(eL.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: w.Z.getIsAlwaysOnTop(eL.KJ3.CHANNEL_CALL_POPOUT)
        })),
        J = (0, c.e7)([eo.Z], () => eo.Z.can(eL.Plq.CONNECT, n)),
        $ = (0, c.e7)([es.Z], () => es.Z.getToastsEnabled(n.id)),
        ee = (0, c.e7)([O.Z], () => O.Z.getAwaitingRemoteSessionInfo()),
        et = (0, c.e7)([H.ZP], () => H.ZP.callHeaderHeight),
        en = a.useCallback((e) => {
            C.ZP.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        ed = null !== (t = null == z ? void 0 : z.id) && void 0 !== t ? t : null,
        eh = (0, Z.Z)(ed, n.id),
        ep = (0, c.e7)([S.Z], () => S.Z.getFetchState(), []),
        em = (0, T.Z)(ep);
    a.useEffect(() => {
        'errored' === ep && 'errored' !== em && (0, h.showToast)((0, h.createToast)(ej.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FETCH_ERROR, h.ToastType.FAILURE));
    }, [ep, em]);
    let e_ = (0, c.e7)([v.ZP], () => v.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
    a.useEffect(() => {
        A && !b && null != e_ && m.Z.selectParticipant(n.id, e_.applicationId);
    }, [A, b, e_, n.id]),
        a.useEffect(() => {
            let e = !1,
                t = null;
            return (
                (async () => {
                    A && k === eL.WtW.VIDEO && ((t = await eC.ZP.blockDisplaySleep()), e && null != t && eC.ZP.unblockDisplaySleep(t));
                })(),
                () => {
                    null != t ? eC.ZP.unblockDisplaySleep(t) : (e = !0);
                }
            );
        }, [A, k]);
    let ef = (0, eT.Z)(n, !0),
        eE = (0, j.bn)(u.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: eg } = (0, R.ZP)(M.Z.CHANNEL_CALL),
        ex = v.ZP.getEmbeddedActivitiesForChannel(n.id);
    return (0, i.jsx)(R.Gt, {
        value: eg,
        children: (0, i.jsx)(I.Z, {
            page: eL.ZY5.CHANNEL_CALL,
            children: (0, i.jsx)(eN.B2, {
                children: (0, i.jsxs)(eM._A, {
                    children: [
                        (0, i.jsx)(ek, {
                            channel: n,
                            guild: z,
                            hasConnectPermission: J,
                            participantsOpen: B,
                            renderExternalHeader: s,
                            appContext: E,
                            call: Y,
                            popoutWindow: X,
                            popoutWindowAlwaysOnTop: Q,
                            mentionCount: K,
                            selectedStream: W,
                            mode: k,
                            inCall: A,
                            participants: L,
                            filteredParticipants: y,
                            participantsVersion: D,
                            layout: U,
                            chatOpen: G,
                            maxSidebarWidth: r - 550,
                            shouldUseVoiceEffectsActionBar: ef,
                            currentUserId: q,
                            selectedParticipant: V,
                            allActiveStreams: F,
                            useNewInviteButton: eh,
                            connectedToEmbeddedActivity: null != e_,
                            showChatToasts: $,
                            storedCallHeaderHeight: et,
                            updateStoredCallHeaderHeight: en,
                            wrapperRef: o,
                            callContainerDimensions: {
                                width: d,
                                height: p
                            },
                            callContainerRef: _,
                            channelChatRef: f,
                            width: r,
                            maxHeight: l,
                            forceShowControls: eE,
                            awaitingRemoteSessionInfo: ee,
                            currentChannelActivities: ex
                        }),
                        !n.isPrivate() && (0, i.jsx)(eM.YR, {}),
                        (0, i.jsx)(eN.H_, {})
                    ]
                })
            })
        })
    });
};
