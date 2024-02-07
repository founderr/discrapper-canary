"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
});
var n = a("913144"),
  l = a("679428"),
  s = a("282109"),
  u = {
    update(e) {
      n.default.dispatch({
        type: "CHANNEL_COLLAPSE",
        channelId: e
      })
    },
    toggleCollapseGuild(e) {
      l.default.saveUserGuildSettings(e, {
        hide_muted_channels: !s.default.isGuildCollapsed(e)
      }), n.default.dispatch({
        type: "GUILD_TOGGLE_COLLAPSE_MUTED",
        guildId: e
      })
    }
  }