"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007"), n("702976");
var i = n("872717"),
  l = n("819855"),
  r = n("913144"),
  o = n("679428"),
  a = n("282109"),
  s = n("568734"),
  u = n("34676"),
  c = n("49111"),
  d = n("397336"),
  f = n("782340"),
  E = {
    open(e) {
      r.default.dispatch({
        type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
        guildId: e
      })
    },
    close() {
      r.default.dispatch({
        type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
      })
    },
    updateGuildNotificationSettings(e, t, n, i) {
      let l = (0, u.getCurrentGuildSettings)(e);
      o.default.saveUserGuildSettings(e, t), r.default.dispatch({
        type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
        guildId: e,
        settings: t
      }), (0, u.trackGuildNotificationSettingsUpdate)(e, t, l, n, i)
    },
    updateGuildAndChannelNotificationSettings(e, t, n, i) {
      let l = Object.keys(t.channel_overrides),
        a = (0, u.getCurrentGuildSettings)(e),
        s = (0, u.getManyCurrentChannelSettings)(e, l);
      o.default.saveUserGuildSettings(e, t), r.default.dispatch({
        type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
        guildId: e,
        settings: t
      }), (0, u.trackGuildNotificationSettingsUpdate)(e, t, a, n, i), Object.keys(t.channel_overrides).forEach(l => {
        let r = s.get(l);
        (0, u.trackChannelNotificationSettingsUpdate)(e, l, t.channel_overrides[l], r, n, i)
      })
    },
    updateGuildNotificationSettingsBulk(e, t, n) {
      let i = Object.keys(e),
        l = (0, u.getManyCurrentGuildSettings)(i);
      o.default.saveUserGuildSettingsBulk(e), Object.entries(e).forEach(e => {
        let [i, o] = e, a = l.get(i);
        r.default.dispatch({
          type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
          guildId: i,
          settings: o
        }), (0, u.trackGuildNotificationSettingsUpdate)(i, o, a, t, n)
      })
    },
    updateChannelOverrideSettings(e, t, n, i, a) {
      let s = (0, u.getCurrentChannelSettings)(e, t);
      o.default.saveUserGuildSettings(e, {
        channel_overrides: {
          [t]: n
        }
      }), r.default.dispatch({
        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
        guildId: e,
        channelId: t,
        settings: n
      }), l.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED), (0, u.trackChannelNotificationSettingsUpdate)(e, t, n, s, i, a)
    },
    updateChannelOverrideSettingsBulk(e, t, n, i) {
      let l = Object.keys(t),
        a = (0, u.getManyCurrentChannelSettings)(e, l);
      o.default.saveUserGuildSettings(e, {
        channel_overrides: t
      }), r.default.dispatch({
        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
        guildId: e,
        overrides: t
      }), Object.keys(t).forEach(l => (0, u.trackChannelNotificationSettingsUpdate)(e, l, t[l], a.get(l), n, i))
    },
    setForumThreadsCreated(e, t) {
      let n = t ? d.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON : d.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
        i = t ? d.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF : d.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
        l = a.default.getChannelFlags(e);
      this.updateChannelOverrideSettings(e.guild_id, e.id, {
        flags: l & ~i | n
      }, u.NotificationLabel.forumThreadsCreated(t))
    },
    async setAccountFlag(e, t) {
      let n = a.default.accountNotificationSettings.flags,
        l = (0, s.setFlag)(n, e, t);
      await i.default.patch({
        url: c.Endpoints.ACCOUNT_NOTIFICATION_SETTINGS,
        body: {
          flags: l
        }
      }), await r.default.dispatch({
        type: "NOTIFICATION_SETTINGS_UPDATE",
        settings: {
          flags: l
        }
      })
    }
  }