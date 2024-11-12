n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(512722),
    o = n.n(s),
    c = n(442837),
    d = n(704215),
    u = n(846519),
    h = n(481060),
    p = n(570140),
    m = n(475179),
    f = n(239091),
    g = n(287734),
    C = n(872810),
    x = n(153867),
    v = n(944543),
    _ = n(410575),
    I = n(393238),
    E = n(110924),
    b = n(40851),
    N = n(115130),
    Z = n(317381),
    S = n(596040),
    T = n(349619),
    j = n(100527),
    A = n(367907),
    y = n(906732),
    P = n(560861),
    M = n(600164),
    R = n(211644),
    L = n(258609),
    k = n(446226),
    O = n(203341),
    D = n(569545),
    w = n(102172),
    B = n(788983),
    U = n(928518),
    H = n(703656),
    G = n(740492),
    F = n(793319),
    V = n(3861),
    z = n(493754),
    W = n(937995),
    K = n(618158),
    Y = n(880831),
    q = n(73563),
    X = n(751843),
    J = n(616286),
    Q = n(268353),
    $ = n(786915),
    ee = n(800965),
    et = n(107169),
    en = n(891551),
    ei = n(488785),
    el = n(199902),
    er = n(314897),
    ea = n(979696),
    es = n(523746),
    eo = n(430824),
    ec = n(496675),
    ed = n(306680),
    eu = n(944486),
    eh = n(594174),
    ep = n(979651),
    em = n(626135),
    ef = n(934415),
    eg = n(585483),
    eC = n(358085),
    ex = n(998502),
    ev = n(228488),
    e_ = n(358221),
    eI = n(414910),
    eE = n(887012),
    eb = n(909820),
    eN = n(493010),
    eZ = n(742603),
    eS = n(221888),
    eT = n(900211),
    ej = n(18759),
    eA = n(878752),
    ey = n(354459),
    eP = n(981631),
    eM = n(388032),
    eR = n(374912);
function eL(e, t, n) {
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
let ek = {
        [eP.AEg.NORMAL]: eR.normal,
        [eP.AEg.MINIMUM]: eR.minimum,
        [eP.AEg.NO_CHAT]: eR.noChat,
        [eP.AEg.FULL_SCREEN]: eR.fullScreen
    },
    eO = {
        [eP.IlC.POPOUT]: eR.popout,
        [eP.IlC.APP]: null,
        [eP.IlC.OVERLAY]: null
    };
class eD extends l.PureComponent {
    getRootNode() {
        var e, t;
        return (null !== (t = null === (e = this.props.popoutWindow) || void 0 === e ? void 0 : e.window) && void 0 !== t ? t : window).document.getElementById('app-mount');
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(ev.NO, this.handleFullScreenChange),
            em.default.track(eP.rMx.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? 'popout' : t,
                ...(0, A.AB)(e.id)
            });
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(), this.currentDocument.removeEventListener(ev.NO, this.handleFullScreenChange), !(this.inPopout && (0, eC.isMac)()) && this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: l } = this.props,
            r = this.getRootNode();
        if ((null != r && e.mode === eP.WtW.VIDEO && i === eP.WtW.VOICE && (0, ev.rB)(r, this.currentDocument) && (0, ev.Pr)(r, this.currentDocument), e.participantsOpen !== t || l !== e.layout)) {
            var a;
            null === (a = this._contentRef.current) || void 0 === a || a.triggerResize();
        }
        e.inCall && !n && this.inPopout && p.Z.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return eC.isPlatformEmbedded && ex.ZP.supportsFeature(eP.eRX.POPOUT_WINDOWS);
    }
    get popoutSupported() {
        return !eC.isPlatformEmbedded || this.nativePopoutSupported;
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
        return this.popoutOpen && !this.inPopout && this.props.inCall ? { mainText: eM.intl.string(eM.t.J5bXZW) } : null;
    }
    get paused() {
        return this.popoutOpen && !this.inPopout;
    }
    get inPopout() {
        return this.props.appContext === eP.IlC.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i } = this.props,
            l = t === eP.WtW.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            r = t === eP.WtW.VIDEO && i && this.popoutSupported,
            a = t !== eP.WtW.VOICE && n.isPrivate() && !this.inPopout && i,
            s = n.type === eP.d4z.GUILD_VOICE,
            o = e === eP.AEg.MINIMUM || e === eP.AEg.NORMAL,
            c = this.inPopout && this.nativePopoutSupported,
            d = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: o,
                canInvite: s,
                canPopout: r,
                canFullscreen: l,
                canSelectRegion: n.isPrivate(),
                canChangeLayout: a,
                canStayOnTop: c
            };
        if (!i)
            return {
                ...d,
                canFullscreen: l,
                useTheme: !0
            };
        switch (e) {
            case eP.AEg.FULL_SCREEN:
                return {
                    ...d,
                    canPopout: !this.inPopout && this.popoutOpen && d.canPopout
                };
            case eP.AEg.MINIMUM:
                return {
                    ...d,
                    canPopout: !1,
                    useTheme: !0
                };
            case eP.AEg.NO_CHAT:
            case eP.AEg.NORMAL:
                return { ...d };
        }
    }
    renderContent(e) {
        var t;
        let { selectedParticipant: n, inCall: l, hasConnectPermission: r, mode: a, popoutWindow: s, participantsOpen: o, participants: c, filteredParticipants: d, participantsVersion: u, channel: h, guild: p, layout: m, forceShowControls: f, awaitingRemoteSessionInfo: g, currentChannelActivities: C, callContainerDimensions: x } = this.props,
            v = m === eP.AEg.MINIMUM,
            _ = v || m === eP.AEg.NORMAL,
            I = l && a === eP.WtW.VIDEO,
            E = (null !== (t = null == C ? void 0 : C.length) && void 0 !== t ? t : 0) > 0 && h.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, i.jsx)(q.Z, {
                renderHeader: this.renderHeader,
                renderBottomLeft: this.renderBottomLeft,
                renderBottomCenter: this.renderBottomCenter,
                renderBottomRight: this.renderBottomRight,
                renderChatButton: h.isGuildVoice() ? this.renderChatButton : void 0,
                renderChatToasts: h.isGuildVoice() ? this.renderChatToasts : void 0,
                renderVoiceChannelEffects: this.renderVoiceChannelEffects,
                ...e,
                screenMessage: this.screenMessage,
                disableGradients: v,
                idle: !f && l && !v && e.idle,
                children:
                    l && this.popoutOpen && !this.inPopout
                        ? null
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(P.Z, { channel: h }),
                                  (0, i.jsx)(V.Z, {
                                      ref: this._contentRef,
                                      inCall: l,
                                      paused: this.paused,
                                      channel: h,
                                      hasConnectPermission: r,
                                      guild: p,
                                      participants: c,
                                      filteredParticipants: d,
                                      participantsVersion: u,
                                      selectedParticipant: I ? n : null,
                                      layout: m,
                                      idle: e.idle,
                                      mode: a,
                                      onSelectParticipant: this.handleSelectParticipant,
                                      onContextMenuParticipant: this.handleContextMenu,
                                      showParticipants: o && (!_ || E),
                                      popoutWindow: this.inPopout ? s : null,
                                      awaitingRemoteSessionInfo: g,
                                      callContainerDimensions: x
                                  })
                              ]
                          })
            })
        );
    }
    render() {
        let { layout: e, channel: t, guild: n, mode: l, chatOpen: r, appContext: s, maxSidebarWidth: o, maxHeight: c, inCall: d } = this.props,
            { resizedHeight: u } = this.state,
            p = l === eP.WtW.VIDEO,
            m = e !== eP.AEg.NO_CHAT && e !== eP.AEg.FULL_SCREEN && null != c;
        return (0, i.jsxs)('div', {
            className: a()(eR.wrapper, ek[e], eO[s], {
                [eR.poppedOut]: this.popoutOpen && !this.inPopout && e !== eP.AEg.NO_CHAT && t.isPrivate(),
                [eR.video]: p,
                [eR.chatSidebarOpen]: r
            }),
            ref: (e) => {
                (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
            },
            style:
                m && null != u
                    ? {
                          minHeight: 230,
                          maxHeight: c,
                          height: u
                      }
                    : void 0,
            children: [
                (0, i.jsx)(h.ThemeProvider, {
                    theme: p ? eP.BRd.DARK : void 0,
                    children: (e) =>
                        (0, i.jsx)('div', {
                            className: a()(eR.callContainer, e),
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
                    (0, i.jsx)(eT.Z, {
                        minHeight: 230,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight
                    }),
                (0, i.jsx)('div', {
                    className: eR.channelChatWrapper,
                    ref: (e) => {
                        (this._channelChatRef.current = e), (this.props.channelChatRef.current = e);
                    },
                    children:
                        r &&
                        (!d || !this.popoutOpen || this.inPopout) &&
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
            eL(this, '_prevLayout', eP.AEg.MINIMUM),
            eL(this, '_wrapperRef', l.createRef()),
            eL(this, '_callContainerRef', l.createRef()),
            eL(this, '_channelChatRef', l.createRef()),
            eL(this, '_contentRef', l.createRef()),
            eL(this, '_videoBackgroundTooltipTimeout', new u.V7()),
            eL(this, '_lastIdleProps', null),
            eL(this, 'state', { resizedHeight: G.ZP.callHeaderHeight }),
            eL(this, 'handleFullScreenChange', () => {
                let e = this.getRootNode();
                null != e && !(0, ev.rB)(e, this.currentDocument) && this.props.layout === eP.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eL(this, 'handleFullScreen', () => {
                let e = this.getRootNode();
                null != e && (this.props.layout !== eP.AEg.FULL_SCREEN ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eP.AEg.FULL_SCREEN), (0, ev.Dj)(e)) : this.maybeLeaveFullScreen());
            }),
            eL(this, 'maybeLeaveFullScreen', () => {
                let e = this.getRootNode();
                if (null != e) this.props.layout === eP.AEg.FULL_SCREEN && (this.handleChangeLayout(this._prevLayout), (0, ev.Pr)(e, this.currentDocument));
            }),
            eL(this, 'handleToggleLayout', () => {
                this.handleChangeLayout(this.props.layout === eP.AEg.NORMAL ? eP.AEg.NO_CHAT : eP.AEg.NORMAL);
            }),
            eL(this, 'handleChangeLayout', (e) => {
                let { channel: t, appContext: n, layout: i } = this.props;
                i !== e && (m.Z.updateLayout(t.id, e, n), e === eP.AEg.FULL_SCREEN && t.isPrivate() && eg.S.dispatch(eP.CkL.TEXTAREA_BLUR));
            }),
            eL(this, 'handleDisconnect', () => {
                this.props.layout === eP.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eL(this, 'handleContextMenu', (e, t) => {
                var l, r;
                let { channel: a, appContext: s, layout: c } = this.props,
                    d = {
                        onClose: () => {
                            var e;
                            return null === (e = this._lastIdleProps) || void 0 === e ? void 0 : e.onAllowIdle('menu');
                        },
                        context: s
                    };
                switch ((null === (l = this._lastIdleProps) || void 0 === l || l.onPreventIdle('menu'), null === (r = this._lastIdleProps) || void 0 === r || r.onActive(), e.type)) {
                    case ey.fO.HIDDEN_STREAM:
                    case ey.fO.STREAM:
                        (0, f.jW)(
                            t,
                            async () => {
                                let { default: t } = await n.e('50350').then(n.bind(n, 987281));
                                return (n) =>
                                    (0, i.jsx)(t, {
                                        ...n,
                                        stream: e.stream,
                                        exitFullscreen: this.maybeLeaveFullScreen,
                                        appContext: s
                                    });
                            },
                            d
                        );
                        return;
                    case ey.fO.USER:
                        let u = eh.default.getUser(e.id);
                        if (null != u)
                            switch (a.type) {
                                case eP.d4z.DM:
                                    return (0, f.jW)(
                                        t,
                                        async () => {
                                            let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('70205'), n.e('56826'), n.e('42517')]).then(n.bind(n, 131404));
                                            return (t) =>
                                                (0, i.jsx)(e, {
                                                    ...t,
                                                    showChannelCallItems: !0,
                                                    showMediaItems: !0,
                                                    user: u,
                                                    channel: a,
                                                    showModalItems: !0
                                                });
                                        },
                                        d
                                    );
                                case eP.d4z.GROUP_DM:
                                    return (0, f.jW)(
                                        t,
                                        async () => {
                                            let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('18283')]).then(n.bind(n, 354589));
                                            return (t) =>
                                                (0, i.jsx)(e, {
                                                    ...t,
                                                    showChannelCallItems: !0,
                                                    showMediaItems: !0,
                                                    showChatItems: c === eP.AEg.MINIMUM || c === eP.AEg.NORMAL,
                                                    user: u,
                                                    channel: a,
                                                    showModalItems: !0
                                                });
                                        },
                                        d
                                    );
                                case eP.d4z.GUILD_VOICE:
                                    let h = a.getGuildId();
                                    return (
                                        o()(null != h, 'GuildID null for guild voice channel'),
                                        (0, f.jW)(
                                            t,
                                            async () => {
                                                let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('13125'), n.e('91864')]).then(n.bind(n, 757387));
                                                return (t) =>
                                                    (0, i.jsx)(e, {
                                                        ...t,
                                                        showMediaItems: !0,
                                                        showChannelCallItems: !0,
                                                        showChatItems: !1,
                                                        user: u,
                                                        channel: a,
                                                        guildId: h,
                                                        showModalItems: !0
                                                    });
                                            },
                                            d
                                        )
                                    );
                            }
                }
            }),
            eL(this, 'handleCallResize', (e) => {
                this.setState({ resizedHeight: e });
            }),
            eL(this, 'handleSelectParticipant', (e, t) => {
                let { channel: n, selectedParticipant: i, allActiveStreams: l, inCall: r, mode: a } = this.props;
                (0, ey._5)(e) && (0, w.p9)(n, ep.Z, eo.Z, ec.Z, L.Z)[0] && (g.default.selectVoiceChannel(n.id), 0 === l.filter((t) => (0, D.V9)(t) === e.id && t.state !== eP.jm8.ENDED).length && (0, C.rn)((0, D.my)(e.id), { forceMultiple: t.shiftKey })), r && a === eP.WtW.VIDEO && ((null == i ? void 0 : i.id) === e.id ? m.Z.selectParticipant(n.id, null) : m.Z.selectParticipant(n.id, e.id));
            }),
            eL(this, 'handleOpenPopout', () => {
                let { channel: e, connectedToEmbeddedActivity: t } = this.props,
                    n = () => {
                        let t = e.getGuildId();
                        null != t && (0, H.uL)((0, ef.LY)(t)), B.hP(e);
                    };
                t ? (0, T.Z)(n) : n();
            }),
            eL(this, 'handleStayOnTop', (e) => {
                B.hY(eP.KJ3.CHANNEL_CALL_POPOUT, e);
            }),
            eL(this, 'handleClosePopout', () => {
                B.xv(eP.KJ3.CHANNEL_CALL_POPOUT);
            }),
            eL(this, 'handleFullscreenParticipant', (e, t) => {
                let { layout: n, selectedParticipant: i } = this.props,
                    l = n === eP.AEg.FULL_SCREEN;
                ((!l && (null == i ? void 0 : i.id) !== e.id) || (l && (null == i ? void 0 : i.id) === e.id)) && this.handleSelectParticipant(e, t), this.handleFullScreen();
            }),
            eL(this, 'renderRegionSelect', () => {
                let e;
                let { call: t, channel: n, layout: l } = this.props;
                return (
                    !this.inPopout && l !== eP.AEg.FULL_SCREEN && null != t && !n.isManaged() && (e = (0, i.jsx)(v.Z, { call: t })),
                    (0, i.jsx)(M.Z, {
                        justify: M.Z.Justify.END,
                        children: e
                    })
                );
            }),
            eL(this, 'renderBottomCenter', () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === eP.AEg.MINIMUM || n === eP.AEg.NORMAL
                    ? (0, i.jsx)(F.ZP, {
                          exitFullScreen: this.maybeLeaveFullScreen,
                          channel: e,
                          onDisconnectCall: this.handleDisconnect,
                          idleProps: this._lastIdleProps
                      })
                    : null;
            }),
            eL(this, 'renderBottomLeft', () => {
                let { layout: e, mentionCount: t, channel: n, appContext: l, useNewInviteButton: r, selectedParticipant: s, shouldUseVoiceEffectsActionBar: o, inCall: c, participants: d } = this.props;
                if (!c) return null;
                let u = e === eP.AEg.NO_CHAT ? X.Z.Directions.UP : X.Z.Directions.DOWN,
                    p = [eP.AEg.FULL_SCREEN, eP.AEg.NO_CHAT].includes(e),
                    m = d.some((e) => e.type === ey.fO.STREAM),
                    f =
                        e === eP.AEg.FULL_SCREEN
                            ? () => {
                                  (this._prevLayout = eP.AEg.NORMAL), this.handleFullScreen();
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: g, canInvite: C } = this.viewProperties,
                    x = r
                        ? (0, i.jsx)(z.Z, {
                              channel: n,
                              stream: (null == s ? void 0 : s.type) === ey.fO.STREAM ? (0, D.my)(s.id) : void 0,
                              applicationId: (null == s ? void 0 : s.type) === ey.fO.ACTIVITY ? s.id : void 0,
                              appContext: l,
                              className: eR.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === eP.d4z.GUILD_VOICE ? eP.ZY5.GUILD_CHANNEL : eP.ZY5.DM_CHANNEL
                          })
                        : (0, i.jsx)($.Z, {
                              channel: n,
                              stream: (null == s ? void 0 : s.type) === ey.fO.STREAM ? (0, D.my)(s.id) : void 0,
                              className: eR.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === eP.d4z.GUILD_VOICE ? eP.ZY5.GUILD_CHANNEL : eP.ZY5.DM_CHANNEL
                          });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        C && !o ? x : null,
                        g
                            ? (0, i.jsxs)(M.Z, {
                                  className: eR.iconWrapper,
                                  align: M.Z.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, i.jsx)(X.Z, {
                                          label: p ? eM.intl.string(eM.t.kkKapK) : eM.intl.string(eM.t['5MstTk']),
                                          direction: u,
                                          className: eR.leftTrayIcon,
                                          onClick: f
                                      }),
                                      p && t > 0
                                          ? (0, i.jsx)(h.NumberBadge, {
                                                className: eR.badge,
                                                count: t
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        ((null == s ? void 0 : s.type) !== ey.fO.STREAM && (null == s ? void 0 : s.type) !== ey.fO.ACTIVITY) || o
                            ? null
                            : (0, i.jsx)(K.Z, {
                                  children: (0, i.jsx)(eS.Z, {
                                      className: a()(eR.leftTrayIcon, eR.viewersButton),
                                      participant: s,
                                      maxVisibleUsers: 4,
                                      guildId: n.getGuildId(),
                                      channelId: n.id,
                                      disableInteraction: this.inPopout || e === eP.AEg.FULL_SCREEN
                                  })
                              }),
                        o &&
                            (0, i.jsx)(eA.Z, {
                                channel: n,
                                hasActiveStream: m,
                                themeable: this.viewProperties.useTheme
                            }),
                        (0, i.jsx)(O.Z, {
                            showLeftDivider: o,
                            themeable: this.viewProperties.useTheme,
                            className: eR.leftTrayIcon,
                            channel: n
                        })
                    ]
                });
            }),
            eL(this, 'renderBottomRight', () => {
                let { popoutWindow: e, popoutWindowAlwaysOnTop: t, currentUserId: n, selectedParticipant: l } = this.props,
                    { canFullscreen: r, canStayOnTop: a, canPopout: s, useTheme: o } = this.viewProperties;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        null != l && l.type !== ey.fO.ACTIVITY && l.user.id !== n
                            ? (0, i.jsx)(en.Z, {
                                  context: (0, eI.Z)(l.type),
                                  userId: l.user.id,
                                  currentWindow: this.inPopout ? (null != e ? e : void 0) : window,
                                  sliderClassName: eR.volumeSlider,
                                  className: eR.rightTrayIcon
                              })
                            : null,
                        a
                            ? (0, i.jsx)(et.Z, {
                                  className: eR.rightTrayIcon,
                                  popoutWindowAlwaysOnTop: t,
                                  onToggleStayOnTop: this.handleStayOnTop
                              })
                            : null,
                        s
                            ? (0, i.jsx)(ee.Z, {
                                  themeable: o,
                                  popoutOpen: this.popoutOpen,
                                  className: eR.rightTrayIcon,
                                  onOpenPopout: this.handleOpenPopout,
                                  onClosePopout: this.handleClosePopout
                              })
                            : null,
                        r
                            ? (0, i.jsx)(Q.Z, {
                                  themeable: o,
                                  node: this.getRootNode(),
                                  guestWindow: e,
                                  className: eR.rightTrayIcon,
                                  onClick: this.handleFullScreen
                              })
                            : null
                    ]
                });
            }),
            eL(this, 'renderChatButton', (e) => {
                let { className: t, showingClassName: n } = e,
                    { channel: l, chatOpen: r, inCall: a } = this.props;
                return r || (this.popoutOpen && !this.inPopout && a)
                    ? null
                    : (0, i.jsx)(J.T, {
                          channelId: l.id,
                          className: t,
                          showingClassName: n
                      });
            }),
            eL(this, 'renderChatToasts', () => {
                let { showChatToasts: e, chatOpen: t, channel: n, inCall: l } = this.props;
                return !e || t || (this.popoutOpen && !this.inPopout && l)
                    ? null
                    : (0, i.jsx)(eb.ZP, {
                          children: (0, i.jsx)(Y.Z, {
                              className: eR.chatToasts,
                              channelId: n.id
                          })
                      });
            }),
            eL(this, 'renderVoiceChannelEffects', () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, i.jsx)(ej.ZP, {
                    children: (0, i.jsx)(ei.Z, {
                        callHeight: t.height,
                        channelId: e.id
                    })
                });
            }),
            eL(this, 'renderHeader', () => {
                let { renderExternalHeader: e, channel: t, guild: n, appContext: l, chatOpen: r, inCall: a } = this.props,
                    { useExternalHeader: s, canSelectRegion: o, renderHeader: c } = this.viewProperties;
                return c
                    ? (0, i.jsxs)(K.Z, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: eR.headerWrapper,
                                  children: s
                                      ? null == e
                                          ? void 0
                                          : e()
                                      : (0, i.jsx)(eZ.Z, {
                                            channel: t,
                                            guild: n,
                                            appContext: l,
                                            inCall: a,
                                            isChatOpen: r || (this.popoutOpen && !this.inPopout && a),
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
    let { channel: n, renderExternalHeader: r, maxHeight: a } = e,
        { width: s = 0, ref: o } = (0, I.Z)(),
        { width: u = 0, height: p = 0, ref: m } = (0, I.Z)(),
        { ref: f } = (0, I.Z)(),
        g = (0, b.bp)(),
        C = (0, k.Z)(),
        v = (0, c.e7)([eu.Z], () => {
            var e;
            return (null !== (e = null == C ? void 0 : C.channelId) && void 0 !== e ? e : eu.Z.getVoiceChannelId()) === n.id;
        }),
        {
            participants: T,
            filteredParticipants: A,
            participantsVersion: P,
            mode: M,
            layout: O,
            participantsOpen: D,
            chatOpen: w,
            selectedParticipant: B
        } = (0, c.cj)(
            [e_.Z],
            () => {
                let e = g === eP.IlC.POPOUT,
                    t = e_.Z.getMode(n.id);
                e && (t = eP.WtW.VIDEO);
                let i = t === eP.WtW.VIDEO ? e_.Z.getLayout(n.id, g) : eP.AEg.MINIMUM;
                return (
                    e && i !== eP.AEg.FULL_SCREEN && (i = eP.AEg.NO_CHAT),
                    {
                        mode: t,
                        layout: i,
                        selectedParticipant: t !== eP.WtW.VOICE ? e_.Z.getSelectedParticipant(n.id) : null,
                        participants: e_.Z.getParticipants(n.id),
                        filteredParticipants: e_.Z.getFilteredParticipants(n.id),
                        participantsOpen: e_.Z.getParticipantsOpen(n.id),
                        chatOpen: e_.Z.getChatOpen(n.id),
                        participantsVersion: e_.Z.getParticipantsVersion(n.id)
                    }
                );
            },
            [g, n.id]
        ),
        H = (0, c.Wu)([el.Z], () => el.Z.getAllActiveStreams()),
        { selectedStream: F } = (0, c.cj)([el.Z], () => ({ selectedStream: null != B ? el.Z.getActiveStreamForStreamKey(B.id) : null }), [B]),
        V = (0, c.e7)([eo.Z], () => eo.Z.getGuild(n.getGuildId())),
        z = (0, c.e7)([es.Z], () => es.Z.getCall(n.id), [n.id]),
        W = (0, c.e7)([ed.ZP], () => ed.ZP.getMentionCount(n.id), [n.id]),
        K = (0, c.e7)([er.default], () => er.default.getId()),
        { popoutWindow: Y, popoutWindowAlwaysOnTop: q } = (0, c.cj)([U.Z], () => ({
            popoutWindow: U.Z.getWindow(eP.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: U.Z.getIsAlwaysOnTop(eP.KJ3.CHANNEL_CALL_POPOUT)
        })),
        X = (0, c.e7)([ec.Z], () => ec.Z.can(eP.Plq.CONNECT, n)),
        J = (0, c.e7)([ea.Z], () => ea.Z.getToastsEnabled(n.id)),
        Q = (0, c.e7)([L.Z], () => L.Z.getAwaitingRemoteSessionInfo()),
        $ = (0, c.e7)([G.ZP], () => G.ZP.callHeaderHeight),
        ee = l.useCallback((e) => {
            x.ZP.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        et = null !== (t = null == V ? void 0 : V.id) && void 0 !== t ? t : null,
        en = (0, S.Z)(et, n.id),
        ei = (0, c.e7)([N.Z], () => N.Z.getFetchState(), []),
        eh = (0, E.Z)(ei);
    l.useEffect(() => {
        ei === N.O.ERROR && eh !== N.O.ERROR && (0, h.showToast)((0, h.createToast)(eM.intl.string(eM.t.AlJyIy), h.ToastType.FAILURE));
    }, [ei, eh]);
    let ep = (0, c.e7)([Z.ZP], () => Z.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
    l.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                v && M === eP.WtW.VIDEO && ((t = await ex.ZP.blockDisplaySleep()), e && null != t && ex.ZP.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? ex.ZP.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [v, M]);
    let em = (0, eE.Z)(n, !0),
        ef = (0, R.bn)(d.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: eg } = (0, y.ZP)(j.Z.CHANNEL_CALL),
        eC = Z.ZP.getEmbeddedActivitiesForChannel(n.id);
    return (0, i.jsx)(y.Gt, {
        value: eg,
        children: (0, i.jsx)(_.Z, {
            page: eP.ZY5.CHANNEL_CALL,
            children: (0, i.jsx)(eb.B2, {
                children: (0, i.jsxs)(ej._A, {
                    children: [
                        (0, i.jsx)(eD, {
                            channel: n,
                            guild: V,
                            hasConnectPermission: X,
                            participantsOpen: D,
                            renderExternalHeader: r,
                            appContext: g,
                            call: z,
                            popoutWindow: Y,
                            popoutWindowAlwaysOnTop: q,
                            mentionCount: W,
                            selectedStream: F,
                            mode: M,
                            inCall: v,
                            participants: T,
                            filteredParticipants: A,
                            participantsVersion: P,
                            layout: O,
                            chatOpen: w,
                            maxSidebarWidth: s - 550,
                            shouldUseVoiceEffectsActionBar: em,
                            currentUserId: K,
                            selectedParticipant: B,
                            allActiveStreams: H,
                            useNewInviteButton: en,
                            connectedToEmbeddedActivity: null != ep,
                            showChatToasts: J,
                            storedCallHeaderHeight: $,
                            updateStoredCallHeaderHeight: ee,
                            wrapperRef: o,
                            callContainerDimensions: {
                                width: u,
                                height: p
                            },
                            callContainerRef: m,
                            channelChatRef: f,
                            width: s,
                            maxHeight: a,
                            forceShowControls: ef,
                            awaitingRemoteSessionInfo: Q,
                            currentChannelActivities: eC
                        }),
                        !n.isPrivate() && (0, i.jsx)(ej.YR, {}),
                        (0, i.jsx)(eb.H_, {})
                    ]
                })
            })
        })
    });
};
