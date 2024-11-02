n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(512722),
    o = n.n(s),
    c = n(442837),
    u = n(704215),
    d = n(846519),
    h = n(481060),
    m = n(570140),
    p = n(475179),
    f = n(239091),
    g = n(287734),
    C = n(872810),
    x = n(153867),
    v = n(944543),
    _ = n(410575),
    I = n(393238),
    E = n(110924),
    b = n(40851),
    S = n(115130),
    Z = n(317381),
    T = n(596040),
    N = n(349619),
    j = n(100527),
    A = n(367907),
    y = n(906732),
    P = n(600164),
    M = n(211644),
    R = n(258609),
    L = n(446226),
    k = n(276598),
    O = n(569545),
    w = n(382182),
    D = n(788983),
    U = n(928518),
    B = n(703656),
    H = n(740492),
    F = n(793319),
    G = n(3861),
    V = n(493754),
    z = n(937995),
    W = n(618158),
    Y = n(880831),
    K = n(73563),
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
    er = n(979696),
    ea = n(523746),
    es = n(430824),
    eo = n(496675),
    ec = n(306680),
    eu = n(944486),
    ed = n(594174),
    eh = n(979651),
    em = n(626135),
    ep = n(934415),
    ef = n(585483),
    eg = n(358085),
    eC = n(998502),
    ex = n(228488),
    ev = n(358221),
    e_ = n(414910),
    eI = n(887012),
    eE = n(909820),
    eb = n(493010),
    eS = n(742603),
    eZ = n(221888),
    eT = n(900211),
    eN = n(18759),
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
            em.default.track(ey.rMx.VIDEO_LAYOUT_TOGGLED, {
                video_layout: this.inPopout ? 'popout' : t,
                ...(0, A.AB)(e.id)
            });
    }
    componentWillUnmount() {
        this._videoBackgroundTooltipTimeout.stop(), this.currentDocument.removeEventListener(ex.NO, this.handleFullScreenChange), !(this.inPopout && (0, eg.isMac)()) && this.maybeLeaveFullScreen();
    }
    componentDidUpdate(e) {
        let { participantsOpen: t, inCall: n, mode: i, layout: l } = this.props,
            r = this.getRootNode();
        if ((null != r && e.mode === ey.WtW.VIDEO && i === ey.WtW.VOICE && (0, ex.rB)(r, this.currentDocument) && (0, ex.Pr)(r, this.currentDocument), e.participantsOpen !== t || l !== e.layout)) {
            var a;
            null === (a = this._contentRef.current) || void 0 === a || a.triggerResize();
        }
        e.inCall && !n && this.inPopout && m.Z.wait(() => this.handleClosePopout());
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
            r = t === ey.WtW.VIDEO && i && this.popoutSupported,
            a = t !== ey.WtW.VOICE && n.isPrivate() && !this.inPopout && i,
            s = n.type === ey.d4z.GUILD_VOICE,
            o = e === ey.AEg.MINIMUM || e === ey.AEg.NORMAL,
            c = this.inPopout && this.nativePopoutSupported,
            u = {
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
                ...u,
                canFullscreen: l,
                useTheme: !0
            };
        switch (e) {
            case ey.AEg.FULL_SCREEN:
                return {
                    ...u,
                    canPopout: !this.inPopout && this.popoutOpen && u.canPopout
                };
            case ey.AEg.MINIMUM:
                return {
                    ...u,
                    canPopout: !1,
                    useTheme: !0
                };
            case ey.AEg.NO_CHAT:
            case ey.AEg.NORMAL:
                return { ...u };
        }
    }
    renderContent(e) {
        var t;
        let { selectedParticipant: n, inCall: l, hasConnectPermission: r, mode: a, popoutWindow: s, participantsOpen: o, participants: c, filteredParticipants: u, participantsVersion: d, channel: h, guild: m, layout: p, forceShowControls: f, awaitingRemoteSessionInfo: g, currentChannelActivities: C, callContainerDimensions: x } = this.props,
            v = p === ey.AEg.MINIMUM,
            _ = v || p === ey.AEg.NORMAL,
            I = l && a === ey.WtW.VIDEO,
            E = (null !== (t = null == C ? void 0 : C.length) && void 0 !== t ? t : 0) > 0 && h.isPrivate();
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
                disableGradients: v,
                idle: !f && l && !v && e.idle,
                children:
                    l && this.popoutOpen && !this.inPopout
                        ? null
                        : (0, i.jsx)(G.Z, {
                              ref: this._contentRef,
                              inCall: l,
                              paused: this.paused,
                              channel: h,
                              hasConnectPermission: r,
                              guild: m,
                              participants: c,
                              filteredParticipants: u,
                              participantsVersion: d,
                              selectedParticipant: I ? n : null,
                              layout: p,
                              idle: e.idle,
                              mode: a,
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
        let { layout: e, channel: t, guild: n, mode: l, chatOpen: r, appContext: s, maxSidebarWidth: o, maxHeight: c, inCall: u } = this.props,
            { resizedHeight: d } = this.state,
            m = l === ey.WtW.VIDEO,
            p = e !== ey.AEg.NO_CHAT && e !== ey.AEg.FULL_SCREEN && null != c;
        return (0, i.jsxs)('div', {
            className: a()(eM.wrapper, eL[e], ek[s], {
                [eM.poppedOut]: this.popoutOpen && !this.inPopout && e !== ey.AEg.NO_CHAT && t.isPrivate(),
                [eM.video]: m,
                [eM.chatSidebarOpen]: r
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
                (0, i.jsx)(h.ThemeProvider, {
                    theme: m ? ey.BRd.DARK : void 0,
                    children: (e) =>
                        (0, i.jsx)('div', {
                            className: a()(eM.callContainer, e),
                            ref: (e) => {
                                (this._callContainerRef.current = e), (this.props.callContainerRef.current = e);
                            },
                            children: (0, i.jsx)(z.ZP, {
                                timeout: 2000,
                                children: (e) => this.renderContent(e)
                            })
                        })
                }),
                p &&
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
                        r &&
                        (!u || !this.popoutOpen || this.inPopout) &&
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
            eR(this, '_videoBackgroundTooltipTimeout', new d.V7()),
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
                i !== e && (p.Z.updateLayout(t.id, e, n), e === ey.AEg.FULL_SCREEN && t.isPrivate() && ef.S.dispatch(ey.CkL.TEXTAREA_BLUR));
            }),
            eR(this, 'handleDisconnect', () => {
                this.props.layout === ey.AEg.FULL_SCREEN && this.handleFullScreen();
            }),
            eR(this, 'handleContextMenu', (e, t) => {
                var l, r;
                let { channel: a, appContext: s, layout: c } = this.props,
                    u = {
                        onClose: () => {
                            var e;
                            return null === (e = this._lastIdleProps) || void 0 === e ? void 0 : e.onAllowIdle('menu');
                        },
                        context: s
                    };
                switch ((null === (l = this._lastIdleProps) || void 0 === l || l.onPreventIdle('menu'), null === (r = this._lastIdleProps) || void 0 === r || r.onActive(), e.type)) {
                    case eA.fO.HIDDEN_STREAM:
                    case eA.fO.STREAM:
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
                            u
                        );
                        return;
                    case eA.fO.USER:
                        let d = ed.default.getUser(e.id);
                        if (null != d)
                            switch (a.type) {
                                case ey.d4z.DM:
                                    return (0, f.jW)(
                                        t,
                                        async () => {
                                            let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('22036'), n.e('56826'), n.e('97741')]).then(n.bind(n, 131404));
                                            return (t) =>
                                                (0, i.jsx)(e, {
                                                    ...t,
                                                    showChannelCallItems: !0,
                                                    showMediaItems: !0,
                                                    user: d,
                                                    channel: a,
                                                    showModalItems: !0
                                                });
                                        },
                                        u
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
                                                    user: d,
                                                    channel: a,
                                                    showModalItems: !0
                                                });
                                        },
                                        u
                                    );
                                case ey.d4z.GUILD_VOICE:
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
                                                        user: d,
                                                        channel: a,
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
            eR(this, 'handleCallResize', (e) => {
                this.setState({ resizedHeight: e });
            }),
            eR(this, 'handleSelectParticipant', (e, t) => {
                let { channel: n, selectedParticipant: i, allActiveStreams: l, inCall: r, mode: a } = this.props;
                (0, eA._5)(e) && (0, w.p9)(n, eh.Z, es.Z, eo.Z, R.Z)[0] && (g.default.selectVoiceChannel(n.id), 0 === l.filter((t) => (0, O.V9)(t) === e.id && t.state !== ey.jm8.ENDED).length && (0, C.rn)((0, O.my)(e.id), { forceMultiple: t.shiftKey })), r && a === ey.WtW.VIDEO && ((null == i ? void 0 : i.id) === e.id ? p.Z.selectParticipant(n.id, null) : p.Z.selectParticipant(n.id, e.id));
            }),
            eR(this, 'handleOpenPopout', () => {
                let { channel: e, connectedToEmbeddedActivity: t } = this.props,
                    n = () => {
                        let t = e.getGuildId();
                        null != t && (0, B.uL)((0, ep.LY)(t)), D.hP(e);
                    };
                t ? (0, N.Z)(n) : n();
            }),
            eR(this, 'handleStayOnTop', (e) => {
                D.hY(ey.KJ3.CHANNEL_CALL_POPOUT, e);
            }),
            eR(this, 'handleClosePopout', () => {
                D.xv(ey.KJ3.CHANNEL_CALL_POPOUT);
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
                    ? (0, i.jsx)(F.ZP, {
                          exitFullScreen: this.maybeLeaveFullScreen,
                          channel: e,
                          onDisconnectCall: this.handleDisconnect,
                          idleProps: this._lastIdleProps
                      })
                    : null;
            }),
            eR(this, 'renderBottomLeft', () => {
                let { layout: e, mentionCount: t, channel: n, appContext: l, useNewInviteButton: r, selectedParticipant: s, shouldUseVoiceEffectsActionBar: o, inCall: c, participants: u } = this.props;
                if (!c) return null;
                let d = e === ey.AEg.NO_CHAT ? q.Z.Directions.UP : q.Z.Directions.DOWN,
                    m = [ey.AEg.FULL_SCREEN, ey.AEg.NO_CHAT].includes(e),
                    p = u.some((e) => e.type === eA.fO.STREAM),
                    f =
                        e === ey.AEg.FULL_SCREEN
                            ? () => {
                                  (this._prevLayout = ey.AEg.NORMAL), this.handleFullScreen();
                              }
                            : this.handleToggleLayout,
                    { canChangeLayout: g, canInvite: C } = this.viewProperties,
                    x = r
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
                                          label: m ? eP.intl.string(eP.t.kkKapK) : eP.intl.string(eP.t['5MstTk']),
                                          direction: d,
                                          className: eM.leftTrayIcon,
                                          onClick: f
                                      }),
                                      m && t > 0
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
                                      className: a()(eM.leftTrayIcon, eM.viewersButton),
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
                                hasActiveStream: p,
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
                    { canFullscreen: r, canStayOnTop: a, canPopout: s, useTheme: o } = this.viewProperties;
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
                        a
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
                        r
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
                    { channel: l, chatOpen: r, inCall: a } = this.props;
                return r || (this.popoutOpen && !this.inPopout && a)
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
                          children: (0, i.jsx)(Y.Z, {
                              className: eM.chatToasts,
                              channelId: n.id
                          })
                      });
            }),
            eR(this, 'renderVoiceChannelEffects', () => {
                let { channel: e, callContainerDimensions: t } = this.props;
                return (0, i.jsx)(eN.ZP, {
                    children: (0, i.jsx)(en.Z, {
                        callHeight: t.height,
                        channelId: e.id
                    })
                });
            }),
            eR(this, 'renderHeader', () => {
                let { renderExternalHeader: e, channel: t, guild: n, appContext: l, chatOpen: r, inCall: a } = this.props,
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
        { width: d = 0, height: m = 0, ref: p } = (0, I.Z)(),
        { ref: f } = (0, I.Z)(),
        g = (0, b.bp)(),
        C = (0, L.Z)(),
        v = (0, c.e7)([eu.Z], () => {
            var e;
            return (null !== (e = null == C ? void 0 : C.channelId) && void 0 !== e ? e : eu.Z.getVoiceChannelId()) === n.id;
        }),
        {
            participants: N,
            filteredParticipants: A,
            participantsVersion: P,
            mode: k,
            layout: O,
            participantsOpen: w,
            chatOpen: D,
            selectedParticipant: B
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
        F = (0, c.Wu)([ei.Z], () => ei.Z.getAllActiveStreams()),
        { selectedStream: G } = (0, c.cj)([ei.Z], () => ({ selectedStream: null != B ? ei.Z.getActiveStreamForStreamKey(B.id) : null }), [B]),
        V = (0, c.e7)([es.Z], () => es.Z.getGuild(n.getGuildId())),
        z = (0, c.e7)([ea.Z], () => ea.Z.getCall(n.id), [n.id]),
        W = (0, c.e7)([ec.ZP], () => ec.ZP.getMentionCount(n.id), [n.id]),
        Y = (0, c.e7)([el.default], () => el.default.getId()),
        { popoutWindow: K, popoutWindowAlwaysOnTop: q } = (0, c.cj)([U.Z], () => ({
            popoutWindow: U.Z.getWindow(ey.KJ3.CHANNEL_CALL_POPOUT),
            popoutWindowAlwaysOnTop: U.Z.getIsAlwaysOnTop(ey.KJ3.CHANNEL_CALL_POPOUT)
        })),
        X = (0, c.e7)([eo.Z], () => eo.Z.can(ey.Plq.CONNECT, n)),
        J = (0, c.e7)([er.Z], () => er.Z.getToastsEnabled(n.id)),
        Q = (0, c.e7)([R.Z], () => R.Z.getAwaitingRemoteSessionInfo()),
        $ = (0, c.e7)([H.ZP], () => H.ZP.callHeaderHeight),
        ee = l.useCallback((e) => {
            x.ZP.updatedUnsyncedSettings({ callHeaderHeight: e });
        }, []),
        et = null !== (t = null == V ? void 0 : V.id) && void 0 !== t ? t : null,
        en = (0, T.Z)(et, n.id),
        ed = (0, c.e7)([S.Z], () => S.Z.getFetchState(), []),
        eh = (0, E.Z)(ed);
    l.useEffect(() => {
        ed === S.O.ERROR && eh !== S.O.ERROR && (0, h.showToast)((0, h.createToast)(eP.intl.string(eP.t.AlJyIy), h.ToastType.FAILURE));
    }, [ed, eh]);
    let em = (0, c.e7)([Z.ZP], () => Z.ZP.getSelfEmbeddedActivityForChannel(n.id), [n]);
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
    let ep = (0, eI.Z)(n, !0),
        ef = (0, M.bn)(u.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK),
        { analyticsLocations: eg } = (0, y.ZP)(j.Z.CHANNEL_CALL),
        ex = Z.ZP.getEmbeddedActivitiesForChannel(n.id);
    return (0, i.jsx)(y.Gt, {
        value: eg,
        children: (0, i.jsx)(_.Z, {
            page: ey.ZY5.CHANNEL_CALL,
            children: (0, i.jsx)(eE.B2, {
                children: (0, i.jsxs)(eN._A, {
                    children: [
                        (0, i.jsx)(eO, {
                            channel: n,
                            guild: V,
                            hasConnectPermission: X,
                            participantsOpen: w,
                            renderExternalHeader: r,
                            appContext: g,
                            call: z,
                            popoutWindow: K,
                            popoutWindowAlwaysOnTop: q,
                            mentionCount: W,
                            selectedStream: G,
                            mode: k,
                            inCall: v,
                            participants: N,
                            filteredParticipants: A,
                            participantsVersion: P,
                            layout: O,
                            chatOpen: D,
                            maxSidebarWidth: s - 550,
                            shouldUseVoiceEffectsActionBar: ep,
                            currentUserId: Y,
                            selectedParticipant: B,
                            allActiveStreams: F,
                            useNewInviteButton: en,
                            connectedToEmbeddedActivity: null != em,
                            showChatToasts: J,
                            storedCallHeaderHeight: $,
                            updateStoredCallHeaderHeight: ee,
                            wrapperRef: o,
                            callContainerDimensions: {
                                width: d,
                                height: m
                            },
                            callContainerRef: p,
                            channelChatRef: f,
                            width: s,
                            maxHeight: a,
                            forceShowControls: ef,
                            awaitingRemoteSessionInfo: Q,
                            currentChannelActivities: ex
                        }),
                        !n.isPrivate() && (0, i.jsx)(eN.YR, {}),
                        (0, i.jsx)(eE.H_, {})
                    ]
                })
            })
        })
    });
};
