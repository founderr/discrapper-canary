"use strict";
n.r(t), n("47120");
var l, i, a, u, E = n("392711"),
  d = n.n(E),
  r = n("442837"),
  o = n("570140"),
  s = n("317381"),
  _ = n("430198"),
  C = n("924301"),
  S = n("601070"),
  A = n("569471"),
  c = n("581883"),
  T = n("314897"),
  I = n("680089"),
  L = n("592125"),
  f = n("58468"),
  D = n("77498"),
  N = n("496675"),
  h = n("306680"),
  U = n("944486"),
  R = n("9156"),
  P = n("823379"),
  g = n("709054"),
  O = n("540126"),
  G = n("526761");
let m = null,
  H = null,
  p = new O.default;

function M() {
  let e = U.default.getChannelId(),
    t = U.default.getVoiceChannelId();
  return m = e, H = t, p.clear()
}

function v(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  return p.clearGuildId(t)
}

function x(e) {
  let {
    channel: {
      guild_id: t
    }
  } = e;
  return p.clearGuildId(t)
}

function B(e) {
  let {
    guildId: t
  } = e;
  return p.clearGuildId(t)
}

function F(e) {
  let {
    channelId: t
  } = e;
  return p.nonPositionalChannelIdUpdate(t)
}

function y() {
  return null != m && p.nonPositionalChannelIdUpdate(m)
}

function j(e) {
  let {
    channel: t
  } = e;
  return p.nonPositionalChannelIdUpdate(t.id)
}

function b(e) {
  let {
    id: t
  } = e;
  return p.nonPositionalChannelIdUpdate(t)
}

function w() {
  let e = U.default.getChannelId(),
    t = U.default.getVoiceChannelId(),
    n = m !== e || H !== t;
  return !!n && (d()([m, H, e, t]).uniq().forEach(e => {
    null != e && p.nonPositionalChannelIdUpdate(e) && (n = !0)
  }), m = e, H = t, !0)
}

function V(e) {
  let {
    id: t
  } = e, n = L.default.getChannel(t);
  return null == n ? p.clearGuildId(t) : p.clearGuildId(n.guild_id)
}

function Y(e) {
  let {
    guildId: t
  } = e;
  return p.clearGuildId(t)
}

function k() {
  return p.updateSubtitles()
}

function K(e) {
  let {
    guildScheduledEvent: t
  } = e;
  return p.updateSubtitles(t.guild_id)
}
class W extends(l = r.default.Store) {
  initialize() {
    this.waitFor(S.default, T.default, I.default, L.default, f.default, s.default, D.default, _.default, C.default, A.default, N.default, h.default, U.default, R.default, c.default)
  }
  getGuild(e, t) {
    let n = p.getGuild(e, t);
    return {
      guildChannelsVersion: n.version,
      guildChannels: n
    }
  }
  getGuildWithoutChangingCommunityRows(e) {
    let t = p.getGuildWithoutCommunityRows(e);
    return {
      guildChannelsVersion: t.version,
      guildChannels: t
    }
  }
  recentsChannelCount(e) {
    if (null == e) return 0;
    let t = p.getGuildWithoutCommunityRows(e);
    return t.getCategoryFromSection(t.recentsSectionNumber).getShownChannelIds().length
  }
}
u = "ChannelListStore", (a = "displayName") in(i = W) ? Object.defineProperty(i, a, {
  value: u,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = u, t.default = new W(o.default, {
  APPLICATION_FETCH_FAIL: k,
  APPLICATION_FETCH_SUCCESS: k,
  APPLICATION_FETCH: k,
  APPLICATIONS_FETCH_FAIL: k,
  APPLICATIONS_FETCH_SUCCESS: k,
  APPLICATIONS_FETCH: k,
  BACKGROUND_SYNC: M,
  BULK_ACK: function(e) {
    let {
      channels: t
    } = e, n = !1;
    return d()(t).map(e => {
      var t;
      return null === (t = L.default.getChannel(e.channelId)) || void 0 === t ? void 0 : t.guild_id
    }).filter(P.isNotNullish).uniq().forEach(e => {
      p.clearGuildId(e) && (n = !0)
    }), n
  },
  BULK_CLEAR_RECENTS: B,
  CACHE_LOADED_LAZY: M,
  CATEGORY_COLLAPSE_ALL: B,
  CATEGORY_COLLAPSE: V,
  CATEGORY_EXPAND_ALL: B,
  CATEGORY_EXPAND: V,
  CHANNEL_ACK: F,
  CHANNEL_COLLAPSE: function(e) {
    var t;
    let {
      channelId: n
    } = e;
    return p.clearGuildId(null === (t = L.default.getChannel(n)) || void 0 === t ? void 0 : t.guild_id)
  },
  CHANNEL_CREATE: x,
  CHANNEL_DELETE: x,
  CHANNEL_LOCAL_ACK: F,
  CHANNEL_MUTE_EXPIRED: B,
  CHANNEL_RTC_UPDATE_CHAT_OPEN: F,
  CHANNEL_SELECT: w,
  CHANNEL_STATUSES: function(e) {
    return p.clearGuildId(e.guildId)
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = !1;
    return d()(t).map(e => e.guild_id).uniq().forEach(e => {
      p.clearGuildId(e) && (n = !0)
    }), n
  },
  CONNECTION_OPEN_SUPPLEMENTAL: k,
  CONNECTION_OPEN: M,
  CURRENT_USER_UPDATE: M,
  DECAY_READ_STATES: M,
  DEV_TOOLS_DESIGN_TOGGLE_SET: M,
  DISABLE_AUTOMATIC_ACK: F,
  DISMISS_FAVORITE_SUGGESTION: function(e) {
    let {
      channelId: t
    } = e;
    return p.nonPositionalChannelIdUpdate(t)
  },
  DRAWER_CLOSE: y,
  DRAWER_OPEN: y,
  EMBEDDED_ACTIVITY_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    return p.updateSubtitles(t, n)
  },
  EMBEDDED_ACTIVITY_UPDATE_V2: function(e) {
    let {
      location: t
    } = e;
    return p.updateSubtitles(t.guild_id, t.channel_id)
  },
  EMBEDDED_ACTIVITY_LAUNCH_START: function(e) {
    k()
  },
  EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: k,
  ENABLE_AUTOMATIC_ACK: F,
  FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
    let {
      guildId: t
    } = e;
    return p.updateSubtitles(t)
  },
  GAMES_DATABASE_FETCH_FAIL: k,
  GAMES_DATABASE_FETCH: k,
  GAMES_DATABASE_UPDATE: k,
  GUILD_APPLICATIONS_FETCH_SUCCESS: k,
  GUILD_CREATE: v,
  GUILD_DELETE: v,
  GUILD_MEMBER_UPDATE: function(e) {
    let {
      guildId: t,
      user: n
    } = e;
    return T.default.getId() === n.id && p.clearGuildId(t)
  },
  GUILD_MUTE_EXPIRED: B,
  GUILD_ROLE_CREATE: B,
  GUILD_ROLE_DELETE: B,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: B,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: B,
  GUILD_ROLE_UPDATE: B,
  GUILD_SCHEDULED_EVENT_CREATE: K,
  GUILD_SCHEDULED_EVENT_DELETE: K,
  GUILD_SCHEDULED_EVENT_UPDATE: K,
  GUILD_TOGGLE_COLLAPSE_MUTED: B,
  GUILD_UPDATE: v,
  IMPERSONATE_STOP: B,
  IMPERSONATE_UPDATE: B,
  LOAD_CHANNELS: function(e) {
    e.channels.forEach(e => {
      let {
        guildId: t
      } = e;
      return p.clearGuildId(t)
    })
  },
  LOAD_MESSAGES_SUCCESS: F,
  MESSAGE_ACK: F,
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t
    } = e;
    return p.nonPositionalChannelIdUpdate(t)
  },
  MESSAGE_DELETE_BULK: F,
  MESSAGE_DELETE: F,
  NOTIFICATION_SETTINGS_UPDATE: M,
  OVERLAY_INITIALIZE: M,
  PASSIVE_UPDATE_V2: function(e) {
    return p.clearGuildId(e.guildId)
  },
  RECOMPUTE_READ_STATES: M,
  RESORT_THREADS: F,
  SET_RECENTLY_ACTIVE_COLLAPSED: M,
  THREAD_CREATE: j,
  THREAD_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return p.nonPositionalChannelUpdate(t)
  },
  THREAD_LIST_SYNC: B,
  THREAD_MEMBER_UPDATE: b,
  THREAD_MEMBERS_UPDATE: b,
  THREAD_UPDATE: j,
  TRY_ACK: F,
  UPDATE_CHANNEL_DIMENSIONS: F,
  UPDATE_CHANNEL_LIST_SUBTITLES: function(e) {
    let {
      guildId: t
    } = e;
    p.updateSubtitles(t)
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: B,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: B,
  USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
    let {
      userGuildSettings: t
    } = e;
    t.forEach(e => {
      let {
        guild_id: t
      } = e;
      return p.clearGuildId(t)
    })
  },
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: B,
  USER_GUILD_SETTINGS_GUILD_UPDATE: B,
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    var t;
    let {
      settings: n
    } = e;
    if (n.type !== G.UserSettingsTypes.PRELOADED_USER_SETTINGS) return !1;
    let l = null === (t = n.proto.guilds) || void 0 === t ? void 0 : t.guilds,
      i = !1;
    return null != l && g.default.keys(l).forEach(e => {
      null != l[e].guildRecentsDismissedAt && (i = p.updateRecentsCategory(e) || i)
    }), i
  },
  VOICE_CATEGORY_COLLAPSE: Y,
  VOICE_CATEGORY_EXPAND: Y,
  VOICE_CHANNEL_SELECT: w,
  VOICE_CHANNEL_STATUS_UPDATE: function(e) {
    return p.nonPositionalChannelIdUpdate(e.id)
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e, n = w(), l = new Set;
    for (let {
        channelId: e,
        oldChannelId: i
      }
      of t) null != i && !l.has(i) && (p.nonPositionalChannelIdUpdate(i) && (n = !0), l.add(i)), null != e && !l.has(e) && (p.nonPositionalChannelIdUpdate(e) && (n = !0), l.add(e));
    return n
  },
  WINDOW_FOCUS: y
})