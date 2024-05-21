"use strict";
n.r(t), n.d(t, {
  MessageNotificationSettings: function() {
    return S
  },
  NotificationLabel: function() {
    return f
  },
  NotificationLabels: function() {
    return r
  },
  NotificationSettingsUpdateType: function() {
    return i
  },
  getCurrentChannelSettings: function() {
    return C
  },
  getCurrentGuildSettings: function() {
    return p
  },
  getManyCurrentChannelSettings: function() {
    return R
  },
  getManyCurrentGuildSettings: function() {
    return O
  },
  muteConfigToTimestamp: function() {
    return m
  },
  trackChannelNotificationSettingsUpdate: function() {
    return N
  },
  trackGuildNotificationSettingsUpdate: function() {
    return h
  }
}), n("789020"), n("47120");
var i, r, s, a, o = n("367907"),
  l = n("601992"),
  u = n("592125"),
  d = n("375954"),
  _ = n("9156");
n("626135");
var c = n("630388"),
  E = n("981631"),
  I = n("490897"),
  T = n("526761");
(s = i || (i = {})).GUILD = "guild", s.CHANNEL = "channel", s.ACCOUNT = "account", (a = r || (r = {})).ForumThreadsCreatedOn = "enabled forum thread created notifs", a.ForumThreadsCreatedOff = "disabled forum thread created notifs", a.SuppressEveryoneOn = "enabled suppress everyone", a.SuppressEveryoneOff = "disabled suppress everyone", a.SuppressRolesOn = "enabled suppress roles", a.SuppressRolesOff = "disabled suppress roles", a.HighlightsOn = "enabled highlights", a.HighlightsOff = "disabled highlights", a.MobilePushOn = "enabled mobile push notifications", a.MobilePushOff = "disabled mobile push notifications", a.UnreadsAll = "unreads set to all messages", a.UnreadsMentions = "unreads set to mentions", a.UnreadsDefault = "unreads set to the default", a.NotificationsAll = "notifications set to all messages", a.NotificationsMentions = "notifications set to mentions", a.NotificationsNothing = "notifications set to nothing", a.NotificationsDefault = "notifications set to the default", a.PresetAll = "notification preset set to all messages", a.PresetMentions = "notification preset set to mentions", a.PresetNothing = "notification preset set to nothing", a.PresetDefault = "notification preset set to the default", a.OptedIn = "opted in to entity", a.OptedOut = "opted out from entity", a.Favorited = "favorited", a.UnFavorited = "unfavorited", a.Muted = "muted", a.Unmuted = "unmuted", a.MutedScheduledEvents = "muted scheduled events", a.UnmutedScheduledEvents = "unmuted scheduled events", a.OverrideCreated = "channel override created", a.OverrideDeleted = "channel override deleted";
let f = {
    forumThreadsCreated: e => e ? "enabled forum thread created notifs" : "disabled forum thread created notifs",
    suppressEveryone: e => e ? "enabled suppress everyone" : "disabled suppress everyone",
    suppressRoles: e => e ? "enabled suppress roles" : "disabled suppress roles",
    highlights: e => e ? "enabled highlights" : "disabled highlights",
    mobilePush: e => e ? "enabled mobile push notifications" : "disabled mobile push notifications",
    optedIn: e => e ? "opted in to entity" : "opted out from entity",
    favorited: e => e ? "favorited" : "unfavorited",
    muted: e => e ? "muted" : "unmuted",
    mutedEvents: e => e ? "muted scheduled events" : "unmuted scheduled events",
    unreads: e => e === I.UnreadSetting.ALL_MESSAGES ? "unreads set to all messages" : e === I.UnreadSetting.ONLY_MENTIONS ? "unreads set to mentions" : "unreads set to the default",
    notifications: e => e === E.UserNotificationSettings.ALL_MESSAGES ? "notifications set to all messages" : e === E.UserNotificationSettings.ONLY_MENTIONS ? "notifications set to mentions" : e === E.UserNotificationSettings.NO_MESSAGES ? "notifications set to nothing" : "notifications set to the default"
  },
  S = Object.freeze({
    [E.UserNotificationSettings.ALL_MESSAGES]: "All",
    [E.UserNotificationSettings.ONLY_MENTIONS]: "Mentions",
    [E.UserNotificationSettings.NO_MESSAGES]: "Nothing",
    [E.UserNotificationSettings.NULL]: null
  });

function h(e, t, n, i, r) {
  var s, a;
  let u = function(e) {
      var t, n, i, r, s, a, o;
      let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        u = null != l.mute_config && null != l.mute_config.end_time ? new Date(l.mute_config.end_time).getTime() : e.guild_muted_until,
        d = null != l.message_notifications ? S[l.message_notifications] : e.guild_message_notification_settings;
      return {
        guild_muted_until: u,
        guild_flags: null !== (t = l.flags) && void 0 !== t ? t : e.guild_flags,
        guild_is_muted: null !== (n = l.muted) && void 0 !== n ? n : e.guild_is_muted,
        guild_message_notification_settings: d,
        guild_suppress_roles: null !== (i = l.suppress_roles) && void 0 !== i ? i : e.guild_suppress_roles,
        guild_receive_mobile_push: null !== (r = l.mobile_push) && void 0 !== r ? r : e.guild_receive_mobile_push,
        guild_notify_highlights: null !== (s = l.notify_highlights) && void 0 !== s ? s : e.guild_notify_highlights,
        guild_suppress_everyone: null !== (a = l.suppress_everyone) && void 0 !== a ? a : e.guild_suppress_everyone,
        guild_scheduled_events_muted: null !== (o = l.mute_scheduled_events) && void 0 !== o ? o : e.guild_scheduled_events_muted
      }
    },
    d = u(n),
    _ = u(p(e), t),
    I = A(d, _, "RETURN_PREVIOUS_WHEN_CHANGED"),
    f = null !== (s = I("guild_flags")) && void 0 !== s ? s : 0,
    h = (null !== (a = _.guild_flags) && void 0 !== a ? a : 0) ^ f,
    m = 0 === (0, c.removeFlags)(h, T.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_OFF, T.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON);
  o.default.trackWithMetadata(E.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
    ..._,
    ...l.default.getStats(e),
    location: r,
    guild_id: e,
    update_type: "guild",
    label: i,
    guild_flags_old: I("guild_flags"),
    guild_is_muted_old: I("guild_is_muted"),
    guild_suppress_roles_old: I("guild_suppress_roles"),
    guild_notify_highlights_old: I("guild_notify_highlights"),
    guild_suppress_everyone_old: I("guild_suppress_everyone"),
    guild_receive_mobile_push_old: I("guild_receive_mobile_push"),
    guild_scheduled_events_muted_old: I("guild_scheduled_events_muted"),
    guild_message_notification_settings_old: I("guild_message_notification_settings"),
    is_opt_in_only_change: m
  })
}

function A(e, t, n) {
  return i => {
    if ("RETURN_PREVIOUS_WHEN_CHANGED" === n) return e[i] !== t[i] ? e[i] : void 0
  }
}

function m(e) {
  return null != e && null != e.end_time ? new Date(e.end_time).getTime() : null
}

function N(e, t, n, i, r, s) {
  var a, _, I, f;
  let h = function(t) {
      var n, i;
      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        s = null !== (n = r.muted) && void 0 !== n ? n : null == t ? void 0 : t.channel_is_muted,
        a = null != r.message_notifications ? S[r.message_notifications] : null == t ? void 0 : t.channel_message_notification_settings,
        o = null == e ? null : !0 === s || null != a;
      return {
        channel_is_muted: s,
        channel_is_overridden: o,
        channel_flags: null !== (i = r.flags) && void 0 !== i ? i : null == t ? void 0 : t.channel_flags,
        channel_message_notification_settings: a,
        channel_muted_until: m(r.mute_config)
      }
    },
    N = h(i),
    p = h(C(e, t), n),
    O = A(N, p, "RETURN_PREVIOUS_WHEN_CHANGED"),
    R = u.default.getChannel(t),
    g = null !== (_ = O("channel_flags")) && void 0 !== _ ? _ : 0,
    L = (null !== (I = p.channel_flags) && void 0 !== I ? I : 0) ^ g,
    v = 0 === (0, c.removeFlags)(L, T.ChannelNotificationSettingsFlags.FAVORITED, T.ChannelNotificationSettingsFlags.OPT_IN_ENABLED),
    D = null !== (f = null === (a = d.default.getLastMessage(t)) || void 0 === a ? void 0 : a.type) && void 0 !== f ? f : null;
  o.default.trackWithMetadata(E.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
    ...p,
    ...l.default.getStats(e),
    location: s,
    guild_id: e,
    channel_id: t,
    update_type: "channel",
    label: r,
    parent_id: null != R ? R.parent_id : null,
    channel_flags_old: O("channel_flags"),
    channel_is_muted_old: O("channel_is_muted"),
    channel_muted_until_old: O("channel_muted_until"),
    channel_is_overridden_old: O("channel_is_overridden"),
    channel_message_notification_settings_old: O("channel_message_notification_settings"),
    is_opt_in_only_change: v,
    last_message_type: D
  })
}

function p(e) {
  let t = _.default.isMuted(e),
    n = _.default.getMuteConfig(e);
  return {
    guild_suppress_everyone: _.default.isSuppressEveryoneEnabled(e),
    guild_suppress_roles: _.default.isSuppressRolesEnabled(e),
    guild_scheduled_events_muted: _.default.isMuteScheduledEventsEnabled(e),
    guild_is_muted: t,
    guild_muted_until: null != n && null != n.end_time ? new Date(n.end_time).getTime() : null,
    guild_receive_mobile_push: _.default.isMobilePushEnabled(e),
    guild_message_notification_settings: S[_.default.getMessageNotifications(e)],
    guild_notify_highlights: _.default.getNotifyHighlights(e),
    guild_flags: _.default.getGuildFlags(e)
  }
}

function O(e) {
  let t = new Map;
  return e.forEach(e => t.set(e, p(e))), t
}

function C(e, t) {
  let n = _.default.isChannelMuted(e, t),
    i = _.default.getChannelMuteConfig(e, t);
  return {
    channel_is_muted: n,
    channel_muted_until: null != i && null != i.end_time ? new Date(i.end_time).getTime() : null,
    channel_message_notification_settings: S[_.default.getChannelMessageNotifications(e, t)],
    channel_flags: _.default.getChannelIdFlags(e, t)
  }
}

function R(e, t) {
  let n = new Map;
  return t.forEach(t => n.set(t, C(e, t))), n
}