n(47120);
var r = n(846519),
    i = n(904245),
    a = n(287734),
    s = n(147913),
    o = n(317381),
    l = n(592125),
    u = n(979651),
    c = n(938475),
    d = n(388032);
function f(e, t, n) {
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
let _ = 180000;
function p() {
    let e = u.Z.getCurrentClientVoiceChannelId(null);
    if (null == e) return !1;
    let t = l.Z.getChannel(e);
    return !(null == t || !t.isPrivate() || t.recipients.length > 1 || c.ZP.countVoiceStatesForChannel(e) > 1) && null == o.ZP.getSelfEmbeddedActivityForChannel(e) && !0;
}
function h() {
    if (!p()) return;
    let e = u.Z.getCurrentClientVoiceChannelId(null);
    if (null != e) i.Z.sendBotMessage(e, d.intl.formatToPlainString(d.t.XYof5O, { number: 3 })), a.default.selectVoiceChannel(null);
}
class m extends s.Z {
    constructor(...e) {
        super(...e),
            f(this, 'idleTimeout', new r.V7()),
            f(this, 'handleConnectionClosed', () => {
                this.idleTimeout.stop();
            }),
            f(this, 'handleEmbeddedActivityDisconnect', () => {
                if (!!p()) this.idleTimeout.start(_, h, !0);
            }),
            f(this, 'handleVoiceStateUpdates', () => {
                if (!p()) {
                    this.idleTimeout.stop();
                    return;
                }
                this.idleTimeout.start(_, h, !1);
            }),
            f(this, 'actions', {
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
                CONNECTION_CLOSED: this.handleConnectionClosed,
                EMBEDDED_ACTIVITY_CLOSE: this.handleEmbeddedActivityDisconnect
            });
    }
}
t.Z = new m();
