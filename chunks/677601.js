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
    h = n(780384),
    p = n(481060),
    m = n(570140),
    f = n(475179),
    g = n(239091),
    C = n(287734),
    x = n(872810),
    v = n(153867),
    _ = n(944543),
    I = n(410575),
    E = n(393238),
    b = n(110924),
    Z = n(40851),
    N = n(636449),
    S = n(115130),
    T = n(317381),
    j = n(596040),
    A = n(349619),
    y = n(100527),
    P = n(367907),
    M = n(906732),
    R = n(560861),
    L = n(600164),
    k = n(211644),
    O = n(258609),
    D = n(446226),
    w = n(203341),
    B = n(569545),
    U = n(102172),
    H = n(788983),
    G = n(928518),
    F = n(703656),
    V = n(740492),
    z = n(793319),
    W = n(3861),
    K = n(493754),
    Y = n(937995),
    q = n(618158),
    X = n(880831),
    J = n(73563),
    Q = n(751843),
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
    ev = n(998502),
    e_ = n(228488),
    eI = n(358221),
    eE = n(414910),
    eb = n(887012),
    eZ = n(909820),
    eN = n(493010),
    eS = n(742603),
    eT = n(71127),
    ej = n(221888),
    eA = n(185935),
    ey = n(900211),
    eP = n(18759),
    eM = n(878752),
    eR = n(354459),
    eL = n(981631),
    ek = n(388032),
    eO = n(965676);
function eD(e, t, n) {
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
let ew = {
        [eL.AEg.NORMAL]: eO.normal,
        [eL.AEg.MINIMUM]: eO.minimum,
        [eL.AEg.NO_CHAT]: eO.noChat,
        [eL.AEg.FULL_SCREEN]: eO.fullScreen
    },
    eB = {
        [eL.IlC.POPOUT]: eO.popout,
        [eL.IlC.APP]: null,
        [eL.IlC.OVERLAY]: null
    };
class eU extends l.PureComponent {
    getRootNode() {
        var e, t;
        return (null !== (t = null === (e = this.props.popoutWindow) || void 0 === e ? void 0 : e.window) && void 0 !== t ? t : window).document.getElementById('app-mount');
    }
    componentDidMount() {
        let { channel: e, layout: t } = this.props;
        this.currentDocument.addEventListener(e_.NO, this.handleFullScreenChange),
            ef.default.track(eL.rMx.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? 'popout' : t,
                ...(0, P.AB)(e.id)
            });
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(), this.currentDocument.removeEventListener(e_.NO, this.handleFullScreenChange), !(this.inPopout && (0, ex.isMac)()) && this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: l } = this.props,
            r = this.getRootNode();
        if ((null != r && e.mode === eL.WtW.VIDEO && i === eL.WtW.VOICE && (0, e_.rB)(r, this.currentDocument) && (0, e_.Pr)(r, this.currentDocument), e.participantsOpen !== t || l !== e.layout)) {
            var a;
            null === (a = this._contentRef.current) || void 0 === a || a.triggerResize();
        }
        e.inCall && !n && this.inPopout && m.Z.wait(() => this.handleClosePopout());
    }
    get nativePopoutSupported() {
        return ex.isPlatformEmbedded && ev.ZP.supportsFeature(eL.eRX.POPOUT_WINDOWS);
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
        return this.popoutOpen && !this.inPopout && this.props.inCall ? { mainText: ek.intl.string(ek.t.J5bXZW) } : null;
    }
    get paused() {
        return this.popoutOpen && !this.inPopout;
    }
    get inPopout() {
        return this.props.appContext === eL.IlC.POPOUT;
    }
    get viewProperties() {
        let { layout: e, mode: t, channel: n, inCall: i } = this.props,
            l = t === eL.WtW.VIDEO && i && !(this.popoutOpen && !this.inPopout),
            r = t === eL.WtW.VIDEO && i && this.popoutSupported,
            a = t !== eL.WtW.VOICE && n.isPrivate() && !this.inPopout && i,
            s = n.type === eL.d4z.GUILD_VOICE,
            o = e === eL.AEg.MINIMUM || e === eL.AEg.NORMAL,
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
            case eL.AEg.FULL_SCREEN:
                return {
                    ...d,
                    canPopout: !this.inPopout && this.popoutOpen && d.canPopout
                };
            case eL.AEg.MINIMUM:
                return {
                    ...d,
                    canPopout: !1,
                    useTheme: !0
                };
            case eL.AEg.NO_CHAT:
            case eL.AEg.NORMAL:
                return { ...d };
        }
    }
    renderContent(e) {
        var t;
        let { selectedParticipant: n, inCall: l, hasConnectPermission: r, mode: a, popoutWindow: s, participantsOpen: o, participants: c, filteredParticipants: d, participantsVersion: u, channel: h, guild: p, layout: m, forceShowControls: f, awaitingRemoteSessionInfo: g, currentChannelActivities: C, callContainerDimensions: x } = this.props,
            v = m === eL.AEg.MINIMUM,
            _ = v || m === eL.AEg.NORMAL,
            I = l && a === eL.WtW.VIDEO,
            E = (null !== (t = null == C ? void 0 : C.length) && void 0 !== t ? t : 0) > 0 && h.isPrivate();
        return (
            (this._lastIdleProps = e),
            (0, i.jsx)(J.Z, {
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
                                  (0, i.jsx)(R.Z, { channel: h }),
                                  (0, i.jsx)(W.Z, {
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
        let { layout: e, channel: t, guild: n, mode: l, chatOpen: r, appContext: s, maxSidebarWidth: o, maxHeight: c, inCall: d, participantsListOpen: u, theme: m } = this.props,
            { resizedHeight: f } = this.state,
            g = l === eL.WtW.VIDEO,
            C = e !== eL.AEg.NO_CHAT && e !== eL.AEg.FULL_SCREEN && null != c,
            x = g ? ((0, h.ap)(m) ? eL.BRd.DARK : m) : void 0;
        return (0, i.jsxs)('div', {
            className: a()(eO.wrapper, ew[e], eB[s], {
                [eO.poppedOut]: this.popoutOpen && !this.inPopout && e !== eL.AEg.NO_CHAT && t.isPrivate(),
                [eO.video]: g,
                [eO.sidebarOpen]: r || u
            }),
            ref: (e) => {
                (this._wrapperRef.current = e), (this.props.wrapperRef.current = e);
            },
            style:
                C && null != f
                    ? {
                          minHeight: 230,
                          maxHeight: c,
                          height: f
                      }
                    : void 0,
            children: [
                (0, i.jsx)(p.ThemeProvider, {
                    theme: x,
                    children: (e) =>
                        (0, i.jsx)('div', {
                            className: a()(eO.callContainer, e),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, i.jsx)(Y.ZP, {
                                timeout: 2000,
                                children: (e) => this.renderContent(e)
                            })
                        })
                }),
                C &&
                    (0, i.jsx)(ey.Z, {
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
                        (!d || !this.popoutOpen || this.inPopout) &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                r &&
                                    (0, i.jsx)(eN.Z, {
                                        channel: t,
                                        guild: n,
                                        maxWidth: o
                                    }),
                                u &&
                                    (0, i.jsx)(eT.Z, {
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
            eD(this, '_prevLayout', eL.AEg.MINIMUM),
            eD(this, '_wrapperRef', l.createRef()),
            eD(this, '_callContainerRef', l.createRef()),
            eD(this, '_channelChatRef', l.createRef()),
            eD(this, '_contentRef', l.createRef()),
            eD(this, '_videoBackgroundTooltipTimeout', new u.V7()),
            eD(this, '_lastIdleProps', null),
            eD(this, 'state', { resizedHeight: V.ZP.callHeaderHeight }),
            eD(this, 'handleFullScreenChange', () => {
                let e = this.getRootNode();
                null != e && !(0, e_.rB)(e, this.currentDocument) && this.props.layout === eL.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eD(this, 'handleFullScreen', () => {
                let e = this.getRootNode();
                null != e && (this.props.layout !== eL.AEg.FULL_SCREEN ? ((this._prevLayout = this.props.layout), this.handleChangeLayout(eL.AEg.FULL_SCREEN), (0, e_.Dj)(e)) : this.maybeLeaveFullScreen());
            }),
            eD(this, 'maybeLeaveFullScreen', () => {
                let e = this.getRootNode();
                if (null != e) this.props.layout === eL.AEg.FULL_SCREEN && (this.handleChangeLayout(this._prevLayout), (0, e_.Pr)(e, this.currentDocument));
            }),
            eD(this, 'handleToggleLayout', () => {
                this.handleChangeLayout(this.props.layout === eL.AEg.NORMAL ? eL.AEg.NO_CHAT : eL.AEg.NORMAL);
            }),
            eD(this, 'handleChangeLayout', (e) => {
                let { channel: t, appContext: n, layout: i } = this.props;
                i !== e && (f.Z.updateLayout(t.id, e, n), e === eL.AEg.FULL_SCREEN && t.isPrivate() && eC.S.dispatch(eL.CkL.TEXTAREA_BLUR));
            }),
            eD(this, 'handleDisconnect', () => {
                this.props.layout === eL.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eD(this, 'handleContextMenu', (e, t) => {
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
                    case eR.fO.HIDDEN_STREAM:
                    case eR.fO.STREAM:
                        (0, g.jW)(
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
                    case eR.fO.USER:
                        let u = ep.default.getUser(e.id);
                        if (null != u)
                            switch (a.type) {
                                case eL.d4z.DM:
                                    return (0, g.jW)(
                                        t,
                                        async () => {
                                            let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('92453'), n.e('56826'), n.e('95324')]).then(n.bind(n, 131404));
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
                                case eL.d4z.GROUP_DM:
                                    return (0, g.jW)(
                                        t,
                                        async () => {
                                            let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('8634')]).then(n.bind(n, 354589));
                                            return (t) =>
                                                (0, i.jsx)(e, {
                                                    ...t,
                                                    showChannelCallItems: !0,
                                                    showMediaItems: !0,
                                                    showChatItems: c === eL.AEg.MINIMUM || c === eL.AEg.NORMAL,
                                                    user: u,
                                                    channel: a,
                                                    showModalItems: !0
                                                });
                                        },
                                        d
                                    );
                                case eL.d4z.GUILD_VOICE:
                                case eL.d4z.PUBLIC_THREAD:
                                case eL.d4z.PRIVATE_THREAD:
                                    let h = a.getGuildId();
                                    return (
                                        o()(null != h, 'GuildID null for guild voice channel'),
                                        (0, g.jW)(
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
            eD(this, 'handleCallResize', (e) => {
                this.setState({ resizedHeight: e });
            }),
            eD(this, 'handleSelectParticipant', (e, t) => {
                let { channel: n, selectedParticipant: i, allActiveStreams: l, inCall: r, mode: a } = this.props;
                (0, eR._5)(e) && (0, U.p9)(n, em.Z, ec.Z, ed.Z, O.Z)[0] && (C.default.selectVoiceChannel(n.id), 0 === l.filter((t) => (0, B.V9)(t) === e.id && t.state !== eL.jm8.ENDED).length && (0, x.rn)((0, B.my)(e.id), { forceMultiple: t.shiftKey })), r && a === eL.WtW.VIDEO && ((null == i ? void 0 : i.id) === e.id ? f.Z.selectParticipant(n.id, null) : f.Z.selectParticipant(n.id, e.id));
            }),
            eD(this, 'handleOpenPopout', () => {
                let { channel: e, connectedToEmbeddedActivity: t } = this.props,
                    n = () => {
                        let t = e.getGuildId();
                        null != t && (0, F.uL)((0, eg.LY)(t)), H.hP(e);
                    };
                !t || (0, N.R)() ? n() : (0, A.Z)(n);
            }),
            eD(this, 'handleStayOnTop', (e) => {
                H.hY(eL.KJ3.CHANNEL_CALL_POPOUT, e);
            }),
            eD(this, 'handleClosePopout', () => {
                H.xv(eL.KJ3.CHANNEL_CALL_POPOUT);
            }),
            eD(this, 'handleFullscreenParticipant', (e, t) => {
                let { layout: n, selectedParticipant: i } = this.props,
                    l = n === eL.AEg.FULL_SCREEN;
                ((!l && (null == i ? void 0 : i.id) !== e.id) || (l && (null == i ? void 0 : i.id) === e.id)) && this.handleSelectParticipant(e, t), this.handleFullScreen();
            }),
            eD(this, 'renderRegionSelect', () => {
                let e;
                let { call: t, channel: n, layout: l } = this.props;
                return (
                    !this.inPopout && l !== eL.AEg.FULL_SCREEN && null != t && !n.isManaged() && (e = (0, i.jsx)(_.Z, { call: t })),
                    (0, i.jsx)(L.Z, {
                        justify: L.Z.Justify.END,
                        children: e
                    })
                );
            }),
            eD(this, 'renderBottomCenter', () => {
                let { channel: e, inCall: t, layout: n } = this.props;
                return t || n === eL.AEg.MINIMUM || n === eL.AEg.NORMAL
                    ? (0, i.jsx)(z.ZP, {
                          exitFullScreen: this.maybeLeaveFullScreen,
                          channel: e,
                          onDisconnectCall: this.handleDisconnect,
                          idleProps: this._lastIdleProps
                      })
                    : null;
            }),
            eD(this, 'renderBottomLeft', () => {
                let { layout: e, mentionCount: t, channel: n, appContext: l, useNewInviteButton: r, selectedParticipant: s, shouldUseVoiceEffectsActionBar: o, inCall: c, participants: d } = this.props;
                if (!c) return null;
                let u = e === eL.AEg.NO_CHAT ? Q.Z.Directions.UP : Q.Z.Directions.DOWN,
                    h = [eL.AEg.FULL_SCREEN, eL.AEg.NO_CHAT].includes(e),
                    m = d.some((e) => e.type === eR.fO.STREAM),
                    f =
                        e === eL.AEg.FULL_SCREEN
                            ? () => {
                                  (this._prevLayout = eL.AEg.NORMAL), this.handleFullScreen();
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: g, canInvite: C } = this.viewProperties,
                    x = r
                        ? (0, i.jsx)(K.Z, {
                              channel: n,
                              stream: (null == s ? void 0 : s.type) === eR.fO.STREAM ? (0, B.my)(s.id) : void 0,
                              applicationId: (null == s ? void 0 : s.type) === eR.fO.ACTIVITY ? s.id : void 0,
                              appContext: l,
                              className: eO.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === eL.d4z.GUILD_VOICE ? eL.ZY5.GUILD_CHANNEL : eL.ZY5.DM_CHANNEL
                          })
                        : (0, i.jsx)(ee.Z, {
                              channel: n,
                              stream: (null == s ? void 0 : s.type) === eR.fO.STREAM ? (0, B.my)(s.id) : void 0,
                              className: eO.leftTrayIcon,
                              exitFullScreen: this.maybeLeaveFullScreen,
                              analyticsLocation: n.type === eL.d4z.GUILD_VOICE ? eL.ZY5.GUILD_CHANNEL : eL.ZY5.DM_CHANNEL
                          });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        C && !o ? x : null,
                        g
                            ? (0, i.jsxs)(L.Z, {
                                  className: eO.iconWrapper,
                                  align: L.Z.Align.CENTER,
                                  grow: 0,
                                  children: [
                                      (0, i.jsx)(Q.Z, {
                                          label: h ? ek.intl.string(ek.t.kkKapK) : ek.intl.string(ek.t['5MstTk']),
                                          direction: u,
                                          className: eO.leftTrayIcon,
                                          onClick: f
                                      }),
                                      h && t > 0
                                          ? (0, i.jsx)(p.NumberBadge, {
                                                className: eO.badge,
                                                count: t
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        ((null == s ? void 0 : s.type) !== eR.fO.STREAM && (null == s ? void 0 : s.type) !== eR.fO.ACTIVITY) || o
                            ? null
                            : (0, i.jsx)(q.Z, {
                                  children: (0, i.jsx)(ej.Z, {
                                      className: a()(eO.leftTrayIcon, eO.viewersButton),
                                      participant: s,
                                      maxVisibleUsers: 4,
                                      guildId: n.getGuildId(),
                                      channelId: n.id,
                                      disableInteraction: this.inPopout || e === eL.AEg.FULL_SCREEN
                                  })
                              }),
                        o &&
                            (0, i.jsx)(eM.Z, {
                                channel: n,
                                hasActiveStream: m,
                                themeable: this.viewProperties.useTheme
                            }),
                        (0, i.jsx)(w.Z, {
                            showLeftDivider: o,
                            themeable: this.viewProperties.useTheme,
                            className: eO.leftTrayIcon,
                            channel: n
                        })
                    ]
                });
            }),
            eD(this, 'renderBottomRight', () => {
                let { popoutWindow: e, popoutWindowAlwaysOnTop: t, currentUserId: n, selectedParticipant: l } = this.props,
                    { canFullscreen: r, canStayOnTop: a, canPopout: s, useTheme: o } = this.viewProperties;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        null != l && l.type !== eR.fO.ACTIVITY && l.user.id !== n
                            ? (0, i.jsx)(ei.Z, {
                                  context: (0, eE.Z)(l.type),
                                  userId: l.user.id,
                                  currentWindow: this.inPopout ? (null != e ? e : void 0) : window,
                                  sliderClassName: eO.volumeSlider,
                                  className: eO.rightTrayIcon
                              })
                            : null,
                        a
                            ? (0, i.jsx)(en.Z, {
                                  className: eO.rightTrayIcon,
                                  popoutWindowAlwaysOnTop: t,
                                  onToggleStayOnTop: this.handleStayOnTop
                              })
                            : null,
                        s
                            ? (0, i.jsx)(et.Z, {
                                  themeable: o,
                                  popoutOpen: this.popoutOpen,
                                  className: eO.rightTrayIcon,
                                  onOpenPopout: this.handleOpenPopout,
                                  onClosePopout: this.handleClosePopout
                              })
                            : null,
                        r
                            ? (0, i.jsx)($.Z, {
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
            eD(this, 'renderChatToasts', () => {
                let { showChatToasts: e, chatOpen: t, channel: n, inCall: l } = this.props;
                return !e || t || (this.popoutOpen && !this.inPopout && l)
                    ? null
                    : (0, i.jsx)(eZ.ZP, {
                          children: (0, i.jsx)(X.Z, {
                              className: eO.chatToasts,
                              channelId: n.id
                          })
                      });
            }),
            eD(this, 'renderVoiceChannelEffects', () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, i.jsx)(eP.ZP, {
                    children: (0, i.jsx)(el.Z, {
                        callHeight: t.height,
                        channelId: e.id
                    })
                });
            }),
            eD(this, 'renderHeader', () => {
                let { renderExternalHeader: e, channel: t, guild: n, appContext: l, chatOpen: r, inCall: a } = this.props,
                    { useExternalHeader: s, canSelectRegion: o, renderHeader: c } = this.viewProperties;
                return c
                    ? (0, i.jsxs)(q.Z, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: eO.headerWrapper,
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
        { width: s = 0, ref: o } = (0, E.Z)(),
        { width: u = 0, height: h = 0, ref: m } = (0, E.Z)(),
        { ref: f } = (0, E.Z)(),
        g = (0, Z.bp)(),
        C = (0, D.Z)(),
        x = (0, c.e7)([eh.Z], () => {
            var e;
            return (null !== (e = null == C ? void 0 : C.channelId) && void 0 !== e ? e : eh.Z.getVoiceChannelId()) === n.id;
        }),
        {
            participants: _,
            filteredParticipants: N,
            participantsVersion: A,
            mode: P,
            layout: R,
            participantsOpen: L,
            participantsListOpen: w,
            chatOpen: B,
            selectedParticipant: U
        } = (0, c.cj)(
            [eI.Z],
            () => {
                let e = g === eL.IlC.POPOUT,
                    t = eI.Z.getMode(n.id);
                e && (t = eL.WtW.VIDEO);
                let i = t === eL.WtW.VIDEO ? eI.Z.getLayout(n.id, g) : eL.AEg.MINIMUM;
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
                        participantsListOpen: eI.Z.getParticipantsListOpen(n.id),
                        participantsVersion: eI.Z.getParticipantsVersion(n.id)
                    }
                );
            },
            [g, n.id]
        ),
        H = (0, c.Wu)([er.Z], () => er.Z.getAllActiveStreams()),
        { selectedStream: F } = (0, c.cj)([er.Z], () => ({ selectedStream: null != U ? er.Z.getActiveStreamForStreamKey(U.id) : null }), [U]),
        z = (0, c.e7)([ec.Z], () => ec.Z.getGuild(n.getGuildId())),
        W = (0, c.e7)([eo.Z], () => eo.Z.getCall(n.id), [n.id]),
        K = (0, c.e7)([eu.ZP], () => eu.ZP.getMentionCount(n.id), [n.id]),
        Y = (0, c.e7)([ea.default], () => ea.default.getId()),
        { popoutWindow: q, popoutWindowAlwaysOnTop: X } = (0, c.cj)([G.Z], () => ({
            popoutWindow: G.Z.getWindow(eL.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: G.Z.getIsAlwaysOnTop(eL.KJ3.CHANNEL_CALL_POPOUT)
        })),
        J = (0, c.e7)([ed.Z], () => ed.Z.can(eL.Plq.CONNECT, n)),
        Q = (0, c.e7)([es.Z], () => es.Z.getToastsEnabled(n.id)),
        $ = (0, c.e7)([O.Z], () => O.Z.getAwaitingRemoteSessionInfo()),
        ee = (0, c.e7)([V.ZP], () => V.ZP.callHeaderHeight),
        et = l.useCallback((e) => {
            v.ZP.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        en = null !== (t = null == z ? void 0 : z.id) && void 0 !== t ? t : null,
        ei = (0, j.Z)(en, n.id),
        el = (0, c.e7)([S.Z], () => S.Z.getFetchState(), []),
        ep = (0, b.Z)(el);
    l.useEffect(() => {
        el === S.O.ERROR && ep !== S.O.ERROR && (0, p.showToast)((0, p.createToast)(ek.intl.string(ek.t.AlJyIy), p.ToastType.FAILURE));
    }, [el, ep]);
    let em = (0, c.e7)([T.ZP], () => T.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
    l.useEffect(() => {
        let e = !1,
            t = null;
        return (
            (async () => {
                x && P === eL.WtW.VIDEO && ((t = await ev.ZP.blockDisplaySleep()), e && null != t && ev.ZP.unblockDisplaySleep(t));
            })(),
            () => {
                null != t ? ev.ZP.unblockDisplaySleep(t) : (e = !0);
            }
        );
    }, [x, P]);
    let ef = (0, eb.Z)(n, !0),
        { hasParticipantsPanel: eg } = (0, eA.Z)({ location: 'ChannelCall' }),
        eC = (0, k.bn)(d.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: ex } = (0, M.ZP)(y.Z.CHANNEL_CALL),
        e_ = T.ZP.getEmbeddedActivitiesForChannel(n.id),
        { theme: eE } = (0, p.useThemeContext)();
    return (0, i.jsx)(M.Gt, {
        value: ex,
        children: (0, i.jsx)(I.Z, {
            page: eL.ZY5.CHANNEL_CALL,
            children: (0, i.jsx)(eZ.B2, {
                children: (0, i.jsxs)(eP._A, {
                    children: [
                        (0, i.jsx)(eU, {
                            channel: n,
                            guild: z,
                            hasConnectPermission: J,
                            participantsOpen: L,
                            participantsListOpen: w && eg,
                            renderExternalHeader: r,
                            appContext: g,
                            call: W,
                            popoutWindow: q,
                            popoutWindowAlwaysOnTop: X,
                            mentionCount: K,
                            selectedStream: F,
                            mode: P,
                            inCall: x,
                            participants: _,
                            filteredParticipants: N,
                            participantsVersion: A,
                            layout: R,
                            chatOpen: B,
                            maxSidebarWidth: s - 550,
                            shouldUseVoiceEffectsActionBar: ef,
                            currentUserId: Y,
                            selectedParticipant: U,
                            allActiveStreams: H,
                            useNewInviteButton: ei,
                            connectedToEmbeddedActivity: null != em,
                            showChatToasts: Q,
                            storedCallHeaderHeight: ee,
                            updateStoredCallHeaderHeight: et,
                            wrapperRef: o,
                            callContainerDimensions: {
                                width: u,
                                height: h
                            },
                            callContainerRef: m,
                            channelChatRef: f,
                            width: s,
                            maxHeight: a,
                            forceShowControls: eC,
                            awaitingRemoteSessionInfo: $,
                            currentChannelActivities: e_,
                            theme: eE
                        }),
                        !n.isPrivate() && (0, i.jsx)(eP.YR, {}),
                        (0, i.jsx)(eZ.H_, {})
                    ]
                })
            })
        })
    });
};
