"use strict";
n.r(t), n.d(t, {
  NotificationLabels: function() {
    return l
  },
  NotificationLabel: function() {
    return p
  },
  MessageNotificationSettings: function() {
    return m
  },
  trackGuildNotificationSettingsUpdate: function() {
    return E
  },
  muteConfigToTimestamp: function() {
    return A
  },
  trackChannelNotificationSettingsUpdate: function() {
    return N
  },
  getCurrentGuildSettings: function() {
    return S
  },
  getManyCurrentGuildSettings: function() {
    return I
  },
  getCurrentChannelSettings: function() {
    return T
  },
  getManyCurrentChannelSettings: function() {
    return b
  },
  trackAccountNotificationSettingUpdated: function() {
    return w
  }
}), n("702976"), n("222007");
var i, l, u, o, s = n("716241"),
  r = n("637929"),
  a = n("42203"),
  d = n("282109"),
  c = n("599110"),
  _ = n("568734"),
  f = n("49111"),
  h = n("133335"),
  g = n("397336");
(u = i || (i = {})).GUILD = "guild", u.CHANNEL = "channel", u.ACCOUNT = "account", (o = l || (l = {})).ForumThreadsCreatedOn = "enabled forum thread created notifs", o.ForumThreadsCreatedOff = "disabled forum thread created notifs", o.SuppressEveryoneOn = "enabled suppress everyone", o.SuppressEveryoneOff = "disabled suppress everyone", o.SuppressRolesOn = "enabled suppress roles", o.SuppressRolesOff = "disabled suppress roles", o.HighlightsOn = "enabled highlights", o.HighlightsOff = "disabled highlights", o.MobilePushOn = "enabled mobile push notifications", o.MobilePushOff = "disabled mobile push notifications", o.UnreadsAll = "unreads set to all messages", o.UnreadsMentions = "unreads set to mentions", o.UnreadsDefault = "unreads set to the default", o.NotificationsAll = "notifications set to all messages", o.NotificationsMentions = "notifications set to mentions", o.NotificationsNothing = "notifications set to nothing", o.NotificationsDefault = "notifications set to the default", o.PresetAll = "notification preset set to all messages", o.PresetMentions = "notification preset set to mentions", o.PresetNothing = "notification preset set to nothing", o.PresetDefault = "notification preset set to the default", o.OptedIn = "opted in to entity", o.OptedOut = "opted out from entity", o.Favorited = "favorited", o.UnFavorited = "unfavorited", o.Muted = "muted", o.Unmuted = "unmuted", o.MutedScheduledEvents = "muted scheduled events", o.UnmutedScheduledEvents = "unmuted scheduled events", o.OverrideCreated = "channel override created", o.OverrideDeleted = "channel override deleted";
let p = {
    forumThreadsCreated: e => e ? "enabled forum thread created notifs" : "disabled forum thread created notifs",
    suppressEveryone: e => e ? "enabled suppress everyone" : "disabled suppress everyone",
    suppressRoles: e => e ? "enabled suppress roles" : "disabled suppress roles",
    highlights: e => e ? "enabled highlights" : "disabled highlights",
    mobilePush: e => e ? "enabled mobile push notifications" : "disabled mobile push notifications",
    optedIn: e => e ? "opted in to entity" : "opted out from entity",
    favorited: e => e ? "favorited" : "unfavorited",
    muted: e => e ? "muted" : "unmuted",
    mutedEvents: e => e ? "muted scheduled events" : "unmuted scheduled events",
    unreads: e => e === h.UnreadSetting.ALL_MESSAGES ? "unreads set to all messages" : e === h.UnreadSetting.ONLY_MENTIONS ? "unreads set to mentions" : "unreads set to the default",
    notifications: e => e === f.UserNotificationSettings.ALL_MESSAGES ? "notifications set to all messages" : e === f.UserNotificationSettings.ONLY_MENTIONS ? "notifications set to mentions" : e === f.UserNotificationSettings.NO_MESSAGES ? "notifications set to nothing" : "notifications set to the default"
  },
  m = Object.freeze({
    [f.UserNotificationSettings.ALL_MESSAGES]: "All",
    [f.UserNotificationSettings.ONLY_MENTIONS]: "Mentions",
    [f.UserNotificationSettings.NO_MESSAGES]: "Nothing",
    [f.UserNotificationSettings.NULL]: null
  });

function E(e, t, n, i, l) {
  var u, o;
  let a = function(e) {
      var t, n, i, l, u, o, s;
      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = null != r.mute_config && null != r.mute_config.end_time ? new Date(r.mute_config.end_time).getTime() : e.guild_muted_until,
        d = null != r.message_notifications ? m[r.message_notifications] : e.guild_message_notification_settings;
      return {
        guild_muted_until: a,
        guild_flags: null !== (t = r.flags) && void 0 !== t ? t : e.guild_flags,
        guild_is_muted: null !== (n = r.muted) && void 0 !== n ? n : e.guild_is_muted,
        guild_message_notification_settings: d,
        guild_suppress_roles: null !== (i = r.suppress_roles) && void 0 !== i ? i : e.guild_suppress_roles,
        guild_receive_mobile_push: null !== (l = r.mobile_push) && void 0 !== l ? l : e.guild_receive_mobile_push,
        guild_notify_highlights: null !== (u = r.notify_highlights) && void 0 !== u ? u : e.guild_notify_highlights,
        guild_suppress_everyone: null !== (o = r.suppress_everyone) && void 0 !== o ? o : e.guild_suppress_everyone,
        guild_scheduled_events_muted: null !== (s = r.mute_scheduled_events) && void 0 !== s ? s : e.guild_scheduled_events_muted
      }
    },
    d = a(n),
    c = a(S(e), t),
    h = v(d, c, "RETURN_PREVIOUS_WHEN_CHANGED"),
    p = null !== (u = h("guild_flags")) && void 0 !== u ? u : 0,
    E = (null !== (o = c.guild_flags) && void 0 !== o ? o : 0) ^ p,
    A = 0 === (0, _.removeFlags)(E, g.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_OFF, g.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON);
  s.default.trackWithMetadata(f.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
    ...c,
    ...r.default.getStats(e),
    location: l,
    guild_id: e,
    update_type: "guild",
    label: i,
    guild_flags_old: h("guild_flags"),
    guild_is_muted_old: h("guild_is_muted"),
    guild_suppress_roles_old: h("guild_suppress_roles"),
    guild_notify_highlights_old: h("guild_notify_highlights"),
    guild_suppress_everyone_old: h("guild_suppress_everyone"),
    guild_receive_mobile_push_old: h("guild_receive_mobile_push"),
    guild_scheduled_events_muted_old: h("guild_scheduled_events_muted"),
    guild_message_notification_settings_old: h("guild_message_notification_settings"),
    is_opt_in_only_change: A
  })
}

function v(e, t, n) {
  return i => {
    if ("RETURN_PREVIOUS_WHEN_CHANGED" === n) return e[i] !== t[i] ? e[i] : void 0
  }
}

function A(e) {
  return null != e && null != e.end_time ? new Date(e.end_time).getTime() : null
}

function N(e, t, n, i, l, u) {
  var o, d;
  let c = function(t) {
      var n, i;
      let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        u = null !== (n = l.muted) && void 0 !== n ? n : null == t ? void 0 : t.channel_is_muted,
        o = null != l.message_notifications ? m[l.message_notifications] : null == t ? void 0 : t.channel_message_notification_settings,
        s = null == e ? null : !0 === u || null != o;
      return {
        channel_is_muted: u,
        channel_is_overridden: s,
        channel_flags: null !== (i = l.flags) && void 0 !== i ? i : null == t ? void 0 : t.channel_flags,
        channel_message_notification_settings: o,
        channel_muted_until: A(l.mute_config)
      }
    },
    h = c(i),
    p = c(T(e, t), n),
    E = v(h, p, "RETURN_PREVIOUS_WHEN_CHANGED"),
    N = a.default.getChannel(t),
    S = null !== (o = E("channel_flags")) && void 0 !== o ? o : 0,
    I = (null !== (d = p.channel_flags) && void 0 !== d ? d : 0) ^ S,
    b = 0 === (0, _.removeFlags)(I, g.ChannelNotificationSettingsFlags.FAVORITED, g.ChannelNotificationSettingsFlags.OPT_IN_ENABLED);
  s.default.trackWithMetadata(f.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
    ...p,
    ...r.default.getStats(e),
    location: u,
    guild_id: e,
    channel_id: t,
    update_type: "channel",
    label: l,
    parent_id: null != N ? N.parent_id : null,
    channel_flags_old: E("channel_flags"),
    channel_is_muted_old: E("channel_is_muted"),
    channel_muted_until_old: E("channel_muted_until"),
    channel_is_overridden_old: E("channel_is_overridden"),
    channel_message_notification_settings_old: E("channel_message_notification_settings"),
    is_opt_in_only_change: b
  })
}

function S(e) {
  let t = d.default.isMuted(e),
    n = d.default.getMuteConfig(e);
  return {
    guild_suppress_everyone: d.default.isSuppressEveryoneEnabled(e),
    guild_suppress_roles: d.default.isSuppressRolesEnabled(e),
    guild_scheduled_events_muted: d.default.isMuteScheduledEventsEnabled(e),
    guild_is_muted: t,
    guild_muted_until: null != n && null != n.end_time ? new Date(n.end_time).getTime() : null,
    guild_receive_mobile_push: d.default.isMobilePushEnabled(e),
    guild_message_notification_settings: m[d.default.getMessageNotifications(e)],
    guild_notify_highlights: d.default.getNotifyHighlights(e),
    guild_flags: d.default.getGuildFlags(e)
  }
}

function I(e) {
  let t = new Map;
  return e.forEach(e => t.set(e, S(e))), t
}

function T(e, t) {
  let n = d.default.isChannelMuted(e, t),
    i = d.default.getChannelMuteConfig(e, t);
  return {
    channel_is_muted: n,
    channel_muted_until: null != i && null != i.end_time ? new Date(i.end_time).getTime() : null,
    channel_message_notification_settings: m[d.default.getChannelMessageNotifications(e, t)],
    channel_flags: d.default.getChannelIdFlags(e, t)
  }
}

function b(e, t) {
  let n = new Map;
  return t.forEach(t => n.set(t, T(e, t))), n
}

function w(e, t) {
  c.default.track(f.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
    update_type: "account",
    quiet_mode_enabled: e.quietMode,
    quiet_mode_enabled_old: t.quietMode
  })
}