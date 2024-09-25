var r = n(47120);
var i = n(789020);
var a = n(544891),
    o = n(780384),
    s = n(570140),
    l = n(149071),
    u = n(9156),
    c = n(630388),
    d = n(621600),
    _ = n(709054),
    E = n(981631),
    f = n(526761),
    h = n(689938);
t.Z = {
    open(e) {
        s.Z.dispatch({
            type: 'NOTIFICATION_SETTINGS_MODAL_OPEN',
            guildId: e
        });
    },
    close() {
        s.Z.dispatch({ type: 'NOTIFICATION_SETTINGS_MODAL_CLOSE' });
    },
    updateGuildNotificationSettings(e, t, n, r) {
        let i = (0, d.GA)(e);
        l.Z.saveUserGuildSettings(e, t),
            s.Z.dispatch({
                type: 'USER_GUILD_SETTINGS_GUILD_UPDATE',
                guildId: e,
                settings: t
            }),
            (0, d.Wq)(e, t, i, n, r);
    },
    updateGuildAndChannelNotificationSettings(e, t, n, r) {
        let i = _.default.keys(t.channel_overrides),
            a = (0, d.GA)(e),
            o = (0, d.wK)(e, i);
        l.Z.saveUserGuildSettings(e, t),
            s.Z.dispatch({
                type: 'USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE',
                guildId: e,
                settings: t
            }),
            (0, d.Wq)(e, t, a, n, r),
            _.default.keys(t.channel_overrides).forEach((i) => {
                let a = o.get(i);
                (0, d.jz)(e, i, t.channel_overrides[i], a, n, r);
            });
    },
    updateGuildNotificationSettingsBulk(e, t, n) {
        let r = _.default.keys(e),
            i = (0, d.rU)(r);
        l.Z.saveUserGuildSettingsBulk(e),
            _.default.entries(e).forEach((e) => {
                let [r, a] = e,
                    o = i.get(r);
                s.Z.dispatch({
                    type: 'USER_GUILD_SETTINGS_GUILD_UPDATE',
                    guildId: r,
                    settings: a
                }),
                    (0, d.Wq)(r, a, o, t, n);
            });
    },
    updateChannelOverrideSettings(e, t, n, r, i) {
        let a = (0, d.I)(e, t),
            u = { channel_overrides: { [t]: n } };
        l.Z.saveUserGuildSettings(e, u),
            s.Z.dispatch({
                type: 'USER_GUILD_SETTINGS_CHANNEL_UPDATE',
                guildId: e,
                channelId: t,
                settings: n
            }),
            o.uv.announce(h.Z.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED),
            (0, d.jz)(e, t, n, a, r, i);
    },
    updateChannelOverrideSettingsBulk(e, t, n, r) {
        let i = _.default.keys(t),
            a = { channel_overrides: t },
            o = (0, d.wK)(e, i);
        l.Z.saveUserGuildSettings(e, a),
            s.Z.dispatch({
                type: 'USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK',
                guildId: e,
                overrides: t
            }),
            _.default.keys(t).forEach((i) => (0, d.jz)(e, i, t[i], o.get(i), n, r));
    },
    setForumThreadsCreated(e, t) {
        let n = t ? f.ic.NEW_FORUM_THREADS_ON : f.ic.NEW_FORUM_THREADS_OFF,
            r = t ? f.ic.NEW_FORUM_THREADS_OFF : f.ic.NEW_FORUM_THREADS_ON,
            i = (u.ZP.getChannelFlags(e) & ~r) | n;
        this.updateChannelOverrideSettings(e.guild_id, e.id, { flags: i }, d.UE.forumThreadsCreated(t));
    },
    async setAccountFlag(e, t) {
        let n = u.ZP.accountNotificationSettings.flags,
            r = (0, c.mB)(n, e, t);
        await a.tn.patch({
            url: E.ANM.ACCOUNT_NOTIFICATION_SETTINGS,
            body: { flags: r }
        }),
            await s.Z.dispatch({
                type: 'NOTIFICATION_SETTINGS_UPDATE',
                settings: { flags: r }
            });
    }
};
