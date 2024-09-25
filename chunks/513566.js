var r = n(47120);
var i = n(348327),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(570140),
    u = n(846027),
    c = n(287734),
    d = n(317770),
    _ = n(829750),
    E = n(189771),
    f = n(67844),
    h = n(173507),
    p = n(592125),
    m = n(131951),
    I = n(944486),
    T = n(358085),
    g = n(998502),
    S = n(981631),
    A = n(689938);
function v(e, t, n) {
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
class N extends d.Z {
    _initialize() {
        if (!!this.isSupported) l.Z.subscribe('AUDIO_SET_MODE', this.handleViewUpdate), l.Z.subscribe('VOICE_CHANNEL_SELECT', this.handleViewUpdate), l.Z.subscribe('START_SESSION', this.handleViewUpdate), l.Z.subscribe('CONNECTION_OPEN', this.handleViewUpdate), l.Z.subscribe('CONNECTION_CLOSED', this.handleViewUpdate), l.Z.subscribe('CALL_CREATE', this.handleViewUpdate), l.Z.subscribe('CALL_UPDATE', this.handleViewUpdate), l.Z.subscribe('CALL_DELETE', this.handleViewUpdate), l.Z.subscribe('CHANNEL_DELETE', this.handleViewUpdate), l.Z.subscribe('VOICE_STATE_UPDATES', this.handleViewUpdate), l.Z.subscribe('AUDIO_TOGGLE_SELF_MUTE', this.handleViewUpdate), l.Z.subscribe('AUDIO_TOGGLE_SELF_DEAF', this.handleViewUpdate), l.Z.subscribe('AUDIO_TOGGLE_LOCAL_MUTE', this.handleViewUpdate), l.Z.subscribe('AUDIO_SET_LOCAL_VIDEO_DISABLED', this.handleViewUpdate), g.ZP.on('THUMBAR_BUTTONS_CLICKED', (e, t) => this.buttonClicked(t));
    }
    _terminate() {
        if (!!this.isSupported) l.Z.unsubscribe('AUDIO_SET_MODE', this.handleViewUpdate), l.Z.unsubscribe('VOICE_CHANNEL_SELECT', this.handleViewUpdate), l.Z.unsubscribe('START_SESSION', this.handleViewUpdate), l.Z.unsubscribe('CONNECTION_OPEN', this.handleViewUpdate), l.Z.unsubscribe('CONNECTION_CLOSED', this.handleViewUpdate), l.Z.unsubscribe('CALL_CREATE', this.handleViewUpdate), l.Z.unsubscribe('CALL_UPDATE', this.handleViewUpdate), l.Z.unsubscribe('CALL_DELETE', this.handleViewUpdate), l.Z.unsubscribe('CHANNEL_DELETE', this.handleViewUpdate), l.Z.unsubscribe('VOICE_STATE_UPDATES', this.handleViewUpdate), l.Z.unsubscribe('AUDIO_TOGGLE_SELF_MUTE', this.handleViewUpdate), l.Z.unsubscribe('AUDIO_TOGGLE_SELF_DEAF', this.handleViewUpdate), l.Z.unsubscribe('AUDIO_TOGGLE_LOCAL_MUTE', this.handleViewUpdate), l.Z.unsubscribe('AUDIO_SET_LOCAL_VIDEO_DISABLED', this.handleViewUpdate);
    }
    setThumbarButtons(e) {
        !a()(this.prevButtons, e) && ((this.prevButtons = e), g.ZP.setThumbarButtons(e));
    }
    constructor(...e) {
        super(...e),
            v(this, 'callbackActions', {
                [g.tS.VIDEO]: () => {
                    m.Z.isVideoEnabled() ? u.Z.setVideoEnabled(!1) : (0, h.Z)(() => u.Z.setVideoEnabled(!0), S.IlC.APP);
                },
                [g.tS.MUTE]: () => u.Z.toggleSelfMute({ location: 'Thumbar' }),
                [g.tS.DEAFEN]: () => u.Z.toggleSelfDeaf(),
                [g.tS.DISCONNECT]: () => c.default.disconnect()
            }),
            v(this, 'isSupported', (0, T.isMac)() || (0, T.isWindows)()),
            v(this, 'prevButtons', []),
            v(this, 'buttonClicked', (e) => {
                if (!(e.buttonName in this.callbackActions)) {
                    console.error('ThumbarButtonsManager: Unknown callback eventName: "'.concat(e.buttonName, '"'), e);
                    return;
                }
                this.callbackActions[e.buttonName]();
            }),
            v(
                this,
                'handleViewUpdate',
                s().debounce(() => {
                    let e = I.Z.getVoiceChannelId();
                    if (null == e) {
                        this.setThumbarButtons([]);
                        return;
                    }
                    let t = m.Z.isSelfMute(),
                        n = m.Z.isSelfDeaf(),
                        r = m.Z.isVideoEnabled(),
                        i = m.Z.isVideoAvailable(),
                        a = p.Z.getChannel(e),
                        o = null == a || (0, E.y)(a),
                        { reachedLimit: s, limit: l } =
                            null != a
                                ? (0, _.t)(a)
                                : {
                                      reachedLimit: void 0,
                                      limit: void 0
                                  },
                        u = (0, f.X)({
                            enabled: r,
                            join: !1,
                            channel: a,
                            cameraUnavailable: !i,
                            hasPermission: o,
                            channelLimit: l,
                            channelLimitReached: s
                        });
                    this.setThumbarButtons([
                        {
                            name: g.tS.VIDEO,
                            active: !r,
                            tooltip: u,
                            flags: i ? [] : ['disabled']
                        },
                        {
                            name: g.tS.MUTE,
                            active: t,
                            tooltip: t ? A.Z.Messages.UNMUTE : A.Z.Messages.MUTE
                        },
                        {
                            name: g.tS.DEAFEN,
                            active: n,
                            tooltip: n ? A.Z.Messages.UNDEAFEN : A.Z.Messages.DEAFEN
                        },
                        {
                            name: g.tS.DISCONNECT,
                            active: !0,
                            tooltip: A.Z.Messages.DISCONNECT_SELF
                        }
                    ]);
                }, 100)
            );
    }
}
t.Z = new N();
