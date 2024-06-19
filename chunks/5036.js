var l = a(570140),
  t = a(149071),
  i = a(9156);
n.Z = {
  update(e) {
    l.Z.dispatch({
      type: "CHANNEL_COLLAPSE",
      channelId: e
    })
  },
  toggleCollapseGuild(e) {
    t.Z.saveUserGuildSettings(e, {
      hide_muted_channels: !i.ZP.isGuildCollapsed(e)
    }), l.Z.dispatch({
      type: "GUILD_TOGGLE_COLLAPSE_MUTED",
      guildId: e
    })
  }
}