"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007"), n("702976");
var i = n("872717"),
  r = n("819855"),
  a = n("913144"),
  l = n("679428"),
  u = n("282109"),
  s = n("568734"),
  o = n("34676"),
  c = n("299039"),
  d = n("49111"),
  f = n("397336"),
  E = n("782340"),
  _ = {
    open(e) {
      a.default.dispatch({
        type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
        guildId: e
      })
    },
    close() {
      a.default.dispatch({
        type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
      })
    },
    updateGuildNotificationSettings(e, t, n, i) {
      let r = (0, o.getCurrentGuildSettings)(e);
      l.default.saveUserGuildSettings(e, t), a.default.dispatch({
        type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
        guildId: e,
        settings: t
      }), (0, o.trackGuildNotificationSettingsUpdate)(e, t, r, n, i)
    },
    updateGuildAndChannelNotificationSettings(e, t, n, i) {
      let r = c.default.keys(t.channel_overrides),
        u = (0, o.getCurrentGuildSettings)(e),
        s = (0, o.getManyCurrentChannelSettings)(e, r);
      l.default.saveUserGuildSettings(e, t), a.default.dispatch({
        type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
        guildId: e,
        settings: t
      }), (0, o.trackGuildNotificationSettingsUpdate)(e, t, u, n, i), c.default.keys(t.channel_overrides).forEach(r => {
        let a = s.get(r);
        (0, o.trackChannelNotificationSettingsUpdate)(e, r, t.channel_overrides[r], a, n, i)
      })
    },
    updateGuildNotificationSettingsBulk(e, t, n) {
      let i = c.default.keys(e),
        r = (0, o.getManyCurrentGuildSettings)(i);
      l.default.saveUserGuildSettingsBulk(e), c.default.entries(e).forEach(e => {
        let [i, l] = e, u = r.get(i);
        a.default.dispatch({
          type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
          guildId: i,
          settings: l
        }), (0, o.trackGuildNotificationSettingsUpdate)(i, l, u, t, n)
      })
    },
    updateChannelOverrideSettings(e, t, n, i, u) {
      let s = (0, o.getCurrentChannelSettings)(e, t);
      l.default.saveUserGuildSettings(e, {
        channel_overrides: {
          [t]: n
        }
      }), a.default.dispatch({
        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
        guildId: e,
        channelId: t,
        settings: n
      }), r.AccessibilityAnnouncer.announce(E.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED), (0, o.trackChannelNotificationSettingsUpdate)(e, t, n, s, i, u)
    },
    updateChannelOverrideSettingsBulk(e, t, n, i) {
      let r = c.default.keys(t),
        u = (0, o.getManyCurrentChannelSettings)(e, r);
      l.default.saveUserGuildSettings(e, {
        channel_overrides: t
      }), a.default.dispatch({
        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
        guildId: e,
        overrides: t
      }), c.default.keys(t).forEach(r => (0, o.trackChannelNotificationSettingsUpdate)(e, r, t[r], u.get(r), n, i))
    },
    setForumThreadsCreated(e, t) {
      let n = t ? f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON : f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
        i = t ? f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF : f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
        r = u.default.getChannelFlags(e);
      this.updateChannelOverrideSettings(e.guild_id, e.id, {
        flags: r & ~i | n
      }, o.NotificationLabel.forumThreadsCreated(t))
    },
    async setAccountFlag(e, t) {
      let n = u.default.accountNotificationSettings.flags,
        r = (0, s.setFlag)(n, e, t);
      await i.default.patch({
        url: d.Endpoints.ACCOUNT_NOTIFICATION_SETTINGS,
        body: {
          flags: r
        }
      }), await a.default.dispatch({
        type: "NOTIFICATION_SETTINGS_UPDATE",
        settings: {
          flags: r
        }
      })
    }
  }