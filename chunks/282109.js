"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Q
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
  f = n("568734"),
  E = n("42203"),
  p = n("305961"),
  h = n("697218"),
  _ = n("49111"),
  S = n("76618"),
  m = n("133335"),
  T = n("397336");
let g = {},
  I = {},
  C = {},
  v = !1,
  A = !1,
  R = {
    flags: 0
  },
  N = new o.default,
  O = new o.default,
  D = {
    suppress_everyone: !1,
    suppress_roles: !1,
    mute_scheduled_events: !1,
    mobile_push: !0,
    muted: !1,
    message_notifications: _.UserNotificationSettings.ALL_MESSAGES,
    flags: 0,
    channel_overrides: {},
    notify_highlights: _.HighlightSettings.NULL
  },
  y = {
    [_.UserNotificationSettings.ALL_MESSAGES]: {
      ...D,
      message_notifications: _.UserNotificationSettings.ALL_MESSAGES
    },
    [_.UserNotificationSettings.ONLY_MENTIONS]: {
      ...D,
      message_notifications: _.UserNotificationSettings.ONLY_MENTIONS
    }
  },
  P = {},
  L = {},
  b = new Set,
  M = {},
  U = {};

function G(e, t) {
  var n;
  let i = g[e],
    s = null !== (n = null == i ? void 0 : i.channel_overrides) && void 0 !== n ? n : {},
    a = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return e instanceof Array ? r.keyBy(e, "channel_id") : e
    }(t.channel_overrides),
    o = {
      ...H(e),
      ...i,
      ...t,
      channel_overrides: a
    };
  N.clearTimer(e), r.forEach(s, e => {
    O.clearTimer(e.channel_id)
  }), w(e, o), g[e] = o, null != e && (I[e] = !0 === o.hide_muted_channels), P[e] = W(g[e]);
  let l = r.filter(o.channel_overrides, e => {
    var t;
    return f.hasFlag(null !== (t = e.flags) && void 0 !== t ? t : 0, T.ChannelNotificationSettingsFlags.OPT_IN_ENABLED)
  });
  L[e] = new Set(l.map(e => e.channel_id)),
    function(e) {
      var t;
      if (null == e) return;
      let n = new Set(L[e]),
        i = null !== (t = M[e]) && void 0 !== t ? t : {};
      for (let e in i) {
        let t = i[e];
        f.hasFlag(t.flags, T.ChannelNotificationSettingsFlags.OPT_IN_ENABLED) ? n.add(e) : n.delete(e)
      }
      Object.keys(i).length > 0 ? U[e] = n : delete U[e]
    }(e), delete C[e]
}

function w(e, t) {
  if (!0 === t.muted) {
    let n = N.setTimer(e, t.mute_config, () => {
      k(e, {
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
      let n = O.setTimer(t.channel_id, t.mute_config, () => {
        x(e, t.channel_id, {
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

function k(e, t) {
  var n;
  let i = g[e];
  G(e, {
    channel_overrides: null !== (n = null == i ? void 0 : i.channel_overrides) && void 0 !== n ? n : {},
    ...t
  })
}

function x(e, t, n) {
  let i = B(e, t, n);
  V(e, {
    [t]: i
  })
}

function F(e, t) {
  var n;
  let i = {},
    r = null !== (n = null != e ? M[e] : null) && void 0 !== n ? n : {};
  Object.keys(t).forEach(n => {
    var s;
    let a = B(e, n, t[n]);
    i[n] = a, r[n] = {
      flags: null !== (s = a.flags) && void 0 !== s ? s : 0
    }
  }), null != e && (M[e] = {
    ...M[e],
    ...r
  }), V(e, i)
}

function V(e, t) {
  var n;
  let i = g[e],
    r = null !== (n = null == i ? void 0 : i.channel_overrides) && void 0 !== n ? n : {};
  G(e, {
    channel_overrides: null == i ? t : {
      ...r,
      ...t
    }
  })
}

function B(e, t, n) {
  var i;
  let r = g[e],
    s = null !== (i = null == r ? void 0 : r.channel_overrides) && void 0 !== i ? i : {};
  return {
    channel_id: t,
    muted: !1,
    ...s[t],
    ...n
  }
}

function H(e) {
  let t = p.default.getGuild(e),
    n = null != t ? t.defaultMessageNotifications : _.UserNotificationSettings.ALL_MESSAGES;
  return y[n]
}

function j(e) {
  var t;
  return null !== (t = g[e]) && void 0 !== t ? t : H(e)
}

function Y(e) {
  v = f.hasFlag(e.flags, S.AccountNotificationFlags.USE_NEW_NOTIFICATIONS), A = f.hasFlag(e.flags, S.AccountNotificationFlags.MENTION_ON_ALL_MESSAGES), R = e
}

function W(e) {
  return new Set(null != e.channel_overrides ? r(e.channel_overrides).filter(e => (0, o.computeIsMuted)(e)).map(e => e.channel_id).value() : null)
}

function K() {
  return !0
}

function z() {
  return v && u.NotificationsExperiment.getCurrentConfig({
    location: "UserGuildSettingsStore"
  }, {
    autoTrackExposure: !1
  }).enabled
}
class q extends s.default.PersistedStore {
  initialize(e) {
    if (this.waitFor(h.default, p.default, l.default, c.default), null != e) {
      var t;
      I = e.collapsedGuilds, g = e.userGuildSettings, L = r.mapValues(null !== (t = e.optedInChannelsByGuild) && void 0 !== t ? t : {}, e => new Set(e)), null != e.useNewNotifications && (v = e.useNewNotifications), r.forEach(g, (e, t) => {
        P[t] = W(e)
      })
    }
  }
  getState() {
    return {
      collapsedGuilds: I,
      userGuildSettings: g,
      optedInChannelsByGuild: L,
      useNewNotifications: v
    }
  }
  get mentionOnAllMessages() {
    return A
  }
  isSuppressEveryoneEnabled(e) {
    return j(e).suppress_everyone
  }
  isSuppressRolesEnabled(e) {
    return j(e).suppress_roles
  }
  isMuteScheduledEventsEnabled(e) {
    return j(e).mute_scheduled_events
  }
  isMobilePushEnabled(e) {
    return j(e).mobile_push
  }
  isMuted(e) {
    let t = j(e);
    return (0, o.computeIsMuted)(t)
  }
  isTemporarilyMuted(e) {
    let t = j(e);
    return (0, o.isTemporarilyMuted)(t)
  }
  getMuteConfig(e) {
    let t = j(e);
    return t.mute_config
  }
  getMessageNotifications(e) {
    return j(e).message_notifications
  }
  getChannelOverrides(e) {
    var t;
    return null !== (t = j(e).channel_overrides) && void 0 !== t ? t : {}
  }
  getNotifyHighlights(e) {
    return j(e).notify_highlights
  }
  getGuildFlags(e) {
    return j(e).flags
  }
  getChannelMessageNotifications(e, t) {
    let n = this.getChannelOverrides(e)[t];
    return null == n || null == n.message_notifications ? _.UserNotificationSettings.NULL : n.message_notifications
  }
  getChannelMuteConfig(e, t) {
    let n = this.getChannelOverrides(e)[t];
    return null != n ? n.mute_config : null
  }
  getMutedChannels(e) {
    var t;
    return null !== (t = P[e]) && void 0 !== t ? t : b
  }
  isChannelMuted(e, t) {
    var n;
    let i = E.default.getChannel(t);
    return e = null !== (n = null == i ? void 0 : i.getGuildId()) && void 0 !== n ? n : e, this.getMutedChannels(e).has(t)
  }
  isCategoryMuted(e, t) {
    let n = E.default.getChannel(t);
    if (null == n) return !1;
    let i = n.parent_id;
    return null != i && this.getMutedChannels(e).has(i)
  }
  resolvedMessageNotifications(e) {
    let t = this.getChannelMessageNotifications(e.guild_id, e.id);
    if (t !== _.UserNotificationSettings.NULL) return t;
    if (null != e.parent_id) {
      let t = this.getChannelMessageNotifications(e.guild_id, e.parent_id);
      if (t !== _.UserNotificationSettings.NULL) return t
    }
    return this.getMessageNotifications(e.guild_id)
  }
  resolveUnreadSetting(e) {
    if (d.THREAD_CHANNEL_TYPES.has(e.type) || (0, d.isPrivate)(e.type) || !z()) return m.UnreadSetting.ALL_MESSAGES;
    let t = this.getChannelUnreadSetting(e.guild_id, e.id);
    if (t !== m.UnreadSetting.UNSET) return t;
    if (null != e.parent_id) {
      let t = this.getChannelUnreadSetting(e.guild_id, e.parent_id);
      if (t !== m.UnreadSetting.UNSET) return t
    }
    let n = this.getGuildUnreadSetting(e.guild_id);
    return n !== m.UnreadSetting.UNSET ? n : this.resolvedMessageNotifications(e) === _.UserNotificationSettings.ALL_MESSAGES ? m.UnreadSetting.ALL_MESSAGES : m.UnreadSetting.ONLY_MENTIONS
  }
  isGuildOrCategoryOrChannelMuted(e, t) {
    return this.isMuted(e) || this.isCategoryMuted(e, t) || this.isChannelMuted(e, t)
  }
  allowNoMessages(e) {
    return this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) || this.resolvedMessageNotifications(e) === _.UserNotificationSettings.NO_MESSAGES || this.isOptInEnabled(e.guild_id) && !this.isChannelRecordOrParentOptedIn(e)
  }
  allowAllMessages(e) {
    return !this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) && this.resolvedMessageNotifications(e) === _.UserNotificationSettings.ALL_MESSAGES && (!this.isOptInEnabled(e.guild_id) || this.isChannelRecordOrParentOptedIn(e))
  }
  isGuildCollapsed(e) {
    return I[e] || !1
  }
  getAllSettings() {
    return {
      userGuildSettings: g,
      mutedChannels: P,
      collapsedGuilds: I,
      optedInChannelsByGuild: L
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
      if (f.hasFlag(t.flags, T.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON)) return !0;
      if (f.hasFlag(t.flags, T.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF)) return !1
    }
    return this.resolvedMessageNotifications(e) === _.UserNotificationSettings.ALL_MESSAGES
  }
  isOptInEnabled(e) {
    return null != e && (l.default.isFullServerPreview(e) ? l.default.isOptInEnabled(e) : f.hasFlag(this.getGuildFlags(e), T.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON))
  }
  isChannelRecordOrParentOptedIn(e, t) {
    return null != e && null != e.guild_id && (this.isChannelOptedIn(e.guild_id, e.id, t) || null != e.parent_id && this.isChannelOptedIn(e.guild_id, e.parent_id, t))
  }
  isChannelOrParentOptedIn(e, t, n) {
    return this.isChannelRecordOrParentOptedIn(E.default.getChannel(t), n)
  }
  isChannelOptedIn(e, t) {
    var n, i;
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null == e) return !1;
    if (l.default.isFullServerPreview(e)) return l.default.isChannelOptedIn(e, t);
    if (r && null != U[e]) return U[e].has(t);
    let s = null !== (i = null === (n = this.getChannelOverrides(e)[t]) || void 0 === n ? void 0 : n.flags) && void 0 !== i ? i : 0;
    return f.hasFlag(s, T.ChannelNotificationSettingsFlags.OPT_IN_ENABLED)
  }
  getOptedInChannels(e) {
    var t, n;
    return l.default.isFullServerPreview(e) ? null !== (t = l.default.getViewingChannels(e)) && void 0 !== t ? t : b : null !== (n = L[e]) && void 0 !== n ? n : b
  }
  getOptedInChannelsWithPendingUpdates(e) {
    return U[e]
  }
  getPendingChannelUpdates(e) {
    return M[e]
  }
  getGuildFavorites(e) {
    if (l.default.isFullServerPreview(e)) return null;
    if (null == C[e]) {
      let t = r.filter(this.getChannelOverrides(e), t => {
        var n, i;
        return f.hasFlag(null !== (i = t.flags) && void 0 !== i ? i : 0, T.ChannelNotificationSettingsFlags.FAVORITED) && (null === (n = E.default.getChannel(t.channel_id)) || void 0 === n ? void 0 : n.guild_id) === e
      });
      C[e] = t.map(e => e.channel_id)
    }
    return C[e]
  }
  isFavorite(e, t) {
    var n;
    return !l.default.isFullServerPreview(e) && (null === (n = this.getGuildFavorites(e)) || void 0 === n ? void 0 : n.includes(t)) === !0
  }
  isMessagesFavorite(e) {
    var t, n;
    let i = null !== (n = null === (t = this.getChannelOverrides(null)[e]) || void 0 === t ? void 0 : t.flags) && void 0 !== n ? n : 0;
    return f.hasFlag(i, T.ChannelNotificationSettingsFlags.FAVORITED)
  }
  isAddedToMessages(e) {
    var t, n;
    let i = null !== (n = null === (t = this.getChannelOverrides(null)[e]) || void 0 === t ? void 0 : t.flags) && void 0 !== n ? n : 0;
    return f.hasFlag(i, T.ChannelNotificationSettingsFlags.OPT_IN_ENABLED)
  }
  getAddedToMessages() {
    var e;
    return null !== (e = L.null) && void 0 !== e ? e : b
  }
  get accountNotificationSettings() {
    return R
  }
  get useNewNotifications() {
    return v
  }
  getGuildUnreadSetting(e) {
    if (!z()) return m.UnreadSetting.ALL_MESSAGES;
    let t = this.getGuildFlags(e);
    return f.hasFlag(t, T.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES) ? m.UnreadSetting.ALL_MESSAGES : f.hasFlag(t, T.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS) ? m.UnreadSetting.ONLY_MENTIONS : m.UnreadSetting.UNSET
  }
  resolveGuildUnreadSetting(e) {
    let t = this.getGuildFlags(e.id);
    return !z() || f.hasFlag(t, T.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES) ? m.UnreadSetting.ALL_MESSAGES : f.hasFlag(t, T.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS) ? m.UnreadSetting.ONLY_MENTIONS : e.defaultMessageNotifications === _.UserNotificationSettings.ALL_MESSAGES ? m.UnreadSetting.ALL_MESSAGES : m.UnreadSetting.ONLY_MENTIONS
  }
  getChannelRecordUnreadSetting(e) {
    return this.getChannelUnreadSetting(e.guild_id, e.id)
  }
  getChannelUnreadSetting(e, t) {
    let n = this.getChannelIdFlags(e, t);
    return f.hasFlag(n, T.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES) ? m.UnreadSetting.ALL_MESSAGES : f.hasFlag(n, T.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS) ? m.UnreadSetting.ONLY_MENTIONS : m.UnreadSetting.UNSET
  }
}
q.displayName = "UserGuildSettingsStore", q.persistKey = "collapsedGuilds", q.migrations = [e => ({
  collapsedGuilds: e,
  userGuildSettings: {}
})];
let X = new q(a.default, {
  USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
    let {
      userGuildSettings: t
    } = e;
    t.forEach(e => {
      null != e.guild_id && (I[e.guild_id] = !0 === e.hide_muted_channels), G(e.guild_id, {
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
    k(t, n)
  },
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: function(e) {
    let {
      guildId: t,
      settings: n
    } = e;
    k(t, n), F(t, n.channel_overrides)
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: n,
      settings: i
    } = e;
    null != t && null != i.flags && (M[t] = {
      ...M[t],
      [n]: {
        flags: i.flags
      }
    }), x(t, n, i)
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function(e) {
    let {
      guildId: t,
      overrides: n
    } = e;
    return !(null == t || l.default.isFullServerPreview(t)) && (F(t, n), !0)
  },
  CONNECTION_OPEN: function(e) {
    Y(e.notificationSettings), N.reset(), O.reset(), !e.userGuildSettings.partial && (g = {}, P = {}, L = {}, I = {});
    let t = new Set;
    for (let n in e.userGuildSettings.entries.forEach(e => {
        !("channel_overrides" in e) && (e.channel_overrides = {}), G(e.guild_id, e), null != e.guild_id && t.add(e.guild_id)
      }), g) !t.has(n) && w(n, g[n])
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      allUserGuildSettings: t
    } = e, {
      userGuildSettings: n,
      mutedChannels: i,
      collapsedGuilds: r,
      optedInChannelsByGuild: s
    } = t;
    g = {
      ...n
    }, P = {}, L = {}, Object.keys(i).forEach(e => {
      P[e] = new Set(i[e])
    }), Object.keys(s).forEach(e => {
      L[e] = new Set(s[e])
    }), I = {
      ...r
    }
  },
  GUILD_CREATE: K,
  GUILD_UPDATE: K,
  GUILD_TOGGLE_COLLAPSE_MUTED: function(e) {
    let {
      guildId: t
    } = e;
    I[t] = !I[t]
  },
  IMPERSONATE_UPDATE: K,
  IMPERSONATE_STOP: K,
  USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES: function(e) {
    let {
      guildId: t,
      updates: n
    } = e;
    if (null == t) return !1;
    let i = M[t];
    if (null == i) return !1;
    for (let e in n) r.isEqual(n[e], i[e]) && delete i[e]
  },
  CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function(e) {
    let {
      guildId: t
    } = e;
    if (null == t) return !1;
    delete M[t], delete U[t]
  },
  NOTIFICATION_SETTINGS_UPDATE: function(e) {
    let {
      settings: t
    } = e;
    Y(t)
  },
  GUILD_MUTE_EXPIRED: () => !0,
  CHANNEL_MUTE_EXPIRED: () => !0
});
var Q = X