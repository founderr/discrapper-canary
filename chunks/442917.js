var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(512722),
    s = n.n(o),
    l = n(392711),
    u = n.n(l),
    c = n(442837),
    d = n(481060),
    _ = n(846027),
    E = n(475179),
    f = n(925549),
    h = n(37234),
    p = n(519938),
    m = n(367907),
    I = n(358221),
    T = n(414910),
    g = n(221888),
    S = n(933557),
    A = n(569545),
    v = n(74299),
    N = n(863908),
    O = n(803647),
    R = n(266910),
    C = n(788983),
    y = n(703656),
    L = n(937995),
    b = n(618158),
    D = n(922745),
    M = n(197016),
    P = n(800965),
    U = n(445062),
    w = n(7188),
    x = n(199902),
    G = n(314897),
    k = n(131951),
    B = n(699516),
    F = n(594174),
    Z = n(248402),
    V = n(33039),
    H = n(451478),
    Y = n(626135),
    j = n(5192),
    W = n(51144),
    K = n(484286),
    z = n(822296),
    q = n(916771),
    Q = n(792517),
    X = n(560688),
    $ = n(127608),
    J = n(76021),
    ee = n(981631),
    et = n(354459),
    en = n(563849),
    er = n(852401);
function ei(e, t, n) {
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
class ea extends a.PureComponent {
    get viewProperties() {
        let { participantOnScreen: e, currentUserId: t, channel: n } = this.props,
            r = (0, et._5)(e),
            i = null != e && e.type !== et.fO.ACTIVITY && e.user.id === t;
        return {
            canPopout: r && !i,
            canSettings: r && i,
            canStopStream: r,
            canSeeViewers: r,
            canSeeParticipantName: ((null == e ? void 0 : e.type) === et.fO.STREAM || (null == e ? void 0 : e.type) === et.fO.USER) && n.type !== ee.d4z.DM,
            canDisconnect: !r,
            isSelf: i
        };
    }
    get streamerPaused() {
        let { isMainWindowFocused: e, activeSelfStream: t, participantOnScreen: n } = this.props;
        return null != t && (null == n ? void 0 : n.id) === (0, A.V9)(t) && !e;
    }
    get activeStreamForSelectedParticipant() {
        let { participantOnScreen: e, activeStreams: t } = this.props;
        return (0, et._5)(e) ? t.find((t) => (0, A.V9)(t) === e.id) : null;
    }
    getScreenMessage() {
        let { participantOnScreen: e, currentUserId: t } = this.props;
        if (!(0, et._5)(e)) return null;
        let n = this.activeStreamForSelectedParticipant;
        return null == n ? null : (0, N.Z)(n, e.user, e.user.id === t, this.streamerPaused);
    }
    componentDidMount() {
        let { channel: e } = this.props;
        Y.default.track(ee.rMx.VIDEO_LAYOUT_TOGGLED, {
            video_layout: 'pip',
            ...(0, m.AB)(e.id)
        });
    }
    componentWillUnmount() {
        let { channel: e } = this.props;
        Y.default.track(ee.rMx.VIDEO_LAYOUT_TOGGLED, {
            video_layout: I.Z.getLayout(e.id),
            ...(0, m.AB)(e.id)
        });
    }
    renderStreamState() {
        let e = this.activeStreamForSelectedParticipant,
            { participantOnScreen: t, width: n } = this.props;
        if ((null == e ? void 0 : e.state) === ee.jm8.ENDED)
            return (0, i.jsx)(z.Z, {
                stream: e,
                width: n
            });
        if ((null == e ? void 0 : e.state) === ee.jm8.FAILED)
            return (0, i.jsx)(q.Z, {
                stream: e,
                width: n
            });
        if ((null == t ? void 0 : t.type) === et.fO.HIDDEN_STREAM)
            return (0, i.jsx)(Q.Z, {
                participant: t,
                width: n
            });
        return null;
    }
    renderParticipantName() {
        let { channel: e, participantOnScreen: t } = this.props;
        if ((null == t ? void 0 : t.type) === et.fO.STREAM || (null == t ? void 0 : t.type) === et.fO.USER) {
            var n;
            let r = null !== (n = j.ZP.getNickname(e.getGuildId(), e.id, t.user)) && void 0 !== n ? n : W.ZP.getName(t.user);
            return (0, i.jsx)(d.Text, {
                variant: 'text-md/normal',
                color: 'always-white',
                className: en.participantName,
                lineClamp: 1,
                children: r
            });
        }
        return null;
    }
    render() {
        let { channel: e, streamId: t, participantOnScreen: n, isVideoEnabled: r, width: a } = this.props,
            o = (0, S.F6)(e, F.default, B.Z),
            s = (null == n ? void 0 : n.id) === G.default.getId() && r,
            l = this.renderStreamState(),
            u = null;
        return (
            (null == n ? void 0 : n.type) !== et.fO.ACTIVITY &&
                (null != l
                    ? (u = l)
                    : ((null == n ? void 0 : n.type) === et.fO.USER || (null == n ? void 0 : n.type) === et.fO.STREAM) &&
                      (u = (0, i.jsx)(K.Z, {
                          paused: this.streamerPaused,
                          streamId: t,
                          component: k.Z.getVideoComponent(),
                          mirror: s,
                          children: (0, i.jsx)(R.Z, {
                              size: d.AvatarSizes.SIZE_80,
                              src: null == n ? void 0 : n.user.getAvatarURL(e.guild_id, 80),
                              'aria-label': null == n ? void 0 : n.user.username
                          })
                      }))),
            (0, i.jsx)(L.ZP, {
                timeout: 1800,
                children: (e) => {
                    var t;
                    return (0, i.jsx)(D.Z, {
                        title: o,
                        backgroundKey: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : '',
                        screenMessage: null == l ? this.getScreenMessage() : null,
                        onJumpToChannel: this.handleJumpToChannel,
                        onHide: this.handleHidePIP,
                        renderBottomLeftControls: this.renderBottomLeftControls,
                        renderBottomRightControls: this.renderBottomRightControls,
                        preventIdleComponent: b.Z,
                        width: a,
                        className: er.elevationHigh,
                        ...e,
                        children: u
                    });
                }
            })
        );
    }
    constructor(...e) {
        super(...e),
            ei(this, 'state', { screensharePopoutOpen: !1 }),
            ei(this, '_ref', a.createRef()),
            ei(this, 'handleVideo', (e) => {
                _.Z.setVideoEnabled(e);
            }),
            ei(this, 'handleEnableVideoWhenUnavailable', () => {
                let { isVideoAvailable: e } = this.props;
                e ? this.handleVideo(!0) : (0, X.Z)();
            }),
            ei(this, 'handleJumpToChannel', () => {
                var e;
                let { channel: t } = this.props;
                (0, h.Ou)();
                let n = null !== (e = t.getGuildId()) && void 0 !== e ? e : ee.ME;
                (0, y.XU)(n, t.id), f.Z.channelListScrollTo(n, t.id);
                let r = this.activeStreamForSelectedParticipant;
                null != r && E.Z.selectParticipant(r.channelId, (0, A.V9)(r));
            }),
            ei(this, 'handleStartStream', () => {
                let { canGoLive: e, channel: t } = this.props,
                    n = t.getGuildId();
                if ((s()(null != n, 'Cannot go live in non guild channel'), !e)) return (0, $.Z)();
                (0, J.Z)(n, t.id, ee.ZY5.GUILD_CHANNEL);
            }),
            ei(this, 'handleStopStream', () => {
                let { participantOnScreen: e } = this.props;
                s()((0, et._5)(e), 'cannot stop stream for non streamer'), (0, O.Z)(e.stream);
            }),
            ei(this, 'handleHidePIP', () => {
                let { channel: e } = this.props;
                p.Cp(e.id);
            }),
            ei(this, 'handleOpenPopout', () => {
                let { channel: e } = this.props;
                C.hP(e);
            }),
            ei(this, 'renderBottomLeftControls', () => {
                let { canSeeParticipantName: e } = this.viewProperties;
                return (0, i.jsx)(i.Fragment, { children: e ? this.renderParticipantName() : null });
            }),
            ei(this, 'renderBottomRightControls', () => {
                let { canSettings: e, canPopout: t, canDisconnect: n, canStopStream: r, canSeeViewers: a } = this.viewProperties;
                return (0, i.jsxs)(i.Fragment, {
                    children: [a ? this.renderViewersIcon() : null, e ? this.renderSettingsIcon() : null, t ? this.renderPopoutIcon() : null, r ? this.renderStopStreamButton() : null, n ? this.renderDisconnectButton() : null]
                });
            }),
            ei(this, 'renderDisconnectButton', () => (0, i.jsx)(M.Z, { className: en.rightTrayIcon })),
            ei(this, 'renderStopStreamButton', () => {
                let { isSelf: e } = this.viewProperties;
                return (0, i.jsx)(U.Z, {
                    isSelfStream: e,
                    className: en.rightTrayIcon,
                    onClick: this.handleStopStream
                });
            }),
            ei(this, 'renderViewersIcon', () => {
                let { participantOnScreen: e, channel: t } = this.props;
                return (
                    s()((0, et._5)(e) || (null == e ? void 0 : e.type) === et.fO.ACTIVITY, 'Cannot render participants for participant type '.concat(null == e ? void 0 : e.type)),
                    (0, i.jsx)(b.Z, {
                        children: (0, i.jsx)(g.Z, {
                            channelId: t.id,
                            guildId: t.getGuildId(),
                            className: en.rightTrayIcon,
                            participant: e,
                            compact: !0
                        })
                    })
                );
            }),
            ei(this, 'renderPopoutIcon', () =>
                (0, i.jsx)(P.Z, {
                    className: en.rightTrayIcon,
                    popoutOpen: !1,
                    onOpenPopout: this.handleOpenPopout,
                    onClosePopout: ee.VqG
                })
            ),
            ei(this, 'renderSettingsIcon', () => {
                let { participantOnScreen: e, activeStreams: t } = this.props;
                s()((0, et._5)(e), 'Cannot render settings for non stream participant');
                let n = t.find((t) => (0, A.V9)(t) === e.id);
                return null == n || n.state === ee.jm8.ENDED
                    ? null
                    : (0, i.jsx)(w.Z, {
                          stream: n,
                          className: en.rightTrayIcon,
                          appContext: ee.IlC.APP
                      });
            });
    }
}
t.Z = c.ZP.connectStores([k.Z, I.Z, G.default, Z.Z, V.Z, x.Z, H.Z], (e) => {
    let { channel: t } = e,
        n = Z.Z.getSpeaker(t.id),
        r = I.Z.getParticipant(t.id, n),
        i = u()(k.Z.getVideoDevices()).values().first(),
        a = null == i || i.disabled,
        o = null != r && r.type !== et.fO.ACTIVITY && r.type !== et.fO.HIDDEN_STREAM ? V.Z.getStreamId(r.user.id, t.getGuildId(), (0, T.Z)(r.type)) : null,
        s = !1 === a,
        l = !a && k.Z.isVideoEnabled(),
        c = (0, v.Z)(k.Z),
        d = G.default.getId(),
        _ = x.Z.getCurrentUserActiveStream();
    return {
        channel: t,
        streamId: o,
        participantOnScreen: r,
        isVideoAvailable: s,
        isVideoEnabled: l,
        canGoLive: c,
        currentUserId: d,
        activeStreams: x.Z.getAllActiveStreams(),
        activeSelfStream: _,
        isMainWindowFocused: H.Z.isFocused()
    };
})(ea);
