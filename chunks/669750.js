var i = r(47120);
var a = r(147913),
    s = r(362721),
    o = r(314897),
    l = r(592125),
    u = r(979651),
    c = r(906605),
    d = r(574176),
    f = r(106301),
    _ = r(866071),
    h = r(981631);
function p(e, n, r) {
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
class m extends a.Z {
    constructor(...e) {
        super(...e),
            p(this, 'previousVoiceChannelId', void 0),
            p(this, 'actions', {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
                VOICE_CHANNEL_SELECT: (e) => this.handleVoiceChannelSelect(e),
                GUILD_MEMBER_UPDATE: (e) => this.handleGuildMemberUpdate(e),
                LOGOUT: () => this.handleLogout()
            }),
            p(this, 'handlePostConnectionOpen', () => {
                (0, c.UP)();
            }),
            p(this, 'handleVoiceChannelSelect', (e) => {
                let { channelId: n, guildId: r } = e,
                    { enableHangStatus: i, setDefaultStatus: a } = d.n.getCurrentConfig(
                        {
                            guildId: null != r ? r : h.lds,
                            location: 'HangStatusManager'
                        },
                        { autoTrackExposure: !0 }
                    );
                if (null == r && null == n) {
                    this.handleDisconnectFromVoiceChannel(), (this.previousVoiceChannelId = n);
                    return;
                }
                if (!i || n === this.previousVoiceChannelId) return;
                if (((this.previousVoiceChannelId = n), null == r || null == n)) return;
                let o = l.Z.getChannel(n);
                if (null == o || o.type !== h.d4z.GUILD_VOICE || !(0, s.wQ)(o, !0) || null != f.Z.getCurrentHangStatus()) return;
                let u = f.Z.getCurrentDefaultStatus();
                if ((null == u ? void 0 : u.expiresAt) != null && (null == u ? void 0 : u.expiresAt) >= Date.now()) {
                    if (u.status === h.tNA.CUSTOM && null != u.customHangStatus) {
                        let { status: e, emoji: n } = u.customHangStatus;
                        if (null != n && !(0, _.K)(n, o)) return;
                        (0, c._s)(e, n);
                        return;
                    }
                    if (null == u.status) return;
                    else {
                        (0, c.Zx)(u.status);
                        return;
                    }
                }
                a && (0, c.Zx)(h.tNA.CHILLING);
            }),
            p(this, 'handleGuildMemberUpdate', (e) => {
                let { user: n, guildId: r } = e;
                if (n.id !== o.default.getId()) return;
                let i = u.Z.getCurrentClientVoiceChannelId(r);
                if (null == i || null == f.Z.getCurrentHangStatus()) return;
                let a = l.Z.getChannel(i);
                !(0, s.wQ)(a, !0) && (0, c.Sc)();
            }),
            p(this, 'handleDisconnectFromVoiceChannel', () => {
                (0, c.Sc)();
            }),
            p(this, 'handleLogout', () => {
                this.handleDisconnectFromVoiceChannel();
            });
    }
}
n.Z = new m();
