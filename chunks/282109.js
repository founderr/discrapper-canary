"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Z
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
  E = n("299039"),
  p = n("42203"),
  h = n("305961"),
  _ = n("697218"),
  S = n("49111"),
  m = n("76618"),
  T = n("133335"),
  g = n("397336");
let I = {},
  C = {},
  v = {},
  A = !1,
  R = !1,
  N = {
    flags: 0
  },
  O = new o.default,
  D = new o.default,
  y = {
    suppress_everyone: !1,
    suppress_roles: !1,
    mute_scheduled_events: !1,
    mobile_push: !0,
    muted: !1,
    message_notifications: S.UserNotificationSettings.ALL_MESSAGES,
    flags: 0,
    channel_overrides: {},
    notify_highlights: S.HighlightSettings.NULL
  },
  P = {
    [S.UserNotificationSettings.ALL_MESSAGES]: {
      ...y,
      message_notifications: S.UserNotificationSettings.ALL_MESSAGES
    },
    [S.UserNotificationSettings.ONLY_MENTIONS]: {
      ...y,
      message_notifications: S.UserNotificationSettings.ONLY_MENTIONS
    }
  },
  L = {},
  b = {},
  M = new Set,
  U = {},
  G = {};

function w(e, t) {
  var n;
  let i = I[e],
    s = null !== (n = null == i ? void 0 : i.channel_overrides) && void 0 !== n ? n : {},
    a = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return e instanceof Array ? r.keyBy(e, "channel_id") : e
    }(t.channel_overrides),
    o = {
      ...j(e),
      ...i,
      ...t,
      channel_overrides: a
    };
  O.clearTimer(e), r.forEach(s, e => {
    D.clearTimer(e.channel_id)
  }), k(e, o), I[e] = o, null != e && (C[e] = !0 === o.hide_muted_channels), L[e] = K(I[e]);
  let l = r.filter(o.channel_overrides, e => {
    var t;
    return f.hasFlag(null !== (t = e.flags) && void 0 !== t ? t : 0, g.ChannelNotificationSettingsFlags.OPT_IN_ENABLED)
  });
  b[e] = new Set(l.map(e => e.channel_id)),
    function(e) {
      var t;
      if (null == e) return;
      let n = new Set(b[e]),
        i = null !== (t = U[e]) && void 0 !== t ? t : {};
      for (let e in i) {
        let t = i[e];
        f.hasFlag(t.flags, g.ChannelNotificationSettingsFlags.OPT_IN_ENABLED) ? n.add(e) : n.delete(e)
      }
      Object.keys(i).length > 0 ? G[e] = n : delete G[e]
    }(e), delete v[e]
}

function k(e, t) {
  if (!0 === t.muted) {
    let n = O.setTimer(e, t.mute_config, () => {
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
      let n = D.setTimer(t.channel_id, t.mute_config, () => {
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
  w(e, {
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
  Object.keys(t).forEach(n => {
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
  w(e, {
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
  let t = h.default.getGuild(e),
    n = null != t ? t.defaultMessageNotifications : S.UserNotificationSettings.ALL_MESSAGES;
  return P[n]
}

function Y(e) {
  var t;
  return null !== (t = I[e]) && void 0 !== t ? t : j(e)
}

function W(e) {
  A = f.hasFlag(e.flags, m.AccountNotificationFlags.USE_NEW_NOTIFICATIONS), R = f.hasFlag(e.flags, m.AccountNotificationFlags.MENTION_ON_ALL_MESSAGES), N = e
}

function K(e) {
  return new Set(null != e.channel_overrides ? r(e.channel_overrides).filter(e => (0, o.computeIsMuted)(e)).map(e => e.channel_id).value() : null)
}

function z() {
  return !0
}

function q() {
  return A && u.NotificationsExperiment.getCurrentConfig({
    location: "UserGuildSettingsStore"
  }, {
    autoTrackExposure: !1
  }).enabled
}
class X extends s.default.PersistedStore {
  initialize(e) {
    if (this.waitFor(_.default, h.default, l.default, c.default), null != e) {
      var t;
      C = e.collapsedGuilds, I = e.userGuildSettings, b = r.mapValues(null !== (t = e.optedInChannelsByGuild) && void 0 !== t ? t : {}, e => new Set(e)), null != e.useNewNotifications && (A = e.useNewNotifications), r.forEach(I, (e, t) => {
        L[t] = K(e)
      })
    }
  }
  getState() {
    return {
      collapsedGuilds: C,
      userGuildSettings: I,
      optedInChannelsByGuild: b,
      useNewNotifications: A
    }
  }
  get mentionOnAllMessages() {
    return R
  }
  isSuppressEveryoneEnabled(e) {
    return Y(e).suppress_everyone
  }
  isSuppressRolesEnabled(e) {
    return Y(e).suppress_roles
  }
  isMuteScheduledEventsEnabled(e) {
    return Y(e).mute_scheduled_events
  }
  isMobilePushEnabled(e) {
    return Y(e).mobile_push
  }
  isMuted(e) {
    let t = Y(e);
    return (0, o.computeIsMuted)(t)
  }
  isTemporarilyMuted(e) {
    let t = Y(e);
    return (0, o.isTemporarilyMuted)(t)
  }
  getMuteConfig(e) {
    let t = Y(e);
    return t.mute_config
  }
  getMessageNotifications(e) {
    return Y(e).message_notifications
  }
  getChannelOverrides(e) {
    var t;
    return null !== (t = Y(e).channel_overrides) && void 0 !== t ? t : {}
  }
  getNotifyHighlights(e) {
    return Y(e).notify_highlights
  }
  getGuildFlags(e) {
    return Y(e).flags
  }
  getChannelMessageNotifications(e, t) {
    let n = this.getChannelOverrides(e)[t];
    return null == n || null == n.message_notifications ? S.UserNotificationSettings.NULL : n.message_notifications
  }
  getChannelMuteConfig(e, t) {
    let n = this.getChannelOverrides(e)[t];
    return null != n ? n.mute_config : null
  }
  getMutedChannels(e) {
    var t;
    return null !== (t = L[e]) && void 0 !== t ? t : M
  }
  isChannelMuted(e, t) {
    var n;
    let i = p.default.getChannel(t);
    return e = null !== (n = null == i ? void 0 : i.getGuildId()) && void 0 !== n ? n : e, this.getMutedChannels(e).has(t)
  }
  isCategoryMuted(e, t) {
    let n = p.default.getChannel(t);
    if (null == n) return !1;
    let i = n.parent_id;
    return null != i && this.getMutedChannels(e).has(i)
  }
  resolvedMessageNotifications(e) {
    let t = this.getChannelMessageNotifications(e.guild_id, e.id);
    if (t !== S.UserNotificationSettings.NULL) return t;
    if (null != e.parent_id) {
      let t = this.getChannelMessageNotifications(e.guild_id, e.parent_id);
      if (t !== S.UserNotificationSettings.NULL) return t
    }
    return this.getMessageNotifications(e.guild_id)
  }
  resolveUnreadSetting(e) {
    if (d.THREAD_CHANNEL_TYPES.has(e.type) || (0, d.isPrivate)(e.type) || !q()) return T.UnreadSetting.ALL_MESSAGES;
    let t = this.getChannelUnreadSetting(e.guild_id, e.id);
    if (t !== T.UnreadSetting.UNSET) return t;
    if (null != e.parent_id) {
      let t = this.getChannelUnreadSetting(e.guild_id, e.parent_id);
      if (t !== T.UnreadSetting.UNSET) return t
    }
    let n = this.getGuildUnreadSetting(e.guild_id);
    return n !== T.UnreadSetting.UNSET ? n : this.resolvedMessageNotifications(e) === S.UserNotificationSettings.ALL_MESSAGES ? T.UnreadSetting.ALL_MESSAGES : T.UnreadSetting.ONLY_MENTIONS
  }
  isGuildOrCategoryOrChannelMuted(e, t) {
    return this.isMuted(e) || this.isCategoryMuted(e, t) || this.isChannelMuted(e, t)
  }
  allowNoMessages(e) {
    return this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) || this.resolvedMessageNotifications(e) === S.UserNotificationSettings.NO_MESSAGES || this.isOptInEnabled(e.guild_id) && !this.isChannelRecordOrParentOptedIn(e)
  }
  allowAllMessages(e) {
    return !this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) && this.resolvedMessageNotifications(e) === S.UserNotificationSettings.ALL_MESSAGES && (!this.isOptInEnabled(e.guild_id) || this.isChannelRecordOrParentOptedIn(e))
  }
  isGuildCollapsed(e) {
    return C[e] || !1
  }
  getAllSettings() {
    return {
      userGuildSettings: I,
      mutedChannels: L,
      collapsedGuilds: C,
      optedInChannelsByGuild: b
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
      if (f.hasFlag(t.flags, g.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON)) return !0;
      if (f.hasFlag(t.flags, g.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF)) return !1
    }
    return this.resolvedMessageNotifications(e) === S.UserNotificationSettings.ALL_MESSAGES
  }
  isOptInEnabled(e) {
    return null != e && (l.default.isFullServerPreview(e) ? l.default.isOptInEnabled(e) : f.hasFlag(this.getGuildFlags(e), g.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON))
  }
  isChannelRecordOrParentOptedIn(e, t) {
    return null != e && null != e.guild_id && (this.isChannelOptedIn(e.guild_id, e.id, t) || null != e.parent_id && this.isChannelOptedIn(e.guild_id, e.parent_id, t))
  }
  isChannelOrParentOptedIn(e, t, n) {
    return this.isChannelRecordOrParentOptedIn(p.default.getChannel(t), n)
  }
  isChannelOptedIn(e, t) {
    var n, i;
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null == e) return !1;
    if (l.default.isFullServerPreview(e)) return l.default.isChannelOptedIn(e, t);
    if (r && null != G[e]) return G[e].has(t);
    let s = null !== (i = null === (n = this.getChannelOverrides(e)[t]) || void 0 === n ? void 0 : n.flags) && void 0 !== i ? i : 0;
    return f.hasFlag(s, g.ChannelNotificationSettingsFlags.OPT_IN_ENABLED)
  }
  getOptedInChannels(e) {
    var t, n;
    return l.default.isFullServerPreview(e) ? null !== (t = l.default.getViewingChannels(e)) && void 0 !== t ? t : M : null !== (n = b[e]) && void 0 !== n ? n : M
  }
  getOptedInChannelsWithPendingUpdates(e) {
    return G[e]
  }
  getPendingChannelUpdates(e) {
    return U[e]
  }
  getGuildFavorites(e) {
    if (l.default.isFullServerPreview(e)) return null;
    if (null == v[e]) {
      let t = r.filter(this.getChannelOverrides(e), t => {
        var n, i;
        return f.hasFlag(null !== (i = t.flags) && void 0 !== i ? i : 0, g.ChannelNotificationSettingsFlags.FAVORITED) && (null === (n = p.default.getChannel(t.channel_id)) || void 0 === n ? void 0 : n.guild_id) === e
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
    return f.hasFlag(i, g.ChannelNotificationSettingsFlags.FAVORITED)
  }
  isAddedToMessages(e) {
    var t, n;
    let i = null !== (n = null === (t = this.getChannelOverrides(null)[e]) || void 0 === t ? void 0 : t.flags) && void 0 !== n ? n : 0;
    return f.hasFlag(i, g.ChannelNotificationSettingsFlags.OPT_IN_ENABLED)
  }
  getAddedToMessages() {
    var e;
    return null !== (e = b.null) && void 0 !== e ? e : M
  }
  get accountNotificationSettings() {
    return N
  }
  get useNewNotifications() {
    return A
  }
  getGuildUnreadSetting(e) {
    if (!q()) return T.UnreadSetting.ALL_MESSAGES;
    let t = this.getGuildFlags(e);
    return f.hasFlag(t, g.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES) ? T.UnreadSetting.ALL_MESSAGES : f.hasFlag(t, g.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS) ? T.UnreadSetting.ONLY_MENTIONS : T.UnreadSetting.UNSET
  }
  resolveGuildUnreadSetting(e) {
    let t = this.getGuildFlags(e.id);
    return !q() || f.hasFlag(t, g.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES) ? T.UnreadSetting.ALL_MESSAGES : f.hasFlag(t, g.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS) ? T.UnreadSetting.ONLY_MENTIONS : e.defaultMessageNotifications === S.UserNotificationSettings.ALL_MESSAGES ? T.UnreadSetting.ALL_MESSAGES : T.UnreadSetting.ONLY_MENTIONS
  }
  getChannelRecordUnreadSetting(e) {
    return this.getChannelUnreadSetting(e.guild_id, e.id)
  }
  getChannelUnreadSetting(e, t) {
    let n = this.getChannelIdFlags(e, t);
    return f.hasFlag(n, g.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES) ? T.UnreadSetting.ALL_MESSAGES : f.hasFlag(n, g.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS) ? T.UnreadSetting.ONLY_MENTIONS : T.UnreadSetting.UNSET
  }
}
X.displayName = "UserGuildSettingsStore", X.persistKey = "collapsedGuilds", X.migrations = [e => ({
  collapsedGuilds: e,
  userGuildSettings: {}
})];
let Q = new X(a.default, {
  USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
    let {
      userGuildSettings: t
    } = e;
    t.forEach(e => {
      null != e.guild_id && (C[e.guild_id] = !0 === e.hide_muted_channels), w(e.guild_id, {
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
    W(e.notificationSettings), O.reset(), D.reset(), !e.userGuildSettings.partial && (I = {}, L = {}, b = {}, C = {});
    let t = new Set;
    for (let n in e.userGuildSettings.entries.forEach(e => {
        !("channel_overrides" in e) && (e.channel_overrides = {}), w(e.guild_id, e), null != e.guild_id && t.add(e.guild_id)
      }), I) !t.has(n) && k(n, I[n])
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
    I = {
      ...n
    }, L = {}, b = {}, E.default.keys(i).forEach(e => {
      L[e] = new Set(i[e])
    }), E.default.keys(s).forEach(e => {
      b[e] = new Set(s[e])
    }), C = {
      ...r
    }
  },
  GUILD_CREATE: z,
  GUILD_UPDATE: z,
  GUILD_TOGGLE_COLLAPSE_MUTED: function(e) {
    let {
      guildId: t
    } = e;
    C[t] = !C[t]
  },
  IMPERSONATE_UPDATE: z,
  IMPERSONATE_STOP: z,
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
    delete U[t], delete G[t]
  },
  NOTIFICATION_SETTINGS_UPDATE: function(e) {
    let {
      settings: t
    } = e;
    W(t)
  },
  GUILD_MUTE_EXPIRED: () => !0,
  CHANNEL_MUTE_EXPIRED: () => !0
});
var Z = Q