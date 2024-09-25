var r = n(47120);
var i = n(147913),
    a = n(751571),
    o = n(88751),
    s = n(590415),
    l = n(189786),
    u = n(314897),
    c = n(592125),
    d = n(131951),
    _ = n(19780),
    E = n(876506),
    f = n(981631),
    h = n(761274);
function p(e, t, n) {
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
let m = null;
function I() {
    a.Z.requestPermission(h.Eu.AUDIO).then((e) => {
        if (!!e) (0, E.Z)(!0);
    }),
        d.Z.getMode() === f.pM4.PUSH_TO_TALK && a.Z.requestPermission(h.Eu.INPUT_MONITORING);
}
function T(e, t) {
    var n;
    return (null === (n = c.Z.getChannel(t)) || void 0 === n ? !void 0 : !n.isListenModeCapable()) || o.ZP.isSpeaker(e, t);
}
function g(e) {
    return (0, s.gf)(e) === s.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
}
class S extends i.Z {
    handleVoiceChannelSelect(e) {
        let { channelId: t } = e;
        null == t && (m = null);
    }
    handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        t.forEach((e) => {
            let { userId: t, channelId: n } = e;
            if (null != n && u.default.getId() === t && null != _.Z.getRTCConnectionId() && m !== n) {
                if (T(t, n)) {
                    (m = n), I();
                    return;
                }
                g(new l.Z(e)) && ((m = n), I());
            }
        });
    }
    constructor(...e) {
        super(...e),
            p(this, 'actions', {
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect
            });
    }
}
t.Z = new S();
