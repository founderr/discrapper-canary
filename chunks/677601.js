n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
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
    T = n(596040),
    S = n(349619),
    j = n(100527),
    A = n(367907),
    y = n(906732),
    P = n(600164),
    M = n(211644),
    R = n(258609),
    L = n(446226),
    k = n(203341),
    O = n(569545),
    D = n(102172),
    w = n(788983),
    B = n(928518),
    U = n(703656),
    H = n(740492),
    G = n(793319),
    F = n(3861),
    V = n(493754),
    z = n(937995),
    W = n(618158),
    K = n(880831),
    Y = n(73563),
    q = n(751843),
    X = n(616286),
    J = n(268353),
    Q = n(786915),
    $ = n(800965),
    ee = n(107169),
    et = n(891551),
    en = n(488785),
    ei = n(199902),
    el = n(314897),
    ea = n(979696),
    er = n(523746),
    es = n(430824),
    eo = n(496675),
    ec = n(306680),
    ed = n(944486),
    eu = n(594174),
    eh = n(979651),
    ep = n(626135),
    em = n(934415),
    ef = n(585483),
    eg = n(358085),
    eC = n(998502),
    ex = n(228488),
    ev = n(358221),
    e_ = n(414910),
    eI = n(887012),
    eE = n(909820),
    eb = n(493010),
    eN = n(742603),
    eZ = n(221888),
    eT = n(900211),
    eS = n(18759),
    ej = n(878752),
    eA = n(354459),
    ey = n(981631),
    eP = n(388032),
    eM = n(374912);
function eR(e, t, n) {
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
let eL = {
        [ey.AEg.NORMAL]: eM.normal,
        [ey.AEg.MINIMUM]: eM.minimum,
        [ey.AEg.NO_CHAT]: eM.noChat,
        [ey.AEg.FULL_SCREEN]: eM.fullScreen
    },
    ek = {
        [ey.IlC.POPOUT]: eM.popout,
        [ey.IlC.APP]: null,
        [ey.IlC.OVERLAY]: null
    };
class eO extends l.PureComponent {
    getRootNode() {
        var e, t;
        return (null !== (t = null === (e = this.props.popoutWindow) || void 0 === e ? void 0 : e.window) && void 0 !== t ? t : window).document.getElementById('app-mount');
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(ex.NO, this.handleFullScreenChange),
            ep.default.track(ey.rMx.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? 'popout' : t,
                ...(0, A.AB)(e.id)
            });
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(), this.currentDocument.removeEventListener(ex.NO, this.handleFullScreenChange), !(this.inPopout && (0, eg.isMac)()) && this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: l } = this.props,
            a = this.getRootNode();
        if ((null != a && e.mode === ey.WtW.VIDEO && i === ey.WtW.VOICE && (0, ex.rB)(a, this.currentDocument) && (0, ex.Pr)(a, this.currentDocument), e.participantsOpen !== t || l !== e.layout)) {
            var r;
            null === (r = this._contentRef.current) || void 0 === r || r.triggerResize();
        }
        e.inCall && !n && this.inPopout && p.Z.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return eg.isPlatformEmbedded && eC.ZP.supportsFeature(ey.eRX.POPOUT_WINDOWS);
    }
    get popoutSupported() {
        return !eg.isPlatformEmbedded || this.nativePopoutSupported;
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
        return this.popoutOpen && !this.inPopout && this.props.inCall ? { mainText: eP.intl.string(eP.t.J5bXZW) } : null;
    }
    get paused() {
        return this.popoutOpen && !this.inPopout;
    }
    get inPopout() {
        return this.props.appContext === ey.IlC.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i } = this.props,
            l = t === ey.WtW.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            a = t === ey.WtW.VIDEO && i && this.popoutSupported,
            r = t !== ey.WtW.VOICE && n.isPrivate() && !this.inPopout && i,
            s = n.type === ey.d4z.GUILD_VOICE,
            o = e === ey.AEg.MINIMUM || e === ey.AEg.NORMAL,
            c = this.inPopout && this.nativePopoutSupported,
            d = {
                renderHeader: !0,
                useTheme: !1,
                useExternalHeader: o,
                canInvite: s,
                canPopout: a,
                canFullscreen: l,
                canSelectRegion: n.isPrivate(),
                canChangeLayout: r,
                canStayOnTop: c
            };
        if (!i)
            return {
                ...d,
                canFullscreen: l,
                useTheme: !0
            };
        switch (e) {
            case ey.AEg.FULL_SCREEN:
                return {
                    ...d,
                    canPopout: !this.inPopout && this.popoutOpen && d.canPopout
                };
            case ey.AEg.MINIMUM:
                return {
                    ...d,
                    canPopout: !1,
                    useTheme: !0
                };
            case ey.AEg.NO_CHAT:
            case ey.AEg.NORMAL:
                return { ...d };
        }
    }
    renderContent(e) {
        var t;
        let { selectedParticipant: n, inCall: l, hasConnectPermission: a, mode: r, popoutWindow: s, participantsOpen: o, participants: c, filteredParticipants: d, participantsVersion: u, channel: h, guild: p, layout: m, forceShowControls: f, awaitingRemoteSessionInfo: g, currentChannelActivities: C, callContainerDimensions: x } = this.props,
            v = m === ey.AEg.MINIMUM,
            _ = v || m === ey.AEg.NORMAL,
            I = l && r === ey.WtW.VIDEO,
            E = (null !== (t = null == C ? void 0 : C.length) && void 0 !== t ? t : 0) > 0 && h.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, i.jsx)(Y.Z, {
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
                        : (0, i.jsx)(F.Z, {
                              ref: this._contentRef,
                              inCall: l,
                              paused: this.paused,
                              channel: h,
                              hasConnectPermission: a,
                              guild: p,
                              participants: c,
                              filteredParticipants: d,
                              participantsVersion: u,
                              selectedParticipant: I ? n : null,
                              layout: m,
                              idle: e.idle,
                              mode: r,
                              onSelectParticipant: this.handleSelectParticipant,
                              onContextMenuParticipant: this.handleContextMenu,
                              showParticipants: o && (!_ || E),
                              popoutWindow: this.inPopout ? s : null,
                              awaitingRemoteSessionInfo: g,
                              callContainerDimensions: x
                          })
            })
        );
    }
    render() {
        let { layout: e, channel: t, guild: n, mode: l, chatOpen: a, appContext: s, maxSidebarWidth: o, maxHeight: c, inCall: d } = this.props,
            { resizedHeight: u } = this.state,
            p = l === ey.WtW.VIDEO,
            m = e !== ey.AEg.NO_CHAT && e !== ey.AEg.FULL_SCREEN && null != c;
        return (0, i.jsxs)('div', {
            className: r()(eM.wrapper, eL[e], ek[s], {
                [eM.poppedOut]: this.popoutOpen && !this.inPopout && e !== ey.AEg.NO_CHAT && t.isPrivate(),
                [eM.video]: p,
                [eM.chatSidebarOpen]: a
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
                    theme: p ? ey.BRd.DARK : void 0,
                    children: (e) =>
                        (0, i.jsx)('div', {
                            className: r()(eM.callContainer, e),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, i.jsx)(z.ZP, {
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
                    className: eM.channelChatWrapper,
                    ref: (e) => {
                        (this._channelChatRef.current = e), (this.props.channelChatRef.current = e);
                    },
                    children:
                        a &&
                        (!d || !this.popoutOpen || this.inPopout) &&
                        (0, i.jsx)(eb.Z, {
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
            eR(this, '_prevLayout', ey.AEg.MINIMUM),
            eR(this, '_wrapperRef', l.createRef()),
            eR(this, '_callContainerRef', l.createRef()),
            eR(this, '_channelChatRef', l.createRef()),
            eR(this, '_contentRef', l.createRef()),
            eR(this, '_videoBackgroundTooltipTimeout', new u.V7()),
            eR(this, '_lastIdleProps', null),
            eR(this, 'state', { resizedHeight: H.ZP.callHeaderHeight }),
            eR(this, 'handleFullScreenChange', () => {
                let e = this.getRootNode();
                null != e && !(0, ex.rB)(e, this.currentDocument) && this.props.layout === ey.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eR(this, 'handleFullScreen', () => {
                let e = this.getRootNode();
                null != e && (this.props.layout !== ey.AEg.FULL_SCREEN ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(ey.AEg.FULL_SCREEN), (0, ex.Dj)(e)) : this.maybeLeaveFullScreen());
            }),
            eR(this, 'maybeLeaveFullScreen', () => {
                let e = this.getRootNode();
                if (null != e) this.props.layout === ey.AEg.FULL_SCREEN && (this.handleChangeLayout(this._prevLayout), (0, ex.Pr)(e, this.currentDocument));
            }),
            eR(this, 'handleToggleLayout', () => {
                this.handleChangeLayout(this.props.layout === ey.AEg.NORMAL ? ey.AEg.NO_CHAT : ey.AEg.NORMAL);
            }),
            eR(this, 'handleChangeLayout', (e) => {
                let { channel: t, appContext: n, layout: i } = this.props;
                i !== e && (m.Z.updateLayout(t.id, e, n), e === ey.AEg.FULL_SCREEN && t.isPrivate() && ef.S.dispatch(ey.CkL.TEXTAREA_BLUR));
            }),
            eR(this, 'handleDisconnect', () => {
                this.props.layout === ey.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eR(this, 'handleContextMenu', (e, t) => {
                var l, a;
                let { channel: r, appContext: s, layout: c } = this.props,
                    d = {
                        onClose: () => {
                            var e;
                            return null === (e = this._lastIdleProps) || void 0 === e ? void 0 : e.onAllowIdle('menu');
                        },
                        context: s
                    };
                switch ((null === (l = this._lastIdleProps) || void 0 === l || l.onPreventIdle('menu'), null === (a = this._lastIdleProps) || void 0 === a || a.onActive(), e.type)) {
                    case eA.fO.HIDDEN_STREAM:
                    case eA.fO.STREAM:
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
                    case eA.fO.USER:
                        let u = eu.default.getUser(e.id);
                        if (null != u)
                            switch (r.type) {
                                case ey.d4z.DM:
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
                                                    channel: r,
                                                    showModalItems: !0
                                                });
                                        },
                                        d
                                    );
                                case ey.d4z.GROUP_DM:
                                    return (0, f.jW)(
                                        t,
                                        async () => {
                                            let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('18283')]).then(n.bind(n, 354589));
                                            return (t) =>
                                                (0, i.jsx)(e, {
                                                    ...t,
                                                    showChannelCallItems: !0,
                                                    showMediaItems: !0,
                                                    showChatItems: c === ey.AEg.MINIMUM || c === ey.AEg.NORMAL,
                                                    user: u,
                                                    channel: r,
                                                    showModalItems: !0
                                                });
                                        },
                                        d
                                    );
                                case ey.d4z.GUILD_VOICE:
                                    let h = r.getGuildId();
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
                                                        channel: r,
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
            eR(this, 'handleCallResize', (e) => {
                this.setState({ resizedHeight: e });
            }),
            eR(this, 'handleSelectParticipant', (e, t) => {
                let { channel: n, selectedParticipant: i, allActiveStreams: l, inCall: a, mode: r } = this.props;
                (0, eA._5)(e) && (0, D.p9)(n, eh.Z, es.Z, eo.Z, R.Z)[0] && (g.default.selectVoiceChannel(n.id), 0 === l.filter((t) => (0, O.V9)(t) === e.id && t.state !== ey.jm8.ENDED).length && (0, C.rn)((0, O.my)(e.id), { forceMultiple: t.shiftKey })), a && r === ey.WtW.VIDEO && ((null == i ? void 0 : i.id) === e.id ? m.Z.selectParticipant(n.id, null) : m.Z.selectParticipant(n.id, e.id));
            }),
            eR(this, 'handleOpenPopout', () => {
                let { channel: e, connectedToEmbeddedActivity: t } = this.props,
                    n = () => {
                        let t = e.getGuildId();
                        null != t && (0, U.uL)((0, em.LY)(t)), w.hP(e);
                    };
                t ? (0, S.Z)(n) : n();
            }),
            eR(this, 'handleStayOnTop', (e) => {
                w.hY(ey.KJ3.CHANNEL_CALL_POPOUT, e);
            }),
            eR(this, 'handleClosePopout', () => {
                w.xv(ey.KJ3.CHANNEL_CALL_POPOUT);
            }),
            eR(this, 'handleFullscreenParticipant', (e, t) => {
                let { layout: n, selectedParticipant: i } = this.props,
                    l = n === ey.AEg.FULL_SCREEN;
                ((!l && (null == i ? void 0 : i.id) !== e.id) || (l && (null == i ? void 0 : i.id) === e.id)) && this.handleSelectParticipant(e, t), this.handleFullScreen();
            }),
            eR(this, 'renderRegionSelect', () => {
                let e;
                let { call: t, channel: n, layout: l } = this.props;
                return (
                    !this.inPopout && l !== ey.AEg.FULL_SCREEN && null != t && !n.isManaged() && (e = (0, i.jsx)(v.Z, { call: t })),
                    (0, i.jsx)(P.Z, {
                        justify: P.Z.Justify.END,
                        children: e
                    })
                );
            }),
            eR(this, 'renderBottomCenter', () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === ey.AEg.MINIMUM || n === ey.AEg.NORMAL
                    ? (0, i.jsx)(G.ZP, {
                          exitFullScreen: this.maybeLeaveFullScreen,
                          channel: e,
                          onDisconnectCall: this.handleDisconnect,
                          idleProps: this._lastIdleProps
                      })
                    : null;
            }),
            eR(this, 'renderBottomLeft', () => {
                let { layout: e, mentionCount: t, channel: n, appContext: l, useNewInviteButton: a, selectedParticipant: s, shouldUseVoiceEffectsActionBar: o, inCall: c, participants: d } = this.props;
                if (!c) return null;
                let u = e === ey.AEg.NO_CHAT ? q.Z.Directions.UP : q.Z.Directions.DOWN,
                    p = [ey.AEg.FULL_SCREEN, ey.AEg.NO_CHAT].includes(e),
                    m = d.some((e) => e.type === eA.fO.STREAM),
                    f =
                        e === ey.AEg.FULL_SCREEN
                            ? () => {
                                  (this._prevLayout = ey.AEg.NORMAL), this.handleFullScreen();
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: g, canInvite: C } = this.viewProperties,
                    x = a
                        ? (0, i.jsx)(V.Z, {
                              channel: n,
                              stream: (null == s ? void 0 : s.type) === eA.fO.STREAM ? (0, O.my)(s.id) : void 0,
                              applicationId: (null == s ? void 0 : s.type) === eA.fO.ACTIVITY ? s.id : void 0,
                              appContext: l,
                              className: eM.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === ey.d4z.GUILD_VOICE ? ey.ZY5.GUILD_CHANNEL : ey.ZY5.DM_CHANNEL
                          })
                        : (0, i.jsx)(Q.Z, {
                              channel: n,
                              stream: (null == s ? void 0 : s.type) === eA.fO.STREAM ? (0, O.my)(s.id) : void 0,
                              className: eM.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === ey.d4z.GUILD_VOICE ? ey.ZY5.GUILD_CHANNEL : ey.ZY5.DM_CHANNEL
                          });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        C && !o ? x : null,
                        g
                            ? (0, i.jsxs)(P.Z, {
                                  className: eM.iconWrapper,
                                  align: P.Z.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, i.jsx)(q.Z, {
                                          label: p ? eP.intl.string(eP.t.kkKapK) : eP.intl.string(eP.t['5MstTk']),
                                          direction: u,
                                          className: eM.leftTrayIcon,
                                          onClick: f
                                      }),
                                      p && t > 0
                                          ? (0, i.jsx)(h.NumberBadge, {
                                                className: eM.badge,
                                                count: t
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        ((null == s ? void 0 : s.type) !== eA.fO.STREAM && (null == s ? void 0 : s.type) !== eA.fO.ACTIVITY) || o
                            ? null
                            : (0, i.jsx)(W.Z, {
                                  children: (0, i.jsx)(eZ.Z, {
                                      className: r()(eM.leftTrayIcon, eM.viewersButton),
                                      participant: s,
                                      maxVisibleUsers: 4,
                                      guildId: n.getGuildId(),
                                      channelId: n.id,
                                      disableInteraction: this.inPopout || e === ey.AEg.FULL_SCREEN
                                  })
                              }),
                        o &&
                            (0, i.jsx)(ej.Z, {
                                channel: n,
                                hasActiveStream: m,
                                themeable: this.viewProperties.useTheme
                            }),
                        (0, i.jsx)(k.Z, {
                            showLeftDivider: o,
                            themeable: this.viewProperties.useTheme,
                            className: eM.leftTrayIcon,
                            channel: n
                        })
                    ]
                });
            }),
            eR(this, 'renderBottomRight', () => {
                let { popoutWindow: e, popoutWindowAlwaysOnTop: t, currentUserId: n, selectedParticipant: l } = this.props,
                    { canFullscreen: a, canStayOnTop: r, canPopout: s, useTheme: o } = this.viewProperties;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        null != l && l.type !== eA.fO.ACTIVITY && l.user.id !== n
                            ? (0, i.jsx)(et.Z, {
                                  context: (0, e_.Z)(l.type),
                                  userId: l.user.id,
                                  currentWindow: this.inPopout ? (null != e ? e : void 0) : window,
                                  sliderClassName: eM.volumeSlider,
                                  className: eM.rightTrayIcon
                              })
                            : null,
                        r
                            ? (0, i.jsx)(ee.Z, {
                                  className: eM.rightTrayIcon,
                                  popoutWindowAlwaysOnTop: t,
                                  onToggleStayOnTop: this.handleStayOnTop
                              })
                            : null,
                        s
                            ? (0, i.jsx)($.Z, {
                                  themeable: o,
                                  popoutOpen: this.popoutOpen,
                                  className: eM.rightTrayIcon,
                                  onOpenPopout: this.handleOpenPopout,
                                  onClosePopout: this.handleClosePopout
                              })
                            : null,
                        a
                            ? (0, i.jsx)(J.Z, {
                                  themeable: o,
                                  node: this.getRootNode(),
                                  guestWindow: e,
                                  className: eM.rightTrayIcon,
                                  onClick: this.handleFullScreen
                              })
                            : null
                    ]
                });
            }),
            eR(this, 'renderChatButton', (e) => {
                let { className: t, showingClassName: n } = e,
                    { channel: l, chatOpen: a, inCall: r } = this.props;
                return a || (this.popoutOpen && !this.inPopout && r)
                    ? null
                    : (0, i.jsx)(X.T, {
                          channelId: l.id,
                          className: t,
                          showingClassName: n
                      });
            }),
            eR(this, 'renderChatToasts', () => {
                let { showChatToasts: e, chatOpen: t, channel: n, inCall: l } = this.props;
                return !e || t || (this.popoutOpen && !this.inPopout && l)
                    ? null
                    : (0, i.jsx)(eE.ZP, {
                          children: (0, i.jsx)(K.Z, {
                              className: eM.chatToasts,
                              channelId: n.id
                          })
                      });
            }),
            eR(this, 'renderVoiceChannelEffects', () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, i.jsx)(eS.ZP, {
                    children: (0, i.jsx)(en.Z, {
                        callHeight: t.height,
                        channelId: e.id
                    })
                });
            }),
            eR(this, 'renderHeader', () => {
                let { renderExternalHeader: e, channel: t, guild: n, appContext: l, chatOpen: a, inCall: r } = this.props,
                    { useExternalHeader: s, canSelectRegion: o, renderHeader: c } = this.viewProperties;
                return c
                    ? (0, i.jsxs)(W.Z, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: eM.headerWrapper,
                                  children: s
                                      ? null == e
                                          ? void 0
                                          : e()
                                      : (0, i.jsx)(eN.Z, {
                                            channel: t,
                                            guild: n,
                                            appContext: l,
                                            inCall: r,
                                            isChatOpen: a || (this.popoutOpen && !this.inPopout && r),
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
    let { channel: n, renderExternalHeader: a, maxHeight: r } = e,
        { width: s = 0, ref: o } = (0, I.Z)(),
        { width: u = 0, height: p = 0, ref: m } = (0, I.Z)(),
        { ref: f } = (0, I.Z)(),
        g = (0, b.bp)(),
        C = (0, L.Z)(),
        v = (0, c.e7)([ed.Z], () => {
            var e;
            return (null !== (e = null == C ? void 0 : C.channelId) && void 0 !== e ? e : ed.Z.getVoiceChannelId()) === n.id;
        }),
        {
            participants: S,
            filteredParticipants: A,
            participantsVersion: P,
            mode: k,
            layout: O,
            participantsOpen: D,
            chatOpen: w,
            selectedParticipant: U
        } = (0, c.cj)(
            [ev.Z],
            () => {
                let e = g === ey.IlC.POPOUT,
                    t = ev.Z.getMode(n.id);
                e && (t = ey.WtW.VIDEO);
                let i = t === ey.WtW.VIDEO ? ev.Z.getLayout(n.id, g) : ey.AEg.MINIMUM;
                return (
                    e && i !== ey.AEg.FULL_SCREEN && (i = ey.AEg.NO_CHAT),
                    {
                        mode: t,
                        layout: i,
                        selectedParticipant: t !== ey.WtW.VOICE ? ev.Z.getSelectedParticipant(n.id) : null,
                        participants: ev.Z.getParticipants(n.id),
                        filteredParticipants: ev.Z.getFilteredParticipants(n.id),
                        participantsOpen: ev.Z.getParticipantsOpen(n.id),
                        chatOpen: ev.Z.getChatOpen(n.id),
                        participantsVersion: ev.Z.getParticipantsVersion(n.id)
                    }
                );
            },
            [g, n.id]
        ),
        G = (0, c.Wu)([ei.Z], () => ei.Z.getAllActiveStreams()),
        { selectedStream: F } = (0, c.cj)([ei.Z], () => ({ selectedStream: null != U ? ei.Z.getActiveStreamForStreamKey(U.id) : null }), [U]),
        V = (0, c.e7)([es.Z], () => es.Z.getGuild(n.getGuildId())),
        z = (0, c.e7)([er.Z], () => er.Z.getCall(n.id), [n.id]),
        W = (0, c.e7)([ec.ZP], () => ec.ZP.getMentionCount(n.id), [n.id]),
        K = (0, c.e7)([el.default], () => el.default.getId()),
        { popoutWindow: Y, popoutWindowAlwaysOnTop: q } = (0, c.cj)([B.Z], () => ({
            popoutWindow: B.Z.getWindow(ey.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: B.Z.getIsAlwaysOnTop(ey.KJ3.CHANNEL_CALL_POPOUT)
        })),
        X = (0, c.e7)([eo.Z], () => eo.Z.can(ey.Plq.CONNECT, n)),
        J = (0, c.e7)([ea.Z], () => ea.Z.getToastsEnabled(n.id)),
        Q = (0, c.e7)([R.Z], () => R.Z.getAwaitingRemoteSessionInfo()),
        $ = (0, c.e7)([H.ZP], () => H.ZP.callHeaderHeight),
        ee = l.useCallback((e) => {
            x.ZP.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        et = null !== (t = null == V ? void 0 : V.id) && void 0 !== t ? t : null,
        en = (0, T.Z)(et, n.id),
        eu = (0, c.e7)([N.Z], () => N.Z.getFetchState(), []),
        eh = (0, E.Z)(eu);
    l.useEffect(() => {
        eu === N.O.ERROR && eh !== N.O.ERROR && (0, h.showToast)((0, h.createToast)(eP.intl.string(eP.t.AlJyIy), h.ToastType.FAILURE));
    }, [eu, eh]);
    let ep = (0, c.e7)([Z.ZP], () => Z.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
    l.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                v && k === ey.WtW.VIDEO && ((t = await eC.ZP.blockDisplaySleep()), e && null != t && eC.ZP.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? eC.ZP.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [v, k]);
    let em = (0, eI.Z)(n, !0),
        ef = (0, M.bn)(d.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: eg } = (0, y.ZP)(j.Z.CHANNEL_CALL),
        ex = Z.ZP.getEmbeddedActivitiesForChannel(n.id);
    return (0, i.jsx)(y.Gt, {
        value: eg,
        children: (0, i.jsx)(_.Z, {
            page: ey.ZY5.CHANNEL_CALL,
            children: (0, i.jsx)(eE.B2, {
                children: (0, i.jsxs)(eS._A, {
                    children: [
                        (0, i.jsx)(eO, {
                            channel: n,
                            guild: V,
                            hasConnectPermission: X,
                            participantsOpen: D,
                            renderExternalHeader: a,
                            appContext: g,
                            call: z,
                            popoutWindow: Y,
                            popoutWindowAlwaysOnTop: q,
                            mentionCount: W,
                            selectedStream: F,
                            mode: k,
                            inCall: v,
                            participants: S,
                            filteredParticipants: A,
                            participantsVersion: P,
                            layout: O,
                            chatOpen: w,
                            maxSidebarWidth: s - 550,
                            shouldUseVoiceEffectsActionBar: em,
                            currentUserId: K,
                            selectedParticipant: U,
                            allActiveStreams: G,
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
                            maxHeight: r,
                            forceShowControls: ef,
                            awaitingRemoteSessionInfo: Q,
                            currentChannelActivities: ex
                        }),
                        !n.isPrivate() && (0, i.jsx)(eS.YR, {}),
                        (0, i.jsx)(eE.H_, {})
                    ]
                })
            })
        })
    });
};
