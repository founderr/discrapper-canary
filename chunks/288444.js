var r = n(47120);
var i = n(846519),
    a = n(904245),
    o = n(287734),
    s = n(147913),
    l = n(317381),
    u = n(592125),
    c = n(979651),
    d = n(938475),
    _ = n(689938);
function E(e, t, n) {
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
let f = 3,
    h = 180000;
function p() {
    let e = c.Z.getCurrentClientVoiceChannelId(null);
    if (null == e) return !1;
    let t = u.Z.getChannel(e);
    return !(null == t || !t.isPrivate() || t.recipients.length > 1 || d.ZP.countVoiceStatesForChannel(e) > 1) && null == l.ZP.getSelfEmbeddedActivityForChannel(e) && !0;
}
function m() {
    if (!p()) return;
    let e = c.Z.getCurrentClientVoiceChannelId(null);
    if (null != e) a.Z.sendBotMessage(e, _.Z.Messages.BOT_CALL_IDLE_DISCONNECT_2.format({ number: f })), o.default.selectVoiceChannel(null);
}
class I extends s.Z {
    constructor(...e) {
        super(...e),
            E(this, 'idleTimeout', new i.V7()),
            E(this, 'handleConnectionClosed', () => {
                this.idleTimeout.stop();
            }),
            E(this, 'handleEmbeddedActivityDisconnect', () => {
                if (!!p()) this.idleTimeout.start(h, m, !0);
            }),
            E(this, 'handleVoiceStateUpdates', () => {
                if (!p()) {
                    this.idleTimeout.stop();
                    return;
                }
                this.idleTimeout.start(h, m, !1);
            }),
            E(this, 'actions', {
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
                CONNECTION_CLOSED: this.handleConnectionClosed,
                EMBEDDED_ACTIVITY_CLOSE: this.handleEmbeddedActivityDisconnect
            });
    }
}
t.Z = new I();
