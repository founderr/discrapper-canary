"use strict";
n.r(e), n.d(e, {
  default: function() {
    return h
  }
}), n("222007"), n("702976");
var i = n("872717"),
  r = n("819855"),
  l = n("913144"),
  s = n("679428"),
  a = n("282109"),
  o = n("568734"),
  u = n("34676"),
  c = n("49111"),
  d = n("397336"),
  f = n("782340"),
  h = {
    open(t) {
      l.default.dispatch({
        type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
        guildId: t
      })
    },
    close() {
      l.default.dispatch({
        type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
      })
    },
    updateGuildNotificationSettings(t, e, n, i) {
      let r = (0, u.getCurrentGuildSettings)(t);
      s.default.saveUserGuildSettings(t, e), l.default.dispatch({
        type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
        guildId: t,
        settings: e
      }), (0, u.trackGuildNotificationSettingsUpdate)(t, e, r, n, i)
    },
    updateGuildAndChannelNotificationSettings(t, e, n, i) {
      let r = Object.keys(e.channel_overrides),
        a = (0, u.getCurrentGuildSettings)(t),
        o = (0, u.getManyCurrentChannelSettings)(t, r);
      s.default.saveUserGuildSettings(t, e), l.default.dispatch({
        type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
        guildId: t,
        settings: e
      }), (0, u.trackGuildNotificationSettingsUpdate)(t, e, a, n, i), Object.keys(e.channel_overrides).forEach(r => {
        let l = o.get(r);
        (0, u.trackChannelNotificationSettingsUpdate)(t, r, e.channel_overrides[r], l, n, i)
      })
    },
    updateGuildNotificationSettingsBulk(t, e, n) {
      let i = Object.keys(t),
        r = (0, u.getManyCurrentGuildSettings)(i);
      s.default.saveUserGuildSettingsBulk(t), Object.entries(t).forEach(t => {
        let [i, s] = t, a = r.get(i);
        l.default.dispatch({
          type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
          guildId: i,
          settings: s
        }), (0, u.trackGuildNotificationSettingsUpdate)(i, s, a, e, n)
      })
    },
    updateChannelOverrideSettings(t, e, n, i, a) {
      let o = (0, u.getCurrentChannelSettings)(t, e);
      s.default.saveUserGuildSettings(t, {
        channel_overrides: {
          [e]: n
        }
      }), l.default.dispatch({
        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
        guildId: t,
        channelId: e,
        settings: n
      }), r.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED), (0, u.trackChannelNotificationSettingsUpdate)(t, e, n, o, i, a)
    },
    updateChannelOverrideSettingsBulk(t, e, n, i) {
      let r = Object.keys(e),
        a = (0, u.getManyCurrentChannelSettings)(t, r);
      s.default.saveUserGuildSettings(t, {
        channel_overrides: e
      }), l.default.dispatch({
        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
        guildId: t,
        overrides: e
      }), Object.keys(e).forEach(r => (0, u.trackChannelNotificationSettingsUpdate)(t, r, e[r], a.get(r), n, i))
    },
    setForumThreadsCreated(t, e) {
      let n = e ? d.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON : d.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
        i = e ? d.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF : d.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
        r = a.default.getChannelFlags(t);
      this.updateChannelOverrideSettings(t.guild_id, t.id, {
        flags: r & ~i | n
      }, u.NotificationLabel.forumThreadsCreated(e))
    },
    async setAccountFlag(t, e) {
      let n = a.default.accountNotificationSettings.flags,
        r = (0, o.setFlag)(n, t, e);
      await i.default.patch({
        url: c.Endpoints.ACCOUNT_NOTIFICATION_SETTINGS,
        body: {
          flags: r
        }
      }), await l.default.dispatch({
        type: "NOTIFICATION_SETTINGS_UPDATE",
        settings: {
          flags: r
        }
      })
    }
  }