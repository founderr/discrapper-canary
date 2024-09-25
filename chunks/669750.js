var r = n(47120);
var i = n(147913),
    a = n(362721),
    o = n(314897),
    s = n(592125),
    l = n(979651),
    u = n(906605),
    c = n(574176),
    d = n(106301),
    _ = n(866071),
    E = n(981631);
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
class h extends i.Z {
    constructor(...e) {
        super(...e),
            f(this, 'previousVoiceChannelId', void 0),
            f(this, 'actions', {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
                VOICE_CHANNEL_SELECT: (e) => this.handleVoiceChannelSelect(e),
                GUILD_MEMBER_UPDATE: (e) => this.handleGuildMemberUpdate(e),
                LOGOUT: () => this.handleLogout()
            }),
            f(this, 'handlePostConnectionOpen', () => {
                (0, u.UP)();
            }),
            f(this, 'handleVoiceChannelSelect', (e) => {
                let { channelId: t, guildId: n } = e,
                    { enableHangStatus: r, setDefaultStatus: i } = c.n.getCurrentConfig(
                        {
                            guildId: null != n ? n : E.lds,
                            location: 'HangStatusManager'
                        },
                        { autoTrackExposure: !0 }
                    );
                if (null == n && null == t) {
                    this.handleDisconnectFromVoiceChannel(), (this.previousVoiceChannelId = t);
                    return;
                }
                if (!r || t === this.previousVoiceChannelId) return;
                if (((this.previousVoiceChannelId = t), null == n || null == t)) return;
                let o = s.Z.getChannel(t);
                if (null == o || o.type !== E.d4z.GUILD_VOICE || !(0, a.w)(o, !0) || null != d.Z.getCurrentHangStatus()) return;
                let l = d.Z.getCurrentDefaultStatus();
                if ((null == l ? void 0 : l.expiresAt) != null && (null == l ? void 0 : l.expiresAt) >= Date.now()) {
                    if (l.status === E.tNA.CUSTOM && null != l.customHangStatus) {
                        let { status: e, emoji: t } = l.customHangStatus;
                        if (null != t && !(0, _.K)(t, o)) return;
                        (0, u._s)(e, t);
                        return;
                    }
                    if (null == l.status) return;
                    else {
                        (0, u.Zx)(l.status);
                        return;
                    }
                }
                i && (0, u.Zx)(E.tNA.CHILLING);
            }),
            f(this, 'handleGuildMemberUpdate', (e) => {
                let { user: t, guildId: n } = e;
                if (t.id !== o.default.getId()) return;
                let r = l.Z.getCurrentClientVoiceChannelId(n);
                if (null == r || null == d.Z.getCurrentHangStatus()) return;
                let i = s.Z.getChannel(r);
                !(0, a.w)(i, !0) && (0, u.Sc)();
            }),
            f(this, 'handleDisconnectFromVoiceChannel', () => {
                (0, u.Sc)();
            }),
            f(this, 'handleLogout', () => {
                this.handleDisconnectFromVoiceChannel();
            });
    }
}
t.Z = new h();
