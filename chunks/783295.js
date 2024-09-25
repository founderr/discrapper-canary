var r = n(47120);
var i = n(147913),
    a = n(314897),
    o = n(592125),
    s = n(242291),
    l = n(981631);
function u(e, t, n) {
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
class c extends i.Z {
    constructor(...e) {
        super(...e),
            u(this, 'prevConnected', !1),
            u(this, 'tempMutedChannel', null),
            u(this, 'handleRTCConnectionState', (e) => {
                let { state: t, channelId: n } = e,
                    r = t === l.hes.RTC_CONNECTED,
                    i = r && !this.prevConnected,
                    a = o.Z.getChannel(n),
                    u = null == a ? void 0 : a.getGuildId(),
                    c = this.tempMutedChannel === n;
                i && null != u && (c ? (this.tempMutedChannel = null) : (0, s.M2)(u)), (this.prevConnected = r);
            }),
            u(this, 'handleMute', (e) => {
                let { channelId: t } = e;
                this.tempMutedChannel = t;
            }),
            u(this, 'handleVoiceStateUpdates', (e) => {
                let { voiceStates: t } = e,
                    n = a.default.getId(),
                    r = a.default.getSessionId();
                t.forEach((e) => {
                    let { userId: t, channelId: i, sessionId: a } = e;
                    t === n && a !== r && null != i && (this.tempMutedChannel = i);
                });
            }),
            u(this, 'actions', {
                RTC_CONNECTION_STATE: this.handleRTCConnectionState,
                SOUNDBOARD_MUTE_JOIN_SOUND: this.handleMute,
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates
            });
    }
}
t.Z = new c();
