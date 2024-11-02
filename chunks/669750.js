n(47120);
var r = n(147913),
    i = n(362721),
    a = n(314897),
    s = n(592125),
    o = n(979651),
    l = n(906605),
    u = n(574176),
    c = n(106301),
    d = n(866071),
    f = n(981631);
function _(e, t, n) {
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
class h extends r.Z {
    constructor(...e) {
        super(...e),
            _(this, 'previousVoiceChannelId', void 0),
            _(this, 'actions', {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
                VOICE_CHANNEL_SELECT: (e) => this.handleVoiceChannelSelect(e),
                GUILD_MEMBER_UPDATE: (e) => this.handleGuildMemberUpdate(e),
                LOGOUT: () => this.handleLogout()
            }),
            _(this, 'handlePostConnectionOpen', () => {
                (0, l.UP)();
            }),
            _(this, 'handleVoiceChannelSelect', (e) => {
                let { channelId: t, guildId: n } = e,
                    { enableHangStatus: r, setDefaultStatus: a } = u.n.getCurrentConfig(
                        {
                            guildId: null != n ? n : f.lds,
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
                if (null == o || o.type !== f.d4z.GUILD_VOICE || !(0, i.w)(o, !0) || null != c.Z.getCurrentHangStatus()) return;
                let _ = c.Z.getCurrentDefaultStatus();
                if ((null == _ ? void 0 : _.expiresAt) != null && (null == _ ? void 0 : _.expiresAt) >= Date.now()) {
                    if (_.status === f.tNA.CUSTOM && null != _.customHangStatus) {
                        let { status: e, emoji: t } = _.customHangStatus;
                        if (null != t && !(0, d.K)(t, o)) return;
                        (0, l._s)(e, t);
                        return;
                    }
                    if (null == _.status) return;
                    else {
                        (0, l.Zx)(_.status);
                        return;
                    }
                }
                a && (0, l.Zx)(f.tNA.CHILLING);
            }),
            _(this, 'handleGuildMemberUpdate', (e) => {
                let { user: t, guildId: n } = e;
                if (t.id !== a.default.getId()) return;
                let r = o.Z.getCurrentClientVoiceChannelId(n);
                if (null == r || null == c.Z.getCurrentHangStatus()) return;
                let u = s.Z.getChannel(r);
                !(0, i.w)(u, !0) && (0, l.Sc)();
            }),
            _(this, 'handleDisconnectFromVoiceChannel', () => {
                (0, l.Sc)();
            }),
            _(this, 'handleLogout', () => {
                this.handleDisconnectFromVoiceChannel();
            });
    }
}
t.Z = new h();
