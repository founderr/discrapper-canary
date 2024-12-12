var i = r(47120);
var a = r(789020);
var s = r(544891),
    o = r(780384),
    l = r(570140),
    u = r(149071),
    c = r(9156),
    d = r(630388),
    f = r(621600),
    _ = r(709054),
    h = r(981631),
    p = r(526761),
    m = r(388032);
n.Z = {
    open(e) {
        l.Z.dispatch({
            type: 'NOTIFICATION_SETTINGS_MODAL_OPEN',
            guildId: e
        });
    },
    close() {
        l.Z.dispatch({ type: 'NOTIFICATION_SETTINGS_MODAL_CLOSE' });
    },
    updateGuildNotificationSettings(e, n, r, i) {
        let a = (0, f.GA)(e);
        u.Z.saveUserGuildSettings(e, n),
            l.Z.dispatch({
                type: 'USER_GUILD_SETTINGS_GUILD_UPDATE',
                guildId: e,
                settings: n
            }),
            (0, f.Wq)(e, n, a, r, i);
    },
    updateGuildAndChannelNotificationSettings(e, n, r, i) {
        let a = _.default.keys(n.channel_overrides),
            s = (0, f.GA)(e),
            o = (0, f.wK)(e, a);
        u.Z.saveUserGuildSettings(e, n),
            l.Z.dispatch({
                type: 'USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE',
                guildId: e,
                settings: n
            }),
            (0, f.Wq)(e, n, s, r, i),
            _.default.keys(n.channel_overrides).forEach((a) => {
                let s = o.get(a);
                (0, f.jz)(e, a, n.channel_overrides[a], s, r, i);
            });
    },
    updateGuildNotificationSettingsBulk(e, n, r) {
        let i = _.default.keys(e),
            a = (0, f.rU)(i);
        u.Z.saveUserGuildSettingsBulk(e),
            _.default.entries(e).forEach((e) => {
                let [i, s] = e,
                    o = a.get(i);
                l.Z.dispatch({
                    type: 'USER_GUILD_SETTINGS_GUILD_UPDATE',
                    guildId: i,
                    settings: s
                }),
                    (0, f.Wq)(i, s, o, n, r);
            });
    },
    updateChannelOverrideSettings(e, n, r, i, a) {
        let s = (0, f.I)(e, n),
            c = { channel_overrides: { [n]: r } };
        u.Z.saveUserGuildSettings(e, c),
            l.Z.dispatch({
                type: 'USER_GUILD_SETTINGS_CHANNEL_UPDATE',
                guildId: e,
                channelId: n,
                settings: r
            }),
            o.uv.announce(m.intl.string(m.t.MlIsJy)),
            (0, f.jz)(e, n, r, s, i, a);
    },
    updateChannelOverrideSettingsBulk(e, n, r, i) {
        let a = _.default.keys(n),
            s = { channel_overrides: n },
            o = (0, f.wK)(e, a);
        u.Z.saveUserGuildSettings(e, s),
            l.Z.dispatch({
                type: 'USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK',
                guildId: e,
                overrides: n
            }),
            _.default.keys(n).forEach((a) => (0, f.jz)(e, a, n[a], o.get(a), r, i));
    },
    setForumThreadsCreated(e, n) {
        let r = n ? p.ic.NEW_FORUM_THREADS_ON : p.ic.NEW_FORUM_THREADS_OFF,
            i = n ? p.ic.NEW_FORUM_THREADS_OFF : p.ic.NEW_FORUM_THREADS_ON,
            a = (c.ZP.getChannelFlags(e) & ~i) | r;
        this.updateChannelOverrideSettings(e.guild_id, e.id, { flags: a }, f.UE.forumThreadsCreated(n));
    },
    async setAccountFlag(e, n) {
        let r = c.ZP.accountNotificationSettings.flags,
            i = (0, d.mB)(r, e, n);
        await s.tn.patch({
            url: h.ANM.ACCOUNT_NOTIFICATION_SETTINGS,
            body: { flags: i },
            rejectWithError: !1
        }),
            await l.Z.dispatch({
                type: 'NOTIFICATION_SETTINGS_UPDATE',
                settings: { flags: i }
            });
    }
};
