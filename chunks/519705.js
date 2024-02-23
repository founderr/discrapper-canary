"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007"), n("702976");
var i = n("872717"),
  a = n("819855"),
  r = n("913144"),
  s = n("679428"),
  l = n("282109"),
  u = n("568734"),
  o = n("34676"),
  d = n("299039"),
  c = n("49111"),
  f = n("397336"),
  E = n("782340"),
  p = {
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
      let a = (0, o.getCurrentGuildSettings)(e);
      s.default.saveUserGuildSettings(e, t), r.default.dispatch({
        type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
        guildId: e,
        settings: t
      }), (0, o.trackGuildNotificationSettingsUpdate)(e, t, a, n, i)
    },
    updateGuildAndChannelNotificationSettings(e, t, n, i) {
      let a = d.default.keys(t.channel_overrides),
        l = (0, o.getCurrentGuildSettings)(e),
        u = (0, o.getManyCurrentChannelSettings)(e, a);
      s.default.saveUserGuildSettings(e, t), r.default.dispatch({
        type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
        guildId: e,
        settings: t
      }), (0, o.trackGuildNotificationSettingsUpdate)(e, t, l, n, i), d.default.keys(t.channel_overrides).forEach(a => {
        let r = u.get(a);
        (0, o.trackChannelNotificationSettingsUpdate)(e, a, t.channel_overrides[a], r, n, i)
      })
    },
    updateGuildNotificationSettingsBulk(e, t, n) {
      let i = d.default.keys(e),
        a = (0, o.getManyCurrentGuildSettings)(i);
      s.default.saveUserGuildSettingsBulk(e), d.default.entries(e).forEach(e => {
        let [i, s] = e, l = a.get(i);
        r.default.dispatch({
          type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
          guildId: i,
          settings: s
        }), (0, o.trackGuildNotificationSettingsUpdate)(i, s, l, t, n)
      })
    },
    updateChannelOverrideSettings(e, t, n, i, l) {
      let u = (0, o.getCurrentChannelSettings)(e, t);
      s.default.saveUserGuildSettings(e, {
        channel_overrides: {
          [t]: n
        }
      }), r.default.dispatch({
        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
        guildId: e,
        channelId: t,
        settings: n
      }), a.AccessibilityAnnouncer.announce(E.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED), (0, o.trackChannelNotificationSettingsUpdate)(e, t, n, u, i, l)
    },
    updateChannelOverrideSettingsBulk(e, t, n, i) {
      let a = d.default.keys(t),
        l = (0, o.getManyCurrentChannelSettings)(e, a);
      s.default.saveUserGuildSettings(e, {
        channel_overrides: t
      }), r.default.dispatch({
        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
        guildId: e,
        overrides: t
      }), d.default.keys(t).forEach(a => (0, o.trackChannelNotificationSettingsUpdate)(e, a, t[a], l.get(a), n, i))
    },
    setForumThreadsCreated(e, t) {
      let n = t ? f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON : f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
        i = t ? f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF : f.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
        a = l.default.getChannelFlags(e);
      this.updateChannelOverrideSettings(e.guild_id, e.id, {
        flags: a & ~i | n
      }, o.NotificationLabel.forumThreadsCreated(t))
    },
    async setAccountFlag(e, t) {
      let n = l.default.accountNotificationSettings.flags,
        a = (0, u.setFlag)(n, e, t);
      await i.default.patch({
        url: c.Endpoints.ACCOUNT_NOTIFICATION_SETTINGS,
        body: {
          flags: a
        }
      }), await r.default.dispatch({
        type: "NOTIFICATION_SETTINGS_UPDATE",
        settings: {
          flags: a
        }
      })
    }
  }