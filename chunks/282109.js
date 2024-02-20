"use strict";
n.r(t), n.d(t, {
  getGuildDefaults: function() {
    return j
  },
  convertChannelOverridesToMap: function() {
    return Y
  },
  default: function() {
    return J
  }
}), n("222007"), n("702976");
var i = n("917351"),
  r = n.n(i),
  s = n("446674"),
  a = n("913144"),
  o = n("668597"),
  l = n("38654"),
  u = n("640497"),
  c = n("755624"),
  d = n("233069"),
  p = n("568734"),
  h = n("299039"),
  f = n("42203"),
  E = n("305961"),
  _ = n("697218"),
  m = n("49111"),
  S = n("76618"),
  g = n("133335"),
  T = n("397336");
let I = {},
  v = {},
  C = !1,
  A = !1,
  R = {
    flags: 0
  },
  N = new o.default,
  y = new o.default,
  O = {
    suppress_everyone: !1,
    suppress_roles: !1,
    mute_scheduled_events: !1,
    mobile_push: !0,
    muted: !1,
    message_notifications: m.UserNotificationSettings.ALL_MESSAGES,
    flags: 0,
    channel_overrides: {},
    notify_highlights: m.HighlightSettings.NULL,
    hide_muted_channels: !1,
    version: -1,
    mute_config: null
  },
  D = {
    [m.UserNotificationSettings.ALL_MESSAGES]: {
      ...O,
      message_notifications: m.UserNotificationSettings.ALL_MESSAGES
    },
    [m.UserNotificationSettings.ONLY_MENTIONS]: {
      ...O,
      message_notifications: m.UserNotificationSettings.ONLY_MENTIONS
    }
  },
  b = {},
  P = {},
  L = new Set,
  M = new Set,
  U = {},
  w = {};

function k(e, t) {
  var n;
  let i = I[e],
    s = null !== (n = null == i ? void 0 : i.channel_overrides) && void 0 !== n ? n : {},
    a = Y(t.channel_overrides),
    o = {
      ...j(e),
      ...i,
      ...t,
      channel_overrides: a
    };
  N.clearTimer(e), r.forEach(s, e => {
    y.clearTimer(e.channel_id)
  }), G(e, o), I[e] = o, b[e] = z(I[e]);
  let l = r.filter(o.channel_overrides, e => {
    var t;
    return p.hasFlag(null !== (t = e.flags) && void 0 !== t ? t : 0, T.ChannelNotificationSettingsFlags.OPT_IN_ENABLED)
  });
  P[e] = new Set(l.map(e => e.channel_id)),
    function(e) {
      var t;
      if (null == e) return;
      let n = new Set(P[e]),
        i = null !== (t = U[e]) && void 0 !== t ? t : {};
      for (let e in i) {
        let t = i[e];
        p.hasFlag(t.flags, T.ChannelNotificationSettingsFlags.OPT_IN_ENABLED) ? n.add(e) : n.delete(e)
      }
      Object.keys(i).length > 0 ? w[e] = n : delete w[e]
    }(e), delete v[e]
}

function G(e, t) {
  if (!0 === t.muted) {
    let n = N.setTimer(e, t.mute_config, () => {
      x(e, {
        muted: !1
      }), a.default.dispatch({
        type: "GUILD_MUTE_EXPIRED",
        guildId: e
      })
    });
    n && (t.muted = !1)
  }
  r.forEach(t.channel_overrides, t => {
    if (!0 === t.muted) {
      let n = y.setTimer(t.channel_id, t.mute_config, () => {
        F(e, t.channel_id, {
          muted: !1
        }), a.default.dispatch({
          type: "CHANNEL_MUTE_EXPIRED",
          guildId: e,
          channelId: t.channel_id
        })
      });
      n && (t.muted = !1)
    }
  })
}

function x(e, t) {
  var n;
  let i = I[e];
  k(e, {
    channel_overrides: null !== (n = null == i ? void 0 : i.channel_overrides) && void 0 !== n ? n : {},
    ...t
  })
}

function F(e, t, n) {
  let i = H(e, t, n);
  B(e, {
    [t]: i
  })
}

function V(e, t) {
  var n;
  let i = {},
    r = null !== (n = null != e ? U[e] : null) && void 0 !== n ? n : {};
  h.default.keys(t).forEach(n => {
    var s;
    let a = H(e, n, t[n]);
    i[n] = a, r[n] = {
      flags: null !== (s = a.flags) && void 0 !== s ? s : 0
    }
  }), null != e && (U[e] = {
    ...U[e],
    ...r
  }), B(e, i)
}

function B(e, t) {
  var n;
  let i = I[e],
    r = null !== (n = null == i ? void 0 : i.channel_overrides) && void 0 !== n ? n : {};
  k(e, {
    channel_overrides: null == i ? t : {
      ...r,
      ...t
    }
  })
}

function H(e, t, n) {
  var i;
  let r = I[e],
    s = null !== (i = null == r ? void 0 : r.channel_overrides) && void 0 !== i ? i : {};
  return {
    channel_id: t,
    muted: !1,
    ...s[t],
    ...n
  }
}

function j(e) {
  let t = E.default.getGuild(e),
    n = null != t ? t.defaultMessageNotifications : m.UserNotificationSettings.ALL_MESSAGES;
  return D[n]
}

function Y() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return e instanceof Array ? r.keyBy(e, "channel_id") : e
}

function W(e) {
  var t;
  return null !== (t = I[e]) && void 0 !== t ? t : j(e)
}

function K(e) {
  C = p.hasFlag(e.flags, S.AccountNotificationFlags.USE_NEW_NOTIFICATIONS), A = p.hasFlag(e.flags, S.AccountNotificationFlags.MENTION_ON_ALL_MESSAGES), R = e
}

function z(e) {
  return new Set(null != e.channel_overrides ? r(e.channel_overrides).filter(e => (0, o.computeIsMuted)(e)).map(e => e.channel_id).value() : null)
}

function q() {
  return !0
}

function Q() {
  return C && u.NotificationsExperiment.getCurrentConfig({
    location: "UserGuildSettingsStore"
  }, {
    autoTrackExposure: !1
  }).enabled
}
class X extends s.default.PersistedStore {
  initialize(e) {
    if (this.waitFor(_.default, E.default, l.default, c.default), null != e) {
      var t, n;
      C = null !== (t = e.useNewNotifications) && void 0 !== t && t, "userGuildSettings" in e && (I = e.userGuildSettings, P = r.mapValues(null !== (n = e.optedInChannelsByGuild) && void 0 !== n ? n : {}, e => new Set(e)), r.forEach(I, (e, t) => {
        b[t] = z(e)
      }))
    }
  }
  getState() {
    return {
      useNewNotifications: C
    }
  }
  get mentionOnAllMessages() {
    return A
  }
  isSuppressEveryoneEnabled(e) {
    return W(e).suppress_everyone
  }
  isSuppressRolesEnabled(e) {
    return W(e).suppress_roles
  }
  isMuteScheduledEventsEnabled(e) {
    return W(e).mute_scheduled_events
  }
  isMobilePushEnabled(e) {
    return W(e).mobile_push
  }
  isMuted(e) {
    let t = W(e);
    return (0, o.computeIsMuted)(t)
  }
  isTemporarilyMuted(e) {
    let t = W(e);
    return (0, o.isTemporarilyMuted)(t)
  }
  getMuteConfig(e) {
    let t = W(e);
    return t.mute_config
  }
  getMessageNotifications(e) {
    return W(e).message_notifications
  }
  getChannelOverrides(e) {
    var t;
    return null !== (t = W(e).channel_overrides) && void 0 !== t ? t : {}
  }
  getNotifyHighlights(e) {
    return W(e).notify_highlights
  }
  getGuildFlags(e) {
    return W(e).flags
  }
  getChannelMessageNotifications(e, t) {
    let n = this.getChannelOverrides(e)[t];
    return null == n || null == n.message_notifications ? m.UserNotificationSettings.NULL : n.message_notifications
  }
  getChannelMuteConfig(e, t) {
    let n = this.getChannelOverrides(e)[t];
    return null != n ? n.mute_config : null
  }
  getMutedChannels(e) {
    var t;
    return null !== (t = b[e]) && void 0 !== t ? t : L
  }
  isChannelMuted(e, t) {
    var n;
    let i = f.default.getChannel(t);
    return e = null !== (n = null == i ? void 0 : i.getGuildId()) && void 0 !== n ? n : e, this.getMutedChannels(e).has(t)
  }
  isCategoryMuted(e, t) {
    let n = f.default.getChannel(t);
    if (null == n) return !1;
    let i = n.parent_id;
    return null != i && this.getMutedChannels(e).has(i)
  }
  resolvedMessageNotifications(e) {
    let t = this.getChannelMessageNotifications(e.guild_id, e.id);
    if (t !== m.UserNotificationSettings.NULL) return t;
    if (null != e.parent_id) {
      let t = this.getChannelMessageNotifications(e.guild_id, e.parent_id);
      if (t !== m.UserNotificationSettings.NULL) return t
    }
    return this.getMessageNotifications(e.guild_id)
  }
  resolveUnreadSetting(e) {
    if (d.THREAD_CHANNEL_TYPES.has(e.type) || (0, d.isPrivate)(e.type) || !Q()) return g.UnreadSetting.ALL_MESSAGES;
    let t = this.getChannelUnreadSetting(e.guild_id, e.id);
    if (t !== g.UnreadSetting.UNSET) return t;
    if (null != e.parent_id) {
      let t = this.getChannelUnreadSetting(e.guild_id, e.parent_id);
      if (t !== g.UnreadSetting.UNSET) return t
    }
    let n = this.getGuildUnreadSetting(e.guild_id);
    return n !== g.UnreadSetting.UNSET ? n : this.resolvedMessageNotifications(e) === m.UserNotificationSettings.ALL_MESSAGES ? g.UnreadSetting.ALL_MESSAGES : g.UnreadSetting.ONLY_MENTIONS
  }
  isGuildOrCategoryOrChannelMuted(e, t) {
    return this.isMuted(e) || this.isCategoryMuted(e, t) || this.isChannelMuted(e, t)
  }
  allowNoMessages(e) {
    return this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) || this.resolvedMessageNotifications(e) === m.UserNotificationSettings.NO_MESSAGES || this.isOptInEnabled(e.guild_id) && !this.isChannelRecordOrParentOptedIn(e)
  }
  allowAllMessages(e) {
    return !this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) && this.resolvedMessageNotifications(e) === m.UserNotificationSettings.ALL_MESSAGES && (!this.isOptInEnabled(e.guild_id) || this.isChannelRecordOrParentOptedIn(e))
  }
  isGuildCollapsed(e) {
    var t;
    return (null === (t = I[e]) || void 0 === t ? void 0 : t.hide_muted_channels) === !0
  }
  getAllSettings() {
    return {
      userGuildSettings: I,
      mutedChannels: b,
      optedInChannelsByGuild: P
    }
  }
  getChannelIdFlags(e, t) {
    var n;
    let i = this.getChannelOverrides(e)[t];
    return null !== (n = null == i ? void 0 : i.flags) && void 0 !== n ? n : 0
  }
  getChannelFlags(e) {
    return this.getChannelIdFlags(e.guild_id, e.id)
  }
  getNewForumThreadsCreated(e) {
    let t = this.getChannelOverrides(e.guild_id)[e.id];
    if (null != t && null != t.flags) {
      if (p.hasFlag(t.flags, T.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON)) return !0;
      if (p.hasFlag(t.flags, T.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF)) return !1
    }
    return this.resolvedMessageNotifications(e) === m.UserNotificationSettings.ALL_MESSAGES
  }
  isOptInEnabled(e) {
    return null != e && (l.default.isFullServerPreview(e) ? l.default.isOptInEnabled(e) : p.hasFlag(this.getGuildFlags(e), T.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON))
  }
  isChannelRecordOrParentOptedIn(e, t) {
    return null != e && null != e.guild_id && (this.isChannelOptedIn(e.guild_id, e.id, t) || null != e.parent_id && this.isChannelOptedIn(e.guild_id, e.parent_id, t))
  }
  isChannelOrParentOptedIn(e, t, n) {
    return this.isChannelRecordOrParentOptedIn(f.default.getChannel(t), n)
  }
  isChannelOptedIn(e, t) {
    var n, i;
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null == e) return !1;
    if (l.default.isFullServerPreview(e)) return l.default.isChannelOptedIn(e, t);
    if (r && null != w[e]) return w[e].has(t);
    let s = null !== (i = null === (n = this.getChannelOverrides(e)[t]) || void 0 === n ? void 0 : n.flags) && void 0 !== i ? i : 0;
    return p.hasFlag(s, T.ChannelNotificationSettingsFlags.OPT_IN_ENABLED)
  }
  getOptedInChannels(e) {
    var t, n;
    return l.default.isFullServerPreview(e) ? null !== (t = l.default.getViewingChannels(e)) && void 0 !== t ? t : M : null !== (n = P[e]) && void 0 !== n ? n : M
  }
  getOptedInChannelsWithPendingUpdates(e) {
    return w[e]
  }
  getPendingChannelUpdates(e) {
    return U[e]
  }
  getGuildFavorites(e) {
    if (l.default.isFullServerPreview(e)) return null;
    if (null == v[e]) {
      let t = r.filter(this.getChannelOverrides(e), t => {
        var n, i;
        return p.hasFlag(null !== (i = t.flags) && void 0 !== i ? i : 0, T.ChannelNotificationSettingsFlags.FAVORITED) && (null === (n = f.default.getChannel(t.channel_id)) || void 0 === n ? void 0 : n.guild_id) === e
      });
      v[e] = t.map(e => e.channel_id)
    }
    return v[e]
  }
  isFavorite(e, t) {
    var n;
    return !l.default.isFullServerPreview(e) && (null === (n = this.getGuildFavorites(e)) || void 0 === n ? void 0 : n.includes(t)) === !0
  }
  isMessagesFavorite(e) {
    var t, n;
    let i = null !== (n = null === (t = this.getChannelOverrides(null)[e]) || void 0 === t ? void 0 : t.flags) && void 0 !== n ? n : 0;
    return p.hasFlag(i, T.ChannelNotificationSettingsFlags.FAVORITED)
  }
  isAddedToMessages(e) {
    var t, n;
    let i = null !== (n = null === (t = this.getChannelOverrides(null)[e]) || void 0 === t ? void 0 : t.flags) && void 0 !== n ? n : 0;
    return p.hasFlag(i, T.ChannelNotificationSettingsFlags.OPT_IN_ENABLED)
  }
  getAddedToMessages() {
    var e;
    return null !== (e = P.null) && void 0 !== e ? e : M
  }
  get accountNotificationSettings() {
    return R
  }
  get useNewNotifications() {
    return C
  }
  getGuildUnreadSetting(e) {
    if (!Q()) return g.UnreadSetting.ALL_MESSAGES;
    let t = this.getGuildFlags(e);
    return p.hasFlag(t, T.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES) ? g.UnreadSetting.ALL_MESSAGES : p.hasFlag(t, T.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS) ? g.UnreadSetting.ONLY_MENTIONS : g.UnreadSetting.UNSET
  }
  resolveGuildUnreadSetting(e) {
    let t = this.getGuildFlags(e.id);
    return !Q() || p.hasFlag(t, T.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES) ? g.UnreadSetting.ALL_MESSAGES : p.hasFlag(t, T.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS) ? g.UnreadSetting.ONLY_MENTIONS : e.defaultMessageNotifications === m.UserNotificationSettings.ALL_MESSAGES ? g.UnreadSetting.ALL_MESSAGES : g.UnreadSetting.ONLY_MENTIONS
  }
  getChannelRecordUnreadSetting(e) {
    return this.getChannelUnreadSetting(e.guild_id, e.id)
  }
  getChannelUnreadSetting(e, t) {
    let n = this.getChannelIdFlags(e, t);
    return p.hasFlag(n, T.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES) ? g.UnreadSetting.ALL_MESSAGES : p.hasFlag(n, T.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS) ? g.UnreadSetting.ONLY_MENTIONS : g.UnreadSetting.UNSET
  }
}
X.displayName = "UserGuildSettingsStore", X.persistKey = "collapsedGuilds";
let Z = new X(a.default, {
  USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
    let {
      userGuildSettings: t
    } = e;
    t.forEach(e => {
      k(e.guild_id, {
        channel_overrides: {},
        ...e
      })
    })
  },
  USER_GUILD_SETTINGS_GUILD_UPDATE: function(e) {
    let {
      guildId: t,
      settings: n
    } = e;
    x(t, n)
  },
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: function(e) {
    let {
      guildId: t,
      settings: n
    } = e;
    x(t, n), V(t, n.channel_overrides)
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: n,
      settings: i
    } = e;
    null != t && null != i.flags && (U[t] = {
      ...U[t],
      [n]: {
        flags: i.flags
      }
    }), F(t, n, i)
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function(e) {
    let {
      guildId: t,
      overrides: n
    } = e;
    return !(null == t || l.default.isFullServerPreview(t)) && (V(t, n), !0)
  },
  CONNECTION_OPEN: function(e) {
    K(e.notificationSettings), N.reset(), y.reset(), !e.userGuildSettings.partial && (I = {}, b = {}, P = {});
    let t = new Set;
    for (let n in e.userGuildSettings.entries.forEach(e => {
        !("channel_overrides" in e) && (e.channel_overrides = {}), k(e.guild_id, e), null != e.guild_id && t.add(e.guild_id)
      }), I) !t.has(n) && G(n, I[n])
  },
  CACHE_LOADED: function(e) {
    null != e.userGuildSettings && 0 !== e.userGuildSettings.length && (I = {}, b = {}, P = {}, e.userGuildSettings.forEach(e => {
      let t = e.guild_id;
      I[t] = e;
      let n = new Set,
        i = new Set;
      for (let t in e.channel_overrides) {
        var r;
        let s = e.channel_overrides[t];
        (0, o.computeIsMuted)(s) && n.add(t), p.hasFlag(null !== (r = s.flags) && void 0 !== r ? r : 0, T.ChannelNotificationSettingsFlags.OPT_IN_ENABLED) && i.add(t)
      }
      b[t] = n, P[t] = i
    }))
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      allUserGuildSettings: t
    } = e, {
      userGuildSettings: n,
      mutedChannels: i,
      optedInChannelsByGuild: r
    } = t;
    I = {
      ...n
    }, b = {}, P = {}, h.default.keys(i).forEach(e => {
      b[e] = new Set(i[e])
    }), h.default.keys(r).forEach(e => {
      P[e] = new Set(r[e])
    })
  },
  GUILD_CREATE: q,
  GUILD_UPDATE: q,
  GUILD_TOGGLE_COLLAPSE_MUTED: function(e) {
    let {
      guildId: t
    } = e, n = null == I[t] ? j(t) : I[t];
    I[t] = {
      ...n,
      guild_id: t,
      hide_muted_channels: !0 !== n.hide_muted_channels
    }
  },
  IMPERSONATE_UPDATE: q,
  IMPERSONATE_STOP: q,
  USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES: function(e) {
    let {
      guildId: t,
      updates: n
    } = e;
    if (null == t) return !1;
    let i = U[t];
    if (null == i) return !1;
    for (let e in n) r.isEqual(n[e], i[e]) && delete i[e]
  },
  CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function(e) {
    let {
      guildId: t
    } = e;
    if (null == t) return !1;
    delete U[t], delete w[t]
  },
  NOTIFICATION_SETTINGS_UPDATE: function(e) {
    let {
      settings: t
    } = e;
    K(t)
  },
  GUILD_MUTE_EXPIRED: () => !0,
  CHANNEL_MUTE_EXPIRED: () => !0
});
var J = Z