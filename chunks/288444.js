var i = r(47120);
var a = r(846519),
    s = r(904245),
    o = r(287734),
    l = r(147913),
    u = r(317381),
    c = r(592125),
    d = r(979651),
    f = r(938475),
    _ = r(388032);
function h(e, n, r) {
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
let p = 3,
    m = 180000;
function g() {
    let e = d.Z.getCurrentClientVoiceChannelId(null);
    if (null == e) return !1;
    let n = c.Z.getChannel(e);
    return !(null == n || !n.isPrivate() || n.recipients.length > 1 || f.ZP.countVoiceStatesForChannel(e) > 1) && null == u.ZP.getSelfEmbeddedActivityForChannel(e) && !0;
}
function E() {
    if (!g()) return;
    let e = d.Z.getCurrentClientVoiceChannelId(null);
    if (null != e) s.Z.sendBotMessage(e, _.intl.formatToPlainString(_.t.XYof5O, { number: p })), o.default.selectVoiceChannel(null);
}
class v extends l.Z {
    constructor(...e) {
        super(...e),
            h(this, 'idleTimeout', new a.V7()),
            h(this, 'handleConnectionClosed', () => {
                this.idleTimeout.stop();
            }),
            h(this, 'handleEmbeddedActivityDisconnect', () => {
                if (!!g()) this.idleTimeout.start(m, E, !0);
            }),
            h(this, 'handleVoiceStateUpdates', () => {
                if (!g()) {
                    this.idleTimeout.stop();
                    return;
                }
                this.idleTimeout.start(m, E, !1);
            }),
            h(this, 'actions', {
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
                CONNECTION_CLOSED: this.handleConnectionClosed,
                EMBEDDED_ACTIVITY_CLOSE: this.handleEmbeddedActivityDisconnect
            });
    }
}
n.Z = new v();
