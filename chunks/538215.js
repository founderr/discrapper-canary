var r = n(47120);
var i = n(147913),
    a = n(358221),
    o = n(729052),
    s = n(592125),
    l = n(979651),
    u = n(556076);
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
class d extends i.Z {
    handleVoiceChannelSelect(e) {
        let { channelId: t, guildId: n } = e;
        if (null == t || null == n) return;
        let r = s.Z.getChannel(t);
        if (null != r && (0, o.vS)(r) && r.isGuildVoice()) {
            let e = a.Z.getParticipants(t).length,
                n = l.Z.isInChannel(t),
                r = e === (n ? 1 : 0),
                i = e === (n ? 2 : 1);
            r ? u.y(t, r) : i && u.y(t, r);
        }
    }
    constructor(...e) {
        super(...e), c(this, 'actions', { VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect });
    }
}
t.Z = new d();
