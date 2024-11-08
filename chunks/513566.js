n(47120);
var r = n(348327),
    i = n.n(r),
    a = n(392711),
    s = n.n(a),
    o = n(570140),
    l = n(846027),
    u = n(287734),
    c = n(317770),
    d = n(829750),
    f = n(189771),
    _ = n(67844),
    h = n(173507),
    p = n(592125),
    m = n(131951),
    g = n(944486),
    E = n(358085),
    v = n(998502),
    I = n(981631),
    S = n(388032);
function b(e, t, n) {
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
class T extends c.Z {
    _initialize() {
        if (!!this.isSupported) o.Z.subscribe('AUDIO_SET_MODE', this.handleViewUpdate), o.Z.subscribe('VOICE_CHANNEL_SELECT', this.handleViewUpdate), o.Z.subscribe('START_SESSION', this.handleViewUpdate), o.Z.subscribe('CONNECTION_OPEN', this.handleViewUpdate), o.Z.subscribe('CONNECTION_CLOSED', this.handleViewUpdate), o.Z.subscribe('CALL_CREATE', this.handleViewUpdate), o.Z.subscribe('CALL_UPDATE', this.handleViewUpdate), o.Z.subscribe('CALL_DELETE', this.handleViewUpdate), o.Z.subscribe('CHANNEL_DELETE', this.handleViewUpdate), o.Z.subscribe('VOICE_STATE_UPDATES', this.handleViewUpdate), o.Z.subscribe('AUDIO_TOGGLE_SELF_MUTE', this.handleViewUpdate), o.Z.subscribe('AUDIO_TOGGLE_SELF_DEAF', this.handleViewUpdate), o.Z.subscribe('AUDIO_TOGGLE_LOCAL_MUTE', this.handleViewUpdate), o.Z.subscribe('AUDIO_SET_LOCAL_VIDEO_DISABLED', this.handleViewUpdate), v.ZP.on('THUMBAR_BUTTONS_CLICKED', (e, t) => this.buttonClicked(t));
    }
    _terminate() {
        if (!!this.isSupported) o.Z.unsubscribe('AUDIO_SET_MODE', this.handleViewUpdate), o.Z.unsubscribe('VOICE_CHANNEL_SELECT', this.handleViewUpdate), o.Z.unsubscribe('START_SESSION', this.handleViewUpdate), o.Z.unsubscribe('CONNECTION_OPEN', this.handleViewUpdate), o.Z.unsubscribe('CONNECTION_CLOSED', this.handleViewUpdate), o.Z.unsubscribe('CALL_CREATE', this.handleViewUpdate), o.Z.unsubscribe('CALL_UPDATE', this.handleViewUpdate), o.Z.unsubscribe('CALL_DELETE', this.handleViewUpdate), o.Z.unsubscribe('CHANNEL_DELETE', this.handleViewUpdate), o.Z.unsubscribe('VOICE_STATE_UPDATES', this.handleViewUpdate), o.Z.unsubscribe('AUDIO_TOGGLE_SELF_MUTE', this.handleViewUpdate), o.Z.unsubscribe('AUDIO_TOGGLE_SELF_DEAF', this.handleViewUpdate), o.Z.unsubscribe('AUDIO_TOGGLE_LOCAL_MUTE', this.handleViewUpdate), o.Z.unsubscribe('AUDIO_SET_LOCAL_VIDEO_DISABLED', this.handleViewUpdate);
    }
    setThumbarButtons(e) {
        !i()(this.prevButtons, e) && ((this.prevButtons = e), v.ZP.setThumbarButtons(e));
    }
    constructor(...e) {
        super(...e),
            b(this, 'callbackActions', {
                [v.tS.VIDEO]: () => {
                    m.Z.isVideoEnabled() ? l.Z.setVideoEnabled(!1) : (0, h.Z)(() => l.Z.setVideoEnabled(!0), I.IlC.APP);
                },
                [v.tS.MUTE]: () => l.Z.toggleSelfMute({ location: 'Thumbar' }),
                [v.tS.DEAFEN]: () => l.Z.toggleSelfDeaf({ location: 'Thumbar' }),
                [v.tS.DISCONNECT]: () => u.default.disconnect()
            }),
            b(this, 'isSupported', (0, E.isMac)() || (0, E.isWindows)()),
            b(this, 'prevButtons', []),
            b(this, 'buttonClicked', (e) => {
                if (!(e.buttonName in this.callbackActions)) {
                    console.error('ThumbarButtonsManager: Unknown callback eventName: "'.concat(e.buttonName, '"'), e);
                    return;
                }
                this.callbackActions[e.buttonName]();
            }),
            b(
                this,
                'handleViewUpdate',
                s().debounce(() => {
                    let e = g.Z.getVoiceChannelId();
                    if (null == e) {
                        this.setThumbarButtons([]);
                        return;
                    }
                    let t = m.Z.isSelfMute(),
                        n = m.Z.isSelfDeaf(),
                        r = m.Z.isVideoEnabled(),
                        i = m.Z.isVideoAvailable(),
                        a = p.Z.getChannel(e),
                        s = null == a || (0, f.y)(a),
                        { reachedLimit: o, limit: l } =
                            null != a
                                ? (0, d.t)(a)
                                : {
                                      reachedLimit: void 0,
                                      limit: void 0
                                  },
                        u = (0, _.X)({
                            enabled: r,
                            join: !1,
                            channel: a,
                            cameraUnavailable: !i,
                            hasPermission: s,
                            channelLimit: l,
                            channelLimitReached: o
                        });
                    this.setThumbarButtons([
                        {
                            name: v.tS.VIDEO,
                            active: !r,
                            tooltip: u,
                            flags: i ? [] : ['disabled']
                        },
                        {
                            name: v.tS.MUTE,
                            active: t,
                            tooltip: t ? S.intl.string(S.t.YqAjX1) : S.intl.string(S.t['w4m94+'])
                        },
                        {
                            name: v.tS.DEAFEN,
                            active: n,
                            tooltip: n ? S.intl.string(S.t['2US87+']) : S.intl.string(S.t.wjcRFR)
                        },
                        {
                            name: v.tS.DISCONNECT,
                            active: !0,
                            tooltip: S.intl.string(S.t['6vrfgo'])
                        }
                    ]);
                }, 100)
            );
    }
}
t.Z = new T();
