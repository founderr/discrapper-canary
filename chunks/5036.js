var l = t(570140),
    a = t(149071),
    i = t(9156);
n.Z = {
    update(e) {
        l.Z.dispatch({
            type: 'CHANNEL_COLLAPSE',
            channelId: e
        });
    },
    toggleCollapseGuild(e) {
        a.Z.saveUserGuildSettings(e, { hide_muted_channels: !i.ZP.isGuildCollapsed(e) }),
            l.Z.dispatch({
                type: 'GUILD_TOGGLE_COLLAPSE_MUTED',
                guildId: e
            });
    }
};
