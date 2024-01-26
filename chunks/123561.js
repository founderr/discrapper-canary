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
  O = n("18494"),
  N = n("282109"),
  L = n("449008"),
  D = n("319839"),
  R = n("397336");
let p = null,
  h = null,
  G = new D.default;

function b() {
  let e = O.default.getChannelId(),
    t = O.default.getVoiceChannelId();
  return p = e, h = t, G.clear()
}

function g(e) {
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

function U(e) {
  let {
    channelId: t
  } = e;
  return G.nonPositionalChannelIdUpdate(t)
}

function m() {
  return null != p && G.nonPositionalChannelIdUpdate(p)
}

function K(e) {
  let {
    channel: t
  } = e;
  return G.nonPositionalChannelIdUpdate(t.id)
}

function y(e) {
  let {
    id: t
  } = e;
  return G.nonPositionalChannelIdUpdate(t)
}

function H() {
  let e = O.default.getChannelId(),
    t = O.default.getVoiceChannelId(),
    n = p !== e || h !== t;
  return !!n && (o([p, h, e, t]).uniq().forEach(e => {
    null != e && G.nonPositionalChannelIdUpdate(e) && (n = !0)
  }), p = e, h = t, !0)
}

function B(e) {
  let {
    id: t
  } = e, n = C.default.getChannel(t);
  return null == n ? G.clearGuildId(t) : G.clearGuildId(n.guild_id)
}

function F(e) {
  let {
    guildId: t
  } = e;
  return G.clearGuildId(t)
}

function V() {
  return G.updateSubtitles()
}

function v(e) {
  let {
    guildScheduledEvent: t
  } = e;
  return G.updateSubtitles(t.guild_id)
}
class Y extends l.default.Store {
  initialize() {
    this.waitFor(E.default, A.default, c.default, C.default, T.default, u.default, S.default, d.default, s.default, r.default, I.default, f.default, O.default, N.default, _.default)
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
  BACKGROUND_SYNC: b,
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
  CACHE_LOADED_LAZY: b,
  CATEGORY_COLLAPSE_ALL: P,
  CATEGORY_COLLAPSE: B,
  CATEGORY_EXPAND_ALL: P,
  CATEGORY_EXPAND: B,
  CHANNEL_ACK: U,
  CHANNEL_COLLAPSE: function(e) {
    var t;
    let {
      channelId: n
    } = e;
    return G.clearGuildId(null === (t = C.default.getChannel(n)) || void 0 === t ? void 0 : t.guild_id)
  },
  CHANNEL_CREATE: M,
  CHANNEL_DELETE: M,
  CHANNEL_LOCAL_ACK: U,
  CHANNEL_RTC_UPDATE_CHAT_OPEN: U,
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
  CONNECTION_OPEN: b,
  CURRENT_USER_UPDATE: b,
  DECAY_READ_STATES: b,
  DEV_TOOLS_DESIGN_TOGGLE_SET: b,
  DISABLE_AUTOMATIC_ACK: U,
  DISMISS_FAVORITE_SUGGESTION: function(e) {
    let {
      channelId: t
    } = e;
    return G.nonPositionalChannelIdUpdate(t)
  },
  DRAWER_CLOSE: m,
  DRAWER_OPEN: m,
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
  ENABLE_AUTOMATIC_ACK: U,
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
  GUILD_CREATE: g,
  GUILD_DELETE: g,
  GUILD_FEED_FETCH_SUCCESS: V,
  GUILD_MEMBER_UPDATE: function(e) {
    let {
      guildId: t,
      user: n
    } = e;
    return A.default.getId() === n.id && G.clearGuildId(t)
  },
  GUILD_ROLE_CREATE: P,
  GUILD_ROLE_DELETE: P,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: P,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: P,
  GUILD_ROLE_UPDATE: P,
  GUILD_SCHEDULED_EVENT_CREATE: v,
  GUILD_SCHEDULED_EVENT_DELETE: v,
  GUILD_SCHEDULED_EVENT_UPDATE: v,
  GUILD_TOGGLE_COLLAPSE_MUTED: P,
  GUILD_UPDATE: g,
  IMPERSONATE_STOP: P,
  IMPERSONATE_UPDATE: P,
  LOAD_MESSAGES_SUCCESS: U,
  MESSAGE_ACK: U,
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t
    } = e;
    return G.nonPositionalChannelIdUpdate(t)
  },
  MESSAGE_DELETE_BULK: U,
  MESSAGE_DELETE: U,
  NOTIFICATION_SETTINGS_UPDATE: b,
  OVERLAY_INITIALIZE: b,
  PASSIVE_UPDATE_V1: function(e) {
    return null != e.channels && (G.clearGuildId(e.guildId), !0)
  },
  RECOMPUTE_READ_STATES: b,
  RESORT_THREADS: U,
  SET_RECENTLY_ACTIVE_COLLAPSED: b,
  THREAD_CREATE: K,
  THREAD_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return G.nonPositionalChannelUpdate(t)
  },
  THREAD_LIST_SYNC: P,
  THREAD_MEMBER_UPDATE: y,
  THREAD_MEMBERS_UPDATE: y,
  THREAD_UPDATE: K,
  UPDATE_CHANNEL_DIMENSIONS: U,
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
    if (n.type !== R.UserSettingsTypes.PRELOADED_USER_SETTINGS) return !1;
    let i = null === (t = n.proto.guilds) || void 0 === t ? void 0 : t.guilds,
      o = !1;
    return null != i && Object.keys(i).forEach(e => {
      let t = i[e].guildRecentsDismissedAt;
      null != t && (o = G.updateRecentsCategory(e) || o)
    }), o
  },
  VOICE_CATEGORY_COLLAPSE: F,
  VOICE_CATEGORY_EXPAND: F,
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
  WINDOW_FOCUS: m,
  TRY_ACK: U
})