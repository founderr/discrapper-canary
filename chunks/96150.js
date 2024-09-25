var r = n(47120);
var i = n(570140),
    a = n(317770),
    o = n(280837),
    s = n(592125),
    l = n(914010),
    u = n(823379);
function c(e, t, n) {
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
class d extends a.Z {
    _initialize() {
        i.Z.subscribe('VOICE_CHANNEL_SELECT', this.handleVoiceChannelSelect), i.Z.subscribe('LOGOUT', this.handleLogout);
    }
    _terminate() {
        i.Z.unsubscribe('VOICE_CHANNEL_SELECT', this.handleVoiceChannelSelect), i.Z.unsubscribe('LOGOUT', this.handleLogout);
    }
    constructor(...e) {
        super(...e),
            c(this, 'handleVoiceChannelSelect', (e) => {
                let { channelId: t, guildId: n } = e;
                if (null != t) {
                    let e = s.Z.getChannel(t);
                    if (null == e || e.isGuildStageVoice()) return;
                }
                this.terminate();
                let r = null == t ? null : null != n ? n : null;
                this.handleDisconnectFromStageChannel(r);
            }),
            c(this, 'handleDisconnectFromStageChannel', (e) => {
                let t = l.Z.getGuildId();
                (0, o.O)([t, e].filter(u.lm));
            }),
            c(this, 'handleLogout', () => {
                this.terminate(), this.handleDisconnectFromStageChannel(null);
            });
    }
}
t.Z = new d();
