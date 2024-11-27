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
    _ = n(944543),
    v = n(410575),
    I = n(393238),
    E = n(110924),
    b = n(40851),
    N = n(636449),
    Z = n(115130),
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
    Q = n(616286),
    $ = n(268353),
    ee = n(786915),
    et = n(800965),
    en = n(107169),
    ei = n(891551),
    el = n(488785),
    er = n(199902),
    ea = n(314897),
    es = n(979696),
    eo = n(523746),
    ec = n(430824),
    ed = n(496675),
    eu = n(306680),
    eh = n(944486),
    ep = n(594174),
    em = n(979651),
    ef = n(626135),
    eg = n(934415),
    eC = n(585483),
    ex = n(358085),
    e_ = n(998502),
    ev = n(228488),
    eI = n(358221),
    eE = n(414910),
    eb = n(887012),
    eN = n(909820),
    eZ = n(493010),
    eS = n(742603),
    eT = n(221888),
    ej = n(900211),
    eA = n(18759),
    ey = n(878752),
    eP = n(354459),
    eM = n(981631),
    eR = n(388032),
    eL = n(965676);
function ek(e, t, n) {
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
let eO = {
        [eM.AEg.NORMAL]: eL.normal,
        [eM.AEg.MINIMUM]: eL.minimum,
        [eM.AEg.NO_CHAT]: eL.noChat,
        [eM.AEg.FULL_SCREEN]: eL.fullScreen
    },
    eD = {
        [eM.IlC.POPOUT]: eL.popout,
        [eM.IlC.APP]: null,
        [eM.IlC.OVERLAY]: null
    };
class ew extends l.PureComponent {
    getRootNode() {
        var e, t;
        return (null !== (t = null === (e = this.props.popoutWindow) || void 0 === e ? void 0 : e.window) && void 0 !== t ? t : window).document.getElementById('app-mount');
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(ev.NO, this.handleFullScreenChange),
            ef.default.track(eM.rMx.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? 'popout' : t,
                ...(0, y.AB)(e.id)
            });
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(), this.currentDocument.removeEventListener(ev.NO, this.handleFullScreenChange), !(this.inPopout && (0, ex.isMac)()) && this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: l } = this.props,
            r = this.getRootNode();
        if ((null != r && e.mode === eM.WtW.VIDEO && i === eM.WtW.VOICE && (0, ev.rB)(r, this.currentDocument) && (0, ev.Pr)(r, this.currentDocument), e.participantsOpen !== t || l !== e.layout)) {
            var a;
            null === (a = this._contentRef.current) || void 0 === a || a.triggerResize();
        }
        e.inCall && !n && this.inPopout && p.Z.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return ex.isPlatformEmbedded && e_.ZP.supportsFeature(eM.eRX.POPOUT_WINDOWS);
    }
    get popoutSupported() {
        return !ex.isPlatformEmbedded || this.nativePopoutSupported;
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
        return this.popoutOpen && !this.inPopout && this.props.inCall ? { mainText: eR.intl.string(eR.t.J5bXZW) } : null;
    }
    get paused() {
        return this.popoutOpen && !this.inPopout;
    }
    get inPopout() {
        return this.props.appContext === eM.IlC.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i } = this.props,
            l = t === eM.WtW.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            r = t === eM.WtW.VIDEO && i && this.popoutSupported,
            a = t !== eM.WtW.VOICE && n.isPrivate() && !this.inPopout && i,
            s = n.type === eM.d4z.GUILD_VOICE,
            o = e === eM.AEg.MINIMUM || e === eM.AEg.NORMAL,
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
            case eM.AEg.FULL_SCREEN:
                return {
                    ...d,
                    canPopout: !this.inPopout && this.popoutOpen && d.canPopout
                };
            case eM.AEg.MINIMUM:
                return {
                    ...d,
                    canPopout: !1,
                    useTheme: !0
                };
            case eM.AEg.NO_CHAT:
            case eM.AEg.NORMAL:
                return { ...d };
        }
    }
    renderContent(e) {
        var t;
        let { selectedParticipant: n, inCall: l, hasConnectPermission: r, mode: a, popoutWindow: s, participantsOpen: o, participants: c, filteredParticipants: d, participantsVersion: u, channel: h, guild: p, layout: m, forceShowControls: f, awaitingRemoteSessionInfo: g, currentChannelActivities: C, callContainerDimensions: x } = this.props,
            _ = m === eM.AEg.MINIMUM,
            v = _ || m === eM.AEg.NORMAL,
            I = l && a === eM.WtW.VIDEO,
            E = (null !== (t = null == C ? void 0 : C.length) && void 0 !== t ? t : 0) > 0 && h.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, i.jsx)(X.Z, {
                renderHeader: this.renderHeader,
                renderBottomLeft: this.renderBottomLeft,
                renderBottomCenter: this.renderBottomCenter,
                renderBottomRight: this.renderBottomRight,
                renderChatButton: h.isGuildVoice() ? this.renderChatButton : void 0,
                renderChatToasts: h.isGuildVoice() ? this.renderChatToasts : void 0,
                renderVoiceChannelEffects: this.renderVoiceChannelEffects,
                ...e,
                screenMessage: this.screenMessage,
                disableGradients: _,
                idle: !f && l && !_ && e.idle,
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
                                      showParticipants: o && (!v || E),
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
            p = l === eM.WtW.VIDEO,
            m = e !== eM.AEg.NO_CHAT && e !== eM.AEg.FULL_SCREEN && null != c;
        return (0, i.jsxs)('div', {
            className: a()(eL.wrapper, eO[e], eD[s], {
                [eL.poppedOut]: this.popoutOpen && !this.inPopout && e !== eM.AEg.NO_CHAT && t.isPrivate(),
                [eL.video]: p,
                [eL.chatSidebarOpen]: r
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
                    theme: p ? eM.BRd.DARK : void 0,
                    children: (e) =>
                        (0, i.jsx)('div', {
                            className: a()(eL.callContainer, e),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, i.jsx)(K.ZP, {
                                timeout: 2000,
                                children: (e) => this.renderContent(e)
                            })
                        })
                }),
                m &&
                    (0, i.jsx)(ej.Z, {
                        minHeight: 230,
                        maxHeight: c,
                        resizableNode: this._wrapperRef,
                        onResize: this.handleCallResize,
                        onResizeEnd: this.props.updateStoredCallHeaderHeight
                    }),
                (0, i.jsx)('div', {
                    className: eL.channelChatWrapper,
                    ref: (e) => {
                        (this._channelChatRef.current = e), (this.props.channelChatRef.current = e);
                    },
                    children:
                        r &&
                        (!d || !this.popoutOpen || this.inPopout) &&
                        (0, i.jsx)(eZ.Z, {
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
            ek(this, '_prevLayout', eM.AEg.MINIMUM),
            ek(this, '_wrapperRef', l.createRef()),
            ek(this, '_callContainerRef', l.createRef()),
            ek(this, '_channelChatRef', l.createRef()),
            ek(this, '_contentRef', l.createRef()),
            ek(this, '_videoBackgroundTooltipTimeout', new u.V7()),
            ek(this, '_lastIdleProps', null),
            ek(this, 'state', { resizedHeight: F.ZP.callHeaderHeight }),
            ek(this, 'handleFullScreenChange', () => {
                let e = this.getRootNode();
                null != e && !(0, ev.rB)(e, this.currentDocument) && this.props.layout === eM.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            ek(this, 'handleFullScreen', () => {
                let e = this.getRootNode();
                null != e && (this.props.layout !== eM.AEg.FULL_SCREEN ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eM.AEg.FULL_SCREEN), (0, ev.Dj)(e)) : this.maybeLeaveFullScreen());
            }),
            ek(this, 'maybeLeaveFullScreen', () => {
                let e = this.getRootNode();
                if (null != e) this.props.layout === eM.AEg.FULL_SCREEN && (this.handleChangeLayout(this._prevLayout), (0, ev.Pr)(e, this.currentDocument));
            }),
            ek(this, 'handleToggleLayout', () => {
                this.handleChangeLayout(this.props.layout === eM.AEg.NORMAL ? eM.AEg.NO_CHAT : eM.AEg.NORMAL);
            }),
            ek(this, 'handleChangeLayout', (e) => {
                let { channel: t, appContext: n, layout: i } = this.props;
                i !== e && (m.Z.updateLayout(t.id, e, n), e === eM.AEg.FULL_SCREEN && t.isPrivate() && eC.S.dispatch(eM.CkL.TEXTAREA_BLUR));
            }),
            ek(this, 'handleDisconnect', () => {
                this.props.layout === eM.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            ek(this, 'handleContextMenu', (e, t) => {
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
                    case eP.fO.HIDDEN_STREAM:
                    case eP.fO.STREAM:
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
                    case eP.fO.USER:
                        let u = ep.default.getUser(e.id);
                        if (null != u)
                            switch (a.type) {
                                case eM.d4z.DM:
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
                                case eM.d4z.GROUP_DM:
                                    return (0, f.jW)(
                                        t,
                                        async () => {
                                            let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('8634')]).then(n.bind(n, 354589));
                                            return (t) =>
                                                (0, i.jsx)(e, {
                                                    ...t,
                                                    showChannelCallItems: !0,
                                                    showMediaItems: !0,
                                                    showChatItems: c === eM.AEg.MINIMUM || c === eM.AEg.NORMAL,
                                                    user: u,
                                                    channel: a,
                                                    showModalItems: !0
                                                });
                                        },
                                        d
                                    );
                                case eM.d4z.GUILD_VOICE:
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
            ek(this, 'handleCallResize', (e) => {
                this.setState({ resizedHeight: e });
            }),
            ek(this, 'handleSelectParticipant', (e, t) => {
                let { channel: n, selectedParticipant: i, allActiveStreams: l, inCall: r, mode: a } = this.props;
                (0, eP._5)(e) && (0, B.p9)(n, em.Z, ec.Z, ed.Z, k.Z)[0] && (g.default.selectVoiceChannel(n.id), 0 === l.filter((t) => (0, w.V9)(t) === e.id && t.state !== eM.jm8.ENDED).length && (0, C.rn)((0, w.my)(e.id), { forceMultiple: t.shiftKey })), r && a === eM.WtW.VIDEO && ((null == i ? void 0 : i.id) === e.id ? m.Z.selectParticipant(n.id, null) : m.Z.selectParticipant(n.id, e.id));
            }),
            ek(this, 'handleOpenPopout', () => {
                let { channel: e, connectedToEmbeddedActivity: t } = this.props,
                    n = () => {
                        let t = e.getGuildId();
                        null != t && (0, G.uL)((0, eg.LY)(t)), U.hP(e);
                    };
                !t || (0, N.R)() ? n() : (0, j.Z)(n);
            }),
            ek(this, 'handleStayOnTop', (e) => {
                U.hY(eM.KJ3.CHANNEL_CALL_POPOUT, e);
            }),
            ek(this, 'handleClosePopout', () => {
                U.xv(eM.KJ3.CHANNEL_CALL_POPOUT);
            }),
            ek(this, 'handleFullscreenParticipant', (e, t) => {
                let { layout: n, selectedParticipant: i } = this.props,
                    l = n === eM.AEg.FULL_SCREEN;
                ((!l && (null == i ? void 0 : i.id) !== e.id) || (l && (null == i ? void 0 : i.id) === e.id)) && this.handleSelectParticipant(e, t), this.handleFullScreen();
            }),
            ek(this, 'renderRegionSelect', () => {
                let e;
                let { call: t, channel: n, layout: l } = this.props;
                return (
                    !this.inPopout && l !== eM.AEg.FULL_SCREEN && null != t && !n.isManaged() && (e = (0, i.jsx)(_.Z, { call: t })),
                    (0, i.jsx)(R.Z, {
                        justify: R.Z.Justify.END,
                        children: e
                    })
                );
            }),
            ek(this, 'renderBottomCenter', () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === eM.AEg.MINIMUM || n === eM.AEg.NORMAL
                    ? (0, i.jsx)(V.ZP, {
                          exitFullScreen: this.maybeLeaveFullScreen,
                          channel: e,
                          onDisconnectCall: this.handleDisconnect,
                          idleProps: this._lastIdleProps
                      })
                    : null;
            }),
            ek(this, 'renderBottomLeft', () => {
                let { layout: e, mentionCount: t, channel: n, appContext: l, useNewInviteButton: r, selectedParticipant: s, shouldUseVoiceEffectsActionBar: o, inCall: c, participants: d } = this.props;
                if (!c) return null;
                let u = e === eM.AEg.NO_CHAT ? J.Z.Directions.UP : J.Z.Directions.DOWN,
                    p = [eM.AEg.FULL_SCREEN, eM.AEg.NO_CHAT].includes(e),
                    m = d.some((e) => e.type === eP.fO.STREAM),
                    f =
                        e === eM.AEg.FULL_SCREEN
                            ? () => {
                                  (this._prevLayout = eM.AEg.NORMAL), this.handleFullScreen();
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: g, canInvite: C } = this.viewProperties,
                    x = r
                        ? (0, i.jsx)(W.Z, {
                              channel: n,
                              stream: (null == s ? void 0 : s.type) === eP.fO.STREAM ? (0, w.my)(s.id) : void 0,
                              applicationId: (null == s ? void 0 : s.type) === eP.fO.ACTIVITY ? s.id : void 0,
                              appContext: l,
                              className: eL.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === eM.d4z.GUILD_VOICE ? eM.ZY5.GUILD_CHANNEL : eM.ZY5.DM_CHANNEL
                          })
                        : (0, i.jsx)(ee.Z, {
                              channel: n,
                              stream: (null == s ? void 0 : s.type) === eP.fO.STREAM ? (0, w.my)(s.id) : void 0,
                              className: eL.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === eM.d4z.GUILD_VOICE ? eM.ZY5.GUILD_CHANNEL : eM.ZY5.DM_CHANNEL
                          });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        C && !o ? x : null,
                        g
                            ? (0, i.jsxs)(R.Z, {
                                  className: eL.iconWrapper,
                                  align: R.Z.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, i.jsx)(J.Z, {
                                          label: p ? eR.intl.string(eR.t.kkKapK) : eR.intl.string(eR.t['5MstTk']),
                                          direction: u,
                                          className: eL.leftTrayIcon,
                                          onClick: f
                                      }),
                                      p && t > 0
                                          ? (0, i.jsx)(h.NumberBadge, {
                                                className: eL.badge,
                                                count: t
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        ((null == s ? void 0 : s.type) !== eP.fO.STREAM && (null == s ? void 0 : s.type) !== eP.fO.ACTIVITY) || o
                            ? null
                            : (0, i.jsx)(Y.Z, {
                                  children: (0, i.jsx)(eT.Z, {
                                      className: a()(eL.leftTrayIcon, eL.viewersButton),
                                      participant: s,
                                      maxVisibleUsers: 4,
                                      guildId: n.getGuildId(),
                                      channelId: n.id,
                                      disableInteraction: this.inPopout || e === eM.AEg.FULL_SCREEN
                                  })
                              }),
                        o &&
                            (0, i.jsx)(ey.Z, {
                                channel: n,
                                hasActiveStream: m,
                                themeable: this.viewProperties.useTheme
                            }),
                        (0, i.jsx)(D.Z, {
                            showLeftDivider: o,
                            themeable: this.viewProperties.useTheme,
                            className: eL.leftTrayIcon,
                            channel: n
                        })
                    ]
                });
            }),
            ek(this, 'renderBottomRight', () => {
                let { popoutWindow: e, popoutWindowAlwaysOnTop: t, currentUserId: n, selectedParticipant: l } = this.props,
                    { canFullscreen: r, canStayOnTop: a, canPopout: s, useTheme: o } = this.viewProperties;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        null != l && l.type !== eP.fO.ACTIVITY && l.user.id !== n
                            ? (0, i.jsx)(ei.Z, {
                                  context: (0, eE.Z)(l.type),
                                  userId: l.user.id,
                                  currentWindow: this.inPopout ? (null != e ? e : void 0) : window,
                                  sliderClassName: eL.volumeSlider,
                                  className: eL.rightTrayIcon
                              })
                            : null,
                        a
                            ? (0, i.jsx)(en.Z, {
                                  className: eL.rightTrayIcon,
                                  popoutWindowAlwaysOnTop: t,
                                  onToggleStayOnTop: this.handleStayOnTop
                              })
                            : null,
                        s
                            ? (0, i.jsx)(et.Z, {
                                  themeable: o,
                                  popoutOpen: this.popoutOpen,
                                  className: eL.rightTrayIcon,
                                  onOpenPopout: this.handleOpenPopout,
                                  onClosePopout: this.handleClosePopout
                              })
                            : null,
                        r
                            ? (0, i.jsx)($.Z, {
                                  themeable: o,
                                  node: this.getRootNode(),
                                  guestWindow: e,
                                  className: eL.rightTrayIcon,
                                  onClick: this.handleFullScreen
                              })
                            : null
                    ]
                });
            }),
            ek(this, 'renderChatButton', (e) => {
                let { className: t, showingClassName: n } = e,
                    { channel: l, chatOpen: r, inCall: a } = this.props;
                return r || (this.popoutOpen && !this.inPopout && a)
                    ? null
                    : (0, i.jsx)(Q.T, {
                          channelId: l.id,
                          className: t,
                          showingClassName: n
                      });
            }),
            ek(this, 'renderChatToasts', () => {
                let { showChatToasts: e, chatOpen: t, channel: n, inCall: l } = this.props;
                return !e || t || (this.popoutOpen && !this.inPopout && l)
                    ? null
                    : (0, i.jsx)(eN.ZP, {
                          children: (0, i.jsx)(q.Z, {
                              className: eL.chatToasts,
                              channelId: n.id
                          })
                      });
            }),
            ek(this, 'renderVoiceChannelEffects', () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, i.jsx)(eA.ZP, {
                    children: (0, i.jsx)(el.Z, {
                        callHeight: t.height,
                        channelId: e.id
                    })
                });
            }),
            ek(this, 'renderHeader', () => {
                let { renderExternalHeader: e, channel: t, guild: n, appContext: l, chatOpen: r, inCall: a } = this.props,
                    { useExternalHeader: s, canSelectRegion: o, renderHeader: c } = this.viewProperties;
                return c
                    ? (0, i.jsxs)(Y.Z, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: eL.headerWrapper,
                                  children: s
                                      ? null == e
                                          ? void 0
                                          : e()
                                      : (0, i.jsx)(eS.Z, {
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
        _ = (0, c.e7)([eh.Z], () => {
            var e;
            return (null !== (e = null == C ? void 0 : C.channelId) && void 0 !== e ? e : eh.Z.getVoiceChannelId()) === n.id;
        }),
        {
            participants: N,
            filteredParticipants: j,
            participantsVersion: y,
            mode: M,
            layout: R,
            participantsOpen: D,
            chatOpen: w,
            selectedParticipant: B
        } = (0, c.cj)(
            [eI.Z],
            () => {
                let e = g === eM.IlC.POPOUT,
                    t = eI.Z.getMode(n.id);
                e && (t = eM.WtW.VIDEO);
                let i = t === eM.WtW.VIDEO ? eI.Z.getLayout(n.id, g) : eM.AEg.MINIMUM;
                return (
                    e && i !== eM.AEg.FULL_SCREEN && (i = eM.AEg.NO_CHAT),
                    {
                        mode: t,
                        layout: i,
                        selectedParticipant: t !== eM.WtW.VOICE ? eI.Z.getSelectedParticipant(n.id) : null,
                        participants: eI.Z.getParticipants(n.id),
                        filteredParticipants: eI.Z.getFilteredParticipants(n.id),
                        participantsOpen: eI.Z.getParticipantsOpen(n.id),
                        chatOpen: eI.Z.getChatOpen(n.id),
                        participantsVersion: eI.Z.getParticipantsVersion(n.id)
                    }
                );
            },
            [g, n.id]
        ),
        U = (0, c.Wu)([er.Z], () => er.Z.getAllActiveStreams()),
        { selectedStream: G } = (0, c.cj)([er.Z], () => ({ selectedStream: null != B ? er.Z.getActiveStreamForStreamKey(B.id) : null }), [B]),
        V = (0, c.e7)([ec.Z], () => ec.Z.getGuild(n.getGuildId())),
        z = (0, c.e7)([eo.Z], () => eo.Z.getCall(n.id), [n.id]),
        W = (0, c.e7)([eu.ZP], () => eu.ZP.getMentionCount(n.id), [n.id]),
        K = (0, c.e7)([ea.default], () => ea.default.getId()),
        { popoutWindow: Y, popoutWindowAlwaysOnTop: q } = (0, c.cj)([H.Z], () => ({
            popoutWindow: H.Z.getWindow(eM.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: H.Z.getIsAlwaysOnTop(eM.KJ3.CHANNEL_CALL_POPOUT)
        })),
        X = (0, c.e7)([ed.Z], () => ed.Z.can(eM.Plq.CONNECT, n)),
        J = (0, c.e7)([es.Z], () => es.Z.getToastsEnabled(n.id)),
        Q = (0, c.e7)([k.Z], () => k.Z.getAwaitingRemoteSessionInfo()),
        $ = (0, c.e7)([F.ZP], () => F.ZP.callHeaderHeight),
        ee = l.useCallback((e) => {
            x.ZP.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        et = null !== (t = null == V ? void 0 : V.id) && void 0 !== t ? t : null,
        en = (0, T.Z)(et, n.id),
        ei = (0, c.e7)([Z.Z], () => Z.Z.getFetchState(), []),
        el = (0, E.Z)(ei);
    l.useEffect(() => {
        ei === Z.O.ERROR && el !== Z.O.ERROR && (0, h.showToast)((0, h.createToast)(eR.intl.string(eR.t.AlJyIy), h.ToastType.FAILURE));
    }, [ei, el]);
    let ep = (0, c.e7)([S.ZP], () => S.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
    l.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                _ && M === eM.WtW.VIDEO && ((t = await e_.ZP.blockDisplaySleep()), e && null != t && e_.ZP.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? e_.ZP.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [_, M]);
    let em = (0, eb.Z)(n, !0),
        ef = (0, L.bn)(d.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: eg } = (0, P.ZP)(A.Z.CHANNEL_CALL),
        eC = S.ZP.getEmbeddedActivitiesForChannel(n.id);
    return (0, i.jsx)(P.Gt, {
        value: eg,
        children: (0, i.jsx)(v.Z, {
            page: eM.ZY5.CHANNEL_CALL,
            children: (0, i.jsx)(eN.B2, {
                children: (0, i.jsxs)(eA._A, {
                    children: [
                        (0, i.jsx)(ew, {
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
                            selectedStream: G,
                            mode: M,
                            inCall: _,
                            participants: N,
                            filteredParticipants: j,
                            participantsVersion: y,
                            layout: R,
                            chatOpen: w,
                            maxSidebarWidth: s - 550,
                            shouldUseVoiceEffectsActionBar: em,
                            currentUserId: K,
                            selectedParticipant: B,
                            allActiveStreams: U,
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
                        !n.isPrivate() && (0, i.jsx)(eA.YR, {}),
                        (0, i.jsx)(eN.H_, {})
                    ]
                })
            })
        })
    });
};
