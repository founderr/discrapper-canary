var i = r(47120);
var a = r(348327),
    s = r.n(a),
    o = r(392711),
    l = r.n(o),
    u = r(570140),
    c = r(846027),
    d = r(287734),
    f = r(317770),
    _ = r(829750),
    h = r(189771),
    p = r(67844),
    m = r(173507),
    g = r(592125),
    E = r(131951),
    v = r(944486),
    I = r(358085),
    T = r(998502),
    b = r(981631),
    y = r(388032);
function S(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class A extends f.Z {
    _initialize() {
        if (!!this.isSupported) u.Z.subscribe('AUDIO_SET_MODE', this.handleViewUpdate), u.Z.subscribe('VOICE_CHANNEL_SELECT', this.handleViewUpdate), u.Z.subscribe('START_SESSION', this.handleViewUpdate), u.Z.subscribe('CONNECTION_OPEN', this.handleViewUpdate), u.Z.subscribe('CONNECTION_CLOSED', this.handleViewUpdate), u.Z.subscribe('CALL_CREATE', this.handleViewUpdate), u.Z.subscribe('CALL_UPDATE', this.handleViewUpdate), u.Z.subscribe('CALL_DELETE', this.handleViewUpdate), u.Z.subscribe('CHANNEL_DELETE', this.handleViewUpdate), u.Z.subscribe('VOICE_STATE_UPDATES', this.handleViewUpdate), u.Z.subscribe('AUDIO_TOGGLE_SELF_MUTE', this.handleViewUpdate), u.Z.subscribe('AUDIO_TOGGLE_SELF_DEAF', this.handleViewUpdate), u.Z.subscribe('AUDIO_TOGGLE_LOCAL_MUTE', this.handleViewUpdate), u.Z.subscribe('AUDIO_SET_LOCAL_VIDEO_DISABLED', this.handleViewUpdate), T.ZP.on('THUMBAR_BUTTONS_CLICKED', (e, n) => this.buttonClicked(n));
    }
    _terminate() {
        if (!!this.isSupported) u.Z.unsubscribe('AUDIO_SET_MODE', this.handleViewUpdate), u.Z.unsubscribe('VOICE_CHANNEL_SELECT', this.handleViewUpdate), u.Z.unsubscribe('START_SESSION', this.handleViewUpdate), u.Z.unsubscribe('CONNECTION_OPEN', this.handleViewUpdate), u.Z.unsubscribe('CONNECTION_CLOSED', this.handleViewUpdate), u.Z.unsubscribe('CALL_CREATE', this.handleViewUpdate), u.Z.unsubscribe('CALL_UPDATE', this.handleViewUpdate), u.Z.unsubscribe('CALL_DELETE', this.handleViewUpdate), u.Z.unsubscribe('CHANNEL_DELETE', this.handleViewUpdate), u.Z.unsubscribe('VOICE_STATE_UPDATES', this.handleViewUpdate), u.Z.unsubscribe('AUDIO_TOGGLE_SELF_MUTE', this.handleViewUpdate), u.Z.unsubscribe('AUDIO_TOGGLE_SELF_DEAF', this.handleViewUpdate), u.Z.unsubscribe('AUDIO_TOGGLE_LOCAL_MUTE', this.handleViewUpdate), u.Z.unsubscribe('AUDIO_SET_LOCAL_VIDEO_DISABLED', this.handleViewUpdate);
    }
    setThumbarButtons(e) {
        !s()(this.prevButtons, e) && ((this.prevButtons = e), T.ZP.setThumbarButtons(e));
    }
    constructor(...e) {
        super(...e),
            S(this, 'callbackActions', {
                [T.tS.VIDEO]: () => {
                    E.Z.isVideoEnabled() ? c.Z.setVideoEnabled(!1) : (0, m.Z)(() => c.Z.setVideoEnabled(!0), b.IlC.APP);
                },
                [T.tS.MUTE]: () => c.Z.toggleSelfMute({ location: 'Thumbar' }),
                [T.tS.DEAFEN]: () => c.Z.toggleSelfDeaf({ location: 'Thumbar' }),
                [T.tS.DISCONNECT]: () => d.default.disconnect()
            }),
            S(this, 'isSupported', (0, I.isMac)() || (0, I.isWindows)()),
            S(this, 'prevButtons', []),
            S(this, 'buttonClicked', (e) => {
                if (!(e.buttonName in this.callbackActions)) {
                    console.error('ThumbarButtonsManager: Unknown callback eventName: "'.concat(e.buttonName, '"'), e);
                    return;
                }
                this.callbackActions[e.buttonName]();
            }),
            S(
                this,
                'handleViewUpdate',
                l().debounce(() => {
                    let e = v.Z.getVoiceChannelId();
                    if (null == e) {
                        this.setThumbarButtons([]);
                        return;
                    }
                    let n = E.Z.isSelfMute(),
                        r = E.Z.isSelfDeaf(),
                        i = E.Z.isVideoEnabled(),
                        a = E.Z.isVideoAvailable(),
                        s = g.Z.getChannel(e),
                        o = null == s || (0, h.y)(s),
                        { reachedLimit: l, limit: u } =
                            null != s
                                ? (0, _.t)(s)
                                : {
                                      reachedLimit: void 0,
                                      limit: void 0
                                  },
                        c = (0, p.X)({
                            enabled: i,
                            join: !1,
                            channel: s,
                            cameraUnavailable: !a,
                            hasPermission: o,
                            channelLimit: u,
                            channelLimitReached: l
                        });
                    this.setThumbarButtons([
                        {
                            name: T.tS.VIDEO,
                            active: !i,
                            tooltip: c,
                            flags: a ? [] : ['disabled']
                        },
                        {
                            name: T.tS.MUTE,
                            active: n,
                            tooltip: n ? y.intl.string(y.t.YqAjX1) : y.intl.string(y.t['w4m94+'])
                        },
                        {
                            name: T.tS.DEAFEN,
                            active: r,
                            tooltip: r ? y.intl.string(y.t['2US87+']) : y.intl.string(y.t.wjcRFR)
                        },
                        {
                            name: T.tS.DISCONNECT,
                            active: !0,
                            tooltip: y.intl.string(y.t['6vrfgo'])
                        }
                    ]);
                }, 100)
            );
    }
}
n.Z = new A();
