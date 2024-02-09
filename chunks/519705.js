"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007"), n("702976");
var a = n("872717"),
  l = n("819855"),
  i = n("913144"),
  u = n("679428"),
  r = n("282109"),
  s = n("568734"),
  d = n("34676"),
  o = n("49111"),
  f = n("397336"),
  c = n("782340"),
  _ = {
    open(e) {
      i.default.dispatch({
        type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
        guildId: e
      })
    },
    close() {
      i.default.dispatch({
        type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
      })
    },
    updateGuildNotificationSettings(e, t, n, a) {
      let l = (0, d.getCurrentGuildSettings)(e);
      u.default.saveUserGuildSettings(e, t), i.default.dispatch({
        type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
        guildId: e,
        settings: t
      }), (0, d.trackGuildNotificationSettingsUpdate)(e, t, l, n, a)
    },
    updateGuildAndChannelNotificationSettings(e, t, n, a) {
      let l = Object.keys(t.channel_overrides),
        r = (0, d.getCurrentGuildSettings)(e),
        s = (0, d.getManyCurrentChannelSettings)(e, l);
      u.default.saveUserGuildSettings(e, t), i.default.dispatch({
        type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
        guildId: e,
        settings: t
      }), (0, d.trackGuildNotificationSettingsUpdate)(e, t, r, n, a), Object.keys(t.channel_overrides).forEach(l => {
        let i = s.get(l);
        (0, d.trackChannelNotificationSettingsUpdate)(e, l, t.channel_overrides[l], i, n, a)
      })
    },
    updateGuildNotificationSettingsBulk(e, t, n) {
      let a = Object.keys(e),
        l = (0, d.getManyCurrentGuildSettings)(a);
      u.default.saveUserGuildSettingsBulk(e), Object.entries(e).forEach(e => {
        let [a, u] = e, r = l.get(a);
        i.default.dispatch({
          type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
          guildId: a,
          settings: u
        }), (0, d.trackGuildNotificationSettingsUpdate)(a, u, r, t, n)
      })
    },
    updateChannelOverrideSettings(e, t, n, a, r) {
      let s = (0, d.getCurrentChannelSettings)(e, t);
      u.default.saveUserGuildSettings(e, {
        channel_overrides: {
          [t]: n
        }
      }), i.default.dispatch({
        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
        guildId: e,
        channelId: t,
        settings: n
      }), l.AccessibilityAnnouncer.announce(c.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED), (0, d.trackChannelNotificationSettingsUpdate)(e, t, n, s, a, r)
    },
    updateChannelOverrideSettingsBulk(e, t, n, a) {
      let l = Object.keys(t),
        r = (0, d.getManyCurrentChannelSettings)(e, l);
      u.default.saveUserGuildSettings(e, {
        channel_overrides: t
      }), i.default.dispatch({
        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
        guildId: e,
        overrides: t
      }), Object.keys(t).forEach(l => (0, d.trackChannelNotificationSettingsUpdate)(e, l, t[l], r.get(l), n, a))
    },
    setForumThreadsCreated(e, t) {
      let n = t ? f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON : f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
        a = t ? f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF : f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
        l = r.default.getChannelFlags(e);
      this.updateChannelOverrideSettings(e.guild_id, e.id, {
        flags: l & ~a | n
      }, d.NotificationLabel.forumThreadsCreated(t))
    },
    async setAccountFlag(e, t) {
      let n = r.default.accountNotificationSettings.flags,
        l = (0, s.setFlag)(n, e, t);
      await a.default.patch({
        url: o.Endpoints.ACCOUNT_NOTIFICATION_SETTINGS,
        body: {
          flags: l
        }
      }), await i.default.dispatch({
        type: "NOTIFICATION_SETTINGS_UPDATE",
        settings: {
          flags: l
        }
      })
    }
  }