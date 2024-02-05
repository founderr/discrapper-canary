"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
}), n("222007");
var i = n("917351"),
  o = n.n(i),
  l = n("446674"),
  a = n("913144"),
  u = n("191225"),
  d = n("203288"),
  s = n("398604"),
  E = n("401690"),
  r = n("755624"),
  _ = n("374363"),
  A = n("271938"),
  c = n("870691"),
  C = n("42203"),
  T = n("816092"),
  S = n("546463"),
  I = n("957255"),
  f = n("660478"),
  N = n("18494"),
  O = n("282109"),
  L = n("449008"),
  D = n("319839"),
  p = n("397336");
let R = null,
  h = null,
  G = new D.default;

function g() {
  let e = N.default.getChannelId(),
    t = N.default.getVoiceChannelId();
  return R = e, h = t, G.clear()
}

function b(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  return G.clearGuildId(t)
}

function M(e) {
  let {
    channel: {
      guild_id: t
    }
  } = e;
  return G.clearGuildId(t)
}

function P(e) {
  let {
    guildId: t
  } = e;
  return G.clearGuildId(t)
}

function m(e) {
  let {
    channelId: t
  } = e;
  return G.nonPositionalChannelIdUpdate(t)
}

function U() {
  return null != R && G.nonPositionalChannelIdUpdate(R)
}

function y(e) {
  let {
    channel: t
  } = e;
  return G.nonPositionalChannelIdUpdate(t.id)
}

function K(e) {
  let {
    id: t
  } = e;
  return G.nonPositionalChannelIdUpdate(t)
}

function H() {
  let e = N.default.getChannelId(),
    t = N.default.getVoiceChannelId(),
    n = R !== e || h !== t;
  return !!n && (o([R, h, e, t]).uniq().forEach(e => {
    null != e && G.nonPositionalChannelIdUpdate(e) && (n = !0)
  }), R = e, h = t, !0)
}

function B(e) {
  let {
    id: t
  } = e, n = C.default.getChannel(t);
  return null == n ? G.clearGuildId(t) : G.clearGuildId(n.guild_id)
}

function v(e) {
  let {
    guildId: t
  } = e;
  return G.clearGuildId(t)
}

function V() {
  return G.updateSubtitles()
}

function F(e) {
  let {
    guildScheduledEvent: t
  } = e;
  return G.updateSubtitles(t.guild_id)
}
class Y extends l.default.Store {
  initialize() {
    this.waitFor(E.default, A.default, c.default, C.default, T.default, u.default, S.default, d.default, s.default, r.default, I.default, f.default, N.default, O.default, _.default)
  }
  getGuild(e, t) {
    let n = G.getGuild(e, t);
    return {
      guildChannelsVersion: n.version,
      guildChannels: n
    }
  }
  getGuildWithoutChangingCommunityRows(e) {
    let t = G.getGuildWithoutCommunityRows(e);
    return {
      guildChannelsVersion: t.version,
      guildChannels: t
    }
  }
  recentsChannelCount(e) {
    if (null == e) return 0;
    let t = G.getGuildWithoutCommunityRows(e),
      n = t.getCategoryFromSection(t.recentsSectionNumber);
    return n.getShownChannelIds().length
  }
}
Y.displayName = "ChannelListStore";
var w = new Y(a.default, {
  APPLICATION_FETCH_FAIL: V,
  APPLICATION_FETCH_SUCCESS: V,
  APPLICATION_FETCH: V,
  APPLICATIONS_FETCH_FAIL: V,
  APPLICATIONS_FETCH_SUCCESS: V,
  APPLICATIONS_FETCH: V,
  BACKGROUND_SYNC: g,
  BULK_ACK: function(e) {
    let {
      channels: t
    } = e, n = !1;
    return o(t).map(e => {
      var t;
      return null === (t = C.default.getChannel(e.channelId)) || void 0 === t ? void 0 : t.guild_id
    }).filter(L.isNotNullish).uniq().forEach(e => {
      G.clearGuildId(e) && (n = !0)
    }), n
  },
  BULK_CLEAR_RECENTS: P,
  CACHE_LOADED_LAZY: g,
  CATEGORY_COLLAPSE_ALL: P,
  CATEGORY_COLLAPSE: B,
  CATEGORY_EXPAND_ALL: P,
  CATEGORY_EXPAND: B,
  CHANNEL_ACK: m,
  CHANNEL_COLLAPSE: function(e) {
    var t;
    let {
      channelId: n
    } = e;
    return G.clearGuildId(null === (t = C.default.getChannel(n)) || void 0 === t ? void 0 : t.guild_id)
  },
  CHANNEL_CREATE: M,
  CHANNEL_DELETE: M,
  CHANNEL_LOCAL_ACK: m,
  CHANNEL_MUTE_EXPIRED: P,
  CHANNEL_RTC_UPDATE_CHAT_OPEN: m,
  CHANNEL_SELECT: H,
  CHANNEL_STATUSES: function(e) {
    return G.clearGuildId(e.guildId)
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = !1;
    return o(t).map(e => e.guild_id).uniq().forEach(e => {
      G.clearGuildId(e) && (n = !0)
    }), n
  },
  CONNECTION_OPEN_SUPPLEMENTAL: V,
  CONNECTION_OPEN: g,
  CURRENT_USER_UPDATE: g,
  DECAY_READ_STATES: g,
  DEV_TOOLS_DESIGN_TOGGLE_SET: g,
  DISABLE_AUTOMATIC_ACK: m,
  DISMISS_FAVORITE_SUGGESTION: function(e) {
    let {
      channelId: t
    } = e;
    return G.nonPositionalChannelIdUpdate(t)
  },
  DRAWER_CLOSE: U,
  DRAWER_OPEN: U,
  EMBEDDED_ACTIVITY_INBOUND_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    return G.updateSubtitles(t, n)
  },
  EMBEDDED_ACTIVITY_LAUNCH_START: function(e) {
    V()
  },
  EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: V,
  ENABLE_AUTOMATIC_ACK: m,
  FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
    let {
      guildId: t
    } = e;
    return G.updateSubtitles(t)
  },
  GAMES_DATABASE_FETCH_FAIL: V,
  GAMES_DATABASE_FETCH: V,
  GAMES_DATABASE_UPDATE: V,
  GUILD_APPLICATIONS_FETCH_SUCCESS: V,
  GUILD_CREATE: b,
  GUILD_DELETE: b,
  GUILD_FEED_FETCH_SUCCESS: V,
  GUILD_MEMBER_UPDATE: function(e) {
    let {
      guildId: t,
      user: n
    } = e;
    return A.default.getId() === n.id && G.clearGuildId(t)
  },
  GUILD_MUTE_EXPIRED: P,
  GUILD_ROLE_CREATE: P,
  GUILD_ROLE_DELETE: P,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: P,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: P,
  GUILD_ROLE_UPDATE: P,
  GUILD_SCHEDULED_EVENT_CREATE: F,
  GUILD_SCHEDULED_EVENT_DELETE: F,
  GUILD_SCHEDULED_EVENT_UPDATE: F,
  GUILD_TOGGLE_COLLAPSE_MUTED: P,
  GUILD_UPDATE: b,
  IMPERSONATE_STOP: P,
  IMPERSONATE_UPDATE: P,
  LOAD_MESSAGES_SUCCESS: m,
  MESSAGE_ACK: m,
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t
    } = e;
    return G.nonPositionalChannelIdUpdate(t)
  },
  MESSAGE_DELETE_BULK: m,
  MESSAGE_DELETE: m,
  NOTIFICATION_SETTINGS_UPDATE: g,
  OVERLAY_INITIALIZE: g,
  PASSIVE_UPDATE_V1: function(e) {
    return null != e.channels && (G.clearGuildId(e.guildId), !0)
  },
  RECOMPUTE_READ_STATES: g,
  RESORT_THREADS: m,
  SET_RECENTLY_ACTIVE_COLLAPSED: g,
  THREAD_CREATE: y,
  THREAD_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return G.nonPositionalChannelUpdate(t)
  },
  THREAD_LIST_SYNC: P,
  THREAD_MEMBER_UPDATE: K,
  THREAD_MEMBERS_UPDATE: K,
  THREAD_UPDATE: y,
  TRY_ACK: m,
  UPDATE_CHANNEL_DIMENSIONS: m,
  UPDATE_CHANNEL_LIST_SUBTITLES: function(e) {
    let {
      guildId: t
    } = e;
    G.updateSubtitles(t)
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: P,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: P,
  USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
    let {
      userGuildSettings: t
    } = e;
    t.forEach(e => {
      let {
        guild_id: t
      } = e;
      return G.clearGuildId(t)
    })
  },
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: P,
  USER_GUILD_SETTINGS_GUILD_UPDATE: P,
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    var t;
    let {
      settings: n
    } = e;
    if (n.type !== p.UserSettingsTypes.PRELOADED_USER_SETTINGS) return !1;
    let i = null === (t = n.proto.guilds) || void 0 === t ? void 0 : t.guilds,
      o = !1;
    return null != i && Object.keys(i).forEach(e => {
      let t = i[e].guildRecentsDismissedAt;
      null != t && (o = G.updateRecentsCategory(e) || o)
    }), o
  },
  VOICE_CATEGORY_COLLAPSE: v,
  VOICE_CATEGORY_EXPAND: v,
  VOICE_CHANNEL_SELECT: H,
  VOICE_CHANNEL_STATUS_UPDATE: function(e) {
    return G.nonPositionalChannelIdUpdate(e.id)
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e, n = H(), i = new Set;
    for (let {
        channelId: e,
        oldChannelId: o
      }
      of t) null != o && !i.has(o) && (G.nonPositionalChannelIdUpdate(o) && (n = !0), i.add(o)), null != e && !i.has(e) && (G.nonPositionalChannelIdUpdate(e) && (n = !0), i.add(e));
    return n
  },
  WINDOW_FOCUS: U
})