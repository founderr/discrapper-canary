var r = n(47120);
var i = n(570140),
    a = n(287734),
    o = n(147913),
    s = n(703656),
    l = n(769654),
    u = n(131951),
    c = n(944486),
    d = n(914010),
    _ = n(981631);
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
class f extends o.Z {
    handleGuildCreate(e) {
        let { guild: t } = e,
            n = c.Z.getChannelId(_.ME),
            r = c.Z.getVoiceChannelId();
        t.id === n && (0, l.X)(t.id), t.id === r && !1 !== t.unavailable && null == r && a.default.selectVoiceChannel((0, c.C)(t.id));
    }
    handleChannelCreate(e) {
        let { channel: t } = e;
        if (t.type !== _.d4z.GROUP_DM) return;
        let n = t.originChannelId,
            r = c.Z.getChannelId(_.kod);
        null == d.Z.getGuildId() && null != n && n === r && (0, s.uL)(_.Z5c.CHANNEL(_.ME, t.id)), null != n && n === c.Z.getVoiceChannelId() && a.default.selectVoiceChannel(t.id, u.Z.isVideoEnabled());
    }
    handleLogout() {
        i.Z.dispatch({
            type: 'VOICE_CHANNEL_SELECT',
            channelId: null,
            guildId: null,
            video: !1,
            currentVoiceChannelId: null
        });
    }
    constructor(...e) {
        super(...e),
            E(this, 'actions', {
                GUILD_CREATE: this.handleGuildCreate,
                CHANNEL_CREATE: this.handleChannelCreate,
                LOGOUT: this.handleLogout
            });
    }
}
t.Z = new f();
