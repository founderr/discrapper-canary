var i = r(47120);
var a = r(147913),
    s = r(314897),
    o = r(592125),
    l = r(242291),
    u = r(981631);
function c(e, n, r) {
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
class d extends a.Z {
    constructor(...e) {
        super(...e),
            c(this, 'prevConnected', !1),
            c(this, 'tempMutedChannel', null),
            c(this, 'handleRTCConnectionState', (e) => {
                let { state: n, channelId: r } = e,
                    i = n === u.hes.RTC_CONNECTED,
                    a = i && !this.prevConnected,
                    s = o.Z.getChannel(r),
                    c = null == s ? void 0 : s.getGuildId(),
                    d = this.tempMutedChannel === r;
                a && null != c && (d ? (this.tempMutedChannel = null) : (0, l.M2)(c)), (this.prevConnected = i);
            }),
            c(this, 'handleMute', (e) => {
                let { channelId: n } = e;
                this.tempMutedChannel = n;
            }),
            c(this, 'handleVoiceStateUpdates', (e) => {
                let { voiceStates: n } = e,
                    r = s.default.getId(),
                    i = s.default.getSessionId();
                n.forEach((e) => {
                    let { userId: n, channelId: a, sessionId: s } = e;
                    n === r && s !== i && null != a && (this.tempMutedChannel = a);
                });
            }),
            c(this, 'actions', {
                RTC_CONNECTION_STATE: this.handleRTCConnectionState,
                SOUNDBOARD_MUTE_JOIN_SOUND: this.handleMute,
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates
            });
    }
}
n.Z = new d();
