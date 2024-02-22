"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007"), n("702976");
var i = n("872717"),
  r = n("819855"),
  l = n("913144"),
  s = n("679428"),
  a = n("282109"),
  o = n("568734"),
  u = n("34676"),
  c = n("299039"),
  d = n("49111"),
  f = n("397336"),
  h = n("782340"),
  E = {
    open(e) {
      l.default.dispatch({
        type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
        guildId: e
      })
    },
    close() {
      l.default.dispatch({
        type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
      })
    },
    updateGuildNotificationSettings(e, t, n, i) {
      let r = (0, u.getCurrentGuildSettings)(e);
      s.default.saveUserGuildSettings(e, t), l.default.dispatch({
        type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
        guildId: e,
        settings: t
      }), (0, u.trackGuildNotificationSettingsUpdate)(e, t, r, n, i)
    },
    updateGuildAndChannelNotificationSettings(e, t, n, i) {
      let r = c.default.keys(t.channel_overrides),
        a = (0, u.getCurrentGuildSettings)(e),
        o = (0, u.getManyCurrentChannelSettings)(e, r);
      s.default.saveUserGuildSettings(e, t), l.default.dispatch({
        type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
        guildId: e,
        settings: t
      }), (0, u.trackGuildNotificationSettingsUpdate)(e, t, a, n, i), c.default.keys(t.channel_overrides).forEach(r => {
        let l = o.get(r);
        (0, u.trackChannelNotificationSettingsUpdate)(e, r, t.channel_overrides[r], l, n, i)
      })
    },
    updateGuildNotificationSettingsBulk(e, t, n) {
      let i = c.default.keys(e),
        r = (0, u.getManyCurrentGuildSettings)(i);
      s.default.saveUserGuildSettingsBulk(e), c.default.entries(e).forEach(e => {
        let [i, s] = e, a = r.get(i);
        l.default.dispatch({
          type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
          guildId: i,
          settings: s
        }), (0, u.trackGuildNotificationSettingsUpdate)(i, s, a, t, n)
      })
    },
    updateChannelOverrideSettings(e, t, n, i, a) {
      let o = (0, u.getCurrentChannelSettings)(e, t);
      s.default.saveUserGuildSettings(e, {
        channel_overrides: {
          [t]: n
        }
      }), l.default.dispatch({
        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
        guildId: e,
        channelId: t,
        settings: n
      }), r.AccessibilityAnnouncer.announce(h.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED), (0, u.trackChannelNotificationSettingsUpdate)(e, t, n, o, i, a)
    },
    updateChannelOverrideSettingsBulk(e, t, n, i) {
      let r = c.default.keys(t),
        a = (0, u.getManyCurrentChannelSettings)(e, r);
      s.default.saveUserGuildSettings(e, {
        channel_overrides: t
      }), l.default.dispatch({
        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
        guildId: e,
        overrides: t
      }), c.default.keys(t).forEach(r => (0, u.trackChannelNotificationSettingsUpdate)(e, r, t[r], a.get(r), n, i))
    },
    setForumThreadsCreated(e, t) {
      let n = t ? f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON : f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
        i = t ? f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF : f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
        r = a.default.getChannelFlags(e);
      this.updateChannelOverrideSettings(e.guild_id, e.id, {
        flags: r & ~i | n
      }, u.NotificationLabel.forumThreadsCreated(t))
    },
    async setAccountFlag(e, t) {
      let n = a.default.accountNotificationSettings.flags,
        r = (0, o.setFlag)(n, e, t);
      await i.default.patch({
        url: d.Endpoints.ACCOUNT_NOTIFICATION_SETTINGS,
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