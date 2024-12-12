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
    Z = n(636449),
    N = n(115130),
    S = n(317381),
    T = n(596040),
    j = n(349619),
    A = n(100527),
    y = n(367907),
    P = n(906732),
    M = n(560861),
    R = n(600164),
    L = n(211644),
    k = n(258609),
    O = n(446226),
    D = n(203341),
    w = n(569545),
    B = n(102172),
    U = n(788983),
    H = n(928518),
    G = n(703656),
    F = n(740492),
    V = n(793319),
    z = n(3861),
    W = n(493754),
    K = n(937995),
    Y = n(618158),
    q = n(880831),
    X = n(73563),
    J = n(751843),
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
    eZ = n(493010),
    eN = n(742603),
    eS = n(71127),
    eT = n(221888),
    ej = n(185935),
    eA = n(900211),
    ey = n(18759),
    eP = n(878752),
    eM = n(354459),
    eR = n(981631),
    eL = n(388032),
    ek = n(965676);
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
let eD = {
        [eR.AEg.NORMAL]: ek.normal,
        [eR.AEg.MINIMUM]: ek.minimum,
        [eR.AEg.NO_CHAT]: ek.noChat,
        [eR.AEg.FULL_SCREEN]: ek.fullScreen
    },
    ew = {
        [eR.IlC.POPOUT]: ek.popout,
        [eR.IlC.APP]: null,
        [eR.IlC.OVERLAY]: null
    };
class eB extends l.PureComponent {
    getRootNode() {
        var e, t;
        return (null !== (t = null === (e = this.props.popoutWindow) || void 0 === e ? void 0 : e.window) && void 0 !== t ? t : window).document.getElementById('app-mount');
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(ev.NO, this.handleFullScreenChange),
            em.default.track(eR.rMx.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? 'popout' : t,
                ...(0, y.AB)(e.id)
            });
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(), this.currentDocument.removeEventListener(ev.NO, this.handleFullScreenChange), !(this.inPopout && (0, eC.isMac)()) && this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: l } = this.props,
            r = this.getRootNode();
        if ((null != r && e.mode === eR.WtW.VIDEO && i === eR.WtW.VOICE && (0, ev.rB)(r, this.currentDocument) && (0, ev.Pr)(r, this.currentDocument), e.participantsOpen !== t || l !== e.layout)) {
            var a;
            null === (a = this._contentRef.current) || void 0 === a || a.triggerResize();
        }
        e.inCall && !n && this.inPopout && p.Z.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return eC.isPlatformEmbedded && ex.ZP.supportsFeature(eR.eRX.POPOUT_WINDOWS);
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
        return this.popoutOpen && !this.inPopout && this.props.inCall ? { mainText: eL.intl.string(eL.t.J5bXZW) } : null;
    }
    get paused() {
        return this.popoutOpen && !this.inPopout;
    }
    get inPopout() {
        return this.props.appContext === eR.IlC.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i } = this.props,
            l = t === eR.WtW.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            r = t === eR.WtW.VIDEO && i && this.popoutSupported,
            a = t !== eR.WtW.VOICE && n.isPrivate() && !this.inPopout && i,
            s = n.type === eR.d4z.GUILD_VOICE,
            o = e === eR.AEg.MINIMUM || e === eR.AEg.NORMAL,
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
            case eR.AEg.FULL_SCREEN:
                return {
                    ...d,
                    canPopout: !this.inPopout && this.popoutOpen && d.canPopout
                };
            case eR.AEg.MINIMUM:
                return {
                    ...d,
                    canPopout: !1,
                    useTheme: !0
                };
            case eR.AEg.NO_CHAT:
            case eR.AEg.NORMAL:
                return { ...d };
        }
    }
    renderContent(e) {
        var t;
        let { selectedParticipant: n, inCall: l, hasConnectPermission: r, mode: a, popoutWindow: s, participantsOpen: o, participants: c, filteredParticipants: d, participantsVersion: u, channel: h, guild: p, layout: m, forceShowControls: f, awaitingRemoteSessionInfo: g, currentChannelActivities: C, callContainerDimensions: x } = this.props,
            v = m === eR.AEg.MINIMUM,
            _ = v || m === eR.AEg.NORMAL,
            I = l && a === eR.WtW.VIDEO,
            E = (null !== (t = null == C ? void 0 : C.length) && void 0 !== t ? t : 0) > 0 && h.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, i.jsx)(X.Z, {
                renderHeader: this.renderHeader,
                renderBottomLeft: this.renderBottomLeft,
                renderBottomCenter: this.renderBottomCenter,
                renderBottomRight: this.renderBottomRight,
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
                                  (0, i.jsx)(M.Z, { channel: h }),
                                  (0, i.jsx)(z.Z, {
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
        let { layout: e, channel: t, guild: n, mode: l, chatOpen: r, appContext: s, maxSidebarWidth: o, maxHeight: c, inCall: d, participantsListOpen: u } = this.props,
            { resizedHeight: p } = this.state,
            m = l === eR.WtW.VIDEO,
            f = e !== eR.AEg.NO_CHAT && e !== eR.AEg.FULL_SCREEN && null != c;
        return (0, i.jsxs)('div', {
            className: a()(ek.wrapper, eD[e], ew[s], {
                [ek.poppedOut]: this.popoutOpen && !this.inPopout && e !== eR.AEg.NO_CHAT && t.isPrivate(),
                [ek.video]: m,
                [ek.sidebarOpen]: r || u
            }),
            ref: (e) => {
                (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
            },
            style:
                f && null != p
                    ? {
                          minHeight: 230,
                          maxHeight: c,
                          height: p
                      }
                    : void 0,
            children: [
                (0, i.jsx)(h.ThemeProvider, {
                    theme: m ? eR.BRd.DARK : void 0,
                    children: (e) =>
                        (0, i.jsx)('div', {
                            className: a()(ek.callContainer, e),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, i.jsx)(K.ZP, {
                                timeout: 2000,
                                children: (e) => this.renderContent(e)
                            })
                        })
                }),
                f &&
                    (0, i.jsx)(eA.Z, {
                        minHeight: 230,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight
                    }),
                (0, i.jsx)('div', {
                    className: ek.channelChatWrapper,
                    ref: (e) => {
                        (this._channelChatRef.current = e), (this.props.channelChatRef.current = e);
                    },
                    children:
                        (!d || !this.popoutOpen || this.inPopout) &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                r &&
                                    (0, i.jsx)(eZ.Z, {
                                        channel: t,
                                        guild: n,
                                        maxWidth: o
                                    }),
                                u &&
                                    (0, i.jsx)(eS.Z, {
                                        channel: t,
                                        maxWidth: o
                                    })
                            ]
                        })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            eO(this, '_prevLayout', eR.AEg.MINIMUM),
            eO(this, '_wrapperRef', l.createRef()),
            eO(this, '_callContainerRef', l.createRef()),
            eO(this, '_channelChatRef', l.createRef()),
            eO(this, '_contentRef', l.createRef()),
            eO(this, '_videoBackgroundTooltipTimeout', new u.V7()),
            eO(this, '_lastIdleProps', null),
            eO(this, 'state', { resizedHeight: F.ZP.callHeaderHeight }),
            eO(this, 'handleFullScreenChange', () => {
                let e = this.getRootNode();
                null != e && !(0, ev.rB)(e, this.currentDocument) && this.props.layout === eR.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eO(this, 'handleFullScreen', () => {
                let e = this.getRootNode();
                null != e && (this.props.layout !== eR.AEg.FULL_SCREEN ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eR.AEg.FULL_SCREEN), (0, ev.Dj)(e)) : this.maybeLeaveFullScreen());
            }),
            eO(this, 'maybeLeaveFullScreen', () => {
                let e = this.getRootNode();
                if (null != e) this.props.layout === eR.AEg.FULL_SCREEN && (this.handleChangeLayout(this._prevLayout), (0, ev.Pr)(e, this.currentDocument));
            }),
            eO(this, 'handleToggleLayout', () => {
                this.handleChangeLayout(this.props.layout === eR.AEg.NORMAL ? eR.AEg.NO_CHAT : eR.AEg.NORMAL);
            }),
            eO(this, 'handleChangeLayout', (e) => {
                let { channel: t, appContext: n, layout: i } = this.props;
                i !== e && (m.Z.updateLayout(t.id, e, n), e === eR.AEg.FULL_SCREEN && t.isPrivate() && eg.S.dispatch(eR.CkL.TEXTAREA_BLUR));
            }),
            eO(this, 'handleDisconnect', () => {
                this.props.layout === eR.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eO(this, 'handleContextMenu', (e, t) => {
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
                    case eM.fO.HIDDEN_STREAM:
                    case eM.fO.STREAM:
                        (0, f.jW)(
                            t,
                            async () => {
                                let { default: t } = await n.e('22183').then(n.bind(n, 987281));
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
                    case eM.fO.USER:
                        let u = eh.default.getUser(e.id);
                        if (null != u)
                            switch (a.type) {
                                case eR.d4z.DM:
                                    return (0, f.jW)(
                                        t,
                                        async () => {
                                            let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('70205'), n.e('56826'), n.e('95324')]).then(n.bind(n, 131404));
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
                                case eR.d4z.GROUP_DM:
                                    return (0, f.jW)(
                                        t,
                                        async () => {
                                            let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('8634')]).then(n.bind(n, 354589));
                                            return (t) =>
                                                (0, i.jsx)(e, {
                                                    ...t,
                                                    showChannelCallItems: !0,
                                                    showMediaItems: !0,
                                                    showChatItems: c === eR.AEg.MINIMUM || c === eR.AEg.NORMAL,
                                                    user: u,
                                                    channel: a,
                                                    showModalItems: !0
                                                });
                                        },
                                        d
                                    );
                                case eR.d4z.GUILD_VOICE:
                                case eR.d4z.PUBLIC_THREAD:
                                case eR.d4z.PRIVATE_THREAD:
                                    let h = a.getGuildId();
                                    return (
                                        o()(null != h, 'GuildID null for guild voice channel'),
                                        (0, f.jW)(
                                            t,
                                            async () => {
                                                let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('13125'), n.e('64899')]).then(n.bind(n, 757387));
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
            eO(this, 'handleCallResize', (e) => {
                this.setState({ resizedHeight: e });
            }),
            eO(this, 'handleSelectParticipant', (e, t) => {
                let { channel: n, selectedParticipant: i, allActiveStreams: l, inCall: r, mode: a } = this.props;
                (0, eM._5)(e) && (0, B.p9)(n, ep.Z, eo.Z, ec.Z, k.Z)[0] && (g.default.selectVoiceChannel(n.id), 0 === l.filter((t) => (0, w.V9)(t) === e.id && t.state !== eR.jm8.ENDED).length && (0, C.rn)((0, w.my)(e.id), { forceMultiple: t.shiftKey })), r && a === eR.WtW.VIDEO && ((null == i ? void 0 : i.id) === e.id ? m.Z.selectParticipant(n.id, null) : m.Z.selectParticipant(n.id, e.id));
            }),
            eO(this, 'handleOpenPopout', () => {
                let { channel: e, connectedToEmbeddedActivity: t } = this.props,
                    n = () => {
                        let t = e.getGuildId();
                        null != t && (0, G.uL)((0, ef.LY)(t)), U.hP(e);
                    };
                !t || (0, Z.R)() ? n() : (0, j.Z)(n);
            }),
            eO(this, 'handleStayOnTop', (e) => {
                U.hY(eR.KJ3.CHANNEL_CALL_POPOUT, e);
            }),
            eO(this, 'handleClosePopout', () => {
                U.xv(eR.KJ3.CHANNEL_CALL_POPOUT);
            }),
            eO(this, 'handleFullscreenParticipant', (e, t) => {
                let { layout: n, selectedParticipant: i } = this.props,
                    l = n === eR.AEg.FULL_SCREEN;
                ((!l && (null == i ? void 0 : i.id) !== e.id) || (l && (null == i ? void 0 : i.id) === e.id)) && this.handleSelectParticipant(e, t), this.handleFullScreen();
            }),
            eO(this, 'renderRegionSelect', () => {
                let e;
                let { call: t, channel: n, layout: l } = this.props;
                return (
                    !this.inPopout && l !== eR.AEg.FULL_SCREEN && null != t && !n.isManaged() && (e = (0, i.jsx)(v.Z, { call: t })),
                    (0, i.jsx)(R.Z, {
                        justify: R.Z.Justify.END,
                        children: e
                    })
                );
            }),
            eO(this, 'renderBottomCenter', () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === eR.AEg.MINIMUM || n === eR.AEg.NORMAL
                    ? (0, i.jsx)(V.ZP, {
                          exitFullScreen: this.maybeLeaveFullScreen,
                          channel: e,
                          onDisconnectCall: this.handleDisconnect,
                          idleProps: this._lastIdleProps
                      })
                    : null;
            }),
            eO(this, 'renderBottomLeft', () => {
                let { layout: e, mentionCount: t, channel: n, appContext: l, useNewInviteButton: r, selectedParticipant: s, shouldUseVoiceEffectsActionBar: o, inCall: c, participants: d } = this.props;
                if (!c) return null;
                let u = e === eR.AEg.NO_CHAT ? J.Z.Directions.UP : J.Z.Directions.DOWN,
                    p = [eR.AEg.FULL_SCREEN, eR.AEg.NO_CHAT].includes(e),
                    m = d.some((e) => e.type === eM.fO.STREAM),
                    f =
                        e === eR.AEg.FULL_SCREEN
                            ? () => {
                                  (this._prevLayout = eR.AEg.NORMAL), this.handleFullScreen();
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: g, canInvite: C } = this.viewProperties,
                    x = r
                        ? (0, i.jsx)(W.Z, {
                              channel: n,
                              stream: (null == s ? void 0 : s.type) === eM.fO.STREAM ? (0, w.my)(s.id) : void 0,
                              applicationId: (null == s ? void 0 : s.type) === eM.fO.ACTIVITY ? s.id : void 0,
                              appContext: l,
                              className: ek.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === eR.d4z.GUILD_VOICE ? eR.ZY5.GUILD_CHANNEL : eR.ZY5.DM_CHANNEL
                          })
                        : (0, i.jsx)($.Z, {
                              channel: n,
                              stream: (null == s ? void 0 : s.type) === eM.fO.STREAM ? (0, w.my)(s.id) : void 0,
                              className: ek.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === eR.d4z.GUILD_VOICE ? eR.ZY5.GUILD_CHANNEL : eR.ZY5.DM_CHANNEL
                          });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        C && !o ? x : null,
                        g
                            ? (0, i.jsxs)(R.Z, {
                                  className: ek.iconWrapper,
                                  align: R.Z.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, i.jsx)(J.Z, {
                                          label: p ? eL.intl.string(eL.t.kkKapK) : eL.intl.string(eL.t['5MstTk']),
                                          direction: u,
                                          className: ek.leftTrayIcon,
                                          onClick: f
                                      }),
                                      p && t > 0
                                          ? (0, i.jsx)(h.NumberBadge, {
                                                className: ek.badge,
                                                count: t
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        ((null == s ? void 0 : s.type) !== eM.fO.STREAM && (null == s ? void 0 : s.type) !== eM.fO.ACTIVITY) || o
                            ? null
                            : (0, i.jsx)(Y.Z, {
                                  children: (0, i.jsx)(eT.Z, {
                                      className: a()(ek.leftTrayIcon, ek.viewersButton),
                                      participant: s,
                                      maxVisibleUsers: 4,
                                      guildId: n.getGuildId(),
                                      channelId: n.id,
                                      disableInteraction: this.inPopout || e === eR.AEg.FULL_SCREEN
                                  })
                              }),
                        o &&
                            (0, i.jsx)(eP.Z, {
                                channel: n,
                                hasActiveStream: m,
                                themeable: this.viewProperties.useTheme
                            }),
                        (0, i.jsx)(D.Z, {
                            showLeftDivider: o,
                            themeable: this.viewProperties.useTheme,
                            className: ek.leftTrayIcon,
                            channel: n
                        })
                    ]
                });
            }),
            eO(this, 'renderBottomRight', () => {
                let { popoutWindow: e, popoutWindowAlwaysOnTop: t, currentUserId: n, selectedParticipant: l } = this.props,
                    { canFullscreen: r, canStayOnTop: a, canPopout: s, useTheme: o } = this.viewProperties;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        null != l && l.type !== eM.fO.ACTIVITY && l.user.id !== n
                            ? (0, i.jsx)(en.Z, {
                                  context: (0, eI.Z)(l.type),
                                  userId: l.user.id,
                                  currentWindow: this.inPopout ? (null != e ? e : void 0) : window,
                                  sliderClassName: ek.volumeSlider,
                                  className: ek.rightTrayIcon
                              })
                            : null,
                        a
                            ? (0, i.jsx)(et.Z, {
                                  className: ek.rightTrayIcon,
                                  popoutWindowAlwaysOnTop: t,
                                  onToggleStayOnTop: this.handleStayOnTop
                              })
                            : null,
                        s
                            ? (0, i.jsx)(ee.Z, {
                                  themeable: o,
                                  popoutOpen: this.popoutOpen,
                                  className: ek.rightTrayIcon,
                                  onOpenPopout: this.handleOpenPopout,
                                  onClosePopout: this.handleClosePopout
                              })
                            : null,
                        r
                            ? (0, i.jsx)(Q.Z, {
                                  themeable: o,
                                  node: this.getRootNode(),
                                  guestWindow: e,
                                  className: ek.rightTrayIcon,
                                  onClick: this.handleFullScreen
                              })
                            : null
                    ]
                });
            }),
            eO(this, 'renderChatToasts', () => {
                let { showChatToasts: e, chatOpen: t, channel: n, inCall: l } = this.props;
                return !e || t || (this.popoutOpen && !this.inPopout && l)
                    ? null
                    : (0, i.jsx)(eb.ZP, {
                          children: (0, i.jsx)(q.Z, {
                              className: ek.chatToasts,
                              channelId: n.id
                          })
                      });
            }),
            eO(this, 'renderVoiceChannelEffects', () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, i.jsx)(ey.ZP, {
                    children: (0, i.jsx)(ei.Z, {
                        callHeight: t.height,
                        channelId: e.id
                    })
                });
            }),
            eO(this, 'renderHeader', () => {
                let { renderExternalHeader: e, channel: t, guild: n, appContext: l, chatOpen: r, inCall: a } = this.props,
                    { useExternalHeader: s, canSelectRegion: o, renderHeader: c } = this.viewProperties;
                return c
                    ? (0, i.jsxs)(Y.Z, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: ek.headerWrapper,
                                  children: s
                                      ? null == e
                                          ? void 0
                                          : e()
                                      : (0, i.jsx)(eN.Z, {
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
        C = (0, O.Z)(),
        v = (0, c.e7)([eu.Z], () => {
            var e;
            return (null !== (e = null == C ? void 0 : C.channelId) && void 0 !== e ? e : eu.Z.getVoiceChannelId()) === n.id;
        }),
        {
            participants: Z,
            filteredParticipants: j,
            participantsVersion: y,
            mode: M,
            layout: R,
            participantsOpen: D,
            participantsListOpen: w,
            chatOpen: B,
            selectedParticipant: U
        } = (0, c.cj)(
            [e_.Z],
            () => {
                let e = g === eR.IlC.POPOUT,
                    t = e_.Z.getMode(n.id);
                e && (t = eR.WtW.VIDEO);
                let i = t === eR.WtW.VIDEO ? e_.Z.getLayout(n.id, g) : eR.AEg.MINIMUM;
                return (
                    e && i !== eR.AEg.FULL_SCREEN && (i = eR.AEg.NO_CHAT),
                    {
                        mode: t,
                        layout: i,
                        selectedParticipant: t !== eR.WtW.VOICE ? e_.Z.getSelectedParticipant(n.id) : null,
                        participants: e_.Z.getParticipants(n.id),
                        filteredParticipants: e_.Z.getFilteredParticipants(n.id),
                        participantsOpen: e_.Z.getParticipantsOpen(n.id),
                        chatOpen: e_.Z.getChatOpen(n.id),
                        participantsListOpen: e_.Z.getParticipantsListOpen(n.id),
                        participantsVersion: e_.Z.getParticipantsVersion(n.id)
                    }
                );
            },
            [g, n.id]
        ),
        G = (0, c.Wu)([el.Z], () => el.Z.getAllActiveStreams()),
        { selectedStream: V } = (0, c.cj)([el.Z], () => ({ selectedStream: null != U ? el.Z.getActiveStreamForStreamKey(U.id) : null }), [U]),
        z = (0, c.e7)([eo.Z], () => eo.Z.getGuild(n.getGuildId())),
        W = (0, c.e7)([es.Z], () => es.Z.getCall(n.id), [n.id]),
        K = (0, c.e7)([ed.ZP], () => ed.ZP.getMentionCount(n.id), [n.id]),
        Y = (0, c.e7)([er.default], () => er.default.getId()),
        { popoutWindow: q, popoutWindowAlwaysOnTop: X } = (0, c.cj)([H.Z], () => ({
            popoutWindow: H.Z.getWindow(eR.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: H.Z.getIsAlwaysOnTop(eR.KJ3.CHANNEL_CALL_POPOUT)
        })),
        J = (0, c.e7)([ec.Z], () => ec.Z.can(eR.Plq.CONNECT, n)),
        Q = (0, c.e7)([ea.Z], () => ea.Z.getToastsEnabled(n.id)),
        $ = (0, c.e7)([k.Z], () => k.Z.getAwaitingRemoteSessionInfo()),
        ee = (0, c.e7)([F.ZP], () => F.ZP.callHeaderHeight),
        et = l.useCallback((e) => {
            x.ZP.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        en = null !== (t = null == z ? void 0 : z.id) && void 0 !== t ? t : null,
        ei = (0, T.Z)(en, n.id),
        eh = (0, c.e7)([N.Z], () => N.Z.getFetchState(), []),
        ep = (0, E.Z)(eh);
    l.useEffect(() => {
        eh === N.O.ERROR && ep !== N.O.ERROR && (0, h.showToast)((0, h.createToast)(eL.intl.string(eL.t.AlJyIy), h.ToastType.FAILURE));
    }, [eh, ep]);
    let em = (0, c.e7)([S.ZP], () => S.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
    l.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                v && M === eR.WtW.VIDEO && ((t = await ex.ZP.blockDisplaySleep()), e && null != t && ex.ZP.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? ex.ZP.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [v, M]);
    let ef = (0, eE.Z)(n, !0),
        { hasParticipantsPanel: eg } = (0, ej.Z)({ location: 'ChannelCall' }),
        eC = (0, L.bn)(d.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: ev } = (0, P.ZP)(A.Z.CHANNEL_CALL),
        eI = S.ZP.getEmbeddedActivitiesForChannel(n.id);
    return (0, i.jsx)(P.Gt, {
        value: ev,
        children: (0, i.jsx)(_.Z, {
            page: eR.ZY5.CHANNEL_CALL,
            children: (0, i.jsx)(eb.B2, {
                children: (0, i.jsxs)(ey._A, {
                    children: [
                        (0, i.jsx)(eB, {
                            channel: n,
                            guild: z,
                            hasConnectPermission: J,
                            participantsOpen: D,
                            participantsListOpen: w && eg,
                            renderExternalHeader: r,
                            appContext: g,
                            call: W,
                            popoutWindow: q,
                            popoutWindowAlwaysOnTop: X,
                            mentionCount: K,
                            selectedStream: V,
                            mode: M,
                            inCall: v,
                            participants: Z,
                            filteredParticipants: j,
                            participantsVersion: y,
                            layout: R,
                            chatOpen: B,
                            maxSidebarWidth: s - 550,
                            shouldUseVoiceEffectsActionBar: ef,
                            currentUserId: Y,
                            selectedParticipant: U,
                            allActiveStreams: G,
                            useNewInviteButton: ei,
                            connectedToEmbeddedActivity: null != em,
                            showChatToasts: Q,
                            storedCallHeaderHeight: ee,
                            updateStoredCallHeaderHeight: et,
                            wrapperRef: o,
                            callContainerDimensions: {
                                width: u,
                                height: p
                            },
                            callContainerRef: m,
                            channelChatRef: f,
                            width: s,
                            maxHeight: a,
                            forceShowControls: eC,
                            awaitingRemoteSessionInfo: $,
                            currentChannelActivities: eI
                        }),
                        !n.isPrivate() && (0, i.jsx)(ey.YR, {}),
                        (0, i.jsx)(eb.H_, {})
                    ]
                })
            })
        })
    });
};
